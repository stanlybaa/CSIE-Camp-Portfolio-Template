import{_ as o}from"./Typing.de0b0ca0.js";import{o as c,c as r,f as d,t as u,a as e,b as l,F as m,g as _}from"./index.b4f6641d.js";const h=e("br",null,null,-1),g=e("br",null,null,-1),x=d(" Image: "),f=["src"],y=e("br",null,null,-1),b={__name:"Project",props:{name:{type:String,default:"Project"},description:{type:String,default:""},image:{type:String,default:""}},setup(s){return(i,a)=>(c(),r("div",null,[d(" Name: "+u(s.name),1),h,d(" Description: "+u(s.description),1),g,x,e("img",{src:s.image},null,8,f),y]))}},k={class:"h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24"},j={class:"py-2"},w={__name:"Projects",setup(s){function i(a=32){const n="abcdefghijklmnopqrstuvwxyz ";let t="";for(let p=0;p<a;p++)t+=n[Math.floor(Math.random()*n.length)];return t}return(a,n)=>(c(),r("div",k,[l(b,{name:"stanly",description:"aabbcc",image:"https://3.bp.blogspot.com/-fHks_DJHO74/VIPPUc-r-KI/AAAAAAACtY4/rK4h9l6dnCY/s1600/%E5%9C%96%E7%89%879.jpg"}),l(o,{text:"My Projects",class:"block text-2xl sm:text-3xl lg:text-4xl"}),e("div",j,[(c(),r(m,null,_(100,t=>e("div",{key:t,class:"my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200"},[l(o,{text:`Project No.${t}`,speed:40,delay:800+t*480,class:"text-lg"},null,8,["text","delay"]),l(o,{text:i(64+Math.round(Math.random()*192))+".",speed:30,delay:1e3+t*480,class:"hyphens-auto block break-all",style:{hyphens:"auto"}},null,8,["text","delay"])])),64))])]))}};export{w as default};
