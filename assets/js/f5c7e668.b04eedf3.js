"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7873],{90386:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=o(74848),i=o(28453);const s={id:"subscriptions",title:"Subscriptions"},r=void 0,c={id:"schema-generator/execution/subscriptions",title:"Subscriptions",description:"Subscriptions are supported with graphql-java. See their documentation first:",source:"@site/docs/schema-generator/execution/subscriptions.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/subscriptions",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/execution/subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/execution/optional-undefined-arguments"},next:{title:"Introspection",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/execution/introspection"}},a={},l=[{value:"Flow Support",id:"flow-support",level:2},{value:"Subscription Hooks",id:"subscription-hooks",level:2},{value:"<code>willResolveMonad</code>",id:"willresolvemonad",level:3},{value:"<code>didGenerateSubscriptionType</code>",id:"didgeneratesubscriptiontype",level:3},{value:"<code>isValidSubscriptionReturnType</code>",id:"isvalidsubscriptionreturntype",level:3},{value:"Server Implementation",id:"server-implementation",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Subscriptions are supported with ",(0,n.jsx)(t.code,{children:"graphql-java"}),". See their documentation first:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.graphql-java.com/documentation/subscriptions",children:"https://www.graphql-java.com/documentation/subscriptions"})}),"\n",(0,n.jsxs)(t.p,{children:["To make a function a subscription function you just have to have the return type wrapped in an implementation of a\nreactive-streams ",(0,n.jsx)(t.code,{children:"Publisher<T>"}),". As an example, here is a function that uses Spring WebFlux to return a random number every\nsecond. Since ",(0,n.jsx)(t.code,{children:"Flux"})," is an implementation of ",(0,n.jsx)(t.code,{children:"Publisher"})," this is a valid method."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"fun counter(): Flux<Int> = Flux.interval(Duration.ofSeconds(1)).map { Random.nextInt() }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then in the ",(0,n.jsx)(t.code,{children:"toSchema"})," method you just have to provide a ",(0,n.jsx)(t.code,{children:"List<TopLevelObject>"})," the same way as queries and mutations\nare provided with the ",(0,n.jsx)(t.code,{children:"subscriptions"})," argument."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"toSchema(\n    config = schemaConfig,\n    queries = queries.toTopLevelObjects(),\n    mutations = mutations.toTopLevelObjects(),\n    subscriptions = subscriptions.toTopLevelObjects()\n)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"flow-support",children:"Flow Support"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"graphql-kotlin"})," provides support for Kotlin ",(0,n.jsx)(t.code,{children:"Flow"})," through ",(0,n.jsx)(t.code,{children:"FlowSubscriptionSchemaGeneratorHooks"})," and ",(0,n.jsx)(t.code,{children:"FlowSubscriptionExecutionStrategy"}),".\nBoth hooks and execution strategy have to be configured in order to support ",(0,n.jsx)(t.code,{children:"Flow"})," in your GraphQL server."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FlowSubscriptionSchemaGeneratorHooks"})," are custom hooks that provide support for using ",(0,n.jsx)(t.code,{children:"Flow"})," return type within the\nGraphQL server."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FlowSubscriptionExecutionStrategy"})," is a reimplementation of the ",(0,n.jsx)(t.code,{children:"graphql-java"})," default ",(0,n.jsx)(t.code,{children:"SubscriptionExecutionStrategy"}),"\nthat adds support for handling Kotlin ",(0,n.jsx)(t.code,{children:"Flow"})," types. Thanks to the Kotlin coroutines interoperability, this strategy works\nwith any ",(0,n.jsx)(t.code,{children:"Publisher"})," and will automatically convert any ",(0,n.jsx)(t.code,{children:"Flow"}),"s to a ",(0,n.jsx)(t.code,{children:"Publisher"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"subscription-hooks",children:"Subscription Hooks"}),"\n",(0,n.jsx)(t.h3,{id:"willresolvemonad",children:(0,n.jsx)(t.code,{children:"willResolveMonad"})}),"\n",(0,n.jsxs)(t.p,{children:["This hooks is called before resolving Kotlin return type to a GraphQL type and can be used to provide support for additional\nmonads (e.g. Kotlin ",(0,n.jsx)(t.code,{children:"Flow"}),")."]}),"\n",(0,n.jsx)(t.h3,{id:"didgeneratesubscriptiontype",children:(0,n.jsx)(t.code,{children:"didGenerateSubscriptionType"})}),"\n",(0,n.jsx)(t.p,{children:"This hook is called after a new subscription type is generated but before it is added to the schema. The other generator\nhooks are still called so you can add logic for the types and validation of subscriptions the same as queries and mutations."}),"\n",(0,n.jsx)(t.h3,{id:"isvalidsubscriptionreturntype",children:(0,n.jsx)(t.code,{children:"isValidSubscriptionReturnType"})}),"\n",(0,n.jsxs)(t.p,{children:["This hook is called when generating the functions for each subscription. It allows for changing the rules of what classes\ncan be used as the return type. By default, graphql-java supports ",(0,n.jsx)(t.code,{children:"org.reactivestreams.Publisher"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To effectively use this hook, you should also override the ",(0,n.jsx)(t.code,{children:"willResolveMonad"})," hook to support the additional subscription\nreturn type. Your GraphQL server may also require a custom subscription execution strategy in order to process it at runtime."]}),"\n",(0,n.jsx)(t.h2,{id:"server-implementation",children:"Server Implementation"}),"\n",(0,n.jsxs)(t.p,{children:["The server that runs your GraphQL schema will have to support some method for subscriptions, like WebSockets.\n",(0,n.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," provides a default WebSocket based implementation. See more details in the\n",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/8.x.x/server/server-subscriptions",children:"server documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>c});var n=o(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);