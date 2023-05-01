"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5538],{11564:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>l});var s=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(95657),["components"]),u={id:"restricting-input-output",title:"Restricting Input and Output Types"},r=void 0,p={unversionedId:"schema-generator/customizing-schemas/restricting-input-output",id:"version-5.x.x/schema-generator/customizing-schemas/restricting-input-output",title:"Restricting Input and Output Types",description:"Since we are using Kotlin classes to represent both GraphQL input and output objects we can use the same class for both and the generator will handle type conflicts.",source:"@site/versioned_docs/version-5.x.x/schema-generator/customizing-schemas/restricting-input-output.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/restricting-input-output",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/restricting-input-output",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/customizing-schemas/restricting-input-output.md",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"restricting-input-output",title:"Restricting Input and Output Types"},sidebar:"version-5.x.x/docs",previous:{title:"Custom Types",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/custom-type-reference"},next:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/advanced-features"}},c={},l=[],d={toc:l},m="wrapper";function h(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)(m,(0,s.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since we are using Kotlin classes to represent both GraphQL input and output objects we can use the same class for both and the generator will handle type conflicts."),(0,i.kt)("p",null,"If you want to enforce that a type should never be used as an input or output you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@GraphQLValidObjectLocations")," annotation.\nIf the class was used in the schema in an invalid location an exception will be thrown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SimpleClass(val value: String)\n\n@GraphQLValidObjectLocations([Locations.INPUT_OBJECT])\nclass InputOnly(val value: String)\n\n@GraphQLValidObjectLocations([Locations.OBJECT])\nclass OutputOnly(val value: String)\n\n// Valid Usage\nfun output1() = SimpleClass("foo")\nfun output2() = OutputOnly("foo")\nfun input1(input: SimpleClass) = "value was ${input.value}"\nfun input2(input: InputOnly) = "value was ${input.value}"\n\n// Throws Exception\nfun output3() = InputOnly("foo")\nfun input3(input: OutputOnly) = "value was ${input.value}"\n')))}h.isMDXComponent=!0}}]);