import{_ as s,o as a,c as n,a as l}from"./app.9ef6ba01.js";const D='{"title":"linux\u642D\u5EFA\u73AF\u5883","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7CFB\u7EDF\u914D\u7F6E","slug":"\u7CFB\u7EDF\u914D\u7F6E"},{"level":2,"title":"\u914D\u7F6Essh","slug":"\u914D\u7F6Essh"},{"level":2,"title":"\u672C\u5730config","slug":"\u672C\u5730config"},{"level":2,"title":"\u914D\u7F6EUser","slug":"\u914D\u7F6Euser"},{"level":2,"title":"node\u73AF\u5883","slug":"node\u73AF\u5883"},{"level":3,"title":"\u6E90\u7801\u5B89\u88C5","slug":"\u6E90\u7801\u5B89\u88C5"},{"level":3,"title":"yum\u5B89\u88C5","slug":"yum\u5B89\u88C5"},{"level":2,"title":"gcc\u5347\u7EA7","slug":"gcc\u5347\u7EA7"}],"relativePath":"backend/devops/linux.md","lastUpdated":1655193129000}',e={name:"backend/devops/linux.md"},p=l(`<h1 id="linux\u642D\u5EFA\u73AF\u5883" tabindex="-1">linux\u642D\u5EFA\u73AF\u5883 <a class="header-anchor" href="#linux\u642D\u5EFA\u73AF\u5883" aria-hidden="true">#</a></h1><h2 id="\u7CFB\u7EDF\u914D\u7F6E" tabindex="-1">\u7CFB\u7EDF\u914D\u7F6E <a class="header-anchor" href="#\u7CFB\u7EDF\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5173\u95ED\u9632\u706B\u5899 \u548C\u7981\u6B62\u5F00\u673A\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl disable firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5173\u95EDselinux</span></span>
<span class="line"><span style="color:#A6ACCD;">cat /etc/selinux/config</span></span>
<span class="line"><span style="color:#A6ACCD;">SELINUX=disable</span></span>
<span class="line"><span style="color:#A6ACCD;">getenforce</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6Essh" tabindex="-1">\u914D\u7F6Essh <a class="header-anchor" href="#\u914D\u7F6Essh" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh-copy-id -i id_rsa.pub user@publicNet IP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// pem\u516C\u94A5</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh-keygen -m PEM -t rsa -b 4096 -C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_email@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \u9700\u8981\u7528pem\u683C\u5F0F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> \u751F\u6210ssh\uFF1Assh-keygen -t rsa -C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_email@example.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u672C\u5730config" tabindex="-1">\u672C\u5730config <a class="header-anchor" href="#\u672C\u5730config" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// .shh/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Host tx1pengyue</span></span>
<span class="line"><span style="color:#A6ACCD;">HostName 118.24.3.246</span></span>
<span class="line"><span style="color:#A6ACCD;">User pengyue</span></span>
<span class="line"><span style="color:#A6ACCD;">IdentitiesOnly yes</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6Euser" tabindex="-1">\u914D\u7F6EUser <a class="header-anchor" href="#\u914D\u7F6Euser" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6DFB\u52A0\u7528\u6237\uFF1Aadduser </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BBE\u7F6E\u5BC6\u7801\uFF1Apasswd </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser</span></span>
<span class="line"><span style="color:#A6ACCD;">\u521B\u5EFA\u5206\u7EC4\uFF1Agroupadd </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_groupName</span></span>
<span class="line"><span style="color:#A6ACCD;">\u52A0\u5165\u7EC4\uFF1Agpasswd -a </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_groupName</span></span>
<span class="line"><span style="color:#A6ACCD;">\u79FB\u9664\u7EC4\uFF1Agpasswd -d </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_groupName</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FDB\u5165home\u6587\u4EF6\u5206\u914D\u6743\u9650\uFF1Acd /home</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5206\u914D\u6743\u9650\uFF1Achmod 777 -R </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6743\u9650\u4ECB\u7ECD\uFF1A4=\u53EF\u8BFB 2=\u53EF\u5199 1=\u53EF\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">      7 7 7</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u7B2C\u4E00\u4E2A7 \u662F \u6587\u4EF6\u6240\u6709\u8005\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u7B2C\u4E8C\u4E2A7 \u662F \u6587\u4EF6\u6240\u5C5E\u7EC4\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u7B2C\u4E09\u4E2A7 \u662F \u5176\u4ED6\u7528\u6237\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">      7 = 4+2+1 \u8868\u793A\u6709\u53EF\u8BFB\u53EF\u5199\u53EF\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">      6 = 4+2 \u8868\u793A\u6709\u53EF\u8BFB\u53EF\u5199\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">      5 = 4+1 \u8868\u793A\u6709\u53EF\u8BFB\u53EF\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u6539\u7528\u6237\u6743\u9650\u4E3Aroot: \u4FEE\u6539/etc/passwd\u5373\u53EF\uFF0C\u628A\u7528\u6237\u540D\u7684ID\u548CID\u7EC4\u4FEE\u6539\u62100\uFF08\u4E0D\u5EFA\u8BAE\uFF09</span></span>
<span class="line"></span></code></pre></div><h2 id="node\u73AF\u5883" tabindex="-1">node\u73AF\u5883 <a class="header-anchor" href="#node\u73AF\u5883" aria-hidden="true">#</a></h2><h3 id="\u6E90\u7801\u5B89\u88C5" tabindex="-1">\u6E90\u7801\u5B89\u88C5 <a class="header-anchor" href="#\u6E90\u7801\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">wget http:// xxx node\u5B98\u7F51\u4E0B\u8F7D\u6700\u65B0\u7684\u6E90\u7801\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yum -y install gcc make gcc-c++ openssl-devel wget \u4E0B\u8F7D\u5404\u79CD\u7F16\u8BD1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -xvf node-v8.9.1-linux-x64.tar.xz  \u89E3\u538B</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> node-xxx </span></span>
<span class="line"><span style="color:#A6ACCD;">./configure  \u542F\u52A8\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">make \u7F16\u8BD1 </span></span>
<span class="line"><span style="color:#A6ACCD;">make install \u5B89\u88C5</span></span>
<span class="line"></span></code></pre></div><h3 id="yum\u5B89\u88C5" tabindex="-1">yum\u5B89\u88C5 <a class="header-anchor" href="#yum\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">nodesource\u5B98\u65B9 https://github.com/nodesource/distributions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u6B65\u9AA41</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">curl --silent --location https://rpm.nodesource.com/setup_12.x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo bash -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo yum -y install nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5207\u6362\u6DD8\u5B9D\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry https://registry.npm.taobao.org</span></span>
<span class="line"></span></code></pre></div><h2 id="gcc\u5347\u7EA7" tabindex="-1">gcc\u5347\u7EA7 <a class="header-anchor" href="#gcc\u5347\u7EA7" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yum -y install centos-release-scl</span></span>
<span class="line"><span style="color:#A6ACCD;">yum -y install devtoolset-7-gcc devtoolset-7-gcc-c++ devtoolset-7-binutils</span></span>
<span class="line"><span style="color:#A6ACCD;">scl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> devtoolset-7 bash</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9700\u8981\u6CE8\u610F\u7684\u662Fscl\u547D\u4EE4\u542F\u7528\u53EA\u662F\u4E34\u65F6\u7684\uFF0C\u9000\u51FAshell\u6216\u91CD\u542F\u5C31\u4F1A\u6062\u590D\u539F\u7CFB\u7EDFgcc\u7248\u672C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u8981\u957F\u671F\u4F7F\u7528gcc 7.3\u7684\u8BDD\uFF1A</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">source /opt/rh/devtoolset-7/enable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;">/etc/profile</span></span>
<span class="line"></span></code></pre></div>`,16),o=[p];function c(t,r,i,A,C,d){return a(),n("div",null,o)}var h=s(e,[["render",c]]);export{D as __pageData,h as default};
