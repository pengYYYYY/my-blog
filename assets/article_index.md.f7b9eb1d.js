import{_ as v,o as i,c,d as e,r as d,f as b,u as x,w as A,t as h,n as C,g as I,h as k,F as T,i as j,j as D,k as U,v as $,e as a,b as o,p as P,l as S,m as l}from"./app.2ed21e55.js";const L={},N={class:"TeamHero"},B={class:"container"},z={class:"title"},V={class:"lead"},q={class:"action"};function H(t,s){return i(),c("div",N,[e("div",B,[e("h1",z,[d(t.$slots,"title",{},void 0,!0)]),e("p",V,[d(t.$slots,"lead",{},void 0,!0)]),e("p",q,[d(t.$slots,"action",{},void 0,!0)])])])}const O=v(L,[["render",H],["__scopeId","data-v-4b96fd09"]]),G={class:"banner"},M=["src"],F={key:1,class:"banner-img banner-tip"},J={class:"info"},E={class:"name"},Q={class:"desc"},R=b({__name:"ArticleItem",props:{article:{type:Object,required:!0}},setup(t){const s=t,n=()=>{s.article.linkUrl&&(s.article.isNew?window.location.href=s.article.linkUrl:window.open(s.article.linkUrl))};return(_,f)=>(i(),c("article",{class:C(["ArticleItem",{disabled:!t.article.linkUrl}]),onClick:n},[e("figure",G,[t.article.bannerUrl?(i(),c("img",{key:0,class:"banner-img",src:x(A)(t.article.bannerUrl)},null,8,M)):(i(),c("div",F,h(t.article.tip),1))]),e("div",J,[e("h1",E,h(t.article.name),1),e("section",Q,h(t.article.desc),1)])],2))}});const K=v(R,[["__scopeId","data-v-393c2d4c"]]),y=t=>(P("data-v-258b7717"),t=t(),S(),t),W={class:"ArticleList"},X={class:"container"},Y={class:"info"},Z={class:"title"},ee={class:"lead"},te={class:"articles"},se={key:0,class:"building"},ae={class:"pagination"},ie={class:"item"},ce=y(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",class:"icon","data-v-b57a953c":""},[e("path",{d:"M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z"})],-1)),ne={class:"item"},le=y(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",class:"icon","data-v-b57a953c":""},[e("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"})],-1)),g=5,re=b({__name:"ArticleList",props:{articles:{type:Object,required:!0}},setup(t){const s=t,n=I(1),_=k(()=>{const r=(n.value-1)*g;return s.articles.slice(r,r+g)}),f=k(()=>n.value*g<s.articles.length),w=r=>{n.value+=r===1?1:-1};return(r,p)=>(i(),c("section",W,[e("div",X,[e("div",Y,[e("h2",Z,[d(r.$slots,"title",{},void 0,!0)]),e("p",ee,[d(r.$slots,"lead",{},void 0,!0)])]),e("div",te,[(i(!0),c(T,null,j(_.value,u=>(i(),c("div",{key:u.name,class:"article"},[o(K,{article:u},null,8,["article"])]))),128)),_.value.length===0?(i(),c("div",se," 🚧 建设中 🏗️ ")):D("",!0),e("div",ae,[e("div",{onClick:p[0]||(p[0]=u=>w(2))},[U(e("div",ie,[ce,a(" 上一页 ")],512),[[$,n.value>1]])]),e("div",{onClick:p[1]||(p[1]=u=>w(1))},[U(e("div",ne,[a(" 下一页 "),le],512),[[$,f.value]])])])])])]))}});const m=v(re,[["__scopeId","data-v-258b7717"]]),oe={class:"ArticlePage"},de=b({__name:"ArticlePage",setup(t){const s={article:[{bannerUrl:"article/ai-template.webp",name:"面向AI编程：探索可视化分析模型",desc:"本文总结了在开发ChatGPT相关需求时的功能拆解和实现思路，并分享了在利用ChatGPT生成结构化数据时遇到的问题及相应解决方案。",linkUrl:"https://mp.weixin.qq.com/s/HrxQtfc8j-zD9kMRGhTn6w"},{bannerUrl:"article/composition-api.jpeg",name:"TDesign CompositionAPI 重构之路",desc:"记录了 TDesign 在 CompositionAPI 组件重构的开始，过程与收获",linkUrl:"../article/record/vca-refactor"},{bannerUrl:"article/td-component.png",name:"TDesign 组件开发范式",desc:"记录了 TDesign 的组件开发范式，在开源协同的过程中形成较为统一的开发规范",linkUrl:"../article/record/dev-paradigm"}],project:[{bannerUrl:"article/vite.webp",name:"webpack 迁移 vite 实践",desc:"项目中切换vite的记录，对于webpack来说，vite是个实打实的杀手",linkUrl:"../work/tencent/vite-build"},{bannerUrl:"article/vitest-td.png",name:" TDesign 在 vitest 的实践",desc:"TDesign 从 Jest 套件迁移至 Vitest 的过程，执行效率提升60%。",linkUrl:"../article/record/vitest-refactor"}],personal:[{bannerUrl:"article/vite-press.webp",name:"Blog 翻新记录",desc:"利用工作之余翻新了我的 blog, 使用了 vitepress 和 algolia, 记录一下整个流程",linkUrl:"../article/record/blog-refactor"},{bannerUrl:"article/deploy.jpeg",name:"开源网站部署工具",desc:"用过 vercel, github pages, 腾讯云serverless, 微信云托管等部署工具，简单总结一下",linkUrl:"../article/record/deploy"},{bannerUrl:"article/nat.jpeg",name:"几种内网穿透姿势",tip:"内网穿透",desc:"liyong frp 与 ngrok 进行内网穿透的实践记录及对比",linkUrl:"../article/record/nat"}]};return(n,_)=>(i(),c("div",oe,[o(O,null,{title:l(()=>[a("写的一些东西")]),lead:l(()=>[a("涵盖各个知识面的文章，有专业内入也有工作记录的，还有一些杂事")]),_:1}),o(m,{articles:s.article},{title:l(()=>[a("🔖 专业文章")]),lead:l(()=>[a("写的一些专业文章，理论总结。花了点心思的东西。")]),_:1},8,["articles"]),o(m,{articles:s.project},{title:l(()=>[a("👷 搬砖记录")]),lead:l(()=>[a("在日常工作中遇到的一些坑，主要是实战记录。")]),_:1},8,["articles"]),o(m,{articles:s.personal},{title:l(()=>[a("👽️ 杂七杂八")]),lead:l(()=>[a("在日常工作中遇到的一些坑，主要是实战记录。")]),_:1},8,["articles"])]))}});const _e=v(de,[["__scopeId","data-v-e7dcdd4e"]]),ve=JSON.parse('{"title":"文章","description":"","frontmatter":{"page":true,"layout":"page","title":"文章"},"headers":[],"relativePath":"article/index.md","lastUpdated":1689085407000}'),pe={name:"article/index.md"},he=Object.assign(pe,{setup(t){return(s,n)=>(i(),c("div",null,[o(_e)]))}});export{ve as __pageData,he as default};
