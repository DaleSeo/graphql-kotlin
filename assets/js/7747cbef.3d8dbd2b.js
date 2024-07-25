"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6176],{2699:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=r(74848),t=r(28453);const s={id:"data-loaders",title:"Data Loaders"},o=void 0,d={id:"server/data-loaders",title:"Data Loaders",description:"Data Loaders are a popular caching pattern from the JavaScript GraphQL implementation.",source:"@site/versioned_docs/version-5.x.x/server/data-loaders.md",sourceDirName:"server",slug:"/server/data-loaders",permalink:"/graphql-kotlin/docs/5.x.x/server/data-loaders",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/server/data-loaders.md",tags:[],version:"5.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1721925847e3,frontMatter:{id:"data-loaders",title:"Data Loaders"},sidebar:"docs",previous:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-request-handler"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/5.x.x/server/server-subscriptions"}},i={},l=[{value:"<code>KotlinDataLoader</code>",id:"kotlindataloader",level:2},{value:"<code>getValueFromDataLoader</code>",id:"getvaluefromdataloader",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Data Loaders are a popular caching pattern from the ",(0,n.jsx)(a.a,{href:"https://github.com/graphql/dataloader",children:"JavaScript GraphQL implementation"}),".\n",(0,n.jsx)(a.code,{children:"graphql-java"})," provides ",(0,n.jsx)(a.a,{href:"https://www.graphql-java.com/documentation/v16/batching/",children:"support for this pattern"})," using the ",(0,n.jsx)(a.code,{children:"DataLoader"})," and ",(0,n.jsx)(a.code,{children:"DataLoaderRegistry"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Since ",(0,n.jsx)(a.code,{children:"graphql-kotlin"})," allows you to abstract the schema generation and data fetching code, you may not even need data loaders if instead you have some persistant cache on your server."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"class User(val id: ID) {\n\n    // The friendService and userService, which have nothing to do with GraphQL,\n    // should be concerned with caching and batch calls instead of your schema classes\n    fun getFriends(): List<User> {\n        val friends: List<ID> = friendService.getFriends(id)\n        return userService.getUsers(friends)\n    }\n\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:"If you still want to use data loaders though, they are supported through the common interfaces."}),"\n",(0,n.jsx)(a.h2,{id:"kotlindataloader",children:(0,n.jsx)(a.code,{children:"KotlinDataLoader"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.a,{href:"/graphql-kotlin/docs/5.x.x/server/graphql-request-handler",children:"GraphQLRequestHandler"})," accepts an optional ",(0,n.jsx)(a.code,{children:"DataLoaderRegistryFactory"})," that will be used on every request.\nThe ",(0,n.jsx)(a.code,{children:"DataLoaderRegistryFactory"})," generates a new ",(0,n.jsx)(a.code,{children:"DataLoaderRegistry"})," on every request. The registry is a map of a unique data loader names to a ",(0,n.jsx)(a.code,{children:"DataLoader"})," object that handles the cache for an output type in your graph.\nA ",(0,n.jsx)(a.code,{children:"DataLoader"})," caches the types by some unique value, usually by the type id, and can handle different types of batch requests."]}),"\n",(0,n.jsxs)(a.p,{children:["To help in the registration of these various ",(0,n.jsx)(a.code,{children:"DataLoaders"}),", we have created a basic interface ",(0,n.jsx)(a.code,{children:"KotlinDataLoader"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"interface KotlinDataLoader<K, V> {\n    val dataLoaderName: String\n    fun getDataLoader(): DataLoader<K, V>\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This allows for library users to still have full control over the creation of the ",(0,n.jsx)(a.code,{children:"DataLoader"})," and its various configuraiton options,\nbut then allows common server code to handle the registration, generation on request, and execution."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader"\n    override fun getDataLoader() = DataLoader<ID, User>({ ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id -> userService.getUser(id) }\n        }\n    }, DataLoaderOptions.newOptions().setCachingEnabled(false))\n}\n\nclass FriendsDataLoader : KotlinDataLoader<ID, List<User>> {\n    override val dataLoaderName = "FriendsDataLoader"\n    override fun getDataLoader() = DataLoader<ID, List<User>> { ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id ->\n                val friends: List<ID> = friendService.getFriends(id)\n                userService.getUsers(friends)\n            }\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"getvaluefromdataloader",children:(0,n.jsx)(a.code,{children:"getValueFromDataLoader"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"graphql-kotlin-server"})," includes a helpful extension function on the ",(0,n.jsx)(a.code,{children:"DataFetchingEnvironment"})," so that you can easily retrieve values from the data loaders in your schema code."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'class User(val id: ID) {\n\n    @GraphQLDescription("Get the users friends using data loader")\n    fun getFriends(dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<List<User>> {\n        return dataFetchingEnvironment.getValueFromDataLoader("FriendsDataLoader", id)\n    }\n}\n'})}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["Because the execution of data loaders is handled by ",(0,n.jsx)(a.code,{children:"graphql-java"}),", which runs using ",(0,n.jsx)(a.code,{children:"CompletionStage"}),", currently we can\nnot support ",(0,n.jsx)(a.code,{children:"suspend"})," functions when envoking data loaders. Instead, return the ",(0,n.jsx)(a.code,{children:"CompletableFuture"})," directly from the ",(0,n.jsx)(a.code,{children:"DataLoader"}),"\nresponse in your schema functions. See issue ",(0,n.jsx)(a.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/986",children:"#986"}),"."]})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>d});var n=r(96540);const t={},s=n.createContext(t);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);