(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},s=[],a=0;a<n.length;a++){var c=n[a],u=r.base?c[0]+r.base:c[0],l=i[u]||0,p="".concat(u," ").concat(l);i[u]=l+1;var d=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var a=t(i[s]);e[a].references--}for(var c=r(n,o),u=0;u<i.length;u++){var l=t(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},323:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(601),o=t.n(r),i=t(314),s=t.n(i)()(o());s.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const a=s},422:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(601),o=t.n(r),i=t(314),s=t.n(i)()(o());s.push([n.id,"body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n.news-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1rem;\n    padding: 1rem;\n}\n\n@media (max-width: 768px) {\n    .news-container {\n        grid-template-columns: 1fr;\n    }\n}\n\n@media (max-width: 320px) {\n    .news-container {\n        padding: 0.5rem;\n    }\n}",""]);const a=s},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},575:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(601),o=t.n(r),i=t(314),s=t.n(i)()(o());s.push([n.id,".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n",""]);const a=s},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r,o=function(){return o=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},o.apply(this,arguments)},i=function(){function n(n,e){this.baseLink=n,this.options=e}return n.prototype.getResp=function(n,e){var t=n.endpoint,r=n.options,o=void 0===r?{}:r;void 0===e&&(e=function(){console.error("No callback for GET response")}),this.load("GET",t,e,o)},n.prototype.errorHandler=function(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log("Sorry, but there is ".concat(n.status," error: ").concat(n.statusText)),Error(n.statusText);return n},n.prototype.makeUrl=function(n,e){var t=o(o({},this.options),n),r="".concat(this.baseLink).concat(e,"?");return Object.keys(t).forEach((function(n){r+="".concat(n,"=").concat(t[n],"&")})),r.slice(0,-1)},n.prototype.load=function(n,e,t,r){void 0===r&&(r={}),fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler).then((function(n){return n.json()})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))},n}(),s=(r=function(n,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},r(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)});const a=function(n){function e(){return n.call(this,"https://rss-news-api.onrender.com/",{apiKey:"MISSING_ENV_VAR".API_KEY||""})||this}return s(e,n),e}(i);var c=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();const u=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return c(e,n),e.prototype.getSources=function(e){n.prototype.getResp.call(this,{endpoint:"sources"},e)},e.prototype.getNews=function(e,t){for(var r=e.target,o=e.currentTarget;r!==o;){if(r.classList.contains("source__item")){var i=r.getAttribute("data-source-id");return void(i&&o.getAttribute("data-source")!==i&&(o.setAttribute("data-source",i),n.prototype.getResp.call(this,{endpoint:"everything",options:{sources:i}},t)))}r=r.parentNode}},e.prototype.init=function(n){this.getSources(n)},e}(a);var l=t(72),p=t.n(l),d=t(825),f=t.n(d),m=t(659),_=t.n(m),h=t(56),w=t.n(h),v=t(540),g=t.n(v),y=t(113),b=t.n(y),x=t(323),A={};A.styleTagTransform=b(),A.setAttributes=w(),A.insert=_().bind(null,"head"),A.domAPI=f(),A.insertStyleElement=g(),p()(x.A,A),x.A&&x.A.locals&&x.A.locals;var S=function(){function n(){}return n.prototype.draw=function(n){var e=n.length>=10?n.filter((function(n,e){return e<10})):n,t=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");e.forEach((function(n,e){var o=r.content.cloneNode(!0),i=o.querySelector(".news__item");i&&e%2&&i.classList.add("alt");var s=o.querySelector(".news__meta-photo");s&&(s.style.backgroundImage="url(".concat(n.urlToImage||"img/news_placeholder.jpg",")"));var a=o.querySelector(".news__meta-author");a&&(a.textContent=n.author||n.source.name);var c=o.querySelector(".news__meta-date");c&&(c.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"));var u=o.querySelector(".news__description-title");u&&(u.textContent=n.title);var l=o.querySelector(".news__description-source");l&&(l.textContent=n.source.name);var p=o.querySelector(".news__description-content");p&&(p.textContent=n.description);var d=o.querySelector(".news__read-more a");d&&d.setAttribute("href",n.url),t.append(o)}));var o=document.querySelector(".news");o&&(o.innerHTML="",o.appendChild(t))},n}();const k=S;var T=t(575),E={};E.styleTagTransform=b(),E.setAttributes=w(),E.insert=_().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=g(),p()(T.A,E),T.A&&T.A.locals&&T.A.locals;const O=function(){function n(){}return n.prototype.draw=function(n){var e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");n.forEach((function(n){var r=t.content.cloneNode(!0),o=r.querySelector(".source__item-name");o&&(o.textContent=n.name);var i=r.querySelector(".source__item");i&&i.setAttribute("data-source-id",n.id),e.append(r)}));var r=document.querySelector(".sources");r&&r.append(e)},n}();var j=function(){function n(){this.news=new k,this.sources=new O}return n.prototype.drawNews=function(n){var e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)},n.prototype.drawSources=function(n){var e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)},n}();const q=function(){function n(){this.controller=new u,this.view=new j}return n.prototype.start=function(){var n=this,e=document.querySelector(".sources");e&&e.addEventListener("click",(function(e){e.target&&n.controller.getNews(e,(function(e){return n.view.drawNews(e)}))})),this.controller.init((function(t){n.view.drawSources(t);var r=e.querySelector(".source__item");if(r){var o=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});r.dispatchEvent(o)}}))},n}();var C=t(422),I={};I.styleTagTransform=b(),I.setAttributes=w(),I.insert=_().bind(null,"head"),I.domAPI=f(),I.insertStyleElement=g(),p()(C.A,I),C.A&&C.A.locals&&C.A.locals,(new q).start()})();