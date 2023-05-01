"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7090],{9557:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),s=(t(95657),["components"]),o={id:"fields",title:"Types and Fields"},l=void 0,p={unversionedId:"schema-generator/writing-schemas/fields",id:"version-6.x.x/schema-generator/writing-schemas/fields",title:"Types and Fields",description:"graphql-kotlin-schema-generator uses reflection to automatically map",source:"@site/versioned_docs/version-6.x.x/schema-generator/writing-schemas/fields.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/fields",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/fields",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/writing-schemas/fields.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"fields",title:"Types and Fields"},sidebar:"docs",previous:{title:"Schema",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/schema"},next:{title:"Nullability",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nullability"}},c={},d=[{value:"Type Inheritance",id:"type-inheritance",level:2}],m={toc:d},h="wrapper";function g(e){var a=e.components,t=(0,r.Z)(e,s);return(0,i.kt)(h,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reflection.html"},"reflection")," to automatically map\nKotlin classes and enums to the corresponding GraphQL types."),(0,i.kt)("p",null,"By default, all public properties and functions with a ",(0,i.kt)("a",{parentName:"p",href:"https://spec.graphql.org/draft/#sec-Names"},"valid GraphQL name"),"\nand a supported return type will be mapped to a corresponding GraphQL field. Kotlin return types have to be either one of the\n",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/writing-schemas/scalars"},"supported scalars")," or a custom Kotlin type defined within supported packages. Nullability information is\nautomatically inferred from the underlying Kotlin return type."),(0,i.kt)("p",null,"Additional built-in validations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"function types aka lambdas property types are currently not supported by the schema generator"),(0,i.kt)("li",{parentName:"ul"},"automatically generated data class methods (",(0,i.kt)("inlineCode",{parentName:"li"},"componentN"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"copy"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"equals"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"hashCode"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"toString"),") are filtered out")),(0,i.kt)("p",null,"Default behavior can be customized. Fields can be ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/renaming-fields"},"renamed")," or ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields"},"excluded"),".\nSupport for additional types or validations can be added by providing an instance of custom ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config#schemageneratorhooks"},"SchemaGeneratorHook"),"."),(0,i.kt)("h2",{id:"type-inheritance"},"Type Inheritance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," provides support for both GraphQL ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/writing-schemas/unions"},"unions")," and ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/writing-schemas/interfaces"},"interfaces"),".\nSuperclasses and interfaces can be excluded from the schema by marking them with ",(0,i.kt)("inlineCode",{parentName:"p"},"@GraphQLIgnore")," annotation or by providing\ncustom filtering logic in a custom ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config#schemageneratorhooks"},"SchemaGeneratorHook"),"."))}g.isMDXComponent=!0}}]);