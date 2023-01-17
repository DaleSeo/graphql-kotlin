"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"excluding-fields",title:"Excluding Fields"},c=void 0,s={unversionedId:"schema-generator/customizing-schemas/excluding-fields",id:"schema-generator/customizing-schemas/excluding-fields",title:"Excluding Fields",description:"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:",source:"@site/docs/schema-generator/customizing-schemas/excluding-fields.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/excluding-fields",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/excluding-fields",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/excluding-fields.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1673990222,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"excluding-fields",title:"Excluding Fields"},sidebar:"docs",previous:{title:"Documenting Schema",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/documenting-schema"},next:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/renaming-fields"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first is by marking the field as non-",(0,i.kt)("inlineCode",{parentName:"li"},"public")," scope (",(0,i.kt)("inlineCode",{parentName:"li"},"private"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"protected"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"internal"),")"),(0,i.kt)("li",{parentName:"ul"},"The second method is by annotating the field with ",(0,i.kt)("inlineCode",{parentName:"li"},"@GraphQLIgnore"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SimpleQuery {\n  @GraphQLIgnore\n  fun notPartOfSchema() = "ignore me!"\n\n  private fun privateFunctionsAreNotVisible() = "ignored private function"\n\n  fun doSomething(value: Int): Boolean = true\n}\n')),(0,i.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  doSomething(value: Int!): Boolean!\n}\n")),(0,i.kt)("p",null,"Note that the public method ",(0,i.kt)("inlineCode",{parentName:"p"},"notPartOfSchema")," is not included in the schema."))}d.isMDXComponent=!0}}]);