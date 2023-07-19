import{_ as e,o as a,c as l,a as t}from"./app.af1c1bf7.js";const u=JSON.parse('{"title":"webgl基础","description":"","frontmatter":{},"headers":[{"level":2,"title":"着色器与GLSL","slug":"着色器与glsl","link":"#着色器与glsl","children":[]}],"relativePath":"graphics/webgl/index.md","lastUpdated":1689731221000}'),r={name:"graphics/webgl/index.md"},i=t('<h1 id="webgl基础" tabindex="-1">webgl基础 <a class="header-anchor" href="#webgl基础" aria-hidden="true">#</a></h1><h2 id="着色器与glsl" tabindex="-1">着色器与GLSL <a class="header-anchor" href="#着色器与glsl" aria-hidden="true">#</a></h2><p>WebGL在电脑的GPU中运行, 在编写能够在GPU上运行的代码过程中，每对方法中一个叫顶点着色器， 另一个叫片断着色器，每一对组合起来称作一个 <code>program</code>（着色程序）。</p><p>对于想要绘制的每一个对象，都需要先设置一系列状态值，然后通过调用 <code>gl.drawArrays</code> 或 <code>gl.drawElements</code> 运行一个着色方法对，使得你的着色器对能够在 <code>GPU</code> 上运行。着色器获取数据的4种方法:</p><ul><li>属性（Attributes）和缓冲: 缓冲是发送到GPU的一些二进制数据序列，通常情况下缓冲数据包括位置，法向量，纹理坐标，顶点颜色值等。 你可以存储任何数据。</li><li>全局变量（Uniforms）: 全局变量在着色程序运行前赋值，在运行过程中全局有效。</li><li>纹理（Textures）: 纹理是一个数据序列，可以在着色程序运行中随意读取其中的数据。 大多数情况存放的是图像数据，但是纹理仅仅是数据序列， 你也可以随意存放除了颜色数据以外的其它数据。</li><li>可变量（Varyings）: 可变量是一种顶点着色器给片断着色器传值的方式，依照渲染的图元是点， 线还是三角形，顶点着色器中设置的可变量会在片断着色器运行中获取不同的插值。</li></ul>',5),s=[i];function d(c,o,n,_,h,p){return a(),l("div",null,s)}const m=e(r,[["render",d]]);export{u as __pageData,m as default};
