(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{156:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(474),l=t(471),i=t(472),o=t(478),s=t(527);a.default=function(){var e=Object(l.a)().siteConfig,a=void 0===e?{}:e,t=s[0],n=s.filter((function(e){return e!==t}));return a.organizationName,a.projectName,r.a.createElement(c.a,{permalink:"/versions",description:"React Navigation Versions page listing all documented site versions"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("h1",null,"React Navigation documentation versions"),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),r.a.createElement("p",null,"Here you can find the latest documentation."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,t),r.a.createElement("td",null,r.a.createElement(i.a,{to:Object(o.a)("/docs/getting-started")},"Documentation")))))),n.length>0&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past Versions"),r.a.createElement("p",null,"Here you can find documentation for previous versions of React Navigation."),r.a.createElement("table",null,r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("th",null,e),r.a.createElement("td",null,r.a.createElement(i.a,{to:Object(o.a)("/docs/"+e+"/getting-started")},"Documentation")))})))))))}},475:function(e,a,t){"use strict";t(48),t(23),t(17),t(18),t(66);var n=t(0),r=t.n(n),c=t(468),l=t.n(c),i=t(471);t(120);a.a=function(e){var a=Object(n.useState)(!1),c=a[0],o=a[1],s=Object(n.useRef)(null),u=Object(i.a)().siteConfig,d=(void 0===u?{}:u).themeConfig.algolia;var m=function(e){void 0===e&&(e=!0),c||Promise.all([t.e(340).then(t.t.bind(null,476,7)),t.e(237).then(t.t.bind(null,477,7))]).then((function(a){var t=a[0].default;o(!0),window.docsearch=t,function(e){window.docsearch({appId:d.appId,apiKey:d.apiKey,indexName:d.indexName,inputSelector:"#search_input_react",algoliaOptions:d.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;window.open(r,"_self")}}),e&&s.current.focus()}(e)}))},h=Object(n.useCallback)((function(){m(),c&&s.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),p=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;m(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:p,ref:s}))}},527:function(e){e.exports=JSON.parse('["5.x","4.x","3.x","2.x","1.x"]')}}]);