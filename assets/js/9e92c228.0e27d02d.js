"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,c=u["".concat(p,".").concat(m)]||u[m]||g[m]||l;return r?n.createElement(c,i(i({ref:t},d),{},{components:r})):n.createElement(c,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={id:"spring-properties",title:"Configuration Properties"},p=void 0,s={unversionedId:"server/spring-server/spring-properties",id:"version-6.x.x/server/spring-server/spring-properties",title:"Configuration Properties",description:"graphql-kotlin-spring-server relies on GraphQLConfigurationProperties",source:"@site/versioned_docs/version-6.x.x/server/spring-server/spring-properties.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-properties",permalink:"/graphql-kotlin/docs/server/spring-server/spring-properties",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/spring-server/spring-properties.md",tags:[],version:"6.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1673990222,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"spring-properties",title:"Configuration Properties"},sidebar:"docs",previous:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/server/spring-server/spring-beans"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"}},d={},g=[],u={toc:g};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," relies on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/servers/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/server/spring/GraphQLConfigurationProperties.kt"},"GraphQLConfigurationProperties"),"\nto provide various customizations of the auto-configuration library. All applicable configuration properties expose ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/configuration-metadata.html"},"configuration\nmetadata")," that provide\ndetails on the supported configuration properties."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL server endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"graphql")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.packages"),(0,l.kt)("td",{parentName:"tr",align:null},"List of supported packages that can contain GraphQL schema type definitions"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.federation.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to generate federated GraphQL model"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.federation.optInV2"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to generate Federation v2 GraphQL model"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.federation.tracing.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether add federated tracing data to the extensions"),(0,l.kt)("td",{parentName:"tr",align:null},"true (if federation enabled)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.federation.tracing.debug"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag to log debug info in the federated tracing"),(0,l.kt)("td",{parentName:"tr",align:null},"false (if federation enabled)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.introspection.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether introspection queries are enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.playground.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to enabled Prisma Labs Playground GraphQL IDE"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.playground.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Prisma Labs Playground GraphQL IDE endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"playground")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.sdl.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to expose SDL endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.sdl.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL SDL endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"sdl")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.subscriptions.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL subscriptions endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"subscriptions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.subscriptions.keepAliveInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"Keep the websocket alive and send a message to the client every interval in ms. Defaults to not sending messages"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.batching.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to enable custom dataloader instrumentations for 1 or more GraphQL Operations"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.batching.strategy"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure which custom dataloader instrumentation will be used (LEVEL_DISPATCHED or SYNC_EXHAUSTION)"),(0,l.kt)("td",{parentName:"tr",align:null},"LEVEL_DISPATCHED")))))}m.isMDXComponent=!0}}]);