import{_ as a,c as s,o as n,a as e}from"./app.852d0fdd.js";const _=JSON.parse('{"title":"MetalLB","description":"","frontmatter":{},"headers":[{"level":3,"title":"1. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0447\u0430\u0440\u0442\u0430","slug":"_1-\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430-\u0447\u0430\u0440\u0442\u0430","link":"#_1-\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430-\u0447\u0430\u0440\u0442\u0430","children":[]},{"level":3,"title":"2. \u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0447\u0430\u0440\u0442\u0430","slug":"_2-\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F-\u0447\u0430\u0440\u0442\u0430","link":"#_2-\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F-\u0447\u0430\u0440\u0442\u0430","children":[]},{"level":3,"title":"3. \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0430\u0440\u0442\u0430:","slug":"_3-\u043E\u0431\u043D\u043E\u0432n\u0435\u043D\u0438\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439-\u0438-\u0443\u0441\u0442\u0430\u043D\u043E\u0432n\u0435\u043D\u043D\u043E\u0433\u043E-\u0447\u0430\u0440\u0442\u0430","link":"#_3-\u043E\u0431\u043D\u043E\u0432n\u0435\u043D\u0438\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439-\u0438-\u0443\u0441\u0442\u0430\u043D\u043E\u0432n\u0435\u043D\u043D\u043E\u0433\u043E-\u0447\u0430\u0440\u0442\u0430","children":[]},{"level":3,"title":"4. \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0440\u0442:","slug":"_4-\u0443\u0434\u0430n\u0438\u0442\u044C-\u0447\u0430\u0440\u0442","link":"#_4-\u0443\u0434\u0430n\u0438\u0442\u044C-\u0447\u0430\u0440\u0442","children":[]}],"relativePath":"devops/kubernetes/charts/metallb.md","lastUpdated":1665449255000}'),l={name:"devops/kubernetes/charts/metallb.md"},t=e(`<h1 id="metallb" tabindex="-1">MetalLB <a class="header-anchor" href="#metallb" aria-hidden="true">#</a></h1><p>\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0439 \u0447\u0430\u0440\u0442:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">wget -O - https://github.com/awbait/infrastructure-as-code/archive/master.tar.gz </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> tar -xz --strip=3 </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">infrastructure-as-code-master/kubernetes/charts/deploy-metallb</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="_1-\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430-\u0447\u0430\u0440\u0442\u0430" tabindex="-1">1. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0447\u0430\u0440\u0442\u0430 <a class="header-anchor" href="#_1-\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430-\u0447\u0430\u0440\u0442\u0430" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">helm install metallb deploy-metallb/ -n metallb --create-namespace</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F-\u0447\u0430\u0440\u0442\u0430" tabindex="-1">2. \u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0447\u0430\u0440\u0442\u0430 <a class="header-anchor" href="#_2-\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F-\u0447\u0430\u0440\u0442\u0430" aria-hidden="true">#</a></h3><p>\u0427\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u0438\u043D IP \u0434\u043B\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430:</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">annotations</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">metallb.universe.tf/allow-shared-ip</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key-to-share-1.2.3.4</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u0412 \u0444\u0430\u0439\u043B\u0435 values.yaml \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0443\u043B \u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u0432\u0438\u0434\u0430:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">192.168.1.100/32</span></span>
<span class="line"><span style="color:#A6ACCD;">192.168.1.1/24</span></span>
<span class="line"><span style="color:#A6ACCD;">192.168.1.100-192.168.1.150</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-\u043E\u0431\u043D\u043E\u0432n\u0435\u043D\u0438\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439-\u0438-\u0443\u0441\u0442\u0430\u043D\u043E\u0432n\u0435\u043D\u043D\u043E\u0433\u043E-\u0447\u0430\u0440\u0442\u0430" tabindex="-1">3. \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0430\u0440\u0442\u0430: <a class="header-anchor" href="#_3-\u043E\u0431\u043D\u043E\u0432n\u0435\u043D\u0438\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439-\u0438-\u0443\u0441\u0442\u0430\u043D\u043E\u0432n\u0435\u043D\u043D\u043E\u0433\u043E-\u0447\u0430\u0440\u0442\u0430" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">helm dependency update deploy-metallb/</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">helm upgrade metallb deploy-metallb/ -n metallb</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-\u0443\u0434\u0430n\u0438\u0442\u044C-\u0447\u0430\u0440\u0442" tabindex="-1">4. \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0440\u0442: <a class="header-anchor" href="#_4-\u0443\u0434\u0430n\u0438\u0442\u044C-\u0447\u0430\u0440\u0442" aria-hidden="true">#</a></h3><p>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0440\u0442:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">helm delete metallb -n metallb</span></span>
<span class="line"></span></code></pre></div>`,16),p=[t];function c(o,r,d,i,h,u){return n(),s("div",null,p)}const y=a(l,[["render",c]]);export{_ as __pageData,y as default};
