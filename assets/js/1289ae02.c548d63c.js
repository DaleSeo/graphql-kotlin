"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5219],{16843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=r(74848),o=r(28453);const i={id:"type-resolution",title:"Federated Type Resolution"},s=void 0,d={id:"schema-generator/federation/type-resolution",title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/versioned_docs/version-7.x.x/schema-generator/federation/type-resolution.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/type-resolution",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/federation/type-resolution",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/schema-generator/federation/type-resolution.md",tags:[],version:"7.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1728268554e3,frontMatter:{id:"type-resolution",title:"Federated Type Resolution"},sidebar:"docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/federation/federated-directives"},next:{title:"Federation Tracing",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/federation/federation-tracing"}},a={},l=[{value:"<code>_entities</code> query",id:"_entities-query",level:2},{value:"Federated Type Resolver",id:"federated-type-resolver",level:2},{value:"Federated Type Suspend Resolver",id:"federated-type-suspend-resolver",level:3},{value:"Federated Type Promise Resolver",id:"federated-type-promise-resolver",level:3},{value:"Provide FederatedTypeResolvers to FederatedSchema",id:"provide-federatedtyperesolvers-to-federatedschema",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."}),"\n",(0,n.jsxs)(t.h2,{id:"_entities-query",children:[(0,n.jsx)(t.code,{children:"_entities"})," query"]}),"\n",(0,n.jsxs)(t.p,{children:["A federated GraphQL server provides a custom ",(0,n.jsx)(t.code,{children:"_entities"})," query that allows retrieving any of the federated extended types.\nThe ",(0,n.jsx)(t.code,{children:"_entities"}),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',(0,n.jsx)(t.code,{children:"_Entity"})," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",(0,n.jsx)(t.code,{children:"@key"})," directives as well as the target ",(0,n.jsx)(t.code,{children:"__typename"})," information. If federated query type fragments also\nreference fields with ",(0,n.jsx)(t.code,{children:"@requires"})," and ",(0,n.jsx)(t.code,{children:"@provides"})," directives, then those referenced fields should also be specified in\nthe target representation object."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"query ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"_entities"})," queries are automatically handled by a federated gateway and their usage is transparent for the gateway clients."]})}),"\n",(0,n.jsx)(t.h2,{id:"federated-type-resolver",children:"Federated Type Resolver"}),"\n",(0,n.jsxs)(t.p,{children:["In order to simplify the integrations, ",(0,n.jsx)(t.code,{children:"graphql-kotlin-federation"})," provides a default ",(0,n.jsx)(t.code,{children:"_entities"})," query data fetcher or resolver that\ninvokes the ",(0,n.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypeResolver.kt",children:"TypeResolver"}),"\nthat is used to resolve the specified ",(0,n.jsx)(t.code,{children:"__typename"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FederatedTypeResolver.typeName"})," specifies the GraphQL type name that should match the ",(0,n.jsx)(t.code,{children:"__typename"})," field in the ",(0,n.jsx)(t.code,{children:"_entities"})," query."]}),"\n",(0,n.jsxs)(t.p,{children:["There are two interfaces that implement the ",(0,n.jsx)(t.code,{children:"FederatedTypeResolver"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypeSuspendResolver.kt",children:"FederatedTypeSuspendResolver"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypePromiseResolver.kt",children:"FederatedTypePromiseResolver"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"federated-type-suspend-resolver",children:"Federated Type Suspend Resolver"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FederatedTypeSuspendResolver.resolve"})," receives a representation of the target ",(0,n.jsx)(t.code,{children:"__typename"})," and will execute\nthe suspending function on a ",(0,n.jsx)(t.code,{children:"CoroutineScope"})," to ",(0,n.jsx)(t.strong,{children:"asynchronously wait"})," to complete the target entity or ",(0,n.jsx)(t.code,{children:"NULL"})," if entity cannot be resolved."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FederatedTypeSuspendResolver.resolve"})," will be invoked based on how many representations of the target entity were\nrequested in the ",(0,n.jsx)(t.code,{children:"_entities"})," query."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'// This service does not own the "Product" type but is extending it with new fields\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newField(): String = getNewFieldByProductId(id)\n}\n\n// This is how the "Product" class is created from the "_entities" query using suspending resolver\nclass ProductResolver : FederatedTypeSuspendResolver<Product> {\n    override val typeName: String = "Product"\n\n    override suspend fun resolve(\n        environment: DataFetchingEnvironment,\n        representation: Map<String, Any>\n    ): Product? {\n        val id = representation["id"]?.toString()\n        // Instantiate product using id, otherwise return null\n        return if (id != null) {\n            Product(id)\n        } else {\n            null\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["this suspend implementation relies on the same coroutine scope propagation as the\ndefault ",(0,n.jsx)(t.code,{children:"FunctionDataFetcher"}),". See ",(0,n.jsx)(t.a,{href:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/async-models",children:"asynchronous models documentation"})," for additional details.\nAdditionally you can also use ",(0,n.jsx)(t.code,{children:"FederatedTypePromiseResolver"})," which is compatible with ",(0,n.jsx)(t.code,{children:"DataLoader"}),"'s async model given that returns\na ",(0,n.jsx)(t.code,{children:"CompletableFuture"}),", that way you get advantage of batching and deduplication of transactions to downstream."]})}),"\n",(0,n.jsx)(t.h3,{id:"federated-type-promise-resolver",children:"Federated Type Promise Resolver"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FederatedTypePromiseResolver.resolve"})," receives a representation of the target ",(0,n.jsx)(t.code,{children:"__typename"})," and provides a ",(0,n.jsx)(t.code,{children:"CompletableFuture"})," of\na nullable instance of target entity."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'// This service does not own the "Product" type but is extending it with new fields\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newField(): String = getNewFieldByProductId(id)\n}\n\n// This is how the "Product" class is created from the "_entities" query using promise resolver\nclass ProductResolver : FederatedTypePromiseResolver<Product> {\n    override val typeName: String = "Product"\n\n    override fun resolve(\n        environment: DataFetchingEnvironment,\n        representation: Map<String, Any>\n    ): CompletableFuture<Product?> {\n        val id = representation["id"]?.toString()\n        // use dataloader to resolve Product by id\n        return environment.getDataLoader<String, Product?>("ProductDataLoader").load(id)\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"provide-federatedtyperesolvers-to-federatedschema",children:"Provide FederatedTypeResolvers to FederatedSchema"}),"\n",(0,n.jsxs)(t.p,{children:["Provide a ",(0,n.jsx)(t.code,{children:"List<FederatedTypeResolver>"})," to the ",(0,n.jsx)(t.code,{children:"FederatedSchemaGeneratorHooks"})," and ",(0,n.jsx)(t.code,{children:"graphql-kotlin"})," will create the\ndata fetcher or resolver using your custom federated type resolvers"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'val resolvers = listOf(productResolver)\nval hooks = FederatedSchemaGeneratorHooks(resolvers)\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\nval schema = toFederatedSchema(config)\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you are using ",(0,n.jsx)(t.code,{children:"graphql-kotlin-spring-server"}),", each of your FederatedTypeResolvers can be marked as Spring Beans\nand will automatically be added to the ",(0,n.jsx)(t.code,{children:"FederatedSchemaGeneratorHooks"})," by using autoconfiguration."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var n=r(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);