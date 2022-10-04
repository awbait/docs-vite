# Build python 3.10.x from source

## Build OpenSSL
```bash
wget https://www.openssl.org/source/openssl-1.1.1q.tar.gz
```
```bash
cd /opt
```
```bash
tar -xf openssl-1.1.1q.tar.gz
```
```bash
cd openssl-1.1.1q
```
Конфигурируем:
```bash
./config --prefix=/opt/openssl --openssldir=/opt/openssl shared zlib
```
Собираем и устанавливаем:
```bash
make
make install
```

Скорее всего понадобятся какие-либо зависимости

## Build Python 3.10.x
Устанавливаем необходимые зависимости:
```bash
yum -y install epel-release
yum -y install openssl-devel libffi-devel bzip2-devel
yum -y groupinstall "Development Tools"
```

Скачиваем необходимую версию:
```bash
cd /opt
```
```bash
wget https://www.python.org/ftp/python/3.10.7/Python-3.10.7.tgz
```

Распаковываем архив:
```bash
tar xvf Python-3.10.7.tgz
```
```bash
cd Python-3.10.7
```
Редактируем конфигурацию python
```bash
vim Modules/Setup
```
::: info
Возможно установленный openssl можно указать из системы, проверить можно командой. Иначе устанавливаем по инструкции сначала поста.

```bash
openssl version -d
```
:::
Находим данный блок кода и приводим к такому виду:
```
# Socket module helper for socket(2)
_socket socketmodule.c

# Socket module helper for SSL support; you must comment out the other
# socket line above, and edit the OPENSSL variable:
OPENSSL=/opt/openssl
 _ssl _ssl.c \
     -I$(OPENSSL)/include -L$(OPENSSL)/lib \
     -lssl -lcrypto
_hashlib _hashopenssl.c \
     -I$(OPENSSL)/include -L$(OPENSSL)/lib \
     -lcrypto
```
Экспортим переменную:
```bash
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/opt/openssl/lib
```
Конфигурируем с OpenSSL:
```bash
./configure --enable-optimizations --with-openssl=/opt/openssl
```
Собираем
```bash
make altinstall
```
Проверить установлен ли модуль SSL:
```bash
python3 -c "import ssl; print(ssl.OPENSSL_VERSION)"
```
Переключаем версии для комманд:
```bash
ln -fs /usr/local/bin/python3.10 /usr/bin/python3
ln -fs /usr/local/bin/pip3.10 /usr/bin/pip3
```

Готово.
