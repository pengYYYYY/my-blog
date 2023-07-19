import{_ as l,o as i,c as e,a}from"./app.af1c1bf7.js";const r="/blog/assets/nmF8wj.56b2de5d.png",s="/blog/assets/z0sV6k.2a009bef.png",n="/blog/assets/Ws6vCZ.542be08d.png",t="/blog/assets/Lf382t.c5b5d866.png",c="/blog/assets/qDWHNH.0d100b70.png",v=JSON.parse('{"title":"JavaScript核心","description":"","frontmatter":{},"headers":[{"level":2,"title":"解释执行","slug":"解释执行","link":"#解释执行","children":[]},{"level":2,"title":"作用域","slug":"作用域","link":"#作用域","children":[]},{"level":2,"title":"原型链","slug":"原型链","link":"#原型链","children":[]},{"level":2,"title":"事件循环","slug":"事件循环","link":"#事件循环","children":[]},{"level":2,"title":"垃圾回收","slug":"垃圾回收","link":"#垃圾回收","children":[{"level":3,"title":"标记-清除算法（ Mark-Sweep GC）","slug":"标记-清除算法-mark-sweep-gc","link":"#标记-清除算法-mark-sweep-gc","children":[]},{"level":3,"title":"标记-压缩（Mark-Compact）","slug":"标记-压缩-mark-compact","link":"#标记-压缩-mark-compact","children":[]},{"level":3,"title":"引用计数 Reference Counting","slug":"引用计数-reference-counting","link":"#引用计数-reference-counting","children":[]},{"level":3,"title":"GC复制算法","slug":"gc复制算法","link":"#gc复制算法","children":[]},{"level":3,"title":"三色标记算法","slug":"三色标记算法","link":"#三色标记算法","children":[]}]},{"level":2,"title":"this 指向","slug":"this-指向","link":"#this-指向","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[{"level":3,"title":"事件阻断","slug":"事件阻断","link":"#事件阻断","children":[]}]}],"relativePath":"font-end/js/core.md","lastUpdated":1689731221000}'),d={name:"font-end/js/core.md"},h=a('<h1 id="javascript核心" tabindex="-1">JavaScript核心 <a class="header-anchor" href="#javascript核心" aria-hidden="true">#</a></h1><p>js的几大核心问题</p><h2 id="解释执行" tabindex="-1">解释执行 <a class="header-anchor" href="#解释执行" aria-hidden="true">#</a></h2><ul><li>代码编译阶段 <ul><li>编译器 <ul><li>高级语言</li><li>汇编指令集</li><li>机器码</li></ul></li><li>编译器 <ul><li>词法分析和语法分析生成AST</li><li>语义分析生成中间代码</li><li>代码优化生成二进制文件</li><li>直接执行二进制文件</li></ul></li><li>解释器 <ul><li>词法分析和语法分析生成AST</li><li>语义分析生成字节码</li><li>解释执行</li></ul></li></ul></li><li>V8执行代码阶段 <ul><li>生成抽象语法树(AST)和执行上下文（编译阶段） <ul><li>使用编译器</li><li>分词</li><li>解析</li></ul></li><li>生成字节码 <ul><li>ast</li><li>机器码</li></ul></li><li>执行代码 <ul><li>使用解释器</li><li>热点代码的缓存</li></ul></li></ul></li></ul><h2 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-hidden="true">#</a></h2><ul><li>全局作用域</li><li>函数作用域 <ul><li>执行上下文</li><li>词法作用域</li></ul></li><li>块级作用域</li><li>闭包</li><li>作用域链</li></ul><h2 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-hidden="true">#</a></h2><h2 id="事件循环" tabindex="-1">事件循环 <a class="header-anchor" href="#事件循环" aria-hidden="true">#</a></h2><h2 id="垃圾回收" tabindex="-1">垃圾回收 <a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a></h2><ul><li>栈空间 <ul><li>执行状态指针</li></ul></li><li>堆空间 <ul><li>新生代 <ul><li>swap</li><li>对象晋升</li></ul></li><li>老生代 <ul><li>标记清除法</li><li>引用计数法</li><li>内存整理</li></ul></li></ul></li></ul><p>垃圾回收算法有多种，我们从 <code>吞吐量 throughput</code>, <code>最大暂停时间</code>, <code>堆使用效率</code>, <code>访问的局部性</code>来评测算法的好坏。</p><h3 id="标记-清除算法-mark-sweep-gc" tabindex="-1">标记-清除算法（ Mark-Sweep GC） <a class="header-anchor" href="#标记-清除算法-mark-sweep-gc" aria-hidden="true">#</a></h3><p>标记清除法分两个阶段：</p><ul><li>标记阶段：从根集合出发，将所有活动对象及其子对象打上标记</li><li>清除阶段：遍历堆，将非活动对象（未打上标记）的连接到空闲链表上</li></ul><p><img src="'+r+'" alt="img"></p><p>优点：</p><p>实现简单， 容易和其他算法组合</p><p>缺点：</p><ul><li>碎片化， 会导致无数小分块散落在堆的各处</li><li>分配速度不理想，每次分配都需要遍历空闲列表找到足够大的分块</li><li>与写时复制技术不兼容，因为每次都会在活动对象上打上标记</li></ul><h3 id="标记-压缩-mark-compact" tabindex="-1">标记-压缩（Mark-Compact） <a class="header-anchor" href="#标记-压缩-mark-compact" aria-hidden="true">#</a></h3><p>和“标记－清除”相似，不过在标记阶段后它将所有活动对象紧密的排在堆的一侧（压缩），消除了内存碎片，不过压缩是需要花费计算成本的。如下图过程，标记后需要定位各个活动对象的新内存地址，然后再移动对象，总共搜索了3次堆。</p><p><img src="'+s+'" alt="img"></p><p>有效利用了堆，不会出现内存碎片 也不会像复制算法那样只能利用堆的一部分</p><p>压缩过程的开销，需要多次搜索堆</p><h3 id="引用计数-reference-counting" tabindex="-1">引用计数 Reference Counting <a class="header-anchor" href="#引用计数-reference-counting" aria-hidden="true">#</a></h3><p>引用计数，就是记录每个对象被引用的次数，每次新建对象、赋值引用和删除引用的同时更新计数器，如果计数器值为0则直接回收内存。 很明显，引用计数最大的优势是暂停时间短</p><ul><li><p>优点</p><ul><li>可即刻回收垃圾</li><li>最大暂停时间短</li><li>没有必要沿指针查找，不要和标记-清除算法一样沿着根集合开始查找</li></ul></li><li><p>缺点</p><ul><li>计数器的增减处理繁重</li><li>计数器需要占用很多位</li><li>实现繁琐复杂， 每个赋值操作都得替换成引用更新操作</li><li>循环引用无法回收</li></ul></li></ul><h3 id="gc复制算法" tabindex="-1">GC复制算法 <a class="header-anchor" href="#gc复制算法" aria-hidden="true">#</a></h3><p>将堆分为两个大小相同的空间 From 和 To， 利用 From 空间进行分配，当 From 空间满的时候，GC将其中的活动对象复制到 To 空间，之后将两个空间互换即完成GC。</p><ul><li>优点 <ul><li>优秀的吞吐量， 只需要关心活动对象</li><li>可实现高速分配； 因为分块是连续的，不需要使用空闲链表</li><li>不会发生碎片化</li><li>与缓存兼容</li></ul></li><li>缺点 <ul><li>堆使用率低</li><li>需要空间大</li><li>递归调用函数， 复制子对象需要递归调用复制函数消耗栈</li></ul></li></ul><h3 id="三色标记算法" tabindex="-1">三色标记算法 <a class="header-anchor" href="#三色标记算法" aria-hidden="true">#</a></h3><ul><li>白色： 没有检查</li><li>灰色： 自身被检查了，成员没被检查完（可以认为访问到了，但是正在被检查，就是遍历里那些在队列中的节点）</li><li>黑色： 自身和成员都被检查完了</li></ul><p>根查找阶段： 对能直接从根引用的对象打上标记，堆放到标记栈里（白色 涂成 灰色） 标记阶段： 从标记栈中取出对象，将其子对象涂成灰色；这个阶段不是一下子处理所有的灰色对象，而只是处理一定个数，然后暂停gc 清除阶段： 将没被标记的白色对象连接到空闲链表，并重置已标记的对象标记位</p><p><img src="'+n+'" alt="img"><img src="'+t+'" alt="img"><img src="'+c+`" alt="img"></p><p>优点： 缩短最大暂停时间 缺点： 降低了吞吐量</p><h2 id="this-指向" tabindex="-1">this 指向 <a class="header-anchor" href="#this-指向" aria-hidden="true">#</a></h2><ul><li>call</li><li>bind</li><li>apply</li><li>箭头函数</li></ul><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h2><p>事件的三个阶段</p><ul><li>事件捕获</li><li>事件触发</li><li>事件冒泡</li></ul><h3 id="事件阻断" tabindex="-1">事件阻断 <a class="header-anchor" href="#事件阻断" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stopPropagation</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,42),p=[h];function o(u,g,m,_,b,f){return i(),e("div",null,p)}const C=l(d,[["render",o]]);export{v as __pageData,C as default};
