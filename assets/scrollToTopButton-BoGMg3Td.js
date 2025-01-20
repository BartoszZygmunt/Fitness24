var xh=Object.defineProperty;var Uh=(n,e,t)=>e in n?xh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Js=(n,e,t)=>Uh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function Fh(){document.querySelector(".filter-list-js").classList.add("hidden-form");const e=document.querySelector(".fav-wrap-js"),t=document.createElement("p");t.className="favorite-text",e.appendChild(t),t.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const pe="/Fitness24/assets/sprite-DxA5mWpr.svg",yr=(n,e)=>n.length<=e?n:`${n.slice(0,e)}...`;function Bh(n){const e=document.querySelector(".filter-list-js");e.classList.remove("hidden-form"),n.length>6?e.classList.add("scroll"):e.classList.remove("scroll");const t=n.map(({_id:r,target:s,name:o,bodyPart:a,burnedCalories:c,time:d})=>`
  <li class="fav-list-item" id=${r}>
    <div class="fav-list-item-up">
      <div class="fav-list-item-up-left">
        <span class="fav-btn-workout">${yr(s,6)}</span>
        <button id="btnTrash" class="fav-btn-trash-icon fav-btn-trash" data-id=${r}>
          <svg class="fav-btn-trash-icon" width="16" height="16" aria-label="trash" data-id=${r}>
            <use class="fav-btn-trash-icon" href="${pe}#icon-trash" data-id=${r}></use>
          </svg>
        </button>
      </div>
      <div class="fav-list-item-up-right">
        <button class="fav-btn-start" data-id=${r}>
          <p class="fav-btn-start-text" data-id=${r}>start</p>
          <svg class="fav-btn-start-icon" width="16" height="16" aria-label="arrow" data-id=${r}>
            <use href="${pe}#icon-arrow" data-id=${r}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="fav-list-item-middle">
      <div class="fav-list-item-middle-icon">
        <svg class="fav-list-item-middle-icon-svg">
          <use href="${pe}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="fav-list-item-middle-title">${yr(o,16)}</h3>
    </div>
    <div class="fav-list-item-bottom">
      <ul class="fav-list-item-bottom-list">
        <li class="fav-list-item-bottom-list-item">
          <p class="fav-list-item-bottom-list-item-text">
            Burned calories: <span>${c}/${d}</span>
          </p>
        </li>
        <li class="fav-list-item-bottom-list-item">
          <p class="fav-list-item-bottom-list-item-text">
            Body part: <span>${yr(a,5)}</span>
          </p>
        </li>
        <li class="fav-list-item-bottom-list-item">
          <p class="fav-list-item-bottom-list-item-text">Target: <span>${yr(s,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");e.innerHTML=t}var Ea={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],c=n[t++],d=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Gu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,d=s+2<n.length,p=d?n[s+2]:0,E=o>>2,I=(o&3)<<4|c>>4;let b=(c&15)<<2|p>>6,S=p&63;d||(S=64,a||(b=64)),r.push(t[E],t[I],t[b],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const p=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||p==null||I==null)throw new jh;const b=o<<2|c>>4;if(r.push(b),p!==64){const S=c<<4&240|p>>2;if(r.push(S),I!==64){const D=p<<6&192|I;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zh=function(n){const e=Hu(n);return Gu.encodeByteArray(e,!0)},Fr=function(n){return zh(n).replace(/\./g,"")},Wu=function(n){try{return Gu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=()=>$h().__FIREBASE_DEFAULTS__,Gh=()=>{if(typeof process>"u"||typeof Ea>"u")return;const n=Ea.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wu(n[1]);return e&&JSON.parse(e)},os=()=>{try{return Hh()||Gh()||Wh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ku=n=>{var e,t;return(t=(e=os())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kh=n=>{const e=Ku(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Qu=()=>{var n;return(n=os())===null||n===void 0?void 0:n.config},Ju=n=>{var e;return(e=os())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fr(JSON.stringify(t)),Fr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Yh(){var n;const e=(n=os())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ed(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nd(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rd(){return!Yh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sd(){try{return typeof indexedDB=="object"}catch{return!1}}function id(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="FirebaseError";class Ye extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=od,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?ad(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ye(s,c,r)}}function ad(n,e){return n.replace(ud,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ud=/\{\$([^}]+)}/g;function cd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Br(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Ta(o)&&Ta(a)){if(!Br(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ta(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ld(n,e){const t=new hd(n,e);return t.subscribe.bind(t)}class hd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");dd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Xs),s.error===void 0&&(s.error=Xs),s.complete===void 0&&(s.complete=Xs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n){return n&&n._delegate?n._delegate:n}class Pt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Qh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(md(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pd(n){return n===Rt?void 0:n}function md(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const _d={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},yd=z.INFO,vd={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Ed=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=vd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Di{constructor(e){this.name=e,this._logLevel=yd,this._logHandler=Ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Td=(n,e)=>e.some(t=>n instanceof t);let Ia,wa;function Id(){return Ia||(Ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wd(){return wa||(wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xu=new WeakMap,ui=new WeakMap,Yu=new WeakMap,Ys=new WeakMap,Vi=new WeakMap;function Ad(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(ht(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Xu.set(t,n)}).catch(()=>{}),Vi.set(e,n),e}function bd(n){if(ui.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ui.set(n,e)}let ci={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ui.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rd(n){ci=n(ci)}function Sd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zs(this),e,...t);return Yu.set(r,e.sort?e.sort():[e]),ht(r)}:wd().includes(n)?function(...e){return n.apply(Zs(this),e),ht(Xu.get(this))}:function(...e){return ht(n.apply(Zs(this),e))}}function Cd(n){return typeof n=="function"?Sd(n):(n instanceof IDBTransaction&&bd(n),Td(n,Id())?new Proxy(n,ci):n)}function ht(n){if(n instanceof IDBRequest)return Ad(n);if(Ys.has(n))return Ys.get(n);const e=Cd(n);return e!==n&&(Ys.set(n,e),Vi.set(e,n)),e}const Zs=n=>Vi.get(n);function Pd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),c=ht(a);return r&&a.addEventListener("upgradeneeded",d=>{r(ht(a.result),d.oldVersion,d.newVersion,ht(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const kd=["get","getKey","getAll","getAllKeys","count"],Nd=["put","add","delete","clear"],ei=new Map;function Aa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ei.get(e))return ei.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Nd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kd.includes(t)))return;const o=async function(a,...c){const d=this.transaction(a,s?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[t](...c),s&&d.done]))[0]};return ei.set(e,o),o}Rd(n=>({...n,get:(e,t,r)=>Aa(e,t)||n.get(e,t,r),has:(e,t)=>!!Aa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Vd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const li="@firebase/app",ba="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new Di("@firebase/app"),Ld="@firebase/app-compat",Od="@firebase/analytics-compat",Md="@firebase/analytics",xd="@firebase/app-check-compat",Ud="@firebase/app-check",Fd="@firebase/auth",Bd="@firebase/auth-compat",qd="@firebase/database",jd="@firebase/data-connect",zd="@firebase/database-compat",$d="@firebase/functions",Hd="@firebase/functions-compat",Gd="@firebase/installations",Wd="@firebase/installations-compat",Kd="@firebase/messaging",Qd="@firebase/messaging-compat",Jd="@firebase/performance",Xd="@firebase/performance-compat",Yd="@firebase/remote-config",Zd="@firebase/remote-config-compat",ef="@firebase/storage",tf="@firebase/storage-compat",nf="@firebase/firestore",rf="@firebase/vertexai",sf="@firebase/firestore-compat",of="firebase",af="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="[DEFAULT]",uf={[li]:"fire-core",[Ld]:"fire-core-compat",[Md]:"fire-analytics",[Od]:"fire-analytics-compat",[Ud]:"fire-app-check",[xd]:"fire-app-check-compat",[Fd]:"fire-auth",[Bd]:"fire-auth-compat",[qd]:"fire-rtdb",[jd]:"fire-data-connect",[zd]:"fire-rtdb-compat",[$d]:"fire-fn",[Hd]:"fire-fn-compat",[Gd]:"fire-iid",[Wd]:"fire-iid-compat",[Kd]:"fire-fcm",[Qd]:"fire-fcm-compat",[Jd]:"fire-perf",[Xd]:"fire-perf-compat",[Yd]:"fire-rc",[Zd]:"fire-rc-compat",[ef]:"fire-gcs",[tf]:"fire-gcs-compat",[nf]:"fire-fst",[sf]:"fire-fst-compat",[rf]:"fire-vertex","fire-js":"fire-js",[of]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Map,cf=new Map,di=new Map;function Ra(n,e){try{n.container.addComponent(e)}catch(t){We.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jt(n){const e=n.name;if(di.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;di.set(e,n);for(const t of qr.values())Ra(t,n);for(const t of cf.values())Ra(t,n);return!0}function Li(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ct(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new $n("app","Firebase",lf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=af;function Zu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(t||(t=Qu()),!t)throw dt.create("no-options");const o=qr.get(s);if(o){if(Br(t,o.options)&&Br(r,o.config))return o;throw dt.create("duplicate-app",{appName:s})}const a=new gd(s);for(const d of di.values())a.addComponent(d);const c=new hf(t,r,a);return qr.set(s,c),c}function ec(n=hi){const e=qr.get(n);if(!e&&n===hi&&Qu())return Zu();if(!e)throw dt.create("no-app",{appName:n});return e}function ft(n,e,t){var r;let s=(r=uf[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(c.join(" "));return}Jt(new Pt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="firebase-heartbeat-database",ff=1,xn="firebase-heartbeat-store";let ti=null;function tc(){return ti||(ti=Pd(df,ff,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),ti}async function pf(n){try{const t=(await tc()).transaction(xn),r=await t.objectStore(xn).get(nc(n));return await t.done,r}catch(e){if(e instanceof Ye)We.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(t.message)}}}async function Sa(n,e){try{const r=(await tc()).transaction(xn,"readwrite");await r.objectStore(xn).put(e,nc(n)),await r.done}catch(t){if(t instanceof Ye)We.warn(t.message);else{const r=dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});We.warn(r.message)}}}function nc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=1024,gf=30*24*60*60*1e3;class _f{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ca();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=gf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){We.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ca(),{heartbeatsToSend:r,unsentEntries:s}=yf(this._heartbeatsCache.heartbeats),o=Fr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return We.warn(t),""}}}function Ca(){return new Date().toISOString().substring(0,10)}function yf(n,e=mf){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Pa(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Pa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class vf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pa(n){return Fr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n){Jt(new Pt("platform-logger",e=>new Dd(e),"PRIVATE")),Jt(new Pt("heartbeat",e=>new _f(e),"PRIVATE")),ft(li,ba,n),ft(li,ba,"esm2017"),ft("fire-js","")}Ef("");var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pt,rc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,h){function f(){}f.prototype=h.prototype,_.D=h.prototype,_.prototype=new f,_.prototype.constructor=_,_.C=function(y,T,v){for(var g=Array(arguments.length-2),q=2;q<arguments.length;q++)g[q-2]=arguments[q];return h.prototype[T].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,h,f){f||(f=0);var y=Array(16);if(typeof h=="string")for(var T=0;16>T;++T)y[T]=h.charCodeAt(f++)|h.charCodeAt(f++)<<8|h.charCodeAt(f++)<<16|h.charCodeAt(f++)<<24;else for(T=0;16>T;++T)y[T]=h[f++]|h[f++]<<8|h[f++]<<16|h[f++]<<24;h=_.g[0],f=_.g[1],T=_.g[2];var v=_.g[3],g=h+(v^f&(T^v))+y[0]+3614090360&4294967295;h=f+(g<<7&4294967295|g>>>25),g=v+(T^h&(f^T))+y[1]+3905402710&4294967295,v=h+(g<<12&4294967295|g>>>20),g=T+(f^v&(h^f))+y[2]+606105819&4294967295,T=v+(g<<17&4294967295|g>>>15),g=f+(h^T&(v^h))+y[3]+3250441966&4294967295,f=T+(g<<22&4294967295|g>>>10),g=h+(v^f&(T^v))+y[4]+4118548399&4294967295,h=f+(g<<7&4294967295|g>>>25),g=v+(T^h&(f^T))+y[5]+1200080426&4294967295,v=h+(g<<12&4294967295|g>>>20),g=T+(f^v&(h^f))+y[6]+2821735955&4294967295,T=v+(g<<17&4294967295|g>>>15),g=f+(h^T&(v^h))+y[7]+4249261313&4294967295,f=T+(g<<22&4294967295|g>>>10),g=h+(v^f&(T^v))+y[8]+1770035416&4294967295,h=f+(g<<7&4294967295|g>>>25),g=v+(T^h&(f^T))+y[9]+2336552879&4294967295,v=h+(g<<12&4294967295|g>>>20),g=T+(f^v&(h^f))+y[10]+4294925233&4294967295,T=v+(g<<17&4294967295|g>>>15),g=f+(h^T&(v^h))+y[11]+2304563134&4294967295,f=T+(g<<22&4294967295|g>>>10),g=h+(v^f&(T^v))+y[12]+1804603682&4294967295,h=f+(g<<7&4294967295|g>>>25),g=v+(T^h&(f^T))+y[13]+4254626195&4294967295,v=h+(g<<12&4294967295|g>>>20),g=T+(f^v&(h^f))+y[14]+2792965006&4294967295,T=v+(g<<17&4294967295|g>>>15),g=f+(h^T&(v^h))+y[15]+1236535329&4294967295,f=T+(g<<22&4294967295|g>>>10),g=h+(T^v&(f^T))+y[1]+4129170786&4294967295,h=f+(g<<5&4294967295|g>>>27),g=v+(f^T&(h^f))+y[6]+3225465664&4294967295,v=h+(g<<9&4294967295|g>>>23),g=T+(h^f&(v^h))+y[11]+643717713&4294967295,T=v+(g<<14&4294967295|g>>>18),g=f+(v^h&(T^v))+y[0]+3921069994&4294967295,f=T+(g<<20&4294967295|g>>>12),g=h+(T^v&(f^T))+y[5]+3593408605&4294967295,h=f+(g<<5&4294967295|g>>>27),g=v+(f^T&(h^f))+y[10]+38016083&4294967295,v=h+(g<<9&4294967295|g>>>23),g=T+(h^f&(v^h))+y[15]+3634488961&4294967295,T=v+(g<<14&4294967295|g>>>18),g=f+(v^h&(T^v))+y[4]+3889429448&4294967295,f=T+(g<<20&4294967295|g>>>12),g=h+(T^v&(f^T))+y[9]+568446438&4294967295,h=f+(g<<5&4294967295|g>>>27),g=v+(f^T&(h^f))+y[14]+3275163606&4294967295,v=h+(g<<9&4294967295|g>>>23),g=T+(h^f&(v^h))+y[3]+4107603335&4294967295,T=v+(g<<14&4294967295|g>>>18),g=f+(v^h&(T^v))+y[8]+1163531501&4294967295,f=T+(g<<20&4294967295|g>>>12),g=h+(T^v&(f^T))+y[13]+2850285829&4294967295,h=f+(g<<5&4294967295|g>>>27),g=v+(f^T&(h^f))+y[2]+4243563512&4294967295,v=h+(g<<9&4294967295|g>>>23),g=T+(h^f&(v^h))+y[7]+1735328473&4294967295,T=v+(g<<14&4294967295|g>>>18),g=f+(v^h&(T^v))+y[12]+2368359562&4294967295,f=T+(g<<20&4294967295|g>>>12),g=h+(f^T^v)+y[5]+4294588738&4294967295,h=f+(g<<4&4294967295|g>>>28),g=v+(h^f^T)+y[8]+2272392833&4294967295,v=h+(g<<11&4294967295|g>>>21),g=T+(v^h^f)+y[11]+1839030562&4294967295,T=v+(g<<16&4294967295|g>>>16),g=f+(T^v^h)+y[14]+4259657740&4294967295,f=T+(g<<23&4294967295|g>>>9),g=h+(f^T^v)+y[1]+2763975236&4294967295,h=f+(g<<4&4294967295|g>>>28),g=v+(h^f^T)+y[4]+1272893353&4294967295,v=h+(g<<11&4294967295|g>>>21),g=T+(v^h^f)+y[7]+4139469664&4294967295,T=v+(g<<16&4294967295|g>>>16),g=f+(T^v^h)+y[10]+3200236656&4294967295,f=T+(g<<23&4294967295|g>>>9),g=h+(f^T^v)+y[13]+681279174&4294967295,h=f+(g<<4&4294967295|g>>>28),g=v+(h^f^T)+y[0]+3936430074&4294967295,v=h+(g<<11&4294967295|g>>>21),g=T+(v^h^f)+y[3]+3572445317&4294967295,T=v+(g<<16&4294967295|g>>>16),g=f+(T^v^h)+y[6]+76029189&4294967295,f=T+(g<<23&4294967295|g>>>9),g=h+(f^T^v)+y[9]+3654602809&4294967295,h=f+(g<<4&4294967295|g>>>28),g=v+(h^f^T)+y[12]+3873151461&4294967295,v=h+(g<<11&4294967295|g>>>21),g=T+(v^h^f)+y[15]+530742520&4294967295,T=v+(g<<16&4294967295|g>>>16),g=f+(T^v^h)+y[2]+3299628645&4294967295,f=T+(g<<23&4294967295|g>>>9),g=h+(T^(f|~v))+y[0]+4096336452&4294967295,h=f+(g<<6&4294967295|g>>>26),g=v+(f^(h|~T))+y[7]+1126891415&4294967295,v=h+(g<<10&4294967295|g>>>22),g=T+(h^(v|~f))+y[14]+2878612391&4294967295,T=v+(g<<15&4294967295|g>>>17),g=f+(v^(T|~h))+y[5]+4237533241&4294967295,f=T+(g<<21&4294967295|g>>>11),g=h+(T^(f|~v))+y[12]+1700485571&4294967295,h=f+(g<<6&4294967295|g>>>26),g=v+(f^(h|~T))+y[3]+2399980690&4294967295,v=h+(g<<10&4294967295|g>>>22),g=T+(h^(v|~f))+y[10]+4293915773&4294967295,T=v+(g<<15&4294967295|g>>>17),g=f+(v^(T|~h))+y[1]+2240044497&4294967295,f=T+(g<<21&4294967295|g>>>11),g=h+(T^(f|~v))+y[8]+1873313359&4294967295,h=f+(g<<6&4294967295|g>>>26),g=v+(f^(h|~T))+y[15]+4264355552&4294967295,v=h+(g<<10&4294967295|g>>>22),g=T+(h^(v|~f))+y[6]+2734768916&4294967295,T=v+(g<<15&4294967295|g>>>17),g=f+(v^(T|~h))+y[13]+1309151649&4294967295,f=T+(g<<21&4294967295|g>>>11),g=h+(T^(f|~v))+y[4]+4149444226&4294967295,h=f+(g<<6&4294967295|g>>>26),g=v+(f^(h|~T))+y[11]+3174756917&4294967295,v=h+(g<<10&4294967295|g>>>22),g=T+(h^(v|~f))+y[2]+718787259&4294967295,T=v+(g<<15&4294967295|g>>>17),g=f+(v^(T|~h))+y[9]+3951481745&4294967295,_.g[0]=_.g[0]+h&4294967295,_.g[1]=_.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,_.g[2]=_.g[2]+T&4294967295,_.g[3]=_.g[3]+v&4294967295}r.prototype.u=function(_,h){h===void 0&&(h=_.length);for(var f=h-this.blockSize,y=this.B,T=this.h,v=0;v<h;){if(T==0)for(;v<=f;)s(this,_,v),v+=this.blockSize;if(typeof _=="string"){for(;v<h;)if(y[T++]=_.charCodeAt(v++),T==this.blockSize){s(this,y),T=0;break}}else for(;v<h;)if(y[T++]=_[v++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=h},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var h=1;h<_.length-8;++h)_[h]=0;var f=8*this.o;for(h=_.length-8;h<_.length;++h)_[h]=f&255,f/=256;for(this.u(_),_=Array(16),h=f=0;4>h;++h)for(var y=0;32>y;y+=8)_[f++]=this.g[h]>>>y&255;return _};function o(_,h){var f=c;return Object.prototype.hasOwnProperty.call(f,_)?f[_]:f[_]=h(_)}function a(_,h){this.h=h;for(var f=[],y=!0,T=_.length-1;0<=T;T--){var v=_[T]|0;y&&v==h||(f[T]=v,y=!1)}this.g=f}var c={};function d(_){return-128<=_&&128>_?o(_,function(h){return new a([h|0],0>h?-1:0)}):new a([_|0],0>_?-1:0)}function p(_){if(isNaN(_)||!isFinite(_))return I;if(0>_)return N(p(-_));for(var h=[],f=1,y=0;_>=f;y++)h[y]=_/f|0,f*=4294967296;return new a(h,0)}function E(_,h){if(_.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(_.charAt(0)=="-")return N(E(_.substring(1),h));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=p(Math.pow(h,8)),y=I,T=0;T<_.length;T+=8){var v=Math.min(8,_.length-T),g=parseInt(_.substring(T,T+v),h);8>v?(v=p(Math.pow(h,v)),y=y.j(v).add(p(g))):(y=y.j(f),y=y.add(p(g)))}return y}var I=d(0),b=d(1),S=d(16777216);n=a.prototype,n.m=function(){if(V(this))return-N(this).m();for(var _=0,h=1,f=0;f<this.g.length;f++){var y=this.i(f);_+=(0<=y?y:4294967296+y)*h,h*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(D(this))return"0";if(V(this))return"-"+N(this).toString(_);for(var h=p(Math.pow(_,6)),f=this,y="";;){var T=te(f,h).g;f=j(f,T.j(h));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(_);if(f=T,D(f))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function D(_){if(_.h!=0)return!1;for(var h=0;h<_.g.length;h++)if(_.g[h]!=0)return!1;return!0}function V(_){return _.h==-1}n.l=function(_){return _=j(this,_),V(_)?-1:D(_)?0:1};function N(_){for(var h=_.g.length,f=[],y=0;y<h;y++)f[y]=~_.g[y];return new a(f,~_.h).add(b)}n.abs=function(){return V(this)?N(this):this},n.add=function(_){for(var h=Math.max(this.g.length,_.g.length),f=[],y=0,T=0;T<=h;T++){var v=y+(this.i(T)&65535)+(_.i(T)&65535),g=(v>>>16)+(this.i(T)>>>16)+(_.i(T)>>>16);y=g>>>16,v&=65535,g&=65535,f[T]=g<<16|v}return new a(f,f[f.length-1]&-2147483648?-1:0)};function j(_,h){return _.add(N(h))}n.j=function(_){if(D(this)||D(_))return I;if(V(this))return V(_)?N(this).j(N(_)):N(N(this).j(_));if(V(_))return N(this.j(N(_)));if(0>this.l(S)&&0>_.l(S))return p(this.m()*_.m());for(var h=this.g.length+_.g.length,f=[],y=0;y<2*h;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<_.g.length;T++){var v=this.i(y)>>>16,g=this.i(y)&65535,q=_.i(T)>>>16,Y=_.i(T)&65535;f[2*y+2*T]+=g*Y,W(f,2*y+2*T),f[2*y+2*T+1]+=v*Y,W(f,2*y+2*T+1),f[2*y+2*T+1]+=g*q,W(f,2*y+2*T+1),f[2*y+2*T+2]+=v*q,W(f,2*y+2*T+2)}for(y=0;y<h;y++)f[y]=f[2*y+1]<<16|f[2*y];for(y=h;y<2*h;y++)f[y]=0;return new a(f,0)};function W(_,h){for(;(_[h]&65535)!=_[h];)_[h+1]+=_[h]>>>16,_[h]&=65535,h++}function K(_,h){this.g=_,this.h=h}function te(_,h){if(D(h))throw Error("division by zero");if(D(_))return new K(I,I);if(V(_))return h=te(N(_),h),new K(N(h.g),N(h.h));if(V(h))return h=te(_,N(h)),new K(N(h.g),h.h);if(30<_.g.length){if(V(_)||V(h))throw Error("slowDivide_ only works with positive integers.");for(var f=b,y=h;0>=y.l(_);)f=ae(f),y=ae(y);var T=P(f,1),v=P(y,1);for(y=P(y,2),f=P(f,2);!D(y);){var g=v.add(y);0>=g.l(_)&&(T=T.add(f),v=g),y=P(y,1),f=P(f,1)}return h=j(_,T.j(h)),new K(T,h)}for(T=I;0<=_.l(h);){for(f=Math.max(1,Math.floor(_.m()/h.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=p(f),g=v.j(h);V(g)||0<g.l(_);)f-=y,v=p(f),g=v.j(h);D(v)&&(v=b),T=T.add(v),_=j(_,g)}return new K(T,_)}n.A=function(_){return te(this,_).h},n.and=function(_){for(var h=Math.max(this.g.length,_.g.length),f=[],y=0;y<h;y++)f[y]=this.i(y)&_.i(y);return new a(f,this.h&_.h)},n.or=function(_){for(var h=Math.max(this.g.length,_.g.length),f=[],y=0;y<h;y++)f[y]=this.i(y)|_.i(y);return new a(f,this.h|_.h)},n.xor=function(_){for(var h=Math.max(this.g.length,_.g.length),f=[],y=0;y<h;y++)f[y]=this.i(y)^_.i(y);return new a(f,this.h^_.h)};function ae(_){for(var h=_.g.length+1,f=[],y=0;y<h;y++)f[y]=_.i(y)<<1|_.i(y-1)>>>31;return new a(f,_.h)}function P(_,h){var f=h>>5;h%=32;for(var y=_.g.length-f,T=[],v=0;v<y;v++)T[v]=0<h?_.i(v+f)>>>h|_.i(v+f+1)<<32-h:_.i(v+f);return new a(T,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=p,a.fromString=E,pt=a}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});var vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sc,Pn,ic,Sr,fi,oc,ac,uc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof vr=="object"&&vr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function s(i,u){if(u)e:{var l=r;i=i.split(".");for(var m=0;m<i.length-1;m++){var w=i[m];if(!(w in l))break e;l=l[w]}i=i[i.length-1],m=l[i],u=u(m),u!=m&&u!=null&&e(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,m=!1,w={next:function(){if(!m&&l<i.length){var A=l++;return{value:u(A,i[A]),done:!1}}return m=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function d(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function p(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function E(i,u,l){return i.call.apply(i.bind,arguments)}function I(i,u,l){if(!i)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,m),i.apply(u,w)}}return function(){return i.apply(u,arguments)}}function b(i,u,l){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:I,b.apply(null,arguments)}function S(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var m=l.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function D(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(m,w,A){for(var k=Array(arguments.length-2),X=2;X<arguments.length;X++)k[X-2]=arguments[X];return u.prototype[w].apply(m,k)}}function V(i){const u=i.length;if(0<u){const l=Array(u);for(let m=0;m<u;m++)l[m]=i[m];return l}return[]}function N(i,u){for(let l=1;l<arguments.length;l++){const m=arguments[l];if(d(m)){const w=i.length||0,A=m.length||0;i.length=w+A;for(let k=0;k<A;k++)i[w+k]=m[k]}else i.push(m)}}class j{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(i){return/^[\s\xa0]*$/.test(i)}function K(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function te(i){return te[" "](i),i}te[" "]=function(){};var ae=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function P(i,u,l){for(const m in i)u.call(l,i[m],m,i)}function _(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function h(i){const u={};for(const l in i)u[l]=i[l];return u}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(l in m)i[l]=m[l];for(let A=0;A<f.length;A++)l=f[A],Object.prototype.hasOwnProperty.call(m,l)&&(i[l]=m[l])}}function T(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function v(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Rs;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class q{constructor(){this.h=this.g=null}add(u,l){const m=Y.get();m.set(u,l),this.h?this.h.next=m:this.g=m,this.h=m}}var Y=new j(()=>new bs,i=>i.reset());class bs{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let fn,pn=!1,Rs=new q,Eo=()=>{const i=c.Promise.resolve(void 0);fn=()=>{i.then(rh)}};var rh=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){v(l)}var u=Y;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}pn=!1};function Ze(){this.s=this.s,this.C=this.C}Ze.prototype.s=!1,Ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var sh=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function mn(i,u){if(_e.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(ae){e:{try{te(u.nodeName);var w=!0;break e}catch{}w=!1}w||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ih[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&mn.aa.h.call(this)}}D(mn,_e);var ih={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Zn="closure_listenable_"+(1e6*Math.random()|0),oh=0;function ah(i,u,l,m,w){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!m,this.ha=w,this.key=++oh,this.da=this.fa=!1}function er(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function tr(i){this.src=i,this.g={},this.h=0}tr.prototype.add=function(i,u,l,m,w){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var k=Cs(i,u,m,w);return-1<k?(u=i[k],l||(u.fa=!1)):(u=new ah(u,this.src,A,!!m,w),u.fa=l,i.push(u)),u};function Ss(i,u){var l=u.type;if(l in i.g){var m=i.g[l],w=Array.prototype.indexOf.call(m,u,void 0),A;(A=0<=w)&&Array.prototype.splice.call(m,w,1),A&&(er(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Cs(i,u,l,m){for(var w=0;w<i.length;++w){var A=i[w];if(!A.da&&A.listener==u&&A.capture==!!l&&A.ha==m)return w}return-1}var Ps="closure_lm_"+(1e6*Math.random()|0),ks={};function To(i,u,l,m,w){if(Array.isArray(u)){for(var A=0;A<u.length;A++)To(i,u[A],l,m,w);return null}return l=Ao(l),i&&i[Zn]?i.K(u,l,p(m)?!!m.capture:!1,w):uh(i,u,l,!1,m,w)}function uh(i,u,l,m,w,A){if(!u)throw Error("Invalid event type");var k=p(w)?!!w.capture:!!w,X=Ds(i);if(X||(i[Ps]=X=new tr(i)),l=X.add(u,l,m,k,A),l.proxy)return l;if(m=ch(),l.proxy=m,m.src=i,m.listener=l,i.addEventListener)sh||(w=k),w===void 0&&(w=!1),i.addEventListener(u.toString(),m,w);else if(i.attachEvent)i.attachEvent(wo(u.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ch(){function i(l){return u.call(i.src,i.listener,l)}const u=lh;return i}function Io(i,u,l,m,w){if(Array.isArray(u))for(var A=0;A<u.length;A++)Io(i,u[A],l,m,w);else m=p(m)?!!m.capture:!!m,l=Ao(l),i&&i[Zn]?(i=i.i,u=String(u).toString(),u in i.g&&(A=i.g[u],l=Cs(A,l,m,w),-1<l&&(er(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete i.g[u],i.h--)))):i&&(i=Ds(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Cs(u,l,m,w)),(l=-1<i?u[i]:null)&&Ns(l))}function Ns(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Zn])Ss(u.i,i);else{var l=i.type,m=i.proxy;u.removeEventListener?u.removeEventListener(l,m,i.capture):u.detachEvent?u.detachEvent(wo(l),m):u.addListener&&u.removeListener&&u.removeListener(m),(l=Ds(u))?(Ss(l,i),l.h==0&&(l.src=null,u[Ps]=null)):er(i)}}}function wo(i){return i in ks?ks[i]:ks[i]="on"+i}function lh(i,u){if(i.da)i=!0;else{u=new mn(u,this);var l=i.listener,m=i.ha||i.src;i.fa&&Ns(i),i=l.call(m,u)}return i}function Ds(i){return i=i[Ps],i instanceof tr?i:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ao(i){return typeof i=="function"?i:(i[Vs]||(i[Vs]=function(u){return i.handleEvent(u)}),i[Vs])}function ye(){Ze.call(this),this.i=new tr(this),this.M=this,this.F=null}D(ye,Ze),ye.prototype[Zn]=!0,ye.prototype.removeEventListener=function(i,u,l,m){Io(this,i,u,l,m)};function be(i,u){var l,m=i.F;if(m)for(l=[];m;m=m.F)l.push(m);if(i=i.M,m=u.type||u,typeof u=="string")u=new _e(u,i);else if(u instanceof _e)u.target=u.target||i;else{var w=u;u=new _e(m,i),y(u,w)}if(w=!0,l)for(var A=l.length-1;0<=A;A--){var k=u.g=l[A];w=nr(k,m,!0,u)&&w}if(k=u.g=i,w=nr(k,m,!0,u)&&w,w=nr(k,m,!1,u)&&w,l)for(A=0;A<l.length;A++)k=u.g=l[A],w=nr(k,m,!1,u)&&w}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],m=0;m<l.length;m++)er(l[m]);delete i.g[u],i.h--}}this.F=null},ye.prototype.K=function(i,u,l,m){return this.i.add(String(i),u,!1,l,m)},ye.prototype.L=function(i,u,l,m){return this.i.add(String(i),u,!0,l,m)};function nr(i,u,l,m){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,A=0;A<u.length;++A){var k=u[A];if(k&&!k.da&&k.capture==l){var X=k.listener,de=k.ha||k.src;k.fa&&Ss(i.i,k),w=X.call(de,m)!==!1&&w}}return w&&!m.defaultPrevented}function bo(i,u,l){if(typeof i=="function")l&&(i=b(i,l));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Ro(i){i.g=bo(()=>{i.g=null,i.i&&(i.i=!1,Ro(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class hh extends Ze{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ro(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(i){Ze.call(this),this.h=i,this.g={}}D(gn,Ze);var So=[];function Co(i){P(i.g,function(u,l){this.g.hasOwnProperty(l)&&Ns(u)},i),i.g={}}gn.prototype.N=function(){gn.aa.N.call(this),Co(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ls=c.JSON.stringify,dh=c.JSON.parse,fh=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Os(){}Os.prototype.h=null;function Po(i){return i.h||(i.h=i.i())}function ko(){}var _n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ms(){_e.call(this,"d")}D(Ms,_e);function xs(){_e.call(this,"c")}D(xs,_e);var It={},No=null;function rr(){return No=No||new ye}It.La="serverreachability";function Do(i){_e.call(this,It.La,i)}D(Do,_e);function yn(i){const u=rr();be(u,new Do(u))}It.STAT_EVENT="statevent";function Vo(i,u){_e.call(this,It.STAT_EVENT,i),this.stat=u}D(Vo,_e);function Re(i){const u=rr();be(u,new Vo(u,i))}It.Ma="timingevent";function Lo(i,u){_e.call(this,It.Ma,i),this.size=u}D(Lo,_e);function vn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function ph(i,u,l,m,w,A){i.info(function(){if(i.g)if(A)for(var k="",X=A.split("&"),de=0;de<X.length;de++){var Q=X[de].split("=");if(1<Q.length){var ve=Q[0];Q=Q[1];var Ee=ve.split("_");k=2<=Ee.length&&Ee[1]=="type"?k+(ve+"="+Q+"&"):k+(ve+"=redacted&")}}else k=null;else k=A;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+u+`
`+l+`
`+k})}function mh(i,u,l,m,w,A,k){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+u+`
`+l+`
`+A+" "+k})}function Mt(i,u,l,m){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+_h(i,l)+(m?" "+m:"")})}function gh(i,u){i.info(function(){return"TIMEOUT: "+u})}En.prototype.info=function(){};function _h(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var m=l[i];if(!(2>m.length)){var w=m[1];if(Array.isArray(w)&&!(1>w.length)){var A=w[0];if(A!="noop"&&A!="stop"&&A!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return Ls(l)}catch{return u}}var sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Us;function ir(){}D(ir,Os),ir.prototype.g=function(){return new XMLHttpRequest},ir.prototype.i=function(){return{}},Us=new ir;function et(i,u,l,m){this.j=i,this.i=u,this.l=l,this.R=m||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mo}function Mo(){this.i=null,this.g="",this.h=!1}var xo={},Fs={};function Bs(i,u,l){i.L=1,i.v=cr(je(u)),i.m=l,i.P=!0,Uo(i,null)}function Uo(i,u){i.F=Date.now(),or(i),i.A=je(i.v);var l=i.A,m=i.R;Array.isArray(m)||(m=[String(m)]),Yo(l.i,"t",m),i.C=0,l=i.j.J,i.h=new Mo,i.g=ga(i.j,l?u:null,!i.m),0<i.O&&(i.M=new hh(b(i.Y,i,i.g),i.O)),u=i.U,l=i.g,m=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(So[0]=w.toString()),w=So);for(var A=0;A<w.length;A++){var k=To(l,w[A],m||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=i.H?h(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),yn(),ph(i.i,i.u,i.A,i.l,i.R,i.m)}et.prototype.ca=function(i){i=i.target;const u=this.M;u&&ze(i)==3?u.j():this.Y(i)},et.prototype.Y=function(i){try{if(i==this.g)e:{const Ee=ze(this.g);var u=this.g.Ba();const Ft=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||ia(this.g)))){this.J||Ee!=4||u==7||(u==8||0>=Ft?yn(3):yn(2)),qs(this);var l=this.g.Z();this.X=l;t:if(Fo(this)){var m=ia(this.g);i="";var w=m.length,A=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wt(this),Tn(this);var k="";break t}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,i+=this.h.i.decode(m[u],{stream:!(A&&u==w-1)});m.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=l==200,mh(this.i,this.u,this.A,this.l,this.R,Ee,l),this.o){if(this.T&&!this.K){t:{if(this.g){var X,de=this.g;if((X=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(X)){var Q=X;break t}}Q=null}if(l=Q)Mt(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,js(this,l);else{this.o=!1,this.s=3,Re(12),wt(this),Tn(this);break e}}if(this.P){l=!0;let Ne;for(;!this.J&&this.C<k.length;)if(Ne=yh(this,k),Ne==Fs){Ee==4&&(this.s=4,Re(14),l=!1),Mt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==xo){this.s=4,Re(15),Mt(this.i,this.l,k,"[Invalid Chunk]"),l=!1;break}else Mt(this.i,this.l,Ne,null),js(this,Ne);if(Fo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||k.length!=0||this.h.h||(this.s=1,Re(16),l=!1),this.o=this.o&&l,!l)Mt(this.i,this.l,k,"[Invalid Chunked Response]"),wt(this),Tn(this);else if(0<k.length&&!this.W){this.W=!0;var ve=this.j;ve.g==this&&ve.ba&&!ve.M&&(ve.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ks(ve),ve.M=!0,Re(11))}}else Mt(this.i,this.l,k,null),js(this,k);Ee==4&&wt(this),this.o&&!this.J&&(Ee==4?da(this.j,this):(this.o=!1,or(this)))}else Oh(this.g),l==400&&0<k.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),wt(this),Tn(this)}}}catch{}finally{}};function Fo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function yh(i,u){var l=i.C,m=u.indexOf(`
`,l);return m==-1?Fs:(l=Number(u.substring(l,m)),isNaN(l)?xo:(m+=1,m+l>u.length?Fs:(u=u.slice(m,m+l),i.C=m+l,u)))}et.prototype.cancel=function(){this.J=!0,wt(this)};function or(i){i.S=Date.now()+i.I,Bo(i,i.I)}function Bo(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=vn(b(i.ba,i),u)}function qs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}et.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(gh(this.i,this.A),this.L!=2&&(yn(),Re(17)),wt(this),this.s=2,Tn(this)):Bo(this,this.S-i)};function Tn(i){i.j.G==0||i.J||da(i.j,i)}function wt(i){qs(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Co(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function js(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||zs(l.h,i))){if(!i.K&&zs(l.h,i)&&l.G==3){try{var m=l.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)mr(l),fr(l);else break e;Ws(l),Re(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=vn(b(l.Za,l),6e3));if(1>=zo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else bt(l,11)}else if((i.K||l.g==i)&&mr(l),!W(u))for(w=l.Da.g.parse(u),u=0;u<w.length;u++){let Q=w[u];if(l.T=Q[0],Q=Q[1],l.G==2)if(Q[0]=="c"){l.K=Q[1],l.ia=Q[2];const ve=Q[3];ve!=null&&(l.la=ve,l.j.info("VER="+l.la));const Ee=Q[4];Ee!=null&&(l.Aa=Ee,l.j.info("SVER="+l.Aa));const Ft=Q[5];Ft!=null&&typeof Ft=="number"&&0<Ft&&(m=1.5*Ft,l.L=m,l.j.info("backChannelRequestTimeoutMs_="+m)),m=l;const Ne=i.g;if(Ne){const _r=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_r){var A=m.h;A.g||_r.indexOf("spdy")==-1&&_r.indexOf("quic")==-1&&_r.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&($s(A,A.h),A.h=null))}if(m.D){const Qs=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(m.ya=Qs,Z(m.I,m.D,Qs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),m=l;var k=i;if(m.qa=ma(m,m.J?m.ia:null,m.W),k.K){$o(m.h,k);var X=k,de=m.L;de&&(X.I=de),X.B&&(qs(X),or(X)),m.g=k}else la(m);0<l.i.length&&pr(l)}else Q[0]!="stop"&&Q[0]!="close"||bt(l,7);else l.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?bt(l,7):Gs(l):Q[0]!="noop"&&l.l&&l.l.ta(Q),l.v=0)}}yn(4)}catch{}}var vh=class{constructor(i,u){this.g=i,this.map=u}};function qo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function zo(i){return i.h?1:i.g?i.g.size:0}function zs(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function $s(i,u){i.g?i.g.add(u):i.h=u}function $o(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}qo.prototype.cancel=function(){if(this.i=Ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ho(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return V(i.i)}function Eh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var u=[],l=i.length,m=0;m<l;m++)u.push(i[m]);return u}u=[],l=0;for(m in i)u[l++]=i[m];return u}function Th(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const m in i)u[l++]=m;return u}}}function Go(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=Th(i),m=Eh(i),w=m.length,A=0;A<w;A++)u.call(void 0,m[A],l&&l[A],i)}var Wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ih(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var m=i[l].indexOf("="),w=null;if(0<=m){var A=i[l].substring(0,m);w=i[l].substring(m+1)}else A=i[l];u(A,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function At(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof At){this.h=i.h,ar(this,i.j),this.o=i.o,this.g=i.g,ur(this,i.s),this.l=i.l;var u=i.i,l=new An;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),Ko(this,l),this.m=i.m}else i&&(u=String(i).match(Wo))?(this.h=!1,ar(this,u[1]||"",!0),this.o=In(u[2]||""),this.g=In(u[3]||"",!0),ur(this,u[4]),this.l=In(u[5]||"",!0),Ko(this,u[6]||"",!0),this.m=In(u[7]||"")):(this.h=!1,this.i=new An(null,this.h))}At.prototype.toString=function(){var i=[],u=this.j;u&&i.push(wn(u,Qo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(wn(u,Qo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(wn(l,l.charAt(0)=="/"?bh:Ah,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",wn(l,Sh)),i.join("")};function je(i){return new At(i)}function ar(i,u,l){i.j=l?In(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function ur(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Ko(i,u,l){u instanceof An?(i.i=u,Ch(i.i,i.h)):(l||(u=wn(u,Rh)),i.i=new An(u,i.h))}function Z(i,u,l){i.i.set(u,l)}function cr(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function In(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function wn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,wh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function wh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Qo=/[#\/\?@]/g,Ah=/[#\?:]/g,bh=/[#\?]/g,Rh=/[#\?@]/g,Sh=/#/g;function An(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function tt(i){i.g||(i.g=new Map,i.h=0,i.i&&Ih(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=An.prototype,n.add=function(i,u){tt(this),this.i=null,i=xt(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function Jo(i,u){tt(i),u=xt(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Xo(i,u){return tt(i),u=xt(i,u),i.g.has(u)}n.forEach=function(i,u){tt(this),this.g.forEach(function(l,m){l.forEach(function(w){i.call(u,w,m,this)},this)},this)},n.na=function(){tt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let m=0;m<u.length;m++){const w=i[m];for(let A=0;A<w.length;A++)l.push(u[m])}return l},n.V=function(i){tt(this);let u=[];if(typeof i=="string")Xo(this,i)&&(u=u.concat(this.g.get(xt(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return tt(this),this.i=null,i=xt(this,i),Xo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Yo(i,u,l){Jo(i,u),0<l.length&&(i.i=null,i.g.set(xt(i,u),V(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var m=u[l];const A=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var w=A;k[m]!==""&&(w+="="+encodeURIComponent(String(k[m]))),i.push(w)}}return this.i=i.join("&")};function xt(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Ch(i,u){u&&!i.j&&(tt(i),i.i=null,i.g.forEach(function(l,m){var w=m.toLowerCase();m!=w&&(Jo(this,m),Yo(this,w,l))},i)),i.j=u}function Ph(i,u){const l=new En;if(c.Image){const m=new Image;m.onload=S(nt,l,"TestLoadImage: loaded",!0,u,m),m.onerror=S(nt,l,"TestLoadImage: error",!1,u,m),m.onabort=S(nt,l,"TestLoadImage: abort",!1,u,m),m.ontimeout=S(nt,l,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else u(!1)}function kh(i,u){const l=new En,m=new AbortController,w=setTimeout(()=>{m.abort(),nt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:m.signal}).then(A=>{clearTimeout(w),A.ok?nt(l,"TestPingServer: ok",!0,u):nt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),nt(l,"TestPingServer: error",!1,u)})}function nt(i,u,l,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(l)}catch{}}function Nh(){this.g=new fh}function Dh(i,u,l){const m=l||"";try{Go(i,function(w,A){let k=w;p(w)&&(k=Ls(w)),u.push(m+A+"="+encodeURIComponent(k))})}catch(w){throw u.push(m+"type="+encodeURIComponent("_badmap")),w}}function lr(i){this.l=i.Ub||null,this.j=i.eb||!1}D(lr,Os),lr.prototype.g=function(){return new hr(this.l,this.j)},lr.prototype.i=function(i){return function(){return i}}({});function hr(i,u){ye.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(hr,ye),n=hr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Rn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?bn(this):Rn(this),this.readyState==3&&Zo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,bn(this))},n.Qa=function(i){this.g&&(this.response=i,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Rn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function Rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ea(i){let u="";return P(i,function(l,m){u+=m,u+=":",u+=l,u+=`\r
`}),u}function Hs(i,u,l){e:{for(m in l){var m=!1;break e}m=!0}m||(l=ea(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Z(i,u,l))}function re(i){ye.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(re,ye);var Vh=/^https?$/i,Lh=["POST","PUT"];n=re.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Us.g(),this.v=this.o?Po(this.o):Po(Us),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(A){ta(this,A);return}if(i=l||"",l=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)l.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const A of m.keys())l.set(A,m.get(A));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),w=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Lh,u,void 0))||m||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,k]of l)this.g.setRequestHeader(A,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sa(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){ta(this,A)}};function ta(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,na(i),dr(i)}function na(i){i.A||(i.A=!0,be(i,"complete"),be(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,be(this,"complete"),be(this,"abort"),dr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ra(this):this.bb())},n.bb=function(){ra(this)};function ra(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ze(i)!=4||i.Z()!=2)){if(i.u&&ze(i)==4)bo(i.Ea,0,i);else if(be(i,"readystatechange"),ze(i)==4){i.h=!1;try{const k=i.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var l;if(!(l=u)){var m;if(m=k===0){var w=String(i.D).match(Wo)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),m=!Vh.test(w?w.toLowerCase():"")}l=m}if(l)be(i,"complete"),be(i,"success");else{i.m=6;try{var A=2<ze(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",na(i)}}finally{dr(i)}}}}function dr(i,u){if(i.g){sa(i);const l=i.g,m=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||be(i,"ready");try{l.onreadystatechange=m}catch{}}}function sa(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function ze(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),dh(u)}};function ia(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Oh(i){const u={};i=(i.g&&2<=ze(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(W(i[m]))continue;var l=T(i[m]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=u[w]||[];u[w]=A,A.push(l)}_(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function oa(i){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sn("baseRetryDelayMs",5e3,i),this.cb=Sn("retryDelaySeedMs",1e4,i),this.Wa=Sn("forwardChannelMaxRetries",2,i),this.wa=Sn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new qo(i&&i.concurrentRequestLimit),this.Da=new Nh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=oa.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,m){Re(0),this.W=i,this.H=u||{},l&&m!==void 0&&(this.H.OSID=l,this.H.OAID=m),this.F=this.X,this.I=ma(this,null,this.W),pr(this)};function Gs(i){if(aa(i),i.G==3){var u=i.U++,l=je(i.I);if(Z(l,"SID",i.K),Z(l,"RID",u),Z(l,"TYPE","terminate"),Cn(i,l),u=new et(i,i.j,u),u.L=2,u.v=cr(je(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=ga(u.j,null),u.g.ea(u.v)),u.F=Date.now(),or(u)}pa(i)}function fr(i){i.g&&(Ks(i),i.g.cancel(),i.g=null)}function aa(i){fr(i),i.u&&(c.clearTimeout(i.u),i.u=null),mr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function pr(i){if(!jo(i.h)&&!i.s){i.s=!0;var u=i.Ga;fn||Eo(),pn||(fn(),pn=!0),Rs.add(u,i),i.B=0}}function Mh(i,u){return zo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=vn(b(i.Ga,i,u),fa(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new et(this,this.j,i);let A=this.o;if(this.S&&(A?(A=h(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(w.H=A,A=null),this.P)e:{for(var u=0,l=0;l<this.i.length;l++){t:{var m=this.i[l];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=l;break e}if(u===4096||l===this.i.length-1){u=l+1;break e}}u=1e3}else u=1e3;u=ca(this,w,u),l=je(this.I),Z(l,"RID",i),Z(l,"CVER",22),this.D&&Z(l,"X-HTTP-Session-Id",this.D),Cn(this,l),A&&(this.O?u="headers="+encodeURIComponent(String(ea(A)))+"&"+u:this.m&&Hs(l,this.m,A)),$s(this.h,w),this.Ua&&Z(l,"TYPE","init"),this.P?(Z(l,"$req",u),Z(l,"SID","null"),w.T=!0,Bs(w,l,null)):Bs(w,l,u),this.G=2}}else this.G==3&&(i?ua(this,i):this.i.length==0||jo(this.h)||ua(this))};function ua(i,u){var l;u?l=u.l:l=i.U++;const m=je(i.I);Z(m,"SID",i.K),Z(m,"RID",l),Z(m,"AID",i.T),Cn(i,m),i.m&&i.o&&Hs(m,i.m,i.o),l=new et(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=ca(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),$s(i.h,l),Bs(l,m,u)}function Cn(i,u){i.H&&P(i.H,function(l,m){Z(u,m,l)}),i.l&&Go({},function(l,m){Z(u,m,l)})}function ca(i,u,l){l=Math.min(i.i.length,l);var m=i.l?b(i.l.Na,i.l,i):null;e:{var w=i.i;let A=-1;for(;;){const k=["count="+l];A==-1?0<l?(A=w[0].g,k.push("ofs="+A)):A=0:k.push("ofs="+A);let X=!0;for(let de=0;de<l;de++){let Q=w[de].g;const ve=w[de].map;if(Q-=A,0>Q)A=Math.max(0,w[de].g-100),X=!1;else try{Dh(ve,k,"req"+Q+"_")}catch{m&&m(ve)}}if(X){m=k.join("&");break e}}}return i=i.i.splice(0,l),u.D=i,m}function la(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;fn||Eo(),pn||(fn(),pn=!0),Rs.add(u,i),i.v=0}}function Ws(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=vn(b(i.Fa,i),fa(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ha(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=vn(b(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),fr(this),ha(this))};function Ks(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ha(i){i.g=new et(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=je(i.qa);Z(u,"RID","rpc"),Z(u,"SID",i.K),Z(u,"AID",i.T),Z(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(u,"TO",i.ja),Z(u,"TYPE","xmlhttp"),Cn(i,u),i.m&&i.o&&Hs(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=cr(je(u)),l.m=null,l.P=!0,Uo(l,i)}n.Za=function(){this.C!=null&&(this.C=null,fr(this),Ws(this),Re(19))};function mr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function da(i,u){var l=null;if(i.g==u){mr(i),Ks(i),i.g=null;var m=2}else if(zs(i.h,u))l=u.D,$o(i.h,u),m=1;else return;if(i.G!=0){if(u.o)if(m==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var w=i.B;m=rr(),be(m,new Lo(m,l)),pr(i)}else la(i);else if(w=u.s,w==3||w==0&&0<u.X||!(m==1&&Mh(i,u)||m==2&&Ws(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),w){case 1:bt(i,5);break;case 4:bt(i,10);break;case 3:bt(i,6);break;default:bt(i,2)}}}function fa(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function bt(i,u){if(i.j.info("Error code "+u),u==2){var l=b(i.fb,i),m=i.Xa;const w=!m;m=new At(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ar(m,"https"),cr(m),w?Ph(m.toString(),l):kh(m.toString(),l)}else Re(2);i.G=0,i.l&&i.l.sa(u),pa(i),aa(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function pa(i){if(i.G=0,i.ka=[],i.l){const u=Ho(i.h);(u.length!=0||i.i.length!=0)&&(N(i.ka,u),N(i.ka,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.ra()}}function ma(i,u,l){var m=l instanceof At?je(l):new At(l);if(m.g!="")u&&(m.g=u+"."+m.g),ur(m,m.s);else{var w=c.location;m=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var A=new At(null);m&&ar(A,m),u&&(A.g=u),w&&ur(A,w),l&&(A.l=l),m=A}return l=i.D,u=i.ya,l&&u&&Z(m,l,u),Z(m,"VER",i.la),Cn(i,m),m}function ga(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new re(new lr({eb:l})):new re(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _a(){}n=_a.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function gr(){}gr.prototype.g=function(i,u){return new Ce(i,u)};function Ce(i,u){ye.call(this),this.g=new oa(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!W(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ut(this)}D(Ce,ye),Ce.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){Gs(this.g)},Ce.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Ls(i),i=l);u.i.push(new vh(u.Ya++,i)),u.G==3&&pr(u)},Ce.prototype.N=function(){this.g.l=null,delete this.j,Gs(this.g),delete this.g,Ce.aa.N.call(this)};function ya(i){Ms.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){e:{for(const l in u){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}D(ya,Ms);function va(){xs.call(this),this.status=1}D(va,xs);function Ut(i){this.g=i}D(Ut,_a),Ut.prototype.ua=function(){be(this.g,"a")},Ut.prototype.ta=function(i){be(this.g,new ya(i))},Ut.prototype.sa=function(i){be(this.g,new va)},Ut.prototype.ra=function(){be(this.g,"b")},gr.prototype.createWebChannel=gr.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,uc=function(){return new gr},ac=function(){return rr()},oc=It,fi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Sr=sr,Oo.COMPLETE="complete",ic=Oo,ko.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",ye.prototype.listen=ye.prototype.K,Pn=ko,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,sc=re}).apply(typeof vr<"u"?vr:typeof self<"u"?self:typeof window<"u"?window:{});const Na="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Di("@firebase/firestore");function Bt(){return kt.logLevel}function L(n,...e){if(kt.logLevel<=z.DEBUG){const t=e.map(Oi);kt.debug(`Firestore (${un}): ${n}`,...t)}}function Ke(n,...e){if(kt.logLevel<=z.ERROR){const t=e.map(Oi);kt.error(`Firestore (${un}): ${n}`,...t)}}function Xt(n,...e){if(kt.logLevel<=z.WARN){const t=e.map(Oi);kt.warn(`Firestore (${un}): ${n}`,...t)}}function Oi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const e=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: `+n;throw Ke(e),new Error(e)}function J(n,e){n||x()}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ye{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}}class If{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wf{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0);let r=this.i;const s=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let o=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new cc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Ie(e)}}class Af{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class bf{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Af(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sf{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){J(this.o===void 0);const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new Rf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Cf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function Yt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new ce(0,0))}static max(){return new F(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Le?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=Le.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Le.isNumericId(e),s=Le.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Le.extractNumericId(e).compare(Le.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pt.fromString(e.substring(4,e.length-2))}}class ee extends Le{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const Pf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Le{construct(e,t,r){return new me(e,t,r)}static isValidIdentifier(e){return Pf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ee.fromString(e))}static fromName(e){return new M(ee.fromString(e).popFirst(5))}static empty(){return new M(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ee(e.slice()))}}function kf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new _t(s,M.empty(),e)}function Nf(n){return new _t(n.readTime,n.key,-1)}class _t{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new _t(F.min(),M.empty(),-1)}static max(){return new _t(F.max(),M.empty(),-1)}}function Df(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Vf)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,o=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&t()},d=>r(d))}),a=!0,o===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const o=e.length,a=new Array(o);let c=0;for(let d=0;d<o;d++){const p=d;t(e[p]).next(E=>{a[p]=E,++c,c===o&&r(a)},E=>s(E))}})}static doWhile(e,t){return new R((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Of(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}as.oe=-1;function us(n){return n==null}function jr(n){return n===0&&1/n==-1/0}function Mf(n){return typeof n=="number"&&Number.isInteger(n)&&!jr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Da(e)),e=Uf(n.get(t),e);return Da(e)}function Uf(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function Da(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Er(this.root,e,this.comparator,!1)}getReverseIterator(){return new Er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Er(this.root,e,this.comparator,!0)}}class Er{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??fe.RED,this.left=s??fe.EMPTY,this.right=o??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new fe(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,s,o){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new La(this.data.getIterator())}getIteratorFrom(e){return new La(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class La{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new De([])}unionWith(e){let t=new le(me.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new dc("Invalid base64 string: "+o):o}}(e);return new ge(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const Ff=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yt(n){if(J(!!n),typeof n=="string"){let e=0;const t=Ff.exec(n);if(J(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ie(n.seconds),nanos:ie(n.nanos)}}function ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vt(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function cs(n){const e=n.mapValue.fields.__previous_value__;return Mi(e)?cs(e):e}function Un(n){const e=yt(n.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,r,s,o,a,c,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=p}}class Fn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Et(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mi(n)?4:jf(n)?9007199254740991:qf(n)?10:11:x()}function Be(n,e){if(n===e)return!0;const t=Et(n);if(t!==Et(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Un(n).isEqual(Un(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=yt(s.timestampValue),c=yt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return vt(s.bytesValue).isEqual(vt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return ie(s.geoPointValue.latitude)===ie(o.geoPointValue.latitude)&&ie(s.geoPointValue.longitude)===ie(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ie(s.integerValue)===ie(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ie(s.doubleValue),c=ie(o.doubleValue);return a===c?jr(a)===jr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Yt(n.arrayValue.values||[],e.arrayValue.values||[],Be);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Va(a)!==Va(c))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!Be(a[d],c[d])))return!1;return!0}(n,e);default:return x()}}function Bn(n,e){return(n.values||[]).find(t=>Be(t,e))!==void 0}function Zt(n,e){if(n===e)return 0;const t=Et(n),r=Et(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=ie(o.integerValue||o.doubleValue),d=ie(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,e);case 3:return Oa(n.timestampValue,e.timestampValue);case 4:return Oa(Un(n),Un(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(o,a){const c=vt(o),d=vt(a);return c.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),d=a.split("/");for(let p=0;p<c.length&&p<d.length;p++){const E=H(c[p],d[p]);if(E!==0)return E}return H(c.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=H(ie(o.latitude),ie(a.latitude));return c!==0?c:H(ie(o.longitude),ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ma(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,d,p,E;const I=o.fields||{},b=a.fields||{},S=(c=I.value)===null||c===void 0?void 0:c.arrayValue,D=(d=b.value)===null||d===void 0?void 0:d.arrayValue,V=H(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((E=D==null?void 0:D.values)===null||E===void 0?void 0:E.length)||0);return V!==0?V:Ma(S,D)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Tr.mapValue&&a===Tr.mapValue)return 0;if(o===Tr.mapValue)return 1;if(a===Tr.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),p=a.fields||{},E=Object.keys(p);d.sort(),E.sort();for(let I=0;I<d.length&&I<E.length;++I){const b=H(d[I],E[I]);if(b!==0)return b;const S=Zt(c[d[I]],p[E[I]]);if(S!==0)return S}return H(d.length,E.length)}(n.mapValue,e.mapValue);default:throw x()}}function Oa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=yt(n),r=yt(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function Ma(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=Zt(t[s],r[s]);if(o)return o}return H(t.length,r.length)}function en(n){return pi(n)}function pi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=yt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return vt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=pi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${pi(t.fields[a])}`;return s+"}"}(n.mapValue):x()}function Cr(n){switch(Et(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cs(n);return e?16+Cr(e):16;case 5:return 2*n.stringValue.length;case 6:return vt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Cr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Dt(r.fields,(o,a)=>{s+=o.length+Cr(a)}),s}(n.mapValue);default:throw x()}}function mi(n){return!!n&&"integerValue"in n}function xi(n){return!!n&&"arrayValue"in n}function xa(n){return!!n&&"nullValue"in n}function Ua(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pr(n){return!!n&&"mapValue"in n}function qf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Dt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Dn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Dn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function jf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dn(t)}setAll(e){let t=me.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const d=this.getFieldsMap(t);this.applyChanges(d,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Dn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Pr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Be(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Pr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Dt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Pe(Dn(this.value))}}function fc(n){const e=[];return Dt(n.fields,(t,r)=>{const s=new me([t]);if(Pr(r)){const o=fc(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new De(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,r,s,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new we(e,0,F.min(),F.min(),F.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,s){return new we(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new we(e,2,t,F.min(),F.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new we(e,3,t,F.min(),F.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.position=e,this.inclusive=t}}function Fa(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Zt(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ba(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Be(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t="asc"){this.field=e,this.dir=t}}function zf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{}class ue extends pc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Hf(e,t,r):t==="array-contains"?new Kf(e,r):t==="in"?new Qf(e,r):t==="not-in"?new Jf(e,r):t==="array-contains-any"?new Xf(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Gf(e,r):new Wf(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Zt(t,this.value)):t!==null&&Et(this.value)===Et(t)&&this.matchesComparison(Zt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends pc{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new qe(e,t)}matches(e){return mc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mc(n){return n.op==="and"}function gc(n){return $f(n)&&mc(n)}function $f(n){for(const e of n.filters)if(e instanceof qe)return!1;return!0}function gi(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+en(n.value);if(gc(n))return n.filters.map(e=>gi(e)).join(",");{const e=n.filters.map(t=>gi(t)).join(",");return`${n.op}(${e})`}}function _c(n,e){return n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&Be(r.value,s.value)}(n,e):n instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&_c(a,s.filters[c]),!0):!1}(n,e):void x()}function yc(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${en(t.value)}`}(n):n instanceof qe?function(t){return t.op.toString()+" {"+t.getFilters().map(yc).join(" ,")+"}"}(n):"Filter"}class Hf extends ue{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gf extends ue{constructor(e,t){super(e,"in",t),this.keys=vc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Wf extends ue{constructor(e,t){super(e,"not-in",t),this.keys=vc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Kf extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xi(t)&&Bn(t.arrayValue,this.value)}}class Qf extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bn(this.value.arrayValue,t)}}class Jf extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Bn(this.value.arrayValue,t)}}class Xf extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Bn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t=null,r=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function qa(n,e=null,t=[],r=[],s=null,o=null,a=null){return new Yf(n,e,t,r,s,o,a)}function Ui(n){const e=B(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>gi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),us(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>en(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>en(r)).join(",")),e.ue=t}return e.ue}function Fi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_c(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ba(n.startAt,e.startAt)&&Ba(n.endAt,e.endAt)}function _i(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t=null,r=[],s=[],o=null,a="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Zf(n,e,t,r,s,o,a,c){return new ls(n,e,t,r,s,o,a,c)}function Ec(n){return new ls(n)}function ja(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ep(n){return n.collectionGroup!==null}function Vn(n){const e=B(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new le(me.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new $r(o,r))}),t.has(me.keyField().canonicalString())||e.ce.push(new $r(me.keyField(),r))}return e.ce}function Oe(n){const e=B(n);return e.le||(e.le=tp(e,Vn(n))),e.le}function tp(n,e){if(n.limitType==="F")return qa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new $r(s.field,o)});const t=n.endAt?new zr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zr(n.startAt.position,n.startAt.inclusive):null;return qa(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function yi(n,e,t){return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function hs(n,e){return Fi(Oe(n),Oe(e))&&n.limitType===e.limitType}function Tc(n){return`${Ui(Oe(n))}|lt:${n.limitType}`}function qt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>yc(s)).join(", ")}]`),us(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>en(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>en(s)).join(",")),`Target(${r})`}(Oe(n))}; limitType=${n.limitType})`}function ds(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of Vn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,d){const p=Fa(a,c,d);return a.inclusive?p<=0:p<0}(r.startAt,Vn(r),s)||r.endAt&&!function(a,c,d){const p=Fa(a,c,d);return a.inclusive?p>=0:p>0}(r.endAt,Vn(r),s))}(n,e)}function np(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ic(n){return(e,t)=>{let r=!1;for(const s of Vn(n)){const o=rp(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function rp(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,c){const d=a.data.field(o),p=c.data.field(o);return d!==null&&p!==null?Zt(d,p):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return hc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new ne(M.comparator);function Qe(){return sp}const wc=new ne(M.comparator);function kn(...n){let e=wc;for(const t of n)e=e.insert(t.key,t);return e}function Ac(n){let e=wc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function St(){return Ln()}function bc(){return Ln()}function Ln(){return new Vt(n=>n.toString(),(n,e)=>n.isEqual(e))}const ip=new ne(M.comparator),op=new le(M.comparator);function $(...n){let e=op;for(const t of n)e=e.add(t);return e}const ap=new le(H);function up(){return ap}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(e)?"-0":e}}function Rc(n){return{integerValue:""+n}}function cp(n,e){return Mf(e)?Rc(e):Bi(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this._=void 0}}function lp(n,e,t){return n instanceof Hr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Mi(o)&&(o=cs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof qn?Cc(n,e):n instanceof jn?Pc(n,e):function(s,o){const a=Sc(s,o),c=za(a)+za(s.Pe);return mi(a)&&mi(s.Pe)?Rc(c):Bi(s.serializer,c)}(n,e)}function hp(n,e,t){return n instanceof qn?Cc(n,e):n instanceof jn?Pc(n,e):t}function Sc(n,e){return n instanceof Gr?function(r){return mi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Hr extends fs{}class qn extends fs{constructor(e){super(),this.elements=e}}function Cc(n,e){const t=kc(e);for(const r of n.elements)t.some(s=>Be(s,r))||t.push(r);return{arrayValue:{values:t}}}class jn extends fs{constructor(e){super(),this.elements=e}}function Pc(n,e){let t=kc(e);for(const r of n.elements)t=t.filter(s=>!Be(s,r));return{arrayValue:{values:t}}}class Gr extends fs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function za(n){return ie(n.integerValue||n.doubleValue)}function kc(n){return xi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function dp(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof qn&&s instanceof qn||r instanceof jn&&s instanceof jn?Yt(r.elements,s.elements,Be):r instanceof Gr&&s instanceof Gr?Be(r.Pe,s.Pe):r instanceof Hr&&s instanceof Hr}(n.transform,e.transform)}class fp{constructor(e,t){this.version=e,this.transformResults=t}}class Me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ps{}function Nc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qi(n.key,Me.none()):new Gn(n.key,n.data,Me.none());{const t=n.data,r=Pe.empty();let s=new le(me.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Lt(n.key,r,new De(s.toArray()),Me.none())}}function pp(n,e,t){n instanceof Gn?function(s,o,a){const c=s.value.clone(),d=Ha(s.fieldTransforms,o,a.transformResults);c.setAll(d),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Lt?function(s,o,a){if(!kr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Ha(s.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(Dc(s)),d.setAll(c),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function On(n,e,t,r){return n instanceof Gn?function(o,a,c,d){if(!kr(o.precondition,a))return c;const p=o.value.clone(),E=Ga(o.fieldTransforms,d,a);return p.setAll(E),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof Lt?function(o,a,c,d){if(!kr(o.precondition,a))return c;const p=Ga(o.fieldTransforms,d,a),E=a.data;return E.setAll(Dc(o)),E.setAll(p),a.convertToFoundDocument(a.version,E).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,c){return kr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function mp(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Sc(r.transform,s||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(r.field,o))}return t||null}function $a(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Yt(r,s,(o,a)=>dp(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gn extends ps{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lt extends ps{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Dc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ha(n,e,t){const r=new Map;J(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,c=e.data.field(o.field);r.set(o.field,hp(a,c,t[s]))}return r}function Ga(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,lp(o,a,e))}return r}class qi extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gp extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&pp(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=On(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=On(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bc();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(s.key)?null:c;const d=Nc(a,c);d!==null&&r.set(s.key,d),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&Yt(this.mutations,e.mutations,(t,r)=>$a(t,r))&&Yt(this.baseMutations,e.baseMutations,(t,r)=>$a(t,r))}}class ji{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length);let s=function(){return ip}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ji(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,G;function Ep(n){switch(n){default:return x();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Vc(n){if(n===void 0)return Ke("GRPC error has no .code"),C.UNKNOWN;switch(n){case oe.OK:return C.OK;case oe.CANCELLED:return C.CANCELLED;case oe.UNKNOWN:return C.UNKNOWN;case oe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case oe.INTERNAL:return C.INTERNAL;case oe.UNAVAILABLE:return C.UNAVAILABLE;case oe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case oe.NOT_FOUND:return C.NOT_FOUND;case oe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case oe.ABORTED:return C.ABORTED;case oe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case oe.DATA_LOSS:return C.DATA_LOSS;default:return x()}}(G=oe||(oe={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new pt([4294967295,4294967295],0);function Wa(n){const e=Tp().encode(n),t=new rc;return t.update(e),new Uint8Array(t.digest())}function Ka(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new pt([t,r],0),new pt([s,o],0)]}class zi{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Nn(`Invalid padding: ${t}`);if(r<0)throw new Nn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Nn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Nn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=pt.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(pt.fromNumber(r)));return s.compare(Ip)===1&&(s=new pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Wa(e),[r,s]=Ka(t);for(let o=0;o<this.hashCount;o++){const a=this.de(r,s,o);if(!this.Ee(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new zi(o,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=Wa(e),[r,s]=Ka(t);for(let o=0;o<this.hashCount;o++){const a=this.de(r,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Wn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ms(F.min(),s,new ne(H),Qe(),$())}}class Wn{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Wn(r,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Lc{constructor(e,t){this.targetId=e,this.me=t}}class Oc{constructor(e,t,r=ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Qa{constructor(){this.fe=0,this.ge=Ja(),this.pe=ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=$(),t=$(),r=$();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:x()}}),new Wn(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ja()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wp{constructor(e){this.Be=e,this.Le=new Map,this.ke=Qe(),this.qe=Ir(),this.Qe=Ir(),this.Ke=new ne(H)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const o=s.target;if(_i(o))if(r===0){const a=new M(o.path);this.We(t,a,we.newNoDocument(a,F.min()))}else J(r===1);else{const a=this.Ze(t);if(a!==r){const c=this.Xe(e),d=c?this.et(c,e,a):1;if(d!==0){this.He(t);const p=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,c;try{a=vt(r).toUint8Array()}catch(d){if(d instanceof dc)return Xt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new zi(a,s,o)}catch(d){return Xt(d instanceof Nn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Be.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.We(t,o,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((o,a)=>{const c=this.Ye(a);if(c){if(o.current&&_i(c.target)){const d=new M(c.target.path);this.st(d).has(a)||this.ot(a,d)||this.We(a,d,we.newNoDocument(d,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=$();this.Qe.forEach((o,a)=>{let c=!0;a.forEachWhile(d=>{const p=this.Ye(d);return!p||p.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new ms(e,t,this.Ke,this.ke,r);return this.ke=Qe(),this.qe=Ir(),this.Qe=Ir(),this.Ke=new ne(H),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Qa,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new le(H),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new le(H),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Qa),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Ir(){return new ne(M.comparator)}function Ja(){return new ne(M.comparator)}const Ap={asc:"ASCENDING",desc:"DESCENDING"},bp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rp={and:"AND",or:"OR"};class Sp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vi(n,e){return n.useProto3Json||us(e)?e:{value:e}}function Wr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cp(n,e){return Wr(n,e.toTimestamp())}function xe(n){return J(!!n),F.fromTimestamp(function(t){const r=yt(t);return new ce(r.seconds,r.nanos)}(n))}function $i(n,e){return Ei(n,e).canonicalString()}function Ei(n,e){const t=function(s){return new ee(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xc(n){const e=ee.fromString(n);return J(jc(e)),e}function Ti(n,e){return $i(n.databaseId,e.path)}function ni(n,e){const t=xc(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Fc(t))}function Uc(n,e){return $i(n.databaseId,e)}function Pp(n){const e=xc(n);return e.length===4?ee.emptyPath():Fc(e)}function Ii(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fc(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xa(n,e,t){return{name:Ti(n,e),fields:t.value.mapValue.fields}}function kp(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(p,E){return p.useProto3Json?(J(E===void 0||typeof E=="string"),ge.fromBase64String(E||"")):(J(E===void 0||E instanceof Buffer||E instanceof Uint8Array),ge.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(p){const E=p.code===void 0?C.UNKNOWN:Vc(p.code);return new O(E,p.message||"")}(a);t=new Oc(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ni(n,r.document.name),o=xe(r.document.updateTime),a=r.document.createTime?xe(r.document.createTime):F.min(),c=new Pe({mapValue:{fields:r.document.fields}}),d=we.newFoundDocument(s,o,a,c),p=r.targetIds||[],E=r.removedTargetIds||[];t=new Nr(p,E,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ni(n,r.document),o=r.readTime?xe(r.readTime):F.min(),a=we.newNoDocument(s,o),c=r.removedTargetIds||[];t=new Nr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ni(n,r.document),o=r.removedTargetIds||[];t=new Nr([],o,s,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new vp(s,o),c=r.targetId;t=new Lc(c,a)}}return t}function Np(n,e){let t;if(e instanceof Gn)t={update:Xa(n,e.key,e.value)};else if(e instanceof qi)t={delete:Ti(n,e.key)};else if(e instanceof Lt)t={update:Xa(n,e.key,e.data),updateMask:Bp(e.fieldMask)};else{if(!(e instanceof gp))return x();t={verify:Ti(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Hr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof jn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Gr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Cp(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,e.precondition)),t}function Dp(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(s,o){let a=s.updateTime?xe(s.updateTime):xe(o);return a.isEqual(F.min())&&(a=xe(o)),new fp(a,s.transformResults||[])}(t,e))):[]}function Vp(n,e){return{documents:[Uc(n,e.path)]}}function Lp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Uc(n,s);const o=function(p){if(p.length!==0)return qc(qe.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(p){if(p.length!==0)return p.map(E=>function(b){return{field:jt(b.field),direction:xp(b.dir)}}(E))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=vi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ct:t,parent:s}}function Op(n){let e=Pp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1);const E=t.from[0];E.allDescendants?s=E.collectionId:e=e.child(E.collectionId)}let o=[];t.where&&(o=function(I){const b=Bc(I);return b instanceof qe&&gc(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(b=>function(D){return new $r(zt(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(b))}(t.orderBy));let c=null;t.limit&&(c=function(I){let b;return b=typeof I=="object"?I.value:I,us(b)?null:b}(t.limit));let d=null;t.startAt&&(d=function(I){const b=!!I.before,S=I.values||[];return new zr(S,b)}(t.startAt));let p=null;return t.endAt&&(p=function(I){const b=!I.before,S=I.values||[];return new zr(S,b)}(t.endAt)),Zf(e,s,a,o,c,"F",d,p)}function Mp(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zt(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zt(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=zt(t.unaryFilter.field);return ue.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zt(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(zt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return qe.create(t.compositeFilter.filters.map(r=>Bc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function xp(n){return Ap[n]}function Up(n){return bp[n]}function Fp(n){return Rp[n]}function jt(n){return{fieldPath:n.canonicalString()}}function zt(n){return me.fromServerFormat(n.fieldPath)}function qc(n){return n instanceof ue?function(t){if(t.op==="=="){if(Ua(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NAN"}};if(xa(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ua(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NAN"}};if(xa(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jt(t.field),op:Up(t.op),value:t.value}}}(n):n instanceof qe?function(t){const r=t.getFilters().map(s=>qc(s));return r.length===1?r[0]:{compositeFilter:{op:Fp(t.op),filters:r}}}(n):x()}function Bp(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t,r,s,o=F.min(),a=F.min(),c=ge.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.ht=e}}function jp(n){const e=Op({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.ln=new $p}addToCollectionParentIndex(e,t){return this.ln.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(_t.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(_t.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class $p{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new le(ee.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new le(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Se{static withCacheSize(e){return new Se(e,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se.DEFAULT_COLLECTION_PERCENTILE=10,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Se.DEFAULT=new Se(41943040,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Se.DISABLED=new Se(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new tn(0)}static Qn(){return new tn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class Hp{constructor(e){this.Gn=e,this.buffer=new le(Za),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Za(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gp{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){L("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ln(t)?L("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await cn(t)}await this.Yn(3e5)})}}class Wp{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(as.oe);const r=new Hp(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Ya)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ya):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,o,a,c,d,p;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(e,s))).next(I=>(r=I,c=Date.now(),this.removeTargets(e,r,t))).next(I=>(o=I,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(I=>(p=Date.now(),Bt()<=z.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-E}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(d-c)+`ms
	Removed ${I} documents in `+(p-d)+`ms
Total Duration: ${p-E}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I})))}}function Kp(n,e){return new Wp(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.changes=new Vt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&On(r.mutation,s,De.empty(),ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,$()).next(()=>r))}getLocalViewOfDocuments(e,t,r=$()){const s=St();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=kn();return o.forEach((c,d)=>{a=a.insert(c,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=St();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,$()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let o=Qe();const a=Ln(),c=function(){return Ln()}();return t.forEach((d,p)=>{const E=r.get(p.key);s.has(p.key)&&(E===void 0||E.mutation instanceof Lt)?o=o.insert(p.key,p):E!==void 0?(a.set(p.key,E.mutation.getFieldMask()),On(E.mutation,p,E.mutation.getFieldMask(),ce.now())):a.set(p.key,De.empty())}),this.recalculateAndSaveOverlays(e,o).next(d=>(d.forEach((p,E)=>a.set(p,E)),t.forEach((p,E)=>{var I;return c.set(p,new Jp(E,(I=a.get(p))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Ln();let s=new ne((a,c)=>a-c),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(d=>{const p=t.get(d);if(p===null)return;let E=r.get(d)||De.empty();E=c.applyToLocalView(p,E),r.set(d,E);const I=(s.get(c.batchId)||$()).add(d);s=s.insert(c.batchId,I)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),p=d.key,E=d.value,I=bc();E.forEach(b=>{if(!o.has(b)){const S=Nc(t.get(b),r.get(b));S!==null&&I.set(b,S),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,p,I))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ep(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):R.resolve(St());let c=-1,d=o;return a.next(p=>R.forEach(p,(E,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(E)?R.resolve():this.remoteDocumentCache.getEntry(e,E).next(b=>{d=d.insert(E,b)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,d,p,$())).next(E=>({batchId:c,changes:Ac(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=kn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=kn();return this.indexManager.getCollectionParents(e,o).next(c=>R.forEach(c,d=>{const p=function(I,b){return new ls(b,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,r,s).next(E=>{E.forEach((I,b)=>{a=a.insert(I,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((d,p)=>{const E=p.getKey();a.get(E)===null&&(a=a.insert(E,we.newInvalidDocument(E)))});let c=kn();return a.forEach((d,p)=>{const E=o.get(d);E!==void 0&&On(E.mutation,p,De.empty(),ce.now()),ds(t,p)&&(c=c.insert(d,p))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return R.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:xe(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:jp(s.bundledQuery),readTime:xe(s.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.overlays=new ne(M.comparator),this.dr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=St();return R.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.Tt(e,t,o)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.dr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=St(),o=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const d=c.getNext().value,p=d.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new ne((p,E)=>p-E);const a=this.overlays.getIterator();for(;a.hasNext();){const p=a.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let E=o.get(p.largestBatchId);E===null&&(E=St(),o=o.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const c=St(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,E)=>c.set(p,E)),!(c.size()>=s)););return R.resolve(c)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new yp(t,r));let o=this.dr.get(t);o===void 0&&(o=$(),this.dr.set(t,o)),this.dr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.Er=new le(he.Ar),this.Rr=new le(he.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new he(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new he(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new M(new ee([])),r=new he(t,e),s=new he(t,e+1),o=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new M(new ee([])),r=new he(t,e),s=new he(t,e+1);let o=$();return this.Rr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new he(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return M.comparator(e.key,t.key)||H(e.br,t.br)}static Vr(e,t){return H(e.br,t.br)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new le(he.Ar)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _p(o,t,r,s);this.mutationQueue.push(a);for(const c of s)this.vr=this.vr.add(new he(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),s=new he(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,s],a=>{const c=this.Cr(a.br);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new le(H);return t.forEach(s=>{const o=new he(s,0),a=new he(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],c=>{r=r.add(c.br)})}),R.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new he(new M(o),0);let c=new le(H);return this.vr.forEachWhile(d=>{const p=d.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(c=c.add(d.br)),!0)},a),R.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return R.forEach(t.mutations,s=>{const o=new he(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new he(t,0),s=this.vr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.Nr=e,this.docs=function(){return new ne(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():we.newInvalidDocument(t))}getEntries(e,t){let r=Qe();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():we.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=Qe();const a=t.path,c=new M(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:p,value:{document:E}}=d.getNext();if(!a.isPrefixOf(p.path))break;p.path.length>a.length+1||Df(Nf(E),r)<=0||(s.has(E.key)||ds(t,E))&&(o=o.insert(E.key,E.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(e,t,r,s){x()}Br(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rm(this)}getSize(e){return R.resolve(this.size)}}class rm extends Qp{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.persistence=e,this.Lr=new Vt(t=>Ui(t),Fi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.kr=0,this.qr=new Hi,this.targetCount=0,this.Qr=tn.qn()}forEachTarget(e,t){return this.Lr.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),R.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new tn(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Un(t),R.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Lr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Lr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.Kr={},this.overlays={},this.$r=new as(0),this.Ur=!1,this.Ur=!0,this.Wr=new em,this.referenceDelegate=e(this),this.Gr=new sm(this),this.indexManager=new zp,this.remoteDocumentCache=function(s){return new nm(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new qp(t),this.jr=new Yp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new tm(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new im(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(e,t){return R.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class im extends Lf{constructor(e){super(),this.currentSequenceNumber=e}}class Gi{constructor(e){this.persistence=e,this.Zr=new Hi,this.Xr=null}static ei(e){return new Gi(e)}get ti(){if(this.Xr)return this.Xr;throw x()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),R.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ti,r=>{const s=M.fromPath(r);return this.ni(e,s).next(o=>{o||t.removeEntry(s,F.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return R.or([()=>R.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Kr{constructor(e,t){this.persistence=e,this.ri=new Vt(r=>xf(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Kp(this,t)}static ei(e,t){return new Kr(e,t)}Hr(){}Jr(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return R.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(o=>o?R.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Br(e,a=>this.ir(e,a,t).next(c=>{c||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),R.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cr(e.data.value)),t}ir(e,t,r){return R.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=$(),s=$();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Wi(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return rd()?8:Of(Ae())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.Xi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new om;return this.ts(e,t,a).next(c=>{if(o.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>o.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Bt()<=z.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),R.resolve()):(Bt()<=z.DEBUG&&L("QueryEngine","Query:",qt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Bt()<=z.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Oe(t))):R.resolve())}Xi(e,t){if(ja(t))return R.resolve(null);let r=Oe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=yi(t,null,"F"),r=Oe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=$(...o);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(d=>{const p=this.rs(t,c);return this.ss(t,p,a,d.readTime)?this.Xi(e,yi(t,null,"F")):this.os(e,p,t,d)}))})))}es(e,t,r,s){return ja(t)||s.isEqual(F.min())?R.resolve(null):this.Zi.getDocuments(e,r).next(o=>{const a=this.rs(t,o);return this.ss(t,a,r,s)?R.resolve(null):(Bt()<=z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qt(t)),this.os(e,a,t,kf(s,-1)).next(c=>c))})}rs(e,t){let r=new le(Ic(e));return t.forEach((s,o)=>{ds(e,o)&&(r=r.add(o))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(e,t,r){return Bt()<=z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",qt(t)),this.Zi.getDocumentsMatchingQuery(e,t,_t.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new ne(H),this.cs=new Vt(o=>Ui(o),Fi),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xp(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function cm(n,e,t,r){return new um(n,e,t,r)}async function $c(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let d=$();for(const p of s){a.push(p.batchId);for(const E of p.mutations)d=d.add(E.key)}for(const p of o){c.push(p.batchId);for(const E of p.mutations)d=d.add(E.key)}return t.localDocuments.getDocuments(r,d).next(p=>({Ts:p,removedBatchIds:a,addedBatchIds:c}))})})}function lm(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,d,p,E){const I=p.batch,b=I.keys();let S=R.resolve();return b.forEach(D=>{S=S.next(()=>E.getEntry(d,D)).next(V=>{const N=p.docVersions.get(D);J(N!==null),V.version.compareTo(N)<0&&(I.applyToRemoteDocument(V,p),V.isValidDocument()&&(V.setReadTime(p.commitVersion),E.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(d,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let d=$();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(d=d.add(c.batch.mutations[p].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Hc(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function hm(n,e){const t=B(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const c=[];e.targetChanges.forEach((E,I)=>{const b=s.get(I);if(!b)return;c.push(t.Gr.removeMatchingKeys(o,E.removedDocuments,I).next(()=>t.Gr.addMatchingKeys(o,E.addedDocuments,I)));let S=b.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?S=S.withResumeToken(ge.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):E.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(E.resumeToken,r)),s=s.insert(I,S),function(V,N,j){return V.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(b,S,E)&&c.push(t.Gr.updateTargetData(o,S))});let d=Qe(),p=$();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,E))}),c.push(dm(o,a,e.documentUpdates).next(E=>{d=E.Is,p=E.ds})),!r.isEqual(F.min())){const E=t.Gr.getLastRemoteSnapshotVersion(o).next(I=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(E)}return R.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,d,p)).next(()=>d)}).then(o=>(t.us=s,o))}function dm(n,e,t){let r=$(),s=$();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Qe();return t.forEach((c,d)=>{const p=o.get(c);d.isFoundDocument()!==p.isFoundDocument()&&(s=s.add(c)),d.isNoDocument()&&d.version.isEqual(F.min())?(e.removeEntry(c,d.readTime),a=a.insert(c,d)):!p.isValidDocument()||d.version.compareTo(p.version)>0||d.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(d),a=a.insert(c,d)):L("LocalStore","Ignoring outdated watch update for ",c,". Current version:",p.version," Watch version:",d.version)}),{Is:a,ds:s}})}function fm(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pm(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(o=>o?(s=o,R.resolve(s)):t.Gr.allocateTargetId(r).next(a=>(s=new lt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function wi(n,e,t){const r=B(n),s=r.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ln(a))throw a;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function eu(n,e,t){const r=B(n);let s=F.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(d,p,E){const I=B(d),b=I.cs.get(E);return b!==void 0?R.resolve(I.us.get(b)):I.Gr.getTargetData(p,E)}(r,a,Oe(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(d=>{o=d})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?o:$())).next(c=>(mm(r,np(e),c),{documents:c,Es:o})))}function mm(n,e,t){let r=n.ls.get(e)||F.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(e,r)}class tu{constructor(){this.activeTargetIds=up()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gm{constructor(){this._o=new tu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new tu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr=null;function ri(){return wr===null?wr=function(){return 268435456+Math.round(2147483648*Math.random())}():wr++,"0x"+wr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection";class Em extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(t,r,s,o,a){const c=ri(),d=this.No(t,r.toUriEncodedString());L("RestConnection",`Sending RPC '${t}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(p,o,a),this.Lo(t,d,p,s).then(E=>(L("RestConnection",`Received RPC '${t}' ${c}: `,E),E),E=>{throw Xt("RestConnection",`RPC '${t}' ${c} failed with error: `,E,"url: ",d,"request:",s),E})}ko(t,r,s,o,a,c){return this.Oo(t,r,s,o,a)}Bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+un}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),s&&s.headers.forEach((o,a)=>t[a]=o)}No(t,r){const s=ym[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,s){const o=ri();return new Promise((a,c)=>{const d=new sc;d.setWithCredentials(!0),d.listenOnce(ic.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Sr.NO_ERROR:const E=d.getResponseJson();L(Te,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(E)),a(E);break;case Sr.TIMEOUT:L(Te,`RPC '${e}' ${o} timed out`),c(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Sr.HTTP_ERROR:const I=d.getStatus();if(L(Te,`RPC '${e}' ${o} failed with status:`,I,"response text:",d.getResponseText()),I>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const D=function(N){const j=N.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN}(S.status);c(new O(D,S.message))}else c(new O(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new O(C.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{L(Te,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);L(Te,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",p,r,15)})}qo(e,t,r){const s=ri(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=uc(),c=ac(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Bo(d.initMessageHeaders,t,r),d.encodeInitMessageHeaders=!0;const E=o.join("");L(Te,`Creating RPC '${e}' stream ${s}: ${E}`,d);const I=a.createWebChannel(E,d);let b=!1,S=!1;const D=new vm({Eo:N=>{S?L(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(b||(L(Te,`Opening RPC '${e}' stream ${s} transport.`),I.open(),b=!0),L(Te,`RPC '${e}' stream ${s} sending:`,N),I.send(N))},Ao:()=>I.close()}),V=(N,j,W)=>{N.listen(j,K=>{try{W(K)}catch(te){setTimeout(()=>{throw te},0)}})};return V(I,Pn.EventType.OPEN,()=>{S||(L(Te,`RPC '${e}' stream ${s} transport opened.`),D.So())}),V(I,Pn.EventType.CLOSE,()=>{S||(S=!0,L(Te,`RPC '${e}' stream ${s} transport closed`),D.Do())}),V(I,Pn.EventType.ERROR,N=>{S||(S=!0,Xt(Te,`RPC '${e}' stream ${s} transport errored:`,N),D.Do(new O(C.UNAVAILABLE,"The operation could not be completed")))}),V(I,Pn.EventType.MESSAGE,N=>{var j;if(!S){const W=N.data[0];J(!!W);const K=W,te=(K==null?void 0:K.error)||((j=K[0])===null||j===void 0?void 0:j.error);if(te){L(Te,`RPC '${e}' stream ${s} received error:`,te);const ae=te.status;let P=function(f){const y=oe[f];if(y!==void 0)return Vc(y)}(ae),_=te.message;P===void 0&&(P=C.INTERNAL,_="Unknown error status: "+ae+" with message "+te.message),S=!0,D.Do(new O(P,_)),I.close()}else L(Te,`RPC '${e}' stream ${s} received:`,W),D.vo(W)}}),V(c,oc.STAT_EVENT,N=>{N.stat===fi.PROXY?L(Te,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===fi.NOPROXY&&L(Te,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function si(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){return new Sp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,r=1e3,s=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,r,s,o,a,c,d){this.li=e,this.Yo=r,this.Zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Gc(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ke(t.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tm extends Wc{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=kp(this.serializer,e),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?xe(a.readTime):F.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Ii(this.serializer),t.addTarget=function(o,a){let c;const d=a.target;if(c=_i(d)?{documents:Vp(o,d)}:{query:Lp(o,d).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Mc(o,a.resumeToken);const p=vi(o,a.expectedCount);p!==null&&(c.expectedCount=p)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=Wr(o,a.snapshotVersion.toTimestamp());const p=vi(o,a.expectedCount);p!==null&&(c.expectedCount=p)}return c}(this.serializer,e);const r=Mp(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Ii(this.serializer),t.removeTarget=e,this.c_(t)}}class Im extends Wc{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Dp(e.writeResults,e.commitTime),r=xe(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Ii(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Np(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(e,Ei(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())})}ko(e,t,r,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Ei(t,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Am{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ke(t),this.C_=!1):L("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Ot(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(d){const p=B(d);p.k_.add(4),await Kn(p),p.K_.set("Unknown"),p.k_.delete(4),await _s(p)}(this))})}),this.K_=new Am(r,s)}}async function _s(n){if(Ot(n))for(const e of n.q_)await e(!0)}async function Kn(n){for(const e of n.q_)await e(!1)}function Kc(n,e){const t=B(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Xi(t)?Ji(t):hn(t).s_()&&Qi(t,e))}function Ki(n,e){const t=B(n),r=hn(t);t.L_.delete(e),r.s_()&&Qc(t,e),t.L_.size===0&&(r.s_()?r.a_():Ot(t)&&t.K_.set("Unknown"))}function Qi(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hn(n).V_(e)}function Qc(n,e){n.U_.xe(e),hn(n).m_(e)}function Ji(n){n.U_=new wp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),hn(n).start(),n.K_.F_()}function Xi(n){return Ot(n)&&!hn(n).i_()&&n.L_.size>0}function Ot(n){return B(n).k_.size===0}function Jc(n){n.U_=void 0}async function Rm(n){n.K_.set("Online")}async function Sm(n){n.L_.forEach((e,t)=>{Qi(n,e)})}async function Cm(n,e){Jc(n),Xi(n)?(n.K_.O_(e),Ji(n)):n.K_.set("Unknown")}async function Pm(n,e,t){if(n.K_.set("Online"),e instanceof Oc&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.L_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.L_.delete(c),s.U_.removeTarget(c))}(n,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qr(n,r)}else if(e instanceof Nr?n.U_.$e(e):e instanceof Lc?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(F.min()))try{const r=await Hc(n.localStore);t.compareTo(r)>=0&&await function(o,a){const c=o.U_.it(a);return c.targetChanges.forEach((d,p)=>{if(d.resumeToken.approximateByteSize()>0){const E=o.L_.get(p);E&&o.L_.set(p,E.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,p)=>{const E=o.L_.get(d);if(!E)return;o.L_.set(d,E.withResumeToken(ge.EMPTY_BYTE_STRING,E.snapshotVersion)),Qc(o,d);const I=new lt(E.target,d,p,E.sequenceNumber);Qi(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Qr(n,r)}}async function Qr(n,e,t){if(!ln(e))throw e;n.k_.add(1),await Kn(n),n.K_.set("Offline"),t||(t=()=>Hc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await _s(n)})}function Xc(n,e){return e().catch(t=>Qr(n,t,e))}async function ys(n){const e=B(n),t=Tt(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;km(e);)try{const s=await fm(e.localStore,r);if(s===null){e.B_.length===0&&t.a_();break}r=s.batchId,Nm(e,s)}catch(s){await Qr(e,s)}Yc(e)&&Zc(e)}function km(n){return Ot(n)&&n.B_.length<10}function Nm(n,e){n.B_.push(e);const t=Tt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Yc(n){return Ot(n)&&!Tt(n).i_()&&n.B_.length>0}function Zc(n){Tt(n).start()}async function Dm(n){Tt(n).w_()}async function Vm(n){const e=Tt(n);for(const t of n.B_)e.g_(t.mutations)}async function Lm(n,e,t){const r=n.B_.shift(),s=ji.from(r,e,t);await Xc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ys(n)}async function Om(n,e){e&&Tt(n).f_&&await async function(r,s){if(function(a){return Ep(a)&&a!==C.ABORTED}(s.code)){const o=r.B_.shift();Tt(r).__(),await Xc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ys(r)}}(n,e),Yc(n)&&Zc(n)}async function ru(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Ot(t);t.k_.add(3),await Kn(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await _s(t)}async function Mm(n,e){const t=B(n);e?(t.k_.delete(2),await _s(t)):e||(t.k_.add(2),await Kn(t),t.K_.set("Unknown"))}function hn(n){return n.W_||(n.W_=function(t,r,s){const o=B(t);return o.b_(),new Tm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:Rm.bind(null,n),mo:Sm.bind(null,n),po:Cm.bind(null,n),R_:Pm.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Xi(n)?Ji(n):n.K_.set("Unknown")):(await n.W_.stop(),Jc(n))})),n.W_}function Tt(n){return n.G_||(n.G_=function(t,r,s){const o=B(t);return o.b_(),new Im(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Dm.bind(null,n),po:Om.bind(null,n),p_:Vm.bind(null,n),y_:Lm.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await ys(n)):(await n.G_.stop(),n.B_.length>0&&(L("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,c=new Yi(e,t,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zi(n,e){if(Ke("AsyncQueue",`${e}: ${n}`),ln(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{static emptySet(e){return new Ht(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=kn(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ht;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.z_=new ne(M.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):x():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class nn{constructor(e,t,r,s,o,a,c,d,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new nn(e,t,Ht.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Um{constructor(){this.queries=iu(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=B(t),o=s.queries;s.queries=iu(),o.forEach((a,c)=>{for(const d of c.J_)d.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function iu(){return new Vt(n=>Tc(n),hs)}async function Fm(n,e){const t=B(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.Y_()&&e.Z_()&&(r=2):(o=new xm,r=e.Z_()?0:1);try{switch(r){case 0:o.H_=await t.onListen(s,!0);break;case 1:o.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Zi(a,`Initialization of query '${qt(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&eo(t)}async function Bm(n,e){const t=B(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.J_.indexOf(e);a>=0&&(o.J_.splice(a,1),o.J_.length===0?s=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qm(n,e){const t=B(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const c of a.J_)c.ta(s)&&(r=!0);a.H_=s}}r&&eo(t)}function jm(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const o of s.J_)o.onError(t);r.queries.delete(e)}function eo(n){n.X_.forEach(e=>{e.next()})}var Ai,ou;(ou=Ai||(Ai={})).na="default",ou.Cache="cache";class zm{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new nn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=nn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Ai.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.key=e}}class tl{constructor(e){this.key=e}}class $m{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=$(),this.mutatedKeys=$(),this.Va=Ic(e),this.ma=new Ht(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new su,s=t?t.ma:this.ma;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,p=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((E,I)=>{const b=s.get(E),S=ds(this.query,I)?I:null,D=!!b&&this.mutatedKeys.has(b.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;b&&S?b.data.isEqual(S.data)?D!==V&&(r.track({type:3,doc:S}),N=!0):this.ya(b,S)||(r.track({type:2,doc:S}),N=!0,(d&&this.Va(S,d)>0||p&&this.Va(S,p)<0)&&(c=!0)):!b&&S?(r.track({type:0,doc:S}),N=!0):b&&!S&&(r.track({type:1,doc:b}),N=!0,(d||p)&&(c=!0)),N&&(S?(a=a.add(S),o=V?o.add(E):o.delete(E)):(a=a.delete(E),o=o.delete(E)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const E=this.query.limitType==="F"?a.last():a.first();a=a.delete(E.key),o=o.delete(E.key),r.track({type:1,doc:E})}return{ma:a,pa:r,ss:c,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((E,I)=>function(S,D){const V=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return V(S)-V(D)}(E.type,I.type)||this.Va(E.doc,I.doc)),this.wa(r),s=s!=null&&s;const c=t&&!s?this.Sa():[],d=this.Ra.size===0&&this.current&&!s?1:0,p=d!==this.Aa;return this.Aa=d,a.length!==0||p?{snapshot:new nn(this.query,e.ma,o,a,e.mutatedKeys,d===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new su,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=$(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new tl(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new el(r))}),t}va(e){this.Ea=e.Es,this.Ra=$();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return nn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Hm{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gm{constructor(e){this.key=e,this.Fa=!1}}class Wm{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Vt(c=>Tc(c),hs),this.Oa=new Map,this.Na=new Set,this.Ba=new ne(M.comparator),this.La=new Map,this.ka=new Hi,this.qa={},this.Qa=new Map,this.Ka=tn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Km(n,e,t=!0){const r=al(n);let s;const o=r.xa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Ca()):s=await nl(r,e,t,!0),s}async function Qm(n,e){const t=al(n);await nl(t,e,!0,!1)}async function nl(n,e,t,r){const s=await pm(n.localStore,Oe(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await Jm(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Kc(n.remoteStore,s),c}async function Jm(n,e,t,r,s){n.Ua=(I,b,S)=>async function(V,N,j,W){let K=N.view.ga(j);K.ss&&(K=await eu(V.localStore,N.query,!1).then(({documents:_})=>N.view.ga(_,K)));const te=W&&W.targetChanges.get(N.targetId),ae=W&&W.targetMismatches.get(N.targetId)!=null,P=N.view.applyChanges(K,V.isPrimaryClient,te,ae);return uu(V,N.targetId,P.ba),P.snapshot}(n,I,b,S);const o=await eu(n.localStore,e,!0),a=new $m(e,o.Es),c=a.ga(o.documents),d=Wn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),p=a.applyChanges(c,n.isPrimaryClient,d);uu(n,t,p.ba);const E=new Hm(e,t,a);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),p.snapshot}async function Xm(n,e,t){const r=B(n),s=r.xa.get(e),o=r.Oa.get(s.targetId);if(o.length>1)return r.Oa.set(s.targetId,o.filter(a=>!hs(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ki(r.remoteStore,s.targetId),bi(r,s.targetId)}).catch(cn)):(bi(r,s.targetId),await wi(r.localStore,s.targetId,!0))}async function Ym(n,e){const t=B(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ki(t.remoteStore,r.targetId))}async function Zm(n,e,t){const r=og(n);try{const s=await function(a,c){const d=B(a),p=ce.now(),E=c.reduce((S,D)=>S.add(D.key),$());let I,b;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Qe(),V=$();return d.hs.getEntries(S,E).next(N=>{D=N,D.forEach((j,W)=>{W.isValidDocument()||(V=V.add(j))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,D)).next(N=>{I=N;const j=[];for(const W of c){const K=mp(W,I.get(W.key).overlayedDocument);K!=null&&j.push(new Lt(W.key,K,fc(K.value.mapValue),Me.exists(!0)))}return d.mutationQueue.addMutationBatch(S,p,j,c)}).next(N=>{b=N;const j=N.applyToLocalDocumentSet(I,V);return d.documentOverlayCache.saveOverlays(S,N.batchId,j)})}).then(()=>({batchId:b.batchId,changes:Ac(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,d){let p=a.qa[a.currentUser.toKey()];p||(p=new ne(H)),p=p.insert(c,d),a.qa[a.currentUser.toKey()]=p}(r,s.batchId,t),await Qn(r,s.changes),await ys(r.remoteStore)}catch(s){const o=Zi(s,"Failed to persist write");t.reject(o)}}async function rl(n,e){const t=B(n);try{const r=await hm(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.La.get(o);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?J(a.Fa):s.removedDocuments.size>0&&(J(a.Fa),a.Fa=!1))}),await Qn(t,r,e)}catch(r){await cn(r)}}function au(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((o,a)=>{const c=a.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const d=B(a);d.onlineState=c;let p=!1;d.queries.forEach((E,I)=>{for(const b of I.J_)b.ea(c)&&(p=!0)}),p&&eo(d)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eg(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.La.get(e),o=s&&s.key;if(o){let a=new ne(M.comparator);a=a.insert(o,we.newNoDocument(o,F.min()));const c=$().add(o),d=new ms(F.min(),new Map,new ne(H),a,c);await rl(r,d),r.Ba=r.Ba.remove(o),r.La.delete(e),to(r)}else await wi(r.localStore,e,!1).then(()=>bi(r,e,t)).catch(cn)}async function tg(n,e){const t=B(n),r=e.batch.batchId;try{const s=await lm(t.localStore,e);il(t,r,null),sl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qn(t,s)}catch(s){await cn(s)}}async function ng(n,e,t){const r=B(n);try{const s=await function(a,c){const d=B(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let E;return d.mutationQueue.lookupMutationBatch(p,c).next(I=>(J(I!==null),E=I.keys(),d.mutationQueue.removeMutationBatch(p,I))).next(()=>d.mutationQueue.performConsistencyCheck(p)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(p,E,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,E)).next(()=>d.localDocuments.getDocuments(p,E))})}(r.localStore,e);il(r,e,t),sl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qn(r,s)}catch(s){await cn(s)}}function sl(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function il(n,e,t){const r=B(n);let s=r.qa[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function bi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||ol(n,r)})}function ol(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Ki(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),to(n))}function uu(n,e,t){for(const r of t)r instanceof el?(n.ka.addReference(r.key,e),rg(n,r)):r instanceof tl?(L("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||ol(n,r.key)):x()}function rg(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(L("SyncEngine","New document in limbo: "+t),n.Na.add(r),to(n))}function to(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new M(ee.fromString(e)),r=n.Ka.next();n.La.set(r,new Gm(t)),n.Ba=n.Ba.insert(t,r),Kc(n.remoteStore,new lt(Oe(Ec(t.path)),r,"TargetPurposeLimboResolution",as.oe))}}async function Qn(n,e,t){const r=B(n),s=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,d)=>{a.push(r.Ua(d,e,t).then(p=>{var E;if((p||t)&&r.isPrimaryClient){const I=p?!p.fromCache:(E=t==null?void 0:t.targetChanges.get(d.targetId))===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(p){s.push(p);const I=Wi.zi(d.targetId,p);o.push(I)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(d,p){const E=B(d);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>R.forEach(p,b=>R.forEach(b.Wi,S=>E.persistence.referenceDelegate.addReference(I,b.targetId,S)).next(()=>R.forEach(b.Gi,S=>E.persistence.referenceDelegate.removeReference(I,b.targetId,S)))))}catch(I){if(!ln(I))throw I;L("LocalStore","Failed to update sequence numbers: "+I)}for(const I of p){const b=I.targetId;if(!I.fromCache){const S=E.us.get(b),D=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(D);E.us=E.us.insert(b,V)}}}(r.localStore,o))}async function sg(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await $c(t.localStore,e);t.currentUser=e,function(o,a){o.Qa.forEach(c=>{c.forEach(d=>{d.reject(new O(C.CANCELLED,a))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qn(t,r.Ts)}}function ig(n,e){const t=B(n),r=t.La.get(e);if(r&&r.Fa)return $().add(r.key);{let s=$();const o=t.Oa.get(e);if(!o)return s;for(const a of o){const c=t.xa.get(a);s=s.unionWith(c.view.fa)}return s}}function al(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ig.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eg.bind(null,e),e.Ma.R_=qm.bind(null,e.eventManager),e.Ma.Wa=jm.bind(null,e.eventManager),e}function og(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ng.bind(null,e),e}class Jr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gs(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return cm(this.persistence,new am,e.initialUser,this.serializer)}ja(e){return new zc(Gi.ei,this.serializer)}za(e){return new gm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jr.provider={build:()=>new Jr};class ag extends Jr{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){J(this.persistence.referenceDelegate instanceof Kr);const r=this.persistence.referenceDelegate.garbageCollector;return new Gp(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Se.withCacheSize(this.cacheSizeBytes):Se.DEFAULT;return new zc(r=>Kr.ei(r,t),this.serializer)}}class Ri{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>au(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sg.bind(null,this.syncEngine),await Mm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Um}()}createDatastore(e){const t=gs(e.databaseInfo.databaseId),r=function(o){return new Em(o)}(e.databaseInfo);return function(o,a,c,d){return new wm(o,a,c,d)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,c){return new bm(r,s,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>au(this.syncEngine,t,0),function(){return nu.p()?new nu:new _m}())}createSyncEngine(e,t){return function(s,o,a,c,d,p,E){const I=new Wm(s,o,a,c,d,p);return E&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=B(s);L("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await Kn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ri.provider={build:()=>new Ri};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ie.UNAUTHENTICATED,this.clientId=lc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{L("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zi(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ii(n,e){n.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $c(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function cu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lg(n);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ru(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ru(e.remoteStore,s)),n._onlineComponents=e}async function lg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await ii(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Xt("Error using user provided cache. Falling back to memory cache: "+t),await ii(n,new Jr)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await ii(n,new ag(void 0));return n._offlineComponents}async function ul(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await cu(n,n._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await cu(n,new Ri))),n._onlineComponents}function hg(n){return ul(n).then(e=>e.syncEngine)}async function dg(n){const e=await ul(n),t=e.eventManager;return t.onListen=Km.bind(null,e.syncEngine),t.onUnlisten=Xm.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Qm.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ym.bind(null,e.syncEngine),t}function fg(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,d,p){const E=new ug({next:b=>{E.eu(),a.enqueueAndForget(()=>Bm(o,I)),b.fromCache&&d.source==="server"?p.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(b)},error:b=>p.reject(b)}),I=new zm(c,E,{includeMetadataChanges:!0,ua:!0});return Fm(o,I)}(await dg(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pg(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hu(n){if(!M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function du(n){if(M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function no(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function rn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=no(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tf;switch(r.type){case"firstParty":return new bf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=lu.get(t);r&&(L("ComponentProvider","Removing Datastore"),lu.delete(t),r.terminate())}(this),Promise.resolve()}}function mg(n,e,t,r={}){var s;const o=(n=rn(n,vs))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Xt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Ie.MOCK_USER;else{c=Jh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ie(p)}n._authCredentials=new If(new cc(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Es(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class gt extends Es{constructor(e,t,r){super(e,t,Ec(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new M(e))}withConverter(e){return new gt(this.firestore,e,this._path)}}function gg(n,e,...t){if(n=Ve(n),ll("collection","path",e),n instanceof vs){const r=ee.fromString(e,...t);return du(r),new gt(n,null,r)}{if(!(n instanceof ke||n instanceof gt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return du(r),new gt(n.firestore,null,r)}}function hl(n,e,...t){if(n=Ve(n),arguments.length===1&&(e=lc.newId()),ll("doc","path",e),n instanceof vs){const r=ee.fromString(e,...t);return hu(r),new ke(n,null,new M(r))}{if(!(n instanceof ke||n instanceof gt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return hu(r),new ke(n.firestore,n instanceof gt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Gc(this,"async_queue_retry"),this.fu=()=>{const r=si();r&&L("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=si();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=si();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new mt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ln(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Yi.createAndSchedule(this,e,t,r,o=>this.Su(o));return this.Eu.push(s),s}pu(){this.Au&&x()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Ts extends vs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new pu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pu(e),this._firestoreClient=void 0,await e}}}function _g(n,e){const t=typeof n=="object"?n:ec(),r=typeof n=="string"?n:"(default)",s=Li(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Kh("firestore");o&&mg(s,...o)}return s}function dl(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yg(n),n._firestoreClient}function yg(n){var e,t,r;const s=n._freezeSettings(),o=function(c,d,p,E){return new Bf(c,d,p,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,cl(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new cg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const d=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(ge.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sn(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=/^__.*__$/;class Eg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gn(e,this.data,t,this.fieldTransforms)}}function pl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class oo{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new oo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Xr(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(pl(this.Mu)&&vg.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Tg{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||gs(e)}$u(e,t,r,s=!1){return new oo({Mu:e,methodName:t,Ku:r,path:me.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ig(n){const e=n._freezeSettings(),t=gs(n._databaseId);return new Tg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function wg(n,e,t,r,s,o={}){const a=n.$u(o.merge||o.mergeFields?2:0,e,t,s);yl("Data must be an object, but it was:",a,r);const c=gl(r,a);let d,p;if(o.merge)d=new De(a.fieldMask),p=a.fieldTransforms;else if(o.mergeFields){const E=[];for(const I of o.mergeFields){const b=Ag(e,I,t);if(!a.contains(b))throw new O(C.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Rg(E,b)||E.push(b)}d=new De(E),p=a.fieldTransforms.filter(I=>d.covers(I.field))}else d=null,p=a.fieldTransforms;return new Eg(new Pe(c),d,p)}function ml(n,e){if(_l(n=Ve(n)))return yl("Unsupported field value:",e,n),gl(n,e);if(n instanceof fl)return function(r,s){if(!pl(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let d=ml(c,s.ku(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ce.fromDate(r);return{timestampValue:Wr(s.serializer,o)}}if(r instanceof ce){const o=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wr(s.serializer,o)}}if(r instanceof so)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:Mc(s.serializer,r._byteString)};if(r instanceof ke){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:$i(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof io)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.qu("VectorValues must only contain numeric values.");return Bi(c.serializer,d)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${no(r)}`)}(n,e)}function gl(n,e){const t={};return hc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dt(n,(r,s)=>{const o=ml(s,e.Ou(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function _l(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof so||n instanceof sn||n instanceof ke||n instanceof fl||n instanceof io)}function yl(n,e,t){if(!_l(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=no(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Ag(n,e,t){if((e=Ve(e))instanceof ro)return e._internalPath;if(typeof e=="string")return vl(n,e);throw Xr("Field path arguments must be of type string or ",n,!1,void 0,t)}const bg=new RegExp("[~\\*/\\[\\]]");function vl(n,e,t){if(e.search(bg)>=0)throw Xr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ro(...e.split("."))._internalPath}catch{throw Xr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xr(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${r}`),a&&(d+=` in document ${s}`),d+=")"),new O(C.INVALID_ARGUMENT,c+n+d)}function Rg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sg extends El{data(){return super.data()}}function Tl(n,e){return typeof e=="string"?vl(n,e):e instanceof ro?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pg{convertValue(e,t="none"){switch(Et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ie(a.doubleValue));return new io(o)}convertGeoPoint(e){return new so(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=cs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Un(e));default:return null}}convertTimestamp(e){const t=yt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);J(jc(r));const s=new Fn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(t)||Ke(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ng extends El{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Tl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Dr extends Ng{data(e={}){return super.data(e)}}class Dg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ar(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Dr(this._firestore,this._userDataWriter,r.key,r,new Ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const d=new Dr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ar(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new Dr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ar(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,E=-1;return c.type!==0&&(p=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),E=a.indexOf(c.doc.key)),{type:Vg(c.type),doc:d,oldIndex:p,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Vg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class Lg extends Pg{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function Og(n){n=rn(n,Es);const e=rn(n.firestore,Ts),t=dl(e),r=new Lg(e);return Cg(n._query),fg(t,n._query).then(s=>new Dg(e,r,n,s))}function Mg(n,e,t){n=rn(n,ke);const r=rn(n.firestore,Ts),s=kg(n.converter,e);return Il(r,[wg(Ig(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Me.none())])}function xg(n){return Il(rn(n.firestore,Ts),[new qi(n._key,Me.none())])}function Il(n,e){return function(r,s){const o=new mt;return r.asyncQueue.enqueueAndForget(async()=>Zm(await hg(r),s,o)),o.promise}(dl(n),e)}(function(e,t=!0){(function(s){un=s})(an),Jt(new Pt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ts(new wf(r.getProvider("auth-internal")),new Sf(r.getProvider("app-check-internal")),function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(p.options.projectId,E)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ft(Na,"4.7.6",e),ft(Na,"4.7.6","esm2017")})();var Ug="firebase",Fg="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(Ug,Fg,"app");function ao(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function wl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bg=wl,Al=new $n("auth","Firebase",wl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Di("@firebase/auth");function qg(n,...e){Yr.logLevel<=z.WARN&&Yr.warn(`Auth (${an}): ${n}`,...e)}function Vr(n,...e){Yr.logLevel<=z.ERROR&&Yr.error(`Auth (${an}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw uo(n,...e)}function Ue(n,...e){return uo(n,...e)}function bl(n,e,t){const r=Object.assign(Object.assign({},Bg()),{[e]:t});return new $n("auth","Firebase",r).create(e,{appName:n.name})}function Ct(n){return bl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Al.create(n,...e)}function U(n,e,...t){if(!n)throw uo(e,...t)}function $e(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vr(e),new Error(e)}function Xe(n,e){n||$e(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jg(){return mu()==="http:"||mu()==="https:"}function mu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jg()||ed()||"connection"in navigator)?navigator.onLine:!0}function $g(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xe(t>e,"Short delay should be less than long delay!"),this.isMobile=Xh()||td()}get(){return zg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n,e){Xe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new Jn(3e4,6e4);function lo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function dn(n,e,t,r,s={}){return Sl(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=Hn(Object.assign({key:n.config.apiKey},a)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:d},o);return Zh()||(p.referrerPolicy="no-referrer"),Rl.fetch()(Cl(n,n.config.apiHost,t,c),p)})}async function Sl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hg),e);try{const s=new Kg(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw br(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[d,p]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw br(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw br(n,"user-disabled",a);const E=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw bl(n,E,p);Je(n,E)}}catch(s){if(s instanceof Ye)throw s;Je(n,"network-request-failed",{message:String(s)})}}async function Wg(n,e,t,r,s={}){const o=await dn(n,e,t,r,s);return"mfaPendingCredential"in o&&Je(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Cl(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?co(n.config,s):`${n.config.apiScheme}://${s}`}class Kg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),Gg.get())})}}function br(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ue(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(n,e){return dn(n,"POST","/v1/accounts:delete",e)}async function Pl(n,e){return dn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jg(n,e=!1){const t=Ve(n),r=await t.getIdToken(e),s=ho(r);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Mn(oi(s.auth_time)),issuedAtTime:Mn(oi(s.iat)),expirationTime:Mn(oi(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function oi(n){return Number(n)*1e3}function ho(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Vr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wu(t);return s?JSON.parse(s):(Vr("Failed to decode base64 JWT payload"),null)}catch(s){return Vr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gu(n){const e=ho(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ye&&Xg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Xg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(n){var e;const t=n.auth,r=await n.getIdToken(),s=await zn(n,Pl(t,{idToken:r}));U(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?kl(o.providerUserInfo):[],c=e_(n.providerData,a),d=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),E=d?p:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ci(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(n,I)}async function Zg(n){const e=Ve(n);await Zr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kl(n){return n.map(e=>{var{providerId:t}=e,r=ao(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(n,e){const t=await Sl(n,{},async()=>{const r=Hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=Cl(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Rl.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function n_(n,e){return dn(n,"POST","/v2/accounts:revokeToken",lo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=gu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await t_(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new Gt;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(U(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gt,this.toJSON())}_performRefresh(){return $e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class He{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,o=ao(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ci(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await zn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Jg(this,e)}reload(){return Zg(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Zr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await zn(this,Qg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,o,a,c,d,p,E;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(s=t.email)!==null&&s!==void 0?s:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,j=(p=t.createdAt)!==null&&p!==void 0?p:void 0,W=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:K,emailVerified:te,isAnonymous:ae,providerData:P,stsTokenManager:_}=t;U(K&&_,e,"internal-error");const h=Gt.fromJSON(this.name,_);U(typeof K=="string",e,"internal-error"),rt(I,e.name),rt(b,e.name),U(typeof te=="boolean",e,"internal-error"),U(typeof ae=="boolean",e,"internal-error"),rt(S,e.name),rt(D,e.name),rt(V,e.name),rt(N,e.name),rt(j,e.name),rt(W,e.name);const f=new He({uid:K,auth:e,email:b,emailVerified:te,displayName:I,isAnonymous:ae,photoURL:D,phoneNumber:S,tenantId:V,stsTokenManager:h,createdAt:j,lastLoginAt:W});return P&&Array.isArray(P)&&(f.providerData=P.map(y=>Object.assign({},y))),N&&(f._redirectEventId=N),f}static async _fromIdTokenResponse(e,t,r=!1){const s=new Gt;s.updateFromServerResponse(t);const o=new He({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];U(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?kl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new Gt;c.updateFromIdToken(r);const d=new He({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ci(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,p),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map;function Ge(n){Xe(n instanceof Function,"Expected a class definition");let e=_u.get(n);return e?(Xe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_u.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nl.type="NONE";const yu=Nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n,e,t){return`firebase:${n}:${e}:${t}`}class Wt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Lr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Lr("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?He._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Wt(Ge(yu),e,r);const s=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=s[0]||Ge(yu);const a=Lr(r,e.config.apiKey,e.name);let c=null;for(const p of t)try{const E=await p._get(a);if(E){const I=He._fromJSON(e,E);p!==o&&(c=I),o=p;break}}catch{}const d=s.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new Wt(o,e,r):(o=d[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(a)}catch{}})),new Wt(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ol(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xl(e))return"Blackberry";if(Ul(e))return"Webos";if(Vl(e))return"Safari";if((e.includes("chrome/")||Ll(e))&&!e.includes("edge/"))return"Chrome";if(Ml(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dl(n=Ae()){return/firefox\//i.test(n)}function Vl(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ll(n=Ae()){return/crios\//i.test(n)}function Ol(n=Ae()){return/iemobile/i.test(n)}function Ml(n=Ae()){return/android/i.test(n)}function xl(n=Ae()){return/blackberry/i.test(n)}function Ul(n=Ae()){return/webos/i.test(n)}function fo(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function r_(n=Ae()){var e;return fo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s_(){return nd()&&document.documentMode===10}function Fl(n=Ae()){return fo(n)||Ml(n)||Ul(n)||xl(n)||/windows phone/i.test(n)||Ol(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n,e=[]){let t;switch(n){case"Browser":t=vu(Ae());break;case"Worker":t=`${vu(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${an}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const d=e(o);a(d)}catch(d){c(d)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(n,e={}){return dn(n,"GET","/v2/passwordPolicy",lo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=6;class u_{constructor(e){var t,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:a_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,o,a,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(s=d.containsLowercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eu(this),this.idTokenSubscription=new Eu(this),this.beforeStateQueue=new i_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Al,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pl(this,{idToken:e}),r=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===c)&&(d!=null&&d.user)&&(s=d.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$g()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Ct(this));const t=e?Ve(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await o_(this),t=new u_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await n_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Wt.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,s);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&qg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function po(n){return Ve(n)}class Eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ld(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function l_(n){mo=n}function h_(n){return mo.loadJS(n)}function d_(){return mo.gapiScript}function f_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n,e){const t=Li(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Br(o,e??{}))return s;Je(s,"already-initialized")}return t.initialize({options:e})}function m_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g_(n,e,t){const r=po(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=ql(e),{host:a,port:c}=__(e),d=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),y_()}function ql(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function __(n){const e=ql(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Tu(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Tu(a)}}}function Tu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function y_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $e("not implemented")}_getIdTokenResponse(e){return $e("not implemented")}_linkToIdToken(e,t){return $e("not implemented")}_getReauthenticationResolver(e){return $e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(n,e){return Wg(n,"POST","/v1/accounts:signInWithIdp",lo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="http://localhost";class Nt extends jl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,o=ao(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Nt(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Kt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kt(e,t)}buildRequest(){const e={requestUri:v_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends zl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Xn{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ot.credential(t,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Xn{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Xn{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ut.credential(t,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await He._fromIdTokenResponse(e,r,s),a=Iu(r);return new on({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Iu(r);return new on({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Iu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Ye{constructor(e,t,r,s){var o;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,es.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new es(e,t,r,s)}}function $l(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?es._fromErrorAndOperation(n,o,e,r):o})}async function E_(n,e,t=!1){const r=await zn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return on._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e,t=!1){const{auth:r}=n;if(ct(r.app))return Promise.reject(Ct(r));const s="reauthenticate";try{const o=await zn(n,$l(r,s,e,n),t);U(o.idToken,r,"internal-error");const a=ho(o.idToken);U(a,r,"internal-error");const{sub:c}=a;return U(n.uid===c,r,"user-mismatch"),on._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(n,e,t=!1){if(ct(n.app))return Promise.reject(Ct(n));const r="signIn",s=await $l(n,r,e),o=await on._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}function w_(n,e,t,r){return Ve(n).onIdTokenChanged(e,t,r)}function A_(n,e,t){return Ve(n).beforeAuthStateChanged(e,t)}const ts="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ts,"1"),this.storage.removeItem(ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=1e3,R_=10;class Gl extends Hl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);s_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,R_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},b_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gl.type="LOCAL";const S_=Gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Hl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wl.type="SESSION";const Kl=Wl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Is(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async p=>p(t.origin,o)),d=await C_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,d)=>{const p=go("",20);s.port1.start();const E=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(I){const b=I;if(b.data.eventId===p)switch(b.data.status){case"ack":clearTimeout(E),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(b.data.response);break;default:clearTimeout(E),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function k_(n){Fe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function N_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function V_(){return Ql()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="firebaseLocalStorageDb",L_=1,ns="firebaseLocalStorage",Xl="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ws(n,e){return n.transaction([ns],e?"readwrite":"readonly").objectStore(ns)}function O_(){const n=indexedDB.deleteDatabase(Jl);return new Yn(n).toPromise()}function Pi(){const n=indexedDB.open(Jl,L_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ns,{keyPath:Xl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ns)?e(r):(r.close(),await O_(),e(await Pi()))})})}async function wu(n,e,t){const r=ws(n,!0).put({[Xl]:e,value:t});return new Yn(r).toPromise()}async function M_(n,e){const t=ws(n,!1).get(e),r=await new Yn(t).toPromise();return r===void 0?null:r.value}function Au(n,e){const t=ws(n,!0).delete(e);return new Yn(t).toPromise()}const x_=800,U_=3;class Yl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>U_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Is._getInstance(V_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await N_(),!this.activeServiceWorker)return;this.sender=new P_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pi();return await wu(e,ts,"1"),await Au(e,ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>wu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>M_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Au(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=ws(s,!1).getAll();return new Yn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yl.type="LOCAL";const F_=Yl;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n,e){return e?Ge(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends jl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function q_(n){return I_(n.auth,new _o(n),n.bypassAuthState)}function j_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),T_(t,new _o(n),n.bypassAuthState)}async function z_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),E_(t,new _o(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q_;case"linkViaPopup":case"linkViaRedirect":return z_;case"reauthViaPopup":case"reauthViaRedirect":return j_;default:Je(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Jn(2e3,1e4);class $t extends Zl{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$_.get())};e()}}$t.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="pendingRedirect",Or=new Map;class G_ extends Zl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Or.get(this.auth._key());if(!e){try{const r=await W_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W_(n,e){const t=J_(e),r=Q_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function K_(n,e){Or.set(n._key(),e)}function Q_(n){return Ge(n._redirectPersistence)}function J_(n){return Lr(H_,n.config.apiKey,n.name)}async function X_(n,e,t=!1){if(ct(n.app))return Promise.reject(Ct(n));const r=po(n),s=B_(r,e),a=await new G_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=10*60*1e3;class Z_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ey(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!eh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Y_&&this.cachedEventUids.clear(),this.cachedEventUids.has(bu(e))}saveEventToCache(e){this.cachedEventUids.add(bu(e)),this.lastProcessedEventTime=Date.now()}}function bu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ey(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(n,e={}){return dn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ry=/^https?/;async function sy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ty(n);for(const t of e)try{if(iy(t))return}catch{}Je(n,"unauthorized-domain")}function iy(n){const e=Si(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ry.test(t))return!1;if(ny.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Jn(3e4,6e4);function Ru(){const n=Fe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ay(n){return new Promise((e,t)=>{var r,s,o;function a(){Ru(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ru(),t(Ue(n,"network-request-failed"))},timeout:oy.get()})}if(!((s=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Fe().gapi)===null||o===void 0)&&o.load)a();else{const c=f_("iframefcb");return Fe()[c]=()=>{gapi.load?a():t(Ue(n,"network-request-failed"))},h_(`${d_()}?onload=${c}`).catch(d=>t(d))}}).catch(e=>{throw Mr=null,e})}let Mr=null;function uy(n){return Mr=Mr||ay(n),Mr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new Jn(5e3,15e3),ly="__/auth/iframe",hy="emulator/auth/iframe",dy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function py(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?co(e,hy):`https://${n.config.authDomain}/${ly}`,r={apiKey:e.apiKey,appName:n.name,v:an},s=fy.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Hn(r).slice(1)}`}async function my(n){const e=await uy(n),t=Fe().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:py(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dy,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ue(n,"network-request-failed"),c=Fe().setTimeout(()=>{o(a)},cy.get());function d(){Fe().clearTimeout(c),s(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_y=500,yy=600,vy="_blank",Ey="http://localhost";class Su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ty(n,e,t,r=_y,s=yy){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},gy),{width:r.toString(),height:s.toString(),top:o,left:a}),p=Ae().toLowerCase();t&&(c=Ll(p)?vy:t),Dl(p)&&(e=e||Ey,d.scrollbars="yes");const E=Object.entries(d).reduce((b,[S,D])=>`${b}${S}=${D},`,"");if(r_(p)&&c!=="_self")return Iy(e||"",c),new Su(null);const I=window.open(e||"",c,E);U(I,n,"popup-blocked");try{I.focus()}catch{}return new Su(I)}function Iy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="__/auth/handler",Ay="emulator/auth/handler",by=encodeURIComponent("fac");async function Cu(n,e,t,r,s,o){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:an,eventId:s};if(e instanceof zl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",cd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))a[E]=I}if(e instanceof Xn){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(a.scopes=E.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const E of Object.keys(c))c[E]===void 0&&delete c[E];const d=await n._getAppCheckToken(),p=d?`#${by}=${encodeURIComponent(d)}`:"";return`${Ry(n)}?${Hn(c).slice(1)}${p}`}function Ry({config:n}){return n.emulator?co(n,Ay):`https://${n.authDomain}/${wy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="webStorageSupport";class Sy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kl,this._completeRedirectFn=X_,this._overrideRedirectResult=K_}async _openPopup(e,t,r,s){var o;Xe((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Cu(e,t,r,Si(),s);return Ty(e,a,go())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await Cu(e,t,r,Si(),s);return k_(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Xe(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await my(e),r=new Z_(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ai,{type:ai},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[ai];a!==void 0&&t(!!a),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fl()||Vl()||fo()}}const Cy=Sy;var Pu="@firebase/auth",ku="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ny(n){Jt(new Pt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bl(n)},p=new c_(r,s,o,d);return m_(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Jt(new Pt("auth-internal",e=>{const t=po(e.getProvider("auth").getImmediate());return(r=>new Py(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Pu,ku,ky(n)),ft(Pu,ku,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=5*60,Vy=Ju("authIdTokenMaxAge")||Dy;let Nu=null;const Ly=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Vy)return;const s=t==null?void 0:t.token;Nu!==s&&(Nu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Oy(n=ec()){const e=Li(n,"auth");if(e.isInitialized())return e.getImmediate();const t=p_(n,{popupRedirectResolver:Cy,persistence:[F_,S_,Kl]}),r=Ju("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Ly(o.toString());A_(t,a,()=>a(t.currentUser)),w_(t,c=>a(c))}}const s=Ku("auth");return s&&g_(t,`http://${s}`),t}function My(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}l_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Ue("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",My().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ny("Browser");const xy={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"energyteam-5fbd4.firebaseapp.com",projectId:"energyteam-5fbd4",storageBucket:"energyteam-5fbd4.firebasestorage.app",messagingSenderId:"176615851977",appId:"1:176615851977:web:9bc22eecdf948957544a18"},th=Zu(xy),Uy=Oy(th),yo=_g(th),Fy=async n=>{const e=Uy.currentUser;if(e){const t=n;try{await Mg(hl(yo,e.email,n._id),t)}catch(r){console.log(r.message)}}},By=async n=>{const e=localStorage.getItem("user");if(e)try{await xg(hl(yo,e,n))}catch(t){console.log(t.message)}},qy=async()=>{const n=localStorage.getItem("user"),e=[];if(!n)return;(await Og(gg(yo,n))).forEach(r=>{e.push(r.data())}),localStorage.setItem("favorites",JSON.stringify(e))};function rs(){qy();const n=JSON.parse(localStorage.getItem("favorites"));if(!(n!=null&&n.length)){Fh();return}Bh(n)}const Du=document.getElementById("home"),Vu=document.getElementById("favorites"),Lu=document.getElementById("home-text"),Ou=document.getElementById("favorites-text"),jy=window.location.href.toString();let zy=jy.slice(-14);const $y=()=>{zy==="favorites.html"?(console.log("no-wories"),Du.classList.remove("active"),Lu.classList.remove("black"),Vu.classList.add("active"),Ou.classList.add("black"),rs()):(console.log("HOME"),Du.classList.add("active"),Lu.classList.add("black"),Vu.classList.remove("active"),Ou.classList.remove("black"))};$y();const Hy=document.getElementById("burger-button"),vo=document.getElementById("burger"),Gy=document.getElementById("burger-button-close"),Wy=async()=>{document.getElementById("header").classList.remove("container"),vo.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},Ky=async n=>{document.getElementById("header").classList.add("container"),vo.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},Qy=n=>{n.key==="Escape"&&vo.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};Hy.addEventListener("click",Wy);Gy.addEventListener("click",Ky);document.addEventListener("keydown",Qy);const se=class se{static handleErrors(e){return async()=>{try{return await e()}catch(t){console.error("Błąd podczas zapytania: ",t.message)}}}static async fetchJson(e,t){return(await fetch(e,t)).json()}async getQuotes(){return await se.handleErrors(async()=>await se.fetchJson(`${se.BASE_URL}/quote`))()}async getByFilterName(e){return await se.handleErrors(async()=>{const r=new URLSearchParams({...e});return await se.fetchJson(`${se.BASE_URL}/filters?${r}`)})()}async getByFilterCategory(e){return await se.handleErrors(async()=>{const r=new URLSearchParams({...e});return await se.fetchJson(`${se.BASE_URL}/exercises?${r}`)})()}async getOneExercises(e){return await se.handleErrors(async()=>await se.fetchJson(`${se.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,t){return await se.handleErrors(async()=>{const s={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await se.fetchJson(`${se.BASE_URL}/exercises/${e}/rating`,s)})()}async addSubscription(e){return await se.handleErrors(async()=>{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await se.fetchJson(`${se.BASE_URL}/subscription`,r)})()}};Js(se,"BASE_URL","https://your-energy.b.goit.study/api");let ki=se;const As=new ki;var Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xr={exports:{}},xu=xr.exports,Uu;function Xy(){return Uu||(Uu=1,function(n,e){(function(t,r){n.exports=r(t)})(typeof Mu<"u"?Mu:window||xu.window||xu.global,function(t){var r={},s="iziToast";document.querySelector("body");var o=!!/Mobi/.test(navigator.userAgent),a=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),c=typeof InstallTrigger<"u",d="ontouchstart"in document.documentElement,p=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],E={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},I=568,b={};r.children={};var S={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var D=function(P,_){_=_||{bubbles:!1,cancelable:!1,detail:void 0};var h=document.createEvent("CustomEvent");return h.initCustomEvent(P,_.bubbles,_.cancelable,_.detail),h};D.prototype=window.Event.prototype,window.CustomEvent=D}var V=function(P,_,h){if(Object.prototype.toString.call(P)==="[object Object]")for(var f in P)Object.prototype.hasOwnProperty.call(P,f)&&_.call(h,P[f],f,P);else if(P)for(var y=0,T=P.length;y<T;y++)_.call(h,P[y],y,P)},N=function(P,_){var h={};return V(P,function(f,y){h[y]=P[y]}),V(_,function(f,y){h[y]=_[y]}),h},j=function(P){var _=document.createDocumentFragment(),h=document.createElement("div");for(h.innerHTML=P;h.firstChild;)_.appendChild(h.firstChild);return _},W=function(P){var _=btoa(encodeURIComponent(P));return _.replace(/=/g,"")},K=function(P){return P.substring(0,1)=="#"||P.substring(0,3)=="rgb"||P.substring(0,3)=="hsl"},te=function(P){try{return btoa(atob(P))==P}catch{return!1}},ae=function(){return{move:function(P,_,h,f){var y,T=.3,v=180;f!==0&&(P.classList.add(s+"-dragged"),P.style.transform="translateX("+f+"px)",f>0?(y=(v-f)/v,y<T&&_.hide(N(h,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),P,"drag")):(y=(v+f)/v,y<T&&_.hide(N(h,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),P,"drag")),P.style.opacity=y,y<T&&((a||c)&&(P.style.left=f+"px"),P.parentNode.style.opacity=T,this.stopMoving(P,null)))},startMoving:function(P,_,h,f){f=f||window.event;var y=d?f.touches[0].clientX:f.clientX,T=P.style.transform.replace("px)","");T=T.replace("translateX(","");var v=y-T;h.transitionIn&&P.classList.remove(h.transitionIn),h.transitionInMobile&&P.classList.remove(h.transitionInMobile),P.style.transition="",d?document.ontouchmove=function(g){g.preventDefault(),g=g||window.event;var q=g.touches[0].clientX,Y=q-v;ae.move(P,_,h,Y)}:document.onmousemove=function(g){g.preventDefault(),g=g||window.event;var q=g.clientX,Y=q-v;ae.move(P,_,h,Y)}},stopMoving:function(P,_){d?document.ontouchmove=function(){}:document.onmousemove=function(){},P.style.opacity="",P.style.transform="",P.classList.contains(s+"-dragged")&&(P.classList.remove(s+"-dragged"),P.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){P.style.transition=""},400))}}}();return r.setSetting=function(P,_,h){r.children[P][_]=h},r.getSetting=function(P,_){return r.children[P][_]},r.destroy=function(){V(document.querySelectorAll("."+s+"-overlay"),function(P,_){P.remove()}),V(document.querySelectorAll("."+s+"-wrapper"),function(P,_){P.remove()}),V(document.querySelectorAll("."+s),function(P,_){P.remove()}),this.children={},document.removeEventListener(s+"-opened",{},!1),document.removeEventListener(s+"-opening",{},!1),document.removeEventListener(s+"-closing",{},!1),document.removeEventListener(s+"-closed",{},!1),document.removeEventListener("keyup",{},!1),b={}},r.settings=function(P){r.destroy(),b=P,S=N(S,P||{})},V(E,function(P,_){r[_]=function(h){var f=N(b,h||{});f=N(P,f||{}),this.show(f)}}),r.progress=function(P,_,h){var f=this,y=_.getAttribute("data-iziToast-ref"),T=N(this.children[y],P||{}),v=_.querySelector("."+s+"-progressbar div");return{start:function(){typeof T.time.REMAINING>"u"&&(_.classList.remove(s+"-reseted"),v!==null&&(v.style.transition="width "+T.timeout+"ms "+T.progressBarEasing,v.style.width="0%"),T.time.START=new Date().getTime(),T.time.END=T.time.START+T.timeout,T.time.TIMER=setTimeout(function(){clearTimeout(T.time.TIMER),_.classList.contains(s+"-closing")||(f.hide(T,_,"timeout"),typeof h=="function"&&h.apply(f))},T.timeout),f.setSetting(y,"time",T.time))},pause:function(){if(typeof T.time.START<"u"&&!_.classList.contains(s+"-paused")&&!_.classList.contains(s+"-reseted")){if(_.classList.add(s+"-paused"),T.time.REMAINING=T.time.END-new Date().getTime(),clearTimeout(T.time.TIMER),f.setSetting(y,"time",T.time),v!==null){var g=window.getComputedStyle(v),q=g.getPropertyValue("width");v.style.transition="none",v.style.width=q}typeof h=="function"&&setTimeout(function(){h.apply(f)},10)}},resume:function(){typeof T.time.REMAINING<"u"?(_.classList.remove(s+"-paused"),v!==null&&(v.style.transition="width "+T.time.REMAINING+"ms "+T.progressBarEasing,v.style.width="0%"),T.time.END=new Date().getTime()+T.time.REMAINING,T.time.TIMER=setTimeout(function(){clearTimeout(T.time.TIMER),_.classList.contains(s+"-closing")||(f.hide(T,_,"timeout"),typeof h=="function"&&h.apply(f))},T.time.REMAINING),f.setSetting(y,"time",T.time)):this.start()},reset:function(){clearTimeout(T.time.TIMER),delete T.time.REMAINING,f.setSetting(y,"time",T.time),_.classList.add(s+"-reseted"),_.classList.remove(s+"-paused"),v!==null&&(v.style.transition="none",v.style.width="100%"),typeof h=="function"&&setTimeout(function(){h.apply(f)},10)}}},r.hide=function(P,_,h){typeof _!="object"&&(_=document.querySelector(_));var f=this,y=N(this.children[_.getAttribute("data-iziToast-ref")],P||{});y.closedBy=h||null,delete y.time.REMAINING,_.classList.add(s+"-closing"),function(){var g=document.querySelector("."+s+"-overlay");if(g!==null){var q=g.getAttribute("data-iziToast-ref");q=q.split(",");var Y=q.indexOf(String(y.ref));Y!==-1&&q.splice(Y,1),g.setAttribute("data-iziToast-ref",q.join()),q.length===0&&(g.classList.remove("fadeIn"),g.classList.add("fadeOut"),setTimeout(function(){g.remove()},700))}}(),y.transitionIn&&_.classList.remove(y.transitionIn),y.transitionInMobile&&_.classList.remove(y.transitionInMobile),o||window.innerWidth<=I?y.transitionOutMobile&&_.classList.add(y.transitionOutMobile):y.transitionOut&&_.classList.add(y.transitionOut);var T=_.parentNode.offsetHeight;_.parentNode.style.height=T+"px",_.style.pointerEvents="none",(!o||window.innerWidth>I)&&(_.parentNode.style.transitionDelay="0.2s");try{var v=new CustomEvent(s+"-closing",{detail:y,bubbles:!0,cancelable:!0});document.dispatchEvent(v)}catch(g){console.warn(g)}setTimeout(function(){_.parentNode.style.height="0px",_.parentNode.style.overflow="",setTimeout(function(){delete f.children[y.ref],_.parentNode.remove();try{var g=new CustomEvent(s+"-closed",{detail:y,bubbles:!0,cancelable:!0});document.dispatchEvent(g)}catch(q){console.warn(q)}typeof y.onClosed<"u"&&y.onClosed.apply(null,[y,_,h])},1e3)},200),typeof y.onClosing<"u"&&y.onClosing.apply(null,[y,_,h])},r.show=function(P){var _=this,h=N(b,P||{});if(h=N(S,h),h.time={},h.id===null&&(h.id=W(h.title+h.message+h.color)),h.displayMode===1||h.displayMode=="once")try{if(document.querySelectorAll("."+s+"#"+h.id).length>0)return!1}catch{console.warn("["+s+"] Could not find an element with this selector: #"+h.id+". Try to set an valid id.")}if(h.displayMode===2||h.displayMode=="replace")try{V(document.querySelectorAll("."+s+"#"+h.id),function(v,g){_.hide(h,v,"replaced")})}catch{console.warn("["+s+"] Could not find an element with this selector: #"+h.id+". Try to set an valid id.")}h.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),r.children[h.ref]=h;var f={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:h.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};f.toast.setAttribute("data-iziToast-ref",h.ref),f.toast.appendChild(f.toastBody),f.toastCapsule.appendChild(f.toast),function(){if(f.toast.classList.add(s),f.toast.classList.add(s+"-opening"),f.toastCapsule.classList.add(s+"-capsule"),f.toastBody.classList.add(s+"-body"),f.toastTexts.classList.add(s+"-texts"),o||window.innerWidth<=I?h.transitionInMobile&&f.toast.classList.add(h.transitionInMobile):h.transitionIn&&f.toast.classList.add(h.transitionIn),h.class){var v=h.class.split(" ");V(v,function(g,q){f.toast.classList.add(g)})}h.id&&(f.toast.id=h.id),h.rtl&&(f.toast.classList.add(s+"-rtl"),f.toast.setAttribute("dir","rtl")),h.layout>1&&f.toast.classList.add(s+"-layout"+h.layout),h.balloon&&f.toast.classList.add(s+"-balloon"),h.maxWidth&&(isNaN(h.maxWidth)?f.toast.style.maxWidth=h.maxWidth:f.toast.style.maxWidth=h.maxWidth+"px"),(h.theme!==""||h.theme!=="light")&&f.toast.classList.add(s+"-theme-"+h.theme),h.color&&(K(h.color)?f.toast.style.background=h.color:f.toast.classList.add(s+"-color-"+h.color)),h.backgroundColor&&(f.toast.style.background=h.backgroundColor,h.balloon&&(f.toast.style.borderColor=h.backgroundColor))}(),function(){h.image&&(f.cover.classList.add(s+"-cover"),f.cover.style.width=h.imageWidth+"px",te(h.image.replace(/ /g,""))?f.cover.style.backgroundImage="url(data:image/png;base64,"+h.image.replace(/ /g,"")+")":f.cover.style.backgroundImage="url("+h.image+")",h.rtl?f.toastBody.style.marginRight=h.imageWidth+10+"px":f.toastBody.style.marginLeft=h.imageWidth+10+"px",f.toast.appendChild(f.cover))}(),function(){h.close?(f.buttonClose=document.createElement("button"),f.buttonClose.type="button",f.buttonClose.classList.add(s+"-close"),f.buttonClose.addEventListener("click",function(v){v.target,_.hide(h,f.toast,"button")}),f.toast.appendChild(f.buttonClose)):h.rtl?f.toast.style.paddingLeft="18px":f.toast.style.paddingRight="18px"}(),function(){h.progressBar&&(f.progressBar=document.createElement("div"),f.progressBarDiv=document.createElement("div"),f.progressBar.classList.add(s+"-progressbar"),f.progressBarDiv.style.background=h.progressBarColor,f.progressBar.appendChild(f.progressBarDiv),f.toast.appendChild(f.progressBar)),h.timeout&&(h.pauseOnHover&&!h.resetOnHover&&(f.toast.addEventListener("mouseenter",function(v){_.progress(h,f.toast).pause()}),f.toast.addEventListener("mouseleave",function(v){_.progress(h,f.toast).resume()})),h.resetOnHover&&(f.toast.addEventListener("mouseenter",function(v){_.progress(h,f.toast).reset()}),f.toast.addEventListener("mouseleave",function(v){_.progress(h,f.toast).start()})))}(),function(){h.iconUrl?(f.icon.setAttribute("class",s+"-icon"),f.icon.setAttribute("src",h.iconUrl)):h.icon&&(f.icon.setAttribute("class",s+"-icon "+h.icon),h.iconText&&f.icon.appendChild(document.createTextNode(h.iconText)),h.iconColor&&(f.icon.style.color=h.iconColor)),(h.icon||h.iconUrl)&&(h.rtl?f.toastBody.style.paddingRight="33px":f.toastBody.style.paddingLeft="33px",f.toastBody.appendChild(f.icon))}(),function(){h.title.length>0&&(f.strong=document.createElement("strong"),f.strong.classList.add(s+"-title"),f.strong.appendChild(j(h.title)),f.toastTexts.appendChild(f.strong),h.titleColor&&(f.strong.style.color=h.titleColor),h.titleSize&&(isNaN(h.titleSize)?f.strong.style.fontSize=h.titleSize:f.strong.style.fontSize=h.titleSize+"px"),h.titleLineHeight&&(isNaN(h.titleSize)?f.strong.style.lineHeight=h.titleLineHeight:f.strong.style.lineHeight=h.titleLineHeight+"px")),h.message.length>0&&(f.p=document.createElement("p"),f.p.classList.add(s+"-message"),f.p.appendChild(j(h.message)),f.toastTexts.appendChild(f.p),h.messageColor&&(f.p.style.color=h.messageColor),h.messageSize&&(isNaN(h.titleSize)?f.p.style.fontSize=h.messageSize:f.p.style.fontSize=h.messageSize+"px"),h.messageLineHeight&&(isNaN(h.titleSize)?f.p.style.lineHeight=h.messageLineHeight:f.p.style.lineHeight=h.messageLineHeight+"px")),h.title.length>0&&h.message.length>0&&(h.rtl?f.strong.style.marginLeft="10px":h.layout!==2&&!h.rtl&&(f.strong.style.marginRight="10px"))}(),f.toastBody.appendChild(f.toastTexts);var y;(function(){h.inputs.length>0&&(f.inputs.classList.add(s+"-inputs"),V(h.inputs,function(v,g){f.inputs.appendChild(j(v[0])),y=f.inputs.childNodes,y[g].classList.add(s+"-inputs-child"),v[3]&&setTimeout(function(){y[g].focus()},300),y[g].addEventListener(v[1],function(q){var Y=v[2];return Y(_,f.toast,this,q)})}),f.toastBody.appendChild(f.inputs))})(),function(){h.buttons.length>0&&(f.buttons.classList.add(s+"-buttons"),V(h.buttons,function(v,g){f.buttons.appendChild(j(v[0]));var q=f.buttons.childNodes;q[g].classList.add(s+"-buttons-child"),v[2]&&setTimeout(function(){q[g].focus()},300),q[g].addEventListener("click",function(Y){Y.preventDefault();var bs=v[1];return bs(_,f.toast,this,Y,y)})})),f.toastBody.appendChild(f.buttons)}(),h.message.length>0&&(h.inputs.length>0||h.buttons.length>0)&&(f.p.style.marginBottom="0"),(h.inputs.length>0||h.buttons.length>0)&&(h.rtl?f.toastTexts.style.marginLeft="10px":f.toastTexts.style.marginRight="10px",h.inputs.length>0&&h.buttons.length>0&&(h.rtl?f.inputs.style.marginLeft="8px":f.inputs.style.marginRight="8px")),function(){f.toastCapsule.style.visibility="hidden",setTimeout(function(){var v=f.toast.offsetHeight,g=f.toast.currentStyle||window.getComputedStyle(f.toast),q=g.marginTop;q=q.split("px"),q=parseInt(q[0]);var Y=g.marginBottom;Y=Y.split("px"),Y=parseInt(Y[0]),f.toastCapsule.style.visibility="",f.toastCapsule.style.height=v+Y+q+"px",setTimeout(function(){f.toastCapsule.style.height="auto",h.target&&(f.toastCapsule.style.overflow="visible")},500),h.timeout&&_.progress(h,f.toast).start()},100)}(),function(){var v=h.position;if(h.target)f.wrapper=document.querySelector(h.target),f.wrapper.classList.add(s+"-target"),h.targetFirst?f.wrapper.insertBefore(f.toastCapsule,f.wrapper.firstChild):f.wrapper.appendChild(f.toastCapsule);else{if(p.indexOf(h.position)==-1){console.warn("["+s+`] Incorrect position.
It can be › `+p);return}o||window.innerWidth<=I?h.position=="bottomLeft"||h.position=="bottomRight"||h.position=="bottomCenter"?v=s+"-wrapper-bottomCenter":h.position=="topLeft"||h.position=="topRight"||h.position=="topCenter"?v=s+"-wrapper-topCenter":v=s+"-wrapper-center":v=s+"-wrapper-"+v,f.wrapper=document.querySelector("."+s+"-wrapper."+v),f.wrapper||(f.wrapper=document.createElement("div"),f.wrapper.classList.add(s+"-wrapper"),f.wrapper.classList.add(v),document.body.appendChild(f.wrapper)),h.position=="topLeft"||h.position=="topCenter"||h.position=="topRight"?f.wrapper.insertBefore(f.toastCapsule,f.wrapper.firstChild):f.wrapper.appendChild(f.toastCapsule)}isNaN(h.zindex)?console.warn("["+s+"] Invalid zIndex."):f.wrapper.style.zIndex=h.zindex}(),function(){h.overlay&&(document.querySelector("."+s+"-overlay.fadeIn")!==null?(f.overlay=document.querySelector("."+s+"-overlay"),f.overlay.setAttribute("data-iziToast-ref",f.overlay.getAttribute("data-iziToast-ref")+","+h.ref),!isNaN(h.zindex)&&h.zindex!==null&&(f.overlay.style.zIndex=h.zindex-1)):(f.overlay.classList.add(s+"-overlay"),f.overlay.classList.add("fadeIn"),f.overlay.style.background=h.overlayColor,f.overlay.setAttribute("data-iziToast-ref",h.ref),!isNaN(h.zindex)&&h.zindex!==null&&(f.overlay.style.zIndex=h.zindex-1),document.querySelector("body").appendChild(f.overlay)),h.overlayClose?(f.overlay.removeEventListener("click",{}),f.overlay.addEventListener("click",function(v){_.hide(h,f.toast,"overlay")})):f.overlay.removeEventListener("click",{}))}(),function(){if(h.animateInside){f.toast.classList.add(s+"-animateInside");var v=[200,100,300];(h.transitionIn=="bounceInLeft"||h.transitionIn=="bounceInRight")&&(v=[400,200,400]),h.title.length>0&&setTimeout(function(){f.strong.classList.add("slideIn")},v[0]),h.message.length>0&&setTimeout(function(){f.p.classList.add("slideIn")},v[1]),(h.icon||h.iconUrl)&&setTimeout(function(){f.icon.classList.add("revealIn")},v[2]);var g=150;h.buttons.length>0&&f.buttons&&setTimeout(function(){V(f.buttons.childNodes,function(q,Y){setTimeout(function(){q.classList.add("revealIn")},g),g=g+150})},h.inputs.length>0?150:0),h.inputs.length>0&&f.inputs&&(g=150,V(f.inputs.childNodes,function(q,Y){setTimeout(function(){q.classList.add("revealIn")},g),g=g+150}))}}(),h.onOpening.apply(null,[h,f.toast]);try{var T=new CustomEvent(s+"-opening",{detail:h,bubbles:!0,cancelable:!0});document.dispatchEvent(T)}catch(v){console.warn(v)}setTimeout(function(){f.toast.classList.remove(s+"-opening"),f.toast.classList.add(s+"-opened");try{var v=new CustomEvent(s+"-opened",{detail:h,bubbles:!0,cancelable:!0});document.dispatchEvent(v)}catch(g){console.warn(g)}h.onOpened.apply(null,[h,f.toast])},1e3),h.drag&&(d?(f.toast.addEventListener("touchstart",function(v){ae.startMoving(this,_,h,v)},!1),f.toast.addEventListener("touchend",function(v){ae.stopMoving(this,v)},!1)):(f.toast.addEventListener("mousedown",function(v){v.preventDefault(),ae.startMoving(this,_,h,v)},!1),f.toast.addEventListener("mouseup",function(v){v.preventDefault(),ae.stopMoving(this,v)},!1))),h.closeOnEscape&&document.addEventListener("keyup",function(v){v=v||window.event,v.keyCode==27&&_.hide(h,f.toast,"esc")}),h.closeOnClick&&f.toast.addEventListener("click",function(v){_.hide(h,f.toast,"toast")}),_.toast=f.toast},r})}(xr)),xr.exports}var Yy=Xy();const Ur=Jy(Yy);Ur.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class Zy{error(e){Ur.error({title:"Error",message:e})}success(e){Ur.success({title:"OK",message:e})}info(e){Ur.info({title:"Info",message:e})}}const Fu=new Zy;function ev(n){if(n)return n[0].toUpperCase()+n.slice(1)}const st=class st{open(){(!st.loaderEl||st.loaderEl.classList.contains("js-loader"))&&(st.loaderEl.style.display="block")}close(){st.loaderEl&&(st.loaderEl.style.display="none")}};Js(st,"loaderEl",document.querySelector(".js-loader"));let Ni=st;const Tv=new Ni;class tv{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const ss=new tv;function nv(n){const e=(n%1).toFixed(1)*100;let t='<div class="rating-container-not-cursore" data-rating="0">';for(let r=1;r<=n+1;r+=1)r<=n?t+=`<span class="star-js selected" data-value="${r}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${pe}#icon-star"></use>
              />
            </svg></span>`:e>0&&(t+=`<span class="last-star-js" data-value="${r}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop offset="${100-e}%" stop-color="rgba(244, 244, 244, 0.20)" />
                    <stop offset="${e}%" stop-color="#EEA10C" />
                    </linearGradient>
                    </defs>
                  </svg></span>`);for(let r=n+1;r<=5;r+=1)t+=`<span class="star-js" data-value="${r}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${pe}#icon-star"></use>
              />
            </svg></span>`;return t+"</div>"}function rv(n){return n?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${pe}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${pe}#icon-heart"></use>
                </svg>
              </button>`}function sv(n){return`<div class="modal-info" data-id="${n._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${pe}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${n.gifUrl}" alt="${n.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${ev(n.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${n.rating.toFixed(1)}</p>${nv(n.rating)}</div>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">${n.target}</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">${n.bodyPart}</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">${n.equipment}</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">${n.popularity}</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">${n.burnedCalories}/${n.time} min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        ${n.description}
      </p>
      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${n.favorite}">
          ${rv(n.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function iv(n){return`<div class="modal-get-raiting" data-id="${n}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${pe}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${pe}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="2"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${pe}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="3"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${pe}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="4"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${pe}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="5"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${pe}#icon-star"></use>
              />
            </svg></span>
        </div>
      <form class="form raiting-form">
        <label class="raiting-form-field">
          <input
            type="Email"
            class="raiting-form-field-input"
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <label class="form-comment">
          <textarea
            class="raiting-form-field-comment"
            name="user_comment"
            placeholder="Your comment"
          ></textarea>
        </label>
        <button class="raiting-form-submit" type="submit">Send</button>
      </form>
    </div>
  </div>`}function ov(){const n=document.querySelector(".rating-container-js"),e=n.querySelectorAll(".exercises_btn_start_icon_rating");let t=n.querySelector(".user-rating-js");e.forEach((a,c)=>{a.addEventListener("mouseover",()=>r(c)),a.addEventListener("mouseout",s),a.addEventListener("click",()=>o(c+1))});function r(a){s();for(let c=0;c<=a;c++)e[c].classList.add("hovered"),t.textContent=`${c+1}`}function s(){e.forEach(a=>{const c=n.dataset.rating;a.classList.remove("hovered"),t.textContent=`${c||0}`})}function o(a){n.setAttribute("data-rating",a),e.forEach((c,d)=>{d+1<=a?c.classList.add("selected"):c.classList.remove("selected")})}}let Qt=[];const Rr=JSON.parse(localStorage.getItem("favorites"));Rr!=null&&Rr.length&&Qt.push(...Rr);function av(n){Fy(n),Qt.push(n),localStorage.setItem("favorites",JSON.stringify(Qt))}const nh=n=>{By(n),Qt=Qt.filter(e=>e._id!==n),localStorage.setItem("favorites",JSON.stringify([...Qt]))},uv=document.querySelector(".filter-list-js");let Bu="";const cv=["BUTTON","svg","use","P"];let qu,ju,zu;async function lv(n){n.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,r=document.querySelector(".rating-container-js").dataset.rating,s=document.querySelector(".raiting-form-field-input").value,o=document.querySelector(".raiting-form-field-comment").value,a={rate:Number(r),email:s,review:o},c=await As.addExercisesRate(e,a);c.message?Fu.error(`${c.message}`):(Fu.success(`Thank you for your mark - ${a.rate} for ${c.name}`),ss.close())}async function hv(){const n=document.querySelector(".modal-info").dataset.id;ss.close(),ss.open(iv(n)),ov(),zu=document.querySelector(".raiting-form"),zu.addEventListener("submit",lv)}async function dv(){const n=document.querySelector(".refresh-button-js"),e=document.querySelector(".modal-info").dataset.id,r=window.location.href.endsWith("favorites.html");if(n.dataset.favorite==="false"){n.innerHTML=`
      <button class="add-favorite-js" type="button">
        <span class="remote-favorites">Remove from favorites</span>
        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
          <use href="${pe}#icon-trash"></use>
        </svg>
      </button>`,n.dataset.favorite="true";const s=await As.getOneExercises(e);av(s),r&&rs()}else n.innerHTML=`
      <button class="add-favorite-js" type="button">
        <span>Add to favorites</span>
        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
          <use href="${pe}#icon-heart"></use>
        </svg>
      </button>`,n.dataset.favorite="false",nh(e),r&&rs()}function fv({target:n}){const{nodeName:e,classList:t,dataset:r}=n;if(cv.includes(e)&&!t.contains("favourites_btn_trash_icon")&&!t.contains("favourites_btn_workout"))return Bu=r.id,pv(Bu);if(t.contains("favourites_btn_trash_icon")){const s=r.id;nh(s),rs()}}const pv=async n=>{const e=await As.getOneExercises(n),t=localStorage.getItem("favorites");if(t){const s=JSON.parse(t).some(({_id:o})=>o===n);e.favorite=s}else e.favorite=!1;ss.open(sv(e)),ju=document.querySelector(".refresh-button-js"),qu=document.querySelector(".add-rating"),qu.addEventListener("click",hv),ju.addEventListener("click",dv)};uv.addEventListener("click",fv);const is={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",mv);async function mv(){const n=localStorage.getItem("quote");if(n){const e=new Date().toDateString(),{date:t,quote:r,author:s}=JSON.parse(n);e!==t?$u():(is.quoteText.innerHTML=r,is.quoteAuthor.innerHTML=s)}else $u()}async function $u(){const n=await As.getQuotes(),{author:e,quote:t}=n,r={author:e,quote:t,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(r)),is.quoteText.innerHTML=t,is.quoteAuthor.innerHTML=e}function gv(){const n=document.createElement("button");n.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const t=document.createElementNS("http://www.w3.org/2000/svg","use");t.setAttributeNS("http://www.w3.org/1999/xlink","href",`${pe}#icon-arrow`),e.appendChild(t),n.appendChild(e),n.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?n.classList.remove("hidden"):n.classList.add("hidden")}),document.body.appendChild(n)}gv();export{yr as a,ev as c,As as f,Ur as i,Tv as l,Fu as m,pe as s};
