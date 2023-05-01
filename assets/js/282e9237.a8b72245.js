"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1096],{70437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=(a(95657),["components"]),s={id:"nullability",title:"Nullability"},o=void 0,u={unversionedId:"schema-generator/writing-schemas/nullability",id:"schema-generator/writing-schemas/nullability",title:"Nullability",description:"Both GraphQL and Kotlin have a concept of nullable as a marked typed. As a result we can automatically generate null",source:"@site/docs/schema-generator/writing-schemas/nullability.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/nullability",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/nullability",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/nullability.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"nullability",title:"Nullability"},sidebar:"docs",previous:{title:"Types and Fields",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/fields"},next:{title:"Arguments",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/arguments"}},c={},m=[],d={toc:m},p="wrapper";function g(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Both GraphQL and Kotlin have a concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable")," as a marked typed. As a result we can automatically generate null\nsafe schemas from Kotlin code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SimpleQuery {\n\n    fun generateNullableNumber(): Int? {\n        val num = Random().nextInt(100)\n        return if (num < 50) num else null\n    }\n\n    fun generateNumber(): Int = Random().nextInt(100)\n}\n")),(0,r.kt)("p",null,"The above Kotlin code would produce the following GraphQL schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  generateNullableNumber: Int\n\n  generateNumber: Int!\n}\n")))}g.isMDXComponent=!0}}]);