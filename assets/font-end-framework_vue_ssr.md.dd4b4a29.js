import{F as s}from"./chunks/FigmaContainer.a9eeb5c3.js";import{c as a,h as n,b as l,l as e,a as o,o as p}from"./app.d6a82b7d.js";const t=l("h1",{id:"ssr",tabindex:"-1"},[e("SSR "),l("a",{class:"header-anchor",href:"#ssr","aria-hidden":"true"},"#")],-1),r=o('<h2 id="ssr的架构图" tabindex="-1">ssr的架构图 <a class="header-anchor" href="#ssr的架构图" aria-hidden="true">#</a></h2><p><img src="/blog/assets/YdVByD.3afaa391.png" alt=""></p><p><img src="/blog/assets/lZoGn3.e01e90f0.png" alt=""></p><blockquote><p>流程</p></blockquote><p>主要流程</p><p>createApp , createStore , createRouter</p><p>entry-server: 路由匹配，</p><p>client-server: 路由与数据状态挂载。</p><h2 id="ssr中的一些要点" tabindex="-1">ssr中的一些要点 <a class="header-anchor" href="#ssr中的一些要点" aria-hidden="true">#</a></h2><p>总结了一些SSR中的要点</p><h3 id="为什么需要使用-createap-工厂函数" tabindex="-1">为什么需要使用 <code>createAp</code> 工厂函数 <a class="header-anchor" href="#为什么需要使用-createap-工厂函数" aria-hidden="true">#</a></h3><p>node.js是一个长期运行的进程。当代码进入该进程时，它将进行一次取值并留存在内存中。这意味着如果只创建一个单例对象，它将在每个传入的请求之间共享。所以需要为每个请求创建一个新的根 Vue 实例。这与每个用户在自己的浏览器中使用新应用程序的实例类似。如果我们在多个请求之间使用一个共享的实例，很容易导致交叉请求状态污染 (cross-request state pollution)。</p><p>同样的规则也适用于router、store 和 event bus 实例。</p><h3 id="webpack的作用" tabindex="-1">webpack的作用 <a class="header-anchor" href="#webpack的作用" aria-hidden="true">#</a></h3><p>提供工程化能力，打包bundle。</p><ul><li>服务器端bundle，用于服务器端渲染(SSR)</li><li>客户端bundle，用于混合静态标记。</li></ul><h3 id="入口文件" tabindex="-1">入口文件 <a class="header-anchor" href="#入口文件" aria-hidden="true">#</a></h3><p>分两个入口，<code>enrty-client.js</code> 和 <code>entry-server.js</code>。</p><blockquote><p>entry-server</p></blockquote><ul><li>执行服务器端路由匹配 (server-side route matching)</li><li>执行数据预取逻辑 (data pre-fetching logic)</li></ul><h3 id="状态预取" tabindex="-1">状态预取 <a class="header-anchor" href="#状态预取" aria-hidden="true">#</a></h3><blockquote><p>服务器预取</p></blockquote><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// entry-server.js</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./app</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> context </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#F07178;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onReady</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">matchedComponents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getMatchedComponents</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">matchedComponents</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">404</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 对所有匹配的路由组件调用 `asyncData()`</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">matchedComponents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Component</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">asyncData</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">asyncData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">            route</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currentRoute</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 在所有预取钩子(preFetch hook) resolve 后，</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 我们的 store 现在已经填充入渲染应用程序所需的状态。</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 当我们将状态附加到上下文，</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 并且 `template` 选项用于 renderer 时，</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">app</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">reject</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><blockquote><p>客户端预取</p></blockquote><h2 id="ssr解决的问题" tabindex="-1">ssr解决的问题 <a class="header-anchor" href="#ssr解决的问题" aria-hidden="true">#</a></h2><p><code>spa</code> 颠覆了前端的开发模式，但是 <code>spa</code> 的缺点是首次需要加载大量的资源，当然可以用分包来缩小包体积。<code>spa</code> 的首屏确实是存在问题的。</p><p>并且 <code>spa</code> 首个被加载的 <code>html</code> 内容并不是用户看到的内容，不利于<code>ssr</code>.</p><h2 id="ssr的优点和缺点" tabindex="-1">ssr的优点和缺点 <a class="header-anchor" href="#ssr的优点和缺点" aria-hidden="true">#</a></h2><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-hidden="true">#</a></h3><h4 id="更好的seo" tabindex="-1">更好的seo <a class="header-anchor" href="#更好的seo" aria-hidden="true">#</a></h4><p>爬虫只会爬取源码。使用了<code>Vue</code>或者其它<code>MVVM</code>框架之后，页面大多数<code>DOM</code>元素都是在客户端根据<code>js</code>动态生成，可供爬虫抓取分析的内容大大减少。另外，浏览器爬虫不会等待我们的数据完成之后再去抓取我们的页面数据。服务端渲染返回给客户端的是已经获取了异步数据并执行<code>JavaScript</code>脚本的最终<code>HTML</code>，网络爬中就可以抓取到完整页面的信息。</p><h4 id="更快首屏的渲染" tabindex="-1">更快首屏的渲染 <a class="header-anchor" href="#更快首屏的渲染" aria-hidden="true">#</a></h4><p>首屏的渲染是 <code>node</code> 发送过来的 <code>html</code> 字符串，并不依赖 <code>js</code> 文件,这就会使用户更快的看到页面的内容。大型的单页应用，打包后体积很大，客户端渲染加载所有所需文件时间较长，首页就会有一段白屏时间。</p><h4 id="降级渲染" tabindex="-1">降级渲染 <a class="header-anchor" href="#降级渲染" aria-hidden="true">#</a></h4><p>当服务器负载过大时，我们需要做降级渲染，将渲染过程放到客户端中。实现方式很简单，通过node服务器中的开关，走不同的渲染模式即可。</p><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-hidden="true">#</a></h3><h4 id="服务端压力大" tabindex="-1">服务端压力大 <a class="header-anchor" href="#服务端压力大" aria-hidden="true">#</a></h4><p>统一到服务端<code>node</code>做渲染，会大量占用服务端<code>CPU</code>资源.</p><h4 id="更大的迁移成本" tabindex="-1">更大的迁移成本 <a class="header-anchor" href="#更大的迁移成本" aria-hidden="true">#</a></h4><p>除了对webpack、Vue要熟悉，还需要掌握node、Express相关技术。相对于客户端渲染，项目构建、部署过程更加复杂。</p><h3 id="只是首屏加载快" tabindex="-1">只是首屏加载快 <a class="header-anchor" href="#只是首屏加载快" aria-hidden="true">#</a></h3><p>只是首屏加载快，对用户已经看过的页面没有优势，每次都要请求服务端数据</p><h3 id="开发成本" tabindex="-1">开发成本 <a class="header-anchor" href="#开发成本" aria-hidden="true">#</a></h3><p>某些声明周期钩子函数（如beforeCreate、created）能同时运行在服务端和客户端，因此第三方库要做特殊处理，才能在服务器渲染应用程序中运行。而前端开发的发展的主线一直在解决开发效率的问题。</p><h2 id="其他代替方案" tabindex="-1">其他代替方案 <a class="header-anchor" href="#其他代替方案" aria-hidden="true">#</a></h2><h3 id="nuxt" tabindex="-1">nuxt <a class="header-anchor" href="#nuxt" aria-hidden="true">#</a></h3><p>nuxt约定配置过多，适合从0开始开发一个新的应用，有ssr的需求，并且会带来一些学习成本，主要是各种约定。开发体验足够好。这得从公司技术栈的方向上来决定是否使用nuxt</p><h3 id="预渲染" tabindex="-1">预渲染 <a class="header-anchor" href="#预渲染" aria-hidden="true">#</a></h3><p>如果只是单方面对<code>seo</code>的要求的话,可以使用 <code>pre-render-plugin</code>这个组件，将重要的需要<code>seo</code>的页面单独打出来，这也是官方推荐的一种方式。</p><h3 id="html-loading" tabindex="-1">html loading <a class="header-anchor" href="#html-loading" aria-hidden="true">#</a></h3><p>同时在用户体验方面来说，也可以使用<code>html</code>中塞入loading片段达到首屏快速呈现loading动画的效果。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>从0开始做一套新的ssr架构的话，带来的技术难度是成倍增加的。但是很多时候 <code>SSR</code> 又是必须的，如果产品经理和你说，我不接受一开始一个loading动画，连骨架屏我也不接受，这时候如果系统架构不支持SSR的话，就歇菜了，架构师就要被开会了。</p>',53),c='{"title":"SSR","description":"","frontmatter":{},"headers":[{"level":2,"title":"ssr的架构图","slug":"ssr的架构图"},{"level":2,"title":"ssr中的一些要点","slug":"ssr中的一些要点"},{"level":3,"title":"为什么需要使用 createAp 工厂函数","slug":"为什么需要使用-createap-工厂函数"},{"level":3,"title":"webpack的作用","slug":"webpack的作用"},{"level":3,"title":"入口文件","slug":"入口文件"},{"level":3,"title":"状态预取","slug":"状态预取"},{"level":2,"title":"ssr解决的问题","slug":"ssr解决的问题"},{"level":2,"title":"ssr的优点和缺点","slug":"ssr的优点和缺点"},{"level":3,"title":"优点","slug":"优点"},{"level":3,"title":"缺点","slug":"缺点"},{"level":3,"title":"只是首屏加载快","slug":"只是首屏加载快"},{"level":3,"title":"开发成本","slug":"开发成本"},{"level":2,"title":"其他代替方案","slug":"其他代替方案"},{"level":3,"title":"nuxt","slug":"nuxt"},{"level":3,"title":"预渲染","slug":"预渲染"},{"level":3,"title":"html loading","slug":"html-loading"},{"level":2,"title":"总结","slug":"总结"}],"relativePath":"font-end-framework/vue/ssr.md"}',F={},y=Object.assign(F,{setup:l=>(l,e)=>(p(),a("div",null,[t,n(s,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/vue?node-id=0%3A1"}),r]))});export{c as __pageData,y as default};
