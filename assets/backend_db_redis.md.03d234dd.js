import{_ as s,o as a,c as n,a as e}from"./app.3896a45a.js";const m=JSON.parse('{"title":"redis","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528yum\u5B89\u88C5","slug":"\u4F7F\u7528yum\u5B89\u88C5"},{"level":2,"title":"\u7279\u70B9","slug":"\u7279\u70B9"},{"level":2,"title":"\u5E94\u7528\u573A\u666F","slug":"\u5E94\u7528\u573A\u666F"},{"level":3,"title":"\u7F13\u5B58","slug":"\u7F13\u5B58"},{"level":3,"title":"\u5206\u5E03\u5F0F\u9501","slug":"\u5206\u5E03\u5F0F\u9501"},{"level":3,"title":"\u81EA\u52A8\u8FC7\u671F","slug":"\u81EA\u52A8\u8FC7\u671F"},{"level":3,"title":"\u79D2\u6740\u7684\u7F13\u5B58\u5C42","slug":"\u79D2\u6740\u7684\u7F13\u5B58\u5C42"},{"level":3,"title":"\u53D1\u5E03\u8BA2\u9605","slug":"\u53D1\u5E03\u8BA2\u9605"},{"level":2,"title":"redis\u95EE\u9898","slug":"redis\u95EE\u9898"},{"level":3,"title":"\u7F13\u5B58\u96EA\u5D29","slug":"\u7F13\u5B58\u96EA\u5D29"},{"level":3,"title":"\u7F13\u5B58\u7A7F\u900F","slug":"\u7F13\u5B58\u7A7F\u900F"},{"level":3,"title":"\u7F13\u5B58\u51FB\u7A7F","slug":"\u7F13\u5B58\u51FB\u7A7F"},{"level":3,"title":"\u7F13\u5B58\u96EA\u5D29\u548C\u7F13\u5B58\u51FB\u7A7F\u7684\u533A\u522B","slug":"\u7F13\u5B58\u96EA\u5D29\u548C\u7F13\u5B58\u51FB\u7A7F\u7684\u533A\u522B"},{"level":2,"title":"Redis \u7684\u8FC7\u671F\u7B56\u7565\u548C\u5185\u5B58\u6DD8\u6C70\u673A\u5236","slug":"redis-\u7684\u8FC7\u671F\u7B56\u7565\u548C\u5185\u5B58\u6DD8\u6C70\u673A\u5236"},{"level":3,"title":"\u8FC7\u671F\u7B56\u7565","slug":"\u8FC7\u671F\u7B56\u7565"},{"level":3,"title":"\u5185\u5B58\u6DD8\u6C70\u673A\u5236","slug":"\u5185\u5B58\u6DD8\u6C70\u673A\u5236"}],"relativePath":"backend/db/redis.md","lastUpdated":1655482972000}'),l={name:"backend/db/redis.md"},p=e(`<h1 id="redis" tabindex="-1">redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h1><p>redis\u662F\u4E00\u4E2A\u5F00\u6E90\u6570\u636E\u7684kv\u6570\u636E\u5E93\uFF0C\u5B83\u7684\u6570\u636E\u653E\u7F6E\u4E8E\u5185\u5B58\u5F53\u4E2D\uFF0C\u5E38\u7528\u6765\u505A\u7F13\u5B58\u670D\u52A1\u5668\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5B89\u88C5</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u4E0B\u8F7D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">wget </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">http://download.redis.io/releases/redis-5.0.8.tar.gz</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5B89\u88C5\u76EE\u5F55/usr/local/redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//\u89E3\u538B</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -zxf xx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">make</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u6267\u884Cmake install\u8FDB\u884CRedis\u5B89\u88C5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">make install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//\u4E3A\u4E86\u65B9\u4FBF\u7BA1\u7406\uFF0C\u5C06Redis\u6587\u4EF6\u4E2D\u7684conf\u914D\u7F6E\u6587\u4EF6\u548C\u5E38\u7528\u547D\u4EE4\u79FB\u52A8\u5230\u7EDF\u4E00\u6587\u4EF6\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir bin etc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mv redis.conf /usr/local/redis/etc/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mv mkreleasehdr.sh redis-benchmark redis-check-aof redis-check-rdb redis-cli redis-server /usr/local/redis/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BBE\u7F6E\u7ED1\u5B9Aip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/redis.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;"> xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BBE\u7F6E\u540E\u53F0\u542F\u52A8redis</span></span>
<span class="line"><span style="color:#A6ACCD;">vim redis.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">daemonized yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u67E5\u770Bredis\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -tunpl</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep 6379</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u94FE\u63A5redis\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u4F7F\u7528yum\u5B89\u88C5" tabindex="-1">\u4F7F\u7528yum\u5B89\u88C5 <a class="header-anchor" href="#\u4F7F\u7528yum\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u9700\u8981\u5B89\u88C5Remi\u7684\u8F6F\u4EF6\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">y </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//rpms.famillecollet.com/enterprise/remi-release-7.rpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u7136\u540E\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684redis</span></span>
<span class="line"><span style="color:#A6ACCD;">yum </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">enablerepo</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">remi install redis</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u5373\u53EF\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u542F\u52A8redis\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">service redis start</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start redis</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li>\u901F\u5EA6\u5FEB\uFF0C\u56E0\u4E3A\u6570\u636E\u5728\u5185\u5B58\u5F53\u4E2D\uFF0C\u7C7B\u4F3C\u4E8EHashMap</li><li>\u652F\u6301\u4E30\u5BCC\u7684\u6570\u636E\u7C7B\u578B\uFF0Cstring, list, set, hash</li><li>\u652F\u6301\u4E8B\u7269\uFF0C\u64CD\u4F5C\u90FD\u662F\u539F\u5B50\u6027\u7684</li><li>\u4E30\u5BCC\u7684\u7279\u6027\uFF0C\u5E94\u7528\u573A\u666F\u5E7F\u6CDB</li></ul><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1">\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><h3 id="\u7F13\u5B58" tabindex="-1">\u7F13\u5B58 <a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a></h3><p>\u56E0\u4E3Aredis\u7684\u8BFB\u53D6\u6027\u80FD\u4F18\u5F02\uFF0C\u6BCF\u79D2\u53EF\u4EE5\u5904\u7406\u8D85\u8FC710w\u6B21\u7684\u8BFB\u5199\u64CD\u4F5C\u3002redis\u53EF\u4EE5\u4FDD\u5B58\u591A\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u5355\u4E2Avalue\u7684\u6700\u5927\u9650\u5236\u662F1GB,\u800Cmemcached\u53EA\u80FD\u4FDD\u5B581md\u7684\u6570\u636E\u3002</p><h3 id="\u5206\u5E03\u5F0F\u9501" tabindex="-1">\u5206\u5E03\u5F0F\u9501 <a class="header-anchor" href="#\u5206\u5E03\u5F0F\u9501" aria-hidden="true">#</a></h3><p>\u56E0\u4E3Aredis\u5355\u7EBF\u7A0B\u7684\u7279\u70B9\uFF0C\u5BF9\u4E8E\u9AD8\u5E76\u53D1\u7CFB\u7EDF\uFF0C\u90FD\u662F\u7528\u591A\u670D\u52A1\u5668\u90E8\u7F72\uFF0C\u5728\u8FDB\u884C\u903B\u8F91\u5904\u7406\u7684\u65F6\u5019\u53EF\u4EE5\u7528\u5230\u5206\u5E03\u5F0F\u9501\u6765\u9650\u5236\u7A0B\u5E8F\u7684\u5E76\u53D1\u3002</p><h3 id="\u81EA\u52A8\u8FC7\u671F" tabindex="-1">\u81EA\u52A8\u8FC7\u671F <a class="header-anchor" href="#\u81EA\u52A8\u8FC7\u671F" aria-hidden="true">#</a></h3><p>redis\u9488\u5BF9\u6570\u636E\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF0C\u53EF\u4EE5\u81EA\u52A8\u6E05\u7406\u8FC7\u671F\u6570\u636E\uFF0C\u5E38\u89C1\u7684\u5E94\u7528\u573A\u666F\uFF1A\u77ED\u4FE1\u9A8C\u8BC1\u7801\uFF0C\u6D3B\u52A8\u5F00\u59CB\u548C\u622A\u6B62\u65E5\u671F\u7B49\u3002</p><h3 id="\u79D2\u6740\u7684\u7F13\u5B58\u5C42" tabindex="-1">\u79D2\u6740\u7684\u7F13\u5B58\u5C42 <a class="header-anchor" href="#\u79D2\u6740\u7684\u7F13\u5B58\u5C42" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u5229\u7528redis\u5355\u7EBF\u7A0B\u7684\u7279\u6027\u6765\u63A7\u5236\u5E76\u53D1\uFF0C\u5C06redis\u4F5C\u4E3A\u7F13\u5B58\u5E73\u53F0\uFF0C\u7531\u4E8E\u5176\u8BFB\u5199\u80FD\u529B\u5F3A\uFF0C\u4E0D\u6613\u4EA7\u751F\u7A0B\u5E8F\u963B\u585E\u73B0\u8C61\u3002</p><h3 id="\u53D1\u5E03\u8BA2\u9605" tabindex="-1">\u53D1\u5E03\u8BA2\u9605 <a class="header-anchor" href="#\u53D1\u5E03\u8BA2\u9605" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u4F7F\u7528redis\u7684\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u5B9E\u73B0\u4E00\u4E9B\u804A\u5929\u7CFB\u7EDF\u3002</p><h2 id="redis\u95EE\u9898" tabindex="-1">redis\u95EE\u9898 <a class="header-anchor" href="#redis\u95EE\u9898" aria-hidden="true">#</a></h2><h3 id="\u7F13\u5B58\u96EA\u5D29" tabindex="-1">\u7F13\u5B58\u96EA\u5D29 <a class="header-anchor" href="#\u7F13\u5B58\u96EA\u5D29" aria-hidden="true">#</a></h3><p>\u7F13\u5B58\u96EA\u5D29\uFF0C\u662F\u6307\u7F13\u5B58\u4E2D\u8BBE\u7F6E\u4E86\u5927\u6279\u91CF\u76F8\u540C\u8FC7\u671F\u65F6\u95F4\u7684\u6570\u636E\u540C\u65F6\u8FC7\u671F\u5931\u6548\uFF0C\u800C\u5728\u8FD9\u4E00\u523B\u8BBF\u95EE\u91CF\u5267\u589E\uFF0C\u7F13\u5B58\u8FD1\u4E4E\u5931\u6548\uFF0C\u6240\u6709\u8BF7\u6C42\u5168\u90E8\u8F6C\u5411DB\uFF0CDB\u77AC\u65F6\u538B\u529B\u8FC7\u91CD\u96EA\u5D29\uFF0C\u751A\u81F3down\u673A\u3002\u548C\u7F13\u5B58\u51FB\u7A7F\u4E0D\u540C\u7684\u662F\uFF0C\u7F13\u5B58\u51FB\u7A7F\u6307\u5E76\u53D1\u67E5\u540C\u4E00\u6761\u6570\u636E\uFF0C\u7F13\u5B58\u96EA\u5D29\u662F\u4E0D\u540C\u6570\u636E\u90FD\u8FC7\u671F\u4E86\uFF0C\u5F88\u591A\u6570\u636E\u90FD\u67E5\u4E0D\u5230\u4ECE\u800C\u67E5\u6570\u636E\u5E93\u3002</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><ul><li>\u8BBE\u7F6E\u70ED\u70B9\u6570\u636E\u6C38\u4E0D\u8FC7\u671F\u3002</li><li>\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u968F\u673A\uFF0C\u9632\u6B62\u540C\u4E00\u65F6\u95F4\u5927\u91CF\u6570\u636E\u8FC7\u671F\u73B0\u8C61\u53D1\u751F\u3002</li><li>\u82E5redis\u7F13\u5B58\u662F\u5206\u5E03\u5F0F\u90E8\u7F72\uFF0C\u53EF\u4EE5\u628A\u70ED\u70B9\u6570\u636E\u5747\u5300\u5206\u5E03\u5728\u4E0D\u540C\u7F13\u5B58\u6570\u636E\u5E93\u4E2D\u3002</li></ul><h3 id="\u7F13\u5B58\u7A7F\u900F" tabindex="-1">\u7F13\u5B58\u7A7F\u900F <a class="header-anchor" href="#\u7F13\u5B58\u7A7F\u900F" aria-hidden="true">#</a></h3><p>\u7F13\u5B58\u7A7F\u900F\u662F\u6307\u67E5\u8BE2\u4E00\u4E2A\u7F13\u5B58\u548C\u6570\u636E\u5E93\u4E2D\u90FD\u6CA1\u6709\u7684\u6570\u636E\uFF0C\u7531\u4E8E\u5927\u90E8\u5206\u7F13\u5B58\u7B56\u7565\u662F\u88AB\u52A8\u52A0\u8F7D\u7684\uFF0C\u5E76\u4E14\u51FA\u4E8E\u5BB9\u9519\u8003\u8651\uFF0C\u5982\u679C\u4ECE\u5B58\u50A8\u5C42\u67E5\u4E0D\u5230\u6570\u636E\u5219\u4E0D\u5199\u5165\u7F13\u5B58\uFF0C\u8FD9\u5C06\u5BFC\u81F4\u8FD9\u4E2A\u4E0D\u5B58\u5728\u7684\u6570\u636E\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8981\u5230\u5B58\u50A8\u5C42\u53BB\u67E5\u8BE2\uFF0C\u5931\u53BB\u4E86\u7F13\u5B58\u7684\u610F\u4E49\u3002\u7528\u6237\u4E0D\u65AD\u53D1\u8D77\u8BF7\u6C42\uFF0C\u5728\u6D41\u91CF\u5927\u65F6\uFF0C\u5C31\u53EF\u80FD\u5BF9DB\u5F62\u6210\u5DE8\u5927\u7684\u538B\u529B\uFF0C\u5229\u7528\u4E0D\u5B58\u5728\u7684key\u9891\u7E41\u653B\u51FB\u5E94\u7528\u4E5F\u662F\u5F88\u5927\u7684\u95EE\u9898\u3002</p><ul><li><p>\u7F13\u5B58\u548C\u6570\u636E\u5E93\u4E2D\u90FD\u4E0D\u5B58\u5728\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u5C06\u6B64key\u5BF9\u5E94\u7684value\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u9ED8\u8BA4\u7684\u503C\uFF0C\u6BD4\u5982\u201CNULL\u201D\uFF0C\u5E76\u8BBE\u7F6E\u4E00\u4E2A\u7F13\u5B58\u7684\u5931\u6548\u65F6\u95F4\uFF0C\u8FD9\u65F6\u5728\u7F13\u5B58\u5931\u6548\u4E4B\u524D\uFF0C\u6240\u6709\u901A\u8FC7\u6B64key\u7684\u8BBF\u95EE\u90FD\u88AB\u7F13\u5B58\u6321\u4F4F\u4E86\u3002\u540E\u9762\u5982\u679C\u6B64key\u5BF9\u5E94\u7684\u6570\u636E\u5728DB\u4E2D\u5B58\u5728\u65F6\uFF0C\u7F13\u5B58\u5931\u6548\u4E4B\u540E\uFF0C\u901A\u8FC7\u6B64key\u518D\u53BB\u8BBF\u95EE\u6570\u636E\uFF0C\u5C31\u80FD\u62FF\u5230\u65B0\u7684value\u4E86\u3002</p></li><li><p>\u63A5\u53E3\u5C42\u589E\u52A0\u6821\u9A8C\uFF0C\u6BD4\u5982\u7528\u6237\u9274\u6743\u6821\u9A8C\uFF0Cid\u6839\u636E\u6570\u636E\u573A\u666F\u505A\u57FA\u7840\u6821\u9A8C\uFF0Cid&lt;=0\u7684\u76F4\u63A5\u62E6\u622A\u3002</p></li></ul><h3 id="\u7F13\u5B58\u51FB\u7A7F" tabindex="-1">\u7F13\u5B58\u51FB\u7A7F <a class="header-anchor" href="#\u7F13\u5B58\u51FB\u7A7F" aria-hidden="true">#</a></h3><p>\u7F13\u5B58\u51FB\u7A7F\u662F\u6307\u7F13\u5B58\u4E2D\u7684\u4E00\u4E2A\u70ED\u70B9Key(\u6BD4\u5982\u4E00\u4E2A\u79D2\u6740\u5546\u54C1)\uFF0C\u5728\u67D0\u4E2A\u65F6\u95F4\u70B9\u8FC7\u671F\u7684\u65F6\u5019\uFF0C\u6070\u597D\u5728\u8FD9\u4E2A\u65F6\u95F4\u70B9\u8BBF\u95EE\u91CF\u5267\u589E\uFF0C\u5BF9\u8FD9\u4E2AKey\u6709\u5927\u91CF\u7684\u5E76\u53D1\u8BF7\u6C42\u8FC7\u6765\uFF0C\u8BF7\u6C42\u53D1\u73B0\u7F13\u5B58\u8FC7\u671F\u4E00\u822C\u90FD\u4F1A\u4ECE\u540E\u7AEFDB\u52A0\u8F7D\u6570\u636E\u5E76\u56DE\u8BBE\u56DE\u7F13\u5B58\uFF0C\u4F46\u5C31\u5728\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u8FD8\u6CA1\u6709\u5B8C\u5168\u4ECEDB\u4E2D\u52A0\u8F7D\u8FC7\u6765\u7684\u8FD9\u4E2A\u65F6\u95F4\u6BB5\u671F\u95F4\uFF0C\u5E76\u53D1\u77AC\u95F4\u9020\u6210\u5927\u91CF\u8BF7\u6C42\u76F4\u63A5\u51FB\u7A7F\u5230DB\uFF0C\u5BF9DB\u5F62\u6210\u5DE8\u5927\u538B\u529B\u3002</p><p>\u7F13\u5B58\u51FB\u7A7F\uFF0C\u53C8\u53EB\u70ED\u70B9key\u95EE\u9898\uFF0C\u662F\u8FD9\u4E09\u4E2A\u95EE\u9898\u4E2D\u6700\u7ECF\u5178\u7684\u4E00\u4E2A\u95EE\u9898\u3002</p><ul><li>\u8BBE\u7F6E\u70ED\u70B9\u6570\u636E\u6C38\u4E0D\u8FC7\u671F\u3002</li><li>\u8D44\u6E90\u4FDD\u62A4\uFF0C\u670D\u52A1\u964D\u7EA7\u3002</li></ul><h3 id="\u7F13\u5B58\u96EA\u5D29\u548C\u7F13\u5B58\u51FB\u7A7F\u7684\u533A\u522B" tabindex="-1">\u7F13\u5B58\u96EA\u5D29\u548C\u7F13\u5B58\u51FB\u7A7F\u7684\u533A\u522B <a class="header-anchor" href="#\u7F13\u5B58\u96EA\u5D29\u548C\u7F13\u5B58\u51FB\u7A7F\u7684\u533A\u522B" aria-hidden="true">#</a></h3><p>\u7F13\u5B58\u51FB\u7A7F\u8DDF\u7F13\u5B58\u96EA\u5D29\u7C7B\u4F3C\uFF0C\u533A\u522B\u5C31\u662F\u7F13\u5B58\u96EA\u5D29\u662F\u7FA4\u4F53\u5931\u6548\uFF0C\u7F13\u5B58\u51FB\u7A7F\u662F\u5355\u4F53\u5931\u6548\u3002</p><h2 id="redis-\u7684\u8FC7\u671F\u7B56\u7565\u548C\u5185\u5B58\u6DD8\u6C70\u673A\u5236" tabindex="-1">Redis \u7684\u8FC7\u671F\u7B56\u7565\u548C\u5185\u5B58\u6DD8\u6C70\u673A\u5236 <a class="header-anchor" href="#redis-\u7684\u8FC7\u671F\u7B56\u7565\u548C\u5185\u5B58\u6DD8\u6C70\u673A\u5236" aria-hidden="true">#</a></h2><h3 id="\u8FC7\u671F\u7B56\u7565" tabindex="-1">\u8FC7\u671F\u7B56\u7565 <a class="header-anchor" href="#\u8FC7\u671F\u7B56\u7565" aria-hidden="true">#</a></h3><blockquote><p>\u5B9A\u671F\u5220\u9664</p></blockquote><p>\u5B9A\u671F\u5220\u9664\u6307\u7684\u662FRedis\u9ED8\u8BA4\u6BCF\u9694100ms\u5C31\u968F\u673A\u62BD\u53D6\u4E00\u4E9B\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684key\uFF0C\u68C0\u6D4B\u8FD9\u4E9Bkey\u662F\u5426\u8FC7\u671F\uFF0C\u5982\u679C\u8FC7\u671F\u4E86\u5C31\u5C06\u5176\u5220\u6389\u3002</p><p>\u56E0\u4E3Akey\u592A\u591A\uFF0C\u5982\u679C\u5168\u76D8\u626B\u63CF\u6240\u6709\u7684key\u4F1A\u975E\u5E38\u8017\u6027\u80FD\uFF0C\u6240\u4EE5\u662F\u968F\u673A\u62BD\u53D6\u4E00\u4E9Bkey\u6765\u5220\u9664\u3002\u8FD9\u6837\u5C31\u6709\u53EF\u80FD\u5220\u9664\u4E0D\u5B8C\uFF0C\u9700\u8981\u60F0\u6027\u5220\u9664\u914D\u5408\u3002</p><blockquote><p>\u60F0\u6027\u5220\u9664</p></blockquote><p>\u60F0\u6027\u5220\u9664\u4E0D\u518D\u662FRedis\u53BB\u4E3B\u52A8\u5220\u9664\uFF0C\u800C\u662F\u5728\u5BA2\u6237\u7AEF\u8981\u83B7\u53D6\u67D0\u4E2Akey\u7684\u65F6\u5019\uFF0CRedis\u4F1A\u5148\u53BB\u68C0\u6D4B\u4E00\u4E0B\u8FD9\u4E2Akey\u662F\u5426\u5DF2\u7ECF\u8FC7\u671F\uFF0C\u5982\u679C\u6CA1\u6709\u8FC7\u671F\u5219\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5982\u679C\u5DF2\u7ECF\u8FC7\u671F\u4E86\uFF0C\u90A3\u4E48Redis\u4F1A\u5220\u9664\u8FD9\u4E2Akey\uFF0C\u4E0D\u4F1A\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><p>\u6240\u4EE5\u60F0\u6027\u5220\u9664\u53EF\u4EE5\u89E3\u51B3\u4E00\u4E9B\u8FC7\u671F\u4E86\uFF0C\u4F46\u6CA1\u88AB\u5B9A\u671F\u5220\u9664\u968F\u673A\u62BD\u53D6\u5230\u7684key\u3002\u4F46\u6709\u4E9B\u8FC7\u671F\u7684key\u65E2\u6CA1\u6709\u88AB\u968F\u673A\u62BD\u53D6\uFF0C\u4E5F\u6CA1\u6709\u88AB\u5BA2\u6237\u7AEF\u8BBF\u95EE\uFF0C\u5C31\u4F1A\u4E00\u76F4\u4FDD\u7559\u5728\u6570\u636E\u5E93\uFF0C\u5360\u7528\u5185\u5B58\uFF0C\u957F\u671F\u4E0B\u53BB\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u8017\u5C3D\u3002\u6240\u4EE5Redis\u63D0\u4F9B\u4E86\u5185\u5B58\u6DD8\u6C70\u673A\u5236\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><h3 id="\u5185\u5B58\u6DD8\u6C70\u673A\u5236" tabindex="-1">\u5185\u5B58\u6DD8\u6C70\u673A\u5236 <a class="header-anchor" href="#\u5185\u5B58\u6DD8\u6C70\u673A\u5236" aria-hidden="true">#</a></h3><p>Redis\u5728\u4F7F\u7528\u5185\u5B58\u8FBE\u5230\u67D0\u4E2A\u9608\u503C\uFF08\u901A\u8FC7maxmemory\u914D\u7F6E)\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u89E6\u53D1\u5185\u5B58\u6DD8\u6C70\u673A\u5236\uFF0C\u9009\u53D6\u4E00\u4E9Bkey\u6765\u5220\u9664\u3002\u5185\u5B58\u6DD8\u6C70\u6709\u8BB8\u591A\u7B56\u7565\uFF0C\u4E0B\u9762\u5206\u522B\u4ECB\u7ECD\u8FD9\u51E0\u79CD\u4E0D\u540C\u7684\u7B56\u7565\u3002</p><ul><li>noeviction\uFF1A\u5F53\u5185\u5B58\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u65B0\u5199\u5165\u6570\u636E\u65F6\uFF0C\u65B0\u5199\u5165\u64CD\u4F5C\u4F1A\u62A5\u9519\u3002\u9ED8\u8BA4\u7B56\u7565</li><li>allkeys-lru\uFF1A\u5F53\u5185\u5B58\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u65B0\u5199\u5165\u6570\u636E\u65F6\uFF0C\u5728\u952E\u7A7A\u95F4\u4E2D\uFF0C\u79FB\u9664\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7684key\u3002</li><li>allkeys-random\uFF1A\u5F53\u5185\u5B58\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u65B0\u5199\u5165\u6570\u636E\u65F6\uFF0C\u5728\u952E\u7A7A\u95F4\u4E2D\uFF0C\u968F\u673A\u79FB\u9664\u67D0\u4E2Akey\u3002</li><li>volatile-lru\uFF1A\u5F53\u5185\u5B58\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u65B0\u5199\u5165\u6570\u636E\u65F6\uFF0C\u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D\uFF0C\u79FB\u9664\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7684key\u3002</li><li>volatile-random\uFF1A\u5F53\u5185\u5B58\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u65B0\u5199\u5165\u6570\u636E\u65F6\uFF0C\u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D\uFF0C\u968F\u673A\u79FB\u9664\u67D0\u4E2Akey\u3002</li><li>volatile-ttl\uFF1A\u5F53\u5185\u5B58\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u65B0\u5199\u5165\u6570\u636E\u65F6\uFF0C\u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D\uFF0C\u6709\u66F4\u65E9\u8FC7\u671F\u65F6\u95F4\u7684key\u4F18\u5148\u79FB\u9664\u3002</li></ul>`,45),r=[p];function i(c,t,d,o,b,h){return a(),n("div",null,r)}var y=s(l,[["render",i]]);export{m as __pageData,y as default};
