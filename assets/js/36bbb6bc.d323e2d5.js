"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[133],{10082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(74848),o=r(28453);const a={id:"ktor-graphql-context",title:"Generating GraphQL Context"},s=void 0,i={id:"server/ktor-server/ktor-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-ktor-server provides a Ktor specific implementation of GraphQLContextFactory",source:"@site/docs/server/ktor-server/ktor-graphql-context.md",sourceDirName:"server/ktor-server",slug:"/server/ktor-server/ktor-graphql-context",permalink:"/graphql-kotlin/docs/8.x.x/server/ktor-server/ktor-graphql-context",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/ktor-server/ktor-graphql-context.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1721925847e3,frontMatter:{id:"ktor-graphql-context",title:"Generating GraphQL Context"},sidebar:"docs",previous:{title:"Writing Schemas with Ktor",permalink:"/graphql-kotlin/docs/8.x.x/server/ktor-server/ktor-schema"},next:{title:"HTTP request and response",permalink:"/graphql-kotlin/docs/8.x.x/server/ktor-server/ktor-http-request-response"}},c={},l=[{value:"Federated Context",id:"federated-context",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"graphql-kotlin-ktor-server"})," provides a Ktor specific implementation of ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/8.x.x/server/graphql-context-factory",children:"GraphQLContextFactory"}),"\nand the context."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"KtorGraphQLContextFactory"})," - Generates GraphQL context map with federated tracing information per request"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you are using ",(0,n.jsx)(t.code,{children:"graphql-kotlin-ktor-server"}),", you should extend ",(0,n.jsx)(t.code,{children:"DefaultKtorGraphQLContextFactory"})," to automatically\nsupport federated tracing."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'class CustomGraphQLContextFactory : DefaultKtorGraphQLContextFactory() {\n    override suspend fun generateContext(request: ApplicationRequest): GraphQLContext =\n        super.generateContext(request).plus(\n            mapOf("myCustomValue" to (request.headers["my-custom-header"] ?: "defaultContext"))\n        )\n}\n\nfun Application.graphQLModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(...)\n        }\n        server {\n            contextFactory = CustomGraphQLContextFactory()\n        }\n    }\n    routing {\n        graphQLPostRoute()\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Once your application is configured to build your custom GraphQL context, you can then access it through a data fetching\nenvironment argument. While executing the query, data fetching environment will be automatically injected to the function input arguments.\nThis argument will not appear in the GraphQL schema."}),"\n",(0,n.jsxs)(t.p,{children:["For more details, see the ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/execution/contextual-data",children:"Contextual Data Documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"federated-context",children:"Federated Context"}),"\n",(0,n.jsxs)(t.p,{children:["If you need ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/federation/federation-tracing",children:"federation tracing support"}),", you can set the appropriate\n",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/8.x.x/server/ktor-server/ktor-configuration",children:"configuration properties"}),". The provided ",(0,n.jsx)(t.code,{children:"DefaultKtorGraphQLContextFactory"})," populates the required\ninformation for federated tracing, so as long as you extend this context class you will maintain feature support."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);