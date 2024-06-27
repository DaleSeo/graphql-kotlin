"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2695],{65242:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=n(74848),r=n(28453);const d={id:"federated-directives",title:"Federated Directives"},s=void 0,l={id:"schema-generator/federation/federated-directives",title:"Federated Directives",description:"graphql-kotlin supports a number of directives that can be used to annotate a schema and direct certain behaviors.",source:"@site/versioned_docs/version-4.x.x/schema-generator/federation/federated-directives.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federated-directives",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federated-directives",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/federation/federated-directives.md",tags:[],version:"4.x.x",lastUpdatedBy:"Rene Leonhardt",lastUpdatedAt:1719502221e3,frontMatter:{id:"federated-directives",title:"Federated Directives"},sidebar:"docs",previous:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federated-schemas"},next:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/type-resolution"}},a={},c=[{value:"<code>@extends</code> directive",id:"extends-directive",level:2},{value:"<code>@external</code> directive",id:"external-directive",level:2},{value:"<code>@key</code> directive",id:"key-directive",level:2},{value:"<code>@provides</code> directive",id:"provides-directive",level:2},{value:"<code>@requires</code> directive",id:"requires-directive",level:2}];function o(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"graphql-kotlin"})," supports a number of directives that can be used to annotate a schema and direct certain behaviors."]}),"\n",(0,t.jsxs)(i.p,{children:["For more details, see the ",(0,t.jsx)(i.a,{href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/",children:"Apollo Federation Specification"}),"."]}),"\n",(0,t.jsxs)(i.h2,{id:"extends-directive",children:[(0,t.jsx)(i.code,{children:"@extends"})," directive"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"directive @extends on OBJECT | INTERFACE\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"@extends"})," directive is used to represent type extensions in the schema. Native type extensions are currently\nunsupported by the ",(0,t.jsx)(i.code,{children:"graphql-kotlin"})," libraries. Federated extended types should have corresponding ",(0,t.jsx)(i.code,{children:"@key"})," directive\ndefined that specifies primary key required to fetch the underlying object."]}),"\n",(0,t.jsx)(i.p,{children:"Example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n   fun newFunctionality(): String = "whatever"\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"will generate"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n'})}),"\n",(0,t.jsxs)(i.h2,{id:"external-directive",children:[(0,t.jsx)(i.code,{children:"@external"})," directive"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"directive @external on FIELD_DEFINITION\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"@external"})," directive is used to mark a field as owned by another service. This allows service A to use fields from\nservice B while also knowing at runtime the types of that field. ",(0,t.jsx)(i.code,{children:"@external"})," directive is only applicable on federated\nextended types. All the external fields should either be referenced from the ",(0,t.jsx)(i.code,{children:"@key"}),", ",(0,t.jsx)(i.code,{children:"@requires"})," or ",(0,t.jsx)(i.code,{children:"@provides"}),"\ndirectives field sets."]}),"\n",(0,t.jsx)(i.p,{children:"Example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newFunctionality(): String = "whatever"\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"will generate"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n'})}),"\n",(0,t.jsxs)(i.h2,{id:"key-directive",children:[(0,t.jsx)(i.code,{children:"@key"})," directive"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"@key"})," directive is used to indicate a combination of fields that can be used to uniquely identify and fetch an\nobject or interface. The specified field set can represent single field (e.g. ",(0,t.jsx)(i.code,{children:'"id"'}),"), multiple fields (e.g. ",(0,t.jsx)(i.code,{children:'"id name"'}),") or\nnested selection sets (e.g. ",(0,t.jsx)(i.code,{children:'"id user { name }"'}),")."]}),"\n",(0,t.jsxs)(i.p,{children:["Key directives should be specified on the root base type as well as all the corresponding federated (i.e. extended)\ntypes. Key fields specified in the directive field set should correspond to a valid field on the underlying GraphQL\ninterface/object. Federated extended types should also instrument all the referenced key fields with ",(0,t.jsx)(i.code,{children:"@external"}),"\ndirective."]}),"\n",(0,t.jsxs)(i.p,{children:["> NOTE: The Federation spec specifies that multiple @key directives can be applied on the field. The GraphQL spec has been recently changed to allow this behavior,\n> but we are currently blocked and are tracking progress in ",(0,t.jsx)(i.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/590",children:"this issue"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:'@KeyDirective(FieldSet("id"))\nclass Product(val id: String, val name: String)\n'})}),"\n",(0,t.jsx)(i.p,{children:"will generate"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'type Product @key(fields: "id") {\n  id: String!\n  name: String!\n}\n'})}),"\n",(0,t.jsxs)(i.h2,{id:"provides-directive",children:[(0,t.jsx)(i.code,{children:"@provides"})," directive"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"@provides"})," directive is used to annotate the expected returned field set from a field on a base type that is\nguaranteed to be selectable by the gateway. This allows you to expose only a subset of fields from the underlying\nfederated object type to be selectable from the federated schema. Provided fields specified in the directive field set\nshould correspond to a valid field on the underlying GraphQL interface/object type. ",(0,t.jsx)(i.code,{children:"@provides"})," directive can only be\nused on fields returning federated extended objects."]}),"\n",(0,t.jsx)(i.p,{children:"Example:\nWe might want to expose only name of the user that submitted a review."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:'@KeyDirective(FieldSet("id"))\nclass Review(val id: String) {\n  @ProvidesDirective(FieldSet("name"))\n  fun user(): User = getUserByReviewId(id)\n}\n\n@KeyDirective(FieldSet("userId"))\n@ExtendsDirective\nclass User(\n  @ExternalDirective val userId: String,\n  @ExternalDirective val name: String\n)\n'})}),"\n",(0,t.jsx)(i.p,{children:"will generate"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'type Review @key(fields : "id") {\n  id: String!\n  user: User! @provides(fields : "name")\n}\n\ntype User @key(fields : "userId") @extends {\n  userId: String! @external\n  name: String! @external\n}\n'})}),"\n",(0,t.jsxs)(i.h2,{id:"requires-directive",children:[(0,t.jsx)(i.code,{children:"@requires"})," directive"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"directive @requires(fields: _FieldSet!) on FIELD_DEFINITON\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"@requires"})," directive is used to annotate the required input field set from a base type for a resolver. It is used\nto develop a query plan where the required fields may not be needed by the client, but the service may need additional\ninformation from other services. Required fields specified in the directive field set should correspond to a valid field\non the underlying GraphQL interface/object and should be instrumented with ",(0,t.jsx)(i.code,{children:"@external"})," directive. Since ",(0,t.jsx)(i.code,{children:"@requires"}),"\ndirective specifies additional fields (besides the one specified in ",(0,t.jsx)(i.code,{children:"@key"})," directive) that are required to resolve\nfederated type fields, this directive can only be specified on federated extended objects fields."]}),"\n",(0,t.jsxs)(i.p,{children:["NOTE: fields specified in the ",(0,t.jsx)(i.code,{children:"@requires"})," directive will only be specified in the queries that reference those fields.\nThis is problematic for Kotlin as the non nullable primitive properties have to be initialized when they are declared.\nSimplest workaround for this problem is to initialize the underlying property to some dummy value that will be used if\nit is not specified. This approach might become problematic though as it might be impossible to determine whether fields\nwas initialized with the default value or the invalid/default value was provided by the federated query. Another\npotential workaround is to rely on delegation to initialize the property after the object gets created. This will ensure\nthat exception will be thrown if queries attempt to resolve fields that reference the uninitialized property."]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  @ExternalDirective\n  var weight: Double by Delegates.notNull()\n\n  @RequiresDirective(FieldSet("weight"))\n  fun shippingCost(): String { ... }\n\n  fun additionalInfo(): String { ... }\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"will generate"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'type Product @key(fields : "id") @extends  {\n  additionalInfo: String!\n  id: String! @external\n  shippingCost: String! @requires(fields : "weight")\n  weight: Float! @external\n}\n'})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var t=n(96540);const r={},d=t.createContext(r);function s(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);