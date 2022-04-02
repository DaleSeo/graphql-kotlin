"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"spring-schema",title:"Writing Schemas with Spring"},p=void 0,l={unversionedId:"server/spring-server/spring-schema",id:"server/spring-server/spring-schema",title:"Writing Schemas with Spring",description:"In order to expose your queries, mutations, and subscriptions in the GraphQL schema create beans that",source:"@site/docs/server/spring-server/spring-schema.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-schema",permalink:"/graphql-kotlin/docs/server/spring-server/spring-schema",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-schema.md",tags:[],version:"current",lastUpdatedBy:"Ravi Kumar",lastUpdatedAt:1648863561,formattedLastUpdatedAt:"4/2/2022",frontMatter:{id:"spring-schema",title:"Writing Schemas with Spring"},sidebar:"docs",previous:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/server/spring-server/spring-overview"},next:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"}},c={},d=[{value:"Spring Beans",id:"spring-beans",level:2},{value:"Spring Beans in Arguments",id:"spring-beans-in-arguments",level:2}],u={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to expose your queries, mutations, and subscriptions in the GraphQL schema create beans that\nimplement the corresponding marker interface and they will be automatically picked up by ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Widget(val id: ID, val value: String)\n\n@Component\nclass WidgetQuery : Query {\n  fun widget(id: ID): Widget = getWidgetFromDB(id)\n}\n\n@Component\nclass WidgetMutation : Mutation {\n  fun updateWidget(id: ID, value: String): Boolean = updateWidgetInDB(id, value)\n}\n\n@Component\nclass WidgetSubscription : Subscription {\n  fun widgetChanges(id: ID): Publisher<Widget> = getPublisherOfUpdates(id)\n}\n")),(0,a.kt)("p",null,"will result in a Spring Boot reactive GraphQL web application with following schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Widget {\n    id: ID!\n    value: String!\n}\n\ntype Query {\n  widget(id: ID!): Widget!\n}\n\ntype Mutation {\n    updateWidget(id: ID!, value: String!): Boolean!\n}\n\ntype Subscription {\n    widgetChanges(id: ID!): Widget!\n}\n")),(0,a.kt)("h2",{id:"spring-beans"},"Spring Beans"),(0,a.kt)("p",null,"Since the top level objects are Spring components, Spring will automatically autowire dependent beans as normal. Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/"},"Spring Documentation")," for details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass WidgetQuery(private val repository: WidgetRepository) : Query {\n    fun getWidget(id: Int): Widget = repository.findWidget(id)\n}\n")),(0,a.kt)("h2",{id:"spring-beans-in-arguments"},"Spring Beans in Arguments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides Spring-aware data fetcher that automatically autowires Spring beans when they are\nspecified as function arguments. ",(0,a.kt)("inlineCode",{parentName:"p"},"@Autowired")," arguments should be explicitly excluded from the GraphQL schema by also\nspecifying ",(0,a.kt)("inlineCode",{parentName:"p"},"@GraphQLIgnore"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass SpringQuery : Query {\n    fun getWidget(@GraphQLIgnore @Autowired repository: WidgetRepository, id: Int): Widget = repository.findWidget(id)\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are using custom data fetcher make sure that you extend ",(0,a.kt)("inlineCode",{parentName:"p"},"SpringDataFetcher")," instead of the base ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionDataFetcher")," to keep this functionallity."))),(0,a.kt)("p",null,"We have examples of these techniques implemented in Spring boot in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/query/NestedQueries.kt"},"example\napp"),"."))}g.isMDXComponent=!0}}]);