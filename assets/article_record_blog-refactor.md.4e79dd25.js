import{_ as s,o as a,c as n,a as l}from"./app.1ad5e66e.js";const e="/blog/assets/figma-embed.7ace3c39.png",o="/blog/assets/figma-container.3830cb25.png",p="/blog/assets/algolia-dashboard.43c19250.png",c="/blog/assets/algolia-api-keys.fe92223f.png",r="/blog/assets/algolia-search-list.a56573ec.png",m=JSON.parse('{"title":"Blog 翻新记录","description":"","frontmatter":{},"headers":[{"level":2,"title":"Why","slug":"why","link":"#why","children":[]},{"level":2,"title":"How","slug":"how","link":"#how","children":[]},{"level":2,"title":"Other","slug":"other","link":"#other","children":[]},{"level":2,"title":"Summarize","slug":"summarize","link":"#summarize","children":[]},{"level":2,"title":"续","slug":"续","link":"#续","children":[]},{"level":2,"title":"algolia","slug":"algolia","link":"#algolia","children":[{"level":3,"title":"申请","slug":"申请","link":"#申请","children":[]},{"level":3,"title":"设置 apikey","slug":"设置-apikey","link":"#设置-apikey","children":[]},{"level":3,"title":"爬取数据","slug":"爬取数据","link":"#爬取数据","children":[]},{"level":3,"title":"数据列表","slug":"数据列表","link":"#数据列表","children":[]},{"level":3,"title":"vitepess 配置","slug":"vitepess-配置","link":"#vitepess-配置","children":[]}]}],"relativePath":"article/record/blog-refactor.md","lastUpdated":1688570734000}'),t={name:"article/record/blog-refactor.md"},i=l('<h1 id="blog-翻新记录" tabindex="-1">Blog 翻新记录 <a class="header-anchor" href="#blog-翻新记录" aria-hidden="true">#</a></h1><p>浅记录一下 <code>blog</code> 翻新的过程。</p><h2 id="why" tabindex="-1">Why <a class="header-anchor" href="#why" aria-hidden="true">#</a></h2><ul><li>第一点：自从用了 <code>vite</code> 以后实在是忍不了热更新的速度。基本上个人的所有技术栈都在往 <code>vite</code> 迁移。所以想把 <code>blog</code> 翻新一下, 强迫症。</li><li>第二点：之前的 <code>blog</code> 就是文档+图片，比较生硬，且都是学习记录。新的 <code>blog</code> 想做点新能力进来，另外就是把以前的学习内容再好好整理一下。</li><li>第三点：感觉 <code>vue</code> 的新官网挺好看的，想用 <code>@vue/theme</code> 折腾一下。</li></ul><h2 id="how" tabindex="-1">How <a class="header-anchor" href="#how" aria-hidden="true">#</a></h2><ul><li>setup：新的 <code>blog</code> 决定了用 <code>vue</code> 新官网的配色，那就直接站在巨人的肩膀上吧，于是乎 <code>fork</code> 一份 <a href="https://github.com/vuejs-translations/docs-zh-cn" target="_blank" rel="noreferrer">docs-zh-cn</a>。这也是对于 <code>@vue/theme</code> 的最佳实践吧。</li><li>文件资源：迁移老站点的文档，这个时候遇到了一个问题，之前的图片全部都是放到 <code>gitee</code> 的图床，有一天突然全部挂了，那天腾讯云 <code>cos</code> 还专门做了一个活动来迁移。不过为了避免后面再发生这样的事情，还是直接把图片资源存在github吧。</li><li>部署：部署还是用<a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noreferrer">github-pages-deploy-action</a> 这个很成熟的库，当然还有很多种免费的部署资源可以去看 <a href="https://vitejs.dev/guide/static-deploy.html" target="_blank" rel="noreferrer">vite-static-deploy</a>。</li></ul><h2 id="other" tabindex="-1">Other <a class="header-anchor" href="#other" aria-hidden="true">#</a></h2><ul><li>figma: 脑图会迁移到 <code>figjam</code> 里面去，<code>figma</code> 的 <code>embed</code> 可以生成一个 <code>iframe</code>, 做一个 <code>figma-container</code> 组件后可以直接嵌入到文档里面来。体验会比之前的脑图截图好很多。之前画的脑图比较多，会慢慢去做迁移。</li></ul><blockquote><p>分享按钮</p></blockquote><p><img src="'+e+'" alt="img"></p><blockquote><p>文档嵌入效果</p></blockquote><p><img src="'+o+'" alt="img"></p><ul><li>xmind: 是迄今为止很优秀的脑图软件了，对比百度脑图，腾讯文档等，体验确实好不少。但是在协同办公浪潮中，<code>xmind</code> 对在线协同编辑的能力支持确实不足，存在很多不方便的地方，且web版本的不支持对在线文件的打开预览，不符合个人需求。可以去体验 <a href="https://xmind.works/#/" target="_blank" rel="noreferrer">web-xmind</a>，可以存储文件到云盘里面，然后在 <code>web-xmind</code> 里面打开。缺点就是整个链路没有打通，没有类似 <code>figma embed</code> 这种东西。</li></ul><h2 id="summarize" tabindex="-1">Summarize <a class="header-anchor" href="#summarize" aria-hidden="true">#</a></h2><p>总结下来，整个流程没有很大的难点，但是也花了一些时间在这上面，博客站点确实可以很快去搭建，还是想提升一下可玩性。个人把博客当作一个记录的载体，重要的还是坚持写点东西。另外还有 <code>algolia</code> 没有去弄，对面上的翻新只是一个起点，后面还有很多可玩儿的地方，之前的站点确实让自己没有欲望去更新和写东西，投入一些时间在新 <code>blog</code> 里面，让自己更有动力去做这件事情。</p><h2 id="续" tabindex="-1">续 <a class="header-anchor" href="#续" aria-hidden="true">#</a></h2><p>最近发现 <code>vitepress</code> 发布 <code>1.0</code> 了，而且 <code>ui</code> 和 <code>@vue/theme</code> 差不多，甚至更适合一点，最近 <code>vitest</code> <code>vite</code> 这些库的官网也都换了新装。决定放弃 <code>@vue/theme</code> 这一套，直接改到简单的模式的 <code>vitepress</code>，之前那一套有过多的定制化的东西，包括 <code>logo</code> 都是魔改的。接入 <code>vitepress</code> 的过程很简单，基本上就是复制，然后删掉一些没用的包。发现一个 <code>logo</code> 点击跳转的 <code>bug</code>, 官方也很快就解决了。然后解决了麻烦的 <code>algolia</code> 配置问题。</p><h2 id="algolia" tabindex="-1">algolia <a class="header-anchor" href="#algolia" aria-hidden="true">#</a></h2><p>Algolia 是一个数据库实时搜索服务，能够提供毫秒级的数据库搜索服务，并且其服务能以 API 的形式方便地布局到网页、客户端、APP 等多种场景。</p><h3 id="申请" tabindex="-1">申请 <a class="header-anchor" href="#申请" aria-hidden="true">#</a></h3><p>algolia 也提供了一个专门用于文档搜索服务的 <code>docsearch</code>，需要进行申请。</p><p><a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noreferrer">搜索服务申请地址</a></p><p>申请完以后发现需要花很长时间等待审批，于是直接用标准化的服务了。</p><h3 id="设置-apikey" tabindex="-1">设置 apikey <a class="header-anchor" href="#设置-apikey" aria-hidden="true">#</a></h3><p><img src="'+p+'" alt="img"></p><p>进入主界面，点击 API Keys。</p><p>这时候API Keys默认提供了四个，分别对应不同的权限，我们只需要用到两个即可:</p><ul><li>Search-Only API Key: 只能用于搜索，在生产中使用。</li><li>Admin API Key: 管理员API，可用作所有事情，在爬取数据的时候使用。</li></ul><p><img src="'+c+`" alt="img"></p><h3 id="爬取数据" tabindex="-1">爬取数据 <a class="header-anchor" href="#爬取数据" aria-hidden="true">#</a></h3><p>新建文件夹和对应文件目录如下：</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">- algoliaConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">-- .env</span></span>
<span class="line"><span style="color:#A6ACCD;">-- config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="env文件配置" tabindex="-1">.env文件配置 <a class="header-anchor" href="#env文件配置" aria-hidden="true">#</a></h4><p><code>appid</code> 和 <code>api-key</code>,这里使用的是 <code>admin api key</code>.切记不要泄漏，也不要传到 <code>github</code> 上面，本地跑完即可。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">APPLICATION_ID</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">PXUFXUCGYX</span></span>
<span class="line"><span style="color:#A6ACCD;">API_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="config-json-配置问题" tabindex="-1">config.json 配置问题 <a class="header-anchor" href="#config-json-配置问题" aria-hidden="true">#</a></h4><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">index_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">start_urls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://pengyyyyy.github.io/blog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//线上地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">stop_urls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">selectors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//词条级别,对应的HTML标签</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">selector</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sidebar-links sidebar-group-items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">global</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">default_value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Documentation</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">strip_chars</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> .,;:#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">custom_settings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">attributesForFaceting</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">language</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">conversation_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">809666386</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scrap_start_urls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">nb_hits</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OUTPUT OF THE CRAWL</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="利用-algolia-docsearch-scraper-爬去线上页面" tabindex="-1">利用 algolia/docsearch-scraper 爬去线上页面 <a class="header-anchor" href="#利用-algolia-docsearch-scraper-爬去线上页面" aria-hidden="true">#</a></h4><p>使用 <code>docker</code> 爬取数据。进入文件夹下运行如下命令即可，爬去的数据会自动上传到 <code>algolia</code> 的服务器</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--env-file=.env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CONFIG=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">cat</span><span style="color:#C3E88D;"> ./config.json</span><span style="color:#89DDFF;">)&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">algolia/docsearch-scraper</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="数据列表" tabindex="-1">数据列表 <a class="header-anchor" href="#数据列表" aria-hidden="true">#</a></h3><p><img src="`+r+`" alt="img"></p><p>接下来可以在面板中看到所有爬取上来的数据词条。如果内容不够好，可以删除，然后重新配置再爬取就好了。</p><h3 id="vitepess-配置" tabindex="-1">vitepess 配置 <a class="header-anchor" href="#vitepess-配置" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// .vitepress/config.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">algolia</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">appId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">apiKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 一定要使用 Search-Only API Key</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">indexName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blog</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,45),D=[i];function y(d,F,C,u,A,h){return a(),n("div",null,D)}const g=s(t,[["render",y]]);export{m as __pageData,g as default};