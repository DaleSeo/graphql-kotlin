"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9817],{73051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(74848),o=n(28453);const r={id:"contextual-data",title:"Contextual Data"},s=void 0,i={id:"schema-generator/execution/contextual-data",title:"Contextual Data",description:'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL',source:"@site/versioned_docs/version-4.x.x/schema-generator/execution/contextual-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/contextual-data",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/contextual-data",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/execution/contextual-data.md",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1715034375,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"contextual-data",title:"Contextual Data"},sidebar:"docs",previous:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/data-fetching-environment"},next:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/optional-undefined-arguments"}},c={},l=[{value:"GraphQLContext Interface",id:"graphqlcontext-interface",level:2},{value:"Handling Context Errors",id:"handling-context-errors",level:2},{value:"Injection Customization",id:"injection-customization",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:['All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL\nserver, but shouldn\'t necessarily be part of the GraphQL schema. A prime example of something that is appropriate\nfor the GraphQL context would be trace headers for an OpenTracing system such as\n',(0,a.jsx)(t.a,{href:"https://expediadotcom.github.io/haystack",children:"Haystack"}),". The GraphQL query does not need the information to perform\nits function, but the server needs the information to ensure observability."]}),"\n",(0,a.jsxs)(t.p,{children:["The contents of the GraphQL context vary across applications and it is up to the GraphQL server developers to decide\nwhat it should contain. ",(0,a.jsx)(t.code,{children:"graphql-kotlin-server"})," provides a simple mechanism to\nbuild a context per operation with the ",(0,a.jsx)(t.a,{href:"/graphql-kotlin/docs/4.x.x/server/graphql-context-factory",children:"GraphQLContextFactory"}),".\nIf a custom factory is defined, it will then be used to populate GraphQL context based on the incoming request and make it available during execution."]}),"\n",(0,a.jsx)(t.h2,{id:"graphqlcontext-interface",children:"GraphQLContext Interface"}),"\n",(0,a.jsxs)(t.p,{children:["The easiest way to specify a context class is to use the ",(0,a.jsx)(t.code,{children:"GraphQLContext"})," marker interface. This interface does not require any implementations,\nit is just used to inform the schema generator that this is the class that should be used as the context for every request."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"class MyGraphQLContext(val customValue: String) : GraphQLContext\n"})}),"\n",(0,a.jsx)(t.p,{children:"Then, you can use the class as an argument and it will be automatically injected during execution time."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'class ContextualQuery : Query {\n    fun contextualQuery(\n        context: MyGraphQLContext,\n        value: Int\n    ): String = "The custom value was ${context.customValue} and the value was $value"\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"The above query would produce the following GraphQL schema:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type Query {\n  contextualQuery(value: Int!): String!\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that the argument that implements ",(0,a.jsx)(t.code,{children:"GraphQLContext"})," is not reflected in the GraphQL schema."]}),"\n",(0,a.jsx)(t.h2,{id:"handling-context-errors",children:"Handling Context Errors"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/graphql-kotlin/docs/4.x.x/server/graphql-context-factory",children:"GraphQLContextFactory"})," may return ",(0,a.jsx)(t.code,{children:"null"}),". If your factory implementation never returns ",(0,a.jsx)(t.code,{children:"null"}),", then there is no need to change your schema.\nIf the factory could return ",(0,a.jsx)(t.code,{children:"null"}),", then the context arugments in your schema should be nullable so a runtime exception is not thrown."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'class ContextualQuery : Query {\n    fun contextualQuery(context: MyGraphQLContext?, value: Int): String {\n        if (context != null) {\n            return "The custom value was ${context.customValue} and the value was $value"\n        }\n\n        return "The context was null and the value was $value"\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"injection-customization",children:"Injection Customization"}),"\n",(0,a.jsxs)(t.p,{children:["The context is injected into the execution through the ",(0,a.jsx)(t.code,{children:"FunctionDataFetcher"})," class.\nIf you want to customize the logic on how the context is determined, that is possible to override.\nSee more details on the ",(0,a.jsx)(t.a,{href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/fetching-data",children:"Fetching Data documentation"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);