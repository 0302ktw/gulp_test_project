/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

/*!
 * GSAP 3.8.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&oe}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=ct.length;r--&&!ct[r].targetTest(i););e=ct[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(xt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t){return Math.round(1e7*t)/1e7||0}function ea(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function fa(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ga(t,e,r,i){ht.length&&fa(),t.render(e,r,i),ht.length&&fa()}function ha(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ia(t){return t}function ja(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ka(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ma(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?ma(t[r]||(t[r]={}),e[r]):e[r]);return t}function na(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function oa(e){var r=e.parent||I,i=e.keyframes?ka:ja;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function sa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ta(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function wa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function ya(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function za(t){return t._end=da(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Aa(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=da(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),r._dirty||ta(r,t)),t}function Ba(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=ya(t.rawTime(),e),(!e._dur||Tt(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),ta(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ca(t,e,r,i){return e.parent&&sa(e),e._start=da((q(r)?r:r||t!==I?bt(t,r,e):t._time)+e._delay),e._end=da(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),vt(e)||(t._recent=e),i||Ba(t,e),t}function Da(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ea(t,e,r,i){return jt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==St.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ja(t,e,r,i){var n=t._repeat,a=da(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:da(a*(n+1)+t._rDelay*n):a,s&&!i?Aa(t,t._tTime=t._tDur*s):t.parent&&za(t),r||ta(t.parent,t),t}function Ka(t){return t instanceof Nt?ta(t):Ja(t,t._dur)}function Na(e,r,i){var n,a,s=q(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=t(a.vars.inherit)&&a.parent;u.immediateRender=t(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Vt(r[0],u,r[1+o])}function Oa(t,e){return t||0===t?e(t):e}function Qa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Ta(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Xa(t){return t.sort(function(){return.5-Math.random()})}function Ya(t){if(p(t))return t;var c=s(t)?t:{each:t},_=Bt(c.ease),m=c.from||0,g=parseFloat(c.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,b=c.axis,T=m,w=m;return o(m)?T=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(T=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||c).length,p=v[d];if(!p){if(!(f="auto"===c.grid?0:(c.grid||[1,j])[1])){for(h=-j;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(p=v[d]=[],i=y?Math.min(f,d)*T-.5:m%f,n=y?d*w/f-.5:m/f|0,l=j,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),p[u]=o=b?Math.abs("y"===b?s:a):W(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Xa(p),p.max=h-l,p.min=l,p.v=d=(parseFloat(c.amount)||parseFloat(c.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),p.b=d<0?g-d:g,p.u=Qa(c.amount||c.each)||0,_=_&&d<0?Rt(_):_}return d=(p[t]-p.min)/p.max||0,da(p.b+(_?_(d):d)*p.v)+p.u}}function Za(r){var i=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Qa(t))}}function $a(u,t){var h,l,e=Z(u);return!e&&s(u)&&(h=e=u.radius||j,u.values?(u=xt(u.values),(l=!q(u[0]))&&(h*=h)):u=Za(u.increment)),Oa(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=j,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Qa(t)}:Za(u))}function _a(t,e,r,i){return Oa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function db(e,r,t){return Oa(t,function(t){return e[~~r(t)]})}function gb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+_a(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function jb(t,e,r){var i,n,a,s=t.labels,o=j;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function lb(t){return sa(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Mt(t,"onInterrupt"),t}function qb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function rb(t,e,r){var i,n,a,s,o,u,h,l,f,d,p=t?q(t)?[t>>16,t>>8&kt,t&kt]:0:At.black;if(!p){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),At[t])p=At[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(p=parseInt(t.substr(1,6),16))>>16,p>>8&kt,p&kt,parseInt(t.substr(7),16)/255];p=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt]}else if("hsl"===t.substr(0,3))if(p=d=t.match(tt),e){if(~t.indexOf("="))return p=t.match(et),r&&p.length<4&&(p[3]=1),p}else s=+p[0]%360/360,o=p[1]/100,i=2*(u=p[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<p.length&&(p[3]*=1),p[0]=qb(s+1/3,i,n),p[1]=qb(s,i,n),p[2]=qb(s-1/3,i,n);else p=t.match(tt)||At.transparent;p=p.map(Number)}return e&&!d&&(i=p[0]/kt,n=p[1]/kt,a=p[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),p[0]=~~(s+.5),p[1]=~~(100*o+.5),p[2]=~~(100*u+.5)),r&&p.length<4&&(p[3]=1),p}function sb(t){var r=[],i=[],n=-1;return t.split(Pt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function tb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Pt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=rb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=sb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Pt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Pt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function wb(t){var e,r=t.join(" ");if(Pt.lastIndex=0,Pt.test(r))return e=Ct.test(r),t[1]=tb(t[1],e),t[0]=tb(t[0],e,sb(t[1])),!0}function Fb(t){var e=(t+"").split("("),r=zt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Ft,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ha)):zt._CE&&Et.test(t)?zt._CE("",t):r}function Hb(t,e){for(var r,i=t._first;i;)i instanceof Nt?Hb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Hb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Jb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in zt[t]=ot[t]=a,zt[n=t.toLowerCase()]=r,a)zt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=zt[t+"."+e]=a[e]}),a}function Kb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Lb(r,t,e){function Ql(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/U*(Math.asin(1/i)||0),s="out"===r?Ql:"in"===r?function(t){return 1-Ql(1-t)}:Kb(Ql);return n=U/n,s.config=function(t,e){return Lb(r,t,e)},s}function Mb(e,r){function Yl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Yl:"in"===e?function(t){return 1-Yl(1-t)}:Kb(Yl);return t.config=function(t){return Mb(e,t)},t}var B,I,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,A,C,S,D,z,E,F,R,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},L={duration:.5,overwrite:!1,delay:0},j=1e8,X=1/j,U=2*Math.PI,J=U/4,V=0,W=Math.sqrt,G=Math.cos,H=Math.sin,K="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},pt=30,ct=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},yt={_start:0,endTime:Q,totalDuration:Q},bt=function _parsePosition(t,e,r){var i,n,a,s=t.labels,u=t._recent||yt,h=t.duration()>=j?u.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in s)?(n=e.charAt(0),a="%"===e.substr(-1),i=e.indexOf("="),"<"===n||">"===n?(0<=i&&(e=e.replace(/=/,"")),("<"===n?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(a?(i<0?u:r).totalDuration()/100:1)):i<0?(e in s||(s[e]=h),s[e]):(n=parseFloat(e.charAt(i-1)+e.substr(i+1)),a&&r&&(n=n/100*(Z(r)?r[0]:r).totalDuration()),1<i?_parsePosition(t,e.substr(0,i-1),r)+n:h+n)):null==e?h:+e},Tt=function _clamp(t,e,r){return r<t?t:e<r?e:r},wt=[].slice,xt=function toArray(t,e,r){return!o(t)||r||!n&&Dt()?Z(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ta(t,1)?r.push.apply(r,xt(t)):r.push(t)})||r}(t,r):Ta(t)?wt.call(t,0):t?[t]:[]:wt.call((e||a).querySelectorAll(t),0)},Ot=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Oa(n,function(t){return r+((t-e)/a*s||0)})},Mt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&fa(),i?s.apply(n,i):s.call(n)},kt=255,At={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Pt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in At)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,St=(x=Date.now,k=500,A=33,C=x(),S=C,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){Mk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=oe,(i.gsapVersions||(i.gsapVersions=[])).push(oe.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,Mk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,A=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){E.indexOf(t)<0&&E.push(t),Dt()},remove:function remove(t){var e;~(e=E.indexOf(t))&&E.splice(e,1)&&e<=w&&w--},_listeners:E=[]}),Dt=function _wake(){return!c&&St.wake()},zt={},Et=/^[\d.\-M][\d.\-,\s]/,Ft=/["']/g,Rt=function _invertEase(e){return function(t){return 1-e(1-t)}},Bt=function _parseEase(t,e){return t&&(p(t)?t:zt[t]||Fb(t))||e};function Mk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(C+=a-A),(0<(e=(i=(S+=a)-C)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(Mk)),r)for(w=0;w<E.length;w++)E[w](i,T,n,t)}function nm(t){return t<R?F*t*t:t<.7272727272727273?F*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?F*(t-=2.25/2.75)*t+.9375:F*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Jb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),zt.Linear.easeNone=zt.none=zt.Linear.easeIn,Jb("Elastic",Lb("in"),Lb("out"),Lb()),F=7.5625,R=1/2.75,Jb("Bounce",function(t){return 1-nm(1-t)},nm),Jb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Jb("Circ",function(t){return-(W(1-t*t)-1)}),Jb("Sine",function(t){return 1===t?1:1-G(t*J)}),Jb("Back",Mb("in"),Mb("out"),Mb()),zt.SteppedEase=zt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Tt(0,.99999999,t)|0)+n)*r}}},L.ease=zt["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var It,Lt=function GSCache(t,e){this.id=V++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Kt},qt=((It=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},It.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},It.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},It.totalTime=function totalTime(t,e){if(Dt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,t),!r._dp||r.parent||Ba(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ca(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ga(this,t,e)),this},It.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+wa(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},It.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},It.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+wa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},It.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},It.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent}(this.totalTime(Tt(-this._delay,this._tDur,e),!0)),za(this),this},It.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},It.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ca(e,this,t-this._delay),this}return this._start},It.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},It.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(e.rawTime(t),this):this._tTime:this._tTime},It.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},It.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ka(this)):-2===this._repeat?1/0:this._repeat},It.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Ka(this),e?this.time(e):this}return this._rDelay},It.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},It.seek=function seek(e,r){return this.totalTime(bt(this,e),t(r))},It.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},It.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},It.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},It.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},It.resume=function resume(){return this.paused(!1)},It.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},It.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},It.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},It.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},It.then=function then(t){var i=this;return new Promise(function(e){function En(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ia;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?En():i._prom=En})},It.kill=function kill(){lb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,c||St.wake()}ja(qt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Nt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),I&&Ca(e.parent||I,_assertThisInitialized(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Da(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r){return Na(0,arguments,this),this},e.from=function from(t,e,r){return Na(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Na(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,oa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Vt(t,e,bt(this,r),1),this},e.call=function call(t,e,r){return Ca(this,Vt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Vt(t,r,bt(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,oa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,oa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,p,c,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:da(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(p=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=da(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),p&&1&s&&(i=g-i,c=1),s!==d&&!this._lock){var b=p&&1&d,T=b===(p&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(c?0:da(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Mt(this,"onRepeat"),this.vars.repeatRefresh&&!c&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!c&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Hb(this,c)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,da(_),da(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Mt(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,za(this),this.render(t,e,r);this._onUpdate&&!e&&Mt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||sa(this,1),e||t<0&&!_||!v&&!_&&m||(Mt(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=bt(this,e,t)),!(t instanceof qt)){if(Z(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Vt.delayedCall(0,t)}return this!==t?Ca(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-j);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Vt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(ra(this,t),t===this._recent&&(this._recent=this._last),ta(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=da(St.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=bt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Vt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ca(this,i,bt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=bt(this,t);e;)e._start===t&&"isPause"===e.data&&sa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Qt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=xt(t),a=this._first,s=q(e);a;)a instanceof Vt?ea(a._targets,n)&&(s?(!Qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=bt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Vt.to(i,ja({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ja(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ja({startAt:{time:bt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),jb(this,bt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),jb(this,bt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ta(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ta(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=j;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ca(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ja(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(ga(I,ya(t,I)),f=St.frame),St.frame>=pt){pt+=Y.autoSleep||120;var e=I._first;if((!e||!e._ts)&&Y.autoSleep&&St._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||St.sleep()}}},Timeline}(qt);ja(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Tb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Xt(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||Z(t)||K(t))return o(t)?Xt(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Xt(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var Qt,Yt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?Ht:Gt:Wt;if(o(i)&&(~i.indexOf("random(")&&(i=gb(i)),"="===i.charAt(1)&&(!(l=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Qa(d)||0))&&0!==l||(i=l))),d!==i)return isNaN(d*i)||""===i?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,p,c,_=new ae(this._pt,t,e,0,1,te,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(p=~(i+="").indexOf("random("))&&(i=gb(i)),a&&(a(c=[r,i],t,e),r=c[0],i=c[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||p)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ae(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?$t:Zt,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},jt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,p,c,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,M=g.runBackwards,k=g.yoyoEase,A=g.keyframes,P=g.autoRevert,C=e._dur,S=e._startAt,D=e._targets,z=e.parent,E=z&&"nested"===z.data?z.parent._targets:D,F="auto"===e._overwrite&&!B,R=e.timeline;if(!R||A&&v||(v="none"),e._ease=Bt(v,L.ease),e._yEase=k?Rt(Bt(!0===k?v:k,L.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),e._from=!R&&!!g.runBackwards,!R){if(c=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=na(g,ut),S&&S.render(-1,!0).kill(),y)if(sa(e._startAt=Vt.set(D,ja({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),r<0&&!b&&!P&&e._startAt.render(-1,!0),b){if(0<r&&!P&&(e._startAt=0),C&&r<=0)return void(r&&(e._zTime=r))}else!1===P&&(e._startAt=0);else if(M&&C)if(S)P||(e._startAt=0);else if(r&&(b=!1),a=ja({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),c&&(a[l.prop]=c),sa(e._startAt=Vt.set(D,a)),r<0&&e._startAt.render(-1,!0),b){if(!r)return}else _initTween(e._startAt,X);for(e._pt=0,T=C&&t(T)||T&&!C,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&fa(),p=E===D?n:E.indexOf(o),l&&!1!==(f=new l).init(o,c||i,e,p,E)&&(e._pt=s=new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||c)for(a in i)ft[a]&&(f=Tb(a,i,e,p,o,E))?f.priority&&(u=1):d[a]=s=Yt.call(e,o,a,"get",i[a],p,E,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),F&&e._pt&&(Qt=e,I.killTweensOf(o,d,e.globalTime(r)),m=!e.parent,Qt=0),e._pt&&T&&(lt[h.id]=1)}u&&ne(e),e._onInit&&e._onInit(e)}e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Xt=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?gb(t):t},Ut=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Jt=(Ut+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Vt=function(C){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,p,c,_=(a=C.call(this,n?r:oa(r))||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,M=_.scrollTrigger,k=_.yoyoEase,A=r.parent||I,P=(Z(e)||K(e)?q(e[0]):"length"in r)?[e]:xt(e);if(a._targets=P.length?$(P):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Nt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)oa(ja(o.vars.defaults,{ease:"none"})),b?P.forEach(function(r,i){return w.forEach(function(t,e){return o.to(r,t,e?">":i*b)})}):w.forEach(function(t){return o.to(P,t,">")});else{if(l=P.length,p=b?Ya(b):Q,s(b))for(f in b)~Ut.indexOf(f)&&((c=c||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Jt.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,k&&(h.yoyoEase=k),c&&mt(h,c),d=P[u],h.duration=+Xt(m,_assertThisInitialized(a),u,d,P),h.delay=(+Xt(g,_assertThisInitialized(a),u,d,P)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,p(u,d,P))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||B||(Qt=_assertThisInitialized(a),I.killTweensOf(P),Qt=0),Ca(A,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(y||!m&&!w&&a._start===da(A._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==A.data)&&(a._tTime=-X,a.render(Math.max(0,-g))),M&&Da(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,C);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,p=this._tDur,c=this._dur,_=p-X<t&&0<=t?p:t<X?0:t;if(c){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=c+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=da(_%s),_===p?(a=this._repeat,i=c):((a=~~(_/s))&&a===_/s&&(i=c,a--),c<i&&(i=c)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=c-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Hb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(da(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ea(this,t<0?t:i,r,e))return this._tTime=0,this;if(c!==this._dur)return this.render(t,e,r)}if(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/c),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&(Mt(this,"onStart"),this._tTime!==_))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-X:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),Mt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Mt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&c||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||sa(this,1),e||t<0&&!d||!_&&!d||(Mt(this,_===p?"onComplete":"onReverseComplete",!0),!this._prom||_<p&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!vt(t))||(t._ts<0||t._dp._ts<0)&&!vt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Tt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ea(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&Mt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Mt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&sa(t,1),r||(Mt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),C.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?lb(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Qt&&!0!==Qt.vars.overwrite)._first||lb(this),this.parent&&r!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?xt(t):f,p=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),lb(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=p[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ra(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&c&&lb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Na(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Na(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(qt);ja(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Vt[r]=function(){var t=new Nt,e=wt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function cc(t,e,r){return t.setAttribute(e,r)}function kc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Wt=function _setterPlain(t,e,r){return t[e]=r},Gt=function _setterFunc(t,e,r){return t[e](r)},Ht=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Kt=function _getSetter(t,e){return p(t[e])?Gt:r(t[e])&&t.setAttribute?cc:Wt},Zt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},$t=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},te=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},ee=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},re=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ie=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ra(this,i,"_pt"):i.dep||(e=1),i=r;return!e},ne=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ae=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=kc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Zt,this.d=s||this,this.set=o||Wt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Vt,ot.TimelineLite=ot.TimelineMax=Nt,I=new Nt({sortChildren:!1,defaults:L,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=wb;var se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:ee,add:Yt,kill:ie,modifier:re,rawVars:0},a={targetTest:0,get:0,getSetter:Kt,aliases:{},register:0};if(Dt(),t!==i){if(ft[e])return;ja(i,ja(na(t,n),a)),mt(i.prototype,mt(n,na(t,a))),ft[i.prop=e]=i,t.targetTest&&(ct.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(oe,i,ae)}(t)})},timeline:function timeline(t){return new Nt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=xt(i)[0]);var n=_(i||{}).get,a=e?ia:ha;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=xt(r)).length){var n=r.map(function(t){return oe.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&ee(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Bt(t.ease,L.ease)),ma(L,t||{})},config:function config(t){return ma(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(xt(t),ja(e||{},a),r)},r&&(Nt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){zt[t]=Bt(e)},parseEase:function parseEase(t,e){return arguments.length?Bt(t,e):zt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Nt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),I.remove(a),a._dp=0,a._time=a._tTime=I._time,i=I._first;i;)n=i._next,!r&&!i._dur&&i instanceof Vt&&i.vars.onComplete===i._targets[0]||Ca(a,i,i._start-i._delay),i=n;return Ca(I,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?db(e,wrap(0,e.length),t):Oa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?db(e,wrapYoyo(0,e.length-1),t):Oa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Ya,random:_a,snap:$a,normalize:function normalize(t,e,r){return Ot(t,e,0,1,r)},getUnit:Qa,clamp:function clamp(e,r,t){return Oa(t,function(t){return Tt(e,r,t)})},splitColor:rb,toArray:xt,selector:function selector(r){return r=xt(r)[0]||O("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return xt(t,e.querySelectorAll?e:e===r?O("Invalid scope")||a.createElement("div"):r)}},mapRange:Ot,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Qa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(Z(e)&&!Z(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(Z(e)?[]:{},e));if(!u){for(a in r)Yt.call(d,e,a,"get",r[a]);n=function func(t){return ee(t,d)||(f?e.p:e)}}}return Oa(t,n)},shuffle:Xa},install:M,effects:dt,ticker:St,updateRoot:Nt.updateRoot,plugins:ft,globalTimeline:I,core:{PropTween:ae,globals:P,Tween:Vt,Timeline:Nt,Animation:qt,getCache:_,_removeLinkedListItem:ra,suppressOverwrites:function suppressOverwrites(t){return B=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return se[t]=Vt[t]}),St.add(Nt.updateRoot),d=se.to({},{duration:0});function oc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function qc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=oc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var oe=se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},qc("roundProps",Za),qc("modifiers"),qc("snap",$a))||se;Vt.version=Nt.version=oe.version="3.8.0",l=1,u()&&Dt();function _c(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ad(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function bd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function cd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function dd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function ed(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function fd(t,e,r){return t.style[e]=r}function gd(t,e,r){return t.style.setProperty(e,r)}function hd(t,e,r){return t._gsap[e]=r}function id(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function jd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function kd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function od(t,e){var r=he.createElementNS?he.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):he.createElement(t);return r.style?r:he.createElement(t)}function pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ie,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&pd(t,Xe(e)||e,1)||""}function sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(ue=window,he=ue.document,le=he.documentElement,de=od("div")||{style:{}},od("div"),Qe=Xe(Qe),Ye=Qe+"Origin",de.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ce=!!Xe("perspective"),fe=1)}function td(t){var e,r=od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(le.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),le.removeChild(r),this.style.cssText=a,e}function ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function vd(e){var r;try{r=e.getBBox()}catch(t){r=td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===td||(r=td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+ud(e,["x","cx","x1"])||0,y:+ud(e,["y","cy","y1"])||0,width:0,height:0}}function wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!vd(t))}function xd(t,e){if(e){var r=t.style;e in Ee&&e!==Ye&&(e=Qe),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ie,"-$1").toLowerCase())):r.removeAttribute(e)}}function yd(t,e,r,i,n,a){var s=new ae(t._pt,e,r,0,1,a?ed:dd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function Ad(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=de.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),p=(d?"client":"offset")+(f?"Width":"Height"),c="px"===i,m="%"===i;return i===h||!u||Ue[i]||Ue[h]?u:("px"===h||c||(u=Ad(t,e,r,"px")),o=t.getCTM&&wd(t),!m&&"%"!==h||!Ee[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(c?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==he&&a.appendChild||(a=he.body),(s=a._gsap)&&m&&s.width&&f&&s.time===St.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=pd(t,"position")),a===t&&(l.position="static"),a.appendChild(de),n=de[p],a.removeChild(de),l.position="absolute",f&&m&&((s=_(a)).time=St.time,s.width=a[p]),ca(c?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[p],ca(m?u/n*100:u/100*n)))}function Bd(t,e,r,i){var n;return fe||sd(),e in Ne&&"transform"!==e&&~(e=Ne[e]).indexOf(",")&&(e=e.split(",")[0]),Ee[e]&&"transform"!==e?(n=He(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Ke(pd(t,Ye))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ve[e]&&Ve[e](t,e,r)||pd(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?Ad(t,e,n,r)+r:n}function Cd(t,e,r,i){if(!r||"none"===r){var n=Xe(e,t,1),a=n&&pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=pd(t,"borderTopColor"))}var s,o,u,h,l,f,d,p,c,_,m,g,v=new ae(this._pt,t.style,e,0,1,te),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=pd(t,e)||i,t.style[e]=r),wb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],c=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==c.substr(-5)&&"hsla("!==c.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),p=parseFloat(d),_=d.substr((p+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=Ad(t,e,f,_)||0),v._pt={_next:v._pt,p:c||1===b?c:",",s:h,c:g?g*p:p-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?ed:dd;return nt.test(i)&&(v.e=0),this._pt=v}function Ed(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Je[r]||r,e[1]=Je[i]||i,e.join(" ")}function Fd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Ee[r]&&(i=1,r="transformOrigin"===r?Ye:Qe),xd(a,r);i&&(xd(a,Qe),u&&(u.svg&&a.removeAttribute("transform"),He(a,1),u.uncache=1))}}function Jd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Kd(t){var e=pd(t,Qe);return Jd(e)?We:e.substr(7).match(et).map(ca)}function Ld(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Kd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?We:u:(u!==We||t.offsetParent||t===le||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,le.appendChild(t)),u=Kd(t),n?o.display=n:xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):le.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Md(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Ld(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,p=h.xOffset||0,c=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==We&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=vd(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=p+(y*_+b*g)-y,h.yOffset=c+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ye]="0px 0px",a&&(yd(a,h,"xOrigin",f,w),yd(a,h,"yOrigin",d,x),yd(a,h,"xOffset",p,h.xOffset),yd(a,h,"yOffset",c,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Pd(t,e,r){var i=Qa(e);return ca(parseFloat(e)+parseFloat(Ad(t,"x",r+"px",i)))+i}function Wd(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Fe:1),d=a?f*a:f-i,p=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ae(t._pt,e,r,i,d,ad),u.e=p,u.u="deg",t._props.push(r),u}function Xd(t,e){for(var r in e)t[r]=e[r];return t}function Yd(t,e,r){var i,n,a,s,o,u,h,l=Xd({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[Qe]=e,i=He(r,1),xd(r,Qe),r.setAttribute("transform",a)):(a=getComputedStyle(r)[Qe],f[Qe]=e,i=He(r,1),f[Qe]=a),Ee)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Qa(a)!==(h=Qa(s))?Ad(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ae(t._pt,i,n,o,u-o,_c),t._pt.u=h||0,t._props.push(n));Xd(i,l)}var ue,he,le,fe,de,pe,ce,_e=zt.Power0,me=zt.Power1,ge=zt.Power2,ve=zt.Power3,ye=zt.Power4,be=zt.Linear,Te=zt.Quad,we=zt.Cubic,xe=zt.Quart,Oe=zt.Quint,Me=zt.Strong,ke=zt.Elastic,Ae=zt.Back,Pe=zt.SteppedEase,Ce=zt.Bounce,Se=zt.Sine,De=zt.Expo,ze=zt.Circ,Ee={},Fe=180/Math.PI,Re=Math.PI/180,Be=Math.atan2,Ie=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,qe=/[\s,\(]\S/,Ne={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qe="transform",Ye=Qe+"Origin",je="O,Moz,ms,Ms,Webkit".split(","),Xe=function _checkPropPrefix(t,e,r){var i=(e||de).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(je[n]+t in i););return n<0?null:(3===n?"ms":0<=n?je[n]:"")+t},Ue={deg:1,rad:1,turn:1},Je={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ve={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ae(t._pt,e,r,0,0,Fd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},We=[1,0,0,1,0,0],Ge={},He=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,p,c,_,m,g,v,y,b,T,w,x,O,M,k,A,P,C,S,D,z,E,F,R=t.style,B=r.scaleX<0,I="deg",L=pd(t,Ye)||"0";return i=n=a=u=h=l=f=d=p=0,s=o=1,r.svg=!(!t.getCTM||!wd(t)),m=Ld(t,r.svg),r.svg&&(k=(!r.uncache||"0px 0px"===L)&&!e&&t.getAttribute("data-svg-origin"),Md(t,k||L,!!k||r.originIsAbsolute,!1!==r.smooth,m)),c=r.xOrigin||0,_=r.yOrigin||0,m!==We&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Be(T,b)*Fe:0,(f=w||x?Be(w,x)*Fe+u:0)&&(o*=Math.abs(Math.cos(f*Re))),r.svg&&(i-=c-(c*b+_*w),n-=_-(c*T+_*x))):(F=m[6],z=m[7],C=m[8],S=m[9],D=m[10],E=m[11],i=m[12],n=m[13],a=m[14],h=(g=Be(F,D))*Fe,g&&(k=O*(v=Math.cos(-g))+C*(y=Math.sin(-g)),A=M*v+S*y,P=F*v+D*y,C=O*-y+C*v,S=M*-y+S*v,D=F*-y+D*v,E=z*-y+E*v,O=k,M=A,F=P),l=(g=Be(-w,D))*Fe,g&&(v=Math.cos(-g),E=x*(y=Math.sin(-g))+E*v,b=k=b*v-C*y,T=A=T*v-S*y,w=P=w*v-D*y),u=(g=Be(T,b))*Fe,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),A=O*v+M*y,T=T*v-b*y,M=M*v-O*y,b=k,O=A),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(M*M+F*F)),g=Be(O,M),f=2e-4<Math.abs(g)?g*Fe:0,p=E?1/(E<0?-E:E):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Jd(pd(t,Qe)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+I,r.rotationX=ca(h)+I,r.rotationY=ca(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=p+"px",(r.zOrigin=parseFloat(L.split(" ")[2])||0)&&(R[Ye]=Ke(L)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?ir:ce?rr:Ze,r.uncache=0,r},Ke=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Ze=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rr(t,e)},$e="0deg",tr="0px",er=") ",rr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,p=r.scaleX,c=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==$e||h!==$e)){var T,w=parseFloat(h)*Re,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Re,T=Math.cos(w),a=Pd(g,a,x*T*-v),s=Pd(g,s,-Math.sin(w)*-v),o=Pd(g,o,O*T*-v+v)}_!==tr&&(y+="perspective("+_+er),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===tr&&s===tr&&o===tr||(y+=o!==tr||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+er),u!==$e&&(y+="rotate("+u+er),h!==$e&&(y+="rotateY("+h+er),l!==$e&&(y+="rotateX("+l+er),f===$e&&d===$e||(y+="skew("+f+", "+d+er),1===p&&1===c||(y+="scale("+p+", "+c+er),g.style[Qe]=y||"translate(0, 0)"},ir=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,p=o.skewX,c=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),p=parseFloat(p),(c=parseFloat(c))&&(p+=c=parseFloat(c),d+=c),d||p?(d*=Re,p*=Re,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-p)*-m,a=Math.cos(d-p)*m,p&&(c*=Re,s=Math.tan(p-c),n*=s=Math.sqrt(1+s*s),a*=s,c&&(s=Math.tan(c),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=Ad(g,"x",l,"px"),O=Ad(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Qe]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ve[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return Bd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var nr,ar,sr,or={name:"css",register:sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,u,h,l,f,d,p,c,_,m,g,v,y,b,T=this._props,w=t.style,x=r.vars.startAt;for(d in fe||sd(),e)if("autoRound"!==d&&(s=e[d],!ft[d]||!Tb(d,e,r,i,t,n)))if(l=typeof s,f=Ve[d],"function"===l&&(l=typeof(s=s.call(r,i,t,n))),"string"===l&&~s.indexOf("random(")&&(s=gb(s)),f)f(this,t,d,s,r)&&(b=1);else if("--"===d.substr(0,2))a=(getComputedStyle(t).getPropertyValue(d)+"").trim(),s+="",Pt.lastIndex=0,Pt.test(a)||(p=Qa(a),c=Qa(s)),c?p!==c&&(a=Ad(t,d,a,c)+c):p&&(s+=p),this.add(w,"setProperty",a,s,i,n,0,0,d),T.push(d);else if("undefined"!==l){if(x&&d in x?(a="function"==typeof x[d]?x[d].call(r,i,t,n):x[d],d in Y.units&&!Qa(a)&&(a+=Y.units[d]),o(a)&&~a.indexOf("random(")&&(a=gb(a)),"="===(a+"").charAt(1)&&(a=Bd(t,d))):a=Bd(t,d),h=parseFloat(a),(_="string"===l&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),u=parseFloat(s),d in Ne&&("autoAlpha"===d&&(1===h&&"hidden"===Bd(t,"visibility")&&u&&(h=0),yd(this,w,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=Ne[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in Ee)if(g||((v=t._gsap).renderTransform&&!e.parseTransform||He(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new ae(this._pt,w,Qe,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new ae(this._pt,v,"scaleY",v.scaleY,(_?_*u:u-v.scaleY)||0),T.push("scaleY",d),d+="X";else{if("transformOrigin"===d){s=Ed(s),v.svg?Md(t,s,0,y,0,this):((c=parseFloat(s.split(" ")[2])||0)!==v.zOrigin&&yd(this,v,"zOrigin",v.zOrigin,c),yd(this,w,d,Ke(a),Ke(s)));continue}if("svgOrigin"===d){Md(t,s,1,y,0,this);continue}if(d in Ge){Wd(this,v,d,h,s,_);continue}if("smoothOrigin"===d){yd(this,v,"smooth",v.smooth,s);continue}if("force3D"===d){v[d]=s;continue}if("transform"===d){Yd(this,s,t);continue}}else d in w||(d=Xe(d)||d);if(m||(u||0===u)&&(h||0===h)&&!qe.test(s)&&d in w)u=u||0,(p=(a+"").substr((h+"").length))!==(c=Qa(s)||(d in Y.units?Y.units[d]:p))&&(h=Ad(t,d,a,c)),this._pt=new ae(this._pt,m?v:w,d,h,_?_*u:u-h,m||"px"!==c&&"zIndex"!==d||!1===e.autoRound?_c:cd),this._pt.u=c||0,p!==c&&"%"!==c&&(this._pt.b=a,this._pt.r=bd);else if(d in w)Cd.call(this,t,d,a,s);else{if(!(d in t)){N(d,s);continue}this.add(t,d,a||t[d],s,i,n)}T.push(d)}b&&ne(this)},get:Bd,aliases:Ne,getSetter:function getSetter(t,e,i){var n=Ne[e];return n&&n.indexOf(",")<0&&(e=n),e in Ee&&e!==Ye&&(t._gsap.x||Bd(t,"x"))?i&&pe===i?"scale"===e?id:hd:(pe=i||{})&&("scale"===e?jd:kd):t.style&&!r(t.style[e])?fd:~e.indexOf("-")?gd:Kt(t,e)},core:{_removeProperty:xd,_getMatrix:Ld}};oe.utils.checkPrefix=Xe,sr=ba((nr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(ar="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Ee[t]=1}),ba(ar,function(t){Y.units[t]="deg",Ge[t]=1}),Ne[sr[13]]=nr+","+ar,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ne[e[1]]=sr[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),oe.registerPlugin(or);var ur=oe.registerPlugin(or)||oe,hr=ur.core.Tween;e.Back=Ae,e.Bounce=Ce,e.CSSPlugin=or,e.Circ=ze,e.Cubic=we,e.Elastic=ke,e.Expo=De,e.Linear=be,e.Power0=_e,e.Power1=me,e.Power2=ge,e.Power3=ve,e.Power4=ye,e.Quad=Te,e.Quart=xe,e.Quint=Oe,e.Sine=Se,e.SteppedEase=Pe,e.Strong=Me,e.TimelineLite=Nt,e.TimelineMax=Nt,e.TweenLite=Vt,e.TweenMax=hr,e.default=ur,e.gsap=ur;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function(g,n,f){function p(a,b){this.wrapper="string"==typeof a?n.querySelector(a):a;this.scroller=this.wrapper.children[0];this.scrollerStyle=this.scroller.style;this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var c in b)this.options[c]=
b[c];this.translateZ=this.options.HWCompositing&&d.hasPerspective?" translateZ(0)":"";this.options.useTransition=d.hasTransition&&this.options.useTransition;this.options.useTransform=d.hasTransform&&this.options.useTransform;this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough;this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault;this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY;
this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX;this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough;this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold;this.options.bounceEasing="string"==typeof this.options.bounceEasing?d.ease[this.options.bounceEasing]||d.ease.circular:this.options.bounceEasing;this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling;
!0===this.options.tap&&(this.options.tap="tap");"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1);this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1;this.directionY=this.directionX=this.y=this.x=0;this._events={};this._init();this.refresh();this.scrollTo(this.options.startX,this.options.startY);this.enable()}function t(a,b,c){var e=n.createElement("div"),d=n.createElement("div");!0===c&&(e.style.cssText="position:absolute;z-index:9999",d.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px");
d.className="iScrollIndicator";"h"==a?(!0===c&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",d.style.height="100%"),e.className="iScrollHorizontalScrollbar"):(!0===c&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",d.style.width="100%"),e.className="iScrollVerticalScrollbar");e.style.cssText+=";overflow:hidden";b||(e.style.pointerEvents="none");e.appendChild(d);return e}function u(a,b){this.wrapper="string"==typeof b.el?n.querySelector(b.el):b.el;this.wrapperStyle=this.wrapper.style;
this.indicator=this.wrapper.children[0];this.indicatorStyle=this.indicator.style;this.scroller=a;this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var c in b)this.options[c]=b[c];this.sizeRatioY=this.sizeRatioX=1;this.maxPosY=this.maxPosX=0;this.options.interactive&&(this.options.disableTouch||(d.addEvent(this.indicator,"touchstart",this),d.addEvent(g,"touchend",this)),this.options.disablePointer||(d.addEvent(this.indicator,
d.prefixPointerEvent("pointerdown"),this),d.addEvent(g,d.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(d.addEvent(this.indicator,"mousedown",this),d.addEvent(g,"mouseup",this)));this.options.fade&&(this.wrapperStyle[d.style.transform]=this.scroller.translateZ,this.wrapperStyle[d.style.transitionDuration]=d.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var v=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||
g.msRequestAnimationFrame||function(a){g.setTimeout(a,1E3/60)},d=function(){function a(a){return!1===e?!1:""===e?a:e+a.charAt(0).toUpperCase()+a.substr(1)}var b={},c=n.createElement("div").style,e=function(){for(var a=["t","webkitT","MozT","msT","OT"],b,e=0,d=a.length;e<d;e++)if(b=a[e]+"ransform",b in c)return a[e].substr(0,a[e].length-1);return!1}();b.getTime=Date.now||function(){return(new Date).getTime()};b.extend=function(a,b){for(var c in b)a[c]=b[c]};b.addEvent=function(a,b,c,e){a.addEventListener&&a.addEventListener(b,
c,!!e)};b.removeEvent=function(a,b,c,e){a.removeEventListener&&a.removeEventListener(b,c,!!e)};b.prefixPointerEvent=function(a){return g.MSPointerEvent?"MSPointer"+a.charAt(9).toUpperCase()+a.substr(10):a};b.momentum=function(a,b,c,e,d,k){b=a-b;c=f.abs(b)/c;var g;k=void 0===k?6E-4:k;g=a+c*c/(2*k)*(0>b?-1:1);k=c/k;g<e?(g=d?e-d/2.5*(c/8):e,b=f.abs(g-a),k=b/c):0<g&&(g=d?d/2.5*(c/8):0,b=f.abs(a)+g,k=b/c);return{destination:f.round(g),duration:k}};var d=a("transform");b.extend(b,{hasTransform:!1!==d,hasPerspective:a("perspective")in
c,hasTouch:"ontouchstart"in g,hasPointer:g.PointerEvent||g.MSPointerEvent,hasTransition:a("transition")in c});b.isBadAndroid=/Android /.test(g.navigator.appVersion)&&!/Chrome\/\d/.test(g.navigator.appVersion);b.extend(b.style={},{transform:d,transitionTimingFunction:a("transitionTimingFunction"),transitionDuration:a("transitionDuration"),transitionDelay:a("transitionDelay"),transformOrigin:a("transformOrigin")});b.hasClass=function(a,b){return(new RegExp("(^|\\s)"+b+"(\\s|$)")).test(a.className)};
b.addClass=function(a,c){if(!b.hasClass(a,c)){var e=a.className.split(" ");e.push(c);a.className=e.join(" ")}};b.removeClass=function(a,c){b.hasClass(a,c)&&(a.className=a.className.replace(new RegExp("(^|\\s)"+c+"(\\s|$)","g")," "))};b.offset=function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;return{left:b,top:c}};b.preventDefaultException=function(a,b){for(var c in b)if(b[c].test(a[c]))return!0;return!1};b.extend(b.eventType={},{touchstart:1,touchmove:1,
touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3});b.extend(b.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(a){return a*(2-a)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(a){return f.sqrt(1- --a*a)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(a){return--a*a*(5*a+4)+1}},bounce:{style:"",fn:function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*
(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}},elastic:{style:"",fn:function(a){return 0===a?0:1==a?1:.4*f.pow(2,-10*a)*f.sin(2*(a-.055)*f.PI/.22)+1}}});b.tap=function(a,b){var c=n.createEvent("Event");c.initEvent(b,!0,!0);c.pageX=a.pageX;c.pageY=a.pageY;a.target.dispatchEvent(c)};b.click=function(a){var b=a.target,c;/(SELECT|INPUT|TEXTAREA)/i.test(b.tagName)||(c=n.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!0,a.view,1,b.screenX,b.screenY,
b.clientX,b.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),c._constructed=!0,b.dispatchEvent(c))};return b}();p.prototype={version:"5.1.3",_init:function(){this._initEvents();(this.options.scrollbars||this.options.indicators)&&this._initIndicators();this.options.mouseWheel&&this._initWheel();this.options.snap&&this._initSnap();this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0);this._execEvent("destroy")},_transitionEnd:function(a){a.target==this.scroller&&
this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(a){if(!(1!=d.eventType[a.type]&&0!==a.button||!this.enabled||this.initiated&&d.eventType[a.type]!==this.initiated)){!this.options.preventDefault||d.isBadAndroid||d.preventDefaultException(a.target,this.options.preventDefaultException)||a.preventDefault();var b=a.touches?a.touches[0]:a;this.initiated=d.eventType[a.type];this.moved=!1;this.directionLocked=
this.directionY=this.directionX=this.distY=this.distX=0;this._transitionTime();this.startTime=d.getTime();this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,a=this.getComputedPosition(),this._translate(f.round(a.x),f.round(a.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd"));this.startX=this.x;this.startY=this.y;this.absStartX=this.x;this.absStartY=this.y;this.pointX=b.pageX;this.pointY=b.pageY;this._execEvent("beforeScrollStart")}},
_move:function(a){if(this.enabled&&d.eventType[a.type]===this.initiated){this.options.preventDefault&&a.preventDefault();var b=a.touches?a.touches[0]:a,c=b.pageX-this.pointX,e=b.pageY-this.pointY,k=d.getTime(),h;this.pointX=b.pageX;this.pointY=b.pageY;this.distX+=c;this.distY+=e;b=f.abs(this.distX);h=f.abs(this.distY);if(!(300<k-this.endTime&&10>b&&10>h)){this.directionLocked||this.options.freeScroll||(this.directionLocked=b>h+this.options.directionLockThreshold?"h":h>=b+this.options.directionLockThreshold?
"v":"n");if("h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)a.preventDefault();else if("horizontal"==this.options.eventPassthrough){this.initiated=!1;return}e=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)a.preventDefault();else if("vertical"==this.options.eventPassthrough){this.initiated=!1;return}c=0}c=this.hasHorizontalScroll?c:0;e=this.hasVerticalScroll?e:0;a=this.x+c;b=this.y+e;if(0<a||a<this.maxScrollX)a=this.options.bounce?this.x+
c/3:0<a?0:this.maxScrollX;if(0<b||b<this.maxScrollY)b=this.options.bounce?this.y+e/3:0<b?0:this.maxScrollY;this.directionX=0<c?-1:0>c?1:0;this.directionY=0<e?-1:0>e?1:0;this.moved||this._execEvent("scrollStart");this.moved=!0;this._translate(a,b);300<k-this.startTime&&(this.startTime=k,this.startX=this.x,this.startY=this.y)}}},_end:function(a){if(this.enabled&&d.eventType[a.type]===this.initiated){this.options.preventDefault&&!d.preventDefaultException(a.target,this.options.preventDefaultException)&&
a.preventDefault();var b,c;c=d.getTime()-this.startTime;var e=f.round(this.x),k=f.round(this.y),h=f.abs(e-this.startX),g=f.abs(k-this.startY);b=0;var l="";this.initiated=this.isInTransition=0;this.endTime=d.getTime();if(!this.resetPosition(this.options.bounceTime))if(this.scrollTo(e,k),this.moved)if(this._events.flick&&200>c&&100>h&&100>g)this._execEvent("flick");else if(this.options.momentum&&300>c&&(b=this.hasHorizontalScroll?d.momentum(this.x,this.startX,c,this.maxScrollX,this.options.bounce?this.wrapperWidth:
0,this.options.deceleration):{destination:e,duration:0},c=this.hasVerticalScroll?d.momentum(this.y,this.startY,c,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:k,duration:0},e=b.destination,k=c.destination,b=f.max(b.duration,c.duration),this.isInTransition=1),this.options.snap&&(this.currentPage=l=this._nearestSnap(e,k),b=this.options.snapSpeed||f.max(f.max(f.min(f.abs(e-l.x),1E3),f.min(f.abs(k-l.y),1E3)),300),e=l.x,k=l.y,this.directionY=this.directionX=
0,l=this.options.bounceEasing),e!=this.x||k!=this.y){if(0<e||e<this.maxScrollX||0<k||k<this.maxScrollY)l=d.ease.quadratic;this.scrollTo(e,k,b,l)}else this._execEvent("scrollEnd");else this.options.tap&&d.tap(a,this.options.tap),this.options.click&&d.click(a),this._execEvent("scrollCancel")}},_resize:function(){var a=this;clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(function(){a.refresh()},this.options.resizePolling)},resetPosition:function(a){var b=this.x,c=this.y;!this.hasHorizontalScroll||
0<this.x?b=0:this.x<this.maxScrollX&&(b=this.maxScrollX);!this.hasVerticalScroll||0<this.y?c=0:this.y<this.maxScrollY&&(c=this.maxScrollY);if(b==this.x&&c==this.y)return!1;this.scrollTo(b,c,a||0,this.options.bounceEasing);return!0},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapperWidth=this.wrapper.clientWidth;this.wrapperHeight=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth;this.scrollerHeight=this.scroller.offsetHeight;
this.maxScrollX=this.wrapperWidth-this.scrollerWidth;this.maxScrollY=this.wrapperHeight-this.scrollerHeight;this.hasHorizontalScroll=this.options.scrollX&&0>this.maxScrollX;this.hasVerticalScroll=this.options.scrollY&&0>this.maxScrollY;this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth);this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight);this.directionY=this.directionX=this.endTime=0;this.wrapperOffset=d.offset(this.wrapper);this._execEvent("refresh");
this.resetPosition()},on:function(a,b){this._events[a]||(this._events[a]=[]);this._events[a].push(b)},off:function(a,b){if(this._events[a]){var c=this._events[a].indexOf(b);-1<c&&this._events[a].splice(c,1)}},_execEvent:function(a){if(this._events[a]){var b=0,c=this._events[a].length;if(c)for(;b<c;b++)this._events[a][b].apply(this,[].slice.call(arguments,1))}},scrollBy:function(a,b,c,e){a=this.x+a;b=this.y+b;this.scrollTo(a,b,c||0,e)},scrollTo:function(a,b,c,e){e=e||d.ease.circular;this.isInTransition=
this.options.useTransition&&0<c;!c||this.options.useTransition&&e.style?(this._transitionTimingFunction(e.style),this._transitionTime(c),this._translate(a,b)):this._animate(a,b,c,e.fn)},scrollToElement:function(a,b,c,e,k){if(a=a.nodeType?a:this.scroller.querySelector(a)){var h=d.offset(a);h.left-=this.wrapperOffset.left;h.top-=this.wrapperOffset.top;!0===c&&(c=f.round(a.offsetWidth/2-this.wrapper.offsetWidth/2));!0===e&&(e=f.round(a.offsetHeight/2-this.wrapper.offsetHeight/2));h.left-=c||0;h.top-=
e||0;h.left=0<h.left?0:h.left<this.maxScrollX?this.maxScrollX:h.left;h.top=0<h.top?0:h.top<this.maxScrollY?this.maxScrollY:h.top;b=void 0===b||null===b||"auto"===b?f.max(f.abs(this.x-h.left),f.abs(this.y-h.top)):b;this.scrollTo(h.left,h.top,b,k)}},_transitionTime:function(a){a=a||0;this.scrollerStyle[d.style.transitionDuration]=a+"ms";!a&&d.isBadAndroid&&(this.scrollerStyle[d.style.transitionDuration]="0.001s");if(this.indicators)for(var b=this.indicators.length;b--;)this.indicators[b].transitionTime(a)},
_transitionTimingFunction:function(a){this.scrollerStyle[d.style.transitionTimingFunction]=a;if(this.indicators)for(var b=this.indicators.length;b--;)this.indicators[b].transitionTimingFunction(a)},_translate:function(a,b){this.options.useTransform?this.scrollerStyle[d.style.transform]="translate("+a+"px,"+b+"px)"+this.translateZ:(a=f.round(a),b=f.round(b),this.scrollerStyle.left=a+"px",this.scrollerStyle.top=b+"px");this.x=a;this.y=b;if(this.indicators)for(var c=this.indicators.length;c--;)this.indicators[c].updatePosition()},
_initEvents:function(a){a=a?d.removeEvent:d.addEvent;var b=this.options.bindToWrapper?this.wrapper:g;a(g,"orientationchange",this);a(g,"resize",this);this.options.click&&a(this.wrapper,"click",this,!0);this.options.disableMouse||(a(this.wrapper,"mousedown",this),a(b,"mousemove",this),a(b,"mousecancel",this),a(b,"mouseup",this));d.hasPointer&&!this.options.disablePointer&&(a(this.wrapper,d.prefixPointerEvent("pointerdown"),this),a(b,d.prefixPointerEvent("pointermove"),this),a(b,d.prefixPointerEvent("pointercancel"),
this),a(b,d.prefixPointerEvent("pointerup"),this));d.hasTouch&&!this.options.disableTouch&&(a(this.wrapper,"touchstart",this),a(b,"touchmove",this),a(b,"touchcancel",this),a(b,"touchend",this));a(this.scroller,"transitionend",this);a(this.scroller,"webkitTransitionEnd",this);a(this.scroller,"oTransitionEnd",this);a(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var a=g.getComputedStyle(this.scroller,null),b;this.options.useTransform?(a=a[d.style.transform].split(")")[0].split(", "),
b=+(a[12]||a[4]),a=+(a[13]||a[5])):(b=+a.left.replace(/[^-\d.]/g,""),a=+a.top.replace(/[^-\d.]/g,""));return{x:b,y:a}},_initIndicators:function(){function a(a){for(var b=f.indicators.length;b--;)a.call(f.indicators[b])}var b=this.options.interactiveScrollbars,c="string"!=typeof this.options.scrollbars,e=[],d,f=this;this.indicators=[];this.options.scrollbars&&(this.options.scrollY&&(d={el:t("v",b,this.options.scrollbars),interactive:b,defaultScrollbars:!0,customStyle:c,resize:this.options.resizeScrollbars,
shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(d.el),e.push(d)),this.options.scrollX&&(d={el:t("h",b,this.options.scrollbars),interactive:b,defaultScrollbars:!0,customStyle:c,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(d.el),e.push(d)));this.options.indicators&&(e=e.concat(this.options.indicators));for(b=e.length;b--;)this.indicators.push(new u(this,
e[b]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){a(function(){this.fade()})}),this.on("scrollCancel",function(){a(function(){this.fade()})}),this.on("scrollStart",function(){a(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){a(function(){this.fade(1,!0)})}));this.on("refresh",function(){a(function(){this.refresh()})});this.on("destroy",function(){a(function(){this.destroy()});delete this.indicators})},_initWheel:function(){d.addEvent(this.wrapper,"wheel",this);
d.addEvent(this.wrapper,"mousewheel",this);d.addEvent(this.wrapper,"DOMMouseScroll",this);this.on("destroy",function(){d.removeEvent(this.wrapper,"wheel",this);d.removeEvent(this.wrapper,"mousewheel",this);d.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(a){if(this.enabled){a.preventDefault();a.stopPropagation();var b,c,e,d=this;void 0===this.wheelTimeout&&d._execEvent("scrollStart");clearTimeout(this.wheelTimeout);this.wheelTimeout=setTimeout(function(){d._execEvent("scrollEnd");
d.wheelTimeout=void 0},400);if("deltaX"in a)1===a.deltaMode?(b=-a.deltaX*this.options.mouseWheelSpeed,a=-a.deltaY*this.options.mouseWheelSpeed):(b=-a.deltaX,a=-a.deltaY);else if("wheelDeltaX"in a)b=a.wheelDeltaX/120*this.options.mouseWheelSpeed,a=a.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in a)b=a=a.wheelDelta/120*this.options.mouseWheelSpeed;else if("detail"in a)b=a=-a.detail/3*this.options.mouseWheelSpeed;else return;b*=this.options.invertWheelDirection;a*=this.options.invertWheelDirection;
this.hasVerticalScroll||(b=a,a=0);this.options.snap?(c=this.currentPage.pageX,e=this.currentPage.pageY,0<b?c--:0>b&&c++,0<a?e--:0>a&&e++,this.goToPage(c,e)):(c=this.x+f.round(this.hasHorizontalScroll?b:0),e=this.y+f.round(this.hasVerticalScroll?a:0),0<c?c=0:c<this.maxScrollX&&(c=this.maxScrollX),0<e?e=0:e<this.maxScrollY&&(e=this.maxScrollY),this.scrollTo(c,e,0))}},_initSnap:function(){this.currentPage={};"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap));
this.on("refresh",function(){var a=0,b,c=0,e,d,h,g=0,l;e=this.options.snapStepX||this.wrapperWidth;var m=this.options.snapStepY||this.wrapperHeight;this.pages=[];if(this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(d=f.round(e/2),h=f.round(m/2);g>-this.scrollerWidth;){this.pages[a]=[];for(l=b=0;l>-this.scrollerHeight;)this.pages[a][b]={x:f.max(g,this.maxScrollX),y:f.max(l,this.maxScrollY),width:e,height:m,cx:g-d,cy:l-h},l-=m,b++;g-=e;a++}else for(m=
this.options.snap,b=m.length,e=-1;a<b;a++){if(0===a||m[a].offsetLeft<=m[a-1].offsetLeft)c=0,e++;this.pages[c]||(this.pages[c]=[]);g=f.max(-m[a].offsetLeft,this.maxScrollX);l=f.max(-m[a].offsetTop,this.maxScrollY);d=g-f.round(m[a].offsetWidth/2);h=l-f.round(m[a].offsetHeight/2);this.pages[c][e]={x:g,y:l,width:m[a].offsetWidth,height:m[a].offsetHeight,cx:d,cy:h};g>this.maxScrollX&&c++}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0);0===this.options.snapThreshold%1?this.snapThresholdY=
this.snapThresholdX=this.options.snapThreshold:(this.snapThresholdX=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}});this.on("flick",function(){var a=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.x-this.startX),1E3),f.min(f.abs(this.y-this.startY),1E3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+
this.directionY,a)})},_nearestSnap:function(a,b){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var c=0,e=this.pages.length,d=0;if(f.abs(a-this.absStartX)<this.snapThresholdX&&f.abs(b-this.absStartY)<this.snapThresholdY)return this.currentPage;0<a?a=0:a<this.maxScrollX&&(a=this.maxScrollX);0<b?b=0:b<this.maxScrollY&&(b=this.maxScrollY);for(;c<e;c++)if(a>=this.pages[c][0].cx){a=this.pages[c][0].x;break}for(e=this.pages[c].length;d<e;d++)if(b>=this.pages[0][d].cy){b=this.pages[0][d].y;break}c==
this.currentPage.pageX&&(c+=this.directionX,0>c?c=0:c>=this.pages.length&&(c=this.pages.length-1),a=this.pages[c][0].x);d==this.currentPage.pageY&&(d+=this.directionY,0>d?d=0:d>=this.pages[0].length&&(d=this.pages[0].length-1),b=this.pages[0][d].y);return{x:a,y:b,pageX:c,pageY:d}},goToPage:function(a,b,c,d){d=d||this.options.bounceEasing;a>=this.pages.length?a=this.pages.length-1:0>a&&(a=0);b>=this.pages[a].length?b=this.pages[a].length-1:0>b&&(b=0);var g=this.pages[a][b].x,h=this.pages[a][b].y;c=
void 0===c?this.options.snapSpeed||f.max(f.max(f.min(f.abs(g-this.x),1E3),f.min(f.abs(h-this.y),1E3)),300):c;this.currentPage={x:g,y:h,pageX:a,pageY:b};this.scrollTo(g,h,c,d)},next:function(a,b){var c=this.currentPage.pageX,d=this.currentPage.pageY;c++;c>=this.pages.length&&this.hasVerticalScroll&&(c=0,d++);this.goToPage(c,d,a,b)},prev:function(a,b){var c=this.currentPage.pageX,d=this.currentPage.pageY;c--;0>c&&this.hasVerticalScroll&&(c=0,d--);this.goToPage(c,d,a,b)},_initKeys:function(a){a={pageUp:33,
pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};var b;if("object"==typeof this.options.keyBindings)for(b in this.options.keyBindings)"string"==typeof this.options.keyBindings[b]&&(this.options.keyBindings[b]=this.options.keyBindings[b].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(b in a)this.options.keyBindings[b]=this.options.keyBindings[b]||a[b];d.addEvent(g,"keydown",this);this.on("destroy",function(){d.removeEvent(g,"keydown",this)})},_key:function(a){if(this.enabled){var b=
this.options.snap,c=b?this.currentPage.pageX:this.x,e=b?this.currentPage.pageY:this.y,g=d.getTime(),h=this.keyTime||0,n;this.options.useTransition&&this.isInTransition&&(n=this.getComputedPosition(),this._translate(f.round(n.x),f.round(n.y)),this.isInTransition=!1);this.keyAcceleration=200>g-h?f.min(this.keyAcceleration+.25,50):0;switch(a.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?c+=b?1:this.wrapperWidth:e+=b?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&
!this.hasVerticalScroll?c-=b?1:this.wrapperWidth:e-=b?1:this.wrapperHeight;break;case this.options.keyBindings.end:c=b?this.pages.length-1:this.maxScrollX;e=b?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:e=c=0;break;case this.options.keyBindings.left:c+=b?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:e+=b?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:c-=b?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:e-=
b?1:5+this.keyAcceleration>>0;break;default:return}b?this.goToPage(c,e):(0<c?this.keyAcceleration=c=0:c<this.maxScrollX&&(c=this.maxScrollX,this.keyAcceleration=0),0<e?this.keyAcceleration=e=0:e<this.maxScrollY&&(e=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(c,e,0),this.keyTime=g)}},_animate:function(a,b,c,e){function f(){var q=d.getTime(),r;q>=p?(g.isAnimating=!1,g._translate(a,b),g.resetPosition(g.options.bounceTime)||g._execEvent("scrollEnd")):(q=(q-m)/c,r=e(q),q=(a-n)*r+n,r=(b-l)*r+
l,g._translate(q,r),g.isAnimating&&v(f))}var g=this,n=this.x,l=this.y,m=d.getTime(),p=m+c;this.isAnimating=!0;f()},handleEvent:function(a){switch(a.type){case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":this._start(a);break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":this._end(a);
break;case "orientationchange":case "resize":this._resize();break;case "transitionend":case "webkitTransitionEnd":case "oTransitionEnd":case "MSTransitionEnd":this._transitionEnd(a);break;case "wheel":case "DOMMouseScroll":case "mousewheel":this._wheel(a);break;case "keydown":this._key(a);break;case "click":a._constructed||(a.preventDefault(),a.stopPropagation())}}};u.prototype={handleEvent:function(a){switch(a.type){case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":this._start(a);
break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":this._end(a)}},destroy:function(){this.options.interactive&&(d.removeEvent(this.indicator,"touchstart",this),d.removeEvent(this.indicator,d.prefixPointerEvent("pointerdown"),this),d.removeEvent(this.indicator,"mousedown",this),d.removeEvent(g,"touchmove",
this),d.removeEvent(g,d.prefixPointerEvent("pointermove"),this),d.removeEvent(g,"mousemove",this),d.removeEvent(g,"touchend",this),d.removeEvent(g,d.prefixPointerEvent("pointerup"),this),d.removeEvent(g,"mouseup",this));this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(a){var b=a.touches?a.touches[0]:a;a.preventDefault();a.stopPropagation();this.transitionTime();this.initiated=!0;this.moved=!1;this.lastPointX=b.pageX;this.lastPointY=b.pageY;this.startTime=
d.getTime();this.options.disableTouch||d.addEvent(g,"touchmove",this);this.options.disablePointer||d.addEvent(g,d.prefixPointerEvent("pointermove"),this);this.options.disableMouse||d.addEvent(g,"mousemove",this);this.scroller._execEvent("beforeScrollStart")},_move:function(a){var b=a.touches?a.touches[0]:a,c,e;d.getTime();this.moved||this.scroller._execEvent("scrollStart");this.moved=!0;c=b.pageX-this.lastPointX;this.lastPointX=b.pageX;e=b.pageY-this.lastPointY;this.lastPointY=b.pageY;this._pos(this.x+
c,this.y+e);a.preventDefault();a.stopPropagation()},_end:function(a){if(this.initiated){this.initiated=!1;a.preventDefault();a.stopPropagation();d.removeEvent(g,"touchmove",this);d.removeEvent(g,d.prefixPointerEvent("pointermove"),this);d.removeEvent(g,"mousemove",this);if(this.scroller.options.snap){a=this.scroller._nearestSnap(this.scroller.x,this.scroller.y);var b=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.scroller.x-a.x),1E3),f.min(f.abs(this.scroller.y-a.y),1E3)),300);if(this.scroller.x!=
a.x||this.scroller.y!=a.y)this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=a,this.scroller.scrollTo(a.x,a.y,b,this.scroller.options.bounceEasing)}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(a){a=a||0;this.indicatorStyle[d.style.transitionDuration]=a+"ms";!a&&d.isBadAndroid&&(this.indicatorStyle[d.style.transitionDuration]="0.001s")},transitionTimingFunction:function(a){this.indicatorStyle[d.style.transitionTimingFunction]=a},refresh:function(){this.transitionTime();
this.indicatorStyle.display=this.options.listenX&&!this.options.listenY?this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.scroller.hasVerticalScroll?"block":"none":this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none";this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(d.addClass(this.wrapper,"iScrollBothScrollbars"),d.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&
(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(d.removeClass(this.wrapper,"iScrollBothScrollbars"),d.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=f.max(f.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||
this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX);this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,
this.options.resize?(this.indicatorHeight=f.max(f.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-
this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY);this.updatePosition()},updatePosition:function(){var a=this.options.listenX&&f.round(this.sizeRatioX*this.scroller.x)||0,b=this.options.listenY&&f.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(a<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=f.max(this.indicatorWidth+a,8),this.indicatorStyle.width=this.width+"px"),a=this.minBoundaryX):
a>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=f.max(this.indicatorWidth-(a-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",a=this.maxPosX+this.indicatorWidth-this.width):a=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),b<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=f.max(this.indicatorHeight+3*b,8),this.indicatorStyle.height=this.height+"px"),b=this.minBoundaryY):
b>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=f.max(this.indicatorHeight-3*(b-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",b=this.maxPosY+this.indicatorHeight-this.height):b=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px"));this.x=a;this.y=b;this.scroller.options.useTransform?this.indicatorStyle[d.style.transform]="translate("+a+"px,"+b+"px)"+this.scroller.translateZ:
(this.indicatorStyle.left=a+"px",this.indicatorStyle.top=b+"px")},_pos:function(a,b){0>a?a=0:a>this.maxPosX&&(a=this.maxPosX);0>b?b=0:b>this.maxPosY&&(b=this.maxPosY);a=this.options.listenX?f.round(a/this.sizeRatioX):this.scroller.x;b=this.options.listenY?f.round(b/this.sizeRatioY):this.scroller.y;this.scroller.scrollTo(a,b)},fade:function(a,b){if(!b||this.visible){clearTimeout(this.fadeTimeout);this.fadeTimeout=null;var c=a?250:500,e=a?0:300;this.wrapperStyle[d.style.transitionDuration]=c+"ms";this.fadeTimeout=
setTimeout(function(a){this.wrapperStyle.opacity=a;this.visible=+a}.bind(this,a?"1":"0"),e)}}};p.utils=d;"undefined"!=typeof module&&module.exports?module.exports=p:g.IScroll=p})(window,document,Math);
;(function(){if(!Array.prototype.indexOf)Array.prototype.indexOf=function(s){var n=-1;for(var i=0;i<this.length;i++)if(this[i]===s)n=i;return n;};})();
window.raf = (function () {return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {return window.setTimeout(callback, 1000 / 60); }; })();
window.caf = (function () {return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {window.clearTimeout(id); }; })();
/*!
 * VERSION: 1.0
 * DATE: 2019-10-01
 * http://fave-kr.github.io
 * License: http://fave-kr.github.io/license/
 * 3DModel JSON-LD to Mobile AR Link
 * @author: Fave Inc. http://www.fave.kr
 **/
