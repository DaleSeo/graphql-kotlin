"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3886],{52533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=r(74848),a=r(28453);const s={id:"graphql-request-handler",title:"GraphQLRequestHandler"},o=void 0,c={id:"server/graphql-request-handler",title:"GraphQLRequestHandler",description:"The GraphQLRequestHandler is an open and extendable class that contains the basic logic to get a GraphQLResponse.",source:"@site/docs/server/graphql-request-handler.md",sourceDirName:"server",slug:"/server/graphql-request-handler",permalink:"/graphql-kotlin/docs/8.x.x/server/graphql-request-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/graphql-request-handler.md",tags:[],version:"current",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"graphql-request-handler",title:"GraphQLRequestHandler"},sidebar:"docs",previous:{title:"GraphQLContextFactory",permalink:"/graphql-kotlin/docs/8.x.x/server/graphql-context-factory"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/8.x.x/server/server-subscriptions"}},l={},i=[];function d(e){const t={a:"a",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"GraphQLRequestHandler"})," is an open and extendable class that contains the basic logic to get a ",(0,n.jsx)(t.code,{children:"GraphQLResponse"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["It requires a ",(0,n.jsx)(t.code,{children:"GraphQLSchema"})," and a ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/8.x.x/server/data-loader/",children:"KotlinDataLoaderRegistryFactory"})," in the constructor.\nFor each request, it accepts a ",(0,n.jsx)(t.code,{children:"GraphQLRequest"})," and an optional ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/8.x.x/server/graphql-context-factory",children:"GraphQLContext"}),",\nand calls the ",(0,n.jsx)(t.code,{children:"KotlinDataLoaderRegistryFactory"})," to generate a new ",(0,n.jsx)(t.code,{children:"KotlinDataLoaderRegistry"}),". Then all of these objects are sent to the schema for\nexecution and the result is mapped to a ",(0,n.jsx)(t.code,{children:"GraphQLResponse"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"There shouldn't be much need to change this class but if you wanted to add custom logic\nor logging it is possible to override it or just create your own."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);