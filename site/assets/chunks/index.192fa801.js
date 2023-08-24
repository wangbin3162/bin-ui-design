import{i as V,a as G,u as W,h as Q,d as X}from"./preset.87ee8978.js";const Y=function(t){for(const n of t){const r=n.target.__resizeListeners__||[];r.length&&r.forEach(e=>{e()})}},Z=function(t,n){V||!t||(t.__resizeListeners__||(t.__resizeListeners__=[],t.__ro__=new G(Y),t.__ro__.observe(t)),t.__resizeListeners__.push(n))},tt=function(t,n){!t||!t.__resizeListeners__||(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(n),1),t.__resizeListeners__.length||t.__ro__.disconnect())},nt=Object.freeze(Object.defineProperty({__proto__:null,addResizeListener:Z,removeResizeListener:tt},Symbol.toStringTag,{value:"Module"}));function rt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U={exports:{}},D={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},I={exports:{}},et=function(n){return!n||typeof n=="string"?!1:n instanceof Array||Array.isArray(n)||n.length>=0&&(n.splice instanceof Function||Object.getOwnPropertyDescriptor(n,n.length-1)&&n.constructor.name!=="String")},ot=et,st=Array.prototype.concat,at=Array.prototype.slice,j=I.exports=function(n){for(var r=[],e=0,o=n.length;e<o;e++){var a=n[e];ot(a)?r=st.call(r,at.call(a)):r.push(a)}return r};j.wrap=function(t){return function(){return t(j(arguments))}};var lt=I.exports,z=D,S=lt,R=Object.hasOwnProperty,H=Object.create(null);for(var E in z)R.call(z,E)&&(H[z[E]]=E);var y=U.exports={to:{},get:{}};y.get=function(t){var n=t.substring(0,3).toLowerCase(),r,e;switch(n){case"hsl":r=y.get.hsl(t),e="hsl";break;case"hwb":r=y.get.hwb(t),e="hwb";break;default:r=y.get.rgb(t),e="rgb";break}return r?{model:e,value:r}:null};y.get.rgb=function(t){if(!t)return null;var n=/^#([a-f0-9]{3,4})$/i,r=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,e=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,o=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,a=/^(\w+)$/,s=[0,0,0,1],l,i,u;if(l=t.match(r)){for(u=l[2],l=l[1],i=0;i<3;i++){var d=i*2;s[i]=parseInt(l.slice(d,d+2),16)}u&&(s[3]=parseInt(u,16)/255)}else if(l=t.match(n)){for(l=l[1],u=l[3],i=0;i<3;i++)s[i]=parseInt(l[i]+l[i],16);u&&(s[3]=parseInt(u+u,16)/255)}else if(l=t.match(e)){for(i=0;i<3;i++)s[i]=parseInt(l[i+1],0);l[4]&&(l[5]?s[3]=parseFloat(l[4])*.01:s[3]=parseFloat(l[4]))}else if(l=t.match(o)){for(i=0;i<3;i++)s[i]=Math.round(parseFloat(l[i+1])*2.55);l[4]&&(l[5]?s[3]=parseFloat(l[4])*.01:s[3]=parseFloat(l[4]))}else return(l=t.match(a))?l[1]==="transparent"?[0,0,0,0]:R.call(z,l[1])?(s=z[l[1]],s[3]=1,s):null:null;for(i=0;i<3;i++)s[i]=v(s[i],0,255);return s[3]=v(s[3],0,1),s};y.get.hsl=function(t){if(!t)return null;var n=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,r=t.match(n);if(r){var e=parseFloat(r[4]),o=(parseFloat(r[1])%360+360)%360,a=v(parseFloat(r[2]),0,100),s=v(parseFloat(r[3]),0,100),l=v(isNaN(e)?1:e,0,1);return[o,a,s,l]}return null};y.get.hwb=function(t){if(!t)return null;var n=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,r=t.match(n);if(r){var e=parseFloat(r[4]),o=(parseFloat(r[1])%360+360)%360,a=v(parseFloat(r[2]),0,100),s=v(parseFloat(r[3]),0,100),l=v(isNaN(e)?1:e,0,1);return[o,a,s,l]}return null};y.to.hex=function(){var t=S(arguments);return"#"+$(t[0])+$(t[1])+$(t[2])+(t[3]<1?$(Math.round(t[3]*255)):"")};y.to.rgb=function(){var t=S(arguments);return t.length<4||t[3]===1?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"};y.to.rgb.percent=function(){var t=S(arguments),n=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),e=Math.round(t[2]/255*100);return t.length<4||t[3]===1?"rgb("+n+"%, "+r+"%, "+e+"%)":"rgba("+n+"%, "+r+"%, "+e+"%, "+t[3]+")"};y.to.hsl=function(){var t=S(arguments);return t.length<4||t[3]===1?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"};y.to.hwb=function(){var t=S(arguments),n="";return t.length>=4&&t[3]!==1&&(n=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+n+")"};y.to.keyword=function(t){return H[t.slice(0,3)]};function v(t,n,r){return Math.min(Math.max(n,t),r)}function $(t){var n=Math.round(t).toString(16).toUpperCase();return n.length<2?"0"+n:n}var it=U.exports;const O=D,K={};for(const t of Object.keys(O))K[O[t]]=t;const c={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var T=c;for(const t of Object.keys(c)){if(!("channels"in c[t]))throw new Error("missing channels property: "+t);if(!("labels"in c[t]))throw new Error("missing channel labels property: "+t);if(c[t].labels.length!==c[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:n,labels:r}=c[t];delete c[t].channels,delete c[t].labels,Object.defineProperty(c[t],"channels",{value:n}),Object.defineProperty(c[t],"labels",{value:r})}c.rgb.hsl=function(t){const n=t[0]/255,r=t[1]/255,e=t[2]/255,o=Math.min(n,r,e),a=Math.max(n,r,e),s=a-o;let l,i;a===o?l=0:n===a?l=(r-e)/s:r===a?l=2+(e-n)/s:e===a&&(l=4+(n-r)/s),l=Math.min(l*60,360),l<0&&(l+=360);const u=(o+a)/2;return a===o?i=0:u<=.5?i=s/(a+o):i=s/(2-a-o),[l,i*100,u*100]};c.rgb.hsv=function(t){let n,r,e,o,a;const s=t[0]/255,l=t[1]/255,i=t[2]/255,u=Math.max(s,l,i),d=u-Math.min(s,l,i),p=function(J){return(u-J)/6/d+1/2};return d===0?(o=0,a=0):(a=d/u,n=p(s),r=p(l),e=p(i),s===u?o=e-r:l===u?o=1/3+n-e:i===u&&(o=2/3+r-n),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,u*100]};c.rgb.hwb=function(t){const n=t[0],r=t[1];let e=t[2];const o=c.rgb.hsl(t)[0],a=1/255*Math.min(n,Math.min(r,e));return e=1-1/255*Math.max(n,Math.max(r,e)),[o,a*100,e*100]};c.rgb.cmyk=function(t){const n=t[0]/255,r=t[1]/255,e=t[2]/255,o=Math.min(1-n,1-r,1-e),a=(1-n-o)/(1-o)||0,s=(1-r-o)/(1-o)||0,l=(1-e-o)/(1-o)||0;return[a*100,s*100,l*100,o*100]};function ct(t,n){return(t[0]-n[0])**2+(t[1]-n[1])**2+(t[2]-n[2])**2}c.rgb.keyword=function(t){const n=K[t];if(n)return n;let r=1/0,e;for(const o of Object.keys(O)){const a=O[o],s=ct(t,a);s<r&&(r=s,e=o)}return e};c.keyword.rgb=function(t){return O[t]};c.rgb.xyz=function(t){let n=t[0]/255,r=t[1]/255,e=t[2]/255;n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92;const o=n*.4124+r*.3576+e*.1805,a=n*.2126+r*.7152+e*.0722,s=n*.0193+r*.1192+e*.9505;return[o*100,a*100,s*100]};c.rgb.lab=function(t){const n=c.rgb.xyz(t);let r=n[0],e=n[1],o=n[2];r/=95.047,e/=100,o/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*e-16,s=500*(r-e),l=200*(e-o);return[a,s,l]};c.hsl.rgb=function(t){const n=t[0]/360,r=t[1]/100,e=t[2]/100;let o,a,s;if(r===0)return s=e*255,[s,s,s];e<.5?o=e*(1+r):o=e+r-e*r;const l=2*e-o,i=[0,0,0];for(let u=0;u<3;u++)a=n+1/3*-(u-1),a<0&&a++,a>1&&a--,6*a<1?s=l+(o-l)*6*a:2*a<1?s=o:3*a<2?s=l+(o-l)*(2/3-a)*6:s=l,i[u]=s*255;return i};c.hsl.hsv=function(t){const n=t[0];let r=t[1]/100,e=t[2]/100,o=r;const a=Math.max(e,.01);e*=2,r*=e<=1?e:2-e,o*=a<=1?a:2-a;const s=(e+r)/2,l=e===0?2*o/(a+o):2*r/(e+r);return[n,l*100,s*100]};c.hsv.rgb=function(t){const n=t[0]/60,r=t[1]/100;let e=t[2]/100;const o=Math.floor(n)%6,a=n-Math.floor(n),s=255*e*(1-r),l=255*e*(1-r*a),i=255*e*(1-r*(1-a));switch(e*=255,o){case 0:return[e,i,s];case 1:return[l,e,s];case 2:return[s,e,i];case 3:return[s,l,e];case 4:return[i,s,e];case 5:return[e,s,l]}};c.hsv.hsl=function(t){const n=t[0],r=t[1]/100,e=t[2]/100,o=Math.max(e,.01);let a,s;s=(2-r)*e;const l=(2-r)*o;return a=r*o,a/=l<=1?l:2-l,a=a||0,s/=2,[n,a*100,s*100]};c.hwb.rgb=function(t){const n=t[0]/360;let r=t[1]/100,e=t[2]/100;const o=r+e;let a;o>1&&(r/=o,e/=o);const s=Math.floor(6*n),l=1-e;a=6*n-s,s&1&&(a=1-a);const i=r+a*(l-r);let u,d,p;switch(s){default:case 6:case 0:u=l,d=i,p=r;break;case 1:u=i,d=l,p=r;break;case 2:u=r,d=l,p=i;break;case 3:u=r,d=i,p=l;break;case 4:u=i,d=r,p=l;break;case 5:u=l,d=r,p=i;break}return[u*255,d*255,p*255]};c.cmyk.rgb=function(t){const n=t[0]/100,r=t[1]/100,e=t[2]/100,o=t[3]/100,a=1-Math.min(1,n*(1-o)+o),s=1-Math.min(1,r*(1-o)+o),l=1-Math.min(1,e*(1-o)+o);return[a*255,s*255,l*255]};c.xyz.rgb=function(t){const n=t[0]/100,r=t[1]/100,e=t[2]/100;let o,a,s;return o=n*3.2406+r*-1.5372+e*-.4986,a=n*-.9689+r*1.8758+e*.0415,s=n*.0557+r*-.204+e*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),[o*255,a*255,s*255]};c.xyz.lab=function(t){let n=t[0],r=t[1],e=t[2];n/=95.047,r/=100,e/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,e=e>.008856?e**(1/3):7.787*e+16/116;const o=116*r-16,a=500*(n-r),s=200*(r-e);return[o,a,s]};c.lab.xyz=function(t){const n=t[0],r=t[1],e=t[2];let o,a,s;a=(n+16)/116,o=r/500+a,s=a-e/200;const l=a**3,i=o**3,u=s**3;return a=l>.008856?l:(a-16/116)/7.787,o=i>.008856?i:(o-16/116)/7.787,s=u>.008856?u:(s-16/116)/7.787,o*=95.047,a*=100,s*=108.883,[o,a,s]};c.lab.lch=function(t){const n=t[0],r=t[1],e=t[2];let o;o=Math.atan2(e,r)*360/2/Math.PI,o<0&&(o+=360);const s=Math.sqrt(r*r+e*e);return[n,s,o]};c.lch.lab=function(t){const n=t[0],r=t[1],o=t[2]/360*2*Math.PI,a=r*Math.cos(o),s=r*Math.sin(o);return[n,a,s]};c.rgb.ansi16=function(t,n=null){const[r,e,o]=t;let a=n===null?c.rgb.hsv(t)[2]:n;if(a=Math.round(a/50),a===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(e/255)<<1|Math.round(r/255));return a===2&&(s+=60),s};c.hsv.ansi16=function(t){return c.rgb.ansi16(c.hsv.rgb(t),t[2])};c.rgb.ansi256=function(t){const n=t[0],r=t[1],e=t[2];return n===r&&r===e?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(r/255*5)+Math.round(e/255*5)};c.ansi16.rgb=function(t){let n=t%10;if(n===0||n===7)return t>50&&(n+=3.5),n=n/10.5*255,[n,n,n];const r=(~~(t>50)+1)*.5,e=(n&1)*r*255,o=(n>>1&1)*r*255,a=(n>>2&1)*r*255;return[e,o,a]};c.ansi256.rgb=function(t){if(t>=232){const a=(t-232)*10+8;return[a,a,a]}t-=16;let n;const r=Math.floor(t/36)/5*255,e=Math.floor((n=t%36)/6)/5*255,o=n%6/5*255;return[r,e,o]};c.rgb.hex=function(t){const r=(((Math.round(t[0])&255)<<16)+((Math.round(t[1])&255)<<8)+(Math.round(t[2])&255)).toString(16).toUpperCase();return"000000".substring(r.length)+r};c.hex.rgb=function(t){const n=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];let r=n[0];n[0].length===3&&(r=r.split("").map(l=>l+l).join(""));const e=parseInt(r,16),o=e>>16&255,a=e>>8&255,s=e&255;return[o,a,s]};c.rgb.hcg=function(t){const n=t[0]/255,r=t[1]/255,e=t[2]/255,o=Math.max(Math.max(n,r),e),a=Math.min(Math.min(n,r),e),s=o-a;let l,i;return s<1?l=a/(1-s):l=0,s<=0?i=0:o===n?i=(r-e)/s%6:o===r?i=2+(e-n)/s:i=4+(n-r)/s,i/=6,i%=1,[i*360,s*100,l*100]};c.hsl.hcg=function(t){const n=t[1]/100,r=t[2]/100,e=r<.5?2*n*r:2*n*(1-r);let o=0;return e<1&&(o=(r-.5*e)/(1-e)),[t[0],e*100,o*100]};c.hsv.hcg=function(t){const n=t[1]/100,r=t[2]/100,e=n*r;let o=0;return e<1&&(o=(r-e)/(1-e)),[t[0],e*100,o*100]};c.hcg.rgb=function(t){const n=t[0]/360,r=t[1]/100,e=t[2]/100;if(r===0)return[e*255,e*255,e*255];const o=[0,0,0],a=n%1*6,s=a%1,l=1-s;let i=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return i=(1-r)*e,[(r*o[0]+i)*255,(r*o[1]+i)*255,(r*o[2]+i)*255]};c.hcg.hsv=function(t){const n=t[1]/100,r=t[2]/100,e=n+r*(1-n);let o=0;return e>0&&(o=n/e),[t[0],o*100,e*100]};c.hcg.hsl=function(t){const n=t[1]/100,e=t[2]/100*(1-n)+.5*n;let o=0;return e>0&&e<.5?o=n/(2*e):e>=.5&&e<1&&(o=n/(2*(1-e))),[t[0],o*100,e*100]};c.hcg.hwb=function(t){const n=t[1]/100,r=t[2]/100,e=n+r*(1-n);return[t[0],(e-n)*100,(1-e)*100]};c.hwb.hcg=function(t){const n=t[1]/100,e=1-t[2]/100,o=e-n;let a=0;return o<1&&(a=(e-o)/(1-o)),[t[0],o*100,a*100]};c.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]};c.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]};c.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]};c.gray.hsl=function(t){return[0,0,t[0]]};c.gray.hsv=c.gray.hsl;c.gray.hwb=function(t){return[0,100,t[0]]};c.gray.cmyk=function(t){return[0,0,0,t[0]]};c.gray.lab=function(t){return[t[0],0,0]};c.gray.hex=function(t){const n=Math.round(t[0]/100*255)&255,e=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(e.length)+e};c.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const A=T;function ut(){const t={},n=Object.keys(A);for(let r=n.length,e=0;e<r;e++)t[n[e]]={distance:-1,parent:null};return t}function ht(t){const n=ut(),r=[t];for(n[t].distance=0;r.length;){const e=r.pop(),o=Object.keys(A[e]);for(let a=o.length,s=0;s<a;s++){const l=o[s],i=n[l];i.distance===-1&&(i.distance=n[e].distance+1,i.parent=e,r.unshift(l))}}return n}function ft(t,n){return function(r){return n(t(r))}}function gt(t,n){const r=[n[t].parent,t];let e=A[n[t].parent][t],o=n[t].parent;for(;n[o].parent;)r.unshift(n[o].parent),e=ft(A[n[o].parent][o],e),o=n[o].parent;return e.conversion=r,e}var dt=function(t){const n=ht(t),r={},e=Object.keys(n);for(let o=e.length,a=0;a<o;a++){const s=e[a];n[s].parent!==null&&(r[s]=gt(s,n))}return r};const L=T,bt=dt,x={},pt=Object.keys(L);function mt(t){const n=function(...r){const e=r[0];return e==null?e:(e.length>1&&(r=e),t(r))};return"conversion"in t&&(n.conversion=t.conversion),n}function yt(t){const n=function(...r){const e=r[0];if(e==null)return e;e.length>1&&(r=e);const o=t(r);if(typeof o=="object")for(let a=o.length,s=0;s<a;s++)o[s]=Math.round(o[s]);return o};return"conversion"in t&&(n.conversion=t.conversion),n}pt.forEach(t=>{x[t]={},Object.defineProperty(x[t],"channels",{value:L[t].channels}),Object.defineProperty(x[t],"labels",{value:L[t].labels});const n=bt(t);Object.keys(n).forEach(e=>{const o=n[e];x[t][e]=yt(o),x[t][e].raw=mt(o)})});var vt=x;const M=it,m=vt,B=["keyword","gray","hex"],q={};for(const t of Object.keys(m))q[[...m[t].labels].sort().join("")]=t;const C={};function g(t,n){if(!(this instanceof g))return new g(t,n);if(n&&n in B&&(n=null),n&&!(n in m))throw new Error("Unknown model: "+n);let r,e;if(t==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof g)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if(typeof t=="string"){const o=M.get(t);if(o===null)throw new Error("Unable to parse color from string: "+t);this.model=o.model,e=m[this.model].channels,this.color=o.value.slice(0,e),this.valpha=typeof o.value[e]=="number"?o.value[e]:1}else if(t.length>0){this.model=n||"rgb",e=m[this.model].channels;const o=Array.prototype.slice.call(t,0,e);this.color=P(o,e),this.valpha=typeof t[e]=="number"?t[e]:1}else if(typeof t=="number")this.model="rgb",this.color=[t>>16&255,t>>8&255,t&255],this.valpha=1;else{this.valpha=1;const o=Object.keys(t);"alpha"in t&&(o.splice(o.indexOf("alpha"),1),this.valpha=typeof t.alpha=="number"?t.alpha:0);const a=o.sort().join("");if(!(a in q))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=q[a];const{labels:s}=m[this.model],l=[];for(r=0;r<s.length;r++)l.push(t[s[r]]);this.color=P(l)}if(C[this.model])for(e=m[this.model].channels,r=0;r<e;r++){const o=C[this.model][r];o&&(this.color[r]=o(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}g.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let n=this.model in M.to?this:this.rgb();n=n.round(typeof t=="number"?t:1);const r=n.valpha===1?n.color:[...n.color,this.valpha];return M.to[n.model](r)},percentString(t){const n=this.rgb().round(typeof t=="number"?t:1),r=n.valpha===1?n.color:[...n.color,this.valpha];return M.to.rgb.percent(r)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:n}=m[this.model],{labels:r}=m[this.model];for(let e=0;e<n;e++)t[r[e]]=this.color[e];return this.valpha!==1&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,this.valpha!==1&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,this.valpha!==1&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new g([...this.color.map(kt(t)),this.valpha],this.model)},alpha(t){return t!==void 0?new g([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:h("rgb",0,f(255)),green:h("rgb",1,f(255)),blue:h("rgb",2,f(255)),hue:h(["hsl","hsv","hsl","hwb","hcg"],0,t=>(t%360+360)%360),saturationl:h("hsl",1,f(100)),lightness:h("hsl",2,f(100)),saturationv:h("hsv",1,f(100)),value:h("hsv",2,f(100)),chroma:h("hcg",1,f(100)),gray:h("hcg",2,f(100)),white:h("hwb",1,f(100)),wblack:h("hwb",2,f(100)),cyan:h("cmyk",0,f(100)),magenta:h("cmyk",1,f(100)),yellow:h("cmyk",2,f(100)),black:h("cmyk",3,f(100)),x:h("xyz",0,f(95.047)),y:h("xyz",1,f(100)),z:h("xyz",2,f(108.833)),l:h("lab",0,f(100)),a:h("lab",1),b:h("lab",2),keyword(t){return t!==void 0?new g(t):m[this.model].keyword(this.color)},hex(t){return t!==void 0?new g(t):M.to.hex(this.rgb().round().color)},hexa(t){if(t!==void 0)return new g(t);const n=this.rgb().round().color;let r=Math.round(this.valpha*255).toString(16).toUpperCase();return r.length===1&&(r="0"+r),M.to.hex(n)+r},rgbNumber(){const t=this.rgb().color;return(t[0]&255)<<16|(t[1]&255)<<8|t[2]&255},luminosity(){const t=this.rgb().color,n=[];for(const[r,e]of t.entries()){const o=e/255;n[r]=o<=.04045?o/12.92:((o+.055)/1.055)**2.4}return .2126*n[0]+.7152*n[1]+.0722*n[2]},contrast(t){const n=this.luminosity(),r=t.luminosity();return n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)},level(t){const n=this.contrast(t);return n>=7?"AAA":n>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(t[0]*2126+t[1]*7152+t[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let n=0;n<3;n++)t.color[n]=255-t.color[n];return t},lighten(t){const n=this.hsl();return n.color[2]+=n.color[2]*t,n},darken(t){const n=this.hsl();return n.color[2]-=n.color[2]*t,n},saturate(t){const n=this.hsl();return n.color[1]+=n.color[1]*t,n},desaturate(t){const n=this.hsl();return n.color[1]-=n.color[1]*t,n},whiten(t){const n=this.hwb();return n.color[1]+=n.color[1]*t,n},blacken(t){const n=this.hwb();return n.color[2]+=n.color[2]*t,n},grayscale(){const t=this.rgb().color,n=t[0]*.3+t[1]*.59+t[2]*.11;return g.rgb(n,n,n)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const n=this.hsl();let r=n.color[0];return r=(r+t)%360,r=r<0?360+r:r,n.color[0]=r,n},mix(t,n){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const r=t.rgb(),e=this.rgb(),o=n===void 0?.5:n,a=2*o-1,s=r.alpha()-e.alpha(),l=((a*s===-1?a:(a+s)/(1+a*s))+1)/2,i=1-l;return g.rgb(l*r.red()+i*e.red(),l*r.green()+i*e.green(),l*r.blue()+i*e.blue(),r.alpha()*o+e.alpha()*(1-o))}};for(const t of Object.keys(m)){if(B.includes(t))continue;const{channels:n}=m[t];g.prototype[t]=function(...r){return this.model===t?new g(this):r.length>0?new g(r,t):new g([...xt(m[this.model][t].raw(this.color)),this.valpha],t)},g[t]=function(...r){let e=r[0];return typeof e=="number"&&(e=P(r,n)),new g(e,t)}}function wt(t,n){return Number(t.toFixed(n))}function kt(t){return function(n){return wt(n,t)}}function h(t,n,r){t=Array.isArray(t)?t:[t];for(const e of t)(C[e]||(C[e]=[]))[n]=r;return t=t[0],function(e){let o;return e!==void 0?(r&&(e=r(e)),o=this[t](),o.color[n]=e,o):(o=this[t]().color[n],r&&(o=r(o)),o)}}function f(t){return function(n){return Math.max(0,Math.min(t,n))}}function xt(t){return Array.isArray(t)?t:[t]}function P(t,n){for(let r=0;r<n;r++)typeof t[r]!="number"&&(t[r]=0);return t}var Mt=g;const b=rt(Mt);function _t(t){const n=b(t).hex().toString().toLowerCase(),r=F(n,.1),e=F(n,.2),o=F(n,.3),a=F(n,.4),s=w(n,.2),l=w(n,.4),i=w(n,.6),u=w(n,.8),d=w(n,.9),p=w(n,.95);return[a,o,e,r,n,s,l,i,u,d,p]}function Ft(t){return b(t).object()}function zt(t,n=!0){const r=b(t).hex().toString();return n?r.toLowerCase():r}function Ot(t){return b(t).rgb().array()}function St(t){return b(t).hsl()}function $t(t){return b(t).grayscale().toString()}function At(t,n){return b(t).toString()===b(n).toString()}function Ct(t){return b(t).isLight()}function Et(t){return b(t).isDark()}function N(t,n,r){return b(n).mix(b(t),r).hex().toLowerCase()}function w(t,n){return N("#ffffff",t,n)}function F(t,n){return N("#000000",t,n)}function Lt(t,n){return b(t).alpha(n).toString()}function qt(t,n){return b(t).fade(n).toString()}function Pt(t,n){return b(t).lighten(n).toString()}function Nt(t,n){return b(t).darken(n).toString()}const jt=Object.freeze(Object.defineProperty({__proto__:null,alpha:Lt,darken:Nt,fade:qt,getPalette:_t,grayscale:$t,isDark:Et,isEqual:At,isLight:Ct,lighten:Pt,mix:N,mixBlack:F,mixWhite:w,toHex:zt,toHslArr:St,toObject:Ft,toRgbArr:Ot},Symbol.toStringTag,{value:"Module"}));function k(t="default"){let n="";switch(t){case"primary":n="#1089ff";break;case"success":n="#52c41a";break;case"warning":n="#fa8c16";break;case"danger":n="#f5222d";break;case"default":n="#35495E";break;default:n=t;break}return n}const _=(t,n="default",r=!1)=>{if(typeof t=="object"){console.dir(t);return}r?console.log(`%c ${t} `,`background:${k(n)}; padding: 2px; border-radius: 2px;color: #fff;`):console.log(`%c ${t} `,`color: ${k(n)};`)},Ut=(t,n,r="primary")=>{console.log(`%c ${t} %c ${n} %c`,`background:${k(r)};border:1px solid ${k(r)}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,`border:1px solid ${k(r)}; padding: 1px; border-radius: 0 2px 2px 0; color: ${k(r)};`,"background:transparent")},Dt=(t,n=!1)=>{_(t,"primary",n)},It=(t,n=!1)=>{_(t,"success",n)},Rt=(t,n=!1)=>{_(t,"info",n)},Ht=(t,n=!1)=>{_(t,"warning",n)},Kt=(t,n=!1)=>{_(t,"danger",n)},Tt=(t,n,r,e="primary",o="20px",a="#999")=>{console.log(`%c${t.toUpperCase()} %cV${n}  ${r}`,`color: ${k(e)};font-weight: 500;font-size: ${o};font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;`,`color: ${a};`)},Bt={print:_,pretty:Ut,primary:Dt,info:Rt,success:It,warning:Ht,danger:Kt,printVersion:Tt},Vt={util:W,helper:Q,resize:nt,color:jt,dom:X,log:Bt};export{Vt as U};