import{_ as s,o as n,c as a,a as l}from"./app.27477bc6.js";const p="/blog/assets/fB0ZEQ.359d5d66.png",A=JSON.parse('{"title":"按需加载","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件库按需加载","slug":"组件库按需加载","link":"#组件库按需加载","children":[{"level":3,"title":"babel-plugin-import","slug":"babel-plugin-import","link":"#babel-plugin-import","children":[]},{"level":3,"title":"tree shaking","slug":"tree-shaking","link":"#tree-shaking","children":[]}]},{"level":2,"title":"babel-plugin-import原理","slug":"babel-plugin-import原理","link":"#babel-plugin-import原理","children":[{"level":3,"title":"第一步 依赖收集","slug":"第一步-依赖收集","link":"#第一步-依赖收集","children":[]},{"level":3,"title":"第二步 判断是否使用","slug":"第二步-判断是否使用","link":"#第二步-判断是否使用","children":[]},{"level":3,"title":"第三步 生成引入代码（核心）","slug":"第三步-生成引入代码-核心","link":"#第三步-生成引入代码-核心","children":[]}]}],"relativePath":"work/tc-travel/siskin/import.md","lastUpdated":1670949432000}'),o={name:"work/tc-travel/siskin/import.md"},e=l(`<h1 id="按需加载" tabindex="-1">按需加载 <a class="header-anchor" href="#按需加载" aria-hidden="true">#</a></h1><h2 id="组件库按需加载" tabindex="-1">组件库按需加载 <a class="header-anchor" href="#组件库按需加载" aria-hidden="true">#</a></h2><p>目前按需加载有两种方式实现。</p><ul><li>使用<code>babel-plugin-import</code>插件来自动按需引入</li><li>提供<code>es module</code>版本，开启<code>tree shaking</code></li></ul><h3 id="babel-plugin-import" tabindex="-1">babel-plugin-import <a class="header-anchor" href="#babel-plugin-import" aria-hidden="true">#</a></h3><p><code>babel-plugin-import</code>是<code>ant-design</code>团队出的一个<code>babel</code>插件，主要用于模块的按需加载。其原理就是将直接引入的方式通过<code>babel</code>转化成按需引入的方式。如果<code>css</code>也需要按需加载，也会注入<code>css</code>引用代码。</p><p>例如</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转换成</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Button </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/es/button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/es/button/style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="tree-shaking" tabindex="-1">tree shaking <a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a></h3><p>如果组件库提供了<code>es module</code>版本，并开启了<code>tree shaking</code>，那么不需要<code>babel-plugin-import</code>，也可以达到按需加载的目的，这个方法只针对于<code>js</code>，对于样式的按需加载仍需要手动引入。 当然<code>babel-plugin-import</code>和<code>tree shaking</code> 也可以并存使用。但大部分情况并存使用与单独使用体积差距不是很大。 例如：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/es/button/style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>webpack</code>可以通过在<code>package.json</code>设置<code>sideEffects: false</code>,开启<code>tree shaking</code>。</p><h2 id="babel-plugin-import原理" tabindex="-1">babel-plugin-import原理 <a class="header-anchor" href="#babel-plugin-import原理" aria-hidden="true">#</a></h2><p>babel-plugin-import 提供组件的按需加载</p><p>将</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转换成</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Button </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/es/button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/es/button/style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="第一步-依赖收集" tabindex="-1">第一步 依赖收集 <a class="header-anchor" href="#第一步-依赖收集" aria-hidden="true">#</a></h3><p>babel-plubin-import 会在 ImportDeclaration 里将所有的 specifier 收集起来。大致的AST如下:</p><p><img src="`+p+`" alt="img"></p><p>可以从这个 ImportDeclaration 语句中提取几个关键点：</p><ul><li>source.value: antd</li><li><a href="http://specifier.local.name" target="_blank" rel="noreferrer">specifier.local.name</a>: Button</li><li><a href="http://specifier.local.name" target="_blank" rel="noreferrer">specifier.local.name</a>: Rate</li></ul><p>代码</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">ImportDeclaration</span><span style="color:#A6ACCD;">(path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> state) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// 代码里 import 的包名</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">libraryName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// 插件 options 的包名</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">types</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// babel-type 工具函数</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pluginState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getPluginState</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// 获取状态</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">libraryName</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">specifiers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">spec</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">types</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isImportSpecifier</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">spec</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// 判断是不是 ImportSpecifier 类型的节点，也就是是否是大括号的</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// 收集依赖</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">pluginState</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">specified</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">spec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">spec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">imported</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">pluginState</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">libraryObjs</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">spec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pluginState</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pathsToRemove</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>在 <code>babel</code> 遍历了所有的 <code>ImportDeclaration</code> 节点之后，就收集好了依赖关系，下一步就是如何收集。</p><h3 id="第二步-判断是否使用" tabindex="-1">第二步 判断是否使用 <a class="header-anchor" href="#第二步-判断是否使用" aria-hidden="true">#</a></h3><p>收集了依赖关系之后，得要判断一下这些 <code>import</code> 的变量是否被使用到了:</p><p>首先会进行如下的转换</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转换到</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(Button</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>判断其是否进行了转换</p><h3 id="第三步-生成引入代码-核心" tabindex="-1">第三步 生成引入代码（核心） <a class="header-anchor" href="#第三步-生成引入代码-核心" aria-hidden="true">#</a></h3><p>第一步和第二步主要的工作是找到需要被插件处理的依赖关系：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Rate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Button</code> 组件使用到了，<code>Rate</code> 在代码里未使用。所以插件要做的也只是自动引入 <code>Button</code> 的代码和样式即可。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>转换成</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> _button </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/lib/button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd/lib/button/style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>babel-plugin-import</code> 和普遍的 <code>babel</code> 插件一样，会遍历代码的 <code>ast</code>，然后在 <code>ast</code> 上做了一些事情：</p><ol><li>收集依赖：找到<code>importDeclaration</code>，分析出包 <code>x</code> 和依赖 <code>y,z</code>,例如 <code>x</code> 和 <code>libraryName</code> 是一致的，就将其收集起来。</li><li>判断是否使用：判断收集到的依赖是否被使用，如果有使用就调用 <code>importMethod</code> 生成新的 <code>import</code> 语句。</li><li>生成引入代码：根据配置项生成代码和样式的 <code>import</code> 语句</li></ol>`,44),r=[e];function t(c,i,F,D,y,d){return n(),a("div",null,r)}const b=s(o,[["render",t]]);export{A as __pageData,b as default};
