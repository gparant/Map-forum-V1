var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var O=(n,e,t)=>e in n?te(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_=(n,e)=>{for(var t in e||(e={}))oe.call(e,t)&&O(n,t,e[t]);if(j)for(var t of j(e))se.call(e,t)&&O(n,t,e[t]);return n},q=(n,e)=>ne(n,re(e));class P{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const L="https://unpkg.com/@workadventure/scripting-api-extra@1.3.3/dist";class ie{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new P(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function N(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(L+"/configuration.html"+e)}async function ae(n,e){const t=await WA.room.getTiledMap(),r=new Map;return Y(t.layers,r,n,e),r}function Y(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!t&&o.name!==t||!!r&&!r.includes(s.name))continue;e.set(s.name,new ie(s))}}else o.type==="group"&&Y(o.layers,e,t,r)}let R;async function k(){return R===void 0&&(R=ue()),R}async function ue(){return le(await WA.room.getTiledMap())}function le(n){const e=new Map;return F(n.layers,"",e),e}function F(n,e,t){for(const r of n)r.type==="group"?F(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}function ce(n){let e=1/0,t=1/0,r=0,o=0;const s=n.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<n.height;i++)for(let u=0;u<n.width;u++)s[u+i*n.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),t=Math.min(t,i),r=Math.max(r,i));return{top:t,left:e,right:o+1,bottom:r+1}}function J(n){let e=1/0,t=1/0,r=0,o=0;for(const s of n){const i=ce(s);i.left<e&&(e=i.left),i.top<t&&(t=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var pe=Object.prototype.toString,C=Array.isArray||function(e){return pe.call(e)==="[object Array]"};function I(n){return typeof n=="function"}function fe(n){return C(n)?"array":typeof n}function G(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function K(n,e){return n!=null&&typeof n=="object"&&e in n}function he(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var de=RegExp.prototype.test;function ge(n,e){return de.call(n,e)}var ye=/\S/;function we(n){return!ge(ye,n)}var me={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ve(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return me[t]})}var be=/\s*/,Ae=/\s+/,$=/\s*=/,We=/\s*\}/,Se=/#|\^|\/|>|\{|&|=|!/;function Ce(n,e){if(!n)return[];var t=!1,r=[],o=[],s=[],i=!1,u=!1,a="",c=0;function h(){if(i&&!u)for(;s.length;)delete o[s.pop()];else s=[];i=!1,u=!1}var g,w,f;function A(b){if(typeof b=="string"&&(b=b.split(Ae,2)),!C(b)||b.length!==2)throw new Error("Invalid tags: "+b);g=new RegExp(G(b[0])+"\\s*"),w=new RegExp("\\s*"+G(b[1])),f=new RegExp("\\s*"+G("}"+b[1]))}A(e||m.tags);for(var l=new E(n),p,d,v,B,T,W;!l.eos();){if(p=l.pos,v=l.scanUntil(g),v)for(var x=0,ee=v.length;x<ee;++x)B=v.charAt(x),we(B)?(s.push(o.length),a+=B):(u=!0,t=!0,a+=" "),o.push(["text",B,p,p+1]),p+=1,B===`
`&&(h(),a="",c=0,t=!1);if(!l.scan(g))break;if(i=!0,d=l.scan(Se)||"name",l.scan(be),d==="="?(v=l.scanUntil($),l.scan($),l.scanUntil(w)):d==="{"?(v=l.scanUntil(f),l.scan(We),l.scanUntil(w),d="&"):v=l.scanUntil(w),!l.scan(w))throw new Error("Unclosed tag at "+l.pos);if(d==">"?T=[d,v,p,l.pos,a,c,t]:T=[d,v,p,l.pos],c++,o.push(T),d==="#"||d==="^")r.push(T);else if(d==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+v+'" at '+p);if(W[1]!==v)throw new Error('Unclosed section "'+W[1]+'" at '+p)}else d==="name"||d==="{"||d==="&"?u=!0:d==="="&&A(v)}if(h(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+l.pos);return Pe(Be(o))}function Be(n){for(var e=[],t,r,o=0,s=n.length;o<s;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function Pe(n){for(var e=[],t=e,r=[],o,s,i=0,u=n.length;i<u;++i)switch(o=n[i],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function E(n){this.string=n,this.tail=n,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};E.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function S(n,e){this.view=n,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,s,i,u,a=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),u=0;s!=null&&u<i.length;)u===i.length-1&&(a=K(s,i[u])||he(s,i[u])),s=s[i[u++]];else s=o.view[e],a=K(o.view,e);if(a){r=s;break}o=o.parent}t[e]=r}return I(r)&&(r=r.call(this.view)),r};function y(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}y.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};y.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||m.tags).join(":"),s=typeof r!="undefined",i=s?r.get(o):void 0;return i==null&&(i=Ce(e,t),s&&r.set(o,i)),i};y.prototype.render=function(e,t,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),u=t instanceof S?t:new S(t,void 0);return this.renderTokens(i,u,r,e,o)};y.prototype.renderTokens=function(e,t,r,o,s){for(var i="",u,a,c,h=0,g=e.length;h<g;++h)c=void 0,u=e[h],a=u[0],a==="#"?c=this.renderSection(u,t,r,o,s):a==="^"?c=this.renderInverted(u,t,r,o,s):a===">"?c=this.renderPartial(u,t,r,s):a==="&"?c=this.unescapedValue(u,t):a==="name"?c=this.escapedValue(u,t,s):a==="text"&&(c=this.rawValue(u)),c!==void 0&&(i+=c);return i};y.prototype.renderSection=function(e,t,r,o,s){var i=this,u="",a=t.lookup(e[1]);function c(w){return i.render(w,t,r,s)}if(!!a){if(C(a))for(var h=0,g=a.length;h<g;++h)u+=this.renderTokens(e[4],t.push(a[h]),r,o,s);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],t.push(a),r,o,s);else if(I(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(t.view,o.slice(e[3],e[5]),c),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],t,r,o,s);return u}};y.prototype.renderInverted=function(e,t,r,o,s){var i=t.lookup(e[1]);if(!i||C(i)&&i.length===0)return this.renderTokens(e[4],t,r,o,s)};y.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};y.prototype.renderPartial=function(e,t,r,o){if(!!r){var s=this.getConfigTags(o),i=I(r)?r(e[1]):r[e[1]];if(i!=null){var u=e[6],a=e[5],c=e[4],h=i;a==0&&c&&(h=this.indentPartial(i,c,u));var g=this.parse(h,s);return this.renderTokens(g,t,r,h,o)}}};y.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};y.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||m.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===m.escape?String(s):o(s)};y.prototype.rawValue=function(e){return e[1]};y.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};y.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){M.templateCache=n},get templateCache(){return M.templateCache}},M=new y;m.clearCache=function(){return M.clearCache()};m.parse=function(e,t){return M.parse(e,t)};m.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+fe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,t,r,o)};m.escape=ve;m.Scanner=E;m.Context=S;m.Writer=y;class Me{constructor(e,t){this.template=e,this.state=t,this.ast=m.parse(e)}getValue(){return this.value===void 0&&(this.value=m.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=m.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&t.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,t)}}}async function Ee(){var n;const e=await k();for(const[t,r]of e.entries()){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new Me(s.value,WA.state);if(i.isPureString())continue;const u=i.getValue();Z(t,s.name,u),i.onChange(a=>{Z(t,s.name,a)})}}}function Z(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let V,U=0,D=0;function H(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Te(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=z(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Le(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=z(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Q(n){return n.map(e=>V.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function z(n){const e=Q(n),t=J(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(D-o,2))}function ke(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Te(n):Le(n),H(n)}),H(n)}function xe(n,e,t,r){const o=n.name;let s,i,u=!1;const a=t.getString("tag");let c=!0;a&&!WA.player.tags.includes(a)&&(c=!1);const h=!!a;function g(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=t.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,w()}})}function w(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=t.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,g()}})}function f(l){const p=J(Q(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:p.right*32,y:p.top*32,width:32*3,height:32*4},allowApi:!0})}function A(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,t.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!c||!h)&&(t.getString("code")||t.getString("codeVariable"))){f(o);return}!c||(WA.state[e.name]?g():w())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),A()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&g(),i&&WA.state[e.name]===!0&&A(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&w())})}function Re(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-U,2)+Math.pow(n.y-D,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Ge(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&Re(n)})}function Ve(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Ie(n){n=n!=null?n:L;const e=await ae();V=await k();for(const t of e.values())t.properties.get("door")&&ke(t),t.properties.get("bell")&&Ge(t);for(const t of V.values()){const r=new P(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');xe(t,i,r,n)}const s=r.getString("bellVariable");s&&Ve(s,r,t.name)}WA.player.onPlayerMove(t=>{U=t.x,D=t.y})}function Ue(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),s=n.getString("triggerMessage"),i=n.getString("tag");De(t,e,r,o,s,i)}}function De(n,e,t,r,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function je(){const n=await k();for(const e of n.values()){const t=new P(e.properties);Ue(t,e.name)}}let X;async function Oe(n){const e=await WA.room.getTiledMap();n=n!=null?n:L,X=await k();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new P(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const s of X.values()){const i=new P(s.properties),u=i.getString("openConfig");u&&s.type==="tilelayer"&&_e(u.split(","),s.name,i)}}}function _e(n,e,t){let r;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var a;r&&r.remove(),r=WA.ui.displayActionMessage({message:(a=t.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>N(n)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=t.getString("openConfigTrigger");s&&(a&&a==="onaction"?i():N(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const qe=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Ne=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Ke(){var n;const e=WA.player.state.tutorialDone,t=/Mobi|Android/i.test(navigator.userAgent),o=await((n=(await WA.room.getTiledMap()).properties)===null||n===void 0?void 0:n.find(i=>i.name==="tutorial")),s=o&&o.value;if(!e&&s){$e(t);let i=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),c=()=>{const A=i.x+a.x+a.width>u.x+u.width,l=i.x+a.x<u.x,p=i.y+a.y+a.height>u.y+u.height,d=i.y+a.y<u.y;A?a.x=-a.width-1.5*16:l&&(a.x=1.5*16),p?a.y=-a.height:d&&(a.y=16)},h=f=>{a.width=f.width,a.height=f.height,a.scale=f.scale},g=f=>{const l=(t?qe:Ne).filter(p=>{if(p.lowerBound&&p.uppperBound)return p.lowerBound<f&&f<=p.uppperBound;if(p.lowerBound&&!p.uppperBound)return p.lowerBound<f;if(!p.lowerBound&&p.uppperBound)return f<=p.uppperBound;throw new Error(`Zoom level of: ${f} could not fit in any of the desktopConfig's ranges.`)});h(l[0].config)},w=()=>{if(u===void 0)return;const f=u.zoom;g(f),c()};WA.player.onPlayerMove(f=>{i=f,w()}),WA.camera.onCameraUpdate().subscribe(f=>{u=f,w()}),WA.player.state.tutorialDone=!0}}function $e(n){let e={allow:"",name:"tutorial",url:L+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};n&&(e=q(_({},e),{position:{x:32,y:-225,height:390,width:250},scale:1})),WA.room.website.create(e)}function Ze(){return WA.onInit().then(()=>{Ie().catch(n=>console.error(n)),je().catch(n=>console.error(n)),Oe().catch(n=>console.error(n)),Ee().catch(n=>console.error(n)),Ke().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");WA.onInit().then(()=>{let n=null;WA.room.onEnterLayer("openPopUpRoom").subscribe(()=>{n=WA.ui.openPopup("popupRoomAccess","Revenez plus tard",[])}),WA.room.onLeaveLayer("openPopUpRoom").subscribe(()=>{!n||n.close()}),Ze().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(n=>console.error(n));
