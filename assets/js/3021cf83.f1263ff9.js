"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2538],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),p=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,m=e.defaultValue,g=e.values,h=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,q=(0,r.useState)(y),O=q[0],E=q[1],T=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=N[h];null!=j&&j!==O&&k.some((function(e){return e.value===j}))&&E(j)}var S=function(e){var t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==O&&(C(t),E(n),null!=h&&x(h,String(n)))},G=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=T.indexOf(e.currentTarget)+1;a=null!=(n=T[r])?n:T[0];break;case"ArrowLeft":var l,o=T.indexOf(e.currentTarget)-1;a=null!=(l=T[o])?l:T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:G,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},2418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(65488),i=a(85162),s=["components"],p={id:"getting-started",title:"Getting Started",slug:"/"},u=void 0,c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that simplify running GraphQL clients and servers in Kotlin.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/graphql-kotlin/docs/",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1667324215,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{id:"getting-started",title:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/examples"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Generating a Schema",id:"generating-a-schema",level:2},{value:"Apollo Federation",id:"apollo-federation",level:3},{value:"Running a Server",id:"running-a-server",level:2},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Examples",id:"examples",level:2},{value:"Blogs and Videos",id:"blogs-and-videos",level:2},{value:"Additional resources",id:"additional-resources",level:2}],g={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin is a collection of libraries, built on top of ",(0,l.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),", that simplify running GraphQL clients and servers in Kotlin."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Using a JVM dependency manager, link any ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*")," library to your project."),(0,l.kt)(o.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'))),(0,l.kt)(i.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-spring-server</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,l.kt)("h2",{id:"generating-a-schema"},"Generating a Schema"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to generate a schema from Kotlin code and expose it with any server library."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/schema-generator-getting-started"},"Schema Generator Getting Started"),"."),(0,l.kt)("h3",{id:"apollo-federation"},"Apollo Federation"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),", you can generate an ",(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation")," compliant schema."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/federation/apollo-federation"},"Apollo Federation"),"."),(0,l.kt)("h2",{id:"running-a-server"},"Running a Server"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," is a combination of the schema generator, federation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-server"},"GraphQL Kotlin Server"),"."),(0,l.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins")," can be used to generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," from an existing schema that is easy to use and type-safe."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/client/client-overview"},"Client Overview"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," module is a collection of working code and examples on how to use all of the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," modules."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/examples"},"example docs")," for more info."),(0,l.kt)("h2",{id:"blogs-and-videos"},"Blogs and Videos"),(0,l.kt)("p",null,"You can find more posts and recorded conference talks on GraphQL and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," on our ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/blogs-and-videos"},"Blogs and Videos")," page."),(0,l.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.graphql-java.com/"},"graphql-java"))))}h.isMDXComponent=!0}}]);