import{u as i,h as f,r as d,c as t,d as p}from"./preset.5b446cc2.js";function a(r="default"){let o="";switch(r){case"primary":o="#1089ff";break;case"success":o="#52c41a";break;case"warning":o="#fa8c16";break;case"danger":o="#f5222d";break;case"default":o="#35495E";break;default:o=r;break}return o}const e=(r,o="default",s=!1)=>{if(typeof r=="object"){console.dir(r);return}s?console.log(`%c ${r} `,`background:${a(o)}; padding: 2px; border-radius: 2px;color: #fff;`):console.log(`%c ${r} `,`color: ${a(o)};`)},u=(r,o,s="primary")=>{console.log(`%c ${r} %c ${o} %c`,`background:${a(s)};border:1px solid ${a(s)}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,`border:1px solid ${a(s)}; padding: 1px; border-radius: 0 2px 2px 0; color: ${a(s)};`,"background:transparent")},g=(r,o=!1)=>{e(r,"primary",o)},$=(r,o=!1)=>{e(r,"success",o)},b=(r,o=!1)=>{e(r,"info",o)},k=(r,o=!1)=>{e(r,"warning",o)},m=(r,o=!1)=>{e(r,"danger",o)},x=(r,o,s,c="primary",n="20px",l="#999")=>{console.log(`%c${r.toUpperCase()} %cV${o}  ${s}`,`color: ${a(c)};font-weight: 500;font-size: ${n};font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;`,`color: ${l};`)},w={print:e,pretty:u,primary:g,info:b,success:$,warning:k,danger:m,printVersion:x},y={util:i,helper:f,resize:d,color:t,dom:p,log:w};export{y as U};
