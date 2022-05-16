import{_ as e,c as a,o as i,a as l}from"./app.d6a82b7d.js";const r='{"title":"小程序原理","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本概念","slug":"基本概念"},{"level":3,"title":"逻辑层：业务处理","slug":"逻辑层：业务处理"},{"level":3,"title":"渲染层：页面的基本结构、样式","slug":"渲染层：页面的基本结构、样式"},{"level":2,"title":"运行时流程","slug":"运行时流程"},{"level":3,"title":"逻辑层","slug":"逻辑层"},{"level":3,"title":"视图层","slug":"视图层"},{"level":3,"title":"与传统web页面显示流程的对比","slug":"与传统web页面显示流程的对比"},{"level":2,"title":"小程序的优点和缺点","slug":"小程序的优点和缺点"},{"level":3,"title":"优点","slug":"优点"},{"level":3,"title":"缺点","slug":"缺点"},{"level":2,"title":"启动加载性能优化","slug":"启动加载性能优化"},{"level":3,"title":"启动加载原理","slug":"启动加载原理"},{"level":3,"title":"控制代码包大小","slug":"控制代码包大小"},{"level":3,"title":"分包","slug":"分包"},{"level":3,"title":"首屏优化加载","slug":"首屏优化加载"},{"level":2,"title":"渲染性能优化","slug":"渲染性能优化"},{"level":3,"title":"小程序更新视图数据的通信流程","slug":"小程序更新视图数据的通信流程"},{"level":3,"title":"正确使用 setData","slug":"正确使用-setdata"},{"level":3,"title":"使用自定义组件","slug":"使用自定义组件"},{"level":3,"title":"减少数据结构的嵌套层数","slug":"减少数据结构的嵌套层数"},{"level":3,"title":"key值在列表渲染中的作用","slug":"key值在列表渲染中的作用"},{"level":3,"title":"参考","slug":"参考"}],"relativePath":"font-end-framework/architecture/mp.md"}',h={},t=[l('<h1 id="小程序原理" tabindex="-1">小程序原理 <a class="header-anchor" href="#小程序原理" aria-hidden="true">#</a></h1><p>小程序是双线程应用，提高了渲染速度。通过两个webview来达到安全沙箱的目的，线程之间的通信则是通过jsBridge底层。</p><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-hidden="true">#</a></h2><h3 id="逻辑层：业务处理" tabindex="-1">逻辑层：业务处理 <a class="header-anchor" href="#逻辑层：业务处理" aria-hidden="true">#</a></h3><ul><li>加载js =&gt; 业务、生命周期(Page、App)、事件、数据加载等处理</li><li>单独的线程: iframe（ios/jscore，安卓/v8）</li><li>只有一个逻辑层来维护一个App实例（多个Page实例维护在一个App实例中）</li><li>更新视图层数据：setData</li></ul><h3 id="渲染层：页面的基本结构、样式" tabindex="-1">渲染层：页面的基本结构、样式 <a class="header-anchor" href="#渲染层：页面的基本结构、样式" aria-hidden="true">#</a></h3><ul><li>单独的线程: webkit(iframe)</li><li>wxml：视图内容 =&gt; html</li><li>wxss: 视图样式 =&gt; css</li><li>多个视图层（一个 wxml =&gt; html 就是一个视图层）</li><li>wxs：</li></ul><h2 id="运行时流程" tabindex="-1">运行时流程 <a class="header-anchor" href="#运行时流程" aria-hidden="true">#</a></h2><p><img src="/blog/assets/jfosae.451b4aae.png" alt=""><a href="https://juejin.cn/post/6900329244950609928" target="_blank" rel="noopener noreferrer">图片来源</a></p><h3 id="逻辑层" tabindex="-1">逻辑层 <a class="header-anchor" href="#逻辑层" aria-hidden="true">#</a></h3><ul><li>提供注册实例/页面方法 App()、Page()</li><li>提供通信能力，js =&gt; wxml</li><li>生命周期维护能力</li><li>调用微信原生API能力</li><li>执行过程</li></ul><h3 id="视图层" tabindex="-1">视图层 <a class="header-anchor" href="#视图层" aria-hidden="true">#</a></h3><ul><li>事件处理</li><li>提供通信能力，wxml =&gt; js</li><li>数据渲染到页面能力</li><li>webComponent / render能力</li><li>执行过程</li></ul><h3 id="与传统web页面显示流程的对比" tabindex="-1">与传统web页面显示流程的对比 <a class="header-anchor" href="#与传统web页面显示流程的对比" aria-hidden="true">#</a></h3><h4 id="传统-web-页面显示需要经历一下几个步骤" tabindex="-1">传统 web 页面显示需要经历一下几个步骤 <a class="header-anchor" href="#传统-web-页面显示需要经历一下几个步骤" aria-hidden="true">#</a></h4><ul><li>webview 初始化</li><li>加载 HTML, CSS, JS</li><li>编译 JS</li><li>Render 计算</li><li>DOM Path</li></ul><h4 id="小程序架构运行流程" tabindex="-1">小程序架构运行流程 <a class="header-anchor" href="#小程序架构运行流程" aria-hidden="true">#</a></h4><blockquote><p>webview部分</p></blockquote><ul><li>webview 初始化</li><li>加载 HTML，CSS, JS (经过拆分后，体积大幅度减小)</li><li>编译 JS</li><li>等待页面需要的数据</li><li>反序列化数据</li><li>执行 Patch</li><li>渲染页面</li><li>等待更多消息</li></ul><blockquote><p>jsCore部分</p></blockquote><ul><li>初始化</li><li>加载框架 js 代码</li><li>编译 js</li><li>加载业务逻辑 js 代码</li><li>编译 js</li><li>计算首屏虚拟 DOM 结构</li><li>序列化数据，传输</li><li>等待 webview 消息，或者 Native 消息</li></ul><h2 id="小程序的优点和缺点" tabindex="-1">小程序的优点和缺点 <a class="header-anchor" href="#小程序的优点和缺点" aria-hidden="true">#</a></h2><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-hidden="true">#</a></h3><ul><li>渲染进程和逻辑进程分离，并行处理：</li><li>加速首屏渲染速度；避免单线程模型下，js 运算时间过长，UI 出现卡顿。</li><li>完全采用数据驱动的方式，不能直接操作 DOM，避免低质量的代码。</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-hidden="true">#</a></h3><ul><li>不能灵活操作 DOM，无法实现较为复杂的效果</li><li>部分和 NA 相关的视图有使用限制，如微信的 scrollView 内不能有 textarea 和原生组件</li><li>页面大小、打开页面数量都受到限制</li><li>需要单独开发适配，不能复用现有代码资源。</li></ul><h2 id="启动加载性能优化" tabindex="-1">启动加载性能优化 <a class="header-anchor" href="#启动加载性能优化" aria-hidden="true">#</a></h2><h3 id="启动加载原理" tabindex="-1">启动加载原理 <a class="header-anchor" href="#启动加载原理" aria-hidden="true">#</a></h3><p>小程序启动主要分为逻辑层的启动和视图层的启动。逻辑层执行js代码逻辑，视图层以 webview 为载体，完成页面内容的渲染和更新。</p><p>小程序启动前，客户端会对小程序的基础环境进行预加载，提升小程序加载的速度。在用户打开小程序的时，会首先进行代码包的下载，下载完成后分别在逻辑层和视图层注入执行开发者的业务代码，最终将执行结果聚合渲染出首屏内容。</p><p>启动过程三个阶段：</p><ul><li>资源准备，代码包的下载和校验工作。</li><li>业务代码的注入以及落地页首次渲染，进行业务代码的注入和执行，等待首次渲染完成。</li><li>落地页请求时的网络加载状态</li></ul><p>上面三个过程基本与传统web应用类似。</p><h3 id="控制代码包大小" tabindex="-1">控制代码包大小 <a class="header-anchor" href="#控制代码包大小" aria-hidden="true">#</a></h3><p>从加载原理上来看，代码包的大小最直接影响整个小程序加载启动性能。提升小程序的启动加载性能，最直接有效的就是减少代码包的大小。</p><ul><li>开启“代码压缩”的选项。</li><li>编码时规范，减少层级等方式来做。</li><li>即时清理废弃的代码，尤其是比较大的第三方库，以及一些不使用的图片等资源文件。</li><li>减少本地图片等资源文件，必要时使用网络图片代码。</li></ul><p>以上手段主要通过code的方式来减少代码量。</p><h3 id="分包" tabindex="-1">分包 <a class="header-anchor" href="#分包" aria-hidden="true">#</a></h3><h4 id="分包加载" tabindex="-1">分包加载 <a class="header-anchor" href="#分包加载" aria-hidden="true">#</a></h4><p>根据业务场景，将用户访问率高的页面放在主包里，将访问率低的页面放入子包里，按需加载； 在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示。</p><h4 id="独立分包" tabindex="-1">独立分包 <a class="header-anchor" href="#独立分包" aria-hidden="true">#</a></h4><p>独立分包是小程序中一种特殊类型的分包，可以独立于主包和其他分包运行。从独立分包中页面进入小程序时，不需要下载主包。当用户进入普通分包或主包内页面时，主包才会被下载。 可以按需将某些具有一定功能独立性的页面配置到独立分包中。当小程序从普通的分包页面启动时，需要首先下载主包；而独立分包不依赖主包即可运行，可以很大程度上提升分包页面的启动速度。</p><h4 id="分包预下载" tabindex="-1">分包预下载 <a class="header-anchor" href="#分包预下载" aria-hidden="true">#</a></h4><p>开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。对于独立分包，也可以预下载主包。</p><h3 id="首屏优化加载" tabindex="-1">首屏优化加载 <a class="header-anchor" href="#首屏优化加载" aria-hidden="true">#</a></h3><h4 id="提前请求" tabindex="-1">提前请求 <a class="header-anchor" href="#提前请求" aria-hidden="true">#</a></h4><p>数据请求并不依赖页面结构完整，可以在页面加载时或代码注入时即 在页面 onload 就发起，而不需要等待页面渲染完成。用户等待请求返回的时间就会进一步缩短。</p><h4 id="利用缓存" tabindex="-1">利用缓存 <a class="header-anchor" href="#利用缓存" aria-hidden="true">#</a></h4><p>利用storage API 对请求结果请进缓存，二次启动时，直接用缓存数据完成渲染。同时，即使在无网环境下，用户也可以使用小程序的部分功能。</p><h4 id="避免白屏" tabindex="-1">避免白屏 <a class="header-anchor" href="#避免白屏" aria-hidden="true">#</a></h4><p>使用骨架屏幕，请求过程中，在页面中先展示一个基础的骨架和结合已有的数据进行展示。</p><h2 id="渲染性能优化" tabindex="-1">渲染性能优化 <a class="header-anchor" href="#渲染性能优化" aria-hidden="true">#</a></h2><h3 id="小程序更新视图数据的通信流程" tabindex="-1">小程序更新视图数据的通信流程 <a class="header-anchor" href="#小程序更新视图数据的通信流程" aria-hidden="true">#</a></h3><p>每当小程序视图数据需要更新时，逻辑层会调用小程序宿主环境提供的 setData 方法将数据从逻辑层传递到视图层，经过一系列渲染步骤之后完成UI视图更新。完整的通信流程如下：</p><ul><li>小程序逻辑层调用宿主环境的 setData 方法。</li><li>逻辑层执行 JSON.stringify 将待传输数据转换成字符串并拼接到特定的JS脚本，并通过evaluateJavascript 执行脚本将数据传输到渲染层。</li><li>渲染层接收到后， WebView JS 线程会对脚本进行编译，得到待更新数据后进入渲染队列等待 WebView 线程空闲时进行页面渲染。</li><li>WebView 线程开始执行渲染时，待更新数据会合并到视图层保留的原始 data 数据，并将新数据套用在WXML片段中得到新的虚拟节点树。经过新虚拟节点树与当前节点树的 diff 对比，将差异部分更新到UI视图。同时，将新的节点树替换旧节点树，用于下一次重渲染。</li></ul><p>从架构上，逻辑层和视图层无法直接共享数据的，数据传输是一次跨进程的通信，会有一定的通信开销，这一开销与传输的数据量正相关。</p><h3 id="正确使用-setdata" tabindex="-1">正确使用 setData <a class="header-anchor" href="#正确使用-setdata" aria-hidden="true">#</a></h3><ul><li>避免在 data 中放置与渲染无关的数据，只在 data 中放置与页面渲染相关的数据。</li><li>避免使用 setData 一次性传输大量数据，只对发生变化的数据进行 setData。</li><li>不要在短时间内连续的频繁调用 setData，对连续的 setData 尽可能的进行合并，做切片。</li></ul><h3 id="使用自定义组件" tabindex="-1">使用自定义组件 <a class="header-anchor" href="#使用自定义组件" aria-hidden="true">#</a></h3><p>自定义组件除了有利于代码复用，提升开发效率外，还可以有效的提升页面局部频繁更新时的性能。自定义组件的更新只在组件内部进行，不受页面其他部分内容的影响，可以大大降低页面更新的开销。</p><p>在页面引用自定义组件后，当初始化页面时，Exparser 会在创建页面实例的同时，也会根据自定义组件的注册信息进行组件实例化，然后根据组件自带的 data 数据和组件WXML，构造出独立的 Shadow Tree ，并追加到页面 Composed Tree 。创建出来的 Shadow Tree 拥有着自己独立的逻辑空间、数据、样式环境及setData调用：</p><p><img src="/blog/assets/ypg0KE.7d85b672.png" alt=""></p><h3 id="减少数据结构的嵌套层数" tabindex="-1">减少数据结构的嵌套层数 <a class="header-anchor" href="#减少数据结构的嵌套层数" aria-hidden="true">#</a></h3><p>时间开销大体上与节点树中节点的总量成正比例关系。因而减少WXML中节点的数量可以有效降低初始渲染和重渲染的时间开销，提升渲染性能。</p><p>初始渲染时，将初始数据套用在对应的WXML片段上生成节点树。最后根据节点树包含的各个节点，在界面上依次创建出各个组件。</p><h3 id="key值在列表渲染中的作用" tabindex="-1">key值在列表渲染中的作用 <a class="header-anchor" href="#key值在列表渲染中的作用" aria-hidden="true">#</a></h3><p>与各大框架的key值作用类似</p><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><ul><li><a href="https://juejin.cn/post/6844903877041471502#heading-6https://juejin.cn/post/6844903877041471502" target="_blank" rel="noopener noreferrer">浅谈小程序性能优化</a></li><li><a href="https://mp.weixin.qq.com/s/o5MJHozQqCcwUl4yVgUGPA" target="_blank" rel="noopener noreferrer">小程序底层实现原理</a></li><li><a href="https://juejin.cn/post/6900329244950609928" target="_blank" rel="noopener noreferrer">小程序架构原理</a></li></ul>',69)];var d=e(h,[["render",function(e,l,r,h,d,s){return i(),a("div",null,t)}]]);export{r as __pageData,d as default};
