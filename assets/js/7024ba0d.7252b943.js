"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7903],{97666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(74848),r=n(28453);n(11470),n(19365);const l={id:"client-customization",title:"Client Customization"},a=void 0,o={id:"client/client-customization",title:"Client Customization",description:"Ktor HTTP Client Customization",source:"@site/docs/client/client-customization.mdx",sourceDirName:"client",slug:"/client/client-customization",permalink:"/graphql-kotlin/docs/9.x.x/client/client-customization",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-customization.mdx",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1728268554e3,frontMatter:{id:"client-customization",title:"Client Customization"},sidebar:"docs",previous:{title:"Client Features",permalink:"/graphql-kotlin/docs/9.x.x/client/client-features"},next:{title:"Client Serialization",permalink:"/graphql-kotlin/docs/9.x.x/client/client-serialization"}},s={},c=[{value:"Ktor HTTP Client Customization",id:"ktor-http-client-customization",level:2},{value:"Global Client Customization",id:"global-client-customization",level:3},{value:"Per Request Customization",id:"per-request-customization",level:3},{value:"Spring WebClient Customization",id:"spring-webclient-customization",level:2},{value:"Global Client Customization",id:"global-client-customization-1",level:3},{value:"Per Request Customization",id:"per-request-customization-1",level:3},{value:"Custom GraphQL Client",id:"custom-graphql-client",level:2},{value:"Deprecated Field Usage",id:"deprecated-field-usage",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"ktor-http-client-customization",children:"Ktor HTTP Client Customization"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"GraphQLKtorClient"})," is a thin wrapper on top of ",(0,i.jsx)(t.a,{href:"https://ktor.io/docs/client.html",children:"Ktor HTTP Client"})," and supports fully\nasynchronous non-blocking communication. It is highly customizable and can be configured with any supported Ktor HTTP\n",(0,i.jsx)(t.a,{href:"https://ktor.io/clients/http-client/engines.html",children:"engine"})," and ",(0,i.jsx)(t.a,{href:"https://ktor.io/clients/http-client/features.html",children:"features"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://ktor.io/clients/index.html",children:"Ktor HTTP Client documentation"})," for additional details."]}),"\n",(0,i.jsx)(t.h3,{id:"global-client-customization",children:"Global Client Customization"}),"\n",(0,i.jsxs)(t.p,{children:["A single instance of ",(0,i.jsx)(t.code,{children:"GraphQLKtorClient"})," can be used to handle many GraphQL operations. You can specify a custom instance\nof Ktor ",(0,i.jsx)(t.code,{children:"HttpClient"})," and a target ",(0,i.jsx)(t.code,{children:"GraphQLClientSerializer"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The below example configures a new ",(0,i.jsx)(t.code,{children:"GraphQLKtorClient"})," to use the ",(0,i.jsx)(t.code,{children:"OkHttp"})," engine with custom timeouts, adds a default ",(0,i.jsx)(t.code,{children:"X-MY-API-KEY"}),"\nheader to all requests, and enables basic logging of the requests."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'val okHttpClient = HttpClient(engineFactory = OkHttp) {\n    engine {\n        config {\n            connectTimeout(10, TimeUnit.SECONDS)\n            readTimeout(60, TimeUnit.SECONDS)\n            writeTimeout(60, TimeUnit.SECONDS)\n        }\n    }\n    defaultRequest {\n        header("X-MY-API-KEY", "someSecretApiKey")\n    }\n    install(Logging) {\n        logger = Logger.DEFAULT\n        level = LogLevel.INFO\n    }\n}\nval client = GraphQLKtorClient(\n    url = URL("http://localhost:8080/graphql"),\n    httpClient = okHttpClient\n)\n'})}),"\n",(0,i.jsx)(t.h3,{id:"per-request-customization",children:"Per Request Customization"}),"\n",(0,i.jsxs)(t.p,{children:["Individual GraphQL requests can be customized through ",(0,i.jsx)(t.a,{href:"https://ktor.io/docs/request.html#customizing-requests",children:"HttpRequestBuilder"}),".\nYou can use this mechanism to specify custom headers, update target url to include custom query parameters, configure\nattributes that can be accessed from the pipeline features as well specify timeouts per request."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'val helloWorldQuery = HelloWorldQuery(variables = HelloWorldQuery.Variables(name = "John Doe"))\nval result = client.execute(helloWorldQuery) {\n    header("X-B3-TraceId", "0123456789abcdef")\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"spring-webclient-customization",children:"Spring WebClient Customization"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"GraphQLWebClient"})," is a thin wrapper on top of ",(0,i.jsx)(t.a,{href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/function/client/WebClient.html",children:"Spring WebClient"}),"\nthat relies on Reactor Netty for fully asynchronous non-blocking communications. If you want to use Jetty instead you will\nneed to exclude provided ",(0,i.jsx)(t.code,{children:"io.projectreactor.netty:reactor-netty"})," dependency and instead add ",(0,i.jsx)(t.code,{children:"org.eclipse.jetty:jetty-reactive-httpclient"}),"\ndependency."]}),"\n",(0,i.jsx)(t.h3,{id:"global-client-customization-1",children:"Global Client Customization"}),"\n",(0,i.jsxs)(t.p,{children:["A single instance of ",(0,i.jsx)(t.code,{children:"GraphQLWebClient"})," can be used to handle many GraphQL operations and you can customize it by providing\na custom instance of ",(0,i.jsx)(t.code,{children:"WebClient.Builder"}),". See ",(0,i.jsx)(t.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-webclient-customization",children:"Spring documentation"}),"\nfor additional details."]}),"\n",(0,i.jsxs)(t.p,{children:["Example below configures ",(0,i.jsx)(t.code,{children:"GraphQLWebClient"})," with custom timeouts and adds a default ",(0,i.jsx)(t.code,{children:"X-MY-API-KEY"})," header to all requests."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'val httpClient: HttpClient = HttpClient.create()\n    .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 10_000)\n    .responseTimeout(Duration.ofMillis(10_000))\nval connector: ClientHttpConnector = ReactorClientHttpConnector(httpClient.wiretap(true))\nval webClientBuilder = WebClient.builder()\n    .clientConnector(connector)\n    .defaultHeader("X-MY-API-KEY", "someSecretApiKey")\n\nval client = GraphQLWebClient(\n    url = "http://localhost:8080/graphql",\n    builder = webClientBuilder\n)\n'})}),"\n",(0,i.jsx)(t.h3,{id:"per-request-customization-1",children:"Per Request Customization"}),"\n",(0,i.jsxs)(t.p,{children:["Individual GraphQL requests can be customized by providing ",(0,i.jsx)(t.code,{children:"WebClient.RequestBodyUriSpec"})," lambda. You can use this mechanism\nto specify custom headers or include custom attributes or query parameters."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'val helloWorldQuery = HelloWorldQuery(variables = HelloWorldQuery.Variables(name = "John Doe"))\nval result = client.execute(helloWorldQuery) {\n    header("X-B3-TraceId", "0123456789abcdef")\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"custom-graphql-client",children:"Custom GraphQL Client"}),"\n",(0,i.jsxs)(t.p,{children:["GraphQL Kotlin libraries provide generic a ",(0,i.jsx)(t.code,{children:"GraphQLClient"})," interface as well as Ktor HTTP Client and Spring WebClient based\nreference implementations. Both ",(0,i.jsx)(t.code,{children:"GraphQLKtorClient"})," and ",(0,i.jsx)(t.code,{children:"GraphQLWebClient"})," are open classes which means you can also\nextend them to provide some custom ",(0,i.jsx)(t.code,{children:"execute"})," logic."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"class CustomGraphQLClient(url: URL) : GraphQLKtorClient(url = url) {\n\n    override suspend fun <T: Any> execute(request: GraphQLClientRequest<T>, requestCustomizer: HttpRequestBuilder.() -> Unit): GraphQLClientResponse<T> {\n        // custom init logic\n        val result = super.execute(request, requestCustomizer)\n        // custom finalize logic\n        return result\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"deprecated-field-usage",children:"Deprecated Field Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Build plugins will automatically fail generation of a client if any of the specified query files are referencing\ndeprecated fields. This ensures that your clients have to explicitly opt-in into deprecated usage by specifying\n",(0,i.jsx)(t.code,{children:"allowDeprecatedFields"})," configuration option."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(34164);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function a(e){var t=e.children,n=e.hidden,a=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var i=n(96540),r=n(34164),l=n(23104),a=n(56347),o=n(205),s=n(57485),c=n(31682),u=n(70679);function d(e){var t,n;return null!=(t=null==(n=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.XI)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,a.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:n,groupId:r});return[(0,s.aZ)(o),(0,i.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function f(e){var t,n,r,l,a=e.defaultValue,s=e.queryString,c=void 0!==s&&s,d=e.groupId,f=h(e),b=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=i.find((function(e){return e.default})))?t:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:f})})),g=b[0],v=b[1],x=m({queryString:c,groupId:d}),C=x[0],j=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Dv)(t),r=n[0],l=n[1],[r,(0,i.useCallback)((function(e){t&&l.set(e)}),[t,l])]),q=y[0],z=y[1],w=function(){var e=null!=C?C:q;return p({value:e,tabValues:f})?e:null}();return(0,o.A)((function(){w&&v(w)}),[w]),{selectedValue:g,selectValue:(0,i.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),j(e),z(e)}),[j,z,f]),tabValues:f}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){var t=e.className,n=e.block,i=e.selectedValue,a=e.selectValue,o=e.tabValues,s=[],c=(0,l.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=s.indexOf(t),r=o[n].value;r!==i&&(c(t),a(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var i,r=s.indexOf(e.currentTarget)+1;n=null!=(i=s[r])?i:s[0];break;case"ArrowLeft":var l,a=s.indexOf(e.currentTarget)-1;n=null!=(l=s[a])?l:s[s.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,l=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},l,{className:(0,r.A)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t}),children:null!=n?n:t}),t)}))})}function C(e){var t=e.lazy,n=e.children,l=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=a.find((function(e){return e.props.value===l}));return o?(0,i.cloneElement)(o,{className:(0,r.A)("margin-top--md",o.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l})}))})}function j(e){var t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(C,Object.assign({},t,e))]})}function y(e){var t=(0,b.A)();return(0,v.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},l=i.createContext(r);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);