;(function($) {
	'use strict';
	var
		ua = navigator.userAgent,
		div = document.createElement('div'),

		ie = ua.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),

		prefix = ['Webkit', 'Moz', 'O'],
		transition = 'transition',
		transform = 'transform',
		requestanimationframe = 'requestAnimationFrame',
		cancelanimationframe = 'CancelAnimationFrame',

		transforms = {
			translate3d: 'translate3d(0px, 0px, 0px)',
			translate: 'translate(0px, 0px)',
			scale3d: 'scale3d(1, 1, 1)',
			scale: 'scale(1, 1)'
		},

		browser = $.browser,
		support = $.support,
		version, i;

	if ( !browser ) {
		$.browser = browser = {};
	}

	browser.local = !(/^http:\/\//).test(location.href);
	browser.firefox = (/firefox/i).test(ua);
	browser.webkit = (/applewebkit/i).test(ua);
	browser.chrome = (/chrome/i).test(ua);
	browser.opera = (/opera/i).test(ua);
	browser.ios = (/ip(ad|hone|od)/i).test(ua);
	browser.crios = (/crios/i).test(ua);
	browser.android = (/android/i).test(ua);
	browser.safari = browser.webkit && !browser.chrome;
	browser.huawei = (/HUAWEICLT/i).test(ua);
	browser.uc = (/UCBrowser/i).test(ua);

	support.touch = browser.ios || browser.android || (document.ontouchstart !== undefined && document.ontouchstart !== null);
	browser.mobile = support.touch && ( browser.ios || browser.android );

	for ( i in browser ) {
		if( !browser[i] ) {
			delete browser[i];
		}
	}
	browser.os = (navigator.appVersion).match(/(mac|win|linux)/i);
	browser.os = ( browser.os )? browser.os[1].toLowerCase() : '';

	if ( browser.ios || browser.android ) {
		version = ua.match(/applewebkit\/([0-9.]+)/i);
		if ( version && version.length > 1 ) {
			browser.webkitversion = version[1];
		}
		if ( browser.ios ) {
			version = ua.match(/version\/([0-9.]+)/i);
			if ( version && version.length > 1 ) {
				browser.ios = version[1];
			}
		} else if ( browser.android ) {
			version = ua.match(/android ([0-9.]+)/i);
			if ( version && version.length > 1 ) {
				browser.android = parseInt(version[1].replace(/\./g, ''));
			}
		}
	}

	support.svgimage = true;
	support.pointerevents = true;
	if ( ie ) {
		browser.ie = ie = parseInt( ie[1] || ie[2] );
		if ( 9 > ie ) {
			browser.oldie = true;
		} else if ( 9 == ie ) {
			prefix.push('ms');
		}
		if ( 11 > ie ) {
			support.pointerevents = false;
		}
		if ( 9 > ie ) {
			support.svgimage = false;
		}
	}

	support.pushstate = !!history.pushState;
	support.mediaquery = typeof(window.matchMedia) == 'function' || !browser.oldie;
	support.video = document.createElement('video').canPlayType !== undefined;
	support.backgroundsize = 'backgroundSize' in div.style;
	if ( support.backgroundsize ) {
		div.style.backgroundSize = 'cover';
		support.backgroundsize = div.style.backgroundSize == 'cover';
	}
	try {
		div.style.background = 'rgba(0, 0, 0, 0)';
		support.rgba = div.style.background == 'rgba(0, 0, 0, 0)';
	} catch(e) {
		support.rgba = false;
	}
	support.canvas = document.createElement('canvas');
	support.canvas = support.canvas.getContext && support.canvas.getContext('2d');

	if ( div.style[transform] != undefined ) {
		support.transform = transform;
	} else {
		transform = 'Transform';
		for ( i = 0; i < 4; i++ ) {
			if ( div.style[prefix[i]+transform] !== undefined ) {
				support.transform = prefix[i]+transform;
				break;
			}
		}
	}
	if ( support.transform ) {
		transform = support.transform;
		for ( i in transforms ) {
			div.style[transform] = '';
			div.style[transform] = transforms[i];
			support[i] = div.style[transform];
		}
		if ( browser.ie && 10 > browser.ie ) {
		}
		if ( browser.android && 430 > browser.android ) {
		}
	}
	if ( div.style[transition] != undefined ) {
		support.transition = transition;
	} else {
		transition = 'Transition';
		for ( i = 0; i < 4; i++ ) {
			if ( div.style[prefix[i]+transition] !== undefined ) {
				support.transition = prefix[i]+transition;
				break;
			}
		}
	}
	if ( window[requestanimationframe] ) {
		support.requestanimationframe = true;
	} else {
		requestanimationframe = 'RequestAnimationFrame';
		for ( i = 0; i < 4; i++ ) {
			if ( window[prefix[i]+requestanimationframe] !== undefined ) {
				window.requestAnimationFrame = window[prefix[i]+requestanimationframe];
				window.cancelAnimationFrame = window[prefix[i]+cancelanimationframe];
				support.requestanimationframe = true;
				break;
			}
		}
	}
	if ( !support.requestanimationframe ) {
		window.requestAnimationFrame = (function() {
			var lasttime = 0;
			return function(callback) {
				var currenttime = gettime();
				var timetocall = Math.max(0, 16-(currenttime-lasttime));
				lasttime = currenttime+timetocall;
				return setTimeout(function() { callback(currenttime+timetocall); }, timetocall);
			}
		})();
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		}
	}
	$._cookie = {
		set: function(name, value, term, path, domain) {
			var cookieset = name + '=' + value + ';',
				expdate;
			if ( term ) {
				expdate = new Date();
				expdate.setTime( expdate.getTime()+term*1000*60*60*24 ); // term 1 is a day
				cookieset += 'expires=' + expdate.toGMTString() + ';';
			}
			// if ( path ) {
			// 	cookieset += 'path=' + path + ';';
			// }
			cookieset += 'path=/;';
			if ( domain ) {
				cookieset += 'domain=' + domain + ';';
			}
			document.cookie = cookieset;
		},
		get: function(name) {
			var match = ( document.cookie || ' ' ).match( new RegExp(name+' *= *([^;]+)') );
			return ( match )? match[1] : null;
		}
	}
    $._smoothScroll = {
        // # animate scroll
        isScrollBlock: false,
        scroll: (function(e) {
            var documentElement = document.documentElement,
                body = document.body,
                prevWheelDelta = 120,
                tweener = {y: 0, dy: -1, py: 0, ry: 0},
                isTouchMouse = [],
                isScrollDown = false,
                isWheelBlocked = false,
                isBlocked = false;

            // firefox
            !$.browser.ie && !$.browser.firefox &&
            documentElement.addEventListener('onwheel' in document ? 'wheel' : 'DOMMouseScroll' in document ? 'DOMMouseScroll' : 'mousewheel', function(e) {
                
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                isScrollDown = Math.max(-1, Math.min(1, value)) > 0 ? false : true;

                // manually blocked
                isBlocked = $._smoothScroll.isScrollBlock;
                if (isBlocked) {
                    //console.log('$._smoothScroll : isBlocked');
                    e.preventDefault();
                    return;
                }

                // check touch mouse
                var _isTouchMouse = false;
                if (e.wheelDeltaY !== undefined) {
                    if (e.wheelDeltaY === -3*e.deltaY || (!$.browser.safari && (prevWheelDelta%120 !== 0 || Math.abs(e.wheelDeltaY)%120 !== 0))) {
                        _isTouchMouse = true;
                    }
                    prevWheelDelta = Math.abs(e.wheelDeltaY);
                } else if (e.wheelDelta !== undefined) {
                    if (prevWheelDelta%120 !== 0 || Math.abs(e.wheelDelta)%120 !== 0) {
                        _isTouchMouse = true;
                    }
                    prevWheelDelta = Math.abs(e.wheelDelta);
                } else if (e.deltaMode === 0) { // firefox
                    _isTouchMouse = true;
                }
                isTouchMouse.unshift(_isTouchMouse);
                isTouchMouse.length = 2;

                if (!isTouchMouse[0] && !isTouchMouse[1]) { // safari issue
                    if (hasScrollBox(e.target)) {
                        return;
                    }
                    if (0 > tweener.dy) {
                        setTweenerValueManually(getScrollTop());
                    }
                    if (tweener.ry) {
                        tweener.dy = tweener.dy - tweener.ry;
                        tweener.ry = 0;
                    }
                    var deltaY = e.deltaY !== undefined ? e.deltaY : e.wheelDeltaY !== undefined ? e.wheelDeltaY : e.detail || e.wheelDelta * -1;
                    var newScrollTop = Math.round(Math.max(0, Math.min(getScrollHeight() - window.innerHeight, tweener.dy + Math.max(-500, Math.min(500, deltaY)))));
                    animate(newScrollTop);
                    e.preventDefault();
                }

            }, {passive: false});

            function animate(newY) {
                if (tweener.dy !== newY) {
                    var duration = Math.max(0.25, Math.min(1.25, Math.abs(newY-tweener.y)/150));
                    killTween();
                    tweener.tween = gsap.to(tweener, duration, {y: newY, ease: Quint.easeOut, roundProps: 'y', onUpdate: onAnimate});
                    tweener.dy = newY;
                }
            }

            function killTween() {
                tweener.tween && tweener.tween.kill();
            }

            function onAnimate() {
                if (tweener.y !== tweener.py) {
                    isWheelBlocked = true;
                    tweener.y = tweener.y - tweener.ry;
                    window.scrollTo(0, tweener.y);
                    tweener.py = tweener.y;
                }
            }

            function hasScrollBox(node) {
                while (node && node !== body) {
                    // if (window.getComputedStyle(node)['overflow'].indexOf('auto') > -1) {
                    // 	return true;
                    // }
                    node = node.parentNode;
                    if (node === body && $(node).hasClass('modal-open')) {
                        return true;
                    }
                }
                return false;
            }

            function setTweenerValueManually(value) {
                tweener.y = tweener.dy = value;
                tweener.ry = 0;
            }

            function getScrollTop() {
                return documentElement.scrollTop || (document.body ? document.body.scrollTop : 0) || 0;
            }

            function getMaxScrollTop() {
                return Math.max(document.body ? document.body.scrollHeight : 0, documentElement.scrollHeight)-Math.min(documentElement.offsetHeight, documentElement.clientHeight);
            }

            function getScrollHeight() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }

            function scroll(_scrollTop) {
                if (typeof(_scrollTop)=='function') {
                    this.scrollFunctions.push(_scrollTop);
                    return this;
                }

                var scrollTop = typeof(_scrollTop) == 'number' ? _scrollTop : getScrollTop();
                tweener.ry = Math.max(tweener.ry, tweener.y-scrollTop);

                if (!isWheelBlocked) {
                    killTween();
                    setTweenerValueManually(scrollTop);
                }
                isWheelBlocked = false;
            }

            return scroll;
        }),
    }
    ;
})(window.jQuery);


