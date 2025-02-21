import{G as L,H as p,O as J,z as n,M as Ce,L as Se,Q as G,S as Pe,a3 as xe,T as Be,I as Ee,r as w,e as Le,a4 as pe,a5 as W,R as E,a6 as we,V as Ae,_ as Q,Z as B,v as S,A as o,x as he,X,Y as Z,a7 as j,a2 as k,B as v,y as C,t as ee,a0 as te,a1 as ne,j as ae,h as le,a8 as h,a9 as I}from"./BLHR0q_M.js";import{a as T,g as N,j as Ne,k as $e,l as je,i as Ie,n as Te,o as De,p as Re,q as Ue,r as Oe,b as D,d as Me,s as Fe,t as Ge,e as We,v as ze,f as He,h as Ke,w as Ye,x as se,V as z}from"./5RI2tKFP.js";import{u as qe,V as H,f as Je,m as Qe,a as Xe,b as oe,c as A,d as re,e as V,g as x,h as ue}from"./Ci3uASGC.js";import{V as ie}from"./Celsj1RV.js";const Ze=p({color:String,density:String,...N()},"VBannerActions"),et=L()({name:"VBannerActions",props:Ze(),setup(e,s){let{slots:t}=s;return J({VBtn:{color:e.color,density:e.density,slim:!0,variant:"text"}}),T(()=>{var a;return n("div",{class:["v-banner-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),tt=Ne("v-banner-text"),nt=p({avatar:String,bgColor:String,color:String,icon:Be,lines:String,stacked:Boolean,sticky:Boolean,text:String,...Ke(),...N(),...He(),...ze(),...xe({mobile:null}),...We(),...Ge(),...Fe(),...Me(),...D(),...Pe()},"VBanner"),at=L()({name:"VBanner",props:nt(),setup(e,s){let{slots:t}=s;const{backgroundColorClasses:a,backgroundColorStyles:l}=$e(e,"bgColor"),{borderClasses:i}=je(e),{densityClasses:r}=Ie(e),{displayClasses:d,mobile:c}=Ce(e),{dimensionStyles:m}=Te(e),{elevationClasses:u}=De(e),{locationStyles:y}=Re(e),{positionClasses:f}=Ue(e),{roundedClasses:_}=Oe(e),{themeClasses:P}=Se(e),g=G(e,"color"),b=G(e,"density");J({VBannerActions:{color:g,density:b}}),T(()=>{const $=!!(e.text||t.text),O=!!(e.avatar||e.icon),ke=!!(O||t.prepend);return n(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||c.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},P.value,a.value,i.value,r.value,d.value,u.value,f.value,_.value,e.class],style:[l.value,m.value,y.value,e.style],role:"banner"},{default:()=>{var M;return[ke&&n("div",{key:"prepend",class:"v-banner__prepend"},[t.prepend?n(se,{key:"prepend-defaults",disabled:!O,defaults:{VAvatar:{color:g.value,density:b.value,icon:e.icon,image:e.avatar}}},t.prepend):n(Ye,{key:"prepend-avatar",color:g.value,density:b.value,icon:e.icon,image:e.avatar},null)]),n("div",{class:"v-banner__content"},[$&&n(tt,{key:"text"},{default:()=>{var F;return[((F=t.text)==null?void 0:F.call(t))??e.text]}}),(M=t.default)==null?void 0:M.call(t)]),t.actions&&n(et,{key:"actions"},t.actions)]}})})}}),lt=p({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Qe({origin:"center center",scrollStrategy:"block",transition:{component:Xe},zIndex:2400})},"VDialog"),st=L()({name:"VDialog",props:lt(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,s){let{emit:t,slots:a}=s;const l=Ee(e,"modelValue"),{scopeId:i}=qe(),r=w();function d(u){var _,P;const y=u.relatedTarget,f=u.target;if(y!==f&&((_=r.value)!=null&&_.contentEl)&&((P=r.value)!=null&&P.globalTop)&&![document,r.value.contentEl].includes(f)&&!r.value.contentEl.contains(f)){const g=we(r.value.contentEl);if(!g.length)return;const b=g[0],$=g[g.length-1];y===b?$.focus():b.focus()}}Le(()=>{document.removeEventListener("focusin",d)}),pe&&W(()=>l.value&&e.retainFocus,u=>{u?document.addEventListener("focusin",d):document.removeEventListener("focusin",d)},{immediate:!0});function c(){var u;t("afterEnter"),(u=r.value)!=null&&u.contentEl&&!r.value.contentEl.contains(document.activeElement)&&r.value.contentEl.focus({preventScroll:!0})}function m(){t("afterLeave")}return W(l,async u=>{var y;u||(await Ae(),(y=r.value.activatorEl)==null||y.focus({preventScroll:!0}))}),T(()=>{const u=H.filterProps(e),y=E({"aria-haspopup":"dialog"},e.activatorProps),f=E({tabindex:-1},e.contentProps);return n(H,E({ref:r,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},u,{modelValue:l.value,"onUpdate:modelValue":_=>l.value=_,"aria-modal":"true",activatorProps:y,contentProps:f,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:c,onAfterLeave:m},i),{activator:a.activator,default:function(){for(var _=arguments.length,P=new Array(_),g=0;g<_;g++)P[g]=arguments[g];return n(se,{root:"VDialog"},{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,...P)]}})}})}),Je({},r)}}),ot={__name:"InfoModal",props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:s}){const t=s,a=l=>{t("update:modelValue",l)};return(l,i)=>(S(),B(st,{width:"auto","model-value":e.modelValue,"onUpdate:modelValue":a},{default:o(()=>[n(at,{width:"680",class:"rounded-lg"},{actions:o(()=>[n(z,{class:"ms-auto btn",variant:"tonal",text:"Ok",onClick:i[0]||(i[0]=r=>a(!1))}),n(z,{class:"ms-6 btn",variant:"tonal",text:"Отмена",onClick:i[1]||(i[1]=r=>a(!1))})]),default:o(()=>[i[2]||(i[2]=he("p",null,"Banner with two lines of text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sunt praesentium, perspiciatis... magni. Lorem ipsum dolor sit amet...",-1))]),_:1})]),_:1},8,["model-value"]))}},rt=Q(ot,[["__scopeId","data-v-2e5ee48e"]]),ut={__name:"UserInfo",setup(e){const s=oe(),{fullName:t,info:a,userContacts:l}=X(s),{loadUserContacts:i}=s,r=w(!1),d=w(["user"]),c=()=>r.value=!0;return Z(()=>{i()}),(m,u)=>{const y=rt;return S(),B(ie,{variant:"flat",class:"rounded-lg",elevation:"0"},{default:o(()=>[n(A,{opened:k(d),"onUpdate:opened":u[0]||(u[0]=f=>j(d)?d.value=f:null),lines:"two"},{default:o(()=>[n(re,{value:"user"},{activator:o(({props:f})=>[n(V,E(f,{"prepend-icon":"mdi-account-circle",title:"Пользователь"}),null,16)]),default:o(()=>[n(V,{onClick:c},{default:o(()=>[n(x,null,{default:o(()=>u[2]||(u[2]=[v("ФИО")])),_:1}),v(" "+C(k(t)),1)]),_:1}),n(V,null,{default:o(()=>[n(x,null,{default:o(()=>u[3]||(u[3]=[v("Контактные данные")])),_:1}),n(A,null,{default:o(()=>[(S(!0),ee(te,null,ne(k(l),f=>(S(),B(V,{key:f.id},{default:o(()=>[n(ue,null,{default:o(()=>[v(C(f.label),1)]),_:2},1024),v(" "+C(f.value),1)]),_:2},1024))),128))]),_:1})]),_:1}),n(V,null,{default:o(()=>[n(x,null,{default:o(()=>u[4]||(u[4]=[v("Личная информация")])),_:1}),v(" "+C(k(a)),1)]),_:1})]),_:1})]),_:1},8,["opened"]),n(y,{modelValue:k(r),"onUpdate:modelValue":u[1]||(u[1]=f=>j(r)?r.value=f:null)},null,8,["modelValue"])]),_:1})}}},it={__name:"CompanyInfo",setup(e){const s=oe(),{userCompanyAddress:t,userCompanyContacts:a,userCompanyOther:l}=X(s),{loadUserCompany:i}=s,r=w(["company"]);return Z(()=>{i()}),(d,c)=>(S(),B(ie,{variant:"flat",class:"rounded-lg",elevation:"0"},{default:o(()=>[n(A,{opened:k(r),"onUpdate:opened":c[0]||(c[0]=m=>j(r)?r.value=m:null),lines:"two"},{default:o(()=>[n(re,{value:"company"},{activator:o(({props:m})=>[n(V,E(m,{"prepend-icon":"mdi-application-outline",title:"Компания"}),null,16)]),default:o(()=>[n(V,null,{default:o(()=>[n(x,null,{default:o(()=>c[1]||(c[1]=[v("Адрес")])),_:1}),v(" "+C(k(t)),1)]),_:1}),n(V,null,{default:o(()=>[n(x,null,{default:o(()=>c[2]||(c[2]=[v("Филиалы")])),_:1}),v(" "+C(k(l)),1)]),_:1}),n(V,null,{default:o(()=>[n(x,null,{default:o(()=>c[3]||(c[3]=[v("Контактная информация")])),_:1}),n(A,null,{default:o(()=>[(S(!0),ee(te,null,ne(k(a),m=>(S(),B(V,{key:m.id},{default:o(()=>[n(ue,null,{default:o(()=>[v(C(m.label),1)]),_:2},1024),v(" "+C(m.value),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["opened"])]),_:1}))}},ce=h.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}),de=h.reduce((e,s)=>{const t="offset"+I(s);return e[t]={type:[String,Number],default:null},e},{}),fe=h.reduce((e,s)=>{const t="order"+I(s);return e[t]={type:[String,Number],default:null},e},{}),K={col:Object.keys(ce),offset:Object.keys(de),order:Object.keys(fe)};function ct(e,s,t){let a=e;if(!(t==null||t===!1)){if(s){const l=s.replace(e,"");a+=`-${l}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const dt=["auto","start","end","center","baseline","stretch"],ft=p({cols:{type:[Boolean,String,Number],default:!1},...ce,offset:{type:[String,Number],default:null},...de,order:{type:[String,Number],default:null},...fe,alignSelf:{type:String,default:null,validator:e=>dt.includes(e)},...N(),...D()},"VCol"),Y=L()({name:"VCol",props:ft(),setup(e,s){let{slots:t}=s;const a=ae(()=>{const l=[];let i;for(i in K)K[i].forEach(d=>{const c=e[d],m=ct(i,d,c);m&&l.push(m)});const r=l.some(d=>d.startsWith("v-col-"));return l.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return le(e.tag,{class:[a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),R=["start","end","center"],me=["space-between","space-around","space-evenly"];function U(e,s){return h.reduce((t,a)=>{const l=e+I(a);return t[l]=s(),t},{})}const mt=[...R,"baseline","stretch"],ve=e=>mt.includes(e),ge=U("align",()=>({type:String,default:null,validator:ve})),vt=[...R,...me],ye=e=>vt.includes(e),Ve=U("justify",()=>({type:String,default:null,validator:ye})),gt=[...R,...me,"stretch"],_e=e=>gt.includes(e),be=U("alignContent",()=>({type:String,default:null,validator:_e})),q={align:Object.keys(ge),justify:Object.keys(Ve),alignContent:Object.keys(be)},yt={align:"align",justify:"justify",alignContent:"align-content"};function Vt(e,s,t){let a=yt[e];if(t!=null){if(s){const l=s.replace(e,"");a+=`-${l}`}return a+=`-${t}`,a.toLowerCase()}}const _t=p({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ve},...ge,justify:{type:String,default:null,validator:ye},...Ve,alignContent:{type:String,default:null,validator:_e},...be,...N(),...D()},"VRow"),bt=L()({name:"VRow",props:_t(),setup(e,s){let{slots:t}=s;const a=ae(()=>{const l=[];let i;for(i in q)q[i].forEach(r=>{const d=e[r],c=Vt(i,r,d);c&&l.push(c)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return le(e.tag,{class:["v-row",a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),kt={};function Ct(e,s){const t=ut,a=it;return S(),B(bt,null,{default:o(()=>[n(Y,{cols:12,lg:4,md:6},{default:o(()=>[n(t)]),_:1}),n(Y,{cols:12,lg:4,md:6},{default:o(()=>[n(a)]),_:1})]),_:1})}const Et=Q(kt,[["render",Ct]]);export{Et as default};
