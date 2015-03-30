var Absurd=function(){function b(a){return a?a.replace(/^\s+|\s+$/g,""):""}var d={api:{},helpers:{},plugins:{},processors:{css:{plugins:{}},html:{plugins:{},helpers:{}},component:{plugins:{}}}},e=function(a){return a.indexOf("css/CSS.js")>0||"/../CSS.js"==a?d.processors.css.CSS:a.indexOf("html/HTML.js")>0?d.processors.html.HTML:a.indexOf("component/Component.js")>0?d.processors.component.Component:"js-beautify"==a?{html:function(a){return a}}:"./helpers/PropAnalyzer"==a?d.processors.html.helpers.PropAnalyzer:"../../helpers/TransformUppercase"==a?d.helpers.TransformUppercase:"./helpers/TemplateEngine"==a||"../html/helpers/TemplateEngine"==a?d.processors.html.helpers.TemplateEngine:"../helpers/Extend"==a?d.helpers.Extend:"../helpers/Clone"==a?d.helpers.Clone:"../helpers/Prefixes"==a||"/../../../helpers/Prefixes"==a?d.helpers.Prefixes:a==f+"/../../../../"?Absurd:"../helpers/CSSParse"==a?d.helpers.CSSParse:function(){}},f="",g=function(a,b){!function c(){a.length>0&&a.shift().apply(b||{},[c].concat(Array.prototype.slice.call(arguments,0)))}()},h=function(a){var b={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],body:[0,"",""],_default:[1,"<div>","</div>"]};b.optgroup=b.option,b.tbody=b.tfoot=b.colgroup=b.caption=b.thead,b.th=b.td;var c=/<\s*\w.*?>/g.exec(a),d=document.createElement("div");if(null!=c){var e=c[0].replace(/</g,"").replace(/>/g,"").split(" ")[0];if("body"===e.toLowerCase()){var f=(document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null),document.createElement("body"));d.innerHTML=a.replace(/<body/g,"<div").replace(/<\/body>/g,"</div>");var g=d.firstChild.attributes;f.innerHTML=a;for(var h=0;h<g.length;h++)f.setAttribute(g[h].name,g[h].value);return f}var d,i=b[e]||b._default;a=i[1]+a+i[2],d.innerHTML=a;for(var j=i[0]+1;j--;)d=d.lastChild}else d.innerHTML=a,d=d.lastChild;return d},i=function(a,b,c){return a.addEventListener?(a.addEventListener(b,c,!1),!0):a.attachEvent?a.attachEvent("on"+b,c):void 0},j=function(a){for(var b,c=a.childNodes,d=c.length,e=0,f=/^\s*$/;d>e;e++)b=c[e],3==b.nodeType&&f.test(b.nodeValue)&&(a.removeChild(b),e--,d--);return a},k=function(b,c,d){for(var e=document.createElement(b),f=0;f<c.length,a=c[f];f++)e.setAttribute(a.name,a.value);return e.innerHTML=d,e},l=function(a,b){return b=b===!1?document:b||this.el||document,b.querySelector(a)},m=function(a,b){return b=b===!1?document:b||this.el||document,b.querySelectorAll(a)},n=function(a,b){return b=b||this.el,b&&b.currentStyle?b.currentStyle[a]:window.getComputedStyle?document.defaultView.getComputedStyle(b,null).getPropertyValue(a):null},q=function(a,b){if(b=b||this.el,b.classList)b.classList.add(a);else{var c=b.className;c.indexOf(a)<0&&(""==c?b.className=a:b.className+=" "+a)}return this},r=function(a,b){if(b=b||this.el,b.classList)b.classList.remove(a);else{for(var c=b.className.split(" "),d=[],e=0;e<c.length;e++)c[e]!=a&&d.push(c[e]);b.className=d.join(" ")}return this},s=function(a,b,c){c=c||this.el;for(var d=c.className.split(" "),e=!1,f=0;f<d.length;f++)d[f]==a&&(e=!0,d[f]=b);return e?(c.className=d.join(" "),this):q(b,c)},t=function(a,b){if(b=b||this.el,b.classList)b.classList.toggle(a);else{for(var c=b.className.split(" "),d=-1,e=c.length;e--;)c[e]===a&&(d=e);d>=0?c.splice(d,1):c.push(a),b.className=c.join(" ")}return this},u=function(a,b,c){return b instanceof Array&&(c=b,b=this),b||(b=this),function(){a.apply(b,(c||[]).concat(Array.prototype.slice.call(arguments,0)))}},w=function(a,b,c,e){var f=d.helpers.Extend({__name:a},e),o=d.helpers.Extend,p=[];f.listeners=p,f.on=function(a,b,c){return p[a]||(p[a]=[]),p[a].push({callback:b,scope:c}),this},f.off=function(a,b){return p[a]?(b||(p[a]=[]),this):this},f.dispatch=function(a,b,d){if(!b||"object"!=typeof b||b instanceof Array||(b.target=this),p[a])for(var e=0;e<p[a].length;e++){var f=p[a][e].callback;f.apply(d||p[a][e].scope||{},[b])}return this[a]&&"function"==typeof this[a]&&this[a](b),c&&c.dispatch(a,b),this};var v={};f.set=function(a,b){return v[a]=b,this},f.get=function(a){return v[a]};var w=!1;f.__handleCSS=function(c){return this.css?b.flush().morph("dynamic-css").add(this.css).compile(function(b,d){if(w)w.raw!==d&&(w.raw=d,w.element.innerHTML=d);else{var e=k("style",[{name:"id",value:a+"-css"},{name:"type",value:"text/css"}],d);(l("head")||l("body")).appendChild(e),w={raw:d,element:e}}c()},this):c(),this},f.applyCSS=function(a,b,c){if(this.html&&"string"==typeof this.html&&!b){var d={};d[this.html]=a,a=d}return this.css=a,c||this.populate(),this};var x=!1;f.__mergeDOMElements=function(a,b){if(j(a),j(b),"undefined"!=typeof a&&"undefined"!=typeof b&&!a.isEqualNode(b)){if(a.nodeName!==b.nodeName)return void(a.parentNode&&a.parentNode.replaceChild(b,a));if(a.nodeValue!==b.nodeValue&&(a.nodeValue=b.nodeValue),a.attributes){for(var c,d,e=a.attributes,g=b.attributes,h={},i=0;i<e.length,c=e[i];i++){for(var k=0;k<g.length,d=g[k];k++)c.name===d.name&&(a.setAttribute(c.name,d.value),h[c.name]=!0,"value"===c.name&&(a.value=d.value));h[c.name]||a.removeAttribute(c.name)}for(var i=0;i<g.length,d=g[i];i++)h[d.name]||(a.setAttribute(d.name,d.value),"value"===d.name&&(a.value=d.value))}var l=[];if(a.childNodes.length>=b.childNodes.length)for(var i=0;i<a.childNodes.length;i++)b.childNodes[i]||b.appendChild(document.createTextNode("")),l.push([a.childNodes[i],b.childNodes[i]]);else for(var i=0;i<b.childNodes.length;i++)a.appendChild(document.createTextNode("")),l.push([a.childNodes[i],b.childNodes[i]]);for(var i=0;i<l.length;i++)f.__mergeDOMElements(l[i][0],l[i][1])}},f.__handleHTML=function(a){var c=this,d=function(){b.flush().morph("html").add(x).compile(function(b,d){c.el?f.__mergeDOMElements(c.el,h(d)):c.el=h(d),a()},c)};if(this.html)if("string"==typeof this.html){if(!this.el){var e=l(this.html);e&&(this.el=e,x={"":this.el.outerHTML.replace(/&lt;/g,"<").replace(/&gt;/g,">")})}d()}else"object"==typeof this.html?(x=o({},this.html),d()):a();else a();return this},f.applyHTML=function(a,b){return this.html=a,b||this.populate(),this};var y=!1;f.__append=function(a){return!y&&this.el&&this.get("parent")&&(y=!0,this.get("parent").appendChild(this.el)),a(),this};var z={events:{}};f.__handleEvents=function(a){if(this.el){var b=this,c=function(a){var c=a.getAttribute("data-absurd-event"),d=function(c){if(c=c.split(":"),c.length>=2){var d=c[0],e=c[1];c.splice(0,2);var f=c;(!z.events[d]||z.events[d].indexOf(a)<0)&&(z.events[d]||(z.events[d]=[]),z.events[d].push(a),i(a,d,function(a){if("function"==typeof b[e]){var c=b[e];c.apply(b,[a].concat(f))}}))}};c=c.split(/, ?/g);for(var e=0;e<c.length;e++)d(c[e])};this.el.hasAttribute&&this.el.hasAttribute("data-absurd-event")&&c(this.el);for(var d=this.el.querySelectorAll?this.el.querySelectorAll("[data-absurd-event]"):[],e=0;e<d.length;e++)c(d[e])}return a(),this},f.__getAnimAndTransEndEventName=function(a){if(a){var b,c={animation:["animationend","transitionend"],OAnimation:["oAnimationEnd","oTransitionEnd"],MozAnimation:["animationend","transitionend"],WebkitAnimation:["webkitAnimationEnd","webkitTransitionEnd"]};for(b in c)if(void 0!==a.style[b])return c[b]}},f.onAnimationEnd=function(a,b){1==arguments.length&&(b=a,a=this.el);var c=this,d=f.__getAnimAndTransEndEventName(a);return d?void this.addEventListener(a,d[0],function(a){b.apply(c,[a])}):void b.apply(this,[{error:"Animations not supported."}])},f.onTransitionEnd=function(a,b){1==arguments.length&&(b=a,a=this.el);var c=this,d=f.__getAnimAndTransEndEventName(a);return d?void this.addEventListener(a,d[1],function(a){b.apply(c,[a])}):void b.apply(this,[{error:"Animations not supported."}])};var A={funcs:{},index:0};f.__handleAsyncFunctions=function(a){if(this.el){var b=[];if(this.el.hasAttribute&&this.el.hasAttribute("data-absurd-async"))b.push(this.el);else for(var c=this.el.querySelectorAll?this.el.querySelectorAll("[data-absurd-async]"):[],d=0;d<c.length;d++)b.push(c[d]);if(0===b.length)a();else{var e=this;!function f(){if(0===b.length)a();else{var c=b.shift(),d=c.getAttribute("data-absurd-async"),g=function(a){"string"==typeof a?c.parentNode.replaceChild(h(a),c):c.parentNode.replaceChild(a,c),f()};"function"==typeof e[A.funcs[d].name]?e[A.funcs[d].name].apply(e,[g].concat(A.funcs[d].args)):"function"==typeof A.funcs[d].func&&A.funcs[d].func.apply(e,[g].concat(A.funcs[d].args))}}()}}else a();return this},f.async=function(){var a=Array.prototype.slice.call(arguments,0),b=a.shift(),c="_"+A.index++;return A.funcs[c]={args:a,name:b},'<script data-absurd-async="'+c+'"></script>'},f.child=function(){var a=Array.prototype.slice.call(arguments,0),b=this.get("children"),c=b&&b[a.shift()],d="_"+A.index++;return A.funcs[d]={args:a,func:function(a){c.populate({callback:function(b){a(b.html.element)}})}},'<script data-absurd-async="'+d+'"></script>'},f.wire=function(a){return b.components.events.on(a,this[a]||function(){},this),this};var B=!1;return f.populate=function(a){if(!B){B=!0;var b=function(a){return a(),this};return g([a&&a.css===!1?b:f.__handleCSS,a&&a.html===!1?b:f.__handleHTML,f.__append,f.__handleEvents,f.__handleAsyncFunctions,function(){B=!1,A={funcs:{},index:0};var b={css:w,html:{element:this.el}};this.dispatch("populated",b),a&&"function"==typeof a.callback&&a.callback(b)}],this),this}},f.str2DOMElement=h,f.addEventListener=i,f.queue=g,f.qs=l,f.qsa=m,f.getStyle=n,f.addClass=q,f.removeClass=r,f.replaceClass=s,f.bind=u,f.toggleClass=t,f.compileHTML=function(a,c,d){b.flush().morph("html").add(a).compile(c,d)},f.compileCSS=function(a,c,d){b.flush().add(a).compile(c,d)},f.delay=function(a,b,c){var d=this;setTimeout(function(){b.apply(d,c)},a)},f},x=function(a){a.di.register("is",{appended:function(a){return"undefined"==typeof a&&(a=this.host.html),l(a)?!0:!1},hidden:function(a){return a=a||this.host.el,null===a.offsetParent}}),a.di.register("router",{routes:[],mode:null,root:"/",getFragment:function(){var a="";if("history"===this.mode){if(!location)return"";a=this.clearSlashes(decodeURI(location.pathname+location.search)),a=a.replace(/\?(.*)$/,""),a="/"!=this.root?a.replace(this.root,""):a}else{if(!window)return"";var b=window.location.href.match(/#(.*)$/);a=b?b[1]:""}return this.clearSlashes(a)},clearSlashes:function(a){return a.toString().replace(/\/$/,"").replace(/^\//,"")},add:function(a,b){return"function"==typeof a&&(b=a,a=""),this.routes.push({re:a,handler:b}),this},remove:function(a){for(var b,c=0;c<this.routes.length,b=this.routes[c];c++)if(b.handler===a||b.re===a)return this.routes.splice(c,1),this;return this},flush:function(){return this.routes=[],this.mode=null,this.root="/",this},config:function(a){return this.mode=a&&a.mode&&"history"==a.mode&&history.pushState?"history":"hash",this.root=a&&a.root?"/"+this.clearSlashes(a.root)+"/":"/",this},listen:function(a){var b=this,c=b.getFragment(),d=function(){c!==b.getFragment()&&(c=b.getFragment(),b.check(c))};return clearInterval(this.interval),this.interval=setInterval(d,a||50),this},check:function(a){for(var b=a||this.getFragment(),c=0;c<this.routes.length;c++){var d=b.match(this.routes[c].re);if(d)return d.shift(),this.routes[c].handler.apply(this.host||{},d),this}return this},navigate:function(a){return a=a?a:"","history"===this.mode?history.pushState(null,null,this.root+this.clearSlashes(a)):(window.location.href.match(/#(.*)$/),window.location.href=window.location.href.replace(/#(.*)$/,"")+"#"+a),this}}),a.di.register("ajax",{request:function(a){"string"==typeof a&&(a={url:a}),a.url=a.url||"",a.method=a.method||"get",a.data=a.data||{};var b=function(a,b){var c,d=[];for(var e in a)d.push(e+"="+encodeURIComponent(a[e]));return c=d.join("&"),""!=c?b?b.indexOf("?")<0?"?"+c:"&"+c:c:""},c={host:this.host||{},process:function(a){var c=this;return this.xhr=null,window.ActiveXObject?this.xhr=new ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest&&(this.xhr=new XMLHttpRequest),this.xhr&&(this.xhr.onreadystatechange=function(){if(4==c.xhr.readyState&&200==c.xhr.status){var b=c.xhr.responseText;a.json===!0&&"undefined"!=typeof JSON&&(b=JSON.parse(b)),c.doneCallback&&c.doneCallback.apply(c.host,[b,c.xhr])}else 4==c.xhr.readyState&&c.failCallback&&c.failCallback.apply(c.host,[c.xhr]);c.alwaysCallback&&c.alwaysCallback.apply(c.host,[c.xhr])},"get"==a.method?this.xhr.open("GET",a.url+b(a.data,a.url),!0):(this.xhr.open(a.method,a.url,!0),this.setHeaders({"X-Requested-With":"XMLHttpRequest","Content-type":"application/x-www-form-urlencoded"})),a.headers&&"object"==typeof a.headers&&this.setHeaders(a.headers),setTimeout(function(){"get"==a.method?c.xhr.send():c.xhr.send(b(a.data))},20)),this},done:function(a){return this.doneCallback=a,this},fail:function(a){return this.failCallback=a,this},always:function(a){return this.alwaysCallback=a,this},setHeaders:function(a){for(var b in a)this.xhr&&this.xhr.setRequestHeader(b,a[b])}};return c.process(a)}});var b=function(a,c){var d=b.prototype.host,e={el:null};switch(typeof a){case"undefined":e.el=d.el;break;case"string":c=c&&"string"==typeof c?l.apply(d,[c]):c,e.el=l(a,c||d.el||document);break;case"object":if("undefined"==typeof a.nodeName){var f=function(a,b){b=b||this;for(var c in b)"undefined"!=typeof b[c].el?b[c]=b[c].val(a):"object"==typeof b[c]&&(b[c]=f(a,b[c]));return delete b.val,b},g={val:f};for(var h in a)g[h]=b.apply(this,[a[h]]);return g}e.el=a}return e.val=function(a){if(!this.el)return null;var b=!!a,d=function(a){return b?(this.el.value=a,e):this.el.value};switch(this.el.nodeName.toLowerCase()){case"input":var f=this.el.getAttribute("type");if("radio"!=f&&"checkbox"!=f)return d.apply(this,[a]);for(var g=m('[name="'+this.el.getAttribute("name")+'"]',c),h=[],i=0;i<g.length;i++)b&&g[i].checked&&g[i].value!==a?g[i].removeAttribute("checked"):b&&g[i].value===a?(g[i].setAttribute("checked","checked"),g[i].checked="checked"):g[i].checked&&h.push(g[i].value);if(!b)return"radio"==f?h[0]:h;break;case"textarea":return d.apply(this,[a]);case"select":if(!b)return this.el.value;for(var j=m("option",this.el),i=0;i<j.length;i++)j[i].getAttribute("value")===a?this.el.selectedIndex=i:j[i].removeAttribute("selected");break;default:if(!b)return"undefined"!=typeof this.el.textContent?this.el.textContent:"undefined"!=typeof this.el.innerText?typeof this.el.innerText:this.el.innerHTML;this.el.innerHTML=a}return b?e:null},e.dom=function(a,c){return b(a,c||e.el)},e};a.di.register("dom",b);var c=function(b,d,e){var f=c.prototype.host,g=!(!window||!window.matchMedia||e);if(g){var h=window.matchMedia(b);d.apply(f,[h.matches,h.media]),h.addListener(function(a){d.apply(f,[a.matches,a.media])})}else{var i=".match-media-"+a.components.numOfComponents,j={},k={};j[i]={display:"block"},j[i]["@media "+b]={display:"none"},k["span"+i]="",a.component(i+"-component",{css:j,html:k,intervaliTime:30,status:"",loop:function(){var a=this;if(this.el){var b=this.getStyle("display");this.status!=b&&(this.status=b,d.apply(f,["none"===b]))}setTimeout(function(){a.loop()},this.intervaliTime)},constructor:["dom",function(a){var b=this;this.set("parent",a("body").el).populate(),setTimeout(function(){b.loop()},this.intervaliTime)}]})()}};a.di.register("mq",c)},y=function(){return function(a){var b=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);return a},e={defaultProcessor:d.processors.css.CSS()},f={},g={},i={},j={};e.getRules=function(a){return"undefined"==typeof a?f:("undefined"==typeof f[a]&&(f[a]=[]),f[a])},e.getPlugins=function(){return i},e.getStorage=function(){return g},e.flush=function(){return f={},g=[],j={},e.defaultProcessor=d.processors.css.CSS(),e},e["import"]=function(){return e.callHooks("import",arguments)?e:e},e.handlecss=function(a,b){var c=e.getPlugins();if(a&&"stylesheet"===a.type&&a.stylesheet&&a.stylesheet.rules)for(var d=a.stylesheet.rules,f=0;rule=d[f];f++)switch(rule.type){case"rule":e.handlecssrule(rule);break;case"import":e.handlecssimport(rule,b);break;default:c[rule.type]&&c[rule.type](e,rule)}return e},e.handlecssimport=function(){return e},e.handlecssrule=function(a,c){var d={},f={};if(a.declarations&&a.declarations.length>0){for(var g=0;decl=a.declarations[g];g++)"declaration"===decl.type&&(f[decl.property]=decl.value);if(a.selectors&&a.selectors.length>0)for(var g=0;selector=a.selectors[g];g++)d[selector]=b({},f);e.add(d,c)}return e},e.addHook=function(a,b){j[a]||(j[a]=[]);for(var d=!1,e=0;c=j[a][e];e++)c===b&&(d=!0);d===!1?j[a].push(b):null},e.callHooks=function(a,b){if(j[a])for(var d=0;c=j[a][d];d++)if(c.apply(e,b)===!0)return!0;return!1},e.numOfAddedRules=0,e.components=function(a){var b=d.helpers.Extend,c=d.helpers.Clone,e={},f=[],g=b({},w()),h={};return function(a){window&&(window.addEventListener?window.addEventListener("load",a):window.attachEvent&&window.attachEvent("onload",a))}(function(){h.broadcast("ready")}),h={numOfComponents:0,events:g,register:function(d,h){return this.numOfComponents+=1,e[d]=function(){var e=b({},w(d,a,g,c(h)));return a.di.resolveObject(e),f.push(e),"function"==typeof e.constructor&&e.constructor.apply(e,Array.prototype.slice.call(arguments,0)),e}},get:function(a){if(e[a])return e[a];throw new Error("There is no component with name '"+a+"'.")},remove:function(a){return e[a]?(delete e[a],!0):!1},list:function(){var a=[];for(var b in e)a.push(b);return a},flush:function(){return e={},f=[],this},broadcast:function(a,b){for(var c=0;c<f.length,instance=f[c];c++)"function"==typeof instance[a]&&instance[a](b);return this}}}(e),e.component=function(a){return function(b,c){return"undefined"==typeof c?a.components.get(b):a.components.register(b,c)}}(e),e.di=d.DI(e),x(e),e.compile=function(a,c){if(e.callHooks("compile",arguments))return e;var d={combineSelectors:!0,minify:!1,processor:e.defaultProcessor,keepCamelCase:!1,api:e};c=b(d,c||{});var f=c.processor(e.getRules(),a||function(){},c);return e.flush(),f};for(var k in d.api)"compile"!==k&&(e[k]=d.api[k](e),e[k]=function(a){return function(){var b=d.api[a](e);return e.callHooks(a,arguments)?e:b.apply(e,arguments)}}(k));for(var l in d.processors.css.plugins)e.plugin(l,d.processors.css.plugins[l]());return"function"==typeof a&&a(e),"undefined"!=typeof Organic&&Organic.init(e),e.utils={str2DOMElement:h},e}};d.DI=function(){var a={dependencies:{},register:function(a,b){return this.dependencies[a]=b,this},resolve:function(){var a,b,c,d=this,e=!1;"string"==typeof arguments[0]?(a=arguments[1],b=arguments[0].replace(/ /g,"").split(","),c=arguments[2]||{}):(a=arguments[0],b=a.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g,"").split(","),c=arguments[1]||{});for(var f=0;f<b.length;f++)"undefined"!=typeof this.dependencies[b[f]]&&(e=!0);return e?function(){for(var e=[],f=Array.prototype.slice.call(arguments,0),g=0;g<b.length;g++){var h=b[g];if("undefined"!=typeof d.dependencies[h]){var i=d.dependencies[h];"function"==typeof i?i.prototype.host=c:"object"==typeof i&&(i.host=c),e.push(i)}else e.push(f.shift())}return a.apply(c,e)}:a},resolveObject:function(a){if("object"==typeof a)for(var b in a)"function"==typeof a[b]?a[b]=this.resolve(a[b],a):a[b]instanceof Array&&2==a[b].length&&"string"==typeof a[b][0]&&"function"==typeof a[b][1]&&(a[b]=this.resolve(a[b][0],a[b][1],a));return this},flush:function(){return this.dependencies={},this}};return a},d.api.add=function(a){var b=e("../helpers/Extend"),c=e("../helpers/Prefixes"),d=[],f={combineSelectors:!0,preventCombining:["@font-face"]},g=function(b,d,e,f,g){var i=c.nonPrefixProp(d),j=a.getPlugins()[i.prop];if("undefined"!=typeof j){var k=j(a,e,i.prefix);return k&&h(b,k,f,g),!0}return!1},h=function(a,b,e,i){if(e=e||"mainstream",null!==b&&"undefined"!=typeof b&&b!==!1)if(i||a||(a=""),"undefined"!=typeof b.classify&&b.classify===!0&&(b="undefined"!=typeof b.toJSON?b.toJSON():b.toString()),/, ?/g.test(a)&&f.combineSelectors)for(var j=a.replace(/, /g,",").split(","),k=0;k<j.length,p=j[k];k++)h(p,b,e,i);else if(!g(null,a,b,e,i))if("undefined"==typeof b.length||"object"!=typeof b){var l={},m=a,n={},o={};for(var q in b){b[q]&&"undefined"!=typeof b[q].classify&&b[q].classify===!0&&(b[q]="undefined"!=typeof b[q].toJSON?b[q].toJSON():b[q].toString());var r=typeof b[q];"object"!==r&&"function"!==r&&b[q]!==!1&&b[q]!==!0?g(a,q,b[q],e,i)===!1&&(m=0===m.indexOf("^")?m.substr(1,m.length-1)+("undefined"!=typeof i?" "+i:""):"undefined"!=typeof i?i+" "+a:a,l[q]=b[q],c.addPrefixes(q,l)):"object"===r?n[q]=b[q]:"function"===r&&(o[q]=b[q])}d.push({selector:m,props:l,stylesheet:e});for(var q in n)if(":"===q.charAt(0))h(a+q,n[q],e,i);else if(/&/g.test(q))if(/, ?/g.test(q)&&f.combineSelectors)for(var j=q.replace(/, /g,",").split(","),k=0;k<j.length,p=j[k];k++)p.indexOf("&")>=0?h(p.replace(/&/g,a),n[q],e,i):h(p,n[q],e,"undefined"!=typeof i?i+" "+a:a);else h(q.replace(/&/g,a),n[q],e,i);else 0===q.indexOf("@media")||0===q.indexOf("@supports")?h(a,n[q],q,i):0===a.indexOf("@media")||0===q.indexOf("@supports")?h(q,n[q],a,i):0===a.indexOf("^")?h(a.substr(1,a.length-1)+("undefined"!=typeof i?" "+i:"")+" "+q,n[q],e):g(a,q,n[q],e,i)===!1&&h(q,n[q],e,(i?i+" ":"")+a);for(var q in o){var s={};s[q]=o[q](),h(a,s,e,i)}}else for(var k=0;k<b.length;k++)q=b[k],q&&h(a,q,e,i)},i=function(c,e,g){if(a.jsonify)return b(a.getRules(e||"mainstream"),c),a;try{d=[],a.numOfAddedRules+=1,"object"==typeof e&&"undefined"==typeof g&&(f={combineSelectors:"undefined"!=typeof e.combineSelectors?e.combineSelectors:f.combineSelectors,preventCombining:f.preventCombining.concat(e.preventCombining||[])},e=null),"undefined"!=typeof g&&(f={combineSelectors:g.combineSelectors||f.combineSelectors,preventCombining:f.preventCombining.concat(g.preventCombining||[])});var i,j=a.defaultProcessor.type;for(var k in c)h(k,c[k],e||"mainstream");for(var l=0;l<d.length;l++){var e=d[l].stylesheet,k=d[l].selector,m=d[l].props,n=a.getRules(e),o=f&&f.preventCombining?"|"+f.preventCombining.join("|"):"",i=o.indexOf("|"+k.replace(/^%.*?%/,""))>=0?"~~"+a.numOfAddedRules+"~~":"",p=n[i+k]||{};for(var q in m){var r=m[q];q=i+q,"object"!=typeof r&&(p[q]="css"==j?"+"===r.toString().charAt(0)?p&&p[q]?p[q]+", "+r.substr(1,r.length-1):r.substr(1,r.length-1):">"===r.toString().charAt(0)?p&&p[q]?p[q]+" "+r.substr(1,r.length-1):r.substr(1,r.length-1):r:r)}n[i+k]=p}return a}catch(s){throw new Error("Error adding: "+JSON.stringify({rules:c,error:s.toString()}))}};return i};var z=e("../helpers/Extend");d.api.compile=function(a){return function(){for(var b=null,c=function(){},d=null,e=0;e<arguments.length;e++)switch(typeof arguments[e]){case"function":c=arguments[e];break;case"string":b=arguments[e];break;case"object":d=arguments[e]}var f={combineSelectors:!0,minify:!1,keepCamelCase:!1,processor:a.defaultProcessor,api:a};return d=z(f,d||{}),d.processor(a.getRules(),function(d,e){if(null!=b)try{var f=e;"object"==typeof f&&(f=JSON.stringify(f)),C.writeFile(b,f,function(a){c(a,e)})}catch(d){c.apply({},arguments)}else c.apply({},arguments);a.flush()},d)}},d.api.compileFile=function(a){return a.compile};var A=function(a,b){a=String(a).replace(/[^0-9a-f]/gi,""),a.length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),b=b||0;var c,d,e="#";for(d=0;3>d;d++)c=parseInt(a.substr(2*d,2),16),c=Math.round(Math.min(Math.max(0,c+c*b),255)).toString(16),e+=("00"+c).substr(c.length);return e};d.api.darken=function(){return function(a,b){return A(a,-(b/100))}},d.api.define=function(a){return function(b,c){return a.getStorage().__defined||(a.getStorage().__defined={}),a.getStorage().__defined[b]=c,a}},d.api.hook=function(a){return function(b,c){return a.addHook(b,c),a}},d.api.importCSS=function(a){var b=e("../helpers/CSSParse");return function(c){try{var d=b(c);a.handlecss(d,"")}catch(e){console.log("Error in the CSS:  '"+c+"'",e,e.stack)}return a}};var A=function(a,b){a=String(a).replace(/[^0-9a-f]/gi,""),a.length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),b=b||0;var c,d,e="#";for(d=0;3>d;d++)c=parseInt(a.substr(2*d,2),16),c=Math.round(Math.min(Math.max(0,c+c*b),255)).toString(16),e+=("00"+c).substr(c.length);return e};d.api.lighten=function(){return function(a,b){return A(a,b/100)}};var B={html:function(a){a.defaultProcessor=e(f+"/../processors/html/HTML.js")(),a.hook("add",function(b,c){return a.getRules(c||"mainstream").push(b),!0})},component:function(a){a.defaultProcessor=e(f+"/../processors/component/Component.js")(),a.hook("add",function(b){b instanceof Array||(b=[b]);for(var d=0;d<b.length,c=b[d];d++)a.getRules("mainstream").push(c);return!0})},jsonify:function(a){a.jsonify=!0},"dynamic-css":function(a){a.dynamicCSS=!0}};d.api.morph=function(a){return function(b){return B[b]&&(a.flush(),B[b](a)),a}},d.api.plugin=function(a){var b=function(b,c){return a.getPlugins()[b]=c,a};return b},d.api.raw=function(a){return function(b){var c={},d={},e="____raw_"+a.numOfAddedRules;return d[e]=b,c[e]=d,a.add(c),a}};{var C=e("fs");e("path")}d.api.rawImport=function(a){var b=function(b){var c=C.readFileSync(b,{encoding:"utf8"});a.raw(c)};return function(c){var d,e,f;if("string"==typeof c)b(c);else for(e=0,f=c.length;f>e;e++)d=c[e],b(d);return a}},d.api.register=function(a){return function(b,c){return a[b]=c,a}},d.api.storage=function(a){var b=a.getStorage(),c=function(d,e){if("undefined"!=typeof e)b[d]=e;else{if("object"!=typeof d){if(b[d])return b[d];throw new Error("There is no data in the storage associated with '"+d+"'")}for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&c(f,d[f])}return a};return c};var D=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;d.helpers.CSSParse=function(a,c){function d(a){var b=a.match(/\n/g);b&&(F+=b.length);var c=a.lastIndexOf("\n");G=~c?a.length-c:G+a.length}function e(){var a={line:F,column:G};return c.position?function(b){return b.position=new f(a),n(),b}:g}function f(a){this.start=a,this.end={line:F,column:G},this.source=c.source}function g(a){return n(),a}function h(b){var d=new Error(b+" near line "+F+":"+G);throw d.filename=c.source,d.line=F,d.column=G,d.source=a,d}function i(){return{type:"stylesheet",stylesheet:{rules:l()}}}function j(){return m(/^{\s*/)}function k(){return m(/^}/)}function l(){var b,c=[];for(n(),o(c);a.length&&"}"!=a.charAt(0)&&(b=C()||E());)c.push(b),o(c);return c}function m(b){var c=b.exec(a);if(c){var e=c[0];return d(e),a=a.slice(e.length),c}}function n(){m(/^\s*/)}function o(a){var b;for(a=a||[];b=p();)a.push(b);return a}function p(){var b=e();if("/"==a.charAt(0)&&"*"==a.charAt(1)){for(var c=2;""!=a.charAt(c)&&("*"!=a.charAt(c)||"/"!=a.charAt(c+1));)++c;if(c+=2,""===a.charAt(c-1))return h("End of comment missing");var f=a.slice(2,c-2);return G+=2,d(f),a=a.slice(c),G+=2,b({type:"comment",comment:f})}}function q(){var a=m(/^([^{]+)/);if(a)return b(a[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").split(/\s*,\s*/)}function r(){var a=e(),c=m(/^(\*?[-#\/\*\w]+(\[[0-9a-z_-]+\])?)\s*/);if(c){if(c=b(c[0]),!m(/^:\s*/))return h("property missing ':'");var d=m(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);if(!d)return h("property missing value");var f=a({type:"declaration",property:c.replace(D,""),value:b(d[0]).replace(D,"")});return m(/^[;\s]*/),f}}function s(){var a=[];if(!j())return h("missing '{'");o(a);for(var b;b=r();)a.push(b),o(a);return k()?a:h("missing '}'")}function t(){for(var a,b=[],c=e();a=m(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)b.push(a[1]),m(/^,\s*/);return b.length?c({type:"keyframe",values:b,declarations:s()}):void 0}function u(){var a=e(),b=m(/^@([-\w]+)?keyframes */);if(b){var c=b[1],b=m(/^([-\w]+)\s*/);if(!b)return h("@keyframes missing name");var d=b[1];if(!j())return h("@keyframes missing '{'");for(var f,g=o();f=t();)g.push(f),g=g.concat(o());return k()?a({type:"keyframes",name:d,vendor:c,keyframes:g}):h("@keyframes missing '}'")}}function v(){var a=e(),c=m(/^@supports *([^{]+)/);if(c){var d=b(c[1]);if(!j())return h("@supports missing '{'");var f=o().concat(l());return k()?a({type:"supports",supports:d,rules:f}):h("@supports missing '}'")}}function w(){var a=e(),b=m(/^@host */);if(b){if(!j())return h("@host missing '{'");var c=o().concat(l());return k()?a({type:"host",rules:c}):h("@host missing '}'")}}function x(){var a=e(),c=m(/^@media *([^{]+)/);if(c){var d=b(c[1]);if(!j())return h("@media missing '{'");var f=o().concat(l());return k()?a({type:"media",media:d,rules:f}):h("@media missing '}'")}}function y(){var a=e(),b=m(/^@page */);if(b){var c=q()||[];if(!j())return h("@page missing '{'");for(var d,f=o();d=r();)f.push(d),f=f.concat(o());return k()?a({type:"page",selectors:c,declarations:f}):h("@page missing '}'")}}function z(){var a=e(),c=m(/^@([-\w]+)?document *([^{]+)/);if(c){var d=b(c[1]),f=b(c[2]);if(!j())return h("@document missing '{'");var g=o().concat(l());return k()?a({type:"document",document:f,vendor:d,rules:g}):h("@document missing '}'")}}function A(){var a=e(),b=m(/^@font-face */);if(b){if(!j())return h("@font-face missing '{'");for(var c,d=o();c=r();)d.push(c),d=d.concat(o());return k()?a({type:"font-face",declarations:d}):h("@font-face missing '}'")}}function B(a){var b=new RegExp("^@"+a+" *([^;\\n]+);");return function(){var c=e(),d=m(b);if(d){var f={type:a};return f[a]=d[1].trim(),c(f)}}}function C(){return"@"==a[0]?u()||x()||v()||H()||I()||J()||z()||y()||w()||A():void 0}function E(){var a=e(),b=q();return b?(o(),a({type:"rule",selectors:b,declarations:s()})):h("selector missing")}c=c||{},c.position=c.position===!1?!1:!0;var F=1,G=1;f.prototype.content=a;var H=B("import"),I=B("charset"),J=B("namespace");return i()},d.helpers.Clone=function X(a){if(!a)return a;for(var b,c=[Number,String,Boolean],d=0;d<c.length;d++){var e=c[d];a instanceof e&&(b=e(a))}if("undefined"==typeof b)if("[object Array]"===Object.prototype.toString.call(a))b=[],a.forEach(function(a,c){b[c]=X(a)});else if("object"==typeof a)if(a.nodeType&&"function"==typeof a.cloneNode)var b=a.cloneNode(!0);else if(a.prototype)b=a;else if(a instanceof Date)b=new Date(a);else{b={};for(var d in a)b[d]=X(a[d])}else b=a;return b},d.helpers.ColorLuminance=function(a,b){a=String(a).replace(/[^0-9a-f]/gi,""),a.length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),b=b||0;var c,d,e="#";for(d=0;3>d;d++)c=parseInt(a.substr(2*d,2),16),c=Math.round(Math.min(Math.max(0,c+c*b),255)).toString(16),e+=("00"+c).substr(c.length);return e},d.helpers.Extend=function(){for(var a=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);return a},b=arguments[0],c=1;c<arguments.length;c++)b=a(b,arguments[c]);return b};var E=function(a){var b,c;return(c=a.match(/^\-(w|m|s|o)+\-/)||"-"===a.charAt(0))&&!a.match(/^\-(webkit|moz|ms)+\-/)?null!==c&&c[0]?(b={prefix:c[0].replace(/-/g,"")},b.prop=a.replace(c[0],"")):(b={prefix:""},b.prop=a.substr(1,a.length)):b={prefix:!1,prop:a},b};d.helpers.Prefixes={addPrefixes:function(a,b){var c=a,d=E(a),e=b[a];d.prefix!==!1&&(delete b[c],b[d.prop]=e,(""===d.prefix||d.prefix.indexOf("w")>=0)&&(b["-webkit-"+d.prop]=e),(""===d.prefix||d.prefix.indexOf("m")>=0)&&(b["-moz-"+d.prop]=e),(""===d.prefix||d.prefix.indexOf("s")>=0)&&(b["-ms-"+d.prop]=e),(""===d.prefix||d.prefix.indexOf("o")>=0)&&(b["-o-"+d.prop]=e))},nonPrefixProp:function(a){var b=E(a);return b.prefix!==!1&&(b.prefix=""==b.prefix?"-":"-"+b.prefix+"-"),b}},d.helpers.RequireUncached=function(a){return delete e.cache[e.resolve(a)],e(a)},d.helpers.TransformUppercase=function(a){for(var b="",d=0;c=a.charAt(d);d++)b+=c===c.toUpperCase()&&c.toLowerCase()!==c.toUpperCase()?"-"+c.toLowerCase():c;return b};var F=function(a,b,d){var g="",h="",i=[],j=d.api;cssPreprocessor=e(f+"/../css/CSS.js")(),htmlPreprocessor=e(f+"/../html/HTML.js")();for(var k=function(a){for(var b=0;b<i.length,component=i[b];b++)"function"==typeof component&&(component=component()),j.add(component.css?component.css:{});cssPreprocessor(j.getRules(),function(b,c){g+=c,a(b)},d)},l=function(b){var c=0,e=null,f=function(){if(c>a.length-1)return void b(e);var g=a[c];"function"==typeof g&&(g=g()),j.morph("html").add(g.html?g.html:{}),htmlPreprocessor(j.getRules(),function(a,b){h+=b,c+=1,e=a,f()
},d)};f()},m=function(a){for(var b in a)if("_include"===b)if(a[b]instanceof Array)for(var d=0;d<a[b].length,c=a[b][d];d++)"function"==typeof c&&(c=c()),i.push(c),m(c);else"function"==typeof a[b]&&(a[b]=a[b]()),i.push(a[b]),m(a[b]);else"object"==typeof a[b]&&m(a[b])},n=0;n<a.length,c=a[n];n++)"function"==typeof c&&(c=c()),i.push(c),m(c);j.flush(),k(function(a){j.morph("html"),l(function(c){b(a||c?{error:{css:a,html:c}}:null,g,h)})})};d.processors.component.Component=function(){var a=function(a,b,c){F(a.mainstream,b,c)};return a.type="component",a};var G="\n",H={combineSelectors:!0,minify:!1,keepCamelCase:!1},I=e("../../helpers/TransformUppercase"),z=e("../../helpers/Extend"),J=function(a,b,c){var d="";c=c||["","  "];for(var e in a)if(0===e.indexOf("____raw"))d+=a[e][e]+G;else{var f=c[0]+e.replace(/~~(.+)~~/,"").replace(/^%.*?%/,"")+" {"+G,g="";for(var h in a[e]){var i=a[e][h];""===i&&(i='""'),h=h.replace(/~~(.+)~~/,"").replace(/^%.*?%/,""),g+=b&&b.keepCamelCase===!0?c[1]+h+": "+i+";"+G:c[1]+I(h)+": "+i+";"+G}""!=g&&(f+=g,f+=c[0]+"}"+G,d+=f)}return d},K=function(a){var b={};for(var c in a){var d=a[c];if("mainstream"==c)for(var e in d){b[e]={};for(var f in d[e])b[e][f]=d[e][f]}else if(c.indexOf("@media")>=0){b[c]={};for(var e in d){b[c][e]={};for(var f in d[e])b[c][e][f]=d[e][f]}}}return b},L=function(a,b){var c=[],d={},b=[].concat(b||[]);b.splice(0,0,""),b=b.join("|");for(var e in a){var f=a[e];for(var g in f)c.push({selector:e,prop:g,value:f[g],combine:b.indexOf("|"+g)<0&&e.indexOf("@font-face")<0})}for(var h=0;h<c.length;h++)if(c[h].combine===!0&&c[h].selector!==!1)for(var i=h+1;i<c.length;i++)c[h].prop===c[i].prop&&c[h].value===c[i].value&&(c[h].selector+=", "+c[i].selector.replace(/~~(.+)~~/,"").replace(/^%.*?%/,""),c[i].selector=!1);for(var h=0;h<c.length;h++)c[h].selector!==!1&&(d[c[h].selector]||(d[c[h].selector]={}),d[c[h].selector][c[h].prop]=c[h].value);return d},M=function(a){return a=a.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,""),a=a.replace(/ {2,}/g," "),a=a.replace(/ ([{:}]) /g,"$1"),a=a.replace(/([;,]) /g,"$1"),a=a.replace(/ !/g,"!")},N=function(a,b){if(b&&b.api&&b.api.getStorage().__defined){var c=b.api.getStorage().__defined;for(var d in c){var e=new RegExp("<%( )?"+d+"( )?%>","g");a="function"!=typeof c[d]?a.replace(e,c[d]):a.replace(e,c[d]())}}return a};d.processors.css.CSS=function(){var a=function(a,b,c){if(c=c||H,c.api&&c.api.jsonify){var d=K(a,c);return b(null,d),d}var f="";for(var g in a){var h=a[g];h=c.combineSelectors?L(h,c.preventCombining):h,f+="mainstream"===g?J(h,c):g+" {"+G+J(h,c,["  ","    "])+"}"+G}return f=N(f,c),c&&c.api&&c.api.dynamicCSS&&(f=e("../html/helpers/TemplateEngine")(f,c)),c.minify?(f=M(f),b&&b(null,f)):b&&b(null,f),f};return a.type="css",a},d.processors.css.plugins.charset=function(){return function(a,b){"string"==typeof b?a.raw('@charset: "'+b+'";'):"object"==typeof b&&(b=b.charset.replace(/:/g,"").replace(/'/g,"").replace(/"/g,"").replace(/ /g,""),a.raw('@charset: "'+b+'";'))}},d.processors.css.plugins.document=function(){return function(a,b){if("object"==typeof b){var c="";if(c+="@"+b.vendor+"document",c+=" "+b.document,b.rules&&b.rules.length)for(var d=0;rule=b.rules[d];d++)a.handlecssrule(rule,c);else"undefined"!=typeof b.styles&&a.add(b.styles,c)}}},d.processors.css.plugins.keyframes=function(){return function(a,b){e(f+"/../CSS.js")(),e(f+"/../../../helpers/Prefixes");if("object"==typeof b){var c;if("undefined"!=typeof b.frames)c=b.frames;else if("undefined"!=typeof b.keyframes){c={};for(var d=0;rule=b.keyframes[d];d++)if("keyframe"===rule.type)for(var g=c[rule.values]={},h=0;declaration=rule.declarations[h];h++)"declaration"===declaration.type&&(g[declaration.property]=declaration.value)}if(a.jsonify){var i={};i.keyframes={name:b.name,frames:c},a.add(i)}else{var j=e(f+"/../../../../")();j.add(c).compile(function(c,d){var e="@keyframes "+b.name+" {\n";e+=d,e+="}",e=e+"\n"+e.replace("@keyframes","@-webkit-keyframes"),a.raw(e)},{combineSelectors:!1})}}}},d.processors.css.plugins.media=function(){return function(a,b){var c=e(f+"/../CSS.js")();if("object"==typeof b){for(var d="@media "+b.media+" {\n",g={},h={},i=0;rule=b.rules[i];i++){var j,k;if(rule.selectors&&(j=g[rule.selectors.toString()]={},k=h[rule.selectors.toString()]={},"rule"===rule.type))for(var l=0;declaration=rule.declarations[l];l++)"declaration"===declaration.type&&(j[declaration.property]=declaration.value,k[declaration.property]=declaration.value)}d+=c({mainstream:g}),d+="}",a.jsonify?a.add(h,"@media "+b.media):a.raw(d)}}},d.processors.css.plugins.namespace=function(){return function(a,b){"string"==typeof b?a.raw('@namespace: "'+b+'";'):"object"==typeof b&&(b=b.namespace.replace(/: /g,"").replace(/'/g,"").replace(/"/g,"").replace(/ /g,"").replace(/:h/g,"h"),a.raw('@namespace: "'+b+'";'))}},d.processors.css.plugins.page=function(){return function(a,b){if("object"==typeof b){var c="";c+=b.selectors.length>0?"@page "+b.selectors.join(", ")+" {\n":"@page {\n";for(var d=0;declaration=b.declarations[d];d++)"declaration"==declaration.type&&(c+="  "+declaration.property+": "+declaration.value+";\n");c+="}",a.raw(c)}}},d.processors.css.plugins.supports=function(){return function(a,b){var c=e(f+"/../CSS.js")();if("object"==typeof b){for(var d="@supports "+b.supports+" {\n",g={},h=0;rule=b.rules[h];h++){var i=g[rule.selectors.toString()]={};if("rule"===rule.type)for(var j=0;declaration=rule.declarations[j];j++)"declaration"===declaration.type&&(i[declaration.property]=declaration.value)}d+=c({mainstream:g}),d+="}",a.raw(d)}}};var O=null,G="\n",H={},P=e("js-beautify").html,Q=e("../../helpers/TransformUppercase"),R={},S=function(a){var b="";for(var c in O)if(c==a)for(var d=O[c].length,e=0;d>e;e++)b+=U("",O[c][e]);return b},T=function(a,b){return b&&b.keepCamelCase===!0?a:Q(a,b)},U=function(a,b){var c="",d="",f="",g=e("./helpers/PropAnalyzer")(a);if(a=g.tag,""!=g.attrs&&(d+=" "+g.attrs),"string"==typeof b||null===b)return V(a,d,b);var h=function(a){""!=f&&(f+=G),f+=a},i=function(a){var b=[];for(var c in a)b.push(c.replace(/^\$/,"")+":"+a[c]);b.length>0&&(/data-absurd-event/g.test(d)?d.replace(/data-absurd-event="(.*)"/,'data-absurd-event="$1,'+b.join(",")+'"'):d+=' data-absurd-event="'+b.join(",")+'"')};for(var j in b){var k=b[j];if(/^\$/.test(j))i(b);else switch(j){case"_attrs":for(var l in k)d+="function"==typeof k[l]?" "+T(l,R)+'="'+k[l]()+'"':" "+T(l,R)+'="'+k[l]+'"';break;case"_":h(k);break;case"_tpl":if("string"==typeof k)h(S(k));else if(k instanceof Array){for(var m="",n=0;tpl=k[n];n++)m+=S(tpl),n<k.length-1&&(m+=G);h(m)}break;case"_include":var m="",p=function(a){"function"==typeof a&&(a=a()),a.css&&a.html&&(a=a.html),m+=U("",a)};if(k instanceof Array)for(var n=0;n<k.length,o=k[n];n++)p(o);else"object"==typeof k&&p(k);h(m);break;default:switch(typeof k){case"string":h(U(j,k));break;case"object":if(k&&k.length&&k.length>0){for(var m="",n=0;v=k[n];n++)m+=U("","function"==typeof v?v():v),n<k.length-1&&(m+=G);h(U(j,m))}else h(U(j,k));break;case"function":h(U(j,k()))}}}return c+=""!=a?V(a,d,f):f},V=function(a,b,c){var d="";return""==a&&""==b&&""!=c?c:(a=""==a?"div":a,d+=null!==c?"<"+T(a,R)+b+">"+G+c+G+"</"+T(a,R)+">":"<"+T(a,R)+b+"/>")},W=function(a){return a=e("./helpers/TemplateEngine")(a.replace(/[\r\t\n]/g,""),R),R.minify?a:P(a,{indent_size:R.indentSize||4})};return d.processors.html.HTML=function(){var a=function(a,b,c){O=a,b=b||function(){},c=R=c||H;var d=W(S("mainstream"));return b(null,d),d};return a.type="html",a},d.processors.html.helpers.PropAnalyzer=function(a){var b={tag:"",attrs:""},d=(a.length,""),e=!1,f=[],g="",h=!1,i="",j=!1;if(/(#|\.|\[|\])/gi.test(a)===!1)return{tag:a,attrs:""};for(var k=0;k<a.length,c=a[k];k++)"["!==c||j?j?"]"!=c?i+=c:(j=!1,k-=1):"."!==c||e?e?"."!=c&&"#"!=c&&"["!=c&&"]"!=c?d+=c:(f.push(d),e=!1,d="",k-=1):"#"!==c||h?h?"."!=c&&"#"!=c&&"["!=c&&"]"!=c?g+=c:(h=!1,k-=1):"."!=c&&"#"!=c&&"["!=c&&"]"!=c&&(b.tag+=c):h=!0:e=!0:j=!0;""!=d&&f.push(d);for(var l="",k=0;cls=f[k];k++)l+=""===l?cls:" "+cls;return b.attrs+=""!=l?'class="'+l+'"':"",""!=g&&(b.attrs+=(""!=b.attrs?" ":"")+'id="'+g+'"'),""===b.tag&&""!=b.attrs&&(b.tag="div"),""!=i&&(b.attrs+=(""!=b.attrs?" ":"")+i),b},d.processors.html.helpers.TemplateEngine=function(a,b){for(var c,d=/<%(.+?)%>/g,e=/(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,f="with(obj) { var r=[];\n",g=0,h=function(a,b){return f+=b?a.match(e)?a+"\n":"r.push("+a+");\n":""!=a?'r.push("'+a.replace(/"/g,'\\"')+'");\n':"",h};match=d.exec(a);)h(a.slice(g,match.index))(match[1],!0),g=match.index+match[0].length;h(a.substr(g,a.length-g)),f=(f+'return r.join(""); }').replace(/[\r\t\n]/g,"");try{c=new Function("obj",f).apply(b,[b])}catch(i){console.error("'"+i.message+"'"," in \n\nCode:\n",f,"\n")}return c},y()}(window);
// Rivets.js + Sightglass.js
// version: 0.8.1
// author: Michael Richards
// license: MIT
(function(){function t(t,i,s,h){return new e(t,i,s,h)}function e(t,e,s,h){this.options=h||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=s,this.objectPath=[],this.parse(),i(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function i(t){return"object"==typeof t&&null!==t}function s(t){throw new Error("[sightglass] "+t)}t.adapters={},e.tokenize=function(t,e,i){var s,h,a=[],o={i:i,path:""};for(s=0;s<t.length;s++)h=t.charAt(s),~e.indexOf(h)?(a.push(o),o={i:h,path:""}):o.path+=h;return a.push(o),a},e.prototype.parse=function(){var i,h,a=this.interfaces();a.length||s("Must define at least one adapter interface."),~a.indexOf(this.keypath[0])?(i=this.keypath[0],h=this.keypath.substr(1)):("undefined"==typeof(i=this.options.root||t.root)&&s("Must define a default root adapter."),h=this.keypath),this.tokens=e.tokenize(h,a,i),this.key=this.tokens.pop()},e.prototype.realize=function(){var t,e=this.obj,s=!1;return this.tokens.forEach(function(h,a){i(e)?("undefined"!=typeof this.objectPath[a]?e!==(t=this.objectPath[a])&&(this.set(!1,h,t,this.update.bind(this)),this.set(!0,h,e,this.update.bind(this)),this.objectPath[a]=e):(this.set(!0,h,e,this.update.bind(this)),this.objectPath[a]=e),e=this.get(h,e)):(s===!1&&(s=a),(t=this.objectPath[a])&&this.set(!1,h,t,this.update.bind(this)))},this),s!==!1&&this.objectPath.splice(s),e},e.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(i(this.target)&&this.set(!1,this.key,this.target,this.callback),i(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,this.value()!==e&&this.callback())},e.prototype.value=function(){return i(this.target)?this.get(this.key,this.target):void 0},e.prototype.setValue=function(t){i(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},e.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},e.prototype.set=function(t,e,i,s){var h=t?"observe":"unobserve";this.adapter(e)[h](i,e.path,s)},e.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},e.prototype.adapter=function(e){return this.options.adapters[e.i]||t.adapters[e.i]},e.prototype.unobserve=function(){var t;this.tokens.forEach(function(e,i){(t=this.objectPath[i])&&this.set(!1,e,t,this.update.bind(this))},this),i(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=t}):this.sightglass=t}).call(this);
(function(){var t,e,i,n,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].slice,o={}.hasOwnProperty,u=function(t,e){function i(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},l=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};t={options:["prefix","templateDelimiters","rootInterface","preloadData","handler"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(e){var i,n,r,s;null==e&&(e={});for(r in e)if(s=e[r],"binders"===r||"components"===r||"formatters"===r||"adapters"===r)for(n in s)i=s[n],t[r][n]=i;else t["public"][r]=s},bind:function(e,i,n){var r;return null==i&&(i={}),null==n&&(n={}),r=new t.View(e,i,n),r.bind(),r},init:function(e,i,n){var r,s;return null==n&&(n={}),null==i&&(i=document.createElement("div")),e=t["public"].components[e],i.innerHTML=e.template.call(this,i),r=e.initialize.call(this,i,n),s=new t.View(i,r),s.bind(),s}}},window.jQuery||window.$?(n="on"in jQuery.prototype?["on","off"]:["bind","unbind"],e=n[0],i=n[1],t.Util={bindEvent:function(t,i,n){return jQuery(t)[e](i,n)},unbindEvent:function(t,e,n){return jQuery(t)[i](e,n)},getInputValue:function(t){var e;return e=jQuery(t),"checkbox"===e.attr("type")?e.is(":checked"):e.val()}}):t.Util={bindEvent:function(){return"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)}}(),unbindEvent:function(){return"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)}}(),getInputValue:function(t){var e,i,n,r;if("checkbox"===t.type)return t.checked;if("select-multiple"===t.type){for(r=[],i=0,n=t.length;n>i;i++)e=t[i],e.selected&&r.push(e.value);return r}return t.value}},t.TypeParser=function(){function t(){}return t.types={primitive:0,keypath:1},t.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t?{type:this.types.primitive,value:void 0}:isNaN(Number(t))===!1?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},t}(),t.TextTemplateParser=function(){function t(){}return t.types={text:0,binding:1},t.parse=function(t,e){var i,n,r,s,o,u,l;for(u=[],s=t.length,i=0,n=0;s>n;){if(i=t.indexOf(e[0],n),0>i){u.push({type:this.types.text,value:t.slice(n)});break}if(i>0&&i>n&&u.push({type:this.types.text,value:t.slice(n,i)}),n=i+e[0].length,i=t.indexOf(e[1],n),0>i){o=t.slice(n-e[1].length),r=u[u.length-1],(null!=r?r.type:void 0)===this.types.text?r.value+=o:u.push({type:this.types.text,value:o});break}l=t.slice(n,i).trim(),u.push({type:this.types.binding,value:l}),n=i+e[1].length}return u},t}(),t.View=function(){function e(e,i,n){var s,o,u,l,h,a,p,d,c,f,b,v,y;for(this.els=e,this.models=i,null==n&&(n={}),this.update=r(this.update,this),this.publish=r(this.publish,this),this.sync=r(this.sync,this),this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.select=r(this.select,this),this.traverse=r(this.traverse,this),this.build=r(this.build,this),this.buildBinding=r(this.buildBinding,this),this.bindingRegExp=r(this.bindingRegExp,this),this.options=r(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),c=t.extensions,h=0,p=c.length;p>h;h++){if(o=c[h],this[o]={},n[o]){f=n[o];for(s in f)u=f[s],this[o][s]=u}b=t["public"][o];for(s in b)u=b[s],null==(l=this[o])[s]&&(l[s]=u)}for(v=t.options,a=0,d=v.length;d>a;a++)o=v[a],this[o]=null!=(y=n[o])?y:t["public"][o];this.build()}return e.prototype.options=function(){var e,i,n,r,s;for(i={},s=t.extensions.concat(t.options),n=0,r=s.length;r>n;n++)e=s[n],i[e]=this[e];return i},e.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},e.prototype.buildBinding=function(e,i,n,r){var s,o,u,l,h,a,p;return h={},p=function(){var t,e,i,n;for(i=r.split("|"),n=[],t=0,e=i.length;e>t;t++)a=i[t],n.push(a.trim());return n}(),s=function(){var t,e,i,n;for(i=p.shift().split("<"),n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(o.trim());return n}(),l=s.shift(),h.formatters=p,(u=s.shift())&&(h.dependencies=u.split(/\s+/)),this.bindings.push(new t[e](this,i,n,l,h))},e.prototype.build=function(){var e,i,n,r,s;for(this.bindings=[],i=function(e){return function(n){var r,s,o,u,l,h,a,p,d,c,f,b,v,y;if(3===n.nodeType){if(l=t.TextTemplateParser,(o=e.templateDelimiters)&&(p=l.parse(n.data,o)).length&&(1!==p.length||p[0].type!==l.types.text)){for(d=0,f=p.length;f>d;d++)a=p[d],h=document.createTextNode(a.value),n.parentNode.insertBefore(h,n),1===a.type&&e.buildBinding("TextBinding",h,null,a.value);n.parentNode.removeChild(n)}}else 1===n.nodeType&&(r=e.traverse(n));if(!r){for(v=function(){var t,e,i,r;for(i=n.childNodes,r=[],t=0,e=i.length;e>t;t++)u=i[t],r.push(u);return r}(),y=[],c=0,b=v.length;b>c;c++)s=v[c],y.push(i(s));return y}}}(this),s=this.els,n=0,r=s.length;r>n;n++)e=s[n],i(e);this.bindings.sort(function(t,e){var i,n;return((null!=(i=e.binder)?i.priority:void 0)||0)-((null!=(n=t.binder)?n.priority:void 0)||0)})},e.prototype.traverse=function(e){var i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,y;for(s=this.bindingRegExp(),o="SCRIPT"===e.nodeName||"STYLE"===e.nodeName,b=e.attributes,p=0,c=b.length;c>p;p++)if(i=b[p],s.test(i.name)){if(h=i.name.replace(s,""),!(r=this.binders[h])){v=this.binders;for(u in v)a=v[u],"*"!==u&&-1!==u.indexOf("*")&&(l=new RegExp("^"+u.replace(/\*/g,".+")+"$"),l.test(h)&&(r=a))}r||(r=this.binders["*"]),r.block&&(o=!0,n=[i])}for(y=n||e.attributes,d=0,f=y.length;f>d;d++)i=y[d],s.test(i.name)&&(h=i.name.replace(s,""),this.buildBinding("Binding",e,h,i.value));return o||(h=e.nodeName.toLowerCase(),this.components[h]&&!e._bound&&(this.bindings.push(new t.ComponentBinding(this,e,h)),o=!0)),o},e.prototype.select=function(t){var e,i,n,r,s;for(r=this.bindings,s=[],i=0,n=r.length;n>i;i++)e=r[i],t(e)&&s.push(e);return s},e.prototype.bind=function(){var t,e,i,n,r;for(n=this.bindings,r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push(t.bind());return r},e.prototype.unbind=function(){var t,e,i,n,r;for(n=this.bindings,r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push(t.unbind());return r},e.prototype.sync=function(){var t,e,i,n,r;for(n=this.bindings,r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push("function"==typeof t.sync?t.sync():void 0);return r},e.prototype.publish=function(){var t,e,i,n,r;for(n=this.select(function(t){var e;return null!=(e=t.binder)?e.publishes:void 0}),r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push(t.publish());return r},e.prototype.update=function(t){var e,i,n,r,s,o,u;null==t&&(t={});for(i in t)n=t[i],this.models[i]=n;for(o=this.bindings,u=[],r=0,s=o.length;s>r;r++)e=o[r],u.push("function"==typeof e.update?e.update(t):void 0);return u},e}(),t.Binding=function(){function e(t,e,i,n,s){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=s?s:{},this.getValue=r(this.getValue,this),this.update=r(this.update,this),this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.publish=r(this.publish,this),this.sync=r(this.sync,this),this.set=r(this.set,this),this.eventHandler=r(this.eventHandler,this),this.formattedValue=r(this.formattedValue,this),this.parseTarget=r(this.parseTarget,this),this.observe=r(this.observe,this),this.setBinder=r(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return e.prototype.setBinder=function(){var t,e,i,n;if(!(this.binder=this.view.binders[this.type])){n=this.view.binders;for(t in n)i=n[t],"*"!==t&&-1!==t.indexOf("*")&&(e=new RegExp("^"+t.replace(/\*/g,".+")+"$"),e.test(this.type)&&(this.binder=i,this.args=new RegExp("^"+t.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},e.prototype.observe=function(e,i,n){return t.sightglass(e,i,n,{root:this.view.rootInterface,adapters:this.view.adapters})},e.prototype.parseTarget=function(){var e;return e=t.TypeParser.parse(this.keypath),0===e.type?this.value=e.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},e.prototype.formattedValue=function(e){var i,n,r,o,u,l,h,a,p,d,c,f,b,v;for(v=this.formatters,o=d=0,f=v.length;f>d;o=++d){for(u=v[o],r=u.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),l=r.shift(),u=this.view.formatters[l],r=function(){var e,i,s;for(s=[],e=0,i=r.length;i>e;e++)n=r[e],s.push(t.TypeParser.parse(n));return s}(),a=[],i=c=0,b=r.length;b>c;i=++c)n=r[i],a.push(0===n.type?n.value:((p=this.formatterObservers)[o]||(p[o]={}),(h=this.formatterObservers[o][i])?void 0:(h=this.observe(this.view.models,n.value,this.sync),this.formatterObservers[o][i]=h),h.value()));(null!=u?u.read:void 0)instanceof Function?e=u.read.apply(u,[e].concat(s.call(a))):u instanceof Function&&(e=u.apply(null,[e].concat(s.call(a))))}return e},e.prototype.eventHandler=function(t){var e,i;return i=(e=this).view.handler,function(n){return i.call(t,this,n,e)}},e.prototype.set=function(t){var e;return t=t instanceof Function&&!this.binder["function"]?this.formattedValue(t.call(this.model)):this.formattedValue(t),null!=(e=this.binder.routine)?e.call(this,this.el,t):void 0},e.prototype.sync=function(){var t,e;return this.set(function(){var i,n,r,s,o,u,l;if(this.observer){if(this.model!==this.observer.target){for(o=this.dependencies,i=0,r=o.length;r>i;i++)e=o[i],e.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(u=this.options.dependencies)?u.length:void 0))for(l=this.options.dependencies,n=0,s=l.length;s>n;n++)t=l[n],e=this.observe(this.model,t,this.sync),this.dependencies.push(e)}return this.observer.value()}return this.value}.call(this))},e.prototype.publish=function(){var t,e,i,n,r,o,u,l,h;if(this.observer){for(n=this.getValue(this.el),u=this.formatters.slice(0).reverse(),r=0,o=u.length;o>r;r++)e=u[r],t=e.split(/\s+/),i=t.shift(),(null!=(l=this.view.formatters[i])?l.publish:void 0)&&(n=(h=this.view.formatters[i]).publish.apply(h,[n].concat(s.call(t))));return this.observer.setValue(n)}},e.prototype.bind=function(){var t,e,i,n,r,s,o;if(this.parseTarget(),null!=(r=this.binder.bind)&&r.call(this,this.el),null!=this.model&&(null!=(s=this.options.dependencies)?s.length:void 0))for(o=this.options.dependencies,i=0,n=o.length;n>i;i++)t=o[i],e=this.observe(this.model,t,this.sync),this.dependencies.push(e);return this.view.preloadData?this.sync():void 0},e.prototype.unbind=function(){var t,e,i,n,r,s,o,u,l,h;for(null!=(o=this.binder.unbind)&&o.call(this,this.el),null!=(u=this.observer)&&u.unobserve(),l=this.dependencies,r=0,s=l.length;s>r;r++)n=l[r],n.unobserve();this.dependencies=[],h=this.formatterObservers;for(i in h){e=h[i];for(t in e)n=e[t],n.unobserve()}return this.formatterObservers={}},e.prototype.update=function(t){var e,i;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(i=this.binder.update)?i.call(this,t):void 0},e.prototype.getValue=function(e){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,e):t.Util.getInputValue(e)},e}(),t.ComponentBinding=function(e){function i(t,e,i){var n,s,o,u,h,a,p;for(this.view=t,this.el=e,this.type=i,this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.locals=r(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},s=t.bindingRegExp(),a=this.el.attributes||[],u=0,h=a.length;h>u;u++)n=a[u],s.test(n.name)||(o=this.camelCase(n.name),l.call(null!=(p=this.component["static"])?p:[],o)>=0?this["static"][o]=n.value:this.observers[o]=n.value)}return u(i,e),i.prototype.sync=function(){},i.prototype.update=function(){},i.prototype.publish=function(){},i.prototype.locals=function(){var t,e,i,n,r,s;i={},r=this["static"];for(t in r)n=r[t],i[t]=n;s=this.observers;for(t in s)e=s[t],i[t]=e.value();return i},i.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},i.prototype.bind=function(){var e,i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,y,g,m,w,k;if(!this.bound){f=this.observers;for(i in f)n=f[i],this.observers[i]=this.observe(this.view.models,n,function(t){return function(e){return function(){return t.componentView.models[e]=t.observers[e].value()}}}(this).call(this,i));this.bound=!0}if(null!=this.componentView)return this.componentView.bind();for(this.el.innerHTML=this.component.template.call(this),u=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,o={},b=t.extensions,a=0,d=b.length;d>a;a++){if(s=b[a],o[s]={},this.component[s]){v=this.component[s];for(e in v)l=v[e],o[s][e]=l}y=this.view[s];for(e in y)l=y[e],null==(h=o[s])[e]&&(h[e]=l)}for(g=t.options,p=0,c=g.length;c>p;p++)s=g[p],o[s]=null!=(m=this.component[s])?m:this.view[s];this.componentView=new t.View(this.el,u,o),this.componentView.bind(),w=this.observers,k=[];for(i in w)r=w[i],k.push(this.upstreamObservers[i]=this.observe(this.componentView.models,i,function(t){return function(e,i){return function(){return i.setValue(t.componentView.models[e])}}}(this).call(this,i,r)));return k},i.prototype.unbind=function(){var t,e,i,n,r;i=this.upstreamObservers;for(t in i)e=i[t],e.unobserve();n=this.observers;for(t in n)e=n[t],e.unobserve();return null!=(r=this.componentView)?r.unbind.call(this):void 0},i}(t.Binding),t.TextBinding=function(t){function e(t,e,i,n,s){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=s?s:{},this.sync=r(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return u(e,t),e.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},e.prototype.sync=function(){return e.__super__.sync.apply(this,arguments)},e}(t.Binding),t["public"].binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},t["public"].binders.html=function(t,e){return t.innerHTML=null!=e?e:""},t["public"].binders.show=function(t,e){return t.style.display=e?"":"none"},t["public"].binders.hide=function(t,e){return t.style.display=e?"none":""},t["public"].binders.enabled=function(t,e){return t.disabled=!e},t["public"].binders.disabled=function(t,e){return t.disabled=!!e},t["public"].binders.checked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)===(null!=e?e.toString():void 0):!!e}},t["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)!==(null!=e?e.toString():void 0):!e}},t["public"].binders.value={publishes:!0,priority:3e3,bind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?(this.event="SELECT"===e.tagName?"change":"input",t.Util.bindEvent(e,this.event,this.publish)):void 0},unbind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?t.Util.unbindEvent(e,this.event,this.publish):void 0},routine:function(t,e){var i,n,r,s,o,u,h;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=jQuery(t),(null!=e?e.toString():void 0)!==(null!=(s=t.val())?s.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(h=[],n=0,r=t.length;r>n;n++)i=t[n],h.push(i.selected=(o=i.value,l.call(e,o)>=0));return h}}else if((null!=e?e.toString():void 0)!==(null!=(u=t.value)?u.toString():void 0))return t.value=null!=e?e:""}},t["public"].binders["if"]={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){var t;return null!=(t=this.nested)?t.unbind():void 0},routine:function(e,i){var n,r,s,o;if(!!i==!this.bound){if(i){s={},o=this.view.models;for(n in o)r=o[n],s[n]=r;return(this.nested||(this.nested=new t.View(e,s,this.view.options()))).bind(),this.marker.parentNode.insertBefore(e,this.marker.nextSibling),this.bound=!0}return e.parentNode.removeChild(e),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},t["public"].binders.unless={block:!0,priority:4e3,bind:function(e){return t["public"].binders["if"].bind.call(this,e)},unbind:function(){return t["public"].binders["if"].unbind.call(this)},routine:function(e,i){return t["public"].binders["if"].routine.call(this,e,!i)},update:function(e){return t["public"].binders["if"].update.call(this,e)}},t["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(e){return this.handler?t.Util.unbindEvent(e,this.args[0],this.handler):void 0},routine:function(e,i){return this.handler&&t.Util.unbindEvent(e,this.args[0],this.handler),t.Util.bindEvent(e,this.args[0],this.handler=this.eventHandler(i))}},t["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(t){var e,i,n,r,s;if(null==this.marker)e=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t);else for(s=this.iterated,n=0,r=s.length;r>n;n++)i=s[n],i.bind()},unbind:function(){var t,e,i,n,r;if(null!=this.iterated){for(n=this.iterated,r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push(t.unbind());return r}},routine:function(e,i){var n,r,s,o,u,l,h,a,p,d,c,f,b,v,y,g,m,w,k,x,N;if(h=this.args[0],i=i||[],this.iterated.length>i.length)for(w=Array(this.iterated.length-i.length),f=0,y=w.length;y>f;f++)s=w[f],c=this.iterated.pop(),c.unbind(),this.marker.parentNode.removeChild(c.els[0]);for(o=b=0,g=i.length;g>b;o=++b)if(l=i[o],r={index:o},r[h]=l,null==this.iterated[o]){k=this.view.models;for(u in k)l=k[u],null==r[u]&&(r[u]=l);p=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,a=this.view.options(),a.preloadData=!0,d=e.cloneNode(!0),c=new t.View(d,r,a),c.bind(),this.iterated.push(c),this.marker.parentNode.insertBefore(d,p.nextSibling)}else this.iterated[o].models[h]!==l&&this.iterated[o].update(r);if("OPTION"===e.nodeName){for(x=this.view.bindings,N=[],v=0,m=x.length;m>v;v++)n=x[v],n.el===this.marker.parentNode&&"value"===n.type?N.push(n.sync()):N.push(void 0);return N}},update:function(t){var e,i,n,r,s,o,u,l;e={};for(i in t)n=t[i],i!==this.args[0]&&(e[i]=n);for(u=this.iterated,l=[],s=0,o=u.length;o>s;s++)r=u[s],l.push(r.update(e));return l}},t["public"].binders["class-*"]=function(t,e){var i;return i=" "+t.className+" ",!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?""+t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},t["public"].binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},t["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e,i,n;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(i=this.weakmap)[n=t[this.id]]||(i[n]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(t,e){var i,n,r;return n=t[e],i=this.weakReference(t),r=this.weakmap,t[e]=function(){var e,s,o,u,l,h,a,p,d,c;u=n.apply(t,arguments),a=i.pointers;for(o in a)for(s=a[o],c=null!=(p=null!=(d=r[o])?d.callbacks[s]:void 0)?p:[],l=0,h=c.length;h>l;l++)e=c[l],e();return u}},observeMutations:function(t,e,i){var n,r,s,o,u,h;if(Array.isArray(t)){if(s=this.weakReference(t),null==s.pointers)for(s.pointers={},r=["push","pop","shift","unshift","sort","reverse","splice"],u=0,h=r.length;h>u;u++)n=r[u],this.stubFunction(t,n);if(null==(o=s.pointers)[e]&&(o[e]=[]),l.call(s.pointers[e],i)<0)return s.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,r,s;return Array.isArray(t)&&null!=t[this.id]&&(r=this.weakmap[t[this.id]])&&(s=r.pointers[e])?((n=s.indexOf(i))>=0&&s.splice(n,1),s.length||delete r.pointers[e],this.cleanupWeakReference(r,t[this.id])):void 0},observe:function(t,e,i){var n,r,s;return n=this.weakReference(t).callbacks,null==n[e]&&(n[e]=[],r=Object.getOwnPropertyDescriptor(t,e),(null!=r?r.get:void 0)||(null!=r?r.set:void 0)||(s=t[e],Object.defineProperty(t,e,{enumerable:!0,get:function(){return s},set:function(r){return function(o){var u,h,a,p;if(o!==s&&(r.unobserveMutations(s,t[r.id],e),s=o,u=r.weakmap[t[r.id]])){if(n=u.callbacks,n[e])for(p=n[e].slice(),h=0,a=p.length;a>h;h++)i=p[h],l.call(n[e],i)>=0&&i();return r.observeMutations(o,t[r.id],e)}}}(this)}))),l.call(n[e],i)<0&&n[e].push(i),this.observeMutations(t[e],t[this.id],e)},unobserve:function(t,e,i){var n,r,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?((r=n.indexOf(i))>=0&&(n.splice(r,1),n.length||delete s.callbacks[e]),this.unobserveMutations(t[e],t[this.id],e),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},t.factory=function(e){return t.sightglass=e,t["public"]._=t,t["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(e){return this.rivets=t.factory(e)}):this.rivets=t.factory(sightglass)}).call(this);
 /*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2015 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.27.1
  * see https://github.com/paulmillr/es6-shim/blob/0.27.1/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  /*global define, module, exports */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(this, function () {
  'use strict';

  var isCallableWithoutNew = function (func) {
    try {
      func();
    } catch (e) {
      return false;
    }
    return true;
  };

  var supportsSubclassing = function (C, f) {
    /* jshint proto:true */
    try {
      var Sub = function () { C.apply(this, arguments); };
      if (!Sub.__proto__) { return false; /* skip test on IE < 11 */ }
      Object.setPrototypeOf(Sub, C);
      Sub.prototype = Object.create(C.prototype, {
        constructor: { value: C }
      });
      return f(Sub);
    } catch (e) {
      return false;
    }
  };

  var arePropertyDescriptorsSupported = function () {
    try {
      Object.defineProperty({}, 'x', {});
      return true;
    } catch (e) { /* this is IE 8. */
      return false;
    }
  };

  var startsWithRejectsRegex = function () {
    var rejectsRegex = false;
    if (String.prototype.startsWith) {
      try {
        '/a/'.startsWith(/a/);
      } catch (e) { /* this is spec compliant */
        rejectsRegex = true;
      }
    }
    return rejectsRegex;
  };
  var startsWithHandlesInfinity = (function () {
    return String.prototype.startsWith && 'abc'.startsWith('a', Infinity) === false;
  }());

  /*jshint evil: true */
  var getGlobal = new Function('return this;');
  /*jshint evil: false */

  var globals = getGlobal();
  var globalIsFinite = globals.isFinite;
  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
  var startsWithIsCompliant = startsWithRejectsRegex() && startsWithHandlesInfinity;
  var _indexOf = Function.call.bind(String.prototype.indexOf);
  var _toString = Function.call.bind(Object.prototype.toString);
  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
  var ArrayIterator; // make our implementation private
  var noop = function () {};

  var Symbol = globals.Symbol || {};
  var symbolSpecies = Symbol.species || '@@species';
  var Type = {
    object: function (x) { return x !== null && typeof x === 'object'; },
    string: function (x) { return _toString(x) === '[object String]'; },
    regex: function (x) { return _toString(x) === '[object RegExp]'; },
    symbol: function (x) {
      /*jshint notypeof: true */
      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
      /*jshint notypeof: false */
    }
  };

  var numberIsNaN = Number.isNaN || function isNaN(value) {
    // NaN !== NaN, but they are identical.
    // NaNs are the only non-reflexive value, i.e., if x !== x,
    // then x is NaN.
    // isNaN is broken: it converts its argument to number, so
    // isNaN('foo') => true
    return value !== value;
  };
  var numberIsFinite = Number.isFinite || function isFinite(value) {
    return typeof value === 'number' && globalIsFinite(value);
  };

  var defineProperty = function (object, name, value, force) {
    if (!force && name in object) { return; }
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  var Value = {
    getter: function (object, name, getter) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        get: getter
      });
    },
    proxy: function (originalObject, key, targetObject) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
      Object.defineProperty(targetObject, key, {
        configurable: originalDescriptor.configurable,
        enumerable: originalDescriptor.enumerable,
        get: function getKey() { return originalObject[key]; },
        set: function setKey(value) { originalObject[key] = value; }
      });
    },
    redefine: function (object, property, newValue) {
      if (supportsDescriptors) {
        var descriptor = Object.getOwnPropertyDescriptor(object, property);
        descriptor.value = newValue;
        Object.defineProperty(object, property, descriptor);
      } else {
        object[property] = newValue;
      }
    },
    preserveToString: function (target, source) {
      defineProperty(target, 'toString', source.toString.bind(source), true);
    }
  };

  // Define configurable, writable and non-enumerable props
  // if they don’t exist.
  var defineProperties = function (object, map) {
    Object.keys(map).forEach(function (name) {
      var method = map[name];
      defineProperty(object, name, method, false);
    });
  };

  // Simple shim for Object.create on ES3 browsers
  // (unlike real shim, no attempt to support `prototype === null`)
  var create = Object.create || function (prototype, properties) {
    function Prototype() {}
    Prototype.prototype = prototype;
    var object = new Prototype();
    if (typeof properties !== 'undefined') {
      defineProperties(object, properties);
    }
    return object;
  };

  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
  // we're going to use an arbitrary _-prefixed name to make our shims
  // work properly with each other, even though we don't have full Iterator
  // support.  That is, `Array.from(map.keys())` will work, but we don't
  // pretend to export a "real" Iterator interface.
  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
  // Firefox ships a partial implementation using the name @@iterator.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
  // So use that name if we detect it.
  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
    $iterator$ = '@@iterator';
  }
  var addIterator = function (prototype, impl) {
    if (!impl) { impl = function iterator() { return this; }; }
    var o = {};
    o[$iterator$] = impl;
    defineProperties(prototype, o);
    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
      // implementations are buggy when $iterator$ is a Symbol
      prototype[$iterator$] = impl;
    }
  };

  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
  // can be replaced with require('is-arguments') if we ever use a build process instead
  var isArguments = function isArguments(value) {
    var str = _toString(value);
    var result = str === '[object Arguments]';
    if (!result) {
      result = str !== '[object Array]' &&
        value !== null &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        value.length >= 0 &&
        _toString(value.callee) === '[object Function]';
    }
    return result;
  };

  var safeApply = Function.call.bind(Function.apply);

  var ES = {
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
    Call: function Call(F, V) {
      var args = arguments.length > 2 ? arguments[2] : [];
      if (!ES.IsCallable(F)) {
        throw new TypeError(F + ' is not a function');
      }
      return safeApply(F, V, args);
    },

    RequireObjectCoercible: function (x, optMessage) {
      /* jshint eqnull:true */
      if (x == null) {
        throw new TypeError(optMessage || 'Cannot call method on ' + x);
      }
    },

    TypeIsObject: function (x) {
      /* jshint eqnull:true */
      // this is expensive when it returns false; use this function
      // when you expect it to return true in the common case.
      return x != null && Object(x) === x;
    },

    ToObject: function (o, optMessage) {
      ES.RequireObjectCoercible(o, optMessage);
      return Object(o);
    },

    IsCallable: function (x) {
      // some versions of IE say that typeof /abc/ === 'function'
      return typeof x === 'function' && _toString(x) === '[object Function]';
    },

    ToInt32: function (x) {
      return ES.ToNumber(x) >> 0;
    },

    ToUint32: function (x) {
      return ES.ToNumber(x) >>> 0;
    },

    ToNumber: function (value) {
      if (_toString(value) === '[object Symbol]') {
        throw new TypeError('Cannot convert a Symbol value to a number');
      }
      return +value;
    },

    ToInteger: function (value) {
      var number = ES.ToNumber(value);
      if (numberIsNaN(number)) { return 0; }
      if (number === 0 || !numberIsFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    },

    ToLength: function (value) {
      var len = ES.ToInteger(value);
      if (len <= 0) { return 0; } // includes converting -0 to +0
      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }
      return len;
    },

    SameValue: function (a, b) {
      if (a === b) {
        // 0 === -0, but they are not identical.
        if (a === 0) { return 1 / a === 1 / b; }
        return true;
      }
      return numberIsNaN(a) && numberIsNaN(b);
    },

    SameValueZero: function (a, b) {
      // same as SameValue except for SameValueZero(+0, -0) == true
      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));
    },

    IsIterable: function (o) {
      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
    },

    GetIterator: function (o) {
      if (isArguments(o)) {
        // special case support for `arguments`
        return new ArrayIterator(o, 'value');
      }
      var itFn = o[$iterator$];
      if (!ES.IsCallable(itFn)) {
        throw new TypeError('value is not an iterable');
      }
      var it = itFn.call(o);
      if (!ES.TypeIsObject(it)) {
        throw new TypeError('bad iterator');
      }
      return it;
    },

    IteratorNext: function (it) {
      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
      if (!ES.TypeIsObject(result)) {
        throw new TypeError('bad iterator');
      }
      return result;
    },

    Construct: function (C, args) {
      // CreateFromConstructor
      var obj;
      if (ES.IsCallable(C[symbolSpecies])) {
        obj = C[symbolSpecies]();
      } else {
        // OrdinaryCreateFromConstructor
        obj = create(C.prototype || null);
      }
      // Mark that we've used the es6 construct path
      // (see emulateES6construct)
      defineProperties(obj, { _es6construct: true });
      // Call the constructor.
      var result = ES.Call(C, obj, args);
      return ES.TypeIsObject(result) ? result : obj;
    },

    CreateHTML: function (string, tag, attribute, value) {
      var S = String(string);
      var p1 = '<' + tag;
      if (attribute !== '') {
        var V = String(value);
        var escapedV = V.replace(/"/g, '&quot;');
        p1 += ' ' + attribute + '="' + escapedV + '"';
      }
      var p2 = p1 + '>';
      var p3 = p2 + S;
      return p3 + '</' + tag + '>';
    }
  };

  var emulateES6construct = function (o) {
    if (!ES.TypeIsObject(o)) { throw new TypeError('bad object'); }
    // es5 approximation to es6 subclass semantics: in es6, 'new Foo'
    // would invoke Foo.@@species to allocation/initialize the new object.
    // In es5 we just get the plain object.  So if we detect an
    // uninitialized object, invoke o.constructor.@@species
    if (!o._es6construct) {
      if (o.constructor && ES.IsCallable(o.constructor[symbolSpecies])) {
        o = o.constructor[symbolSpecies](o);
      }
      defineProperties(o, { _es6construct: true });
    }
    return o;
  };


  var numberConversion = (function () {
    // from https://github.com/inexorabletash/polyfill/blob/master/typedarray.js#L176-L266
    // with permission and license, per https://twitter.com/inexorabletash/status/372206509540659200

    function roundToEven(n) {
      var w = Math.floor(n), f = n - w;
      if (f < 0.5) {
        return w;
      }
      if (f > 0.5) {
        return w + 1;
      }
      return w % 2 ? w + 1 : w;
    }

    function packIEEE754(v, ebits, fbits) {
      var bias = (1 << (ebits - 1)) - 1,
        s, e, f,
        i, bits, str, bytes;

      // Compute sign, exponent, fraction
      if (v !== v) {
        // NaN
        // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
        e = (1 << ebits) - 1;
        f = Math.pow(2, fbits - 1);
        s = 0;
      } else if (v === Infinity || v === -Infinity) {
        e = (1 << ebits) - 1;
        f = 0;
        s = (v < 0) ? 1 : 0;
      } else if (v === 0) {
        e = 0;
        f = 0;
        s = (1 / v === -Infinity) ? 1 : 0;
      } else {
        s = v < 0;
        v = Math.abs(v);

        if (v >= Math.pow(2, 1 - bias)) {
          e = Math.min(Math.floor(Math.log(v) / Math.LN2), 1023);
          f = roundToEven(v / Math.pow(2, e) * Math.pow(2, fbits));
          if (f / Math.pow(2, fbits) >= 2) {
            e = e + 1;
            f = 1;
          }
          if (e > bias) {
            // Overflow
            e = (1 << ebits) - 1;
            f = 0;
          } else {
            // Normal
            e = e + bias;
            f = f - Math.pow(2, fbits);
          }
        } else {
          // Subnormal
          e = 0;
          f = roundToEven(v / Math.pow(2, 1 - bias - fbits));
        }
      }

      // Pack sign, exponent, fraction
      bits = [];
      for (i = fbits; i; i -= 1) {
        bits.push(f % 2 ? 1 : 0);
        f = Math.floor(f / 2);
      }
      for (i = ebits; i; i -= 1) {
        bits.push(e % 2 ? 1 : 0);
        e = Math.floor(e / 2);
      }
      bits.push(s ? 1 : 0);
      bits.reverse();
      str = bits.join('');

      // Bits to bytes
      bytes = [];
      while (str.length) {
        bytes.push(parseInt(str.slice(0, 8), 2));
        str = str.slice(8);
      }
      return bytes;
    }

    function unpackIEEE754(bytes, ebits, fbits) {
      // Bytes to bits
      var bits = [], i, j, b, str,
          bias, s, e, f;

      for (i = bytes.length; i; i -= 1) {
        b = bytes[i - 1];
        for (j = 8; j; j -= 1) {
          bits.push(b % 2 ? 1 : 0);
          b = b >> 1;
        }
      }
      bits.reverse();
      str = bits.join('');

      // Unpack sign, exponent, fraction
      bias = (1 << (ebits - 1)) - 1;
      s = parseInt(str.slice(0, 1), 2) ? -1 : 1;
      e = parseInt(str.slice(1, 1 + ebits), 2);
      f = parseInt(str.slice(1 + ebits), 2);

      // Produce number
      if (e === (1 << ebits) - 1) {
        return f !== 0 ? NaN : s * Infinity;
      } else if (e > 0) {
        // Normalized
        return s * Math.pow(2, e - bias) * (1 + f / Math.pow(2, fbits));
      } else if (f !== 0) {
        // Denormalized
        return s * Math.pow(2, -(bias - 1)) * (f / Math.pow(2, fbits));
      } else {
        return s < 0 ? -0 : 0;
      }
    }

    function unpackFloat64(b) { return unpackIEEE754(b, 11, 52); }
    function packFloat64(v) { return packIEEE754(v, 11, 52); }
    function unpackFloat32(b) { return unpackIEEE754(b, 8, 23); }
    function packFloat32(v) { return packIEEE754(v, 8, 23); }

    var conversions = {
      toFloat32: function (num) { return unpackFloat32(packFloat32(num)); }
    };
    if (typeof Float32Array !== 'undefined') {
      var float32array = new Float32Array(1);
      conversions.toFloat32 = function (num) {
        float32array[0] = num;
        return float32array[0];
      };
    }
    return conversions;
  }());

  defineProperties(String, {
    fromCodePoint: function fromCodePoint(codePoints) {
      var result = [];
      var next;
      for (var i = 0, length = arguments.length; i < length; i++) {
        next = Number(arguments[i]);
        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
          throw new RangeError('Invalid code point ' + next);
        }

        if (next < 0x10000) {
          result.push(String.fromCharCode(next));
        } else {
          next -= 0x10000;
          result.push(String.fromCharCode((next >> 10) + 0xD800));
          result.push(String.fromCharCode((next % 0x400) + 0xDC00));
        }
      }
      return result.join('');
    },

    raw: function raw(callSite) {
      var cooked = ES.ToObject(callSite, 'bad callSite');
      var rawString = ES.ToObject(cooked.raw, 'bad raw value');
      var len = rawString.length;
      var literalsegments = ES.ToLength(len);
      if (literalsegments <= 0) {
        return '';
      }

      var stringElements = [];
      var nextIndex = 0;
      var nextKey, next, nextSeg, nextSub;
      while (nextIndex < literalsegments) {
        nextKey = String(nextIndex);
        nextSeg = String(rawString[nextKey]);
        stringElements.push(nextSeg);
        if (nextIndex + 1 >= literalsegments) {
          break;
        }
        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
        nextSub = String(next);
        stringElements.push(nextSub);
        nextIndex++;
      }
      return stringElements.join('');
    }
  });

  // Firefox 31 reports this function's length as 0
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
  if (String.fromCodePoint.length !== 1) {
    var originalFromCodePoint = Function.apply.bind(String.fromCodePoint);
    defineProperty(String, 'fromCodePoint', function fromCodePoint(codePoints) { return originalFromCodePoint(this, arguments); }, true);
  }

  // Fast repeat, uses the `Exponentiation by squaring` algorithm.
  // Perf: http://jsperf.com/string-repeat2/2
  var stringRepeat = function repeat(s, times) {
    if (times < 1) { return ''; }
    if (times % 2) { return repeat(s, times - 1) + s; }
    var half = repeat(s, times / 2);
    return half + half;
  };
  var stringMaxLength = Infinity;

  var StringShims = {
    repeat: function repeat(times) {
      ES.RequireObjectCoercible(this);
      var thisStr = String(this);
      times = ES.ToInteger(times);
      if (times < 0 || times >= stringMaxLength) {
        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
      }
      return stringRepeat(thisStr, times);
    },

    startsWith: function (searchStr) {
      ES.RequireObjectCoercible(this);
      var thisStr = String(this);
      if (Type.regex(searchStr)) {
        throw new TypeError('Cannot call method "startsWith" with a regex');
      }
      searchStr = String(searchStr);
      var startArg = arguments.length > 1 ? arguments[1] : void 0;
      var start = Math.max(ES.ToInteger(startArg), 0);
      return thisStr.slice(start, start + searchStr.length) === searchStr;
    },

    endsWith: function (searchStr) {
      ES.RequireObjectCoercible(this);
      var thisStr = String(this);
      if (Type.regex(searchStr)) {
        throw new TypeError('Cannot call method "endsWith" with a regex');
      }
      searchStr = String(searchStr);
      var thisLen = thisStr.length;
      var posArg = arguments.length > 1 ? arguments[1] : void 0;
      var pos = typeof posArg === 'undefined' ? thisLen : ES.ToInteger(posArg);
      var end = Math.min(Math.max(pos, 0), thisLen);
      return thisStr.slice(end - searchStr.length, end) === searchStr;
    },

    includes: function includes(searchString) {
      var position = arguments.length > 1 ? arguments[1] : void 0;
      // Somehow this trick makes method 100% compat with the spec.
      return _indexOf(this, searchString, position) !== -1;
    },

    codePointAt: function (pos) {
      ES.RequireObjectCoercible(this);
      var thisStr = String(this);
      var position = ES.ToInteger(pos);
      var length = thisStr.length;
      if (position >= 0 && position < length) {
        var first = thisStr.charCodeAt(position);
        var isEnd = (position + 1 === length);
        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }
        var second = thisStr.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) { return first; }
        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
      }
    }
  };
  defineProperties(String.prototype, StringShims);

  if ('a'.includes('a', Infinity) !== false) {
    var origIncludes = String.prototype.includes;
    defineProperty(String.prototype, 'includes', StringShims.includes, true);
    Value.preserveToString(String.prototype.includes, origIncludes);
  }

  var hasStringTrimBug = '\u0085'.trim().length !== 1;
  if (hasStringTrimBug) {
    delete String.prototype.trim;
    // whitespace from: http://es5.github.io/#x15.5.4.20
    // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
    var ws = [
      '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
      '\u2029\uFEFF'
    ].join('');
    var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
    defineProperties(String.prototype, {
      trim: function () {
        if (typeof this === 'undefined' || this === null) {
          throw new TypeError("can't convert " + this + ' to object');
        }
        return String(this).replace(trimRegexp, '');
      }
    });
  }

  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype-@@iterator
  var StringIterator = function (s) {
    ES.RequireObjectCoercible(s);
    this._s = String(s);
    this._i = 0;
  };
  StringIterator.prototype.next = function () {
    var s = this._s, i = this._i;
    if (typeof s === 'undefined' || i >= s.length) {
      this._s = void 0;
      return { value: void 0, done: true };
    }
    var first = s.charCodeAt(i), second, len;
    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
      len = 1;
    } else {
      second = s.charCodeAt(i + 1);
      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
    }
    this._i = i + len;
    return { value: s.substr(i, len), done: false };
  };
  addIterator(StringIterator.prototype);
  addIterator(String.prototype, function () {
    return new StringIterator(this);
  });

  if (!startsWithIsCompliant) {
    // Firefox has a noncompliant startsWith implementation
    defineProperty(String.prototype, 'startsWith', StringShims.startsWith, true);
    defineProperty(String.prototype, 'endsWith', StringShims.endsWith, true);
  }

  var ArrayShims = {
    from: function from(iterable) {
      var mapFn = arguments.length > 1 ? arguments[1] : void 0;

      var list = ES.ToObject(iterable, 'bad iterable');
      if (typeof mapFn !== 'undefined' && !ES.IsCallable(mapFn)) {
        throw new TypeError('Array.from: when provided, the second argument must be a function');
      }

      var hasThisArg = arguments.length > 2;
      var thisArg = hasThisArg ? arguments[2] : void 0;

      var usingIterator = ES.IsIterable(list);
      // does the spec really mean that Arrays should use ArrayIterator?
      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
      //if (Array.isArray(list)) { usingIterator=false; }

      var length;
      var result, i, value;
      if (usingIterator) {
        i = 0;
        result = ES.IsCallable(this) ? Object(new this()) : [];
        var it = usingIterator ? ES.GetIterator(list) : null;
        var iterationValue;

        do {
          iterationValue = ES.IteratorNext(it);
          if (!iterationValue.done) {
            value = iterationValue.value;
            if (mapFn) {
              result[i] = hasThisArg ? mapFn.call(thisArg, value, i) : mapFn(value, i);
            } else {
              result[i] = value;
            }
            i += 1;
          }
        } while (!iterationValue.done);
        length = i;
      } else {
        length = ES.ToLength(list.length);
        result = ES.IsCallable(this) ? Object(new this(length)) : new Array(length);
        for (i = 0; i < length; ++i) {
          value = list[i];
          if (mapFn) {
            result[i] = hasThisArg ? mapFn.call(thisArg, value, i) : mapFn(value, i);
          } else {
            result[i] = value;
          }
        }
      }

      result.length = length;
      return result;
    },

    of: function of() {
      return Array.from.call(this, arguments);
    }
  };
  defineProperties(Array, ArrayShims);

  // Given an argument x, it will return an IteratorResult object,
  // with value set to x and done to false.
  // Given no arguments, it will return an iterator completion object.
  var iteratorResult = function (x) {
    return { value: x, done: arguments.length === 0 };
  };

  // Our ArrayIterator is private; see
  // https://github.com/paulmillr/es6-shim/issues/252
  ArrayIterator = function (array, kind) {
      this.i = 0;
      this.array = array;
      this.kind = kind;
  };

  defineProperties(ArrayIterator.prototype, {
    next: function () {
      var i = this.i, array = this.array;
      if (!(this instanceof ArrayIterator)) {
        throw new TypeError('Not an ArrayIterator');
      }
      if (typeof array !== 'undefined') {
        var len = ES.ToLength(array.length);
        for (; i < len; i++) {
          var kind = this.kind;
          var retval;
          if (kind === 'key') {
            retval = i;
          } else if (kind === 'value') {
            retval = array[i];
          } else if (kind === 'entry') {
            retval = [i, array[i]];
          }
          this.i = i + 1;
          return { value: retval, done: false };
        }
      }
      this.array = void 0;
      return { value: void 0, done: true };
    }
  });
  addIterator(ArrayIterator.prototype);

  var ObjectIterator = function (object, kind) {
    this.object = object;
    // Don't generate keys yet.
    this.array = null;
    this.kind = kind;
  };

  function getAllKeys(object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys;
  }

  defineProperties(ObjectIterator.prototype, {
    next: function () {
      var key, array = this.array;

      if (!(this instanceof ObjectIterator)) {
        throw new TypeError('Not an ObjectIterator');
      }

      // Keys not generated
      if (array === null) {
        array = this.array = getAllKeys(this.object);
      }

      // Find next key in the object
      while (ES.ToLength(array.length) > 0) {
        key = array.shift();

        // The candidate key isn't defined on object.
        // Must have been deleted, or object[[Prototype]]
        // has been modified.
        if (!(key in this.object)) {
          continue;
        }

        if (this.kind === 'key') {
          return iteratorResult(key);
        } else if (this.kind === 'value') {
          return iteratorResult(this.object[key]);
        } else {
          return iteratorResult([key, this.object[key]]);
        }
      }

      return iteratorResult();
    }
  });
  addIterator(ObjectIterator.prototype);

  // note: this is positioned here because it depends on ArrayIterator
  var arrayOfSupportsSubclassing = (function () {
    // Detects a bug in Webkit nightly r181886
    var Foo = function Foo(len) { this.length = len; };
    Foo.prototype = [];
    var fooArr = Array.of.apply(Foo, [1, 2]);
    return fooArr instanceof Foo && fooArr.length === 2;
  }());
  if (!arrayOfSupportsSubclassing) {
    var origArrayOf = Array.of;
    defineProperty(Array, 'of', ArrayShims.of, true);
    Value.preserveToString(Array.of, origArrayOf);
  }

  var ArrayPrototypeShims = {
    copyWithin: function copyWithin(target, start) {
      var end = arguments[2]; // copyWithin.length must be 2
      var o = ES.ToObject(this);
      var len = ES.ToLength(o.length);
      target = ES.ToInteger(target);
      start = ES.ToInteger(start);
      var to = target < 0 ? Math.max(len + target, 0) : Math.min(target, len);
      var from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
      end = typeof end === 'undefined' ? len : ES.ToInteger(end);
      var fin = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
      var count = Math.min(fin - from, len - to);
      var direction = 1;
      if (from < to && to < (from + count)) {
        direction = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count > 0) {
        if (_hasOwnProperty(o, from)) {
          o[to] = o[from];
        } else {
          delete o[from];
        }
        from += direction;
        to += direction;
        count -= 1;
      }
      return o;
    },

    fill: function fill(value) {
      var start = arguments.length > 1 ? arguments[1] : void 0;
      var end = arguments.length > 2 ? arguments[2] : void 0;
      var O = ES.ToObject(this);
      var len = ES.ToLength(O.length);
      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
      end = ES.ToInteger(typeof end === 'undefined' ? len : end);

      var relativeStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
      var relativeEnd = end < 0 ? len + end : end;

      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
        O[i] = value;
      }
      return O;
    },

    find: function find(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#find: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0, value; i < length; i++) {
        value = list[i];
        if (thisArg) {
          if (predicate.call(thisArg, value, i, list)) { return value; }
        } else if (predicate(value, i, list)) {
          return value;
        }
      }
    },

    findIndex: function findIndex(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#findIndex: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0; i < length; i++) {
        if (thisArg) {
          if (predicate.call(thisArg, list[i], i, list)) { return i; }
        } else if (predicate(list[i], i, list)) {
          return i;
        }
      }
      return -1;
    },

    keys: function keys() {
      return new ArrayIterator(this, 'key');
    },

    values: function values() {
      return new ArrayIterator(this, 'value');
    },

    entries: function entries() {
      return new ArrayIterator(this, 'entry');
    }
  };
  // Safari 7.1 defines Array#keys and Array#entries natively,
  // but the resulting ArrayIterator objects don't have a "next" method.
  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
    delete Array.prototype.keys;
  }
  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
    delete Array.prototype.entries;
  }

  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
    defineProperties(Array.prototype, {
      values: Array.prototype[$iterator$]
    });
    if (Type.symbol(Symbol.unscopables)) {
      Array.prototype[Symbol.unscopables].values = true;
    }
  }
  // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
  if (Array.prototype.values && Array.prototype.values.name !== 'values') {
    var originalArrayPrototypeValues = Array.prototype.values;
    defineProperty(Array.prototype, 'values', function values() { return originalArrayPrototypeValues.call(this); }, true);
    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
    Value.preserveToString(Array.prototype.values, originalArrayPrototypeValues);
  }
  defineProperties(Array.prototype, ArrayPrototypeShims);

  addIterator(Array.prototype, function () { return this.values(); });
  // Chrome defines keys/values/entries on Array, but doesn't give us
  // any way to identify its iterator.  So add our own shimmed field.
  if (Object.getPrototypeOf) {
    addIterator(Object.getPrototypeOf([].values()));
  }

  // note: this is positioned here because it relies on Array#entries
  var arrayFromSwallowsNegativeLengths = function () {
    // Detects a Firefox bug in v32
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
    try {
      return Array.from({ length: -1 }).length === 0;
    } catch (e) {
      return false;
    }
  };
  var arrayFromHandlesIterables = (function () {
    // Detects a bug in Webkit nightly r181886
    var arr = Array.from([0].entries());
    return arr.length === 1 && arr[0][0] === 0 && arr[0][1] === 1;
  }());
  if (!arrayFromSwallowsNegativeLengths() || !arrayFromHandlesIterables) {
    var origArrayFrom = Array.from;
    defineProperty(Array, 'from', ArrayShims.from, true);
    Value.preserveToString(Array.from, origArrayFrom);
  }

  var maxSafeInteger = Math.pow(2, 53) - 1;
  defineProperties(Number, {
    MAX_SAFE_INTEGER: maxSafeInteger,
    MIN_SAFE_INTEGER: -maxSafeInteger,
    EPSILON: 2.220446049250313e-16,

    parseInt: globals.parseInt,
    parseFloat: globals.parseFloat,

    isFinite: numberIsFinite,

    isInteger: function (value) {
      return numberIsFinite(value) && ES.ToInteger(value) === value;
    },

    isSafeInteger: function (value) {
      return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
    },

    isNaN: numberIsNaN
  });

  // Work around bugs in Array#find and Array#findIndex -- early
  // implementations skipped holes in sparse arrays. (Note that the
  // implementations of find/findIndex indirectly use shimmed
  // methods of Number, so this test has to happen down here.)
  /*jshint elision: true */
  if (![, 1].find(function (item, idx) { return idx === 0; })) {
    defineProperty(Array.prototype, 'find', ArrayPrototypeShims.find, true);
  }
  if ([, 1].findIndex(function (item, idx) { return idx === 0; }) !== 0) {
    defineProperty(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex, true);
  }
  /*jshint elision: false */

  if (supportsDescriptors) {
    defineProperties(Object, {
      // 19.1.3.1
      assign: function (target, source) {
        if (!ES.TypeIsObject(target)) {
          throw new TypeError('target must be an object');
        }
        return Array.prototype.reduce.call(arguments, function (target, source) {
          return Object.keys(Object(source)).reduce(function (target, key) {
            target[key] = source[key];
            return target;
          }, target);
        });
      },

      is: function (a, b) {
        return ES.SameValue(a, b);
      },

      // 19.1.3.9
      // shim from https://gist.github.com/WebReflection/5593554
      setPrototypeOf: (function (Object, magic) {
        var set;

        var checkArgs = function (O, proto) {
          if (!ES.TypeIsObject(O)) {
            throw new TypeError('cannot set prototype on a non-object');
          }
          if (!(proto === null || ES.TypeIsObject(proto))) {
            throw new TypeError('can only set prototype to an object or null' + proto);
          }
        };

        var setPrototypeOf = function (O, proto) {
          checkArgs(O, proto);
          set.call(O, proto);
          return O;
        };

        try {
          // this works already in Firefox and Safari
          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
          set.call({}, null);
        } catch (e) {
          if (Object.prototype !== {}[magic]) {
            // IE < 11 cannot be shimmed
            return;
          }
          // probably Chrome or some old Mobile stock browser
          set = function (proto) {
            this[magic] = proto;
          };
          // please note that this will **not** work
          // in those browsers that do not inherit
          // __proto__ by mistake from Object.prototype
          // in these cases we should probably throw an error
          // or at least be informed about the issue
          setPrototypeOf.polyfill = setPrototypeOf(
            setPrototypeOf({}, null),
            Object.prototype
          ) instanceof Object;
          // setPrototypeOf.polyfill === true means it works as meant
          // setPrototypeOf.polyfill === false means it's not 100% reliable
          // setPrototypeOf.polyfill === undefined
          // or
          // setPrototypeOf.polyfill ==  null means it's not a polyfill
          // which means it works as expected
          // we can even delete Object.prototype.__proto__;
        }
        return setPrototypeOf;
      }(Object, '__proto__'))
    });
  }

  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
  // but Object.create(null) does.
  if (Object.setPrototypeOf && Object.getPrototypeOf &&
      Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null &&
      Object.getPrototypeOf(Object.create(null)) === null) {
    (function () {
      var FAKENULL = Object.create(null);
      var gpo = Object.getPrototypeOf, spo = Object.setPrototypeOf;
      Object.getPrototypeOf = function (o) {
        var result = gpo(o);
        return result === FAKENULL ? null : result;
      };
      Object.setPrototypeOf = function (o, p) {
        if (p === null) { p = FAKENULL; }
        return spo(o, p);
      };
      Object.setPrototypeOf.polyfill = false;
    }());
  }

  var objectKeysAcceptsPrimitives = (function () {
    try {
      Object.keys('foo');
      return true;
    } catch (e) {
      return false;
    }
  }());
  if (!objectKeysAcceptsPrimitives) {
    var originalObjectKeys = Object.keys;
    defineProperty(Object, 'keys', function keys(value) {
      return originalObjectKeys(ES.ToObject(value));
    }, true);
    Value.preserveToString(Object.keys, originalObjectKeys);
  }

  if (Object.getOwnPropertyNames) {
    var objectGOPNAcceptsPrimitives = (function () {
      try {
        Object.getOwnPropertyNames('foo');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectGOPNAcceptsPrimitives) {
      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
      defineProperty(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
        return originalObjectGetOwnPropertyNames(ES.ToObject(value));
      }, true);
      Value.preserveToString(Object.getOwnPropertyNames, originalObjectGetOwnPropertyNames);
    }
  }
  if (Object.getOwnPropertyDescriptor) {
    var objectGOPDAcceptsPrimitives = (function () {
      try {
        Object.getOwnPropertyDescriptor('foo', 'bar');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectGOPDAcceptsPrimitives) {
      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      defineProperty(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
      }, true);
      Value.preserveToString(Object.getOwnPropertyDescriptor, originalObjectGetOwnPropertyDescriptor);
    }
  }
  if (Object.seal) {
    var objectSealAcceptsPrimitives = (function () {
      try {
        Object.seal('foo');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectSealAcceptsPrimitives) {
      var originalObjectSeal = Object.seal;
      defineProperty(Object, 'seal', function seal(value) {
        if (!Type.object(value)) { return value; }
        return originalObjectSeal(value);
      }, true);
      Value.preserveToString(Object.seal, originalObjectSeal);
    }
  }
  if (Object.isSealed) {
    var objectIsSealedAcceptsPrimitives = (function () {
      try {
        Object.isSealed('foo');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectIsSealedAcceptsPrimitives) {
      var originalObjectIsSealed = Object.isSealed;
      defineProperty(Object, 'isSealed', function isSealed(value) {
        if (!Type.object(value)) { return true; }
        return originalObjectIsSealed(value);
      }, true);
      Value.preserveToString(Object.isSealed, originalObjectIsSealed);
    }
  }
  if (Object.freeze) {
    var objectFreezeAcceptsPrimitives = (function () {
      try {
        Object.freeze('foo');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectFreezeAcceptsPrimitives) {
      var originalObjectFreeze = Object.freeze;
      defineProperty(Object, 'freeze', function freeze(value) {
        if (!Type.object(value)) { return value; }
        return originalObjectFreeze(value);
      }, true);
      Value.preserveToString(Object.freeze, originalObjectFreeze);
    }
  }
  if (Object.isFrozen) {
    var objectIsFrozenAcceptsPrimitives = (function () {
      try {
        Object.isFrozen('foo');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectIsFrozenAcceptsPrimitives) {
      var originalObjectIsFrozen = Object.isFrozen;
      defineProperty(Object, 'isFrozen', function isFrozen(value) {
        if (!Type.object(value)) { return true; }
        return originalObjectIsFrozen(value);
      }, true);
      Value.preserveToString(Object.isFrozen, originalObjectIsFrozen);
    }
  }
  if (Object.preventExtensions) {
    var objectPreventExtensionsAcceptsPrimitives = (function () {
      try {
        Object.preventExtensions('foo');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectPreventExtensionsAcceptsPrimitives) {
      var originalObjectPreventExtensions = Object.preventExtensions;
      defineProperty(Object, 'preventExtensions', function preventExtensions(value) {
        if (!Type.object(value)) { return value; }
        return originalObjectPreventExtensions(value);
      }, true);
      Value.preserveToString(Object.preventExtensions, originalObjectPreventExtensions);
    }
  }
  if (Object.isExtensible) {
    var objectIsExtensibleAcceptsPrimitives = (function () {
      try {
        Object.isExtensible('foo');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectIsExtensibleAcceptsPrimitives) {
      var originalObjectIsExtensible = Object.isExtensible;
      defineProperty(Object, 'isExtensible', function isExtensible(value) {
        if (!Type.object(value)) { return false; }
        return originalObjectIsExtensible(value);
      }, true);
      Value.preserveToString(Object.isExtensible, originalObjectIsExtensible);
    }
  }
  if (Object.getPrototypeOf) {
    var objectGetProtoAcceptsPrimitives = (function () {
      try {
        Object.getPrototypeOf('foo');
        return true;
      } catch (e) {
        return false;
      }
    }());
    if (!objectGetProtoAcceptsPrimitives) {
      var originalGetProto = Object.getPrototypeOf;
      defineProperty(Object, 'getPrototypeOf', function getPrototypeOf(value) {
        return originalGetProto(ES.ToObject(value));
      }, true);
      Value.preserveToString(Object.getPrototypeOf, originalGetProto);
    }
  }

  if (!RegExp.prototype.flags && supportsDescriptors) {
    var regExpFlagsGetter = function flags() {
      if (!ES.TypeIsObject(this)) {
        throw new TypeError('Method called on incompatible type: must be an object.');
      }
      var result = '';
      if (this.global) {
        result += 'g';
      }
      if (this.ignoreCase) {
        result += 'i';
      }
      if (this.multiline) {
        result += 'm';
      }
      if (this.unicode) {
        result += 'u';
      }
      if (this.sticky) {
        result += 'y';
      }
      return result;
    };

    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
  }

  var regExpSupportsFlagsWithRegex = (function () {
    try {
      return String(new RegExp(/a/g, 'i')) === '/a/i';
    } catch (e) {
      return false;
    }
  }());

  if (!regExpSupportsFlagsWithRegex && supportsDescriptors) {
    var OrigRegExp = RegExp;
    var RegExpShim = function RegExp(pattern, flags) {
      if (Type.regex(pattern) && Type.string(flags)) {
        return new RegExp(pattern.source, flags);
      }
      return new OrigRegExp(pattern, flags);
    };
    Value.preserveToString(RegExpShim, OrigRegExp);
    if (Object.setPrototypeOf) {
      // sets up proper prototype chain where possible
      Object.setPrototypeOf(OrigRegExp, RegExpShim);
    }
    Object.getOwnPropertyNames(OrigRegExp).forEach(function (key) {
      if (key === '$input') { return; } // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
      if (key in noop) { return; }
      Value.proxy(OrigRegExp, key, RegExpShim);
    });
    RegExpShim.prototype = OrigRegExp.prototype;
    Value.redefine(OrigRegExp.prototype, 'constructor', RegExpShim);
    /*globals RegExp: true */
    RegExp = RegExpShim;
    Value.redefine(globals, 'RegExp', RegExpShim);
    /*globals RegExp: false */
  }

  var square = function (n) { return n * n; };
  var add = function (a, b) { return a + b; };

  var MathShims = {
    acosh: function (value) {
      var x = Number(value);
      if (Number.isNaN(x) || value < 1) { return NaN; }
      if (x === 1) { return 0; }
      if (x === Infinity) { return x; }
      return Math.log(x / Math.E + Math.sqrt(x + 1) * Math.sqrt(x - 1) / Math.E) + 1;
    },

    asinh: function (value) {
      value = Number(value);
      if (value === 0 || !globalIsFinite(value)) {
        return value;
      }
      return value < 0 ? -Math.asinh(-value) : Math.log(value + Math.sqrt(value * value + 1));
    },

    atanh: function (value) {
      value = Number(value);
      if (Number.isNaN(value) || value < -1 || value > 1) {
        return NaN;
      }
      if (value === -1) { return -Infinity; }
      if (value === 1) { return Infinity; }
      if (value === 0) { return value; }
      return 0.5 * Math.log((1 + value) / (1 - value));
    },

    cbrt: function (value) {
      value = Number(value);
      if (value === 0) { return value; }
      var negate = value < 0, result;
      if (negate) { value = -value; }
      result = Math.pow(value, 1 / 3);
      return negate ? -result : result;
    },

    clz32: function (value) {
      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
      value = Number(value);
      var number = ES.ToUint32(value);
      if (number === 0) {
        return 32;
      }
      return 32 - (number).toString(2).length;
    },

    cosh: function (value) {
      value = Number(value);
      if (value === 0) { return 1; } // +0 or -0
      if (Number.isNaN(value)) { return NaN; }
      if (!globalIsFinite(value)) { return Infinity; }
      if (value < 0) { value = -value; }
      if (value > 21) { return Math.exp(value) / 2; }
      return (Math.exp(value) + Math.exp(-value)) / 2;
    },

    expm1: function (value) {
      var x = Number(value);
      if (x === -Infinity) { return -1; }
      if (!globalIsFinite(x) || value === 0) { return x; }
      if (Math.abs(x) > 0.5) {
        return Math.exp(x) - 1;
      }
      // A more precise approximation using Taylor series expansion
      // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
      var t = x;
      var sum = 0;
      var n = 1;
      while (sum + t !== sum) {
        sum += t;
        n += 1;
        t *= x / n;
      }
      return sum;
    },

    hypot: function (x, y) {
      var anyNaN = false;
      var allZero = true;
      var anyInfinity = false;
      var numbers = [];
      Array.prototype.every.call(arguments, function (arg) {
        var num = Number(arg);
        if (Number.isNaN(num)) {
          anyNaN = true;
        } else if (num === Infinity || num === -Infinity) {
          anyInfinity = true;
        } else if (num !== 0) {
          allZero = false;
        }
        if (anyInfinity) {
          return false;
        } else if (!anyNaN) {
          numbers.push(Math.abs(num));
        }
        return true;
      });
      if (anyInfinity) { return Infinity; }
      if (anyNaN) { return NaN; }
      if (allZero) { return 0; }

      var largest = Math.max.apply(Math, numbers);
      var divided = numbers.map(function (number) { return number / largest; });
      var sum = divided.map(square).reduce(add);
      return largest * Math.sqrt(sum);
    },

    log2: function (value) {
      return Math.log(value) * Math.LOG2E;
    },

    log10: function (value) {
      return Math.log(value) * Math.LOG10E;
    },

    log1p: function (value) {
      var x = Number(value);
      if (x < -1 || Number.isNaN(x)) { return NaN; }
      if (x === 0 || x === Infinity) { return x; }
      if (x === -1) { return -Infinity; }

      return (1 + x) - 1 === 0 ? x : x * (Math.log(1 + x) / ((1 + x) - 1));
    },

    sign: function (value) {
      var number = +value;
      if (number === 0) { return number; }
      if (Number.isNaN(number)) { return number; }
      return number < 0 ? -1 : 1;
    },

    sinh: function (value) {
      var x = Number(value);
      if (!globalIsFinite(value) || value === 0) { return value; }

      if (Math.abs(x) < 1) {
        return (Math.expm1(x) - Math.expm1(-x)) / 2;
      }
      return (Math.exp(x - 1) - Math.exp(-x - 1)) * Math.E / 2;
    },

    tanh: function (value) {
      var x = Number(value);
      if (Number.isNaN(value) || x === 0) { return x; }
      if (x === Infinity) { return 1; }
      if (x === -Infinity) { return -1; }
      var a = Math.expm1(x);
      var b = Math.expm1(-x);
      if (a === Infinity) { return 1; }
      if (b === Infinity) { return -1; }
      return (a - b) / (Math.exp(x) + Math.exp(-x));
    },

    trunc: function (value) {
      var number = Number(value);
      return number < 0 ? -Math.floor(-number) : Math.floor(number);
    },

    imul: function (x, y) {
      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
      x = ES.ToUint32(x);
      y = ES.ToUint32(y);
      var ah = (x >>> 16) & 0xffff;
      var al = x & 0xffff;
      var bh = (y >>> 16) & 0xffff;
      var bl = y & 0xffff;
      // the shift by 0 fixes the sign on the high part
      // the final |0 converts the unsigned value into a signed value
      return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
    },

    fround: function (x) {
      if (x === 0 || x === Infinity || x === -Infinity || Number.isNaN(x)) {
        return x;
      }
      var num = Number(x);
      return numberConversion.toFloat32(num);
    }
  };
  defineProperties(Math, MathShims);
  // Chrome 40 has an imprecise Math.tanh with very small numbers
  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
  // Chrome 40 loses Math.acosh precision with high numbers
  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
  // node 0.11 has an imprecise Math.sinh with very small numbers
  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
  // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
  var expm1OfTen = Math.expm1(10);
  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);

  var roundHandlesBoundaryConditions = Math.round(0.5 - Number.EPSILON / 4) === 0 && Math.round(-0.5 + Number.EPSILON / 3.99) === 1;
  var origMathRound = Math.round;
  defineProperty(Math, 'round', function round(x) {
    if (-0.5 <= x && x < 0.5 && x !== 0) {
      return Math.sign(x * 0);
    }
    return origMathRound(x);
  }, !roundHandlesBoundaryConditions);

  if (Math.imul(0xffffffff, 5) !== -5) {
    // Safari 6.1, at least, reports "0" for this value
    Math.imul = MathShims.imul;
  }

  // Promises
  // Simplest possible implementation; use a 3rd-party library if you
  // want the best possible speed and/or long stack traces.
  var PromiseShim = (function () {

    var Promise, Promise$prototype;

    ES.IsPromise = function (promise) {
      if (!ES.TypeIsObject(promise)) {
        return false;
      }
      if (!promise._promiseConstructor) {
        // _promiseConstructor is a bit more unique than _status, so we'll
        // check that instead of the [[PromiseStatus]] internal field.
        return false;
      }
      if (typeof promise._status === 'undefined') {
        return false; // uninitialized
      }
      return true;
    };

    // "PromiseCapability" in the spec is what most promise implementations
    // call a "deferred".
    var PromiseCapability = function (C) {
      if (!ES.IsCallable(C)) {
        throw new TypeError('bad promise constructor');
      }
      var capability = this;
      var resolver = function (resolve, reject) {
        capability.resolve = resolve;
        capability.reject = reject;
      };
      capability.promise = ES.Construct(C, [resolver]);
      // see https://bugs.ecmascript.org/show_bug.cgi?id=2478
      if (!capability.promise._es6construct) {
        throw new TypeError('bad promise constructor');
      }
      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
        throw new TypeError('bad promise constructor');
      }
    };

    // find an appropriate setImmediate-alike
    var setTimeout = globals.setTimeout;
    var makeZeroTimeout;
    /*global window */
    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
      makeZeroTimeout = function () {
        // from http://dbaron.org/log/20100309-faster-timeouts
        var timeouts = [];
        var messageName = 'zero-timeout-message';
        var setZeroTimeout = function (fn) {
          timeouts.push(fn);
          window.postMessage(messageName, '*');
        };
        var handleMessage = function (event) {
          if (event.source === window && event.data === messageName) {
            event.stopPropagation();
            if (timeouts.length === 0) { return; }
            var fn = timeouts.shift();
            fn();
          }
        };
        window.addEventListener('message', handleMessage, true);
        return setZeroTimeout;
      };
    }
    var makePromiseAsap = function () {
      // An efficient task-scheduler based on a pre-existing Promise
      // implementation, which we can use even if we override the
      // global Promise below (in order to workaround bugs)
      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
      var P = globals.Promise;
      return P && P.resolve && function (task) {
        return P.resolve().then(task);
      };
    };
    /*global process */
    var enqueue = ES.IsCallable(globals.setImmediate) ?
      globals.setImmediate.bind(globals) :
      typeof process === 'object' && process.nextTick ? process.nextTick :
      makePromiseAsap() ||
      (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() :
      function (task) { setTimeout(task, 0); }); // fallback

    var updatePromiseFromPotentialThenable = function (x, capability) {
      if (!ES.TypeIsObject(x)) {
        return false;
      }
      var resolve = capability.resolve;
      var reject = capability.reject;
      try {
        var then = x.then; // only one invocation of accessor
        if (!ES.IsCallable(then)) { return false; }
        then.call(x, resolve, reject);
      } catch (e) {
        reject(e);
      }
      return true;
    };

    var triggerPromiseReactions = function (reactions, x) {
      reactions.forEach(function (reaction) {
        enqueue(function () {
          // PromiseReactionTask
          var handler = reaction.handler;
          var capability = reaction.capability;
          var resolve = capability.resolve;
          var reject = capability.reject;
          try {
            var result = handler(x);
            if (result === capability.promise) {
              throw new TypeError('self resolution');
            }
            var updateResult =
              updatePromiseFromPotentialThenable(result, capability);
            if (!updateResult) {
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }
        });
      });
    };

    var promiseResolutionHandler = function (promise, onFulfilled, onRejected) {
      return function (x) {
        if (x === promise) {
          return onRejected(new TypeError('self resolution'));
        }
        var C = promise._promiseConstructor;
        var capability = new PromiseCapability(C);
        var updateResult = updatePromiseFromPotentialThenable(x, capability);
        if (updateResult) {
          return capability.promise.then(onFulfilled, onRejected);
        } else {
          return onFulfilled(x);
        }
      };
    };

    Promise = function (resolver) {
      var promise = this;
      promise = emulateES6construct(promise);
      if (!promise._promiseConstructor) {
        // we use _promiseConstructor as a stand-in for the internal
        // [[PromiseStatus]] field; it's a little more unique.
        throw new TypeError('bad promise');
      }
      if (typeof promise._status !== 'undefined') {
        throw new TypeError('promise already initialized');
      }
      // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
      if (!ES.IsCallable(resolver)) {
        throw new TypeError('not a valid resolver');
      }
      promise._status = 'unresolved';
      promise._resolveReactions = [];
      promise._rejectReactions = [];

      var resolve = function (resolution) {
        if (promise._status !== 'unresolved') { return; }
        var reactions = promise._resolveReactions;
        promise._result = resolution;
        promise._resolveReactions = void 0;
        promise._rejectReactions = void 0;
        promise._status = 'has-resolution';
        triggerPromiseReactions(reactions, resolution);
      };
      var reject = function (reason) {
        if (promise._status !== 'unresolved') { return; }
        var reactions = promise._rejectReactions;
        promise._result = reason;
        promise._resolveReactions = void 0;
        promise._rejectReactions = void 0;
        promise._status = 'has-rejection';
        triggerPromiseReactions(reactions, reason);
      };
      try {
        resolver(resolve, reject);
      } catch (e) {
        reject(e);
      }
      return promise;
    };
    Promise$prototype = Promise.prototype;
    var _promiseAllResolver = function (index, values, capability, remaining) {
      var done = false;
      return function (x) {
        if (done) { return; } // protect against being called multiple times
        done = true;
        values[index] = x;
        if ((--remaining.count) === 0) {
          var resolve = capability.resolve;
          resolve(values); // call w/ this===undefined
        }
      };
    };

    defineProperty(Promise, symbolSpecies, function (obj) {
      var constructor = this;
      // AllocatePromise
      // The `obj` parameter is a hack we use for es5
      // compatibility.
      var prototype = constructor.prototype || Promise$prototype;
      obj = obj || create(prototype);
      defineProperties(obj, {
        _status: void 0,
        _result: void 0,
        _resolveReactions: void 0,
        _rejectReactions: void 0,
        _promiseConstructor: void 0
      });
      obj._promiseConstructor = constructor;
      return obj;
    });
    defineProperties(Promise, {
      all: function all(iterable) {
        var C = this;
        var capability = new PromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        try {
          if (!ES.IsIterable(iterable)) {
            throw new TypeError('bad iterable');
          }
          var it = ES.GetIterator(iterable);
          var values = [], remaining = { count: 1 };
          for (var index = 0; ; index++) {
            var next = ES.IteratorNext(it);
            if (next.done) {
              break;
            }
            var nextPromise = C.resolve(next.value);
            var resolveElement = _promiseAllResolver(
              index, values, capability, remaining
            );
            remaining.count++;
            nextPromise.then(resolveElement, capability.reject);
          }
          if ((--remaining.count) === 0) {
            resolve(values); // call w/ this===undefined
          }
        } catch (e) {
          reject(e);
        }
        return capability.promise;
      },

      race: function race(iterable) {
        var C = this;
        var capability = new PromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        try {
          if (!ES.IsIterable(iterable)) {
            throw new TypeError('bad iterable');
          }
          var it = ES.GetIterator(iterable);
          while (true) {
            var next = ES.IteratorNext(it);
            if (next.done) {
              // If iterable has no items, resulting promise will never
              // resolve; see:
              // https://github.com/domenic/promises-unwrapping/issues/75
              // https://bugs.ecmascript.org/show_bug.cgi?id=2515
              break;
            }
            var nextPromise = C.resolve(next.value);
            nextPromise.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
        return capability.promise;
      },

      reject: function reject(reason) {
        var C = this;
        var capability = new PromiseCapability(C);
        var rejectPromise = capability.reject;
        rejectPromise(reason); // call with this===undefined
        return capability.promise;
      },

      resolve: function resolve(v) {
        var C = this;
        if (ES.IsPromise(v)) {
          var constructor = v._promiseConstructor;
          if (constructor === C) { return v; }
        }
        var capability = new PromiseCapability(C);
        var resolvePromise = capability.resolve;
        resolvePromise(v); // call with this===undefined
        return capability.promise;
      }
    });

    defineProperties(Promise$prototype, {
      'catch': function (onRejected) {
        return this.then(void 0, onRejected);
      },

      then: function then(onFulfilled, onRejected) {
        var promise = this;
        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }
        // this.constructor not this._promiseConstructor; see
        // https://bugs.ecmascript.org/show_bug.cgi?id=2513
        var C = this.constructor;
        var capability = new PromiseCapability(C);
        if (!ES.IsCallable(onRejected)) {
          onRejected = function (e) { throw e; };
        }
        if (!ES.IsCallable(onFulfilled)) {
          onFulfilled = function (x) { return x; };
        }
        var resolutionHandler = promiseResolutionHandler(promise, onFulfilled, onRejected);
        var resolveReaction = { capability: capability, handler: resolutionHandler };
        var rejectReaction = { capability: capability, handler: onRejected };
        switch (promise._status) {
          case 'unresolved':
            promise._resolveReactions.push(resolveReaction);
            promise._rejectReactions.push(rejectReaction);
            break;
          case 'has-resolution':
            triggerPromiseReactions([resolveReaction], promise._result);
            break;
          case 'has-rejection':
            triggerPromiseReactions([rejectReaction], promise._result);
            break;
          default:
            throw new TypeError('unexpected');
        }
        return capability.promise;
      }
    });

    return Promise;
  }());

  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
  if (globals.Promise) {
    delete globals.Promise.accept;
    delete globals.Promise.defer;
    delete globals.Promise.prototype.chain;
  }

  // export the Promise constructor.
  defineProperties(globals, { Promise: PromiseShim });
  // In Chrome 33 (and thereabouts) Promise is defined, but the
  // implementation is buggy in a number of ways.  Let's check subclassing
  // support to see if we have a buggy implementation.
  var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
    return S.resolve(42) instanceof S;
  });
  var promiseIgnoresNonFunctionThenCallbacks = (function () {
    try {
      globals.Promise.reject(42).then(null, 5).then(null, noop);
      return true;
    } catch (ex) {
      return false;
    }
  }());
  var promiseRequiresObjectContext = (function () {
    /*global Promise */
    try { Promise.call(3, noop); } catch (e) { return true; }
    return false;
  }());
  if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks || !promiseRequiresObjectContext) {
    /*globals Promise: true */
    Promise = PromiseShim;
    /*globals Promise: false */
    defineProperty(globals, 'Promise', PromiseShim, true);
  }

  // Map and Set require a true ES5 environment
  // Their fast path also requires that the environment preserve
  // property insertion order, which is not guaranteed by the spec.
  var testOrder = function (a) {
    var b = Object.keys(a.reduce(function (o, k) {
      o[k] = true;
      return o;
    }, {}));
    return a.join(':') === b.join(':');
  };
  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
  // some engines (eg, Chrome) only preserve insertion order for string keys
  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);

  if (supportsDescriptors) {

    var fastkey = function fastkey(key) {
      if (!preservesInsertionOrder) {
        return null;
      }
      var type = typeof key;
      if (type === 'string') {
        return '$' + key;
      } else if (type === 'number') {
        // note that -0 will get coerced to "0" when used as a property key
        if (!preservesNumericInsertionOrder) {
          return 'n' + key;
        }
        return key;
      }
      return null;
    };

    var emptyObject = function emptyObject() {
      // accomodate some older not-quite-ES5 browsers
      return Object.create ? Object.create(null) : {};
    };

    var collectionShims = {
      Map: (function () {

        var empty = {};

        function MapEntry(key, value) {
          this.key = key;
          this.value = value;
          this.next = null;
          this.prev = null;
        }

        MapEntry.prototype.isRemoved = function () {
          return this.key === empty;
        };

        function MapIterator(map, kind) {
          this.head = map._head;
          this.i = this.head;
          this.kind = kind;
        }

        MapIterator.prototype = {
          next: function () {
            var i = this.i, kind = this.kind, head = this.head, result;
            if (typeof this.i === 'undefined') {
              return { value: void 0, done: true };
            }
            while (i.isRemoved() && i !== head) {
              // back up off of removed entries
              i = i.prev;
            }
            // advance to next unreturned element.
            while (i.next !== head) {
              i = i.next;
              if (!i.isRemoved()) {
                if (kind === 'key') {
                  result = i.key;
                } else if (kind === 'value') {
                  result = i.value;
                } else {
                  result = [i.key, i.value];
                }
                this.i = i;
                return { value: result, done: false };
              }
            }
            // once the iterator is done, it is done forever.
            this.i = void 0;
            return { value: void 0, done: true };
          }
        };
        addIterator(MapIterator.prototype);

        function Map(iterable) {
          var map = this;
          if (!ES.TypeIsObject(map)) {
            throw new TypeError("Constructor Map requires 'new'");
          }
          map = emulateES6construct(map);
          if (!map._es6map) {
            throw new TypeError('bad map');
          }

          var head = new MapEntry(null, null);
          // circular doubly-linked list.
          head.next = head.prev = head;

          defineProperties(map, {
            _head: head,
            _storage: emptyObject(),
            _size: 0
          });

          // Optionally initialize map from iterable
          if (typeof iterable !== 'undefined' && iterable !== null) {
            var it = ES.GetIterator(iterable);
            var adder = map.set;
            if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }
            while (true) {
              var next = ES.IteratorNext(it);
              if (next.done) { break; }
              var nextItem = next.value;
              if (!ES.TypeIsObject(nextItem)) {
                throw new TypeError('expected iterable of pairs');
              }
              adder.call(map, nextItem[0], nextItem[1]);
            }
          }
          return map;
        }
        var Map$prototype = Map.prototype;
        defineProperty(Map, symbolSpecies, function (obj) {
          var constructor = this;
          var prototype = constructor.prototype || Map$prototype;
          obj = obj || create(prototype);
          defineProperties(obj, { _es6map: true });
          return obj;
        });

        Value.getter(Map.prototype, 'size', function () {
          if (typeof this._size === 'undefined') {
            throw new TypeError('size method called on incompatible Map');
          }
          return this._size;
        });

        defineProperties(Map.prototype, {
          get: function (key) {
            var fkey = fastkey(key);
            if (fkey !== null) {
              // fast O(1) path
              var entry = this._storage[fkey];
              if (entry) {
                return entry.value;
              } else {
                return;
              }
            }
            var head = this._head, i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return i.value;
              }
            }
          },

          has: function (key) {
            var fkey = fastkey(key);
            if (fkey !== null) {
              // fast O(1) path
              return typeof this._storage[fkey] !== 'undefined';
            }
            var head = this._head, i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return true;
              }
            }
            return false;
          },

          set: function (key, value) {
            var head = this._head, i = head, entry;
            var fkey = fastkey(key);
            if (fkey !== null) {
              // fast O(1) path
              if (typeof this._storage[fkey] !== 'undefined') {
                this._storage[fkey].value = value;
                return this;
              } else {
                entry = this._storage[fkey] = new MapEntry(key, value);
                i = head.prev;
                // fall through
              }
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.value = value;
                return this;
              }
            }
            entry = entry || new MapEntry(key, value);
            if (ES.SameValue(-0, key)) {
              entry.key = +0; // coerce -0 to +0 in entry
            }
            entry.next = this._head;
            entry.prev = this._head.prev;
            entry.prev.next = entry;
            entry.next.prev = entry;
            this._size += 1;
            return this;
          },

          'delete': function (key) {
            var head = this._head, i = head;
            var fkey = fastkey(key);
            if (fkey !== null) {
              // fast O(1) path
              if (typeof this._storage[fkey] === 'undefined') {
                return false;
              }
              i = this._storage[fkey].prev;
              delete this._storage[fkey];
              // fall through
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.key = i.value = empty;
                i.prev.next = i.next;
                i.next.prev = i.prev;
                this._size -= 1;
                return true;
              }
            }
            return false;
          },

          clear: function () {
            this._size = 0;
            this._storage = emptyObject();
            var head = this._head, i = head, p = i.next;
            while ((i = p) !== head) {
              i.key = i.value = empty;
              p = i.next;
              i.next = i.prev = head;
            }
            head.next = head.prev = head;
          },

          keys: function () {
            return new MapIterator(this, 'key');
          },

          values: function () {
            return new MapIterator(this, 'value');
          },

          entries: function () {
            return new MapIterator(this, 'key+value');
          },

          forEach: function (callback) {
            var context = arguments.length > 1 ? arguments[1] : null;
            var it = this.entries();
            for (var entry = it.next(); !entry.done; entry = it.next()) {
              if (context) {
                callback.call(context, entry.value[1], entry.value[0], this);
              } else {
                callback(entry.value[1], entry.value[0], this);
              }
            }
          }
        });
        addIterator(Map.prototype, function () { return this.entries(); });

        return Map;
      }()),

      Set: (function () {
        // Creating a Map is expensive.  To speed up the common case of
        // Sets containing only string or numeric keys, we use an object
        // as backing storage and lazily create a full Map only when
        // required.
        var SetShim = function Set(iterable) {
          var set = this;
          if (!ES.TypeIsObject(set)) {
            throw new TypeError("Constructor Set requires 'new'");
          }
          set = emulateES6construct(set);
          if (!set._es6set) {
            throw new TypeError('bad set');
          }

          defineProperties(set, {
            '[[SetData]]': null,
            _storage: emptyObject()
          });

          // Optionally initialize map from iterable
          if (typeof iterable !== 'undefined' && iterable !== null) {
            var it = ES.GetIterator(iterable);
            var adder = set.add;
            if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }
            while (true) {
              var next = ES.IteratorNext(it);
              if (next.done) { break; }
              var nextItem = next.value;
              adder.call(set, nextItem);
            }
          }
          return set;
        };
        var Set$prototype = SetShim.prototype;
        defineProperty(SetShim, symbolSpecies, function (obj) {
          var constructor = this;
          var prototype = constructor.prototype || Set$prototype;
          obj = obj || create(prototype);
          defineProperties(obj, { _es6set: true });
          return obj;
        });

        // Switch from the object backing storage to a full Map.
        var ensureMap = function ensureMap(set) {
          if (!set['[[SetData]]']) {
            var m = set['[[SetData]]'] = new collectionShims.Map();
            Object.keys(set._storage).forEach(function (k) {
              // fast check for leading '$'
              if (k.charCodeAt(0) === 36) {
                k = k.slice(1);
              } else if (k.charAt(0) === 'n') {
                k = +k.slice(1);
              } else {
                k = +k;
              }
              m.set(k, k);
            });
            set._storage = null; // free old backing storage
          }
        };

        Value.getter(SetShim.prototype, 'size', function () {
          if (typeof this._storage === 'undefined') {
            // https://github.com/paulmillr/es6-shim/issues/176
            throw new TypeError('size method called on incompatible Set');
          }
          ensureMap(this);
          return this['[[SetData]]'].size;
        });

        defineProperties(SetShim.prototype, {
          has: function (key) {
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              return !!this._storage[fkey];
            }
            ensureMap(this);
            return this['[[SetData]]'].has(key);
          },

          add: function (key) {
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              this._storage[fkey] = true;
              return this;
            }
            ensureMap(this);
            this['[[SetData]]'].set(key, key);
            return this;
          },

          'delete': function (key) {
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              var hasFKey = _hasOwnProperty(this._storage, fkey);
              return (delete this._storage[fkey]) && hasFKey;
            }
            ensureMap(this);
            return this['[[SetData]]']['delete'](key);
          },

          clear: function () {
            if (this._storage) {
              this._storage = emptyObject();
            } else {
              this['[[SetData]]'].clear();
            }
          },

          values: function () {
            ensureMap(this);
            return this['[[SetData]]'].values();
          },

          entries: function () {
            ensureMap(this);
            return this['[[SetData]]'].entries();
          },

          forEach: function (callback) {
            var context = arguments.length > 1 ? arguments[1] : null;
            var entireSet = this;
            ensureMap(entireSet);
            this['[[SetData]]'].forEach(function (value, key) {
              if (context) {
                callback.call(context, key, key, entireSet);
              } else {
                callback(key, key, entireSet);
              }
            });
          }
        });
        defineProperty(SetShim, 'keys', SetShim.values, true);
        addIterator(SetShim.prototype, function () { return this.values(); });

        return SetShim;
      }())
    };
    defineProperties(globals, collectionShims);

    if (globals.Map || globals.Set) {
      /*
        - In Firefox < 23, Map#size is a function.
        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
        - In Firefox 24, Map and Set do not implement forEach
        - In Firefox 25 at least, Map and Set are callable without "new"
      */
      if (
        typeof globals.Map.prototype.clear !== 'function' ||
        new globals.Set().size !== 0 ||
        new globals.Map().size !== 0 ||
        typeof globals.Map.prototype.keys !== 'function' ||
        typeof globals.Set.prototype.keys !== 'function' ||
        typeof globals.Map.prototype.forEach !== 'function' ||
        typeof globals.Set.prototype.forEach !== 'function' ||
        isCallableWithoutNew(globals.Map) ||
        isCallableWithoutNew(globals.Set) ||
        !supportsSubclassing(globals.Map, function (M) {
          var m = new M([]);
          // Firefox 32 is ok with the instantiating the subclass but will
          // throw when the map is used.
          m.set(42, 42);
          return m instanceof M;
        })
      ) {
        globals.Map = collectionShims.Map;
        globals.Set = collectionShims.Set;
      }
    }
    if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
      defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
    }
    // Shim incomplete iterator implementations.
    addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
    addIterator(Object.getPrototypeOf((new globals.Set()).keys()));
  }

  // Reflect
  if (!globals.Reflect) {
    defineProperty(globals, 'Reflect', {});
  }
  var Reflect = globals.Reflect;

  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
    if (!ES.TypeIsObject(target)) {
      throw new TypeError('target must be an object');
    }
  };

  // Some Reflect methods are basically the same as
  // those on the Object global, except that a TypeError is thrown if
  // target isn't an object. As well as returning a boolean indicating
  // the success of the operation.
  defineProperties(globals.Reflect, {
    // Apply method in a functional form.
    apply: function apply() {
      return ES.Call.apply(null, arguments);
    },

    // New operator in a functional form.
    construct: function construct(constructor, args) {
      if (!ES.IsCallable(constructor)) {
        throw new TypeError('First argument must be callable.');
      }

      return ES.Construct(constructor, args);
    },

    // When deleting a non-existent or configurable property,
    // true is returned.
    // When attempting to delete a non-configurable property,
    // it will return false.
    deleteProperty: function deleteProperty(target, key) {
      throwUnlessTargetIsObject(target);
      if (supportsDescriptors) {
        var desc = Object.getOwnPropertyDescriptor(target, key);

        if (desc && !desc.configurable) {
          return false;
        }
      }

      // Will return true.
      return delete target[key];
    },

    enumerate: function enumerate(target) {
      throwUnlessTargetIsObject(target);
      return new ObjectIterator(target, 'key');
    },

    has: function has(target, key) {
      throwUnlessTargetIsObject(target);
      return key in target;
    }
  });

  if (Object.getOwnPropertyNames) {
    defineProperties(globals.Reflect, {
      // Basically the result of calling the internal [[OwnPropertyKeys]].
      // Concatenating propertyNames and propertySymbols should do the trick.
      // This should continue to work together with a Symbol shim
      // which overrides Object.getOwnPropertyNames and implements
      // Object.getOwnPropertySymbols.
      ownKeys: function ownKeys(target) {
        throwUnlessTargetIsObject(target);
        var keys = Object.getOwnPropertyNames(target);

        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
          keys.push.apply(keys, Object.getOwnPropertySymbols(target));
        }

        return keys;
      }
    });
  }

  if (Object.preventExtensions) {
    defineProperties(globals.Reflect, {
      isExtensible: function isExtensible(target) {
        throwUnlessTargetIsObject(target);
        return Object.isExtensible(target);
      },
      preventExtensions: function preventExtensions(target) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function () {
          Object.preventExtensions(target);
        });
      }
    });
  }

  if (supportsDescriptors) {
    var internalGet = function get(target, key, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);

      if (!desc) {
        var parent = Object.getPrototypeOf(target);

        if (parent === null) {
          return undefined;
        }

        return internalGet(parent, key, receiver);
      }

      if ('value' in desc) {
        return desc.value;
      }

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return undefined;
    };

    var internalSet = function set(target, key, value, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);

      if (!desc) {
        var parent = Object.getPrototypeOf(target);

        if (parent !== null) {
          return internalSet(parent, key, value, receiver);
        }

        desc = {
          value: void 0,
          writable: true,
          enumerable: true,
          configurable: true
        };
      }

      if ('value' in desc) {
        if (!desc.writable) {
          return false;
        }

        if (!ES.TypeIsObject(receiver)) {
          return false;
        }

        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);

        if (existingDesc) {
          return Reflect.defineProperty(receiver, key, {
            value: value
          });
        } else {
          return Reflect.defineProperty(receiver, key, {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }

      if (desc.set) {
        desc.set.call(receiver, value);
        return true;
      }

      return false;
    };

    var callAndCatchException = function ConvertExceptionToBoolean(func) {
      try { func(); } catch (_) { return false; }
      return true;
    };

    defineProperties(globals.Reflect, {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function () {
          Object.defineProperty(target, propertyKey, attributes);
        });
      },

      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        throwUnlessTargetIsObject(target);
        return Object.getOwnPropertyDescriptor(target, propertyKey);
      },

      // Syntax in a functional form.
      get: function get(target, key) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 2 ? arguments[2] : target;

        return internalGet(target, key, receiver);
      },

      set: function set(target, key, value) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 3 ? arguments[3] : target;

        return internalSet(target, key, value, receiver);
      }
    });
  }

  if (Object.getPrototypeOf) {
    var objectDotGetPrototypeOf = Object.getPrototypeOf;
    defineProperties(globals.Reflect, {
      getPrototypeOf: function getPrototypeOf(target) {
        throwUnlessTargetIsObject(target);
        return objectDotGetPrototypeOf(target);
      }
    });
  }

  if (Object.setPrototypeOf) {
    var willCreateCircularPrototype = function (object, proto) {
      while (proto) {
        if (object === proto) {
          return true;
        }
        proto = Reflect.getPrototypeOf(proto);
      }
      return false;
    };

    defineProperties(globals.Reflect, {
      // Sets the prototype of the given object.
      // Returns true on success, otherwise false.
      setPrototypeOf: function setPrototypeOf(object, proto) {
        throwUnlessTargetIsObject(object);
        if (proto !== null && !ES.TypeIsObject(proto)) {
          throw new TypeError('proto must be an object or null');
        }

        // If they already are the same, we're done.
        if (proto === Reflect.getPrototypeOf(object)) {
          return true;
        }

        // Cannot alter prototype if object not extensible.
        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
          return false;
        }

        // Ensure that we do not create a circular prototype chain.
        if (willCreateCircularPrototype(object, proto)) {
          return false;
        }

        Object.setPrototypeOf(object, proto);

        return true;
      }
    });
  }

  if (String(new Date(NaN)) !== 'Invalid Date') {
    var dateToString = Date.prototype.toString;
    var shimmedDateToString = function toString() {
      var valueOf = +this;
      if (valueOf !== valueOf) {
        return 'Invalid Date';
      }
      return dateToString.call(this);
    };
    defineProperty(shimmedDateToString, 'toString', dateToString.toString, true);
    defineProperty(Date.prototype, 'toString', shimmedDateToString, true);
  }

  // Annex B HTML methods
  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additional-properties-of-the-string.prototype-object
  var stringHTMLshims = {
    anchor: function anchor(name) { return ES.CreateHTML(this, 'a', 'name', name); },
    big: function big() { return ES.CreateHTML(this, 'big', '', ''); },
    blink: function blink() { return ES.CreateHTML(this, 'blink', '', ''); },
    bold: function bold() { return ES.CreateHTML(this, 'b', '', ''); },
    fixed: function fixed() { return ES.CreateHTML(this, 'tt', '', ''); },
    fontcolor: function fontcolor(color) { return ES.CreateHTML(this, 'font', 'color', color); },
    fontsize: function fontsize(size) { return ES.CreateHTML(this, 'font', 'size', size); },
    italics: function italics() { return ES.CreateHTML(this, 'i', '', ''); },
    link: function link(url) { return ES.CreateHTML(this, 'a', 'href', url); },
    small: function small() { return ES.CreateHTML(this, 'small', '', ''); },
    strike: function strike() { return ES.CreateHTML(this, 'strike', '', ''); },
    sub: function sub() { return ES.CreateHTML(this, 'sub', '', ''); },
    sup: function sub() { return ES.CreateHTML(this, 'sup', '', ''); }
  };
  defineProperties(String.prototype, stringHTMLshims);
  Object.keys(stringHTMLshims).forEach(function (key) {
    var method = String.prototype[key];
    var shouldOverwrite = false;
    if (ES.IsCallable(method)) {
      var output = method.call('', ' " ');
      var quotesCount = [].concat(output.match(/"/g)).length;
      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
    } else {
      shouldOverwrite = true;
    }
    if (shouldOverwrite) {
      defineProperty(String.prototype, key, stringHTMLshims[key], true);
    }
  });

  return globals;
}));

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Shadow = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var AbstractView, absurd;

  absurd = require('./absurd');

  AbstractView = (function() {
    AbstractView.setComponent = function(component) {
      this.component = absurd.component(this.name, component)();
      return this.component.populate();
    };

    AbstractView.setComponent({
      html: {
        "div.shadow-abstract-view": "AbstractView"
      },
      css: {
        ".shadow-abstract-view": {
          "font-family": "monospace",
          "display": "inline-block",
          "position": "relative"
        }
      }
    });

    function AbstractView(item, exports) {
      if (exports == null) {
        exports = {};
      }
      this.exports || (this.exports = exports);
      this.exports['item'] = item;
      this.element = this.constructor.component.el.cloneNode(true);
      rivets.bind(this.element, this.exports);
    }

    return AbstractView;

  })();

  module.exports = AbstractView;

}).call(this);

