import{_ as s,o as n,c as a,a as e}from"./app.3896a45a.js";var l="/blog/assets/cnV1Hg.32f50364.png",p="/blog/assets/q0LAns.2aa0fd48.png",r="/blog/assets/ngap0n.d7eaf07c.png",i="/blog/assets/BfBZNa.e802fd07.png";const v=JSON.parse('{"title":"\u591A\u79CD\u5185\u7F51\u7A7F\u900F\u59FF\u52BF\uFF0C\u7B80\u5355\u6613\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u5185\u7F51\u7A7F\u900F","slug":"\u4EC0\u4E48\u662F\u5185\u7F51\u7A7F\u900F"},{"level":3,"title":"\u5E94\u7528\u573A\u666F","slug":"\u5E94\u7528\u573A\u666F"},{"level":2,"title":"frp\u5DE5\u5177\u7684\u4F7F\u7528","slug":"frp\u5DE5\u5177\u7684\u4F7F\u7528"},{"level":3,"title":"\u9700\u8981\u7684\u5DE5\u5177","slug":"\u9700\u8981\u7684\u5DE5\u5177"},{"level":3,"title":"\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0web\u670D\u52A1","slug":"\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0web\u670D\u52A1"},{"level":3,"title":"\u542F\u52A8","slug":"\u542F\u52A8"},{"level":3,"title":"\u5BA2\u6237\u7AEF\u8BBE\u7F6E","slug":"\u5BA2\u6237\u7AEF\u8BBE\u7F6E"},{"level":3,"title":"\u542F\u52A8\u5BA2\u6237\u7AEF","slug":"\u542F\u52A8\u5BA2\u6237\u7AEF"},{"level":3,"title":"\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0SSH\u8FDE\u63A5","slug":"\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0ssh\u8FDE\u63A5"},{"level":2,"title":"ngrok\u5DE5\u5177\u7684\u4F7F\u7528","slug":"ngrok\u5DE5\u5177\u7684\u4F7F\u7528"},{"level":3,"title":"\u4E0B\u8F7D\u5BA2\u6237\u7AEF","slug":"\u4E0B\u8F7D\u5BA2\u6237\u7AEF"},{"level":3,"title":"\u914D\u7F6E\u5BA2\u6237\u7AEFauthtoken","slug":"\u914D\u7F6E\u5BA2\u6237\u7AEFauthtoken"},{"level":3,"title":"\u5F00\u59CB\u505A\u5185\u7F51\u7A7F\u900F","slug":"\u5F00\u59CB\u505A\u5185\u7F51\u7A7F\u900F"},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3"}],"relativePath":"basics/network/nat.md","lastUpdated":1655482972000}'),c={name:"basics/network/nat.md"},o=e(`<h1 id="\u591A\u79CD\u5185\u7F51\u7A7F\u900F\u59FF\u52BF\uFF0C\u7B80\u5355\u6613\u7528" tabindex="-1">\u591A\u79CD\u5185\u7F51\u7A7F\u900F\u59FF\u52BF\uFF0C\u7B80\u5355\u6613\u7528 <a class="header-anchor" href="#\u591A\u79CD\u5185\u7F51\u7A7F\u900F\u59FF\u52BF\uFF0C\u7B80\u5355\u6613\u7528" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F\u5185\u7F51\u7A7F\u900F" tabindex="-1">\u4EC0\u4E48\u662F\u5185\u7F51\u7A7F\u900F <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5185\u7F51\u7A7F\u900F" aria-hidden="true">#</a></h2><p>\u5185\u7F51\u7A7F\u900F\uFF0C\u5373NAT\u7A7F\u900F\uFF0C\u7F51\u7EDC\u8FDE\u63A5\u65F6\u672F\u8BED\uFF0C\u8BA1\u7B97\u673A\u662F\u5C40\u57DF\u7F51\u5185\u65F6\uFF0C\u5916\u7F51\u4E0E\u5185\u7F51\u7684\u8BA1\u7B97\u673A\u8282\u70B9\u9700\u8981\u8FDE\u63A5\u901A\u4FE1\uFF0C\u6709\u65F6\u5C31\u4F1A\u51FA\u73B0\u4E0D\u652F\u6301\u5185\u7F51\u7A7F\u900F\u3002\u5C31\u662F\u8BF4\u6620\u5C04\u7AEF\u53E3\uFF0C\u80FD\u8BA9\u5916\u7F51\u7684\u7535\u8111\u627E\u5230\u5904\u4E8E\u5185\u7F51\u7684\u7535\u8111\uFF0C\u63D0\u9AD8\u4E0B\u8F7D\u901F\u5EA6\u3002\u4E0D\u7BA1\u662F\u5185\u7F51\u7A7F\u900F\u8FD8\u662F\u5176\u4ED6\u7C7B\u578B\u7684\u7F51\u7EDC\u7A7F\u900F\uFF0C\u90FD\u662F\u7F51\u7EDC\u7A7F\u900F\u7684\u7EDF\u4E00\u65B9\u6CD5\u6765\u7814\u7A76\u548C\u89E3\u51B3\u3002 \u7B80\u5355\u6765\u8BF4\u5C31\u662F\uFF1A\u5916\u7F51\u8BBF\u95EE\u5185\u7F51\u6307\u5B9A\u673A\u5668\u6307\u5B9A\u7AEF\u53E3</p><h3 id="\u5E94\u7528\u573A\u666F" tabindex="-1">\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h3><ul><li>\u63D0\u4F9B\u5185\u7F51\u7A7F\u900F\u670D\u52A1</li><li>\u8FDE\u63A5\u5185\u7F51\u670D\u52A1\u5668\uFF0C\u5728\u5916\u7F51\u6F14\u793A\u5185\u7F51web\u7AD9\u70B9</li><li>\u65E0\u9700\u670D\u52A1\u5668\u90E8\u7F72\uFF0C\u5FEB\u901F\u8C03\u8BD5\u672C\u5730\u7A0B\u5E8F\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\u5F00\u53D1\u5229\u5668</li><li>\u652F\u6301http\u3001https\u534F\u8BAE\u7AD9\u70B9\uFF0C\u7701\u53BB\u8BC1\u4E66\u4E2D\u95F4\u4EF6\u590D\u6742\u914D\u7F6E\uFF0Chttp\u534F\u8BAE\u7AD9\u70B9\u76F4\u63A5\u5347\u7EA7\u4E3Ahttps\u7AD9\u70B9</li><li>\u652F\u6301TCP\uFF0CUDP\u534F\u8BAE\u7AEF\u53E3\u8F6C\u53D1\u3002\u652F\u6301\u6570\u636E\u5E93\u3001SSH\u3001\u8FDC\u7A0B\u684C\u9762\u3001\u7F51\u7EDC\u6444\u50CF\u5934\u7B49\u7B49\u5F00\u653E\u5230\u5916\u7F51</li></ul><h2 id="frp\u5DE5\u5177\u7684\u4F7F\u7528" tabindex="-1">frp\u5DE5\u5177\u7684\u4F7F\u7528 <a class="header-anchor" href="#frp\u5DE5\u5177\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u642D\u5EFA\u7A0D\u5FAE\u590D\u6742\uFF0C\u4F46\u662F\u975E\u5E38\u7075\u6D3B\uFF0C\u76EE\u524D\u5185\u7F51\u7A7F\u900F\u9996\u9009\u4E86\u3002<a href="https://github.com/fatedier/frp" target="_blank" rel="noopener noreferrer">frp\u4F20\u9001\u95E8</a></p><h3 id="\u9700\u8981\u7684\u5DE5\u5177" tabindex="-1">\u9700\u8981\u7684\u5DE5\u5177 <a class="header-anchor" href="#\u9700\u8981\u7684\u5DE5\u5177" aria-hidden="true">#</a></h3><ul><li><p>vps\u4E00\u53F0\uFF0C\u968F\u4FBF\u4EC0\u4E48\u4E91\u90FD\u53EF\u4EE5</p></li><li><p>\u81EA\u5DF1\u7684\u7EC8\u7AEF</p></li></ul><h3 id="\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0web\u670D\u52A1" tabindex="-1">\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0web\u670D\u52A1 <a class="header-anchor" href="#\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0web\u670D\u52A1" aria-hidden="true">#</a></h3><p>\u5148\u767B\u9646vps\u770B\u770B\u81EA\u5DF1\u7684\u5904\u7406\u5668\u67B6\u6784\u7136\u540E\u9009\u62E9\u5BF9\u5E94\u7248\u672C\u7684frp</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">arch</span></span>
<span class="line"><span style="color:#A6ACCD;">// x86_64</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u9009\u62E9<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noopener noreferrer">amd64\u7248\u672C(frp_0.33.0_linux_amd64.tar.gz)</a></p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">wget https://github.com/fatedier/frp/releases/download/v0.33.0/frp_0.33.0_linux_amd64.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u89E3\u538B</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -zxvf frp_0.33.0_linux_amd64.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">mv frp_0.33.0_linux_amd64 frp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">vim frps.ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u6DFB\u52A0\u4E0B\u9762\u914D\u7F6E</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">bind_port = 7000</span></span>
<span class="line"><span style="color:#A6ACCD;">dashboard_port = 7001</span></span>
<span class="line"><span style="color:#A6ACCD;">token = superYue</span></span>
<span class="line"><span style="color:#A6ACCD;">dashboard_user = frp</span></span>
<span class="line"><span style="color:#A6ACCD;">dashboard_pwd = frp</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>bind_port\u8868\u793A\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u8FDE\u63A5\u7684\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u662F7000\uFF0C\u9700\u8981\u8DDF\u5BA2\u6237\u7AEF\u7684bind_port\u4FDD\u6301\u4E00\u81F4\u3002</li><li>dashboard_port\u662F\u670D\u52A1\u7AEF\u4EEA\u8868\u76D8\u7684\u7AEF\u53E3\uFF0C\u914D\u7F6E\u5B8C\u6210\u4EE5\u540E\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EEx.x.x.x:7500\u67E5\u770Bfrp\u670D\u52A1\u7684dashborad\u3002</li><li>token\u662F\u7528\u4E8E\u5BA2\u6237\u7AEF\u8DDF\u670D\u52A1\u7AEF\u8FDE\u63A5\u7684\u53E3\u4EE4\uFF0C\u8FDE\u63A5\u53E3\u4EE4\uFF0C\u8981\u8DDF\u5BA2\u6237\u7AEF\u7684token\u4FDD\u6301\u4E00\u81F4\u5C31\u884C\u3002</li><li>dashboard_user\u548Cdashboard_pwd\u8868\u793A\u6253\u5F00\u4EEA\u8868\u677F\u9875\u9762\u767B\u5F55\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u767B\u9646\u65F6\u5019\u8981\u7528\u4E0A\u3002</li></ul><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vim frps.ini</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">bind_port = 7000</span></span>
<span class="line"><span style="color:#A6ACCD;">token = superYue</span></span>
<span class="line"><span style="color:#A6ACCD;">vhost_http_port = 10080</span></span>
<span class="line"><span style="color:#A6ACCD;">vhost_https_port = 10443</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>bind_port\u8868\u793A\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u8FDE\u63A5\u7684\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u662F7000\uFF0C\u9700\u8981\u4FDD\u6301\u548C\u5BA2\u6237\u7AEF\u7684bind_port\u4E00\u81F4\u3002</li><li>token\u8DDF\u670D\u52A1\u7AEF\u8BBE\u7F6E\u7684token\u4FDD\u6301\u4E00\u81F4\u3002</li><li>vhost_http_port\u548Cvhost_https_port\u7528\u4E8E\u670D\u52A1\u7AEF\u4E3B\u673A\u8BBF\u95EE\u7684\u7AEF\u53E3\uFF0C\u9700\u8981\u518Dvps\u5B89\u5168\u7EC4\u91CC\u6DFB\u52A0\u6B64\u7AEF\u53E3\uFF0C\u4FDD\u6301\u7AEF\u53E3\u653E\u884C\u3002</li></ul><h3 id="\u542F\u52A8" tabindex="-1">\u542F\u52A8 <a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">./frps -c frps.ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B88\u62A4\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">nohup ./frps -c frps.ini</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6253\u5F00\u914D\u7F6E\u7684x.x.x.x:7500\u5C31\u53EF\u4EE5\u770B\u5230\u4EEA\u8868\u677F\u622A\u9762\u3002</p><p><img src="`+l+`" alt="img"></p><h3 id="\u5BA2\u6237\u7AEF\u8BBE\u7F6E" tabindex="-1">\u5BA2\u6237\u7AEF\u8BBE\u7F6E <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u8BBE\u7F6E" aria-hidden="true">#</a></h3><p>\u5B89\u88C5\u540C\u6837\u7248\u672C\u7684<code>frp</code>,\u5B89\u88C5\u65B9\u6CD5\u4E00\u6837\uFF0Cmac\u4E0A\u9762\u9700\u8981\u4F7F\u7528 <code>frp_0.33.0_darwin_amd64.tar.gz</code>\u8FD9\u4E2A\u7248\u672C</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vim frpc.ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">server_addr = xxxxx</span></span>
<span class="line"><span style="color:#A6ACCD;">server_port = 7000</span></span>
<span class="line"><span style="color:#A6ACCD;">token = superYue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> = http</span></span>
<span class="line"><span style="color:#A6ACCD;">local_port = 9003</span></span>
<span class="line"><span style="color:#A6ACCD;">custom_domains = xx.xx.xx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>server_addr\u4F7F\u7528\u7684\u662F\u5916\u7F51\u673A\u5668IP\u3002</li><li>server_port\u670D\u52A1\u7AEF\u8BBE\u7F6E\u7684\u7AEF\u53E3\u3002</li><li>local_port\u4E3A\u672C\u5730\u5BA2\u6237\u7AEF\u542F\u52A8\u7684web\u670D\u52A1\u3002</li><li>type\u4E3A\u4EE3\u7406\u7684\u7C7B\u578B\uFF0Cweb\u670D\u52A1\u8BBE\u7F6E\u4E3Ahttp\u7C7B\u578B\u3002</li><li>custom_domains\u4E3A\u5916\u7F51VPS\u7ED1\u5B9A\u7684\u8BBF\u95EE\u57DF\u540D\u6216\u8005\u673A\u5668\u7684IP\u3002</li></ul><h3 id="\u542F\u52A8\u5BA2\u6237\u7AEF" tabindex="-1">\u542F\u52A8\u5BA2\u6237\u7AEF <a class="header-anchor" href="#\u542F\u52A8\u5BA2\u6237\u7AEF" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">./frpc -c frpc.ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B88\u62A4\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">nohup ./frpc -c frpsc.ini</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u542F\u52A8\u6210\u529F\u4E4B\u540E\uFF0C\u4F7F\u7528\u5916\u7F51IP\u6216\u8005\u57DF\u540D:vhost_http_port\uFF0C\u5373custom_domains:10080\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u5916\u7F51\u7684\u8BBF\u95EE\u81EA\u5DF1\u5185\u7F51/\u672C\u5730\u542F\u52A8\u7684web\u670D\u52A1\u4E86\u3002</p><h3 id="\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0ssh\u8FDE\u63A5" tabindex="-1">\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0SSH\u8FDE\u63A5 <a class="header-anchor" href="#\u5185\u7F51\u7A7F\u900F\u5B9E\u73B0ssh\u8FDE\u63A5" aria-hidden="true">#</a></h3><p>\u914D\u7F6E frpc.ini</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vim frpc.ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">common</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">xxx/ \u4E0D\u8D58\u8FF0\u4E86</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ssh</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> = tcp</span></span>
<span class="line"><span style="color:#A6ACCD;">local_ip = 127.0.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">local_port = 22</span></span>
<span class="line"><span style="color:#A6ACCD;">remote_port = 8001</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>server_addr\u5C31\u662F\u4F60\u516C\u7F51\u670D\u52A1\u5668\u7684IP\u3002</li><li>server_port\u670D\u52A1\u7AEF\u8BBE\u7F6E\u7684\u7AEF\u53E3\u3002</li><li>token\u8DDF\u670D\u52A1\u7AEF\u8BBE\u7F6E\u7684token\u4FDD\u6301\u4E00\u81F4\u5373\u53EF\u3002</li><li>type\u4E3A\u4EE3\u7406\u7684\u7C7B\u578B\uFF0CSSH\u670D\u52A1\u8BBE\u7F6E\u4E3Atcp\u7C7B\u578B\u3002</li><li>local_ip\u4E3A\u672C\u5730IP\u3002</li><li>local_port\u4E3A\u5185\u7F51\u5BA2\u6237\u7AEF\u8BBE\u7F6E\u7684SSH\u7AEF\u53E3\u3002</li><li>remote_port\u4E3A\u5185\u7F51\u63D0\u4F9B\u7ED9\u5916\u7F51\u8BBF\u95EE\u7684\u670D\u52A1\u7AEF\u53E3\u3002</li></ul><p>\u542F\u52A8\u65B9\u5F0F\u8DDF\u7A7F\u900FWeb\u670D\u52A1\u4E00\u6837\uFF0C\u8FD9\u6837\u6211\u53EF\u4EE5\u901A\u8FC7\u670D\u52A1\u5668\u516C\u7F51IP\u548C8001\u7AEF\u53E3\u6765\u8FDE\u63A5\u672C\u5730\u7684\u673A\u5668\u4E86\uFF08SSH\uFF09\u3002</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh -p remote_port username@server_addr</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>remote_port\u4F7F\u7528\u7684\u662F\u5185\u7F51\u673A\u5668\u8BBE\u7F6E\u7684\u7AEF\u53E3\u3002</li><li>username\u4F7F\u7528\u7684\u662F\u5185\u7F51\u673A\u5668\u7684\u7528\u6237\u540D\u3002</li><li>server_addr\u4F7F\u7528\u7684\u662F\u5916\u7F51\u673A\u5668IP\u3002</li></ul><p>frp\u8FD8\u6709\u5F88\u591A\u5176\u4ED6\u534F\u8BAE\u652F\u6301\uFF0C<code>tcp</code>,<code>udp</code>,<code>http</code>,<code>https</code>,<code>stcp</code>, \u4F46\u662Ffrp\u7684\u914D\u7F6E\u65B9\u5F0F\u7A0D\u5FAE\u7E41\u7410\uFF0C\u5E76\u4E14\u9700\u8981\u6709\u81EA\u5DF1\u7684vps\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u7684\u5DE5\u5177\u5C31\u975E\u5E38\u7B80\u5355\u4E86\u3002</p><h2 id="ngrok\u5DE5\u5177\u7684\u4F7F\u7528" tabindex="-1">ngrok\u5DE5\u5177\u7684\u4F7F\u7528 <a class="header-anchor" href="#ngrok\u5DE5\u5177\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u6253\u5F00ngrok\u5B98\u7F51\u6CE8\u518C\u4E00\u4E2A\u8D26\u53F7\u540E\u767B\u5F55\uFF0C<a href="https://dashboard.ngrok.com" target="_blank" rel="noopener noreferrer">ngrok\u5B98\u7F51</a></p><h3 id="\u4E0B\u8F7D\u5BA2\u6237\u7AEF" tabindex="-1">\u4E0B\u8F7D\u5BA2\u6237\u7AEF <a class="header-anchor" href="#\u4E0B\u8F7D\u5BA2\u6237\u7AEF" aria-hidden="true">#</a></h3><p><img src="`+p+`" alt="img"></p><h3 id="\u914D\u7F6E\u5BA2\u6237\u7AEFauthtoken" tabindex="-1">\u914D\u7F6E\u5BA2\u6237\u7AEFauthtoken <a class="header-anchor" href="#\u914D\u7F6E\u5BA2\u6237\u7AEFauthtoken" aria-hidden="true">#</a></h3><p>\u9996\u9875\u57FA\u672C\u7ED9\u4E86\u4F60\u60F3\u8981\u7684\u4E00\u5207</p><blockquote><p>command \u65B9\u5F0F</p></blockquote><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">./ngrok authtoken xxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>config \u65B9\u5F0F</p></blockquote><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ngrok2/ngrok.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">authtoken: xxxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5F00\u59CB\u505A\u5185\u7F51\u7A7F\u900F" tabindex="-1">\u5F00\u59CB\u505A\u5185\u7F51\u7A7F\u900F <a class="header-anchor" href="#\u5F00\u59CB\u505A\u5185\u7F51\u7A7F\u900F" aria-hidden="true">#</a></h3><p><img src="`+r+`" alt="img"></p><p>\u5047\u8BBE\u4F60\u5728\u672C\u673A\u4E0A\u542F\u52A8\u4E86\u4E00\u4E2A\u7AEF\u53E3\u53F7\u4E3A8000\u7684\u670D\u52A1\uFF0C\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u5DE5\u5177\u5C06\u5F53\u524D8000\u7AEF\u53E3\u7684\u670D\u52A1\u6620\u5C04\u5230\u5916\u7F51\u53BB\u3002 \u6253\u5F00ngrok\u5BA2\u6237\u7AEF</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ngrok http 8000</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><img src="`+i+'" alt="img"></p><p>\u8FD9\u6837\u5C31\u53EF\u901A\u8FC7\u5916\u7F51\u8BBF\u95EE <code>http://24a2c2f8390e.ngrok.io</code> \u81EA\u5DF1\u5185\u7F51\u7684\u670D\u52A1\u5566,\u662F\u4E0D\u662F\u975E\u5E38\u7B80\u5355\u3002\u4F46\u662F\u6BD4frp\u642D\u5EFA\u5C11\u4E86\u4E00\u4E9B\u7075\u6D3B\u6027\uFF0C\u4F46\u662F\u4E0D\u80FD\u81EA\u5B9A\u4E49\u57DF\u540D\u4E4B\u7C7B\u7684\uFF0C\u7528\u6765\u4E34\u65F6\u5904\u7406\u4E00\u4E0B\u5185\u7F51\u7A7F\u900F\u9700\u6C42\u8FD8\u662F\u5F88\u65B9\u4FBF\u7684\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u5F53\u7136\u5185\u7F51\u7A7F\u900F\u7684\u59FF\u52BF\u8FDC\u4E0D\u81F3\u8FD9\u4E9B\uFF0C\u6709\u5174\u8DA3\u7684\u8BDD\u81EA\u5DF1\u7814\u7A76\u628A\uFF0C\u5E0C\u671B\u4E0A\u9762\u7684\u5185\u5BB9\u53EF\u4EE5\u5E2E\u5230\u5927\u5BB6\u3002</p>',56),t=[o];function d(b,u,h,m,A,C){return n(),a("div",null,t)}var g=s(c,[["render",d]]);export{v as __pageData,g as default};
