# Миграция из Oracle в Postgresql

1. Устанавливаем необходимые зависимости и библиотеки
yum install perl-devel perl-DBI perl-CPAN -y

perl -MCPAN -e 'install Test::More'
perl -MCPAN -e 'install Test::NoWarnings'

Устанавливаем драйвер Оракл
export LD_LIBRARY_PATH=/u01/app/oracle/product/12.1.0.2/db_1/lib:/lib:/usr/lib
export ORACLE_HOME=/u01/app/oracle/product/12.1.0.2/db_1
perl -MCPAN -e 'install DBD::Oracle'

2. Собираем и устанавливаем Ora2pg
wget https://github.com/darold/ora2pg/archive/refs/tags/v23.1.tar.gz
tar -xvzf v23.1.tar.gz
cd ora2pg-23.1
perl Makefile.PL
make && make install

3. Копируем файл конфигурации
cp /etc/ora2pg/ora2pg.conf.dist /etc/ora2pg/ora2pg.conf

4. Меняем значения:
ORACLE_HOME     /u01/app/oracle/product/12.1.0.2/db_1
ORACLE_DSN      dbi:Oracle:host=toolset;sid=ORCL;port=1521
ORACLE_USER     APP_JIRA
ORACLE_PWD      DR8KX4Ga74n3

EXPORT_SCHEMA   1

# Oracle schema/owner to use
#SCHEMA         SCHEMA_NAME
SCHEMA          app_jira


5. Выполняем тестовые команды
Проверить версию Oracle:
ora2pg -t SHOW_VERSION

Список всех таблиц БД
ora2pg -t SHOW_TABLE

Создать отчет по схеме
ora2pg -t SHOW_REPORT --estimate_cost export_schema.sh

6. Экспорт
ora2pg --project_base /opt/ora2pg-23.1/data --init_project jira WORKDIR /opt/ora2pg-23.1/data
nohup ora2pg -j 1 -J 6 -t INSERT -o data.sql -b ./data


nohup /opt/ora2pg-23.1/data/jira/import_all.sh -d app_jira -o appjira -U appjira -y -P 6


ora2pg --init_project app_jira
nohup ora2pg -j 2 -J 4 -t INSERT -o data.sql -b ./data

yum install -y devtoolset-8 perl-CPAN perl-DBD-Pg libaio perl-Test-Simple perl-Test-NoWarnings

tar -xvzf v23.1.tar.gz
mv ora2pg-23.1 ora2pg
cd ora2pg
perl Makefile.PL
make && make install

export LD_LIBRARY_PATH=/u01/app/oracle/product/12.1.0.2/db_1/lib:/lib:/usr/lib
export ORACLE_HOME=/u01/app/oracle/product/12.1.0.2/db_1
perl -MCPAN -e 'install DBD::Oracle'

ora2pg --project_base /opt --init_project migration
ora2pg -t SHOW_VERSION -c /opt/migration/config/ora2pg.conf

DB = app_jira
ALTER USER appjira WITH PASSWORD 'DR8KX4Ga74n3';
ALTER DATABASE app_jira OWNER TO appjira;


ALTER USER postgres PASSWORD '<new-password>';

/opt/migration/import_all.sh -d app_jira -o appjira -h localhost -U postgres -s -y

ora2pg -t COPY -o data.sql -b $HOME/migration_project/data -c $HOME/migration_project/config/ora2pg.conf
nohup ora2pg -j 2 -J 12 -t INSERT -o data.sql -b ./data -c ./config/ora2pg.conf

nohup ora2pg -j 2 -J 12 -t COPY -o data.sql -b ./data -c ./config/ora2pg.conf

## Как я переносил базу

export LD_LIBRARY_PATH=/u01/app/oracle/product/12.1.0.2/db_1/lib:/lib:/usr/lib
export ORACLE_HOME=/u01/app/oracle/product/12.1.0.2/db_1

Создаем проект
ora2pg --project_base /opt --init_project migration

cp ~/ora2pg.conf /opt/migration/config/

Экспортим схему
/opt/migration/export_schema.sh

Импортим схему
/opt/migration/import_all.sh -d app_jira -o appjira -h localhost -U postgres -s -y

Фиксим ошибки
sed -i 's/\bgroup\b varchar(255),/"group" varchar(255),/g' ./schema/tables/table.sql
sed -i 's/\buser\b varchar(255)/"user" varchar(255)/g' ./schema/tables/table.sql
sed -i 's/\buser\b varchar(450)/"user" varchar(450)/g' ./schema/tables/table.sql

