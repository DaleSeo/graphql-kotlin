"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7057],{60613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(74848),o=n(28453);const s={id:"ktor-schema",title:"Writing Schemas with Ktor"},a=void 0,i={id:"server/ktor-server/ktor-schema",title:"Writing Schemas with Ktor",description:"GraphQL schema, queries and mutation objects have to implement the corresponding marker interface. You can then configure",source:"@site/versioned_docs/version-7.x.x/server/ktor-server/ktor-schema.md",sourceDirName:"server/ktor-server",slug:"/server/ktor-server/ktor-schema",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/server/ktor-server/ktor-schema.md",tags:[],version:"7.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1721925847e3,frontMatter:{id:"ktor-schema",title:"Writing Schemas with Ktor"},sidebar:"docs",previous:{title:"Ktor Server Overview",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-overview"},next:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-graphql-context"}},c={},l=[];function h(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"GraphQL schema, queries and mutation objects have to implement the corresponding marker interface. You can then configure\nGraphQL plugin with references to your objects."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'@ContactDirective(\n    name = "My Team Name",\n    url = "https://myteam.slack.com/archives/teams-chat-room-url",\n    description = "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall)."\n)\n@GraphQLDescription("My schema description")\nclass MySchema : Schema\n\n\nclass HelloWorldQuery : Query {\n    fun hello(): String = "Hello World!"\n}\n\nclass UpdateGreetingMutation : Mutation {\n    fun updateGreeting(greeting: String): String = TODO()\n}\n\nfun Application.graphQLModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(\n                HelloWorldQuery()\n            )\n            mutations = listOf(\n                UpdateGreetingMutation()\n            )\n            schemaObject = MySchema()\n        }\n    }\n    routing {\n        graphQLPostRoute()\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Above code will generate following GraphQL schema"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:'schema @contact(description : "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall).", name : "My Team Name", url : "https://myteam.slack.com/archives/teams-chat-room-url"){\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  hello: String!\n}\n\ntype Mutation {\n    updateGreeting(greeting: String!): String!\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);