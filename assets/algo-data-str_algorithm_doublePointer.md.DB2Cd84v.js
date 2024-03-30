import{_ as s,c as n,o as a,U as l}from"./chunks/framework.BERZi0Za.js";const b=JSON.parse('{"title":"双指针","description":"","frontmatter":{},"headers":[],"relativePath":"algo-data-str/algorithm/doublePointer.md","filePath":"algo-data-str/algorithm/doublePointer.md","lastUpdated":1711765476000}'),p={name:"algo-data-str/algorithm/doublePointer.md"},o=l(`<h1 id="双指针" tabindex="-1">双指针 <a class="header-anchor" href="#双指针" aria-label="Permalink to &quot;双指针&quot;">​</a></h1><h2 id="删除有序数组中的重复项" tabindex="-1"><a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/" target="_blank" rel="noreferrer">删除有序数组中的重复项</a> <a class="header-anchor" href="#删除有序数组中的重复项" aria-label="Permalink to &quot;[删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> removeRepeat </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> first</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> slow</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">first</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">first</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">first</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">          nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">slow</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">first</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#BABED8;">          slow</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#BABED8;">      first</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> slow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="删除有序数组中的重复项-ii" tabindex="-1"><a href="https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/" target="_blank" rel="noreferrer">删除有序数组中的重复项 II</a> <a class="header-anchor" href="#删除有序数组中的重复项-ii" aria-label="Permalink to &quot;[删除有序数组中的重复项 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> removeDuplicates </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> slow</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> fast</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">fast</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">slow</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 2</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!=</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">fast</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">slow</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">fast</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            slow</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#BABED8;">        fast</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#BABED8;"> slow</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="移动零" tabindex="-1"><a href="https://leetcode-cn.com/problems/move-zeroes/" target="_blank" rel="noreferrer">移动零</a> <a class="header-anchor" href="#移动零" aria-label="Permalink to &quot;[移动零](https://leetcode-cn.com/problems/move-zeroes/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> moveZeroes </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> j</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">j</span><span style="color:#89DDFF;"> !==</span><span style="color:#BABED8;"> i</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#BABED8;">      j</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> nums</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="盛最多水的容器" tabindex="-1"><a href="https://leetcode-cn.com/problems/container-with-most-water/" target="_blank" rel="noreferrer">盛最多水的容器</a> <a class="header-anchor" href="#盛最多水的容器" aria-label="Permalink to &quot;[盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> maxArea </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> max</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> l</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> r</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">l</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> r</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    max</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">max</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">l</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">r</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> ( </span><span style="color:#BABED8;">r</span><span style="color:#89DDFF;"> -</span><span style="color:#BABED8;"> l</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">l</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> arr</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">r</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      l</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      r</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> max</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="三数之和" tabindex="-1"><a href="https://leetcode.cn/problems/3sum/description/" target="_blank" rel="noreferrer">三数之和</a> <a class="header-anchor" href="#三数之和" aria-label="Permalink to &quot;[三数之和](https://leetcode.cn/problems/3sum/description/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> threeSum </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> len</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> res</span><span style="color:#89DDFF;"> =</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">len</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#F78C6C;"> 3</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> res</span></span>
<span class="line"><span style="color:#BABED8;">  nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> b</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#BABED8;"> a</span><span style="color:#89DDFF;"> -</span><span style="color:#BABED8;"> b</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;"> &amp;&amp;</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> left</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> i</span><span style="color:#89DDFF;"> +</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> right</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> len</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">left</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> right</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">      const</span><span style="color:#BABED8;"> sum</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">left</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">right</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">sum</span><span style="color:#89DDFF;"> ===</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">([</span><span style="color:#BABED8;">nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">left</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">right</span><span style="color:#F07178;">]])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">left</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> right</span><span style="color:#89DDFF;"> &amp;&amp;</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">left</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">left</span><span style="color:#89DDFF;"> +</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">          left</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">left</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> right</span><span style="color:#89DDFF;"> &amp;&amp;</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">right</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> nums</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">right</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">          right</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#BABED8;">        left</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#BABED8;">        right</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;font-style:italic;"> if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">sum</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        left</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">        right</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="验证回文串" tabindex="-1"><a href="https://leetcode.cn/problems/valid-palindrome/description/" target="_blank" rel="noreferrer">验证回文串</a> <a class="header-anchor" href="#验证回文串" aria-label="Permalink to &quot;[验证回文串](https://leetcode.cn/problems/valid-palindrome/description/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> isPalindrome </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  s</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/([^</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">])/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  s</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLocaleLowerCase</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> l</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> r</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> s</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">l</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> r</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">s</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">l</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#BABED8;"> s</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">r</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      return</span><span style="color:#FF9CAC;"> false</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#BABED8;">    l</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#BABED8;">    r</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#FF9CAC;"> true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="判断子序列" tabindex="-1"><a href="https://leetcode.cn/problems/is-subsequence/description/" target="_blank" rel="noreferrer">判断子序列</a> <a class="header-anchor" href="#判断子序列" aria-label="Permalink to &quot;[判断子序列](https://leetcode.cn/problems/is-subsequence/description/)&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> isSubsequence </span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">s</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> t</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> slow</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">  let</span><span style="color:#BABED8;"> first</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  while</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">first</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#BABED8;"> t</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">s</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">slow</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> t</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">first</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      slow</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">slow</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#BABED8;"> s</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#FF9CAC;"> true</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#BABED8;">    first</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  return</span><span style="color:#BABED8;"> slow</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#BABED8;"> s</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,15),e=[o];function r(t,c,D,y,F,i){return a(),n("div",null,e)}const m=s(p,[["render",r]]);export{b as __pageData,m as default};
