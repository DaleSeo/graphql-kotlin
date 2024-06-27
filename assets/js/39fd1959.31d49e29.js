"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5001],{31649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const a={id:"federated-schemas",title:"Federated Schemas"},d=void 0,o={id:"schema-generator/federation/federated-schemas",title:"Federated Schemas",description:"graphql-kotlin-federation library extends the functionality of the graphql-kotlin-schema-generator and allows you to",source:"@site/docs/schema-generator/federation/federated-schemas.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federated-schemas",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/federation/federated-schemas",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/federated-schemas.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1719501861,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"federated-schemas",title:"Federated Schemas"},sidebar:"docs",previous:{title:"Apollo Federation",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/federation/apollo-federation"},next:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/federation/federated-directives"}},s={},c=[{value:"Subgraph A",id:"subgraph-a",level:3},{value:"Subgraph B",id:"subgraph-b",level:3},{value:"Federated Supergraph",id:"federated-supergraph",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"graphql-kotlin-federation"})," library extends the functionality of the ",(0,r.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," and allows you to\neasily generate federated GraphQL schemas directly from the code. Federated schema is generated by calling\n",(0,r.jsx)(n.code,{children:"toFederatedSchema"})," function that accepts federated configuration as well as a list of regular queries, mutations and\nsubscriptions exposed by the schema."]}),"\n",(0,r.jsxs)(n.p,{children:["All ",(0,r.jsx)(n.a,{href:"federated-directives",children:"federated directives"})," are provided as annotations that are used to decorate your classes,\nproperties and functions. Since federated types might not be accessible through the regular query execution path, they\nare explicitly picked up by the schema generator based on their directives. Due to the above, we also need to provide\na way to instantiate the underlying federated objects by implementing corresponding ",(0,r.jsx)(n.code,{children:"FederatedTypeResolvers"}),". See\n",(0,r.jsx)(n.a,{href:"type-resolution",children:"type resolution wiki"})," for more details on how federated types are resolved. Final federated schema\nis then generated by invoking the ",(0,r.jsx)(n.code,{children:"toFederatedSchema"})," function\n(",(0,r.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/toFederatedSchema.kt#L34",children:"link"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"In order to generate valid federated schemas, you will need to annotate your entities in all your subgraphs"}),".\nFederated Gateway (e.g. Apollo) will then combine the individual graphs to form single federated graph."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If you are using custom ",(0,r.jsx)(n.code,{children:"Query"})," type then all of you federated GraphQL services have to use the same type. It is\nnot possible for federated services to have different definitions of ",(0,r.jsx)(n.code,{children:"Query"})," type."]})}),"\n",(0,r.jsx)(n.h3,{id:"subgraph-a",children:"Subgraph A"}),"\n",(0,r.jsxs)(n.p,{children:["Federation v2 relaxed entity ownership and now every subgraph that defines given entity is its owner. In the example\nbelow, we define ",(0,r.jsx)(n.code,{children:"Product"})," type with ",(0,r.jsx)(n.code,{children:"id"})," and ",(0,r.jsx)(n.code,{children:"description"})," fields. ",(0,r.jsx)(n.code,{children:"id"})," is the primary key that uniquely\nidentifies the ",(0,r.jsx)(n.code,{children:"Product"})," type object and is specified in ",(0,r.jsx)(n.code,{children:"@key"})," directive. Since it might be possible to resolve\n",(0,r.jsx)(n.code,{children:"Product"}),' entity from other subgraphs, we also should specify an "entry point" for the federated type - we need to\ncreate a ',(0,r.jsx)(n.code,{children:"FederatedTypeResolver"})," that will be used to instantiate the federated ",(0,r.jsx)(n.code,{children:"Product"})," type when processing federated\nqueries."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@KeyDirective(fields = FieldSet("id"))\ndata class Product(val id: Int, val description: String)\n\nclass ProductQuery {\n  fun product(id: Int): Product? {\n    // grabs product from a data source, might return null\n  }\n}\n\n// Resolve a "Product" type from the _entities query\nclass ProductResolver : FederatedTypeSuspendResolver<Product> {\n    override val typeName = "Product"\n\n    override suspend fun resolve(\n        environment: DataFetchingEnvironment,\n        representation: Map<String, Any>\n    ): Product? =\n        representation["id"]?.toString()?.toIntOrNull()?.let { id -> Product(id) }\n}\n\n// Generate the schema\nval resolvers = listOf(ProductResolver())\nval hooks = FederatedSchemaGeneratorHooks(resolvers)\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\nval queries = listOf(TopLevelObject(ProductQuery()))\n\ntoFederatedSchema(config, queries)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example above generates the following schema with additional federated types:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'schema {\n  query: Query\n}\n\nunion _Entity = Product\n\ntype Product @key(fields : "id") {\n  description: String!\n  id: Int!\n}\n\ntype Query {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service!\n  product(id: Int!): Product\n}\n\ntype _Service {\n  sdl: String!\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"subgraph-b",children:"Subgraph B"}),"\n",(0,r.jsxs)(n.p,{children:["Each subgraph can extend and provide new functionality to entities defined in other subgraphs. In the example below,\n",(0,r.jsx)(n.code,{children:"Product"})," type is extended to add new ",(0,r.jsx)(n.code,{children:"reviews"})," field to it. Primary key needed to instantiate the ",(0,r.jsx)(n.code,{children:"Product"})," type (i.e. ",(0,r.jsx)(n.code,{children:"id"}),")\nhas to match one of the entity ",(0,r.jsx)(n.code,{children:"@key"}),' definitions defined in other subgraphs. Finally, we also need to specify an "entry point"\nfor the federated type - we need to create a FederatedTypeResolver.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@KeyDirective(fields = FieldSet("id"))\ndata class Product(val id: Int) {\n    // Add the "reviews" field to the type\n    suspend fun reviews(): List<Review> = getReviewByProductId(id)\n}\n\ndata class Review(val reviewId: String, val text: String)\n\n// Resolve a "Product" type from the _entities query\nclass ProductResolver : FederatedTypeSuspendResolver<Product> {\n    override val typeName = "Product"\n\n    override suspend fun resolve(\n        environment: DataFetchingEnvironment,\n        representation: Map<String, Any>\n    ): Product? =\n        representation["id"]?.toString()?.toIntOrNull()?.let { id -> Product(id) }\n}\n\n// Generate the schema\nval resolvers = listOf(ProductResolver())\nval hooks = FederatedSchemaGeneratorHooks(resolvers)\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\n\ntoFederatedSchema(config)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Our extended schema will then be generated as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:'schema {\n  query: Query\n}\n\nunion _Entity = Product\n\ntype Product @key(fields : "id") {\n  id: Int!\n  reviews: [Review!]!\n}\n\ntype Query {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service!\n}\n\ntype Review {\n  reviewId: String!\n  text: String!\n}\n\ntype _Service {\n  sdl: String!\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"federated-supergraph",children:"Federated Supergraph"}),"\n",(0,r.jsx)(n.p,{children:"Once we have both GraphQL subgraphs up and running, we will also need to configure Federated Gateway\nto combine them into a single supergraph schema. Using the examples above, our final federated schema will be generated as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"schema {\n  query: Query\n}\n\ntype Product {\n  description: String!\n  id: Int!\n  reviews: [Review!]!\n}\n\ntype Review {\n  reviewId: String!\n  text: String!\n}\n\ntype Query {\n  product(id: String!): Product\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See our ",(0,r.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/federation",children:"federation example"})," for additional details."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(96540);const i={},a=r.createContext(i);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);