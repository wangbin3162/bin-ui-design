import{_ as D,K as t,o as C,c as p,O as l,w as E,k as s,L as F,M as y,t as i,a as o,X as B}from"./chunks/framework.2ea68222.js";const d={},b={style:{height:"500px",overflow:"auto",border:"1px solid #eee"}},u={style:{padding:"20px"}};function h(A,c){const e=t("b-button"),n=t("b-back-top"),a=t("b-scrollbar");return C(),p("div",b,[l(a,{style:{height:"100%"},"wrap-class":"scrollbar-box"},{default:E(()=>[s("div",u,[(C(),p(F,null,y(80,r=>s("div",{key:r,ref_for:!0,ref:"item"},i(r)+":这是用来撑开内容的行...",1)),64))]),l(n,{target:".scrollbar-box","visible-height":200},{default:E(()=>[l(e,{type:"info",size:"large",icon:"up"})]),_:1})]),_:1})])}const g=D(d,[["render",h]]),f={},_={style:{position:"relative",border:"1px solid #eee"}},v={class:"scroll-box",style:{padding:"20px",height:"500px",overflow:"auto"}};function q(A,c){const e=t("b-button"),n=t("b-back-top");return C(),p("div",_,[s("div",v,[(C(),p(F,null,y(80,a=>s("div",{key:a,ref_for:!0,ref:"item"},i(a)+":这是用来撑开内容的行...",1)),64))]),l(n,{target:".scroll-box","visible-height":200},{default:E(()=>[l(e,{type:"success"},{default:E(()=>[o("返回顶端")]),_:1})]),_:1})])}const m=D(f,[["render",q]]),k=s("h1",{id:"返回顶部-backtop",tabindex:"-1"},[o("返回顶部 Backtop "),s("a",{class:"header-anchor",href:"#返回顶部-backtop","aria-label":'Permalink to "返回顶部 Backtop"'},"​")],-1),x=s("p",null,[o("当页面内容比较长滚动后需要快捷返回顶部时使用，一般放置在页面右下角位置。如果指定 "),s("code",null,"target"),o(" 使用则是针对某个容器的滚动")],-1),w=s("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),P=s("p",null,"直接用组件默认插槽插入即可",-1),N=s("h2",{id:"scrollbar用法",tabindex:"-1"},[o("scrollbar用法 "),s("a",{class:"header-anchor",href:"#scrollbar用法","aria-label":'Permalink to "scrollbar用法"'},"​")],-1),S=s("p",null,[o("如果结合 "),s("code",null,"scrollbar"),o(" 使用则不需要配置其他项")],-1),T=s("p",null,[o("注意：如嵌套在自定义滚动组件中使用则需要将 "),s("code",null,"BackTop"),o(" 组件放置于 "),s("code",null,"Scrollbar"),o(" 组件内部")],-1),$=B('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible-height</td><td>页面滚动高度达到该值时才显示BackTop</td><td>Number</td><td>—</td><td>400</td></tr><tr><td>target</td><td>目标容器标识，可设置目标的class、id标识来制定滚动监听的内容</td><td>String</td><td>—</td><td>—</td></tr><tr><td>bottom</td><td>组件距离底部的距离</td><td>Number</td><td>—</td><td>50</td></tr><tr><td>right</td><td>组件距离右部的距离</td><td>Number</td><td>—</td><td>50</td></tr><tr><td>duration</td><td>滚动动画持续时间，单位 毫秒</td><td>Number</td><td>—</td><td>1000</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时触发</td><td>无</td></tr></tbody></table>',4),j=JSON.parse('{"title":"返回顶部 Backtop","description":"","frontmatter":{"title":"返回顶部 Backtop"},"headers":[],"relativePath":"components/back-top.md","filePath":"components/back-top.md"}'),V={name:"components/back-top.md"},M=Object.assign(V,{setup(A){return(c,e)=>{const n=t("b-back-top"),a=t("demo-preview");return C(),p("div",null,[l(n),k,x,w,P,l(a,{title:"",description:"",code:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style=%22position:%20relative;%20border:%201px%20solid%20#eee%22%3E%0D%0A%20%20%20%20%3Cdiv%20class=%22scroll-box%22%20style=%22padding:%2020px;%20height:%20500px;%20overflow:%20auto%22%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20v-for=%22item%20in%2080%22%20:key=%22item%22%20ref=%22item%22%3E%7B%7B%20item%20%7D%7D:%E8%BF%99%E6%98%AF%E7%94%A8%E6%9D%A5%E6%92%91%E5%BC%80%E5%86%85%E5%AE%B9%E7%9A%84%E8%A1%8C...%3C/div%3E%0D%0A%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%3Cb-back-top%20target=%22.scroll-box%22%20:visible-height=%22200%22%3E%0D%0A%20%20%20%20%20%20%3Cb-button%20type=%22success%22%3E%E8%BF%94%E5%9B%9E%E9%A1%B6%E7%AB%AF%3C/b-button%3E%0D%0A%20%20%20%20%3C/b-back-top%3E%0D%0A%20%20%3C/div%3E%0D%0A%3C/template%3E%0D%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20rose-pine-moon%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bposition%3A%20relative%3B%20border%3A%201px%20solid%20%23eee%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bscroll-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bpadding%3A%2020px%3B%20height%3A%20500px%3B%20overflow%3A%20auto%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Ev-for%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bitem%20in%2080%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bitem%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bitem%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%7B%7B%20item%20%7D%7D%3A%E8%BF%99%E6%98%AF%E7%94%A8%E6%9D%A5%E6%92%91%E5%BC%80%E5%86%85%E5%AE%B9%E7%9A%84%E8%A1%8C...%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-back-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Etarget%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3B.scroll-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3E%3Avisible-height%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3B200%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bsuccess%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%E8%BF%94%E5%9B%9E%E9%A1%B6%E7%AB%AF%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-back-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20slack-ochin%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bposition%3A%20relative%3B%20border%3A%201px%20solid%20%23eee%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bscroll-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bpadding%3A%2020px%3B%20height%3A%20500px%3B%20overflow%3A%20auto%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Ev-for%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bitem%20in%2080%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bitem%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bitem%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%7B%7B%20item%20%7D%7D%3A%E8%BF%99%E6%98%AF%E7%94%A8%E6%9D%A5%E6%92%91%E5%BC%80%E5%86%85%E5%AE%B9%E7%9A%84%E8%A1%8C...%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-back-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Etarget%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3B.scroll-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3E%3Avisible-height%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3B200%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bsuccess%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%E8%BF%94%E5%9B%9E%E9%A1%B6%E7%AB%AF%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-back-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"D:\\Workspace\\MyProject\\bin-ui-design\\demo\\components\\demo\\Backtop\\Basic.vue",relativePath:"./demo/Backtop/Basic.vue"},{default:E(()=>[l(m)]),_:1}),N,S,T,l(a,{title:"",description:"",code:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style=%22height:%20500px;%20overflow:%20auto;%20border:%201px%20solid%20#eee%22%3E%0D%0A%20%20%20%20%3Cb-scrollbar%20style=%22height:%20100%25%22%20wrap-class=%22scrollbar-box%22%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20style=%22padding:%2020px%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20v-for=%22item%20in%2080%22%20:key=%22item%22%20ref=%22item%22%3E%7B%7B%20item%20%7D%7D:%E8%BF%99%E6%98%AF%E7%94%A8%E6%9D%A5%E6%92%91%E5%BC%80%E5%86%85%E5%AE%B9%E7%9A%84%E8%A1%8C...%3C/div%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cb-back-top%20target=%22.scrollbar-box%22%20:visible-height=%22200%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cb-button%20type=%22info%22%20size=%22large%22%20icon=%22up%22%3E%3C/b-button%3E%0D%0A%20%20%20%20%20%20%3C/b-back-top%3E%0D%0A%20%20%20%20%3C/b-scrollbar%3E%0D%0A%20%20%3C/div%3E%0D%0A%3C/template%3E%0D%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20rose-pine-moon%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bheight%3A%20500px%3B%20overflow%3A%20auto%3B%20border%3A%201px%20solid%20%23eee%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bheight%3A%20100%25%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Ewrap-class%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bscrollbar-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bpadding%3A%2020px%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Ev-for%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bitem%20in%2080%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bitem%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bitem%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%7B%7B%20item%20%7D%7D%3A%E8%BF%99%E6%98%AF%E7%94%A8%E6%9D%A5%E6%92%91%E5%BC%80%E5%86%85%E5%AE%B9%E7%9A%84%E8%A1%8C...%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-back-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Etarget%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3B.scrollbar-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3E%3Avisible-height%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3B200%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Binfo%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Esize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Blarge%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C4A7E7%3B%20font-style%3A%20italic%22%3Eicon%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23908CAA%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F6C177%22%3E%26quot%3Bup%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-back-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Eb-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E0DEF4%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239CCFD8%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E6A86%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20slack-ochin%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bheight%3A%20500px%3B%20overflow%3A%20auto%3B%20border%3A%201px%20solid%20%23eee%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bheight%3A%20100%25%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Ewrap-class%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bscrollbar-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bpadding%3A%2020px%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Ev-for%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bitem%20in%2080%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bitem%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bitem%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%7B%7B%20item%20%7D%7D%3A%E8%BF%99%E6%98%AF%E7%94%A8%E6%9D%A5%E6%92%91%E5%BC%80%E5%86%85%E5%AE%B9%E7%9A%84%E8%A1%8C...%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-back-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Etarget%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3B.scrollbar-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3E%3Avisible-height%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3B200%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Binfo%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Esize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Blarge%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DF8618%3B%20font-style%3A%20italic%22%3Eicon%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A44185%22%3E%26quot%3Bup%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-back-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Eb-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230444AC%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23002339%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"D:\\Workspace\\MyProject\\bin-ui-design\\demo\\components\\demo\\Backtop\\Scrollbar.vue",relativePath:"./demo/Backtop/Scrollbar.vue"},{default:E(()=>[l(g)]),_:1}),$])}}});export{j as __pageData,M as default};