//# sourceMappingURL=abstract_view.js.map

},{"./absurd":2}],2:[function(require,module,exports){
(function() {
  module.exports = Absurd();

}).call(this);

//# sourceMappingURL=absurd.js.map

},{}],3:[function(require,module,exports){
(function() {
  var AbstractView, BooleanView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  BooleanView = (function(_super) {
    __extends(BooleanView, _super);

    function BooleanView() {
      return BooleanView.__super__.constructor.apply(this, arguments);
    }

    BooleanView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-boolean-view": "{ item }"
      },
      css: {
        ".shadow-boolean-view": {
          "color": "#ef2929"
        }
      }
    });

    return BooleanView;

  })(AbstractView);

  module.exports = BooleanView;

}).call(this);

//# sourceMappingURL=boolean_view.js.map

},{"./abstract_view":1}],4:[function(require,module,exports){
(function() {
  var EnumerableView, ExpandableView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ExpandableView = require('./expandable_view');

  EnumerableView = (function(_super) {
    __extends(EnumerableView, _super);

    EnumerableView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-enumerable-view": {
          "table": [
            {
              "thead[rv-on-click='toggle']": {
                "tr": {
                  "td[colspan='2']": "{ name }"
                }
              }
            }, {
              "tbody[rv-if='expanded']": {
                "tr[rv-each-entry='item']": [
                  {
                    "td.key[rv-text='index']": ""
                  }, {
                    "td.value[rv-view='entry']": ""
                  }
                ]
              }
            }
          ]
        }
      },
      css: {
        ".shadow-enumerable-view": {
          "box-shadow": "0 0 .5em rgba(0, 0, 0, .3)",
          "max-height": "100%",
          "overflow-x": "overlay",
          "text-align": "left",
          "color": "#d3d7cf",
          "> table": {
            "min-width": "100%",
            "border-spacing": "0",
            "border-collapse": "collapse",
            "> * > tr": {
              "> td": {
                "margin": "0",
                "padding": ".5em"
              }
            },
            "> thead": {
              "color": "#eeeeec",
              "background-color": "#3465a4"
            },
            "> tbody": {
              "> tr": {
                "&:nth-child(even)": {
                  "background": "rgba(0, 0, 0, .1)"
                },
                "&:nth-child(odd)": {
                  "background": "rgba(255, 255, 255, .05)"
                },
                "> td": {
                  "vertical-align": "top",
                  "&.key": {
                    "text-align": "right",
                    "color": "#729fcf"
                  },
                  "&.value": {
                    "color": "blue"
                  }
                }
              }
            }
          }
        }
      }
    });

    function EnumerableView(item) {
      var _base;
      this.exports || (this.exports = {});
      (_base = this.exports).name || (_base.name = item.constructor.name);
      this.exports.toggleEditable = this.toggleEditable;
      EnumerableView.__super__.constructor.call(this, item);
    }

    EnumerableView.prototype.toggleEditable = function(event) {
      return event.srcElement.parentElement.setAttribute('data-editable');
    };

    return EnumerableView;

  })(ExpandableView);

  module.exports = EnumerableView;

}).call(this);

