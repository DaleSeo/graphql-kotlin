"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8963],{53609:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=i(74848),l=i(28453),r=i(11470),t=i(19365);const o={id:"client-serialization",title:"Client Serialization"},s=void 0,c={id:"client/client-serialization",title:"Client Serialization",description:"GraphQL Kotlin build plugins can generate GraphQL client data classes that are compatible with Jackson",source:"@site/docs/client/client-serialization.mdx",sourceDirName:"client",slug:"/client/client-serialization",permalink:"/graphql-kotlin/docs/8.x.x/client/client-serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-serialization.mdx",tags:[],version:"current",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"client-serialization",title:"Client Serialization"},sidebar:"docs",previous:{title:"Client Customization",permalink:"/graphql-kotlin/docs/8.x.x/client/client-customization"},next:{title:"Tasks Overiew",permalink:"/graphql-kotlin/docs/8.x.x/plugins/gradle-plugin-tasks"}},d={},p=[{value:"GraphQL Kotlin Spring Client",id:"graphql-kotlin-spring-client",level:2},{value:"Using Jackson",id:"using-jackson",level:3},{value:"Using Kotlinx Serialization",id:"using-kotlinx-serialization",level:3},{value:"GraphQL Kotlin Ktor Client",id:"graphql-kotlin-ktor-client",level:2},{value:"Using Kotlinx Serialization",id:"using-kotlinx-serialization-1",level:3},{value:"Using Jackson",id:"using-jackson-1",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["GraphQL Kotlin build plugins can generate GraphQL client data classes that are compatible with ",(0,a.jsx)(n.a,{href:"https://github.com/FasterXML/jackson",children:(0,a.jsx)(n.code,{children:"Jackson"})}),"\n(default) or ",(0,a.jsx)(n.a,{href:"https://github.com/Kotlin/kotlinx.serialization",children:(0,a.jsx)(n.code,{children:"kotlinx.serialization"})})," data models. By default, GraphQL\nclients will attempt to pick up the appropriate serializer from a classpath - ",(0,a.jsx)(n.code,{children:"graphql-kotlin-spring-client"})," defines implicit\ndependency on ",(0,a.jsx)(n.code,{children:"Jackson"})," based serializer and ",(0,a.jsx)(n.code,{children:"graphql-kotlin-ktor-client"})," define a dependency on a ",(0,a.jsx)(n.code,{children:"kotlinx.serialization"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GraphQLClientSerializer"})," is a service provider interface that expose generic serialize/deserialize methods that are used\nby the GraphQL clients to serialize requests to String and deserialize responses from String. By utilizing Java ",(0,a.jsx)(n.a,{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html",children:"ServiceLoader"}),"\nmechanism we can dynamically load appropriate serializer from the classpath. If there are multiple providers on the classpath,\nwe default to select the first one available one on the classpath."]}),"\n",(0,a.jsx)(n.h2,{id:"graphql-kotlin-spring-client",children:"GraphQL Kotlin Spring Client"}),"\n",(0,a.jsx)(n.h3,{id:"using-jackson",children:"Using Jackson"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Jackson"})," is the default serializer used by the build plugins and by GraphQL Kotlin Spring Client."]}),"\n",(0,a.jsxs)(r.A,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],children:[(0,a.jsx)(t.A,{value:"gradle",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-spring-client", $graphQLKotlinVersion) {\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"maven",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"ServiceLoader"})," mechanism will load the first available GraphQL client serializer from the classpath."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientJacksonSerializer()\n)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"using-kotlinx-serialization",children:"Using Kotlinx Serialization"}),"\n",(0,a.jsxs)(n.p,{children:["In order to use ",(0,a.jsx)(n.code,{children:"kotlinx.serialization"})," we need to"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["add dependency on ",(0,a.jsx)(n.code,{children:"graphql-kotlin-client-serialization"})]}),"\n",(0,a.jsxs)(n.li,{children:["configure GraphQL plugin to generate ",(0,a.jsx)(n.code,{children:"kotlinx.serialization"})," compatible data models"]}),"\n",(0,a.jsx)(n.li,{children:"configure corresponding compiler plugin"}),"\n",(0,a.jsxs)(n.li,{children:["explicitly specify the target serializer during client construction OR exclude ",(0,a.jsx)(n.code,{children:"graphql-kotlin-client-jackson"})," dependency"]}),"\n"]}),"\n",(0,a.jsxs)(r.A,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],children:[(0,a.jsx)(t.A,{value:"gradle",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-spring-client", $graphQLKotlinVersion) {\n        exclude("com.expediagroup", "graphql-kotlin-client-jackson")\n    }\n    implementation("com.expediagroup", "graphql-kotlin-client-serialization", $graphQLKotlinVersion)\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n    serializer = GraphQLSerializer.KOTLINX\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"maven",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.expediagroup</groupId>\n                    <artifactId>graphql-kotlin-client-jackson</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client-serialization</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"ServiceLoader"})," mechanism will load the first available GraphQL client serializer from the classpath. We can\nalso explicitly specify serializer during client construction"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientKotlinxSerializer()\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"graphql-kotlin-ktor-client",children:"GraphQL Kotlin Ktor Client"}),"\n",(0,a.jsx)(n.h3,{id:"using-kotlinx-serialization-1",children:"Using Kotlinx Serialization"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"kotlinx.serialization"})," is the default serializer used by the GraphQL Kotlin Ktor Client. Build plugins default to use\n",(0,a.jsx)(n.code,{children:"Jackson"})," so we have to explicitly configure the tasks/mojos to use appropriate serializer."]}),"\n",(0,a.jsxs)(r.A,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],children:[(0,a.jsx)(t.A,{value:"gradle",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-ktor-client", $graphQLKotlinVersion) {\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n    serializer = GraphQLSerializer.KOTLINX\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"maven",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"ServiceLoader"})," mechanism will load the first available GraphQL client serializer from the classpath."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val client = GraphQLKtorClient(\n  url = URL("http://localhost:8080/graphql")\n  serializer = GraphQLClientKotlinxSerializer()\n)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"using-jackson-1",children:"Using Jackson"}),"\n",(0,a.jsxs)(n.p,{children:["In order to use ",(0,a.jsx)(n.code,{children:"Jackson"})," we need to"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["add dependency on ",(0,a.jsx)(n.code,{children:"graphql-kotlin-client-jackson"})]}),"\n",(0,a.jsxs)(n.li,{children:["explicitly specify the target serializer during client construction OR exclude ",(0,a.jsx)(n.code,{children:"graphql-kotlin-client-serialization"})," dependency"]}),"\n"]}),"\n",(0,a.jsxs)(r.A,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],children:[(0,a.jsx)(t.A,{value:"gradle",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-ktor-client", $graphQLKotlinVersion) {\n        exclude("com.expediagroup", "graphql-kotlin-client-serialization")\n    }\n    implementation("com.expediagroup", "graphql-kotlin-client-jackson", $graphQLKotlinVersion)\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"maven",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.expediagroup</groupId>\n                    <artifactId>graphql-kotlin-client-serialization</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client-jackson</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"ServiceLoader"})," mechanism will load the first available GraphQL client serializer from the classpath. We can\nalso explicitly specify serializer during client construction"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val client = GraphQLKtorClient(\n  url = URL("http://localhost:8080/graphql")\n  serializer = GraphQLClientJacksonSerializer()\n)\n'})})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>t});i(96540);var a=i(34164);const l={tabItem:"tabItem_Ymn6"};var r=i(74848);function t(e){var n=e.children,i=e.hidden,t=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,t),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>I});var a=i(96540),l=i(34164),r=i(23104),t=i(56347),o=i(205),s=i(57485),c=i(31682),d=i(70679);function p(e){var n,i;return null!=(n=null==(i=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:i.filter(Boolean))?n:[]}function u(e){var n=e.values,i=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return p(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(i);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,i])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,i=void 0!==n&&n,l=e.groupId,r=(0,t.W6)(),o=function(e){var n=e.queryString,i=void 0!==n&&n,a=e.groupId;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:i,groupId:l});return[(0,s.aZ)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function x(e){var n,i,l,r,t=e.defaultValue,s=e.queryString,c=void 0!==s&&s,p=e.groupId,x=u(e),m=(0,a.useState)((function(){return function(e){var n,i=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!g({value:i,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+i+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return i}var l=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:x})})),v=m[0],f=m[1],k=h({queryString:c,groupId:p}),j=k[0],b=k[1],I=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),i=(0,d.Dv)(n),l=i[0],r=i[1],[l,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),q=I[0],y=I[1],z=function(){var e=null!=j?j:q;return g({value:e,tabValues:x})?e:null}();return(0,o.A)((function(){z&&f(z)}),[z]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!g({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),y(e)}),[b,y,x]),tabValues:x}}var m=i(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(74848);function k(e){var n=e.className,i=e.block,a=e.selectedValue,t=e.selectValue,o=e.tabValues,s=[],c=(0,r.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,i=s.indexOf(n),l=o[i].value;l!==a&&(c(n),t(l))},p=function(e){var n,i=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,l=s.indexOf(e.currentTarget)+1;i=null!=(a=s[l])?a:s[0];break;case"ArrowLeft":var r,t=s.indexOf(e.currentTarget)-1;i=null!=(r=s[t])?r:s[s.length-1]}null==(n=i)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":i},n),children:o.map((function(e){var n=e.value,i=e.label,r=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},r,{className:(0,l.A)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=i?i:n}),n)}))})}function j(e){var n=e.lazy,i=e.children,l=e.selectedValue,r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){var t=r.find((function(e){return e.props.value===l}));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})}))})}function b(e){var n=x(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,f.jsx)(k,Object.assign({},n,e)),(0,f.jsx)(j,Object.assign({},n,e))]})}function I(e){var n=(0,m.A)();return(0,f.jsx)(b,Object.assign({},e,{children:p(e.children)}),String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var a=i(96540);const l={},r=a.createContext(l);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);