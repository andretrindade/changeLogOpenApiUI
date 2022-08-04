import{c as T,a as d,h,d as F,r as w,i as A,o as Q,n as j,e as R,f as I,g as q,l as E,w as S,j as J,k as U,m as N,p as K,q as X,s as Y,t as Z,u as ee,v as B,x as P,y as te,z as oe,_ as ne,A as ie,B as le,C as ae,D as $,E as re,F as C,G as se,H as ue}from"./index.08456223.js";var ce=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const i=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:i.value},F(v.default))}}),de=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const i=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:i.value},F(v.default))}});function fe(){const e=w(!A.value);return e.value===!1&&Q(()=>{e.value=!0}),e}const G=typeof ResizeObserver!="undefined",W=G===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var k=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:v}){let i=null,t,n={width:-1,height:-1};function r(s){s===!0||e.debounce===0||e.debounce==="0"?u():i===null&&(i=setTimeout(u,e.debounce))}function u(){if(clearTimeout(i),i=null,t){const{offsetWidth:s,offsetHeight:a}=t;(s!==n.width||a!==n.height)&&(n={width:s,height:a},v("resize",n))}}const g=q();if(Object.assign(g.proxy,{trigger:r}),G===!0){let s;return Q(()=>{j(()=>{t=g.proxy.$el.parentNode,t&&(s=new ResizeObserver(r),s.observe(t),u())})}),R(()=>{clearTimeout(i),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),I}else{let y=function(){clearTimeout(i),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",r,E.passive),a=void 0)},m=function(){y(),t&&t.contentDocument&&(a=t.contentDocument.defaultView,a.addEventListener("resize",r,E.passive),u())};const s=fe();let a;return Q(()=>{j(()=>{t=g.proxy.$el,t&&m()})}),R(y),()=>{if(s.value===!0)return h("object",{style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:m})}}}}),ve=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:i}){const{proxy:{$q:t}}=q(),n=U(N,()=>{console.error("QHeader needs to be child of QLayout")}),r=w(parseInt(e.heightHint,10)),u=w(!0),g=d(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||t.platform.is.ios&&n.isContainer.value===!0),s=d(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?r.value:0;const o=r.value-n.scroll.value.position;return o>0?o:0}),a=d(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),y=d(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),m=d(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=d(()=>{const o=n.rows.value.top,b={};return o[0]==="l"&&n.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),o[2]==="r"&&n.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),b});function c(o,b){n.update("header",o,b)}function p(o,b){o.value!==b&&(o.value=b)}function H({height:o}){p(r,o),c("size",o)}function O(o){y.value===!0&&p(u,!0),i("focusin",o)}S(()=>e.modelValue,o=>{c("space",o),p(u,!0),n.animate()}),S(s,o=>{c("offset",o)}),S(()=>e.reveal,o=>{o===!1&&p(u,e.modelValue)}),S(u,o=>{n.animate(),i("reveal",o)}),S(n.scroll,o=>{e.reveal===!0&&p(u,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const _={};return n.instances.header=_,e.modelValue===!0&&c("size",r.value),c("space",e.modelValue),c("offset",s.value),R(()=>{n.instances.header===_&&(n.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const o=J(v.default,[]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(h(k,{debounce:0,onResize:H})),h("header",{class:m.value,style:z.value,onFocusin:O},o)}}}),he=T({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:i}}=q(),t=U(N,()=>{console.error("QPageContainer needs to be child of QLayout")});K(X,!0);const n=d(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>h("div",{class:"q-page-container",style:n.value},F(v.default))}});const{passive:D}=E,ge=["both","horizontal","vertical"];var me=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ge.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:v}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,r;S(()=>e.scrollTarget,()=>{s(),g()});function u(){t!==null&&t();const m=Math.max(0,Z(n)),z=ee(n),c={top:m-i.position.top,left:z-i.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const p=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";i.position={top:m,left:z},i.directionChanged=i.direction!==p,i.delta=c,i.directionChanged===!0&&(i.direction=p,i.inflectionPoint=i.position),v("scroll",{...i})}function g(){n=Y(r,e.scrollTarget),n.addEventListener("scroll",a,D),a(!0)}function s(){n!==void 0&&(n.removeEventListener("scroll",a,D),n=void 0)}function a(m){if(m===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const y=q();return Q(()=>{r=y.proxy.$el.parentNode,g()}),R(()=>{t!==null&&t(),s()}),Object.assign(y.proxy,{trigger:a,getPosition:()=>i}),I}}),be=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:i}){const{proxy:{$q:t}}=q(),n=w(null),r=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),g=w({position:0,direction:"down",inflectionPoint:0}),s=w(0),a=w(A.value===!0?0:B()),y=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=d(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=d(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function p(l){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};g.value=f,e.onScroll!==void 0&&i("scroll",f)}}function H(l){const{height:f,width:x}=l;let L=!1;r.value!==f&&(L=!0,r.value=f,e.onScrollHeight!==void 0&&i("scroll-height",f),_()),u.value!==x&&(L=!0,u.value=x),L===!0&&e.onResize!==void 0&&i("resize",l)}function O({height:l}){s.value!==l&&(s.value=l,_())}function _(){if(e.container===!0){const l=r.value>s.value?B():0;a.value!==l&&(a.value=l)}}let o;const b={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:n,height:r,containerHeight:s,scrollbarWidth:a,totalWidth:d(()=>u.value+a.value),rows:d(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:g,animate(){o!==void 0?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),o=void 0},155)},update(l,f,x){b[l][f]=x}};if(K(N,b),B()>0){let x=function(){l=null,f.classList.remove("hide-scrollbar")},L=function(){if(l===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(x,300)},V=function(M){l!==null&&M==="remove"&&(clearTimeout(l),x()),window[`${M}EventListener`]("resize",L)},l=null;const f=document.body;S(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),te(()=>{V("remove")})}return()=>{const l=oe(v.default,[h(me,{onScroll:p}),h(k,{onResize:H})]),f=h("div",{class:y.value,style:m.value,ref:e.container===!0?void 0:n,tabindex:-1},l);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:n},[h(k,{onResize:O}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:c.value},[f])])]):f}}});const pe=ie({name:"MainLayout"}),ye=se(" ChangeLog - OpenAPI "),we=ue("div",null," v 1.0",-1);function ze(e,v,i,t,n,r){const u=re("router-view");return le(),ae(be,{view:"lHh Lpr lFf"},{default:$(()=>[C(ve,{elevated:""},{default:$(()=>[C(de,null,{default:$(()=>[C(ce,null,{default:$(()=>[ye]),_:1}),we]),_:1})]),_:1}),C(he,null,{default:$(()=>[C(u)]),_:1})]),_:1})}var Se=ne(pe,[["render",ze]]);export{Se as default};
