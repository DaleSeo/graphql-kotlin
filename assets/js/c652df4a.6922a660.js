"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1390],{82215:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(74848),t=r(28453);const s={id:"spring-schema",title:"Writing Schemas with Spring"},a=void 0,o={id:"server/spring-server/spring-schema",title:"Writing Schemas with Spring",description:"In order to expose your queries, mutations, and subscriptions in the GraphQL schema create beans that",source:"@site/versioned_docs/version-4.x.x/server/spring-server/spring-schema.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-schema",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/spring-server/spring-schema.md",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1715034375,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"spring-schema",title:"Writing Schemas with Spring"},sidebar:"docs",previous:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-overview"},next:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-graphql-context"}},p={},d=[{value:"Spring Beans",id:"spring-beans",level:2},{value:"Spring Beans in Arguments",id:"spring-beans-in-arguments",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In order to expose your queries, mutations, and subscriptions in the GraphQL schema create beans that\nimplement the corresponding marker interface and they will be automatically picked up by ",(0,i.jsx)(n.code,{children:"graphql-kotlin-spring-server"}),"\nauto-configuration library."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"data class Widget(val id: ID, val value: String)\n\n@Component\nclass WidgetQuery : Query {\n  fun widget(id: ID): Widget = getWidgetFromDB(id)\n}\n\n@Component\nclass WidgetMutation : Mutation {\n  fun updateWidget(id: ID, value: String): Boolean = updateWidgetInDB(id, value)\n}\n\n@Component\nclass WidgetSubscription : Subscription {\n  fun widgetChanges(id: ID): Publisher<Widget> = getPublisherOfUpdates(id)\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"will result in a Spring Boot reactive GraphQL web application with following schema."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Widget {\n    id: ID!\n    value: String!\n}\n\ntype Query {\n  widget(id: ID!): Widget!\n}\n\ntype Mutation {\n    updateWidget(id: ID!, value: String!): Boolean!\n}\n\ntype Subscription {\n    widgetChanges(id: ID!): Widget!\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"spring-beans",children:"Spring Beans"}),"\n",(0,i.jsxs)(n.p,{children:["Since the top level objects are Spring components, Spring will automatically autowire dependent beans as normal. Refer to ",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/",children:"Spring Documentation"})," for details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Component\nclass WidgetQuery(private val repository: WidgetRepository) : Query {\n    fun getWidget(id: Int): Widget = repository.findWidget(id)\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"spring-beans-in-arguments",children:"Spring Beans in Arguments"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"graphql-kotlin-spring-server"})," provides Spring-aware data fetcher that automatically autowires Spring beans when they are\nspecified as function arguments. ",(0,i.jsx)(n.code,{children:"@Autowired"})," arguments should be explicitly excluded from the GraphQL schema by also\nspecifying ",(0,i.jsx)(n.code,{children:"@GraphQLIgnore"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Component\nclass SpringQuery : Query {\n    fun getWidget(@GraphQLIgnore @Autowired repository: WidgetRepository, id: Int): Widget = repository.findWidget(id)\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you are using custom data fetcher make sure that you extend ",(0,i.jsx)(n.code,{children:"SpringDataFetcher"})," instead of the base ",(0,i.jsx)(n.code,{children:"FunctionDataFetcher"})," to keep this functionallity."]})}),"\n",(0,i.jsxs)(n.p,{children:["We have examples of these techniques implemented in Spring boot in the ",(0,i.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/query/NestedQueries.kt",children:"example\napp"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(96540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);