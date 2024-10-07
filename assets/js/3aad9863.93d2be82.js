"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3282],{45028:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(74848),r=s(28453);const o={id:"http-request-response",title:"Access the HTTP Request-Response",original_id:"http-request-response"},a=void 0,i={id:"spring-server/http-request-response",title:"Access the HTTP Request-Response",description:'GraphQL is strongly typed and any data that is not part of the schema is no longer automatically known by the clients. Relying on this information becomes an "undocumented" part of your API. As a result, by default, GraphQL query resolvers do not have access to the raw HTTP request and response objects.',source:"@site/versioned_docs/version-3.x.x/spring-server/http-request-response.md",sourceDirName:"spring-server",slug:"/spring-server/http-request-response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/http-request-response.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1728268554e3,frontMatter:{id:"http-request-response",title:"Access the HTTP Request-Response",original_id:"http-request-response"},sidebar:"docs",previous:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/subscriptions"}},p={},c=[{value:"GraphQL Context",id:"graphql-context",level:2}];function h(e){const t={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'GraphQL is strongly typed and any data that is not part of the schema is no longer automatically known by the clients. Relying on this information becomes an "undocumented" part of your API. As a result, by default, GraphQL query resolvers do not have access to the raw HTTP request and response objects.'}),"\n",(0,n.jsx)(t.p,{children:"That being said, there are some common use cases (like authorization) that require inspecting HTTP headers."}),"\n",(0,n.jsx)(t.h2,{id:"graphql-context",children:"GraphQL Context"}),"\n",(0,n.jsxs)(t.p,{children:["The most common way to access the raw HTTP request and response objects is to process them when creating the GraphQLContext through the Spring bean ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context",children:"GraphQLContextFactory"}),". Using the factory you can then extract the information from the incoming request and store it in the context so it can be accessed from any resolver."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);