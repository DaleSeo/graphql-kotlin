"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4973],{3927:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=a(74848),r=a(28453);const i={id:"apollo-federation",title:"Apollo Federation",original_id:"apollo-federation"},o=void 0,s={id:"federated/apollo-federation",title:"Apollo Federation",description:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value",source:"@site/versioned_docs/version-3.x.x/federated/apollo-federation.md",sourceDirName:"federated",slug:"/federated/apollo-federation",permalink:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/apollo-federation.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1719501861,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"apollo-federation",title:"Apollo Federation",original_id:"apollo-federation"},sidebar:"docs",previous:{title:"Introspection",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/introspection"},next:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-schemas"}},d={},l=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toFederatedSchema</code>",id:"tofederatedschema",level:3},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value\nto their clients. As the underlying graph scales, managing single monolithic GraphQL server might become less and less\nfeasible making it much harder to manage and leading to unnecessary bottlenecks. Migrating towards federated model with\nan API gateway and a number of smaller GraphQL services behind it alleviates some of those problems and allows teams to\nscale their graphs more easily."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/",children:"Apollo Federation"})," is an architecture for\ncomposing multiple GraphQL services into a single graph. Federated schemas rely on a number of custom directives to\ninstrument the behavior of the underlying graph and convey the relationships between different schema types. Each individual\nGraphQL server generates a valid GraphQL schema and can be run independently. This is in contrast with traditional schema\nstitching approach where relationships between individual services, i.e. linking configuration, is configured at the GraphQL\nGateway level."]}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(n.p,{children:["Using a JVM dependency manager, link ",(0,t.jsx)(n.code,{children:"graphql-kotlin-federation"})," to your project."]}),"\n",(0,t.jsx)(n.p,{children:"With Maven:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-federation</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"With Gradle:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'\nimplementation("com.expediagroup", "graphql-kotlin-federation", latestVersion)\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"graphql-kotlin-federation"})," build on top of ",(0,t.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," and adds a few extra methods and class to use to generate federation\ncompliant schemas."]}),"\n",(0,t.jsx)(n.h3,{id:"tofederatedschema",children:(0,t.jsx)(n.code,{children:"toFederatedSchema"})}),"\n",(0,t.jsxs)(n.p,{children:["Just like the basic ",(0,t.jsx)(n.a,{href:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started",children:"toSchema"}),", ",(0,t.jsx)(n.code,{children:"toFederatedSchema"})," accepts four parameters: ",(0,t.jsx)(n.code,{children:"config"}),", ",(0,t.jsx)(n.code,{children:"queries"}),", ",(0,t.jsx)(n.code,{children:"mutations"})," and ",(0,t.jsx)(n.code,{children:"subscriptions"}),".\nThe difference is that the ",(0,t.jsx)(n.code,{children:"config"})," class is of type ",(0,t.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/FederatedSchemaGeneratorConfig.kt",children:"FederatedSchemaGeneratorConfig"}),".\nThis class extends the ",(0,t.jsx)(n.a,{href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config",children:"base configuration class"})," and adds some default logic. You can override the logic if needed, but do so with caution as you may no longer generate a spec compliant schema."]}),"\n",(0,t.jsxs)(n.p,{children:["You can see the definition for ",(0,t.jsx)(n.code,{children:"toFederatedSchema"})," ",(0,t.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/toFederatedSchema.kt",children:"in the\nsource"})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'\n@KeyDirective(fields = FieldSet("id"))\ndata class User(\n  val id: ID,\n  val name: String\n)\n\nclass Query {\n  fun getUsers(): List<User> = getUsersFromDB()\n}\n\nval config = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example"\n)\n\ntoFederatedSchema(\n  config = config,\n  queries = listOf(TopLevelObject(Query()))\n)\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"will generate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:'\ntype Query {\n getUsers: [User!]!\n}\n\ntype User @key(fields : "id") {\n id: ID!\n name: String!\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var t=a(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);