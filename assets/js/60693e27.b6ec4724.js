"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3863],{87099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(74848),a=t(28453);const i={id:"renaming-fields",title:"Renaming Fields"},o=void 0,r={id:"schema-generator/customizing-schemas/renaming-fields",title:"Renaming Fields",description:"By default, the schema generator will use the simple name of the underlying class for the type names and function/property names for fields.",source:"@site/docs/schema-generator/customizing-schemas/renaming-fields.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/renaming-fields",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/renaming-fields",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/renaming-fields.md",tags:[],version:"current",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1714237421,formattedLastUpdatedAt:"Apr 27, 2024",frontMatter:{id:"renaming-fields",title:"Renaming Fields"},sidebar:"docs",previous:{title:"Excluding Fields",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/excluding-fields"},next:{title:"Directives",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/directives"}},l={},c=[{value:"Known Issues",id:"known-issues",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["By default, the schema generator will use the simple name of the underlying class for the type names and function/property names for fields.\nYou can change this default behavior by annotating the target class/field with ",(0,s.jsx)(n.code,{children:"@GraphQLName"}),". The following Kotlin ",(0,s.jsx)(n.code,{children:"Widget"})," class\nwill be renamed to ",(0,s.jsx)(n.code,{children:"MyCustomName"})," GraphQL type and its fields will also be renamed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'@GraphQLName("MyCustomName")\ndata class Widget(\n    @GraphQLName("myCustomField")\n    val value: Int?\n)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type MyCustomName {\n  myCustomField: Int\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["By default, in order to differentiate between input and output types, all input type names are auto generated with additional\n",(0,s.jsx)(n.code,{children:"Input"})," suffix. Suffix is appended only if input type name does not already end with ",(0,s.jsx)(n.code,{children:"Input"}),". If you would like to change this\nbehavior and avoid extra suffix, you need to explicitly specify that this is an input only type."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"// GraphQL input object type name: MyInputType\n@GraphQLValidObjectLocations([GraphQLValidObjectLocations.Locations.INPUT_OBJECT])\ndata class MyInputType(val id: ID)\n"})}),(0,s.jsx)(n.p,{children:"You can also rename input types"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'// GraphQL input object type name: MyCustomInputType\n@GraphQLValidObjectLocations([GraphQLValidObjectLocations.Locations.INPUT_OBJECT])\n@GraphQLName("MyCustomInputType")\ndata class MyInputType(val id: ID)\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,s.jsxs)(n.p,{children:["Due to how we deserialize input classes, if you rename a field of an input class or an enum value you must also annotate\nit with the Jackson annotation ",(0,s.jsx)(n.code,{children:"@JsonProperty"}),". See ",(0,s.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/493",children:"issue 493"}),"\nfor more info."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'data class MyInputClass(\n    @JsonProperty("renamedField")\n    @GraphQLName("renamedField")\n    val field1: String\n)\n\n// GraphQL enums should use UPPER_CASE naming if possible, but any case is supported\nenum class Selection {\n\n  @JsonProperty("first")\n  @GraphQLName("first")\n  ONE,\n\n  @JsonProperty("second")\n  @GraphQLName("second")\n  TWO\n}\n\nclass QueryClass {\n  fun parseData(arg: MyInputClass) = "You sent ${arg.field1}"\n\n  fun chooseValue(selection: Selection): String = when (selection) {\n    Selection.ONE -> "You chose the first value"\n    Selection.TWO -> "You chose the second value"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input MyInputClassInput {\n  # This only works if both @JsonProperty and @GraphQLName are present\n  renamedField: String!\n}\n\nenum Selection {\n  first,\n  second\n}\n\ntype Query {\n  parseData(arg: MyInputClass!): String!\n  chooseValue(selection: Selection!): String!\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);