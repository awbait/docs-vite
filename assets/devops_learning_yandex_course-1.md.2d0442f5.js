import{_ as s,c as n,o as a,a as p}from"./app.11df5aa4.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"devops/learning/yandex/course-1.md","lastUpdated":1665757631000}'),l={name:"devops/learning/yandex/course-1.md"},e=p(`<p>\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u0438 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C Yandex Cloud (CLI): <a href="https://cloud.yandex.ru/docs/cli/quickstart#install" target="_blank" rel="noreferrer">https://cloud.yandex.ru/docs/cli/quickstart#install</a></p><p>\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yc init</span></span>
<span class="line"></span></code></pre></div><p>\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0441\u043A \u0438\u0437 \u043E\u0431\u0440\u0430\u0437\u0430 \u0441 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 magento</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yc compute disk create \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--zone ru-central1-a \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name web-store-lab-dataplatform \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--source-image-id fd8afehd5a5asg351p3n \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--folder-id b1gqkcomt4f01nrc5mth // </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">your-yc-folder-id</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u0414\u043E\u043B\u0436\u043D\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0445\u043E\u0436\u0435\u0435:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">...1s...6s...11s...done (12s)</span></span>
<span class="line"><span style="color:#A6ACCD;">id: fhmelmjrf0b536tatj45</span></span>
<span class="line"><span style="color:#A6ACCD;">folder_id: b1gqkcomt4f01nrc5mth</span></span>
<span class="line"><span style="color:#A6ACCD;">created_at: &quot;2022-10-11T09:27:13Z&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">name: web-store-lab-dataplatform</span></span>
<span class="line"><span style="color:#A6ACCD;">type_id: network-hdd</span></span>
<span class="line"><span style="color:#A6ACCD;">zone_id: ru-central1-a</span></span>
<span class="line"><span style="color:#A6ACCD;">size: &quot;67645734912&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">block_size: &quot;4096&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">product_ids:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - f2e2omleq2p9hqm60avu</span></span>
<span class="line"><span style="color:#A6ACCD;">status: READY</span></span>
<span class="line"><span style="color:#A6ACCD;">source_image_id: fd8afehd5a5asg351p3n</span></span>
<span class="line"><span style="color:#A6ACCD;">disk_placement_policy: {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u043C\u0430\u0448\u0438\u043D\u0443:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yc compute instance create \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	--name magento \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	--zone ru-central1-a \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	--network-interface subnet-name=default-ru-central1-a,nat-ip-version=ipv4 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	--hostname ya-sample-store \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	--use-boot-disk disk-name=web-store-lab-dataplatform \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	--folder-id b1gqkcomt4f01nrc5mth \\ // </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">your-yc-folder-id</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	--ssh-key </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh/id_rsa.pub</span></span>
<span class="line"></span></code></pre></div><p>\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">...1s...6s...12s...17s...22s...done (23s)</span></span>
<span class="line"><span style="color:#A6ACCD;">id: fhmu5nmunsve6aqst3fp</span></span>
<span class="line"><span style="color:#A6ACCD;">folder_id: b1gqkcomt4f01nrc5mth</span></span>
<span class="line"><span style="color:#A6ACCD;">created_at: &quot;2022-10-11T09:31:54Z&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">name: magento</span></span>
<span class="line"><span style="color:#A6ACCD;">zone_id: ru-central1-a</span></span>
<span class="line"><span style="color:#A6ACCD;">platform_id: standard-v2</span></span>
<span class="line"><span style="color:#A6ACCD;">resources:</span></span>
<span class="line"><span style="color:#A6ACCD;">  memory: &quot;2147483648&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  cores: &quot;2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  core_fraction: &quot;100&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">status: RUNNING</span></span>
<span class="line"><span style="color:#A6ACCD;">metadata_options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  gce_http_endpoint: ENABLED</span></span>
<span class="line"><span style="color:#A6ACCD;">  aws_v1_http_endpoint: ENABLED</span></span>
<span class="line"><span style="color:#A6ACCD;">  gce_http_token: ENABLED</span></span>
<span class="line"><span style="color:#A6ACCD;">  aws_v1_http_token: ENABLED</span></span>
<span class="line"><span style="color:#A6ACCD;">boot_disk:</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: READ_WRITE</span></span>
<span class="line"><span style="color:#A6ACCD;">  device_name: fhmelmjrf0b536tatj45</span></span>
<span class="line"><span style="color:#A6ACCD;">  disk_id: fhmelmjrf0b536tatj45</span></span>
<span class="line"><span style="color:#A6ACCD;">network_interfaces:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - index: &quot;0&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    mac_address: d0:0d:1e:2d:ed:eb</span></span>
<span class="line"><span style="color:#A6ACCD;">    subnet_id: e9bnj1d35nbr5hmnch0i</span></span>
<span class="line"><span style="color:#A6ACCD;">    primary_v4_address:</span></span>
<span class="line"><span style="color:#A6ACCD;">      address: 10.128.0.14</span></span>
<span class="line"><span style="color:#A6ACCD;">      one_to_one_nat:</span></span>
<span class="line"><span style="color:#A6ACCD;">        address: 178.154.203.129</span></span>
<span class="line"><span style="color:#A6ACCD;">        ip_version: IPV4</span></span>
<span class="line"><span style="color:#A6ACCD;">fqdn: ya-sample-store.ru-central1.internal</span></span>
<span class="line"><span style="color:#A6ACCD;">scheduling_policy: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">network_settings:</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: STANDARD</span></span>
<span class="line"><span style="color:#A6ACCD;">placement_policy: {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u0412\u041C \u043F\u043E SSH:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh yc-user@</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ip-address-vm</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u0430\u043F\u0438\u0441\u044C \u0432 \u0444\u0430\u0439\u043B hosts</li><li>\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u0431\u0430\u0437\u0435 \u0447\u0435\u0440\u0435\u0437 DBeaver</li><li>\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u043A\u043B\u0430\u0441\u0442\u0435\u0440 Managed Service for MySQL</li></ul><p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0430 Managed Service for Kafka \u0441 \u043F\u0440\u0430\u0432\u0430\u043C\u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yc managed-kafka user create inventory --cluster-name inventory-cluster --folder-id b1gqkcomt4f01nrc5mth --password=pass@word1 --permission topic=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,role=ACCESS_ROLE_ADMIN</span></span>
<span class="line"></span></code></pre></div><p>\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0432 \u043E\u0442\u0432\u0435\u0442:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">done (17s)</span></span>
<span class="line"><span style="color:#A6ACCD;">name: inventory</span></span>
<span class="line"><span style="color:#A6ACCD;">cluster_id: c9qi19m4d712t15hk0u2</span></span>
<span class="line"><span style="color:#A6ACCD;">permissions:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - topic_name: &#39;*&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    role: ACCESS_ROLE_ADMIN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u0444\u043B\u0430\u0433\u0438 \u0434\u043B\u044F \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u043B\u0441\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043F\u0438\u043A \u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u0440\u0435\u0436\u0438\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F API \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0435</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yc managed-kafka cluster update --id c9qi19m4d712t15hk0u2 --auto-create-topics-enable --unmanaged-topics</span></span>
<span class="line"></span></code></pre></div><p>\u041F\u043E\u043B\u0443\u0447\u0438\u043B\u0438:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">done (31s)</span></span>
<span class="line"><span style="color:#A6ACCD;">id: c9qi19m4d712t15hk0u2</span></span>
<span class="line"><span style="color:#A6ACCD;">folder_id: b1gqkcomt4f01nrc5mth</span></span>
<span class="line"><span style="color:#A6ACCD;">created_at: &quot;2022-10-11T13:33:23.331689Z&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">name: inventory-cluster</span></span>
<span class="line"><span style="color:#A6ACCD;">environment: PRODUCTION</span></span>
<span class="line"><span style="color:#A6ACCD;">network_id: enpeal21nl4p8i87409d</span></span>
<span class="line"><span style="color:#A6ACCD;">health: ALIVE</span></span>
<span class="line"><span style="color:#A6ACCD;">status: RUNNING</span></span>
<span class="line"><span style="color:#A6ACCD;">maintenance_window:</span></span>
<span class="line"><span style="color:#A6ACCD;">  anytime: {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A Kafka \u0441 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430: \u0421\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u043C Conductor Desktop, \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0435\u043C\u0441\u044F, \u0438 \u0434\u0430\u043B\u0435\u0435 \u0432\u0432\u043E\u0434\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F:</p><p><img src="https://i.imgur.com/v6hqxW5.png" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">security.protocol=SASL_SSL</span></span>
<span class="line"><span style="color:#A6ACCD;">sasl.mechanism=SCRAM-SHA-512</span></span>
<span class="line"><span style="color:#A6ACCD;">sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username=&quot;inventory&quot; password=&quot;pass@word1&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">ssl.truststore.location=C:/dev/JavaKeyStore/client.truststore.jks</span></span>
<span class="line"><span style="color:#A6ACCD;">ssl.truststore.password=pass@word1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>client.truststore.jks</code> \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0437 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u044F \u0434\u043B\u044F YC <a href="https://github.com/MaxKhlupnov/yc-cdc-datamart/tree/master/debezium-cdc" target="_blank" rel="noreferrer">https://github.com/MaxKhlupnov/yc-cdc-datamart/tree/master/debezium-cdc</a><img src="https://i.imgur.com/CNP2S2y.png" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir -Force $HOME\\.clickhouse; \`</span></span>
<span class="line"><span style="color:#A6ACCD;">(Invoke-WebRequest https://storage.yandexcloud.net/cloud-certs/CA.pem -UseBasicParsing).RawContent.Split([Environment]::NewLine)[-31..-1] \`</span></span>
<span class="line"><span style="color:#A6ACCD;">  | Out-File -Encoding ASCII $HOME\\.clickhouse\\YandexCA.crt; \`</span></span>
<span class="line"><span style="color:#A6ACCD;">Import-Certificate \`</span></span>
<span class="line"><span style="color:#A6ACCD;">  -FilePath  $HOME\\.clickhouse\\YandexCA.crt \`</span></span>
<span class="line"><span style="color:#A6ACCD;">  -CertStoreLocation cert:\\CurrentUser\\Root</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,27),o=[e];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const D=s(l,[["render",t]]);export{u as __pageData,D as default};
