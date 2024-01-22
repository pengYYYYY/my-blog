import{F as a}from"./chunks/FigmaContainer.XaHA2hxi.js";import{c as n,I as l,U as s,o as p}from"./chunks/framework.Y2dLDgJG.js";const o="/blog/assets/nmF8wj.j-BV-EZu.png",e="/blog/assets/z0sV6k.1Kq5btE3.png",r="/blog/assets/Ws6vCZ.HnYTIQKw.png",t="/blog/assets/Lf382t.MwBLyV1_.png",c="/blog/assets/qDWHNH.UMKj2KQt.png",i=s(`<h1 id="作用域与垃圾回收" tabindex="-1">作用域与垃圾回收 <a class="header-anchor" href="#作用域与垃圾回收" aria-label="Permalink to &quot;作用域与垃圾回收&quot;">​</a></h1><h2 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h2><p>讲到闭包，就会牵扯到作用域和垃圾回收</p><p>在 JavaScript 中, 对象和函数同样也是变量。作用域为可访问变量，对象，函数的集合</p><h3 id="全局作用域" tabindex="-1">全局作用域 <a class="header-anchor" href="#全局作用域" aria-label="Permalink to &quot;全局作用域&quot;">​</a></h3><p>全局作用域贯穿整个 javascript 文档，在所有函数声明或者大括号之外定义的变量，都在全局作用域里。一旦你声明了一个全局变量，那么你在任何地方都可以使用它，包括函数内部。事实上，JavaScript 默认拥有一个全局对象 window，声明一个全局变量，就是为 window 对象的同名属性赋值。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> myFn</span><span style="color:#89DDFF;"> ()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  person1</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> person2 </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">person2) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(person1) </span><span style="color:#676E95;font-style:italic;">// 2 </span></span>
<span class="line"><span style="color:#82AAFF;">myFn</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">// 执行后person1成为全局变量</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(person1) </span><span style="color:#676E95;font-style:italic;">// 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="局部作用域" tabindex="-1">局部作用域 <a class="header-anchor" href="#局部作用域" aria-label="Permalink to &quot;局部作用域&quot;">​</a></h3><p>在JavaScript中，任何定义在函数体内的变量或者函数都将处于函数作用域中，这些变量也无法被在函数外部使用。(闭包除外)</p><ul><li>变量在函数内声明，变量属于局部作用域。</li><li>局部变量只能在函数内部访问。</li><li>局部变量只作用于函数内，所以不同的函数可以使用相同名称的变量。</li><li>局部变量在函数开始执行时创建，函数执行完后局部变量会自动销毁。</li></ul><h3 id="作用域链" tabindex="-1">作用域链 <a class="header-anchor" href="#作用域链" aria-label="Permalink to &quot;作用域链&quot;">​</a></h3><ul><li>遍历嵌套作用域链的规则： 引擎从当前的执行作用域开始查找变量，如果找不到， 就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。</li><li>局部作用域可以访问到全局作用域中的变量和方法，而全局作用域不能访问局部作用域的变量和方法。</li></ul><h2 id="什么是闭包" tabindex="-1">什么是闭包？ <a class="header-anchor" href="#什么是闭包" aria-label="Permalink to &quot;什么是闭包？&quot;">​</a></h2><p>闭包是一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。闭包就是能够读取其他函数内部变量的函数。需要追溯到调用栈和垃圾回收。</p><p>闭包的例子：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 10</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //全局作用域 标记为 flag1</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#82AAFF;"> add</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C792EA;">  var</span><span style="color:#BABED8;"> count</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //函数全局作用域 标记为 flag2</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#BABED8;">    count</span><span style="color:#89DDFF;"> +=</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //函数的内部作用域</span></span>
<span class="line"><span style="color:#82AAFF;">    alert</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">count</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> add</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">s</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //输出1</span></span>
<span class="line"><span style="color:#82AAFF;">s</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //输出2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="闭包的优点和缺点" tabindex="-1">闭包的优点和缺点 <a class="header-anchor" href="#闭包的优点和缺点" aria-label="Permalink to &quot;闭包的优点和缺点&quot;">​</a></h3><h4 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h4><ul><li>闭包的缺点就是常驻内存会增大内存使用量，并且使用不当很容易造成内存泄露。</li></ul><h4 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h4><ul><li>可以读取函数内部的变量, 创建私有变量，隐藏实现细节</li><li>可以让这些局部变量保存在内存中，实现变量数据共享。</li><li>延长变量声明周期</li></ul><h4 id="关于内存泄露" tabindex="-1">关于内存泄露 <a class="header-anchor" href="#关于内存泄露" aria-label="Permalink to &quot;关于内存泄露&quot;">​</a></h4><p>内存泄漏（Memory Leak） 是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。 一些文章内说闭包会造成内存泄漏，要尽量少用。其实这个观点是错误的，闭包并不会造成内存泄漏，而是正常的内存使用如何避免内存泄漏？需要及时解除无用引用。</p><h4 id="闭包的实践" tabindex="-1">闭包的实践 <a class="header-anchor" href="#闭包的实践" aria-label="Permalink to &quot;闭包的实践&quot;">​</a></h4><ul><li>函数柯里化</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 柯里化前</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getVolume </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">l</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> w</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> h</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#BABED8;"> l </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> w </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> h</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> volume1 </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> getVolume</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 200</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 100</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> volume2 </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> getVolume</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 200</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 300</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 柯里化后</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getVolume </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;font-style:italic;"> l</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#BABED8;font-style:italic;"> w</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#BABED8;font-style:italic;"> h</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#BABED8;"> l </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> w </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> h</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getVolumeWithDefaultLW </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> getVolume</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">100</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">200</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> volume3 </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> getVolumeWithDefaultLW</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">100</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> volume4 </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> getVolumeWithDefaultLW</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">300</span><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>模块化</li></ul><p>用于将内部实现封装，仅对外暴露接口。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> counter </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  var</span><span style="color:#BABED8;"> privateCounter</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#C792EA;">  function</span><span style="color:#82AAFF;"> changeBy</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">val</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">    privateCounter</span><span style="color:#89DDFF;"> +=</span><span style="color:#BABED8;"> val</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">    increment</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">      changeBy</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    },</span></span>
<span class="line"><span style="color:#82AAFF;">    decrement</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">      changeBy</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    },</span></span>
<span class="line"><span style="color:#82AAFF;">    value</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span><span style="color:#BABED8;"> privateCounter</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>设置缓存</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> fn</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C792EA;">  var</span><span style="color:#BABED8;"> cache</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> {}</span><span style="color:#676E95;font-style:italic;">//将结果缓存到该对象中</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C792EA;">    var</span><span style="color:#BABED8;"> str</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arguments</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">cache</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">str</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">//判断缓存中是否存在传递过来的参数，存在直接返回结果，无需计算</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span><span style="color:#BABED8;"> cache</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">str</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;"> {</span><span style="color:#676E95;font-style:italic;">//进行计算并返回结果</span></span>
<span class="line"><span style="color:#C792EA;">      var</span><span style="color:#BABED8;"> sum</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">arguments</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        sum</span><span style="color:#89DDFF;">+=</span><span style="color:#BABED8;">arguments</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span><span style="color:#BABED8;"> cache</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">str</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">sum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="模拟块级作用域" tabindex="-1">模拟块级作用域 <a class="header-anchor" href="#模拟块级作用域" aria-label="Permalink to &quot;模拟块级作用域&quot;">​</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">  setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  },</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> *</span><span style="color:#F78C6C;"> 1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> (</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  (</span><span style="color:#BABED8;font-style:italic;">i</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">    setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    },</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> *</span><span style="color:#F78C6C;"> 1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#F07178;">)(</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="垃圾回收" tabindex="-1">垃圾回收 <a class="header-anchor" href="#垃圾回收" aria-label="Permalink to &quot;垃圾回收&quot;">​</a></h2>`,34),y=s('<ul><li><p>在调用栈中，有一个记录 当前执行状态的指针(称为 ESP)，函数的执行上下文一旦被执行后，JavaScript 引擎会通过向下移动 ESP 来销毁该函数保存在栈中的执行上下文。在调用另外的函数时，这块内容会被直接覆盖掉，用来存放另外一个函数的执行上下文。</p></li><li><p>堆中的垃圾回收：回收堆中的垃圾数据，需要用到 JavaScript 引擎中的垃圾回收器。</p></li><li><p>代际假说：第一个是大部分对象在内存中存在的时间很短，简单来说，就是很多对象一经分配内存，很快就变得不可访问;第二个是不死的对象，会活得更久。</p></li><li><p>栈空间</p><ul><li>执行状态指针</li></ul></li><li><p>堆空间</p><ul><li>新生代 <ul><li>swap</li><li>对象晋升</li></ul></li><li>老生代 <ul><li>标记清除法</li><li>引用计数法</li><li>内存整理</li></ul></li></ul></li></ul><p>垃圾回收算法有多种，我们从 <code>吞吐量 throughput</code>, <code>最大暂停时间</code>, <code>堆使用效率</code>, <code>访问的局部性</code>来评测算法的好坏。</p><h3 id="标记-清除算法-mark-sweep-gc" tabindex="-1">标记-清除算法（ Mark-Sweep GC） <a class="header-anchor" href="#标记-清除算法-mark-sweep-gc" aria-label="Permalink to &quot;标记-清除算法（ Mark-Sweep GC）&quot;">​</a></h3><p>标记清除法分两个阶段：</p><ul><li>标记阶段：从根集合出发，将所有活动对象及其子对象打上标记</li><li>清除阶段：遍历堆，将非活动对象（未打上标记）的连接到空闲链表上</li></ul><p><img src="'+o+'" alt="img"></p><p>优点：</p><p>实现简单， 容易和其他算法组合</p><p>缺点：</p><ul><li>碎片化， 会导致无数小分块散落在堆的各处</li><li>分配速度不理想，每次分配都需要遍历空闲列表找到足够大的分块</li><li>与写时复制技术不兼容，因为每次都会在活动对象上打上标记</li></ul><h3 id="标记-压缩-mark-compact" tabindex="-1">标记-压缩（Mark-Compact） <a class="header-anchor" href="#标记-压缩-mark-compact" aria-label="Permalink to &quot;标记-压缩（Mark-Compact）&quot;">​</a></h3><p>和“标记－清除”相似，不过在标记阶段后它将所有活动对象紧密的排在堆的一侧（压缩），消除了内存碎片，不过压缩是需要花费计算成本的。如下图过程，标记后需要定位各个活动对象的新内存地址，然后再移动对象，总共搜索了3次堆。</p><p><img src="'+e+'" alt="img"></p><p>有效利用了堆，不会出现内存碎片 也不会像复制算法那样只能利用堆的一部分</p><p>压缩过程的开销，需要多次搜索堆</p><h3 id="引用计数-reference-counting" tabindex="-1">引用计数 Reference Counting <a class="header-anchor" href="#引用计数-reference-counting" aria-label="Permalink to &quot;引用计数 Reference Counting&quot;">​</a></h3><p>引用计数，就是记录每个对象被引用的次数，每次新建对象、赋值引用和删除引用的同时更新计数器，如果计数器值为0则直接回收内存。 很明显，引用计数最大的优势是暂停时间短</p><ul><li><p>优点</p><ul><li>可即刻回收垃圾</li><li>最大暂停时间短</li><li>没有必要沿指针查找，不要和标记-清除算法一样沿着根集合开始查找</li></ul></li><li><p>缺点</p><ul><li>计数器的增减处理繁重</li><li>计数器需要占用很多位</li><li>实现繁琐复杂， 每个赋值操作都得替换成引用更新操作</li><li>循环引用无法回收</li></ul></li></ul><h3 id="gc复制算法" tabindex="-1">GC复制算法 <a class="header-anchor" href="#gc复制算法" aria-label="Permalink to &quot;GC复制算法&quot;">​</a></h3><p>将堆分为两个大小相同的空间 From 和 To， 利用 From 空间进行分配，当 From 空间满的时候，GC将其中的活动对象复制到 To 空间，之后将两个空间互换即完成GC。</p><ul><li>优点 <ul><li>优秀的吞吐量， 只需要关心活动对象</li><li>可实现高速分配； 因为分块是连续的，不需要使用空闲链表</li><li>不会发生碎片化</li><li>与缓存兼容</li></ul></li><li>缺点 <ul><li>堆使用率低</li><li>需要空间大</li><li>递归调用函数， 复制子对象需要递归调用复制函数消耗栈</li></ul></li></ul><h3 id="三色标记算法" tabindex="-1">三色标记算法 <a class="header-anchor" href="#三色标记算法" aria-label="Permalink to &quot;三色标记算法&quot;">​</a></h3><ul><li>白色： 没有检查</li><li>灰色： 自身被检查了，成员没被检查完（可以认为访问到了，但是正在被检查，就是遍历里那些在队列中的节点）</li><li>黑色： 自身和成员都被检查完了</li></ul><p>根查找阶段： 对能直接从根引用的对象打上标记，堆放到标记栈里（白色 涂成 灰色） 标记阶段： 从标记栈中取出对象，将其子对象涂成灰色；这个阶段不是一下子处理所有的灰色对象，而只是处理一定个数，然后暂停gc 清除阶段： 将没被标记的白色对象连接到空闲链表，并重置已标记的对象标记位</p><p><img src="'+r+'" alt="img"><img src="'+t+'" alt="img"><img src="'+c+'" alt="img"></p><p>优点： 缩短最大暂停时间 缺点： 降低了吞吐量</p><h3 id="内存空间" tabindex="-1">内存空间 <a class="header-anchor" href="#内存空间" aria-label="Permalink to &quot;内存空间&quot;">​</a></h3><p>在 JavaScript 的执行过程中，主要有三种类型内存空间，分别是代码空间、栈空间和堆空间。</p><h4 id="栈空间和堆空间" tabindex="-1">栈空间和堆空间 <a class="header-anchor" href="#栈空间和堆空间" aria-label="Permalink to &quot;栈空间和堆空间&quot;">​</a></h4><p>在执行过程中，栈空间用来维护函数的执行上下文，堆空间用来保存引用类型数据。</p><p>通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据。而引用类型的数据占用的空间都比较大，堆空间很大，能存放很多大的数据。</p><h3 id="新生代和老生代" tabindex="-1">新生代和老生代 <a class="header-anchor" href="#新生代和老生代" aria-label="Permalink to &quot;新生代和老生代&quot;">​</a></h3><p>新生代中存放的是生存时间短的对 象，老生代中存放的生存时间久的对象。 新生区通常只支持 1~8M 的容量，而老生区支持的容量就大很多了。对于这两块区域，V8 分别使用两个不同的垃圾回收器</p><ul><li>副垃圾回收器，主要负责新生代的垃圾回收。</li><li>主垃圾回收器，主要负责老生代的垃圾回收。</li></ul><h3 id="垃圾回收的工作流程" tabindex="-1">垃圾回收的工作流程 <a class="header-anchor" href="#垃圾回收的工作流程" aria-label="Permalink to &quot;垃圾回收的工作流程&quot;">​</a></h3><ul><li>第一步：标记空间中活动对象和非活动对象。标记活着的和死的。</li><li>第二步：回收非活动对象所占据的内存，回收死的。</li><li>第三步：内存整理，一般来说，频繁回收对象后，内存中就会存在大量不连续空间，这些不连续的内存空间称为内存碎片。</li></ul><h4 id="主垃圾回收器" tabindex="-1">主垃圾回收器 <a class="header-anchor" href="#主垃圾回收器" aria-label="Permalink to &quot;主垃圾回收器&quot;">​</a></h4><p>主垃圾回收器主要负责老生区中的垃圾回收。除了新生区中晋升的对象，一些大的对象会直接被分配到老生区。一个是对象占用空间大，另一个是对象存活时间长。</p><p>主垃圾回收器是采用标记 - 清除(Mark-Sweep)的算法进行垃圾回收。标记阶段就是从一组根元素开始，递归遍历这组根元素，在这个遍历过程中，能到达的元素称活动对象，没有到达的元素就可以判断为垃圾数据。</p><p>在垃圾回收处理过程中，先使用标记清除算法把垃圾清除，再使用标记整理算法把碎片进行整理。</p><h4 id="副垃圾回收器" tabindex="-1">副垃圾回收器 <a class="header-anchor" href="#副垃圾回收器" aria-label="Permalink to &quot;副垃圾回收器&quot;">​</a></h4><p>小的对象会分配到新生区，这个区域虽然不大，但是垃圾回收还是比较频繁的。</p><p>新生代中用 <code>Scavenge</code> 算法,把新生代空间对半划分为两个区域，一半是对象区域，一半是空闲区域.新加入的对象都会存放到对象区域，当对象区域快被写满时，就需要执行一次垃圾清理操作。</p><p>在垃圾回收过程中，首先要对对象区域中的垃圾做标记；标记完成之后，就进入垃圾清理阶段，副垃圾回收器会把这些存活的对象复制到空闲区域中，同时它还会把这些对象有序地排列起来，所以这个复制过程，也就相当于完成了内存整理操作，复制后空闲区域就没有内存碎片了。</p><p>完成复制后，对象区域与空闲区域进行角色翻转，也就是原来的对象区域变成空闲区域，原来的空闲区域变成了对象区域。</p><p>因为需要开辟两块空间，所以一般新生区都会设置的比较小。因为空间不大，所以很容易被存活的对象装满整个区域。JavaScript 引擎采用了对象晋升策略，也就是经过两次垃圾回收依然还存活的对象，会被移动到老生区中。</p><h3 id="暂停时间" tabindex="-1">暂停时间 <a class="header-anchor" href="#暂停时间" aria-label="Permalink to &quot;暂停时间&quot;">​</a></h3><p>由于 JavaScript 是运行在主线程之上的，一旦执行垃圾回收算法，都需要将正在执行的 JavaScript 脚本暂停下来。待垃圾回收完毕后再恢复脚本执行。我们把这种行为叫做全停顿(Stop-The-World)。</p><p>为了降低老生代的垃圾回收而造成的卡顿，V8 将标记过程分为一个个的子标记过程，同时让垃圾回收标记和 JavaScript 应用逻辑交替进行。这个算法称为增量标记。使用增量标记算法，可以把一个完整的垃圾回收任务拆分为很多小的任务，这些小的任务执行时间比较短，可以穿插在其他的 JavaScript 任务中间执行。</p>',49),A=JSON.parse('{"title":"作用域与垃圾回收","description":"","frontmatter":{},"headers":[],"relativePath":"font-end/js/scope-gc.md","filePath":"font-end/js/scope-gc.md","lastUpdated":1705857721000}'),F={name:"font-end/js/scope-gc.md"},d=Object.assign(F,{setup(D){return(u,b)=>(p(),n("div",null,[i,l(a,{url:"https://www.figma.com/file/E2utI9rEseFTc7tJ3Bbl9o/blog?type=whiteboard&node-id=1664-2980&t=zfM8G0KnIXVdoA3s-4"}),y]))}});export{A as __pageData,d as default};