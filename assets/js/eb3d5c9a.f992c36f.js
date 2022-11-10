"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"contextual-data",title:"Contextual Data",original_id:"contextual-data"},c=void 0,s={unversionedId:"schema-generator/execution/contextual-data",id:"version-3.x.x/schema-generator/execution/contextual-data",title:"Contextual Data",description:'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL',source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/contextual-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/contextual-data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/contextual-data.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1668103175,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"contextual-data",title:"Contextual Data",original_id:"contextual-data"},sidebar:"version-3.x.x/docs",previous:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment"},next:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/optional-undefined-arguments"}},p={},u=[{value:"GraphQLContext Interface",id:"graphqlcontext-interface",level:2},{value:"Spring Server",id:"spring-server",level:2},{value:"Customization",id:"customization",level:3}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL\nserver, but shouldn\'t necessarily be part of the GraphQL schema. A prime example of something that is appropriate\nfor the GraphQL context would be trace headers for an OpenTracing system such as\n',(0,o.kt)("a",{parentName:"p",href:"https://expediadotcom.github.io/haystack"},"Haystack"),". The GraphQL query does not need the information to perform\nits function, but the server needs the information to ensure observability."),(0,o.kt)("p",null,"The contents of the GraphQL context vary across applications and it is up to the GraphQL server developers to decide\nwhat it should contain. For Spring based applications, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a simple mechanism to\nbuild context per query execution through\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/GraphQLContextFactory.kt"},"GraphQLContextFactory"),".\nOnce context factory bean is available in the Spring application context it will then be used in a corresponding\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ContextWebFilter.kt"},"ContextWebFilter"),"\nto populate GraphQL context based on the incoming request and make it available during query execution. See ",(0,o.kt)("a",{parentName:"p",href:"../../spring-server/spring-graphql-context"},"graphql-kotlin-spring-server documentation"),"\nfor additional details"),(0,o.kt)("h2",{id:"graphqlcontext-interface"},"GraphQLContext Interface"),(0,o.kt)("p",null,"The easiest way to specify a context class is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," marker interface. This interface does not require any implementations,\nit is just used to inform the schema generator that this is the class that should be used as the context for every request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass MyGraphQLContext(val customValue: String) : GraphQLContext\n\n")),(0,o.kt)("p",null,"Then you can just use the class as an argument and it will be automatically injected during execution time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass ContextualQuery {\n    fun contextualQuery(\n        context: MyGraphQLContext,\n        value: Int\n    ): String = "The custom value was ${context.customValue} and the value was $value"\n}\n\n')),(0,o.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n}\n\ntype Query {\n  contextualQuery(value: Int!): String!\n}\n\n")),(0,o.kt)("p",null,"Note that the argument that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," is not reflected in the GraphQL schema."),(0,o.kt)("h2",{id:"spring-server"},"Spring Server"),(0,o.kt)("p",null,"For more details on how to create the context while using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," see the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},"spring graphql context page"),"."),(0,o.kt)("h3",{id:"customization"},"Customization"),(0,o.kt)("p",null,"The context is injected into the execution through the ",(0,o.kt)("inlineCode",{parentName:"p"},"FunctionDataFetcher")," class. If you want to customize the logic on how the context is determined, that is possible to override. See more details on the ",(0,o.kt)("a",{parentName:"p",href:"./fetching-data"},"Fetching Data documentation")))}d.isMDXComponent=!0}}]);