/*
 ** PluginName: Pualugin
 ** Auth: Pual
 */

 (function ($, win, doc, undefined) {
    "use strict";
  
    /*
     ** Local Variables
     */
    var COMMON = {};
  
    /*
     ** COMMON
     */
    (function () {
      COMMON.uuid = (function () {
        var _uuid = 0;
        return function (prefix) {
          var id = ++_uuid;
          prefix = prefix ? prefix : "";
          return prefix + id;
        };
      })();
  
      COMMON.findFocusElement = function (element) {
        var _basket = [];
  
        $(element)
          .find("*")
          .each(function (i, val) {
            if (
              val.tagName.match(
                /^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim
              ) &&
              parseInt(val.getAttribute("tabIndex")) !== -1
            ) {
              _basket.push(val);
            }
            if (
              val.getAttribute("tabIndex") !== null &&
              parseInt(val.getAttribute("tabIndex")) >= 0 &&
              val.getAttribute("tabIndex", 2) !== 32768
            ) {
              _basket.push(val);
            }
          });
  
        return [_basket[0], _basket[_basket.length - 1]];
      };
  
      COMMON.checkPrevId = function ($element, pluginName) {
        return $element.attr("id").indexOf(pluginName) !== -1 ?
          false :
          true;
      };
  
      COMMON.checkFocusibleElement = function ($element) {
        var tagName = $element.get(0).tagName.toLowerCase();
  
        if (tagName === "a" || tagName === "button") {
          return true;
        } else {
          return false;
        }
      };
    })();
  
    /*
     ** Plugin - Toggle
     */
    (function ($, win, doc, undefined) {
      var pluginName = "toggle";
  
      var defaults = {
        mode: "static", // static, slide, fade
        event: "click", // 'focusin'
        speed: 300,
        easing: "swing",
        anchorEl: '[data-element="toggle__anchor"]',
        panelEl: '[data-element="toggle__panel"]',
        onChangeBeforeText: null,
        onChangeAfterText: null,
        activeClassName: "is-active",
        isOpened: false
      };
  
      function Plugin(element, options) {
        this.element = element;
        this._name = pluginName;
        this._defaults = defaults;
        this.options = $.extend({}, this._defaults, options);
        this.flag = false;
        this.textFlag = false;
        this.init();
      }
  
      $.extend(Plugin.prototype, {
        init: function () {
          var plugin = this;
  
          plugin.buildCache();
          plugin.bindEvents();
  
          plugin.options.isOpened ? plugin.open() : plugin.close();
        },
        destroy: function () {
          var plugin = this;
  
          plugin.flag = false;
          plugin.textFlag = false;
  
          plugin.unbindEvents().removeCache();
  
          plugin.$element.removeData("plugin_" + plugin._name);
        },
        buildCache: function () {
          var plugin = this;
  
          plugin.$element = $(plugin.element);
          plugin.$anchor = plugin.$element.find(plugin.options.anchorEl);
          plugin.$panel = plugin.$element.find(plugin.options.panelEl);
  
          !COMMON.checkFocusibleElement(plugin.$anchor) &&
            plugin.$anchor.attr({
              role: "button",
              tabindex: 0
            });
  
          var _id = plugin.$panel.attr("id") ?
            plugin.$panel.attr("id") :
            COMMON.uuid(plugin._name + "-");
  
          plugin.$anchor.attr("aria-controls", _id);
          plugin.$panel.attr("id", _id);
  
          if (
            plugin.options.onChangeAfterText !== null &&
            plugin.options.onChangeBeforeText !== null
          ) {
            plugin.textFlag = true;
          }
        },
        removeCache: function () {
          var plugin = this;
  
          plugin.$anchor.removeAttr(
            "aria-expended aria-controls tabindex role"
          );
          plugin.$panel.removeAttr("aria-expended style");
  
          !COMMON.checkPrevId(plugin.$panel, plugin._name) &&
            plugin.$panel.removeAttr("id");
        },
        bindEvents: function () {
          var plugin = this;
  
          var eventName = (function () {
            var events = plugin.options.event;
  
            if (events === "focusin") {
              return (
                "focusin." +
                plugin._name +
                " mouseenter." +
                plugin._name
              );
            } else if (events === "click") {
              return (
                "click." + plugin._name + " keydown." + plugin._name
              );
            }
            return events + "." + plugin._name;
          })();
  
          plugin.$anchor.off(eventName).on(eventName, function (e) {
            e.stopPropagation();
  
            var key = e.which || e.keyCode;
  
            if (
              e.type === "click" ||
              e.type === "focusin" ||
              key === 13 ||
              key === 32
            ) {
              plugin.idx = $(this).data("index");
              plugin.toggle();
              e.preventDefault();
            }
          });
  
          plugin.$element
            .off("show." + plugin._name)
            .on("show." + plugin._name, function (e) {
              plugin.show();
            });
  
          plugin.$element
            .off("hide." + plugin._name)
            .on("hide." + plugin._name, function (e) {
              plugin.hide();
            });
        },
        unbindEvents: function () {
          var plugin = this;
  
          plugin.$anchor.off("." + plugin._name);
          plugin.$element.off("." + plugin._name);
        },
        beforeChange: function ($anchor, $panel) {
          var plugin = this;
  
          plugin.$element.trigger("beforeChange", [
            plugin,
            $anchor,
            $panel
          ]);
        },
        afterChange: function ($anchor, $panel) {
          var plugin = this;
  
          plugin.$element.trigger("afterChange", [
            plugin,
            $anchor,
            $panel
          ]);
  
          $panel.find(".slick-initialized").length &&
            $panel.find(".slick-initialized").slick("setPosition");
        },
        toggle: function () {
          var plugin = this;
  
          plugin.flag ? plugin.close() : plugin.open();
        },
        open: function () {
          var plugin = this;
  
          plugin.flag = true;
  
          plugin.beforeChange(plugin.$anchor, plugin.$panel);
  
          plugin.textFlag &&
            plugin.$anchor.text(plugin.options.onChangeAfterText);
  
          plugin.$anchor
            .addClass(plugin.options.activeClassName)
            .attr("aria-expended", true);
  
          if (plugin.options.mode === "fade") {
            plugin.$panel
              .stop()
              .fadeIn(
                plugin.options.speed,
                plugin.options.easing,
                function () {
                  plugin.afterChange(
                    plugin.$anchor,
                    plugin.$panel
                  );
                }
              );
          } else if (plugin.options.mode === "slide") {
            plugin.$panel
              .stop()
              .slideDown(
                plugin.options.speed,
                plugin.options.easing,
                function () {
                  plugin.afterChange(
                    plugin.$anchor,
                    plugin.$panel
                  );
                }
              );
          } else {
            plugin.$panel.stop().show();
            plugin.afterChange(plugin.$anchor, plugin.$panel);
          }
  
          plugin.afterChange(plugin.$anchor, plugin.$panel);
        },
        close: function () {
          var plugin = this;
  
          plugin.flag = false;
  
          plugin.beforeChange(plugin.$anchor, plugin.$panel);
  
          plugin.textFlag &&
            plugin.$anchor.text(plugin.options.onChangeBeforeText);
  
          plugin.$anchor
            .removeClass(plugin.options.activeClassName)
            .attr("aria-expended", false);
  
          if (plugin.options.mode === "fade") {
            plugin.$panel
              .stop()
              .fadeOut(plugin.options.speed, plugin.options.easing);
          } else if (plugin.options.mode === "slide") {
            plugin.$panel
              .stop()
              .slideUp(plugin.options.speed, plugin.options.easing);
          } else {
            plugin.$panel.stop().hide();
          }
  
          plugin.afterChange(plugin.$anchor, plugin.$panel);
        },
        reInit: function () {
          var plugin = this;
  
          plugin.flag = false;
          plugin.textFlag = false;
  
          plugin
            .unbindEvents()
            .removeCache()
            .init();
        }
      });
  
      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(
              this,
              "plugin_" + pluginName,
              new Plugin(this, options || $(this).data("options"))
            );
          }
        });
      };
  
      $(function () {
        //$("[data-element=toggle]").toggle();
      });
    })(jQuery, window, document, undefined);
  
    /*
     ** Plugin - Tooltip
     */
    (function ($, win, doc, undefined) {
      var pluginName = "tooltip";
  
      var defaults = {
        position: "right", //left, top, bottom
        mode: "tooltip", // popover
        indent: 10,
        button: "[data-element=tooltip__button]",
        panel: "[data-element=tooltip__panel]",
        tooltipContainerClassName: "pualugin-tooltip-container",
        activeClassName: "is-active",
        zindex: 100
      };
  
      function Plugin(element, options) {
        this.element = element;
        this._name = pluginName;
        this._defaults = defaults;
        this.options = $.extend({}, this._defaults, options);
        this.flag = false;
        this.init();
      }
  
      $.extend(Plugin.prototype, {
        init: function () {
          var plugin = this;
  
          plugin.buildCache();
          plugin.bindEvents();
        },
        destroy: function () {
          var plugin = this;
  
          plugin.flag = false;
  
          plugin.$element.removeData("plugin_" + plugin._name);
          plugin.unbindEvents().removeCache();
        },
        buildCache: function () {
          var plugin = this;
          var container = "." + plugin.options.tooltipContainerClassName;
  
          plugin.$element = $(plugin.element);
          plugin.$button = plugin.$element.find(plugin.options.button);
          plugin.$panel = plugin.$element.find(plugin.options.panel);
          plugin.$container = $(container).length ?
            $(container) :
            $("body").append(
              "<div class=" +
              plugin.options.tooltipContainerClassName +
              "></div>"
            );
          plugin.$win = $(win);
  
          var _id = plugin.$panel.attr("id") ?
            plugin.$panel.attr("id") :
            COMMON.uuid(plugin._name);
  
          var focusible = COMMON.checkFocusibleElement(plugin.$button);
  
          plugin.$element.css("display", "inline-block");
  
          plugin.$button.attr({
            role: "tooltip",
            "aria-describedby": _id,
            "aria-controls": _id,
            "aria-expended": false,
            tabindex: focusible ? "" : 0
          });
  
          plugin.$panel
            .css("z-index", plugin.options.zindex)
            .attr("id", _id)
            .hide()
            .appendTo($(container));
        },
        removeCache: function () {
          var plugin = this;
  
          plugin.$element
            .removeAttr("style")
            .removeData("plugin_" + plugin._name);
          plugin.$panel.appendTo(plugin.$element).removeAttr("style");
  
          plugin.$button.removeAttr(
            "role aria-describedby aria-controls aria-expended"
          );
          plugin.$container.find(plugin.options.panel).length === 0 &&
            plugin.$container.remove();
  
          !COMMON.checkPrevId(plugin.$panel, plugin._name) &&
            plugin.$panel.removeAttr("id");
        },
        bindEvents: function () {
          var plugin = this;
  
          var eventName = (function () {
            var events = plugin.options.mode;
  
            if (events === "tooltip") {
              return [
                "focusin." +
                plugin._name +
                " mouseenter." +
                plugin._name,
                "focusout." +
                plugin._name +
                " mouseleave." +
                plugin._name
              ];
            } else {
              return ["click." + plugin._name];
            }
          })();
  
          if (eventName.length == 1) {
            plugin.$button.on(eventName[0], function (e) {
              e.preventDefault();
              plugin.toggle();
            });
  
            plugin.$win.on(eventName[0], function (e) {
              if (plugin.flag) {
                if (
                  !plugin.$element.is(e.target) &&
                  plugin.$element.has(e.target).length === 0
                ) {
                  plugin.close();
                }
              }
            });
          } else if (eventName.length == 2) {
            plugin.$button
              .on(eventName[0], function (e) {
                e.preventDefault();
  
                plugin.open();
              })
              .on(eventName[1], function (e) {
                e.preventDefault();
  
                plugin.close();
              });
          }
        },
        unbindEvents: function () {
          var plugin = this;
  
          plugin.$button.off("." + plugin._name);
          plugin.$win.off("." + plugin._name);
        },
        toggle: function () {
          var plugin = this;
  
          plugin.flag ? plugin.close() : plugin.open();
        },
        open: function () {
          var plugin = this;
  
          plugin.flag = true;
          plugin.$button.attr("aria-expended", true);
          plugin.$panel
            .css("position", "absolute")
            .addClass(plugin.options.activeClassName)
            .show();
          plugin.setPosition();
        },
        close: function () {
          var plugin = this;
  
          plugin.flag = false;
          plugin.$button.attr("aria-expended", false);
          plugin.$panel
            .css("position", "")
            .removeClass(plugin.options.activeClassName)
            .hide();
        },
        setPosition: function () {
          var plugin = this;
  
          var buttonWidth = plugin.$button.outerWidth(),
            buttonHeight = plugin.$button.outerHeight(),
            panelWidth = plugin.$panel.outerWidth(),
            panelHeight = plugin.$panel.outerHeight();
  
          var buttonOffset = plugin.$button.offset(),
            buttonTop = buttonOffset.top,
            buttonLeft = buttonOffset.left;
  
          switch (plugin.options.position) {
            case "left":
              plugin.$panel.css({
                top: buttonTop + (buttonHeight - panelHeight) / 2,
                left: buttonLeft - panelWidth - plugin.options.indent
              });
              break;
            case "top":
              plugin.$panel.css({
                top: buttonTop - panelHeight - plugin.options.indent,
                left: Math.abs(buttonLeft + buttonWidth / 2) -
                  Math.abs(panelWidth / 2)
              });
              break;
            case "bottom":
              plugin.$panel.css({
                top: buttonTop +
                  buttonHeight +
                  plugin.options.indent,
                left: Math.abs(buttonLeft + buttonWidth / 2) -
                  Math.abs(panelWidth / 2)
              });
              break;
            default:
              plugin.$panel.css({
                top: buttonTop + (buttonHeight - panelHeight) / 2,
                left: buttonLeft + buttonWidth + plugin.options.indent
              });
          }
        },
        reInit: function () {
          var plugin = this;
  
          plugin.flag = false;
          plugin
            .unbindEvents()
            .removeCache()
            .init();
        }
      });
  
      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(
              this,
              "plugin_" + pluginName,
              new Plugin(this, options || $(this).data("options"))
            );
          }
        });
      };
  
      $(function () {
        //$("[data-element=tooltip]").tooltip();
      });
    })(jQuery, window, document, undefined);
  
    /*
     ** Plugin - Tab
     */
    (function ($, win, doc, undefined) {
      var pluginName = "tab";
  
      var defaults = {
        mode: "static", // static, slide, fade
        event: "click", // 'focusin'
        speed: 300,
        easing: "swing",
        list: '[data-element="tab__list"]',
        anchor: '[data-element="tab__anchor"]',
        panel: '[data-element="tab__panel"]',
        activeClassName: "is-active",
        disabledClassName: "is-disabled",
        autoScroll: false,
        isInitActive: true,
        initIndex: 0
      };
  
      function Plugin(element, options) {
        this.element = element;
        this._name = pluginName;
        this._defaults = defaults;
        this.options = $.extend({}, this._defaults, options);
        this.flag = false;
        this.initialized = false;
        this.idx = 0;
        this.init();
      }
  
      $.extend(Plugin.prototype, {
        init: function () {
          var plugin = this;
  
          plugin.buildCache();
          plugin.bindEvents();
  
          plugin.options.isInitActive &&
            plugin.$anchor
            .eq(plugin.options.initIndex)
            .trigger(plugin.options.event);
  
          plugin.initialized = true;
        },
        destroy: function () {
          var plugin = this;
  
          plugin.idx = 0;
          plugin.flag = false;
          plugin.initialized = false;
  
          plugin.$element.removeData("plugin_" + plugin._name);
          plugin.unbindEvents().removeCache();
        },
        buildCache: function () {
          var plugin = this;
          var anchorsId = [];
  
          plugin.$element = $(plugin.element);
          plugin.$anchor = plugin.$element.find(plugin.options.anchor);
          plugin.$panel = plugin.$element.find(plugin.options.panel);
          plugin.$list = plugin.$element.find(plugin.options.list);
  
          plugin.$anchor.each(function (idx) {
            var $this = $(this);
            var _id = $this.attr("id") ?
              $this.attr("id") :
              COMMON.uuid("pualugin-" + plugin._name + "-");
            var focusible = COMMON.checkFocusibleElement($this);
  
            $this
              .data(plugin._name + "_target", plugin.$panel.eq(idx))
              .attr({
                id: _id,
                role: "tab",
                tabindex: focusible ? "" : 0
              });
  
            anchorsId.push(_id);
          });
  
          plugin.$panel.each(function (idx) {
            $(this).attr({
              "aria-labelledby": anchorsId[idx],
              role: "tabpanel",
              tabindex: 0
            });
          });
  
          plugin.$list.attr("role", "tablist");
        },
        removeCache: function () {
          var plugin = this;
  
          plugin.$list.removeAttr("role");
          plugin.$anchor
            .removeData(plugin._name + "_target")
            .removeAttr("style role")
            .removeClass(plugin.options.activeClassName);
          plugin.$panel
            .removeAttr("style role aria-labelledby")
            .removeClass(plugin.options.activeClassName);
          !COMMON.checkPrevId(plugin.$panel, plugin._name) &&
            plugin.$panel.removeAttr("id");
        },
        bindEvents: function () {
          var plugin = this;
  
          var eventName = (function () {
            var events = plugin.options.event;
  
            if (events === "focusin") {
              return (
                "focusin." +
                plugin._name +
                " mouseenter." +
                plugin._name
              );
            } else if (events === "click") {
              return (
                "click." + plugin._name + " keydown." + plugin._name
              );
            }
            return events + "." + plugin._name;
          })();
  
          plugin.$anchor.on(eventName, function (e) {
            e.stopPropagation();
            var $this = $(this);
  
            if (
              $this.hasClass(plugin.options.activeClassName) ||
              $this.hasClass(plugin.options.disabledClassName) ||
              plugin.flag
            )
              return false;
  
            var key = e.which;
  
            if (
              e.type === "click" ||
              e.type === "focusin" ||
              key === 13 ||
              key === 32
            ) {
              plugin.idx = $(this).data("index");
              plugin.close(this);
              plugin.open(this);
              e.preventDefault();
            }
          });
        },
        unbindEvents: function () {
          var plugin = this;
  
          plugin.$anchor.off("." + plugin._name);
          plugin.$element.off("." + plugin._name);
        },
        beforeChange: function ($anchor, $panel) {
          var plugin = this;
  
          plugin.$element.trigger("beforeChange", [
            plugin,
            $anchor,
            $panel
          ]);
        },
        afterChange: function ($anchor, $panel) {
          var plugin = this;
  
          plugin.$element.trigger("afterChange", [
            plugin,
            $anchor,
            $panel
          ]);
  
          $panel.find(".slick-initialized").length &&
            $panel.find(".slick-initialized").slick("setPosition");
        },
        open: function (target) {
          var plugin = this,
            $anchor = $(target);
  
          var $panel = $anchor
            .addClass(plugin.options.activeClassName)
            .attr({
              "aria-selected": true,
              "aria-expended": true
            })
            .data(plugin._name + "_target")
            .addClass(plugin.options.activeClassName);
  
          plugin.flag = true;
  
          plugin.beforeChange($anchor, $panel);
  
          if (plugin.options.mode === "fade") {
            $panel
              .stop()
              .fadeIn(
                plugin.options.speed,
                plugin.options.easing,
                function () {
                  plugin.flag = false;
                  plugin.afterChange($anchor, $panel);
                }
              );
          } else if (plugin.options.mode === "slide") {
            $panel
              .stop()
              .slideDown(
                plugin.options.speed,
                plugin.options.easing,
                function () {
                  plugin.flag = false;
                  plugin.afterChange($anchor, $panel);
                }
              );
          } else {
            $panel.stop().show();
            plugin.flag = false;
            plugin.afterChange($anchor, $panel);
          }
  
          if (plugin.options.autoScroll && plugin.initialized) {
            $("html, body")
              .stop()
              .animate({
                  scrollTop: plugin.$element.offset().top
                },
                plugin.options.speed
              );
          }
        },
        close: function (target) {
          var plugin = this;
  
          plugin.$anchor.not(target).each(function () {
            var $panel = $(this)
              .removeClass(plugin.options.activeClassName)
              .attr({
                "aria-selected": false,
                "aria-expended": false
              })
              .data(plugin._name + "_target")
              .removeClass(plugin.options.activeClassName);
  
            if (plugin.options.mode === "fade") {
              $panel
                .stop()
                .fadeOut(
                  plugin.options.speed,
                  plugin.options.easing
                );
            } else if (plugin.options.mode === "slide") {
              $panel
                .stop()
                .slideUp(
                  plugin.options.speed,
                  plugin.options.easing
                );
            } else {
              $panel.stop().hide();
            }
          });
        },
        go: function (idx, autoScroll) {
          var plugin = this;
  
          plugin.$anchor.eq(idx).trigger(plugin.options.event);
  
          if (autoScroll && plugin.initialized) {
            $("html, body")
              .stop()
              .animate({
                  scrollTop: plugin.$element.offset().top
                },
                plugin.options.speed
              );
          }
        },
        reInit: function () {
          var plugin = this;
  
          plugin.idx = 0;
          plugin.flag = false;
          plugin.initialized = false;
  
          plugin
            .unbindEvents()
            .removeCache()
            .init();
        }
      });
  
      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(
              this,
              "plugin_" + pluginName,
              new Plugin(this, options || $(this).data("options"))
            );
          }
        });
      };
  
      $(function () {
        //$("[data-element=tab]").tab();
      });
    })(jQuery, window, document, undefined);
  
    /*
     ** Plugin - Accordion
     */
    (function ($, win, doc, undefined) {
      var pluginName = "accordion";
  
      var defaults = {
        mode: "slide", // static, slide
        speed: 200,
        easing: "linear",
        item: '[data-element="accordion__item"]',
        anchor: '[data-element="accordion__anchor"]',
        panel: '[data-element="accordion__panel"]',
        activeClassName: "is-active",
        initIndex: 0,
        isInitActive: false,
        autoFold: true,
        autoScroll: false
      };
  
      function Plugin(element, options) {
        var plugin = this;
  
        plugin.element = element;
        plugin._name = pluginName;
        plugin._defaults = defaults;
        plugin.options = $.extend({}, plugin._defaults, options);
        plugin.flag = false;
        plugin.initialized = false;
        plugin.init();
      }
  
      $.extend(Plugin.prototype, {
        init: function () {
          var plugin = this;
  
          plugin.buildCache();
          plugin.bindEvents();
  
          plugin.options.isInitActive &&
            plugin.open(plugin.$anchor.eq(plugin.options.initIndex));
  
          plugin.initialized = true;
        },
        destroy: function () {
          var plugin = this;
  
          plugin.flag = false;
          plugin.initialized = false;
          plugin.$element.removeData("plugin_" + plugin._name);
          plugin.unbindEvents().removeCache();
        },
        buildCache: function () {
          var plugin = this;
  
          plugin.$element = $(plugin.element).attr(
            "role",
            "presentation"
          );
          plugin.$header = plugin.$element.find(plugin.options.item);
          plugin.$anchor = plugin.$element.find(plugin.options.anchor);
          plugin.$panel = plugin.$element
            .find(plugin.options.panel)
            .hide();
  
          var tabsId = [];
  
          plugin.$anchor.each(function (idx) {
            var $this = $(this);
            var _id = $this.attr("id") ?
              $this.attr("id") :
              COMMON.uuid("pualugin-" + plugin._name + "-");
  
            $this
              .data(plugin._name + "_target", plugin.$panel.eq(idx))
              .data("title", $.trim($this.text()))
              .attr({
                id: _id,
                "aria-expanded": false,
                "aria-controls": _id + "-panel"
              });
  
            tabsId.push(_id);
          });
  
          plugin.$panel.each(function (idx) {
            $(this)
              .attr({
                "aria-labelledby": tabsId[idx],
                role: "region"
              })
              .hide();
          });
        },
        removeCache: function () {
          var plugin = this;
  
          plugin.$anchor
            .removeData(plugin._name + "_target")
            .removeData("title")
            .removeAttr("id aria-expanded aria-controls")
            .removeClass(plugin.options.activeClassName);
  
          plugin.$panel
            .removeAttr("aria-labelledby role")
            .removeClass(plugin.options.activeClassName);
          !COMMON.checkPrevId(plugin.$anchor, plugin._name) &&
            plugin.$anchor.removeAttr("id");
        },
        bindEvents: function () {
          var plugin = this;
  
          plugin.$element.on(
            "click" + "." + plugin._name,
            plugin.options.anchor,
            function (e) {
              e.stopPropagation();
              e.preventDefault();
  
              if (plugin.flag) {
                return false;
              }
              plugin.toggle($(this));
            }
          );
  
          plugin.$anchor.on("open." + plugin._name, function () {
            plugin.open($(this));
          });
  
          plugin.$anchor.on("close." + plugin._name, function () {
            plugin.close($(this));
          });
        },
        unbindEvents: function () {
          var plugin = this;
  
          plugin.$element.off("." + plugin._name);
          plugin.$header.off("." + plugin._name);
        },
        beforeChange: function ($activeTarget) {
          var plugin = this;
  
          plugin.$element.trigger("beforeChange", [
            plugin,
            $activeTarget
          ]);
        },
        afterChange: function ($activeTarget) {
          var plugin = this;
  
          plugin.$element.trigger("afterChange", [plugin, $activeTarget]);
        },
        toggle: function ($targetAnchor) {
          var plugin = this;
  
          plugin.flag = true;
  
          $targetAnchor.hasClass(plugin.options.activeClassName) ?
            plugin.close($targetAnchor) :
            plugin.open($targetAnchor);
        },
        open: function ($targetAnchor) {
          var plugin = this;
  
          plugin.beforeChange($targetAnchor);
  
          var $panel = $targetAnchor
            .attr("aria-expanded", true)
            .addClass(plugin.options.activeClassName)
            .data(plugin._name + "_target")
            .addClass(plugin.options.activeClassName);
  
          if (plugin.initialized && plugin.options.mode == "slide") {
            $panel
              .stop()
              .slideDown(
                plugin.options.speed,
                plugin.options.easing,
                function () {
                  plugin.flag = false;
  
                  if (plugin.options.autoScroll) {
                    $("html, body")
                      .stop()
                      .animate({
                          scrollTop: $targetAnchor.offset()
                            .top
                        },
                        100
                      );
                  }
                }
              );
          } else {
            $panel.stop().show();
            plugin.flag = false;
          }
  
          if (plugin.options.autoFold) {
            plugin.$anchor.not($targetAnchor).each(function () {
              plugin.close($(this));
            });
          }
  
          plugin.afterChange($targetAnchor);
        },
        close: function ($targetAnchor) {
          var plugin = this;
  
          plugin.beforeChange($targetAnchor);
  
          var $panel = $targetAnchor
            .attr("aria-expanded", false)
            .removeClass(plugin.options.activeClassName)
            .data(plugin._name + "_target")
            .removeClass(plugin.options.activeClassName);
  
          if (plugin.options.mode === "slide") {
            $panel
              .stop()
              .slideUp(
                plugin.options.speed,
                plugin.options.easing,
                function () {
                  plugin.flag = false;
                }
              );
          } else {
            $panel.stop().hide();
            plugin.flag = false;
          }
  
          plugin.afterChange($targetAnchor);
        },
        go: function (idx, autoScroll) {
          var plugin = this;
  
          plugin.$anchor.eq(idx).trigger("click");
  
          if (autoScroll) {
            plugin.autoScroll();
          }
        },
        autoScroll: function () {
          var plugin = this;
  
          $("html, body")
            .stop()
            .animate({
                scrollTop: plugin.$wrap.offset().top
              },
              plugin.options.speed
            );
        },
        reInit: function () {
          var plugin = this;
  
          plugin.flag = false;
          plugin.initialized = false;
  
          plugin
            .unbindEvents()
            .removeCache()
            .init();
        }
      });
  
      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(
              this,
              "plugin_" + pluginName,
              new Plugin(this, options || $(this).data("options"))
            );
          }
        });
      };
  
      $(function () {
        //$("[data-element=accordion]").accordion();
      });
    })(jQuery, window, document, undefined);
  
    /*
     ** Plugin - Sticky
     */
    (function ($, win, doc, undefined) {
      var pluginName = "sticky";
  
      var defaults = {
        position: "top", //bottom, middle
        top: 0,
        sectionEl: "[data-element=sticky__section]",
        headerEl: "[data-element=sticky__target-parent]",
        targetEl: "[data-element=sticky__target]",
        activeClassName: "is-sticky"
      };
  
      function Plugin(element, options) {
        this.element = element;
        this._name = pluginName;
        this._defaults = defaults;
        this.options = $.extend({}, this._defaults, options);
        this.flag = false;
        this.headerHeight = 0;
        this.init();
      }
  
      $.extend(Plugin.prototype, {
        init: function () {
          var plugin = this;
  
          plugin.buildCache();
          plugin.bindEvents();
        },
        destroy: function () {
          var plugin = this;
  
          plugin.flag = false;
          plugin.headerHeight = 0;
  
          plugin.$element.removeData("plugin_" + plugin._name);
          plugin
            .unbindEvents()
            .removeCache()
            .init();
        },
        buildCache: function () {
          var plugin = this;
  
          plugin.$element = $(plugin.element);
          plugin.$header = plugin.$element.find(plugin.options.headerEl);
          plugin.$target = plugin.$element.find(plugin.options.targetEl);
          plugin.$win = $(win);
  
          plugin.headerHeight = plugin.$header.outerHeight();
        },
        removeCache: function () {
          var plugin = this;
  
          plugin.$element.removeAttr("style");
          plugin.$header.removeAttr("style");
          plugin.$target.removeAttr("style");
        },
        bindEvents: function () {
          var plugin = this;
  
          plugin.$win
            .on("scroll." + plugin._name, function () {
              var scrTop = $(this).scrollTop();
  
              plugin.toggle(scrTop);
            })
            .on("resize." + plugin._name, function () {
              $(this).trigger("scroll");
            });
        },
        unbindEvents: function () {
          plugin.$win.off("." + plugin._name);
        },
        toggle: function (scrTop) {
          var plugin = this;
  
          plugin.getPosition();
  
          if (scrTop > plugin.bottom) {
            plugin.unFixed();
            plugin.bottomRelative();
          } else if (scrTop >= plugin.top) {
            plugin.bottomFixed();
            plugin.setFixed();
          } else if (scrTop <= plugin.top) {
            plugin.unFixed();
          }
        },
        setFixed: function () {
          var plugin = this;
  
          plugin.beforeChange();
          plugin.$header.css("height", plugin.headerHeight);
          plugin.$target.addClass(plugin.options.activeClassName).css({
            position: "fixed",
            top: plugin.options.top,
            left: plugin.$header.offset().left,
            width: plugin.$header.outerWidth()
          });
          plugin.afterChange();
        },
        unFixed: function () {
          var plugin = this;
  
          plugin.$header.css("height", plugin.headerHeight);
          plugin.$target.removeClass(plugin.options.activeClassName).css({
            position: "",
            top: "",
            left: "",
            width: ""
          });
        },
        bottomFixed: function () {
          var plugin = this;
  
          plugin.$element.css({
            position: ""
          });
  
          plugin.$target.css({
            position: "",
            bottom: "",
            width: ""
          });
        },
        bottomRelative: function () {
          var plugin = this;
  
          plugin.$element.css("position", "relative");
          plugin.$target.css({
            position: "absolute",
            bottom: "0",
            top: "auto",
            width: "100%"
          });
        },
        getOffsetTop: function (target) {
          var plugin = this;
          var wrapTop = plugin.$element.offset().top;
          var headerHeight = plugin.$header.height();
          var position = plugin.options.position;
          var topValue = plugin.options.top;
  
          if (target) {
            return $(target).offset().top - topValue;
          } else if (position === "bottom") {
            return wrapTop + headerHeight - topValue;
          } else if (position === "middle") {
            return wrapTop + headerHeight / 2 - topValue;
          } else {
            return wrapTop - topValue;
          }
        },
        getPosition: function () {
          var plugin = this;
          plugin.top = plugin.getOffsetTop(plugin.$element);
          plugin.bottom =
            plugin.top +
            (plugin.$element.outerHeight() - plugin.headerHeight);
        },
        beforeChange: function () {
          var plugin = this;
  
          plugin.$element.trigger("beforeChange", [
            plugin,
            plugin.$target
          ]);
        },
        afterChange: function () {
          var plugin = this;
  
          plugin.$element.trigger("afterChange", [
            plugin,
            plugin.$target
          ]);
        },
        reInit: function () {
          var plugin = this;
  
          plugin.flag = false;
          plugin.headerHeight = 0;
  
          plugin
            .unbindEvents()
            .removeCache()
            .init();
        }
      });
  
      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(
              this,
              "plugin_" + pluginName,
              new Plugin(
                this,
                $.extend({}, options, $(this).data("options"))
              )
            );
          }
        });
      };
  
      $(function () {
        //$("[data-element=sticky]").sticky();
      });
    })(jQuery, window, document, undefined);
  
    /*
     ** Plugin - Form Control
     */
    (function ($, win, doc, undefined) {
      var pluginName = "formCtrl";
  
      var defaults = {
        input: "[data-element=form-ctrl__input]",
        textarea: "[data-element=form-ctrl__textarea]",
        delete: "[data-element=form-ctrl__delete]",
        count: "[data-element=form-ctrl__count]",
        countCurrent: "[data-element=form-ctrl__count-current]",
        countTotal: "[data-element=form-ctrl__count-total]",
        activeClassName: "is-active",
        autoHeight: false //true
      };
  
      function Plugin(element, options) {
        this.element = element;
        this._name = pluginName;
        this._defaults = defaults;
        this.options = $.extend({}, this._defaults, options);
        this.init();
      }
  
      $.extend(Plugin.prototype, {
        init: function () {
          var plugin = this;
          plugin.buildCache();
          plugin.bindEvents();
        },
        buildCache: function () {
          var plugin = this;
          plugin.$element = $(plugin.element);
          plugin.$input = plugin.$element.find(plugin.options.input);
          plugin.$textarea = plugin.$element.find(
            plugin.options.textarea
          );
          plugin.$delete = plugin.$element.find(plugin.options.delete);
          plugin.$count = plugin.$element.find(plugin.options.count);
          plugin.$countCurrunt = plugin.$element.find(
            plugin.options.countCurrent
          );
          plugin.$countTotal = plugin.$element.find(
            plugin.options.countTotal
          );
        },
        bindEvents: function () {
          var plugin = this;
  
          plugin.$input
            .on("keyup." + plugin._name, function (e) {
              plugin.toggle(this);
            })
            .keyup();
  
          plugin.$delete.on("click." + plugin._name, function (e) {
            e.preventDefault();
            plugin.delete();
          });
  
          plugin.$textarea
            .on(
              "keyup." + plugin._name + " input." + plugin._name,
              function (e) {
                plugin.count(e);
                if (plugin.options.autoHeight) {
                  plugin.resize();
                }
              }
            )
            .keyup();
        },
        toggle: function (self) {
          var plugin = this;
          var $self = $(self);
  
          $self.val().length > 0 ? plugin.show() : plugin.hide();
        },
        show: function () {
          var plugin = this;
  
          if (plugin.$input.attr("class").indexOf("search") != -1) {
            $(".search__COMMON-button-box").hide();
          }
          plugin.$delete.addClass(plugin.options.activeClassName);
        },
        hide: function () {
          var plugin = this;
  
          plugin.$delete.removeClass(plugin.options.activeClassName);
          if (plugin.$input.attr("class").indexOf("search") != -1) {
            $(".search__COMMON-button-box").show();
          }
        },
        delete: function () {
          var plugin = this;
          plugin.$input.val("").focus();
          plugin.hide();
        },
        count: function (e) {
          var plugin = this;
          var maxLength = plugin.$countTotal.text() || 500;
          var curruntLength = plugin.$textarea.val().length;
  
          if (curruntLength <= maxLength) {
            plugin.$countCurrunt.text(curruntLength);
          } else {
            plugin.$countCurrunt.text(plugin.$countTotal.text());
          }
        },
        resize: function () {
          var plugin = this;
          var paddingTop = plugin.$textarea
            .css("padding-top")
            .replace("px", "");
          var paddingBtm = plugin.$textarea
            .css("padding-bottom")
            .replace("px", "");
          plugin.$textarea
            .css({
              height: "auto",
              overflow: "hidden"
            })
            .height(
              plugin.$textarea[0].scrollHeight -
              paddingTop -
              paddingBtm
            );
        }
      });
  
      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(
              this,
              "plugin_" + pluginName,
              new Plugin(this, options || $(this).data("options"))
            );
          }
        });
      };
  
      $(function () {
        //$("[data-element=form-ctrl]").formCtrl();
      });
    })(jQuery, window, document, undefined);
  
    /*
     ** Plugin - Modal
     */
    // ;
      // (function ($, win, doc, undefined) {
      // 	var pluginName = "modal";
  
      // 	var defaults = {
      // 		closeExisting: true,
      // 		stackLevel: 10,
      // 		mobileResolution: 1280,
    //     activeClassName: 'is-open',
      // 		wrapperClassName: '#wrap',
      // 		modalClassName: 'pualugin-modal',
      // 		modalMaskClassName: 'pualugin-modal__mask',
      // 		container: '[data-element=modal]',
      // 		modal: '[data-element=modal__element]',
      // 		modalInner: '[data-element=modal__element-container]',
      // 		mask: '[data-element=modal__mask]',
      // 		close: '[data-element=modal__close]',
      // 		open: '[data-element=modal__open]'
      // 	}
  
      // 	function Plugin(element, options) {
      // 		this.element = element;
      // 		this._name = pluginName;
      // 		this._defaults = defaults;
      // 		this.options = $.extend({}, this._defaults, options);
      // 		this.flag = false;
      // 		this.stackLevel = this.options.stackLevel;
      // 		this.currentScrollTop = 0;
      // 		this.isMobile = false;
      // 		this.init();
      // 	}
  
      // 	$.extend(Plugin.prototype, {
      // 		init: function() {
    //       var plugin = this;
  
    //       // 모달 컨테이너 생성
      // 			var container = $('<div />')
    //         .addClass(plugin.options.modalClassName)
    //         .attr('data-element', 'modal')
    //         .appendTo('body');
  
    //       // document에 있는 모달을 찾아서 모달 컨테이너에 append
    //       $( plugin.options.modal ).appendTo( container );
  
      // 			plugin.buildCache();
    //       plugin.bindEvents();
      // 		},
      // 		destroy: function() {
      // 			var plugin = this;
  
      // 			plugin.flag = false;
      // 			plugin.stackLevel = 10;
  
      // 			plugin.$element.removeData('plugin_' + plugin._name);
      // 			plugin
      // 				.unbindEvents()
      // 				.removeCache();
    //     },
    //     buildCache: function() {
    //       var plugin = this;
  
      // 			plugin.$element = $(plugin.element);
    //       plugin.$container = plugin.$element.find(plugin.options.container);
      // 			plugin.$modal = plugin.$element.find( plugin.options.modal );
      // 			plugin.$modalInner = plugin.$element.find( plugin.options.modalInner );
      // 			plugin.$open = plugin.$element.find( plugin.options.open );
      // 			plugin.$close = plugin.$element.find( plugin.options.close );
    //       plugin.$wrap = $(plugin.options.wrapperClassName);
      // 			plugin.$win = $(win);
    //       plugin.$doc = $(doc);
  
    //       // 모바일 체크
    //       plugin.isMobile = plugin.$element.width() < plugin.options.mobileResolution && true;
  
      // 			plugin.$modal.attr({
      // 				'role': 'dialog',
    //         'aria-modal': true,
    //         'aria-hidden': true,
    //         'tabindex': -1
      // 			})
      // 			plugin.$open.attr({
      // 				'aria-expended': false,
      // 				'aria-controls': plugin.$open.data('target')
      // 			})
      // 		},
      // 		remoevCache: function() {
      // 			var plugin = this;
  
      // 			plugin.$modal
      // 				.removeClass( plugin.options.activeClassName )
      // 				.removeAttr('role aria-modal aria-hidden z-index tabindex');
      // 		},
      // 		bindEvents: function() {
      // 			var plugin = this;
  
      // 			plugin.$close.on('click.' + plugin._name, function(e) {
    //         e.preventDefault();
  
      // 				plugin.close( $(this).closest(plugin.options.modal) );
      // 			})
  
      // 			plugin.$open.on('click.' + plugin._name, function(e) {
    //         e.preventDefault();
  
    //         var $this = $(this);
    //         $this.attr('aria-expended', true)
      // 				plugin.open( $this.data('target') );
      // 			})
  
      // 			plugin.$doc.on('click.' + plugin._name, function(e) {
      // 				if ( plugin.$modal.is('.is-open') ) {
      // 					if (!plugin.$modalInner.is(e.target) && plugin.$modalInner.has(e.target).length === 0){
      // 						plugin.close( e.target );
      // 					}
      // 				}
      // 			})
  
      // 			plugin.$modal.each(function() {
      // 				var focusEl = COMMON.findFocusElement( this );
      // 				var focusElFirst = $(focusEl[0]);
      // 				var focusElLast = $(focusEl[1]);
  
      // 				focusElFirst.on('keydown.' + plugin._name, function(e) {
      // 					var keyCode = e.keyCode || e.which;
      // 					if ( e.shiftKey && keyCode === 9 ) {
      // 						e.preventDefault();
      // 						focusElLast.focus();
      // 					}
      // 				})
  
      // 				focusElLast.on('keydown.' + plugin._name, function(e) {
      // 					var keyCode = e.keyCode || e.which;
      // 					if ( keyCode == 9 && !e.shiftKey ) {
      // 						e.preventDefault();
      // 						focusElFirst.focus();
      // 					}
      // 				})
      // 			})
      // 		},
      // 		unbindEvents: function () {
      // 			var plugin = this;
  
      // 			plugin.$open !== null && plugin.$open.off('.' + plugin._name);
      // 			plugin.$close.off('.' + plugin._name);
      // 			plugin.$doc.off('.' + plugin._name);
  
      // 			plugin.$modal.each(function() {
      // 				var focusEl = COMMON.findFocusElement( this );
      // 				$(focusEl[0]).off('.' + plugin._name);
      // 				$(focusEl[1]).off('.' + plugin._name);
      // 			})
      // 		},
      // 		open: function( target ) {
      // 			var plugin = this;
    //       var $target = $(target);
  
    //       // 모달이 이미 열려 있는 경우 return
    //       if ( $(target).hasClass('is-open') ) return;
  
    //       // 단일 모달, 다중 모달에 따른 분기 처리
      // 			if ( plugin.options.closeExisting ) {
      // 				plugin.$modal.not( $target ).each(function() {
      // 					plugin.close( this );
      // 				})
      // 			} else {
      // 				plugin.stackLevel += 10;
      // 			}
  
      // 			plugin.fixedContents();
  
      // 			$target
      // 				.addClass(plugin.options.activeClassName)
      // 				.attr({
    //           'aria-hidden': false,
      // 					'tabindex': 0,
      // 					'z-index': plugin.stackLevel
      // 				})
      // 				.focus();
  
      // 			plugin.$element.trigger('modalOpen', [plugin, $target]);
      // 		},
      // 		close: function( target ) {
      // 			var plugin = this;
    //       var $target = $(target);
    //       var $targetButton = $('[data-target=#' + $target.attr('id') + ']');
  
    //       // 모달이 닫혀 있는 경우 return
    //       if ( !$(target).hasClass('is-open') ) return;
  
    //       // 다중 모달인 경우 stackLevel down
      // 			!plugin.options.closeExisting && (plugin.stackLevel -= 10);
  
    //       plugin.unfixedContents();
  
      // 			$target
      // 				.removeClass(plugin.options.activeClassName)
      // 				.attr({
    //           'aria-hidden': true,
      // 					'tabindex': -1,
      // 					'z-index': ''
    //         });
  
    //       // 모달 버튼을 이용하여 포커스 한 경우 버튼에 포커스 이동
    //       $targetButton
    //         .attr('aria-expended', false)
    //         .focus();
  
      // 			plugin.$element.trigger('modalClose', [plugin, $target]);
    //     },
    //     fixedContents: function() {
    //       var plugin = this;
  
    //       plugin.currentScrollTop = plugin.$win.scrollTop();
  
    //       plugin.$wrap
    //       // .css({
    //       //   position: "fixed",
    //       //   width: "100%",
    //       //   height: "100%",
    //       //   overflow: "hidden"
    //       // })
    //       .scrollTop(plugin.currentScrollTop);
  
    //       $("body").addClass("modal-open");
  
    //       plugin.$win.scrollTop(0);
    //     },
      // 		unfixedContents: function() {
      // 			var plugin = this;
  
      // 			plugin.$wrap
    //       $("body").removeClass("modal-open");
      // 			plugin.$win.scrollTop( plugin.currentScrollTop );
      // 		}
      // 	});
  
      // 	$.fn[pluginName] = function ( options ) {
      // 		return this.each(function () {
      // 			if (!$.data(this, "plugin_" + pluginName)) {
      // 				$.data(this, "plugin_" + pluginName, new Plugin(this, options || $(this).data('options')));
      // 			}
      // 		});
      // 	}
  
      // 	$(function () {
      // 		$('body').modal();
      // 	});
  
      // })(jQuery, window, document, undefined)
  
    /*
     ** Plugin - Checkbox Control
     */
    ;(function ($, wino, doc, undefined) {
      var pluginName = "checkbox";
  
      var defaults = {
        checkbox: "[data-element=checkbox__input]",
        all: "[data-element=checkbox__all]"
      };
  
      function Plugin(element, options) {
        this.element = element;
        this._defaults = defaults;
        this.options = $.extend({}, this._defaults, options);
        this.init();
      }
  
      $.extend(Plugin.prototype, {
        init: function () {
          var plugin = this;
  
          plugin.buildCache();
          plugin.bindEvents();
        },
        buildCache: function () {
          var plugin = this;
  
          plugin.$element = $(plugin.element);
          plugin.$checkbox = plugin.$element
            .find(plugin.options.checkbox)
            .not(":disabled");
          plugin.$all = plugin.$element
            .find(plugin.options.all)
            .not(":disabled");
        },
        bindEvents: function () {
          var plugin = this;
  
          plugin.$checkbox.on("change", function (e) {
            plugin.checkedAction();
          });
  
          plugin.$all.on("change", function (e) {
            plugin.allCheckedAction(this);
          });
        },
        checkedAction: function () {
          var plugin = this;
  
          var checkboxLength = plugin.$checkbox.length,
            checkedLength = plugin.$checkbox.filter(":checked").length;
  
          if (checkboxLength === checkedLength) {
            plugin.$all.prop("checked", true);
          } else {
            plugin.$all.prop("checked") &&
              plugin.$all.prop("checked", false);
          }
        },
        allCheckedAction: function (target) {
          var plugin = this;
  
          if ($(target).prop("checked")) {
            plugin.$checkbox.prop("checked", true);
          } else {
            plugin.$checkbox.prop("checked", false);
          }
        }
      });
  
      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(
              this,
              "plugin_" + pluginName,
              new Plugin(this, options || $(this).data("options"))
            );
          }
        });
      };
  
      $(function () {
        //$("[data-element=checkbox]").checkbox();
      });
    })(jQuery, window, document, undefined);
  
    /*
     ** Plugin - Slick
     */
    (function ($, win, doc, undefined) {
      var pluginName = "customSlick";
  
      var defaults = {
        slickContainer: '[data-element=slick__container]',
        prevArrow: '<button type="button" class="pualugin-slick__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="pualugin-slick__next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'pualugin-slick__dots',
        control: "false",
        controlContainer: '[data-element=slick__controls]',
        controlButton: '[data-element=slick__play-stop]',
        controlText: ["start", "stop"],
        controlActiveClassName: 'is-pause',
        status: '[data-element=slick__status]',
        statusCurrent: '[data-element=slick__status-current]',
        statusTotal: '[data-element=slick__status-total]',
        breakpointMobile: 400,
        breakpointTablet: 750,
      };
  
      function Plugin(element, options) {
        this.element = element;
        this._defaults = defaults;
        this._name = pluginName;
        this.options = $.extend({}, this._defaults, options);
        this.playFlag = this.options.autoplay === true || this.options.control === true ? true : false;
        this.init();
      }
  
      $.extend(Plugin.prototype, {
        init: function () {
          var plugin = this;
  
          plugin.buildCache();
          plugin.setResponsive();
          plugin.bindEvents();
          plugin.initSlick();
        },
        buildCache: function () {
          var plugin = this;
  
          plugin.$element = $(plugin.element);
          plugin.$slick = plugin.$element.find(plugin.options.slickContainer);
          plugin.$controlContainer = plugin.$element.find(plugin.options.controlContainer);
          plugin.$status = plugin.$element.find(plugin.options.status);
          plugin.$statusCurrent = plugin.$element.find(plugin.options.statusCurrent);
          plugin.$statusTotal = plugin.$element.find(plugin.options.statusTotal);
  
          if (plugin.playFlag) {
            plugin.$contrlButton = $('<button class="pualugin-slick__play-stop" data-element="slick__play-stop"></button>').appendTo(plugin.$controlContainer);
            plugin.$controlText = $('<span class="pualugin-slick__play-stop-text"></span>').appendTo(plugin.$contrlButton).text(plugin.options.controlText[1])
          }
        },
        setResponsive: function () {
          var plugin = this;
          var options = plugin.options.responsiveOptions;
  
          options && (
            plugin.options.responsive = [{
                breakpoint: plugin.options.breakpointTablet,
                settings: {
                  slidesToShow: options.tablet.show,
                  slidesToScroll: options.tablet.scroll
                } || null
              },
              {
                breakpoint: plugin.options.breakpointMobile,
                settings: {
                  slidesToShow: options.mobile.show,
                  slidesToScroll: options.mobile.scroll
                } || null
              }
            ]
          );
        },
        bindEvents: function () {
          var plugin = this;
  
          plugin.$element
            .on('init.' + plugin._name, function(e, slick) {
              //initEvent
              plugin.$statusCurrent.text(slick.options.initialSlide + 1);
              plugin.$statusTotal.text(slick.slideCount);
            })
            .on('beforeChange.' + plugin._name, function(e, slick) {
              //beforeEvent
            })
            .on('afterChange.' + plugin._name, function(e, slick, currentSlide) {
              //afterEvent
              plugin.$statusCurrent.text(currentSlide + 1);
            })
            .on('breakpoint.' + plugin._name, function(e, slick, breakpoint) {
              //breakpointEvent
            })
            .on('refresh.' + plugin._name, function(e, slick) {
              //initEvent
              plugin.$statusCurrent.text(slick.options.initialSlide + 1);
              plugin.$statusTotal.text(slick.slideCount);
            })
            .on('destroy.' + plugin._name, function(e, slick) {
              //destoryEvent
            })
          plugin.playFlag && (
            plugin.$contrlButton.on('click.' + plugin._name, function () {
              plugin.toggleControl();
            })
          )
        },
        initSlick: function () {
          var plugin = this;
  
          plugin.$slick.slick(plugin.options);
        },
        toggleControl: function () {
          var plugin = this;
          plugin.playFlag ? plugin.slickPause() : plugin.slickPlay();
        },
        slickPlay: function () {
          var plugin = this;
  
          plugin.playFlag = true;
          plugin.$slick.slick('slickPlay');
  
          plugin.$contrlButton.removeClass(plugin.options.controlActiveClassName);
          plugin.$controlText.text(plugin.options.controlText[1]);
        },
        slickPause: function () {
          var plugin = this;
  
          plugin.playFlag = false;
          plugin.$slick.slick('slickPause');
  
          plugin.$contrlButton.addClass(plugin.options.controlActiveClassName)
          plugin.$controlText.text(plugin.options.controlText[0]);
        }
      });
  
      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(
              this,
              "plugin_" + pluginName,
              new Plugin(this, options || $(this).data("options"))
            );
          }
        });
      };
  
      $(function () {
        //$('[data-element=slick]').customSlick();
      });
    })(jQuery, window, document, undefined);
  
    /*
      ** Plugin - Select
      */
      ;
      (function ($, win, doc, undefined) {
          var pluginName = 'select';
  
          var defaults = {
              mode: "static", // slide
              containerClassName: "pualugin-select"
          }
  
          function Plugin( element, options ) {
              this.element = element;
              this._defaults = defaults;
              this.options = $.extend({}, this._defaults, options);
              this._basket = [];
              this._name = pluginName;
              this.flag = false;
              this.init();
          }
  
          $.extend(Plugin.prototype, {
              init: function() {
                  var plugin = this;
  
                  plugin.buildCache();
                  plugin.setOptions();
                  plugin.bindEvents();
              },
              buildCache: function() {
                  var plugin = this;
  
                  // Elements cache
                  plugin.$win = $(win);
                  plugin.$doc = $(doc);
                  plugin.$body = $('body');
                  plugin.$element = $(plugin.element);
                  plugin.$class = $(plugin.element).data('class');
                  plugin.$elementWrap = $('<div class="pualugin-select"></div>');
                  plugin.$trigger = $('<button class="pualugin-select__trigger" />');
                  plugin.$listbox = $('<ul class="pualugin-select__container"/>');
                  plugin.$option = $('<div class="pualugin-select__option" />');
  
          plugin.$elementWrap
            .insertAfter(plugin.$element)
            .append(plugin.$element);
  
          // Initislized elements
                  plugin.$trigger
                      .text(
                          plugin.$element
                              .find('option:selected')
                              .text()
                      )
                      .attr({
                          "aria-haspopup": "listbox",
                          "tabindex": "0"
            })
            .prependTo(plugin.$elementWrap);
  
                  // Initialized aria-role
                  plugin.$listbox.attr({
                      role: "listbox",
                      tabindex: -1
                  }).addClass(function() {
            if (!!plugin.$class) {
              return plugin.$class;
            }
          });
  
                  // Append elements
                  // plugin.$element.prepend(plugin.$trigger);
                  plugin.$body.append(plugin.$listbox);
              },
              bindEvents: function() {
                  var plugin = this;
  
                  plugin.$trigger
                      .on('keydown.' + plugin._name, function(e) {
                          if (e.which === 40) {
                              e.preventDefault();
                              plugin.open();
                          }
                      })
                      .on('click.' + plugin._name, function(e) {
                          e.preventDefault();
                          plugin.toggle();
                      });
  
                  plugin.$listitem.not('.is-disabled')
                      .on('click.' + plugin._name, function(e) {
                          plugin.selected( this );
                      })
                      .on('keydown.' + plugin._name, function(e) {
                          var key = e.which || e.keyCode;
  
                          switch(key) {
                              case 13:
                                  e.preventDefault();
                                  plugin.selected( this );
                                  break;
  
                              case 9:
                                  e.preventDefault();
                                  plugin.close();
                                  break;
                              case 40:
                                  e.preventDefault();
                                  plugin.next(this);
                                  break;
                              case 38:
                                  e.preventDefault();
                                  plugin.prev(this);
                                  break;
                              case 27:
                                  e.preventDefault();
                                  plugin.close();
                                  break;
                          }
                      });
  
                  plugin.$element.on('change.' + plugin._name, function(e) {
                      plugin.$element.trigger('onChange', [$(this), $(this).val()]);
                  });
  
                  plugin.$element
                      .on('onChange.' + plugin._name, function( e, target, targetVal ) {
                          console.log( 'onChange' )
                      })
                      .on('refresh.' + plugin._name, function() {
                          plugin.setOptions();
                          plugin.bindEvents();
                      })
  
                  plugin.$win
                      .on('load.' + plugin._name, function() {
                          plugin.setPosition();
            })
            .on('resize.' + plugin._name, function() {
              plugin.setPosition();
            })
                      .on('click.' + plugin._name , function(e) {
                          if ( plugin.flag ) {
                              if (
                                  !plugin.$trigger.is(e.target)
                                  && plugin.$trigger.has(e.target).length === 0
                                  && !plugin.$listbox.is(e.target)
                                  && plugin.$listbox.has(e.target).length === 0
                              ) {
                                  plugin.close();
                              }
                          }
                      });
              },
              getOptions: function() {
                  var plugin = this;
  
                  plugin.$element.find('option').each(function() {
                      plugin._basket.push({
                          name: $(this).text(),
                          selected: $(this).attr('selected') !== undefined ? true : false,
                          disabled: $(this).attr('disabled') !== undefined ? true : false
                      });
                  })
  
                  return plugin._basket;
              },
              setOptions: function() {
                  var plugin = this;
  
                  var options = plugin.getOptions();
  
                  options.forEach(function(option, idx) {
                      $("<li/>")
                          .appendTo(plugin.$listbox)
                          .text( option.name )
                          .attr({
                              "class": option.selected ? 'pualugin-select__container-li is-selected' : 'pualugin-select__container-li',
                              "role": "option",
                              "data-index": idx
                          })
                          .addClass( option.disabled ? 'is-disabled' : '' );
                  })
  
                  plugin.$listitem = plugin.$listbox.find('li');
                  plugin.$listitem
                      .not('.is-disabled')
                      .attr('tabindex', 0);
              },
              setPosition: function() {
                  var plugin = this;
  
                  var triggerPositionTop = plugin.$trigger.offset().top;
                  var triggerPositionLeft = plugin.$trigger.offset().left;
                  var triggerButtonWidth = plugin.$trigger.outerWidth();
                  var triggerButtonHeight = plugin.$trigger.outerHeight();
  
                  plugin.$listbox.css({
                      position: "absolute",
                      top: triggerPositionTop + triggerButtonHeight,
                      left: triggerPositionLeft,
                      width: triggerButtonWidth,
                      zIndex: 111
                  });
              },
              toggle: function() {
                  var plugin = this;
                  console.log('toggle')
                  plugin.flag ? plugin.close() : plugin.open();
              },
              open: function() {
                  var plugin = this;
  
                  if ( plugin.flag ) return false;
  
                  plugin.flag = true;
  
                  console.log('open')
  
                  plugin.$listbox.show();
                  plugin.$trigger.addClass('is-active');
                  plugin.$listitem.filter('.is-selected').focus();
              },
              close: function() {
                  var plugin = this;
  
                  if ( !plugin.flag ) return false;
  
                  plugin.flag = false;
  
                  plugin.$trigger
                      .removeClass('is-active')
                      .focus();
  
                  plugin.$listbox.hide();
              },
              selected: function( option ) {
                  var plugin = this;
                  var $option = $(option);
  
                  $option.addClass('is-selected');
  
                  plugin.$listitem
                      .not($option)
                      .removeClass('is-selected');
  
                  plugin.$trigger.text($option.text());
  
                  plugin.$element
                      .find('option')
                      .eq($option.data('index'))
                      .prop('selected', true)
                      .change();
  
                  plugin.close();
              },
              next: function( option ) {
                  $(option).nextAll('[tabindex="0"]').first().focus();
              },
              prev: function( option ) {
                  $(option).prevAll('[tabindex="0"]').first().focus();
              }
          });
  
          $.fn[pluginName] = function ( options ) {
              return this.each(function () {
                  if (!$.data(this, "plugin_" + pluginName)) {
                      $.data(this, "plugin_" + pluginName, new Plugin(this, options || $(this).data('options')));
                  }
              });
          }
  
          $(function() {
              //$('.button-wrap__left .selectbox').select();
          })
      })(jQuery, window, document, undefined)
  
    /*
     ** Pualugin Default
     */
    ;(function ($, win, doc, undefined) {
      /*
      ** highlight.js Initialized
      */
      //hljs.initHighlightingOnLoad();
  
      $(function() {
        /*
        ** 네비게이션 컨트롤
        */
        $('[data-element=nav__anchor]').on('click', function (e) {
          e.preventDefault();
  
          var $this = $(this);
          var location = $this.attr('href');
  
          $('html, body').stop().animate({
            scrollTop: $(location).offset().top
          }, 300);
          $this
            .closest('.pualugin__header')
            .removeClass('is-active');
        });
        $('.pualugin__menu-button').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          $(this).closest('.pualugin__header').toggleClass('is-active');
        });
  
        /* ==================================== */
      })
    })(jQuery, window, document, undefined);
  
  })(jQuery, window, document, undefined);
  

