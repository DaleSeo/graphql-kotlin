"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1240],{33903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(74848),a=n(28453);const s={id:"deprecating-schema",title:"Deprecating Schema"},c=void 0,i={id:"schema-generator/customizing-schemas/deprecating-schema",title:"Deprecating Schema",description:"GraphQL schemas supports deprecation directive on",source:"@site/docs/schema-generator/customizing-schemas/deprecating-schema.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/deprecating-schema",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/deprecating-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/deprecating-schema.md",tags:[],version:"current",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"deprecating-schema",title:"Deprecating Schema"},sidebar:"docs",previous:{title:"Directives",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/directives"},next:{title:"Custom Types",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/custom-type-reference"}},o={},d=[{value:"Kotlin.Deprecated",id:"kotlindeprecated",level:2},{value:"GraphQLDeprecated",id:"graphqldeprecated",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"GraphQL schemas supports deprecation directive on\nthe fields (which correspond to Kotlin properties and functions), input fields and enum values."}),"\n",(0,r.jsxs)(t.p,{children:["Deprecation of arguments is currently not supported ",(0,r.jsx)(t.a,{href:"https://youtrack.jetbrains.com/issue/KT-25643",children:"in Kotlin"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"kotlindeprecated",children:"Kotlin.Deprecated"}),"\n",(0,r.jsxs)(t.p,{children:["Instead of creating a custom annotation,\n",(0,r.jsx)(t.code,{children:"graphql-kotlin-schema-generator"})," just looks for the ",(0,r.jsx)(t.code,{children:"@kotlin.Deprecated"})," annotation and will use that annotation message\nfor the deprecated reason."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'class SimpleQuery {\n  @Deprecated(message = "this query is deprecated", replaceWith = ReplaceWith("shinyNewQuery"))\n  fun simpleDeprecatedQuery(): Boolean = false\n\n  fun shinyNewQuery(): Boolean = true\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"The above query would produce the following GraphQL schema:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:'type Query {\n  simpleDeprecatedQuery: Boolean! @deprecated(reason: "this query is deprecated, replace with shinyNewQuery")\n\n  shinyNewQuery: Boolean!\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"graphqldeprecated",children:"GraphQLDeprecated"}),"\n",(0,r.jsxs)(t.p,{children:["A side-effect of using ",(0,r.jsx)(t.code,{children:"@Deprecated"})," is that it marks your own Kotlin code as being deprecated, which may not be what you want. Using ",(0,r.jsx)(t.code,{children:"@GraphQLDeprecated"})," you can add the ",(0,r.jsx)(t.code,{children:"@deprecated"})," directive to the GraphQL schema, but not have your Kotlin code show up as deprecated in your editor."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'class SimpleQuery {\n  @GraphQLDeprecated(message = "this query is deprecated", replaceWith = ReplaceWith("shinyNewQuery"))\n  fun simpleDeprecatedQuery(): Boolean = false\n\n  fun shinyNewQuery(): Boolean = true\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);