import{_ as s,c as a,o as n,d as e}from"./app.0ffb1a51.js";const b=JSON.parse('{"title":"\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F RHEL/Centos 7-8/RedHat","description":"","frontmatter":{},"headers":[],"relativePath":"devops/linux/hacks/password-reset.md","lastUpdated":1665442210000}'),p={name:"devops/linux/hacks/password-reset.md"},o=e(`<h1 id="\u0441\u0431\u0440\u043E\u0441-\u043F\u0430\u0440\u043En\u044F-rhel-centos-7-8-redhat" tabindex="-1">\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F RHEL/Centos 7-8/RedHat <a class="header-anchor" href="#\u0441\u0431\u0440\u043E\u0441-\u043F\u0430\u0440\u043En\u044F-rhel-centos-7-8-redhat" aria-hidden="true">#</a></h1><p>\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043C\u0430\u0448\u0438\u043D\u0443, \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u044F\u0434\u0440\u0430 GRUB \u043D\u0430\u0436\u0438\u043C\u0430\u0435\u043C E. \u041F\u043E\u043F\u0430\u0434\u0430\u0435\u043C \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u044F\u0434\u0440\u0430.</p><p>\u0418\u0449\u0435\u043C \u0441\u0442\u0440\u043E\u043A\u0443 \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 &quot;linux&quot; \u0438\u043B\u0438 &quot;linux16&quot;, \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u043C \u0432 \u043A\u043E\u043D\u0435\u0446 \u0441\u0442\u0440\u043E\u043A\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C ++ctrl+e++ \u0438 \u0434\u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C <code>rd.break</code> \u0422\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u043F\u0440\u0435\u0440\u044B\u0432\u0430\u044F \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0443 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u0416\u043C\u0435\u043C ++ctrl+x++</p><p>\u041F\u043E\u043F\u0430\u0434\u0430\u0435\u043C \u0432 switch_root</p><p>\u041F\u0435\u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">mount -o remount,rw /sysroot</span></span>
<span class="line"></span></code></pre></div><p>\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u043C \u0432 \u0441\u0440\u0435\u0434\u0443 chroot:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">chroot /sysroot</span></span>
<span class="line"></span></code></pre></div><p>\u0421\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u043C \u043F\u0430\u0440\u043E\u043B\u044C:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">passwd</span></span>
<span class="line"></span></code></pre></div><p>\u0412\u043A\u043B\u044E\u0447\u0430\u0435\u043C SElinux relabeling:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">touch /.autorelabel</span></span>
<span class="line"></span></code></pre></div><p>\u0412\u044B\u0445\u043E\u0434\u0438\u043C \u0432\u0432\u0435\u0434\u044F \u0434\u0432\u0430 \u0440\u0430\u0437\u0430:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#82AAFF;">exit</span></span>
<span class="line"></span></code></pre></div>`,14),t=[o];function c(l,r,d,i,u,h){return n(),a("div",null,t)}const g=s(p,[["render",c]]);export{b as __pageData,g as default};
