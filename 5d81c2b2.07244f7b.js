(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(181)),i={id:"optional-undefined-arguments",title:"Optional Undefined Arguments",original_id:"optional-undefined-arguments"},l={unversionedId:"schema-generator/execution/optional-undefined-arguments",id:"version-3.x.x/schema-generator/execution/optional-undefined-arguments",isDocsHomePage:!1,title:"Optional Undefined Arguments",description:"In GraphQL, input types can be optional which means that the client can either:",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/optional-undefined-arguments.md",slug:"/schema-generator/execution/optional-undefined-arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/optional-undefined-arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/optional-undefined-arguments.md",version:"3.x.x",lastUpdatedBy:"Tarkan Nielsen",lastUpdatedAt:1618166232,sidebar:"version-3.x.x/docs",previous:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/subscriptions"}},u=[],c={toc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In GraphQL, input types can be optional which means that the client can either:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Not specify a value at all"),Object(o.b)("li",{parentName:"ul"},"Send null explictly"),Object(o.b)("li",{parentName:"ul"},"Send the non-null type")),Object(o.b)("p",null,"Optional input types are represented as nullable parameters in Kotlin"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nfun optionalInput(value: String?): String? = value\n\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},'\nquery OptionalInputQuery {\n  undefined: optionalInput\n  null: optionalInput(value: null)\n  foo: optionalInput(value: "foo")\n}\n\n')),Object(o.b)("p",null,"By default, if an optional input value is not specified, then the execution engine will set the argument in Kotlin to ",Object(o.b)("inlineCode",{parentName:"p"},"null"),".\nThis means that you can not tell, by just the value alone, whether the request did not contain any argument or the client explicitly passed in ",Object(o.b)("inlineCode",{parentName:"p"},"null"),"."),Object(o.b)("p",null,"Instead, you should inspect the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment")," where you can see if the request had the variable defined and even check parent arguments as well."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nfun optionalInput(value: String?, dataFetchingEnvironment: DataFetchingEnvironment): String =\n    if (dataFetchingEnvironment.containsArgument("value")) {\n        "The value was $value"\n    } else {\n        "The value was undefined"\n    }\n\n')))}p.isMDXComponent=!0},181:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return t?a.a.createElement(b,l(l({ref:n},c),{},{components:t})):a.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);