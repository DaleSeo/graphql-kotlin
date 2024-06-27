"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2401],{7424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=t(74848),s=t(28453);const o={id:"nested-arguments",title:"Nested Resolvers and Shared Arguments"},a=void 0,i={id:"schema-generator/writing-schemas/nested-arguments",title:"Nested Resolvers and Shared Arguments",description:"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:",source:"@site/versioned_docs/version-7.x.x/schema-generator/writing-schemas/nested-arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/nested-arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nested-arguments",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/schema-generator/writing-schemas/nested-arguments.md",tags:[],version:"7.x.x",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"nested-arguments",title:"Nested Resolvers and Shared Arguments"},sidebar:"docs",previous:{title:"Unions",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/unions"},next:{title:"Annotations",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/annotations"}},c={},h=[{value:"DataFetchingEnvironment",id:"datafetchingenvironment",level:2},{value:"GraphQL Context Object (Deprecated)",id:"graphql-context-object-deprecated",level:2},{value:"Excluding Arguments from the Schema",id:"excluding-arguments-from-the-schema",level:2},{value:"Spring Integration",id:"spring-integration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  findUser(id: String!): User\n}\n\ntype User {\n  photos(numberOfPhotos: Int!): [Photo!]!\n}\n\ntype Photo {\n  url: String!\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In Kotlin code, when we are resolving  ",(0,r.jsx)(n.code,{children:"photos"}),", if we want access to the parent field ",(0,r.jsx)(n.code,{children:"findUser"})," and its arguments there\nare a couple ways we can access it,"]}),"\n",(0,r.jsx)(n.h2,{id:"datafetchingenvironment",children:"DataFetchingEnvironment"}),"\n",(0,r.jsxs)(n.p,{children:["You can add the ",(0,r.jsx)(n.code,{children:"DataFetchingEnvironment"})," as an argument. This class will be ignored by the schema generator and will allow\nyou to view the entire query sent to the server. See more in the ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment",children:"DataFetchingEnvironment documentation"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'class User {\n    fun photos(environment: DataFetchingEnvironment, numberOfPhotos: Int): List<Photo> {\n      val username = environment.executionStepInfo.parent.arguments["id"]\n      return getPhotosFromDataSource(username, numberOfPhotos)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"graphql-context-object-deprecated",children:"GraphQL Context Object (Deprecated)"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Support for custom GraphQL context object is deprecated and will be removed in future releases. Please migrate to use\ngeneric GraphQL context map."})}),"\n",(0,r.jsxs)(n.p,{children:["You can add the ",(0,r.jsx)(n.code,{children:"GraphQLContext"})," as an argument. This class will be ignored by the schema generator and will allow you to\nview the context object you set up in the data fetchers. See more in the ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data",children:"GraphQLContext documentation"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"class User {\n    fun photos(context: MyContextObject, numberOfPhotos: Int): List<Photo> {\n      val userId = context.getDataFromMyCustomFunction()\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"excluding-arguments-from-the-schema",children:"Excluding Arguments from the Schema"}),"\n",(0,r.jsxs)(n.p,{children:["You can construct the child objects by passing down arguments as non-public fields or annotate the argument with ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields",children:"@GraphQLIgnore"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"class User(private val userId: String) {\n\n    fun photosProperty(numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n\n    fun photosIgnore(@GraphQLIgnore userId: String, numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"spring-integration",children:"Spring Integration"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/graphql-kotlin/docs/server/spring-server/spring-schema",children:"Writing Schemas with Spring"})," for integration details."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);