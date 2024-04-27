"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2478],{71752:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=a(74848),r=a(28453),t=a(11470),o=a(19365);const l={id:"maven-plugin-usage-graalvm",title:"Maven Plugin GraalVM Usage",sidebar_label:"GraalVM Native Image"},s=void 0,c={id:"plugins/maven-plugin-usage-graalvm",title:"Maven Plugin GraalVM Usage",description:"GraalVm is a high performance runtime from Oracle that supports Ahead-of-Time (AOT) compilation",source:"@site/versioned_docs/version-7.x.x/plugins/maven-plugin-usage-graalvm.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-usage-graalvm",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage-graalvm",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/plugins/maven-plugin-usage-graalvm.md",tags:[],version:"7.x.x",lastUpdatedBy:"Tasuku Nakagawa",lastUpdatedAt:1714237421,formattedLastUpdatedAt:"Apr 27, 2024",frontMatter:{id:"maven-plugin-usage-graalvm",title:"Maven Plugin GraalVM Usage",sidebar_label:"GraalVM Native Image"},sidebar:"docs",previous:{title:"Generating SDL",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage-sdl"},next:{title:"Schema Generator Hooks Provider",permalink:"/graphql-kotlin/docs/plugins/hooks-provider"}},u={},p=[{value:"Ktor GraalVM Native Image",id:"ktor-graalvm-native-image",level:2},{value:"Spring GraalVM Native Image",id:"spring-graalvm-native-image",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://www.graalvm.org/",children:"GraalVm"})," is a high performance runtime from Oracle that supports Ahead-of-Time (AOT) compilation\nthat allows you to build native images. By shifting compilation to the build time, we can create binaries that are\n",(0,i.jsx)(e.strong,{children:"already optimized so they start almost instantaneously with immediate peak performance"}),". Compiled code is also much\nmore memory efficient as we no longer need the big memory overhead of running the JVM."]}),"\n",(0,i.jsxs)(e.p,{children:["In order to generate GraalVM Native image we need to provide the information about all the dynamic JVM features that our\napplication relies on. Since ",(0,i.jsx)(e.code,{children:"graphql-kotlin"})," generates schema directly from your source code using reflections, we need\nto capture this information to make it available at build time. By default, ",(0,i.jsx)(e.code,{children:"graphql-kotlin"})," also relies on classpath scanning\nto look up all polymorphic types implementations as well as to locate all the (Apollo) Federated entity types."]}),"\n",(0,i.jsx)(e.h2,{id:"ktor-graalvm-native-image",children:"Ktor GraalVM Native Image"}),"\n",(0,i.jsx)(e.p,{children:"Given following schema"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'class NativeExampleQuery : Query {\n    fun helloWorld() = "Hello World"\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["We first need to configure our server to avoid class scanning. Even though our example schema does not contain any\npolymorphic types, ",(0,i.jsx)(e.strong,{children:"we still need to explicitly opt-out of class scanning by providing type hierarchy"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'fun Application.graphQLModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(\n                HelloWorldQuery()\n            )\n            // mapping between interfaces/union KClass and their implementation KClasses\n            typeHierarchy = mapOf()\n        }\n    }\n    install(Routing) {\n        graphQLPostRoute()\n        graphiQLRoute()\n    }\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"We then need to update our build with native configuration"}),"\n",(0,i.jsxs)(t.A,{defaultValue:"native",values:[{label:"Original POM File",value:"original"},{label:"Native POM File",value:"native"}],children:[(0,i.jsx)(o.A,{value:"original",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>example-graalvm-server</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <kotlin.jvmTarget>17</kotlin.jvmTarget>\n        <kotlin.version>1.7.22</kotlin.version>\n        <graphql-kotlin.version>${latestGraphqlKotlinVersion}</graphql-kotlin.version>\n        \x3c!-- lib versions --\x3e\n        <ktor.version>2.2.4</ktor.version>\n        <logback.version>1.4.7</logback.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-server</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>io.ktor</groupId>\n            <artifactId>ktor-server-cio-jvm</artifactId>\n            <version>${ktor.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>ch.qos.logback</groupId>\n            <artifactId>logback-classic</artifactId>\n            <version>${logback.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>\n        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>\n        <plugins>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>${kotlin.jvmTarget}</jvmTarget>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-jar-plugin</artifactId>\n                <version>3.3.0</version>\n                <configuration>\n                    <archive>\n                        <manifest>\n                            <addClasspath>true</addClasspath>\n                            <mainClass>com.example.ApplicationKt</mainClass>\n                        </manifest>\n                    </archive>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n'})})}),(0,i.jsxs)(o.A,{value:"native",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>example-graalvm-server</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <kotlin.jvmTarget>17</kotlin.jvmTarget>\n        <kotlin.version>1.7.22</kotlin.version>\n        <graphql-kotlin.version>${latestGraphqlKotlinVersion}</graphql-kotlin.version>\n        \x3c!-- lib versions --\x3e\n        <ktor.version>2.2.4</ktor.version>\n        <logback.version>1.4.7</logback.version>\n        <native-maven-plugin.version>0.9.21</native-maven-plugin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-server</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>io.ktor</groupId>\n            <artifactId>ktor-server-cio-jvm</artifactId>\n            <version>${ktor.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>ch.qos.logback</groupId>\n            <artifactId>logback-classic</artifactId>\n            <version>${logback.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>\n        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>\n        <plugins>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>${kotlin.jvmTarget}</jvmTarget>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-jar-plugin</artifactId>\n                <version>3.3.0</version>\n                <configuration>\n                    <archive>\n                        <manifest>\n                            <addClasspath>true</addClasspath>\n                            <mainClass>com.example.ApplicationKt</mainClass>\n                        </manifest>\n                    </archive>\n                </configuration>\n            </plugin>\n            \x3c!-- 1. configure GraphQL Kotlin GraalVM plugin --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>generate-graalvm-metadata</goal>\n                        </goals>\n                        <configuration>\n                            <packages>com.example</packages>\n                            <mainClassName>com.example.ApplicationKt</mainClassName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n    \x3c!-- 2. configure GraalVM Native Maven plugin --\x3e\n    <profiles>\n        <profile>\n            <id>native</id>\n            <build>\n                <plugins>\n                    <plugin>\n                        <groupId>org.graalvm.buildtools</groupId>\n                        <artifactId>native-maven-plugin</artifactId>\n                        <version>${native-maven-plugin.version}</version>\n                        <extensions>true</extensions>\n                        <executions>\n                            <execution>\n                                <id>build-native</id>\n                                <goals>\n                                    <goal>compile-no-fork</goal>\n                                </goals>\n                                <phase>package</phase>\n                            </execution>\n                        </executions>\n                        <configuration>\n                            <verbose>true</verbose>\n                            <buildArgs>\n                                <arg>--initialize-at-build-time=io.ktor,kotlin,ch.qos.logback,org.slf4j</arg>\n                                <arg>-H:+ReportExceptionStackTraces</arg>\n                            </buildArgs>\n                            <metadataRepository>\n                                <enabled>true</enabled>\n                            </metadataRepository>\n                        </configuration>\n                    </plugin>\n                </plugins>\n            </build>\n        </profile>\n    </profiles>\n</project>\n'})}),(0,i.jsx)(e.p,{children:"We need to make following changes to be able to generate GraalVM native image:"}),(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Configure GraphQL Kotlin plugin to generate GraalVM metadata"}),"\n"]}),(0,i.jsx)(e.admonition,{type:"caution",children:(0,i.jsxs)(e.p,{children:["This goal has to run AFTER ",(0,i.jsx)(e.code,{children:"compile"})," but before ",(0,i.jsx)(e.code,{children:"package"})," phase. It defaults to ",(0,i.jsx)(e.code,{children:"process-classes"})," phase."]})}),(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["Configure ",(0,i.jsx)(e.a,{href:"https://graalvm.github.io/native-build-tools/latest/maven-plugin.html",children:"GraalVM Native Maven plugin"})]}),"\n"]}),(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["GraalVM recommends to create separate profile that simplifies native image creation. Alternatively you can also generate\nnative image by explicitly executing ",(0,i.jsx)(e.code,{children:"native-image"})," goal."]})})]})]}),"\n",(0,i.jsxs)(e.p,{children:["Once the build is configured we can then generate our native image by running ",(0,i.jsx)(e.code,{children:"package"})," command with ",(0,i.jsx)(e.code,{children:"native"})," profile."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"> ./mvnw -Pnative package\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Native executable image will then be generated under ",(0,i.jsx)(e.code,{children:"target"})," directory."]}),"\n",(0,i.jsx)(e.h2,{id:"spring-graalvm-native-image",children:"Spring GraalVM Native Image"}),"\n",(0,i.jsx)(e.p,{children:"Given following schema"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'@Component\nclass NativeExampleQuery : Query {\n    fun helloWorld() = "Hello World"\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["We first need to configure our server to avoid class scanning. Even though our example schema does not contain any\npolymorphic types, ",(0,i.jsx)(e.strong,{children:"we still need to explicitly opt-out of class scanning by providing type hierarchy"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:"@SpringBootApplication\nclass Application {\n    @Bean\n    fun typeResolver(): GraphQLTypeResolver = SimpleTypeResolver(mapOf())\n}\n\nfun main(args: Array<String>) {\n    runApplication<Application>(*args)\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"We then need to update our build with native configuration"}),"\n",(0,i.jsxs)(t.A,{defaultValue:"native",values:[{label:"Original POM File",value:"original"},{label:"Native POM File",value:"native"}],children:[(0,i.jsx)(o.A,{value:"original",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>example-graalvm-server</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <kotlin.jvmTarget>17</kotlin.jvmTarget>\n        <kotlin.version>1.7.22</kotlin.version>\n        <graphql-kotlin.version>${latestGraphqlKotlinVersion}</graphql-kotlin.version>\n        \x3c!-- plugin versions --\x3e\n        <spring-boot.version>3.0.6</spring-boot.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-server</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>\n        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <version>${spring-boot.version}</version>\n            </plugin>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <args>\n                        <arg>-Xjsr305=strict</arg>\n                    </args>\n                    <compilerPlugins>\n                        <plugin>spring</plugin>\n                    </compilerPlugins>\n                    <jvmTarget>${kotlin.jvmTarget}</jvmTarget>\n                </configuration>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-allopen</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n'})})}),(0,i.jsxs)(o.A,{value:"native",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>example-graalvm-server</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <kotlin.jvmTarget>17</kotlin.jvmTarget>\n        <kotlin.version>1.7.22</kotlin.version>\n        <graphql-kotlin.version>${latestGraphqlKotlinVersion}</graphql-kotlin.version>\n        \x3c!-- plugin versions --\x3e\n        <spring-boot.version>3.0.6</spring-boot.version>\n        <native-maven-plugin.version>0.9.21</native-maven-plugin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-server</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>\n        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <version>${spring-boot.version}</version>\n            </plugin>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <args>\n                        <arg>-Xjsr305=strict</arg>\n                    </args>\n                    <compilerPlugins>\n                        <plugin>spring</plugin>\n                    </compilerPlugins>\n                    <jvmTarget>${kotlin.jvmTarget}</jvmTarget>\n                </configuration>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-allopen</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            \x3c!-- 1. configure GraphQL Kotlin GraalVM plugin --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>generate-graalvm-metadata</goal>\n                        </goals>\n                        <configuration>\n                            <packages>com.example</packages>\n                            <mainClassName>com.example.ApplicationKt</mainClassName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n    \x3c!-- 2. configure GraalVM Native Maven plugin --\x3e\n    <profiles>\n        <profile>\n            <id>native</id>\n            <build>\n                <plugins>\n                    <plugin>\n                        <groupId>org.graalvm.buildtools</groupId>\n                        <artifactId>native-maven-plugin</artifactId>\n                        <version>${native-maven-plugin.version}</version>\n                        <extensions>true</extensions>\n                        <executions>\n                            <execution>\n                                <id>build-native</id>\n                                <goals>\n                                    <goal>compile-no-fork</goal>\n                                </goals>\n                                <phase>package</phase>\n                            </execution>\n                        </executions>\n                        <configuration>\n                            <verbose>true</verbose>\n                            <metadataRepository>\n                                <enabled>true</enabled>\n                            </metadataRepository>\n                        </configuration>\n                    </plugin>\n                </plugins>\n            </build>\n        </profile>\n    </profiles>\n</project>\n'})}),(0,i.jsx)(e.p,{children:"We need to make following changes to be able to generate GraalVM native image:"}),(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Configure GraphQL Kotlin plugin to generate GraalVM metadata"}),"\n"]}),(0,i.jsx)(e.admonition,{type:"caution",children:(0,i.jsxs)(e.p,{children:["This goal has to run AFTER ",(0,i.jsx)(e.code,{children:"compile"})," but before ",(0,i.jsx)(e.code,{children:"package"})," phase. It defaults to ",(0,i.jsx)(e.code,{children:"process-classes"})," phase."]})}),(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["Configure ",(0,i.jsx)(e.a,{href:"https://graalvm.github.io/native-build-tools/latest/maven-plugin.html",children:"GraalVM Native Maven plugin"})]}),"\n"]}),(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["GraalVM recommends to create separate profile that simplifies native image creation. Alternatively you can also generate\nnative image by explicitly executing ",(0,i.jsx)(e.code,{children:"native-image"})," goal."]})})]})]}),"\n",(0,i.jsxs)(e.p,{children:["Once the build is configured we can then generate our native image by running ",(0,i.jsx)(e.code,{children:"package"})," command with ",(0,i.jsx)(e.code,{children:"native"})," profile."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"> ./mvnw -Pnative package\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Native executable image will then be generated under ",(0,i.jsx)(e.code,{children:"target"})," directory."]})]})}function g(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},19365:(n,e,a)=>{a.d(e,{A:()=>o});a(96540);var i=a(34164);const r={tabItem:"tabItem_Ymn6"};var t=a(74848);function o(n){var e=n.children,a=n.hidden,o=n.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:a,children:e})}},11470:(n,e,a)=>{a.d(e,{A:()=>I});var i=a(96540),r=a(34164),t=a(23104),o=a(56347),l=a(205),s=a(57485),c=a(31682),u=a(89466);function p(n){var e,a;return null!=(e=null==(a=i.Children.toArray(n).filter((function(n){return"\n"!==n})).map((function(n){if(!n||(0,i.isValidElement)(n)&&((e=n.props)&&"object"==typeof e&&"value"in e))return n;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?e:[]}function d(n){var e=n.values,a=n.children;return(0,i.useMemo)((function(){var n=null!=e?e:function(n){return p(n).map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}(a);return function(n){var e=(0,c.X)(n,(function(n,e){return n.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,a])}function g(n){var e=n.value;return n.tabValues.some((function(n){return n.value===e}))}function v(n){var e=n.queryString,a=void 0!==e&&e,r=n.groupId,t=(0,o.W6)(),l=function(n){var e=n.queryString,a=void 0!==e&&e,i=n.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:a,groupId:r});return[(0,s.aZ)(l),(0,i.useCallback)((function(n){if(l){var e=new URLSearchParams(t.location.search);e.set(l,n),t.replace(Object.assign({},t.location,{search:e.toString()}))}}),[l,t])]}function m(n){var e,a,r,t,o=n.defaultValue,s=n.queryString,c=void 0!==s&&s,p=n.groupId,m=d(n),h=(0,i.useState)((function(){return function(n){var e,a=n.defaultValue,i=n.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+i.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(e=i.find((function(n){return n.default})))?e:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:m})})),f=h[0],x=h[1],b=v({queryString:c,groupId:p}),k=b[0],j=b[1],I=(e=function(n){return n?"docusaurus.tab."+n:null}({groupId:p}.groupId),a=(0,u.Dv)(e),r=a[0],t=a[1],[r,(0,i.useCallback)((function(n){e&&t.set(n)}),[e,t])]),y=I[0],w=I[1],V=function(){var n=null!=k?k:y;return g({value:n,tabValues:m})?n:null}();return(0,l.A)((function(){V&&x(V)}),[V]),{selectedValue:f,selectValue:(0,i.useCallback)((function(n){if(!g({value:n,tabValues:m}))throw new Error("Can't select invalid tab value="+n);x(n),j(n),w(n)}),[j,w,m]),tabValues:m}}var h=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function b(n){var e=n.className,a=n.block,i=n.selectedValue,o=n.selectValue,l=n.tabValues,s=[],c=(0,t.a_)().blockElementScrollPositionUntilNextRender,u=function(n){var e=n.currentTarget,a=s.indexOf(e),r=l[a].value;r!==i&&(c(e),o(r))},p=function(n){var e,a=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":var i,r=s.indexOf(n.currentTarget)+1;a=null!=(i=s[r])?i:s[0];break;case"ArrowLeft":var t,o=s.indexOf(n.currentTarget)-1;a=null!=(t=s[o])?t:s[s.length-1]}null==(e=a)||e.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},e),children:l.map((function(n){var e=n.value,a=n.label,t=n.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:function(n){return s.push(n)},onKeyDown:p,onClick:u},t,{className:(0,r.A)("tabs__item",f.tabItem,null==t?void 0:t.className,{"tabs__item--active":i===e}),children:null!=a?a:e}),e)}))})}function k(n){var e=n.lazy,a=n.children,r=n.selectedValue,t=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){var o=t.find((function(n){return n.props.value===r}));return o?(0,i.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map((function(n,e){return(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==r})}))})}function j(n){var e=m(n);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,Object.assign({},n,e)),(0,x.jsx)(k,Object.assign({},n,e))]})}function I(n){var e=(0,h.A)();return(0,x.jsx)(j,Object.assign({},n,{children:p(n.children)}),String(e))}},28453:(n,e,a)=>{a.d(e,{R:()=>o,x:()=>l});var i=a(96540);const r={},t=i.createContext(r);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);