"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5107],{31075:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=a(74848),s=a(28453);const r={id:"interfaces",title:"Interfaces"},i=void 0,o={id:"schema-generator/writing-schemas/interfaces",title:"Interfaces",description:"Kotlin interfaces, abstract and sealed classes will be mapped to a GraphQL interface. Due to the GraphQL distinction between interface",source:"@site/versioned_docs/version-8.x.x/schema-generator/writing-schemas/interfaces.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/interfaces",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-8.x.x/schema-generator/writing-schemas/interfaces.md",tags:[],version:"8.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1728268554e3,frontMatter:{id:"interfaces",title:"Interfaces"},sidebar:"docs",previous:{title:"Lists",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/lists"},next:{title:"Unions",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/unions"}},l={},c=[{value:"Abstract and Sealed Classes",id:"abstract-and-sealed-classes",level:2},{value:"Nested Interfaces",id:"nested-interfaces",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Kotlin interfaces, abstract and sealed classes will be mapped to a GraphQL interface. Due to the GraphQL distinction between interface\nand a ",(0,t.jsx)(n.a,{href:"/graphql-kotlin/docs/schema-generator/writing-schemas/unions",children:"union type"}),", Kotlin interfaces need to specify at least one common field (property or a function). Superclasses and\ninterfaces can be excluded from the schema by marking them with ",(0,t.jsx)(n.code,{children:"@GraphQLIgnore"})," annotation or by providing custom filtering logic in a\ncustom schema generator hook."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"http://spec.graphql.org/June2018/#sec-Interfaces",children:"The GraphQL spec"})," does not allow interfaces to be used as input.\nThis means that while it is valid Kotlin code to have an interface as an argument, upon schema generation, an exception will be thrown."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'interface Animal {\n    val type: AnimalType\n    fun sound(): String\n}\n\nenum class AnimalType {\n    CAT,\n    DOG\n}\n\nclass Dog : Animal {\n    override val type = AnimalType.DOG\n\n    override fun sound() = "bark"\n\n    fun barkAtEveryone(): String = "bark at everyone"\n}\n\nclass Cat : Animal {\n    override val type = AnimalType.CAT\n\n    override fun sound() = "meow"\n\n    fun ignoreEveryone(): String = "ignore everyone"\n}\n\nclass PolymorphicQuery {\n\n    fun animal(type: AnimalType): Animal? = when (type) {\n        AnimalType.CAT -> Cat()\n        AnimalType.DOG -> Dog()\n        else -> null\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The above code will produce the following GraphQL schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"interface Animal {\n  type: AnimalType!\n  sound: String!\n}\n\nenum AnimalType {\n  CAT\n  DOG\n}\n\ntype Cat implements Animal {\n  type: AnimalType!\n  ignoreEveryone: String!\n  sound: String!\n}\n\ntype Dog implements Animal {\n  type: AnimalType!\n  barkAtEveryone: String!\n  sound: String!\n}\n\ntype TopLevelQuery {\n  animal(type: AnimalType!): Animal\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"abstract-and-sealed-classes",children:"Abstract and Sealed Classes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://kotlinlang.org/docs/reference/classes.html#abstract-classes",children:"Abstract"})," and ",(0,t.jsx)(n.a,{href:"https://kotlinlang.org/docs/reference/sealed-classes.html",children:"sealed"})," classes can also be used for GraphQL interface types."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"abstract class Shape(val area: Double)\nclass Circle(radius: Double) : Shape(PI * radius * radius)\nclass Square(sideLength: Double) : Shape(sideLength * sideLength)\n\nsealed class Pet(val name: String) {\n    class Dog(name: String, val goodBoysReceived: Int) : Pet(name)\n    class Cat(name: String, val livesRemaining: Int) : Pet(name)\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nested-interfaces",children:"Nested Interfaces"}),"\n",(0,t.jsx)(n.p,{children:"Interfaces can implement other interfaces."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"interface Foo {\n    val foo: String\n}\n\ninterface Bar : Foo {\n    val bar: String\n}\n\nclass Baz(override val foo: String, override val bar: String) : Bar\n"})}),"\n",(0,t.jsx)(n.p,{children:"Code above generates following schema"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"interface Foo {\n  foo: String!\n}\n\ninterface Bar implements Foo {\n  bar: String!\n  foo: String!\n}\n\ntype Baz implements Bar & Foo {\n  bar: String!\n  foo: String!\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);