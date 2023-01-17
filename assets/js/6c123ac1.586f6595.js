"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"directives",title:"Directives"},s=void 0,c={unversionedId:"schema-generator/customizing-schemas/directives",id:"schema-generator/customizing-schemas/directives",title:"Directives",description:"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime",source:"@site/docs/schema-generator/customizing-schemas/directives.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/directives",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/directives",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/directives.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1673990222,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"directives",title:"Directives"},sidebar:"docs",previous:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/renaming-fields"},next:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/deprecating-schema"}},p={},m=[{value:"Default Directives",id:"default-directives",level:2},{value:"Custom Directives",id:"custom-directives",level:2},{value:"Naming Convention",id:"naming-convention",level:3},{value:"Customizing Behavior",id:"customizing-behavior",level:3},{value:"Repeatable Directives",id:"repeatable-directives",level:3},{value:"Directive Chaining",id:"directive-chaining",level:2},{value:"Ignoring Directive Arguments",id:"ignoring-directive-arguments",level:2},{value:"Limitations",id:"limitations",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime\nbehavior of the query (e.g. implement access control, etc). Common use cases involve limiting functionality based on the\nuser authentication and authorization. While ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.github.io/graphql-spec/draft/#sec-Type-System.Directives"},"GraphQL\nspec")," specifies two types of directives -\n",(0,r.kt)("inlineCode",{parentName:"p"},"executable")," (aka query) and ",(0,r.kt)("inlineCode",{parentName:"p"},"type system")," (aka schema) directives, only the latter one is supported by\n",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."),(0,r.kt)("h2",{id:"default-directives"},"Default Directives"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@deprecated")," - schema directive used to represent deprecated portion of the schema.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/deprecating-schema"},"@Deprecated and @GraphQLDeprecated")," annotation documentation for more details"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Query {\n  deprecatedQuery: Boolean! @deprecated(reason: "No longer supported")\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@skip")," - query directive that allows for conditional exclusion of fields or fragments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query myQuery($shouldSkip: Boolean) {\n  myField @skip(if: $shouldSkip)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@include")," - query directive that allows for conditional inclusion of fields or fragments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query myQuery($shouldInclude: Boolean) {\n  myField @include(if: $shouldInclude)\n}\n")),(0,r.kt)("h2",{id:"custom-directives"},"Custom Directives"),(0,r.kt)("p",null,"Custom directives can be added to the schema using custom annotations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GraphQLDirective(\n    name = "awesome",\n    description = "This element is great",\n    locations = [FIELD_DEFINITION]\n)\nannotation class AwesomeDirective(val value: String)\n\nclass MyQuery {\n    @AwesomeDirective("cool stuff")\n    val somethingGreat: String = "Hello World"\n}\n')),(0,r.kt)("p",null,"The directive will then added to the schema as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'# This element is great\ndirective @awesome(value: String) on FIELD_DEFINITION\n\ntype MyQuery {\n   somethingGreat: String @awesome("cool stuff")\n}\n')),(0,r.kt)("p",null,"Directives can be added to various places in the schema. See the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/v13.0/src/main/java/graphql/introspection/Introspection.java#L332"},"graphql.introspection.Introspection.DirectiveLocation"),"\nenum from ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java")," for a full list of valid locations."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"GraphQL directives are currently not available through introspection and you have to use SDL directly\ninstead (you can use convenient ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," extension function of ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema"),"). See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/graphql/issues/300"},"GraphQL\nissue")," and corresponding ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/issues/1017"},"graphql-java\nissue")," for more details about the introspection issue.")),(0,r.kt)("h3",{id:"naming-convention"},"Naming Convention"),(0,r.kt)("p",null,"As described in the example above, the directive name in the schema will by default come from the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@GraphQLDirective.name")," attribute which should follow ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCamelCase")," format. If this value is not specified, the\ndirective name will default to the normalized decapitalized name of the annotated annotation (eg: ",(0,r.kt)("inlineCode",{parentName:"p"},"awesomeDirective")," in\nthe example above)."),(0,r.kt)("h3",{id:"customizing-behavior"},"Customizing Behavior"),(0,r.kt)("p",null,"Directives allow you to customize the behavior of your schema based on some predefined conditions. Simplest way to\nmodify the default behavior of your GraphQLTypes is by providing your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinSchemaDirectiveWiring")," through\n",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory")," factory used by your ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks"),"."),(0,r.kt)("p",null,"Example of a directive that converts field to lowercase"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GraphQLDirective(name = "lowercase", description = "Modifies the string field to lowercase")\nannotation class LowercaseDirective\n\nclass LowercaseSchemaDirectiveWiring : KotlinSchemaDirectiveWiring {\n\n    override fun onField(environment: KotlinFieldDirectiveEnvironment): GraphQLFieldDefinition {\n        val field = environment.element\n        val originalDataFetcher: DataFetcher<Any> = environment.getDataFetcher()\n\n        val lowerCaseFetcher = DataFetcherFactories.wrapDataFetcher(\n            originalDataFetcher,\n            BiFunction<DataFetchingEnvironment, Any, Any>{ _, value -> value.toString().toLowerCase() }\n        )\n        environment.setDataFetcher(lowerCaseFetcher)\n        return field\n    }\n}\n')),(0,r.kt)("p",null,"While you can manually apply all the runtime wirings to the corresponding GraphQL types directly in\n",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks#onRewireGraphQLType"),", we recommend the usage of our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/directives/KotlinDirectiveWiringFactory.kt"},"KotlinDirectiveWiringFactory"),"\nto simplify the integrations. ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory")," accepts a mapping of directives to corresponding wirings or\ncould be extended to provide the wirings through ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring")," that accepts\n",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinSchemaDirectiveEnvironment"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val queries = ...\nval customWiringFactory = KotlinDirectiveWiringFactory(\n    manualWiring = mapOf<String, KotlinSchemaDirectiveWiring>("lowercase" to LowercaseSchemaDirectiveWiring()))\nval customHooks = object : SchemaGeneratorHooks {\n    override val wiringFactory: KotlinDirectiveWiringFactory\n        get() = customWiringFactory\n}\nval schemaGeneratorConfig = SchemaGeneratorConfig(hooks = customHooks)\nval schema = toSchema(queries = queries, config = schemaGeneratorConfig)\n')),(0,r.kt)("p",null,"While providing directives on different schema elements you will be able to modify the underlying GraphQL types. Keep in\nmind though that data fetchers are used to resolve the fields so only field directives (and by association their\narguments directives) can modify runtime behavior based on the context and user input."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," prioritizes manual wiring mappings over the wirings provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring"),".\nThis is a different behavior than ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java")," which will first attempt to use ",(0,r.kt)("inlineCode",{parentName:"p"},"WiringFactory")," and then fallback to manual overrides.")),(0,r.kt)("p",null,"For more details please refer to the example usage of directives in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/spring-server"},"example\napp"),"."),(0,r.kt)("h3",{id:"repeatable-directives"},"Repeatable Directives"),(0,r.kt)("p",null,"GraphQL supports repeatable directives (e.g. Apollo federation allows developers to specify multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directives).\nBy default, Kotlin does not allow applying same annotation multiple times. In order to make your directives repeatable,\nyou need to annotate it with ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlin.annotation.Repeatable")," annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Repeatable\n@GraphQLDirective(locations = [DirectiveLocation.OBJECT, DirectiveLocation.INTERFACE])\nannotation class MyRepeatableDirective(val value: String)\n")),(0,r.kt)("p",null,"Generates the above directive as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @myRepeatableDirective(value: String!) repeatable on OBJECT | INTERFACE\n")),(0,r.kt)("h2",{id:"directive-chaining"},"Directive Chaining"),(0,r.kt)("p",null,"Directives are applied in the order annotations are declared on the given object. Given"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Directive1\n@Directive2\nfun doSomething(): String {\n// does something\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Directive1")," will be applied first followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Directive2"),"."),(0,r.kt)("h2",{id:"ignoring-directive-arguments"},"Ignoring Directive Arguments"),(0,r.kt)("p",null,"Normally if you wanted to exclude a field or argument from the schema, you could use ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/excluding-fields"},"@GraphQLIgnore"),".\nHowever, due to reflection and kotlin limitations, the generated JVM code for interface arguments can only have annotations on getters."),(0,r.kt)("p",null,"This is easily fixable though using the ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/annotations.html#annotation-use-site-targets"},(0,r.kt)("inlineCode",{parentName:"a"},"@get:")," target prefix"),"\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/pull/763"},"graphql-kotlin#763")," for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@GraphQLDirective\nannotation class DirectiveWithIgnoredArgs(\n    val string: String,\n\n    @get:GraphQLIgnore\n    val ignoreMe: String\n)\n")),(0,r.kt)("p",null,"This will generate the following schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @directiveWithIgnoredArgs(\n  string: String!\n) on ...\n")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"GraphQL specification allows usage of any valid input objects as directive arguments. Since we rely on Kotlin annotation\nfunctionality to define our custom directives, we are limited in what can be used as annotation parameter - only primitives (or scalars),\nStrings, Enums, other annotations or an array of any of the above are supported."),(0,r.kt)("p",null,"Support for input objects can be added by providing that object representation as an annotation class and then adding support\nfor it through custom schema generator hooks."))}u.isMDXComponent=!0}}]);