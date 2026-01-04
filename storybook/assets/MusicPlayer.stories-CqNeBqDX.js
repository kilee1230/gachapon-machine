import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{w as d,e as i,u as m}from"./index-DPYJpPba.js";import{r as u}from"./index-CC6F48bw.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sA=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,C,t)=>t?t.toUpperCase():C.toLowerCase()),S=e=>{const n=sA(e);return n.charAt(0).toUpperCase()+n.slice(1)},oA=(...e)=>e.filter((n,C,t)=>!!n&&n.trim()!==""&&t.indexOf(n)===C).join(" ").trim(),rA=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=u.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:C=2,absoluteStrokeWidth:t,className:a="",children:l,iconNode:o,...p},x)=>u.createElement("svg",{ref:x,...uA,width:n,height:n,stroke:e,strokeWidth:t?Number(C)*24/Number(n):C,className:oA("lucide",a),...!l&&!rA(p)&&{"aria-hidden":"true"},...p},[...o.map(([s,y])=>u.createElement(s,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(e,n)=>{const C=u.forwardRef(({className:t,...a},l)=>u.createElement(mA,{ref:l,iconNode:n,className:oA(`lucide-${cA(S(e))}`,`lucide-${e}`,t),...a}));return C.displayName=S(e),C};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yA=T("play",dA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],vA=T("volume-2",pA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],fA=T("volume-x",hA);function r(){var e="/home/runner/work/gachapon-machine/gachapon-machine/src/analytics.ts",n="5b61896a49e4c35cf3c5d32b34cd6fbb71e92d64",C=window,t="__coverage__",a={path:"/home/runner/work/gachapon-machine/gachapon-machine/src/analytics.ts",statementMap:{0:{start:{line:1,column:25},end:{line:9,column:1}},1:{start:{line:11,column:2},end:{line:16,column:3}},2:{start:{line:12,column:4},end:{line:15,column:7}},3:{start:{line:19,column:2},end:{line:21,column:5}},4:{start:{line:24,column:2},end:{line:24,column:34}},5:{start:{line:27,column:2},end:{line:29,column:5}},6:{start:{line:32,column:2},end:{line:34,column:5}},7:{start:{line:37,column:2},end:{line:39,column:5}},8:{start:{line:42,column:2},end:{line:45,column:5}},9:{start:{line:48,column:2},end:{line:50,column:5}},10:{start:{line:53,column:2},end:{line:59,column:3}},11:{start:{line:54,column:4},end:{line:58,column:7}}},fnMap:{0:{name:"trackEvent",decl:{start:{line:10,column:16},end:{line:10,column:26}},loc:{start:{line:10,column:46},end:{line:17,column:1}},line:10},1:{name:"trackInsertCoin",decl:{start:{line:18,column:16},end:{line:18,column:31}},loc:{start:{line:18,column:51},end:{line:22,column:1}},line:18},2:{name:"trackSpinKnob",decl:{start:{line:23,column:16},end:{line:23,column:29}},loc:{start:{line:23,column:32},end:{line:25,column:1}},line:23},3:{name:"trackOpenCapsule",decl:{start:{line:26,column:16},end:{line:26,column:32}},loc:{start:{line:26,column:47},end:{line:30,column:1}},line:26},4:{name:"trackViewResult",decl:{start:{line:31,column:16},end:{line:31,column:31}},loc:{start:{line:31,column:43},end:{line:35,column:1}},line:31},5:{name:"trackResetMachine",decl:{start:{line:36,column:16},end:{line:36,column:33}},loc:{start:{line:36,column:46},end:{line:40,column:1}},line:36},6:{name:"trackLanguageSwitch",decl:{start:{line:41,column:16},end:{line:41,column:35}},loc:{start:{line:41,column:54},end:{line:46,column:1}},line:41},7:{name:"trackMusicToggle",decl:{start:{line:47,column:16},end:{line:47,column:32}},loc:{start:{line:47,column:41},end:{line:51,column:1}},line:47},8:{name:"setUserLanguage",decl:{start:{line:52,column:16},end:{line:52,column:31}},loc:{start:{line:52,column:42},end:{line:60,column:1}},line:52}},branchMap:{0:{loc:{start:{line:11,column:2},end:{line:16,column:3}},type:"if",locations:[{start:{line:11,column:2},end:{line:16,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:11},1:{loc:{start:{line:11,column:6},end:{line:11,column:50}},type:"binary-expr",locations:[{start:{line:11,column:6},end:{line:11,column:35}},{start:{line:11,column:39},end:{line:11,column:50}}],line:11},2:{loc:{start:{line:53,column:2},end:{line:59,column:3}},type:"if",locations:[{start:{line:53,column:2},end:{line:59,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:53},3:{loc:{start:{line:53,column:6},end:{line:53,column:50}},type:"binary-expr",locations:[{start:{line:53,column:6},end:{line:53,column:35}},{start:{line:53,column:39},end:{line:53,column:50}}],line:53}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/gachapon-machine/gachapon-machine/src/analytics.ts"],names:[],mappings:"AAcO,aAAM,YAAY;AAAA,EACvB,aAAa;AAAA,EACb,WAAW;AAAA,EACX,cAAc;AAAA,EACd,aAAa;AAAA,EACb,eAAe;AAAA,EACf,iBAAiB;AAAA,EACjB,cAAc;AAChB;AASO,gBAAS,WACd,WACA,QACM;AAEN,MAAI,OAAO,WAAW,eAAe,OAAO,MAAM;AAChD,WAAO,KAAK,SAAS,WAAW;AAAA,MAC9B,gBAAgB;AAAA,MAChB,GAAG;AAAA,IACL,CAAC;AAAA,EACH;AACF;AAMO,gBAAS,gBAAgB,mBAAiC;AAC/D,aAAW,UAAU,aAAa;AAAA,IAChC,oBAAoB;AAAA,EACtB,CAAC;AACH;AAKO,gBAAS,gBAAsB;AACpC,aAAW,UAAU,SAAS;AAChC;AAMO,gBAAS,iBAAiB,cAA4B;AAC3D,aAAW,UAAU,cAAc;AAAA,IACjC,eAAe;AAAA,EACjB,CAAC;AACH;AAMO,gBAAS,gBAAgB,WAAyB;AACvD,aAAW,UAAU,aAAa;AAAA,IAChC,YAAY;AAAA,EACd,CAAC;AACH;AAMO,gBAAS,kBAAkB,YAA0B;AAC1D,aAAW,UAAU,eAAe;AAAA,IAClC,aAAa;AAAA,EACf,CAAC;AACH;AAOO,gBAAS,oBAAoB,UAAkB,QAAsB;AAC1E,aAAW,UAAU,iBAAiB;AAAA,IACpC,eAAe;AAAA,IACf,aAAa;AAAA,EACf,CAAC;AACH;AAMO,gBAAS,iBAAiB,QAAiC;AAChE,aAAW,UAAU,cAAc;AAAA,IACjC,cAAc;AAAA,EAChB,CAAC;AACH;AAOO,gBAAS,gBAAgB,UAAwB;AACtD,MAAI,OAAO,WAAW,eAAe,OAAO,MAAM;AAChD,WAAO,KAAK,SAAS,uBAAuB;AAAA,MAC1C,iBAAiB;AAAA,QACf,oBAAoB;AAAA,MACtB;AAAA,IACF,CAAC;AAAA,EACH;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5b61896a49e4c35cf3c5d32b34cd6fbb71e92d64"},l=C[t]||(C[t]={});(!l[e]||l[e].hash!==n)&&(l[e]=a);var o=l[e];return r=function(){return o},o}r();const EA=(r().s[0]++,{MUSIC_TOGGLE:"music_toggle"});function BA(e,n){r().f[0]++,r().s[1]++,r().b[1][0]++,typeof window<"u"&&(r().b[1][1]++,window.gtag)?(r().b[0][0]++,r().s[2]++,window.gtag("event",e,{event_category:"gachapon_interaction",...n})):r().b[0][1]++}function k(e){r().f[7]++,r().s[9]++,BA(EA.MUSIC_TOGGLE,{music_action:e})}function A(){var e="/home/runner/work/gachapon-machine/gachapon-machine/src/components/MusicPlayer.tsx",n="2693108162133ef7ebfd184c50ee24a6fc74513b",C=window,t="__coverage__",a={path:"/home/runner/work/gachapon-machine/gachapon-machine/src/components/MusicPlayer.tsx",statementMap:{0:{start:{line:5,column:18},end:{line:5,column:82}},1:{start:{line:6,column:27},end:{line:102,column:1}},2:{start:{line:7,column:36},end:{line:7,column:51}},3:{start:{line:8,column:40},end:{line:8,column:54}},4:{start:{line:9,column:19},end:{line:9,column:31}},5:{start:{line:10,column:33},end:{line:10,column:46}},6:{start:{line:11,column:2},end:{line:32,column:18}},7:{start:{line:12,column:35},end:{line:27,column:5}},8:{start:{line:13,column:20},end:{line:13,column:36}},9:{start:{line:14,column:6},end:{line:14,column:25}},10:{start:{line:14,column:18},end:{line:14,column:25}},11:{start:{line:15,column:6},end:{line:26,column:7}},12:{start:{line:16,column:8},end:{line:16,column:51}},13:{start:{line:17,column:8},end:{line:20,column:9}},14:{start:{line:18,column:10},end:{line:18,column:24}},15:{start:{line:19,column:10},end:{line:19,column:30}},16:{start:{line:22,column:8},end:{line:25,column:9}},17:{start:{line:23,column:10},end:{line:24,column:13}},18:{start:{line:23,column:34},end:{line:23,column:52}},19:{start:{line:28,column:4},end:{line:28,column:74}},20:{start:{line:29,column:4},end:{line:31,column:6}},21:{start:{line:30,column:6},end:{line:30,column:79}},22:{start:{line:33,column:23},end:{line:44,column:8}},23:{start:{line:34,column:18},end:{line:34,column:34}},24:{start:{line:35,column:4},end:{line:35,column:23}},25:{start:{line:35,column:16},end:{line:35,column:23}},26:{start:{line:36,column:4},end:{line:36,column:23}},27:{start:{line:37,column:4},end:{line:37,column:22}},28:{start:{line:38,column:4},end:{line:43,column:7}},29:{start:{line:39,column:6},end:{line:39,column:25}},30:{start:{line:40,column:6},end:{line:40,column:28}},31:{start:{line:42,column:6},end:{line:42,column:28}},32:{start:{line:45,column:29},end:{line:47,column:3}},33:{start:{line:46,column:4},end:{line:46,column:19}},34:{start:{line:48,column:21},end:{line:62,column:3}},35:{start:{line:49,column:18},end:{line:49,column:34}},36:{start:{line:50,column:4},end:{line:50,column:23}},37:{start:{line:50,column:16},end:{line:50,column:23}},38:{start:{line:51,column:4},end:{line:61,column:5}},39:{start:{line:52,column:6},end:{line:52,column:20}},40:{start:{line:53,column:6},end:{line:53,column:26}},41:{start:{line:54,column:6},end:{line:54,column:31}},42:{start:{line:56,column:6},end:{line:60,column:9}},43:{start:{line:57,column:8},end:{line:57,column:27}},44:{start:{line:58,column:8},end:{line:58,column:35}},45:{start:{line:63,column:2},end:{line:101,column:7}},46:{start:{line:104,column:0},end:{line:104,column:94}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:27},end:{line:6,column:28}},loc:{start:{line:6,column:33},end:{line:102,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:11,column:12},end:{line:11,column:13}},loc:{start:{line:11,column:18},end:{line:32,column:3}},line:11},2:{name:"(anonymous_2)",decl:{start:{line:12,column:35},end:{line:12,column:36}},loc:{start:{line:12,column:41},end:{line:27,column:5}},line:12},3:{name:"(anonymous_3)",decl:{start:{line:23,column:28},end:{line:23,column:29}},loc:{start:{line:23,column:34},end:{line:23,column:52}},line:23},4:{name:"(anonymous_4)",decl:{start:{line:23,column:60},end:{line:23,column:61}},loc:{start:{line:23,column:66},end:{line:24,column:11}},line:23},5:{name:"(anonymous_5)",decl:{start:{line:29,column:11},end:{line:29,column:12}},loc:{start:{line:29,column:17},end:{line:31,column:5}},line:29},6:{name:"(anonymous_6)",decl:{start:{line:33,column:35},end:{line:33,column:36}},loc:{start:{line:33,column:41},end:{line:44,column:3}},line:33},7:{name:"(anonymous_7)",decl:{start:{line:38,column:22},end:{line:38,column:23}},loc:{start:{line:38,column:28},end:{line:41,column:5}},line:38},8:{name:"(anonymous_8)",decl:{start:{line:41,column:13},end:{line:41,column:14}},loc:{start:{line:41,column:19},end:{line:43,column:5}},line:41},9:{name:"(anonymous_9)",decl:{start:{line:45,column:29},end:{line:45,column:30}},loc:{start:{line:45,column:35},end:{line:47,column:3}},line:45},10:{name:"(anonymous_10)",decl:{start:{line:48,column:21},end:{line:48,column:22}},loc:{start:{line:48,column:27},end:{line:62,column:3}},line:48},11:{name:"(anonymous_11)",decl:{start:{line:56,column:24},end:{line:56,column:25}},loc:{start:{line:56,column:30},end:{line:59,column:7}},line:56},12:{name:"(anonymous_12)",decl:{start:{line:59,column:15},end:{line:59,column:16}},loc:{start:{line:59,column:21},end:{line:60,column:7}},line:59}},branchMap:{0:{loc:{start:{line:14,column:6},end:{line:14,column:25}},type:"if",locations:[{start:{line:14,column:6},end:{line:14,column:25}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:14},1:{loc:{start:{line:15,column:6},end:{line:26,column:7}},type:"if",locations:[{start:{line:15,column:6},end:{line:26,column:7}},{start:{line:21,column:13},end:{line:26,column:7}}],line:15},2:{loc:{start:{line:17,column:8},end:{line:20,column:9}},type:"if",locations:[{start:{line:17,column:8},end:{line:20,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:17},3:{loc:{start:{line:22,column:8},end:{line:25,column:9}},type:"if",locations:[{start:{line:22,column:8},end:{line:25,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:22},4:{loc:{start:{line:35,column:4},end:{line:35,column:23}},type:"if",locations:[{start:{line:35,column:4},end:{line:35,column:23}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},5:{loc:{start:{line:50,column:4},end:{line:50,column:23}},type:"if",locations:[{start:{line:50,column:4},end:{line:50,column:23}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:50},6:{loc:{start:{line:51,column:4},end:{line:61,column:5}},type:"if",locations:[{start:{line:51,column:4},end:{line:61,column:5}},{start:{line:55,column:11},end:{line:61,column:5}}],line:51},7:{loc:{start:{line:64,column:4},end:{line:84,column:5}},type:"binary-expr",locations:[{start:{line:64,column:4},end:{line:64,column:15}},{start:{line:64,column:35},end:{line:84,column:5}}],line:64},8:{loc:{start:{line:93,column:12},end:{line:93,column:193}},type:"cond-expr",locations:[{start:{line:93,column:24},end:{line:93,column:112}},{start:{line:93,column:115},end:{line:93,column:193}}],line:93},9:{loc:{start:{line:95,column:15},end:{line:95,column:42}},type:"cond-expr",locations:[{start:{line:95,column:27},end:{line:95,column:33}},{start:{line:95,column:36},end:{line:95,column:42}}],line:95},10:{loc:{start:{line:96,column:22},end:{line:96,column:62}},type:"cond-expr",locations:[{start:{line:96,column:34},end:{line:96,column:47}},{start:{line:96,column:50},end:{line:96,column:62}}],line:96},11:{loc:{start:{line:97,column:18},end:{line:97,column:117}},type:"cond-expr",locations:[{start:{line:97,column:46},end:{line:97,column:72}},{start:{line:97,column:91},end:{line:97,column:117}}],line:97}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/gachapon-machine/gachapon-machine/src/components/MusicPlayer.tsx"],names:[],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2693108162133ef7ebfd184c50ee24a6fc74513b"},l=C[t]||(C[t]={});(!l[e]||l[e].hash!==n)&&(l[e]=a);var o=l[e];return A=function(){return o},o}A();const wA=(A().s[0]++,new URL(""+new URL("../audio/chinese-new-year-284910.mp3",import.meta.url).href,import.meta.url).href);A().s[1]++;const iA=()=>{A().f[0]++;const[e,n]=(A().s[2]++,u.useState(!1)),[C,t]=(A().s[3]++,u.useState(!0)),a=(A().s[4]++,u.useRef(null)),l=(A().s[5]++,u.useRef(!1));A().s[6]++,u.useEffect(()=>{A().f[1]++,A().s[7]++;const s=()=>{A().f[2]++;const y=(A().s[8]++,a.current);if(A().s[9]++,y)A().b[0][1]++;else{A().b[0][0]++,A().s[10]++;return}A().s[11]++,document.hidden?(A().b[1][0]++,A().s[12]++,l.current=e,A().s[13]++,e?(A().b[2][0]++,A().s[14]++,y.pause(),A().s[15]++,n(!1)):A().b[2][1]++):(A().b[1][1]++,A().s[16]++,l.current?(A().b[3][0]++,A().s[17]++,y.play().then(()=>(A().f[3]++,A().s[18]++,n(!0))).catch(()=>{A().f[4]++})):A().b[3][1]++)};return A().s[19]++,document.addEventListener("visibilitychange",s),A().s[20]++,()=>{A().f[5]++,A().s[21]++,document.removeEventListener("visibilitychange",s)}},[e]);const o=(A().s[22]++,u.useCallback(()=>{A().f[6]++;const s=(A().s[23]++,a.current);if(A().s[24]++,s)A().b[4][1]++;else{A().b[4][0]++,A().s[25]++;return}A().s[26]++,s.volume=.3,A().s[27]++,s.loop=!0,A().s[28]++,s.play().then(()=>{A().f[7]++,A().s[29]++,n(!0),A().s[30]++,t(!1)}).catch(()=>{A().f[8]++,A().s[31]++,t(!1)})},[]));A().s[32]++;const p=()=>{A().f[9]++,A().s[33]++,o()};A().s[34]++;const x=()=>{A().f[10]++;const s=(A().s[35]++,a.current);if(A().s[36]++,s)A().b[5][1]++;else{A().b[5][0]++,A().s[37]++;return}A().s[38]++,e?(A().b[6][0]++,A().s[39]++,s.pause(),A().s[40]++,n(!1),A().s[41]++,k("mute")):(A().b[6][1]++,A().s[42]++,s.play().then(()=>{A().f[11]++,A().s[43]++,n(!0),A().s[44]++,k("unmute")}).catch(()=>{A().f[12]++}))};return A().s[45]++,c.jsxs(c.Fragment,{children:[(A().b[7][0]++,C&&(A().b[7][1]++,c.jsx("div",{onClick:p,className:"fixed inset-0 z-[100] bg-gradient-to-b from-red-900/95 to-red-950/95 backdrop-blur-sm flex items-center justify-center cursor-pointer",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-6xl mb-6",children:"🧧"}),c.jsx("div",{className:"w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.5)] animate-pulse border-4 border-yellow-200",children:c.jsx(yA,{size:48,className:"text-red-900 ml-2",fill:"currentColor"})}),c.jsx("p",{className:"text-yellow-300 text-2xl font-bold mb-2",children:"点击开始"}),c.jsx("p",{className:"text-yellow-100/70 text-sm",children:"Tap to Start"}),c.jsx("div",{className:"mt-8 text-4xl",children:"🐴"})]})}))),c.jsx("button",{onClick:x,className:`
          fixed bottom-4 right-4 z-50
          w-10 h-10 rounded-full border-2 shadow-lg transition-all duration-300
          flex items-center justify-center backdrop-blur-sm cursor-pointer
          ${e?(A().b[8][0]++,"bg-yellow-400/90 text-red-900 border-yellow-500 shadow-[0_0_12px_rgba(250,204,21,0.5)]"):(A().b[8][1]++,"bg-black/30 text-white/70 border-white/20 hover:bg-black/50 hover:text-white")}
        `,title:e?(A().b[9][0]++,"暂停音乐"):(A().b[9][1]++,"播放音乐"),"aria-label":e?(A().b[10][0]++,"Pause Music"):(A().b[10][1]++,"Play Music"),children:e?(A().b[11][0]++,c.jsx(vA,{size:18})):(A().b[11][1]++,c.jsx(fA,{size:18}))}),c.jsx("audio",{ref:a,loop:!0,preload:"auto",src:wA})]})};A().s[46]++;iA.__docgenInfo={description:"",methods:[],displayName:"MusicPlayer"};const MA={title:"Components/MusicPlayer",component:iA,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[e=>c.jsx("div",{className:"min-h-screen bg-red-900 relative",children:c.jsx(e,{})})]},v={},h={play:async({canvasElement:e})=>{const n=d(e),C=n.getByText("点击开始");await i(C).toBeInTheDocument();const t=n.getByText("Tap to Start");await i(t).toBeInTheDocument();const a=n.getByText("🧧");await i(a).toBeInTheDocument();const l=n.getByText("🐴");await i(l).toBeInTheDocument()}},f={play:async({canvasElement:e})=>{const n=d(e),C=e.querySelector('[class*="fixed inset-0 z-\\[100\\]"]');C&&await m.click(C),await new Promise(a=>setTimeout(a,500));const t=n.getByRole("button",{name:/play music|pause music/i});await i(t).toBeInTheDocument()}},E={play:async({canvasElement:e})=>{const n=d(e),C=e.querySelector('[class*="w-24 h-24"]');await i(C).toBeInTheDocument();const t=n.getByText("点击开始");await i(t).toBeInTheDocument(),await i(t).toHaveClass("text-yellow-300");const a=n.getByText("Tap to Start");await i(a).toBeInTheDocument()}},B={play:async({canvasElement:e})=>{const n=d(e),C=e.querySelector("audio");C&&(C.play=()=>Promise.resolve(),C.pause=()=>{});const t=e.querySelector('[class*="fixed inset-0 z-\\[100\\]"]');t&&await m.click(t),await new Promise(l=>setTimeout(l,300));const a=n.getByRole("button",{name:/play music|pause music/i});await i(a).toBeInTheDocument(),await m.click(a),await new Promise(l=>setTimeout(l,100))}},w={play:async({canvasElement:e})=>{const n=d(e),C=e.querySelector("audio");C&&(C.play=()=>Promise.resolve(),C.pause=()=>{});const t=e.querySelector('[class*="fixed inset-0 z-\\[100\\]"]');t&&await m.click(t),await new Promise(o=>setTimeout(o,300));const a=n.getByRole("button",{name:/pause music/i});await i(a).toBeInTheDocument(),await m.click(a),await new Promise(o=>setTimeout(o,100));const l=n.getByRole("button",{name:/play music/i});await m.click(l)}},g={play:async({canvasElement:e})=>{const n=d(e),C=e.querySelector("audio");C&&(C.play=()=>Promise.reject(new Error("Autoplay blocked")),C.pause=()=>{});const t=e.querySelector('[class*="fixed inset-0 z-\\[100\\]"]');t&&await m.click(t),await new Promise(l=>setTimeout(l,300));const a=n.getByRole("button");await i(a).toBeInTheDocument()}},I={play:async({canvasElement:e})=>{const n=d(e);let C=e.querySelector("audio");C&&(C.play=()=>Promise.resolve(),C.pause=()=>{});const t=e.querySelector('[class*="fixed inset-0 z-\\[100\\]"]');t&&await m.click(t),await new Promise(o=>setTimeout(o,300)),C=e.querySelector("audio"),C&&(C.play=()=>Promise.reject(new Error("Playback failed")));const a=n.getByRole("button",{name:/pause music/i});await m.click(a),await new Promise(o=>setTimeout(o,100));const l=n.getByRole("button",{name:/play music/i});await m.click(l),await new Promise(o=>setTimeout(o,100))}},b={play:async({canvasElement:e})=>{const n=d(e),C=e.querySelector("audio");C&&(C.play=()=>Promise.resolve(),C.pause=()=>{});const t=e.querySelector('[class*="fixed inset-0 z-\\[100\\]"]');t&&await m.click(t),await new Promise(l=>setTimeout(l,300));const a=n.getByRole("button",{name:/pause music/i});await i(a).toBeInTheDocument(),new Event("visibilitychange")}},M={play:async({canvasElement:e})=>{const n=e.querySelector("audio");await i(n).toBeInTheDocument(),await i(n).toHaveAttribute("loop"),await i(n).toHaveAttribute("preload","auto"),await i(n.src).toContain("chinese-new-year")}};var K,O,P;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(P=(O=v.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var G,Q,_;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify overlay is visible initially
    const playText = canvas.getByText("点击开始");
    await expect(playText).toBeInTheDocument();
    const tapText = canvas.getByText("Tap to Start");
    await expect(tapText).toBeInTheDocument();

    // Find and verify the red envelope decoration
    const redEnvelope = canvas.getByText("🧧");
    await expect(redEnvelope).toBeInTheDocument();

    // Find and verify the horse emoji
    const horseEmoji = canvas.getByText("🐴");
    await expect(horseEmoji).toBeInTheDocument();
  }
}`,...(_=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var D,j,W;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // First dismiss the overlay by clicking it
    const overlay = canvasElement.querySelector('[class*="fixed inset-0 z-\\\\[100\\\\]"]');
    if (overlay) {
      await userEvent.click(overlay);
    }

    // Wait a bit for the overlay to disappear
    await new Promise(resolve => setTimeout(resolve, 500));

    // Now find the music control button
    const musicButton = canvas.getByRole("button", {
      name: /play music|pause music/i
    });
    await expect(musicButton).toBeInTheDocument();
  }
}`,...(W=(j=f.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var U,q,L;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify play button icon area exists (the golden circle)
    const playButtonArea = canvasElement.querySelector('[class*="w-24 h-24"]');
    await expect(playButtonArea).toBeInTheDocument();

    // Verify Chinese text
    const chineseText = canvas.getByText("点击开始");
    await expect(chineseText).toBeInTheDocument();
    await expect(chineseText).toHaveClass("text-yellow-300");

    // Verify English text
    const englishText = canvas.getByText("Tap to Start");
    await expect(englishText).toBeInTheDocument();
  }
}`,...(L=(q=E.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var H,F,R;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Mock the audio element to avoid actual playback issues
    const audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    if (audioElement) {
      // Mock play to resolve immediately
      audioElement.play = () => Promise.resolve();
      audioElement.pause = () => {};
    }

    // Click overlay to dismiss it
    const overlay = canvasElement.querySelector('[class*="fixed inset-0 z-\\\\[100\\\\]"]') as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }

    // Wait for overlay to disappear
    await new Promise(resolve => setTimeout(resolve, 300));

    // Find the music control button and click to toggle
    const musicButton = canvas.getByRole("button", {
      name: /play music|pause music/i
    });
    await expect(musicButton).toBeInTheDocument();

    // Click to toggle play state
    await userEvent.click(musicButton);

    // Wait for state update
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}`,...(R=(F=B.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var Y,N,z;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Mock the audio element
    const audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.resolve();
      audioElement.pause = () => {};
    }

    // Click overlay to dismiss and start playing
    const overlay = canvasElement.querySelector('[class*="fixed inset-0 z-\\\\[100\\\\]"]') as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }

    // Wait for overlay to disappear and music to "start"
    await new Promise(resolve => setTimeout(resolve, 300));

    // Now the music should be "playing", click to pause
    const musicButton = canvas.getByRole("button", {
      name: /pause music/i
    });
    await expect(musicButton).toBeInTheDocument();

    // Click to pause
    await userEvent.click(musicButton);

    // Wait for state update
    await new Promise(resolve => setTimeout(resolve, 100));

    // Click again to resume
    const pausedButton = canvas.getByRole("button", {
      name: /play music/i
    });
    await userEvent.click(pausedButton);
  }
}`,...(z=(N=w.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var V,Z,$;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Mock the audio element to fail on play
    const audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.reject(new Error("Autoplay blocked"));
      audioElement.pause = () => {};
    }

    // Click overlay - play will fail but should handle gracefully
    const overlay = canvasElement.querySelector('[class*="fixed inset-0 z-\\\\[100\\\\]"]') as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }

    // Wait for error handling
    await new Promise(resolve => setTimeout(resolve, 300));

    // Overlay should be dismissed even on error
    const musicButton = canvas.getByRole("button");
    await expect(musicButton).toBeInTheDocument();
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var X,J,AA;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // First let overlay succeed
    let audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.resolve();
      audioElement.pause = () => {};
    }

    // Dismiss overlay
    const overlay = canvasElement.querySelector('[class*="fixed inset-0 z-\\\\[100\\\\]"]') as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }
    await new Promise(resolve => setTimeout(resolve, 300));

    // Now make play fail for the toggle
    audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.reject(new Error("Playback failed"));
    }

    // Click pause first
    const pauseButton = canvas.getByRole("button", {
      name: /pause music/i
    });
    await userEvent.click(pauseButton);
    await new Promise(resolve => setTimeout(resolve, 100));

    // Now try to play again (will fail silently)
    const playButton = canvas.getByRole("button", {
      name: /play music/i
    });
    await userEvent.click(playButton);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}`,...(AA=(J=I.parameters)==null?void 0:J.docs)==null?void 0:AA.source}}};var eA,nA,CA;b.parameters={...b.parameters,docs:{...(eA=b.parameters)==null?void 0:eA.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Track pause calls
    let pauseCalled = false;

    // Mock the audio element
    const audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.resolve();
      audioElement.pause = () => {
        pauseCalled = true;
      };
    }

    // Dismiss overlay to start playing
    const overlay = canvasElement.querySelector('[class*="fixed inset-0 z-\\\\[100\\\\]"]') as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }
    await new Promise(resolve => setTimeout(resolve, 300));

    // Verify music is "playing"
    const pauseButton = canvas.getByRole("button", {
      name: /pause music/i
    });
    await expect(pauseButton).toBeInTheDocument();

    // Simulate visibility change to hidden
    // Note: We can't actually change document.hidden, but we can verify
    // the event listener is set up by checking the component behavior
    const visibilityEvent = new Event("visibilitychange");

    // Mock document.hidden (this is tricky in tests)
    // For now, just verify the component rendered correctly
    // The actual visibility change behavior requires integration testing
  }
}`,...(CA=(nA=b.parameters)==null?void 0:nA.docs)==null?void 0:CA.source}}};var tA,lA,aA;M.parameters={...M.parameters,docs:{...(tA=M.parameters)==null?void 0:tA.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // Verify the audio element exists with correct attributes
    const audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    await expect(audioElement).toBeInTheDocument();
    await expect(audioElement).toHaveAttribute("loop");
    await expect(audioElement).toHaveAttribute("preload", "auto");
    await expect(audioElement.src).toContain("chinese-new-year");
  }
}`,...(aA=(lA=M.parameters)==null?void 0:lA.docs)==null?void 0:aA.source}}};const xA=["Default","InteractionTestOverlayClick","InteractionTestToggleButton","InteractionTestOverlayElements","InteractionTestTogglePlayPause","InteractionTestPauseAfterPlay","InteractionTestPlayFailure","InteractionTestToggleWithFailure","InteractionTestVisibilityChange","InteractionTestAudioElement"];export{v as Default,M as InteractionTestAudioElement,h as InteractionTestOverlayClick,E as InteractionTestOverlayElements,w as InteractionTestPauseAfterPlay,g as InteractionTestPlayFailure,f as InteractionTestToggleButton,B as InteractionTestTogglePlayPause,I as InteractionTestToggleWithFailure,b as InteractionTestVisibilityChange,xA as __namedExportsOrder,MA as default};
//# sourceMappingURL=MusicPlayer.stories-CqNeBqDX.js.map
