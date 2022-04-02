"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294);function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(7462),l=t(7294),r=t(2389),i=t(3725),o=t(6010);const s="tabItem_LplD";function p(e){var n,t,r,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),b=y.tabGroupChoices,I=y.setTabGroupChoices,N=(0,l.useState)(g),x=N[0],w=N[1],S=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=b[m];null!=C&&C!==x&&h.some((function(e){return e.value===C}))&&w(C)}var T=function(e){var n=e.currentTarget,t=S.indexOf(n),a=h[t].value;a!==x&&(O(n),w(a),null!=m&&I(m,a))},V=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;t=S[a]||S[0];break;case"ArrowLeft":var l=S.indexOf(e.currentTarget)-1;t=S[l]||S[S.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return S.push(e)},onKeyDown:V,onFocus:T,onClick:T},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),p?(0,l.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function u(e){var n=(0,r.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},9969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),i=t(9877),o=t(8215),s=["components"],p={id:"client-features",title:"Client Features"},u=void 0,c={unversionedId:"client/client-features",id:"version-5.x.x/client/client-features",title:"Client Features",description:"Jackson and Kotlinx Serialization Support",source:"@site/versioned_docs/version-5.x.x/client/client-features.mdx",sourceDirName:"client",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/5.x.x/client/client-features",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/client/client-features.mdx",tags:[],version:"5.x.x",lastUpdatedBy:"Ravi Kumar",lastUpdatedAt:1648863561,formattedLastUpdatedAt:"4/2/2022",frontMatter:{id:"client-features",title:"Client Features"},sidebar:"version-5.x.x/docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/5.x.x/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/5.x.x/client/client-customization"}},d={},m=[{value:"Jackson and Kotlinx Serialization Support",id:"jackson-and-kotlinx-serialization-support",level:2},{value:"Polymorphic Types Support",id:"polymorphic-types-support",level:2},{value:"Default Enum Values",id:"default-enum-values",level:2},{value:"Auto Generated Documentation",id:"auto-generated-documentation",level:2},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",level:2},{value:"Batch Operation Support",id:"batch-operation-support",level:2},{value:"Optional Input Support",id:"optional-input-support",level:2}],f={toc:m};function v(e){var n=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"jackson-and-kotlinx-serialization-support"},"Jackson and Kotlinx Serialization Support"),(0,r.kt)("p",null,"GraphQL Kotlin supports generation of client data models that are compatible with both ",(0,r.kt)("inlineCode",{parentName:"p"},"Jackson")," (default) and ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"\nformats. Build plugins and ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," default to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Jackson")," whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client"),"\ndefaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/client/client-serialization"},"client serialization documentation")," for additional details."),(0,r.kt)("h2",{id:"polymorphic-types-support"},"Polymorphic Types Support"),(0,r.kt)("p",null,"GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nhave to ",(0,r.kt)("strong",{parentName:"p"},"explicitly specify all implementations"),". Polymorphic queries also have to explicitly request ",(0,r.kt)("inlineCode",{parentName:"p"},"__typename"),"\nfield so it can be used to Jackson correctly distinguish between different implementations."),(0,r.kt)("p",null,"Given example schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n")),(0,r.kt)("p",null,"We can query interface field as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Which will generate following data models"),(0,r.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\n@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename"\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Generated\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface\n\n@Generated\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface\n'))),(0,r.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\n@Serializable\nsealed class BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Generated\n@Serializable\n@SerialName(value = "FirstInterfaceImplementation")\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface()\n\n@Generated\n@Serializable\n@SerialName(value = "SecondInterfaceImplementation")\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface()\n')))),(0,r.kt)("h2",{id:"default-enum-values"},"Default Enum Values"),(0,r.kt)("p",null,"Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",(0,r.kt)("inlineCode",{parentName:"p"},"__UNKNOWN_VALUE")," to all generated\nenums as a catch all safeguard for handling new enum values."),(0,r.kt)("h2",{id:"auto-generated-documentation"},"Auto Generated Documentation"),(0,r.kt)("p",null,"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."),(0,r.kt)("p",null,"Given simple GraphQL object definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n')),(0,r.kt)("p",null,"Will result in a corresponding auto generated data class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Some basic description\n */\n @Generated\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n")),(0,r.kt)("h2",{id:"native-support-for-coroutines"},"Native Support for Coroutines"),(0,r.kt)("p",null,"GraphQL Kotlin Client is a generic interface that exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," methods that will suspend your GraphQL operation until\nit gets a response back without blocking the underlying thread. Reference Ktor and Spring WebClient based implementations\noffer fully asynchronous communication through Kotlin coroutines. In order to fetch data asynchronously you should wrap\nyour client execution in ",(0,r.kt)("inlineCode",{parentName:"p"},"launch")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," coroutine builder and explicitly ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," for their results."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotlin coroutines documentation")," for additional details."),(0,r.kt)("h2",{id:"batch-operation-support"},"Batch Operation Support"),(0,r.kt)("p",null,"GraphQL Kotlin Clients provide out of the box support for batching multiple client operations into a single GraphQL request.\nBatch requests are sent as an array of individual GraphQL requests and clients expect the server to respond with a corresponding\narray of GraphQL responses. Each response is then deserialized to a corresponding result type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"))\nval firstQuery = FirstQuery(variables = FirstQuery.Variables(foo = "bar"))\nval secondQuery = SecondQuery(variables = SecondQuery.Variables(foo = "baz"))\n\nval results: List<GraphQLResponse<*>> = client.execute(listOf(firstQuery, secondQuery))\n')),(0,r.kt)("h2",{id:"optional-input-support"},"Optional Input Support"),(0,r.kt)("p",null,"In the GraphQL world, input types can be optional which means that the client can specify a value, specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value\nOR don't specify any value. This is in contrast with the JVM world where objects can either have some specific value or\ndon't have any value (i.e. are ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"). By default, GraphQL Kotlin Client treats ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," Kotlin values as unspecified, which\nmeans they will skip all ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values when serializing the request, e.g. given following query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query OptionalInputQuery($optionalValue: String) {\n  optional(value: $optionalValue)\n")),(0,r.kt)("p",null,"GraphQL Kotlin plugins will generate corresponding POJO that defines ",(0,r.kt)("inlineCode",{parentName:"p"},"Variables")," as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"public data class Variables(\n  public val optionalValue: String? = null\n)\n")),(0,r.kt)("p",null,"Regardless whether we specify ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalValue")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or rely on the default value, this field won't be serialized,\ni.e. variables will be serialized as an empty JSON object ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,r.kt)("p",null,"By specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"useOptionalInputWrapper = true")," plugin configuration option, we can opt-in to a behavior that supports\nthree states - defined, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or undefined. Generated code will then use ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalInput")," wrapper to represent those states.\nSee ",(0,r.kt)("a",{parentName:"p",href:"../plugins/gradle-plugin-tasks"},"Gradle")," and ",(0,r.kt)("a",{parentName:"p",href:"../plugins/maven-plugin-goals"},"Maven")," plugin for configuration details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'public data class Variables(\n  public val optionalValue: OptionalInput<String> = OptionalInput.Undefined\n)\n\n// usage\n// - same behavior as default null, serialized as {}\nval undefinedVariables = Variables(optionalValue = OptionalInput.Undefined)\n\n// - serialized as {"optionalValue": null}\nval nullVariables = Variables(optionalValue = OptionalInput.Defined(null))\n\n// - serialized as {"optionalValue": "foo"}\nval definedVariables = Variables(optionalValue = OptionalInput.Defined("foo")\n')))}v.isMDXComponent=!0}}]);