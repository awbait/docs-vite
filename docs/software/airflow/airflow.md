---
lang: ru-RU
title: Установка
description: Description of this page
---

# Airflow install

Первым делом устанавливаем Python 3.7-3.10 (на момент написания документа)
[Установка Python 3.10.x](../python/python.md)

Устанавливаем:
```bash
pip3 install "apache-airflow[celery]==2.4.1" --constraint "https://raw.githubusercontent.com/apache/airflow/constraints-2.4.1/constraints-3.7.txt"
```

Создаём пользователя:
```bash
useradd airflow
```

Файлы служб Airflow можно найти по ссылке:
https://github.com/apache/airflow/tree/master/scripts/systemd

Создадим временный каталог:
```bash
mkdir /tmp/airflow-daemon
cd /tmp/airflow-daemon
```

Загружаем конфиги:
```bash
wget https://raw.githubusercontent.com/apache/airflow/master/scripts/systemd/airflow
wget https://raw.githubusercontent.com/apache/airflow/master/scripts/systemd/airflow-scheduler.service
wget https://raw.githubusercontent.com/apache/airflow/master/scripts/systemd/airflow-webserver.service
wget https://raw.githubusercontent.com/apache/airflow/master/scripts/systemd/airflow.conf
```

Копируем файлы по папкам:
```bash
cp *.service /usr/lib/systemd/system/
cp airflow.conf /usr/lib/tmpfiles.d/
cp airflow /etc/sysconfig/
```

Создаём необходимые каталоги:
```bash
mkdir /run/airflow
chown -R airflow:airflow /run/airflow
chmod -R 755 /run/airflow
```

```bash
mkdir /opt/airflow
chown -R airflow:airflow /opt/airflow
chmod -R 775 /opt/airflow
```

Экспортируем переменную домашней директории:
```bash
export AIRFLOW_HOME=/opt/airflow
```

Инициализируем базу данных:
```bash
airflow db init
```

Я использую postgresql, при инициализации получил ошибку, потому:
Устанавливаем зависисмость:
```bash
pip3 install psycopg2-binary
```

И редактируем конфиг в /opt/airflow
```bash
vim /opt/airflow/airflow.cfg
```
Настраиваем строку подключения
```
sql_alchemy_conn = postgresql+psycopg2://<user>:<password>@<host>/<db>
```

Повторяем команду инициализации
```bash
airflow db init
```

Ищем куда установили airflow:
```bash
which airflow
```

Изменяем наши демоны:
```bash
vim /usr/lib/systemd/system/airflow-scheduler.service
```

В строке ExecStart правим путь до нашего файла:
```
ExecStart=/usr/local/bin/airflow scheduler
```

Аналогично и тут:
```bash
vim /usr/lib/systemd/system/airflow-webserver.service
```

Изменяем системную конфигурацию:
```bash
vim /etc/sysconfig/airflow
```

```
AIRFLOW_CONFIG=/opt/airflow/airflow.cfg
AIRFLOW_HOME=/opt/airflow
```

Включаем автозагрузку и запускаем демоны:
```bash
systemctl enable airflow-scheduler --now
systemctl enable airflow-webserver --now
```

Готово.