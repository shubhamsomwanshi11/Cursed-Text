var baseURL = "";
var isMobile = false;
if (navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/IEMobile/i)) {

    isMobile = true;

    var viewportWidth = 800;
    // bigger width for tablets
    //if (navigator.userAgent.match(/iPad/i) || (navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/mobile/i))   ) {
    //    viewportWidth = 900;
    //}


    var meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=" + viewportWidth + ", user-scalable=no";
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.getElementsByTagName('html')[0].className = 'ios';
}


/* Modernizr 2.7.0 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-draganddrop-inputtypes-shiv-cssclasses-hasevent-load
 */
window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function B(){e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),o[a[d]]=!!e;return o}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.7.0",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n={},o={},p={},q=[],r=q.slice,s,t=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=y(e[d],"function"),y(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a};for(var C in n)v(n,C)&&(s=C.toLowerCase(),e[s]=n[C](),q.push((e[s]?"":"no-")+s));return e.input||B(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e.hasEvent=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


// History.js - 1.7.1-r2 https://github.com/balupton/history.js
window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!="undefined"&&c.init()}(window),function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"";return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&&g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&&i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,"statechange"),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")})},typeof g.init!="undefined"&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){return typeof m.Adapter=="undefined"?!1:(typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;return a+="/",a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&&c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a=="undefined"?b=m.savedStates[m.savedStates.length-1]:a<0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e,f;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&&!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&&(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!="undefined"?m.busy.flag=a:typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a>=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData("state",b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem("History.store"))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem("History.store",k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor==="Apple Computer, Inc."||(e.appCodeName||"")==="Mozilla")m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})}},m.init()}(window)


// input[type=range] for Firefox
Modernizr.load([
    {
        // Test if Input Range is supported using Modernizr
        test: Modernizr.inputtypes.range,
        // If ranges are not supported, load the slider script and CSS file
        nope: [
            // The slider CSS file
            baseURL + '/css/fd-slider.mhtml.min.css'
            // The slider JS file
            , baseURL + '/js/fd-slider.js'
        ],
        callback: function (id, testResult) {
            // If the slider file has loaded then fire the onDomReady event
            if ("fdSlider" in window && typeof (fdSlider.onDomReady) != "undefined") {
                try {
                    fdSlider.onDomReady();
                } catch (err) {
                };
            };
        }
    }
]);


var luni = new Lunicode();


// thx to Jason: http://stackoverflow.com/questions/985272/jquery-selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
jQuery.fn.selectText = function () {
    var doc = document
        , element = this[0]
        , range, selection
        ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};

/////// GUI

// Remember the current plain text between panels
var currentPlainText = '';

var currentPanelID, currentTabID;


function setTab(tabID, setHistory) {

    $('header ul li,.tab').removeClass('active');
    $('header #tablink_' + tabID + ', #tab_' + tabID).addClass('active');
    $('#body .tab').hide();
    $('#tab_' + tabID).show();

    currentTabID = tabID;
}

