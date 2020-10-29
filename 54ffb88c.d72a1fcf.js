(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1006:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,u=p["".concat(c,".").concat(d)]||p[d]||O[d]||b;return r?n.a.createElement(u,o(o({ref:t},i),{},{components:r})):n.a.createElement(u,o({ref:t},i))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<b;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},409:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(7),b=(r(0),r(1006)),c={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},o={unversionedId:"progressviewios",id:"version-0.63/progressviewios",isDocsHomePage:!1,title:"\ud83d\udea7 ProgressViewIOS",description:"Deprecated. Use @react-native-community/progress-view instead.",source:"@site/versioned_docs/version-0.63/progressviewios.md",slug:"/progressviewios",permalink:"/docs/progressviewios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/progressviewios.md",version:"0.63",lastUpdatedAt:1603973073},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>progress</code>",id:"progress",children:[]},{value:"<code>progressImage</code>",id:"progressimage",children:[]},{value:"<code>progressTintColor</code>",id:"progresstintcolor",children:[]},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",children:[]},{value:"<code>trackImage</code>",id:"trackimage",children:[]},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[]}]}],i={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-progress-view/progress-view"}),"@react-native-community/progress-view")," instead.")),Object(b.b)("p",null,"Uses ",Object(b.b)("inlineCode",{parentName:"p"},"ProgressViewIOS")," to render a UIProgressView on iOS."),Object(b.b)("h3",{id:"example"},"Example"),Object(b.b)("div",{className:"snack-player","data-snack-name":"ProgressViewIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7BView%2C%20StyleSheet%2C%20ProgressViewIOS%2C%20Text%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%200%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%20style%3D%7Bstyles.progress%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Bar%20-%2050%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%0A%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%22%22%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%20100%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%0A%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%22black%22%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20example%3A%20%7B%0A%20%20%20%20marginVertical%3A%2020%2C%0A%20%20%7D%2C%0A%20%20progress%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true"}),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/view#props"}),"View Props"),"."),Object(b.b)("h3",{id:"progress"},Object(b.b)("inlineCode",{parentName:"h3"},"progress")),Object(b.b)("p",null,"The progress value (between 0 and 1)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progressimage"},Object(b.b)("inlineCode",{parentName:"h3"},"progressImage")),Object(b.b)("p",null,"A stretchable image to display as the progress bar."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Image.propTypes.source"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progresstintcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"progressTintColor")),Object(b.b)("p",null,"The tint color of the progress bar itself."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progressviewstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"progressViewStyle")),Object(b.b)("p",null,"The progress bar style."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum('default', 'bar')"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"trackimage"},Object(b.b)("inlineCode",{parentName:"h3"},"trackImage")),Object(b.b)("p",null,"A stretchable image to display behind the progress bar."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Image.propTypes.source"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tracktintcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"trackTintColor")),Object(b.b)("p",null,"The tint color of the progress bar track."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))))}s.isMDXComponent=!0}}]);