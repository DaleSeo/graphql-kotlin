"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8687],{61962:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=a(74848),r=a(28453),i=a(11470),l=a(19365);const s={id:"client-features",title:"Client Features"},o=void 0,c={id:"client/client-features",title:"Client Features",description:"Jackson and Kotlinx Serialization Support",source:"@site/versioned_docs/version-7.x.x/client/client-features.mdx",sourceDirName:"client",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/client/client-features",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/client/client-features.mdx",tags:[],version:"7.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1719501861,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"client-features",title:"Client Features"},sidebar:"docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/client/client-customization"}},u={},d=[{value:"Jackson and Kotlinx Serialization Support",id:"jackson-and-kotlinx-serialization-support",level:2},{value:"Polymorphic Types Support",id:"polymorphic-types-support",level:2},{value:"Custom Scalar Support",id:"custom-scalar-support",level:2},{value:"Default Enum Values",id:"default-enum-values",level:2},{value:"Auto Generated Documentation",id:"auto-generated-documentation",level:2},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",level:2},{value:"Batch Operation Support",id:"batch-operation-support",level:2},{value:"Optional Input Support",id:"optional-input-support",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"jackson-and-kotlinx-serialization-support",children:"Jackson and Kotlinx Serialization Support"}),"\n",(0,t.jsxs)(n.p,{children:["GraphQL Kotlin supports generation of client data models that are compatible with both ",(0,t.jsx)(n.code,{children:"Jackson"})," (default) and ",(0,t.jsx)(n.code,{children:"kotlinx.serialization"}),"\nformats. Build plugins and ",(0,t.jsx)(n.code,{children:"graphql-kotlin-spring-client"})," default to use ",(0,t.jsx)(n.code,{children:"Jackson"})," whereas ",(0,t.jsx)(n.code,{children:"graphql-kotlin-ktor-client"}),"\ndefaults to ",(0,t.jsx)(n.code,{children:"kotlinx.serialization"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/graphql-kotlin/docs/client/client-serialization",children:"client serialization documentation"})," for additional details."]}),"\n",(0,t.jsx)(n.h2,{id:"polymorphic-types-support",children:"Polymorphic Types Support"}),"\n",(0,t.jsxs)(n.p,{children:["GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nwill automatically generate fallback implementations that will be used if there is no match. Polymorphic queries have to\nexplicitly request ",(0,t.jsx)(n.code,{children:"__typename"})," field as it is used by serializers to correctly distinguish between different implementations."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kotlinx-serialization"})," currently does not provide mechanism to automatically register polymorphic fallbacks. Fallbacks\nhave to be explicitly configured when creating your ",(0,t.jsx)(n.code,{children:"GraphQLClientKotlinxSerializer"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val serializerWithFallback = GraphQLClientKotlinxSerializer(jsonBuilder = {\n    serializersModule = SerializersModule {\n        polymorphic(BasicInterface::class) {\n            defaultDeserializer { DefaultBasicInterfaceImplementation.serializer() }\n        }\n    }\n})\nval client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"), serializer = serializerWithFallback)\n'})}),(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/Kotlin/kotlinx.serialization/issues/1575",children:"https://github.com/Kotlin/kotlinx.serialization/issues/1575"})," for details."]})]}),"\n",(0,t.jsx)(n.p,{children:"Given example schema"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"We can query interface field as"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"query PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Which will generate following data models"}),"\n",(0,t.jsxs)(i.A,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],children:[(0,t.jsx)(l.A,{value:"jackson",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Generated\n@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename",\n  defaultImpl = DefaultBasicInterfaceImplementation::class\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Generated\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface\n\n@Generated\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface\n\n@Generated\ndata class DefaultBasicInterfaceImplementation(\n  override val id: Int,\n  override val name: String\n) : BasicInterface\n'})})}),(0,t.jsx)(l.A,{value:"kotlinx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Generated\n@Serializable\nsealed class BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Generated\n@Serializable\n@SerialName(value = "FirstInterfaceImplementation")\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface()\n\n@Generated\n@Serializable\n@SerialName(value = "SecondInterfaceImplementation")\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface()\n\n@Generated\n@Serializable\ndata class DefaultBasicInterfaceImplementation(\n  override val id: String\n  override val name: String\n) : BasicInterface()\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"custom-scalar-support",children:"Custom Scalar Support"}),"\n",(0,t.jsxs)(n.p,{children:["By default, custom GraphQL scalars are serialized and ",(0,t.jsx)(n.a,{href:"https://kotlinlang.org/docs/reference/type-aliases.html",children:"type-aliased"}),"\nto a String. GraphQL Kotlin plugins also support custom serialization based on provided configuration."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to automatically convert between custom GraphQL ",(0,t.jsx)(n.code,{children:"UUID"})," scalar type and ",(0,t.jsx)(n.code,{children:"java.util.UUID"}),", we first need to create\nour custom ",(0,t.jsx)(n.code,{children:"ScalarConverter"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"package com.example.client\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString())\n    override fun toJson(value: UUID): Any = value.toString()\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"And then configure build plugin by specifying"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Custom GraphQL scalar name"}),"\n",(0,t.jsx)(n.li,{children:"Target JVM class name"}),"\n",(0,t.jsx)(n.li,{children:"Converter that provides logic to map between GraphQL and Kotlin type"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'graphql {\n    packageName = "com.example.generated"\n    endpoint = "http://localhost:8080/graphql"\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Custom scalar fields will then be automatically converted to a ",(0,t.jsx)(n.code,{children:"java.util.UUID"})," type using appropriate converter/serializer."]}),"\n",(0,t.jsxs)(i.A,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],children:[(0,t.jsxs)(l.A,{value:"jackson",children:[(0,t.jsxs)(n.p,{children:["Following converters will be generated under ",(0,t.jsx)(n.code,{children:"com.example.generated.scalars"})," package."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Generated\npublic class AnyToUUIDConverter : StdConverter<Any, UUID>() {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override fun convert(`value`: Any): UUID = converter.toScalar(value)\n}\n\n@Generated\npublic class UUIDToAnyConverter : StdConverter<UUID, Any>() {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override fun convert(`value`: UUID): Any = converter.toJson(value)\n}\n"})}),(0,t.jsx)(n.p,{children:"Custom scalars fields will then be annotated with Jackson annotations referencing the above converters."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Generated\npublic data class Result(\n  @JsonSerialize(converter = UUIDToAnyConverter::class)\n  @JsonDeserialize(converter = AnyToUUIDConverter::class)\n  public val custom: UUID,\n  @JsonSerialize(contentConverter = UUIDToAnyConverter::class)\n  @JsonDeserialize(contentConverter = AnyToUUIDConverter::class)\n  public val customList: List<UUID>\n)\n"})})]}),(0,t.jsxs)(l.A,{value:"kotlinx",children:[(0,t.jsxs)(n.p,{children:["Following serializer will be generated under ",(0,t.jsx)(n.code,{children:"com.example.generated.scalars"})," package."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Generated\npublic object UUIDSerializer : KSerializer<UUID> {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("UUID", STRING)\n\n  public override fun serialize(encoder: Encoder, `value`: UUID): Unit {\n    val encoded = converter.toJson(value)\n    encoder.encodeString(encoded.toString())\n  }\n\n  public override fun deserialize(decoder: Decoder): UUID {\n    val jsonDecoder = decoder as JsonDecoder\n    val element = jsonDecoder.decodeJsonElement()\n    val rawContent = element.jsonPrimitive.content\n    return converter.toScalar(rawContent)\n  }\n}\n'})}),(0,t.jsxs)(n.p,{children:["Custom scalars fields will then be annotated with ",(0,t.jsx)(n.code,{children:"@Serializable"})," annotation referencing the above serializer."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Generated\n@Serializable\npublic data class Result(\n  @Serializable(with = UUIDSerializer::class)\n  public val custom: UUID,\n  public val customList: List<@Serializable(with = UUIDSerializer::class) UUID>\n)\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks",children:"Gradle"})," and ",(0,t.jsx)(n.a,{href:"/graphql-kotlin/docs/plugins/maven-plugin-goals",children:"Maven"})," plugin documentation for additional details."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["While custom scalars are most commonly represented using some primitive values (e.g. serializing UUID as String), it is\npossible to use arbitrary objects representation as custom scalar. For example Apollo Federation relies on ",(0,t.jsx)(n.code,{children:"_Any"})," scalar\nto accept federated entity representations which is a JSON map containing ",(0,t.jsx)(n.code,{children:"__typename"})," information and a number of additional\nfields used to uniquely identify the target object."]}),(0,t.jsxs)(i.A,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],children:[(0,t.jsxs)(l.A,{value:"jackson",children:[(0,t.jsx)(n.p,{children:"Jackson uses reflection to automatically serialize the objects. In order to rely on this behavior for custom scalars,\nwe simply need to implement a pass-through converter."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"class AnyScalarConverter : ScalarConverter<Any> {\n    override fun toScalar(rawValue: Any): Any = rawValue\n    override fun toJson(value: Any): Any = value\n}\n"})}),(0,t.jsxs)(n.p,{children:["This will allow us to pass arbitrary objects as custom scalar inputs. Given following Federation type and ",(0,t.jsx)(n.code,{children:"_entities"})," query"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'type Product @key(fields : "id") {\n    id: String!\n    name: String!\n}\n\nquery EntitiesQuery($representations: [_Any!]!) {\n    _entities(representations: $representations) {\n        __typename\n        ...on Product { name }\n        }\n    }\n}\n'})}),(0,t.jsxs)(n.p,{children:["We can create corresponding ",(0,t.jsx)(n.code,{children:"ProductEntityRepresentation"})," data class and use it in our generated query."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'data class ProductEntityRepresentation(val id: String) {\n    val __typename: String = "Product"\n}\n\nval entityData = client.execute(EntitiesQuery(variables = EntitiesQuery.Variables(representations = listOf(ProductEntityRepresentation(id = "apollo-federation")))))\n'})})]}),(0,t.jsxs)(l.A,{value:"kotlinx",children:[(0,t.jsxs)(n.p,{children:["Using kotlinx-serialization we can use ",(0,t.jsx)(n.code,{children:"JsonObject"})," to represent arbitrary objects as custom scalars."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"class AnyScalarConverter : ScalarConverter<JsonObject> {\n    override fun toScalar(rawValue: Any): JsonObject = Json.parseToJsonElement(rawValue.toString()).jsonObject\n    override fun toJson(value: JsonObject): Any = value\n}\n"})}),(0,t.jsxs)(n.p,{children:["This will allow us to pass arbitrary objects as custom scalar inputs. Given following Federation type and ",(0,t.jsx)(n.code,{children:"_entities"})," query"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'type Product @key(fields : "id") {\n    id: String!\n    name: String!\n}\n\nquery EntitiesQuery($representations: [_Any!]!) {\n    _entities(representations: $representations) {\n        __typename\n        ...on Product { name }\n        }\n    }\n}\n'})}),(0,t.jsxs)(n.p,{children:["We can then represent product entity representation as ",(0,t.jsx)(n.code,{children:"JsonObject"})," and use it in our generated query."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val entity = Json.decodeFromString<JsonObject>(\n    """\n    |{\n    |  "__typename": "Product",\n    |  "id": "apollo-federation"\n    |}\n    """.trimMargin()\n)\n\nval entityData = client.execute(EntitiesQuery(variables = EntitiesQuery.Variables(representations = listOf(entity))))\n'})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"default-enum-values",children:"Default Enum Values"}),"\n",(0,t.jsxs)(n.p,{children:["Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",(0,t.jsx)(n.code,{children:"__UNKNOWN_VALUE"})," to all generated\nenums as a catch all safeguard for handling new enum values."]}),"\n",(0,t.jsx)(n.h2,{id:"auto-generated-documentation",children:"Auto Generated Documentation"}),"\n",(0,t.jsx)(n.p,{children:"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."}),"\n",(0,t.jsx)(n.p,{children:"Given simple GraphQL object definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:'"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will result in a corresponding auto generated data class"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"/**\n * Some basic description\n */\n @Generated\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"native-support-for-coroutines",children:"Native Support for Coroutines"}),"\n",(0,t.jsxs)(n.p,{children:["GraphQL Kotlin Client is a generic interface that exposes ",(0,t.jsx)(n.code,{children:"execute"})," methods that will suspend your GraphQL operation until\nit gets a response back without blocking the underlying thread. Reference Ktor and Spring WebClient based implementations\noffer fully asynchronous communication through Kotlin coroutines. In order to fetch data asynchronously you should wrap\nyour client execution in ",(0,t.jsx)(n.code,{children:"launch"})," or ",(0,t.jsx)(n.code,{children:"async"})," coroutine builder and explicitly ",(0,t.jsx)(n.code,{children:"await"})," for their results."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://kotlinlang.org/docs/reference/coroutines-overview.html",children:"Kotlin coroutines documentation"})," for additional details."]}),"\n",(0,t.jsx)(n.h2,{id:"batch-operation-support",children:"Batch Operation Support"}),"\n",(0,t.jsx)(n.p,{children:"GraphQL Kotlin Clients provide out of the box support for batching multiple client operations into a single GraphQL request.\nBatch requests are sent as an array of individual GraphQL requests and clients expect the server to respond with a corresponding\narray of GraphQL responses. Each response is then deserialized to a corresponding result type."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"))\nval firstQuery = FirstQuery(variables = FirstQuery.Variables(foo = "bar"))\nval secondQuery = SecondQuery(variables = SecondQuery.Variables(foo = "baz"))\n\nval results: List<GraphQLResponse<*>> = client.execute(listOf(firstQuery, secondQuery))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"optional-input-support",children:"Optional Input Support"}),"\n",(0,t.jsxs)(n.p,{children:["In the GraphQL world, input types can be optional which means that the client can specify a value, specify a ",(0,t.jsx)(n.code,{children:"null"})," value\nOR don't specify any value. This is in contrast with the JVM world where objects can either have some specific value or\ndon't have any value (i.e. are ",(0,t.jsx)(n.code,{children:"null"}),"). By default, GraphQL Kotlin Client treats ",(0,t.jsx)(n.code,{children:"null"})," Kotlin values as unspecified, which\nmeans they will skip all ",(0,t.jsx)(n.code,{children:"null"})," values when serializing the request, e.g. given following query"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"query OptionalInputQuery($optionalValue: String) {\n  optional(value: $optionalValue)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["GraphQL Kotlin plugins will generate corresponding POJO that defines ",(0,t.jsx)(n.code,{children:"Variables"})," as"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"public data class Variables(\n  public val optionalValue: String? = null\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Regardless whether we specify ",(0,t.jsx)(n.code,{children:"optionalValue"})," as ",(0,t.jsx)(n.code,{children:"null"})," or rely on the default value, this field won't be serialized,\ni.e. variables will be serialized as an empty JSON object ",(0,t.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["By specifying ",(0,t.jsx)(n.code,{children:"useOptionalInputWrapper = true"})," plugin configuration option, we can opt-in to a behavior that supports\nthree states - defined, ",(0,t.jsx)(n.code,{children:"null"})," or undefined. Generated code will then use ",(0,t.jsx)(n.code,{children:"OptionalInput"})," wrapper to represent those states.\nSee ",(0,t.jsx)(n.a,{href:"../plugins/gradle-plugin-tasks",children:"Gradle"})," and ",(0,t.jsx)(n.a,{href:"../plugins/maven-plugin-goals",children:"Maven"})," plugin for configuration details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'public data class Variables(\n  public val optionalValue: OptionalInput<String> = OptionalInput.Undefined\n)\n\n// usage\n// - same behavior as default null, serialized as {}\nval undefinedVariables = Variables(optionalValue = OptionalInput.Undefined)\n\n// - serialized as {"optionalValue": null}\nval nullVariables = Variables(optionalValue = OptionalInput.Defined(null))\n\n// - serialized as {"optionalValue": "foo"}\nval definedVariables = Variables(optionalValue = OptionalInput.Defined("foo")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>l});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var i=a(74848);function l(e){var n=e.children,a=e.hidden,l=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>I});var t=a(96540),r=a(34164),i=a(23104),l=a(56347),s=a(205),o=a(57485),c=a(31682),u=a(89466);function d(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function p(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,i=(0,l.W6)(),s=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function m(e){var n,a,r,i,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=p(e),f=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:m})})),g=f[0],x=f[1],j=v({queryString:c,groupId:d}),b=j[0],y=j[1],I=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,u.Dv)(n),r=a[0],i=a[1],[r,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),S=I[0],k=I[1],U=function(){var e=null!=b?b:S;return h({value:e,tabValues:m})?e:null}();return(0,s.A)((function(){U&&x(U)}),[U]),{selectedValue:g,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var f=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function j(e){var n=e.className,a=e.block,t=e.selectedValue,l=e.selectValue,s=e.tabValues,o=[],c=(0,i.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,a=o.indexOf(n),r=s[a].value;r!==t&&(c(n),l(r))},d=function(e){var n,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,r=o.indexOf(e.currentTarget)+1;a=null!=(t=o[r])?t:o[0];break;case"ArrowLeft":var i,l=o.indexOf(e.currentTarget)-1;a=null!=(i=o[l])?i:o[o.length-1]}null==(n=a)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:s.map((function(e){var n=e.value,a=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,r.A)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function b(e){var n=e.lazy,a=e.children,r=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var l=i.find((function(e){return e.props.value===r}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,Object.assign({},e,n)),(0,x.jsx)(b,Object.assign({},e,n))]})}function I(e){var n=(0,f.A)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var t=a(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);