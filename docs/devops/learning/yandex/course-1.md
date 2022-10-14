Устанавливаем и инициализируем Yandex Cloud (CLI):
https://cloud.yandex.ru/docs/cli/quickstart#install

Инициализируем командой:
```bash
yc init
```

Создаём виртуальный диск из образа с предварительно настроенной платформой интернет-магазина magento
```bash
yc compute disk create \
--zone ru-central1-a \
--name web-store-lab-dataplatform \
--source-image-id fd8afehd5a5asg351p3n \
--folder-id b1gqkcomt4f01nrc5mth // <your-yc-folder-id>
```
Должны получить что-то похожее:
```
...1s...6s...11s...done (12s)
id: fhmelmjrf0b536tatj45
folder_id: b1gqkcomt4f01nrc5mth
created_at: "2022-10-11T09:27:13Z"
name: web-store-lab-dataplatform
type_id: network-hdd
zone_id: ru-central1-a
size: "67645734912"
block_size: "4096"
product_ids:
  - f2e2omleq2p9hqm60avu
status: READY
source_image_id: fd8afehd5a5asg351p3n
disk_placement_policy: {}
```
Создаём виртуальную машину:
```bash
yc compute instance create \
	--name magento \
	--zone ru-central1-a \
	--network-interface subnet-name=default-ru-central1-a,nat-ip-version=ipv4 \
	--hostname ya-sample-store \
	--use-boot-disk disk-name=web-store-lab-dataplatform \
	--folder-id b1gqkcomt4f01nrc5mth \ // <your-yc-folder-id>
	--ssh-key ~/.ssh/id_rsa.pub
```
Получаем:
```
...1s...6s...12s...17s...22s...done (23s)
id: fhmu5nmunsve6aqst3fp
folder_id: b1gqkcomt4f01nrc5mth
created_at: "2022-10-11T09:31:54Z"
name: magento
zone_id: ru-central1-a
platform_id: standard-v2
resources:
  memory: "2147483648"
  cores: "2"
  core_fraction: "100"
status: RUNNING
metadata_options:
  gce_http_endpoint: ENABLED
  aws_v1_http_endpoint: ENABLED
  gce_http_token: ENABLED
  aws_v1_http_token: ENABLED
boot_disk:
  mode: READ_WRITE
  device_name: fhmelmjrf0b536tatj45
  disk_id: fhmelmjrf0b536tatj45
network_interfaces:
  - index: "0"
    mac_address: d0:0d:1e:2d:ed:eb
    subnet_id: e9bnj1d35nbr5hmnch0i
    primary_v4_address:
      address: 10.128.0.14
      one_to_one_nat:
        address: 178.154.203.129
        ip_version: IPV4
fqdn: ya-sample-store.ru-central1.internal
scheduling_policy: {}
network_settings:
  type: STANDARD
placement_policy: {}
```
Подключаемся к ВМ по SSH:
```bash
ssh yc-user@<ip-address-vm>
```
- Добавляем запись в файл hosts
- Подключаемся к базе через DBeaver
- Создаём кластер Managed Service for MySQL

Создать пользователя кластера Managed Service for Kafka с правами администратора:
```bash
yc managed-kafka user create inventory --cluster-name inventory-cluster --folder-id b1gqkcomt4f01nrc5mth --password=pass@word1 --permission topic="*",role=ACCESS_ROLE_ADMIN
```
Получаем в ответ:
```
done (17s)
name: inventory
cluster_id: c9qi19m4d712t15hk0u2
permissions:
  - topic_name: '*'
    role: ACCESS_ROLE_ADMIN
```
Устанавливаем флаги для кластера, чтобы для каждой таблицы автоматически создавался собственный топик и включаем режим использования API внешних приложений для создания данных в кластере
```bash
yc managed-kafka cluster update --id c9qi19m4d712t15hk0u2 --auto-create-topics-enable --unmanaged-topics
```
Получили:
```
done (31s)
id: c9qi19m4d712t15hk0u2
folder_id: b1gqkcomt4f01nrc5mth
created_at: "2022-10-11T13:33:23.331689Z"
name: inventory-cluster
environment: PRODUCTION
network_id: enpeal21nl4p8i87409d
health: ALIVE
status: RUNNING
maintenance_window:
  anytime: {}
```

Подключение к Kafka с локального компьютера:
Скачиваем Conductor Desktop, авторизуемся, и далее вводим данные для подключения:

![](https://i.imgur.com/v6hqxW5.png)

```
security.protocol=SASL_SSL
sasl.mechanism=SCRAM-SHA-512
sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username="inventory" password="pass@word1";
ssl.truststore.location=C:/dev/JavaKeyStore/client.truststore.jks
ssl.truststore.password=pass@word1
```
`client.truststore.jks` можно получить из репозитория для YC https://github.com/MaxKhlupnov/yc-cdc-datamart/tree/master/debezium-cdc
![](https://i.imgur.com/CNP2S2y.png)

```
mkdir -Force $HOME\.clickhouse; `
(Invoke-WebRequest https://storage.yandexcloud.net/cloud-certs/CA.pem -UseBasicParsing).RawContent.Split([Environment]::NewLine)[-31..-1] `
  | Out-File -Encoding ASCII $HOME\.clickhouse\YandexCA.crt; `
Import-Certificate `
  -FilePath  $HOME\.clickhouse\YandexCA.crt `
  -CertStoreLocation cert:\CurrentUser\Root
```