Переносим данные
cd /opt/migration/
nohup ora2pg -j 2 -J 12 -t COPY -o data.sql -b ./data -c ./config/ora2pg.conf


Конфиг
DROP_FKEY 1



Конфигурация:

ORACLE_HOME     /u01/app/oracle/product/12.1.0.2/db_1
ORACLE_DSN      dbi:Oracle:host=toolset;sid=ORCL;port=1521
ORACLE_USER     APP_JIRA
ORACLE_PWD      DR8KX4Ga74n3

EXPORT_SCHEMA   1
SCHEMA          app_jira
DROP_FKEY       1

NLS_LANG        AMERICAN_AMERICA.CL8MSWIN1251 # AMERICAN / AMERICAN_AMERICA.CL8MSWIN1251 / AMERICAN_AMERICA.AL32UTF8
NLS_NCHAR       AL16UTF16

PG_DSN          dbi:Pg:dbname=app_jira;host=localhost;port=5432
PG_USER         postgres
PG_PWD          DR8KX4Ga74n3
PG_VERSION      9.6



Конфигурируем jira
vim /app/jira/data/jira-config.properties
jira.index.issue.maxqueuesize=4000
jira.index.sharedentity.maxqueuesize=4000



Конфиг базы
vim /app/jira/data/dbconfig.xml
<?xml version="1.0" encoding="UTF-8"?>

<jira-database-config>
  <name>defaultDS</name>
  <delegator-name>default</delegator-name>
  <database-type>postgres72</database-type>
  <schema-name>app_jira</schema-name>
  <jdbc-datasource>
    <url>jdbc:postgresql://127.0.0.1:5432/jira</url>
    <driver-class>org.postgresql.Driver</driver-class>
    <username>postgres</username>
    <password>DR8KX4Ga74n3</password>
    <pool-min-size>20</pool-min-size>
    <pool-max-size>20</pool-max-size>
    <pool-max-wait>30000</pool-max-wait>
    <validation-query>select 1 from dual</validation-query>
    <min-evictable-idle-time-millis>60000</min-evictable-idle-time-millis>
    <time-between-eviction-runs-millis>300000</time-between-eviction-runs-millis>
    <pool-max-idle>20</pool-max-idle>
    <pool-remove-abandoned>true</pool-remove-abandoned>
    <pool-remove-abandoned-timeout>300</pool-remove-abandoned-timeout>
    <pool-test-on-borrow>false</pool-test-on-borrow>
    <pool-test-while-idle>true</pool-test-while-idle>
  </jdbc-datasource>
</jira-database-config>


Конфиг server.xml
vim /app/jira/jira/conf/server.xml

proxyName="jira.dac.phoenixit.ru"


Установка старой Postgresql
wget https://yum.postgresql.org/9.6/redhat/rhel-7-x86_64/postgresql96-server-9.6.24-1PGDG.rhel7.x86_64.rpm
wget https://yum.postgresql.org/9.6/redhat/rhel-7-x86_64/postgresql96-9.6.24-1PGDG.rhel7.x86_64.rpm
wget https://yum.postgresql.org/9.6/redhat/rhel-7-x86_64/postgresql96-libs-9.6.24-1PGDG.rhel7.x86_64.rpm

yum localinstall postgresql96-libs-9.6.24-1PGDG.rhel7.x86_64.rpm
yum localinstall postgresql96-9.6.24-1PGDG.rhel7.x86_64.rpm
yum localinstall postgresql96-server-9.6.24-1PGDG.rhel7.x86_64.rpm

/usr/pgsql-9.6/bin/postgresql96-setup initdb

systemctl status postgresql-9.6.service
systemctl start postgresql-9.6.service
systemctl stop postgresql-9.6.service

su - postgres
vim /var/lib/pgsql/9.6/data/pg_hba.conf

# "local" is for Unix domain socket connections only
local   all             all                                     trust
#local  all             postgres                                md5
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 trust
host    all             all             0.0.0.0/0               md5

vim /var/lib/pgsql/9.6/data/postgresql.conf

max_connections = 200
shared_buffers = 6912MB
effective_cache_size = 20736MB
maintenance_work_mem = 1728MB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
default_statistics_target = 100
random_page_cost = 4
effective_io_concurrency = 2
work_mem = 17694kB
min_wal_size = 1GB
max_wal_size = 4GB
max_worker_processes = 3
max_parallel_workers_per_gather = 2



CREATE DATABASE jira WITH ENCODING 'UTF8' LC_COLLATE='C' LC_CTYPE='C' TEMPLATE=template0 OWNER postgres;