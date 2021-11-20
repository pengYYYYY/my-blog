(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{428:function(a,t,v){"use strict";v.r(t);var s=v(31),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"工程化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工程化"}},[a._v("#")]),a._v(" 工程化")]),a._v(" "),v("p",[a._v("思考一下前端工程化，记录一些自己的见解")]),a._v(" "),v("h2",{attrs:{id:"最初学习的前端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最初学习的前端"}},[a._v("#")]),a._v(" 最初学习的前端")]),a._v(" "),v("p",[a._v("大学刚接触前端的时候，HTML，css，js三大件，让我们的网页栩栩如生。那时候做前端就把页面做好，然后把代码给后端，最初到时候是PHP，然后他们去绑定数据，前端再做一些修修补补。那会学习路径就是，前端->PHP->服务器。也都大概接触过一些。")]),a._v(" "),v("p",[a._v("这时候没有前端工程化的概念，加上也是非科班学习前端，也没有工程化的概念了。")]),a._v(" "),v("h2",{attrs:{id:"接触到了vue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接触到了vue"}},[a._v("#")]),a._v(" 接触到了vue")]),a._v(" "),v("p",[a._v("后面接触到vue之后，感觉就像是打开了新世界，使用了vue-cli去创建项目，这时候开始接触到现代化的前端。首先就是三大框架了，vue用的最多，也最熟悉，react了解一些，停留在会写的阶段，但是不够深入了解。写了vue以后，觉得这个东西也太有趣了，就决定学前端了，放弃了PHP。事实证明，php只在外包公司用了，前端发展迅速，前景也足够大。这时候的工程化概念就是现代化前端框架。")]),a._v(" "),v("h2",{attrs:{id:"webpack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[a._v("#")]),a._v(" webpack")]),a._v(" "),v("p",[a._v("使用vue以后，开始纳闷，这个是怎么跑起来的，然后包管理又是啥，继续深入学习，开始接触到了webpack，从0到1搭建了一下webpack的工程，整个过程还是挺顺利的，那时候也是各种找资料。知道了webpack的概念，从入口到出口，就是打包器。这时候认为前端的工程就是webpack.")]),a._v(" "),v("h2",{attrs:{id:"什么是工程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是工程"}},[a._v("#")]),a._v(" 什么是工程？")]),a._v(" "),v("p",[a._v("在工作以后，有了一些工作经验，见识到了一个企业，一个互联网系统的运转流程，觉得自己之前的认识太片面了，之前是什么都想做，觉得都有兴趣，想成为全能的人，但是到后面发现，有一句话叫做，全能全部（不）能。")]),a._v(" "),v("p",[a._v("在现代化软件越来越复杂，开发人员越来越多的情况下。我认为的工程分下面几块：")]),a._v(" "),v("h3",{attrs:{id:"模块化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[a._v("#")]),a._v(" 模块化")]),a._v(" "),v("p",[a._v("最早的前端是没有模块化的，后来node中出现了commonjs，因为其运行机制的问题，浏览器无法使用。然后出现了amd，cmd,umd。到后面的ES module，个人认为模块化是现代前端的基础。")]),a._v(" "),v("h3",{attrs:{id:"工具化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工具化"}},[a._v("#")]),a._v(" 工具化")]),a._v(" "),v("p",[a._v("因为node的出现，我们使用它做一些前端的工具，成为了一个方向，之前就做了一个node扫描代码的工具，用来检测vue2.0-vue3.0的代码间差异，并打印到控制台。之前也使用gulp这种文件处理工具来处理组件库的样式包。也使用过node的ftp包来做文件上传到服务器的事情。当然包括各种插件，其实他们都是工具。工具有各种各样，适合自己的就好，工具就是提效。")]),a._v(" "),v("h3",{attrs:{id:"编译打包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译打包"}},[a._v("#")]),a._v(" 编译打包")]),a._v(" "),v("p",[a._v("之前看一个前端大佬说，前端最近几年的发展其实都是编译。个人认为，其实基本上就是分两点：babel和跨平台。")]),a._v(" "),v("h4",{attrs:{id:"babel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[a._v("#")]),a._v(" babel")]),a._v(" "),v("p",[a._v("说到编译就得说到babel了，他的出现解决了ES标准到生产环境的问题，我们可以用最新的特性编写出我们的代码，利用babel编译到生产环境中去。")]),a._v(" "),v("h4",{attrs:{id:"跨平台"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨平台"}},[a._v("#")]),a._v(" 跨平台")]),a._v(" "),v("p",[a._v("RN,小程序,Taro,uniApp。其实都是编译到产物的模式。")]),a._v(" "),v("p",[a._v("小程序内部是webview，小程序使用的wxml，wxss都是编译前的资源。有人说小程序")]),a._v(" "),v("p",[a._v("RN是运行时的编译，通过jscore,在运行时将js代码映射到原生代码。flutter就属于从渲染层开始解决跨平台了，本质上也是编译。")]),a._v(" "),v("h3",{attrs:{id:"前端运维体系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前端运维体系"}},[a._v("#")]),a._v(" 前端运维体系")]),a._v(" "),v("p",[a._v("前端运维的话，个人基本上也没怎么接触过，但是也有一些自己的概念吧，这是现代成熟前端体系必备的东西。分下面几块东西：")]),a._v(" "),v("ul",[v("li",[a._v("页面的监控（白屏，握手等指标）")]),a._v(" "),v("li",[a._v("APM监控，内存")])]),a._v(" "),v("h3",{attrs:{id:"代码质量体系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码质量体系"}},[a._v("#")]),a._v(" 代码质量体系")]),a._v(" "),v("ul",[v("li",[a._v("代码门禁，质量检测")]),a._v(" "),v("li",[a._v("代码检测")]),a._v(" "),v("li",[a._v("开发时的eslint,prettier")]),a._v(" "),v("li",[a._v("提交代码的规范，angular规范等")])]),a._v(" "),v("h3",{attrs:{id:"未来的前端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#未来的前端"}},[a._v("#")]),a._v(" 未来的前端")]),a._v(" "),v("h2",{attrs:{id:"从前端发布角度上来看工程化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从前端发布角度上来看工程化"}},[a._v("#")]),a._v(" 从前端发布角度上来看工程化")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/uTPTd4.png",alt:"img"}})]),a._v(" "),v("h3",{attrs:{id:"最早的发布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最早的发布"}},[a._v("#")]),a._v(" 最早的发布")]),a._v(" "),v("p",[a._v("最最开始的发布就是FTP工具，并且还是可视化的发布，把文件往上一扔就完事儿了。代码管理也是没有的，就qq拷贝传递文件。")]),a._v(" "),v("p",[a._v("稍微进化一些，使用上了git,知道了分支之类的东西，但是基本上也是单人开发，master永恒。具体步骤可以看思维导图。整个流程还是挺麻烦的。")]),a._v(" "),v("h3",{attrs:{id:"后来的发布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后来的发布"}},[a._v("#")]),a._v(" 后来的发布")]),a._v(" "),v("p",[a._v("后面自己玩儿的时候，用上了docker，一开始用jenkins搭的一套，感觉太麻烦了，界面也太丑了，后面没研究了，加上自身需要的只是一个推送加同步而已，不需要那么麻烦。后面了解到了"),v("code",[a._v("coding")]),a._v(",利用里面持续集成来发布自己的玩具，非常不错，他的底层也是Jenkins，具体细节没有过多研究。")]),a._v(" "),v("h3",{attrs:{id:"现代化的发布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#现代化的发布"}},[a._v("#")]),a._v(" 现代化的发布")]),a._v(" "),v("p",[a._v("进入公司以后，公司的天梯系统让我见识到了现代化的发布，可以算的上是工业化的部署把。后面的东西多么复杂我也无从知晓，大型互联网应用应该得这么玩儿。")]),a._v(" "),v("h3",{attrs:{id:"综述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[a._v("#")]),a._v(" 综述")]),a._v(" "),v("p",[a._v("当然业务前端距离运维体系还是挺远的，但个人认为这也是工程化里面的一种吧。")]),a._v(" "),v("h2",{attrs:{id:"结尾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结尾"}},[a._v("#")]),a._v(" 结尾")]),a._v(" "),v("p",[a._v("前端最大的魅力就是，所编及所得。当然，日常的生产过程也早就过了那个编一行看一下效果的阶段。每次看到自己写的页面的时候还是会带来一些满足感的，当然也要在工作中去找一些自己的兴趣和亮点吧。重复的做一件事情当然枯燥无味，不要把自己当成一个代码机器，在AI抢饭碗的今天，机械性的工作会被逐渐的替代。工程化不是某一种技术，应该是整个开发体系。")])])}),[],!1,null,null,null);t.default=r.exports}}]);