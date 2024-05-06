"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7522],{31136:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=r(74848),t=r(28453);const s={id:"spring-overview",title:"Spring Server Overview",original_id:"spring-overview"},o=void 0,a={id:"spring-server/spring-overview",title:"Spring Server Overview",description:"graphql-kotlin-spring-server",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-overview.md",sourceDirName:"spring-server",slug:"/spring-server/spring-overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-overview.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1715034375,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"spring-overview",title:"Spring Server Overview",original_id:"spring-overview"},sidebar:"docs",previous:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/3.x.x/federated/type-resolution"},next:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-beans"}},l={},c=[{value:"WebFlux vs WebMVC",id:"webflux-vs-webmvc",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Writing Schema Code",id:"writing-schema-code",level:2},{value:"Default Routes",id:"default-routes",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-spring-server",children:"graphql-kotlin-spring-server"}),"\nis a Spring Boot auto-configuration library that automatically configures beans required to start up a reactive GraphQL\nweb server."]}),"\n",(0,i.jsx)(n.h2,{id:"webflux-vs-webmvc",children:"WebFlux vs WebMVC"}),"\n",(0,i.jsxs)(n.p,{children:["This library is built on a ",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html",children:"Spring WebFlux (reactive)"})," stack which is a non-blocking alternative to a traditional ",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html",children:"Spring Web MVC (servlet)"})," based stack.\nSince both frameworks utilize different threading models they cannot and should not be intermixed.\nWhen building a GraphQL server using ",(0,i.jsx)(n.code,{children:"graphql-kotlin-spring-server"})," all your queries and mutations should follow one of the supported ",(0,i.jsx)(n.a,{href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models",children:"asynchronous execution models"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["The simplest way to create a new Kotlin Spring Boot app is by generating one using ",(0,i.jsx)(n.a,{href:"https://start.spring.io/",children:"Spring Initializr."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image of https://start.spring.io/",src:r(33421).A+"",width:"1689",height:"726"})}),"\n",(0,i.jsxs)(n.p,{children:["Once you get the sample application setup locally, you will need to add ",(0,i.jsx)(n.code,{children:"graphql-kotlin-spring-server"})," dependency:"]}),"\n",(0,i.jsx)(n.p,{children:"With Maven:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-spring-server</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.p,{children:"With Gradle:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["At a minimum, in order for ",(0,i.jsx)(n.code,{children:"graphql-kotlin-spring-server"})," to automatically configure your GraphQL web server you need to\nspecify a list of supported packages that can be scanned for exposing your schema objects through reflections."]}),"\n",(0,i.jsxs)(n.p,{children:["You can do this through the spring application config or by overriding the ",(0,i.jsx)(n.code,{children:"SchemaGeneratorConfig"})," bean. See customization below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'graphql:\n  packages:\n    - "com.your.package"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"writing-schema-code",children:"Writing Schema Code"}),"\n",(0,i.jsxs)(n.p,{children:["In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you need to implement\ncorresponding marker interface and they will be automatically picked up by ",(0,i.jsx)(n.code,{children:"graphql-kotlin-spring-server"}),"\nauto-configuration library."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Component\nclass MyAwesomeQuery : Query {\n  fun myAwesomeQuery(): Widget { ... }\n}\n\n@Component\nclass MyAwesomeMutation : Mutation {\n  fun myAwesomeMutation(widget: Widget): Widget { ... }\n}\n\n@Component\nclass MyAwesomeSubscription : Subscription {\n  fun myAwesomeSubscription(): Publisher<Widget> { ... }\n}\n\ndata class Widget(val id: Int, val value: String)\n"})}),"\n",(0,i.jsx)(n.p,{children:"will result in a Spring Boot reactive GraphQL web application with following schema."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Query {\n  myAwesomeQuery: Widget!\n}\n\ntype Mutation {\n  myAwesomeMutation(widget: WidgetInput!): Widget!\n}\n\ntype Subscription {\n  myAwesomeSubscription: Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\ninput WidgetInput {\n  id: Int!\n  value: String!\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"default-routes",children:"Default Routes"}),"\n",(0,i.jsx)(n.p,{children:"Your newly created GraphQL server starts up with following preconfigured default routes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/graphql"})," - GraphQL server endpoint used for processing queries and mutations"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/subscriptions"})," - GraphQL server endpoint used for processing subscriptions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/sdl"})," - Convenience endpoint that returns current schema in Schema Definition Language format"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/playground"})," - Prisma Labs ",(0,i.jsx)(n.a,{href:"https://github.com/prisma-labs/graphql-playground",children:"GraphQL Playground IDE"})," endpoint"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},33421:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/spring-initializer-a906245aeee5602ea82b7bb98a9a50bb.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(96540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);