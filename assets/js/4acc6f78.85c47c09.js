"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1589],{79674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(74848),c=t(28453);const a={id:"schema",title:"Schema"},r=void 0,o={id:"schema-generator/writing-schemas/schema",title:"Schema",description:"Schema Object",source:"@site/versioned_docs/version-6.x.x/schema-generator/writing-schemas/schema.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/schema",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/writing-schemas/schema",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/writing-schemas/schema.md",tags:[],version:"6.x.x",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"schema",title:"Schema"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/schema-generator-getting-started"},next:{title:"Types and Fields",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/writing-schemas/fields"}},i={},l=[{value:"Schema Object",id:"schema-object",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"schema-object",children:"Schema Object"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SchemaGenerator"})," automatically generates schema object from the provided list of ",(0,s.jsx)(n.code,{children:"TopLevelObjects"})," representing ",(0,s.jsx)(n.code,{children:"queries"}),", ",(0,s.jsx)(n.code,{children:"mutations"})," and ",(0,s.jsx)(n.code,{children:"subscriptions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to provide ",(0,s.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/documenting-schema",children:"schema description"})," or to specify ",(0,s.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/directives",children:"schema directives"}),", we need to provide ",(0,s.jsx)(n.code,{children:"TopLevelObject"})," reference to a schema class."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Only annotations are processed on the schema object. Generator will throw an exception if schema class contains any properties or functions."})}),"\n",(0,s.jsxs)(n.p,{children:["In the example below, we provide custom description and apply ",(0,s.jsx)(n.code,{children:"@contact"})," directive on the schema object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'@ContactDirective(\n  name = "My Team Name",\n  url = "https://myteam.slack.com/archives/teams-chat-room-url",\n  description = "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall)."\n)\n@GraphQLDescription("My schema description")\nclass MySchema\n\nclass HelloWorldQuery {\n    fun helloWorld() = "Hello World!"\n}\n\n// generate schema\nval schema = toSchema(\n    config = yourCustomConfig(),\n    queries = listOf(TopLevelObject(HelloWorldQuery())),\n    schemaObject = TopLevelObject(MySchema())\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Will generate"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'schema @contact(description : "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall).", name : "My Team Name", url : "https://myteam.slack.com/archives/teams-chat-room-url"){\n  query: Query\n}\n\ntype Query {\n    helloWorld: String!\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"graphql-java"})," currently does not include schema description in the generated SDL (it is available in the introspection results only).\nFixed in ",(0,s.jsx)(n.a,{href:"https://github.com/graphql-java/graphql-java/pull/2856",children:"https://github.com/graphql-java/graphql-java/pull/2856"}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const c={},a=s.createContext(c);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);