"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[306],{2319:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>h,toc:()=>l});var r=s(87462),n=s(63366),o=(s(67294),s(3905)),a=(s(95657),["components"]),i={id:"http-request-response",title:"Access the HTTP Request-Response",original_id:"http-request-response"},p=void 0,h={unversionedId:"spring-server/http-request-response",id:"version-3.x.x/spring-server/http-request-response",title:"Access the HTTP Request-Response",description:'GraphQL is strongly typed and any data that is not part of the schema is no longer automatically known by the clients. Relying on this information becomes an "undocumented" part of your API. As a result, by default, GraphQL query resolvers do not have access to the raw HTTP request and response objects.',source:"@site/versioned_docs/version-3.x.x/spring-server/http-request-response.md",sourceDirName:"spring-server",slug:"/spring-server/http-request-response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/http-request-response.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"http-request-response",title:"Access the HTTP Request-Response",original_id:"http-request-response"},sidebar:"version-3.x.x/docs",previous:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/subscriptions"}},c={},l=[{value:"GraphQL Context",id:"graphql-context",level:2}],d={toc:l},u="wrapper";function g(e){var t=e.components,s=(0,n.Z)(e,a);return(0,o.kt)(u,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'GraphQL is strongly typed and any data that is not part of the schema is no longer automatically known by the clients. Relying on this information becomes an "undocumented" part of your API. As a result, by default, GraphQL query resolvers do not have access to the raw HTTP request and response objects.'),(0,o.kt)("p",null,"That being said, there are some common use cases (like authorization) that require inspecting HTTP headers."),(0,o.kt)("h2",{id:"graphql-context"},"GraphQL Context"),(0,o.kt)("p",null,"The most common way to access the raw HTTP request and response objects is to process them when creating the GraphQLContext through the Spring bean ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},"GraphQLContextFactory"),". Using the factory you can then extract the information from the incoming request and store it in the context so it can be accessed from any resolver."))}g.isMDXComponent=!0}}]);