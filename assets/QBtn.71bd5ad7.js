import{c as u,h as v,g as N,P as z,R as fe,S as ve,N as ee,W as ge,K as te,r as V,a as me,T as be,B as he,H as w,l as ye}from"./index.b835ddae.js";import{c as I,h as pe,b as j,j as ke,d as xe}from"./dom.c3efee9e.js";const K={xs:18,sm:24,md:32,lg:38,xl:46},ne={size:String};function ae(e,n=K){return u(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const F="0 0 24 24",H=e=>e,A=e=>`ionicons ${e}`,re={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":A,"ion-ios":A,"ion-logo":A,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(re).join("|")+")"),qe=new RegExp("^("+Object.keys(le).join("|")+")"),W=new RegExp("^("+Object.keys(ie).join("|")+")"),Ee=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,Se=/^svguse:/,we=/^ion-/,Be=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var D=I({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=N(),i=ae(e),g=u(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=u(()=>{let s,a=e.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const d=t.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(Ee.test(a)===!0){const[d,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(p=>{const[r,k,h]=p.split("@@");return v("path",{style:k,d:r,transform:h})})}}if(Re.test(a)===!0)return{img:!0,src:a.substring(4)};if(Se.test(a)===!0){const[d,y=F]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let b=" ";const q=a.match($e);if(q!==null)s=re[q[1]](a);else if(Be.test(a)===!0)s=a;else if(we.test(a)===!0)s=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(W.test(a)===!0){s="notranslate material-symbols";const d=a.match(W);d!==null&&(a=a.substring(6),s+=ie[d[1]]),b=a}else{s="notranslate material-icons";const d=a.match(qe);d!==null&&(a=a.substring(2),s+=le[d[1]]),b=a}return{cls:s,content:b}});return()=>{const s={class:g.value,style:i.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?v(e.tag,s,pe(n.default)):o.value.img===!0?v("span",s,j(n.default,[v("img",{src:o.value.src})])):o.value.svg===!0?v("span",s,j(n.default,[v("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?v("span",s,j(n.default,[v("svg",{viewBox:o.value.viewBox},[v("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),v(e.tag,s,j(n.default,[o.value.content])))}}});const Le={size:{type:[Number,String],default:"1em"},color:String};function _e(e){return{cSize:u(()=>e.size in K?`${K[e.size]}px`:e.size),classes:u(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ce=I({name:"QSpinner",props:{...Le,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:t}=_e(e);return()=>v("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Pe(e,n=250){let t=!1,i;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),i=e.apply(this,arguments)),i}}function U(e,n,t,i){t.modifiers.stop===!0&&ee(e);const g=t.modifiers.color;let o=t.modifiers.center;o=o===!0||i===!0;const s=document.createElement("span"),a=document.createElement("span"),b=ge(e),{left:q,top:d,width:y,height:p}=n.getBoundingClientRect(),r=Math.sqrt(y*y+p*p),k=r/2,h=`${(y-r)/2}px`,c=o?h:`${b.left-q-k}px`,f=`${(p-r)/2}px`,x=o?f:`${b.top-d-k}px`;a.className="q-ripple__inner",xe(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${g?" text-"+g:""}`,s.setAttribute("dir","ltr"),s.appendChild(a),n.appendChild(s);const S=()=>{s.remove(),clearTimeout(E)};t.abort.push(S);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${h},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{s.remove(),t.abort.splice(t.abort.indexOf(S),1)},275)},250)},50)}function X(e,{modifiers:n,value:t,arg:i}){const g=Object.assign({},e.cfg.ripple,n,t);e.modifiers={early:g.early===!0,stop:g.stop===!0,center:g.center===!0,color:g.color||i,keyCodes:[].concat(g.keyCodes||13)}}var Te=ke({name:"ripple",beforeMount(e,n){const t={cfg:n.instance.$.appContext.config.globalProperties.$q.config,enabled:n.value!==!1,modifiers:{},abort:[],start(i){t.enabled===!0&&i.qSkipRipple!==!0&&i.type===(t.modifiers.early===!0?"pointerdown":"click")&&U(i,e,t,i.qKeyEvent===!0)},keystart:Pe(i=>{t.enabled===!0&&i.qSkipRipple!==!0&&z(i,t.modifiers.keyCodes)===!0&&i.type===`key${t.modifiers.early===!0?"down":"up"}`&&U(i,e,t,!0)},300)};X(t,n),e.__qripple=t,fe(t,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&X(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),ve(n,"main"),delete e._qripple}});const ue={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(ue),Oe={align:{type:String,validator:e=>je.includes(e)}};function Me(e){return u(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ue[n]}`})}function Ye(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Ae(e){return e.appContext.config.globalProperties.$router!==void 0}function Y(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function ze(e,n){for(const t in n){const i=n[t],g=e[t];if(typeof i=="string"){if(i!==g)return!1}else if(Array.isArray(g)===!1||g.length!==i.length||i.some((o,s)=>o!==g[s]))return!1}return!0}function J(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,i)=>t===n[i]):e.length===1&&e[0]===n}function Ke(e,n){return Array.isArray(e)===!0?J(e,n):Array.isArray(n)===!0?J(n,e):e===n}function Ne(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ke(e[t],n[t])===!1)return!1;return!0}const Ie={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Qe(e){const n=N(),{props:t,proxy:i}=n,g=Ae(n),o=u(()=>t.disable!==!0&&t.href!==void 0),s=u(()=>g===!0&&t.disable!==!0&&o.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),a=u(()=>{if(s.value===!0)try{return i.$router.resolve(t.to)}catch{}return null}),b=u(()=>a.value!==null),q=u(()=>o.value===!0||b.value===!0),d=u(()=>t.type==="a"||q.value===!0?"a":t.tag||e||"div"),y=u(()=>o.value===!0?{href:t.href,target:t.target}:b.value===!0?{href:a.value.href,target:t.target}:{}),p=u(()=>{if(b.value===!1)return null;const{matched:f}=a.value,{length:x}=f,S=f[x-1];if(S===void 0)return-1;const E=i.$route.matched;if(E.length===0)return-1;const C=E.findIndex(G.bind(null,S));if(C>-1)return C;const O=Y(f[x-2]);return x>1&&Y(S)===O&&E[E.length-1].path!==O?E.findIndex(G.bind(null,f[x-2])):C}),r=u(()=>b.value===!0&&p.value>-1&&ze(i.$route.params,a.value.params)),k=u(()=>r.value===!0&&p.value===i.$route.matched.length-1&&Ne(i.$route.params,a.value.params)),h=u(()=>b.value===!0?k.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function c(f){return t.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||t.target==="_blank"?!1:(te(f),i.$router[t.replace===!0?"replace":"push"](t.to).catch(x=>x))}return{hasRouterLink:b,hasHrefLink:o,hasLink:q,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:k,linkClass:h,linkProps:y,navigateToRouterLink:c}}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ve={xs:8,sm:10,md:14,lg:20,xl:24},Fe=["button","submit","reset"],He=/[^\s]\/[^\s]/,We={...ne,...Ie,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function De(e){const n=ae(e,Ve),t=Me(e),{hasRouterLink:i,hasLink:g,linkTag:o,linkProps:s,navigateToRouterLink:a}=Qe("button"),b=u(()=>{const c=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(f=>f in Z?Z[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):c}),q=u(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=u(()=>e.disable!==!0&&e.loading!==!0),y=u(()=>d.value===!0?e.tabindex||0:-1),p=u(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=u(()=>{const c={tabindex:y.value};return g.value===!0?Object.assign(c,s.value):Fe.includes(e.type)===!0&&(c.type=e.type),o.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),i.value!==!0&&He.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),k=u(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${p.value} q-btn--${e.round===!0?"round":`rectangle${q.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),h=u(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:b,innerClasses:h,attributes:r,hasRouterLink:i,hasLink:g,linkTag:o,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:$}=ye;let B=null,L=null,_=null;var Ge=I({name:"QBtn",props:{...We,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:i}=N(),{classes:g,style:o,innerClasses:s,attributes:a,hasRouterLink:b,hasLink:q,linkTag:d,navigateToRouterLink:y,isActionable:p}=De(e),r=V(null),k=V(null);let h=null,c,f;const x=u(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=u(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),E=u(()=>({center:e.round})),C=u(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),O=u(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:Q,onKeydown:oe,onMousedown:de,onTouchstart:ce}:{onClick:w}),se=u(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+g.value,style:o.value,...a.value,...O.value}));function Q(l){if(r.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const M=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",M,$),r.value!==null&&r.value.removeEventListener("blur",M,$)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",M,$),r.value.addEventListener("blur",M,$)}}if(b.value===!0){const m=()=>{l.__qNavigate=!0,y(l)};t("click",l,m),l.defaultPrevented!==!0&&m()}else t("click",l)}}function oe(l){r.value!==null&&(t("keydown",l),z(l,[13,32])===!0&&L!==r.value&&(L!==null&&P(),l.defaultPrevented!==!0&&(r.value.focus(),L=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),r.value.addEventListener("blur",R,$)),w(l)))}function ce(l){r.value!==null&&(t("touchstart",l),l.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&P(),B=r.value,h=l.target,h.addEventListener("touchcancel",R,$),h.addEventListener("touchend",R,$)),c=!0,clearTimeout(f),f=setTimeout(()=>{c=!1},200)))}function de(l){r.value!==null&&(l.qSkipRipple=c===!0,t("mousedown",l),l.defaultPrevented!==!0&&_!==r.value&&(_!==null&&P(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,$)))}function R(l){if(r.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===r.value)){if(l!==void 0&&l.type==="keyup"){if(L===r.value&&z(l,[13,32])===!0){const m=new MouseEvent("click",l);m.qKeyEvent=!0,l.defaultPrevented===!0&&te(m),l.cancelBubble===!0&&ee(m),r.value.dispatchEvent(m),w(l),l.qKeyEvent=!0}t("keyup",l)}P()}}function P(l){const m=k.value;l!==!0&&(B===r.value||_===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),B===r.value&&(h!==null&&(h.removeEventListener("touchcancel",R,$),h.removeEventListener("touchend",R,$)),B=h=null),_===r.value&&(document.removeEventListener("mouseup",R,$),_=null),L===r.value&&(document.removeEventListener("keyup",R,!0),r.value!==null&&r.value.removeEventListener("blur",R,$),L=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(l){w(l),l.qSkipRipple=!0}return me(()=>{P(!0)}),Object.assign(i,{click:Q}),()=>{let l=[];e.icon!==void 0&&l.push(v(D,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(v("span",{class:"block"},[e.label])),l=j(n.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(v(D,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},l)),e.loading!==null&&m.push(v(be,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[v(Ce)])]:null)),he(v(d.value,se.value,m),[[Te,S.value,void 0,E.value]])}}});export{D as Q,Te as R,ae as a,Ce as b,Ie as c,Qe as d,Ge as e,Ye as g,ne as u,Ae as v};