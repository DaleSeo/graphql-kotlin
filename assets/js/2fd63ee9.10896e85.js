"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9055],{34007:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(74848),o=i(28453);const a={id:"unions",title:"Unions"},s=void 0,r={id:"schema-generator/writing-schemas/unions",title:"Unions",description:"GraphQL Kotlin allows for two ways of defining unions in the schema",source:"@site/versioned_docs/version-4.x.x/schema-generator/writing-schemas/unions.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/unions",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/unions",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/writing-schemas/unions.md",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1721925847e3,frontMatter:{id:"unions",title:"Unions"},sidebar:"docs",previous:{title:"Interfaces",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/interfaces"},next:{title:"Annotations",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/annotations"}},l={},c=[{value:"Marker Interfaces",id:"marker-interfaces",level:2},{value:"<code>@GraphQLUnion</code>",id:"graphqlunion",level:2},{value:"Example Usage",id:"example-usage",level:3},{value:"Limitations",id:"limitations",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"GraphQL Kotlin allows for two ways of defining unions in the schema"}),"\n",(0,t.jsx)(n.h2,{id:"marker-interfaces",children:"Marker Interfaces"}),"\n",(0,t.jsx)(n.p,{children:"Marker interfaces (i.e. interfaces without any common fields or methods) are exposed as GraphQL union types. All the\ntypes that implement the marker interface, and are available on the classpath, will be automatically exposed as\nobjects in the schema."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"http://spec.graphql.org/June2018/#sec-Unions",children:"The GraphQL spec"})," does not allow unions to be used as input.\nThis means that while it is valid Kotlin code to have a marker inteface as an argument, upon schema generation, an exception will be thrown."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'interface BodyPart\n\nclass LeftHand(val field: String): BodyPart\n\nclass RightHand(val property: Int): BodyPart\n\nclass PolymorphicQuery {\n    fun whichHand(whichHand: String): BodyPart = when (whichHand) {\n        "right" -> RightHand(12)\n        else -> LeftHand("hello world")\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The above will generate following GraphQL schema"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"union BodyPart = LeftHand | RightHand\n\ntype LeftHand {\n  field: String!\n}\n\ntype RightHand {\n  property: Int!\n}\n\ntype Query {\n  whichHand(whichHand: String!): BodyPart!\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"graphqlunion",children:(0,t.jsx)(n.code,{children:"@GraphQLUnion"})}),"\n",(0,t.jsx)(n.p,{children:"The downside to marker interface unions is that you can not edit classes included in dependencies to implement new schema unions.\nFor example in an SDL-First world you could have this Kotlin class defined in some library."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"class SharedModel(val foo: String)\n"})}),"\n",(0,t.jsx)(n.p,{children:"And then write your schema as the following"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"# From library\ntype SharedModel {\n  foo: String!\n}\n\n# Defined in our schema\ntype ServiceModel {\n  bar: String!\n}\n\n# Defined in our schema\nunion CustomUnion = SharedModel | ServiceModel\n\ntype Query {\n    getModel: CustomUnion\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["But this is not currently possible in the full code-generation approach. Instead, you will need to use the ",(0,t.jsx)(n.code,{children:"@GraphQLUnion"})," annotation on your functions or properties."]}),"\n",(0,t.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'// Defined in some other library\nclass SharedModel(val foo: String)\n\n// Our code\nclass ServiceModel(val bar: String)\n\nclass Query {\n    @GraphQLUnion(\n        name = "CustomUnion",\n        possibleTypes = [SharedModel::class, ServiceModel::class],\n        description = "Return one or the other model"\n    )\n    fun getModel(): Any = ServiceModel("abc")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The annotation requires the ",(0,t.jsx)(n.code,{children:"name"})," of the new union to create and the ",(0,t.jsx)(n.code,{children:"possibleTypes"})," that this union can return.\nHowever since we can not enforce the type checks anymore, you must use ",(0,t.jsx)(n.code,{children:"Any"})," as the return type."]}),"\n",(0,t.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(n.p,{children:["Since this union is defined with an added annotation it is not currently possible to add directives directly to this union definition.\nYou will have to modify the type with ",(0,t.jsx)(n.a,{href:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/generator-config",children:"schema generator hooks"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);