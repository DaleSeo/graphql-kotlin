"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2773],{1981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=n(7462),s=n(3366),i=(n(7294),n(3905)),o=n(8561),l=["components"],a={id:"ktor-http-request-response",title:"HTTP request and response"},p=void 0,u={unversionedId:"server/ktor-server/ktor-http-request-response",id:"server/ktor-server/ktor-http-request-response",title:"HTTP request and response",description:"Ktor HTTP request/response can be intercepted by installing various plugins to your module or by intercepting specific",source:"@site/docs/server/ktor-server/ktor-http-request-response.md",sourceDirName:"server/ktor-server",slug:"/server/ktor-server/ktor-http-request-response",permalink:"/graphql-kotlin/docs/7.x.x/server/ktor-server/ktor-http-request-response",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/ktor-server/ktor-http-request-response.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1677182897,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{id:"ktor-http-request-response",title:"HTTP request and response"},sidebar:"docs",previous:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/7.x.x/server/ktor-server/ktor-graphql-context"},next:{title:"Ktor Plugin Configuration",permalink:"/graphql-kotlin/docs/7.x.x/server/ktor-server/ktor-configuration"}},c={},d=[{value:"Installing Additional Plugins",id:"installing-additional-plugins",level:2},{value:"Intercepting Pipeline Phases",id:"intercepting-pipeline-phases",level:2}],g={toc:d};function k(e){var t=e.components,n=(0,s.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ktor HTTP request/response can be intercepted by installing various plugins to your module or by intercepting specific\nphases of application call pipeline. By installing ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-server")," plugin you will configure following pipeline"),(0,i.kt)(o.G,{chart:"flowchart LR\n    A(Request) --\x3e B(ContentNegotiation)\n    B --\x3e C(Routing)\n    C --\x3e D(GraphQL)\n    D --\x3e E(Response)",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"installing-additional-plugins"},"Installing Additional Plugins"),(0,i.kt)("p",null,"You can install additional plugins in your module next to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQL")," module. See ",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/docs/plugins.html"},"Ktor docs"),"\nfor details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun Application.myModule() {\n    // install additional plugins\n    install(CORS)\n\n    // install graphql plugin\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(TestQuery())\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"intercepting-pipeline-phases"},"Intercepting Pipeline Phases"),(0,i.kt)("p",null,"You can intercept requests/responses in various phases of application call pipeline by specifying an interceptor. See\n",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/docs/custom-plugins-base-api.html#call-handling"},"Ktor docs")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun Application.myModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(TestQuery())\n        }\n    }\n\n    intercept(ApplicationCallPipeline.Monitoring) {\n        call.request.origin.apply {\n            println("Request URL: $scheme://$localHost:$localPort$uri")\n        }\n    }\n}\n')))}k.isMDXComponent=!0}}]);