import{_ as s,c as a,o as n,d as l}from"./app.3b0e62df.js";const F=JSON.parse('{"title":"Oracle","description":"","frontmatter":{},"headers":[{"level":3,"title":"Commands","slug":"commands","link":"#commands","children":[]},{"level":3,"title":"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430","slug":"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430","link":"#\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430","children":[]},{"level":3,"title":"Prometheus exporter","slug":"prometheus-exporter","link":"#prometheus-exporter","children":[]},{"level":3,"title":"Extra","slug":"extra","link":"#extra","children":[]}],"relativePath":"software/databases/oracle.md"}'),p={name:"software/databases/oracle.md"},o=l(`<h1 id="oracle" tabindex="-1">Oracle <a class="header-anchor" href="#oracle" aria-hidden="true">#</a></h1><h3 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h3><p>\u0415\u0441\u043B\u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430, \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443:</p><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#A6ACCD;">sqlplus </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> sysdba</span></span>
<span class="line"><span style="color:#A6ACCD;">startup</span></span>
<span class="line"></span></code></pre></div><p>\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C listner:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">lsnrctl start</span></span>
<span class="line"></span></code></pre></div><p>\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043B\u0438 \u0431\u0430\u0437\u0430:</p><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> v$instance;</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">select value from v$parameter where name=&#39;service_names&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:</p><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#A6ACCD;">sqlplus </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> sysdba</span></span>
<span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> user </span><span style="color:#82AAFF;">USER_NAME</span><span style="color:#A6ACCD;"> identified </span><span style="color:#F78C6C;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PASSWORD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430" tabindex="-1">\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 <a class="header-anchor" href="#\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430" aria-hidden="true">#</a></h3><p><a href="https://oracle-base.com/articles/19c/oracle-db-19c-installation-on-oracle-linux-7" target="_blank" rel="noreferrer">https://oracle-base.com/articles/19c/oracle-db-19c-installation-on-oracle-linux-7</a></p><h3 id="prometheus-exporter" tabindex="-1">Prometheus exporter <a class="header-anchor" href="#prometheus-exporter" aria-hidden="true">#</a></h3><p>\u0421\u043E\u0437\u0434\u0430\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u0432\u044B\u0434\u0430\u0451\u043C \u043F\u0440\u0430\u0432\u0430:</p><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#A6ACCD;">sqlplus </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> sysdba</span></span>
<span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> user exporter identified </span><span style="color:#F78C6C;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PASSWORD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">grant</span><span style="color:#A6ACCD;"> sysdba </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> exporter;</span></span>
<span class="line"><span style="color:#F78C6C;">grant</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">session</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> exporter;</span></span>
<span class="line"></span></code></pre></div><p>\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B Prometheus Exporter (\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C exporter):</p><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.dba_temp_files </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.dba_tablespaces </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter;  </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.dba_tablespace_usage_metrics </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter;  </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.dba_data_files </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.dba_free_space </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$process </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$</span><span style="color:#F78C6C;">session</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$session_longops </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$sysstat </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$parameter </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$instance </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$datafile </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$system_wait_class </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$resource_limit </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$waitclassmetric </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$asm_file </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$asm_diskgroup </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$asm_diskgroup_stat </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$asm_disk_stat </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.v_$asm_alias </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter; </span></span>
<span class="line"><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> sys.gv_$sort_segment </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> exporter;</span></span>
<span class="line"></span></code></pre></div><h3 id="extra" tabindex="-1">Extra <a class="header-anchor" href="#extra" aria-hidden="true">#</a></h3><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> sys_context(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">userenv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">instance_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> dual;</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">show parameter listener;</span></span>
<span class="line"><span style="color:#A6ACCD;">alter system set local_listener=&#39;(ADDRESS = (PROTOCOL = TCP)(HOST = 127.0.0.1)(PORT = 1521))&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">alter system register;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,21),e=[o];function C(r,t,c,y,A,D){return n(),a("div",null,e)}const d=s(p,[["render",C]]);export{F as __pageData,d as default};
