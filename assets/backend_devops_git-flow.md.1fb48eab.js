import{_ as e,o as s,c as a,a as n}from"./app.27477bc6.js";const m=JSON.parse('{"title":"git-flow","description":"","frontmatter":{},"headers":[{"level":2,"title":"分支情形","slug":"分支情形","link":"#分支情形","children":[]},{"level":2,"title":"master分支","slug":"master分支","link":"#master分支","children":[]},{"level":2,"title":"develop分支","slug":"develop分支","link":"#develop分支","children":[]},{"level":2,"title":"hotfix分支","slug":"hotfix分支","link":"#hotfix分支","children":[]},{"level":2,"title":"release分支","slug":"release分支","link":"#release分支","children":[]},{"level":2,"title":"feature分支","slug":"feature分支","link":"#feature分支","children":[]},{"level":2,"title":"git-flow使用场景","slug":"git-flow使用场景","link":"#git-flow使用场景","children":[{"level":3,"title":"start","slug":"start","link":"#start","children":[]},{"level":3,"title":"publish","slug":"publish","link":"#publish","children":[]},{"level":3,"title":"finish","slug":"finish","link":"#finish","children":[]}]},{"level":2,"title":"git相关操作","slug":"git相关操作","link":"#git相关操作","children":[]}],"relativePath":"backend/devops/git-flow.md","lastUpdated":1670949432000}'),l={name:"backend/devops/git-flow.md"},p=n(`<h1 id="git-flow" tabindex="-1">git-flow <a class="header-anchor" href="#git-flow" aria-hidden="true">#</a></h1><p><code>Git Flow</code> 把标准的 <code>Git</code> 命令用脚本组合了起来，形成比较有效而简单的命令。</p><h2 id="分支情形" tabindex="-1">分支情形 <a class="header-anchor" href="#分支情形" aria-hidden="true">#</a></h2><p>在 <code>Git Flow</code> 中，主要的分支有 <code>master</code>、<code>develop</code>、<code>hotfix</code>、<code>release</code>、<code>feature</code> 这五种分支。<code>master</code> 和 <code>develop</code> 分支是我们最常见的分支，它们被称作长期分支，一直存活在整个工作流程中，而其它的分支大部分会因任务结束而被删除。</p><h2 id="master分支" tabindex="-1">master分支 <a class="header-anchor" href="#master分支" aria-hidden="true">#</a></h2><p>该分支主要用来存放稳定、随时可以上线的版本。 这个分支的来源只能从别的分支合并过来，开发者不会直接commit到这个分支上。 通常我们也会在这个分支上的提交打上版本号标签。</p><h2 id="develop分支" tabindex="-1">develop分支 <a class="header-anchor" href="#develop分支" aria-hidden="true">#</a></h2><p>这个分支主要是所有开发的基础分支。</p><p>当要添加功能时，所有功能都是从这个分支切出去的，而功能分支实现后，也都会合并回来这个分支中。</p><h2 id="hotfix分支" tabindex="-1">hotfix分支 <a class="header-anchor" href="#hotfix分支" aria-hidden="true">#</a></h2><p>当线上产品发生了紧急问题的时候，就会从master分支中开一个hotfix分支出来进行修复。当hotfix分支修复完成之后，就会合并到master分支中，并且也会合并到develop分支中。</p><h2 id="release分支" tabindex="-1">release分支 <a class="header-anchor" href="#release分支" aria-hidden="true">#</a></h2><p>当develop分支完成需求后，就可以从develop分支中开一个release分支，进行上线前最后的测试。测试完成后，释放release分支将会同时合并到master以及develop分支中。</p><h2 id="feature分支" tabindex="-1">feature分支 <a class="header-anchor" href="#feature分支" aria-hidden="true">#</a></h2><p>当我们需要补充功能的时候，就会从develop分支中开一个feature分支进行功能开发。</p><h2 id="git-flow使用场景" tabindex="-1">git-flow使用场景 <a class="header-anchor" href="#git-flow使用场景" aria-hidden="true">#</a></h2><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-hidden="true">#</a></h3><p>新功能开始开发前，需准备好开发分支。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git flow feature start feature-name</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行上面命令后，将会在本地创建一个名为 <code>feature-name</code> 的分支，并切换到该分支。 而且无论你当前处于哪个分支，它都会基于本地develop分支创建的。 上述命令相当于执行了下面的Git操作。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git checkout -b feature/feature-name develop</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>需要注意的一点是，该分支是基于本地的 <code>develop</code> 分支创建，所以执行此命令前一般需要拉取最新的远程代码。</p><h3 id="publish" tabindex="-1">publish <a class="header-anchor" href="#publish" aria-hidden="true">#</a></h3><p>在本地开发完成新功能并进行commit操作后，需要将本地代码提交到远程仓库。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git flow feature publish feature</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令主要做了三件事情：</p><ul><li>创建一个名为feature/feature-name的远程分支</li><li>本地分支track远程分支</li><li>如果本地存在还没提交的代码，就进行代码提交</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git push origin feature</span><span style="color:#89DDFF;">/&lt;</span><span style="color:#A6ACCD;">feature</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">set</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">upstream origin feature</span><span style="color:#89DDFF;">/&lt;</span><span style="color:#A6ACCD;">feature</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当你执行后publish操作后，后续还需要进行代码提交的话，只需执行正常的push命令既可。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="finish" tabindex="-1">finish <a class="header-anchor" href="#finish" aria-hidden="true">#</a></h3><p>当功能开发完毕后就将进入测试阶段，此时需要将该分支合并到 <code>develop</code> 分支。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git flow feature finish feature-name</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令也主要做了三件事情：</p><ul><li>切换到develop分支</li><li>合并代码到develop分支</li><li>删除本地feature/feature-name分支</li></ul><h2 id="git相关操作" tabindex="-1">git相关操作 <a class="header-anchor" href="#git相关操作" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">设置新建的分支为默认的igt pull git push 分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --set-upstream-to=origin/dev</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --unset-upstream master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">修改ignore文件后操作</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm -r --cached </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">#清除缓存  </span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#重新trace file  </span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">update .gitignore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#提交和注释  </span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master </span><span style="color:#676E95;">#可选，如果需要同步到remote上的话</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,37),i=[p];function r(t,o,c,d,h,u){return s(),a("div",null,i)}const g=e(l,[["render",r]]);export{m as __pageData,g as default};
