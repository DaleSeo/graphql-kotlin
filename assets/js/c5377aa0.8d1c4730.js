"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3022],{58525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),o=n(28453);const i={id:"spring-graphql-context",title:"Generating GraphQL Context",original_id:"spring-graphql-context"},s=void 0,a={id:"spring-server/spring-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a simple mechanism to build a GraphQL context per query execution through",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-graphql-context.md",sourceDirName:"spring-server",slug:"/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-graphql-context.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1728268554e3,frontMatter:{id:"spring-graphql-context",title:"Generating GraphQL Context",original_id:"spring-graphql-context"},sidebar:"docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-schema"},next:{title:"Access the HTTP Request-Response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response"}},p={},c=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," provides a simple mechanism to build a ",(0,r.jsx)(t.a,{href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data",children:"GraphQL context"})," per query execution through\n",(0,r.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/GraphQLContextFactory.kt",children:"GraphQLContextFactory"}),".\nOnce a context factory bean is available, it will then be used in\n",(0,r.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ContextWebFilter.kt",children:"ContextWebFilter"}),"\nto populate the GraphQL context based on the incoming request and make it available during query execution."]}),"\n",(0,r.jsx)(t.p,{children:"For example if we define our custom context as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"class MyGraphQLContext(val myCustomValue: String) : GraphQLContext\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We can generate the corresponding ",(0,r.jsx)(t.code,{children:"GraphQLContextFactory"})," bean:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'@Component\nclass MyGraphQLContextFactory: GraphQLContextFactory<MyGraphQLContext> {\n    override suspend fun generateContext(\n        request: ServerHttpRequest,\n        response: ServerHttpResponse\n    ): MyGraphQLContext = MyGraphQLContext(\n        myCustomValue = request.headers.getFirst("MyHeader") ?: "defaultValue"\n    )\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Once your application is configured to build your custom ",(0,r.jsx)(t.code,{children:"MyGraphQLContext"}),", we can then specify it as function argument but it will not be included in the schema.\nWhile executing the query, the corresponding GraphQL context will be read from the environment and automatically injected to the function input arguments."]}),"\n",(0,r.jsxs)(t.p,{children:["For more details see the ",(0,r.jsx)(t.a,{href:"../schema-generator/execution/contextual-data",children:"Contextual Data documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);