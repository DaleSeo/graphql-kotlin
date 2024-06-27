"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2005],{30286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453);const s={id:"graphql-context-factory",title:"GraphQLContextFactory"},a=void 0,c={id:"server/graphql-context-factory",title:"GraphQLContextFactory",description:"If you are using graphql-kotlin-spring-server, see the Spring specific documentation.",source:"@site/versioned_docs/version-7.x.x/server/graphql-context-factory.md",sourceDirName:"server",slug:"/server/graphql-context-factory",permalink:"/graphql-kotlin/docs/server/graphql-context-factory",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/server/graphql-context-factory.md",tags:[],version:"7.x.x",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"graphql-context-factory",title:"GraphQLContextFactory"},sidebar:"docs",previous:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/server/graphql-request-parser"},next:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/server/graphql-request-handler"}},i={},d=[{value:"Coroutine Context",id:"coroutine-context",level:2},{value:"Suspendable Factory",id:"suspendable-factory",level:2},{value:"Server-Specific Abstractions",id:"server-specific-abstractions",level:2},{value:"HTTP Headers and Cookies",id:"http-headers-and-cookies",level:2},{value:"Federated Tracing",id:"federated-tracing",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you are using ",(0,r.jsx)(t.code,{children:"graphql-kotlin-spring-server"}),", see the ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context",children:"Spring specific documentation"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"GraphQLContextFactory"})," provides a generic mechanism for generating a GraphQL context for each request."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"interface GraphQLContextFactory<Request> {\n    suspend fun generateContext(request: Request): GraphQLContext =\n        emptyMap<Any, Any>().toGraphQLContext()\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Given the generic server request, the interface should attempt to create a ",(0,r.jsx)(t.code,{children:"GraphQLContext"})," to be used for every new operation.\ninterface from ",(0,r.jsx)(t.code,{children:"graphql-kotlin-schema-generator"}),". See ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data",children:"execution context"}),"\nfor more info on how the context can be used in the schema functions."]}),"\n",(0,r.jsx)(t.h2,{id:"coroutine-context",children:"Coroutine Context"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"graphql-kotlin-server"})," creates a supervisor scope with currently available coroutine context. You can provide\nadditional context elements using ",(0,r.jsx)(t.code,{children:"GraphQLContextFactory"})," by populating ",(0,r.jsx)(t.code,{children:"CoroutineContext::class"})," entry in the context map\nor by implementing ",(0,r.jsx)(t.code,{children:"graphQLCoroutineContext()"})," (deprecated) on a custom context object."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"@Component\nclass MyCustomContextFactory : GraphQLContextFactory() {\n    override suspend fun generateContext(request: ServerRequest): GraphQLContext =\n        mapOf(\n            CoroutineContext::class to MDCContext()\n        ).toGraphQLContext()\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"GraphQLServer"})," will then attempt to create supervisor coroutine scope by combining current coroutine context with custom\ncoroutine context provided by the ",(0,r.jsx)(t.code,{children:"GraphQLContextFactory"}),". This scope will then be used by ",(0,r.jsx)(t.code,{children:"FunctionDataFetcher"})," to execute\nall suspendable functions."]}),"\n",(0,r.jsx)(t.h2,{id:"suspendable-factory",children:"Suspendable Factory"}),"\n",(0,r.jsxs)(t.p,{children:["The interface is marked as a ",(0,r.jsx)(t.code,{children:"suspend"})," function to allow the asynchronous fetching of context data.\nThis may be helpful if you need to call some other services to calculate a context value."]}),"\n",(0,r.jsx)(t.h2,{id:"server-specific-abstractions",children:"Server-Specific Abstractions"}),"\n",(0,r.jsxs)(t.p,{children:["A specific ",(0,r.jsx)(t.code,{children:"graphql-kotlin-*-server"})," library may provide an abstract class on top of this interface so users only have to\nbe concerned with the context class and not the server class type.\nFor example the ",(0,r.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," provides the following class, which sets the request type:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"abstract class SpringGraphQLContextFactory : GraphQLContextFactory<ServerRequest>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"http-headers-and-cookies",children:"HTTP Headers and Cookies"}),"\n",(0,r.jsxs)(t.p,{children:["For common use cases around authorization, authentication, or tracing you may need to read HTTP headers and cookies.\nThis should be done in the ",(0,r.jsx)(t.code,{children:"GraphQLContextFactory"})," and relevant data should be added to the context to be accessible during schema execution."]}),"\n",(0,r.jsx)(t.h2,{id:"federated-tracing",children:"Federated Tracing"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing",children:"federation tracing support"})," documentation for details."]}),"\n",(0,r.jsxs)(t.p,{children:["The reference server implementation ",(0,r.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context",children:"supports federated tracing in the context"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);