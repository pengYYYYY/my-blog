import{_ as e,c as a,o as i,a as l}from"./app.355e7a82.js";const r='{"title":"应用内存分析","description":"","frontmatter":{},"headers":[{"level":2,"title":"内存模型","slug":"内存模型"},{"level":2,"title":"垃圾回收","slug":"垃圾回收"},{"level":2,"title":"内存泄漏","slug":"内存泄漏"},{"level":3,"title":"memory","slug":"memory"}],"relativePath":"font-end/js/oom.md"}',s={},t=[l('<h1 id="应用内存分析" tabindex="-1">应用内存分析 <a class="header-anchor" href="#应用内存分析" aria-hidden="true">#</a></h1><h2 id="内存模型" tabindex="-1">内存模型 <a class="header-anchor" href="#内存模型" aria-hidden="true">#</a></h2><p>JavaScript 的内存模型，其主要由堆、栈、队列三方面组成：</p><p><img src="/blog/assets/zhu7Hi.1f385cd6.png" alt="img"></p><ul><li>队列指的是消息队列</li><li>栈就是函数执行栈</li></ul><p><img src="/blog/assets/QN2SMk.3eda6f10.png" alt="img"></p><h2 id="垃圾回收" tabindex="-1">垃圾回收 <a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a></h2><p><a href="./closure.html#垃圾回收">垃圾回收介绍</a>)</p><h2 id="内存泄漏" tabindex="-1">内存泄漏 <a class="header-anchor" href="#内存泄漏" aria-hidden="true">#</a></h2><p>所谓的内存泄漏，即是指某个对象被无意间添加了某条引用，导致虽然实际上并不需要了，但还是能一直被遍历可达，以致其内存始终无法回收。本部分我们简要讨论下 JavaScript 中常见的内存泄漏情境与处理方法。在新版本的 Chrome 中我们可以使用 Performance Monitor 来动态监测网页性能的变化：</p><p><img src="/blog/assets/DLWGqs.221fb00d.png" alt="img"></p><ul><li>JS heap size - 应用的内存占用量；</li><li>DOM Nodes - 内存中 DOM 节点数目；</li><li>Documents - 当前页面中使用的样式或者脚本文件数目；</li><li>listeners- 当前页面上注册的 JavaScript 时间监听器数目;</li><li>GPU usage - 当前站点的 GPU 使用量；</li></ul><h3 id="memory" tabindex="-1">memory <a class="header-anchor" href="#memory" aria-hidden="true">#</a></h3><p><img src="/blog/assets/krrmuu.af9e0398.png" alt="img"></p><p>通过memory可以看到整体的内存情况，有以下几种：</p><ul><li>全局变量</li><li>定时器与闭包</li><li>DOM 引用与监听器</li><li>iframe</li><li>Web Worker</li></ul>',16)];var h=e(s,[["render",function(e,l,r,s,h,d){return i(),a("div",null,t)}]]);export{r as __pageData,h as default};