/*==========================================================================
*	전역 변수
*==========================================================================*/
var nMax_Repeat = 3;																// 반복문자의 최대 허용값
var arrId_FilterList = new Array("admin", "master", "manager", "test", "tester", "administrator", "sa", "super", "superuser", "su", "query", "delete", "select", "view", "create", "insert", "union");	// 아이디 필터링 리스트

/**
*	TO DO 	: 입력가능한 문자인지 체크
*	Param	: strValue
*	Param	: strCheckType
*
*	Return	: Boolean
*
*	사용예제
*		if ( isCanInputString( form.title.value ) == false ) alert("허용되지 않은 문자열 포함");
*
*	참고: 이 함수는 극히 제한적으로 사용하고자 할때, 특정 정규식을 추가하여 사용하면 좋을듯 함.
**/
function isCanInputString( strValue, strCheckType ) {
	if ( strValue.length == 0 )	return false;

	switch ( strCheckType.toUpperCase() )
	{
		case "H"		: if ( strValue.search(/[^가-힣]/) != -1 )								return false;   break;  // 한글(자소허용안함)
		case "E"		: if ( strValue.search(/[^A-Za-z]/) != -1 )								return false;   break;  // 영문
		case "N"		: if ( strValue.search(/[^0-9]/) != -1 )								return false;   break;  // 숫자
		case "HE"		: if ( strValue.search(/[^가-힣A-Za-z]/) != -1 )    					return false;   break;  // 한글(자소허용안함)+영문
		case "HN"		: if ( strValue.search(/[^가-힣0-9]/) != -1 )							return false;   break;  // 한글(자소허용안함)+숫자
		case "EN"		: if ( strValue.search(/[^A-Za-z0-9]/) != -1 )           				return false;   break;  // 영문+숫자
		case "HEN"		: if ( strValue.search(/[^가-힣A-Za-z0-9]/) != -1 )						return false;   break;  // 한글(자소허용안함)+영문+숫자
		case "HENB"		: if ( strValue.search(/[^가-힣A-Za-z0-9 ]/) != -1 )  					return false;   break;  // 한글(자소허용안함)+영문+숫자+공백
		case "N-"		: if ( strValue.search(/[^0-9-]/) != -1 )								return false;   break;  // 숫자+하이픈
		case "N,"		: if ( strValue.search(/[^0-9,]/) != -1 )								return false;   break;  // 숫자+콤마
		case "HB"		: if ( strValue.search(/[^가-힣 ]/) != -1 )								return false;   break;  // 한글(자소허용안함)+공백
		case "EB"		: if ( strValue.search(/[^A-Za-z ]/) != -1 )							return false;   break;  // 영문+공백
		case "PWD"		: if ( strValue.search(/[^A-Za-z0-9~!@#$%^&*()-\?]/) != -1 )			return false;   break;  // 영문+숫자+특문( ~!@#$%^&*()\? )
		case "SP"		: if ( strValue.search(/[^~!@#$%^&*()-\?]/) != -1 )						return false;   break;  // 특문( ~!@#$%^&*()\? )
		default			: 																		return false;	break;
	}
	return true;
}

function isEmptyString( strValue ) {
	if ( strValue == null || getStringByTrim(strValue,"A") == "" )  return true;
	return false;
}

/**
*	TO DO 	: 동일정보 체크
*	Param	: strValue1
*	Param	: strValue2
*
*	Return	: Boolean
*
*	사용예제
*		if ( isEqual( form.pwd[0].value, form.pwd[1].value ) == false ) alert("일치하지 않음");
**/
function isEqual( strValue1, strValue2 ) {
	if ( strValue1 != strValue2 )   return false;
	return true;
}

/**
*	TO DO 	: 혼합문자 체크
*	Param	: strValue
*	Param	: bSpecialChar
*
*	Return	: Boolean
*
*	사용예제
*		if ( isMixString( form.id.value ) == false ) alert("아이디는 영문과 숫자를 혼합하여 사용해야 함");
*		if ( isMixString( form.id.value ) == false ) alert("아이디는 영문과 숫자를 혼합하여 사용해야 함");
**/
function isMixString( strValue, bSpecialChar ) {
	var onlyEng	= isCanInputString(strValue, "E");
	var onlyNum 	= isCanInputString(strValue, "N");
	var onlySp		= isCanInputString(strValue, "SP");
	
	if (bSpecialChar)
	{
		if ( !onlyEng && !onlyNum && !onlySp)
		{
			if ( isCanInputString(strValue, "PWD") )	return true;
		}
	}
	else
	{
		if ( !onlyEng && !onlyNum)
		{
			if ( isCanInputString(strValue, "EN") )	return true;
		}
	}

	return false;
}

/**
*	TO DO 	: 연속문자 체크
*	Param	: strYear
*	Param	: nCheckCount	(반복체크할 수)
*
*	Return	: Boolean
*
*	사용예제
*		if ( isRepeatString( form.id.value, 3 ) == true ) alert("연속적임");
**/
function isRepeatString(strValue, nCheckCount) {
	var bResult		= false;
	var chkRepeat	= ""; 	// 반복되는 형태 (예: aaaa)
	var chkAsc 		= ""; 	// 연속된 오름차순 형태 (예: abcd, 1234)
	var chkDesc		= ""; 	// 연속된 내림차순 형태 (예: dcba, 4321)

	for(var k=1; k<nCheckCount; k++)
	{
		chkRepeat	+= "strValue.charAt(i) == strValue.charAt(i + " + k + ")";
		chkAsc		+= "(strValue.charCodeAt(i) + " + k + ") == strValue.charCodeAt(i + " + k + ")";
		chkDesc		+= "(strValue.charCodeAt(i) - " + k + ") == strValue.charCodeAt(i + " + k + ")";

		if (k < nCheckCount - 1)
		{
			chkRepeat	+= " && ";
			chkAsc		+= " && ";
			chkDesc		+= " && ";
		}
	}

	for( var i=0; i<strValue.length-3; i++)
	{
		if ( eval(chkRepeat) || eval(chkAsc) || eval(chkDesc) )	bResult = true;
	}

	return bResult;
}

/**
*	TO DO 	: 입력허용길이 체크
*	Param	: strValue
*
*	Return	: String
*
*	사용예제
*		if ( isAllowedLength( form.title.value, 2, 10 ) == false ) alert("입력길이 오류");
**/
function isAllowedLength( strValue, intMin, intMax ) {
	var nTotalByte = getByteCountByString( strValue );
	if ( nTotalByte < intMin || nTotalByte > intMax )	return false;
	return true;
}

function isEmptyStringWithFocus(obj, strMsg) {
	if ( isEmptyString(obj.value) )
	{
		alert(strMsg);
		obj.focus();
		return false;
	}
	return true;
}

/**
*	TO DO	: 문자열 자르기
*	Param	: strValue
*	Param	: strCutType		(자르는방법)
*	Param	: intStart			(시작위치)
*	Param	: intCutSize		(자를크기)
*
*	Return	: String
*
*	사용예제
*		var cResult = getStringCut( form.title.value, 'MB', 4, 6 );
*
*	주의사항
*	1. L / R	: 왼쪽,오른쪽 자르기의 경우 {시작위치} 값은 무시함
*	2. MA		: {중간}시작점에서 끝까지 자르기의 경우  {자를크기} 값은 무시함
*	3. MA/MB	: {중간} 자르기의 경우 시작값은 1부터 적용함 (즉, sbustring(0,2) 방식이 아닌 VB함수의 Mid(1,2)와 같은 형식을 취함)
**/
function getStringCut( strValue, strCutType, intStart, intCutSize ) {
	if ( strValue.length == 0 ) 		return "";
	if ( intStart < 0 )	intStart			= 0;
	if ( intCutSize < 0 )	intCutSize	= 0;
	
	var cResult = "";
	switch ( strCutType.toUpperCase() )
	{
		case "L"	:	// 왼쪽에서 자르기
					cResult   = strValue.substring(0, intCutSize);				break;
		case "R"	:	// 오른쪽에서 자르기
					intStart  = strValue.length - intCutSize;
					cResult   = strValue.substring(intStart);					break;
		case "MB"	:	// {중간}시작점에서 지정위치까지 자르기
					intCutSize += intStart-1;
					cResult    = strValue.substring(intStart-1, intCutSize);	break;
		case "MA"	:	// {중간}시작점에서 끝까지 자르기
					cResult   = strValue.substring(intStart-1);					break;
		default		:
					cResult   = strValue;    									break;
	}

	return cResult;
}

function getByteCountByString( strValue ) {
	var nTotalByte = 0;
	var cOneChar = "";

	if ( strValue.length == 0 ) return nTotalByte;
	
	for( i=0; i < strValue.length; i++ )
	{
		cOneChar = strValue.charAt(i);

		if ( escape(cOneChar).length > 4 )
		{
			nTotalByte += 2;
		}
		else
		{
			nTotalByte ++;
		}
	}
	return nTotalByte;
}

/**
*	TO DO 	: 문자열 치환
*	Param	: strValue
*	Param	: strFind	(찾을단어)
*	Param	: strChange	(바꿀단어)
*
*	Return	: String
*
*	사용예제
*		var cResult = getStringWithReplace( form.title.value, 'a', 'A' );
**/
function getStringWithReplace( strValue, strFind, strChange ) {
	var nPos = strValue.indexOf( strFind );

	while ( nPos != -1 )
	{
		strValue 	= strValue.replace( strFind, strChange );
		nPos 	= strValue.indexOf( strFind );
	}
	
	return strValue;
}

/**
*	TO DO 	: 공백제거
*	Param	: strValue
*	Param	: strTrimType
*
*	Return	: String
*
*	사용예제
*		var strResult = getStringByTrim( form.title.value, 'B');
**/
function getStringByTrim( strValue, strTrimType ) {
	var strReturn = "";

	switch ( strTrimType.toUpperCase() )
	{
		case "L"	:   strReturn = strValue.replace(/^\s+/g,"");									break;  // 왼쪽공백제거
		case "R"	:   strReturn = strValue.replace(/\s+$/g,"");									break;  // 오른쪽공백제거
		case "B"	:   strReturn = strValue.replace(/^\s+/g,"").replace(/\s+$/g,"");				break;  // 양쪽공백제거
		case "A"	:   strReturn = strValue.replace(/\s+/g,"");									break;  // 전체공백제거
		default		:   strReturn = strValue;														break;
	}

	return strReturn;
}

/**
*	TO DO 	: 금지단어 필터링 치환
*	Param	: strValue
*
*	Return	: String
*
*	사용예제
*		form.content.value = getWordWithFilter( form.content.value );
**/
function getWordWithFilter( strValue ) {
	var strBadWord;
	var nBadCount = 0;    
	
	/* 금지단어 목록 */
	var arrBadList = new Array("바보/**님","멍청이/청님", "18/", "졸라/졸라서");
	
	for( var i=0; i < arrBadList.length; i++ )
	{
		strBadWord = arrBadList[i];
	
		var arrWord = strBadWord.split("/");						// 금지단어,대체단어를 분리
		if ( jsEmpty(arrWord[1]) == true )  arrWord[1] = "***";		// 대체단어가 빈값이면 임의의 값을 기록
		
		while(true)
		{
			if (strValue.indexOf(arrWord[0]) != -1 )
			{
				strValue = strValue.replace(arrWord[0], arrWord[1]);
				nBadCount++;
			}
			else
			{
				break;
			}
		}
	}
	//if ( nBadCount > 0 ) alert(nBadCount + "개의 불량단어 검출");
	return strValue;
}


/**
*	TO DO 	: 금지단어 필터링 체크
*	Param	: strFilter_Word
*	Param	: arrFilter_List
*
*	Return	: Boolean
*
*	사용예제
*		if ( isWordWithFilter( form.content.value ) == false)	alert("사용할 수 없는 문자열입니다");
**/
function isWordWithFilter( strFilter_Word, arrFilter_List ) {
	for( var i=0; i<arrFilter_List.length; i++ )
	{
		if ( arrFilter_List[i] == strFilter_Word )	return true;
	}
	
	return false;
}

/**
*	TO DO 	: 셀렉트박스의  선택된 값 구하기
*	Param	: objEle	(셀렉트박스 이름)
*
*	Return	: String
*
*	사용예제
*		var cResult = getValueBySelected( form.selectData );
**/
function getValueBySelected( objEle ) {
	var strReturn = "";

	for( var i=0; i<objEle.length; i++ )
	{
		if ( objEle.options[i].selected )
		{
			if ( strReturn.length > 0 )   strReturn += ",";
			strReturn += objEle.options[i].value;
		}
	}
	return strReturn;
}

/**
*	TO DO 	: 멀티 셀렉트박스의  선택된 항목 수 구하기
*	Param	: strObjName	(셀렉트박스 이름)
*
*	Return	: Number
*
*	사용예제
*		var nResult = getCountByMultiSelected( "imgList" );
**/
function getCountByMultiSelected( strObjName) {
	var nCount = 0;

	try
	{
		var objEle = document.getElementById(strObjName);

		for( var i=0; i < objEle.options.length; i++ )
		{
			if ( objEle.options[i].selected )	nCount += 1;
		}
	} catch(e) {}

	return nCount;
}

/**
*	TO DO 	: 멀티 셀렉트박스의  선택된 항목들의 Value 목록 구하기
*	Param	: strObjName	(셀렉트박스 이름)
*
*	Return	: String
*
*	사용예제
*		var cSelectedItemList = getValuesByMultiSelected( "imgList" );
**/
function getValuesByMultiSelected( strObjName) {
	var strReturn = "";

	try
	{
		var objEle = document.getElementById(strObjName);

		for( var i=0; i < objEle.options.length; i++ )
		{
			if ( objEle.options[i].selected )
			{
				if ( strReturn.length > 0 )   strReturn += ",";
				strReturn += objEle.options[i].value;
			}
		}
	} catch(e) {}

	return strReturn;
}

/**
*	TO DO 	: 멀티 셀렉트박스의  선택된 항목들을 제거
*	Param	: strObjName	(셀렉트박스 이름)
*
*	Return	: 없음
*
*	사용예제
*		deleteValuesByMultiSelected( "imgList" );
**/
function deleteValuesByMultiSelected( strObjName) {
	try
	{
		var objEle = document.getElementById(strObjName);

		// 멀티 삭제시 주의점: 밑에서 위로 루프 돌리며 삭제해야 한다.
		// for( var i=0; i < objEle.options.length; i++ ) 와 같이, 위에서 부터 삭제를 하면,
		// 데이터가 꼬이면서 원하지 않는 결과를 얻게 된다.
		for( var i=(objEle.options.length-1); i >= 0 ; i-- )
		{
			if (objEle.options[i].selected )	objEle.options[i] = null;
		}
	} catch(e) {}
}

/**
*	TO DO 	: 체크여부 확인
*	Param	: objEle	(라디오박스/체크박스의 이름)
*
*	Return	: Boolean
*
*	사용예제
*		if ( isEmptyStringWithFocused( form.chkData ) == false ) alert("체크된 항목 없음");
**/
function isEmptyStringWithFocused( objEle ) {
	if ( String(objEle) != "undefined" )
	{
		if ( String(objEle.length) == "undefined" )
		{
			if ( objEle.checked )   return true;
		}
		else
		{
			for( var i=0; i<objEle.length; i++ )
			{
				if ( objEle[i].checked )    return true;
			}
		}
	}
	
	return false;
}

/**
*	TO DO 	: 체크된 항목수 구하기
*	Param	: objEle	(라디오박스/체크박스의 이름)
*
*	Return	: Number
*
*	사용예제
*		var nResult = getCountByChecked( form.chkData );
**/
function getCountByChecked( objEle ) {
	var nCount = 0;

	if ( String(objEle) != "undefined" )
	{
		if ( String(objEle.length) == "undefined" )
		{
			if ( objEle.checked )   nCount += 1;
		}
		else
		{
			for( var i=0; i<objEle.length; i++ )
			{
				if ( objEle[i].checked )    nCount += 1;
			}
		}
	}
	
	return nCount;
}

/**
*	TO DO 	: 체크된 값 구하기
*	Param	: objEle	(라디오박스/체크박스의 이름)
*
*	Return	: String
*
*	사용예제
*		var cResult = getValueByChecked( form.chkData );
**/
function getValueByChecked( objEle ) {
	var strReturn = "";


	if ( String(objEle) != "undefined" )
	{
		if ( String(objEle.length) == "undefined" )
		{
			strReturn = objEle.value;
		}
		else
		{
			for( var i=0; i<objEle.length; i++ )
			{
					if ( objEle[i].checked )
					{
						if ( strReturn.length > 0 )   strReturn += ",";
						strReturn += objEle[i].value;
					}
			}
		}
	}

	return strReturn;
}

/**
*	TO DO 	: 체크박스 전체선택/해제
*	Param	: strEleId
*	Param	: bChecked
*
*	Return	: 없음
*
*	사용예제
*		<input type="checkbox" onClick="setCheckedAll('checkData', this.checked);">
**/
function setCheckedAll( strEleId, bChecked ) {
	var objEle = eval("document.getElementsByName('"+ strEleId +"')");

	bChecked = bChecked ? true : false;
	for( var i=0; i < objEle.length; i++ )
	{
		objEle[i].checked = bChecked;
	}
}

/**
*	TO DO 	: 체크박스 전체반전 선택 (기존 선택값과 반대되는 모든값 선택)
*	Param	: strEleId
*
*	Return	: 없음
*
*	사용예제
*		<input type="checkbox" onClick="setCheckedReverse('checkData');">
**/
function setCheckedReverse( strEleId ) {
	var objEle = eval("document.getElementsByName('"+ strEleId +"')");
	
	for( var i=0; i < objEle.length; i++ )
	{
		objEle[i].checked = !objEle[i].checked;
	}
}

/**
*	TO DO	: 자동콤마 찍기
*	Param	: objEle (TextBox Name)
*
*	Return	: 없음 (TextBox 실시간 처리)
*
*	사용예제
*		<input type="text" name="money" onKeyup="setAutoComma(this)" style="text-align:right; ime-mode:disabled;">
**/
function setAutoComma( objEle ) {
	var str 		= "" + objEle.value.replace(/,/gi, '');	// 콤마 제거
	var pattern		= new RegExp(/(-?\d+)(\d{3})/);
	var bExists		= str.indexOf(".", 0);
	var strArr		= str.split('.');

	while(pattern.test(strArr[0]))
	{
		strArr[0] = strArr[0].replace(pattern, "$1, $2");
	}
	
	if (bExists > -1)
	{
		objEle.value = strArr[0] + "." + strArr[1]; 
	}
	else
	{
		objEle.value = strArr[0];
	}
}

/**
 * 숫자만 입력
 *	@Param	: obj (TextBox Name)
 * @Return	: 없음 (TextBox 실시간 처리)
 * @사용예제
 *		<input type="text" name="money" onkeypress='setOnlyNumber(this)' onblur='setOnlyNumber(this)'>
 */
function setOnlyNumber(obj){
	val=obj.value;
	re=/[^0-9]/gi;
	obj.value=val.replace(re,""); 
}

 /**
  * 숫자만 입력(금액) - ,가 자동으로 표시됨
  *	@Param	: obj (TextBox Name)
  * @Return	: 없음 (TextBox 실시간 처리)
  * @사용예제
  *		<input type="text" name="money" onkeypress='setOnlyNumberWithComma(this)' onblur='setOnlyNumberWithComma(this)'>
  */
function setOnlyNumberWithComma(obj){
	val=obj.value;
	obj.value=Number(String(val).replace(/\..*|[^\d]/g,'')).toLocaleString().slice(0,-3);
}

/**
 *	3자리수마다 ,를 찍어주는 함수
 *	Param	: 숫자값
 *
 *	사용예제
 *	getNumberWith3PointComma(숫자값);
 */
function getNumberWith3PointComma(mValue) {
	var temp_str = String(mValue);
	for(var i = 0 , retValue = String() , stop = temp_str.length; i < stop ; i++)
	{
		retValue = ((i%3) == 0) && i != 0 ? temp_str.charAt((stop - i) -1) + "," + retValue : temp_str.charAt((stop - i) -1) + retValue;
	}
	return retValue;
}

/**
*	TO DO 	: 윤년 체크
*	Param	: intYear
*
*	Return	: Boolean
*
*	사용예제
*		if ( isLeapYear( 2008 ) == false ) alert("윤년");
**/
function isLeapYear( intYear ) {
	if ( intYear % 1000 != 0 && intYear % 4 == 0 )  return true;
	return false;
}

/**
*	TO DO 	: 지정한 달의 일 수 구하기
*	Param	: intYear
*	Param	: intMonth
*
*	Return	: Number
*
*	사용예제
*		var nResult = getMonthOfDays( 2008, 2);
**/
function getMonthOfDays( intYear, intMonth ) {
	var arrDays = new Array(12);
	
	arrDays[0]		= 31;
	arrDays[1]		= ( isLeapYear(intYear) ) ? 29 : 28;
	arrDays[2]		= 31;
	arrDays[3]		= 30;
	arrDays[4]		= 31;
	arrDays[5]		= 30;
	arrDays[6]		= 31;
	arrDays[7]		= 31;
	arrDays[8]		= 30;
	arrDays[9]		= 31;
	arrDays[10]		= 30;
	arrDays[11]		= 31;
	
	return arrDays[intMonth-1];
}

/**
*	TO DO 	: 현재시간 가져오기
*	Return	: YYYY-MM-DD hh:mm:ss msec
*
*	사용예제
*		var nResult = getCurrentDate();
**/
function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear().toString();

    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();

    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    var minites = date.getMinutes();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();

    var second = date.getSeconds();
    second = second < 10 ? '0' + second.toString() : second.toString();

    var millisecond = date.getMilliseconds();
    millisecond = millisecond < 10 ? '0' + millisecond.toString() : millisecond.toString();

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minites + ':' + second + ' ' + millisecond;
}

/**
*	TO DO 	: 두 날짜의 일 수 차이 구하기
*	Param	: cStartDate
*	Param	: cEndDate
*
*	Return	: Integer
*
*	사용예제
*		var nDay = getDateDiff( form.sDate.value, form.eDate.value );	// 두 날짜의 차이
**/
function getDateDiff( cStartDate, cEndDate ) {
	var sDate = cStartDate.split("-");
	var eDate = cEndDate.split("-");

	var dtSDate = new Date(sDate[0], Number(sDate[1])-1, sDate[2]);
	var dtEDate = new Date(eDate[0], Number(eDate[1])-1, eDate[2]);
	
	var nDiffDay = ( dtEDate.getTime() - dtSDate.getTime() ) / (1000*60*60*24);
	
	return nDiffDay;
}

/**
*	TO DO 	: 이전달, 다음달을 구함
*	Param	: move_type	// prev:이전달, next:다음달
*	Param	: yyyy		// 기준년도
*	Param	: mm		// 기준 월(月)
*
*	Return	: String	// 2008-12 의 형태
*
*	사용예제
*		var cResult		= getMonthOfPrevNext(cMoveType, yyyy, mm);			// 이전달, 다음달을 구함
*		var arrDate 	= cResult.split("-");
*		alert(arrDate[0] + "\n" + arrDate[1]);
**/
function getMonthOfPrevNext( move_type, yyyy, mm ) {
	var yyyy	= parseInt(yyyy,10);	// 10진수 변환
	var mm	= parseInt(mm,10);

	var currentMM = mm - 1;		// 현재달을 구함 (실제 달력은 0~11 을 사용하므로 -1 해준다)

	var d = new Date(yyyy, currentMM, '01');
	var dd = (move_type == "prev") ? new Date(yyyy, d.getMonth()-1) : new Date(yyyy, d.getMonth()+1);
	
	yyyy = dd.getYear();
	mm = dd.getMonth()+1;					// 결과처리된 달을 가져온다 (실제 달력은 0~11 을 사용하므로 +1 해준다)
	
	mm = (mm < 10) ? "0"+mm : mm;	// 월을 표현할때 2자리 형태로 
	var cResult = yyyy + "-" + mm;
	
	return cResult;
}

/**
*	TO DO 	: 유효한 날짜인지를 체크
*	Param	: strYear
*	Param	: strMonth
*	Param	: strDay
*
*	Return	: Boolean
*
*	사용예제
*		if ( isValidDate( '2008', '13', '32' ) == false ) alert("올바른 날짜가 아님");
**/
function isValidDate( strYear, strMonth, strDay ) {
	var intYear		= parseInt(strYear,10);		// 10진수 변환
	var intMonth	= parseInt(strMonth,10);
	var intDay  	= parseInt(strDay,10);
	
	var nMonthOfDays = getMonthOfDays(intYear, intMonth);
	
	if ( intDay < 1 || intDay > nMonthOfDays )	return false;
	if ( intMonth < 1 || intMonth > 12 )		return false;
	
	return true;
}

/**
*	TO DO 	: 날짜에 값을 더하거나, 뺀다.
*	Param	: cYY
*	Param	: cMM
*	Param	: cDD
*	Param	: cAddDay
*
*	Return	: String
*
*	사용예제
*		
**/
function getCalcDate(cYY, cMM, cDD, cAddDay) 
{
	var cNowDate = new Date(Number(cYY), Number(cMM)-1, Number(cDD));
	var cAddDate = cNowDate.getTime() + (cAddDay * 24 * 60 * 60 * 1000);

	cNowDate.setTime(cAddDate);

	var cYear = cNowDate.getYear();
	var cMonth = cNowDate.getMonth() + 1;
	var cDate = cNowDate.getDate();

	if (cMonth < 10) cMonth = "0" + cMonth;
	if (cDate < 10) cDate = "0" + cDate;

	return cYear + "-" + cMonth + "-" + cDate;
}

/**
 *	팝업창 띄우기
 *
 *	Param	: cUrl
 *	Param	: cOpenName
 *	Param	: nWidth
 *	Param	: nHeight
 *	Return	: 없음
 *
 *	사용예제
 *		setOpenPopup( '/Popup/popPassword.jsp', 'popPassword', 300, 200 );
 */
function setOpenPopup( cUrl, cOpenName, nWidth, nHeight ) {
	// 팝업 위치 자동 조정
	LeftPosition = (screen.width) ? (screen.width-nWidth)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-nHeight)/2 : 0;

	var windowprops = "width="+ nWidth+", height="+ nHeight+", toolbar=0, location=0, status=0, menubar=0, scrollbars=0, resizable=0, top="+ TopPosition +", left="+ LeftPosition +"  ";
	window.open(cUrl, cOpenName, windowprops);
}

/**
*	TO DO 	: 팝업창 옵션에 따라 띄우기
*	Param	: cUrl
*	Param	: cOpenName
*	Param	: nWidth
*	Param	: nHeight
*	Param	: cOption
*	Return	: 없음
*
*	사용예제
*		setOpenPopupOption( '/Popup/popPassword.jsp', 'popPassword', 300, 200, "scrollbars=no");
**/
function setOpenPopupOption( cUrl, cOpenName, nWidth, nHeight, cOption ) {
	var cDefaultOption = "location=no, scrollbars=no, menubars=no, toolbars=no, resizable=no";
	
	cOption = (cOption != "") ? cOption : cDefaultOption; 
	
	var windowprops = "width="+ nWidth+", height="+ nHeight+", "+ cOption +"";
	window.open(cUrl, cOpenName, windowprops);
}

/**
 *	TO DO 	: 팝업창 옵션에 따라 띄우기 전체화면
 *	Param	: cUrl
 *	Param	: cOpenName
 *	Param	: cOption
 *	Return	: 없음
 *
 *	사용예제
 *		setOpenPopupScreen( '/Popup/popPassword.jsp', 'popPassword', "scrollbars=no");
 **/
function setOpenPopupScreen( cUrl, cOpenName, cOption ) {
	var cDefaultOption = "location=no, scrollbars=no, menubars=no, toolbars=no, resizable=no";
	
	cOption = (cOption != "") ? cOption : cDefaultOption; 
	alert((screen.availWidth-10)+" / "+(screen.availHeight-30));
	var windowprops = "width=(screen.availWidth-10), height=(screen.availHeight-30), "+ cOption +"";
	window.open(cUrl, cOpenName, windowprops);
}

/**
 *	팝업창을 가운데로 조정하고, 포커스를 줌.
 *	Return	: 없음
 *
 *	사용예제
 *	window.onload = function(){setPopupCenterWithFocus();} 
 */
function setPopupCenterWithFocus() {
	var thisX = parseInt(document.body.scrollWidth);
	var thisY = parseInt(document.body.scrollHeight);
	var maxThisX = screen.width - 50;
	var maxThisY = screen.height - 50;
	var marginY = 0;
	
	// 브라우저별 높이 조절.
	if (navigator.userAgent.indexOf("MSIE 6") > 0)			marginY = 45;	// IE 6.x
	else if(navigator.userAgent.indexOf("MSIE 7") > 0)		marginY = 75;	// IE 7.x
	else if(navigator.userAgent.indexOf("MSIE 8") > 0)		marginY = 75;	// IE 8.x
	else if(navigator.userAgent.indexOf("MSIE 9") > 0)		marginY = 75;	// IE 9.x
	else if(navigator.userAgent.indexOf("MSIE 10") > 0)		marginY = 75;	// IE 10.x
	else if(navigator.userAgent.indexOf("Firefox") > 0)		marginY = 50;	// FF
	else if(navigator.userAgent.indexOf("Opera") > 0)		marginY = 30;	// Opera
	else if(navigator.userAgent.indexOf("Netscape") > 0)	marginY = -2;	// Netscape

	if (thisX > maxThisX) {
		//window.document.body.scroll = "yes";
		thisX = maxThisX;
	}
	if (thisY > maxThisY - marginY) {
		//window.document.body.scroll = "yes";
		thisX += 19;
		thisY = maxThisY - marginY;
	}

	// 센터 정렬
	var windowX = (screen.width - (thisX+10))/2;
	var windowY = (screen.height - (thisY+marginY))/2 - 20;
	window.moveTo(windowX,windowY);
}

/**
*	TO DO 	: 팝업창 자동 사이즈 조절
*	Return	: 없음
*
*	사용예제
*	window.onload = function() {setAutoResizePopup();} 
**/
function setAutoResizePopup() 
{
	var thisX = Number(document.body.scrollWidth);
	var thisY = Number(document.body.scrollHeight);
	var maxThisX = screen.width - 50;
	var maxThisY = screen.height - 50;
	var marginY = 0;
	
	// 브라우저별 높이 조절.
	if (navigator.userAgent.indexOf("MSIE 6") > 0)			marginY = 45;	// IE 6.x
	else if(navigator.userAgent.indexOf("MSIE 7") > 0)		marginY = 75;	// IE 7.x
	else if(navigator.userAgent.indexOf("MSIE 8") > 0)		marginY = 75;	// IE 8.x
	else if(navigator.userAgent.indexOf("MSIE 9") > 0)		marginY = 75;	// IE 9.x
	else if(navigator.userAgent.indexOf("MSIE 10") > 0)		marginY = 75;	// IE 10.x
	else if(navigator.userAgent.indexOf("Firefox") > 0)		marginY = 50;	// FF
	else if(navigator.userAgent.indexOf("Opera") > 0)		marginY = 30;	// Opera
	else if(navigator.userAgent.indexOf("Netscape") > 0)	marginY = -2;	// Netscape

	if (thisX > maxThisX) {
		window.document.body.scroll = "yes";
		thisX = maxThisX;
	}
	if (thisY > maxThisY - marginY) {
		window.document.body.scroll = "yes";
		thisX += 19;
		thisY = maxThisY - marginY;
	}
	window.resizeTo(thisX+10, thisY+marginY);

	// 센터 정렬
	var windowX = (screen.width - (thisX+10))/2;
	var windowY = (screen.height - (thisY+marginY))/2 - 20;
	window.moveTo(windowX,windowY);
}

/**
*	TO DO 	: 아이프레임 자동 사이즈 조절
*	Return	: 없음
*
*	사용예제
*	window.onload = function() {setAutoResizeIframe('');} 
**/
function setAutoResizeIframe(cTarget) {
	var iFrames
	if (cTarget ==="parent" ) {
		iFrames = parent.document.getElementsByTagName('iframe');
	} else {
		iFrames = document.getElementsByTagName('iframe');
	}
	for (var i = 0, j = iFrames.length; i < j; i++) {
		iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight+100+ 'px';
	}
}

/**
 * 콤마를 제거한다.
 * 사용예제
 * removeComma(form.replace);
 */
function removeComma(obj) {
	var str = obj.value;
	while(str.indexOf(",") > -1) {
		str = str.replace(",", "");
	}
	obj.value = str;
}

/**
*	TO DO 	: 멀티셀렉트박스의 이동 (위로이동)
*	Param	: strObjName
*
*	사용예제
*	<input type="button" value="위로이동"	onClick="setSelectedMoveTop('strObjName')">
**/
function setSelectedMoveUp( strObjName ) {
	var objSelect = document.getElementById(strObjName);
	var i = objSelect.selectedIndex;
	if ( i > 0 )
	{
		setSelectedMove( objSelect, i, i-1 );

		objSelect.options[i-1].selected = true;
		objSelect.options[i].selected   = false;
	}
}

/**
*	TO DO 	: 멀티셀렉트박스의 이동 (아래로이동)
*	Param	: strObjName
*
*	사용예제
*	<input type="button" value="아래로이동"	onClick="setSelectedMoveDown('strObjName')">
**/
function setSelectedMoveDown( strObjName ) {
	var objSelect = document.getElementById(strObjName);
	var i = objSelect.selectedIndex;

	if ( i<objSelect.length-1 && i>-1 )
	{
		setSelectedMove(objSelect,i+1,i);

		objSelect.options[i+1].selected = true;
		objSelect.options[i].selected   = false;
	}
}

/**
*	TO DO 	: 멀티셀렉트박스의 이동 (맨위로이동)
*	Param	: strObjName
*
*	사용예제
*	<input type="button" value="맨위로이동"	onClick="setSelectedMoveTop('strObjName')">
**/
function setSelectedMoveTop( strObjName ) {
	var objSelect = document.getElementById(strObjName);
	var i  =objSelect.selectedIndex;
	for(; i>0; i--)
	{
		setSelectedMove(objSelect,i,i-1);

		objSelect.options[i-1].selected = true;
		objSelect.options[i].selected   = false;
	}
}

/**
*	TO DO 	: 멀티셀렉트박스의 이동 (맨아래로이동)
*	Param	: strObjName
*
*	사용예제
*	<input type="button" value="맨아래로이동"	onClick="setSelectedMoveBottom('strObjName')">
**/
function setSelectedMoveBottom( strObjName ) {
	var objSelect = document.getElementById(strObjName);
	var i = objSelect.selectedIndex;
	if ( i>-1 ) {
		for(; i<objSelect.length-1; i++)
		{
			setSelectedMove(objSelect,i+1,i);

			objSelect.options[i+1].selected = true;
			objSelect.options[i].selected   = false;
		}
	}
}

/**
*	TO DO 	: 멀티셀렉트박스의 이동
*	Param	: strObjName
*	Param	: intIndex1
*	Param	: intIndex2		
*
*	사용예제
*	<input type="button" value="이동테스트"	onClick="setSelectedMove( objSelect, intIndex1, intIndex2 )">
**/
function setSelectedMove( objSelect, intIndex1, intIndex2 ) {
	var savedValue  = objSelect.options[intIndex1].value;
	var savedText   = objSelect.options[intIndex1].text;

	objSelect.options[intIndex1].value = objSelect.options[intIndex2].value;
	objSelect.options[intIndex1].text  = objSelect.options[intIndex2].text;
	objSelect.options[intIndex2].value = savedValue;
	objSelect.options[intIndex2].text  = savedText;
}

/**
*	TO DO 	: 여러 멀티셀렉트박스에서의 이동 교환
*	Param	: strObjName_Original
*	Param	: strObjName_Target
*
*	사용예제
*	<input type="button" value="맞교환"	onClick="setSelectedMoveElements( strObjName_Original, strObjName_Target )">
**/
function setSelectedMoveElements( strObjName_Original, strObjName_Target ) {
	var objOriginal = document.getElementById(strObjName_Original);
	var objTarget   = document.getElementById(strObjName_Target);

	// 이동 (원본-->타켓)
	var intRemoveCount = 0;     // 이동할 항목수
	for( var i=0; i < objOriginal.options.length; i++ )
	{
		if ( objOriginal.options[i].selected == true )
		{
			var addText		= objOriginal.options[i].text;
			var addValue	= objOriginal.options[i].value;

			objTarget.options[objTarget.options.length] = new Option(addText,addValue);
			objOriginal.options[i].selected = false;
			++intRemoveCount;
		} else {
			objOriginal.options[i-intRemoveCount].selected = false;
			objOriginal.options[i-intRemoveCount].text  = objOriginal.options[i].text;
			objOriginal.options[i-intRemoveCount].value = objOriginal.options[i].value;
		}
	}

	// 이동후 원본에서 제거
	var intRemainCount = objOriginal.options.length - intRemoveCount;   // 이동후 남은 항목수
	for( i=objOriginal.options.length-1; i>=intRemainCount; i-- )
	{
		objOriginal.options[i] = null;
	}
}

/**
*	TO DO 	: 멀티셀렉트박스에서의 전체 토글 (체크박스사용)
*	Param	: objCheckBox	
*	Param	: strObjName
*
*	사용예제
*	<input type="button" value="전체토글"	onClick="setSelectBoxToggleAll( objCheckBox, strObjName )">
**/
function setSelectBoxToggleAll( objCheckBox, strObjName ) {
	var objSelect=document.getElementById(strObjName);
	if ( objCheckBox.checked )
	{
		for( var i=0; i<objSelect.options.length; i++ )
		{
			objSelect.options[i].selected = true;
		}
	} else {
		for( var i=0; i<objSelect.options.length; i++ )
		{
			objSelect.options[i].selected = false;
		}
	}
}

/**
*	TO DO 	: 멀티셀렉트박스에서의 전체 선택/해제 {토글}
*	Param	: strObjName
*	Param	: nBoolean
*
*	사용예제
*	<input type="button" value="전체선택"	onClick="setSelectBoxAllSelected( form.Category, nBoolean)">
**/
function setSelectBoxAllSelected( strObjName, nBoolean ) {
	var bSelected = (nBoolean == 0) ? false : true;
	for( var i=0; i<strObjName.options.length; i++ )
	{
		strObjName.options[i].selected = bSelected;
	}
}

/**
*	TO DO 	: 이미지 파일 체크
*	Param	: value
*
*	사용예제
*	if ( !isValidImageFile(form.attachfile.value) ) 	return;
**/
function isValidImageFile( value ) {
	var src = getFileExtension(value);
	if (src == "")
	{
		alert('올바른 파일을 입력하세요');
		return false;
	}
	else if ( !((src.toLowerCase() == "png") || (src.toLowerCase() == "gif") || (src.toLowerCase() == "jpg") || (src.toLowerCase() == "jpeg") || (src.toLowerCase() == "bmp") ) )
	{
		alert('png, gif, jpg, bmp 파일만 지원합니다.');
		return false;
	}
	return true;
}

/**
*	TO DO 	: 파일 확장자 알아내기
*	Param	: filePath
*
*	사용예제
*	alert( getFileExtension(form.attachfile.value) );
**/
function getFileExtension( filePath ) {
	var lastIndex = -1;
	lastIndex = filePath.lastIndexOf('.');
	var extension = "";

	if ( lastIndex != -1 )
	{
		extension = filePath.substring( lastIndex+1, filePath.len );
	} else {
		extension = "";
	}
	
	return extension;
}

/**
*	TO DO 	: 파일 이름 알아내기
*	Param	: filePath
*
*	사용예제
*	alert( getFileName(form.attachfile.value) );
**/
function getFileName(fileName) {
	var arSplitUrl = fileName.split("\\");
	var nArLength = arSplitUrl.length;
	var arFileName = arSplitUrl[nArLength-1];

	return arFileName;
}

/**
* 이미지에 맞는 팝업창을 띄운다.
* Param : 이미지 경로
*
*	사용예제
*	onclick="showPicturePopup( src )"
*/
function showPicturePopup(src) {
	var imgObj = new Image();
	imgObj.src = src;
	var wopt = "scrollbars=no,status=no,resizable=no";
	wopt += ",width=" + imgObj.width;
	wopt += ",height=" + imgObj.height;
	var wbody = "<head><title>사진 보기</title>";
	wbody += "<script language='javascript'>";
	wbody += "function finalResize() {";
	wbody += "  var oBody=document.body;";
	wbody += "  var oImg=document.images[0];";
	wbody += "  var xdiff=oImg.width-oBody.clientWidth;";
	wbody += "  var ydiff=oImg.height-oBody.clientHeight;";
	wbody += "  window.resizeBy(xdiff,ydiff);";
	wbody += "}";
	wbody += "</"+"script>";
	wbody += "</head>";
	wbody += "<body onLoad='finalResize()' style='margin:0'>";
	wbody += "<a href='javascript:window.close()'><img src='" + src + "' border=0></a>";
	wbody += "</body>";
	winResult = window.open("about:blank","",wopt);
	winResult.document.open("text/html", "replace");
	winResult.document.write(wbody);
	winResult.document.close();
	return;
}

/**
 * 난수를 발생시켜 해당위치의 문자로 치환하여 해당사이즈 만큼의 문자열을 만든다.
 * 
 *	사용예제
 * onclick = "makeRandomString(8);"
 */
function makeRandomString(size) {
	var selectString = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
	var returnString = "";
	
	for(var i=0; i<size; i++)
	{
		var result = Math.floor(Math.random() * 62) + 1;
		returnString += selectString[result-1];
	}
	
	return returnString;
}

/**
* 지정된 영역만 출력한다.
* Param : 영영 ID 값
*
*	사용예제
*		<a href="javascript:printIt(document.getElementById('printme').innerHTML)">Print</a><p>
*		<div id="printme">내용</div>
*/
function printIt(printThis)  {
	var win = window.open();
	self.focus();
	win.document.open();
	win.document.write('<'+'html'+'><'+'head'+'><'+'style'+'>');
	win.document.write('body, td { font-family: Verdana; font-size: 10pt;}');
	win.document.write('<'+'/'+'style'+'><'+'/'+'head'+'><'+'body'+'>');
	win.document.write(printThis);
	win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
	win.document.close();
	win.print();
	win.close();
}

/**
 * 타겟을 지정해서 모든 Element를 제거한다.
 *
 *	@parentObj	: 대상(Form)
 * @ex				: 
 */
function removeAllElement(parentObj) {
	els = parentObj.elements;
	count = els.length;
	for( var i = 0; i < count; i++ )
	{
		parentObj.removeChild(els[0]);
	}
}

/**
*	TO DO 	: 이메일주소 체크
*	Param	: strValue
*
*	Return	: Boolean
*
*	패턴형식
*		아이디부분 = 영문+숫자만+언더바+하이픈 허용 / 최소 4자리 이상 최대 15자리 까지 허용 {1,15}
*	사용예제
*		if ( isEmail( form.email.value ) == false ) alert("잘못된 형식의 이메일");
**/
function isEmail( strValue ) {
	//대채가능패턴모음
	//var pattern = /[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/;
	//var pattern = /^([A-Za-z0-9_-]{4,15})(@{1})([A-Za-z0-9_-]{1,15})(.{1})([A-Za-z0-9]{2,10})(.{1}[A-Za-z]{2,10})?(.{1}[A-Za-z]{2,10})?$/;
	//var pattern = /(^[a-zA-Z0-9]+@[a-zA-Z0-9]+[a-zA-Z0-9\-]+[a-zA-Z0-9]+\.[a-zA-Z]+$)/;
	//var pattern = /^(\w+)@(\w+)[.](\w+)[.](\w+)$/;
	//var pattern = /^(\w+(?:\.\w+)*)@((?:\w+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	//var pattern = /^([A-Za-z0-9]{4,15})(@{1})([A-Za-z0-9_-]{1,15})(.{1})([A-Za-z0-9]{2,4})(.{1}[A-Za-z]{2,4})?(.{1}[A-Za-z]{2,4})?$/;

	var pattern = /^([A-Za-z0-9_-]{1,15})(@{1})([A-Za-z0-9_-]{1,15})(.{1})([A-Za-z0-9]{2,10})(.{1}[A-Za-z]{2,10})?(.{1}[A-Za-z]{2,10})?$/;

	if ( (strValue.length == 0) || (!pattern.test(strValue)) )  return false;
	return true;
}

/**
*	TO DO 	: 한메일 사용여부 체크
*	Param	: strValue
*
*	Return	: Boolean
*
*	사용예제
*		if ( isEmailOfDaum( form.email.value ) == false ) alert("한메일은 안돼");
**/
function isEmailOfDaum( strValue ) { 
	strValue = strValue.toLowerCase();

	if ( strValue.match("@hanmail.net") || strValue.match("@daum.net") )	return false;
	return true;
}

/**
*	TO DO 	: 전화번호 체크
*	Param	: strValue
*	Param	: strPhoneType
*
*	Return	: Boolean
*
*	사용예제
*		if ( isPhoneNumber( form.phone.value, "M" ) == false ) alert("잘못된 전화번호 형식");
**/
function isPhoneNumber( strValue, strPhoneType ) {
	var pattern = /^[0-9]{2,4}-[0-9]{3,4}-[0-9]{4}$/;
	if ( (strValue.length == 0) || (!pattern.test(strValue)) )  return false;
	
	var groupNumber = null;
	switch ( strPhoneType.toUpperCase() )
	{
		case "M"	: groupNumber = new Array("010", "011", "016", "017", "018", "019");																												break;
		case "P"	: groupNumber = new Array("02","031","032","033","041","042","043","051","052","053","054","055","061","062","063","064","070", "0505");											break;
		case "MP"	: groupNumber = new Array("02","031","032","033","041","042","043","051","052","053","054","055","061","062","063","064","070","010", "011", "016", "017", "018", "019", "0505");	break;
		default		: return false;																																										break;
	}
	
	var bFlag		= false;
	var arrPhone	= strValue.split("-");
	
	for( var i=0; i<groupNumber.length; i++ )
	{
		if ( groupNumber[i] == arrPhone[0] )
		{
			bFlag = true;
			break;
		}
	}

	return bFlag;
}

/**
*	TO DO 	: 사업자번호 체크
*	Param	: strValue
*
*	Return	: Boolean
*
*	사용예제
*		if ( isSaupjaNumber( form.saupja.value ) == false ) alert("올바르지 않은 사업자번호");
**/
function isSaupjaNumber( strValue ) {
	if ( strValue.length != 10 )		return false;
	if ( !isCanInputString(strValue, "N") )	return false;

	var sum = 0;
	sum += parseInt( strValue.substring(0,1) );
	sum += parseInt( strValue.substring(1,2) ) * 3 % 10;
	sum += parseInt( strValue.substring(2,3) ) * 7 % 10;
	sum += parseInt( strValue.substring(3,4) ) * 1 % 10;
	sum += parseInt( strValue.substring(4,5) ) * 3 % 10;
	sum += parseInt( strValue.substring(5,6) ) * 7 % 10;
	sum += parseInt( strValue.substring(6,7) ) * 1 % 10;
	sum += parseInt( strValue.substring(7,8) ) * 3 % 10;
	sum += Math.floor(parseInt( strValue.substring(8,9) ) * 5 / 10);
	sum += parseInt( strValue.substring(8,9) ) * 5 % 10;
	sum += parseInt( strValue.substring(9,10) );
	if ( sum % 10 != 0 )   return false;

	return true;
}

/**
*	TO DO 	: 법인번호 체크
*	Param	: strValue
*
*	Return	: Boolean
*
*	사용예제
*		if ( isCorpNumber( form.corpnum.value ) == false ) alert("올바르지 않은 법인번호");
**/
function isCorpNumber( strValue ) {
	if ( strValue.length != 13 )		return false;
	if ( !isCanInputString(strValue, "N") )	return false;

	var sum 	= 0;
	var num 	= [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
	var last 	= parseInt(corpnum.charAt(12));
	
	for(var i=0; i < 12; i++)
	{
		sum += parseInt(corpnum.charAt(i)) * num[i];
	}
	
	return ((10 - sum % 10) % 10 == last) ? true : false;
}

/**
*	TO DO 	: 주민등록번호 체크
*	Param	: strValue
*
*	Return	: Boolean
*
*	사용예제
*		if ( isJuminNumber( form.jumin.value ) == false ) alert("올바르지 않은 주민등록번호");
**/
function isJuminNumber( strValue ) {
	if ( strValue.length != 13 )		return false;
	if ( !isCanInputString(strValue, "N") )	return false;

	var sum = 0;
	for( i=0; i<8; i++ )	sum += strValue.substring(i, i+1)*(i+2);
	for( i=8; i<12; i++ )	sum += strValue.substring(i, i+1)*(i-6);

	sum = 11 - (sum%11);
	if ( sum >=10 ) sum -= 10;
	
	if ( (strValue.substring(12, 13) != sum) || (	(strValue.substring(6, 7) != 1)
									  					&& (strValue.substring(6, 7) != 2)
									  					&& (strValue.substring(6, 7) != 3)
									  					&& (strValue.substring(6, 7) != 4)	)
	)	return false;

	return true;
}

/**
*	TO DO 	: 만 나이 반환
*	Param	: yy			(출생년도 2자리)
*	Param	: mm			(출생월 2자리)
*	Param	: gender_num	(주민등록번호 뒷자리의 첫번째 숫자)
*
*	Return	: Number
*
*	사용예제
*		var nAge = getKoreanAge( form.jumin[0].value.substr(0,2), form.jumin[0].value.substr(2,2), form.jumin[1].value.substr(0,1) );
**/
function getKoreanAge( yy, mm, gender_num ) {
	var nowDate	= new Date();
	var strYY		= nowDate.getYear();
	var strMM		= nowDate.getMonth()+1;
	var strBrith_YY;
	var nKorean_Age;

	if ( gender_num == 1 || gender_num == 2 )
	{
		strBrith_YY ='19' + String(yy);
	}
	else
	{8
		strBrith_YY ='20' + String(yy);
	}
	
	nKorean_Age = ( parseInt(mm) < parseInt(strMM) ) ? ( strYY-parseInt(strBrith_YY) ) : ( strYY-parseInt(strBrith_YY)-1 );
	return nKorean_Age;
}

/**
 * 글자수 제한.
 *
 *	사용예제
 *	onkeypress="setStringLimit(this, 400);" onblur="setStringLimit(this, 400);
 */
 function setStringLimit(obj, length_limit) {
	var length = getByteCountByString(obj.value);
	
	if (length > length_limit) {
		obj.value = obj.value.replace(/\r\n$/, "");
		obj.value = getAssertMsglen(obj.value, length_limit );
	}
}

/**
*	TO DO : 지정한 문자열만큼만 입력받기
*	Param	: objEle
*	Param	: intMax
*	Param	: bShow         	(입력되는 문자열의 크기를 보여줄것인지의 여부)
*	Param	: strShow_SizeId	(입력되는 문자열의 크기를 보여줄 Form Element)
*
*	Return	: 없음
*
*	사용예제
* 		<textarea name="content" onpropertychange="javascript:setInputValueWithStringLimit(this, 10, false, '');"></textarea>
* 		<textarea name="content" onpropertychange="javascript:setInputValueWithStringLimit(this, 10, true, 'lblLength');"></textarea>
**/
function setInputValueWithStringLimit( objEle, intMax, bShow, strShow_SizeId ) {
	var objEle_Show;
	if ( bShow && !isEmptyString(strShow_SizeId) )
	{
		objEle_Show = eval("document.getElementById('"+ strShow_SizeId +"')");
	}

    var i = 0;
    var nTotalByte     	= 0;
    var nTotalByte_Old	= 0;
    var cOneChar;
    var cTempString;

    while( i < objEle.value.length )
    {
        cOneChar = objEle.value.charAt(i);
    
        if ( escape(cOneChar).length > 4 )
        {
            nTotalByte += 2;
        }
        else
        {
            nTotalByte ++;
        }

        if ( nTotalByte > intMax )
        {
            alert("입력 가능한 범위를 넘었습니다.");
        
            cTempString = objEle.value.substr(0,i);
            objEle.value = cTempString;
            nTotalByte = nTotalByte_Old;
            break;
        }

        nTotalByte_Old = nTotalByte;
        i++;
    }

	if ( typeof(objEle_Show) == "object" )
	{
		if (objEle_Show.type == "text")
		{
			objEle_Show.value = nTotalByte;				// text
		} else {
			objEle_Show.innerText = nTotalByte;			// span
		}
	}
}

/**
*	TO DO 	: 유효성 체크 (아이디)
*	Param	: objEle
*	Param	: nMin			(입력 최소길이)
*	Param	: nMax			(입력 최대길이)
*	Param	: bRequired		(필수체크 여부)
*	Param	: cMsgTitle
*
*	Return	: Boolean
*
*	사용예제
*		if ( getValidId( form.id, 4, 12, true, '아이디' ) == false )	return;
**/
function getValidId( objEle, nMin, nMax, bRequired, cMsgTitle ) {
	if ( typeof(objEle) != "object" )   return false;
	
	objEle.value 	= getStringByTrim( objEle.value, "A" );
	var strValue 	= objEle.value;
	if ( bRequired == false && strValue != "" )	bRequired = true;

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 입력가능문자 체크
		if ( !isCanInputString(strValue, "EN") )
		{
			alert(cMsgTitle + "의 입력값에 허용되지 않은 문자가 포함되어 있습니다.");
			objEle.value = "";
			objEle.focus();
			return false;
		}
		
		// 입력길이 체크
		if ( !isAllowedLength(strValue, nMin, nMax) )
		{
			alert(cMsgTitle + "의 입력은  " + nMin + "~ " + nMax + " 글자 사이로 작성하여 주십시오." );
			objEle.value = "";
			objEle.focus();
			return false;
		}
		
		// 금지단어 필터링 체크
		if ( isWordWithFilter(strValue, arrId_FilterList) )
		{
			alert(cMsgTitle + "의 입력값은 사용하실 수 없습니다.");
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 연속문자 체크
		if ( isRepeatString(strValue,  nMax_Repeat) )
		{
			alert(cMsgTitle + "의 입력값은 " +   nMax_Repeat + "회 연속 반복되는 문자를 사용하실 수 없습니다." );
			objEle.value = "";
			objEle.focus();
			return false;
		}
	}

	return true;
}

/**
*	TO DO 	: 유효성 체크 	(비밀번호)
*	Param	: objEle
*	Param	: objEle_re
*	Param	: nMin			(입력 최소길이)
*	Param	: nMax			(입력 최대길이)
*	Param	: bRequired		(필수체크 여부)
*	Param	: cMsgTitle
*
*	Return	: Boolean
*
*	사용예제
*		if ( getValidPasswd( form.pwd[0],  form.pwd[1], 4, 12, true, '비밀번호' ) == false )	return;
**/
function getValidPasswd( objEle, objEle_re, nMin, nMax, bRequired, cMsgTitle ) {
	if ( typeof(objEle) != "object" )   		return false;
	if ( typeof(objEle_re) != "object" )   	return false;
	
	var strValue 	= getStringByTrim( objEle.value, "A" );
	if ( bRequired == false && strValue != "" )	bRequired = true;

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 입력가능문자 체크
		if ( !isCanInputString(strValue, "PWD") )
		{
			alert(cMsgTitle + "의 입력값에 허용되지 않은 문자가 포함되어 있습니다.");
			objEle.value = "";
			objEle.focus();
			return false;
		}
		
		// 입력길이 체크
		if ( !isAllowedLength(strValue, nMin, nMax) )
		{
			alert(cMsgTitle + "의 입력은  " + nMin + "~ " + nMax + " 글자 사이로 작성하여 주십시오." );
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 연속문자 체크
		if ( isRepeatString(strValue,  nMax_Repeat) )
		{
			alert(cMsgTitle + "의 입력값은 " +   nMax_Repeat + "회 연속 반복되는 문자를 사용하실 수 없습니다." );
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 혼합문자 체크
		if ( !isMixString(strValue, true) )		//비밀번호는 특문을 포함할 수 있지만 반드시 포함할 필요는 없다. 단지 체크를 위해 true 전달
		{
			alert(cMsgTitle + "의 입력값은 반드시 영문과 숫자를 포함한 값이어야 합니다." );
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 동일정보 체크		
		if ( !isEqual( strValue, objEle_re.value ) )
		{
			alert(cMsgTitle + "의 입력값이 " + cMsgTitle + " 확인의 입력값과 일치하지 않습니다." );
			objEle_re.value = "";
			objEle.value = "";
			objEle.focus();
			return false;
		}
	}

	return true;
}

/**
*	TO DO 	: 유효성 체크 (모든 문자 사용가능)
*	Param	: objEle
*	Param	: nMin		(입력 최소길이)
*	Param	: nMax		(입력 최대길이)
*	Param	: bRequired	(필수체크 여부)
*	Param	: cMsgTitle
*
*	Return	: Boolean
*
*	사용예제
*		if ( isValidString( form.content, 4, 4000, true, '내용' ) == false )	return;
**/
function isValidString( objEle, nMin, nMax, bRequired, cMsgTitle ) {
	if ( typeof(objEle) != "object" )   return false;
	
	var strValue 	= objEle.value;
	if ( bRequired == false && strValue != "" )	bRequired = true;

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 입력길이 체크
		if ( !isAllowedLength(strValue, nMin, nMax) )
		{
			alert(cMsgTitle + "의 입력은  " + nMin + "~ " + nMax + " 글자 사이로 작성하여 주십시오." );
			objEle.value = "";
			objEle.focus();
			return false;
		}
	}

	return true;
}

/**
*	TO DO 	: 유효성 체크 (이메일)
*	Param	: objEle
*	Param	: bRequired	(필수체크 여부)
*	Param	: cMsgTitle
*	Param	: bDaumMaill	(한메일 허용 여부)
*
*	Return	: Boolean
*
*	사용예제
*		if ( isValidEmail( form.email,  true, '이메일', true ) == false )	return;
**/
function isValidEmail( objEle,  bRequired, cMsgTitle, bDaumMaill ) {
	if ( typeof(objEle) != "object" )   return false;
	
	var strValue = getStringByTrim( objEle.value, "A" );
	if ( bRequired == false && strValue != "" )	bRequired = true;

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 이메일 유효성 체크
		if ( !isEmail( strValue ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle.value = "";
			objEle.focus();
			return false;
		}
		
		if ( bDaumMaill )
		{
			if ( !isEmailOfDaum(strValue) )
			{
				alert(cMsgTitle + "의 입력값으로 다음메일(한메일)은 사용하실 수 없습니다." );
				objEle.value = "";
				objEle.focus();
				return false;
			}
		}
	}

	return true;
}

/**
*	TO DO 	: 유효성 체크 (주민등록번호)
*	Param	: objEle1
*	Param	: objEle2
*	Param	: bRequired	(필수체크 여부)
*	Param	: cMsgTitle
*
*	Return	: Boolean
*
*	사용예제
*		if ( isValidJuminNumber( form.jumin[0],  form.jumin[1], true, '주민등록번호' ) == false )	return;
**/
function isValidJuminNumber( objEle1,  objEle2, bRequired, cMsgTitle ) {
	if ( typeof(objEle1) != "object" )   return false;
	if ( typeof(objEle2) != "object" )   return false;
	
	var strValue1 	= getStringByTrim( objEle1.value, "A" );
	var strValue2 	= getStringByTrim( objEle2.value, "A" );
	
	if ( bRequired == false && (strValue1 != "" ||strValue2 != "" ) )	bRequired = true;

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue1) )
		{
			alert(cMsgTitle + "의 앞자리 값을 입력하여 주십시오.");
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( isEmptyString(strValue2) )
		{
			alert(cMsgTitle + "의 뒷자리 값을 입력하여 주십시오.");
			objEle2.value = "";			
			objEle2.focus();
			return false;
		}

		// 입력길이 체크
		if ( !isAllowedLength(strValue1, 6, 6) )
		{
			alert(cMsgTitle + "의 앞자리는  6자리 숫자입니다." );
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( !isAllowedLength(strValue2, 7, 7) )
		{
			alert(cMsgTitle + "의 뒷자리는  7자리 숫자입니다." );
			objEle2.value = "";
			objEle2.focus();
			return false;
		}

		// 입력가능문자 체크
		if ( !isCanInputString(strValue1, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( !isCanInputString(strValue2, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle2.value = "";
			objEle2.focus();
			return false;
		}

		// 주민등록번호 유효성 체크
		if ( !isJuminNumber( strValue1+strValue2 ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle1.value = "";
			objEle2.value = "";
			objEle1.focus();
			return false;
		}
	}

	return true;
}

/**
*	TO DO 	: 유효성 체크 (사업자번호)
*	Param	: objEle1
*	Param	: objEle2
*	Param	: objEle3
*	Param	: bRequired	(필수체크 여부)
*	Param	: cMsgTitle
*
*	Return	: Boolean
*
*	사용예제
*		if ( isValidSaupjaNumber( form.saupja[0],  form.saupja[1],  form.saupja[2], true, '사업자번호' ) == false )	return;
**/
function isValidSaupjaNumber( objEle1,  objEle2, objEle3, bRequired, cMsgTitle ) {
	if ( typeof(objEle1) != "object" )   return false;
	if ( typeof(objEle2) != "object" )   return false;
	if ( typeof(objEle3) != "object" )   return false;
	
	var strValue1 	= getStringByTrim( objEle1.value, "A" );
	var strValue2 	= getStringByTrim( objEle2.value, "A" );
	var strValue3 	= getStringByTrim( objEle3.value, "A" );
	
	if ( bRequired == false && (strValue1 != "" ||strValue2 != "" || strValue3 != "") )	bRequired = true;

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue1) )
		{
			alert(cMsgTitle + "의 앞자리 값을 입력하여 주십시오.");
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( isEmptyString(strValue2) )
		{
			alert(cMsgTitle + "의 중간자리 값을 입력하여 주십시오.");
			objEle2.value = "";
			objEle2.focus();
			return false;
		}
		if ( isEmptyString(strValue3) )
		{
			alert(cMsgTitle + "의 뒷자리 값을 입력하여 주십시오.");
			objEle3.value = "";
			objEle3.focus();
			return false;
		}

		// 입력길이 체크
		if ( !isAllowedLength(strValue1, 3, 3) )
		{
			alert(cMsgTitle + "의 앞자리는  3자리 숫자입니다." );
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( !isAllowedLength(strValue2, 2, 2) )
		{
			alert(cMsgTitle + "의 중간자리는  2자리 숫자입니다." );
			objEle2.value = "";
			objEle2.focus();
			return false;
		}
		if ( !isAllowedLength(strValue3, 5, 5) )
		{
			alert(cMsgTitle + "의 뒷자리는  5자리 숫자입니다." );
			objEle3.value = "";
			objEle3.focus();
			return false;
		}

		// 입력가능문자 체크
		if ( !isCanInputString(strValue1, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( !isCanInputString(strValue2, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle2.value = "";
			objEle2.focus();
			return false;
		}
		if ( !isCanInputString(strValue3, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle3.value = "";
			objEle3.focus();
			return false;
		}

		// 사업자번호 유효성 체크
		if ( !isSaupjaNumber( strValue1+strValue2+strValue3 ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle1.value = "";
			objEle2.value = "";
			objEle3.value = "";
			objEle1.focus();
			return false;
		}
	}

	return true;
}

/**
*	TO DO 	: 유효성 체크 (법인번호)
*	Param	: objEle1
*	Param	: objEle2
*	Param	: bRequired	(필수체크 여부)
*	Param	: cMsgTitle
*
*	Return	: Boolean
*
*	사용예제
*		if ( isValidCorpNumber( form.saupja[0],  form.saupja[1],  true, '법인번호' ) == false )	return;
**/
function isValidCorpNumber( objEle1,  objEle2, bRequired, cMsgTitle ) {
	if ( typeof(objEle1) != "object" )   return false;
	if ( typeof(objEle2) != "object" )   return false;
	
	var strValue1 	= getStringByTrim( objEle1.value, "A" );
	var strValue2 	= getStringByTrim( objEle2.value, "A" );
	
	if ( bRequired == false && (strValue1 != "" ||strValue2 != "") )	bRequired = true;

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue1) )
		{
			alert(cMsgTitle + "의 앞자리 값을 입력하여 주십시오.");
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( isEmptyString(strValue2) )
		{
			alert(cMsgTitle + "의 뒷자리의 값을 입력하여 주십시오.");
			objEle2.value = "";
			objEle2.focus();
			return false;
		}

		// 입력길이 체크
		if ( !isAllowedLength(strValue1, 6, 6) )
		{
			alert(cMsgTitle + "의 앞자리는  6자리 숫자입니다." );
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( !isAllowedLength(strValue2, 7, 7) )
		{
			alert(cMsgTitle + "의 뒷자리는  7자리 숫자입니다." );
			objEle2.value = "";
			objEle2.focus();
			return false;
		}

		// 입력가능문자 체크
		if ( !isCanInputString(strValue1, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( !isCanInputString(strValue2, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle2.value = "";
			objEle2.focus();
			return false;
		}

		// 법인번호 유효성 체크
		if ( !isCorpNumber( strValue1+strValue2 ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle1.value = "";
			objEle2.value = "";
			objEle1.focus();
			return false;
		}
	}

	return true;
}

/**
*	TO DO 	: 유효성 체크 (전화번호)
*	Param	: objEle1
*	Param	: objEle2
*	Param	: objEle3
*	Param	: bRequired	(필수체크 여부)
*	Param	: cPhoneType (P:일반전화, M:휴대폰)
*	Param	: cMsgTitle
*
*	Return	: Boolean
*
*	사용예제
*		if ( isValidPhoneNumber( form.phone[0],  form.phone[1],  form.phone[2], true, 'P', '전화번호' ) == false )	return;
*		if ( isValidPhoneNumber( form.hp[0],  form.hp[1],  form.hp[2], true, 'M', '휴대전화번호' ) == false )	return;
**/
function isValidPhoneNumber( objEle1,  objEle2, objEle3, bRequired, cPhoneType, cMsgTitle ) {
	if ( typeof(objEle1) != "object" )   return false;
	if ( typeof(objEle2) != "object" )   return false;
	if ( typeof(objEle3) != "object" )   return false;
	
	var strValue1	= (objEle1.type == "select-one") ? getValueBySelected(objEle1) : getStringByTrim( objEle1.value, "A" );
	var strValue2 = getStringByTrim( objEle2.value, "A" );
	var strValue3 = getStringByTrim( objEle3.value, "A" );
	
	if ( objEle1.type == "select-one" )
	{
		if ( bRequired == false && (strValue2 != "" || strValue3 != "") )	bRequired = true;
	}
	else
	{
		if ( bRequired == false && (strValue1 != "" ||strValue2 != "" || strValue3 != "") )	bRequired = true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue1) )
		{
			alert(cMsgTitle + "의 앞자리 값을 입력하여 주십시오.");
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( isEmptyString(strValue2) )
		{
			alert(cMsgTitle + "의 중간자리 값을 입력하여 주십시오.");
			objEle2.value = "";
			objEle2.focus();
			return false;
		}
		if ( isEmptyString(strValue3) )
		{
			alert(cMsgTitle + "의 뒷자리 값을 입력하여 주십시오.");
			objEle3.value = "";
			objEle3.focus();
			return false;
		}

		// 입력길이 체크
		if ( !isAllowedLength(strValue1, 2, 4) )
		{
			alert(cMsgTitle + "의 앞자리는  2~4자리의 숫자로 입력하여 주십시오." );
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( !isAllowedLength(strValue2, 3, 4) )
		{
			alert(cMsgTitle + "의 중간자리는  3~4자리의 숫자로 입력하여 주십시오." );
			objEle2.value = "";
			objEle2.focus();
			return false;
		}
		if ( !isAllowedLength(strValue3, 4, 4) )
		{
			alert(cMsgTitle + "의 뒷자리는  4자리의 숫자로 입력하여 주십시오." );
			objEle3.value = "";
			objEle3.focus();
			return false;
		}

		// 입력가능문자 체크
		if ( !isCanInputString(strValue1, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle1.value = "";
			objEle1.focus();
			return false;
		}
		if ( !isCanInputString(strValue2, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle2.value = "";
			objEle2.focus();
			return false;
		}
		if ( !isCanInputString(strValue3, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle3.value = "";
			objEle3.focus();
			return false;
		}

		// 전화번호 유효성 체크
		if ( !isPhoneNumber( strValue1+"-"+strValue2+"-"+strValue3, cPhoneType ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );

			if ( objEle1.type == "select-one" )
			{
				objEle1.options[0].selected = true;
			}
			else
			{
				objEle1.value = "";
			}
			objEle2.value = "";
			objEle3.value = "";
			objEle1.focus();
			return false;
		}
	}

	return true;
}

/**
*	TO DO 	: 유효성 체크 (날짜)
*	Param	: objEle
*	Param	: bRequired	(필수체크 여부)
*	Param	: cMsgTitle
*
*	Return	: Boolean
*
*	사용예제
*		if ( isValidDateOfElement( form.regDate, true, '날짜' ) == false )	return;
**/
function isValidDateOfElement( objEle, bRequired, cMsgTitle ) {
	if ( typeof(objEle) != "object" )   return false;
	var strValue = getStringByTrim( objEle.value, "A" );
	
	if ( bRequired == false && strValue != "" )	bRequired = true;

	if ( bRequired )
	{
		// 널값체크
		if ( isEmptyString(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 입력길이 체크
		if ( !isAllowedLength(strValue, 10, 10) )
		{
			alert(cMsgTitle + "의 입력은 숫자와 하이픈을 사용하여 10자리로 입력하여 주십시오." );
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 입력가능문자 체크
		if ( !isCanInputString(strValue, "N-") )
		{
			alert(cMsgTitle + "의 입력값은 입력은 숫자와 하이픈만 사용 가능합니다.");
			objEle.value = "";
			objEle.focus();
			return false;
		}

		// 날짜의 유효성 체크
		var arrDate = strValue.split("-");
		
		if ( !isValidDate(arrDate[0], arrDate[1], arrDate[2] ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle.value = "";
			objEle.focus();
			return false;
		}
	}

	return true;
}

/**
*	유효성 체크 (파일 확장자 체크)	
*	
* @Param	: objEle (폼 오브젝트)
* @Param	: usableFileExts	(사용가능한 확장자들)
* @Param	: cMsgTitle (유효하지 않을 시 나타낼 메세지)
*
* @Return	: Boolean
*
*	사용예제
*		if ( isValidFileExtenstion( form.fileName, 'jpg, jpeg, gif, png', '이미지 파일을 첨부하여 주십시요.' ) == false )	return;
**/
function isValidFileExtenstion(objEle, usableFileExts, cMsgTitle) {
	var fileExt = "";
	var isValidFileExt = false;
	
	if( isEmptyString(objEle.value) )
	{
		alert(cMsgTitle);
		objEle.focus();
		return false;
	}
	
	var filePointer = objEle.value.lastIndexOf('.');
	fileExt = objEle.value.substring(filePointer + 1, objEle.value.length);
	fileExt = fileExt.toLowerCase();
	
	if( isEmptyString(usableFileExts) )
	{
		alert("사용가능한 파일 확장자를 설정하여 주십시요.");
		return false;
	}
	else
	{
		var arrUsableFileExt = usableFileExts.split(",");
		
		for( var i = 0; i < arrUsableFileExt.length; i++)
		{
		
			if( fileExt == getStringByTrim(arrUsableFileExt[i], 'B'))
			{
				isValidFileExt = true;
				break;
			}
		}
		
		if( !isValidFileExt)
		{
			alert("유효하지 않은 파일입니다. \n\n["+ usableFileExts +"]로 다시 첨부하여 주십시요.");
			objEle.focus();
			return false;
		}
	}
	
	return isValidFileExt;
}

/**
*	페이지 위로 이동하기
*	
*
*	사용예제
*		goTop();
**/

function goTop(desy) { 
	var Timer; 
	var starty = document.body.scrollTop; 
	var oriy = 0;  //top 위치 
			var speed = 3; 

	if(Timer) clearTimeout(Timer); 

	if(!desy) desy = starty; 
	desy += (oriy - starty) / speed; 
	if (desy < oriy) desy = oriy; 
	var posY = Math.ceil(desy); 
	window.scrollTo(0, posY); 
	if((Math.floor(Math.abs(starty - oriy)) < 1)) { 
	clearTimeout(Timer); 
	window.scroll(0,oriy); 
	}else if(posY > oriy) { 
	Timer = setTimeout("goTop("+desy+")",1);//올라가는 속도(낮을수록 빠름) 
	}else{ 
	clearTimeout(Timer); 
	} 
} 

/**********************************
*
*	페이스북 공유 하기
*  사용예) goFacebook(ShareUrl, DocTitle, DocSummary, DocImage)
*
**********************************/

function goFacebook(ShareUrl, DocTitle, DocSummary, DocImage) {
	
	newwindow = window.open('http://www.facebook.com/sharer.php?s=100&p[url]='+encodeURIComponent(ShareUrl)+'&p[title]='+encodeURIComponent(DocTitle)+'&p[summary]='+encodeURIComponent(DocSummary)+'&p[images][0]='+encodeURIComponent(DocImage), 'facebookpopup', 'toolbar=0, status=0, width=626, height=436');
	
	if(window.focus) {
		newwindow.focus();
	}
}


/**********************************
*
*	트위터 공유 하기
*  사용예) goTweeter(sUrl, title)
*
**********************************/
	
function goTweeter(sUrl, title) {
	var text = title+" "+sUrl;

	window.open("http://twitter.com/home?status="+encodeURIComponent(text), 'twitterpopup', 'toolbar=0, status=0, width=626, height=436');
}


/**********************************
*
*	새창에서 부모창 새로고침
*  사용예) parentWindowReload()
*
**********************************/
	
function parentWindowReload() {
	opener.location.reload(true);
}

/**
 * When the target elem is exposed to the screen 
 * @param {*} obj 
 * @param {*} isCenterFromViewport
 * @param {*} centerOffsetY (% : max = 1)
 * @returns true is exposed 
 */

function isElementVisible( obj, isCenterFromViewport, centerOffsetY ) {
    var ret = false,
        scrolltop = 0, 
        y = 0, 
        elementHeight = 0;

    if (obj.length === 0) return;

    scrolltop = $(window).scrollTop(); // Scroll Top
    y = obj.offset().top;
    elementHeight = obj.height();

    centerOffsetY = window.innerHeight * centerOffsetY;
    ret = ((y < (window.innerHeight + scrolltop)) && (y > (scrolltop - elementHeight)));

    if(isCenterFromViewport === true) {
        var calcHalf = ((window.innerHeight / 2) - (elementHeight / 2)) + centerOffsetY;
        var center = ((scrolltop + calcHalf) > y);
        if(ret === true) {
            // console.log('isElementVisible = ' + ret 
            //             + ', objY = ' + y + ', scrolltop = ' + scrolltop 
            //             + ', check center = ' + calcHalf
            //             + ', is center = ' + center
            //             );
            ret = center;
        }
    }

    return ret;
}

/* for mobile touch */
;(function($) {
    'use strict';
    const defDistanceForThreshold = 5;

    var touchInfo = {
        idReqAnimationFrame : null,
        init : function() {
            this.touch.touchX = 0;
            this.touch.touchY = 0;
            this.touch.startTime = 0;
            this.move.touchX = 0;
            this.move.touchY = 0;
            this.move.moveX = 0;
            this.move.moveY = 0;
            this.move.durationTimeMillisecond = 0;
            this.direction.up = false;
            this.direction.down = false;
            this.direction.left = false;
            this.direction.right = false;
        },
        touch: {
            touchX: 0,
            touchY: 0,
            startTime:0,
        },
        move: {
            touchX: 0,
            touchY: 0,
            moveX: 0,
            moveY: 0,
            durationTimeMillisecond: 0,
        },
        direction: {
            up: false,
            down: false,
            left: false,
            right: false
        }
    };

    $.mobileTouch = {
        init : function(elm, isOnlyVertical, callback) {
            var obj = $(elm);
            if(obj === null || obj === undefined) return false;

            // event
            obj.on('touchstart', touchStart);
            obj.on('touchmove', function(e) { touchMove(isOnlyVertical, e); });
            obj.on('touchend touchcancel', function() { touchEnd(callback); });
        }
    };

    function touchStart(e) {
        //console.log('$.mobileTouch : touchStart');
        touchInfo.touch.startTime = performance.now();
        touchInfo.touch.touchX = e.touches[0].clientX;
        touchInfo.touch.touchY = e.touches[0].clientY;

        touchInfo.idReqAnimationFrame = requestAnimationFrame(getDurationTimeWhenTouch);
    }

    function touchMove(isOnlyVertical, e) {
        //console.log('$.mobileTouch : touchMove, isOnlyVertical = ' + isOnlyVertical);
        var currentTouch = e.touches[0];

        touchInfo.move.moveX = Math.abs(currentTouch.clientX) - Math.abs(touchInfo.touch.touchX);
        touchInfo.move.moveY = Math.abs(currentTouch.clientY) - Math.abs(touchInfo.touch.touchY);
        //console.log('touchInfo.move.moveX = ' + touchInfo.move.moveX + ', touchInfo.move.moveY = ' + touchInfo.move.moveY);

        // check direction
        if ( Math.abs(touchInfo.move.moveX) > Math.abs(touchInfo.move.moveY)) {
            if (isOnlyVertical === true) {
                if (touchInfo.move.moveY < 0) touchInfo.direction.down = true;
                else touchInfo.direction.up = true;
            }
            else {
                if (touchInfo.move.moveX < 0) touchInfo.direction.right = true;
                else touchInfo.direction.left = true;
            }
        }
        else {
            if (touchInfo.move.moveY < 0) touchInfo.direction.down = true;
            else touchInfo.direction.up = true;
        }
    }

    function touchEnd(callback) {
        //console.log('$.mobileTouch : touchEnd');
        cancelAnimationFrame(touchInfo.idReqAnimationFrame);

        var distanceX = Math.abs(touchInfo.move.moveX),
            distanceY = Math.abs(touchInfo.move.moveY);

        if(distanceX > defDistanceForThreshold || distanceY > defDistanceForThreshold)
            callback(touchInfo.direction);
        
        touchInfo.init();
    }

    function getDurationTimeWhenTouch(timestamp) {
        touchInfo.durationTimeMillisecond = timestamp - touchInfo.touch.startTime;
        touchInfo.idReqAnimationFrame = requestAnimationFrame(getDurationTimeWhenTouch);
    }

})(window.jQuery);