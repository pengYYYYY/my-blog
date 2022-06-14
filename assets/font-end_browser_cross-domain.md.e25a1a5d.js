import{_ as s,o as a,c as n,a as l}from"./app.9ef6ba01.js";var p="/assets/OHAfqO.2ced19e4.png",o="/assets/aQnMed.f2a7ba50.png";const h='{"title":"\u8DE8\u57DF","description":"","frontmatter":{},"headers":[{"level":2,"title":"why","slug":"why"},{"level":2,"title":"cors\u8DE8\u57DF","slug":"cors\u8DE8\u57DF"},{"level":3,"title":"\u9884\u68C0\u8BF7\u6C42(OPTIONS)","slug":"\u9884\u68C0\u8BF7\u6C42-options"},{"level":3,"title":"\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42","slug":"\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42"},{"level":3,"title":"HTTP \u54CD\u5E94\u9996\u90E8\u5B57\u6BB5","slug":"http-\u54CD\u5E94\u9996\u90E8\u5B57\u6BB5"},{"level":2,"title":"Node\u4E2D\u95F4\u4EF6\u4EE3\u7406","slug":"node\u4E2D\u95F4\u4EF6\u4EE3\u7406"},{"level":2,"title":"Nginx\u53CD\u5411\u4EE3\u7406","slug":"nginx\u53CD\u5411\u4EE3\u7406"},{"level":2,"title":"JSONP","slug":"jsonp"},{"level":3,"title":"JSONP\u548CAJAX\u5BF9\u6BD4","slug":"jsonp\u548Cajax\u5BF9\u6BD4"},{"level":2,"title":"postMessage","slug":"postmessage"}],"relativePath":"font-end/browser/cross-domain.md","lastUpdated":1655193129000}',e={name:"font-end/browser/cross-domain.md"},t=l('<h1 id="\u8DE8\u57DF" tabindex="-1">\u8DE8\u57DF <a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a></h1><h2 id="why" tabindex="-1">why <a class="header-anchor" href="#why" aria-hidden="true">#</a></h2><p>Q: \u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u8DE8\u57DF\u95EE\u9898\uFF1F</p><p>A: \u540C\u6E90\u7B56\u7565\u9650\u5236\u4E86\u4ECE\u540C\u4E00\u4E2A\u6E90\u52A0\u8F7D\u7684\u6587\u6863\u6216\u811A\u672C\u5982\u4F55\u4E0E\u6765\u81EA\u53E6\u4E00\u4E2A\u6E90\u7684\u8D44\u6E90\u8FDB\u884C\u4EA4\u4E92\u3002\u8FD9\u662F\u4E00\u4E2A\u7528\u4E8E\u9694\u79BB\u6F5C\u5728\u6076\u610F\u6587\u4EF6\u7684\u91CD\u8981\u5B89\u5168\u673A\u5236\u3002\u540C\u6E90\u6307\uFF1A\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u53F7\u5FC5\u987B\u4E00\u81F4\u3002</p><p>\u540C\u6E90\u7B56\u7565\u63A7\u5236\u4E86\u4E0D\u540C\u6E90\u4E4B\u95F4\u7684\u4EA4\u4E92\uFF0C\u4F8B\u5982\u5728\u4F7F\u7528XMLHttpRequest \u6216\u6807\u7B7E\u65F6\u5219\u4F1A\u53D7\u5230\u540C\u6E90\u7B56\u7565\u7684\u7EA6\u675F\u3002\u8FD9\u4E9B\u4EA4\u4E92\u901A\u5E38\u5206\u4E3A\u4E09\u7C7B\uFF1A</p><ul><li>\u901A\u5E38\u6D4F\u89C8\u5668\u5141\u8BB8\u8FDB\u884C\u8DE8\u57DF\u5199\u64CD\u4F5C\uFF08Cross-origin writes\uFF09\uFF0C\u5982\u94FE\u63A5\uFF08links\uFF09\uFF0C\u91CD\u5B9A\u5411\u4EE5\u53CA\u8868\u5355\u63D0\u4EA4\u3002\u7279\u5B9A\u5C11\u6570\u7684HTTP\u8BF7\u6C42\u9700\u8981\u6DFB\u52A0 preflight\u3002</li><li>\u901A\u5E38\u6D4F\u89C8\u5668\u5141\u8BB8\u8DE8\u57DF\u8D44\u6E90\u5D4C\u5165\uFF08Cross-origin embedding\uFF09\uFF0C\u5982 img\u3001script \u6807\u7B7E;</li><li>\u901A\u5E38\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8DE8\u57DF\u8BFB\u64CD\u4F5C\uFF08Cross-origin reads\uFF09\u3002</li></ul><p>\u5141\u8BB8\u8DE8\u57DF\u8D44\u6E90\u5D4C\u5165\u7684\u793A\u4F8B\uFF0C\u4E00\u4E9B\u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u5F71\u54CD\u7684\u6807\u7B7E\u793A\u4F8B\uFF1A</p><ul><li><code>&lt;script src=&quot;...&quot;&gt;&lt;/script&gt;</code>\u6807\u7B7E\u5D4C\u5165\u8DE8\u57DF\u811A\u672C\u3002\u8BED\u6CD5\u9519\u8BEF\u4FE1\u606F\u53EA\u80FD\u5728\u540C\u6E90\u811A\u672C\u4E2D\u6355\u6349\u5230\u3002</li><li><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;...&quot;&gt;</code>\u6807\u7B7E\u5D4C\u5165CSS\u3002CSS\u7684\u8DE8\u57DF\u9700\u8981\u4E00\u4E2A\u8BBE\u7F6E\u6B63\u786E\u7684Content-Type\u6D88\u606F\u5934.</li><li><code>&lt;img&gt;</code> \u5D4C\u5165\u56FE\u7247\u3002\u652F\u6301\u7684\u56FE\u7247\u683C\u5F0F\u5305\u62ECPNG,JPEG,GIF,BMP,SVG</li><li><code>&lt;video&gt;</code> \u548C <code>&lt;audio&gt;</code> \u5D4C\u5165\u591A\u5A92\u4F53\u8D44\u6E90\u3002</li><li><code>@font-face</code>\u5F15\u5165\u7684\u5B57\u4F53\u3002\u4E00\u4E9B\u6D4F\u89C8\u5668\u5141\u8BB8\u8DE8\u57DF\u5B57\u4F53\uFF08 cross-origin fonts\uFF09\uFF0C\u4E00\u4E9B\u9700\u8981\u540C\u6E90\u5B57\u4F53\uFF08same-origin fonts\uFF09\u3002</li><li><code>&lt;frame&gt;\u548C&lt;iframe&gt;</code>\u8F7D\u5165\u7684\u4EFB\u4F55\u8D44\u6E90\u3002\u7AD9\u70B9\u53EF\u4EE5\u4F7F\u7528X-Frame-Options\u6D88\u606F\u5934\u6765\u963B\u6B62\u8FD9\u79CD\u5F62\u5F0F\u7684\u8DE8\u57DF\u4EA4\u4E92\u3002</li></ul><h2 id="cors\u8DE8\u57DF" tabindex="-1">cors\u8DE8\u57DF <a class="header-anchor" href="#cors\u8DE8\u57DF" aria-hidden="true">#</a></h2><p>\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB</p><h3 id="\u9884\u68C0\u8BF7\u6C42-options" tabindex="-1">\u9884\u68C0\u8BF7\u6C42(OPTIONS) <a class="header-anchor" href="#\u9884\u68C0\u8BF7\u6C42-options" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u9650\u5236\u8DE8\u57DF\u8BF7\u6C42\u4E00\u822C\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ol><li>\u6D4F\u89C8\u5668\u9650\u5236\u53D1\u8D77\u8DE8\u57DF\u8BF7\u6C42</li><li>\u8DE8\u57DF\u8BF7\u6C42\u53EF\u4EE5\u6B63\u5E38\u53D1\u8D77\uFF0C\u4F46\u662F\u8FD4\u56DE\u7684\u7ED3\u679C\u88AB\u6D4F\u89C8\u5668\u62E6\u622A\u4E86</li></ol><p>\u4E00\u822C\u6D4F\u89C8\u5668\u90FD\u662F\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u9650\u5236\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u90A3\u5C31\u662F\u8BF4\u8BF7\u6C42\u5DF2\u5230\u8FBE\u670D\u52A1\u5668\uFF0C\u5E76\u6709\u53EF\u80FD\u5BF9\u6570\u636E\u5E93\u91CC\u7684\u6570\u636E\u8FDB\u884C\u4E86\u64CD\u4F5C\uFF0C\u4F46\u662F\u8FD4\u56DE\u7684\u7ED3\u679C\u88AB\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u83B7\u53D6\u4E0D\u5230\u8FD4\u56DE\u7ED3\u679C\uFF0C\u8FD9\u662F\u4E00\u6B21\u5931\u8D25\u7684\u8BF7\u6C42\uFF0C\u4F46\u662F\u53EF\u80FD\u5BF9\u6570\u636E\u5E93\u91CC\u7684\u6570\u636E\u4EA7\u751F\u4E86\u5F71\u54CD\u3002</p><p>\u5BF9\u8FD9\u79CD\u53EF\u80FD\u5BF9\u670D\u52A1\u5668\u6570\u636E\u4EA7\u751F\u526F\u4F5C\u7528\u7684HTTP\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u6D4F\u89C8\u5668\u5FC5\u987B\u5148\u4F7F\u7528OPTIONS\u65B9\u6CD5\u53D1\u8D77\u4E00\u4E2A\u9884\u68C0\u8BF7\u6C42\uFF0C\u4ECE\u800C\u83B7\u77E5\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8\u8BE5\u8DE8\u57DF\u8BF7\u6C42\uFF1A\u5982\u679C\u5141\u8BB8\uFF0C\u5C31\u53D1\u9001\u5E26\u6570\u636E\u7684\u771F\u5B9E\u8BF7\u6C42\uFF1B\u5982\u679C\u4E0D\u5141\u8BB8\uFF0C\u5219\u963B\u6B62\u53D1\u9001\u5E26\u6570\u636E\u7684\u771F\u5B9E\u8BF7\u6C42\u3002</p><h4 id="\u7B80\u5355\u8BF7\u6C42" tabindex="-1">\u7B80\u5355\u8BF7\u6C42 <a class="header-anchor" href="#\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a></h4><p>\u4F7F\u7528\u4E0B\u5217\u65B9\u6CD5\u4E4B\u4E00\u4E14\u6CA1\u6709\u4EBA\u4E3A\u8BBE\u7F6E\u5BF9 CORS \u5B89\u5168\u7684\u9996\u90E8\u5B57\u6BB5\u96C6\u5408\u4E4B\u5916\u7684\u5176\u4ED6\u9996\u90E8\u5B57\u6BB5\uFF1A</p><ul><li><p>GET</p></li><li><p>HEAD</p></li><li><p>POST</p></li><li><p>\u4EC5\u5F53POST\u65B9\u6CD5\u7684Content-Type\u503C\u7B49\u4E8E\u4E0B\u5217\u4E4B\u4E00\u624D\u7B97\u4F5C\u7B80\u5355\u8BF7\u6C42</p><ul><li>text/plain</li><li>multipart/form-data</li><li>application/x-www-form-urlencoded</li></ul></li></ul><p><img src="'+p+'" alt="img"></p><h4 id="\u975E\u7B80\u5355\u8BF7\u6C42" tabindex="-1">\u975E\u7B80\u5355\u8BF7\u6C42 <a class="header-anchor" href="#\u975E\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a></h4><p>\u4F7F\u7528\u4E86\u4E0B\u9762\u4EFB\u4E00 HTTP \u65B9\u6CD5\uFF1A</p><ul><li>PUT</li><li>DELETE</li><li>CONNECT</li><li>OPTIONS</li><li>TRACE</li><li>PATCH</li></ul><p>\u4EBA\u4E3A\u8BBE\u7F6E\u4E86\u5BF9 CORS \u5B89\u5168\u7684\u9996\u90E8\u5B57\u6BB5\u96C6\u5408\u4E4B\u5916\u7684\u5176\u4ED6\u9996\u90E8\u5B57\u6BB5</p><ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Content-Type (but note the additional requirements below)</li><li>DPR</li><li>Downlink</li><li>Save-Data</li><li>Viewport-Width</li><li>Width</li></ul><p>Content-Type \u7684\u503C\u4E0D\u5C5E\u4E8E\u4E0B\u5217\u4E4B\u4E00</p><ul><li>application/x-www-form-urlencoded</li><li>multipart/form-data</li><li>text/plain</li></ul><p>\u53D1\u9001\u771F\u6B63\u8BF7\u6C42\u524D\u4F1A\u5148\u53D1\u9001\u9884\u68C0\u8BF7\u6C42\uFF0C\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="'+o+`" alt="img"></p><p>1.\u7B2C\u4E00\u6761OPTIONS\u4E3A\u9884\u68C0\u8BF7\u6C42\uFF0C\u4E2D\u540C\u65F6\u643A\u5E26\u4E86\u4E0B\u9762\u4E24\u4E2A\u9996\u90E8\u5B57\u6BB5\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Access</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Control</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Request</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">Method</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> POST</span></span>
<span class="line"><span style="color:#A6ACCD;">Access</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Control</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Request</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">Headers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">PINGOTHER</span></span>
<span class="line"></span></code></pre></div><ul><li>\u9884\u68C0\u8BF7\u6C42\u7684Request\u4E2D\u7684Access-Control-Request-Method: POST\uFF0C\u662F\u544A\u8BC9\u670D\u52A1\u5668\uFF0C\u4E4B\u540E\u7684\u5B9E\u9645\u8BF7\u6C42\u5C06\u4F7F\u7528POST\u65B9\u5F0F\u3002</li><li>Access-Control-Request-Headers \u662F\u544A\u8BC9\u670D\u52A1\u5668\uFF0C\u5B9E\u9645\u8BF7\u6C42\u5C06\u643A\u5E26\u4E24\u4E2A\u81EA\u5B9A\u4E49\u8BF7\u6C42\u9996\u90E8\u5B57\u6BB5\uFF1AX-PINGOTHER \u4E0E Content-Type\u3002\u670D\u52A1\u5668\u636E\u6B64\u51B3\u5B9A\uFF0C\u8BE5\u5B9E\u9645\u8BF7\u6C42\u662F\u5426\u88AB\u5141\u8BB8</li></ul><h3 id="\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42" tabindex="-1">\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42 <a class="header-anchor" href="#\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u800C\u8A00\uFF0C\u5BF9\u4E8E\u8DE8\u57DF XMLHttpRequest \u6216 Fetch \u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u53D1\u9001\u8EAB\u4EFD\u51ED\u8BC1\u4FE1\u606F\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> xhr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">XMLHttpRequest</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://bar.other/resources/credentialed-content/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">withCredentials </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onreadystatechange</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5C06 XMLHttpRequest \u7684 withCredentials \u6807\u5FD7\u8BBE\u7F6E\u4E3A true\uFF0C\u4ECE\u800C\u5411\u670D\u52A1\u5668\u53D1\u9001 Cookies\u3002\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355 GET \u8BF7\u6C42\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u4E0D\u4F1A\u5BF9\u5176\u53D1\u8D77\u201C\u9884\u68C0\u8BF7\u6C42\u201D\u3002\u4F46\u662F\uFF0C\u5982\u679C\u670D\u52A1\u5668\u7AEF\u7684\u54CD\u5E94\u4E2D\u672A\u643A\u5E26 Access-Control-Allow-Credentials: true \uFF0C\u6D4F\u89C8\u5668\u5C06\u4E0D\u4F1A\u628A\u54CD\u5E94\u5185\u5BB9\u8FD4\u56DE\u7ED9\u8BF7\u6C42\u7684\u53D1\u9001\u8005\u3002</p><h4 id="\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42\u4E0E\u901A\u914D\u7B26" tabindex="-1">\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42\u4E0E\u901A\u914D\u7B26 <a class="header-anchor" href="#\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42\u4E0E\u901A\u914D\u7B26" aria-hidden="true">#</a></h4><p>\u5BF9\u4E8E\u9644\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u4E0D\u5F97\u8BBE\u7F6E Access-Control-Allow-Origin \u7684\u503C\u4E3A\u201C*\u201D\u3002</p><p>\u56E0\u4E3A\u8BF7\u6C42\u7684\u9996\u90E8\u4E2D\u643A\u5E26\u4E86 Cookie \u4FE1\u606F\u3002\u5982\u679C Access-Control-Allow-Origin \u7684\u503C\u4E3A\u201C*\u201D\uFF0C\u8BF7\u6C42\u5C06\u4F1A\u5931\u8D25\u3002\u800C\u5C06 Access-Control-Allow-Origin \u7684\u503C\u8BBE\u7F6E\u4E3A <a href="http://foo.example" target="_blank" rel="noopener noreferrer">http://foo.example</a>\uFF0C\u5219\u8BF7\u6C42\u5C06\u6210\u529F\u6267\u884C\u3002</p><h3 id="http-\u54CD\u5E94\u9996\u90E8\u5B57\u6BB5" tabindex="-1">HTTP \u54CD\u5E94\u9996\u90E8\u5B57\u6BB5 <a class="header-anchor" href="#http-\u54CD\u5E94\u9996\u90E8\u5B57\u6BB5" aria-hidden="true">#</a></h3><h4 id="access-control-allow-origin" tabindex="-1">Access-Control-Allow-Origin <a class="header-anchor" href="#access-control-allow-origin" aria-hidden="true">#</a></h4><p>origin \u53C2\u6570\u7684\u503C\u6307\u5B9A\u4E86\u5141\u8BB8\u8BBF\u95EE\u8BE5\u8D44\u6E90\u7684\u5916\u57DF URI.\u5BF9\u4E8E\u4E0D\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u51ED\u8BC1\u7684\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u53EF\u4EE5\u6307\u5B9A\u8BE5\u5B57\u6BB5\u7684\u503C\u4E3A\u901A\u914D\u7B26\uFF0C\u8868\u793A\u5141\u8BB8\u6765\u81EA\u6240\u6709\u57DF\u7684\u8BF7\u6C42\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Access</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Control</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Allow</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">Origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">origin</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> | *</span></span>
<span class="line"></span></code></pre></div><h4 id="access-control-expose-headers" tabindex="-1">Access-Control-Expose-Headers <a class="header-anchor" href="#access-control-expose-headers" aria-hidden="true">#</a></h4><p>\u5728\u8DE8\u57DF\u8BBF\u95EE\u65F6\uFF0CXMLHttpRequest\u5BF9\u8C61\u7684getResponseHeader()\u65B9\u6CD5\u53EA\u80FD\u62FF\u5230\u4E00\u4E9B\u6700\u57FA\u672C\u7684\u54CD\u5E94\u5934\uFF0CCache-Control\u3001Content-Language\u3001Content-Type\u3001Expires\u3001Last-Modified\u3001Pragma\uFF0C\u5982\u679C\u8981\u8BBF\u95EE\u5176\u4ED6\u5934\uFF0C\u5219\u9700\u8981\u670D\u52A1\u5668\u8BBE\u7F6E\u672C\u54CD\u5E94\u5934\u3002 Access-Control-Expose-Headers \u5934\u8BA9\u670D\u52A1\u5668\u628A\u5141\u8BB8\u6D4F\u89C8\u5668\u8BBF\u95EE\u7684\u5934\u653E\u5165\u767D\u540D\u5355\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Access</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Control</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Expose</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">Headers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">My</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Custom</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Header</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Another</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Custom</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Header</span></span>
<span class="line"></span></code></pre></div><h4 id="access-control-max-age" tabindex="-1">Access-Control-Max-Age <a class="header-anchor" href="#access-control-max-age" aria-hidden="true">#</a></h4><p>\u5934\u6307\u5B9A\u4E86\u8BF7\u6C42\u7684\u7ED3\u679C\u80FD\u591F\u88AB\u7F13\u5B58\u591A\u4E45</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Access</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Control</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Max</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">Age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">delta-seconds</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="access-control-allow-credentials" tabindex="-1">Access-Control-Allow-Credentials <a class="header-anchor" href="#access-control-allow-credentials" aria-hidden="true">#</a></h4><p>\u6307\u5B9A\u4E86\u5F53\u6D4F\u89C8\u5668\u7684credentials\u8BBE\u7F6E\u4E3Atrue\u65F6\u662F\u5426\u5141\u8BB8\u6D4F\u89C8\u5668\u8BFB\u53D6response\u7684\u5185\u5BB9\u3002</p><h4 id="access-control-allow-methods" tabindex="-1">Access-Control-Allow-Methods <a class="header-anchor" href="#access-control-allow-methods" aria-hidden="true">#</a></h4><p>\u7528\u4E8E\u9884\u68C0\u8BF7\u6C42\u7684\u54CD\u5E94,\u6307\u660E\u4E86\u5B9E\u9645\u8BF7\u6C42\u6240\u5141\u8BB8\u4F7F\u7528\u7684 HTTP \u65B9\u6CD5\u3002</p><h4 id="access-control-allow-headers" tabindex="-1">Access-Control-Allow-Headers <a class="header-anchor" href="#access-control-allow-headers" aria-hidden="true">#</a></h4><p>\u7528\u4E8E\u9884\u68C0\u8BF7\u6C42\u7684\u54CD\u5E94\u3002\u5176\u6307\u660E\u4E86\u5B9E\u9645\u8BF7\u6C42\u4E2D\u5141\u8BB8\u643A\u5E26\u7684\u9996\u90E8\u5B57\u6BB5\u3002</p><h4 id="origin" tabindex="-1">Origin <a class="header-anchor" href="#origin" aria-hidden="true">#</a></h4><p>\u8868\u660E\u9884\u68C0\u8BF7\u6C42\u6216\u5B9E\u9645\u8BF7\u6C42\u7684\u6E90\u7AD9\u3002</p><h4 id="access-control-request-method" tabindex="-1">Access-Control-Request-Method <a class="header-anchor" href="#access-control-request-method" aria-hidden="true">#</a></h4><p>\u7528\u4E8E\u9884\u68C0\u8BF7\u6C42\u3002\u5176\u4F5C\u7528\u662F\uFF0C\u5C06\u5B9E\u9645\u8BF7\u6C42\u6240\u4F7F\u7528\u7684 HTTP \u65B9\u6CD5\u544A\u8BC9\u670D\u52A1\u5668\u3002</p><h4 id="access-control-request-headers" tabindex="-1">Access-Control-Request-Headers <a class="header-anchor" href="#access-control-request-headers" aria-hidden="true">#</a></h4><p>\u7528\u4E8E\u9884\u68C0\u8BF7\u6C42\u3002\u5176\u4F5C\u7528\u662F\uFF0C\u5C06\u5B9E\u9645\u8BF7\u6C42\u6240\u643A\u5E26\u7684\u9996\u90E8\u5B57\u6BB5\u544A\u8BC9\u670D\u52A1\u5668\u3002</p><h2 id="node\u4E2D\u95F4\u4EF6\u4EE3\u7406" tabindex="-1">Node\u4E2D\u95F4\u4EF6\u4EE3\u7406 <a class="header-anchor" href="#node\u4E2D\u95F4\u4EF6\u4EE3\u7406" aria-hidden="true">#</a></h2><p>\u4ECE\u670D\u52A1\u5668\u5411\u670D\u52A1\u5668\u8BF7\u6C42\uFF0C\u65E0\u9700\u9075\u5FAA\u540C\u6E90\u7B56\u7565\u3002 node\u4E2D\u95F4\u4EF6\uFF0C\u9700\u8981\u505A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A</p><ul><li>\u63A5\u53D7\u5BA2\u6237\u7AEF\u8BF7\u6C42 \u3002</li><li>\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u670D\u52A1\u5668\u3002</li><li>\u62FF\u5230\u670D\u52A1\u5668\u54CD\u5E94\u6570\u636E\u3002</li><li>\u5C06\u54CD\u5E94\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u3002</li></ul><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>http-proxy-middleware</code>\u4E2D\u95F4\u4EF6\u6765\u505A\u8FD9\u6837\u7684\u4EE3\u7406</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> express </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http-proxy-middleware</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">express</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">proxy</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">targetUrl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">changeOrigin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pathRewrite</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">baseUrl</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">cheapflightapi</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u65B9\u5F0F\u9002\u7528\u4E8E\u4EE5node\u4F5C\u4E3Aweb\u670D\u52A1\u5668\u7684\u573A\u666F\uFF0C\u6BD4\u5982SSR\u5E94\u7528\uFF0C\u8FD9\u6837\u4F1A\u975E\u5E38\u65B9\u4FBF\u7684\u53BB\u505A\u5404\u79CD\u670D\u52A1\u7684\u8F6C\u53D1\u3002</p><h2 id="nginx\u53CD\u5411\u4EE3\u7406" tabindex="-1">Nginx\u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#nginx\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h2><p>\u4F7F\u7528Nginx\u670D\u52A1\u5668\u7684\u53CD\u5411\u4EE3\u7406\u529F\u80FD\u6765\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u975E\u5E38\u7B80\u5355\u4E14\uFF0C\u53EA\u9700\u8981\u4FEE\u6539nginx\u7684\u914D\u7F6E\u5373\u53EF\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\uFF0C\u652F\u6301\u6240\u6709\u6D4F\u89C8\u5668\uFF0C\u652F\u6301session\uFF0C\u4E0D\u9700\u8981\u4FEE\u6539\u4EFB\u4F55\u4EE3\u7801\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5F71\u54CD\u670D\u52A1\u5668\u6027\u80FD\u3002</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// proxy\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name  www.domain1.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass   http://www.domain2.com</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#\u53CD\u5411\u4EE3\u7406\u57DF</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_cookie_domain www.domain2.com www.domain1.com</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u4FEE\u6539cookie\u91CC\u57DF\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Origin http://www.domain1.com</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#\u5F53\u524D\u7AEF\u53EA\u8DE8\u57DF\u4E0D\u5E26cookie\u65F6\uFF0C\u53EF\u4E3A*</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Access-Control-Allow-Credentials </span><span style="color:#82AAFF;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-hidden="true">#</a></h2><p>\u5229\u7528script\u6807\u7B7E\u4E0D\u53D7\u8DE8\u57DF\u9650\u5236\u800C\u5F62\u6210\u7684\u4E00\u79CD\u65B9\u6848\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">jsonpRequest</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> params</span><span style="color:#89DDFF;">}){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">script</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cb</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jsonRequestCb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">cb</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{...</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cb</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parmas</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">params[key]</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">?</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&amp;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onerror</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">script</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">jsonpRequest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:3000/say</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">wd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">haoxl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(data</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u3010JSONP\u7684\u4F18\u7F3A\u70B9\u3011 \u4F18\u70B9\uFF1A\u517C\u5BB9\u6027\u597D\uFF08\u517C\u5BB9\u4F4E\u7248\u672CIE\uFF09 \u7F3A\u70B9\uFF1A 1.JSONP\u53EA\u652F\u6301GET\u8BF7\u6C42\uFF1B 2.XMLHttpRequest\u76F8\u5BF9\u4E8EJSONP\u6709\u7740\u66F4\u597D\u7684\u9519\u8BEF\u5904\u7406\u673A\u5236 3.\u62FF\u4E0D\u5230\u72B6\u6001\u7801\u662F\u4EC0\u4E48\u548Cheader</p><h3 id="jsonp\u548Cajax\u5BF9\u6BD4" tabindex="-1">JSONP\u548CAJAX\u5BF9\u6BD4 <a class="header-anchor" href="#jsonp\u548Cajax\u5BF9\u6BD4" aria-hidden="true">#</a></h3><p>JSONP\u548CAJAX\u76F8\u540C\uFF0C\u90FD\u662F\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u8BF7\u6C42\uFF0C\u4ECE\u670D\u52A1\u5668\u7AEF\u83B7\u53D6\u6570\u636E\u7684\u65B9\u5F0F\u3002\u4F46AJAX\u5C5E\u4E8E\u540C\u6E90\u7B56\u7565\uFF0CJSONP\u5C5E\u4E8E\u975E\u540C\u6E90\u7B56\u7565\uFF08\u8DE8\u57DF\u8BF7\u6C42\uFF09</p><h2 id="postmessage" tabindex="-1">postMessage <a class="header-anchor" href="#postmessage" aria-hidden="true">#</a></h2><p>window.postMessage(message,targetOrigin) \u65B9\u6CD5\u662Fhtml5\u65B0\u5F15\u8FDB\u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u5411\u5176\u5B83\u7684window\u5BF9\u8C61\u53D1\u9001\u6D88\u606F\uFF0C\u65E0\u8BBA\u8FD9\u4E2Awindow\u5BF9\u8C61\u662F\u5C5E\u4E8E\u540C\u6E90\u6216\u4E0D\u540C\u6E90.</p><p>\u5B9E\u9645\u4E2D\u4F7F\u7528\u573A\u666F\u4E0D\u591A\uFF0C\u4E2A\u4EBA\u8BA4\u4E3A\u4ED6\u5C5E\u4E8E\u8DE8\u9875\u9762\u901A\u4FE1\u7684\u4E00\u79CD\u3002\u6211\u53EA\u5728\u4E00\u6B21\u5411iframe\u53D1\u9001\u6D88\u606F\u7684\u65F6\u5019\u7528\u5230\u8FC7\u3002\u53E6\u5916\u5C0F\u7A0B\u5E8F\u7684\u5185\u5D4CH5\u5411\u539F\u751F\u53D1\u9001\u6D88\u606F\u7684\u65B9\u6CD5\u4E0E\u6B64\u7C7B\u4F3C\u3002</p>`,78),r=[t];function c(D,y,F,i,A,C){return a(),n("div",null,r)}var u=s(e,[["render",c]]);export{h as __pageData,u as default};
