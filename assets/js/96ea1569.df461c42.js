"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8261],{29702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(74848),o=r(28453);const i={id:"type-resolution",title:"Federated Type Resolution",original_id:"type-resolution"},s=void 0,a={id:"federated/type-resolution",title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/versioned_docs/version-3.x.x/federated/type-resolution.md",sourceDirName:"federated",slug:"/federated/type-resolution",permalink:"/graphql-kotlin/docs/3.x.x/federated/type-resolution",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/type-resolution.md",tags:[],version:"3.x.x",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"type-resolution",title:"Federated Type Resolution",original_id:"type-resolution"},sidebar:"docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-directives"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"}},d={},l=[{value:"<code>_entities</code> query",id:"_entities-query",level:2},{value:"Federated Type Resolver",id:"federated-type-resolver",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."}),"\n",(0,n.jsxs)(t.h2,{id:"_entities-query",children:[(0,n.jsx)(t.code,{children:"_entities"})," query"]}),"\n",(0,n.jsxs)(t.p,{children:["Federated GraphQL server provides custom ",(0,n.jsx)(t.code,{children:"_entities"})," query that allow retrieving any of the federated extended types.\n",(0,n.jsx)(t.code,{children:"_entities"}),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',(0,n.jsx)(t.code,{children:"_Entity"})," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",(0,n.jsx)(t.code,{children:"@key"})," directive as well as target ",(0,n.jsx)(t.code,{children:"__typename"})," information. If federated query type fragments also\nreference fields with ",(0,n.jsx)(t.code,{children:"@requires"})," and ",(0,n.jsx)(t.code,{children:"@provides"})," directives then those referenced fields should also be specified in\nthe target representation object."]}),"\n",(0,n.jsxs)(t.p,{children:["> NOTE: ",(0,n.jsx)(t.code,{children:"_entities"})," queries are automatically generated by the federated gateway and their usage is transparent for the\n> gateway clients."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"\nquery ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"federated-type-resolver",children:"Federated Type Resolver"}),"\n",(0,n.jsxs)(t.p,{children:["In order to simplify the integrations, ",(0,n.jsx)(t.code,{children:"graphql-kotlin-federation"})," provides default ",(0,n.jsx)(t.code,{children:"_entities"})," query resolver that\nrelies on\n",(0,n.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/execution/FederatedTypeRegistry.kt",children:"FederatedTypeRegistry"}),"\nto retrieve\n",(0,n.jsx)(t.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/execution/FederatedTypeResolver.kt",children:"FederatedTypeResolver"}),"\nthat is used to resolve target object. When configuring the federated schema generator hooks you have to explicitly\nprovide those resolver mappings to the configuration."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FederatedTypeResolver"})," accepts a list of representations of the target types which should be resolved in the same order\nas they were specified in the list of representations. Each passed in representation should either be resolved to a\ntarget entity or NULL if entity cannot be resolved."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'\nval productResolver = object: FederatedTypeResolver<Product> {\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map {\n        val id = it["id"]?.toString()?.toIntOrNull()\n        // instantiate product using id\n    }\n}\n// federated type registry provides mapping between target __typename and the corresponding type resolver\nval federatedTypeRegistry = FederatedTypeRegistry(mapOf("Product" to productResolver))\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = FederatedSchemaGeneratorHooks(federatedTypeRegistry))\nval schema = toFederatedSchema(config)\n\n'})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);