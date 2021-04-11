(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{172:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return c}));var t=r(3),i=r(7),a=(r(0),r(181)),o={id:"spring-overview",title:"Spring Server Overview",original_id:"spring-overview"},s={unversionedId:"spring-server/spring-overview",id:"version-3.x.x/spring-server/spring-overview",isDocsHomePage:!1,title:"Spring Server Overview",description:"graphql-kotlin-spring-server",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-overview.md",slug:"/spring-server/spring-overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-overview.md",version:"3.x.x",lastUpdatedBy:"Tarkan Nielsen",lastUpdatedAt:1618166232,sidebar:"version-3.x.x/docs",previous:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/3.x.x/federated/type-resolution"},next:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-beans"}},p=[{value:"WebFlux vs WebMVC",id:"webflux-vs-webmvc",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Writing Schema Code",id:"writing-schema-code",children:[]},{value:"Default Routes",id:"default-routes",children:[]}],l={toc:p};function c(e){var n=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server"),"\nis a Spring Boot auto-configuration library that automatically configures beans required to start up a reactive GraphQL\nweb server."),Object(a.b)("h2",{id:"webflux-vs-webmvc"},"WebFlux vs WebMVC"),Object(a.b)("p",null,"This library is built on a ",Object(a.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring WebFlux (reactive)")," stack which is a non-blocking alternative to a traditional ",Object(a.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html"},"Spring Web MVC (servlet)")," based stack.\nSince both frameworks utilize different threading models they cannot and should not be intermixed.\nWhen building a GraphQL server using ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," all your queries and mutations should follow one of the supported ",Object(a.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models"},"asynchronous execution models"),"."),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"The simplest way to create a new Kotlin Spring Boot app is by generating one using ",Object(a.b)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Image of https://start.spring.io/",src:r(255).default})),Object(a.b)("p",null,"Once you get the sample application setup locally, you will need to add ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," dependency:"),Object(a.b)("p",null,"With Maven:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-spring-server</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n")),Object(a.b)("p",null,"With Gradle:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n')),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"At a minimum, in order for ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," to automatically configure your GraphQL web server you need to\nspecify a list of supported packages that can be scanned for exposing your schema objects through reflections."),Object(a.b)("p",null,"You can do this through the spring application config or by overriding the ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," bean. See customization below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'graphql:\n  packages:\n    - "com.your.package"\n')),Object(a.b)("h2",{id:"writing-schema-code"},"Writing Schema Code"),Object(a.b)("p",null,"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you need to implement\ncorresponding marker interface and they will be automatically picked up by ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass MyAwesomeQuery : Query {\n  fun myAwesomeQuery(): Widget { ... }\n}\n\n@Component\nclass MyAwesomeMutation : Mutation {\n  fun myAwesomeMutation(widget: Widget): Widget { ... }\n}\n\n@Component\nclass MyAwesomeSubscription : Subscription {\n  fun myAwesomeSubscription(): Publisher<Widget> { ... }\n}\n\ndata class Widget(val id: Int, val value: String)\n")),Object(a.b)("p",null,"will result in a Spring Boot reactive GraphQL web application with following schema."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Query {\n  myAwesomeQuery: Widget!\n}\n\ntype Mutation {\n  myAwesomeMutation(widget: WidgetInput!): Widget!\n}\n\ntype Subscription {\n  myAwesomeSubscription: Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\ninput WidgetInput {\n  id: Int!\n  value: String!\n}\n")),Object(a.b)("h2",{id:"default-routes"},"Default Routes"),Object(a.b)("p",null,"Your newly created GraphQL server starts up with following preconfigured default routes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"/graphql")," - GraphQL server endpoint used for processing queries and mutations"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"/subscriptions")," - GraphQL server endpoint used for processing subscriptions"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"/sdl")," - Convenience endpoint that returns current schema in Schema Definition Language format"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"/playground")," - Prisma Labs ",Object(a.b)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground IDE")," endpoint")))}c.isMDXComponent=!0},181:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return g}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=t,g=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return r?i.a.createElement(g,s(s({ref:n},l),{},{components:r})):i.a.createElement(g,s({ref:n},l))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},255:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/spring-initializer-194b68b7c5cb948d85ee32581fbff955.png"}}]);