//# sourceMappingURL=enumerable_view.js.map

},{"./expandable_view":5}],5:[function(require,module,exports){
(function() {
  var AbstractView, ExpandableView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  ExpandableView = (function(_super) {
    __extends(ExpandableView, _super);

    ExpandableView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view": [
          {
            "button.shadow-toggle[rv-on-click='toggle']": "+"
          }, {
            "div.shadow-expandee[rv-when='expanded']": ""
          }
        ]
      },
      css: {
        ".shadow-expandable-view": {
          "transition": "width 1s ease-in-out",
          ".shadow-toggle": {
            "cursor": "pointer"
          },
          "button.shadow-toggle": {
            "background": "rgb(100, 100, 100)",
            "color": "rgb(240, 240, 240)",
            "font-size": "16px",
            "width": "1em",
            "height": "1em",
            "padding": "0",
            "line-height": "1em",
            "text-align": "center",
            "border": "1px solid rgb(70, 70, 70)",
            "border-radius": "4px"
          }
        }
      }
    });

    function ExpandableView() {
      this.toggle = __bind(this.toggle, this);
      ExpandableView.__super__.constructor.apply(this, arguments);
      this.exports.expanded = false;
      this.exports.toggle = this.toggle;
    }

    ExpandableView.prototype.expand = function() {
      return this.exports.expanded = true;
    };

    ExpandableView.prototype.collapse = function() {
      return this.exports.expanded = false;
    };

    ExpandableView.prototype.toggle = function() {
      if (this.exports.expanded) {
        return this.collapse();
      } else {
        return this.expand();
      }
    };

    return ExpandableView;

  })(AbstractView);

  module.exports = ExpandableView;

}).call(this);

