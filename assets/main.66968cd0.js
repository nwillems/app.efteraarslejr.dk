import"./modulepreload-polyfill.b7f2da20.js";import{p as e,a as t,r as s,b as r,o as n,c as o,d as a,e as l,w as i,f as d,F as c,g as p,h,i as u}from"./vendor.f1fcd028.js";e("data-v-5b33f031");const g={class:"flex flex-row bg-gray-200"},m={class:"flex-1 menu-btn"},f=d("Trade"),w={class:"flex-1 menu-btn"},x=d("Stats"),b={class:"flex-1 menu-btn"},v=d("Exchange");t();const _={props:{msg:String},setup:e=>(s(0),(e,t)=>{const s=r("router-link");return n(),o("div",g,[a("div",m,[l(s,{to:"/"},{default:i((()=>[f])),_:1})]),a("div",w,[l(s,{to:"/stats"},{default:i((()=>[x])),_:1})]),a("div",b,[l(s,{to:"/exchange"},{default:i((()=>[v])),_:1})])])}),__scopeId:"data-v-5b33f031"};const I={class:"fixed top-0 w-screen"},k={setup:e=>(e,t)=>{const s=r("router-view");return n(),o(c,null,[l(s),a("div",I,[l(_)])],64)}};const E={},S={src:"https://docs.google.com/forms/d/e/1FAIpQLSffXEWwxxLpVUwkNSEb5lQMP0fxpxF7LbVU_RIC3xGWn2t1ZQ/viewform?embedded=true&entry.857897558=HOLD_NAVN",class:"w-screen h-screen",frameborder:"0",marginheight:"0",marginwidth:"0"};E.render=function(e,t){return n(),o("iframe",S,"Indlæser…")};const y=a("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSffXEWwxxLpVUwkNSEb5lQMP0fxpxF7LbVU_RIC3xGWn2t1ZQ/viewform?embedded=true&entry.857897558={{sheet_id}}",class:"w-screen h-screen",frameborder:"0",marginheight:"0",marginwidth:"0"},"Indlæser…",-1),L=a("div",null,"Here goes stats",-1),Q=a("ol",null,[a("li",null,"IDEAS"),a("li",null,[d("Easy solution: use google sheets and create a sheet pr team, do something with cookies to get the right sheet-id. "),a("a",{href:"https://support.google.com/docs/answer/183965?hl=da#zippy=%2Cintegrer-et-dokument-et-regneark-eller-en-pr%C3%A6sentation%2Crediger-indlejrede-regneark"},"google help")]),a("li",null,"DIY"),a("li",null,"https://www.chartjs.org/"),a("li",null,"https://github.com/chriszarate/sheetrock"),a("li",null,"https://docs.steinhq.com/introduction"),a("li",null,"https://www.papaparse.com/")],-1),A={props:{sheet_id:String},setup:e=>(e,t)=>(n(),o(c,null,[y,L,Q],64))},C={};C.render=function(e,t){return" Exchange view "};const F=[{path:"/",component:E},{path:"/stats",component:A},{path:"/exchange",component:C}],V=p({history:h(),routes:F}),j=u(k);j.use(V),j.mount("#app");
