import{_ as s,o as a,c as l,a as n}from"./app.27477bc6.js";const D=JSON.parse('{"title":"webpack","description":"","frontmatter":{},"headers":[{"level":2,"title":"webpack的文件监听以及热更新","slug":"webpack的文件监听以及热更新","link":"#webpack的文件监听以及热更新","children":[{"level":3,"title":"热更新","slug":"热更新","link":"#热更新","children":[]},{"level":3,"title":"热更新原理","slug":"热更新原理","link":"#热更新原理","children":[]}]},{"level":2,"title":"文件指纹","slug":"文件指纹","link":"#文件指纹","children":[]},{"level":2,"title":"代码压缩","slug":"代码压缩","link":"#代码压缩","children":[{"level":3,"title":"js压缩","slug":"js压缩","link":"#js压缩","children":[]},{"level":3,"title":"css压缩","slug":"css压缩","link":"#css压缩","children":[]},{"level":3,"title":"压缩","slug":"压缩","link":"#压缩","children":[]}]},{"level":2,"title":"资源内连","slug":"资源内连","link":"#资源内连","children":[{"level":3,"title":"代码层面","slug":"代码层面","link":"#代码层面","children":[]},{"level":3,"title":"请求层面","slug":"请求层面","link":"#请求层面","children":[]},{"level":3,"title":"如何内连","slug":"如何内连","link":"#如何内连","children":[]}]},{"level":2,"title":"多页面应用打包（MPA）","slug":"多页面应用打包-mpa","link":"#多页面应用打包-mpa","children":[]},{"level":2,"title":"事件流","slug":"事件流","link":"#事件流","children":[]},{"level":2,"title":"webpack启动","slug":"webpack启动","link":"#webpack启动","children":[]},{"level":2,"title":"compiler和compilation","slug":"compiler和compilation","link":"#compiler和compilation","children":[]},{"level":2,"title":"Tapable","slug":"tapable","link":"#tapable","children":[]},{"level":2,"title":"webpackHooks","slug":"webpackhooks","link":"#webpackhooks","children":[{"level":3,"title":"流程相关","slug":"流程相关","link":"#流程相关","children":[]},{"level":3,"title":"监听相关","slug":"监听相关","link":"#监听相关","children":[]}]},{"level":2,"title":"Compilation hooks","slug":"compilation-hooks","link":"#compilation-hooks","children":[{"level":3,"title":"模块相关","slug":"模块相关","link":"#模块相关","children":[]},{"level":3,"title":"资源生成相关","slug":"资源生成相关","link":"#资源生成相关","children":[]},{"level":3,"title":"优化和 seal相关","slug":"优化和-seal相关","link":"#优化和-seal相关","children":[]}]},{"level":2,"title":"Chunk 生成算法","slug":"chunk-生成算法","link":"#chunk-生成算法","children":[]},{"level":2,"title":"loader","slug":"loader","link":"#loader","children":[{"level":3,"title":"执行顺序","slug":"执行顺序","link":"#执行顺序","children":[]},{"level":3,"title":"loader 的参数获取","slug":"loader-的参数获取","link":"#loader-的参数获取","children":[]},{"level":3,"title":"调试","slug":"调试","link":"#调试","children":[]}]},{"level":2,"title":"pulgin","slug":"pulgin","link":"#pulgin","children":[]},{"level":2,"title":"webpack构建流程","slug":"webpack构建流程","link":"#webpack构建流程","children":[{"level":3,"title":"webpack准备阶段","slug":"webpack准备阶段","link":"#webpack准备阶段","children":[]},{"level":3,"title":"构建编译阶段","slug":"构建编译阶段","link":"#构建编译阶段","children":[]},{"level":3,"title":"生成modules","slug":"生成modules","link":"#生成modules","children":[]},{"level":3,"title":"生成chunks","slug":"生成chunks","link":"#生成chunks","children":[]},{"level":3,"title":"生成bundle","slug":"生成bundle","link":"#生成bundle","children":[]}]}],"relativePath":"font-end/engineering/webpack.md","lastUpdated":1670949432000}'),e={name:"font-end/engineering/webpack.md"},p=n(`<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h1><h2 id="webpack的文件监听以及热更新" tabindex="-1">webpack的文件监听以及热更新 <a class="header-anchor" href="#webpack的文件监听以及热更新" aria-hidden="true">#</a></h2><p>文件监听原理，轮询判断文件的最后编辑时间是否发生变化</p><p>某个文件发生了变化，并不会立即告诉监听者，而是先缓存起来，等aggregateTimeout</p><h3 id="热更新" tabindex="-1">热更新 <a class="header-anchor" href="#热更新" aria-hidden="true">#</a></h3><ul><li><p>webpack-dev-server + HotModuleReplacementPlugin插件: 热跟新不输出文件，直接放在内存中。</p></li><li><p>webpack-dev-middleware:将webpack输出等文件传输给服务器：较为灵活。</p></li></ul><h3 id="热更新原理" tabindex="-1">热更新原理 <a class="header-anchor" href="#热更新原理" aria-hidden="true">#</a></h3><p><a href="https://juejin.cn/post/6844904020528594957" target="_blank" rel="noreferrer">从零实现webpack热更新HMR</a></p><h2 id="文件指纹" tabindex="-1">文件指纹 <a class="header-anchor" href="#文件指纹" aria-hidden="true">#</a></h2><p>通常用于文件的版本管理</p><ul><li><p>Hash:和整个项目的构建目录有关，只要项目文件有修改，整个项目构建的hash值就会变。</p></li><li><p>chunkHash: 和webpack打包的chunk有关，不同的entry会生成不同的chunkHash值。</p></li><li><p>contentHash: 根据文件内容来定义hash,文件内容不变，则contentHash不变</p></li><li><p>css指纹设置：通过miniCssExtractPlugin来做</p></li></ul><h2 id="代码压缩" tabindex="-1">代码压缩 <a class="header-anchor" href="#代码压缩" aria-hidden="true">#</a></h2><p>代码压缩处理</p><h3 id="js压缩" tabindex="-1">js压缩 <a class="header-anchor" href="#js压缩" aria-hidden="true">#</a></h3><p>js内置了<code>uglifyjs-webpack-plugin</code>进行压缩</p><h3 id="css压缩" tabindex="-1">css压缩 <a class="header-anchor" href="#css压缩" aria-hidden="true">#</a></h3><p>使用<code>optimize-css-assets-webpack-plugin</code> 同时使用<code>cssnano</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OptimizeCssAssetsPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">assetNameRegExp</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cssProcessor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cssnano</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="压缩" tabindex="-1">压缩 <a class="header-anchor" href="#压缩" aria-hidden="true">#</a></h3><p>使用 <code>html-webpack-plugin</code></p><h2 id="资源内连" tabindex="-1">资源内连 <a class="header-anchor" href="#资源内连" aria-hidden="true">#</a></h2><p>通过资源内连优化性能</p><h3 id="代码层面" tabindex="-1">代码层面 <a class="header-anchor" href="#代码层面" aria-hidden="true">#</a></h3><ul><li>页面框架的初始化脚本</li><li>上报相关的打点</li><li>css内连避免页面的闪动</li></ul><h3 id="请求层面" tabindex="-1">请求层面 <a class="header-anchor" href="#请求层面" aria-hidden="true">#</a></h3><p>减少http请求</p><ul><li>小图片或者字体内嵌</li></ul><h3 id="如何内连" tabindex="-1">如何内连 <a class="header-anchor" href="#如何内连" aria-hidden="true">#</a></h3><p>raw-loader内连html，js</p><p>css内连：</p><ul><li>借助：style-loader,设置选项options</li><li>借助：html-inline-css-webpack-plugin</li></ul><h2 id="多页面应用打包-mpa" tabindex="-1">多页面应用打包（MPA） <a class="header-anchor" href="#多页面应用打包-mpa" aria-hidden="true">#</a></h2><p>多页面通用打包方案</p><p>动态获取entry和设置html-webpack-plugin数量</p><p>利用glob.sync</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> glob</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sync</span><span style="color:#A6ACCD;">(path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/*/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="事件流" tabindex="-1">事件流 <a class="header-anchor" href="#事件流" aria-hidden="true">#</a></h2><ul><li>webpack 通过 Tapable 来组织这条复杂的生产线。</li><li>webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。</li><li>webpack 的事件流机制应用了观察者模式，和 Node.js 中的 EventEmitter 非常相似。</li></ul><h2 id="webpack启动" tabindex="-1">webpack启动 <a class="header-anchor" href="#webpack启动" aria-hidden="true">#</a></h2><ul><li>查找入口 node_modules/webpack/bin/webpack.js</li><li>启动后，webpack 最终找到 webpack-cli，并且 执行 CLI。</li><li>webpack-cli 做的事情</li></ul><p>引入 yargs，对命令行进行定制，分析命令行参数，对各个参数进行转换，组成编译配置项，引用webpack，根据配置项进行编译和构建</p><p>webpack-cli对配置文件和命令行参数进行转换最终生成配置选项参数 options最终会根据配置参数实例化 webpack 对象，然后执行构建流程。</p><p>webpack的编译都按照下面的钩子调用顺序执行：</p><p>entry-option(初始化option) -&gt; run(开始编译) -&gt; make(从entry开始递归的 分析依赖，对每个 依赖模块进行build) -&gt; before-resolve(对模块位置进行解析) -&gt; build-module(开始构建某个模块) -&gt; normal-module-loader(将loader加载完成的 module进行编译，生成 AST树) -&gt; program(遍历AST，当遇到 require等一些调用表 达式时，收集依赖) -&gt; seal(所有依赖build完 成，开始优化) -&gt; emit(输出到dist目录)</p><h2 id="compiler和compilation" tabindex="-1">compiler和compilation <a class="header-anchor" href="#compiler和compilation" aria-hidden="true">#</a></h2><ul><li>Compiler:</li></ul><p>Compiler 也是我们所说的 Tapable 实例，他就是webpack的整体环境。通过这种实现机制，我们可以理解为，它混合(mix)了 Tapable类，来使实例也具备注册和调用插件功能。 插件机制事实上就是通过注册在Complier上，在运行时Compier会根据各种事件钩子，从而触发插件的注册函数。</p><ul><li>Compilation:</li></ul><p>Compilation 实例继承于 compiler。例如，compiler.compilation 是对所有 require 图(graph)中对象的字面上的编译。这个对象可以访问所有的模块和它们的依赖（大部分是循环依赖）。在编译阶段，模块被加载，封闭，优化，分块，哈希和重建等等。这将是任何编译操作中，重要的生命周期。</p><p>官方文档看起来比较难理解，compilation 对象代表了一次单一的版本构建和生成资源。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，一次新的编译将被创建，从而生成一组新的编译资源。一个编译对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。编译对象也提供了很多关键点回调供插件做自定义处理时选择使用。</p><p>两者之间的区别：</p><p>compiler 对象代表的是不变的webpack环境，是针对webpack的 compilation 对象针对的是随时可变的项目文件，只要文件有改动，compilation就会被重新创建。</p><h2 id="tapable" tabindex="-1">Tapable <a class="header-anchor" href="#tapable" aria-hidden="true">#</a></h2><p>其核心对象继承自Tapable，Tapable 是一个类似于 Node.js 的 EventEmitter 的库, 主要是控制钩子函数的发布 与订阅,控制着 webpack 的插件系统。Tapable库暴露了很多 Hook(钩子)类，为插件提供挂载的钩子。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  SyncHook</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//同步钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  SyncBailHook</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//同步熔断钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  SyncWaterfallHook</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//同步流水钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  SyncLoopHook</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//同步循环钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  AsyncParallelHook</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//异步并发钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  AsyncParallelBailHook</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//异步并发熔断钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  AsyncSeriesHook</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//异步串行钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  AsyncSeriesBailHook</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//异步串行熔断钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  AsyncSeriesWaterfallHook </span><span style="color:#676E95;">//异步串行流水钩子</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tapable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>hook 基本用法示例</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hook1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SyncHook</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">arg1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">arg2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">arg3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">hook1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hook1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arg1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arg2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arg3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arg1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arg2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arg3)) </span><span style="color:#676E95;">//1,2,3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>tabable提供了同步&amp;异步钩子的方法，并且他们都有绑定事件和执行事件对应的方法。</p><h2 id="webpackhooks" tabindex="-1">webpackHooks <a class="header-anchor" href="#webpackhooks" aria-hidden="true">#</a></h2><h3 id="流程相关" tabindex="-1">流程相关 <a class="header-anchor" href="#流程相关" aria-hidden="true">#</a></h3><ul><li>(before-)run</li><li>(before-/after-)compile ·make</li><li>(after-)emit</li><li>done</li></ul><h3 id="监听相关" tabindex="-1">监听相关 <a class="header-anchor" href="#监听相关" aria-hidden="true">#</a></h3><ul><li>watch-run</li><li>watch-close</li></ul><h2 id="compilation-hooks" tabindex="-1">Compilation hooks <a class="header-anchor" href="#compilation-hooks" aria-hidden="true">#</a></h2><h3 id="模块相关" tabindex="-1">模块相关 <a class="header-anchor" href="#模块相关" aria-hidden="true">#</a></h3><ul><li>build-module</li><li>failed-module</li><li>succeed-module</li></ul><h3 id="资源生成相关" tabindex="-1">资源生成相关 <a class="header-anchor" href="#资源生成相关" aria-hidden="true">#</a></h3><ul><li>module-asset</li><li>chunk-asset</li></ul><h3 id="优化和-seal相关" tabindex="-1">优化和 seal相关 <a class="header-anchor" href="#优化和-seal相关" aria-hidden="true">#</a></h3><ul><li>(after-)seal</li><li>optimize</li><li>optimize-modules(-basic/advanced)</li><li>after-optimize-modules</li><li>after-optimize-chunks</li><li>after-optimize-tree</li><li>optimize-chunk-modules (-basic/advanced)</li><li>after-optimize-chunk-modules</li><li>optimize-module/chunk-order</li><li>before-module/chunk-ids</li><li>(after-)optimize-module/ chunk-ids</li><li>before/after-hash</li></ul><h2 id="chunk-生成算法" tabindex="-1">Chunk 生成算法 <a class="header-anchor" href="#chunk-生成算法" aria-hidden="true">#</a></h2><ol><li>webpack 先将 entry 中对应的 module 都生成一个新的 chunk</li><li>遍历 module 的依赖列表，将依赖的 module 也加入到 chunk 中</li><li>如果一个依赖 module 是动态引入的模块，那么就会根据这个 module 创建一个 新的 chunk，继续遍历依赖</li><li>重复上面的过程，直至得到所有的 chunks</li></ol><h2 id="loader" tabindex="-1">loader <a class="header-anchor" href="#loader" aria-hidden="true">#</a></h2><p>loader 只是一个导出为函数的 JavaScript 模块。和glup类似。</p><h3 id="执行顺序" tabindex="-1">执行顺序 <a class="header-anchor" href="#执行顺序" aria-hidden="true">#</a></h3><p>多个 Loader 串行执行，顺序从后到前。</p><p>Compose(webpack采取的是这种)</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">g</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="loader-的参数获取" tabindex="-1">loader 的参数获取 <a class="header-anchor" href="#loader-的参数获取" aria-hidden="true">#</a></h3><p>通过 loader-utils 的 getOptions 方法获取</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> loaderUtils </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">loader-utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loaderUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOptions</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-hidden="true">#</a></h3><p>使用 <code>loader-runner</code> 调试 loader</p><h2 id="pulgin" tabindex="-1">pulgin <a class="header-anchor" href="#pulgin" aria-hidden="true">#</a></h2><p>pulgin,只能在 webpack 里面运行，通过导出apply函数，提供给webpack进行调用。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoPlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">apply</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">apply</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="webpack构建流程" tabindex="-1">webpack构建流程 <a class="header-anchor" href="#webpack构建流程" aria-hidden="true">#</a></h2><h3 id="webpack准备阶段" tabindex="-1">webpack准备阶段 <a class="header-anchor" href="#webpack准备阶段" aria-hidden="true">#</a></h3><p>webpack启动入口，webpack-cli/bin/cli.js，初始化参数</p><h4 id="创建compiler" tabindex="-1">创建Compiler <a class="header-anchor" href="#创建compiler" aria-hidden="true">#</a></h4><p>创建了 compiler 对象，加载配置，compiler 可以理解为 webpack 编译的调度中心，是一个编译器实例，在 compiler 对象记录了完整的 webpack 环境信息，在 webpack 的每个进程中，compiler 只会生成一次。</p><h4 id="初始化默认插件和options配置" tabindex="-1">初始化默认插件和Options配置 <a class="header-anchor" href="#初始化默认插件和options配置" aria-hidden="true">#</a></h4><p>WebpackOptionsApply 类中会根据配置注册对应的插件。</p><h4 id="run" tabindex="-1">run <a class="header-anchor" href="#run" aria-hidden="true">#</a></h4><p>初始化 compiler 后，根据 options 的 watch 判断是否启动了 watch，如果启动 watch 了就调用 compiler.watch 来监控构建文件，否则启动 compiler.run 来构建文件，compiler.run 就是我们此次编译的入口方法，代表着要开始编译了。</p><h3 id="构建编译阶段" tabindex="-1">构建编译阶段 <a class="header-anchor" href="#构建编译阶段" aria-hidden="true">#</a></h3><p>调用 compiler.run 方法来启动构建</p><h4 id="compilation" tabindex="-1">Compilation <a class="header-anchor" href="#compilation" aria-hidden="true">#</a></h4><p>创建此次编译的 Compilation 对象</p><p>Compilation 对象是后续构建流程中最核心最重要的对象，它包含了一次构建过程中所有的数据。也就是说一次构建过程对应一个 Compilation 实例。在创建 Compilation 实例时会触发钩子 compilaiion 和 thisCompilation。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">在Compilation对象中：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">modules 记录了所有解析后的模块</span></span>
<span class="line"><span style="color:#A6ACCD;">chunks 记录了所有chunk</span></span>
<span class="line"><span style="color:#A6ACCD;">assets记录了所有要生成的文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="make" tabindex="-1">make <a class="header-anchor" href="#make" aria-hidden="true">#</a></h4><p>当 Compilation 实例创建完成之后，webpack 的准备阶段已经完成，下一步将开始 modules 的生成阶段。</p><h3 id="生成modules" tabindex="-1">生成modules <a class="header-anchor" href="#生成modules" aria-hidden="true">#</a></h3><p>compilation.addEntry 方法会触发第一批 module 的解析，即我们在 entry 中配置的入口文件 index.js。</p><p>一个依赖对象（Dependency）经过对应的工厂对象（Factory）创建之后，就能够生成对应的模块实例（Module）。</p><blockquote><p>Dependency，可以理解为还未被解析成模块实例的依赖对象。比如配置中的入口模块，或者一个模块依赖的其他模块，都会先生成一个 Dependency 对象。每个 Dependency 都会有对应的工厂对象，比如我们这次debuger的代码，入口文件 index.js 首先生成 SingleEntryDependency， 对应的工厂对象是 NormalModuleFactory。(前文说到SingleEntryPlugin插件时有放代码，有疑惑的同学可以往前翻翻看)</p></blockquote><h3 id="生成chunks" tabindex="-1">生成chunks <a class="header-anchor" href="#生成chunks" aria-hidden="true">#</a></h3><p>按照modules生成chunks</p><h3 id="生成bundle" tabindex="-1">生成bundle <a class="header-anchor" href="#生成bundle" aria-hidden="true">#</a></h3><p>按照chunks生成bundle</p>`,111),o=[p];function r(c,i,t,d,h,u){return a(),l("div",null,o)}const b=s(e,[["render",r]]);export{D as __pageData,b as default};