function setPanel(panelID, setHistory) {


    var tabID = 'text';

    if (typeof(panelID) == 'undefined' || panelID == '') {
        panelID = 'flip';
    }

    if ($.inArray($.trim(panelID), ['emoticons', 'symbols', 'emoji']) != -1) {
        tabID = 'emoticons';

    } else if ($.inArray($.trim(panelID), ['bigtext', 'imagetotext', 'cowsay']) != -1) {
        tabID = 'asciiart';

    } else if (panelID == 'about') {
        tabID = 'about';

    } else if (panelID == 'datenschutz') {
        tabID = 'datenschutz';
    }


    var $tab = $('#tab_' + tabID);

    if (!$tab.hasClass('active')) {
        setTab(tabID, false);
        $help = $('#help');

        if (tabID == 'about' || tabID == 'datenschutz' || tabID == 'asciiart') {
            $help.hide();
        } else {
            $help.show();
        }
    }


    if (!$('#' + tabID + '_panel_' + panelID).hasClass('active')) {
        $('aside ul li', $tab).removeClass('active');
        $('.content section', $tab).removeClass('active').hide();

        $('#' + tabID + '_panel_' + panelID).show();
        $('.link_' + panelID + ',.content #' + tabID + '_panel_' + panelID, $tab).addClass('active');

        if (tabID == 'text') {
            var $plaintext = $('#' + tabID + '_panel_' + panelID + ' textarea[name=plain]');
            if (!isMobile) {
                $plaintext.focus();
            }
            $plaintext.val(currentPlainText);
            $('#' + tabID + '_panel_' + panelID + ' textarea[name=encoded]').val(luni.tools[panelID].encode(currentPlainText));
        }
    }

    if (setHistory) {
        var title = (panelID.charAt(0).toUpperCase() + panelID.slice(1));
        switch (panelID) {
            case 'bigtext':
                title = 'Big Text';
                break;
            case 'imagetotext':
                title = 'Image to Text';
                break;
            case 'cowsay':
                title = 'Cowsay';
                break;
        }
        History.pushState({tabID: tabID, panelID: panelID}, "Lunicode > " + title, '/' + panelID);
    }

    currentPanelID = panelID;
    currenTabID = tabID;
}


