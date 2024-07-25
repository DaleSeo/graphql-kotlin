"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2134],{85089:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=r(74848),t=r(28453),l=r(11470),i=r(19365);const o={id:"getting-started",title:"Getting Started",slug:"/"},s=void 0,c={id:"getting-started",title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that simplify running GraphQL clients and servers in Kotlin.",source:"@site/versioned_docs/version-6.x.x/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/graphql-kotlin/docs/6.x.x/",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/getting-started.mdx",tags:[],version:"6.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1721925847e3,frontMatter:{id:"getting-started",title:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/6.x.x/examples"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Generating a Schema",id:"generating-a-schema",level:2},{value:"Apollo Federation",id:"apollo-federation",level:3},{value:"Running a Server",id:"running-a-server",level:2},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Examples",id:"examples",level:2},{value:"Blogs and Videos",id:"blogs-and-videos",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["GraphQL Kotlin is a collection of libraries, built on top of ",(0,a.jsx)(n.a,{href:"https://www.graphql-java.com/",children:"graphql-java"}),", that simplify running GraphQL clients and servers in Kotlin."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["Using a JVM dependency manager, link any ",(0,a.jsx)(n.code,{children:"graphql-kotlin-*"})," library to your project."]}),"\n",(0,a.jsxs)(l.A,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],children:[(0,a.jsx)(i.A,{value:"gradle",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'})})}),(0,a.jsx)(i.A,{value:"maven",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-spring-server</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"generating-a-schema",children:"Generating a Schema"}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," to generate a schema from Kotlin code and expose it with any server library."]}),"\n",(0,a.jsxs)(n.p,{children:["See the docs in ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/schema-generator-getting-started",children:"Schema Generator Getting Started"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"apollo-federation",children:"Apollo Federation"}),"\n",(0,a.jsxs)(n.p,{children:["Using ",(0,a.jsx)(n.code,{children:"graphql-kotlin-federation"}),", you can generate an ",(0,a.jsx)(n.a,{href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/",children:"Apollo Federation"})," compliant schema."]}),"\n",(0,a.jsxs)(n.p,{children:["See the docs in ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/schema-generator/federation/apollo-federation",children:"Apollo Federation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"running-a-server",children:"Running a Server"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"graphql-kotlin-server"})," is a combination of the schema generator, federation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."]}),"\n",(0,a.jsxs)(n.p,{children:["See the docs in ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/server/graphql-server",children:"GraphQL Kotlin Server"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-client",children:"Creating a Client"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"graphql-kotlin-plugins"})," can be used to generate a ",(0,a.jsx)(n.code,{children:"graphql-kotlin-client"})," from an existing schema that is easy to use and type-safe."]}),"\n",(0,a.jsxs)(n.p,{children:["See the docs in ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/client/client-overview",children:"Client Overview"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"examples"})," module is a collection of working code and examples on how to use all of the ",(0,a.jsx)(n.code,{children:"graphql-kotlin"})," modules."]}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/examples",children:"example docs"})," for more info."]}),"\n",(0,a.jsx)(n.h2,{id:"blogs-and-videos",children:"Blogs and Videos"}),"\n",(0,a.jsxs)(n.p,{children:["You can find more posts and recorded conference talks on GraphQL and ",(0,a.jsx)(n.code,{children:"graphql-kotlin"})," on our ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/blogs-and-videos",children:"Blogs and Videos"})," page."]}),"\n",(0,a.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://graphql.org/",children:"GraphQL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.graphql-java.com/",children:"graphql-java"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var a=r(34164);const t={tabItem:"tabItem_Ymn6"};var l=r(74848);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>q});var a=r(96540),t=r(34164),l=r(23104),i=r(56347),o=r(205),s=r(57485),c=r(31682),u=r(70679);function d(e){var n,r;return null!=(n=null==(r=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,l=(0,i.W6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:t});return[(0,s.aZ)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function v(e){var n,r,t,l,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,d=e.groupId,v=h(e),f=(0,a.useState)((function(){return function(e){var n,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:v})})),x=f[0],m=f[1],b=g({queryString:c,groupId:d}),j=b[0],k=b[1],q=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Dv)(n),t=r[0],l=r[1],[t,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),y=q[0],w=q[1],S=function(){var e=null!=j?j:y;return p({value:e,tabValues:v})?e:null}();return(0,o.A)((function(){S&&m(S)}),[S]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);m(e),k(e),w(e)}),[k,w,v]),tabValues:v}}var f=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function b(e){var n=e.className,r=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,s=[],c=(0,l.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=s.indexOf(n),t=o[r].value;t!==a&&(c(n),i(t))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,t=s.indexOf(e.currentTarget)+1;r=null!=(a=s[t])?a:s[0];break;case"ArrowLeft":var l,i=s.indexOf(e.currentTarget)-1;r=null!=(l=s[i])?l:s[s.length-1]}null==(n=r)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,l=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},l,{className:(0,t.A)("tabs__item",x.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,t=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=l.find((function(e){return e.props.value===t}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function k(e){var n=v(e);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,m.jsx)(b,Object.assign({},n,e)),(0,m.jsx)(j,Object.assign({},n,e))]})}function q(e){var n=(0,f.A)();return(0,m.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var a=r(96540);const t={},l=a.createContext(t);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);