import{f as c,g as l,h as _,o as s,c as a,j as i,k as m,v as d,d as u,F as p,_ as f}from"../app.06fa9719.js";const g="/blog/figma.svg",v={key:0,class:"figmaLogo",src:g,alt:""},h=["src"],F=c({__name:"FigmaContainer",props:{url:String},setup(o){const t=o,e=l(!1),n=_(()=>`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(t.url)}`),r=()=>{e.value=!0};return(w,C)=>(s(),a(p,null,[e.value?i("",!0):(s(),a("img",v)),m(u("iframe",{class:"figmaFile",src:n.value,allowfullscreen:"",onLoad:r},null,40,h),[[d,e.value]])],64))}});const k=f(F,[["__scopeId","data-v-1b0f4704"]]);export{k as F};