//# sourceMappingURL=expandable_view.js.map

},{"./abstract_view":1}],6:[function(require,module,exports){
(function() {
  var factories;

  factories = {
    object: function(item) {
      var EnumerableView;
      if (typeof item !== 'object') {
        return null;
      }
      EnumerableView = require('./enumerable_view');
      return new EnumerableView(item);
    },
    "function": function(item) {
      var FunctionView;
      if (typeof item !== 'function') {
        return null;
      }
      FunctionView = require('./function_view');
      return new FunctionView(item);
    },
    array: function(item) {
      var EnumerableView;
      if (!(item instanceof Array)) {
        return null;
      }
      EnumerableView = require('./enumerable_view');
      return new EnumerableView(item);
    },
    undefined: function(item) {
      var UndefinedView;
      if (typeof item !== 'undefined') {
        return null;
      }
      UndefinedView = require('./undefined_view');
      return new UndefinedView(item);
    },
    "null": function(item) {
      var NullView;
      if (item !== null) {
        return null;
      }
      NullView = require('./null_view');
      return new NullView(item);
    },
    boolean: function(item) {
      var BooleanView;
      if (typeof item !== 'boolean') {
        return null;
      }
      BooleanView = require('./boolean_view');
      return new BooleanView(item);
    },
    number: function(item) {
      var NumberView;
      if (typeof item !== 'number') {
        return null;
      }
      NumberView = require('./number_view');
      return new NumberView(item);
    },
    string: function(item) {
      var StringView;
      if (typeof item !== 'string') {
        return null;
      }
      StringView = require('./string_view');
      return new StringView(item);
    }
  };

  module.exports = Object.keys(factories).reverse().map(function(key) {
    return factories[key];
  });

}).call(this);

//# sourceMappingURL=factories.js.map

},{"./boolean_view":3,"./enumerable_view":4,"./function_view":8,"./null_view":9,"./number_view":10,"./string_view":13,"./undefined_view":14}],7:[function(require,module,exports){
(function() {
  var factories;

  factories = require('./factories');

  module.exports = function(item) {
    var factory, view, _i, _len;
    for (_i = 0, _len = factories.length; _i < _len; _i++) {
      factory = factories[_i];
      if (view = factory(item)) {
        return view;
      }
    }
  };

}).call(this);

//# sourceMappingURL=factory.js.map

},{"./factories":6}],8:[function(require,module,exports){
(function() {
  var EnumerableView, FunctionView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  EnumerableView = require('./enumerable_view');

  FunctionView = (function(_super) {
    __extends(FunctionView, _super);

    FunctionView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-enumerable-view .shadow-function-view": {
          "table": [
            {
              "thead[rv-on-click='toggle']": {
                "tr": {
                  "td[colspan='2']": "function { name }"
                }
              }
            }, {
              "tbody[rv-if='expanded']": {
                "tr[rv-each-entry='item']": [
                  {
                    "td.key[rv-text='index']": ""
                  }, {
                    "td.value[rv-view='entry']": ""
                  }
                ]
              }
            }
          ]
        }
      }
    });

    function FunctionView(item) {
      var _base;
      this.exports || (this.exports = {});
      (_base = this.exports).name || (_base.name = item.name);
      FunctionView.__super__.constructor.call(this, item);
    }

    return FunctionView;

  })(EnumerableView);

  module.exports = FunctionView;

}).call(this);

