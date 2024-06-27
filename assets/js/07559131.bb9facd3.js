"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4388],{28332:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=n(74848),r=n(28453);const a={id:"directives",title:"Directives"},o=void 0,s={id:"schema-generator/customizing-schemas/directives",title:"Directives",description:"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime",source:"@site/versioned_docs/version-6.x.x/schema-generator/customizing-schemas/directives.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/directives",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/directives",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/customizing-schemas/directives.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1719501861,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"directives",title:"Directives"},sidebar:"docs",previous:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/renaming-fields"},next:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/deprecating-schema"}},c={},l=[{value:"Default Directives",id:"default-directives",level:2},{value:"Custom Directives",id:"custom-directives",level:2},{value:"Naming Convention",id:"naming-convention",level:3},{value:"Customizing Behavior",id:"customizing-behavior",level:3},{value:"Repeatable Directives",id:"repeatable-directives",level:3},{value:"Directive Chaining",id:"directive-chaining",level:2},{value:"Ignoring Directive Arguments",id:"ignoring-directive-arguments",level:2},{value:"Limitations",id:"limitations",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime\nbehavior of the query (e.g. implement access control, etc). Common use cases involve limiting functionality based on the\nuser authentication and authorization. While ",(0,t.jsx)(i.a,{href:"https://graphql.github.io/graphql-spec/draft/#sec-Type-System.Directives",children:"GraphQL\nspec"})," specifies two types of directives -\n",(0,t.jsx)(i.code,{children:"executable"})," (aka query) and ",(0,t.jsx)(i.code,{children:"type system"})," (aka schema) directives, only the latter one is supported by\n",(0,t.jsx)(i.code,{children:"graphql-kotlin-schema-generator"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"default-directives",children:"Default Directives"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"@deprecated"})," - schema directive used to represent deprecated portion of the schema.\nSee ",(0,t.jsx)(i.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/deprecating-schema",children:"@Deprecated and @GraphQLDeprecated"})," annotation documentation for more details"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'type Query {\n  deprecatedQuery: Boolean! @deprecated(reason: "No longer supported")\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"@skip"})," - query directive that allows for conditional exclusion of fields or fragments"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"query myQuery($shouldSkip: Boolean) {\n  myField @skip(if: $shouldSkip)\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"@include"})," - query directive that allows for conditional inclusion of fields or fragments"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"query myQuery($shouldInclude: Boolean) {\n  myField @include(if: $shouldInclude)\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"custom-directives",children:"Custom Directives"}),"\n",(0,t.jsx)(i.p,{children:"Custom directives can be added to the schema using custom annotations:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:'@GraphQLDirective(\n    name = "awesome",\n    description = "This element is great",\n    locations = [FIELD_DEFINITION]\n)\nannotation class AwesomeDirective(val value: String)\n\nclass MyQuery {\n    @AwesomeDirective("cool stuff")\n    val somethingGreat: String = "Hello World"\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"The directive will then added to the schema as:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'# This element is great\ndirective @awesome(value: String) on FIELD_DEFINITION\n\ntype MyQuery {\n   somethingGreat: String @awesome("cool stuff")\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Directives can be added to various places in the schema. See the\n",(0,t.jsx)(i.a,{href:"https://github.com/graphql-java/graphql-java/blob/v13.0/src/main/java/graphql/introspection/Introspection.java#L332",children:"graphql.introspection.Introspection.DirectiveLocation"}),"\nenum from ",(0,t.jsx)(i.code,{children:"graphql-java"})," for a full list of valid locations."]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["GraphQL directives are currently not available through introspection and you have to use SDL directly\ninstead (you can use convenient ",(0,t.jsx)(i.code,{children:"print"})," extension function of ",(0,t.jsx)(i.code,{children:"GraphQLSchema"}),"). See ",(0,t.jsx)(i.a,{href:"https://github.com/facebook/graphql/issues/300",children:"GraphQL\nissue"})," and corresponding ",(0,t.jsx)(i.a,{href:"https://github.com/graphql-java/graphql-java/issues/1017",children:"graphql-java\nissue"})," for more details about the introspection issue."]})}),"\n",(0,t.jsx)(i.h3,{id:"naming-convention",children:"Naming Convention"}),"\n",(0,t.jsxs)(i.p,{children:["As described in the example above, the directive name in the schema will by default come from the\n",(0,t.jsx)(i.code,{children:"@GraphQLDirective.name"})," attribute which should follow ",(0,t.jsx)(i.code,{children:"lowerCamelCase"})," format. If this value is not specified, the\ndirective name will default to the normalized decapitalized name of the annotated annotation (eg: ",(0,t.jsx)(i.code,{children:"awesomeDirective"})," in\nthe example above)."]}),"\n",(0,t.jsx)(i.h3,{id:"customizing-behavior",children:"Customizing Behavior"}),"\n",(0,t.jsxs)(i.p,{children:["Directives allow you to customize the behavior of your schema based on some predefined conditions. Simplest way to\nmodify the default behavior of your GraphQLTypes is by providing your custom ",(0,t.jsx)(i.code,{children:"KotlinSchemaDirectiveWiring"})," through\n",(0,t.jsx)(i.code,{children:"KotlinDirectiveWiringFactory"})," factory used by your ",(0,t.jsx)(i.code,{children:"SchemaGeneratorHooks"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Example of a directive that converts field to lowercase"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:'@GraphQLDirective(name = "lowercase", description = "Modifies the string field to lowercase")\nannotation class LowercaseDirective\n\nclass LowercaseSchemaDirectiveWiring : KotlinSchemaDirectiveWiring {\n\n    override fun onField(environment: KotlinFieldDirectiveEnvironment): GraphQLFieldDefinition {\n        val field = environment.element\n        val originalDataFetcher: DataFetcher<Any> = environment.getDataFetcher()\n\n        val lowerCaseFetcher = DataFetcherFactories.wrapDataFetcher(\n            originalDataFetcher,\n            BiFunction<DataFetchingEnvironment, Any, Any>{ _, value -> value.toString().toLowerCase() }\n        )\n        environment.setDataFetcher(lowerCaseFetcher)\n        return field\n    }\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["While you can manually apply all the runtime wirings to the corresponding GraphQL types directly in\n",(0,t.jsx)(i.code,{children:"SchemaGeneratorHooks#onRewireGraphQLType"}),", we recommend the usage of our\n",(0,t.jsx)(i.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/directives/KotlinDirectiveWiringFactory.kt",children:"KotlinDirectiveWiringFactory"}),"\nto simplify the integrations. ",(0,t.jsx)(i.code,{children:"KotlinDirectiveWiringFactory"})," accepts a mapping of directives to corresponding wirings or\ncould be extended to provide the wirings through ",(0,t.jsx)(i.code,{children:"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring"})," that accepts\n",(0,t.jsx)(i.code,{children:"KotlinSchemaDirectiveEnvironment"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:'val queries = ...\nval customWiringFactory = KotlinDirectiveWiringFactory(\n    manualWiring = mapOf<String, KotlinSchemaDirectiveWiring>("lowercase" to LowercaseSchemaDirectiveWiring()))\nval customHooks = object : SchemaGeneratorHooks {\n    override val wiringFactory: KotlinDirectiveWiringFactory\n        get() = customWiringFactory\n}\nval schemaGeneratorConfig = SchemaGeneratorConfig(hooks = customHooks)\nval schema = toSchema(queries = queries, config = schemaGeneratorConfig)\n'})}),"\n",(0,t.jsx)(i.p,{children:"While providing directives on different schema elements you will be able to modify the underlying GraphQL types. Keep in\nmind though that data fetchers are used to resolve the fields so only field directives (and by association their\narguments directives) can modify runtime behavior based on the context and user input."}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"graphql-kotlin"})," prioritizes manual wiring mappings over the wirings provided by the ",(0,t.jsx)(i.code,{children:"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring"}),".\nThis is a different behavior than ",(0,t.jsx)(i.code,{children:"graphql-java"})," which will first attempt to use ",(0,t.jsx)(i.code,{children:"WiringFactory"})," and then fallback to manual overrides."]})}),"\n",(0,t.jsxs)(i.p,{children:["For more details please refer to the example usage of directives in our ",(0,t.jsx)(i.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/spring-server",children:"example\napp"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"repeatable-directives",children:"Repeatable Directives"}),"\n",(0,t.jsxs)(i.p,{children:["GraphQL supports repeatable directives (e.g. Apollo federation allows developers to specify multiple ",(0,t.jsx)(i.code,{children:"@key"})," directives).\nBy default, Kotlin does not allow applying same annotation multiple times. In order to make your directives repeatable,\nyou need to annotate it with ",(0,t.jsx)(i.code,{children:"kotlin.annotation.Repeatable"})," annotation."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"@Repeatable\n@GraphQLDirective(locations = [DirectiveLocation.OBJECT, DirectiveLocation.INTERFACE])\nannotation class MyRepeatableDirective(val value: String)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Generates the above directive as"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"directive @myRepeatableDirective(value: String!) repeatable on OBJECT | INTERFACE\n"})}),"\n",(0,t.jsx)(i.h2,{id:"directive-chaining",children:"Directive Chaining"}),"\n",(0,t.jsx)(i.p,{children:"Directives are applied in the order annotations are declared on the given object. Given"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"@Directive1\n@Directive2\nfun doSomething(): String {\n// does something\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Directive1"})," will be applied first followed by the ",(0,t.jsx)(i.code,{children:"Directive2"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"ignoring-directive-arguments",children:"Ignoring Directive Arguments"}),"\n",(0,t.jsxs)(i.p,{children:["Normally if you wanted to exclude a field or argument from the schema, you could use ",(0,t.jsx)(i.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/excluding-fields",children:"@GraphQLIgnore"}),".\nHowever, due to reflection and kotlin limitations, the generated JVM code for interface arguments can only have annotations on getters."]}),"\n",(0,t.jsxs)(i.p,{children:["This is easily fixable though using the ",(0,t.jsxs)(i.a,{href:"https://kotlinlang.org/docs/reference/annotations.html#annotation-use-site-targets",children:[(0,t.jsx)(i.code,{children:"@get:"})," target prefix"]}),"\nSee ",(0,t.jsx)(i.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/pull/763",children:"graphql-kotlin#763"})," for more details."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"@GraphQLDirective\nannotation class DirectiveWithIgnoredArgs(\n    val string: String,\n\n    @get:GraphQLIgnore\n    val ignoreMe: String\n)\n"})}),"\n",(0,t.jsx)(i.p,{children:"This will generate the following schema"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"directive @directiveWithIgnoredArgs(\n  string: String!\n) on ...\n"})}),"\n",(0,t.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsx)(i.p,{children:"GraphQL specification allows usage of any valid input objects as directive arguments. Since we rely on Kotlin annotation\nfunctionality to define our custom directives, we are limited in what can be used as annotation parameter - only primitives (or scalars),\nStrings, Enums, other annotations or an array of any of the above are supported."}),"\n",(0,t.jsx)(i.p,{children:"Support for input objects can be added by providing that object representation as an annotation class and then adding support\nfor it through custom schema generator hooks."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var t=n(96540);const r={},a=t.createContext(r);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);