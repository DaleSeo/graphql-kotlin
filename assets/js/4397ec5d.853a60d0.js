"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"scalars",title:"Scalars"},s=void 0,p={unversionedId:"schema-generator/writing-schemas/scalars",id:"schema-generator/writing-schemas/scalars",title:"Scalars",description:"Primitive Types",source:"@site/docs/schema-generator/writing-schemas/scalars.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/scalars",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/scalars",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/scalars.md",tags:[],version:"current",lastUpdatedBy:"Ravi Kumar",lastUpdatedAt:1648863561,formattedLastUpdatedAt:"4/2/2022",frontMatter:{id:"scalars",title:"Scalars"},sidebar:"docs",previous:{title:"Arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/arguments"},next:{title:"Enums",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/enums"}},c={},d=[{value:"Primitive Types",id:"primitive-types",level:2},{value:"GraphQL ID",id:"graphql-id",level:2},{value:"Custom Scalars",id:"custom-scalars",level:2},{value:"Inline Value Classes",id:"inline-value-classes",level:3},{value:"Common Issues",id:"common-issues",level:2},{value:"Extended Scalars",id:"extended-scalars",level:3},{value:"<code>TypeNotSupportedException</code>",id:"typenotsupportedexception",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"primitive-types"},"Primitive Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),' can directly map most Kotlin "primitive" types to standard GraphQL scalar types or\nextended scalar types provided by ',(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kotlin Type"),(0,i.kt)("th",{parentName:"tr",align:null},"GraphQL Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.String")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.Int")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Int"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.Double")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Float"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.Float")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Float"))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The GraphQL spec uses the term ",(0,i.kt)("inlineCode",{parentName:"p"},"Float")," for signed double\u2010precision fractional values. ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," maps this to a ",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.Double")," for the execution. The generator will map both ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Double")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Float")," to GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"Float")," but we recommend you use ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Double"),"."))),(0,i.kt)("h2",{id:"graphql-id"},"GraphQL ID"),(0,i.kt)("p",null,"GraphQL supports the scalar type ",(0,i.kt)("inlineCode",{parentName:"p"},"ID"),", a unique identifier that is not intended to be human-readable. IDs are\nserialized as a ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),". To expose a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," field, you must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.generator.scalars.ID"),"\nclass, which is an ",(0,i.kt)("em",{parentName:"p"},"inline value class")," that wraps the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," supports additional types (",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Long"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID"),") but ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/317"},"due to serialization issues")," we can only directly support Strings."))),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," is a value class, it may be represented at runtime as a wrapper or directly as underlying type. Due to the generic\nnature of the query processing logic we ",(0,i.kt)("em",{parentName:"p"},"always")," end up with up a wrapper type when resolving the field value. As a result,\nin order to ensure that underlying scalar value is correctly serialized, we need to explicitly unwrap it by registering\n",(0,i.kt)("inlineCode",{parentName:"p"},"IDValueUnboxer")," with your GraphQL instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// registering custom value unboxer\nval graphQL = GraphQL.newGraphQL(graphQLSchema)\n    .valueUnboxer(IDValueUnboxer())\n    .build()\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"IDValueUnboxer")," bean is automatically configured by ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Person(\n    val id: ID,\n    val name: String\n)\n\nfun findPersonById(id: ID) = Person(id, "John Smith")\n\nfun generateRandomId(): ID = ID(UUID.randomUUID().toString())\n')),(0,i.kt)("p",null,"This would produce the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n    query: Query\n}\n\ntype Query {\n    findPersonById(id: ID!): Person!\n    generateRandomId: ID!\n}\n\ntype Person {\n    id: ID!\n    name: String!\n}\n")),(0,i.kt)("h2",{id:"custom-scalars"},"Custom Scalars"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," uses Kotlin reflections to generate all schema objects. If you want to\napply custom behavior to the objects, you can also define your own custom scalars. Custom scalars have to be explicitly\nadded to the schema through ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks.willGenerateGraphQLType"),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),(0,i.kt)("p",null,"Example usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier as? KClass<*>) {\n    UUID::class -> graphqlUUIDType\n    else -> null\n  }\n}\n\nval graphqlUUIDType = GraphQLScalarType.newScalar()\n    .name("UUID")\n    .description("A type representing a formatted java.util.UUID")\n    .coercing(UUIDCoercing)\n    .build()\n\nobject UUIDCoercing : Coercing<UUID, String> {\n    override fun parseValue(input: Any): UUID = runCatching {\n        UUID.fromString(serialize(input))\n    }.getOrElse {\n        throw CoercingParseValueException("Expected valid UUID but was $input")\n    }\n\n    override fun parseLiteral(input: Any): UUID {\n        val uuidString = (input as? StringValue)?.value\n        return runCatching {\n            UUID.fromString(uuidString)\n        }.getOrElse {\n            throw CoercingParseLiteralException("Expected valid UUID literal but was $uuidString")\n        }\n    }\n\n    override fun serialize(dataFetcherResult: Any): String = runCatching {\n        dataFetcherResult.toString()\n    }.getOrElse {\n        throw CoercingSerializeException("Data fetcher result $dataFetcherResult cannot be serialized to a String")\n    }\n}\n')),(0,i.kt)("p",null,"Once the scalars are registered you can use them anywhere in the schema as regular objects."),(0,i.kt)("h3",{id:"inline-value-classes"},"Inline Value Classes"),(0,i.kt)("p",null,"It is often beneficial to create a wrapper around the underlying primitive type to better represent its meaning. Inline value classes can be used\nto optimize such use cases - Kotlin compiler will attempt to use underlying type directly whenever possible and only keep the wrapper classes\nwhenever it is necessary."),(0,i.kt)("p",null,"In order to use inline value classes in your schema, you need to register it using hooks and also provide value unboxer that will be used by\n",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," when dealing with its wrapper object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@JvmInline\nvalue class MyValueClass(\n    val value: String\n)\n\nclass MyQuery : Query {\n    fun inlineValueClassQuery(value: MyValueClass? = null): MyValueClass = value ?: MyValueClass("default")\n}\n\nclass MySchemaGeneratorHooks : SchemaGeneratorHooks {\n    override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier) {\n        MyValueClass::class -> Scalars.GraphQLString\n        else -> null\n    }\n}\n\nclass MyValueUnboxer : IDValueUnboxer() {\n    override fun unbox(`object`: Any?): Any? = if (`object` is MyValueClass) {\n        `object`.value\n    } else {\n        super.unbox(`object`)\n    }\n}\n\nval config = SchemaGeneratorConfig(\n    supportedPackages = listOf("com.example"),\n    hooks = MySchemaGeneratorHooks()\n)\nval schema = toSchema(\n    config = config,\n    queries = listOf(TopLevelObject(MyQuery()))\n)\nval graphQL = GraphQL.newGraphQL(graphQLSchema)\n    .valueUnboxer(MyValueUnboxer())\n    .build()\n')),(0,i.kt)("p",null,"This will generate the schema that exposes value classes as corresponding primitive types in the schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  inlineValueClassQuery(value: String): String!\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"GraphQL ID scalar type is represented using inline value class. When registering additional inline value classes you should extend the\n",(0,i.kt)("inlineCode",{parentName:"p"},"IDValueUnboxer")," to ensure IDs will be correctly processed."),(0,i.kt)("p",{parentName:"div"},"If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," you should create an instance of your bean as"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun idValueUnboxer(): IDValueUnboxer = MyValueUnboxer()\n")))),(0,i.kt)("h2",{id:"common-issues"},"Common Issues"),(0,i.kt)("h3",{id:"extended-scalars"},"Extended Scalars"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," only supports the primitive scalar types listed above. If you are looking to use common java types as scalars, you need to include the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-extended-scalars"},"graphql-java-extended-scalars")," library and set up the hooks (see above), or write the logic yourself for how to resolve these custom scalars."),(0,i.kt)("p",null,"The most popular types that require extra configuration are: ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalDate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Instant"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID")),(0,i.kt)("h3",{id:"typenotsupportedexception"},(0,i.kt)("inlineCode",{parentName:"h3"},"TypeNotSupportedException")),(0,i.kt)("p",null,"If you see the following message ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot convert ** since it is not a valid GraphQL type or outside the supported packages ***"),". This means that you need to update the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"generator configuration")," to include the package of your type or you did not properly set up the hooks to register the new type."))}m.isMDXComponent=!0}}]);