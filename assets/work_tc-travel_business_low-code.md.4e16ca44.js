import{_ as e,c as a,o as l,a as i}from"./app.d6a82b7d.js";const h='{"title":"页面搭建系统","description":"","frontmatter":{},"headers":[{"level":2,"title":"起源","slug":"起源"},{"level":3,"title":"设计问题","slug":"设计问题"},{"level":3,"title":"过于理想化","slug":"过于理想化"},{"level":3,"title":"沟通问题","slug":"沟通问题"},{"level":3,"title":"因小失大","slug":"因小失大"},{"level":2,"title":"如何设计","slug":"如何设计"},{"level":3,"title":"管理后台","slug":"管理后台"},{"level":3,"title":"组件库","slug":"组件库"},{"level":3,"title":"BFF","slug":"bff"},{"level":3,"title":"存储系统","slug":"存储系统"},{"level":3,"title":"发布系统","slug":"发布系统"},{"level":3,"title":"辅助系统","slug":"辅助系统"},{"level":2,"title":"总结","slug":"总结"}],"relativePath":"work/tc-travel/business/low-code.md"}',r={},d=[i('<h1 id="页面搭建系统" tabindex="-1">页面搭建系统 <a class="header-anchor" href="#页面搭建系统" aria-hidden="true">#</a></h1><p>最近复盘了一下在公司做的活动搭建系统，总结归纳一些经验出来。主要是站在遇到问题的角度和架构的角度去看待这个问题。</p><h2 id="起源" tabindex="-1">起源 <a class="header-anchor" href="#起源" aria-hidden="true">#</a></h2><p>现在活动搭建系统基本上有点体量的公司都在做，因为带来的效益显而易见。</p><ul><li>第一：解放人力，不用再去写那些简单的页面了。</li><li>第二：灵活，要知道大公司就算是一个简单的一个人能完成的页面都得经过层层审批的。</li><li>第三：高大上，技术突破，各种牛逼。</li></ul><p>看起来真香，全是好处。但是，如果没做好，或者一开始就没设计好，将会陷入无限的补漏中去。下面我来介绍和总结一下我们之前遇到的问题。</p><h3 id="设计问题" tabindex="-1">设计问题 <a class="header-anchor" href="#设计问题" aria-hidden="true">#</a></h3><p><img src="/blog/assets/ZEPQ9v.c9f9cd0a.png" alt=""></p><p>上面是大概的一个架构图，当然实际比这个会复杂很多，细节我就不列出来来。我们做的这一套系统，存在一个非常让人头疼的问题，使用XML进行数据格式的交换。我是在第一版已经上线之后进入这个项目的，拿到项目的时候非常诧异，为什么要用XML去做这个数据格式。本系统的配置数据流如下。</p><p><img src="/blog/assets/tcK2e4.5e02c89c.png" alt=""></p><h4 id="性能损耗" tabindex="-1">性能损耗 <a class="header-anchor" href="#性能损耗" aria-hidden="true">#</a></h4><p>从上图可以看到，整个数据流程，XML的解析过程，中间损失的计算量和性能都由前端承担了。</p><p><img src="/blog/assets/rqRWNN.5b899b55.png" alt=""></p><p>最致命的损耗在于最后的页面渲染，所有后端的配置会从一个入口进入前端，不同数据量级的组件会出现解析损耗时长不一致的问题，导致页面中可能出现底部简单组件先渲染，上部复杂组件后渲染出来的情况。</p><p>如何解决这个问题：</p><ul><li>加一个全局的loding。</li><li>后端解析页面完毕后加缓存。</li></ul><h4 id="维护成本" tabindex="-1">维护成本 <a class="header-anchor" href="#维护成本" aria-hidden="true">#</a></h4><p>当添加一个颜色配置项的时候，我需要分别在三个地方加入此属性。</p><ul><li>组件的XML配置</li><li>后台的XML配置</li><li>渲染器的XML配置</li></ul><p>组件开发起来的成本非常高。</p><h3 id="过于理想化" tabindex="-1">过于理想化 <a class="header-anchor" href="#过于理想化" aria-hidden="true">#</a></h3><p>当遇到了上面的问题之后，我试着去找为什么这样设计的原因，我想可能是我格局太小了。不懂大佬的设计思路。我了解到，设计之初是为了把此活动平台做的灵活，每个XML对应的属性就是一个节点的属性，节点的属性越多可配置的项目也就越多，后续的组件可选择的配置也就更多。在后期就可以自由的按照运营的想法去配置他想要的东西了。</p><p><img src="/blog/assets/z2N4Jr.c36937ec.png" alt=""></p><p>这样一看，也是那么回事儿。但是太理想化了，过度的粒度化。运营同学想要的就是快速灵活的配置，运营不是在上面画画，灵活是相对的。我们提供的是一个组件的多种配置项，然后自由进行组合。但是运营需要的是一个组件提供好的组装，可以直接根据场景配置即可。不需要那么灵活的配置，并且相当占用时间。</p><p>我们在二期开发中封装出了大量的业务类组件，以满足不同业务场景的需求。</p><h3 id="沟通问题" tabindex="-1">沟通问题 <a class="header-anchor" href="#沟通问题" aria-hidden="true">#</a></h3><p>在我最初的想法中，我认为前端在这个项目中的占比程度很高。甚至感觉前端直接就可以搞定这个项目，实际上也是做的到的。</p><p>在这个项目中，确实存在很大的沟通成本，后端所做的很多东西其实前端都可以代替。</p><ul><li>秒杀，拼团类的活动业务流程</li><li>页面信息存储</li><li>用户信息调用</li><li>商品信息调用</li></ul><p>仔细发现，基本上都是调用的底层节后，只有页面信息是直接对接数据库的服务。这些东西中间层就可以去做掉的。</p><h3 id="因小失大" tabindex="-1">因小失大 <a class="header-anchor" href="#因小失大" aria-hidden="true">#</a></h3><p>一开始系统中未引入数据流管理工具，为了节省包体积，反而是用了一个 <code>eventBus</code> 在处理组件中的数据流。刚开始还行，后面业务场景多了许多以后，原来的 <code>eventBus</code> 处理起复杂的业务场景就没那么方便了。所以该用的东西还是得用，不要因小失大。</p><h2 id="如何设计" tabindex="-1">如何设计 <a class="header-anchor" href="#如何设计" aria-hidden="true">#</a></h2><p>上述的问题只是这次开发中比较典型的几个问题，实际过程中的其他问题就不一一赘述了。</p><p>如果去设计好一个类似于这样的平台，简略的架构图如下。</p><p><img src="/blog/assets/sGEj3Z.7ccbb907.png" alt=""></p><h3 id="管理后台" tabindex="-1">管理后台 <a class="header-anchor" href="#管理后台" aria-hidden="true">#</a></h3><p>管理后台承担的责任主要为以下三点</p><ul><li>页面管理</li><li>页面配置</li><li>数据回归</li></ul><h3 id="组件库" tabindex="-1">组件库 <a class="header-anchor" href="#组件库" aria-hidden="true">#</a></h3><p>之前的组件库和管理后台分别是一个项目，其实两者并放到一个项目即可。主要有</p><ul><li>基础组件，定制化的基础组件</li><li>业务组件，针对各个业务场景的业务组件</li><li>外部组件：接入外部的基础组件和业务组件，类似于开源组件库，内部沉淀下来的业务组件库等。</li></ul><h3 id="bff" tabindex="-1">BFF <a class="header-anchor" href="#bff" aria-hidden="true">#</a></h3><p>中间层则可以专注于做接口，与底层的数据交互工作，页面配置数据的持久化。</p><h3 id="存储系统" tabindex="-1">存储系统 <a class="header-anchor" href="#存储系统" aria-hidden="true">#</a></h3><p>存储系统很简单，只需要做页面schema的存储，版本的存储即可。</p><h3 id="发布系统" tabindex="-1">发布系统 <a class="header-anchor" href="#发布系统" aria-hidden="true">#</a></h3><p>发布系统需要做好页面的发布，回归，下线等工作。这一块也是重点。</p><p>先看看之前的发布流程。</p><p><img src="/blog/assets/dtGjKs.043073fd.png" alt=""></p><h4 id="页面渲染" tabindex="-1">页面渲染 <a class="header-anchor" href="#页面渲染" aria-hidden="true">#</a></h4><p>上文提到这种页面渲染方式非常低效，丝毫没有现代化前端的味道。我们需要通过webpack打包来做这个事儿。</p><h4 id="发布与打包方案" tabindex="-1">发布与打包方案 <a class="header-anchor" href="#发布与打包方案" aria-hidden="true">#</a></h4><p><img src="/blog/assets/mpPvPC.65a9713f.png" alt=""></p><p>上面这种方案，在页面配置完毕之后，通过webpack的多页面打包，然后上传到CDN服务上面，将页面分离出来。这样不会存在所有页面都依赖于一个 <code>schema</code> 的情况，导致页面冗余。也可以加一些预渲染的配置去优化其SEO。</p><h3 id="辅助系统" tabindex="-1">辅助系统 <a class="header-anchor" href="#辅助系统" aria-hidden="true">#</a></h3><p>此外我们还需要在系统中加上一些辅助的系统内容。</p><ul><li>埋点系统</li><li>页面性能检测（lighthouse）</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>一套企业级的活动搭建平台还是很复杂的。要想做到完美是不可能的，以上是本次开发的总结归纳，没有记录太多细节的东西。现用的这套系统，未来还会不断的迭代功能。但是大体的框架不会改变，上述的问题也会一直存在。总结经验希望在未来的类似的系统中能够用到这些东西。</p>',60)];var t=e(r,[["render",function(e,i,h,r,t,s){return l(),a("div",null,d)}]]);export{h as __pageData,t as default};
