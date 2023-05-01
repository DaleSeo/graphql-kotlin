"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1256],{46461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(95657),["components"]),s={id:"ktor-graphql-context",title:"Generating GraphQL Context"},p=void 0,l={unversionedId:"server/ktor-server/ktor-graphql-context",id:"server/ktor-server/ktor-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-ktor-server provides a Ktor specific implementation of GraphQLContextFactory",source:"@site/docs/server/ktor-server/ktor-graphql-context.md",sourceDirName:"server/ktor-server",slug:"/server/ktor-server/ktor-graphql-context",permalink:"/graphql-kotlin/docs/7.x.x/server/ktor-server/ktor-graphql-context",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/ktor-server/ktor-graphql-context.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"ktor-graphql-context",title:"Generating GraphQL Context"},sidebar:"docs",previous:{title:"Writing Schemas with Ktor",permalink:"/graphql-kotlin/docs/7.x.x/server/ktor-server/ktor-schema"},next:{title:"HTTP request and response",permalink:"/graphql-kotlin/docs/7.x.x/server/ktor-server/ktor-http-request-response"}},c={},u=[{value:"Federated Context",id:"federated-context",level:2}],d={toc:u},h="wrapper";function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-server")," provides a Ktor specific implementation of ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/graphql-context-factory"},"GraphQLContextFactory"),"\nand the context."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"KtorGraphQLContextFactory")," - Generates GraphQL context map with federated tracing information per request")),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-server"),", you should extend ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultKtorGraphQLContextFactory")," to automatically\nsupport federated tracing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CustomGraphQLContextFactory : DefaultKtorGraphQLContextFactory() {\n    override suspend fun generateContext(request: ApplicationRequest): GraphQLContext =\n        super.generateContext(request).plus(\n            mapOf("myCustomValue" to (request.headers["my-custom-header"] ?: "defaultContext"))\n        )\n}\n\nfun Application.graphQLModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(...)\n        }\n        server {\n            contextFactory = CustomGraphQLContextFactory()\n        }\n    }\n    routing {\n        graphQLPostRoute()\n    }\n}\n')),(0,o.kt)("p",null,"Once your application is configured to build your custom GraphQL context, you can then access it through a data fetching\nenvironment argument. While executing the query, data fetching environment will be automatically injected to the function input arguments.\nThis argument will not appear in the GraphQL schema."),(0,o.kt)("p",null,"For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/contextual-data"},"Contextual Data Documentation"),"."),(0,o.kt)("h2",{id:"federated-context"},"Federated Context"),(0,o.kt)("p",null,"If you need ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/federation/federation-tracing"},"federation tracing support"),", you can set the appropriate\n",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/ktor-server/ktor-configuration"},"configuration properties"),". The provided ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultKtorGraphQLContextFactory")," populates the required\ninformation for federated tracing, so as long as you extend this context class you will maintain feature support."))}k.isMDXComponent=!0}}]);