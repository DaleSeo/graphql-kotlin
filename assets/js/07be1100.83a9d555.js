"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7153],{24775:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(74848),t=i(28453);const s={id:"automatic-persisted-queries",title:"Automatic Persisted Queries (APQ)"},a=void 0,o={id:"server/automatic-persisted-queries/automatic-persisted-queries",title:"Automatic Persisted Queries (APQ)",description:"APQ is technique created by Apollo to improve",source:"@site/docs/server/automatic-persisted-queries/automatic-persisted-queries.md",sourceDirName:"server/automatic-persisted-queries",slug:"/server/automatic-persisted-queries/",permalink:"/graphql-kotlin/docs/8.x.x/server/automatic-persisted-queries/",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/automatic-persisted-queries/automatic-persisted-queries.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1715034375,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"automatic-persisted-queries",title:"Automatic Persisted Queries (APQ)"},sidebar:"docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/8.x.x/server/server-subscriptions"},next:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/8.x.x/server/data-loader/"}},d={},c=[{value:"AutomaticPersistedQueriesProvider",id:"automaticpersistedqueriesprovider",level:2},{value:"Usage in GraphQL Kotlin Server",id:"usage-in-graphql-kotlin-server",level:3},{value:"Usage in Clients",id:"usage-in-clients",level:3},{value:"Errors",id:"errors",level:3}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://www.apollographql.com/docs/apollo-server/performance/apq/",children:"APQ is technique created by Apollo"})," to improve\nGraphQL network performance with zero build-time configuration by sending smaller ",(0,n.jsx)(r.a,{href:"https://github.com/graphql/graphql-over-http/blob/main/spec/GraphQLOverHTTP.md",children:"GraphQL HTTP requests"}),".\nA smaller request payload reduces bandwidth utilization and speeds up GraphQL Client loading times."]}),"\n",(0,n.jsx)(r.p,{children:"A persisted query is a parsed and validated query document that is cached on a GraphQL Server, along with a unique identifier (SHA-256 hash).\nThis way clients can send this identifier instead of the corresponding query which will drastically reduce the request size."}),"\n",(0,n.jsx)(r.p,{children:"To persist a query, a GraphQL Server must first receive it from a Client, then, subsequent requests can just include the identifier\ninstead of the query."}),"\n",(0,n.jsx)(r.mermaid,{value:"sequenceDiagram;\n  Client->>GraphQL Kotlin Server: Sends SHA-256 hash of query to execute\n  Note over GraphQL Kotlin Server: Fails to find persisted query\n  GraphQL Kotlin Server->>Client: Responds with error\n  Client->>GraphQL Kotlin Server: Sends both query AND SHA-256 hash\n  Note over GraphQL Kotlin Server: Persists query and SHA-256 hash\n  GraphQL Kotlin Server->>Client: Executes query and returns result\n  Note over Client: Time passes\n  Client->>GraphQL Kotlin Server: Sends SHA-256 hash of query to execute\n  Note over GraphQL Kotlin Server: Finds persisted query previously parsed and validated\n  GraphQL Kotlin Server->>Client: Executes query and returns result\n  Note over Client: Client can opt-out from sending SHA-256 hash\n  Client->>GraphQL Kotlin Server: Sends query without SHA-256\n  Note over GraphQL Kotlin Server: Still persist parsed and validated query\n  GraphQL Kotlin Server->>Client: Executes query and returns result\n  Client->>GraphQL Kotlin Server: Sends query without SHA-256\n  Note over GraphQL Kotlin Server: Finds parsed and validated query"}),"\n",(0,n.jsx)(r.h2,{id:"automaticpersistedqueriesprovider",children:"AutomaticPersistedQueriesProvider"}),"\n",(0,n.jsxs)(r.p,{children:["To support APQ we have created ",(0,n.jsx)(r.code,{children:"AutomaticPersistedQueriesProvider"})," which is an implementation of\nthe ",(0,n.jsx)(r.a,{href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/preparsed/PreparsedDocumentProvider.java",children:"graphql-java PreparsedDocumentProvider"}),",\nwhich is the interface that allows caching for parsed and validated GraphQL Documents (AST)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"AutomaticPersistedQueriesProvider"})," requires the implementation of ",(0,n.jsx)(r.code,{children:"AutomaticPersistedQueriesCache"})," as a constructor argument.\n",(0,n.jsx)(r.code,{children:"AutomaticPersistedQueriesCache"})," is an interface that specifies the contract of how to retrieve documents."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," ",(0,n.jsx)(r.code,{children:"graphql-kotlin-automatic-persisted-queries"})," provides a default in-memory cache implementation of ",(0,n.jsx)(r.code,{children:"AutomaticPersistedQueriesCache"}),"\ncalled ",(0,n.jsx)(r.code,{children:"DefaultAutomaticPersistedQueriesCache"}),". In order to take full advantage of Automatic Persisted Queries, it's recommended\nto use an external cache mechanism like Redis."]}),"\n",(0,n.jsx)(r.h3,{id:"usage-in-graphql-kotlin-server",children:"Usage in GraphQL Kotlin Server"}),"\n",(0,n.jsxs)(r.p,{children:["Provide an instance of ",(0,n.jsx)(r.code,{children:"AutomaticPersistedQueryProvider"})," in the GraphQL engine builder ",(0,n.jsx)(r.code,{children:"preparsedDocumentProvider"})," method:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",children:'val schema = "your schema"\nval runtimeWiring =  RuntimeWiring.newRuntimeWiring().build() // your runtime wiring\nval automaticPersistedQueryProvider = AutomaticPersistedQueriesProvider(DefaultAutomaticPersistedQueriesCache())\n\nval graphQL = GraphQL\n    .newGraphQL(SchemaGenerator().makeExecutableSchema(SchemaParser().parse(schema), runtimeWiring))\n    .preparsedDocumentProvider(automaticPersistedQueryProvider)\n    .build()\n'})}),"\n",(0,n.jsxs)(r.admonition,{type:"info",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"graphql-kotlin-spring-server"})," provides convenient integration of Automatic Persisted Queries functionality through simple configuration.\nAutomatic Persisted Queries can be enabled by configuring following properties:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"graphql:\n  automaticPersistedQueries:\n   enabled: true\n"})})]}),"\n",(0,n.jsxs)(r.p,{children:["If you want to implement a different cache mechanism using Caffeine or REDIS you can just simply provide a Spring Bean and the\nautoconfigured ",(0,n.jsx)(r.code,{children:"AutomaticPersistedQueryProvider"})," will use your custom implementation of the cache."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",children:"class REDISAutomaticPersistedQueriesCache : AutomaticPersistedQueriesCache {\n    override fun getOrElse(key: String, supplier: () -> PreparsedDocumentEntry): CompletableFuture<PreparsedDocumentEntry> {\n        // your implementation\n    }\n}\n\n@Configuration\nclass ApplicationConfiguration {\n    @Bean\n    fun redisAutomaticPersistedQueriesCache(): PreparsedDocumentProvider = REDISAutomaticPersistedQueriesCache()\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"usage-in-clients",children:"Usage in Clients"}),"\n",(0,n.jsxs)(r.p,{children:["Clients that want to use APQ will need to calculate the unique identifier (SHA-256 hash) of a query and send it\nin the extension section of a ",(0,n.jsx)(r.a,{href:"https://github.com/graphql/graphql-over-http/blob/main/spec/GraphQLOverHTTP.md#json-encoding",children:"GraphQL HTTP request"})]}),"\n",(0,n.jsx)(r.p,{children:"Example Payload:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "variables": {\n    "foo": "bar"\n  },\n  "extensions": {\n    "persistedQuery": {\n      "version": 1,\n      "sha256Hash": "ecf4edb46db40b5132295c0291d62fb65d6759a9eedfa4d5d612dd5ec54a6b38"\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"As seen, in an APQ request, the query field of the request payload is optional."}),"\n",(0,n.jsx)(r.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsxs)(r.p,{children:["All errors are going to be provided in the ",(0,n.jsx)(r.code,{children:"errors"})," array in the JSON Response:"]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"PersistedQueryNotFound"})," if ",(0,n.jsx)(r.code,{children:"query"})," was not provided and preparsed document could not be found in the cache using the provided ",(0,n.jsx)(r.code,{children:"sha256Hash"}),"\nthe GraphQL Error response will be:"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "errors": [\n    {\n      "message": "PersistedQueryNotFound",\n      "extensions": {\n        "persistedQueryId": "ecf4edb46db40b5132295c0291d62fb65d6759a9eedfa4d5d612dd5ec54a6b38",\n        "classification": "PersistedQueryNotFound"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,n.jsxs)(r.ol,{start:"2",children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"PersistedQueryIdInvalid"})," if ",(0,n.jsx)(r.code,{children:"query"})," was provided but the provided ",(0,n.jsx)(r.code,{children:"sha256Hash"})," does not match with the ",(0,n.jsx)(r.code,{children:"query"}),"\nthe GraphQL Error response will be:"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "errors": [\n    {\n      "message": "PersistedQueryIdInvalid",\n      "extensions": {\n        "persistedQueryId": "ecf4edb46db40b5132295c0291d62fb65d6759a9eedfa4d5d612dd5ec54a6b38",\n        "classification": "PersistedQueryIdInvalid"\n      }\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>o});var n=i(96540);const t={},s=n.createContext(t);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);