"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5109],{35050:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=o(74848),r=o(28453);const i={id:"spring-subscriptions",title:"Subscriptions"},t=void 0,c={id:"server/spring-server/spring-subscriptions",title:"Subscriptions",description:"_To see more details on how to implement subscriptions in your schema, see the schema generator docs on executing subscriptions.",source:"@site/versioned_docs/version-6.x.x/server/spring-server/spring-subscriptions.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-subscriptions",permalink:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/spring-server/spring-subscriptions.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1719501861,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"spring-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-properties"},next:{title:"Client Overview",permalink:"/graphql-kotlin/docs/6.x.x/client/client-overview"}},p={},l=[{value:"Flow Support",id:"flow-support",level:2},{value:"<code>subscriptions-transport-ws</code> subprotocol",id:"subscriptions-transport-ws-subprotocol",level:2},{value:"Subscription Hooks",id:"subscription-hooks",level:2},{value:"<code>onConnect</code> / <code>onConnectWithContext</code>",id:"onconnect--onconnectwithcontext",level:3},{value:"<code>onOperation</code> / <code>onOperationWithContext</code>",id:"onoperation--onoperationwithcontext",level:3},{value:"<code>onOperationComplete</code>",id:"onoperationcomplete",level:3},{value:"<code>onDisconnect</code>",id:"ondisconnect",level:3},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["To see more details on how to implement subscriptions in your schema, see the schema generator docs on ",(0,s.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/execution/subscriptions",children:"executing subscriptions"}),".\nThis page lists the ",(0,s.jsx)(n.code,{children:"graphql-kotlin-spring-server"})," specific features."]})}),"\n",(0,s.jsx)(n.h2,{id:"flow-support",children:"Flow Support"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"graphql-kotlin-spring-server"})," provides automatic support for Kotlin ",(0,s.jsx)(n.code,{children:"Flow"})," by automatically configuring ",(0,s.jsx)(n.code,{children:"FlowSubscriptionSchemaGeneratorHooks"}),"\nand ",(0,s.jsx)(n.code,{children:"FlowSubscriptionExecutionStrategy"})," beans."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you define your subscriptions using Kotlin ",(0,s.jsx)(n.code,{children:"Flow"}),", make sure to extend ",(0,s.jsx)(n.code,{children:"FlowSubscriptionSchemaGeneratorHooks"})," whenever you need to provide some custom hooks."]})}),"\n",(0,s.jsxs)(n.h2,{id:"subscriptions-transport-ws-subprotocol",children:[(0,s.jsx)(n.code,{children:"subscriptions-transport-ws"})," subprotocol"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"subscriptions-transport-ws"})," was deprecated in favor of ",(0,s.jsxs)(n.a,{href:"https://github.com/enisdenjo/graphql-ws",children:[(0,s.jsx)(n.code,{children:"graphql-ws"})," protocol"]}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["We have implemented subscriptions in Spring WebSockets following the ",(0,s.jsxs)(n.a,{href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md",children:[(0,s.jsx)(n.code,{children:"subscriptions-transport-ws"})," subprotocol"]})," defined by Apollo.\nThis requires that your client send and parse messages in a specific format."]}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to implement your own subscription handler, you can provide a primary spring bean for ",(0,s.jsx)(n.code,{children:"HandlerMapping"})," that overrides the ",(0,s.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-beans",children:"default one"})," which sets the url for subscriptions to the Apollo subscription handler."]}),"\n",(0,s.jsx)(n.h2,{id:"subscription-hooks",children:"Subscription Hooks"}),"\n",(0,s.jsxs)(n.p,{children:["In line with the Apollo protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle.\nIf you would like to implement your own subscription hooks, you can provide a primary spring bean for ",(0,s.jsx)(n.code,{children:"ApolloSubscriptionHooks"})," that overrides the ",(0,s.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-beans",children:"default one"})," which do not perform any actions."]}),"\n",(0,s.jsxs)(n.h3,{id:"onconnect--onconnectwithcontext",children:[(0,s.jsx)(n.code,{children:"onConnect"})," / ",(0,s.jsx)(n.code,{children:"onConnectWithContext"})]}),"\n",(0,s.jsxs)(n.p,{children:["Allows validation of connectionParams prior to starting the connection.\nYou can reject the connection by throwing an exception.\nIf you need to forward state to execution, update and return the ",(0,s.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-graphql-context",children:"GraphQLContext"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"onoperation--onoperationwithcontext",children:[(0,s.jsx)(n.code,{children:"onOperation"})," / ",(0,s.jsx)(n.code,{children:"onOperationWithContext"})]}),"\n",(0,s.jsx)(n.p,{children:"Called when the client executes a GraphQL operation. The context can not be updated here, it is read only."}),"\n",(0,s.jsx)(n.h3,{id:"onoperationcomplete",children:(0,s.jsx)(n.code,{children:"onOperationComplete"})}),"\n",(0,s.jsx)(n.p,{children:"Called when client's unsubscribes"}),"\n",(0,s.jsx)(n.h3,{id:"ondisconnect",children:(0,s.jsx)(n.code,{children:"onDisconnect"})}),"\n",(0,s.jsx)(n.p,{children:"Called when the client disconnects"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["You can see an example implementation of a ",(0,s.jsx)(n.code,{children:"Subscription"})," in the ",(0,s.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/subscriptions/SimpleSubscription.kt",children:"example app"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var s=o(96540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);