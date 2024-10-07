"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2172],{24557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=i(74848),o=i(28453);const r={id:"maven-plugin-usage",title:"Maven Plugin Usage",sidebar_label:"Usage"},t=void 0,l={id:"plugins/maven-plugin-usage",title:"Maven Plugin Usage",description:"Downloading Schema SDL",source:"@site/versioned_docs/version-6.x.x/plugins/maven-plugin-usage.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-usage",permalink:"/graphql-kotlin/docs/6.x.x/plugins/maven-plugin-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/plugins/maven-plugin-usage.md",tags:[],version:"6.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1728268554e3,frontMatter:{id:"maven-plugin-usage",title:"Maven Plugin Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Goals",permalink:"/graphql-kotlin/docs/6.x.x/plugins/maven-plugin-goals"},next:{title:"Schema Generator Hooks Provider",permalink:"/graphql-kotlin/docs/6.x.x/plugins/hooks-provider"}},c={},s=[{value:"Downloading Schema SDL",id:"downloading-schema-sdl",level:2},{value:"Introspecting Schema",id:"introspecting-schema",level:2},{value:"Generating Client",id:"generating-client",level:2},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",level:2},{value:"Generating Client using Kotlinx Serialization",id:"generating-client-using-kotlinx-serialization",level:2},{value:"Generating Test Client",id:"generating-test-client",level:2},{value:"Minimal Configuration Example",id:"minimal-configuration-example",level:2},{value:"Complete Configuration Example",id:"complete-configuration-example",level:2},{value:"Generating Multiple Clients",id:"generating-multiple-clients",level:2},{value:"Generating SDL Example",id:"generating-sdl-example",level:2},{value:"Generating SDL with Custom Hooks Provider Example",id:"generating-sdl-with-custom-hooks-provider-example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"downloading-schema-sdl",children:"Downloading Schema SDL"}),"\n",(0,a.jsxs)(n.p,{children:["Download SDL Mojo requires target GraphQL server ",(0,a.jsx)(n.code,{children:"endpoint"})," to be specified. Task can be executed directly from the\ncommand line by explicitly specifying ",(0,a.jsx)(n.code,{children:"graphql.endpoint"})," property."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"script",children:'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:download-sdl -Dgraphql.endpoint="http://localhost:8080/sdl"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Mojo can also be configured in your Maven build file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>download-sdl</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/sdl</endpoint>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"download-sdl"})," goal will be executed as part of the ",(0,a.jsx)(n.code,{children:"generate-sources"})," ",(0,a.jsx)(n.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html",children:"build lifecycle phase"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"introspecting-schema",children:"Introspecting Schema"}),"\n",(0,a.jsxs)(n.p,{children:["Introspection Mojo requires target GraphQL server ",(0,a.jsx)(n.code,{children:"endpoint"})," to be specified. Task can be executed directly from the\ncommand line by explicitly specifying ",(0,a.jsx)(n.code,{children:"graphql.endpoint"})," property"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"script",children:'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:introspect-schema -Dgraphql.endpoint="http://localhost:8080/graphql"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Mojo can also be configured in your Maven build file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>introspect-schema</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"introspect-schema"})," goal will be executed as part of the ",(0,a.jsx)(n.code,{children:"generate-sources"})," ",(0,a.jsx)(n.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html",children:"build lifecycle phase"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"generating-client",children:"Generating Client"}),"\n",(0,a.jsxs)(n.p,{children:["This Mojo generates GraphQL client code based on the provided queries using target GraphQL ",(0,a.jsx)(n.code,{children:"schemaFile"}),". Classes are\ngenerated under specified ",(0,a.jsx)(n.code,{children:"packageName"}),". When using default configuration and storing GraphQL queries under ",(0,a.jsx)(n.code,{children:"src/main/resources"}),"\ndirectories, task can be executed directly from the command line by explicitly providing required properties."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"script",children:'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:generate-client -Dgraphql.schemaFile="mySchema.graphql" -Dgraphql.packageName="com.example.generated"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will process all GraphQL queries located under ",(0,a.jsx)(n.code,{children:"src/main/resources"})," and generate corresponding GraphQL Kotlin client\ndata models. Generated classes will be automatically added to the project compile sources."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You might need to explicitly add generated clients to your project sources for your IDE to recognize them. See\n",(0,a.jsx)(n.a,{href:"https://www.mojohaus.org/build-helper-maven-plugin/",children:"build-helper-maven-plugin"})," for details."]})}),"\n",(0,a.jsx)(n.h2,{id:"generating-client-with-custom-scalars",children:"Generating Client with Custom Scalars"}),"\n",(0,a.jsxs)(n.p,{children:["By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",(0,a.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt",children:"scalar converter"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For example given following custom scalar in our GraphQL schema"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"scalar UUID\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We can create a custom converter to automatically convert this custom scalar to ",(0,a.jsx)(n.code,{children:"java.util.UUID"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"package com.example\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString())\n    override fun toJson(value: UUID): String = value.toString()\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Afterwards we need to configure our plugin to use this custom converter"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <allowDeprecatedFields>false</allowDeprecatedFields>\n                <customScalars>\n                    <customScalar>\n                        \x3c!-- custom scalar UUID type --\x3e\n                        <scalar>UUID</scalar>\n                        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n                        <type>java.util.UUID</type>\n                        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n                           used to convert to/from raw JSON and scalar type --\x3e\n                        <converter>com.example.UUIDScalarConverter</converter>\n                    </customScalar>\n                </customScalars>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"generating-client-using-kotlinx-serialization",children:"Generating Client using Kotlinx Serialization"}),"\n",(0,a.jsxs)(n.p,{children:["GraphQL Kotlin plugins default to generate client data models that are compatible with ",(0,a.jsx)(n.a,{href:"https://github.com/FasterXML/jackson",children:"Jackson"}),".\nWe can change this default behavior by explicitly specifying serializer type and configuring ",(0,a.jsx)(n.code,{children:"kotlinx.serialization"})," compiler\nplugin. See ",(0,a.jsx)(n.a,{href:"https://github.com/Kotlin/kotlinx.serialization",children:"kotlinx.serialization documentation"})," for details."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<project>\n    <dependencies>\n        \x3c!-- other dependencies omitted for clarity --\x3e\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>mySchema.graphql</schemaFile>\n                            \x3c!-- optional configuration below --\x3e\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"generating-test-client",children:"Generating Test Client"}),"\n",(0,a.jsxs)(n.p,{children:["This Mojo generates GraphQL Kotlin test client code based on the provided queries using target GraphQL ",(0,a.jsx)(n.code,{children:"schemaFile"}),". Classes\nare generated under specified ",(0,a.jsx)(n.code,{children:"packageName"}),". When using default configuration and storing GraphQL queries under ",(0,a.jsx)(n.code,{children:"src/test/resources"}),"\ndirectories, task can be executed directly from the command line by explicitly providing required properties."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"script",children:'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:generate-test-client -Dgraphql.schemaFile="mySchema.graphql" -Dgraphql.packageName="com.example.generated"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-test-client</goal>\n            </goals>\n            <configuration>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will process all GraphQL queries located under ",(0,a.jsx)(n.code,{children:"src/test/resources"})," and generate corresponding GraphQL Kotlin test clients.\nGenerated classes will be automatically added to the project test compile sources."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You might need to explicitly add generated test clients to your project test sources for your IDE to recognize them.\nSee ",(0,a.jsx)(n.a,{href:"https://www.mojohaus.org/build-helper-maven-plugin/",children:"build-helper-maven-plugin"})," for details."]})}),"\n",(0,a.jsx)(n.h2,{id:"minimal-configuration-example",children:"Minimal Configuration Example"}),"\n",(0,a.jsxs)(n.p,{children:["Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a corresponding schema.\nThis generated schema is subsequently used to generate GraphQL client code based on the queries provided under ",(0,a.jsx)(n.code,{children:"src/main/resources"})," directory."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n                <packageName>com.example.generated</packageName>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Both ",(0,a.jsx)(n.code,{children:"introspect-schema"})," and ",(0,a.jsx)(n.code,{children:"generate-client"})," goals are bound to the same ",(0,a.jsx)(n.code,{children:"generate-sources"})," Maven lifecycle phase.\nAs opposed to Gradle, Maven does not support explicit ordering of different goals bound to the same build phase. Maven\nMojos will be executed in the order they are defined in your ",(0,a.jsx)(n.code,{children:"pom.xml"})," build file."]})}),"\n",(0,a.jsx)(n.h2,{id:"complete-configuration-example",children:"Complete Configuration Example"}),"\n",(0,a.jsxs)(n.p,{children:["Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client data models using ",(0,a.jsx)(n.code,{children:"kotlinx.serialization"})," that are based on the provided query."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<project>\n    <dependencies>\n        \x3c!-- other dependencies omitted for clarity --\x3e\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>download-sdl</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/sdl</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            \x3c!-- optional configuration below --\x3e\n                            <schemaFile>${project.build.directory}/mySchema.graphql</schemaFile>\n                            <allowDeprecatedFields>true</allowDeprecatedFields>\n                            <customScalars>\n                                <customScalar>\n                                    \x3c!-- custom scalar UUID type --\x3e\n                                    <scalar>UUID</scalar>\n                                    \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n                                    <type>java.util.UUID</type>\n                                    \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n                                       used to convert to/from raw JSON and scalar type --\x3e\n                                    <converter>com.example.UUIDScalarConverter</converter>\n                                </customScalar>\n                            </customScalars>\n                            <headers>\n                                <X-Custom-Header>My-Custom-Header</X-Custom-Header>\n                            </headers>\n                            <timeoutConfiguration>\n                                \x3c!-- timeout values in milliseconds --\x3e\n                                <connect>1000</connect>\n                                <read>30000</read>\n                            </timeoutConfiguration>\n                            <queryFiles>\n                                <queryFile>${project.basedir}/src/main/resources/queries/MyQuery.graphql</queryFile>\n                            </queryFiles>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"generating-multiple-clients",children:"Generating Multiple Clients"}),"\n",(0,a.jsx)(n.p,{children:"In order to generate GraphQL clients targeting multiple endpoints, we need to configure separate executions targeting\ndifferent endpoints."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <id>generate-first-client</id>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n                <packageName>com.example.generated.first</packageName>\n                <queryFiles>\n                    <queryFile>${project.basedir}/src/main/resources/queries/FirstQuery.graphql</queryFile>\n                </queryFiles>\n            </configuration>\n        </execution>\n        <execution>\n            <id>generate-second-client</id>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8081/graphql</endpoint>\n                <packageName>com.example.generated.second</packageName>\n                <queryFiles>\n                    <queryFile>${project.basedir}/src/main/resources/queries/SecondQuery.graphql</queryFile>\n                </queryFiles>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"generating-sdl-example",children:"Generating SDL Example"}),"\n",(0,a.jsxs)(n.p,{children:["GraphQL schema can be generated directly from your source code using reflections. ",(0,a.jsx)(n.code,{children:"generate-sdl"})," mojo will scan your\nclasspath looking for classes implementing ",(0,a.jsx)(n.code,{children:"Query"}),", ",(0,a.jsx)(n.code,{children:"Mutation"})," and ",(0,a.jsx)(n.code,{children:"Subscription"})," marker interfaces and then generates the\ncorresponding GraphQL schema using ",(0,a.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," and default ",(0,a.jsx)(n.code,{children:"NoopSchemaGeneratorHooks"}),". In order to\nlimit the amount of packages to scan, this mojo requires users to provide a list of ",(0,a.jsx)(n.code,{children:"packages"})," that can contain GraphQL\ntypes."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"generating-sdl-with-custom-hooks-provider-example",children:"Generating SDL with Custom Hooks Provider Example"}),"\n",(0,a.jsxs)(n.p,{children:["Plugin will default to use ",(0,a.jsx)(n.code,{children:"NoopSchemaGeneratorHooks"})," to generate target GraphQL schema. If your project uses custom hooks\nor needs to generate the federated GraphQL schema, you will need to provide an instance of ",(0,a.jsx)(n.code,{children:"SchemaGeneratorHooksProvider"}),"\nservice provider that will be used to create an instance of your custom hooks."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"generate-sdl"})," mojo utilizes ",(0,a.jsx)(n.a,{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html",children:"ServiceLoader"}),"\nmechanism to dynamically load available ",(0,a.jsx)(n.code,{children:"SchemaGeneratorHooksProvider"})," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/6.x.x/plugins/hooks-provider",children:"Schema Generator Hooks Provider"})," for additional details on how to create custom hooks service provider.\nConfiguration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact to generate federated\nGraphQL schema."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-federated-hooks-provider</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n</plugin>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var a=i(96540);const o={},r=a.createContext(o);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);