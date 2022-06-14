import{_ as s,o as a,c as n,a as l}from"./app.9ef6ba01.js";const d='{"title":"\u6A21\u5757\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981\u6A21\u5757\u5316","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981\u6A21\u5757\u5316"},{"level":2,"title":"CommonJS\u89C4\u8303","slug":"commonjs\u89C4\u8303"},{"level":3,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":3,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0"},{"level":2,"title":"AMD","slug":"amd"},{"level":3,"title":"AMD\u7528\u6CD5","slug":"amd\u7528\u6CD5"},{"level":2,"title":"CMD\u89C4\u8303","slug":"cmd\u89C4\u8303"},{"level":2,"title":"UMD","slug":"umd"},{"level":2,"title":"ES6 module","slug":"es6-module"},{"level":2,"title":"CommonJS\uFF0CES module \u7684\u533A\u522B","slug":"commonjs\uFF0Ces-module-\u7684\u533A\u522B"}],"relativePath":"font-end/engineering/modular.md","lastUpdated":1655193129000}',p={name:"font-end/engineering/modular.md"},o=l(`<h1 id="\u6A21\u5757\u5316" tabindex="-1">\u6A21\u5757\u5316 <a class="header-anchor" href="#\u6A21\u5757\u5316" aria-hidden="true">#</a></h1><ul><li>CommonJS\u89C4\u8303</li><li>AMD</li><li>CMD</li><li>UMD</li><li>ES6 modules</li></ul><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u6A21\u5757\u5316" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u6A21\u5757\u5316 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u6A21\u5757\u5316" aria-hidden="true">#</a></h2><ul><li>\u6C61\u67D3\u5168\u5C40\u4F5C\u7528\u57DF\u3002\u5BB9\u6613\u6709\u547D\u540D\u51B2\u7A81\u95EE\u9898</li><li>\u4F9D\u8D56\u5173\u7CFB\u4E0D\u660E\u663E\uFF0C\u4E0D\u5229\u4E8E\u7EF4\u62A4</li><li>\u5F00\u53D1\u548C\u540E\u671F\u7EF4\u62A4\u6210\u672C\u8F83\u9AD8</li><li>\u65E0\u6CD5\u505A\u5DE5\u7A0B\u5316</li></ul><h2 id="commonjs\u89C4\u8303" tabindex="-1">CommonJS\u89C4\u8303 <a class="header-anchor" href="#commonjs\u89C4\u8303" aria-hidden="true">#</a></h2><p>Node.js\u662FcommonJS\u89C4\u8303\u7684\u4E3B\u8981\u5E94\u7528\u8005</p><p>module\u3001exports\u3001require\u3001global\u662F\u5B83\u7684\u5173\u952E\u5B57</p><h3 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 require\u65B9\u6CD5\u6765\u540C\u6B65\u52A0\u8F7D\u6240\u8981\u4F9D\u8D56\u7684\u5176\u4ED6\u6A21\u5757\uFF0C\u7136\u540E\u901A\u8FC7 exports \u6216\u8005 module.exports \u6765\u5BFC\u51FA\u9700\u8981\u66B4\u9732\u7684\u63A5\u53E3</p><ul><li>a.js</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> add </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports.</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports.</span><span style="color:#A6ACCD;">add </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> add</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>b.js</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(example</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 5</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(example</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 6</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5B9E\u73B0" tabindex="-1">\u5B9E\u73B0 <a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u5176\u5B9E\u5728\u7F16\u8BD1\u7684\u8FC7\u7A0B\u4E2D\uFF0CNode \u5BF9\u6211\u4EEC\u5B9A\u4E49\u7684 JS \u6A21\u5757\u8FDB\u884C\u4E86\u4E00\u6B21\u57FA\u7840\u7684\u5305\u88C5</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">exports</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> require</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> modules</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> __filename</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> __dirname</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u4FBF\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E9B\u4F20\u5165\u7684arguments\u4EE5\u53CA\u9694\u79BB\u4E86\u5F7C\u6B64\u7684\u4F5C\u7528\u57DF\u3002 CommonJS \u7684\u4E00\u4E2A\u6A21\u5757\uFF0C\u5C31\u662F\u4E00\u4E2A\u811A\u672C\u6587\u4EF6\u3002require\u547D\u4EE4\u7B2C\u4E00\u6B21\u52A0\u8F7D\u8BE5\u811A\u672C\uFF0C\u5C31\u4F1A\u6267\u884C\u6574\u4E2A\u811A\u672C\uFF0C\u7136\u540E\u5728\u5185\u5B58\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">exports</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">loaded</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u540E\u9700\u8981\u7528\u5230\u8FD9\u4E2A\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u5230exports\u5C5E\u6027\u4E0A\u9762\u53D6\u503C\u3002\u5373\u4F7F\u518D\u6B21\u6267\u884Crequire\u547D\u4EE4\uFF0C\u4E5F\u4E0D\u4F1A\u518D\u6B21\u6267\u884C\u8BE5\u6A21\u5757\uFF0C\u800C\u662F\u5230\u7F13\u5B58\u4E4B\u4E2D\u53D6\u503C\u3002commonJS\u7528\u540C\u6B65\u7684\u65B9\u5F0F\u52A0\u8F7D\u6A21\u5757\uFF0C\u53EA\u6709\u5728\u4EE3\u7801\u6267\u884C\u5230require\u7684\u65F6\u5019\uFF0C\u624D\u56DE\u53BB\u6267\u884C\u52A0\u8F7D\u3002\u5728\u670D\u52A1\u7AEF\uFF0C\u6A21\u5757\u6587\u4EF6\u90FD\u5B58\u5728\u672C\u5730\u78C1\u76D8\uFF0C\u8BFB\u53D6\u975E\u5E38\u5FEB.</p><p>\u4F18\u70B9\uFF1ACommonJS\u89C4\u8303\u5B8C\u6210\u4E86JavaScript\u7684\u6A21\u5757\u5316\uFF0C\u89E3\u51B3\u4E86\u4F9D\u8D56\u3001\u5168\u5C40\u53D8\u91CF\u6C61\u67D3\u7684\u95EE\u9898</p><p>\u7F3A\u70B9\uFF1A\u5728\u6D4F\u89C8\u5668\u7AEF\uFF0C\u9650\u4E8E\u7F51\u7EDC\u539F\u56E0\uFF0C\u66F4\u5408\u7406\u7684\u65B9\u6848\u662F\u4F7F\u7528\u5F02\u6B65\u52A0\u8F7D\u3002\u8FD9\u5C31\u662FAMD\u89C4\u8303\u8BDE\u751F\u7684\u80CC\u666F\u3002</p><h2 id="amd" tabindex="-1">AMD <a class="header-anchor" href="#amd" aria-hidden="true">#</a></h2><p>\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757\uFF1A\u8FD9\u91CC\u5F02\u6B65\u6307\u7684\u662F\u4E0D\u5835\u585E\u6D4F\u89C8\u5668\u5176\u4ED6\u4EFB\u52A1\uFF08dom\u6784\u5EFA\uFF0Ccss\u6E32\u67D3\u7B49\uFF09\uFF0C\u800C\u52A0\u8F7D\u5185\u90E8\u662F\u540C\u6B65\u7684\uFF08\u52A0\u8F7D\u5B8C\u6A21\u5757\u540E\u7ACB\u5373\u6267\u884C\u56DE\u8C03\uFF09</p><h3 id="amd\u7528\u6CD5" tabindex="-1">AMD\u7528\u6CD5 <a class="header-anchor" href="#amd\u7528\u6CD5" aria-hidden="true">#</a></h3><p>define()\u5B9A\u4E49\u6A21\u5757\uFF0C\u7528require()\u52A0\u8F7D\u6A21\u5757</p><ul><li>define(id, [depends], callback)</li><li>require([module], callback)</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5B9A\u4E49 moduleA \u4F9D\u8D56 a, b\u6A21\u5757</span></span>
<span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528</span></span>
<span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./moduleA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">moduleA</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4F18\u70B9\uFF1A\u9002\u5408\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757\u3002 \u53EF\u4EE5\u5E76\u884C\u52A0\u8F7D\u591A\u4E2A\u6A21\u5757\u3002</p><p>\u7F3A\u70B9\uFF1A\u4E0D\u80FD\u6309\u9700\u52A0\u8F7D\uFF0C\u800C\u662F\u5FC5\u987B\u63D0\u524D\u52A0\u8F7D\u6240\u6709\u7684\u4F9D\u8D56\u3002</p><h2 id="cmd\u89C4\u8303" tabindex="-1">CMD\u89C4\u8303 <a class="header-anchor" href="#cmd\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u6309\u9700\u52A0\u8F7D\uFF0C\u4F9D\u8D56\u5C31\u8FD1\uFF0C\u5EF6\u8FDF\u6267\u884C</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">require</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> exports</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> module</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u5728\u9700\u8981\u65F6\u7533\u660E</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4EE3\u7801\u5728\u8FD0\u884C\u65F6\uFF0C\u9996\u5148\u662F\u4E0D\u77E5\u9053\u4F9D\u8D56\u7684\uFF0C\u9700\u8981\u904D\u5386\u6240\u6709\u7684require\u5173\u952E\u5B57\uFF0C\u627E\u51FA\u540E\u9762\u7684\u4F9D\u8D56\u3002\u5177\u4F53\u505A\u6CD5\u662F\u5C06function toString\u540E\uFF0C\u7528\u6B63\u5219\u5339\u914D\u51FArequire\u5173\u952E\u5B57\u540E\u9762\u7684\u4F9D\u8D56\u3002\u727A\u7272\u6027\u80FD\u6765\u6362\u53D6\u66F4\u591A\u5F00\u53D1\u4FBF\u5229\u7684\u65B9\u6CD5\u3002</p><p>\u800C AMD \u662F\u4F9D\u8D56\u524D\u7F6E\u7684\uFF0C\u6362\u53E5\u8BDD\u800C AMD \u662F\u4F9D\u8D56\u524D\u7F6E\u7684\uFF0C\u5728\u89E3\u6790\u548C\u6267\u884C\u5F53\u524D\u6A21\u5757\u4E4B\u524D\uFF0C\u6A21\u5757\u4F5C\u8005\u5FC5\u987B\u6307\u660E\u5F53\u524D\u6A21\u5757\u6240\u4F9D\u8D56\u7684\u6A21\u5757\u3002\u4EE3\u7801\u5728\u4E00\u65E6\u8FD0\u884C\u5230\u6B64\u5904\uFF0C\u80FD\u7ACB\u5373\u77E5\u6653\u4F9D\u8D56\u3002\u800C\u65E0\u9700\u904D\u5386\u6574\u4E2A\u51FD\u6570\u4F53\u627E\u5230\u5B83\u7684\u4F9D\u8D56\uFF0C\u56E0\u6B64\u6027\u80FD\u6709\u6240\u63D0\u5347\uFF0C\u7F3A\u70B9\u5C31\u662F\u5F00\u53D1\u8005\u5FC5\u987B\u663E\u5F0F\u5F97\u6307\u660E\u4F9D\u8D56\u2014\u2014\u8FD9\u4F1A\u4F7F\u5F97\u5F00\u53D1\u5DE5\u4F5C\u91CF\u53D8\u5927\u3002</p><h2 id="umd" tabindex="-1">UMD <a class="header-anchor" href="#umd" aria-hidden="true">#</a></h2><p>\u4E0D\u662F\u4E00\u79CD\u89C4\u8303,\u662F\u7ED3\u5408 AMD \u548C CommonJS \u7684\u4E00\u79CD\u66F4\u4E3A\u901A\u7528\u7684 JS \u6A21\u5757\u89E3\u51B3\u65B9\u6848,\u5728webpack\u6253\u5305\u7684\u65F6\u5019\u8FDB\u884C\u914D\u7F6E</p><h2 id="es6-module" tabindex="-1">ES6 module <a class="header-anchor" href="#es6-module" aria-hidden="true">#</a></h2><p>ES6 Modules\u4E0D\u662F\u5BF9\u8C61\uFF0Cimport\u547D\u4EE4\u4F1A\u88AB JavaScript \u5F15\u64CE\u9759\u6001\u5206\u6790\uFF0C\u5728\u7F16\u8BD1\u65F6\u5C31\u5F15\u5165\u6A21\u5757\u4EE3\u7801\uFF0C\u800C\u4E0D\u662F\u5728\u4EE3\u7801\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0C\u6240\u4EE5\u65E0\u6CD5\u5B9E\u73B0\u6761\u4EF6\u52A0\u8F7D\u3002\u4E5F\u6B63\u56E0\u4E3A\u8FD9\u4E2A\uFF0C\u4F7F\u5F97\u9759\u6001\u5206\u6790\u6210\u4E3A\u53EF\u80FD\u3002</p><ul><li>\u4E4B\u524D\u7684\u51E0\u79CD\u6A21\u5757\u5316\u65B9\u6848\u90FD\u662F\u524D\u7AEF\u793E\u533A\u81EA\u5DF1\u5B9E\u73B0\u7684\uFF0C\u53EA\u662F\u5F97\u5230\u4E86\u5927\u5BB6\u7684\u8BA4\u53EF\u548C\u5E7F\u6CDB\u4F7F\u7528</li><li>ES6 \u5728\u8BED\u8A00\u6807\u51C6\u7684\u5C42\u9762\u4E0A\uFF0C\u5B9E\u73B0\u4E86\u6A21\u5757\u529F\u80FD\uFF0C\u5B8C\u5168\u53EF\u4EE5\u53D6\u4EE3 CommonJS \u548C AMD \u89C4\u8303\uFF0C\u6210\u4E3A\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u901A\u7528\u7684\u6A21\u5757\u89E3\u51B3\u65B9\u6848\u3002</li><li>\u7531\u4E8EES6\u76EE\u524D\u5728\u90E8\u5206\u6D4F\u89C8\u5668\u65E0\u6CD5\u6267\u884C\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EA\u80FD\u901A\u8FC7babel\u5C06\u4E0D\u88AB\u652F\u6301\u7684import\u7F16\u8BD1\u4E3A\u5F53\u524D\u53D7\u5230\u5E7F\u6CDB\u652F\u6301\u7684 require\u3002</li></ul><p>\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u4F7F\u7528\u4F17\u591A\u3002</p><p><a href="http://kangax.github.io/compat-table/es6/" target="_blank" rel="noopener noreferrer">\u652F\u6301\u60C5\u51B5</a></p><h2 id="commonjs\uFF0Ces-module-\u7684\u533A\u522B" tabindex="-1">CommonJS\uFF0CES module \u7684\u533A\u522B <a class="header-anchor" href="#commonjs\uFF0Ces-module-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p>\u5B83\u4EEC\u90FD\u662F\u4E00\u79CD\u6A21\u5757\u89C4\u8303\uFF0C\u4F8B\u5982 Node \u4F7F\u7528\u7684\u5C31\u662F CommonJS \u89C4\u8303\u3002ES module \u5219\u662F\u8BED\u8A00\u6807\u51C6\u4E0A\u7684\u6A21\u5757\u89C4\u8303\u3002</p><ul><li>CommonJS \u6A21\u5757\u4F7F\u7528 require() \u548C module.exports\uFF0CES6 \u6A21\u5757\u4F7F\u7528 import\u548C export\u3002</li><li>CommonJS \u6A21\u5757\u8F93\u51FA\u7684\u662F\u4E00\u4E2A\u503C\u7684\u6D45\u62F7\u8D1D\uFF0CES6 \u6A21\u5757\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528\u3002</li><li>CommonJS \u6A21\u5757\u662F\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0CES6 \u6A21\u5757\u662F\u7F16\u8BD1\u65F6\u8F93\u51FA\u63A5\u53E3\u3002</li><li>CommonJS \u6A21\u5757\u7684 require() \u662F\u540C\u6B65\u52A0\u8F7D\u6A21\u5757\uFF0CES6 \u6A21\u5757\u7684 import \u547D\u4EE4\u662F\u5F02\u6B65\u52A0\u8F7D\uFF0C\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757\u4F9D\u8D56\u7684\u89E3\u6790\u9636\u6BB5\u3002</li><li>ES6 \u6A21\u5757\u4E4B\u4E2D\uFF0C\u9876\u5C42\u7684 this \u6307\u5411 undefined\uFF1BCommonJS \u6A21\u5757\u7684\u9876\u5C42 this \u6307\u5411\u5F53\u524D\u6A21\u5757\uFF0C</li><li>\u5BF9\u4E8E\u5FAA\u73AF\u52A0\u8F7D\u7684\u5904\u7406\u65B9\u6CD5\u4E0D\u540C</li></ul><p>\u7B2C 3 \u4E2A\u5DEE\u5F02\u662F\u56E0\u4E3A CommonJS \u52A0\u8F7D\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF08\u5373 module.exports \u5C5E\u6027\uFF09\uFF0C\u8BE5\u5BF9\u8C61\u53EA\u6709\u5728\u811A\u672C\u8FD0\u884C\u5B8C\u624D\u4F1A\u751F\u6210\u3002</p>`,45),e=[o];function r(c,t,D,F,y,i){return a(),n("div",null,e)}var C=s(p,[["render",r]]);export{d as __pageData,C as default};
