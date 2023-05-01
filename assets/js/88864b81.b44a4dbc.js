"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[359],{81794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>d});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),o=(t(95657),["components"]),u={id:"optional-undefined-arguments",title:"Optional Undefined Arguments"},p=void 0,r={unversionedId:"schema-generator/execution/optional-undefined-arguments",id:"version-5.x.x/schema-generator/execution/optional-undefined-arguments",title:"Optional Undefined Arguments",description:"In the GraphQL world, input types can be optional which means that the client can either:",source:"@site/versioned_docs/version-5.x.x/schema-generator/execution/optional-undefined-arguments.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/optional-undefined-arguments",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/optional-undefined-arguments",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/execution/optional-undefined-arguments.md",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"optional-undefined-arguments",title:"Optional Undefined Arguments"},sidebar:"version-5.x.x/docs",previous:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/contextual-data"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/subscriptions"}},s={},d=[{value:"Using OptionalInput wrapper",id:"using-optionalinput-wrapper",level:2},{value:"Using DataFetchingEnvironment",id:"using-datafetchingenvironment",level:2},{value:"Kotlin Default Values",id:"kotlin-default-values",level:2}],c={toc:d},h="wrapper";function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)(h,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In the GraphQL world, input types can be optional which means that the client can either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Not specify a value at all"),(0,l.kt)("li",{parentName:"ul"},"Send null explicitly"),(0,l.kt)("li",{parentName:"ul"},"Send a non-null value")),(0,l.kt)("p",null,"This is in contrast with the JVM world where objects can either have some specific value or don't have any value (i.e.\nare ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"). As a result, when using default serialization logic it is not possible to distinguish between missing/unspecified\nvalue and explicit ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value."),(0,l.kt)("h2",{id:"using-optionalinput-wrapper"},"Using OptionalInput wrapper"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput")," is a convenient sealed class wrapper that provides distinction between undefined, null, and non-null\nvalues. If the argument is not specified in the request it will be represented as a ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput.Undefined")," object, otherwise the\nvalue will be wrapped in ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput.Defined")," class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun optionalInput(input: OptionalInput<String>): String = when (input) {\n    is OptionalInput.Undefined -> "input was not specified"\n    is OptionalInput.Defined<String> -> "input value: ${input.value}"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'query OptionalInputQuery {\n  undefined: optionalInput # input was not specified\n  null: optionalInput(value: null) # input value: null\n  foo: optionalInput(value: "foo") # input value: foo\n}\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Regardless whether the generic type of ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput")," is specified as nullable or not it will always result in a nullable\nvalue in ",(0,l.kt)("inlineCode",{parentName:"p"},"Defined")," class, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput<String>")," will appear as nullable ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," in the GraphQL schema and in the wrapped value.")),(0,l.kt)("h2",{id:"using-datafetchingenvironment"},"Using DataFetchingEnvironment"),(0,l.kt)("p",null,"Optional input types can be represented as nullable parameters in Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun optionalInput(value: String? = null): String? = value\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'query OptionalInputQuery {\n  undefined: optionalInput # null\n  null: optionalInput(value: null) # null\n  foo: optionalInput(value: "foo") # foo\n}\n')),(0,l.kt)("p",null,"By default, if an optional input value is not specified, then the execution engine will fallback to the argument default\nvalue (in our example above ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"). This means that you can not tell, by just the value alone, whether the request did\nnot contain any argument or the client explicitly passed in the default value."),(0,l.kt)("p",null,"Instead, you can inspect all passed in arguments using the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun optionalInput(value: String? = null, dataFetchingEnvironment: DataFetchingEnvironment): String =\n    if (dataFetchingEnvironment.containsArgument("value")) {\n        "The value was $value"\n    } else {\n        "The value was undefined"\n    }\n')),(0,l.kt)("h2",{id:"kotlin-default-values"},"Kotlin Default Values"),(0,l.kt)("p",null,"If you don't need logic for when the client specified a value, you can still use ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/arguments"},"Kotlin default values")))}m.isMDXComponent=!0}}]);