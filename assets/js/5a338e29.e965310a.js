"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1441],{42232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),o=t(11470),s=t(19365);const l={id:"schema-generator-getting-started",title:"Getting Started"},i=void 0,c={id:"schema-generator/schema-generator-getting-started",title:"Getting Started",description:"Install",source:"@site/versioned_docs/version-4.x.x/schema-generator/schema-generator-getting-started.mdx",sourceDirName:"schema-generator",slug:"/schema-generator/schema-generator-getting-started",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/schema-generator-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/schema-generator-getting-started.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1719501861,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{id:"schema-generator-getting-started",title:"Getting Started"},sidebar:"docs",previous:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/4.x.x/blogs-and-videos"},next:{title:"Nullability",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/nullability"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toSchema</code>",id:"toschema",level:2},{value:"<code>TopLevelObject</code>",id:"toplevelobject",level:2},{value:"Dynamic <code>TopLevelObject</code>",id:"dynamic-toplevelobject",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(n.p,{children:["Using a JVM dependency manager, link ",(0,a.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," to your project."]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],children:[(0,a.jsx)(s.A,{value:"gradle",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'implementation("com.expediagroup", "graphql-kotlin-schema-generator", latestVersion)\n'})})}),(0,a.jsx)(s.A,{value:"maven",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-schema-generator</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," provides a single function, ",(0,a.jsx)(n.code,{children:"toSchema"}),", to generate a schema from Kotlin objects."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"data class Widget(val id: Int, val value: String)\n\nclass WidgetQuery {\n  fun widgetById(id: Int): Widget? {\n    // grabs widget from a data source\n  }\n}\n\nclass WidgetMutation {\n  fun saveWidget(value: String): Widget {\n    // some logic for saving widget\n  }\n}\n\nval widgetQuery = WidgetQuery()\nval widgetMutation = WidgetMutation()\nval schema = toSchema(\n  config = yourCustomConfig(),\n  queries = listOf(TopLevelObject(widgetQuery)),\n  mutations = listOf(TopLevelObject(widgetMutation))\n)\n"})}),"\n",(0,a.jsx)(n.p,{children:"will generate:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"schema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  widgetById(id: Int!): Widget\n}\n\ntype Mutation {\n  saveWidget(value: String!): Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Any ",(0,a.jsx)(n.code,{children:"public"})," functions defined on a query, mutation, or subscription Kotlin class will be translated into GraphQL fields on the object\ntype. ",(0,a.jsx)(n.code,{children:"toSchema"})," will then recursively apply Kotlin reflection on the specified classes to generate all\nremaining object types, their properties, functions, and function arguments."]}),"\n",(0,a.jsxs)(n.p,{children:["The generated ",(0,a.jsx)(n.code,{children:"GraphQLSchema"})," can then be used to expose a GraphQL API endpoint."]}),"\n",(0,a.jsx)(n.h2,{id:"toschema",children:(0,a.jsx)(n.code,{children:"toSchema"})}),"\n",(0,a.jsxs)(n.p,{children:["This function accepts four arguments: ",(0,a.jsx)(n.code,{children:"config"}),", ",(0,a.jsx)(n.code,{children:"queries"}),", ",(0,a.jsx)(n.code,{children:"mutations"})," and ",(0,a.jsx)(n.code,{children:"subscriptions"}),". The ",(0,a.jsx)(n.code,{children:"queries"}),", ",(0,a.jsx)(n.code,{children:"mutations"}),"\nand ",(0,a.jsx)(n.code,{children:"subscriptions"})," are a list of ",(0,a.jsx)(n.code,{children:"TopLevelObject"}),"s and will be used to generate corresponding GraphQL root types. See\nbelow on why we use this wrapper class. The ",(0,a.jsx)(n.code,{children:"config"})," contains all the extra information you need to pass, including\ncustom hooks, supported packages, and name overrides. See the ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/generator-config",children:"Generator Configuration"})," documentation for more information."]}),"\n",(0,a.jsxs)(n.p,{children:["You can see the definition for ",(0,a.jsx)(n.code,{children:"toSchema"})," ",(0,a.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/toSchema.kt",children:"in the\nsource"})]}),"\n",(0,a.jsx)(n.h2,{id:"toplevelobject",children:(0,a.jsx)(n.code,{children:"TopLevelObject"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"toSchema"})," uses Kotlin reflection to build a GraphQL schema from given classes using ",(0,a.jsx)(n.code,{children:"graphql-java"}),"'s schema builder. We\ndon't just pass a ",(0,a.jsx)(n.code,{children:"KClass"})," though, we have to actually pass an object, because the functions on the object are\ntransformed into the data fetchers. In most cases, a ",(0,a.jsx)(n.code,{children:"TopLevelObject"})," can be constructed with just an object:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"class Query {\n  fun getNumber() = 1\n}\n\nval topLevelObject = TopLevelObject(Query())\n\ntoSchema(config = config, queries = listOf(topLevelObject))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the above case, ",(0,a.jsx)(n.code,{children:"toSchema"})," will use ",(0,a.jsx)(n.code,{children:"topLevelObject::class"})," as the reflection target, and ",(0,a.jsx)(n.code,{children:"Query"})," as the data fetcher\ntarget."]}),"\n",(0,a.jsxs)(n.h3,{id:"dynamic-toplevelobject",children:["Dynamic ",(0,a.jsx)(n.code,{children:"TopLevelObject"})]}),"\n",(0,a.jsxs)(n.p,{children:["In a lot of cases, such as with Spring AOP, the object (or bean) being used to generate a schema is a dynamic proxy. In\nthis case, ",(0,a.jsx)(n.code,{children:"topLevelObject::class"})," is not ",(0,a.jsx)(n.code,{children:"Query"}),", but rather a generated class that will confuse the schema generator.\nTo specify the ",(0,a.jsx)(n.code,{children:"KClass"})," to use for reflection on a proxy, pass the class to ",(0,a.jsx)(n.code,{children:"TopLevelObject"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"@Component\nclass Query {\n  fun getNumber() = 1\n}\n\nval query = getObjectFromBean()\nval customDef = TopLevelObject(query, Query::class)\n\ntoSchema(config, listOf(customDef))\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(34164),o=t(23104),s=t(56347),l=t(205),i=t(57485),c=t(31682),u=t(89466);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,s.W6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function m(e){var n,t,r,o,s=e.defaultValue,i=e.queryString,c=void 0!==i&&i,d=e.groupId,m=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),v=f[0],b=f[1],j=p({queryString:c,groupId:d}),x=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Dv)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),k=w[0],I=w[1],q=function(){var e=null!=x?x:k;return g({value:e,tabValues:m})?e:null}();return(0,l.A)((function(){q&&b(q)}),[q]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),I(e)}),[y,I,m]),tabValues:m}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,l=e.tabValues,i=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(c(n),s(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=i.indexOf(e.currentTarget)+1;t=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var o,s=i.indexOf(e.currentTarget)-1;t=null!=(o=i[s])?o:i[i.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},o,{className:(0,r.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,r=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=o.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,b.jsx)(j,Object.assign({},e,n)),(0,b.jsx)(x,Object.assign({},e,n))]})}function w(e){var n=(0,f.A)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(96540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);