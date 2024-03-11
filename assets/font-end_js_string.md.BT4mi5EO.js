import{_ as s,c as a,o as n,U as l}from"./chunks/framework.B9byA8Cw.js";const u=JSON.parse('{"title":"字符操作","description":"","frontmatter":{},"headers":[],"relativePath":"font-end/js/string.md","filePath":"font-end/js/string.md","lastUpdated":1710173044000}'),e={name:"font-end/js/string.md"},o=l(`<h1 id="字符操作" tabindex="-1">字符操作 <a class="header-anchor" href="#字符操作" aria-label="Permalink to &quot;字符操作&quot;">​</a></h1><p>JavaScript 中的字符操作</p><h2 id="搜索" tabindex="-1">搜索 <a class="header-anchor" href="#搜索" aria-label="Permalink to &quot;搜索&quot;">​</a></h2><ul><li>indexOf() 检索字符串，返回字符串开始位置的索引</li><li>match() 找到一个或多个正则表达式的匹配。</li><li>lastIndexOf() 从后向前搜索字符串，返回索引值</li><li>search() 检索与正则表达式相匹配的值(大小写敏感)，未找到输出-1。</li></ul><h2 id="指定位置" tabindex="-1">指定位置 <a class="header-anchor" href="#指定位置" aria-label="Permalink to &quot;指定位置&quot;">​</a></h2><ul><li>charAt() 返回指定位置的字符</li><li>charCodeAt() 返回指定位置字符的Unicode编码</li><li>fromCharCode() 从字符编码创建一个字符串</li><li>concat() 连接字符串</li><li>replace() 替换与正则表达式匹配的子串。</li></ul><h2 id="截取和片段" tabindex="-1">截取和片段 <a class="header-anchor" href="#截取和片段" aria-label="Permalink to &quot;截取和片段&quot;">​</a></h2><ul><li>substr(a,b) 截取字符串，从a索引开始，截取b个字符，将截取的字符返回，不改变原来的字符串。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">abcdefg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substr</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//cde</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>substring(a,b)截取字符串，从索引a开始，到索引b结束，不包括索引b的字符。返回截取字符。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">abcdefg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//cd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>slice() 截取字符串，类似substring(),slice(),可以接受参数为负数，从后往前截取。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">abcdefg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//ef</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>split() 用指定的字符分割字符串，返回一个数组，对原来的字符串没有改变。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">123456@qq.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//ef</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="过滤" tabindex="-1">过滤 <a class="header-anchor" href="#过滤" aria-label="Permalink to &quot;过滤&quot;">​</a></h2><ul><li>trim(),去除开头和结尾处的空白字符，返回一个字符串副本，不改变原字符串本身。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;"> 123 @qq.com </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#BABED8;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//ef</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="大小写" tabindex="-1">大小写 <a class="header-anchor" href="#大小写" aria-label="Permalink to &quot;大小写&quot;">​</a></h2><ul><li>toLowerCase() 将大写字母的字符改为小写，不改变原来的字符。</li><li>toUpperCase() 将小写字母的字符改为大写，不改变原来的字符。</li></ul>`,20),p=[o];function t(r,c,i,D,y,F){return n(),a("div",null,p)}const b=s(e,[["render",t]]);export{u as __pageData,b as default};