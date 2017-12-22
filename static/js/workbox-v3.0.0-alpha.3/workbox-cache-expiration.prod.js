this.workbox=this.workbox||{},this.workbox.expiration=function(e,t,r,i){"use strict";try{self.workbox.v["workbox:cache-expiration:3.0.0-alpha.3"]=1}catch(e){}class s{constructor(e){this.e=e,this.t=e,this.r=new r.DBWrapper("workbox-cache-expiration",1,{onupgradeneeded:e=>e.target.result.createObjectStore(this.t,{keyPath:"url"}).createIndex("timestamp","timestamp",{unique:!1})})}setTimestamp(e,t){var r=this;return babelHelpers.asyncToGenerator(function*(){yield r.r.put(r.t,{url:new URL(e,location).href,timestamp:t})})()}getAllTimestamps(){var e=this;return babelHelpers.asyncToGenerator(function*(){return yield e.r.getAllMatching(e.t,{index:"timestamp"})})()}getTimestamp(e){var t=this;return babelHelpers.asyncToGenerator(function*(){return(yield t.r.get(t.t,e)).timestamp})()}deleteUrl(e){var t=this;return babelHelpers.asyncToGenerator(function*(){yield t.r.delete(t.t,new URL(e,location).href)})()}}class n{constructor(e,t={}){this.i=!1,this.s=!1,this.n=t.maxEntries,this.a=t.maxAgeSeconds,this.e=e,this.o=new s(e)}expireEntries(){var e=this;return babelHelpers.asyncToGenerator(function*(){if(e.i)return void(e.s=!0);e.i=!0;const t=Date.now(),r=yield e.l(t),i=yield e.c(),s=[...new Set(r.concat(i))];yield Promise.all([e.u(s),e.h(s)]),e.i=!1,e.s&&(e.s=!1,e.expireEntries())})()}l(e){var t=this;return babelHelpers.asyncToGenerator(function*(){if(!t.a)return[];const r=e-1e3*t.a,i=[];return(yield t.o.getAllTimestamps()).forEach(function(e){e.timestamp<r&&i.push(e.url)}),i})()}c(){var e=this;return babelHelpers.asyncToGenerator(function*(){const t=[];if(!e.n)return[];const r=yield e.o.getAllTimestamps();for(;r.length>e.n;){const e=r.shift();t.push(e.url)}return t})()}u(e){var t=this;return babelHelpers.asyncToGenerator(function*(){const r=yield caches.open(t.e);for(const t of e)yield r.delete(t)})()}h(e){var t=this;return babelHelpers.asyncToGenerator(function*(){for(const r of e)yield t.o.deleteUrl(r)})()}updateTimestamp(e){var t=this;return babelHelpers.asyncToGenerator(function*(){const r=new URL(e,location);r.hash="",yield t.o.setTimestamp(r.href,Date.now())})()}isURLExpired(e){var r=this;return babelHelpers.asyncToGenerator(function*(){if(!r.a)throw new t.WorkboxError("expired-test-without-max-age",{methodName:"isURLExpired",paramName:"maxAgeSeconds"});const i=new URL(e,location);return i.hash="",(yield r.o.getTimestamp(i.href))<Date.now()-1e3*r.a})()}}class a{constructor(e={}){this.d=e,this.a=e.maxAgeSeconds,this.p=new Map}m(e){if(e===i.cacheNames.getRuntimeName())throw new t.WorkboxError("expire-custom-caches-only");let r=this.p.get(e);return r||(r=new n(e,this.d),this.p.set(e,r)),r}cachedResponseWillBeUsed({cacheName:e,cachedResponse:t}){let r=this.b(t);return this.m(e).expireEntries(),r?t:null}b(e){if(!this.a)return!0;const t=this.f(e);return null===t||t>=Date.now()-1e3*this.a}f(e){const t=e.headers.get("date"),r=new Date(t).getTime();return isNaN(r)?null:r}cacheDidUpdate({cacheName:e,request:t}){var r=this;return babelHelpers.asyncToGenerator(function*(){const i=r.m(e);yield i.updateTimestamp(t.url),yield i.expireEntries()})()}}return e.CacheExpiration=n,e.Plugin=a,e}({},workbox.core._private,workbox.core._private,workbox.core._private);
//# sourceMappingURL=workbox-cache-expiration.prod.js.map