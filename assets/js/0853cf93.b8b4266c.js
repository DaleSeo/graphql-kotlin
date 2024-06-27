"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5024],{33825:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=t(74848),i=t(28453);const s={id:"spring-properties",title:"Configuration Properties"},d=void 0,l={id:"server/spring-server/spring-properties",title:"Configuration Properties",description:"graphql-kotlin-spring-server relies",source:"@site/docs/server/spring-server/spring-properties.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-properties",permalink:"/graphql-kotlin/docs/8.x.x/server/spring-server/spring-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-properties.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1719501861,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"spring-properties",title:"Configuration Properties"},sidebar:"docs",previous:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/8.x.x/server/spring-server/spring-beans"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/8.x.x/server/spring-server/spring-subscriptions"}},a={},o=[];function c(e){const r={a:"a",code:"code",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"graphql-kotlin-spring-server"})," relies\non ",(0,n.jsx)(r.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/servers/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/server/spring/GraphQLConfigurationProperties.kt",children:"GraphQLConfigurationProperties"}),"\nto provide various customizations of the auto-configuration library. All applicable configuration properties\nexpose ",(0,n.jsx)(r.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/configuration-metadata.html",children:"configuration\nmetadata"})," that provide\ndetails on the supported configuration properties."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.endpoint"}),(0,n.jsx)(r.td,{children:"GraphQL server endpoint"}),(0,n.jsx)(r.td,{children:"graphql"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.packages"}),(0,n.jsx)(r.td,{children:"List of supported packages that can contain GraphQL schema type definitions"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.printSchema"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to print the schema after generator creates it"}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.federation.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to generate federated GraphQL model"}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.federation.tracing.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether add federated tracing data to the extensions"}),(0,n.jsx)(r.td,{children:"true (if federation enabled)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.federation.tracing.debug"}),(0,n.jsx)(r.td,{children:"Boolean flag to log debug info in the federated tracing"}),(0,n.jsx)(r.td,{children:"false (if federation enabled)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.introspection.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether introspection queries are enabled"}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.playground.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to enable Prisma Labs Playground GraphQL IDE"}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.playground.endpoint"}),(0,n.jsx)(r.td,{children:"Prisma Labs Playground GraphQL IDE endpoint"}),(0,n.jsx)(r.td,{children:"playground"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.graphiql.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to enable GraphiQL GraphQL IDE"}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.graphiql.endpoint"}),(0,n.jsx)(r.td,{children:"Prisma Labs Playground GraphQL IDE endpoint"}),(0,n.jsx)(r.td,{children:"graphiql"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.sdl.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to expose SDL endpoint"}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.sdl.endpoint"}),(0,n.jsx)(r.td,{children:"GraphQL SDL endpoint"}),(0,n.jsx)(r.td,{children:"sdl"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.subscriptions.connectionInitTimeout"}),(0,n.jsx)(r.td,{children:"Server timeout (in milliseconds) between establishing web socket connection and receiving connection-init message"}),(0,n.jsx)(r.td,{children:"60_000"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.subscriptions.endpoint"}),(0,n.jsx)(r.td,{children:"GraphQL subscriptions endpoint"}),(0,n.jsx)(r.td,{children:"subscriptions"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.subscriptions.keepAliveInterval"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"Deprecated"}),". Keep the websocket alive and send a message to the client every interval in ms. Defaults to not sending messages"]}),(0,n.jsx)(r.td,{children:"null"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.subscriptions.protocol"}),(0,n.jsx)(r.td,{children:"WebSocket based subscription protocol. Supported protocols: APOLLO_SUBSCRIPTIONS_WS / GRAPHQL_WS"}),(0,n.jsx)(r.td,{children:"GRAPHQL_WS"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.batching.enabled"}),(0,n.jsx)(r.td,{children:"Boolean flag indicating whether to enable custom dataloader instrumentations for 1 or more GraphQL Operations"}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"graphql.batching.strategy"}),(0,n.jsx)(r.td,{children:"Configure which custom dataloader instrumentation will be used"}),(0,n.jsx)(r.td,{children:"SYNC_EXHAUSTION"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>l});var n=t(96540);const i={},s=n.createContext(i);function d(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);