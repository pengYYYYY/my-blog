import{_ as e,c as a,o as i,U as t}from"./chunks/framework.Y2dLDgJG.js";const b=JSON.parse('{"title":"缓存","description":"","frontmatter":{},"headers":[],"relativePath":"basics/network/cache.md","filePath":"basics/network/cache.md","lastUpdated":1705857721000}'),r={name:"basics/network/cache.md"},l=t('<h1 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h1><h2 id="http缓存" tabindex="-1">http缓存 <a class="header-anchor" href="#http缓存" aria-label="Permalink to &quot;http缓存&quot;">​</a></h2><ul><li>浏览器缓存即http缓存，将数据缓存在浏览器(即客户端)。</li><li>服务端通过设置HTTP响应头来决定缓存策略，将资源缓存到本地浏览器。</li></ul><p>Web缓存的作用</p><ul><li>提高首屏加载速度-&gt;优化用户体验</li><li>减少流量消耗</li><li>减轻服务器压力</li></ul><h3 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h3><ul><li>第一次请求资源，服务器返回对应资源，并在response header响应头中添加缓存策略。</li><li>第二次请求时，浏览器判断请求参数，命中强缓存就直接200，从本地缓存中拿数据。否则把响应参数存在request header请求头中，看是否命中协商缓存，命中则返回304，否则服务器会返回全新资源。</li></ul><h3 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-label="Permalink to &quot;强缓存&quot;">​</a></h3><ul><li>直接拿本地副本对比读取，不读服务器，返回状态码是200</li><li>使用定时器的方式，让强缓存设置静态资源的有效期，如果超过有效期则认为缓存作废。</li><li>无需与服务端发生交互</li></ul><h4 id="expires" tabindex="-1">Expires <a class="header-anchor" href="#expires" aria-label="Permalink to &quot;Expires&quot;">​</a></h4><p>HTTP/1.0控制网页缓存的字段，其值为服务器返回该请求的结果缓存的到期时间，即再次发送请求时如果客户端的时间小于Expires的值时，直接使用缓存结果。在HTTP/1.1，Expires已经被Cache-Control替代，原因在于Expires控制缓存的原理是使用客户端的时间与服务端返回的时间做对比，如果时间发生误差，那么强制缓存将直接失效。</p><h4 id="cache-control" tabindex="-1">Cache-Control <a class="header-anchor" href="#cache-control" aria-label="Permalink to &quot;Cache-Control&quot;">​</a></h4><p>Cache-Control是最重要的规则，主要用于控制网页缓存。</p><ul><li>public:所有内容都将被缓存（客户端和代理服务器都可缓存)</li><li>private:所有内容只有客户端可以缓存，Cache-Control的默认取值</li><li>no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定</li><li>no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存</li><li>max-age=xx：缓存在xxx秒后失效。</li><li>must-revalidate：告诉浏览器、缓存服务器，本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。</li></ul><p>在无法确定客户端的时间是否与服务端的时间同步的情况下，Cache-Control相比于expires是更好的选择。</p><p>Cache-Control字段是http报文中的通用首部字段，既存在于请求报文中，也存在于响应报文中</p><blockquote><p>共有字段： no-cache：无论缓存是否过期，都要对请求进行校验 no-store：请求报文中可能存在机密信息，不可缓存 （缓存字段中优先级最高） max-age=[秒]：资源x秒后过期，未过期则使用缓存 no-transform：禁止代理改变实体主体的媒体类型，也包括压缩 cache-extension： 自定义拓展值，如果缓存服务器不能理解，则忽略</p></blockquote><blockquote><p>请求报文私有字段值： max-stale(=[秒])： 提示缓存服务器，即使缓存过期也使用；或者在过期后的指定时间内依然使用缓存 min-fresh(=[秒])： 提示缓存服务器，如果缓存在指定时间内还没过期，则返回 only-if-cache： 提示服务器如果有缓存就返回，不需要确认有效性。如果没有，则返回504网关超时</p></blockquote><blockquote><p>响应报文私有字段值：</p></blockquote><p>public： 明确指明缓存可以给所有用户使用 private： 明确指明缓存不可以给其他用户使用 must-revalidate： 如果缓存未过期，则返回；否则代理在返回缓存数据之前，必须向源服务器发起请求，验证缓存是否有效。如果无法连接上源服务器，则返回504网关超时 proxy-revalidate： 所有缓存服务器在返回缓存数据前，都要向源服务器发起请求验证有效性 s-maxage=[秒]： 缓存资源的时间小于指定时间时，直接返回缓存</p><h4 id="pragma" tabindex="-1">Pragma <a class="header-anchor" href="#pragma" aria-label="Permalink to &quot;Pragma&quot;">​</a></h4><p>Pragma 是HTTP/1.0标准中定义的一个header属性，请求中包含Pragma的效果跟在头信息中定义Cache-Control: no-cache相同。但是HTTP的响应头没有明确定义这个属性，所以它不能拿来完全替代HTTP/1.1中定义的Cache-control头。</p><p>优先级顺序为：Pragma&gt;Cache-Control&gt;Expires</p><h3 id="from-memory-cache-和-from-disk-cache" tabindex="-1">from memory cache 和 from disk cache <a class="header-anchor" href="#from-memory-cache-和-from-disk-cache" aria-label="Permalink to &quot;from memory cache 和 from disk cache&quot;">​</a></h3><blockquote><p>内存缓存(from memory cache)：内存缓存具有两个特点，分别是快速读取和时效性：</p></blockquote><ul><li>1、快速读取：内存缓存会将编译解析后的文件，直接存入该进程的内存中，占据该进程一定的内存资源，以方便下次运行使用时的快速读取。</li><li>2、时效性：一旦该进程关闭，则该进程的内存则会清空。</li></ul><p>一般脚本，字体，图片会存在内存当中</p><blockquote><p>硬盘缓存(from disk cache)：</p></blockquote><p>硬盘缓存则是直接将缓存写入硬盘文件中，读取缓存需要对该缓存存放的硬盘文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢。</p><p>一般非脚本会存在内存当中，如css</p><h3 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h3><ul><li>协商缓存指的是浏览器和服务器之间是否要使用缓存在做协商。如果协商的结果是需要更新会返回200并返回更新内容。如果不需要只需要返回状态码304不用返回内容，只是需要后端做应答，但是不需要后端重新生成内容。</li><li>协商缓存：需要与服务端发生交互，判断是否使用本地缓存的文件。</li></ul><h3 id="last-modified-if-modified-since" tabindex="-1">Last-modified &amp; if-modified-since <a class="header-anchor" href="#last-modified-if-modified-since" aria-label="Permalink to &quot;Last-modified &amp; if-modified-since&quot;">​</a></h3><p>Last-Modified 是 HttpHeader 中的资源的最后修改时间，如果带有 Last-Modified ，下一次发送 Http 请求时，将会发生带 If-modified-since 的 HttpHeader。如果没有过期，将会收到 304 的响应，从缓存中读取。</p><p>这是一组通过协商修改时间为基础的策略。</p><ul><li>服务器向后端发送一个数据上次被修改的时间标签。</li><li>浏览器知道了服务器资源上次修改的时间，后续请求中，会和服务器进行时间的比较，如果服务器上的时间比本地时间要新，说明数据有更改，浏览器需要重新下载数据。</li></ul><h3 id="etag-if-no-match" tabindex="-1">ETag &amp;&amp; if-no-match <a class="header-anchor" href="#etag-if-no-match" aria-label="Permalink to &quot;ETag &amp;&amp; if-no-match&quot;">​</a></h3><p>Etag 是 HttpHeader 中代表资源的标签，在服务器端生成。如果带有 Etag ，下一次发送带 Etag 的请求，如果 Etag 没有变化将收到 304 的响应，从缓存中读取。</p><p>Etag 在使用时要注意相同资源多台 Web 服务器的 Etag 的一致性。 通过内容判断，一般的做法是将返回内容进行摘要，然后通过对比来判断内容是否需要更新。</p><table><thead><tr><th>用户操作</th><th>Expires/Cache-Control</th><th>Last-modified/ETag</th></tr></thead><tbody><tr><td>地址栏回车</td><td>有效</td><td>有效</td></tr><tr><td>页面链接跳转</td><td>有效</td><td>有效</td></tr><tr><td>新开窗口</td><td>有效</td><td>有效</td></tr><tr><td>前进后退</td><td>有效</td><td>有效</td></tr><tr><td>F5刷新</td><td>无效</td><td>有效</td></tr><tr><td>强制刷新</td><td>无效</td><td>无效</td></tr></tbody></table><h2 id="ajax缓存" tabindex="-1">Ajax缓存 <a class="header-anchor" href="#ajax缓存" aria-label="Permalink to &quot;Ajax缓存&quot;">​</a></h2><h3 id="定时缓存" tabindex="-1">定时缓存 <a class="header-anchor" href="#定时缓存" aria-label="Permalink to &quot;定时缓存&quot;">​</a></h3><p>将某个接口数据在一定时间段内缓存起来，缓存期内不再发起请求直接返回本地数据，过了这段时间再重新获取并更新缓存。 定时缓存实际上是牺牲了数据实时性换取响应速度，使用中通过设置不同的缓存时长，可以匹配不同的业务场景，比如对于相对稳定的数据可以设置较长的缓存时间，而设置较短的缓存时间则可以起到请求“防抖”作用。</p><h3 id="快照缓存" tabindex="-1">快照缓存 <a class="header-anchor" href="#快照缓存" aria-label="Permalink to &quot;快照缓存&quot;">​</a></h3><p>更多的时候我们希望接口能兼具实时性和响应速度，比如应用首屏的异步数据块，既要快又要新，虽然这种需求听起来很“不科学”，但我们确实可以通过“快照缓存”满足这个需求。此时每当接口成功请求后都会为数据建立一份“快照”。下次请求时接口会首先将最近的快照数据作为结果返回，供前端渲染界面，同时发送请求获取最新数据，新数据到达后会与快照做对比，如果与快照相同则缓存命中，如果与快照不同会更新快照，并将新数据返回，供前端更新界面。</p><h2 id="serviceworker" tabindex="-1">ServiceWorker <a class="header-anchor" href="#serviceworker" aria-label="Permalink to &quot;ServiceWorker&quot;">​</a></h2><p>Service Worker 是HTML5 的一个新特性，主要用来做持久的离线缓存</p><h3 id="serviceworker可以干嘛" tabindex="-1">ServiceWorker可以干嘛 <a class="header-anchor" href="#serviceworker可以干嘛" aria-label="Permalink to &quot;ServiceWorker可以干嘛&quot;">​</a></h3><p>解放主线程，<code>Web Worker</code> 是脱离在主线程之外的，将一些复杂的耗时的活交给它干，完成后通过 <code>postMessage</code> 方法告诉主线程，而主线程通过 <code>onMessage</code> 方法得到 <code>Web Worker</code> 的结果反馈。</p><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>省去建立tcp的连接时长，加快首屏加载速度</li><li>减少静态资源服务器的负载</li></ul><h3 id="功能与特性" tabindex="-1">功能与特性 <a class="header-anchor" href="#功能与特性" aria-label="Permalink to &quot;功能与特性&quot;">​</a></h3><ul><li>Service Worker拥有自己独立的 worker 线程，独立于当前网页线程</li><li>离线缓存静态资源</li><li>拦截代理请求和响应</li><li>可自定义响应内容</li><li>可以通过postMessage向主线程发送消息</li><li>无法直接操作DOM</li><li>必须在HTTPS环境下工作,或者本地。</li><li>通过Promise异步实现</li><li><code>Service Worker</code> 安装(installing)完成后，就会一直存在，除非手动卸载(unregister)</li></ul><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h3><p><code>Service Worker</code> 的生命周期完全独立于网页</p><ul><li>注册 (register)</li><li>安装 (install)</li><li>激活 (activate)</li></ul><h4 id="使用-service-worker-只需要以下几个步骤" tabindex="-1">使用 service worker 只需要以下几个步骤 <a class="header-anchor" href="#使用-service-worker-只需要以下几个步骤" aria-label="Permalink to &quot;使用 service worker 只需要以下几个步骤&quot;">​</a></h4><ol><li>检测是否支持serivceworker</li><li>注册(register)</li><li>安装(install)</li><li>激活(active)</li><li>使用(activing)</li><li>卸载(unregister)</li></ol>',58),o=[l];function c(d,h,s,n,p,m){return i(),a("div",null,o)}const f=e(r,[["render",c]]);export{b as __pageData,f as default};