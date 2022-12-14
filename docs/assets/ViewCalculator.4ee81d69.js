var P=Object.defineProperty;var K=(t,i,a)=>i in t?P(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a;var m=(t,i,a)=>(K(t,typeof i!="symbol"?i+"":i,a),a);import{I as j,A as G}from"./AppNav.ba776d72.js";import{d as w,_ as C,o as l,c,e,n as R,f as M,t as f,F as V,g as S,a as s,w as r,T as U,p as A,b as F,h as z,r as g,i as L,v as X,j as J,k as I,l as T}from"./index.8f9fb449.js";const Q=w({name:"AppCheckbox",components:{},data(){return{showInfo:!1}},props:{activated:{required:!0,type:Boolean},textValue:{required:!0,type:String},description:{required:!1,type:String},info:{required:!1,type:String}}});const W=t=>(A("data-v-1948f26f"),t=t(),F(),t),Y={class:"v-app-checkbox"},Z={class:"v-app-checkbox__label"},ee={class:"v-app-checkbox__text"},te=W(()=>e("br",null,null,-1)),se={class:"v-app-checkbox__description"},ie={key:0,class:"v-app-checkbox__info"};function oe(t,i,a,n,u,_){return l(),c("div",Y,[e("label",Z,[e("span",{class:R(["v-app-checkbox__input",{"is-active":t.activated}])},null,2),e("span",ee,[M(f(t.textValue)+" ",1),t.description?(l(),c(V,{key:0},[te,e("span",se,f(t.description),1)],64)):S("",!0),s(U,{name:"v-transition-fade"},{default:r(()=>[t.info&&t.showInfo?(l(),c("span",ie,f(t.info),1)):S("",!0)]),_:1}),t.info?(l(),c("span",{key:1,class:"v-app-checkbox__i",onMouseenter:i[0]||(i[0]=x=>t.showInfo=!0),onMouseleave:i[1]||(i[1]=x=>t.showInfo=!1)},"i",32)):S("",!0)])])])}const B=C(Q,[["render",oe],["__scopeId","data-v-1948f26f"]]),ae=w({name:"AppSection",components:{},props:{index:{required:!0,type:Number},title:{required:!0,type:String}}});const ne={class:"v-app-section"},le=e("div",{class:"v-app-section__required-info"},"Facultatif",-1),ce={class:"app-g"},pe={class:"app-g__coll-2-12"},ue={class:"v-app-section__index"},_e={class:"app-g__coll-8-12"},re={class:"app-g"},de={class:"app-g__coll-12-12"};function ve(t,i,a,n,u,_){return l(),c("div",ne,[le,e("div",ce,[e("div",pe,[e("div",ue,f(t.index),1)]),e("div",_e,[e("div",null,f(t.title),1)])]),e("div",re,[e("div",de,[z(t.$slots,"default")])])])}const he=C(ae,[["render",ve]]);class q{constructor(i,a,n=!1,u){m(this,"type");this.index=i,this.title=a,this.required=n,this.info=u}}class H extends q{constructor(a,n,u=!1,_){super(a,n,u,_);m(this,"_subSections",[]);m(this,"value");m(this,"type","option");this.index=a,this.title=n,this.required=u,this.info=_}addSubSection(...a){return a.forEach(n=>this._subSections.push(n.setParent(this))),this}get subSections(){return this._subSections}}class y extends q{constructor(a,n,u=!1,_){super(a,n,u,_);m(this,"_subSections",[]);m(this,"type","number");this.index=a,this.title=n,this.required=u,this.info=_}addSubSection(a){return this._subSections.push(a),this}get subSections(){return this._subSections}get value(){return this.subSections.reduce((a,n)=>n.status!=="validate"?a:a+n.value,0)}}class d{constructor(i,a=0,n=()=>({testValue:!0,msg:"Any test"})){m(this,"_multiplier");m(this,"parent");this.text=i,this.value=a,this.validateValueCheck=n}get hasMultiplier(){return this._multiplier!==void 0}get multiplier(){return this._multiplier}setAMultiplier(i,a=""){return this._multiplier={text:a,value:i},this}get status(){return this.value===void 0?"empty":this.validateValueCheck(this.value)?"validate":"error"}get result(){return this._multiplier?this._multiplier.value*this.value:this.value}}class b{constructor(i,a,n){m(this,"_parent");this.uniqueID=i,this.titre=a,this.subtitle=n}setParent(i){return this._parent=i,this}get parent(){return this._parent}get isActive(){var i;return this._parent===void 0?!1:((i=this._parent.value)==null?void 0:i.uniqueID)===this.uniqueID}}const me=w({name:"AppNumberValue",components:{IconPen:j},props:{numberSubsection:{type:Object,default:new d},isCHFValue:{required:!1,default:!1,type:Boolean}}});const be={class:"v-app-number-value"},fe={class:"v-app-number-value__icon"},xe={key:0,class:"v-app-number-value__device"},ge={key:1,class:"v-app-number-value__end"};function Se(t,i,a,n,u,_){const x=g("icon-pen");return l(),c("div",be,[e("div",fe,[s(x)]),t.isCHFValue?(l(),c("div",xe,"CHF")):S("",!0),L(e("input",{class:"v-app-number-value__value",type:"number","onUpdate:modelValue":i[0]||(i[0]=$=>t.numberSubsection.value=$)},null,512),[[X,t.numberSubsection.value]]),t.isCHFValue?(l(),c("div",ge,".\u2014")):S("",!0)])}const D=C(me,[["render",Se],["__scopeId","data-v-92e29abd"]]),$e=J("globalStore",{state(){return{calculatorSections:[new H(1,"Taille de la structure",!0).addSubSection(new b("01","Petit","< 50 000 CHF /ann\xE9e"),new b("02","Moyen","50K\u2013250K CHF /ann\xE9e"),new b("03","Grand","250K\u2013500K CHF /ann\xE9e"),new b("04","Tr\xE8s grande","> 500K CHF /ann\xE9e")),new H(2,"Type d\u2019exposition",!0).addSubSection(new b("01","Solo"),new b("02","2 \xE0 6 pers."),new b("03","7 et plus")),new H(3,"Emploi d\u2019une ou plusieurs \u0153uvres existantes",!0).addSubSection(new b("01","Emploi d\u2019une ou plusieurs \u0153uvres existantes"),new b("02","Emploi d\u2019une ou plusieurs \u0153uvres existantes"),new b("03","Emploi d\u2019une ou plusieurs \u0153uvres existantes")),new y(4,"Dur\xE9e de l'exposition (en mois)").addSubSection(new d),new y(5,"Honoraires de r\xE9alisation (si r\xE9alis\xE9 par l\u2019artiste)").addSubSection(new d("nombre d'heures",0).setAMultiplier(50,"Co\xFBt horaire")).addSubSection(new d("Forfait de r\xE9alisation")),new y(6,"Per Diem").addSubSection(new d(`Per Diem
`,0)).addSubSection(new d("Nombre d'heures")),new y(7,"Honoraires de montage et transport").addSubSection(new d("nombre d\u2019heures",0).setAMultiplier(NaN,"Co\xFBt horaire [texte \xE0 valider, connection avec les choix pr\xE9c\xE9dent aussi]")),new y(8,"Forfait par performance").addSubSection(new d("nombre d\u2019occurences").setAMultiplier(150,"Co\xFBt horaire [texte \xE0 valider, connection avec les choix pr\xE9c\xE9dent aussi]")).addSubSection(new d("nombre d\u2019occurences").setAMultiplier(500,"\xC9v\xE8nement avec pr\xE9paration")).addSubSection(new d("nombre d\u2019occurences").setAMultiplier(250,"\xC9v\xE8nement sans pr\xE9paration")),new y(9,"Forfait texte / 1000 frappes").addSubSection(new d("nombre d\u2019incidences").setAMultiplier(30,"Co\xFBt forfait text [texte \xE0 valider, connection avec les choix pr\xE9c\xE9dent aussi]"))],calculatorData:{"1_taille_structure":{title:"Taille de la structure",type:"checkbox",value:null,options:{"1_taille_structure_petite":{title:"Petit"},"1_taille_structure_moyen":{title:"Moyen"},"1_taille_structure_grand":{title:"Grand"},"1_taille_structure_large":{title:"Tr\xE8s grande"}}},"2_Type_exposition":{title:"Type d\u2019exposition",type:"checkbox",value:null,options:{"2_Type_exposition_solo":{title:"Solo"},"2_Type_exposition_2a6":{title:"2 \xE0 6 pers."},"2_Type_exposition_7etPlus":{title:"7 et plus"}}},"3_Honoraires_participation":{title:"Honoraires de participation et/ou de conception",type:"checkbox",value:null,options:{"3_Emploi d_une ou plusieurs oeuvres existantes 1":{title:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"},"3_Emploi d_une ou plusieurs oeuvres existantes 2":{title:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"},"3_Emploi d_une ou plusieurs oeuvres existantes 3":{title:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"}}},"4_Duree_de_exposition":{type:"number",value:null}}}}}),Ee=w({name:"SubsectionOption",components:{AppCheckbox:B},props:{optionSubsection:{required:!0,type:Object}},methods:{activeThisSubsection(){this.optionSubsection.parent!==void 0&&(this.optionSubsection.parent.value=this.optionSubsection)}}});const ye=t=>(A("data-v-0f319526"),t=t(),F(),t),we={class:"v-subsection-option app-subsection"},Ce={class:"app-g"},ke=ye(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),Ve={class:"app-g__coll-6-12"},Ae={class:"app-subsection__result"};function Fe(t,i,a,n,u,_){const x=g("app-checkbox");return l(),c("div",we,[e("div",Ce,[ke,e("div",Ve,[s(x,{onClick:t.activeThisSubsection,activated:t.optionSubsection.isActive,textValue:t.optionSubsection.titre,description:t.optionSubsection.subtitle},null,8,["onClick","activated","textValue","description"])])]),e("h6",Ae,"is active: "+f(t.optionSubsection.isActive),1)])}const Ne=C(Ee,[["render",Fe],["__scopeId","data-v-0f319526"]]),Ie=w({name:"SubsectionNumber",components:{AppNumberValue:D},props:{numberSubsection:{required:!0,type:Object}}});const O=t=>(A("data-v-fcbcd39a"),t=t(),F(),t),Te={class:"v-subsection-number app-subsection"},He={key:0,class:"app-g"},Me=O(()=>e("div",{class:"app-g__coll-2-12"},null,-1)),Be={class:"app-g__coll-4-12"},qe={class:"app-g__coll-6-12"},De={class:"app-g"},Oe=O(()=>e("div",{class:"app-g__coll-2-12"},null,-1)),Pe={class:"app-g__coll-4-12"},Ke={key:0},je={class:"app-g__coll-6-12"},Ge={class:"app-subsection__result"};function Re(t,i,a,n,u,_){var $,k;const x=g("app-number-value");return l(),c("div",Te,[t.numberSubsection.hasMultiplier?(l(),c("div",He,[Me,e("div",Be,f(($=t.numberSubsection.multiplier)==null?void 0:$.text),1),e("div",qe,f((k=t.numberSubsection.multiplier)==null?void 0:k.value),1)])):S("",!0),e("div",De,[Oe,e("div",Pe,[t.numberSubsection.hasMultiplier?(l(),c("span",Ke,"\u21B3")):S("",!0),M(f(t.numberSubsection.text),1)]),e("div",je,[s(x,{numberSubsection:t.numberSubsection,"is-c-h-f-value":!1},null,8,["numberSubsection"])])]),e("h6",Ge,"result: "+f(t.numberSubsection.result),1)])}const Ue=C(Ie,[["render",Re],["__scopeId","data-v-fcbcd39a"]]),ze=w({name:"ViewCalculator",components:{SubsectionNumber:Ue,SubsectionOption:Ne,AppNumberValue:D,AppSection:he,AppCheckbox:B,AppNav:G},data(){return{globalStore:$e(),proto:!0,checkeds:[]}},computed:{sections(){return this.globalStore.calculatorSections.map(t=>t.type==="number"?{type:"number",value:t}:{type:"option",value:t})}}});const o=t=>(A("data-v-48b4ffaa"),t=t(),F(),t),Le={class:"v-view-calculator"},Xe=o(()=>e("h2",null,"RECOMMANDATIONS DE R\xC9MUN\xC9RATION POUR UNE EXPOSITION",-1)),Je=o(()=>e("h1",null,"new class system",-1)),Qe=o(()=>e("h1",null,"old class system",-1)),We={class:"app-g"},Ye=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),Ze={class:"app-g__coll-6-12"},et={class:"app-g"},tt=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),st={class:"app-g__coll-6-12"},it={class:"app-g"},ot=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),at={class:"app-g__coll-6-12"},nt={class:"app-g"},lt=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),ct={class:"app-g__coll-6-12"},pt={class:"app-g"},ut=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),_t={class:"app-g__coll-6-12"},rt={class:"app-g"},dt=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),vt={class:"app-g__coll-6-12"},ht={class:"app-g"},mt=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),bt={class:"app-g__coll-6-12"},ft={class:"app-g"},xt=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),gt={class:"app-g__coll-6-12"},St={class:"app-g"},$t=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),Et={class:"app-g__coll-6-12"},yt={class:"app-g"},wt=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),Ct={class:"app-g__coll-6-12"},kt={class:"app-g"},Vt=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),At={class:"app-g__coll-6-12"},Ft={class:"app-g"},Nt=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle app-circle--is-active"})])],-1)),It=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Co\xFBt horaire"),e("p",null,"\u21B3 nombre d\u2019heures")],-1)),Tt={class:"app-g__coll-6-12"},Ht={class:"app-g"},Mt=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle app-circle--is-active"})])],-1)),Bt=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Forfait de r\xE9alisation")],-1)),qt={class:"app-g__coll-6-12"},Dt={class:"app-g"},Ot=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),Pt=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Per Diem")],-1)),Kt={class:"app-g__coll-6-12"},jt={class:"app-g"},Gt=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),Rt=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Nombre d'heures")],-1)),Ut={class:"app-g__coll-6-12"},zt={class:"app-g"},Lt=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),Xt=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Honoraires de montage et transport")],-1)),Jt={class:"app-g__coll-6-12"},Qt={class:"app-g"},Wt=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),Yt=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"\u21B3 nombre d\u2019heures")],-1)),Zt={class:"app-g__coll-6-12"},es={class:"app-g"},ts=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),ss=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Forfait par performance"),e("p",null,"\u21B3 nombre d\u2019occurences")],-1)),is={class:"app-g__coll-6-12"},os={class:"app-g"},as=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),ns=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"\xC9v\xE8nement avec pr\xE9paration"),e("p",null,"\u21B3 nombre d\u2019occurences")],-1)),ls={class:"app-g__coll-6-12"},cs={class:"app-g"},ps=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),us=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"\xC9v\xE8nement sans pr\xE9paration"),e("p",null,"\u21B3 nombre d\u2019occurences")],-1)),_s={class:"app-g__coll-6-12"},rs=o(()=>e("div",{class:"app-g"},[e("div",{class:"app-g__coll-6-12"}),e("div",{class:"app-g__coll-6-12"})],-1));function ds(t,i,a,n,u,_){const x=g("app-nav"),$=g("subsection-number"),k=g("subsection-option"),v=g("app-section"),h=g("app-checkbox"),p=g("app-number-value");return l(),c("div",Le,[s(x),Xe,Je,(l(!0),c(V,null,I(t.sections,E=>(l(),T(v,{title:E.value.title,index:E.value.index},{default:r(()=>[E.type==="number"?(l(!0),c(V,{key:0},I(E.value.subSections,N=>(l(),T($,{numberSubsection:N},null,8,["numberSubsection"]))),256)):S("",!0),E.type==="option"?(l(!0),c(V,{key:1},I(E.value.subSections,N=>(l(),T(k,{optionSubsection:N},null,8,["optionSubsection"]))),256)):S("",!0)]),_:2},1032,["title","index"]))),256)),Qe,s(v,{index:1,title:"Taille de la structure"},{default:r(()=>[e("div",We,[Ye,e("div",Ze,[s(h,{textValue:"Petite",description:"< 50 000 CHF /ann\xE9e",activated:!0})])]),e("div",et,[tt,e("div",st,[s(h,{textValue:"Moyenne",description:"50K\u2013250K CHF /ann\xE9e",activated:!0})])]),e("div",it,[ot,e("div",at,[s(h,{textValue:"Grande",description:"250K\u2013500K CHF /ann\xE9e",activated:!0})])]),e("div",nt,[lt,e("div",ct,[s(h,{activated:!0,textValue:"Tr\xE8s",description:"> 500K CHF /ann\xE9e"})])])]),_:1}),s(v,{index:2,title:"Type d\u2019exposition"},{default:r(()=>[e("div",pt,[ut,e("div",_t,[s(h,{activated:!0,textValue:"Solo"})])]),e("div",rt,[dt,e("div",vt,[s(h,{activated:!0,textValue:"2 \xE0 6 pers."})])]),e("div",ht,[mt,e("div",bt,[s(h,{activated:!0,textValue:"7 et plus"})])])]),_:1}),s(v,{index:3,title:"Honoraires de participation et/ou de conception"},{default:r(()=>[e("div",ft,[xt,e("div",gt,[s(h,{activated:!0,textValue:"Emploi d\u2019une ou plusieurs \u0153uvres existantes",info:"Si la pi\xE8ce a \xE9t\xE9 produite AVANT la proposition de participation \xE0 l\u2019exposition et qu\u2019il n\u2019y a pas de modifications \xE0 effectuer sur la pi\xE8ce pour la pr\xE9senter, cocher cette case."})])]),e("div",St,[$t,e("div",Et,[s(h,{activated:!0,textValue:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"})])]),e("div",yt,[wt,e("div",Ct,[s(h,{activated:!0,textValue:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"})])])]),_:1}),s(v,{index:4,title:"Dur\xE9e de l\u2019exposition (en mois)"},{default:r(()=>[e("div",kt,[Vt,e("div",At,[s(p,{"is-c-h-f-value":!1})])])]),_:1}),s(v,{index:5,title:"Honoraires de r\xE9alisation (si r\xE9alis\xE9 par l\u2019artiste)"},{default:r(()=>[e("div",Ft,[Nt,It,e("div",Tt,[s(p,{"is-c-h-f-value":!1}),s(p,{"is-c-h-f-value":!1})])]),e("div",Ht,[Mt,Bt,e("div",qt,[s(p,{"is-c-h-f-value":!1})])])]),_:1}),s(v,{index:6,title:"Per Diem"},{default:r(()=>[e("div",Dt,[Ot,Pt,e("div",Kt,[s(p,{"is-c-h-f-value":!0})])]),e("div",jt,[Gt,Rt,e("div",Ut,[s(p,{"is-c-h-f-value":!1})])])]),_:1}),s(v,{index:7,title:"Honoraires de montage et transport"},{default:r(()=>[e("div",zt,[Lt,Xt,e("div",Jt,[s(p,{"is-c-h-f-value":!1})])]),e("div",Qt,[Wt,Yt,e("div",Zt,[s(p,{"is-c-h-f-value":!1})])])]),_:1}),s(v,{index:8,title:"Forfait par performance"},{default:r(()=>[e("div",es,[ts,ss,e("div",is,[s(p,{"is-c-h-f-value":!1}),s(p,{"is-c-h-f-value":!1})])]),e("div",os,[as,ns,e("div",ls,[s(p,{"is-c-h-f-value":!1}),s(p,{"is-c-h-f-value":!1})])]),e("div",cs,[ps,us,e("div",_s,[s(p,{"is-c-h-f-value":!1}),s(p,{"is-c-h-f-value":!1})])])]),_:1}),s(v,{index:9,title:"Forfait texte / 1000 frappes"},{default:r(()=>[rs]),_:1})])}const bs=C(ze,[["render",ds],["__scopeId","data-v-48b4ffaa"]]);export{bs as default};
