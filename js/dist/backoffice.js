(()=>{var e={n:o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};(()=>{"use strict";e.r(o);const t=flarum.core.compat["common/extend"],r=((flarum.extensions["flamarkt-backoffice"]||{}).backoffice||{})["pages/UserShowPage"];var a=e.n(r);app.initializers.add("flamarkt-no-usernames",(function(){(0,t.extend)(a().prototype,"fields",(function(e){e.has("username")&&e.remove("username")})),(0,t.extend)(a().prototype,"data",(function(e){delete e.username}))}))})(),module.exports=o})();
//# sourceMappingURL=backoffice.js.map