"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8792],{21731:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(74848),t=r(28453);const a={id:"scalars",title:"Scalars"},o=void 0,i={id:"schema-generator/writing-schemas/scalars",title:"Scalars",description:"Primitive Types",source:"@site/versioned_docs/version-5.x.x/schema-generator/writing-schemas/scalars.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/scalars",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/scalars",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/writing-schemas/scalars.md",tags:[],version:"5.x.x",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"scalars",title:"Scalars"},sidebar:"docs",previous:{title:"Arguments",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/arguments"},next:{title:"Enums",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/enums"}},l={},c=[{value:"Primitive Types",id:"primitive-types",level:2},{value:"GraphQL ID",id:"graphql-id",level:2},{value:"Custom Scalars",id:"custom-scalars",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Extended Scalars",id:"extended-scalars",level:3},{value:"<code>TypeNotSupportedException</code>",id:"typenotsupportedexception",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"primitive-types",children:"Primitive Types"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"graphql-kotlin-schema-generator"}),' can directly map most Kotlin "primitive" types to standard GraphQL scalar types or\nextended scalar types provided by ',(0,s.jsx)(n.code,{children:"graphql-java"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Kotlin Type"}),(0,s.jsx)(n.th,{children:"GraphQL Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kotlin.String"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kotlin.Boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kotlin.Int"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Int"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kotlin.Double"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Float"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kotlin.Float"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Float"})})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The GraphQL spec uses the term ",(0,s.jsx)(n.code,{children:"Float"})," for signed double\u2010precision fractional values. ",(0,s.jsx)(n.code,{children:"graphql-java"})," maps this to a ",(0,s.jsx)(n.code,{children:"java.lang.Double"})," for the execution. The generator will map both ",(0,s.jsx)(n.code,{children:"kotlin.Double"})," and ",(0,s.jsx)(n.code,{children:"kotlin.Float"})," to GraphQL ",(0,s.jsx)(n.code,{children:"Float"})," but we reccomend you use ",(0,s.jsx)(n.code,{children:"kotlin.Double"})]})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["Extended GraphQL scalar types provided by ",(0,s.jsx)(n.code,{children:"graphql-java"})," were ",(0,s.jsx)(n.a,{href:"https://github.com/graphql-java/graphql-java/releases/tag/v15.0",children:"deprecated in v15"}),".\nThis includes the following types: ",(0,s.jsx)(n.code,{children:"Long"}),", ",(0,s.jsx)(n.code,{children:"Short"}),", ",(0,s.jsx)(n.code,{children:"BigInteger"}),", ",(0,s.jsx)(n.code,{children:"BigDecimal"}),", and ",(0,s.jsx)(n.code,{children:"Char"}),". If you are currently\nusing these types, they will be removed in future ",(0,s.jsx)(n.code,{children:"graphql-java"})," releases."]}),(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://github.com/graphql-java/graphql-java-extended-scalars",children:"graphql-java-extended-scalars"})," project if you need continued support."]})]}),"\n",(0,s.jsx)(n.h2,{id:"graphql-id",children:"GraphQL ID"}),"\n",(0,s.jsxs)(n.p,{children:["GraphQL supports the scalar type ",(0,s.jsx)(n.code,{children:"ID"}),", a unique identifier that is not intended to be human readable. IDs are\nserialized as a ",(0,s.jsx)(n.code,{children:"String"}),". To expose a GraphQL ",(0,s.jsx)(n.code,{children:"ID"})," field, you must use the ",(0,s.jsx)(n.code,{children:"com.expediagroup.graphql.generator.scalars.ID"})," class, which wraps the underlying ",(0,s.jsx)(n.code,{children:"String"})," value."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"graphql-java"})," supports additional types (",(0,s.jsx)(n.code,{children:"String"}),", ",(0,s.jsx)(n.code,{children:"Int"}),", ",(0,s.jsx)(n.code,{children:"Long"}),", or ",(0,s.jsx)(n.code,{children:"UUID"}),") but ",(0,s.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/317",children:"due to serialization issues"})," we can only directly support Strings. You can still use a type like UUID internally just as long as you convert or parse the value yourself and handle the errors."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'data class Person(\n    val id: ID,\n    val name: String\n)\n\nfun findPersonById(id: ID) = Person(id, "John Smith")\n\nfun generateRandomId(): ID = ID(UUID.randomUUID().toString())\n'})}),"\n",(0,s.jsx)(n.p,{children:"This would produce the following schema:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"schema {\n    query: Query\n}\n\ntype Query {\n    findPersonById(id: ID!): Person!\n    generateRandomId: ID!\n}\n\ntype Person {\n    id: ID!\n    name: String!\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"custom-scalars",children:"Custom Scalars"}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," uses Kotlin reflections to generate all schema objects. If you want to\napply custom behavior to the objects, you can also define your own custom scalars. Custom scalars have to be explicitly\nadded to the schema through ",(0,s.jsx)(n.code,{children:"SchemaGeneratorHooks.willGenerateGraphQLType"}),".\nSee the ",(0,s.jsx)(n.a,{href:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/generator-config",children:"Generator Configuration"})," documentation for more information."]}),"\n",(0,s.jsx)(n.p,{children:"Example usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'class CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier as? KClass<*>) {\n    UUID::class -> graphqlUUIDType\n    else -> null\n  }\n}\n\nval graphqlUUIDType = GraphQLScalarType.newScalar()\n    .name("UUID")\n    .description("A type representing a formatted java.util.UUID")\n    .coercing(UUIDCoercing)\n    .build()\n\nobject UUIDCoercing : Coercing<UUID, String> {\n    override fun parseValue(input: Any?): UUID = UUID.fromString(serialize(input))\n\n    override fun parseLiteral(input: Any?): UUID? {\n        val uuidString = (input as? StringValue)?.value\n        return UUID.fromString(uuidString)\n    }\n\n    override fun serialize(dataFetcherResult: Any?): String = dataFetcherResult.toString()\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Once the scalars are registered you can use them anywhere in the schema as regular objects."}),"\n",(0,s.jsx)(n.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,s.jsx)(n.h3,{id:"extended-scalars",children:"Extended Scalars"}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"graphql-kotlin"})," only supports the primitive scalar types listed above. If you are looking to use common java types as scalars, you need to include the ",(0,s.jsx)(n.a,{href:"https://github.com/graphql-java/graphql-java-extended-scalars",children:"graphql-java-extended-scalars"})," library and set up the hooks (see above), or write the logic yourself for how to resolve these custom scalars."]}),"\n",(0,s.jsxs)(n.p,{children:["The most popular types that require extra configuration are: ",(0,s.jsx)(n.code,{children:"LocalDate"}),", ",(0,s.jsx)(n.code,{children:"DateTime"}),", ",(0,s.jsx)(n.code,{children:"Instant"}),", ",(0,s.jsx)(n.code,{children:"ZonedDateTime"}),", ",(0,s.jsx)(n.code,{children:"URL"}),", ",(0,s.jsx)(n.code,{children:"UUID"})]}),"\n",(0,s.jsx)(n.h3,{id:"typenotsupportedexception",children:(0,s.jsx)(n.code,{children:"TypeNotSupportedException"})}),"\n",(0,s.jsxs)(n.p,{children:["If you see the following message ",(0,s.jsx)(n.code,{children:"Cannot convert ** since it is not a valid GraphQL type or outside the supported packages ***"}),". This means that you need to update the ",(0,s.jsx)(n.a,{href:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/generator-config",children:"generator configuration"})," to include the package of your type or you did not properly set up the hooks to register the new type."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);