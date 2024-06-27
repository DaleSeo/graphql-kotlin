"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4959],{61206:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453);const t={id:"spring-subscriptions",title:"Subscriptions"},i=void 0,c={id:"server/spring-server/spring-subscriptions",title:"Subscriptions",description:"_To see more details on how to implement subscriptions in your schema, see the schema generator docs on executing subscriptions.",source:"@site/versioned_docs/version-7.x.x/server/spring-server/spring-subscriptions.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/server/spring-server/spring-subscriptions.md",tags:[],version:"7.x.x",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"spring-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/server/spring-server/spring-properties"},next:{title:"Ktor Server Overview",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-overview"}},p={},l=[{value:"Flow Support",id:"flow-support",level:2},{value:"Subscription Protocols",id:"subscription-protocols",level:2},{value:"<code>graphql-transport-ws</code> subprotocol",id:"graphql-transport-ws-subprotocol",level:3},{value:"(deprecated) <code>subscriptions-transport-ws</code> subprotocol",id:"deprecated-subscriptions-transport-ws-subprotocol",level:3},{value:"Subscription Hooks",id:"subscription-hooks",level:2},{value:"<code>onConnect</code> / <code>onConnectWithContext</code>",id:"onconnect--onconnectwithcontext",level:3},{value:"<code>onOperation</code> / <code>onOperationWithContext</code>",id:"onoperation--onoperationwithcontext",level:3},{value:"<code>onOperationComplete</code>",id:"onoperationcomplete",level:3},{value:"<code>onDisconnect</code>",id:"ondisconnect",level:3},{value:"Example",id:"example",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:(0,s.jsxs)(o.em,{children:["To see more details on how to implement subscriptions in your schema, see the schema generator docs on ",(0,s.jsx)(o.a,{href:"/graphql-kotlin/docs/schema-generator/execution/subscriptions",children:"executing subscriptions"}),".\nThis page lists the ",(0,s.jsx)(o.code,{children:"graphql-kotlin-spring-server"})," specific features."]})}),"\n",(0,s.jsx)(o.h2,{id:"flow-support",children:"Flow Support"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"graphql-kotlin-spring-server"})," provides automatic support for Kotlin ",(0,s.jsx)(o.code,{children:"Flow"})," by automatically configuring ",(0,s.jsx)(o.code,{children:"FlowSubscriptionSchemaGeneratorHooks"}),"\nand ",(0,s.jsx)(o.code,{children:"FlowSubscriptionExecutionStrategy"})," beans."]}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["If you define your subscriptions using Kotlin ",(0,s.jsx)(o.code,{children:"Flow"}),", make sure to extend ",(0,s.jsx)(o.code,{children:"FlowSubscriptionSchemaGeneratorHooks"})," whenever you need to provide some custom hooks."]})}),"\n",(0,s.jsx)(o.h2,{id:"subscription-protocols",children:"Subscription Protocols"}),"\n",(0,s.jsxs)(o.h3,{id:"graphql-transport-ws-subprotocol",children:[(0,s.jsx)(o.code,{children:"graphql-transport-ws"})," subprotocol"]}),"\n",(0,s.jsxs)(o.p,{children:["We have implemented subscriptions in Spring WebSockets following the ",(0,s.jsxs)(o.a,{href:"https://github.com/enisdenjo/graphql-ws",children:[(0,s.jsx)(o.code,{children:"graphql-transport-ws"})," subprotocol"]}),"\nfrom ",(0,s.jsx)(o.a,{href:"https://the-guild.dev/",children:"The Guild"}),". This requires that your client send and parse messages in a specific format.\nSee protocol documentation for expected messages."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"graphql-transport-ws"})," is the default subscription protocol that is enabled by default."]}),"\n",(0,s.jsxs)(o.h3,{id:"deprecated-subscriptions-transport-ws-subprotocol",children:["(deprecated) ",(0,s.jsx)(o.code,{children:"subscriptions-transport-ws"})," subprotocol"]}),"\n",(0,s.jsx)(o.admonition,{type:"caution",children:(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"subscriptions-transport-ws"})," was deprecated in favor of ",(0,s.jsxs)(o.a,{href:"https://github.com/enisdenjo/graphql-ws",children:[(0,s.jsx)(o.code,{children:"graphql-transport-ws"})," protocol"]}),"."]})}),"\n",(0,s.jsxs)(o.p,{children:["We have implemented subscriptions in Spring WebSockets following the ",(0,s.jsxs)(o.a,{href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md",children:[(0,s.jsx)(o.code,{children:"subscriptions-transport-ws"})," subprotocol"]}),"\ndefined by ",(0,s.jsx)(o.a,{href:"https://www.apollographql.com/",children:"Apollo"}),". This requires that your client send and parse messages in a specific\nformat. See protocol documentation for expected messages."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"subscription-transport-ws"})," is deprecated. In order to use it, you need to explicitly opt-in by specifying ",(0,s.jsx)(o.code,{children:"graphql.subscriptions.protocol=APOLLO_SUBSCRIPTIONS_WS"}),"\nconfiguration property. Support for this protocol will be removed in the next major release."]}),"\n",(0,s.jsx)(o.h2,{id:"subscription-hooks",children:"Subscription Hooks"}),"\n",(0,s.jsxs)(o.p,{children:["In line with the Apollo protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle.\nIf you would like to implement your own subscription hooks, you can provide a primary spring bean for ",(0,s.jsx)(o.code,{children:"ApolloSubscriptionHooks"})," that overrides the ",(0,s.jsx)(o.a,{href:"/graphql-kotlin/docs/server/spring-server/spring-beans",children:"default one"})," which do not perform any actions."]}),"\n",(0,s.jsxs)(o.h3,{id:"onconnect--onconnectwithcontext",children:[(0,s.jsx)(o.code,{children:"onConnect"})," / ",(0,s.jsx)(o.code,{children:"onConnectWithContext"})]}),"\n",(0,s.jsxs)(o.p,{children:["Allows validation of connectionParams prior to starting the connection.\nYou can reject the connection by throwing an exception.\nIf you need to forward state to execution, update and return the ",(0,s.jsx)(o.a,{href:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context",children:"GraphQLContext"}),"."]}),"\n",(0,s.jsxs)(o.h3,{id:"onoperation--onoperationwithcontext",children:[(0,s.jsx)(o.code,{children:"onOperation"})," / ",(0,s.jsx)(o.code,{children:"onOperationWithContext"})]}),"\n",(0,s.jsx)(o.p,{children:"Called when the client executes a GraphQL operation. The context can not be updated here, it is read only."}),"\n",(0,s.jsx)(o.h3,{id:"onoperationcomplete",children:(0,s.jsx)(o.code,{children:"onOperationComplete"})}),"\n",(0,s.jsx)(o.p,{children:"Called when client's unsubscribes"}),"\n",(0,s.jsx)(o.h3,{id:"ondisconnect",children:(0,s.jsx)(o.code,{children:"onDisconnect"})}),"\n",(0,s.jsx)(o.p,{children:"Called when the client disconnects"}),"\n",(0,s.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(o.p,{children:["You can see an example implementation of a ",(0,s.jsx)(o.code,{children:"Subscription"})," in the ",(0,s.jsx)(o.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/subscriptions/SimpleSubscription.kt",children:"example app"}),"."]})]})}function a(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>c});var s=n(96540);const r={},t=s.createContext(r);function i(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);