//# sourceMappingURL=function_view.js.map

},{"./enumerable_view":4}],9:[function(require,module,exports){
(function() {
  var AbstractView, NullView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  NullView = (function(_super) {
    __extends(NullView, _super);

    function NullView() {
      return NullView.__super__.constructor.apply(this, arguments);
    }

    NullView.setComponent({
      html: {
        "div.shadow-null-view .shadow-undefined-view": "null"
      },
      css: {
        ".shadow-null-view": {
          "color": "#fcaf3e"
        }
      }
    });

    return NullView;

  })(AbstractView);

  module.exports = NullView;

}).call(this);

//# sourceMappingURL=null_view.js.map

},{"./abstract_view":1}],10:[function(require,module,exports){
(function() {
  var AbstractView, NumberView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  NumberView = (function(_super) {
    __extends(NumberView, _super);

    function NumberView() {
      return NumberView.__super__.constructor.apply(this, arguments);
    }

    NumberView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-number-view": "{ item }"
      },
      css: {
        ".shadow-number-view": {
          "color": "#ad7fa0"
        }
      }
    });

    return NumberView;

  })(AbstractView);

  module.exports = NumberView;

}).call(this);

//# sourceMappingURL=number_view.js.map

},{"./abstract_view":1}],11:[function(require,module,exports){
(function() {
  var ExpandableView, RootView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ExpandableView = require('./expandable_view');

  RootView = (function(_super) {
    __extends(RootView, _super);

    function RootView() {
      return RootView.__super__.constructor.apply(this, arguments);
    }

    RootView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-root-view .shadow-expandee": {
          "div.child[rv-view='item']": ""
        }
      },
      css: {
        ".shadow-root-view": {
          "&.shadow-expandee, >.shadow-expandee": {
            "color": "pink",
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background": "rgba(0, 0, 0, .6)",
            "text-align": "center"
          },
          "&.child, >.child": {
            "padding": ".5em",
            "display": "inline-block",
            "background-color": "#2e3436"
          }
        }
      }
    });

    return RootView;

  })(ExpandableView);

  module.exports = RootView;

}).call(this);

