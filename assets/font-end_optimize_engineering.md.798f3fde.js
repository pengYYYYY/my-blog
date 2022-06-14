import{_ as s,o as l,c as a,a as n}from"./app.9ef6ba01.js";const h='{"title":"\u5DE5\u7A0B\u4E2D\u7684\u76F8\u5173\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E32\u67D3\u76F8\u5173","slug":"\u6E32\u67D3\u76F8\u5173"},{"level":3,"title":"\u6E32\u67D3\u6D41\u7A0B","slug":"\u6E32\u67D3\u6D41\u7A0B"},{"level":3,"title":"\u9875\u9762\u6E32\u67D3\u6280\u672F\u67B6\u6784","slug":"\u9875\u9762\u6E32\u67D3\u6280\u672F\u67B6\u6784"},{"level":3,"title":"lazy-load\u5B9E\u73B0","slug":"lazy-load\u5B9E\u73B0"},{"level":3,"title":"\u9884\u52A0\u8F7D","slug":"\u9884\u52A0\u8F7D"},{"level":2,"title":"webview","slug":"webview"},{"level":3,"title":"ios UIWebview","slug":"ios-uiwebview"},{"level":3,"title":"ios wkWebview","slug":"ios-wkwebview"},{"level":2,"title":"\u76D1\u63A7","slug":"\u76D1\u63A7"},{"level":3,"title":"h5\u8D28\u91CF\u5373\u65F6\u68C0\u6D4B","slug":"h5\u8D28\u91CF\u5373\u65F6\u68C0\u6D4B"},{"level":3,"title":"\u4E0A\u7EBF\u540Eh5\u6027\u80FD\u548C\u9519\u8BEF\u76D1\u63A7","slug":"\u4E0A\u7EBF\u540Eh5\u6027\u80FD\u548C\u9519\u8BEF\u76D1\u63A7"},{"level":2,"title":"\u6253\u5305\u4F18\u5316\u624B\u6BB5","slug":"\u6253\u5305\u4F18\u5316\u624B\u6BB5"},{"level":3,"title":"treeShaking","slug":"treeshaking"},{"level":3,"title":"ScopeHoisting","slug":"scopehoisting"},{"level":3,"title":"split chunk","slug":"split-chunk"},{"level":3,"title":"terser","slug":"terser"},{"level":2,"title":"eslint","slug":"eslint"},{"level":3,"title":"eslint\u7684\u843D\u5730","slug":"eslint\u7684\u843D\u5730"},{"level":2,"title":"webpack\u6253\u5305\u57FA\u7840\u5E93","slug":"webpack\u6253\u5305\u57FA\u7840\u5E93"},{"level":3,"title":"\u670D\u52A1\u7AEF\u6E32\u67D3","slug":"\u670D\u52A1\u7AEF\u6E32\u67D3-1"},{"level":3,"title":"\u6784\u5EFA\u5305\u914D\u7F6E","slug":"\u6784\u5EFA\u5305\u914D\u7F6E"},{"level":2,"title":"webpack\u4F18\u5316","slug":"webpack\u4F18\u5316"},{"level":3,"title":"\u6027\u80FD\u5206\u6790","slug":"\u6027\u80FD\u5206\u6790"},{"level":3,"title":"\u901F\u5EA6\u4F18\u5316","slug":"\u901F\u5EA6\u4F18\u5316"},{"level":3,"title":"\u5206\u5305:\u8BBE\u7F6E Externals","slug":"\u5206\u5305-\u8BBE\u7F6E-externals"},{"level":3,"title":"\u9884\u7F16\u8BD1\u8D44\u6E90\u6A21\u5757","slug":"\u9884\u7F16\u8BD1\u8D44\u6E90\u6A21\u5757"},{"level":3,"title":"\u7F13\u5B58","slug":"\u7F13\u5B58"},{"level":3,"title":"\u7F29\u5C0F\u6784\u5EFA\u76EE\u6807","slug":"\u7F29\u5C0F\u6784\u5EFA\u76EE\u6807"},{"level":3,"title":"\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4","slug":"\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4"},{"level":3,"title":"\u4F53\u79EF\u4F18\u5316","slug":"\u4F53\u79EF\u4F18\u5316"},{"level":3,"title":"loader\u548Cplugin","slug":"loader\u548Cplugin"}],"relativePath":"font-end/optimize/engineering.md","lastUpdated":1655193129000}',p={name:"font-end/optimize/engineering.md"},e=n(`<h1 id="\u5DE5\u7A0B\u4E2D\u7684\u76F8\u5173\u4F18\u5316" tabindex="-1">\u5DE5\u7A0B\u4E2D\u7684\u76F8\u5173\u4F18\u5316 <a class="header-anchor" href="#\u5DE5\u7A0B\u4E2D\u7684\u76F8\u5173\u4F18\u5316" aria-hidden="true">#</a></h1><h2 id="\u6E32\u67D3\u76F8\u5173" tabindex="-1">\u6E32\u67D3\u76F8\u5173 <a class="header-anchor" href="#\u6E32\u67D3\u76F8\u5173" aria-hidden="true">#</a></h2><h3 id="\u6E32\u67D3\u6D41\u7A0B" tabindex="-1">\u6E32\u67D3\u6D41\u7A0B <a class="header-anchor" href="#\u6E32\u67D3\u6D41\u7A0B" aria-hidden="true">#</a></h3><ul><li>\u751F\u6210dom-tree,</li><li>\u751F\u6210css-tree</li><li>\u5408\u6210css-dom-tree\uFF0C\u4E5F\u5C31\u662Frender-tree</li><li>\u8BA1\u7B97\u5E03\u5C40\uFF08layout\uFF09:\u6839\u636E\u751F\u6210\u7684render-tree,\u8FDB\u884C\u56DE\u6D41\uFF0C\u4EE5\u8BA1\u7B97\u6BCF\u4E2A\u8282\u70B9\u7684\u51E0\u4F55\u4FE1\u606F\uFF08\u4F4D\u7F6E\uFF0C\u5927\u5C0F\uFF0C\u5B57\u4F53\u6837\u5F0F\uFF09\u3002</li><li>\u7ED8\u5236\uFF08painting\uFF09\uFF1A\u6839\u636E\u6E32\u67D3\u6811\u548C\u56DE\u6D41\u5F97\u5230\u7684\u51E0\u4F55\u4FE1\u606F\uFF0C\u5F97\u5230\u6BCF\u4E2A\u8282\u70B9\u7684\u7EDD\u5BF9\u50CF\u7D20</li><li>\u5C55\u793A\uFF08display\uFF09\uFF1A\u5C06\u50CF\u7D20\u53D1\u9001\u7ED9\u56FE\u5F62\u5904\u7406\u5668\uFF08GPU\uFF09,\u5C55\u793A\u5230\u9875\u9762\u4E0A</li></ul><h3 id="\u9875\u9762\u6E32\u67D3\u6280\u672F\u67B6\u6784" tabindex="-1">\u9875\u9762\u6E32\u67D3\u6280\u672F\u67B6\u6784 <a class="header-anchor" href="#\u9875\u9762\u6E32\u67D3\u6280\u672F\u67B6\u6784" aria-hidden="true">#</a></h3><h4 id="\u670D\u52A1\u7AEF\u6E32\u67D3" tabindex="-1">\u670D\u52A1\u7AEF\u6E32\u67D3 <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3" aria-hidden="true">#</a></h4><ul><li>\u540E\u7AEF\u540C\u6B65\u6E32\u67D3\u3001\u540C\u6784\u76F4\u51FA\u9875\u9762</li></ul><h4 id="\u5BA2\u6237\u7AEF\u6E32\u67D3" tabindex="-1">\u5BA2\u6237\u7AEF\u6E32\u67D3 <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u6E32\u67D3" aria-hidden="true">#</a></h4><ul><li>js\u6E32\u67D3\uFF1A\u9759\u6001\u5316\u3001\u524D\u540E\u7AEF\u5206\u79BB\u3001\u5355\u9875\u5E94\u7528</li><li>web app\uFF1Aang, vue, react</li></ul><h3 id="lazy-load\u5B9E\u73B0" tabindex="-1">lazy-load\u5B9E\u73B0 <a class="header-anchor" href="#lazy-load\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:data-src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lazy-load-img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> time</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isRun</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">isRun</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">isRun</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">isRun</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scroll </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#A6ACCD;">(watchScroll</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">watchScroll</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bodyScrollHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">windowHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">images</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelectorAll</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lazy-load-img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">images</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">imgHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">images</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">offsetTop</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">imgHeight</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">windowHeight</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bodyScrollHeight</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">images</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">images</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data-src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">images</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">className</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">images</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lazy-load-img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u9884\u52A0\u8F7D" tabindex="-1">\u9884\u52A0\u8F7D <a class="header-anchor" href="#\u9884\u52A0\u8F7D" aria-hidden="true">#</a></h3><p>\u5B9E\u73B0\u65B9\u5F0F</p><ol><li>html\u6807\u7B7E</li><li>image\u5BF9\u8C61</li><li>\u4F7F\u7528preload,prefetch,preconnect</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prefetch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scr/image.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dns-prefetch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scr/image.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preconnect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://my.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">crossorigin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="webview" tabindex="-1">webview <a class="header-anchor" href="#webview" aria-hidden="true">#</a></h2><h3 id="ios-uiwebview" tabindex="-1">ios UIWebview <a class="header-anchor" href="#ios-uiwebview" aria-hidden="true">#</a></h3><blockquote><p>\u4E0D\u8DB3</p></blockquote><ol><li>\u5185\u5B58\u6CC4\u9732</li><li>\u6781\u9AD8\u5185\u5B58\u5CF0\u503C</li><li>Touch Delay(300ms\u5EF6\u8FDF)</li><li>JavaScript\u7684\u8FD0\u884C\u6027\u80FD\u8FD8\u6709\u901A\u4FE1\u9650\u5236</li></ol><h3 id="ios-wkwebview" tabindex="-1">ios wkWebview <a class="header-anchor" href="#ios-wkwebview" aria-hidden="true">#</a></h3><blockquote><p>\u4F18\u52BF</p></blockquote><ol><li>\u82F9\u679C\u5728wwdc 2014\u4E0A\u63A8\u51FA\u7684\u65B0\u4E00\u4EE3webview\u7EC4\u4EF6</li><li>\u5185\u5B58\u5F00\u9500\u53D8\u4F4E</li><li>\u5728\u6027\u80FD\uFF0C\u7A33\u5B9A\u6027\uFF0C\u5360\u6709\u5185\u5B58\u65B9\u9762\u6709\u5F88\u5927\u7684\u63D0\u5347</li><li>\u9AD8\u8FBE60fps\u7684\u5237\u65B0\u7387</li><li>\u652F\u6301\u53F3\u6ED1\u8FD4\u56DE</li><li>\u66F4\u591A\u7684html\u5C5E\u6027</li></ol><h2 id="\u76D1\u63A7" tabindex="-1">\u76D1\u63A7 <a class="header-anchor" href="#\u76D1\u63A7" aria-hidden="true">#</a></h2><h3 id="h5\u8D28\u91CF\u5373\u65F6\u68C0\u6D4B" tabindex="-1">h5\u8D28\u91CF\u5373\u65F6\u68C0\u6D4B <a class="header-anchor" href="#h5\u8D28\u91CF\u5373\u65F6\u68C0\u6D4B" aria-hidden="true">#</a></h3><ul><li><p>\u9875\u9762\u9519\u8BEF</p><ul><li>js\u62A5\u9519</li><li>\u63A5\u53E3\u62A5\u9519</li><li>\u7EBF\u4E0A\u73AF\u5883\u68C0\u6D4B</li><li>\u9875\u9762\u767D\u5C4F</li></ul></li><li><p>\u9875\u9762\u6027\u80FD</p><ul><li>\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\u68C0\u6D4B</li><li>\u524D\u7AEFhtml\uFF0Ccss, js\u538B\u7F29\u68C0\u6D4B</li><li>js\uFF0Ccss\u4E2A\u6570\u68C0\u6D4B</li><li>\u670D\u52A1\u5668gzip\u68C0\u6D4B</li><li>\u670D\u52A1\u5668\u7F13\u5B58\u8BBE\u7F6E\u68C0\u6D4B</li></ul></li><li><p>\u9875\u9762\u5B89\u5168</p><ul><li>http\u548Chttps\u68C0\u6D4B</li><li>xss\u68C0\u6D4B</li></ul></li></ul><h3 id="\u4E0A\u7EBF\u540Eh5\u6027\u80FD\u548C\u9519\u8BEF\u76D1\u63A7" tabindex="-1">\u4E0A\u7EBF\u540Eh5\u6027\u80FD\u548C\u9519\u8BEF\u76D1\u63A7 <a class="header-anchor" href="#\u4E0A\u7EBF\u540Eh5\u6027\u80FD\u548C\u9519\u8BEF\u76D1\u63A7" aria-hidden="true">#</a></h3><ul><li><p>\u9875\u9762\u6027\u80FD\u76D1\u63A7</p><ul><li>js\u9519\u8BEF\u76D1\u63A7</li><li>API\u63A5\u53E3\u76D1\u63A7</li><li>\u65E5\u5FD7\u8BE6\u60C5</li><li>\u7528\u6237\u8F68\u8FF9</li></ul></li><li><p>\u7EDF\u8BA1\u62A5\u8868</p><ul><li>\u5927\u76D8\u8D70\u52BF</li><li>\u5730\u57DF</li><li>\u8FD0\u8425\u5546</li><li>\u6D4F\u89C8\u5668</li></ul></li><li><p>\u9875\u9762\u7BA1\u7406</p></li><li><p>\u6027\u80FD\u670D\u52A1</p></li><li><p>\u62A5\u8B66\u670D\u52A1</p></li></ul><h2 id="\u6253\u5305\u4F18\u5316\u624B\u6BB5" tabindex="-1">\u6253\u5305\u4F18\u5316\u624B\u6BB5 <a class="header-anchor" href="#\u6253\u5305\u4F18\u5316\u624B\u6BB5" aria-hidden="true">#</a></h2><h3 id="treeshaking" tabindex="-1">treeShaking <a class="header-anchor" href="#treeshaking" aria-hidden="true">#</a></h3><p>treeShaking\u4F1A\u5728\u9759\u6001\u89E3\u6790\u8FC7\u7A0B\u4E2D\u5C06\u4EE3\u7801\u4E2D\u7684\u5197\u4F59\u4EE3\u7801\u53BB\u9664\u3002\u5728<code>production</code>\u73AF\u5883\u4E2D\u9ED8\u8BA4\u5F00\u542F\u3002\u8BE5\u529F\u80FD\u501F\u9274\u81EA<code>rollup</code></p><h3 id="scopehoisting" tabindex="-1">ScopeHoisting <a class="header-anchor" href="#scopehoisting" aria-hidden="true">#</a></h3><p>scopeHoisting\u4E3B\u8981\u7528\u4E8E\u5904\u7406\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u7531\u4E8E\u6A21\u5757\u5904\u7406\u5BFC\u81F4\u51FA\u73B0\u7684\u5927\u91CF\u533F\u540D\u95ED\u5305\u51FD\u6570\uFF0C\u5728<code>ES6-</code>\u4E2D,\u901A\u5E38\u4F1A\u901A\u8FC7\u4F7F\u7528\u533F\u540D\u95ED\u5305\u51FD\u6570\u6765\u6784\u9020\u6A21\u5757\u3002</p><p><code>scopeHoisting</code>\u7684\u539F\u7406\u662F\u901A\u8FC7\u5206\u6790\u4EE3\u7801\u4E2D\u7684\u6A21\u5757\u6267\u884C\u987A\u5E8F\uFF0C\u66FF\u6362\u53D8\u91CF\u540D\u79F0\u6765\u8FBE\u5230\u51CF\u5C11\u95ED\u5305\u4EA7\u751F\u7684\u6548\u679C\u3002\u95ED\u5305\u4F1A\u5F62\u6210\u5927\u91CF\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u589E\u52A0\u5185\u5B58\u635F\u8017\u3002</p><h3 id="split-chunk" tabindex="-1">split chunk <a class="header-anchor" href="#split-chunk" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u5927\u7684\u5E94\u7528\u6765\u8BB2\uFF0C\u5C06\u6240\u6709\u4EE3\u7801\u90FD\u653E\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\u4E0D\u591F\u663E\u793A\uFF0C\u9700\u8981\u5BF9\u4EE3\u7801\u8FDB\u884C\u5206\u5272\u548C\u61D2\u52A0\u8F7D(\u7528\u5230\u7684\u65F6\u5019\u624D\u52A0\u8F7D)\u3002</p><p>\u61D2\u52A0\u8F7Djs\u811A\u672C\u7684\u65B9\u5F0F</p><ul><li>commonJS:require.ensure</li><li>ES6:\u52A8\u6001import(\u76EE\u524D\u539F\u751F\u672A\u652F\u6301\uFF0C\u9700\u8981babel\u8F6C\u6362) <code>@babel/plugin-syntax-dynamic-import</code></li></ul><h3 id="terser" tabindex="-1">terser <a class="header-anchor" href="#terser" aria-hidden="true">#</a></h3><p>\u538B\u7F29\u5DE5\u5177\uFF0Cuglify\u5728\u9047\u5230es6\u65F6\u4F1A\u62A5\u9519\u3002terser\u53EF\u4EE5\u8FDB\u884C\u5904\u7406\u3002</p><h2 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-hidden="true">#</a></h2><p>eslint\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177</p><h3 id="eslint\u7684\u843D\u5730" tabindex="-1">eslint\u7684\u843D\u5730 <a class="header-anchor" href="#eslint\u7684\u843D\u5730" aria-hidden="true">#</a></h3><p>\u5B89\u88C5husky\uFF0C\u589E\u52A0npm script,\u901A\u8FC7lint-staged\u589E\u91CF\u68C0\u67E5\u4FEE\u6539\u65B9\u5F0F</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">precommit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lint-staged</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lint-staged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">linters</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">*.{js,css}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint --fix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="webpack\u6253\u5305\u57FA\u7840\u5E93" tabindex="-1">webpack\u6253\u5305\u57FA\u7840\u5E93 <a class="header-anchor" href="#webpack\u6253\u5305\u57FA\u7840\u5E93" aria-hidden="true">#</a></h2><p>webpack\u6253\u5305\u57FA\u7840\u5E93,\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6</p><ul><li>\u9700\u8981\u6253\u5305\u538B\u7F29\u7248\u548C\u975E\u538B\u7F29\u7248</li><li>\u652F\u6301AMD/CJS/ESM\u6A21\u5757\u5F15\u5165</li></ul><p>webpack.config.js</p><h3 id="\u670D\u52A1\u7AEF\u6E32\u67D3-1" tabindex="-1">\u670D\u52A1\u7AEF\u6E32\u67D3 <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3-1" aria-hidden="true">#</a></h3><p>\u6E32\u67D3\uFF1AHTML+CSS+JS+Data-&gt;\u6E32\u67D3\u540E\u7684HTML \u670D\u52A1\u7AEF\uFF1A</p><ul><li>\u6240\u6709\u6A21\u677F\u7B49\u8D44\u6E90\u90FD\u50A8\u5B58\u5728\u670D\u52A1\u7AEF</li><li>\u5185\u7F51\u673A\u5668\u62C9\u53D6\u6570\u636E\u5FEB</li><li>\u4E00\u4E2AHTML\u8FD4\u56DE\u6570\u636E</li></ul><p>| |\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF5C \u670D\u52A1\u7AEF\u6E32\u67D3\uFF5C \uFF5C--\uFF5C--\uFF5C--\uFF5C \uFF5C\u8BF7\u6C42\uFF5C\u591A\u4E2A\u8BF7\u6C42\uFF5C1\u4E2A\u8BF7\u6C42\uFF5C \uFF5C\u52A0\u8F7D\u8FC7\u7A0B\uFF5CHTML&amp;\u6570\u636E\u4E32\u884C\u52A0\u8F7D\uFF5C1\u4E2A\u8BF7\u6C42\u8FD4\u56DEHTML&amp;\u6570\u636E\uFF5C \uFF5C\u6E32\u67D3\uFF5C\u524D\u7AEF\u6E32\u67D3\uFF5C\u670D\u52A1\u7AEF\u6E32\u67D3\uFF5C</p><p>\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6838\u5FC3\u662F\u51CF\u5C11\u8BF7\u6C42\uFF0C\u51CF\u5C11\u767D\u5C4F\u65F6\u95F4\uFF0C\u5BF9SEO\u66F4\u52A0\u53CB\u597D</p><h4 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1">\u5B9E\u73B0\u601D\u8DEF <a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a></h4><ul><li><p>\u670D\u52A1\u7AEF\uFF1A\u4F7F\u7528\u5E93\u7684 <code>renderToString</code> \u65B9\u6CD5\u5C06\u7EC4\u4EF6\u6E32\u67D3\u6210\u5B57\u7B26\u4E32\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE\u5BF9\u5E94\u7684\u6A21\u7248\u3002</p></li><li><p>\u5BA2\u6237\u7AEF\uFF1A\u6253\u5305\u51FA\u9488\u5BF9\u670D\u52A1\u7AEF\u7684\u7EC4\u4EF6</p></li></ul><h3 id="\u6784\u5EFA\u5305\u914D\u7F6E" tabindex="-1">\u6784\u5EFA\u5305\u914D\u7F6E <a class="header-anchor" href="#\u6784\u5EFA\u5305\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u901A\u7528\u6027</p><ul><li>\u4E1A\u52A1\u5F00\u53D1\u8005\u65E0\u9700\u5173\u6CE8\u6784\u5EFA\u914D\u7F6E</li><li>\u7EDF\u4E00\u56E2\u961F\u6784\u5EFA\u811A\u672C</li></ul><p>\u53EF\u7EF4\u62A4\u6027</p><ul><li>\u6784\u5EFA\u914D\u7F6E\u5408\u7406\u62C6\u5206</li><li>README\u6587\u6863</li></ul><p>\u8D28\u91CF</p><ul><li>\u5192\u70DF\u6D4B\u8BD5\uFF0C\u5355\u5143\u6D4B\u8BD5\uFF0C\u6D4B\u8BD5\u8986\u76D6\u7387</li><li>\u6301\u7EED\u96C6\u6210</li></ul><h2 id="webpack\u4F18\u5316" tabindex="-1">webpack\u4F18\u5316 <a class="header-anchor" href="#webpack\u4F18\u5316" aria-hidden="true">#</a></h2><p>webpack\u7684\u4F18\u5316\u5206\u4E24\u5757</p><ul><li>\u901F\u5EA6\u4F18\u5316</li><li>\u4F53\u79EF\u4F18\u5316</li></ul><h3 id="\u6027\u80FD\u5206\u6790" tabindex="-1">\u6027\u80FD\u5206\u6790 <a class="header-anchor" href="#\u6027\u80FD\u5206\u6790" aria-hidden="true">#</a></h3><ul><li>\u901F\u5EA6\u5206\u6790</li></ul><p>\u5206\u6790\u6574\u4E2A\u6253\u5305\u603B\u8017\u65F6,\u6BCF\u4E2A\u63D2\u4EF6\u548Cloader\u7684\u8017\u65F6\u60C5\u51B5</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;">  speedMeasureWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">speed-measure-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> smp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">speedMeasureWebpackPlugin</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpackConfig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> smp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">warp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>webpack-bundle-analyzer</li></ul><p>\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u6A21\u5757\u6587\u4EF6\u5927\u5C0F,\u4E1A\u52A1\u91CC\u9762\u7684\u7EC4\u4EF6\u4EE3\u7801\u5927\u5C0F</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wba </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack-bundle-analyzer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">wba</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u901F\u5EA6\u4F18\u5316" tabindex="-1">\u901F\u5EA6\u4F18\u5316 <a class="header-anchor" href="#\u901F\u5EA6\u4F18\u5316" aria-hidden="true">#</a></h3><ul><li>HappyPack\u89E3\u6790\u8D44\u6E90</li></ul><p>\u6BCF\u6B21 webpack \u89E3\u6790\u4E00\u4E2A\u6A21\u5757\uFF0CHappyPack \u4F1A\u5C06\u5B83\u53CA\u5B83\u7684\u4F9D\u8D56\u5206\u914D\u7ED9 worker \u7EBF\u7A0B\u4E2D</p><ul><li>\u4F7F\u7528 thread-loader \u89E3\u6790\u8D44\u6E90</li></ul><p>\u6BCF\u6B21 webpack \u89E3\u6790\u4E00\u4E2A\u6A21\u5757\uFF0Cthread-loader \u4F1A\u5C06\u5B83\u53CA\u5B83\u7684\u4F9D\u8D56\u5206\u914D\u7ED9 worker \u7EBF\u7A0B\u4E2D</p><ul><li>\u5E76\u884C\u538B\u7F29</li></ul><p>\u65B9\u6CD5\u4E00:\u4F7F\u7528 parallel-uglify-plugin \u63D2\u4EF6 \u65B9\u6CD5\u4E8C:uglifyjs-webpack-plugin \u5F00\u542F parallel \u53C2\u6570 \u65B9\u6CD5\u4E09:terser-webpack-plugin \u5F00\u542F parallel \u53C2\u6570</p><h3 id="\u5206\u5305-\u8BBE\u7F6E-externals" tabindex="-1">\u5206\u5305:\u8BBE\u7F6E Externals <a class="header-anchor" href="#\u5206\u5305-\u8BBE\u7F6E-externals" aria-hidden="true">#</a></h3><ul><li>externals</li></ul><p>\u5C06 vue \u7B49\u57FA\u7840\u5305\u901A\u8FC7 cdn \u5F15\u5165\uFF0C\u4E0D\u6253\u5165 bundle \u4E2D\u3002 \u4F7F\u7528 html-webpack-externals-plugin</p><h3 id="\u9884\u7F16\u8BD1\u8D44\u6E90\u6A21\u5757" tabindex="-1">\u9884\u7F16\u8BD1\u8D44\u6E90\u6A21\u5757 <a class="header-anchor" href="#\u9884\u7F16\u8BD1\u8D44\u6E90\u6A21\u5757" aria-hidden="true">#</a></h3><p>\u5C06 vue, vuex\u3001vue-router \u57FA\u7840\u5305\u548C\u4E1A\u52A1\u57FA\u7840\u5305\u6253\u5305\u6210\u4E00\u4E2A\u6587\u4EF6</p><p>\u4F7F\u7528 DLLPlugin \u8FDB\u884C\u5206\u5305\uFF0CDllReferencePlugin \u5BF9 manifest.json \u5F15\u7528</p><p>\u4F7F\u7528 DllReferencePlugin \u5F15\u7528 manifest.json</p><h3 id="\u7F13\u5B58" tabindex="-1">\u7F13\u5B58 <a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a></h3><p>\u76EE\u7684:\u63D0\u5347\u4E8C\u6B21\u6784\u5EFA\u901F\u5EA6</p><ul><li>babel-loader \u5F00\u542F\u7F13\u5B58</li><li>terser-webpack-plugin \u5F00\u542F\u7F13\u5B58</li><li>\u4F7F\u7528 cache-loader \u6216\u8005 hard-source-webpack-plugin</li></ul><h3 id="\u7F29\u5C0F\u6784\u5EFA\u76EE\u6807" tabindex="-1">\u7F29\u5C0F\u6784\u5EFA\u76EE\u6807 <a class="header-anchor" href="#\u7F29\u5C0F\u6784\u5EFA\u76EE\u6807" aria-hidden="true">#</a></h3><p>\u76EE\u7684:\u5C3D\u53EF\u80FD\u7684\u5C11\u6784\u5EFA\u6A21\u5757,\u6BD4\u5982 babel-loader \u4E0D\u89E3\u6790 node_modules</p><h3 id="\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4" tabindex="-1">\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4 <a class="header-anchor" href="#\u51CF\u5C11\u6587\u4EF6\u641C\u7D22\u8303\u56F4" aria-hidden="true">#</a></h3><ul><li><p>\u4F18\u5316 resolve.modules \u914D\u7F6E(\u51CF\u5C11\u6A21\u5757\u641C\u7D22\u5C42\u7EA7)</p></li><li><p>\u4F18\u5316 resolve.mainFields \u914D\u7F6E</p></li><li><p>\u4F18\u5316 resolve.extensions \u914D\u7F6E</p></li><li><p>\u5408\u7406\u4F7F\u7528 alias</p></li></ul><h3 id="\u4F53\u79EF\u4F18\u5316" tabindex="-1">\u4F53\u79EF\u4F18\u5316 <a class="header-anchor" href="#\u4F53\u79EF\u4F18\u5316" aria-hidden="true">#</a></h3><ul><li>\u5220\u9664\u6389\u65E0\u7528\u7684 CSS</li></ul><p>PurifyCSS: \u904D\u5386\u4EE3\u7801\uFF0C\u8BC6\u522B\u5DF2\u7ECF\u7528\u5230\u7684 CSS class uncss: HTML \u9700\u8981\u901A\u8FC7 jsdom \u52A0\u8F7D\uFF0C\u6240\u6709\u7684\u6837\u5F0F\u901A\u8FC7PostCSS\u89E3\u6790\uFF0C\u901A\u8FC7document.querySelector \u6765\u8BC6\u522B\u5728 html \u6587\u4EF6\u91CC\u9762\u4E0D\u5B58\u5728\u7684\u9009\u62E9\u5668</p><p>\u4F7F\u7528 purgecss-webpack-plugin \u548C mini-css-extract-plugin \u914D\u5408\u4F7F\u7528\u3002</p><ul><li>\u52A8\u6001 Polyfill</li></ul><p>Polyfill Service\u539F\u7406: \u8BC6\u522B User Agent\uFF0C\u4E0B\u53D1\u4E0D\u540C\u7684 Polyfill</p><h3 id="loader\u548Cplugin" tabindex="-1">loader\u548Cplugin <a class="header-anchor" href="#loader\u548Cplugin" aria-hidden="true">#</a></h3><ul><li><p>loader loader\u662F\u6587\u4EF6\u52A0\u8F7D\u5668\uFF0C\u80FD\u591F\u52A0\u8F7D\u8D44\u6E90\u6587\u4EF6\uFF0C\u5E76\u5BF9\u8FD9\u4E9B\u6587\u4EF6\u8FDB\u884C\u4E00\u4E9B\u5904\u7406\uFF0C\u8BF8\u5982\u7F16\u8BD1\u3001\u538B\u7F29\u7B49\uFF0C\u6700\u7EC8\u4E00\u8D77\u6253\u5305\u5230\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D</p><ul><li>\u5904\u7406\u4E00\u4E2A\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2Aloader\uFF0Cloader\u7684\u6267\u884C\u987A\u5E8F\u662F\u548C\u672C\u8EAB\u7684\u987A\u5E8F\u662F\u76F8\u53CD\u7684\uFF0C\u5373\u6700\u540E\u4E00\u4E2Aloader\u6700\u5148\u6267\u884C\uFF0C\u7B2C\u4E00\u4E2Aloader\u6700\u540E\u6267\u884C\u3002</li><li>\u7B2C\u4E00\u4E2A\u6267\u884C\u7684loader\u63A5\u6536\u6E90\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5176\u4ED6loader\u63A5\u6536\u524D\u4E00\u4E2A\u6267\u884C\u7684loader\u7684\u8FD4\u56DE\u503C\u4F5C\u4E3A\u53C2\u6570\u3002\u6700\u540E\u6267\u884C\u7684loader\u4F1A\u8FD4\u56DE\u6B64\u6A21\u5757\u7684JavaScript\u6E90\u7801</li></ul></li></ul><p>loader\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E76\u4E14return\u4E00\u4E2A\u5185\u5BB9\u5C31ok\u4E86\u3002</p><ul><li>plugin</li></ul><p>\u5728 Webpack \u8FD0\u884C\u7684\u751F\u547D\u5468\u671F\u4E2D\u4F1A\u5E7F\u64AD\u51FA\u8BB8\u591A\u4E8B\u4EF6\uFF0CPlugin \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7 Webpack \u63D0\u4F9B\u7684 API \u6539\u53D8\u8F93\u51FA\u7ED3\u679C\u3002</p>`,105),o=[e];function t(r,c,i,F,y,D){return l(),a("div",null,o)}var u=s(p,[["render",t]]);export{h as __pageData,u as default};
