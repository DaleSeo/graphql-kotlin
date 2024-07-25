"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2010],{82571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const a={id:"graphql-context-factory",title:"GraphQLContextFactory"},s=void 0,c={id:"server/graphql-context-factory",title:"GraphQLContextFactory",description:"If you are using graphql-kotlin-spring-server, see the Spring specific documentation.",source:"@site/versioned_docs/version-6.x.x/server/graphql-context-factory.md",sourceDirName:"server",slug:"/server/graphql-context-factory",permalink:"/graphql-kotlin/docs/6.x.x/server/graphql-context-factory",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/graphql-context-factory.md",tags:[],version:"6.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1721925847e3,frontMatter:{id:"graphql-context-factory",title:"GraphQLContextFactory"},sidebar:"docs",previous:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/6.x.x/server/graphql-request-parser"},next:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/6.x.x/server/graphql-request-handler"}},i={},l=[{value:"Coroutine Context",id:"coroutine-context",level:2},{value:"Nullable Context (Deprecated)",id:"nullable-context-deprecated",level:2},{value:"Suspendable Factory",id:"suspendable-factory",level:2},{value:"Server-Specific Abstractions",id:"server-specific-abstractions",level:2},{value:"HTTP Headers and Cookies",id:"http-headers-and-cookies",level:2},{value:"Federated Tracing",id:"federated-tracing",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you are using ",(0,r.jsx)(t.code,{children:"graphql-kotlin-spring-server"}),", see the ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-graphql-context",children:"Spring specific documentation"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"GraphQLContextFactory"})," provides a generic mechanism for generating a GraphQL context for each request."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'interface GraphQLContextFactory<out Context : GraphQLContext, Request> {\n    @Deprecated("use generateContextMap instead")\n    suspend fun generateContext(request: Request): Context? = null\n    suspend fun generateContextMap(request: Request): Map<*, Any> = emptyMap<Any, Any>()\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Given the generic server request, the interface should attempt to create a legacy ",(0,r.jsx)(t.code,{children:"GraphQLContext"})," class (could be null)\nand a new context map to be used for every new operation. The legacy context class must implement the ",(0,r.jsx)(t.code,{children:"GraphQLContext"}),"\ninterface from ",(0,r.jsx)(t.code,{children:"graphql-kotlin-schema-generator"}),". See ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/execution/contextual-data",children:"execution context"}),"\nfor more info on how the context can be used in the schema functions."]}),"\n",(0,r.jsx)(t.h2,{id:"coroutine-context",children:"Coroutine Context"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"graphql-kotlin-server"})," creates a supervisor scope with currently available coroutine context. You can provide\nadditional context elements using ",(0,r.jsx)(t.code,{children:"GraphQLContextFactory"})," by populating ",(0,r.jsx)(t.code,{children:"CoroutineContext::class"})," entry in the context map\nor by implementing ",(0,r.jsx)(t.code,{children:"graphQLCoroutineContext()"})," (deprecated) on a custom context object."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"@Component\nclass MyCustomContextFactory : GraphQLContextFactory() {\n    override suspend fun generateContextMap(request: ServerRequest): Map<*, Any> = mapOf(\n        CoroutineContext::class to MDCContext()\n    )\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"GraphQLServer"})," will then attempt to create supervisor coroutine scope by combining current coroutine context with custom\ncoroutine context provided by the ",(0,r.jsx)(t.code,{children:"GraphQLContextFactory"}),". This scope will then be used by ",(0,r.jsx)(t.code,{children:"FunctionDataFetcher"})," to execute\nall suspendable functions."]}),"\n",(0,r.jsx)(t.h2,{id:"nullable-context-deprecated",children:"Nullable Context (Deprecated)"}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"Instead of creating nullable instance of a custom GraphQL context, please migrate to use new GraphQL context map. Support\nfor arbitrary GraphQL context will be removed in future releases."})}),"\n",(0,r.jsxs)(t.p,{children:["The factory may return ",(0,r.jsx)(t.code,{children:"null"})," GraphQL context object if it is not required for execution. If your custom factory never\nreturns ",(0,r.jsx)(t.code,{children:"null"}),", then there is no need to use nullable arguments. However, if your custom factory may return ",(0,r.jsx)(t.code,{children:"null"}),", you\nmust define the context argument as nullable in the schema functions or a runtime exception will be thrown."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'@Deprecated\ndata class CustomContext(val value: String) : GraphQLContext\n\nclass CustomFactory : GraphQLContextFactory<CustomContext, ServerRequest> {\n    override suspend fun generateContext(request: ServerRequest): Context? {\n        if (isSpecialRequest(request)) {\n            return null\n        }\n\n        val value = callSomeSuspendableService(request)\n        return CustomContext(value)\n    }\n\n    override suspend fun generateContextMap(request: ServerRequest): Map<*, Any> {\n        if (isSpecialRequest(request)) {\n            return emptyMap<Any, Any>()\n        }\n\n        val value = callSomeSuspendableService(request)\n        return mapOf("myKey" to value)\n    }\n}\n\nclass MyQuery : Query {\n\n    fun getResults(context: CustomContext? = null, dfe: DataFetchingEnvironment, input: String): String {\n        val contextMapValue = dfe.graphQLContext.get("myKey")\n        val contextObjectValue = context?.value\n        val contextValue = contextMapValue ?: contextObjectValue\n        if (contextValue != null) {\n            return getDataWithContextValue(input, contextValue)\n        }\n\n        return getBasicData(input)\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"suspendable-factory",children:"Suspendable Factory"}),"\n",(0,r.jsxs)(t.p,{children:["The interface is marked as a ",(0,r.jsx)(t.code,{children:"suspend"})," function to allow the asynchronous fetching of context data.\nThis may be helpful if you need to call some other services to calculate a context value."]}),"\n",(0,r.jsx)(t.h2,{id:"server-specific-abstractions",children:"Server-Specific Abstractions"}),"\n",(0,r.jsxs)(t.p,{children:["A specific ",(0,r.jsx)(t.code,{children:"graphql-kotlin-*-server"})," library may provide an abstract class on top of this interface so users only have to be concerned with the context class and not the server class type.\nFor example the ",(0,r.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," provides the following class, which sets the request type:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"abstract class SpringGraphQLContextFactory<out T : GraphQLContext> : GraphQLContextFactory<T, ServerRequest>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"http-headers-and-cookies",children:"HTTP Headers and Cookies"}),"\n",(0,r.jsxs)(t.p,{children:["For common use cases around authorization, authentication, or tracing you may need to read HTTP headers and cookies.\nThis should be done in the ",(0,r.jsx)(t.code,{children:"GraphQLContextFactory"})," and relevant data should be added to the context to be accessible during schema execution."]}),"\n",(0,r.jsx)(t.h2,{id:"federated-tracing",children:"Federated Tracing"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/federation/federation-tracing",children:"federation tracing support"})," documentation for details."]}),"\n",(0,r.jsxs)(t.p,{children:["The reference server implementation ",(0,r.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-graphql-context",children:"supports federated tracing in the context"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);