$(function () {

    // TODO: better url handling

    var History = window.History;
    if (!History.enabled) {
        return false;
    }

    // Bind to StateChange Event
    History.Adapter.bind(window, 'statechange', function () {
        var State = History.getState();
        //History.log(State.data, State.title, State.url);

        setPanel(State.data.panelID, false);
    });


    function initGUI() {

       // setNavigation();

        // Encode placeholder Text
        $('#tab_text textarea[name=plain]').each(function () {
            var $parent = $(this).parents('section');
            var effect = $parent.attr('id').split("_")[2];

            $('textarea[name=encoded]', $parent).attr('placeholder', luni.tools[effect].encode($(this).attr('placeholder')));
        });
    }


    initGUI();

    // Switch Tabs
    $('header ul li,#tablink_about,#tablink_datenschutz').click(function (e) {
        var tabID = $(this).attr('id').split("_")[1];
        var panelID = '';

        if (tabID == 'text') {
            panelID = 'flip';
        } else if (tabID == 'emoticons') {
            panelID = 'emoticons';
        } else if (tabID == 'asciiart') {
            panelID = 'bigtext';
        } else if (tabID == 'about') {
            panelID = 'about';
        } else if (tabID == 'datenschutz') {
            panelID = 'datenschutz';
        }
        setPanel(panelID, true);
        return false;
    });

    // Switch Text-Panels
    $('aside ul li').click(function (e) {
        var panelID = $(this).attr('class').replace("active", "").split("_")[1];

        setPanel(panelID, true);
        return false;
    });

    // Focus textarea: rotate arrow
    $('.tab .content section textarea').focus(function () {
        var $parent = $(this).parents('section');
        var effect = $parent.attr('id').split("_")[2];
        var name = $(this).attr('name');

        if (name == "plain") {
            $('.direction .arrow', $parent).removeClass('up');
        } else if (name == "encoded") {
            $('.direction .arrow', $parent).addClass('up');

        }
    });


    // Toggle HTML Output
    $('.tab .content section a.htmlToggle').click(function () {
        var $this = $(this);
        var $parent = $this.parents('section');
        var effect = $parent.attr('id').split("_")[2];


        // Hide
        if ($this.hasClass('active')) {
            $this.text('Show HTML').removeClass('active');
            $('textarea[name=html]', $parent).removeClass('active').hide();

            // Show
        } else {
            $this.text('Hide HTML').addClass('active');

            var htmlText = luni.getHTML($('textarea[name=encoded]', $parent).val());
            $('textarea[name=html]', $parent).addClass('active').val(htmlText).show();
        }

        return false;

    });


    ///// Convert Text

    $('#tab_text .content section textarea').keyup(function () {
        var $parent = $(this).parents('section');
        var effect = $parent.attr('id').split("_")[2];
        var name = $(this).attr('name');
        var encodedText;

        if (name == "plain") {
            currentPlainText = $(this).val();
            encodedText = luni.tools[effect].encode(currentPlainText);
            $('textarea[name=encoded]', $parent).val(encodedText);

        } else if (name == "encoded") {
            encodedText = $(this).val();
            currentPlainText = luni.tools[effect].decode(encodedText);
            $('textarea[name=plain]', $parent).val(currentPlainText);
        }

        $textareaHTML = $('textarea[name=html]', $parent);
        if ($textareaHTML.hasClass('active')) {
            $textareaHTML.val(luni.getHTML(encodedText));
        }
    });


    // Creepify Tool

    // Set the padding of the second textarea, so that all diacritics are visible but
    // the textareas height doesn't change
    function setCreepifyPadding() {
        if ($.browser.mozilla || $.browser.opera) {
            return;
        }

        var setTop = $('#creepify_check_top').prop('checked'),
            setBottom = $('#creepify_check_bottom').prop('checked'),
            diacriticsNumber = $('#creepify_maxHeight').val(),
            $textarea = $('#text_panel_creepify textarea[name=encoded]');

        var padding = (5 + 5 * diacriticsNumber); // 5px initial padding + 5px for every diacritic

        if ((setTop && !setBottom) || (!setTop && setBottom)) {
            padding = Math.min(creepifyTextareaHeight - 5, padding);

            if (setTop && !setBottom) {
                $textarea.css({'padding-top': padding + "px", 'padding-bottom': '5px'});
            }
            if (!setTop && setBottom) {
                $textarea.css({'padding-top': "5px", 'padding-bottom': padding + 'px'});
            }

        } else if (setTop && setBottom) {
            padding = Math.min(creepifyTextareaHeight / 2, padding);
            $textarea.css({'padding-top': padding + "px", 'padding-bottom': padding + 'px'});

        } else if (!(setTop || setBottom)) {
            $textarea.css({'padding-top': "5px", 'padding-bottom': '5px'});
        }

    }

    // Init from object
    $('#creepify_check_top').prop('checked', luni.tools.creepify.options.top);
    $('#creepify_check_middle').prop('checked', luni.tools.creepify.options.middle);
    $('#creepify_check_bottom').prop('checked', luni.tools.creepify.options.bottom);
    $('#creepify_maxHeight').val(luni.tools.creepify.options.maxHeight);
    $('#creepify_randomization').val(luni.tools.creepify.options.randomization);

    var creepifyTextareaHeight = 180;//$('#text_panel_creepify textarea[name=encoded]').outerHeight();

    // set textarea padding if top/bottom is set, so the top/bottom diacritics are visible
    setCreepifyPadding();

    // Set options and refresh
    // Checkboxes
    $('#text_panel_creepify input[type=checkbox]').click(function () {
        var $parent = $(this).parents('section');
        var name = $(this).attr('id').split("_")[2];

        luni.tools.creepify.options[name] = $(this).prop('checked');

        $textarea = $('textarea[name=encoded]', $parent);

        // Change value or placeholder
        if (currentPlainText == '') {
            $textarea.attr('placeholder', luni.tools.creepify.encode($('textarea[name=plain]', $parent).attr('placeholder')));
        } else {
            var encodedText = luni.tools.creepify.encode(currentPlainText);
            $textarea.val(encodedText);

            $textareaHTML = $('textarea[name=html]', $parent);
            if ($textareaHTML.hasClass('active')) {
                $textareaHTML.val(luni.getHTML(encodedText));
            }
        }

        // more textarea padding-top/bottom to show the top/bottom diacritics
        if (name == "top" || name == "bottom") {
            setCreepifyPadding();
        }
    });


    // Range
    $('#text_panel_creepify input[type=range]').change(function () {
        var $parent = $(this).parents('section');
        var name = $(this).attr('id').split("_")[1];

        luni.tools.creepify.options[name] = $(this).val();
        $textarea = $('textarea[name=encoded]', $parent);

        // Change value or placeholder
        if (currentPlainText == '') {
            $textarea.attr('placeholder', luni.tools.creepify.encode($('textarea[name=plain]', $parent).attr('placeholder')));
        } else {

            var encodedText = luni.tools.creepify.encode(currentPlainText);
            $textarea.val(encodedText);

            $textareaHTML = $('textarea[name=html]', $parent);
            if ($textareaHTML.hasClass('active')) {
                $textareaHTML.val(luni.getHTML(encodedText));
            }
        }


        // more textarea padding if diacritics on top
        if (name == 'maxHeight') {
            setCreepifyPadding();
        }
    });


    ///////////////// Symbols
    $('.symbols .symbol textarea').click(function () {
        $(this)[0].focus();
        $(this)[0].select();
    });

    // Emoji Tabs
    $('.emoji_wrap .emoji_menu li').click(function () {
        var $this = $(this);
        var id = $this.attr('id').split("_")[2];

        if (!$this.hasClass('active')) {
            $('.emoji_wrap .emoji_menu li').removeClass('active');
            $('.emoji_wrap .emoji_box').hide();

            $this.addClass('active');
            $('#emoji_box_' + id).show();
        }
    });


    /*

     88888888ba   88                  888888888888
     88      "8b  ""                       88                             ,d
     88      ,8P                           88                             88
     88aaaaaa8P'  88   ,adPPYb,d8          88   ,adPPYba,  8b,     ,d8  MM88MMM
     88""""""8b,  88  a8"    `Y88          88  a8P_____88   `Y8, ,8P'     88
     88      `8b  88  8b       88          88  8PP"""""""     )888(       88
     88      a8P  88  "8a,   ,d88          88  "8b,   ,aa   ,d8" "8b,     88,
     88888888P"   88   `"YbbdP"Y8          88   `"Ybbd8"'  8P'     `Y8    "Y888
     aa,    ,88
     "Y8bbdP"
     */

    ////////////// Big Text

    var figlet = new Figlet();


    // Change font
    function changeFont(font) {
        FigletLoader.load(figlet, baseURL + "/fonts/" + font, function (data) {
            figlet.load(data);

            // update text
            updateBigText($('#asciiart_panel_bigtext textarea[name=plain]'));
        });
    }

    function updateBigText($plainEl) {
        if (figlet.isReady()) {
            var plainText = $plainEl.val();
            var style = $('#bigtext_comments').val();

            // use text or placeholder
            if (plainText.length > 0) {
                var bigText = addComments(figlet.getText(plainText), style);
                $('#asciiart_panel_bigtext .big').text(bigText).removeClass('placeholder');

            } else {
                var bigText = addComments(figlet.getText($plainEl.attr('placeholder')), style);
                $('#asciiart_panel_bigtext .big').text(bigText).addClass('placeholder');
            }
        }
    }

    function changeCommentStyle(style) {
        if (style !== '0') {
            if (figlet.isReady()) {
                var $plainEl = $('#asciiart_panel_bigtext textarea[name=plain]');
                var plainText = $plainEl.val();

                // use text or placeholder
                if (plainText.length > 0) {
                    var bigText = figlet.getText(plainText);
                    bigText = addComments(bigText, style);
                    $('#asciiart_panel_bigtext .big').text(bigText).removeClass('placeholder');

                } else {
                    var bigText = figlet.getText($plainEl.attr('placeholder'));
                    bigText = addComments(bigText, style);
                    $('#asciiart_panel_bigtext .big').text(bigText).addClass('placeholder');
                }

            }
        }
    }


    function addComments(text, style) {

        if (style === '0') {
            return text;
        }

        // single line comments
        var single = null;
        switch (style) {
            case 'cpp':
                single = '// ';
                break;
            case 'shell':
                single = '# ';
                break;
            case 'asm':
                single = '; ';
                break;
            case 'vb':
                single = "' ";
                break;
            case 'sql':
                single = '-- ';
                break;
            case 'tex':
                single = '% ';
                break;
            case 'basic':
                single = 'REM ';
                break;
            case 'apl':
                single = '⍝ ';
                break;
        }

        // multi line comments
        var multi = null;
        switch (style) {
            case 'c':
                multi = ["/*\n", "\n*/"];
                break;
            case 'html':
                multi = ["<!--\n", "\n-->"];
                break;
            case 'pythonmulti':
                multi = ["\" \" \" \n", "\n\" \" \""];
                break;
            case 'rubymulti':
                multi = ["=begin\n", "\n=end"];
                break;
            case 'perlmulti':
                multi = ["=begin\n", "\n=cut"];
                break;
            case 'powershellmulti':
                multi = ["<#\n", "\n#>"];
                break;
        }

        // brainfuck: everything that's not <>+-.,[] is considered a comment and ignored. So replace these characters with something similar
        if (style == 'brainfuck') {

            text = text.replace(/</g, "c")
                .replace(/>/g, "7")
                .replace(/\+/g, "x")
                .replace(/-/g, "=")
                .replace(/\./g, ":")
                .replace(/,/g, ";")
                .replace(/\[/g, "(")
                .replace(/\]/g, ")");

            return text;
        }


        // add single line comments to every line
        if (single !== null) {
            var lines = text.split("\n");
            var newText = '';
            for (var i = 0; i < lines.length; i++) {
                newText += single + lines[i] + "\n";
            }
            return newText;
        }

        // or add a multi line comment at the beginning and end
        if (multi !== null) {
            return multi[0] + text + multi[1];
        }

        return text;
    }

    // select new font
    $('#bigtext_font').change(function () {
        changeFont($(this).val());
    });


    // select new comment style
    $('#bigtext_comments').change(function () {
        updateBigText($('#asciiart_panel_bigtext textarea[name=plain]'));
    });


    // type something
    $('#asciiart_panel_bigtext textarea[name=plain]').keyup(function () {
        var $this = $(this);
        updateBigText($this);
    });

    // click on big text: select it
    $('#asciiart_panel_bigtext .big').on('click touchend', function () {
        $(this).select();
    });

    // use default font
    $('#bigtext_font').trigger('change');


    ///////// Text to Image
    ImageToASCII.setSize(1);
    ImageToASCII.setZoom(1);


    // Load new image
    $('#asciiImage').change(function () {
        var file = $(this).get(0).files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var dataURL = e.target.result;


            ImageToASCII.loadImage(dataURL, function (success, message) {
                if (success) {
                    var ascii = ImageToASCII.getASCII();
                    $('#asciiart_panel_imagetotext .ascii').text(ascii);
                }
            });
        };
        reader.readAsDataURL(file);
    });

    // Drag & Drop
    function showDragOverlay() {
        $('#site').addClass('blur');
        $('.dragOverlay').css('visibility', 'visible');
    }

    function hideDragOverlay() {
        $('#site').removeClass('blur');
        $('.dragOverlay').css('visibility', 'hidden');
    }

    if (Modernizr.draganddrop) {
        var dragCounter = 0;
        $(document).on('dragenter',function (e) {

            if (dragCounter++ === 0) {
                if (currentPanelID === 'imagetotext') {
                    showDragOverlay();
                }
            }

            e.preventDefault();
            e.stopPropagation();

        }).on('dragover',function (e) {
                e.preventDefault();
                e.stopPropagation();

            }).on('dragleave',function (e) {
                if (--dragCounter === 0) {
                    if (currentPanelID === 'imagetotext') {
                        hideDragOverlay();
                    }

                }
                e.preventDefault();
                e.stopPropagation();

            }).on('drop', function (e) {
                e.preventDefault();
                e.stopPropagation();

                dragCounter = 0;

                if (currentPanelID === 'imagetotext') {
                    hideDragOverlay();

                    if (e.originalEvent.dataTransfer) {
                        var files = e.originalEvent.dataTransfer.files;

                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var dataURL = e.target.result;


                            ImageToASCII.loadImage(dataURL, function (success, message) {
                                if (success) {
                                    var ascii = ImageToASCII.getASCII();
                                    $('#asciiart_panel_imagetotext .ascii').text(ascii);
                                }
                            });
                        };
                        reader.readAsDataURL(files[0]); // just use the first file
                    }

                }

                return false;

            });

    } else {
        $('.dragMessage').hide();
    }


    // Change Options for size and zoom
    $('#asciiImageOptionSize').on('input change', function () {
        var size = parseInt($(this).val());

        // ImageToASCII.setSize() sets the blockSize and makes the resulting ascii smaller (bigger pixel block per ascii character)
        // ImageToASCII.setZoom() blows the result up (zoom*zoom ascii characters per block)
        // instead of two sliders for size and zoom, we have just one for convenience.
        if (size < 0) {
            ImageToASCII.setSize(-size);
            ImageToASCII.setZoom(1);
        } else {
            ImageToASCII.setSize(1);
            ImageToASCII.setZoom(size + 2);
        }

        if (ImageToASCII.imageLoaded) {
            $('#asciiart_panel_imagetotext .ascii').text(ImageToASCII.getASCII());
        }
    });

    // click on big text: select it
    $('#asciiart_panel_imagetotext .ascii').click(function () {
        $(this).select();
    });


    ///////////// Cowsay ////////////////////

    // Change cowfile
    $('#cowsay_cowfile').change(function () {
        var $this = $(this);

        var url = baseURL + "/cows/" + $this.val();
        Cowsay.loadCowfile(url, {success: function () {
            updateCowASCII();
        }});


    });

    function updateCowASCII() {
        var $plainEl = $('#asciiart_panel_cowsay textarea[name=plain]');
        var plainText = $plainEl.val();
        var style = $('#cowsay_comments').val();

        // use text or placeholder
        if (plainText.length > 0) {
            var cowText = addComments(Cowsay.getASCII(plainText), style);
            $('#asciiart_panel_cowsay .ascii').text(cowText).removeClass('placeholder');

        } else {
            var cowText = addComments(Cowsay.getASCII($plainEl.attr('placeholder')), style);
            $('#asciiart_panel_cowsay .ascii').text(cowText).addClass('placeholder');
        }
    }

    $('#asciiart_panel_cowsay textarea[name=plain]').keyup(function () {
        updateCowASCII();
    });

    // change disposition
    $('#cowsay_disposition').change(function () {
        Cowsay.setDisposition($(this).val());
        updateCowASCII();
    });

    // say or think
    $('.cowsay_saythink_wrap input').click(function () {
        var saythink = $(this).val();
        Cowsay.settings.connection = saythink;
        Cowsay.settings.bubble = saythink;
        updateCowASCII();
    });

    // speech bubble width
    $('#cowsay_text_width').on('input change', function () {
        Cowsay.settings.maxTextWidth = parseInt($(this).val());
        updateCowASCII();
    });

    // code comments
    $('#cowsay_comments').change(function () {
        updateCowASCII();
    });

    // click on cow ascii: select it
    $('#asciiart_panel_cowsay .ascii').click(function () {
        $(this).select();
    });


    updateCowASCII();


    // Non Webkit-browsers (sans IE) get a special message
    if (!$.browser.webkit && !$.browser.msie) {
        $('.notWebKit').css('display', 'block');
    }


    // Show content after everything is loaded
    $('#loading').hide();
    $('#body').show();

});