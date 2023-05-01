"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5917],{64150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),s=(n(95657),["components"]),p={id:"spring-subscriptions",title:"Subscriptions"},a=void 0,l={unversionedId:"server/spring-server/spring-subscriptions",id:"version-6.x.x/server/spring-server/spring-subscriptions",title:"Subscriptions",description:"_To see more details on how to implement subscriptions in your schema, see the schema generator docs on executing subscriptions.",source:"@site/versioned_docs/version-6.x.x/server/spring-server/spring-subscriptions.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/spring-server/spring-subscriptions.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"spring-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/server/spring-server/spring-properties"},next:{title:"Client Overview",permalink:"/graphql-kotlin/docs/client/client-overview"}},c={},d=[{value:"Flow Support",id:"flow-support",level:2},{value:"<code>subscriptions-transport-ws</code> subprotocol",id:"subscriptions-transport-ws-subprotocol",level:2},{value:"Subscription Hooks",id:"subscription-hooks",level:2},{value:"<code>onConnect</code> / <code>onConnectWithContext</code>",id:"onconnect--onconnectwithcontext",level:3},{value:"<code>onOperation</code> / <code>onOperationWithContext</code>",id:"onoperation--onoperationwithcontext",level:3},{value:"<code>onOperationComplete</code>",id:"onoperationcomplete",level:3},{value:"<code>onDisconnect</code>",id:"ondisconnect",level:3},{value:"Example",id:"example",level:2}],u={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"To see more details on how to implement subscriptions in your schema, see the schema generator docs on ",(0,r.kt)("a",{parentName:"em",href:"/graphql-kotlin/docs/schema-generator/execution/subscriptions"},"executing subscriptions"),".\nThis page lists the ",(0,r.kt)("inlineCode",{parentName:"em"},"graphql-kotlin-spring-server")," specific features.")),(0,r.kt)("h2",{id:"flow-support"},"Flow Support"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides automatic support for Kotlin ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," by automatically configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionSchemaGeneratorHooks"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy")," beans."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you define your subscriptions using Kotlin ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),", make sure to extend ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionSchemaGeneratorHooks")," whenever you need to provide some custom hooks.")),(0,r.kt)("h2",{id:"subscriptions-transport-ws-subprotocol"},(0,r.kt)("inlineCode",{parentName:"h2"},"subscriptions-transport-ws")," subprotocol"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"subscriptions-transport-ws")," was deprecated in favor of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},(0,r.kt)("inlineCode",{parentName:"a"},"graphql-ws")," protocol"),".")),(0,r.kt)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},(0,r.kt)("inlineCode",{parentName:"a"},"subscriptions-transport-ws")," subprotocol")," defined by Apollo.\nThis requires that your client send and parse messages in a specific format."),(0,r.kt)("p",null,"If you would like to implement your own subscription handler, you can provide a primary spring bean for ",(0,r.kt)("inlineCode",{parentName:"p"},"HandlerMapping")," that overrides the ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-beans"},"default one")," which sets the url for subscriptions to the Apollo subscription handler."),(0,r.kt)("h2",{id:"subscription-hooks"},"Subscription Hooks"),(0,r.kt)("p",null,"In line with the Apollo protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle.\nIf you would like to implement your own subscription hooks, you can provide a primary spring bean for ",(0,r.kt)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-beans"},"default one")," which do not perform any actions."),(0,r.kt)("h3",{id:"onconnect--onconnectwithcontext"},(0,r.kt)("inlineCode",{parentName:"h3"},"onConnect")," / ",(0,r.kt)("inlineCode",{parentName:"h3"},"onConnectWithContext")),(0,r.kt)("p",null,"Allows validation of connectionParams prior to starting the connection.\nYou can reject the connection by throwing an exception.\nIf you need to forward state to execution, update and return the ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"},"GraphQLContext"),"."),(0,r.kt)("h3",{id:"onoperation--onoperationwithcontext"},(0,r.kt)("inlineCode",{parentName:"h3"},"onOperation")," / ",(0,r.kt)("inlineCode",{parentName:"h3"},"onOperationWithContext")),(0,r.kt)("p",null,"Called when the client executes a GraphQL operation. The context can not be updated here, it is read only."),(0,r.kt)("h3",{id:"onoperationcomplete"},(0,r.kt)("inlineCode",{parentName:"h3"},"onOperationComplete")),(0,r.kt)("p",null,"Called when client's unsubscribes"),(0,r.kt)("h3",{id:"ondisconnect"},(0,r.kt)("inlineCode",{parentName:"h3"},"onDisconnect")),(0,r.kt)("p",null,"Called when the client disconnects"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"You can see an example implementation of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/subscriptions/SimpleSubscription.kt"},"example app"),"."))}m.isMDXComponent=!0}}]);