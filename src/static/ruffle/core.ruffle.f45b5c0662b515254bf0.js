"use strict";(self.webpackChunkruffle_selfhosted=self.webpackChunkruffle_selfhosted||[]).push([[966],{762:(e,n,t)=>{function _(e,n){const t=e.length,_=e.getChannelData(0),r=e.getChannelData(1);let b=0,c=0;for(;c<t;)_[c]=n[b],r[c]=n[b+1],c++,b+=2}t.d(n,{tM:()=>_})},966:(e,n,t)=>{t.r(n),t.d(n,{Ruffle:()=>D,default:()=>j,initSync:()=>V});var _=t(762);e=t.hmd(e);const r="undefined"!=typeof AudioContext?AudioContext:"undefined"!=typeof webkitAudioContext?webkitAudioContext:void 0;let b;const c=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let f=new Uint8Array;function o(){return 0===f.byteLength&&(f=new Uint8Array(b.memory.buffer)),f}function i(e,n){return c.decode(o().subarray(e,e+n))}let u=0;const a=new TextEncoder("utf-8"),g="function"==typeof a.encodeInto?function(e,n){return a.encodeInto(e,n)}:function(e,n){const t=a.encode(e);return n.set(t),{read:e.length,written:t.length}};function w(e,n,t){if(void 0===t){const t=a.encode(e),_=n(t.length);return o().subarray(_,_+t.length).set(t),u=t.length,_}let _=e.length,r=n(_);const b=o();let c=0;for(;c<_;c++){const n=e.charCodeAt(c);if(n>127)break;b[r+c]=n}if(c!==_){0!==c&&(e=e.slice(c)),r=t(r,_,_=c+3*e.length);const n=o().subarray(r+c,r+_);c+=g(e,n).written}return u=c,r}function d(e){return null==e}let s=new Int32Array;function l(){return 0===s.byteLength&&(s=new Int32Array(b.memory.buffer)),s}let m=new Float64Array;function y(){return 0===m.byteLength&&(m=new Float64Array(b.memory.buffer)),m}let p=new BigInt64Array;function h(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return`${e}`;if("string"==n)return`"${e}"`;if("symbol"==n){const n=e.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==n){const n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(e)){const n=e.length;let t="[";n>0&&(t+=h(e[0]));for(let _=1;_<n;_++)t+=", "+h(e[_]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(e));let _;if(!(t.length>1))return toString.call(e);if(_=t[1],"Object"==_)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:_}function x(e,n,t,_){const r={a:e,b:n,cnt:1,dtor:t},c=(...e)=>{r.cnt++;const n=r.a;r.a=0;try{return _(n,r.b,...e)}finally{0==--r.cnt?b.__wbindgen_export_3.get(r.dtor)(n,r.b):r.a=n}};return c.original=r,c}function v(e,n){b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h424e4470cf7c7a9d(e,n)}function A(e,n,t){b.closure366_externref_shim(e,n,t)}function S(e,n,t){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb73bf7feb23ce812(e,n,t)}function C(e,n,t){b.closure2917_externref_shim(e,n,t)}let R=new Float32Array;function T(e,n){return(0===R.byteLength&&(R=new Float32Array(b.memory.buffer)),R).subarray(e/4,e/4+n)}function E(e){const n=b.__externref_table_alloc();return b.__wbindgen_export_2.set(n,e),n}function F(e,n){try{return e.apply(this,n)}catch(e){const n=E(e);b.__wbindgen_exn_store(n)}}function P(e){const n=b.__wbindgen_export_2.get(e);return b.__externref_table_dealloc(e),n}let k=new Uint32Array;function M(e,n){return o().subarray(e/1,e/1+n)}function L(e,n){return y().subarray(e/8,e/8+n)}let I=new Uint8ClampedArray;function O(e,n){return(0===I.byteLength&&(I=new Uint8ClampedArray(b.memory.buffer)),I).subarray(e/1,e/1+n)}function B(e){return()=>{throw new Error(`${e} is not defined`)}}class D{static __wrap(e){const n=Object.create(D.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();b.__wbg_ruffle_free(e)}constructor(e,n,t){return b.ruffle_new(e,n,t)}stream_from(e,n){try{const _=b.__wbindgen_add_to_stack_pointer(-16),r=w(e,b.__wbindgen_malloc,b.__wbindgen_realloc),c=u;b.ruffle_stream_from(_,this.ptr,r,c,n);var t=l()[_/4+0];if(l()[_/4+1])throw P(t)}finally{b.__wbindgen_add_to_stack_pointer(16)}}load_data(e,n){try{const _=b.__wbindgen_add_to_stack_pointer(-16);b.ruffle_load_data(_,this.ptr,e,n);var t=l()[_/4+0];if(l()[_/4+1])throw P(t)}finally{b.__wbindgen_add_to_stack_pointer(16)}}play(){b.ruffle_play(this.ptr)}pause(){b.ruffle_pause(this.ptr)}is_playing(){return 0!==b.ruffle_is_playing(this.ptr)}volume(){return b.ruffle_volume(this.ptr)}set_volume(e){b.ruffle_set_volume(this.ptr,e)}renderer_name(){return b.ruffle_renderer_name(this.ptr)}prepare_context_menu(){return b.ruffle_prepare_context_menu(this.ptr)}run_context_menu_callback(e){b.ruffle_run_context_menu_callback(this.ptr,e)}set_fullscreen(e){b.ruffle_set_fullscreen(this.ptr,e)}clear_custom_menu_items(){b.ruffle_clear_custom_menu_items(this.ptr)}destroy(){b.ruffle_destroy(this.ptr)}call_exposed_callback(e,n){const t=w(e,b.__wbindgen_malloc,b.__wbindgen_realloc),_=u,r=function(e,n){const t=n(4*e.length),_=(0===k.byteLength&&(k=new Uint32Array(b.memory.buffer)),k);for(let n=0;n<e.length;n++)_[t/4+n]=E(e[n]);return u=e.length,t}(n,b.__wbindgen_malloc),c=u;return b.ruffle_call_exposed_callback(this.ptr,t,_,r,c)}set_trace_observer(e){b.ruffle_set_trace_observer(this.ptr,e)}audio_context(){return b.ruffle_audio_context(this.ptr)}static is_wasm_simd_used(){return 0!==b.ruffle_is_wasm_simd_used()}}function W(){const n={wbg:{}};return n.wbg.__wbindgen_is_function=function(e){return"function"==typeof e},n.wbg.__wbindgen_error_new=function(e,n){return new Error(i(e,n))},n.wbg.__wbindgen_string_new=function(e,n){return i(e,n)},n.wbg.__wbg_ruffle_new=function(e){return D.__wrap(e)},n.wbg.__wbindgen_cb_drop=function(e){const n=e.original;return 1==n.cnt--&&(n.a=0,!0)},n.wbg.__wbindgen_boolean_get=function(e){return"boolean"==typeof e?e?1:0:2},n.wbg.__wbg_copyToAudioBufferInterleaved_7975d0071e3cdc32=function(e,n,t){(0,_.tM)(e,T(n,t))},n.wbg.__wbg_setFullscreen_62846f9d4b5f6f48=function(){return F((function(e,n){e.setFullscreen(0!==n)}),arguments)},n.wbg.__wbindgen_string_get=function(e,n){const t="string"==typeof n?n:void 0;var _=d(t)?0:w(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=u;l()[e/4+1]=r,l()[e/4+0]=_},n.wbg.__wbg_displayUnsupportedMessage_cb34e3c4ccb484e1=function(e){e.displayUnsupportedMessage()},n.wbg.__wbg_displayRootMovieDownloadFailedMessage_c90a7f0f0b73e4df=function(e){e.displayRootMovieDownloadFailedMessage()},n.wbg.__wbg_displayMessage_e81323a872d4e00a=function(e,n,t){e.displayMessage(i(n,t))},n.wbg.__wbg_setMetadata_11d904a2018b04c1=function(e,n){e.setMetadata(n)},n.wbg.__wbg_onCallbackAvailable_44f6acac6389d11d=function(e,n,t){e.onCallbackAvailable(i(n,t))},n.wbg.__wbg_onFSCommand_b13bfd8f38fc3115=function(){return F((function(e,n,t,_,r){return e.onFSCommand(i(n,t),i(_,r))}),arguments)},n.wbg.__wbindgen_number_get=function(e,n){const t="number"==typeof n?n:void 0;y()[e/8+1]=d(t)?0:t,l()[e/4+0]=!d(t)},n.wbg.__wbindgen_number_new=function(e){return e},n.wbg.__wbg_new_f9bb493369a83c12=function(e,n){return new Error(i(e,n))},n.wbg.__wbg_panic_cc9551d881f701ae=function(e,n){e.panic(n)},n.wbg.__wbindgen_is_undefined=function(e){return void 0===e},n.wbg.__wbindgen_in=function(e,n){return e in n},n.wbg.__wbindgen_is_bigint=function(e){return"bigint"==typeof e},n.wbg.__wbindgen_bigint_from_u64=function(e){return BigInt.asUintN(64,e)},n.wbg.__wbindgen_jsval_eq=function(e,n){return e===n},n.wbg.__wbindgen_is_string=function(e){return"string"==typeof e},n.wbg.__wbindgen_is_object=function(e){return"object"==typeof e&&null!==e},n.wbg.__wbg_new_abda76e883ba8a5f=function(){return new Error},n.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const t=w(n.stack,b.__wbindgen_malloc,b.__wbindgen_realloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t},n.wbg.__wbg_error_f851667af71bcfc6=function(e,n){try{console.error(i(e,n))}finally{b.__wbindgen_free(e,n)}},n.wbg.__wbindgen_jsval_loose_eq=function(e,n){return e==n},n.wbg.__wbg_String_91fba7ded13ba54c=function(e,n){const t=w(String(n),b.__wbindgen_malloc,b.__wbindgen_realloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t},n.wbg.__wbg_getwithrefkey_15c62c2b8546208d=function(e,n){return e[n]},n.wbg.__wbg_set_20cbc34131e76824=function(e,n,t){e[n]=t},n.wbg.__wbg_randomFillSync_6894564c2c334c42=function(){return F((function(e,n,t){e.randomFillSync(M(n,t))}),arguments)},n.wbg.__wbg_getRandomValues_805f1c3d65988a5a=function(){return F((function(e,n){e.getRandomValues(n)}),arguments)},n.wbg.__wbg_crypto_e1d53a1d73fb10b8=function(e){return e.crypto},n.wbg.__wbg_process_038c26bf42b093f8=function(e){return e.process},n.wbg.__wbg_versions_ab37218d2f0b24a8=function(e){return e.versions},n.wbg.__wbg_node_080f4b19d15bc1fe=function(e){return e.node},n.wbg.__wbg_msCrypto_6e7d3e1f92610cbb=function(e){return e.msCrypto},n.wbg.__wbg_require_78a3dcfbdba9cbce=function(){return F((function(){return e.require}),arguments)},n.wbg.__wbg_instanceof_WebGl2RenderingContext_fcfa91cd777063f3=function(e){let n;try{n=e instanceof WebGL2RenderingContext}catch{n=!1}return n},n.wbg.__wbg_bindVertexArray_9d12800e272184b0=function(e,n){e.bindVertexArray(n)},n.wbg.__wbg_blitFramebuffer_cdc1ebf043046b70=function(e,n,t,_,r,b,c,f,o,i,u){e.blitFramebuffer(n,t,_,r,b,c,f,o,i>>>0,u>>>0)},n.wbg.__wbg_createVertexArray_8467a75e68fec199=function(e){const n=e.createVertexArray();return d(n)?0:E(n)},n.wbg.__wbg_deleteVertexArray_00194a31d79df7e5=function(e,n){e.deleteVertexArray(n)},n.wbg.__wbg_renderbufferStorageMultisample_3e76453eed60554b=function(e,n,t,_,r,b){e.renderbufferStorageMultisample(n>>>0,t,_>>>0,r,b)},n.wbg.__wbg_texImage2D_0b8061aa6eecc96a=function(){return F((function(e,n,t,_,r,b,c,f,o,i,u){e.texImage2D(n>>>0,t,_,r,b,c,f>>>0,o>>>0,0===i?void 0:M(i,u))}),arguments)},n.wbg.__wbg_bindFramebuffer_5c01742edd5d843a=function(e,n,t){e.bindFramebuffer(n>>>0,t)},n.wbg.__wbg_bindRenderbuffer_f66dee160b94e5ef=function(e,n,t){e.bindRenderbuffer(n>>>0,t)},n.wbg.__wbg_bindTexture_ae9620ea4a6ffb97=function(e,n,t){e.bindTexture(n>>>0,t)},n.wbg.__wbg_createFramebuffer_d5f3985ce3652661=function(e){const n=e.createFramebuffer();return d(n)?0:E(n)},n.wbg.__wbg_createRenderbuffer_531167a301a60e27=function(e){const n=e.createRenderbuffer();return d(n)?0:E(n)},n.wbg.__wbg_createTexture_269f67d411bdc4dc=function(e){const n=e.createTexture();return d(n)?0:E(n)},n.wbg.__wbg_deleteFramebuffer_d7551444a28f508e=function(e,n){e.deleteFramebuffer(n)},n.wbg.__wbg_deleteRenderbuffer_58c540348fb8606d=function(e,n){e.deleteRenderbuffer(n)},n.wbg.__wbg_deleteTexture_68a539339fd87792=function(e,n){e.deleteTexture(n)},n.wbg.__wbg_framebufferRenderbuffer_963b305ac8cb6fd6=function(e,n,t,_,r){e.framebufferRenderbuffer(n>>>0,t>>>0,_>>>0,r)},n.wbg.__wbg_framebufferTexture2D_4b810902dffa1ef3=function(e,n,t,_,r,b){e.framebufferTexture2D(n>>>0,t>>>0,_>>>0,r,b)},n.wbg.__wbg_getError_8de2be43ffb2c4e0=function(e){return e.getError()},n.wbg.__wbg_getParameter_4e2ccc745690476a=function(){return F((function(e,n){return e.getParameter(n>>>0)}),arguments)},n.wbg.__wbg_texParameteri_21fd6b6b394882c9=function(e,n,t,_){e.texParameteri(n>>>0,t>>>0,_)},n.wbg.__wbg_instanceof_Window_acc97ff9f5d2c7b4=function(e){let n;try{n=e instanceof Window}catch{n=!1}return n},n.wbg.__wbg_document_3ead31dbcad65886=function(e){const n=e.document;return d(n)?0:E(n)},n.wbg.__wbg_location_8cc8ccf27e342c0a=function(e){return e.location},n.wbg.__wbg_devicePixelRatio_476ddb014eb2520a=function(e){return e.devicePixelRatio},n.wbg.__wbg_localStorage_753b6d15a844c3dc=function(){return F((function(e){const n=e.localStorage;return d(n)?0:E(n)}),arguments)},n.wbg.__wbg_cancelAnimationFrame_679ac3913d7f9b34=function(){return F((function(e,n){e.cancelAnimationFrame(n)}),arguments)},n.wbg.__wbg_focus_6335df8e57f2356d=function(){return F((function(e){e.focus()}),arguments)},n.wbg.__wbg_open_8b947bc096f5bb21=function(){return F((function(e,n,t,_,r){const b=e.open(i(n,t),i(_,r));return d(b)?0:E(b)}),arguments)},n.wbg.__wbg_requestAnimationFrame_4181656476a7d86c=function(){return F((function(e,n){return e.requestAnimationFrame(n)}),arguments)},n.wbg.__wbg_fetch_0fe04905cccfc2aa=function(e,n){return e.fetch(n)},n.wbg.__wbg_addColorStop_fd22191e62f12621=function(){return F((function(e,n,t,_){e.addColorStop(n,i(t,_))}),arguments)},n.wbg.__wbg_inverse_81ff934e39851558=function(e){return e.inverse()},n.wbg.__wbg_instanceof_HtmlFormElement_1c489ff7e99e43d3=function(e){let n;try{n=e instanceof HTMLFormElement}catch{n=!1}return n},n.wbg.__wbg_submit_119222e1a26af942=function(){return F((function(e){e.submit()}),arguments)},n.wbg.__wbg_deltaY_a5393ec7ac0f7bb4=function(e){return e.deltaY},n.wbg.__wbg_deltaMode_a90be314f5c676f1=function(e){return e.deltaMode},n.wbg.__wbg_offsetX_8891849b36542d53=function(e){return e.offsetX},n.wbg.__wbg_offsetY_1f52082687af467b=function(e){return e.offsetY},n.wbg.__wbg_button_2bb5dc0116d6b89b=function(e){return e.button},n.wbg.__wbg_pointerId_18be034781db46f3=function(e){return e.pointerId},n.wbg.__wbg_instanceof_Response_eaa426220848a39e=function(e){let n;try{n=e instanceof Response}catch{n=!1}return n},n.wbg.__wbg_url_74285ddf2747cb3d=function(e,n){const t=w(n.url,b.__wbindgen_malloc,b.__wbindgen_realloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t},n.wbg.__wbg_ok_b8130e51d893123a=function(e){return e.ok},n.wbg.__wbg_statusText_7f6b7d97e47933bd=function(e,n){const t=w(n.statusText,b.__wbindgen_malloc,b.__wbindgen_realloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t},n.wbg.__wbg_arrayBuffer_4c27b6f00c530232=function(){return F((function(e){return e.arrayBuffer()}),arguments)},n.wbg.__wbg_setbuffer_ead89b52e0bf1c40=function(e,n){e.buffer=n},n.wbg.__wbg_setonended_ae460558754eae1e=function(e,n){e.onended=n},n.wbg.__wbg_start_e330425e284a693a=function(){return F((function(e,n){e.start(n)}),arguments)},n.wbg.__wbg_connect_463d4300ff833991=function(){return F((function(e,n){return e.connect(n)}),arguments)},n.wbg.__wbg_setTransform_2b3e439b27d4098e=function(e,n){e.setTransform(n)},n.wbg.__wbg_bindVertexArrayOES_84540c072ea96b75=function(e,n){e.bindVertexArrayOES(n)},n.wbg.__wbg_createVertexArrayOES_00a5c523e5b17eff=function(e){const n=e.createVertexArrayOES();return d(n)?0:E(n)},n.wbg.__wbg_deleteVertexArrayOES_98b83132b3d85825=function(e,n){e.deleteVertexArrayOES(n)},n.wbg.__wbg_instanceof_HtmlCanvasElement_97761617af6ea089=function(e){let n;try{n=e instanceof HTMLCanvasElement}catch{n=!1}return n},n.wbg.__wbg_width_2f4b0cbbf1c850d9=function(e){return e.width},n.wbg.__wbg_setwidth_afb418d3fbf71ba7=function(e,n){e.width=n>>>0},n.wbg.__wbg_height_a81d308a000d91d0=function(e){return e.height},n.wbg.__wbg_setheight_3eb8729b59493242=function(e,n){e.height=n>>>0},n.wbg.__wbg_getContext_4d5e97892c1b206a=function(){return F((function(e,n,t){const _=e.getContext(i(n,t));return d(_)?0:E(_)}),arguments)},n.wbg.__wbg_getContext_a6ea7a8e317f182a=function(){return F((function(e,n,t,_){const r=e.getContext(i(n,t),_);return d(r)?0:E(r)}),arguments)},n.wbg.__wbg_new_83f04a482f055088=function(){return F((function(){return new Path2D}),arguments)},n.wbg.__wbg_addPath_d48d7b824460f443=function(e,n,t){e.addPath(n,t)},n.wbg.__wbg_closePath_56f0b905ac4c8ba7=function(e){e.closePath()},n.wbg.__wbg_lineTo_e1466b65cf3748fc=function(e,n,t){e.lineTo(n,t)},n.wbg.__wbg_moveTo_ee2170c2ab195dfa=function(e,n,t){e.moveTo(n,t)},n.wbg.__wbg_quadraticCurveTo_4f6b64d76c1cb275=function(e,n,t,_,r){e.quadraticCurveTo(n,t,_,r)},n.wbg.__wbg_rect_77f14f0bd1b4a24b=function(e,n,t,_,r){e.rect(n,t,_,r)},n.wbg.__wbg_now_8172cd917e5eda6b=function(e){return e.now()},n.wbg.__wbg_key_ad4fc49423a94efa=function(e,n){const t=w(n.key,b.__wbindgen_malloc,b.__wbindgen_realloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t},n.wbg.__wbg_code_06787cd3c7a60600=function(e,n){const t=w(n.code,b.__wbindgen_malloc,b.__wbindgen_realloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t},n.wbg.__wbg_newwithstrandinit_05d7180788420c40=function(){return F((function(e,n,t){return new Request(i(e,n),t)}),arguments)},n.wbg.__wbg_newwithbuffersourcesequenceandoptions_2aa7472e8169c8c5=function(){return F((function(e,n){return new Blob(e,n)}),arguments)},n.wbg.__wbg_a_4c0135ca2c8ce7a5=function(e){return e.a},n.wbg.__wbg_seta_da6577a0a85c2778=function(e,n){e.a=n},n.wbg.__wbg_b_4162822a21d6c799=function(e){return e.b},n.wbg.__wbg_c_ebe252ddb74bc688=function(e){return e.c},n.wbg.__wbg_d_4f2c1b5fb69ba07f=function(e){return e.d},n.wbg.__wbg_setd_630cdaab51ce88c7=function(e,n){e.d=n},n.wbg.__wbg_e_ec8bcff5cc8d5ef9=function(e){return e.e},n.wbg.__wbg_f_7f94e9aa1ba636eb=function(e){return e.f},n.wbg.__wbg_new_23fecc9dcf2dc54d=function(){return F((function(){return new DOMMatrix}),arguments)},n.wbg.__wbg_newwitharray64_a1cf121afec1f953=function(){return F((function(e,n){return new DOMMatrix(L(e,n))}),arguments)},n.wbg.__wbg_body_3cb4b4042b9a632b=function(e){const n=e.body;return d(n)?0:E(n)},n.wbg.__wbg_createElement_976dbb84fe1661b5=function(){return F((function(e,n,t){return e.createElement(i(n,t))}),arguments)},n.wbg.__wbg_createElementNS_1561aca8ee3693c0=function(){return F((function(e,n,t,_,r){return e.createElementNS(0===n?void 0:i(n,t),i(_,r))}),arguments)},n.wbg.__wbg_setid_d6ea60ebd257fe07=function(e,n,t){e.id=i(n,t)},n.wbg.__wbg_clientWidth_999b9163952471ee=function(e){return e.clientWidth},n.wbg.__wbg_clientHeight_1fc8bff4acf145b1=function(e){return e.clientHeight},n.wbg.__wbg_querySelector_494c823e686113aa=function(){return F((function(e,n,t){const _=e.querySelector(i(n,t));return d(_)?0:E(_)}),arguments)},n.wbg.__wbg_releasePointerCapture_45283df79b1542f3=function(){return F((function(e,n){e.releasePointerCapture(n)}),arguments)},n.wbg.__wbg_setAttribute_d8436c14a59ab1af=function(){return F((function(e,n,t,_,r){e.setAttribute(i(n,t),i(_,r))}),arguments)},n.wbg.__wbg_setAttributeNS_cfa0d39367e3e143=function(){return F((function(e,n,t,_,r,b,c){e.setAttributeNS(0===n?void 0:i(n,t),i(_,r),i(b,c))}),arguments)},n.wbg.__wbg_setPointerCapture_7cc6c6e831d5dae0=function(){return F((function(e,n){e.setPointerCapture(n)}),arguments)},n.wbg.__wbg_remove_a8fdc690909ea566=function(e){e.remove()},n.wbg.__wbg_style_e9380748cee29f13=function(e){return e.style},n.wbg.__wbg_instanceof_WebGlRenderingContext_09249c25390b881f=function(e){let n;try{n=e instanceof WebGLRenderingContext}catch{n=!1}return n},n.wbg.__wbg_drawingBufferWidth_77aad8cbcc8a25ad=function(e){return e.drawingBufferWidth},n.wbg.__wbg_drawingBufferHeight_7035dfce71c321bd=function(e){return e.drawingBufferHeight},n.wbg.__wbg_bufferData_32fbc455f6b17a01=function(e,n,t,_,r){e.bufferData(n>>>0,M(t,_),r>>>0)},n.wbg.__wbg_texImage2D_4cb921906eba60bf=function(){return F((function(e,n,t,_,r,b,c,f,o,i,u){e.texImage2D(n>>>0,t,_,r,b,c,f>>>0,o>>>0,0===i?void 0:M(i,u))}),arguments)},n.wbg.__wbg_uniform1fv_3ae8a225eddaeba0=function(e,n,t,_){e.uniform1fv(n,T(t,_))},n.wbg.__wbg_uniform4fv_a513dc4d02f192d3=function(e,n,t,_){e.uniform4fv(n,T(t,_))},n.wbg.__wbg_uniformMatrix3fv_2b7de3010c8ed627=function(e,n,t,_,r){e.uniformMatrix3fv(n,0!==t,T(_,r))},n.wbg.__wbg_uniformMatrix4fv_f16e4a5553357886=function(e,n,t,_,r){e.uniformMatrix4fv(n,0!==t,T(_,r))},n.wbg.__wbg_activeTexture_02b7c73c76c2c06b=function(e,n){e.activeTexture(n>>>0)},n.wbg.__wbg_attachShader_f4d51147351a1906=function(e,n,t){e.attachShader(n,t)},n.wbg.__wbg_bindBuffer_8b5135aa633680f5=function(e,n,t){e.bindBuffer(n>>>0,t)},n.wbg.__wbg_bindFramebuffer_080d0b0cf22e1645=function(e,n,t){e.bindFramebuffer(n>>>0,t)},n.wbg.__wbg_bindRenderbuffer_6da549f066c1b8a5=function(e,n,t){e.bindRenderbuffer(n>>>0,t)},n.wbg.__wbg_bindTexture_6f1dec563e82e818=function(e,n,t){e.bindTexture(n>>>0,t)},n.wbg.__wbg_blendEquationSeparate_fa6aebc5cd0c5285=function(e,n,t){e.blendEquationSeparate(n>>>0,t>>>0)},n.wbg.__wbg_blendFuncSeparate_9fef8acb74d50df5=function(e,n,t,_,r){e.blendFuncSeparate(n>>>0,t>>>0,_>>>0,r>>>0)},n.wbg.__wbg_clear_576f67967748e95f=function(e,n){e.clear(n>>>0)},n.wbg.__wbg_clearColor_7489a3fbe484f2f1=function(e,n,t,_,r){e.clearColor(n,t,_,r)},n.wbg.__wbg_colorMask_bc13c97d0db65962=function(e,n,t,_,r){e.colorMask(0!==n,0!==t,0!==_,0!==r)},n.wbg.__wbg_compileShader_22b038faa1f49857=function(e,n){e.compileShader(n)},n.wbg.__wbg_createBuffer_6e747d928c9ba46d=function(e){const n=e.createBuffer();return d(n)?0:E(n)},n.wbg.__wbg_createProgram_1c5f8dffd1066e71=function(e){const n=e.createProgram();return d(n)?0:E(n)},n.wbg.__wbg_createShader_4017d9fbc36659af=function(e,n){const t=e.createShader(n>>>0);return d(t)?0:E(t)},n.wbg.__wbg_createTexture_4ce49e8a8c655124=function(e){const n=e.createTexture();return d(n)?0:E(n)},n.wbg.__wbg_deleteBuffer_6fd9bca7f8a6d9de=function(e,n){e.deleteBuffer(n)},n.wbg.__wbg_deleteTexture_5c40169772519141=function(e,n){e.deleteTexture(n)},n.wbg.__wbg_disable_6835d16c2cd3fa26=function(e,n){e.disable(n>>>0)},n.wbg.__wbg_disableVertexAttribArray_ab474d273ff59265=function(e,n){e.disableVertexAttribArray(n>>>0)},n.wbg.__wbg_drawElements_e09dbef58c8f099a=function(e,n,t,_,r){e.drawElements(n>>>0,t,_>>>0,r)},n.wbg.__wbg_enable_fc393941ac400f72=function(e,n){e.enable(n>>>0)},n.wbg.__wbg_enableVertexAttribArray_3d21f4936ad4a378=function(e,n){e.enableVertexAttribArray(n>>>0)},n.wbg.__wbg_getAttribLocation_fcbe16b765cb1de0=function(e,n,t,_){return e.getAttribLocation(n,i(t,_))},n.wbg.__wbg_getExtension_d270fbbd8529e85f=function(){return F((function(e,n,t){const _=e.getExtension(i(n,t));return d(_)?0:E(_)}),arguments)},n.wbg.__wbg_getParameter_585a5b83c595ada8=function(){return F((function(e,n){return e.getParameter(n>>>0)}),arguments)},n.wbg.__wbg_getProgramInfoLog_e47d5073d57fb18d=function(e,n,t){const _=n.getProgramInfoLog(t);var r=d(_)?0:w(_,b.__wbindgen_malloc,b.__wbindgen_realloc),c=u;l()[e/4+1]=c,l()[e/4+0]=r},n.wbg.__wbg_getProgramParameter_eaf768a9b399b7cf=function(e,n,t){return e.getProgramParameter(n,t>>>0)},n.wbg.__wbg_getShaderInfoLog_ec7e5b959e47645b=function(e,n,t){const _=n.getShaderInfoLog(t);var r=d(_)?0:w(_,b.__wbindgen_malloc,b.__wbindgen_realloc),c=u;l()[e/4+1]=c,l()[e/4+0]=r},n.wbg.__wbg_getUniformLocation_8e9cc276a231ddcd=function(e,n,t,_){const r=e.getUniformLocation(n,i(t,_));return d(r)?0:E(r)},n.wbg.__wbg_linkProgram_25cda5f9318ea316=function(e,n){e.linkProgram(n)},n.wbg.__wbg_pixelStorei_bee1e2da4cb1115b=function(e,n,t){e.pixelStorei(n>>>0,t)},n.wbg.__wbg_shaderSource_a0001b8eab5d44f4=function(e,n,t,_){e.shaderSource(n,i(t,_))},n.wbg.__wbg_stencilFunc_b72fb7b1cdf11693=function(e,n,t,_){e.stencilFunc(n>>>0,t,_>>>0)},n.wbg.__wbg_stencilMask_00541859199befd2=function(e,n){e.stencilMask(n>>>0)},n.wbg.__wbg_stencilOp_3db65a0f2e42c622=function(e,n,t,_){e.stencilOp(n>>>0,t>>>0,_>>>0)},n.wbg.__wbg_texParameteri_1b210b807f1ea723=function(e,n,t,_){e.texParameteri(n>>>0,t>>>0,_)},n.wbg.__wbg_uniform1f_f60e1072e28b8c49=function(e,n,t){e.uniform1f(n,t)},n.wbg.__wbg_uniform1i_50124a48de1da66b=function(e,n,t){e.uniform1i(n,t)},n.wbg.__wbg_useProgram_156511a425feb519=function(e,n){e.useProgram(n)},n.wbg.__wbg_vertexAttribPointer_63d2aef49627302b=function(e,n,t,_,r,b,c){e.vertexAttribPointer(n>>>0,t,_>>>0,0!==r,b,c)},n.wbg.__wbg_viewport_a93f3881c4202d5e=function(e,n,t,_,r){e.viewport(n,t,_,r)},n.wbg.__wbg_currentTarget_57b4543ab256dfe7=function(e){const n=e.currentTarget;return d(n)?0:E(n)},n.wbg.__wbg_preventDefault_3209279b490de583=function(e){e.preventDefault()},n.wbg.__wbg_addEventListener_cbe4c6f619b032f3=function(){return F((function(e,n,t,_){e.addEventListener(i(n,t),_)}),arguments)},n.wbg.__wbg_addEventListener_1fc744729ac6dc27=function(){return F((function(e,n,t,_,r){e.addEventListener(i(n,t),_,r)}),arguments)},n.wbg.__wbg_addEventListener_178e4d0f8a009cd3=function(){return F((function(e,n,t,_,r){e.addEventListener(i(n,t),_,0!==r)}),arguments)},n.wbg.__wbg_removeEventListener_dd20475efce70084=function(){return F((function(e,n,t,_){e.removeEventListener(i(n,t),_)}),arguments)},n.wbg.__wbg_removeEventListener_b10f1a66647f3aa0=function(){return F((function(e,n,t,_,r){e.removeEventListener(i(n,t),_,0!==r)}),arguments)},n.wbg.__wbg_data_f13601b88960b7eb=function(e,n){const t=function(e,n){const t=n(1*e.length);return o().set(e,t/1),u=e.length,t}(n.data,b.__wbindgen_malloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t},n.wbg.__wbg_newwithu8clampedarray_ec4b349a9ae3eaf6=function(){return F((function(e,n,t){return new ImageData(O(e,n),t>>>0)}),arguments)},n.wbg.__wbg_baseURI_24f83c3784dbdd7a=function(){return F((function(e,n){const t=n.baseURI;var _=d(t)?0:w(t,b.__wbindgen_malloc,b.__wbindgen_realloc),r=u;l()[e/4+1]=r,l()[e/4+0]=_}),arguments)},n.wbg.__wbg_appendChild_e513ef0e5098dfdd=function(){return F((function(e,n){return e.appendChild(n)}),arguments)},n.wbg.__wbg_debug_f15cb542ea509609="function"==typeof console.debug?console.debug:B("console.debug"),n.wbg.__wbg_error_ef9a0be47931175f="function"==typeof console.error?console.error:B("console.error"),n.wbg.__wbg_info_2874fdd5393f35ce="function"==typeof console.info?console.info:B("console.info"),n.wbg.__wbg_log_4b5638ad60bdc54a="function"==typeof console.log?console.log:B("console.log"),n.wbg.__wbg_warn_58110c4a199df084="function"==typeof console.warn?console.warn:B("console.warn"),n.wbg.__wbg_destination_df4e9893e562390a=function(e){return e.destination},n.wbg.__wbg_sampleRate_30180c0ccae55e98=function(e){return e.sampleRate},n.wbg.__wbg_currentTime_80316e838e7d1028=function(e){return e.currentTime},n.wbg.__wbg_new_208829b3b7d06214=function(){return F((function(){return new r}),arguments)},n.wbg.__wbg_close_7d5aa2babb9d8fc2=function(){return F((function(e){return e.close()}),arguments)},n.wbg.__wbg_suspend_8c72404b7450feb3=function(){return F((function(e){return e.suspend()}),arguments)},n.wbg.__wbg_createBuffer_47ef089f86b99318=function(){return F((function(e,n,t,_){return e.createBuffer(n>>>0,t>>>0,_)}),arguments)},n.wbg.__wbg_createBufferSource_f06449934aee7f6f=function(){return F((function(e){return e.createBufferSource()}),arguments)},n.wbg.__wbg_resume_244684c4c6bb49fa=function(){return F((function(e){return e.resume()}),arguments)},n.wbg.__wbg_setProperty_e489dfd8c0a6bffc=function(){return F((function(e,n,t,_,r){e.setProperty(i(n,t),i(_,r))}),arguments)},n.wbg.__wbg_protocol_70cc72a5ff78dc5f=function(){return F((function(e,n){const t=w(n.protocol,b.__wbindgen_malloc,b.__wbindgen_realloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t}),arguments)},n.wbg.__wbg_assign_4e2847f30bc3fef3=function(){return F((function(e,n,t){e.assign(i(n,t))}),arguments)},n.wbg.__wbg_get_5e2f6c6d27821e3f=function(){return F((function(e,n,t,_){const r=n[i(t,_)];var c=d(r)?0:w(r,b.__wbindgen_malloc,b.__wbindgen_realloc),f=u;l()[e/4+1]=f,l()[e/4+0]=c}),arguments)},n.wbg.__wbg_set_0a2938f1ef0852cf=function(){return F((function(e,n,t,_,r){e[i(n,t)]=i(_,r)}),arguments)},n.wbg.__wbg_delete_357ce721e4047d75=function(){return F((function(e,n,t){delete e[i(n,t)]}),arguments)},n.wbg.__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622=function(e){let n;try{n=e instanceof CanvasRenderingContext2D}catch{n=!1}return n},n.wbg.__wbg_setglobalAlpha_1ab443aee9cf0c66=function(e,n){e.globalAlpha=n},n.wbg.__wbg_setglobalCompositeOperation_ab45d05cd8734f9f=function(){return F((function(e,n,t){e.globalCompositeOperation=i(n,t)}),arguments)},n.wbg.__wbg_setstrokeStyle_899ea3720dae323b=function(e,n){e.strokeStyle=n},n.wbg.__wbg_setfillStyle_53ccf2a9886c1c4d=function(e,n){e.fillStyle=n},n.wbg.__wbg_setfilter_b73fcc09bfca8f6d=function(e,n,t){e.filter=i(n,t)},n.wbg.__wbg_setimageSmoothingEnabled_495089fb53e4bd73=function(e,n){e.imageSmoothingEnabled=0!==n},n.wbg.__wbg_setlineWidth_64004648773fed7a=function(e,n){e.lineWidth=n},n.wbg.__wbg_setlineCap_81847480524aaabe=function(e,n,t){e.lineCap=i(n,t)},n.wbg.__wbg_setlineJoin_460906fc18195c47=function(e,n,t){e.lineJoin=i(n,t)},n.wbg.__wbg_setmiterLimit_913fefb6fe0e896a=function(e,n){e.miterLimit=n},n.wbg.__wbg_drawImage_2dbd3fe01f39300b=function(){return F((function(e,n,t,_){e.drawImage(n,t,_)}),arguments)},n.wbg.__wbg_clip_4be1e59aa39a8e8e=function(e,n,t){e.clip(n,t)},n.wbg.__wbg_fill_7da29b528956b8ba=function(e,n,t){e.fill(n,t)},n.wbg.__wbg_stroke_74fc3534f240b639=function(e,n){e.stroke(n)},n.wbg.__wbg_createLinearGradient_acec41a619c23be4=function(e,n,t,_,r){return e.createLinearGradient(n,t,_,r)},n.wbg.__wbg_createPattern_bd15b1b47a033275=function(){return F((function(e,n,t,_){const r=e.createPattern(n,i(t,_));return d(r)?0:E(r)}),arguments)},n.wbg.__wbg_createRadialGradient_ddeb1acd6889300f=function(){return F((function(e,n,t,_,r,b,c){return e.createRadialGradient(n,t,_,r,b,c)}),arguments)},n.wbg.__wbg_getImageData_1d31a94ff8a4a1d7=function(){return F((function(e,n,t,_,r){return e.getImageData(n,t,_,r)}),arguments)},n.wbg.__wbg_putImageData_23e0cc41d4fabcde=function(){return F((function(e,n,t,_){e.putImageData(n,t,_)}),arguments)},n.wbg.__wbg_clearRect_b3895f56c5ecd19d=function(e,n,t,_,r){e.clearRect(n,t,_,r)},n.wbg.__wbg_fillRect_c7a19e13c5242507=function(e,n,t,_,r){e.fillRect(n,t,_,r)},n.wbg.__wbg_restore_556d7c38c007b3fe=function(e){e.restore()},n.wbg.__wbg_save_a9bb370fb49c5df7=function(e){e.save()},n.wbg.__wbg_resetTransform_14d523baff625ade=function(){return F((function(e){e.resetTransform()}),arguments)},n.wbg.__wbg_setTransform_f7cb1550b95885ee=function(){return F((function(e,n,t,_,r,b,c){e.setTransform(n,t,_,r,b,c)}),arguments)},n.wbg.__wbg_transform_ddd3e67b70078921=function(){return F((function(e,n,t,_,r,b,c){e.transform(n,t,_,r,b,c)}),arguments)},n.wbg.__wbg_get_57245cc7d7c7619d=function(e,n){return e[n>>>0]},n.wbg.__wbg_length_6e3bbe7c8bd4dbd8=function(e){return e.length},n.wbg.__wbg_new_1d9a920c6bfc44a8=function(){return new Array},n.wbg.__wbg_newnoargs_b5b063fc6c2f0376=function(e,n){return new Function(i(e,n))},n.wbg.__wbg_next_aaef7c8aa5e212ac=function(){return F((function(e){return e.next()}),arguments)},n.wbg.__wbg_done_1b73b0672e15f234=function(e){return e.done},n.wbg.__wbg_value_1ccc36bc03462d71=function(e){return e.value},n.wbg.__wbg_get_765201544a2b6869=function(){return F((function(e,n){return Reflect.get(e,n)}),arguments)},n.wbg.__wbg_call_97ae9d8645dc388b=function(){return F((function(e,n){return e.call(n)}),arguments)},n.wbg.__wbg_new_0b9bfdd97583284e=function(){return new Object},n.wbg.__wbg_self_6d479506f72c6a71=function(){return F((function(){return self.self}),arguments)},n.wbg.__wbg_window_f2557cc78490aceb=function(){return F((function(){return window.window}),arguments)},n.wbg.__wbg_globalThis_7f206bda628d5286=function(){return F((function(){return globalThis.globalThis}),arguments)},n.wbg.__wbg_global_ba75c50d1cf384f4=function(){return F((function(){return t.g.global}),arguments)},n.wbg.__wbg_set_a68214f35c417fa9=function(e,n,t){e[n>>>0]=t},n.wbg.__wbg_isArray_27c46c67f498e15d=function(e){return Array.isArray(e)},n.wbg.__wbg_of_2ba33496c07f1349=function(e,n){return Array.of(e,n)},n.wbg.__wbg_push_740e4b286702d964=function(e,n){return e.push(n)},n.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b=function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},n.wbg.__wbg_new_9427a0d83657ea80=function(e){return new ArrayBuffer(e>>>0)},n.wbg.__wbg_values_e42671acbf11ec04=function(e){return e.values()},n.wbg.__wbg_apply_22a3220d244124da=function(){return F((function(e,n,t){return e.apply(n,t)}),arguments)},n.wbg.__wbg_call_168da88779e35f61=function(){return F((function(e,n,t){return e.call(n,t)}),arguments)},n.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a=function(e){return Number.isSafeInteger(e)},n.wbg.__wbg_getTime_cb82adb2556ed13e=function(e){return e.getTime()},n.wbg.__wbg_getTimezoneOffset_89bd4275e1ca8341=function(e){return e.getTimezoneOffset()},n.wbg.__wbg_new0_a57059d72c5b7aee=function(){return new Date},n.wbg.__wbg_instanceof_Object_595a1007518cbea3=function(e){let n;try{n=e instanceof Object}catch{n=!1}return n},n.wbg.__wbg_entries_65a76a413fc91037=function(e){return Object.entries(e)},n.wbg.__wbg_fromEntries_7abdcb92016eb4b9=function(){return F((function(e){return Object.fromEntries(e)}),arguments)},n.wbg.__wbg_is_40a66842732708e7=function(e,n){return Object.is(e,n)},n.wbg.__wbg_new_9962f939219f1820=function(e,n){try{var t={a:e,b:n};const _=new Promise(((e,n)=>{const _=t.a;t.a=0;try{return function(e,n,t,_){b.closure3421_externref_shim(e,n,t,_)}(_,t.b,e,n)}finally{t.a=_}}));return _}finally{t.a=t.b=0}},n.wbg.__wbg_resolve_99fe17964f31ffc0=function(e){return Promise.resolve(e)},n.wbg.__wbg_then_11f7a54d67b4bfad=function(e,n){return e.then(n)},n.wbg.__wbg_then_cedad20fbbd9418a=function(e,n,t){return e.then(n,t)},n.wbg.__wbg_buffer_3f3d764d4747d564=function(e){return e.buffer},n.wbg.__wbg_new_8c3f0052272a457a=function(e){return new Uint8Array(e)},n.wbg.__wbg_set_83db9690f9353e79=function(e,n,t){e.set(n,t>>>0)},n.wbg.__wbg_length_9e1ae1900cb0fbd5=function(e){return e.length},n.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003=function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},n.wbg.__wbg_newwithlength_f5933855e4f48a19=function(e){return new Uint8Array(e>>>0)},n.wbg.__wbg_fill_c9a2401d683fafbb=function(e,n,t,_){return e.fill(n,t>>>0,_>>>0)},n.wbg.__wbg_subarray_58ad4efbb5bcb886=function(e,n,t){return e.subarray(n>>>0,t>>>0)},n.wbg.__wbg_ownKeys_bf24e1178641d9f0=function(){return F((function(e){return Reflect.ownKeys(e)}),arguments)},n.wbg.__wbg_set_bf3f89b92d5a34bf=function(){return F((function(e,n,t){return Reflect.set(e,n,t)}),arguments)},n.wbg.__wbindgen_bigint_get_as_i64=function(e,n){const t="bigint"==typeof n?n:void 0;(0===p.byteLength&&(p=new BigInt64Array(b.memory.buffer)),p)[e/8+1]=d(t)?0n:t,l()[e/4+0]=!d(t)},n.wbg.__wbindgen_debug_string=function(e,n){const t=w(h(n),b.__wbindgen_malloc,b.__wbindgen_realloc),_=u;l()[e/4+1]=_,l()[e/4+0]=t},n.wbg.__wbindgen_throw=function(e,n){throw new Error(i(e,n))},n.wbg.__wbindgen_memory=function(){return b.memory},n.wbg.__wbindgen_closure_wrapper821=function(e,n,t){return x(e,n,367,v)},n.wbg.__wbindgen_closure_wrapper822=function(e,n,t){return x(e,n,367,A)},n.wbg.__wbindgen_closure_wrapper824=function(e,n,t){return x(e,n,367,S)},n.wbg.__wbindgen_closure_wrapper826=function(e,n,t){return x(e,n,367,A)},n.wbg.__wbindgen_closure_wrapper829=function(e,n,t){return x(e,n,367,A)},n.wbg.__wbindgen_closure_wrapper831=function(e,n,t){return x(e,n,367,A)},n.wbg.__wbindgen_closure_wrapper6948=function(e,n,t){return x(e,n,2918,C)},n.wbg.__wbindgen_init_externref_table=function(){const e=b.__wbindgen_export_2,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)},n}function U(e,n){return b=e.exports,q.__wbindgen_wasm_module=n,p=new BigInt64Array,R=new Float32Array,m=new Float64Array,s=new Int32Array,k=new Uint32Array,f=new Uint8Array,I=new Uint8ClampedArray,b.__wbindgen_start(),b}function V(e){const n=W();return e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),U(new WebAssembly.Instance(e,n),e)}async function q(e){void 0===e&&(e=new URL(t(285),t.b));const n=W();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:_,module:r}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,n);return U(_,r)}const j=q}}]);
//# sourceMappingURL=core.ruffle.f45b5c0662b515254bf0.js.map