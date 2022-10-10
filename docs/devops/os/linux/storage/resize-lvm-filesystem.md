# Resize LVM Filesystem
Устанавливаем утилиту:
``` bash
yum install -y cloud-utils-growpart
```
### 1. Проверяем диск и структуру
Смотрим какой диск нужно расширить:
```
[root@test-bi opt]# lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0   10G  0 disk
├─sda1            8:1    0    1G  0 part /boot
└─sda2            8:2    0    9G  0 part
  ├─centos-root 253:0    0  8.4G  0 lvm  /
  └─centos-swap 253:1    0  616M  0 lvm  [SWAP]
```
Коневая система, которую я хочу расширить находится в _**/dev/sda2**_
### 2. Расширяем размер диска
Проверить имена устройств SCSI:
```bash
ls /sys/class/scsi_device/
```
Получаем:
```
0:0:0:0  3:0:0:0
```
Необходимо просканировать шину SCSI (можно заменить значение 0:0:0:0, слеши обязательны):
``` bash
echo 1 > /sys/class/scsi_device/0\:0\:0\:0/device/rescan
```
Проверяем:
```
[root@test-bi opt]# lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0   30G  0 disk
├─sda1            8:1    0    1G  0 part /boot
└─sda2            8:2    0    9G  0 part
  ├─centos-root 253:0    0  8.4G  0 lvm  /
  └─centos-swap 253:1    0  616M  0 lvm  [SWAP]
```
Расширяем:
```bash
growpart /dev/sda 2
```
Получаем:
```
CHANGED: partition=2 start=2099200 old: size=18872320 end=20971520 new: size=60815327 end=62914527
```
Проверяем:
```
[root@test-bi opt]# lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0   30G  0 disk
├─sda1            8:1    0    1G  0 part /boot
└─sda2            8:2    0   29G  0 part
  ├─centos-root 253:0    0  8.4G  0 lvm  /
  └─centos-swap 253:1    0  616M  0 lvm  [SWAP]
```
### 3. Расширяем логический том чтобы он занимал все пространство
Выполняем:
```
pvresize /dev/sda2

Получили:
Physical volume "/dev/sda2" changed
1 physical volume(s) resized or updated / 0 physical volume(s) not resized
```
Получить имя логического тома, который я буду расширять:
```
df -hT | grep root

Получили:
/dev/mapper/centos-root ext4       28G  4.0G   23G  15% /
```
Изменяем размер логического тома:
```
lvextend -r -l +100%FREE /dev/mapper/centos-root

Получили:

Size of logical volume centos/root changed from 8.39 GiB (2149 extents) to 28.39 GiB (7269 extents).
Logical volume centos/root successfully resized.
resize2fs 1.42.9 (28-Dec-2013)
Filesystem at /dev/mapper/centos-root is mounted on /; on-line resizing requiredold_desc_blocks = 2, new_desc_blocks = 4
The filesystem on /dev/mapper/centos-root is now 7443456 blocks long.
```
Таким образом мы расширили наш том на все свободное пространство, однако мы можем расширить его на заданный размер командой:
``` bash
lvextend -r -L +20G /dev/mapper/centos-root
```

Готово. 👍