import{_ as s,c as a,o as l,a as e}from"./app.355e7a82.js";const n='{"title":"vue-loader是怎么运行的","description":"","frontmatter":{},"headers":[{"level":2,"title":"特性","slug":"特性"},{"level":2,"title":"如何工作","slug":"如何工作"},{"level":3,"title":"第一步","slug":"第一步"},{"level":3,"title":"第二步，针对不同语言","slug":"第二步，针对不同语言"},{"level":3,"title":"第三步","slug":"第三步"},{"level":3,"title":"第四步，转换","slug":"第四步，转换"}],"relativePath":"font-end-framework/vue/vue-loader.md"}',p={},o=[e('<h1 id="vue-loader是怎么运行的" tabindex="-1">vue-loader是怎么运行的 <a class="header-anchor" href="#vue-loader是怎么运行的" aria-hidden="true">#</a></h1><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-hidden="true">#</a></h2><p>vue-loader提供给webpack使用。主要提供以下的几点特性</p><ul><li>允许对Vue组件的每个部分使用其他webpack加载器，例如，对于<code>&lt;style&gt;</code>是Sass预处理器，对于<code>&lt;template&gt;</code>可以是Pug模版引擎</li><li>允许.vue文件中定制区块，这些定制块可以应用定制的加载程序链</li></ul><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><ul><li>将<code>&lt;style&gt;</code>和<code>&lt;template&gt;</code>中引用的静态资产视为模块依赖项，并使用webpack加载器处理它们；</li><li>模拟每个组件的作用域CSS；</li><li>在开发过程中保持状态的热重载。 <code>vue-loader</code>与<code>webpack</code>的结合为我们提供了强大的工作流</li></ul><h2 id="如何工作" tabindex="-1">如何工作 <a class="header-anchor" href="#如何工作" aria-hidden="true">#</a></h2><p>接下来看看他是如何工作的</p><h3 id="第一步" tabindex="-1">第一步 <a class="header-anchor" href="#第一步" aria-hidden="true">#</a></h3><p>使用 <code>@vue/component-compiler-utils</code> 将SFC源代码解析为SFC描述符，然后，它为每种语言块生成一个导入，因此实际返回的模块代码如下所示</p><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// code returned from the main loader for &#39;source.vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// import the &lt;template&gt; block</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> render </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source.vue?vue&amp;type=template</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// import the &lt;script&gt; block</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> script </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source.vue?vue&amp;type=script</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source.vue?vue&amp;type=script</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// import &lt;style&gt; blocks</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source.vue?vue&amp;type=style&amp;index=1</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> render</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> script</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><p>代码都是从source.vue中导入的，但是域不同。</p><h3 id="第二步，针对不同语言" tabindex="-1">第二步，针对不同语言 <a class="header-anchor" href="#第二步，针对不同语言" aria-hidden="true">#</a></h3><p>如果我们想指定对应区块内的语言，比如<code>&lt;script lang=&quot;ts&quot;&gt;</code>, 这时候<code>VueLoaderPlugin</code>派上用场，对于webpack配置中的每个模块规则，它都会创建一个针对相应Vue语言块请求的修改后的克隆。</p><p>假设已经为所有* .js文件配置了babel-loader。该规则将被克隆并应用于Vue SFC <code>&lt;script&gt;</code>块。在webpack内部，类似于下面的请求</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> script </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source.vue?vue&amp;type=script</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div><p>将被转换为</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> script </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">babel-loader!vue-loader!source.vue?vue&amp;type=script</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div><p>如果你为为* .scss文件配置了style-loader + css-loader + sass-loader。</p><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p><code>vue-loader</code> 将其转换为</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source.vue?vue&amp;type=style&amp;index=1&amp;scoped&amp;lang=scss</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div><p><code>webpack</code> 将其转换为</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style-loader!css-loader!sass-loader!vue-loader!source.vue?vue&amp;type=style&amp;index=1&amp;scoped&amp;lang=scss</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div><h3 id="第三步" tabindex="-1">第三步 <a class="header-anchor" href="#第三步" aria-hidden="true">#</a></h3><p>处理扩展的请求时， <code>vue-loader</code>会被再次调用，这次<code>webpack</code>加载程序会注意到请求具有查询并且仅针对特定的块，选择目标块的内部内容，并将其传递给匹配的目标装载程序。</p><h3 id="第四步，转换" tabindex="-1">第四步，转换 <a class="header-anchor" href="#第四步，转换" aria-hidden="true">#</a></h3><p>对于<code>&lt;script</code>&gt;块，转换基本结束，对于<code>&lt;template&gt;</code> 和 <code>&lt;style&gt;</code> 块来说，还有一些额外的任务需要执行。</p><ul><li><p>需要使用Vue模板编译器来编译模板</p></li><li><p>需要在<code>css-loader</code>执行前, 对<code>&lt;style scoped&gt;</code>块进行处理</p></li></ul><p>从技术上讲，这些是额外的装载机（templateLoader，stylePostLoader），需要注入扩展的加载程序链中，如果最终用户必须自己配置，那将非常复杂，所以 <code>VueLoaderPlugin</code>也注入了全局的加载器来拦截<code>&lt;template&gt;</code>和 <code>&lt;style&gt;</code> 的块请求，并注入必要的装载机最终请求如下所示。</p><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// &lt;template lang=&quot;pug&quot;&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-loader/template-loader!pug-loader!vue-loader!source.vue?vue&amp;type=template</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// &lt;style scoped lang=&quot;scss&quot;&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style-loader!css-loader!vue-loader/style-post-loader!sass-loader!vue-loader!source.vue?vue&amp;type=style&amp;index=1&amp;scoped&amp;lang=scss</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div>',31)];var t=s(p,[["render",function(s,e,n,p,t,c){return l(),a("div",null,o)}]]);export{n as __pageData,t as default};
