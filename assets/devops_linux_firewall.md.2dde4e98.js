import{_ as a,c as e,o as s,a as l}from"./app.11df5aa4.js";const u=JSON.parse('{"title":"Firewall","description":"","frontmatter":{},"headers":[],"relativePath":"devops/linux/firewall.md","lastUpdated":1665757631000}'),n={name:"devops/linux/firewall.md"},t=l(`<h1 id="firewall" tabindex="-1">Firewall <a class="header-anchor" href="#firewall" aria-hidden="true">#</a></h1><p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0440\u0442 \u0432 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F firewall&#39;a:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">firewall-cmd --permanent --add-port=PORT/tcp</span></span>
<span class="line"></span></code></pre></div><p>\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C firewall:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">firewall-cmd --reload</span></span>
<span class="line"></span></code></pre></div>`,5),o=[t];function p(r,c,i,d,_,f){return s(),e("div",null,o)}const m=a(n,[["render",p]]);export{u as __pageData,m as default};
