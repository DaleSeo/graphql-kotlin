(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),o=(r(0),r(234)),p={id:"examples",title:"Examples",original_id:"examples"},i={unversionedId:"examples",id:"version-4.x.x/examples",isDocsHomePage:!1,title:"Examples",description:"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the examples module.",source:"@site/versioned_docs/version-4.x.x/examples.md",slug:"/examples",permalink:"/graphql-kotlin/docs/examples",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/examples.md",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613785270,sidebar:"version-4.x.x/docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/"},next:{title:"GraphQL Java Comparison",permalink:"/graphql-kotlin/docs/graphql-java-comparison"}},l=[{value:"Client Example",id:"client-example",children:[]},{value:"Federation Example",id:"federation-example",children:[]},{value:"Server Examples",id:"server-examples",children:[{value:"Ktor Server Example",id:"ktor-server-example",children:[]},{value:"Spring Server Example",id:"spring-server-example",children:[]}]}],s={toc:l};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples"},"examples module"),"."),Object(o.b)("h2",{id:"client-example"},"Client Example"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," can be generated by using the provided Maven or Gradle. Example integration using Maven and\nGradle plugins can be found under the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/client"},"examples/client"),"\nfolder."),Object(o.b)("h2",{id:"federation-example"},"Federation Example"),Object(o.b)("p",null,"There is also an example of ",Object(o.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation"),"\nwith two Spring Boot apps using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," and an Apollo Gateway app in Nodejs that exposes a single\nfederated schema in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/federation"},"examples/federation"),"\nproject. Please refer to the README files for details on how to run each application."),Object(o.b)("h2",{id:"server-examples"},"Server Examples"),Object(o.b)("p",null,"Example integrations of ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," with number of popular application frameworks can be found under\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server"},"examples/server")," folder."),Object(o.b)("p",null,"These examples also demonstrates how to include ",Object(o.b)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader"},Object(o.b)("inlineCode",{parentName:"a"},"DataLoaders"))," in your query execution."),Object(o.b)("h3",{id:"ktor-server-example"},"Ktor Server Example"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://ktor.io/"},"Ktor")," is an asynchronous framework for creating microservices, web applications, and more. Example\nintegration can be found at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/ktor-server"},"examples/server/ktor-server")),Object(o.b)("h3",{id:"spring-server-example"},"Spring Server Example"),Object(o.b)("p",null,"One way to run a GraphQL server is with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot"},"Spring Boot"),". A sample Spring\nBoot app that uses ",Object(o.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring\nWebflux")," together with\n",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prisma/graphql-playground"},"graphql-playground")," is provided as\na ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/spring-server"},"examples/server/spring-server"),".\nAll the examples used in this documentation should be available in this sample app."),Object(o.b)("p",null,"In order to run it you can run\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/Application.kt"},"Application.kt"),"\ndirectly from your IDE. Alternatively you can also use the Spring Boot plugin from the command line."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n./gradlew bootRun\n\n")),Object(o.b)("p",null,"Once the app has started you can explore the example schema by opening Playground endpoint at\nhttp:."))}c.isMDXComponent=!0},234:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),c=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.a.createElement(b,i(i({ref:t},s),{},{components:r})):n.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);