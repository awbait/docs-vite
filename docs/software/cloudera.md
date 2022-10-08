# Cloudera install

## Подготавливаем виртуальные машины (конфигурируем)

```bash
hostnamectl set-hostname bi-big-dtn1
```

```bash
vi /etc/sysconfig/network-scripts/ifcfg-ens192
```
```
TYPE=Ethernet
IPADDR=192.168.233.65
GATEWAY=192.168.233.1
PREFIX=24
NAME=ens192
DEVICE=ens192
ONBOOT=yes
IPV6INIT=no
BOOTPROTO=none
```

```json
{
  hello: 'priv',
  obj: {
    one: 'two'
  },
  arr: []
}
```

### Настройка NTP
```bash
vim /etc/ntp.conf
```
```
server ntp1.vniiftri.ru
server ntp2.vniiftri.ru
server ntp3.vniiftri.ru
```
Устанавливаем и включаем NTP
```bash
yum install -y ntp
chkconfig ntpd on
```
Стартуем сервис
```bash
systemctl start ntpd
```
Пересинхронизируем
```bash
ntpdate ntp1.vniiftri.ru
hwclock --systohc
```

### Настройка /etc/hosts
```bash
vim /etc/hosts
```
```
192.168.x.x vm-dtn1.domain.ru vm-dtn1
192.168.x.x vm-dtn2.domain.ru vm-dtn2
192.168.x.x vm-dtn3.domain.ru vm-dtn3
192.168.x.x vm-dtn4.domain.ru vm-dtn4
192.168.x.x vm-dtn5.domain.ru vm-dtn5
192.168.x.x vm-dtn6.domain.ru vm-dtn6
192.168.x.x vm-nmd1.domain.ru vm-nmd1
192.168.x.x vm-nmd2.domain.ru vm-nmd2
192.168.x.x vm-infr1.domain.ru vm-infr1
192.168.x.x vm-infr2.domain.ru vm-infr2
```

### Необходимые преднастройки
Проверить существующую настройку
```bash
cat /proc/sys/vm/swappiness
```
```bash
sysctl -w vm.swappiness=10
```
Добавляем переменную в файл, чтобы при перезагрузке значение сохранялось
```bash
vim /etc/sysctl.conf
```
vm.swappiness = 10
```
Перезагрузка переменных из файла
```bash
sysctl -p
```

```bash
echo never > /sys/kernel/mm/transparent_hugepage/defrag
echo never > /sys/kernel/mm/transparent_hugepage/enabled
```
Добавляем строки ниже в файл, так же чтобы при перезагрузке сохранялось необходимое значение
```bash
vim /etc/rc.local
```
```bash
if test -f /sys/kernel/mm/transparent_hugepage/enabled; then
  echo never > /sys/kernel/mm/transparent_hugepage/enabled
  echo never > /sys/kernel/mm/transparent_hugepage/defrag
fi
```

Конфигурируем репозиторий
```
[cloudera-manager]
name = Cloudera Manager, Version 6.3.4
baseurl = https://login:password@archive.cloudera.com/p/cm6/6.3.4/redhat7/yum
gpgcheck = 1
```

Продолжение следует...