//# sourceMappingURL=root_view.js.map

},{"./expandable_view":5}],12:[function(require,module,exports){
(function() {
  var Shadow, factory;

  factory = require('./factory');

  require('./utils/rivets_shadow');

  Shadow = function() {
    return factory.apply(null, arguments);
  };

  Shadow.createRootView = function(item) {
    Shadow.rootView = new Shadow.RootView(item);
    return document.body.appendChild(Shadow.rootView.element);
  };

  Shadow.show = function(item) {
    if (Shadow.rootView != null) {
      return Shadow.rootView.exports.item = item;
    } else {
      return Shadow.createRootView(item);
    }
  };

  Shadow.init = function() {
    return document.onkeyup = (function(_this) {
      return function(event) {
        if (event.which === 192) {
          _this.show(Shadow.AbstractView);
          return _this.rootView.toggle();
        }
      };
    })(this);
  };

  Shadow.factories = require('./factories');

  Shadow.AbstractView = require('./abstract_view');

  Shadow.NullView = require('./null_view');

  Shadow.UndefinedView = require('./undefined_view');

  Shadow.BooleanView = require('./boolean_view');

  Shadow.StringView = require('./string_view');

  Shadow.FunctionView = require('./function_view');

  Shadow.EnumerableView = require('./enumerable_view');

  Shadow.ExpandableView = require('./expandable_view');

  Shadow.RootView = require('./root_view');

  module.exports = Shadow;

}).call(this);

//# sourceMappingURL=shadow.js.map

},{"./abstract_view":1,"./boolean_view":3,"./enumerable_view":4,"./expandable_view":5,"./factories":6,"./factory":7,"./function_view":8,"./null_view":9,"./root_view":11,"./string_view":13,"./undefined_view":14,"./utils/rivets_shadow":15}],13:[function(require,module,exports){
(function() {
  var AbstractView, StringView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  StringView = (function(_super) {
    __extends(StringView, _super);

    function StringView() {
      return StringView.__super__.constructor.apply(this, arguments);
    }

    StringView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-string-view": "\"{ item }\""
      },
      css: {
        ".shadow-string-view": {
          "color": "#fce94f",
          "max-width": "10em"
        }
      }
    });

    return StringView;

  })(AbstractView);

  module.exports = StringView;

}).call(this);

