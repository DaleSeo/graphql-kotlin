"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1668],{92438:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var n=s(74848),i=s(28453);const t={id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals Overview"},l=void 0,d={id:"plugins/maven-plugin-goals",title:"Maven Plugin Goals",description:"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL",source:"@site/versioned_docs/version-7.x.x/plugins/maven-plugin-goals.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-goals",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-goals",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/plugins/maven-plugin-goals.md",tags:[],version:"7.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1715034375,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals Overview"},sidebar:"docs",previous:{title:"GraalVM Native Image",permalink:"/graphql-kotlin/docs/plugins/gradle-plugin-usage-graalvm"},next:{title:"Generating Client",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage-client"}},c={},a=[{value:"Goals",id:"goals",level:2},{value:"download-sdl",id:"download-sdl",level:3},{value:"generate-client",id:"generate-client",level:3},{value:"generate-graalvm-metadata",id:"generate-graalvm-metadata",level:3},{value:"generate-sdl",id:"generate-sdl",level:3},{value:"generate-test-client",id:"generate-test-client",level:3},{value:"introspect-schema",id:"introspect-schema",level:3}];function o(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL\nschema directly from your source code."}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"This plugin is dependent on Kotlin compiler plugin as it generates Kotlin source code that needs to be compiled."})}),"\n",(0,n.jsx)(r.h2,{id:"goals",children:"Goals"}),"\n",(0,n.jsxs)(r.p,{children:["You can find detailed information about ",(0,n.jsx)(r.code,{children:"graphql-kotlin-maven-plugin"})," and all its goals by running ",(0,n.jsx)(r.code,{children:"mvn help:describe -Dplugin=com.expediagroup:graphql-kotlin-maven-plugin -Ddetail"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"download-sdl",children:"download-sdl"}),"\n",(0,n.jsxs)(r.p,{children:["GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. This Mojo attempts to download schema from the specified ",(0,n.jsx)(r.code,{children:"graphql.endpoint"}),", validates the\nresult whether it is a valid schema and saves it locally in a specified target file (defaults to ",(0,n.jsx)(r.code,{children:"schema.graphql"})," under\nbuild directory). In general, this goal provides limited functionality by itself and instead should be used to generate\ninput for the subsequent ",(0,n.jsx)(r.code,{children:"generate-client"})," goal."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Attributes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"Default Lifecycle Phase"}),": ",(0,n.jsx)(r.code,{children:"generate-sources"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"endpoint"})}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"yes"}),(0,n.jsxs)(r.td,{children:["Target GraphQL server SDL endpoint that will be used to download schema.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.endpoint"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"headers"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Map<String, Any>"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Optional HTTP headers to be specified on a SDL request."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"timeoutConfiguration"})}),(0,n.jsx)(r.td,{children:"TimeoutConfiguration"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default values are:"}),(0,n.jsx)("br",{}),"connect timeout = 5000",(0,n.jsx)("br",{}),"read timeout = 15000.",(0,n.jsx)("br",{})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"schemaFile"})}),(0,n.jsx)(r.td,{children:"File"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Target schema file.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is"}),": ",(0,n.jsx)(r.code,{children:"${project.build.directory}/schema.graphql"}),(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.schemaFile"}),"."]})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameter Details"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"timeoutConfiguration"})," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"generate-client",children:"generate-client"}),"\n",(0,n.jsx)(r.p,{children:"Generate GraphQL client code based on the provided GraphQL schema and target queries."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Attributes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"Default Lifecycle Phase"}),": ",(0,n.jsx)(r.code,{children:"generate-sources"})]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.em,{children:"Requires Maven Project"})}),"\n",(0,n.jsx)(r.li,{children:"Generated classes are automatically added to the list of compiled sources."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"allowDeprecatedFields"})}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"false"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.allowDeprecatedFields"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"customScalars"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"List<CustomScalar>"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"outputDirectory"})}),(0,n.jsx)(r.td,{children:"File"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Target directory where to store generated files.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is"}),": ",(0,n.jsx)(r.code,{children:"${project.build.directory}/generated-sources/graphql"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"packageName"})}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"yes"}),(0,n.jsxs)(r.td,{children:["Target package name for generated code.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.packageName"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"parserOptions"})}),(0,n.jsx)(r.td,{children:"GraphQLParserOptions"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Configures the settings used when parsing GraphQL queries and schema definition language documents."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"queryFileDirectory"})}),(0,n.jsx)(r.td,{children:"File"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,n.jsx)(r.code,{children:"queryFiles"})," property instead.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"src/main/resources"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"queryFiles"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"List<File>"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["List of query files to be processed. Instead of a list of files to be processed you can also specify ",(0,n.jsx)(r.code,{children:"queryFileDirectory"})," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"schemaFile"})}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["GraphQL schema file that will be used to generate client code.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is"}),": ",(0,n.jsx)(r.code,{children:"${project.build.directory}/schema.graphql"}),(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.schemaFile"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"serializer"})}),(0,n.jsx)(r.td,{children:"GraphQLSerializer"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["JSON serializer that will be used to generate the data classes.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"GraphQLSerializer.JACKSON"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"useOptionalInputWrapper"})}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Boolean opt-in flag to wrap nullable arguments in ",(0,n.jsx)(r.code,{children:"OptionalInput"})," that distinguish between ",(0,n.jsx)(r.code,{children:"null"})," and undefined/omitted value.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"false"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.useOptionalInputWrapper"})]})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameter Details"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"customScalars"})," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<customScalars>\n    <customScalar>\n        \x3c!-- custom scalar UUID type --\x3e\n        <scalar>UUID</scalar>\n        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n        <type>java.util.UUID</type>\n        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n          used to convert to/from raw JSON and scalar type --\x3e\n        <converter>com.example.UUIDScalarConverter</converter>\n    </customScalar>\n</customScalars>\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"parserOptions"})," - Configure options for parsing GraphQL queries and schema definition language documents. Settings here override the defaults set by GraphQL Java."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"  <parserOptions>\n      \x3c!-- Modify the maximum number of tokens read to prevent processing extremely large queries --\x3e\n      <maxTokens>15000</maxTokens>\n      \x3c!-- Modify the maximum number of whitespace tokens read to prevent processing extremely large queries --\x3e\n      <maxWhitespaceTokens>200000</maxWhitespaceTokens>\n      \x3c!-- Modify the maximum number of characters in a document to prevent malicious documents consuming CPU --\x3e\n      <maxCharacters>1048576</maxCharacters>\n      \x3c!-- Modify the maximum grammar rule depth to negate malicious documents that can cause stack overflows --\x3e\n      <maxRuleDepth>500</maxRuleDepth>\n      \x3c!-- Memory usage is significantly reduced by not capturing ignored characters, especially in SDL parsing --\x3e\n      <captureIgnoredChars>false</captureIgnoredChars>\n      \x3c!-- Single-line comments do not have any semantic meaning in GraphQL source documents and can be ignored --\x3e\n      <captureLineComments>true</captureLineComments>\n      \x3c!-- Memory usage is reduced by not setting SourceLocations on AST nodes, especially in SDL parsing. --\x3e\n      <captureSourceLocation>true</captureSourceLocation>\n  </parserOptions>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"generate-graalvm-metadata",children:"generate-graalvm-metadata"}),"\n",(0,n.jsxs)(r.p,{children:["Generates ",(0,n.jsx)(r.a,{href:"https://www.graalvm.org/latest/reference-manual/native-image/metadata/",children:"GraalVM Reachability Metadata"})," for\n",(0,n.jsx)(r.code,{children:"graphql-kotlin"})," servers. Based on the GraphQL schema it will generate ",(0,n.jsx)(r.code,{children:"native-image.properties"}),", ",(0,n.jsx)(r.code,{children:"reflect-config.json"}),"\nand ",(0,n.jsx)(r.code,{children:"resource-config.json"})," metadata files under ",(0,n.jsx)(r.code,{children:"target/classes/META-INF/native-image/<groupId>/<projectName>/graphql"})]}),"\n",(0,n.jsxs)(r.p,{children:["This task should be used in tandem with ",(0,n.jsx)(r.a,{href:"https://graalvm.github.io/native-build-tools/latest/maven-plugin.html",children:"GraalVM Native Plugin"}),"\nto simplify generation of GraalVM native ",(0,n.jsx)(r.code,{children:"graphql-kotlin"})," servers."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Attributes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"Default Lifecycle Phase"}),": ",(0,n.jsx)(r.code,{children:"process-classes"})]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.em,{children:"Requires Maven Project"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"packages"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"List<String>"})}),(0,n.jsx)(r.td,{children:"yes"}),(0,n.jsx)(r.td,{children:"List of supported packages that can be can contain GraphQL schema."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"mainClassName"})}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Application main class name."})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"generate-sdl",children:"generate-sdl"}),"\n",(0,n.jsxs)(r.p,{children:["Generates GraphQL schema in SDL format from your source code using reflections. Utilizes ",(0,n.jsx)(r.code,{children:"graphql-kotlin-schema-generator"}),"\nto generate the schema from classes implementing ",(0,n.jsx)(r.code,{children:"graphql-kotlin-server"})," marker ",(0,n.jsx)(r.code,{children:"Query"}),", ",(0,n.jsx)(r.code,{children:"Mutation"})," and ",(0,n.jsx)(r.code,{children:"Subscription"})," interfaces.\nIn order to limit the amount of packages to scan, this mojo requires users to provide a list of ",(0,n.jsx)(r.code,{children:"packages"})," that can contain\nGraphQL types."]}),"\n",(0,n.jsxs)(r.p,{children:["This MOJO utilizes ",(0,n.jsx)(r.a,{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html",children:"ServiceLoader"}),"\nmechanism to dynamically load available ",(0,n.jsx)(r.code,{children:"SchemaGeneratorHooksProvider"})," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,n.jsx)(r.a,{href:"/graphql-kotlin/docs/plugins/hooks-provider",children:"Schema Generator Hooks Provider"})," for additional details on how to create custom hooks service\nprovider. Configuration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Attributes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"Default Lifecycle Phase"}),": ",(0,n.jsx)(r.code,{children:"process-classes"})]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.em,{children:"Requires Maven Project"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"packages"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"List<String>"})}),(0,n.jsx)(r.td,{children:"yes"}),(0,n.jsx)(r.td,{children:"List of supported packages that can be scanned to generate SDL."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"schemaFile"})}),(0,n.jsx)(r.td,{children:"File"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Target GraphQL schema file to be generated.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"${project.buildDir}/schema.graphql"})]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"generate-test-client",children:"generate-test-client"}),"\n",(0,n.jsx)(r.p,{children:"Generate GraphQL test client code based on the provided GraphQL schema and target queries."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Attributes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"Default Lifecycle Phase"}),": ",(0,n.jsx)(r.code,{children:"generate-test-sources"})]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.em,{children:"Requires Maven Project"})}),"\n",(0,n.jsx)(r.li,{children:"Generated classes are automatically added to the list of test compiled sources."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"allowDeprecatedFields"})}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"false"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.allowDeprecatedFields"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"customScalars"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"List<CustomScalar>"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"outputDirectory"})}),(0,n.jsx)(r.td,{children:"File"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Target directory where to store generated files.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is"}),": ",(0,n.jsx)(r.code,{children:"${project.build.directory}/generated-test-sources/graphql"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"packageName"})}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"yes"}),(0,n.jsxs)(r.td,{children:["Target package name for generated code.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.packageName"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"queryFileDirectory"})}),(0,n.jsx)(r.td,{children:"File"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,n.jsx)(r.code,{children:"queryFiles"})," property instead.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"src/test/resources"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"queryFiles"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"List<File>"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["List of query files to be processed. Instead of a list of files to be processed you can also specify ",(0,n.jsx)(r.code,{children:"queryFileDirectory"})," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"serializer"})}),(0,n.jsx)(r.td,{children:"GraphQLSerializer"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["JSON serializer that will be used to generate the data classes.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"GraphQLSerializer.JACKSON"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"schemaFile"})}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["GraphQL schema file that will be used to generate client code.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is"}),": ",(0,n.jsx)(r.code,{children:"${project.build.directory}/schema.graphql"}),(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.schemaFile"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"useOptionalInputWrapper"})}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Boolean opt-in flag to wrap nullable arguments in ",(0,n.jsx)(r.code,{children:"OptionalInput"})," that distinguish between ",(0,n.jsx)(r.code,{children:"null"})," and undefined/omitted value.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is:"})," ",(0,n.jsx)(r.code,{children:"false"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.useOptionalInputWrapper"})]})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameter Details"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"customScalars"})," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"\n<customScalars>\n  <customScalar>\n      \x3c!-- custom scalar UUID type --\x3e\n      <scalar>UUID</scalar>\n      \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n      <type>java.util.UUID</type>\n      \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n        used to convert to/from raw JSON and scalar type --\x3e\n      <converter>com.example.UUIDScalarConverter</converter>\n  </customScalar>\n</customScalars>\n\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"parserOptions"})," - Configure options for parsing GraphQL queries and schema definition language documents. Settings here override the defaults set by GraphQL Java."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"  <parserOptions>\n      \x3c!-- Modify the maximum number of tokens read to prevent processing extremely large queries --\x3e\n      <maxTokens>15000</maxTokens>\n      \x3c!-- Modify the maximum number of whitespace tokens read to prevent processing extremely large queries --\x3e\n      <maxWhitespaceTokens>200000</maxWhitespaceTokens>\n      \x3c!-- Modify the maximum number of characters in a document to prevent malicious documents consuming CPU --\x3e\n      <maxCharacters>1048576</maxCharacters>\n      \x3c!-- Modify the maximum grammar rule depth to negate malicious documents that can cause stack overflows --\x3e\n      <maxRuleDepth>500</maxRuleDepth>\n      \x3c!-- Memory usage is significantly reduced by not capturing ignored characters, especially in SDL parsing --\x3e\n      <captureIgnoredChars>false</captureIgnoredChars>\n      \x3c!-- Single-line comments do not have any semantic meaning in GraphQL source documents and can be ignored --\x3e\n      <captureLineComments>true</captureLineComments>\n      \x3c!-- Memory usage is reduced by not setting SourceLocations on AST nodes, especially in SDL parsing. --\x3e\n      <captureSourceLocation>true</captureSourceLocation>\n  </parserOptions>\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"introspect-schema",children:"introspect-schema"}),"\n",(0,n.jsxs)(r.p,{children:["Executes GraphQL introspection query against specified ",(0,n.jsx)(r.code,{children:"graphql.endpoint"})," and saves the result locally to a target file\n(defaults to ",(0,n.jsx)(r.code,{children:"schema.graphql"})," under build directory). In general, this goal provides limited functionality by itself and\ninstead should be used to generate input for the subsequent ",(0,n.jsx)(r.code,{children:"generate-client"})," goal."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Attributes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"Default Lifecycle Phase"}),": ",(0,n.jsx)(r.code,{children:"generate-sources"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"endpoint"})}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"yes"}),(0,n.jsxs)(r.td,{children:["Target GraphQL server endpoint that will be used to execute introspection queries.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.endpoint"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"headers"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Map<String, Any>"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Optional HTTP headers to be specified on an introspection query."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"timeoutConfiguration"})}),(0,n.jsx)(r.td,{children:"TimeoutConfiguration"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default values are:"}),(0,n.jsx)("br",{}),"connect timeout = 5000",(0,n.jsx)("br",{}),"read timeout = 15000.",(0,n.jsx)("br",{})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"schemaFile"})}),(0,n.jsx)(r.td,{children:"File"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Target schema file.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Default value is"}),": ",(0,n.jsx)(r.code,{children:"${project.build.directory}/schema.graphql"}),(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"User property is"}),": ",(0,n.jsx)(r.code,{children:"graphql.schemaFile"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"streamResponse"})}),(0,n.jsx)(r.td,{children:"Boolean"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Boolean property to indicate whether to use streamed (chunked) responses.",(0,n.jsx)("br",{}),"Default value is**: true."]})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameter Details"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"timeoutConfiguration"})," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>d});var n=s(96540);const i={},t=n.createContext(i);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);