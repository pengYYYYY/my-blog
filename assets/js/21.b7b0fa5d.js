(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{413:function(s,a,t){"use strict";t.r(a);var e=t(31),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" redis")]),s._v(" "),t("p",[s._v("redis是一个开源数据的kv数据库，它的数据放置于内存当中，常用来做缓存服务器。")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("//下载\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http://download.redis.io/releases/redis-5.0.8.tar.gz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n安装目录/usr/local/redis\n\n//解压\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf xx\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n// 执行make install进行Redis安装\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n//为了方便管理，将Redis文件中的conf配置文件和常用命令移动到统一文件中\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" bin etc\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" redis.conf /usr/local/redis/etc/\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mkreleasehdr.sh redis-benchmark redis-check-aof redis-check-rdb redis-cli redis-server /usr/local/redis/bin/\n\n// 启动\nredis-server\n\n// 设置绑定ip\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/redis.conf\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" xxx\n\n// 设置后台启动redis\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\ndaemonized "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n// 查看redis进程\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tunpl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n// 链接redis客户端\nredis-cli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])]),t("h2",{attrs:{id:"使用yum安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用yum安装"}},[s._v("#")]),s._v(" 使用yum安装")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//需要安装Remi的软件源")]),s._v("\nyum install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rpms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("famillecollet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("enterprise"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("remi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("release"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v("rpm\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//然后可以使用下面的命令安装最新版本的redis")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("enablerepo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remi install redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//安装完毕后，即可使用下面的命令启动redis服务")]),s._v("\nservice redis start\n或者\nsystemctl start redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[s._v("#")]),s._v(" 特点")]),s._v(" "),t("ul",[t("li",[s._v("速度快，因为数据在内存当中，类似于HashMap")]),s._v(" "),t("li",[s._v("支持丰富的数据类型，string, list, set, hash")]),s._v(" "),t("li",[s._v("支持事物，操作都是原子性的")]),s._v(" "),t("li",[s._v("丰富的特性，应用场景广泛")])]),s._v(" "),t("h2",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("h3",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[s._v("#")]),s._v(" 缓存")]),s._v(" "),t("p",[s._v("因为redis的读取性能优异，每秒可以处理超过10w次的读写操作。redis可以保存多种数据结构，单个value的最大限制是1GB,而memcached只能保存1md的数据。")]),s._v(" "),t("h3",{attrs:{id:"分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[s._v("#")]),s._v(" 分布式锁")]),s._v(" "),t("p",[s._v("因为redis单线程的特点，对于高并发系统，都是用多服务器部署，在进行逻辑处理的时候可以用到分布式锁来限制程序的并发。")]),s._v(" "),t("h3",{attrs:{id:"自动过期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动过期"}},[s._v("#")]),s._v(" 自动过期")]),s._v(" "),t("p",[s._v("redis针对数据都可以设置过期时间，可以自动清理过期数据，常见的应用场景：短信验证码，活动开始和截止日期等。")]),s._v(" "),t("h3",{attrs:{id:"秒杀的缓存层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#秒杀的缓存层"}},[s._v("#")]),s._v(" 秒杀的缓存层")]),s._v(" "),t("p",[s._v("可以利用redis单线程的特性来控制并发，将redis作为缓存平台，由于其读写能力强，不易产生程序阻塞现象。")]),s._v(" "),t("h3",{attrs:{id:"发布订阅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[s._v("#")]),s._v(" 发布订阅")]),s._v(" "),t("p",[s._v("可以使用redis的发布订阅模式实现一些聊天系统。")]),s._v(" "),t("h2",{attrs:{id:"redis问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis问题"}},[s._v("#")]),s._v(" redis问题")]),s._v(" "),t("h3",{attrs:{id:"缓存雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[s._v("#")]),s._v(" 缓存雪崩")]),s._v(" "),t("p",[s._v("缓存雪崩，是指缓存中设置了大批量相同过期时间的数据同时过期失效，而在这一刻访问量剧增，缓存近乎失效，所有请求全部转向DB，DB瞬时压力过重雪崩，甚至down机。和缓存击穿不同的是，缓存击穿指并发查同一条数据，缓存雪崩是不同数据都过期了，很多数据都查不到从而查数据库。")]),s._v(" "),t("p",[s._v("解决方案：")]),s._v(" "),t("ul",[t("li",[s._v("设置热点数据永不过期。")]),s._v(" "),t("li",[s._v("过期时间设置随机，防止同一时间大量数据过期现象发生。")]),s._v(" "),t("li",[s._v("若redis缓存是分布式部署，可以把热点数据均匀分布在不同缓存数据库中。")])]),s._v(" "),t("h3",{attrs:{id:"缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[s._v("#")]),s._v(" 缓存穿透")]),s._v(" "),t("p",[s._v("缓存穿透是指查询一个缓存和数据库中都没有的数据，由于大部分缓存策略是被动加载的，并且出于容错考虑，如果从存储层查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到存储层去查询，失去了缓存的意义。用户不断发起请求，在流量大时，就可能对DB形成巨大的压力，利用不存在的key频繁攻击应用也是很大的问题。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("缓存和数据库中都不存在的数据，可以将此key对应的value设置为一个默认的值，比如“NULL”，并设置一个缓存的失效时间，这时在缓存失效之前，所有通过此key的访问都被缓存挡住了。后面如果此key对应的数据在DB中存在时，缓存失效之后，通过此key再去访问数据，就能拿到新的value了。")])]),s._v(" "),t("li",[t("p",[s._v("接口层增加校验，比如用户鉴权校验，id根据数据场景做基础校验，id<=0的直接拦截。")])])]),s._v(" "),t("h3",{attrs:{id:"缓存击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[s._v("#")]),s._v(" 缓存击穿")]),s._v(" "),t("p",[s._v("缓存击穿是指缓存中的一个热点Key(比如一个秒杀商品)，在某个时间点过期的时候，恰好在这个时间点访问量剧增，对这个Key有大量的并发请求过来，请求发现缓存过期一般都会从后端DB加载数据并回设回缓存，但就在缓存中的数据还没有完全从DB中加载过来的这个时间段期间，并发瞬间造成大量请求直接击穿到DB，对DB形成巨大压力。")]),s._v(" "),t("p",[s._v("缓存击穿，又叫热点key问题，是这三个问题中最经典的一个问题。")]),s._v(" "),t("ul",[t("li",[s._v("设置热点数据永不过期。")]),s._v(" "),t("li",[s._v("资源保护，服务降级。")])]),s._v(" "),t("h3",{attrs:{id:"缓存雪崩和缓存击穿的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩和缓存击穿的区别"}},[s._v("#")]),s._v(" 缓存雪崩和缓存击穿的区别")]),s._v(" "),t("p",[s._v("缓存击穿跟缓存雪崩类似，区别就是缓存雪崩是群体失效，缓存击穿是单体失效。")]),s._v(" "),t("h2",{attrs:{id:"redis-的过期策略和内存淘汰机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-的过期策略和内存淘汰机制"}},[s._v("#")]),s._v(" Redis 的过期策略和内存淘汰机制")]),s._v(" "),t("h3",{attrs:{id:"过期策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过期策略"}},[s._v("#")]),s._v(" 过期策略")]),s._v(" "),t("blockquote",[t("p",[s._v("定期删除")])]),s._v(" "),t("p",[s._v("定期删除指的是Redis默认每隔100ms就随机抽取一些设置了过期时间的key，检测这些key是否过期，如果过期了就将其删掉。")]),s._v(" "),t("p",[s._v("因为key太多，如果全盘扫描所有的key会非常耗性能，所以是随机抽取一些key来删除。这样就有可能删除不完，需要惰性删除配合。")]),s._v(" "),t("blockquote",[t("p",[s._v("惰性删除")])]),s._v(" "),t("p",[s._v("惰性删除不再是Redis去主动删除，而是在客户端要获取某个key的时候，Redis会先去检测一下这个key是否已经过期，如果没有过期则返回给客户端，如果已经过期了，那么Redis会删除这个key，不会返回给客户端。")]),s._v(" "),t("p",[s._v("所以惰性删除可以解决一些过期了，但没被定期删除随机抽取到的key。但有些过期的key既没有被随机抽取，也没有被客户端访问，就会一直保留在数据库，占用内存，长期下去可能会导致内存耗尽。所以Redis提供了内存淘汰机制来解决这个问题。")]),s._v(" "),t("h3",{attrs:{id:"内存淘汰机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰机制"}},[s._v("#")]),s._v(" 内存淘汰机制")]),s._v(" "),t("p",[s._v("Redis在使用内存达到某个阈值（通过maxmemory配置)的时候，就会触发内存淘汰机制，选取一些key来删除。内存淘汰有许多策略，下面分别介绍这几种不同的策略。")]),s._v(" "),t("ul",[t("li",[s._v("noeviction：当内存不足以容纳新写入数据时，新写入操作会报错。默认策略")]),s._v(" "),t("li",[s._v("allkeys-lru：当内存不足以容纳新写入数据时，在键空间中，移除最近最少使用的key。")]),s._v(" "),t("li",[s._v("allkeys-random：当内存不足以容纳新写入数据时，在键空间中，随机移除某个key。")]),s._v(" "),t("li",[s._v("volatile-lru：当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，移除最近最少使用的key。")]),s._v(" "),t("li",[s._v("volatile-random：当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，随机移除某个key。")]),s._v(" "),t("li",[s._v("volatile-ttl：当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，有更早过期时间的key优先移除。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);