//# sourceMappingURL=string_view.js.map

},{"./abstract_view":1}],14:[function(require,module,exports){
(function() {
  var AbstractView, UndefinedView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  UndefinedView = (function(_super) {
    __extends(UndefinedView, _super);

    function UndefinedView() {
      return UndefinedView.__super__.constructor.apply(this, arguments);
    }

    UndefinedView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-undefined-view": "undefined"
      },
      css: {
        ".shadow-undefined-view": {
          "color": "#fcaf3e"
        }
      }
    });

    return UndefinedView;

  })(AbstractView);

  module.exports = UndefinedView;

}).call(this);

//# sourceMappingURL=undefined_view.js.map

},{"./abstract_view":1}],15:[function(require,module,exports){
(function() {
  var callbacks, factory;

  factory = require('../factory');

  callbacks = new Map();

  rivets.adapters['.'] = {
    observe: function(obj, keypath, callback) {
      var fn;
      console.log(obj, keypath, callback);
      fn = function(events) {
        var event, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          if (event.name === keypath) {
            _results.push(callback());
          }
        }
        return _results;
      };
      if (!callbacks.has(obj)) {
        callbacks.set(obj, {});
      }
      if (!callbacks.get(obj)["rv_" + keypath]) {
        callbacks.get(obj)["rv_" + keypath] = new WeakMap();
      }
      callbacks.get(obj)["rv_" + keypath].set(callback, fn);
      return Object.observe(obj, fn);
    },
    unobserve: function(obj, keypath, callback) {
      var fn, _ref, _ref1;
      if (fn = (_ref = callbacks.get(obj)) != null ? (_ref1 = _ref["rv_" + keypath]) != null ? _ref1.get(callback) : void 0 : void 0) {
        return Object.unobserve(obj, fn);
      }
    },
    get: function(obj, keypath) {
      console.log(keypath, obj);
      return obj[keypath];
    },
    set: function(obj, keypath, value) {
      return obj[keypath] = value;
    }
  };

  rivets.binders['each-*'] = {
    "function": true,
    bind: function(el) {
      var attr, view, _i, _len, _ref;
      console.log('bind');
      this.exports = new Map();
      if (this.marker == null) {
        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
        this.marker = document.createComment(" rivets: " + this.type + " ");
        this.iterated = [];
        el.removeAttribute(attr);
        el.parentNode.insertBefore(this.marker, el);
        el.parentNode.removeChild(el);
      } else {
        _ref = this.iterated;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          view = _ref[_i];
          view.bind();
        }
      }
    },
    unbind: function(el) {
      var key, keys, _i, _len, _results;
      console.log('unbind');
      keys = Object.keys(this.views);
      _results = [];
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        _results.push(this.binder["delete"].call(this, key));
      }
      return _results;
    },
    routine: function(el, collection) {
      var key, modelName, _i, _len, _ref;
      if (collection == null) {
        collection = [];
      }
      console.log('routine');
      modelName = this.args[0];
      this.el = el;
      this.collection = collection;
      if (this.views && this.views[key]) {
        this.binder["delete"].call(this, key);
      }
      this.views = {};
      _ref = Object.keys(this.collection);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        this.binder.add.call(this, key, this.collection[key]);
      }
      return Object.observe(this.collection, (function(_this) {
        return function(events) {
          var event, eventKey, eventModel, _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = events.length; _j < _len1; _j++) {
            event = events[_j];
            eventKey = event.name;
            eventModel = event.object[event.name];
            switch (event.type) {
              case 'add':
                _results.push(_this.binder.add.call(_this, eventKey, eventModel));
                break;
              case 'delete':
                _results.push(_this.binder["delete"].call(_this, eventKey, eventModel));
                break;
              case 'update':
                _this.binder["delete"].call(_this, key);
                _results.push(_this.binder.add.call(_this, key, eventModel));
                break;
              default:
                _results.push(void 0);
            }
          }
          return _results;
        };
      })(this));
    },
    add: function(key, model) {
      var data, index, keys, modelName, options, previous, template, view;
      modelName = this.args[0];
      data = {
        index: key
      };
      data[modelName] = model;
      this.exports.set(key, data);
      Object.observe(data, (function(_this) {
        return function(events) {
          var event, eventKey, eventModel, _i, _len, _results;
          _results = [];
          for (_i = 0, _len = events.length; _i < _len; _i++) {
            event = events[_i];
            eventKey = event.name;
            eventModel = event.object[event.name];
            console.log(eventKey, eventModel, event);
            _results.push(_this.collection[key] = eventModel);
          }
          return _results;
        };
      })(this));
      options = this.view.options();
      options.preloadData = true;
      template = this.el.cloneNode(true);
      view = new rivets._.View(template, data, options);
      this.views[key] = view;
      view.bind();
      keys = Object.keys(this.collection);
      index = keys.indexOf(key);
      previous = index ? keys[parseInt(index) - 1] : void 0;
      return this.marker.parentNode.insertBefore(template, previous != null ? previous.nextSibling : void 0);
    },
    "delete": function(key, model) {
      var view;
      view = this.views[key];
      view.unbind();
      view.els.forEach(function(el) {
        return el.remove();
      });
      return delete this.views[key];
    }
  };

  rivets.binders.child = function(el, child) {
    el.innerHTML = '';
    if (child == null) {
      return;
    }
    if (child.nodeName != null) {
      return el.appendChild(child);
    }
  };

  rivets.binders.children = function(el, children) {
    var child, _i, _len, _results;
    el.innerHTML = '';
    if (children == null) {
      return;
    }
    _results = [];
    for (_i = 0, _len = children.length; _i < _len; _i++) {
      child = children[_i];
      if ((child != null ? child.nodeName : void 0) != null) {
        _results.push(el.appendChild(child));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  rivets.binders.view = {
    "function": true,
    routine: function(el, item) {
      var view;
      el.innerHTML = '';
      view = factory(item);
      return el.appendChild(view.element);
    }
  };

  rivets.binders["eval"] = {
    "function": true,
    bind: function(el) {
      return el.onchange = (function(_this) {
        return function(event) {
          return _this.model[_this.keypath] = eval(el.value);
        };
      })(this);
    },
    unbind: function(el) {
      return el.onchange = null;
    },
    routine: function(el, item) {
      return el.value = item;
    }
  };

}).call(this);

//# sourceMappingURL=rivets_shadow.js.map

},{"../factory":7}]},{},[12])(12)
});