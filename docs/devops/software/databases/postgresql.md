# Postgresql

Показать базы данных:
```
\l
or
\l+
```

Показать пользователей баз данных:
```
\du
or
\du+
```

Установить пользователю пароль:
```
ALTER USER user_name WITH PASSWORD 'new_password';
```

Отозвать разрешения
```
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM <my_user>;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM <my_user>;
REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public FROM <my_user>;
REVOKE ALL PRIVILEGES ON DATABASE <my_db> FROM <my_user>;
```

Посмотреть путь до файла:
```sql
SHOW hba_file; 
```

Доступ для всех хостов
```
host    all     all     0.0.0.0/0     md5
```

Какие-то еще команды:
``` sql
GRANT USAGE ON SCHEMA rdmrwa_outrrm TO rwa_user;
GRANT ALL ON ALL TABLES IN SCHEMA rdmrwa_outrrm TO rwa_user;
GRANT ALL ON ALL SEQUENCES IN SCHEMA rdmrwa_outrrm TO rwa_user;
ALTER DEFAULT PRIVILEGES FOR ROLE rwa_user IN SCHEMA rdmrwa_outrrm GRANT ALL ON TABLES TO rwa_user;
ALTER DEFAULT PRIVILEGES FOR ROLE rwa_user IN SCHEMA rdmrwa_outrrm GRANT ALL ON SEQUENCES TO rwa_user;
```
