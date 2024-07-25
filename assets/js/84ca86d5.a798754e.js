"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3896],{18570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(74848),a=t(28453);const s={id:"fields",title:"Types and Fields"},i=void 0,o={id:"schema-generator/writing-schemas/fields",title:"Types and Fields",description:"graphql-kotlin-schema-generator uses reflection to automatically map",source:"@site/docs/schema-generator/writing-schemas/fields.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/fields",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/writing-schemas/fields",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/fields.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1721925847e3,frontMatter:{id:"fields",title:"Types and Fields"},sidebar:"docs",previous:{title:"Schema",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/writing-schemas/schema"},next:{title:"Nullability",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/writing-schemas/nullability"}},c={},l=[{value:"Type Inheritance",id:"type-inheritance",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," uses ",(0,r.jsx)(n.a,{href:"https://kotlinlang.org/docs/reflection.html",children:"reflection"})," to automatically map\nKotlin classes and enums to the corresponding GraphQL types."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, all public properties and functions with a ",(0,r.jsx)(n.a,{href:"https://spec.graphql.org/draft/#sec-Names",children:"valid GraphQL name"}),"\nand a supported return type will be mapped to a corresponding GraphQL field. Kotlin return types have to be either one of the\n",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/writing-schemas/scalars",children:"supported scalars"})," or a custom Kotlin type defined within supported packages. Nullability information is\nautomatically inferred from the underlying Kotlin return type."]}),"\n",(0,r.jsx)(n.p,{children:"Additional built-in validations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"function types aka lambdas property types are currently not supported by the schema generator"}),"\n",(0,r.jsxs)(n.li,{children:["automatically generated data class methods (",(0,r.jsx)(n.code,{children:"componentN"}),", ",(0,r.jsx)(n.code,{children:"copy"}),", ",(0,r.jsx)(n.code,{children:"equals"}),", ",(0,r.jsx)(n.code,{children:"hashCode"}),", ",(0,r.jsx)(n.code,{children:"toString"}),") are filtered out"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Default behavior can be customized. Fields can be ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/renaming-fields",children:"renamed"})," or ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/excluding-fields",children:"excluded"}),".\nSupport for additional types or validations can be added by providing an instance of custom ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/generator-config#schemageneratorhooks",children:"SchemaGeneratorHook"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"type-inheritance",children:"Type Inheritance"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," provides support for both GraphQL ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/writing-schemas/unions",children:"unions"})," and ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/writing-schemas/interfaces",children:"interfaces"}),".\nSuperclasses and interfaces can be excluded from the schema by marking them with ",(0,r.jsx)(n.code,{children:"@GraphQLIgnore"})," annotation or by providing\ncustom filtering logic in a custom ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/generator-config#schemageneratorhooks",children:"SchemaGeneratorHook"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);