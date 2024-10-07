"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6689],{39429:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(74848),i=t(28453);const s={id:"spring-properties",title:"Configuration Properties"},d=void 0,o={id:"server/spring-server/spring-properties",title:"Configuration Properties",description:"graphql-kotlin-spring-server relies on GraphQLConfigurationProperties",source:"@site/versioned_docs/version-5.x.x/server/spring-server/spring-properties.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-properties",permalink:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/server/spring-server/spring-properties.md",tags:[],version:"5.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1728268554e3,frontMatter:{id:"spring-properties",title:"Configuration Properties"},sidebar:"docs",previous:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-beans"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-subscriptions"}},a={},l=[];function p(e){const r={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"graphql-kotlin-spring-server"})," relies on ",(0,n.jsx)(r.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/servers/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/server/spring/GraphQLConfigurationProperties.kt",children:"GraphQLConfigurationProperties"}),"\nto provide various customizations of the auto-configuration library. All applicable configuration properties expose ",(0,n.jsx)(r.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/configuration-metadata.html",children:"configuration\nmetadata"})," that provide\ndetails on the supported configuration properties."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.endpoint"}),(0,n.jsx)(r.td,{children:"GraphQL server endpoint"}),(0,n.jsx)(r.td,{children:"graphql"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.packages"}),(0,n.jsx)(r.td,{children:"List of supported packages that can contain GraphQL schema type definitions"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.federation.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to generate federated GraphQL model"}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.federation.tracing.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether add federated tracing data to the extensions"}),(0,n.jsx)(r.td,{children:"true (if federation enabled)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.federation.tracing.debug"}),(0,n.jsx)(r.td,{children:"Boolean flag to log debug info in the federated tracing"}),(0,n.jsx)(r.td,{children:"false (if federation enabled)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.introspection.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether introspection queries are enabled"}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.playground.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to enabled Prisma Labs Playground GraphQL IDE"}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.playground.endpoint"}),(0,n.jsx)(r.td,{children:"Prisma Labs Playground GraphQL IDE endpoint"}),(0,n.jsx)(r.td,{children:"playground"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.sdl.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to expose SDL endpoint"}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.sdl.endpoint"}),(0,n.jsx)(r.td,{children:"GraphQL SDL endpoint"}),(0,n.jsx)(r.td,{children:"sdl"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.subscriptions.endpoint"}),(0,n.jsx)(r.td,{children:"GraphQL subscriptions endpoint"}),(0,n.jsx)(r.td,{children:"subscriptions"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.subscriptions.keepAliveInterval"}),(0,n.jsx)(r.td,{children:"Keep the websocket alive and send a message to the client every interval in ms. Defaults to not sending messages"}),(0,n.jsx)(r.td,{children:"null"})]})]})]})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var n=t(96540);const i={},s=n.createContext(i);function d(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);