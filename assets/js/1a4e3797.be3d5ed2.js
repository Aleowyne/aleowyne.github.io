"use strict";(self.webpackChunkblog_notes_aleo=self.webpackChunkblog_notes_aleo||[]).push([[920],{2027:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(7855),a=n(4165),l=n(5861),u=n(7294),s=n(2263),c=n(8765),o=n(5742),i=n(9960),m=n(5999),h=["zero","one","two","few","many","other"];function f(e){return h.filter((function(t){return e.includes(t)}))}var p={locale:"en",pluralForms:f(["one","other"]),select:function(e){return 1===e?"one":"other"}};function g(){var e=(0,s.Z)().i18n.currentLocale;return(0,u.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:f(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),p}var t,n}),[e])}function d(){var e=g();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}var v=n(8177),E=n(412);var y=function(){var e=(0,v.k6)(),t=(0,v.TH)(),n=(0,s.Z)().siteConfig.baseUrl,r=E.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==r?void 0:r.get("q"))||"",l=(null==r?void 0:r.get("ctx"))||"",u=(null==r?void 0:r.get("version"))||"",c=function(e){var n=new URLSearchParams(t.search);return e?n.set("q",e):n.delete("q"),n};return{searchValue:a,searchContext:l,searchVersion:u,updateSearchPath:function(t){var n=c(t);e.replace({search:n.toString()})},generateSearchPageLink:function(e){var t=c(e);return n+"search?"+t.toString()}}},S=n(22),w=n(8202),b=n(2539),_=n(726),I=n(1073),P=n(311),x=n(3926),F=n(1029),R="searchQueryInput_CFBF",Z="searchResultItem_U687",k="searchResultItemPath_uIbk",C="searchResultItemSummary_oZHr";function T(){var e=(0,s.Z)().siteConfig.baseUrl,t=d().selectMessage,n=y(),r=n.searchValue,c=n.searchContext,i=n.searchVersion,h=n.updateSearchPath,f=(0,u.useState)(r),p=f[0],g=f[1],v=(0,u.useState)(),E=v[0],b=v[1],_=(0,u.useState)(),I=_[0],x=_[1],F=""+e+i,Z=(0,u.useMemo)((function(){return p?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:p}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[p]);(0,u.useEffect)((function(){h(p),E&&(p?E(p,(function(e){x(e)})):x(void 0))}),[p,E]);var k=(0,u.useCallback)((function(e){g(e.target.value)}),[]);return(0,u.useEffect)((function(){r&&r!==p&&g(r)}),[r]),(0,u.useEffect)((function(){function e(){return(e=(0,l.Z)((0,a.Z)().mark((function e(){var t,n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.w)(F,c);case 2:t=e.sent,n=t.wrappedIndexes,r=t.zhDictionary,b((function(){return(0,w.v)(n,r,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,F]),u.createElement(u.Fragment,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,Z)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,Z),u.createElement("input",{type:"search",name:"q",className:R,"aria-label":"Search",onChange:k,value:p,autoComplete:"off",autoFocus:!0}),!E&&p&&u.createElement("div",null,u.createElement(P.Z,null)),I&&(I.length>0?u.createElement("p",null,t(I.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):u.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),u.createElement("section",null,I&&I.map((function(e){return u.createElement(q,{key:e.document.i,searchResult:e})})))))}function q(e){var t=e.searchResult,n=t.document,a=t.type,l=t.page,s=t.tokens,c=t.metadata,o=0===a,m=2===a,h=(o?n.b:l.b).slice(),f=m?n.s:n.t;o||h.push(l.t);var p="";if(F.vc&&s.length>0){for(var g,d=new URLSearchParams,v=(0,r.Z)(s);!(g=v()).done;){var E=g.value;d.append("_highlight",E)}p="?"+d.toString()}return u.createElement("article",{className:Z},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+p+(n.h||""),dangerouslySetInnerHTML:{__html:m?(0,b.C)(f,s):(0,_.o)(f,(0,I.m)(c,"t"),s,100)}})),h.length>0&&u.createElement("p",{className:k},(0,x.e)(h)),m&&u.createElement("p",{className:C,dangerouslySetInnerHTML:{__html:(0,_.o)(n.t,(0,I.m)(c,"t"),s,100)}}))}var M=function(){return u.createElement(c.Z,null,u.createElement(T,null))}}}]);