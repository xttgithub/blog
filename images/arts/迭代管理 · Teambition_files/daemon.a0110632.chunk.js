(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e){},"523E":function(t,e,n){"use strict";var r=n("BsHi"),i=n("8yf6"),o=n("4c1C"),s=n("HDK4"),a=(n("neMA"),n("sx9y"),n("98u3"),n("92bn"),n("fjAU"),n("VcZd"),n("x4w3"),n("4XzM"),n("k558"),n("OA6I"),n("OwfJ")),c=n("NV2Y"),u=n("lKxJ"),f=n("AMFP"),h="",p=0,l=o.Observable.of(navigator.onLine).filter(function(t){return t}).merge(o.Observable.fromEvent(window,"online")).take(1).mergeMap(function(){return!h||p-Date.now()<36e5?a.a.get("/tcm").map(function(t){return t.result}).do(function(t){h=t;var e=t.split("."),n=JSON.parse(atob(e[1])).exp;p=1e3*n}):o.Observable.of(h)}),d=(Date.now()-(new Date).setMinutes(0,0,0)).toString(36);var v=6e4,b=1e3*(Math.ceil(50*Math.random())+10),m=function(){function t(){var t=this;this.open$=new i.Subject,this.close$=new i.Subject,this.error$=new i.Subject,this.message$=new i.Subject,this.connected=!1,this.reconnectTimeout=b,this.socket=null,this.pending=new Map,this.joinedRoom=new Map,this.consumerId$=new s.ReplaySubject(1),this.connectSignal$=o.Observable.of(this.connected).filter(function(t){return t}).merge(this.open$).take(1),this.onClose=function(e){e&&t.error$.next(e),t.close(),setTimeout(function(){t.reconnectTimeout*=1.2,t.reconnectTimeout>v&&(t.reconnectTimeout=v),t.connect()},t.reconnectTimeout)},this.onMessage=function(e){var n=f.parse(e),r=n.type,i=n.payload,o={id:i.id,type:r,data:i};switch(r){case"invalid":return t.error$.next(i);case"notification":return t.message$.next(o);case"success":case"error":var s=t.pending.get(o.id);return void(s?"error"===r?s.error(i.error):(s.next(i.data),s.complete()):t.message$.next(o));case"request":return t.socket.send(JSON.stringify(f.success(o.id,"OK"))),void t.message$.next(o)}}}return t.prototype.connect=function(){var t=this;l.take(1).subscribe(function(e){t.socket&&(t.socket.off&&t.socket.off(),t.socket.close());var n=c.a.TCM_PUSH_HOST.startsWith("http")?c.a.TCM_PUSH_HOST:""+location.protocol+c.a.TCM_PUSH_HOST;t.socket=u(n,{path:c.a.TCM_PUSH_PATH,query:"token="+e});var r=t;t.socket.on("open",function(){r.connected=!0,r.reconnectTimeout=b,r.consumerId$.next(this.id),r.open$.next()}),t.socket.on("close",t.onClose),t.socket.on("error",function(e){return t.error$.next(e)}),t.socket.on("message",t.onMessage)})},t.prototype.close=function(){var t=this;(this.socket||this.connected)&&(this.connected=!1,this.socket?(this.socket.off&&this.socket.off(),this.socket.once&&this.socket.once("close",function(){return t.close$.next()}),this.socket.close(),this.socket=null):this.close$.next())},t.prototype.listen=function(t){return this.message$.filter(function(t){return"request"===t.type}).map(function(t){return t.data.params}).mergeMap(function(t){return t.map(function(t){var e=JSON.parse(t.data);return{event:e.e,data:e.d}})}).filter(function(e){return e.event===t}).map(function(t){return t.data})},t.prototype.request=function(t,e){var n=this,i=d+":"+Object(r.uniqueId)();return new o.Observable(function(r){return n.pending.set(i,r),n.socket.send(JSON.stringify(f.request(i,t,e))),function(){n.pending.delete(i)}}).delayWhen(function(){return n.connectSignal$}).timeoutWith(v,o.Observable.throw({code:408,message:"Timeout"}))},t.prototype.join=function(t){if(!this.joinedRoom.has(t)){var e=this.consumerId$.distinctUntilChanged().mergeMap(function(e){return a.a.post("/subscribe",{consumerId:e,type:t})}).subscribe();this.joinedRoom.set(t,e)}},t.prototype.leave=function(t){var e=this.joinedRoom.get(t);e&&(e.unsubscribe(),this.consumerId$.take(1).mergeMap(function(e){return a.a.post("/unsubscribe",{consumerId:e,type:t})}).subscribe(),this.joinedRoom.delete(t))},t}();e.a=new m},"C+vu":function(t,e,n){"use strict";var r=n("4c1C"),i=n("npBr");r.Observable.prototype.auditTime=i.auditTime},MKA9:function(t,e,n){"use strict";var r=n("4c1C"),i=n("lywt");r.Observable.prototype.switchMap=i.switchMap},NV2Y:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a});var r=n("mrSG"),i=n("Mf5i"),o={},s={appId:"",userId:"",httpMode:"external",socketMode:"external",ipcName:"",heartbeat:30,browserNotificationProvider:"tab"},a={appId:"",userId:"",lang:i.AxonLang.zh_CN,theme:null,heartbeat:30,enableGTA:!1,selectable:!1};try{var c=document.getElementById("axon-config");c&&c.textContent&&(o=JSON.parse(c.textContent.trim()),c.remove?c.remove():c.parentNode&&c.parentNode.removeChild(c))}catch(f){console.error("Axon config parse error!")}try{if(location.hash){var u=JSON.parse(atob(location.hash.substring(1)));s=r.__assign({},s,u),a=r.__assign({},a,u)}}catch(h){console.error("Axon init: Not a valid init params")}},OwfJ:function(t,e,n){"use strict";var r=n("mrSG"),i=n("bNQv"),o=n.n(i),s=(n("4aHI"),n("4c1C")),a=n("NV2Y"),c=function(){function t(){this.headers={"Content-Type":"application/json"}}return t.prototype.request=function(t,e,n){var r=!1;return e.startsWith("http")||e.startsWith("//")?e.startsWith(a.a.HOST)||(r=!0):e=a.a.API_HOST+e,"string"!=typeof n&&(n=JSON.stringify(n)),s.Observable.ajax({method:t,url:e,body:n,headers:this.headers,crossDomain:r,withCredentials:!0}).map(function(t){return t.response})},t.prototype.setHeaders=function(t){this.headers=r.__assign({},this.headers,t)},t.prototype.get=function(t,e){return this.request("GET",u(t,e))},t.prototype.post=function(t,e){return this.request("POST",t,e)},t.prototype.put=function(t,e,n){return this.request("PUT",u(t,n),e)},t.prototype.delete=function(t,e){return this.request("DELETE",u(t,e))},t}();e.a=new c;var u=function(t,e){var n=Date.now();return f(f(t,h(e)),"_="+n)},f=function(t,e){return e?"?"===t.slice(-1)?""+t+e:-1===t.indexOf("?")?t+"?"+e:t+"&"+e:t},h=function(t){if("object"!=typeof t||!t)return"";var e=[];return o()(t,function(t,n){"_"===n?console.warn("query should not contain key '_', it will be ignored"):Array.isArray(t)?t.forEach(function(t){e.push(n+"="+l(t))}):void 0!==t&&e.push(n+"="+l(t))}),e.join("&")},p=/^(%(\d|[a-fA-F]){2}|[a-zA-Z0-9]|-|_|\.|!|~|\*|'|\(|\))*$/,l=function(t){var e=String(t);return p.test(e)?e:encodeURIComponent(e)}},SbKz:function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);function r(){this.constructor=t}t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},i=n("PBwO"),o=n("s4BY"),s=n("35Wn"),a=n("hgAg");e.audit=function(t){return function(e){return e.lift(new c(t))}};var c=function(){function t(t){this.durationSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.durationSelector))},t}(),u=function(t){function e(e,n){t.call(this,e),this.durationSelector=n,this.hasValue=!1}return r(e,t),e.prototype._next=function(t){if(this.value=t,this.hasValue=!0,!this.throttled){var e=i.tryCatch(this.durationSelector)(t);if(e===o.errorObject)this.destination.error(o.errorObject.e);else{var n=a.subscribeToResult(this,e);n.closed?this.clearThrottle():this.add(this.throttled=n)}}},e.prototype.clearThrottle=function(){var t=this.value,e=this.hasValue,n=this.throttled;n&&(this.remove(n),this.throttled=null,n.unsubscribe()),e&&(this.value=null,this.hasValue=!1,this.destination.next(t))},e.prototype.notifyNext=function(t,e,n,r){this.clearThrottle()},e.prototype.notifyComplete=function(){this.clearThrottle()},e}(s.OuterSubscriber)},UExd:function(t,e,n){var r=n("DVgA"),i=n("aCFj"),o=n("UqcF").f;t.exports=function(t){return function(e){for(var n,s=i(e),a=r(s),c=a.length,u=0,f=[];c>u;)o.call(s,n=a[u++])&&f.push(t?[n,s[n]]:s[n]);return f}}},Xdoh:function(t,e,n){"use strict";n.r(e);var r=n("4c1C"),i=n("HDK4"),o=(n("neMA"),n("ta7/")),s=n("NV2Y"),a=n("peKD"),c=(n("fjAU"),n("4XzM"),n("OA6I"),n("Mf5i")),u=n("OwfJ"),f=n("523E"),h=function(t){var e=t.indexOf(s.a.HOST);return e>=0&&e<=9};var p=function(t){return"badgeCount"===t||"popup"===t};n("T3pr"),n("92bn");var l=n("mrSG"),d=n("z/if"),v=n("8yf6"),b=(n("zFFn"),n("sx9y"),n("C+vu"),n("98u3"),n("MSNS"),n("MKA9"),d.namespace("ipc.notifier")),m=d.namespace("ipc.heartbeat"),g=function(){function t(t,e,n,r){var i=this;this.clientApp=t,this.clientId=e,this.heartbeatInterval=n,this.availableApps=r,this.participated=!1,this.notifierStatus={},this.availableApps.forEach(function(t){return i.notifierStatus[t]=!1}),this.notifierStatus$=new v.Subject,this.heartbeat()}return t.prototype.getElectionResult$=function(){var t=this;return this.notifierStatus$.distinctUntilChanged(function(e,n){return t.availableApps.every(function(t){return e[t]===n[t]})}).auditTime(50)},t.prototype.die=function(){m.remove(this.clientId)},t.prototype.heartbeat=function(){m.set(this.clientId,Date.now())},t.prototype.isHeartbeatLost=function(t,e){return void 0===e&&(e=Date.now()),e-t>1.15*this.heartbeatInterval},t.prototype.beNotifierFor=function(t){var e;b.set(t,this.clientId),this.reportNotifierStatus(l.__assign({},this.notifierStatus,((e={})[t]=!0,e)))},t.prototype.checkSelfStatus=function(){var t=this;this.reportNotifierStatus(this.availableApps.reduce(function(e,n){return e[n]=b.get(n)===t.clientId,e},{}))},t.prototype.reportNotifierStatus=function(t){this.notifierStatus=t,this.notifierStatus$.next(t)},t.prototype.takeoverOtherAPPsIfNecessary=function(){var t=this,e=b.getAll(),n=this.availableApps.filter(function(n){return n!==t.clientApp&&e[n]!==t.clientId}),r=this.availableApps.slice(0,this.availableApps.findIndex(function(e){return e===t.clientApp}));if(0!==n.length){var i=Date.now();r.map(function(t){return Object.values(m.namespace(t).getAll())}).reduce(function(t,e){return t.concat(e)},[]).every(function(e){return t.isHeartbeatLost(e,i)})&&n.forEach(function(e){Object.values(m.namespace(e).getAll()).every(function(e){return t.isHeartbeatLost(e,i)})&&(m.namespace(e).clear(),t.beNotifierFor(e))})}},t.prototype.participate=function(){var t=this;this.participated||(this.participated=!0,r.Observable.fromEvent(window,"storage").auditTime(1e3).startWith(1).switchMap(function(){return r.Observable.timer(0,1.15*t.heartbeatInterval)}).do(function(){t.checkSelfStatus();var e=m.namespace(t.clientApp).keys().sort(),n=b.get(t.clientApp);if(n&&0!==e.length&&e.find(function(t){return-1!==n.indexOf(t)})||(n=t.clientId,t.beNotifierFor(t.clientApp)),n===t.clientId)t.takeoverOtherAPPsIfNecessary();else{for(var r=e.findIndex(function(e){return-1!==t.clientId.indexOf(e)}),i=e.findIndex(function(t){return-1!==n.indexOf(t)}),o=i<r?r:e.length+r,s=!0,a=Date.now(),c=i;c<o;++c){var u=e[c%e.length],f=m.namespace(t.clientApp).get(u);if(!t.isHeartbeatLost(f,a)){s=!1;break}}if(s){n=t.clientId,t.beNotifierFor(t.clientApp);for(c=i;c<o;++c){u=e[c%e.length];m.namespace(t.clientApp).remove(u)}t.takeoverOtherAPPsIfNecessary()}}}).subscribe(void 0,function(t){return console.error(t)}))},t}(),y=null,_=null;function O(){_&&_.unsubscribe(),y&&y.die()}var S=d.namespace(s.b.userId+".config"),w=function(){return!!S.get("browser.notification.enabled",!0)},I=function(t){S.set("browser.notification.enabled",t)};var A,T=new i.ReplaySubject(1);o.a.connect(),Object(a.c)(a.a.daemon),A=T,r.Observable.fromEvent(window,"storage").filter(function(t){return t.key===s.b.userId+".config.browser.notification.enabled"}).auditTime(50).map(function(){return w()}).distinctUntilChanged().mergeMap(function(t){return A.map(function(e){return{enabled:t,sdkRPCName:e}})}).mergeMap(function(t){var e=t.enabled,n=t.sdkRPCName;return a.d.call(n,a.b.SET_BROWSER_NOTIFICATION_AVAILABILITY,e)}).subscribe(void 0,function(t){return console.error("config dispatch: ",t)}),"managed"===s.b.httpMode&&a.d.listen(c.RPCCommand.PROXY_HTTP_REQUEST).subscribe(function(t){var e=t.params,n=t.axon_rpc;if(e&&h(e.url)){var r=void 0,i=e.method,o=e.url,s=e.body,a=e.query;switch(i){case"GET":case"DELETE":r=u.a[i.toLowerCase()](o,a);break;case"PUT":case"POST":r=u.a[i.toLowerCase()](o,s,a);break;default:return void n.reply({error:{code:403,message:"Not a vaild method"}})}r.subscribe(function(t){n.reply({result:t})})}else n.reply({error:{code:403,message:"Not a vaild URL"}})}),"managed"===s.b.socketMode&&function(t){f.a.connect(),a.d.listen(c.RPCCommand.PROXY_SOCKET_ACTION).subscribe(function(t){var e=t.params,n=t.axon_rpc;e&&p(e.room)?(f.a[e.action](e.room),n.ok()):n.reply({error:{code:403,message:"Not a vaild room"}})}),f.a.message$.filter(function(t){return"request"===t.type}).map(function(t){return t.data.params}).mergeMap(function(t){return t.map(function(t){var e=JSON.parse(t.data);return{evt:e.e,data:e.d}})}).mergeMap(function(e){return t.map(function(t){return{target:t,socketPayload:e}})}).mergeMap(function(t){var e=t.target,n=t.socketPayload;return a.d.call(e,c.RPCCommand.PROXY_SOCKET_MESSAGE,n)}).subscribe()}(T),a.d.onConnect=function(t){var e=t.result;return function(t){t.event$.subscribe(function(t){switch(t.method){case a.b.GET_BROWSER_NOTIFICATION_AVAILABILITY:var e=w();t.axon_rpc.reply({result:e});break;case a.b.SET_BROWSER_NOTIFICATION_AVAILABILITY:I(t.params),t.axon_rpc.ok()}})}(e),function(t,e,n){_&&_.unsubscribe(),y&&y.die(),_=o.a.do(function(r){var i=[c.OfficialApp.teambition,c.OfficialApp.thoughts,c.OfficialApp.bingo],o=r.sort(function(t,e){var n=i.indexOf(t.name),r=i.indexOf(e.name);return-1===n&&-1===r?t.name.localeCompare(e.name):-1!==n&&-1!==r?n-r:-1===n?1:-1}).map(function(t){return t.appId});y=new g(t,e.peer,n,o)}).mergeMap(function(){var t=y.getElectionResult$().mergeMap(function(t){return~document.cookie.indexOf("axon-debug")&&console.info("current tab's desktop notification role:",t),e.call(c.RPCCommand.SET_CLIENT_ROLE,t)}),n=e.event$.map(function(t){switch(t.method){case"heartbeat":y.heartbeat();break;case c.RPCCommand.PARTICIPATE_NOTIFIER_ELECTION:y.heartbeat(),y.participate(),t.axon_rpc.ok()}});return r.Observable.merge(t,n)}).subscribe(void 0,function(){return O()},function(){return O()})}(s.b.appId,e,s.b.heartbeat),e.event$.subscribe(void 0,function(t){console.info("axond: Connection lost",t),O(),k()}),r.Observable.of(t)};var x=function(){if(window.parent!==window)return console.info("axond: Connecting to sdk..."),a.d.connect(window.parent,s.b.heartbeat).subscribe(function(t){var e=t.result;return T.next(e.peer),console.info("axond: Connected to "+e.peer),e},function(t){console.info("axond: Connect failed, ready for reconnect",t),k()});console.error("FATAL (axond): Not a valid init environment")};x();var k=function(){setTimeout(function(){x()},1e4)};window.addEventListener("beforeunload",function(){O()})},cxTK:function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);function r(){this.constructor=t}t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},i=n("35Wn"),o=n("hgAg");e.switchMap=function(t,e){return function(n){return n.lift(new s(t,e))}};var s=function(){function t(t,e){this.project=t,this.resultSelector=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.project,this.resultSelector))},t}(),a=function(t){function e(e,n,r){t.call(this,e),this.project=n,this.resultSelector=r,this.index=0}return r(e,t),e.prototype._next=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=this.innerSubscription;r&&r.unsubscribe(),this.add(this.innerSubscription=o.subscribeToResult(this,t,e,n))},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,n,r,i){this.resultSelector?this._tryNotifyNext(t,e,n,r):this.destination.next(e)},e.prototype._tryNotifyNext=function(t,e,n,r){var i;try{i=this.resultSelector(t,e,n,r)}catch(o){return void this.destination.error(o)}this.destination.next(i)},e}(i.OuterSubscriber)},hhXQ:function(t,e,n){var r=n("XKFU"),i=n("UExd")(!1);r(r.S,"Object",{values:function(t){return i(t)}})},lywt:function(t,e,n){"use strict";var r=n("cxTK");e.switchMap=function(t,e){return r.switchMap(t,e)(this)}},npBr:function(t,e,n){"use strict";var r=n("9cBy"),i=n("zlPM");e.auditTime=function(t,e){return void 0===e&&(e=r.async),i.auditTime(t,e)(this)}},peKD:function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"c",function(){return s});var r=n("BsHi"),i=n("Mf5i");n.d(e,"b",function(){return i.RPCCommand}),n.d(e,"a",function(){return i.RPCTarget});var o=new r.RPC;window.rpc=o,~document.cookie.indexOf("axon-debug")&&o.debugMode(r.DebugMask.ALL);var s=function(t){o.setName(t,location.origin,Object(r.UUID)()),o.serve()}},"ta7/":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a});var r=n("Mf5i"),i=n("OwfJ"),o=(n("4XzM"),n("F7y8"),i.a.get("/apps").map(function(t){return t.result}).publishLast()),s=o.map(function(t){return t.filter(function(t){return t.name!==r.OfficialApp.chat})}),a=o.map(function(t){return t.find(function(t){return t.name===r.OfficialApp.chat})})},"z/if":function(t,e,n){var r,i,o,s;r=this,i=this.define,o={version:"2.7.0",areas:{},apis:{},inherit:function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n]);return e},stringify:function(t){return void 0===t||"function"==typeof t?t+"":JSON.stringify(t)},parse:function(t){try{return JSON.parse(t)}catch(e){return t}},fn:function(t,e){for(var n in o.storeAPI[t]=e,o.apis)o.apis[n][t]=e},get:function(t,e){return t.getItem(e)},set:function(t,e,n){t.setItem(e,n)},remove:function(t,e){t.removeItem(e)},key:function(t,e){return t.key(e)},length:function(t){return t.length},clear:function(t){t.clear()},Store:function(t,e,n){var r=o.inherit(o.storeAPI,function(t,e,n){return 0===arguments.length?r.getAll():"function"==typeof e?r.transact(t,e,n):void 0!==e?r.set(t,e,n):"string"==typeof t||"number"==typeof t?r.get(t):t?r.setAll(t,e):r.clear()});r._id=t;try{e.setItem("_safariPrivate_","sucks"),r._area=e,e.removeItem("_safariPrivate_")}catch(i){}return r._area||(r._area=o.inherit(o.storageAPI,{items:{},name:"fake"})),r._ns=n||"",o.areas[t]||(o.areas[t]=r._area),o.apis[r._ns+r._id]||(o.apis[r._ns+r._id]=r),r},storeAPI:{area:function(t,e){var n=this[t];return n&&n.area||(n=o.Store(t,e,this._ns),this[t]||(this[t]=n)),n},namespace:function(t,e){if(!t)return this._ns?this._ns.substring(0,this._ns.length-1):"";var n=t,r=this[n];return r&&r.namespace||(r=o.Store(this._id,this._area,this._ns+n+"."),this[n]||(this[n]=r),e||r.area("session",o.areas.session)),r},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(t){return this._area.has?this._area.has(this._in(t)):!!(this._in(t)in this._area)},size:function(){return this.keys().length},each:function(t,e){for(var n=0,r=o.length(this._area);n<r;n++){var i=this._out(o.key(this._area,n));if(void 0!==i&&!1===t.call(this,i,e||this.get(i)))break;r>o.length(this._area)&&(r--,n--)}return e||this},keys:function(t){return this.each(function(t,e){e.push(t)},t||[])},get:function(t,e){var n=o.get(this._area,this._in(t));return null!==n?o.parse(n):e||n},getAll:function(t){return this.each(function(t,e){e[t]=this.get(t)},t||{})},transact:function(t,e,n){var r=this.get(t,n),i=e(r);return this.set(t,void 0===i?r:i),this},set:function(t,e,n){var r=this.get(t);return null!=r&&!1===n?e:o.set(this._area,this._in(t),o.stringify(e),n)||r},setAll:function(t,e){var n,r;for(var i in t)r=t[i],this.set(i,r,e)!==r&&(n=!0);return n},add:function(t,e){var n=this.get(t);if(n instanceof Array)e=n.concat(e);else if(null!==n){var r=typeof n;if(r===typeof e&&"object"===r){for(var i in e)n[i]=e[i];e=n}else e=n+e}return o.set(this._area,this._in(t),o.stringify(e)),e},remove:function(t){var e=this.get(t);return o.remove(this._area,this._in(t)),e},clear:function(){return this._ns?this.each(function(t){o.remove(this._area,this._in(t))},1):o.clear(this._area),this},clearAll:function(){var t=this._area;for(var e in o.areas)o.areas.hasOwnProperty(e)&&(this._area=o.areas[e],this.clear());return this._area=t,this},_in:function(t){return"string"!=typeof t&&(t=o.stringify(t)),this._ns?this._ns+t:t},_out:function(t){return this._ns?t&&0===t.indexOf(this._ns)?t.substring(this._ns.length):void 0:t}},storageAPI:{length:0,has:function(t){return this.items.hasOwnProperty(t)},key:function(t){var e=0;for(var n in this.items)if(this.has(n)&&t===e++)return n},setItem:function(t,e){this.has(t)||this.length++,this.items[t]=e},removeItem:function(t){this.has(t)&&(delete this.items[t],this.length--)},getItem:function(t){return this.has(t)?this.items[t]:null},clear:function(){for(var t in this.items)this.removeItem(t)},toString:function(){return this.length+" items in "+this.name+"Storage"}}},(s=o.Store("local",function(){try{return localStorage}catch(t){}}())).local=s,s._=o,s.area("session",function(){try{return sessionStorage}catch(t){}}()),"function"==typeof i&&void 0!==i.amd?i("store2",[],function(){return s}):t.exports?t.exports=s:(r.store&&(o.conflict=r.store),r.store=s)},zFFn:function(t,e,n){n("hhXQ"),t.exports=n("g3g5").Object.values},zlPM:function(t,e,n){"use strict";var r=n("9cBy"),i=n("SbKz"),o=n("7T/n");e.auditTime=function(t,e){return void 0===e&&(e=r.async),i.audit(function(){return o.timer(t,e)})}}},[["Xdoh",0,1]]]);