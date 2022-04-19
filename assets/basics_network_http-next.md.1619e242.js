import{_ as e,c as l,o as i,a}from"./app.355e7a82.js";const t='{"title":"http-next","description":"","frontmatter":{},"headers":[{"level":2,"title":"http2","slug":"http2"},{"level":3,"title":"二进制分帧","slug":"二进制分帧"},{"level":3,"title":"多路复用","slug":"多路复用"},{"level":3,"title":"服务器推送","slug":"服务器推送"},{"level":3,"title":"头部压缩","slug":"头部压缩"},{"level":3,"title":"Http2请求过程","slug":"http2请求过程"},{"level":2,"title":"http3","slug":"http3"},{"level":3,"title":"初始握手","slug":"初始握手"},{"level":3,"title":"重复握手","slug":"重复握手"},{"level":3,"title":"连接迁移","slug":"连接迁移"},{"level":3,"title":"可靠性","slug":"可靠性"}],"relativePath":"basics/network/http-next.md"}',p={},h=[a('<h1 id="http-next" tabindex="-1">http-next <a class="header-anchor" href="#http-next" aria-hidden="true">#</a></h1><h2 id="http2" tabindex="-1">http2 <a class="header-anchor" href="#http2" aria-hidden="true">#</a></h2><ul><li><p>一个TCP⻓连接来传输数据，这样整个页面资源的下载过程只需要一次慢启动。同时也避免了多个TCP连接竞争带宽所带来的问题。</p></li><li><p>队头阻塞，资源并行请求，</p></li><li><p>多路复用机制，个请求都有一个对应的 ID，在浏览器端，就可以随时将请求发送给服务器了。将请求分成一帧一帧的数据去传输。当收到一个优先级高的请求时，服务器可以暂停之前的请求来优先处理关键资源的请求。</p></li></ul><h3 id="二进制分帧" tabindex="-1">二进制分帧 <a class="header-anchor" href="#二进制分帧" aria-hidden="true">#</a></h3><p>帧：HTTP/2 数据通信的最小单位消息：指 HTTP/2 中逻辑上的 HTTP 消息。例如请求和响应等，消息由一个或多个帧组成。</p><p>流：存在于连接中的一个虚拟通道。流可以承载双向消息，每个流都有一个唯一的整数ID。</p><p>HTTP/2 采用二进制格式传输数据，而非 HTTP 1.x 的文本格式，二进制协议解析起来更高效。 HTTP / 1 的请求和响应报文，都是由起始行，首部和实体正文（可选）组成，各部分之间以文本换行符分隔。HTTP/2 将请求和响应数据分割为更小的帧，并且它们采用二进制编码。</p><p>HTTP/2 中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装。</p><h3 id="多路复用" tabindex="-1">多路复用 <a class="header-anchor" href="#多路复用" aria-hidden="true">#</a></h3><p>多路复用，代替原来的序列和阻塞机制。所有就是请求的都是通过一个 TCP连接并发完成。 HTTP 1.x 中，如果想并发多个请求，必须使用多个 TCP 链接，且浏览器为了控制资源，还会对单个域名有 6-8个的TCP链接请求限制。</p><p>在 HTTP/2 中，有了二进制分帧之后，HTTP /2 不再依赖 TCP 链接去实现多流并行了，在 HTTP/2中：</p><ul><li>同域名下所有通信都在单个连接上完成。</li><li>单个连接可以承载任意数量的双向数据流。</li><li>数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装。</li></ul><p>性能提升：</p><ul><li>同个域名只需要占用一个 TCP 连接，消除了因多个 TCP 连接而带来的延时和内存消耗。</li><li>单个连接上可以并行交错的请求和响应，之间互不干扰。</li><li>在HTTP/2中，每个请求都可以带一个31bit的优先值，0表示最高优先级，数值越大优先级越低。有了这个优先值，客户端和服务器就可以在处理不同的流时采取不同的策略，以最优的方式发送流、消息和帧。</li></ul><h3 id="服务器推送" tabindex="-1">服务器推送 <a class="header-anchor" href="#服务器推送" aria-hidden="true">#</a></h3><p>服务端可以在发送页面HTML时主动推送其它资源，而不用等到浏览器解析到相应位置，发起请求再响应。例如服务端可以主动把JS和CSS文件推送给客户端，而不需要客户端解析HTML时再发送这些请求。</p><p>服务端可以主动推送，客户端也有权利选择是否接收。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送RST_STREAM帧来拒收。主动推送也遵守同源策略，服务器不会随便推送第三方资源给客户端。</p><h3 id="头部压缩" tabindex="-1">头部压缩 <a class="header-anchor" href="#头部压缩" aria-hidden="true">#</a></h3><p>HTTP/2对消息头采用HPACK（专为http/2头部设计的压缩格式）进行压缩传输，能够节省消息头占用的网络的流量。而HTTP/1.x每次请求，都会携带大量冗余头信息，浪费了很多带宽资源。</p><ul><li>HTTP/2在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键－值对，对于相同的数据，不再通过每次请求和响应发送；</li><li>首部表在HTTP/2的连接存续期内始终存在，由客户端和服务器共同渐进地更新;</li><li>每个新的首部键－值对要么被追加到当前表的末尾，要么替换表中之前的值。</li></ul><h3 id="http2请求过程" tabindex="-1">Http2请求过程 <a class="header-anchor" href="#http2请求过程" aria-hidden="true">#</a></h3><ul><li><p>首先，浏览器准备好请求数据，包括了请求行、请求头等信息，如果是POST方法，那么还要有请求体。</p></li><li><p>这些数据经过二进制分帧层处理之后，会被转换为一个个带有请求ID编号的帧，通过协议栈将这些帧发送给服务器。</p></li><li><p>服务器接收到所有帧之后，会将所有相同ID的帧合并为一条完整的请求信息。</p></li><li><p>然后服务器处理该条请求，并将处理的响应行、响应头和响应体分别发送至二进制分帧层。</p></li><li><p>同样，二进制分帧层会将这些响应数据转换为一个个带有请求ID编号的帧，经过协议栈发送给浏览器。</p></li><li><p>浏览器接收到响应帧之后，会根据ID编号将帧的数据提交给对应的请求。</p></li></ul><p>通过引入二进制分帧层，就实现了HTTP的多路复用技术。</p><h2 id="http3" tabindex="-1">http3 <a class="header-anchor" href="#http3" aria-hidden="true">#</a></h2><p>QUIC（quick upd internet connection）,</p><p>QUIC协议有以下特点：</p><ul><li>基于UDP的传输层协议：它使用UDP端口号来识别指定机器上的特定服务器。</li><li>可靠性：虽然UDP是不可靠传输协议，但是QUIC在UDP的基础上做了些改造，使得他提供了和TCP类似的可靠性。它提供了数据包重传、拥塞控制、调整传输节奏以及其他一些TCP中存在的特性。</li><li>实现了无序、并发字节流：QUIC的单个数据流可以保证有序交付，但多个数据流之间可能乱序，这意味着单个数据流的传输是按序的，但是多个数据流中接收方收到的顺序可能与发送方的发送顺序不同！</li><li>快速握手：QUIC提供0-RTT和1-RTT的连接建立</li><li>使用TLS 1.3传输层安全协议：与更早的TLS版本相比，TLS 1.3有着很多优点，但使用它的最主要原因是其握手所花费的往返次数更低，从而能降低协议的延迟。</li></ul><p>QUIC建立流程：</p><blockquote><p>Diffie–Hellman (以下简称DH)密钥交换是一个特殊的交换密钥的方法。它是密码学领域内最早付诸实践的密钥交换方法之一。 DH可以让双方在完全缺乏对方(私有)信息的前提条件下通过不安全的信道达成一个共享的密钥。此密钥用于对后续信息交换进行对称加密。</p></blockquote><p>QUIC在握手过程中使用Diffie-Hellman算法协商初始密钥，初始密钥依赖于服务器存储的一组配置参数，该参数会周期性的更新。初始密钥协商成功后，服务器会提供一个临时随机数，双方根据这个数再生成会话密钥。客户端和服务器会使用新生的的密钥进行数据加解密。</p><p>两个步骤：</p><ul><li>初始握手（Initial handshake）</li><li>最终（与重复）握手（Final (and repeat) handshake）</li></ul><p><a href="https://juejin.cn/post/6908522467107536903" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6908522467107536903</a></p><h3 id="初始握手" tabindex="-1">初始握手 <a class="header-anchor" href="#初始握手" aria-hidden="true">#</a></h3><ol><li>在连接开始建立时，客户端会向服务端发送一个打招呼信息，（inchoate client hello (CHLO)），因为是初次建立，所以，服务端会返回一个拒绝消息（REJ），表明握手未建立或者密钥已过期。此时服务端会把自己的长期公钥传给客户端。</li><li>客户端服务端的长期公钥后存下来，然后会随机产生一对短期私钥和短期公钥。</li><li>将自己的短期公钥传输给服务端，服务端接收这个请求以后，会使用自己的长期公钥和客户端的短期公钥计算出一个相同的初始密钥。</li><li>使用自己的短期公钥和服务端的长期公钥计算出一个初始密钥，然后使用这个初始密钥直接进行数据请求。</li><li>服务端拥有了请求的初始密钥，就可以对其进行解密了。</li><li>然后服务端会把自己的短期公钥传输给客户端，后续使用客户端的短期公钥和服务端的短期公钥生成初始密钥，再进行加密传输</li></ol><h3 id="重复握手" tabindex="-1">重复握手 <a class="header-anchor" href="#重复握手" aria-hidden="true">#</a></h3><p><img src="/blog/assets/iRBZBM.46047e73.png" alt="img"></p><p>客户端和服务端就都有了对方的短期公钥（ephemeral Diffie-Hellman public value）。</p><p>这样，客户端和服务端都可以基于自己的短期密钥和对方的短期公钥做运算，产生一个仅限于本次连接使用的前向保密密钥 (Forward-Secure Key)，后续的请求发送，都基于这个密钥进行加解密就可以了。</p><p>双方就完成了最终的密钥交换、连接的握手并且建立了QUIC连接。</p><p>当下一次要重新创建连接的时候，客户端会从缓存中取出自己之前缓存下来的服务器的长期公钥，并重新创建一个短期密钥，重新生成一个初识密钥，再使用这个初始密钥对想要传输的数据进行加密，向服务器发送一个Complete CHLO 请求即可。这样就达到了0 RTT的数据传输。</p><h3 id="连接迁移" tabindex="-1">连接迁移 <a class="header-anchor" href="#连接迁移" aria-hidden="true">#</a></h3><p>对于TCP连接的识别，需要通过服务器和客户端过双方的ip和端口四个参数进行的。在网络切换的场景中，比如手机切换网络，那么自身的ip就会发生变化。这就导致之前的TCP连接就会失效，就需要重新建立。</p><p>QUIC协议使用特有的UUID来标记每一次连接，在网络环境发生变化的时候，只要UUID不变，就能不需要握手，继续传输数据。</p><h3 id="可靠性" tabindex="-1">可靠性 <a class="header-anchor" href="#可靠性" aria-hidden="true">#</a></h3><p>TCP之所以被称之为可靠链接，不仅仅是因为他有三次握手和四次关闭的过程，还因为他做了很多诸如流量控制、数据重传、拥塞控制等可靠性保证。</p>',46)];var r=e(p,[["render",function(e,a,t,p,r,n){return i(),l("div",null,h)}]]);export{t as __pageData,r as default};
