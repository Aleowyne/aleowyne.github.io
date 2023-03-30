"use strict";(self.webpackChunkblog_notes_aleo=self.webpackChunkblog_notes_aleo||[]).push([[920],{2027:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n=r(7855),a=r(4165),l=r(5861),c=r(7294),u=r(2263),o=r(179),s=r(5742),i=r(9960),m=r(5999),h=["zero","one","two","few","many","other"];function p(e){return h.filter((function(t){return e.includes(t)}))}var f={locale:"en",pluralForms:p(["one","other"]),select:function(e){return 1===e?"one":"other"}};function g(){var e=(0,u.Z)().i18n.currentLocale;return(0,c.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:p(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),f}var t,r}),[e])}function d(){var e=g();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}var v=r(6010),y=r(8177),E=r(412);var S=function(){var e=(0,y.k6)(),t=(0,y.TH)(),r=(0,u.Z)().siteConfig.baseUrl,n=E.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==n?void 0:n.get("q"))||"",l=(null==n?void 0:n.get("ctx"))||"",c=(null==n?void 0:n.get("version"))||"",o=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:function(t){var r=o(t);e.replace({search:r.toString()})},updateSearchContext:function(r){var n=new URLSearchParams(t.search);n.set("ctx",r),e.replace({search:n.toString()})},generateSearchPageLink:function(e){var t=o(e);return r+"search?"+t.toString()}}},w=r(22),x=r(8202),C=r(2539),_=r(726),b=r(1073),I=r(311),P=r(3926),Z=r(1029),F="searchContextInput_mXoe",R="searchQueryInput_CFBF",k="searchResultItem_U687",N="searchResultItemPath_uIbk",q="searchResultItemSummary_oZHr",A="searchQueryColumn_q7nx",T="searchContextColumn_oWAF";function U(){var e,t=(0,u.Z)().siteConfig.baseUrl,r=d().selectMessage,n=S(),o=n.searchValue,i=n.searchContext,h=n.searchVersion,p=n.updateSearchPath,f=n.updateSearchContext,g=(0,c.useState)(o),y=g[0],E=g[1],C=(0,c.useState)(),_=C[0],b=C[1],P=(0,c.useState)(),k=P[0],N=P[1],q=""+t+h,U=(0,c.useMemo)((function(){return y?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[y]);(0,c.useEffect)((function(){p(y),_&&(y?_(y,(function(e){N(e)})):N(void 0))}),[y,_]);var M=(0,c.useCallback)((function(e){E(e.target.value)}),[]);return(0,c.useEffect)((function(){o&&o!==y&&E(o)}),[o]),(0,c.useEffect)((function(){function e(){return(e=(0,l.Z)((0,a.Z)().mark((function e(){var t,r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.w)(q,i);case 2:t=e.sent,r=t.wrappedIndexes,n=t.zhDictionary,b((function(){return(0,x.v)(r,n,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,q]),c.createElement(c.Fragment,null,c.createElement(s.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"}),c.createElement("title",null,U)),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,U),c.createElement("div",{className:"row"},c.createElement("div",{className:(0,v.Z)("col",(e={},e[A]=Array.isArray(Z.Kc),e["col--9"]=Array.isArray(Z.Kc),e["col--12"]=!Array.isArray(Z.Kc),e))},c.createElement("input",{type:"search",name:"q",className:R,"aria-label":"Search",onChange:M,value:y,autoComplete:"off",autoFocus:!0})),Array.isArray(Z.Kc)?c.createElement("div",{className:(0,v.Z)("col","col--3","padding-left--none",T)},c.createElement("select",{name:"search-context",className:F,id:"context-selector",value:i,onChange:function(e){return f(e.target.value)}},c.createElement("option",{value:""},Z.pQ?(0,m.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),Z.Kc.map((function(e){return c.createElement("option",{key:e,value:e},e)})))):null),!_&&y&&c.createElement("div",null,c.createElement(I.Z,null)),k&&(k.length>0?c.createElement("p",null,r(k.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:k.length}))):c.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),c.createElement("section",null,k&&k.map((function(e){return c.createElement(L,{key:e.document.i,searchResult:e})})))))}function L(e){var t=e.searchResult,r=t.document,a=t.type,l=t.page,u=t.tokens,o=t.metadata,s=0===a,m=2===a,h=(s?r.b:l.b).slice(),p=m?r.s:r.t;s||h.push(l.t);var f="";if(Z.vc&&u.length>0){for(var g,d=new URLSearchParams,v=(0,n.Z)(u);!(g=v()).done;){var y=g.value;d.append("_highlight",y)}f="?"+d.toString()}return c.createElement("article",{className:k},c.createElement("h2",null,c.createElement(i.Z,{to:r.u+f+(r.h||""),dangerouslySetInnerHTML:{__html:m?(0,C.C)(p,u):(0,_.o)(p,(0,b.m)(o,"t"),u,100)}})),h.length>0&&c.createElement("p",{className:N},(0,P.e)(h)),m&&c.createElement("p",{className:q,dangerouslySetInnerHTML:{__html:(0,_.o)(r.t,(0,b.m)(o,"t"),u,100)}}))}var M=function(){return c.createElement(o.Z,null,c.createElement(U,null))}}}]);