import{_ as s,c as a,o as e,a as n}from"./app.852d0fdd.js";const b=JSON.parse('{"title":"Postgresql","description":"","frontmatter":{},"headers":[{"level":3,"title":"1. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0447\u0430\u0440\u0442\u0430","slug":"_1-\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430-\u0447\u0430\u0440\u0442\u0430","link":"#_1-\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430-\u0447\u0430\u0440\u0442\u0430","children":[]},{"level":3,"title":"2. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0431\u0430\u0437\u0435 \u0434\u0430\u043D\u043D\u044B\u0445:","slug":"_2-\u043F\u043E\u0434\u043An\u044E\u0447\u0435\u043D\u0438\u0435-\u043A-\u0431\u0430\u0437\u0435-\u0434\u0430\u043D\u043D\u044B\u0445","link":"#_2-\u043F\u043E\u0434\u043An\u044E\u0447\u0435\u043D\u0438\u0435-\u043A-\u0431\u0430\u0437\u0435-\u0434\u0430\u043D\u043D\u044B\u0445","children":[]},{"level":3,"title":"3. \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0430\u0440\u0442\u0430:","slug":"_3-\u043E\u0431\u043D\u043E\u0432n\u0435\u043D\u0438\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439-\u0438-\u0443\u0441\u0442\u0430\u043D\u043E\u0432n\u0435\u043D\u043D\u043E\u0433\u043E-\u0447\u0430\u0440\u0442\u0430","link":"#_3-\u043E\u0431\u043D\u043E\u0432n\u0435\u043D\u0438\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439-\u0438-\u0443\u0441\u0442\u0430\u043D\u043E\u0432n\u0435\u043D\u043D\u043E\u0433\u043E-\u0447\u0430\u0440\u0442\u0430","children":[]},{"level":3,"title":"4. \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0440\u0442:","slug":"_4-\u0443\u0434\u0430n\u0438\u0442\u044C-\u0447\u0430\u0440\u0442","link":"#_4-\u0443\u0434\u0430n\u0438\u0442\u044C-\u0447\u0430\u0440\u0442","children":[]}],"relativePath":"devops/kubernetes/charts/postgresql.md","lastUpdated":1665449255000}'),l={name:"devops/kubernetes/charts/postgresql.md"},t=n(`<h1 id="postgresql" tabindex="-1">Postgresql <a class="header-anchor" href="#postgresql" aria-hidden="true">#</a></h1><p>!!! github &quot;\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0447\u0430\u0440\u0442 [GitHub]&quot; [github]: <a href="https://github.com/bitnami/charts/tree/master/bitnami/postgresql" target="_blank" rel="noreferrer">https://github.com/bitnami/charts/tree/master/bitnami/postgresql</a></p><p>\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0439 \u0447\u0430\u0440\u0442:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">wget -O - https://github.com/awbait/infrastructure-as-code/archive/master.tar.gz </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> tar -xz --strip=3 </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">infrastructure-as-code-master/kubernetes/charts/deploy-postgresql</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="_1-\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430-\u0447\u0430\u0440\u0442\u0430" tabindex="-1">1. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0447\u0430\u0440\u0442\u0430 <a class="header-anchor" href="#_1-\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430-\u0447\u0430\u0440\u0442\u0430" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">helm install postgresql deploy-postgresql/ -n postgresql --create-namespace</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-\u043F\u043E\u0434\u043An\u044E\u0447\u0435\u043D\u0438\u0435-\u043A-\u0431\u0430\u0437\u0435-\u0434\u0430\u043D\u043D\u044B\u0445" tabindex="-1">2. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0431\u0430\u0437\u0435 \u0434\u0430\u043D\u043D\u044B\u0445: <a class="header-anchor" href="#_2-\u043F\u043E\u0434\u043An\u044E\u0447\u0435\u043D\u0438\u0435-\u043A-\u0431\u0430\u0437\u0435-\u0434\u0430\u043D\u043D\u044B\u0445" aria-hidden="true">#</a></h3><p>\u0412 \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F default \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E!</p><p>\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C \u0432 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> POSTGRES_PASSWORD=</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">kubectl get secret --namespace postgresql postgresql -o jsonpath=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{.data.postgres-password}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> base64 --decode</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442 \u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">kubectl run postgresql-client --rm --tty -i --restart=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Never</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> --namespace postgresql --image docker.io/bitnami/postgresql:14.2.0-debian-10-r35 --env=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PGPASSWORD=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">POSTGRES_PASSWORD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--command -- psql --host postgresql -U postgres -d postgres -p 5432</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-\u043E\u0431\u043D\u043E\u0432n\u0435\u043D\u0438\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439-\u0438-\u0443\u0441\u0442\u0430\u043D\u043E\u0432n\u0435\u043D\u043D\u043E\u0433\u043E-\u0447\u0430\u0440\u0442\u0430" tabindex="-1">3. \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0430\u0440\u0442\u0430: <a class="header-anchor" href="#_3-\u043E\u0431\u043D\u043E\u0432n\u0435\u043D\u0438\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439-\u0438-\u0443\u0441\u0442\u0430\u043D\u043E\u0432n\u0435\u043D\u043D\u043E\u0433\u043E-\u0447\u0430\u0440\u0442\u0430" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">helm dependency update deploy-postgresql/</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">helm upgrade postgresql deploy-postgresql/ -n postgresql</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-\u0443\u0434\u0430n\u0438\u0442\u044C-\u0447\u0430\u0440\u0442" tabindex="-1">4. \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0440\u0442: <a class="header-anchor" href="#_4-\u0443\u0434\u0430n\u0438\u0442\u044C-\u0447\u0430\u0440\u0442" aria-hidden="true">#</a></h3><p>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0440\u0442:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">helm delete postgresql -n postgresql</span></span>
<span class="line"></span></code></pre></div>`,18),p=[t];function o(r,c,i,d,h,g){return e(),a("div",null,p)}const D=s(l,[["render",o]]);export{b as __pageData,D as default};
