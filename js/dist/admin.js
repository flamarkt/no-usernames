module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["common/components/EditUserModal"]},function(e,t,n){"use strict";var r=n(0),o=n(1),a=n.n(o);t.a=function(){Object(r.extend)(a.a.prototype,"fields",(function(e){e.has("username")&&e.remove("username")})),Object(r.extend)(a.a.prototype,"data",(function(e){delete e.username}))}},function(e,t){e.exports=flarum.core.compat["admin/app"]},,,,function(e,t){e.exports=flarum.core.compat["admin/components/UserListPage"]},,function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(0),u=n(7),c=n.n(u),i=n(2);o.a.initializers.add("flamarkt-no-usernames",(function(){Object(a.extend)(c.a.prototype,"columns",(function(e){e.has("username")&&e.remove("username"),e.has("displayName")||e.add("displayName",{name:o.a.translator.trans("flamarkt-no-usernames.admin.users.columns.displayName"),content:function(e){var t=o.a.forum.attribute("baseUrl")+"/u/"+e.slug();return m("a",{target:"_blank",href:t},e.displayName())}},90)})),Object(i.a)()}))}]);
//# sourceMappingURL=admin.js.map