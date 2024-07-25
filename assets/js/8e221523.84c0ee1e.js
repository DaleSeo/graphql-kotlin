"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8625],{12061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(74848),i=r(28453);const s={id:"spring-beans",title:"Automatically Created Beans",original_id:"spring-beans"},a=void 0,l={id:"spring-server/spring-beans",title:"Automatically Created Beans",description:"graphql-kotlin-spring-server automatically creates all the necessary beans to start GraphQL web server. Many of the beans are conditionally created and default behavior",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-beans.md",sourceDirName:"spring-server",slug:"/spring-server/spring-beans",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-beans",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-beans.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1721925847e3,frontMatter:{id:"spring-beans",title:"Automatically Created Beans",original_id:"spring-beans"},sidebar:"docs",previous:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"},next:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-properties"}},o={},c=[{value:"Schema Generation",id:"schema-generation",level:2},{value:"Execution",id:"execution",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," automatically creates all the necessary beans to start GraphQL web server. Many of the beans are conditionally created and default behavior\ncan be customized by providing custom beans in your application context. See sections below for the information about all automatically created beans."]}),"\n",(0,n.jsx)(t.h2,{id:"schema-generation",children:"Schema Generation"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Bean"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"FederatedSchemaGeneratorHooks"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Schema generator hooks used to build federated schema.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Created only if federation is enabled"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"FederatedSchemaGeneratorConfig"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Federated schema generator configuration information. You can customize the configuration by providing ",(0,n.jsx)(t.code,{children:"TopLevelNames"}),", ",(0,n.jsx)(t.code,{children:"FederatedSchemaGeneratorHooks"})," and ",(0,n.jsx)(t.code,{children:"KotlinDataFetcherFactoryProvider"})," beans.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.em,{children:["Created instead of default ",(0,n.jsx)(t.code,{children:"SchemaGeneratorConfig"})," if federation is enabled"]}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"FederatedTypeRegistry"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Default type registry without any resolvers. See ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/3.x.x/federated/type-resolution",children:"Federated Type Resolution"})," for more details.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Created only if federation is enabled. You should register your custom type registry bean whenever implementing federated GraphQL schema with extended types"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GraphQLSchema"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["GraphQL schema generated based on the schema generator configuration and  ",(0,n.jsx)(t.code,{children:"Query"}),", ",(0,n.jsx)(t.code,{children:"Mutation"})," and ",(0,n.jsx)(t.code,{children:"Subscription"})," objects available in the application context."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"KotlinDataFetcherFactoryProvider"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Factory used during schema construction to obtain ",(0,n.jsx)(t.code,{children:"DataFetcherFactory"})," that should be used for target function (using Spring aware ",(0,n.jsx)(t.code,{children:"SpringDataFetcher"}),") and property resolution."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SchemaGeneratorConfig"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Schema generator configuration information, see ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config",children:"Schema Generator Configuration"})," for details. Can be customized by providing ",(0,n.jsx)(t.code,{children:"TopLevelNames"}),", ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config",children:"SchemaGeneratorHooks"})," and ",(0,n.jsx)(t.code,{children:"KotlinDataFetcherFactoryProvider"})," beans."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Bean"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ContextWebFilter"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Default web filter that populates GraphQL context in the reactor subscriber context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"DataFetcherExceptionHandler"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["GraphQL exception handler used from the various execution strategies, defaults to ",(0,n.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/exception/KotlinDataFetcherExceptionHandler.kt",children:"KotlinDataFetcherExceptionHandler"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"DataLoaderRegistryFactory"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Factory used to create DataLoaderRegistry instance per query execution. See ",(0,n.jsx)(t.a,{href:"https://www.graphql-java.com/documentation/v14/batching/",children:"graphql-java documentation"})," for more details."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GraphQL"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["GraphQL query execution engine generated using ",(0,n.jsx)(t.code,{children:"GraphQLSchema"})," with default async execution strategies. GraphQL engine can be customized by optionally providing a list of ",(0,n.jsx)(t.a,{href:"https://www.graphql-java.com/documentation/v14/instrumentation/",children:"Instrumentation"})," beans (which can be ordered by implementing Spring Ordered interface), ",(0,n.jsx)(t.a,{href:"https://github.com/graphql-java/graphql-java/blob/3.x.x/src/main/java/graphql/execution/ExecutionIdProvider.java",children:"ExecutionIdProvider"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/graphql-java/graphql-java/blob/3.x.x/src/main/java/graphql/execution/preparsed/PreparsedDocumentProvider.java",children:"PreparsedDocumentProvider"})," in the application context."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GraphQLContextFactory"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Factory used by context WebFilter to generate GraphQL context based on the incoming request. GraphQL context can be any object. Defaults to empty ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context",children:"GraphQLContext"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"QueryHandler"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Handler invoked from GraphQL query route that executes the incoming request, defaults to ",(0,n.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/QueryHandler.kt",children:"SimpleQueryHandler"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SubscriptionHandler"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Web socket handler for executing GraphQL subscriptions, defaults to ",(0,n.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/SubscriptionHandler.kt#L49",children:"SimpleSubscriptionHandler"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.em,{children:["Created only if ",(0,n.jsx)(t.code,{children:"Subscription"})," bean is available in the context."]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"WebSocketHandlerAdapter"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["See ",(0,n.jsx)(t.a,{href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/socket/server/support/WebSocketHandlerAdapter.html",children:"Spring documentation"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.em,{children:["Created only if ",(0,n.jsx)(t.code,{children:"Subscription"})," bean is available in the context."]})]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The following beans are currently automatically created and cannot be disabled:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Default routes for GraphQL queries/mutations and SDL endpoint"}),"\n",(0,n.jsxs)(t.li,{children:["Default route for ",(0,n.jsx)(t.a,{href:"https://github.com/prisma-labs/graphql-playground",children:"Prisma Labs Playground"}),", created only if playground is enabled"]}),"\n",(0,n.jsxs)(t.li,{children:["Default ",(0,n.jsx)(t.code,{children:"ApolloSubscriptionProtocolHandler"})," for handling GraphQL subscriptions, created only if ",(0,n.jsx)(t.code,{children:"Subscription"})," bean is available in the context"]}),"\n",(0,n.jsxs)(t.li,{children:["Default ",(0,n.jsx)(t.code,{children:"SubscriptionWebSocketHandler"})," that utilizes above subscription protocol handler, created only if ",(0,n.jsx)(t.code,{children:"Subscription"})," bean is available in the context"]}),"\n",(0,n.jsxs)(t.li,{children:["Default subscription handler mapping, created only if ",(0,n.jsx)(t.code,{children:"Subscription"})," bean is available in the context"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);