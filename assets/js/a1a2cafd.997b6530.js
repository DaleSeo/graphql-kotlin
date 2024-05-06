"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2126],{10796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(74848),o=n(28453);const r={id:"contextual-data",title:"Contextual Data"},i=void 0,s={id:"schema-generator/execution/contextual-data",title:"Contextual Data",description:'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL',source:"@site/versioned_docs/version-7.x.x/schema-generator/execution/contextual-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/contextual-data",permalink:"/graphql-kotlin/docs/schema-generator/execution/contextual-data",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/schema-generator/execution/contextual-data.md",tags:[],version:"7.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1715034375,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"contextual-data",title:"Contextual Data"},sidebar:"docs",previous:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment"},next:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/schema-generator/execution/optional-undefined-arguments"}},c={},h=[{value:"GraphQL Context Map",id:"graphql-context-map",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:['All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL\nserver, but shouldn\'t necessarily be part of the GraphQL schema. A prime example of something that is appropriate\nfor the GraphQL context would be trace headers for an OpenTracing system such as\n',(0,a.jsx)(t.a,{href:"https://expediadotcom.github.io/haystack",children:"Haystack"}),". The GraphQL query does not need the information to perform\nits function, but the server needs the information to ensure observability."]}),"\n",(0,a.jsxs)(t.p,{children:["The contents of the GraphQL context vary across applications and it is up to the GraphQL server developers to decide\nwhat it should contain. ",(0,a.jsx)(t.code,{children:"graphql-kotlin-server"})," provides a simple mechanism to build a context per operation with the\n",(0,a.jsx)(t.a,{href:"/graphql-kotlin/docs/server/graphql-context-factory",children:"GraphQLContextFactory"}),".\nIf a custom factory is defined, it will then be used to populate GraphQL context based on the incoming request and make\nit available during execution."]}),"\n",(0,a.jsx)(t.h2,{id:"graphql-context-map",children:"GraphQL Context Map"}),"\n",(0,a.jsxs)(t.p,{children:["In graphql-java v17 a new context map was added to the ",(0,a.jsx)(t.code,{children:"DataFetchingEnvironment"}),". This is now the way of saving info for execution, and\nyou can access this map through the ",(0,a.jsx)(t.a,{href:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment",children:"DataFetchingEnvironment"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'class ContextualQuery : Query {\n    fun contextualQuery(\n        dataFetchingEnvironment: DataFetchingEnvironment,\n        value: Int\n    ): String =\n        "The custom value was ${dataFetchingEnvironment.graphQLContext.get("foo")} and the value was $value"\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);