"use strict";(self.webpackChunkblog_notes_aleo=self.webpackChunkblog_notes_aleo||[]).push([[920],{2027:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(7855),a=r(4165),l=r(5861),c=r(7294),s=r(2263),u=r(3929),o=r(5742),i=r(9960),m=r(5999),h=["zero","one","two","few","many","other"];function p(e){return h.filter((function(t){return e.includes(t)}))}var f={locale:"en",pluralForms:p(["one","other"]),select:function(e){return 1===e?"one":"other"}};function g(){var e=(0,s.Z)().i18n.currentLocale;return(0,c.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:p(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),f}var t,r}),[e])}function d(){var e=g();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}var v=r(6010),y=r(8177),E=r(412);var S=function(){var e=(0,y.k6)(),t=(0,y.TH)(),r=(0,s.Z)().siteConfig.baseUrl,n=E.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==n?void 0:n.get("q"))||"",l=(null==n?void 0:n.get("ctx"))||"",c=(null==n?void 0:n.get("version"))||"",u=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:function(t){var r=u(t);e.replace({search:r.toString()})},updateSearchContext:function(r){var n=new URLSearchParams(t.search);n.set("ctx",r),e.replace({search:n.toString()})},generateSearchPageLink:function(e){var t=u(e);return r+"search?"+t.toString()}}},I=r(22),w=r(8202),R=r(2539),x=r(726),C=r(1073),P=r(311),b=r(3926),_=r(1029),Z={searchVersionInput:"searchVersionInput_t5lH",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function k(){var e=(0,s.Z)().siteConfig.baseUrl,t=d().selectMessage,r=S(),n=r.searchValue,u=r.searchContext,i=r.searchVersion,h=r.updateSearchPath,p=r.updateSearchContext,f=(0,c.useState)(n),g=f[0],y=f[1],E=(0,c.useState)(),R=E[0],x=E[1],C=(0,c.useState)(),b=C[0],k=C[1],N=""+e+i,T=(0,c.useMemo)((function(){return g?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:g}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[g]);(0,c.useEffect)((function(){h(g),R&&(g?R(g,(function(e){k(e)})):k(void 0))}),[g,R]);var U=(0,c.useCallback)((function(e){y(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==g&&y(n)}),[n]),(0,c.useEffect)((function(){function e(){return(e=(0,l.Z)((0,a.Z)().mark((function e(){var t,r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,I.w)(N,u);case 2:t=e.sent,r=t.wrappedIndexes,n=t.zhDictionary,x((function(){return(0,w.v)(r,n,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u,N]),c.createElement(c.Fragment,null,c.createElement(o.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"}),c.createElement("title",null,T)),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,T),c.createElement("div",{className:"row"},c.createElement("div",{className:(0,v.Z)("col",Z.searchQueryColumn,{"col--9":Array.isArray(_.Kc),"col--12":!Array.isArray(_.Kc)})},c.createElement("input",{type:"search",name:"q",className:Z.searchQueryInput,"aria-label":"Search",onChange:U,value:g,autoComplete:"off",autoFocus:!0})),Array.isArray(_.Kc)?c.createElement("div",{className:(0,v.Z)("col","col--3","padding-left--none",Z.searchVersionColumn)},c.createElement("select",{name:"search-context",className:Z.searchVersionInput,id:"context-selector",value:u,onChange:function(e){return p(e.target.value)}},c.createElement("option",{value:""},_.pQ?(0,m.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),_.Kc.map((function(e){return c.createElement("option",{key:e,value:e},e)})))):null),!R&&g&&c.createElement("div",null,c.createElement(P.Z,null)),b&&(b.length>0?c.createElement("p",null,t(b.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:b.length}))):c.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),c.createElement("section",null,b&&b.map((function(e){return c.createElement(F,{key:e.document.i,searchResult:e})})))))}function F(e){var t=e.searchResult,r=t.document,a=t.type,l=t.page,s=t.tokens,u=t.metadata,o=0===a,m=2===a,h=(o?r.b:l.b).slice(),p=m?r.s:r.t;o||h.push(l.t);var f="";if(_.vc&&s.length>0){for(var g,d=new URLSearchParams,v=(0,n.Z)(s);!(g=v()).done;){var y=g.value;d.append("_highlight",y)}f="?"+d.toString()}return c.createElement("article",{className:Z.searchResultItem},c.createElement("h2",null,c.createElement(i.Z,{to:r.u+f+(r.h||""),dangerouslySetInnerHTML:{__html:m?(0,R.C)(p,s):(0,x.o)(p,(0,C.m)(u,"t"),s,100)}})),h.length>0&&c.createElement("p",{className:Z.searchResultItemPath},(0,b.e)(h)),m&&c.createElement("p",{className:Z.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,x.o)(r.t,(0,C.m)(u,"t"),s,100)}}))}var N=function(){return c.createElement(u.Z,null,c.createElement(k,null))}}}]);