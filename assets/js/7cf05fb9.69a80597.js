"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),p=n(7094),d=n(12466);const s="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,g=e.values,k=e.groupId,h=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:N[0].props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,p.U)(),C=v.tabGroupChoices,q=v.setTabGroupChoices,L=(0,r.useState)(b),w=L[0],D=L[1],x=[],G=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=C[k];null!=T&&T!==w&&f.some((function(e){return e.value===T}))&&D(T)}var S=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==w&&(G(t),D(a),null!=k&&q(k,String(a)))},Q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;n=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var l,i=x.indexOf(e.currentTarget)-1;n=null!=(l=x[i])?l:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:Q,onFocus:S,onClick:S},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(N.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},37145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),p=["components"],d={id:"gradle-plugin-tasks",title:"Gradle Plugin Tasks",sidebar_label:"Tasks"},s=void 0,u={unversionedId:"plugins/gradle-plugin-tasks",id:"version-6.x.x/plugins/gradle-plugin-tasks",title:"Gradle Plugin Tasks",description:"GraphQL Kotlin Gradle Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL",source:"@site/versioned_docs/version-6.x.x/plugins/gradle-plugin-tasks.mdx",sourceDirName:"plugins",slug:"/plugins/gradle-plugin-tasks",permalink:"/graphql-kotlin/docs/6.x.x/plugins/gradle-plugin-tasks",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/plugins/gradle-plugin-tasks.mdx",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1668103175,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"gradle-plugin-tasks",title:"Gradle Plugin Tasks",sidebar_label:"Tasks"},sidebar:"docs",previous:{title:"Client Serialization",permalink:"/graphql-kotlin/docs/6.x.x/client/client-serialization"},next:{title:"Usage",permalink:"/graphql-kotlin/docs/6.x.x/plugins/gradle-plugin-usage"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Extension",id:"extension",level:2},{value:"Tasks",id:"tasks",level:2},{value:"graphqlDownloadSDL",id:"graphqldownloadsdl",level:3},{value:"graphqlGenerateClient",id:"graphqlgenerateclient",level:3},{value:"graphqlGenerateSDL",id:"graphqlgeneratesdl",level:3},{value:"graphqlGenerateTestClient",id:"graphqlgeneratetestclient",level:3},{value:"graphqlIntrospectSchema",id:"graphqlintrospectschema",level:3}],g={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin Gradle Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL\nschema directly from your source code."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This plugin is dependent on Kotlin compiler plugin as it generates Kotlin source code that needs to be compiled.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," is published on Gradle ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/com.expediagroup.graphql"},"Plugin Portal"),".\nIn order to execute any of the provided tasks you need to first apply the plugin on your project."),(0,l.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("p",null,"Using plugins DSL syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    id("com.expediagroup.graphql") version $graphQLKotlinVersion\n}\n')),(0,l.kt)("p",null,"Or by using legacy plugin application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n  repositories {\n    maven {\n      url = uri("https://plugins.gradle.org/m2/")\n    }\n  }\n  dependencies {\n    classpath("com.expediagroup:graphql-kotlin-gradle-plugin:$graphQLKotlinVersion")\n  }\n}\n\napply(plugin = "com.expediagroup.graphql")\n'))),(0,l.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,l.kt)("p",null,"Using plugins DSL syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"// build.gradle\nplugins {\n    id 'com.expediagroup.graphql' version $graphQLKotlinVersion\n}\n")),(0,l.kt)("p",null,"Or by using legacy plugin application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nbuildscript {\n  repositories {\n    maven {\n      url "https://plugins.gradle.org/m2/"\n    }\n  }\n  dependencies {\n    classpath "com.expediagroup:graphql-kotlin-gradle-plugin:$graphQLKotlinVersion"\n  }\n}\n\napply plugin: "com.expediagroup.graphql"\n')))),(0,l.kt)("h2",{id:"extension"},"Extension"),(0,l.kt)("p",null,"GraphQL Kotlin Gradle Plugin uses an extension on the project named ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," of type\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/plugins/graphql-kotlin-gradle-plugin/src/main/kotlin/com/expediagroup/graphql/plugin/gradle/GraphQLPluginExtension.kt"},"GraphQLPluginExtension"),".\nThis extension can be used to configure global options instead of explicitly configuring individual tasks. Once extension\nis configured, it will automatically download SDL/run introspection to generate GraphQL schema and subsequently generate\nall GraphQL clients. GraphQL Extension should be used by default, except for cases where you need to only run individual\ntasks."),(0,l.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    // Boolean flag indicating whether or not selection of deprecated fields is allowed.\n    allowDeprecatedFields = false\n    // List of custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    // GraphQL server endpoint that will be used to for running introspection queries. Alternatively you can download schema directly from `sdlEndpoint` or specify local `schemaFile`.\n    endpoint = "http://localhost:8080/graphql"\n    // Optional HTTP headers to be specified on an introspection query or SDL request.\n    headers = mapOf("X-Custom-Header" to "Custom-Header-Value")\n    // Target package name to be used for generated classes.\n    packageName = "com.example.generated"\n    // Custom directory containing query files, defaults to src/main/resources\n    queryFileDirectory = "${project.projectDir}/src/main/resources/queries"\n    // Optional list of query files to be processed, takes precedence over queryFileDirectory\n    queryFiles = listOf(file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql"))\n    // GraphQL schema file. Can be used instead of `endpoint` or `sdlEndpoint`.\n    schemaFile = file("${project.projectDir}/src/main/resources/myLocalSchema.graphql")\n    // GraphQL server SDL endpoint that will be used to download schema. Alternatively you can run introspection query against `endpoint` or specify local `schemaFile`.\n    sdlEndpoint = "http://localhost:8080/sdl"\n    // JSON serializer that will be used to generate the data classes.\n    serializer = GraphQLSerializer.JACKSON\n    // Timeout configuration for introspection query/downloading SDL\n    timeout {\n        // Connect timeout in milliseconds\n        connect = 5_000\n        // Read timeout in milliseconds\n        read = 15_000\n    }\n    // Opt-in flag to wrap nullable arguments in OptionalInput that distinguish between null and undefined value.\n    useOptionalInputWrapper = false\n  }\n  schema {\n    // List of supported packages that can contain GraphQL schema type definitions\n    packages = listOf("com.example")\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\ngraphql {\n    client {\n        // Boolean flag indicating whether or not selection of deprecated fields is allowed.\n        allowDeprecatedFields = false\n        // List of custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.\n        customScalars = [new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter")]\n        // GraphQL server endpoint that will be used to for running introspection queries. Alternatively you can download schema directly from `sdlEndpoint` or specify local `schemaFile`.\n        endpoint = "http://localhost:8080/graphql"\n        // Optional HTTP headers to be specified on an introspection query or SDL request.\n        headers = ["X-Custom-Header" : "My-Custom-Header-Value"]\n        // Target package name to be used for generated classes.\n        packageName = "com.example.generated"\n        // Custom directory containing query files, defaults to src/main/resources\n        queryFileDirectory = "${project.projectDir}/src/main/resources/queries"\n        // Optional list of query files to be processed, takes precedence over queryFileDirectory\n        queryFiles = [file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")]\n        // GraphQL schema file. Can be used instead of `endpoint` or `sdlEndpoint`.\n        schemaFile = file("${project.projectDir}/src/main/resources/myLocalSchema.graphql")\n        // GraphQL server SDL endpoint that will be used to download schema. Alternatively you can run introspection query against `endpoint` or specify local `schemaFile`.\n        sdlEndpoint = "http://localhost:8080/sdl"\n        // JSON serializer that will be used to generate the data classes.\n        serializer = GraphQLSerializer.JACKSON\n        // Timeout configuration for introspection query/downloading SDL\n        timeout { t ->\n            // Connect timeout in milliseconds\n            t.connect = 5000\n            t.read = 15000\n        }\n        // Opt-in flag to wrap nullable arguments in OptionalInput that distinguish between null and undefined value.\n        useOptionalInputWrapper = false\n    }\n    schema {\n        packages = ["com.example"]\n    }\n}\n')))),(0,l.kt)("h2",{id:"tasks"},"Tasks"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," lazily registers all its tasks which means that while they are known to the build,\nthey are not created nor executed until something in the build needs the instantiated object (e.g. adding explicit dependency\non those tasks or explicitly creating them). ",(0,l.kt)("strong",{parentName:"p"},"Configuring plugin through the ",(0,l.kt)("inlineCode",{parentName:"strong"},"graphql")," extension will automatically create\nall the corresponding tasks"),"."),(0,l.kt)("p",null,"All ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," tasks are grouped together under ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQL")," task group and their names are prefixed with\n",(0,l.kt)("inlineCode",{parentName:"p"},"graphql"),". You can find detailed information about GraphQL kotlin tasks by running ",(0,l.kt)("inlineCode",{parentName:"p"},"gradle help --task <taskName>"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ gradle tasks --group graphql\n\nGraphQL tasks\n-------------\ngraphqlDownloadSDL - Download schema in SDL format from target endpoint.\ngraphqlGenerateClient - Generate HTTP client from the specified GraphQL queries.\ngraphqlGenerateSDL - Generate GraphQL schema in SDL format.\ngraphqlGenerateTestClient - Generate HTTP test client from the specified GraphQL queries.\ngraphqlIntrospectSchema - Run introspection query against target GraphQL endpoint and save schema locally.--&gt;\n")),(0,l.kt)("h3",{id:"graphqldownloadsdl"},"graphqlDownloadSDL"),(0,l.kt)("p",null,"Task that attempts to download GraphQL schema in SDL format from the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," and saves the underlying\nschema file as ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this task provides limited functionality by itself\nand could be used as an alternative to ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlIntrospectSchema")," to generate input for the subsequent\n",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlGenerateClient")," task."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This task will always be ",(0,l.kt)("inlineCode",{parentName:"p"},"UP-TO-DATE")," and in order to trigger the re-download of an SDL you need to force rerun it by\nspecifying ",(0,l.kt)("inlineCode",{parentName:"p"},"--rerun-tasks")," option or by executing ",(0,l.kt)("inlineCode",{parentName:"p"},"clean")," task.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map<String, Any>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfig"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value are:"),(0,l.kt)("br",null),"connect timeout = 5_000",(0,l.kt)("br",null),"read timeout = 15_000.",(0,l.kt)("br",null))))),(0,l.kt)("h3",{id:"graphqlgenerateclient"},"graphqlGenerateClient"),(0,l.kt)("p",null,"Task that generates GraphQL Kotlin client and corresponding data classes based on the provided GraphQL queries that are\nevaluated against target Graphql schema. Individual clients with their specific data models are generated for each query\nfile and are placed under specified ",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),". When this task is added to the project, either through explicit configuration\nor through the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," extension, it will automatically configure itself as a dependency of a ",(0,l.kt)("inlineCode",{parentName:"p"},"compileKotlin")," task and\nresulting generated code will be automatically added to the project main source set."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<GraphQLScalar>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},"FileCollection"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory instead. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"Directory"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/main/resources"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serializer")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"useOptionalInputWrapper")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean opt-in flag to wrap nullable arguments in ",(0,l.kt)("inlineCode",{parentName:"td"},"OptionalInput")," that distinguish between ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," and undefined/omitted value.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"useOptionalInputWrapper"))))),(0,l.kt)("p",null,"By default, this task will generate Jackson compatible data models. See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/client/client-serialization"},"client serialization documentation"),"\nfor details on how to update this process to use ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," instead."),(0,l.kt)("h3",{id:"graphqlgeneratesdl"},"graphqlGenerateSDL"),(0,l.kt)("p",null,"Task that generates GraphQL schema in SDL format from your source code using reflections. Utilizes ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"\nto generate the schema from classes implementing ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,l.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces.\nIn order to limit the amount of packages to scan, this task requires users to provide a list of ",(0,l.kt)("inlineCode",{parentName:"p"},"packages")," that can contain\nGraphQL types."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packages")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"List of supported packages that can be scanned to generate SDL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))))),(0,l.kt)("p",null,"By default, this task will attempt to generate the schema using ",(0,l.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If you need to customize your\nschema generation process, you will need to provide your custom instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service provider.\nService provider can be provided as part of your project, included in one of your project dependencies or through explicitly\nprovided artifact to the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlSDL")," configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n')),(0,l.kt)("h3",{id:"graphqlgeneratetestclient"},"graphqlGenerateTestClient"),(0,l.kt)("p",null,"Task that generates GraphQL Kotlin test client and corresponding data classes based on the provided GraphQL queries that are\nevaluated against target Graphql schema. Individual test clients with their specific data models are generated for each query\nfile and are placed under specified ",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),". When this task is added to the project it will automatically configure\nitself as a dependency of a ",(0,l.kt)("inlineCode",{parentName:"p"},"compileTestKotlin")," task and resulting generated code will be automatically added to the project\ntest source set."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<GraphQLScalar>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},"FileCollection"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory instead. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"Directory"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/test/resources"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serializer")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"useOptionalInputWrapper")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean opt-in flag to wrap nullable arguments in ",(0,l.kt)("inlineCode",{parentName:"td"},"OptionalInput")," that distinguish between ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," and undefined/omitted value.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"useOptionalInputWrapper"))))),(0,l.kt)("p",null,"By default, this task will generate Jackson compatible data models. See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/client/client-serialization"},"client serialization documentation"),"\nfor details on how to update this process to use ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," instead."),(0,l.kt)("h3",{id:"graphqlintrospectschema"},"graphqlIntrospectSchema"),(0,l.kt)("p",null,"Task that executes GraphQL introspection query against specified ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," and saves the underlying schema file as\n",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this task provides limited functionality by itself and instead\nshould be used to generate input for the subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlGenerateClient")," task."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This task will always be ",(0,l.kt)("inlineCode",{parentName:"p"},"UP-TO-DATE")," and in order to trigger the re-running of the introspection query you need to force\nrerun it by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"--rerun-tasks")," option or by executing ",(0,l.kt)("inlineCode",{parentName:"p"},"clean")," task.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map<String, Any>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfig"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value are:"),(0,l.kt)("br",null),"connect timeout = 5_000",(0,l.kt)("br",null),"read timeout = 15_000.",(0,l.kt)("br",null))))))}k.isMDXComponent=!0}}]);