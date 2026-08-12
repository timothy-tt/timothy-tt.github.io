const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/heroScene.BiT350KL.js","_astro/three.module.Bx43vjkH.js","_astro/GLTFLoader.BqdKpcjx.js","_astro/RoomEnvironment.Ct7rVCVU.js"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as m}from"./index.DiEladB3.js";import{_ as Fe}from"./preload-helper.BlTxHScW.js";import{m as Q}from"./proxy.CcbxgyOL.js";function xe({href:i,children:h,variant:g="primary"}){const[n,t]=m.useState(!1),l=g==="primary";return e.jsx("a",{href:i,className:"relative inline-flex items-center justify-center group",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:e.jsxs("div",{className:`relative overflow-hidden rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 ${l?"text-black border border-white/30":"text-[#FF5A1F] border border-[#FF5A1F]/40 hover:border-[#FF5A1F]/70 hover:text-white"}`,style:l?{background:"linear-gradient(135deg, #FF5A1F 0%, #FFA040 100%)",boxShadow:n?"0 0 26px rgba(255,160,64,0.35)":"0 0 18px rgba(255,90,31,0.25)"}:{background:"rgba(255,255,255,0.08)",boxShadow:n?"0 0 25px rgba(255,255,255,0.12), inset 0 0 20px rgba(255,255,255,0.08)":"0 0 10px rgba(255,255,255,0.05)"},children:[e.jsx("div",{className:"absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500",style:{background:l?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.03) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 50%)",opacity:n?1:.6}}),e.jsx("span",{className:"relative z-[1] flex items-center gap-2",children:h})]})})}const Re=[.165,.84,.44,1];function Ie({modelUrl:i,revealed:h=!0}){const g=m.useRef(null),[n,t]=m.useState(!1);return m.useEffect(()=>{const l=g.current;if(!l)return;let C=!1,S=null;return Fe(async()=>{const{mountHeroScene:_}=await import("./heroScene.BiT350KL.js");return{mountHeroScene:_}},__vite__mapDeps([0,1,2,3])).then(({mountHeroScene:_})=>{C||(S=_(l,{modelUrl:i,onFail:()=>t(!0)}))}).catch(_=>{console.warn("HeroModel: scene chunk failed to load, showing fallback",_),t(!0)}),()=>{C=!0,S?.()}},[i]),e.jsx(Q.div,{ref:g,initial:{opacity:0,scale:.96},animate:h?{opacity:1,scale:1}:{opacity:0,scale:.96},transition:{duration:1,delay:.6,ease:Re},className:"relative h-full w-full",children:n&&e.jsx(Ne,{})})}function Ne(){return e.jsx("div",{className:"absolute inset-0 flex items-center justify-center overflow-hidden",style:{background:"radial-gradient(ellipse at 55% 45%, rgba(255,90,31,0.22) 0%, rgba(115,13,1,0.14) 35%, rgba(0,0,0,0) 70%)"},children:e.jsx("span",{"aria-hidden":!0,style:{fontFamily:"Montserrat, sans-serif",fontWeight:900,fontSize:"min(42vh, 340px)",lineHeight:1,letterSpacing:"-0.04em",color:"rgba(216,216,221,0.06)",userSelect:"none"},children:"Z"})})}const De=.68,We=.54,Oe=.75,Pe=.3,ve=.65,ye=.3,P=.14,oe=.3,$e=.05,ge=.3,He=.35,we=2.5,re=10,be=3,b=16,ce=b+2,q=i=>Number.isInteger(i)?i.toFixed(1):String(i),ze=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main(){
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,Ue=`#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;                 // JS-accumulated ambient phase (Σ dt·AMBIENT)
uniform vec2  u_resolution;
uniform vec4  u_trail[${ce}];      // xy = pos in st space, zw = pre-weighted velocity

// Wake constants — baked, no sliders.
const float WAKE_STRENGTH = ${q(De)};
const float WAKE_RADIUS   = ${q(We)};
const float WAKE_SWIRL    = ${q(Oe)};
const float WAKE_GLOW     = ${q(Pe)};

// Liquid caramel mesh: shadow -> ember -> orange -> amber -> cream
const vec3 COL1 = vec3(0.110, 0.024, 0.004);
const vec3 COL2 = vec3(0.451, 0.051, 0.004);
const vec3 COL3 = vec3(1.000, 0.353, 0.122);
const vec3 COL4 = vec3(1.000, 0.627, 0.251);
const vec3 COL5 = vec3(1.000, 0.878, 0.651);

vec3 hash(vec3 p){
  p = vec3(dot(p,vec3(127.1,311.7,74.7)),
           dot(p,vec3(269.5,183.3,246.1)),
           dot(p,vec3(113.5,271.9,124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float noise(vec3 p){
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f*f*f*(f*(f*6.0-15.0)+10.0);
  return mix(mix(mix(dot(hash(i+vec3(0,0,0)),f-vec3(0,0,0)),
                     dot(hash(i+vec3(1,0,0)),f-vec3(1,0,0)),u.x),
                 mix(dot(hash(i+vec3(0,1,0)),f-vec3(0,1,0)),
                     dot(hash(i+vec3(1,1,0)),f-vec3(1,1,0)),u.x),u.y),
             mix(mix(dot(hash(i+vec3(0,0,1)),f-vec3(0,0,1)),
                     dot(hash(i+vec3(1,0,1)),f-vec3(1,0,1)),u.x),
                 mix(dot(hash(i+vec3(0,1,1)),f-vec3(0,1,1)),
                     dot(hash(i+vec3(1,1,1)),f-vec3(1,1,1)),u.x),u.y),u.z);
}

float fbm(vec3 p){
  float v = 0.0;
  float a = 0.55;
  vec3 shift = vec3(100.0);
  for(int i = 0; i < 4; i++){
    v += a * noise(p);
    p = p * 2.0 + shift;
    a *= 0.45;
  }
  return v;
}

float dither(vec2 p){
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
}

void main(){
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 st = (uv - 0.5) * vec2(aspect, 1.0);
  // Ambient drift only — the phase is accumulated JS-side (Σ dt·AMBIENT) and
  // uploaded directly, so the field morphs slowly and steadily at rest.
  float t = u_time;
  float n1 = fbm(vec3(st * 0.75, t));
  float n2 = fbm(vec3(st * 0.75 + 5.2, t + 1.7));
  vec2 displacement = vec2(n1, n2) * 1.6;
  float n3 = fbm(vec3(st * 0.5 + displacement * 0.3, t * 0.6 + 3.1));
  displacement += vec2(n3 * 0.55, fbm(vec3(st * 0.5 + displacement, t * 0.45)) * 0.55);
  displacement *= 0.6;

  // ── Local directional wake ──
  // Committed samples arrive pre-weighted (ramp-in envelope × time decay,
  // applied JS-side); the last two slots are live samples that track the
  // cursor / idle swirler every frame. Each pushes the field along its
  // direction plus a perpendicular swirl, falling off as a gaussian.
  float stirE = 0.0;
  for(int i = 0; i < ${ce}; i++){
    vec2 dp = st - u_trail[i].xy;
    float g = exp(-dot(dp, dp) / (WAKE_RADIUS * WAKE_RADIUS));
    vec2 v = u_trail[i].zw;
    displacement -= (v + WAKE_SWIRL * vec2(-v.y, v.x)) * g * WAKE_STRENGTH;
    stirE += g * length(v);
  }
  stirE = clamp(stirE, 0.0, 1.2);

  vec2 warped = st + displacement;
  float rot = -0.35;
  float cr = cos(rot), sr = sin(rot);
  vec2 rp = vec2(warped.x * cr - warped.y * sr, warped.x * sr + warped.y * cr);
  // Dark ground, colors as accents: shadow carries a constant base weight so
  // it dominates everywhere the bright stops don't reach; ember gets a wide
  // gaussian; orange/amber/cream get tight gaussians (large k) placed toward
  // the right so the accents flow behind the model, not under the copy.
  vec2 p1 = vec2(-0.55,  0.55);
  vec2 p2 = vec2( 0.05,  0.15);
  vec2 p3 = vec2( 0.50,  0.05);
  vec2 p4 = vec2( 0.75, -0.35);
  vec2 p5 = vec2( 0.60,  0.55);
  float d1 = length(rp - p1);
  float d2 = length(rp - p2);
  float d3 = length(rp - p3);
  float d4 = length(rp - p4);
  float d5 = length(rp - p5);
  float w1 = exp(-d1 * d1 * 1.1) * 1.4 + 0.70;
  float w2 = exp(-d2 * d2 * 1.7) * 1.1;
  float w3 = exp(-d3 * d3 * 5.5);
  float w4 = exp(-d4 * d4 * 6.5) * 0.85;
  float w5 = exp(-d5 * d5 * 10.0) * 0.55;
  float wt = w1 + w2 + w3 + w4 + w5 + 1e-4;
  vec3 col = (COL1 * w1 + COL2 * w2 + COL3 * w3 + COL4 * w4 + COL5 * w5) / wt;
  float vignette = 1.0 - smoothstep(0.35, 1.15, length(st));
  col *= vignette * 0.65 + 0.35;
  col *= 0.88;
  // Ember lift riding the wake — warms the field where it's being stirred.
  col += vec3(1.0, 0.42, 0.13) * stirE * WAKE_GLOW;
  col += dither(gl_FragCoord.xy) * 0.012;
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,Be={background:"radial-gradient(ellipse 60% 50% at 72% 38%, rgba(255,90,31,0.10) 0%, rgba(115,13,1,0.22) 45%, rgba(0,0,0,0) 75%)"};function Ge(){const i=m.useRef(null),[h,g]=m.useState(!1);return m.useEffect(()=>{window.matchMedia("(max-width: 767px)").matches||window.matchMedia("(pointer: coarse)").matches||g(!0)},[]),m.useEffect(()=>{if(!h)return;const n=i.current;if(!n)return;const t=n.getContext("webgl2",{antialias:!1,alpha:!1});if(!t){console.warn("WebGL2 not supported");return}const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function C(a,x){const M=t.createShader(a);return t.shaderSource(M,x),t.compileShader(M),t.getShaderParameter(M,t.COMPILE_STATUS)||console.error(t.getShaderInfoLog(M)),M}const S=C(t.VERTEX_SHADER,ze),_=C(t.FRAGMENT_SHADER,Ue),v=t.createProgram();t.attachShader(v,S),t.attachShader(v,_),t.linkProgram(v),t.getProgramParameter(v,t.LINK_STATUS)||console.error(t.getProgramInfoLog(v)),t.useProgram(v);const U=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,U),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW);const k=t.getAttribLocation(v,"a_pos");t.enableVertexAttribArray(k),t.vertexAttribPointer(k,2,t.FLOAT,!1,0,0);const ee=t.getUniformLocation(v,"u_time"),y=t.getUniformLocation(v,"u_resolution"),f=t.getUniformLocation(v,"u_trail");let A=!1;function $(){const a=Math.min(window.devicePixelRatio,1.5),x=.5;n.width=Math.floor(n.clientWidth*a*x),n.height=Math.floor(n.clientHeight*a*x),t.viewport(0,0,n.width,n.height),A&&(D=performance.now(),te(D))}$(),window.addEventListener("resize",$);const E={x:0,y:0,has:!1},B=a=>{const x=window.innerWidth/window.innerHeight;E.x=(a.clientX/window.innerWidth-.5)*x,E.y=-(a.clientY/window.innerHeight-.5),E.has=!0,A&&(A=!1,G=performance.now(),K=G+re*1e3,V())};window.addEventListener("mousemove",B);const T=Array.from({length:b},()=>({x:9e3,y:9e3,dx:0,dy:0,born:-1e9})),p=new Float32Array(ce*4);let u=0;const c={x:1e9,y:1e9},s={x:9e3,y:9e3,dx:0,dy:0,env:0},o={x:9e3,y:9e3,dx:0,dy:0,env:0};let H=137,G=-1e9,K=performance.now()+re*1e3;const F={x:1e9,y:1e9},d={x:0,y:0,init:!1},N={x:0,y:0},L={x:0,y:0};let me=0,Y=1;function je(a){return a<0?0:Math.min(a/ye,1)*Math.exp(-a/ve)}let D=performance.now();function te(a){const x=Math.min(50,a-D)/1e3;D=a;const M=a<=K;if(Y=M?Math.min(1,Y+x/be):Math.max(0,1-(a-K)/(be*1e3)),me+=x*$e*Y,E.has&&!d.init&&(d.x=E.x,d.y=E.y,N.x=E.x,N.y=E.y,d.init=!0),d.init){d.x+=(E.x-d.x)*.25,d.y+=(E.y-d.y)*.25;const r=(d.x-N.x)/Math.max(x,.001),w=(d.y-N.y)/Math.max(x,.001);L.x+=(r-L.x)*.35,L.y+=(w-L.y)*.35,N.x=d.x,N.y=d.y}const ae=Math.hypot(L.x,L.y),he=d.init&&ae>.02;if(ae>.05&&(G=a,K=a+re*1e3),he){const r=oe/Math.max(ae,1e-6);s.x=d.x,s.y=d.y,s.dx=L.x*r,s.dy=L.y*r,s.env=Math.min(1,s.env+x/ye)}else s.env*=Math.exp(-x/ve);if(he){const r=Math.hypot(d.x-c.x,d.y-c.y);if(c.x>1e8)c.x=d.x,c.y=d.y;else if(r>P){const w=Math.min(b,Math.floor(r/P)),j=(d.x-c.x)/r,O=(d.y-c.y)/r;for(let R=1;R<=w;R++)u=(u+1)%b,T[u]={x:c.x+j*P*R,y:c.y+O*P*R,dx:j*oe,dy:O*oe,born:a};c.x+=j*P*w,c.y+=O*P*w}}if(a-G>1500&&M){H+=x*He;const r=window.innerWidth/window.innerHeight,w=(Math.sin(H*.9)*.55+Math.sin(H*.31)*.25)*r*.5,j=Math.cos(H*.7)*.38+Math.sin(H*.23)*.15;F.x>1e8&&(F.x=w,F.y=j);const O=w-F.x,R=j-F.y,se=Math.hypot(O,R);o.x=w,o.y=j,se>1e-5&&(o.dx=O/se*ge,o.dy=R/se*ge),o.env=Math.min(1,o.env+x/we),F.x=w,F.y=j}else o.env=Math.max(0,o.env-x/we);for(let r=0;r<b;r++){const w=je((a-T[r].born)/1e3);p[r*4+0]=T[r].x,p[r*4+1]=T[r].y,p[r*4+2]=T[r].dx*w,p[r*4+3]=T[r].dy*w}p[b*4+0]=s.x,p[b*4+1]=s.y,p[b*4+2]=s.dx*s.env,p[b*4+3]=s.dy*s.env,p[(b+1)*4+0]=o.x,p[(b+1)*4+1]=o.y,p[(b+1)*4+2]=o.dx*o.env,p[(b+1)*4+3]=o.dy*o.env,t.uniform1f(ee,me),t.uniform2f(y,n.width,n.height),t.uniform4fv(f,p),t.drawArrays(t.TRIANGLE_STRIP,0,4),!M&&Y===0&&o.env===0&&s.env<.001&&(A=!0)}let W=0,ne=!0,ie=document.visibilityState==="visible";function ue(a){if(te(a),A){X();return}W=requestAnimationFrame(ue)}function V(){l||A||!W&&ne&&ie&&(D=performance.now(),W=requestAnimationFrame(ue))}function X(){W&&(cancelAnimationFrame(W),W=0)}const fe=new IntersectionObserver(a=>{ne=a[0]?.isIntersecting??!0,ne?V():X()});fe.observe(n);const pe=()=>{ie=document.visibilityState==="visible",ie?V():X()};return document.addEventListener("visibilitychange",pe),l?(D=performance.now(),te(performance.now())):V(),()=>{X(),fe.disconnect(),window.removeEventListener("resize",$),window.removeEventListener("mousemove",B),document.removeEventListener("visibilitychange",pe),t.deleteProgram(v),t.deleteShader(S),t.deleteShader(_),t.deleteBuffer(U)}},[h]),e.jsx("div",{className:"absolute inset-0",style:Be,children:h&&e.jsx("canvas",{ref:i,className:"absolute inset-0 w-full h-full",style:{imageRendering:"auto"}})})}const de=850,z={w:424,h:170,baseline:140},Ee=1.35,Ke="#FF6B35",Ye=160,Ve=15,Xe=["M78,88 C64,82 46,88 40,103 C36,115 38,128 45,133 C52,138 61,129 64,118 C69,100 80,68 94,46 C88,72 80,100 76,120 C74,130 74,134 74,137","M110,85 C109,102 107,122 106,138 C110,120 114,106 120,99 C127,90 139,85 143,90 C145,93 146,95 147,96","M160,116 C172,113 184,111 195,109 C198,89 182,77 170,86 C158,95 152,113 156,126 C161,141 180,142 194,133 C199,129 202,127 204,125","M246,93 C239,82 226,81 217,92 C208,102 208,122 216,131 C223,139 234,131 239,120 C243,111 246,101 247,93 C247,107 247,121 251,130 C254,138 259,137 264,130","M289,79 C287,97 285,118 284,136 C293,110 300,95 307,91 C313,88 317,93 316,101 C314,113 311,125 310,135 C317,110 324,95 331,91 C337,88 341,93 340,101 C338,113 336,125 336,134 C338,120 348,104 358,97","M404,98 C413,93 417,80 407,73 C397,68 388,76 383,85 C377,94 373,101 374,109 C375,118 381,124 388,128 C395,132 398,134 396,138 C393,141 384,140 376,138 C370,136 365,135 362,133"],qe=28,Se=[{delay:0,dur:300},{delay:300,dur:170},{delay:470,dur:170},{delay:640,dur:230},{delay:870,dur:310},{delay:1180,dur:200}],Je="M15,45 L414,62 L25,95 L414,122 L20,150",Ae={strokeDasharray:"1 1.06",strokeDashoffset:1.03};function _e({phase:i,animate:h}){const g=h&&i==="in",n=h&&i==="out";return e.jsxs("svg",{viewBox:`0 0 ${z.w} ${z.h}`,fill:"none",style:{height:`${Ee}em`,width:"auto",display:"inline-block",verticalAlign:`${-.17647058823529413*Ee}em`,overflow:"visible",transform:"rotate(-1.5deg)"},children:[g&&e.jsx("mask",{id:"zg-dreams-write",children:Xe.map((t,l)=>e.jsx("path",{d:t,stroke:"#fff",strokeWidth:qe,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",pathLength:1,...Ae,style:{animation:`stroke-write ${Se[l].dur}ms cubic-bezier(0.4, 0, 0.6, 1) ${Se[l].delay}ms forwards`}},l))}),n&&e.jsxs("mask",{id:"zg-dreams-erase",children:[e.jsx("rect",{width:z.w,height:z.h,fill:"#fff"}),e.jsx("path",{d:Je,stroke:"#000",strokeWidth:"58",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",pathLength:1,...Ae,style:{animation:`stroke-write ${de}ms cubic-bezier(0.45, 0, 0.55, 1) forwards`}})]}),e.jsx("text",{x:Ve,y:z.baseline,fontFamily:"'Caveat', cursive",fontWeight:700,fontSize:Ye,fill:Ke,mask:g?"url(#zg-dreams-write)":n?"url(#zg-dreams-erase)":void 0,style:n?{animation:`erase-smudge ${de}ms ease-in forwards`}:void 0,children:"dreams"})]})}const ke=[{text:"IDEAS",medium:"type"},{text:"dreams",medium:"draw"},{text:"VISION",medium:"neon"},{text:"STORIES",medium:"film"}],Ce={type:2e3,draw:2e3,neon:2500,film:2200},J={type:0,draw:1450,neon:1400,film:700},Z={type:0,draw:de,neon:900,film:600},Ze=90,Qe=45,Me=250,I={type:{fontFamily:"'Special Elite', 'Courier New', monospace",fontWeight:400,fontSize:"0.97em",letterSpacing:"0.03em",color:"#F2EDE2"},draw:{},neon:{fontWeight:900,letterSpacing:"0.05em",color:"#FFF6DC"},film:{fontWeight:900,color:"#FFFFFF"}},Te="0 0 4px rgba(255,240,200,0.95), 0 0 11px rgba(255,200,110,0.9), 0 0 26px rgba(255,140,40,0.75), 0 0 55px rgba(255,90,31,0.55), 0 0 90px rgba(255,90,31,0.3)",et=4.8,tt={type:"0.28em",draw:"0em",neon:"0.14em",film:"0.14em"};function nt({start:i}){const[h,g]=m.useState(0),[n,t]=m.useState("in"),[l,C]=m.useState(0),[S,_]=m.useState(!1),[v,U]=m.useState(0),[k,ee]=m.useState(!1),{text:y,medium:f}=ke[h];m.useEffect(()=>{ee(window.matchMedia("(prefers-reduced-motion: reduce)").matches)},[]),m.useEffect(()=>{if(!i)return;const u=setTimeout(()=>_(!0),1100);return()=>clearTimeout(u)},[i]);const A=m.useCallback(()=>{g(u=>(u+1)%ke.length),C(0),U(u=>u+1),t("in")},[]);m.useEffect(()=>{if(!S||k||f!=="type")return;if(n==="in"){if(l<y.length){const c=setTimeout(()=>C(s=>s+1),Ze);return()=>clearTimeout(c)}t("hold");return}if(n==="hold"){const c=setTimeout(()=>t("out"),Ce.type);return()=>clearTimeout(c)}if(l>0){const c=setTimeout(()=>C(s=>s-1),Qe);return()=>clearTimeout(c)}const u=setTimeout(A,Me);return()=>clearTimeout(u)},[S,k,f,n,l,y,A]),m.useEffect(()=>{if(!S||f==="type"&&!k)return;const u=k?400:J[f],c=k?400:Z[f];if(n==="in"){const o=setTimeout(()=>t("hold"),u);return()=>clearTimeout(o)}if(n==="hold"){const o=setTimeout(()=>t("out"),Ce[f]);return()=>clearTimeout(o)}const s=setTimeout(A,c+Me);return()=>clearTimeout(s)},[S,k,f,n,A]);const $=()=>e.jsxs("span",{style:I.type,children:[y.slice(0,l),e.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",width:"0.45ch",height:"0.82em",marginLeft:"0.08em",transform:"translateY(0.08em)",background:"#FFC24B",animation:"caret-blink 1.1s linear infinite"}})]}),E=()=>e.jsx("span",{style:{display:"inline-block"},"aria-label":y,children:e.jsx(_e,{phase:n,animate:!0})},`draw-${v}-${n==="out"?"out":"in"}`),B=()=>{const u=n==="in"?`neon-flicker-on ${J.neon}ms steps(1, end) forwards`:n==="out"?`neon-flicker-off ${Z.neon}ms steps(1, end) forwards`:"neon-buzz 2.8s steps(1, end) infinite";return e.jsxs("span",{style:{display:"inline-block",position:"relative"},children:[e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:0,...I.neon,color:"transparent",WebkitTextStroke:"0.028em rgba(255,190,120,0.28)"},children:y}),e.jsx("span",{style:{display:"inline-block",position:"relative",...I.neon,textShadow:Te,animation:u},children:y})]},`neon-${v}-${n}`)},T=()=>{const u=n==="in"?`glitch-in ${J.film}ms steps(1, end) forwards`:n==="out"?`glitch-out ${Z.film}ms steps(1, end) forwards`:void 0,c=o=>n==="in"?`glitch-chan-${o}-in ${J.film}ms steps(1, end) forwards`:n==="out"?`glitch-chan-${o}-out ${Z.film}ms steps(1, end) forwards`:`glitch-chan-${o}-idle 3.2s steps(1, end) infinite`,s={position:"absolute",inset:0,...I.film,mixBlendMode:"screen",opacity:0,pointerEvents:"none"};return e.jsxs("span",{style:{display:"inline-block",position:"relative"},children:[e.jsx("span",{style:{display:"inline-block",...I.film,animation:u},children:y}),e.jsx("span",{"aria-hidden":!0,style:{...s,color:"#FF2E55",animation:c("r")},children:y}),e.jsx("span",{"aria-hidden":!0,style:{...s,color:"#2EE6FF",animation:c("c")},children:y}),e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:0,...I.film,color:"transparent",backgroundImage:"repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 4px)",WebkitBackgroundClip:"text",backgroundClip:"text",animation:u,pointerEvents:"none"},children:y})]},`film-${v}-${n}`)};let p=null;return S&&(k?p=e.jsx("span",{style:{display:"inline-block",...I[f],...f==="neon"?{textShadow:Te}:{},opacity:n==="out"?0:1,transition:"opacity 400ms ease"},"aria-label":f==="draw"?y:void 0,children:f==="draw"?e.jsx(_e,{phase:"hold",animate:!1}):y}):p=f==="type"?$():f==="draw"?E():f==="neon"?B():T()),e.jsx("span",{className:"inline-block relative",style:{width:`${et}em`,height:"1em",whiteSpace:"nowrap",textAlign:"left",verticalAlign:"baseline"},children:e.jsx("span",{style:{position:"absolute",left:0,bottom:0,lineHeight:1,whiteSpace:"nowrap",transform:`translateY(${tt[f]})`},children:p})})}const it="linear-gradient(180deg, #FFFFFF 0%, #EDEDF0 40%, #BEC0C6 85%, #9DA0A8 100%)",at=[.16,1,.3,1],st={backgroundImage:it,WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"};function le({text:i,delay:h,start:g=!0,wordStagger:n=.07}){return e.jsx(e.Fragment,{children:i.split(" ").map((t,l)=>e.jsxs("span",{style:{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},children:[e.jsx(Q.span,{style:{display:"inline-block",...st},initial:{y:"115%",opacity:0},animate:g?{y:"0%",opacity:1}:{y:"115%",opacity:0},transition:{duration:1,delay:h+l*n,ease:at},children:t}),l<i.split(" ").length-1&&e.jsx("span",{style:{display:"inline-block",width:"0.28em"}})]},l))})}const Le=[.165,.84,.44,1];function mt(){const[i,h]=m.useState(!1);return m.useEffect(()=>{h(!0)},[]),e.jsxs("section",{className:"relative min-h-screen w-full overflow-hidden bg-black",children:[e.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",children:e.jsx(Ge,{})}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-[3]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"256px 256px",opacity:.28,mixBlendMode:"overlay"}}),e.jsxs("div",{className:"relative z-[2] mx-auto max-w-7xl min-h-screen px-6 pt-24 pb-10 lg:py-0 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]",children:[e.jsxs("div",{className:"text-left w-full min-w-0",children:[e.jsxs("h1",{className:"text-[27px] sm:text-6xl md:text-7xl lg:text-7xl font-black leading-[0.9] tracking-tight",children:[e.jsx("div",{className:"block mb-2",children:e.jsx(le,{text:"THE STUDIO THAT",delay:.1,start:i})}),e.jsxs("div",{className:"block pb-2 text-[27px] sm:text-5xl md:text-6xl lg:text-6xl whitespace-nowrap",children:[e.jsx(le,{text:"TURNS YOUR",delay:.38,start:i}),e.jsx("span",{style:{display:"inline-block",width:"0.28em"}}),e.jsx(nt,{start:i})]}),e.jsx("div",{className:"block",children:e.jsx(le,{text:"INTO REALITY",delay:.62,start:i})})]}),e.jsx(Q.p,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.7,delay:1,ease:Le},className:"mt-7 max-w-xl text-[15px] sm:text-base leading-relaxed text-white/60",children:"We build brands you can hold. Packaging, product and digital design for consumer goods, taken from first sketch to store shelf."}),e.jsxs(Q.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:1.8,ease:Le},className:"mt-6 md:mt-9 flex flex-row items-stretch md:items-center gap-3 md:gap-4 [&>a]:flex-1 md:[&>a]:flex-none [&>a>div]:w-full md:[&>a>div]:w-auto [&>a>div]:px-4 md:[&>a>div]:px-8 [&>a>div]:whitespace-nowrap [&>a>div>span]:justify-center",children:[e.jsxs(xe,{href:"#work",variant:"primary",children:["See the Work ",e.jsx("span",{children:"→"})]}),e.jsx(xe,{href:"#contact",variant:"outline",children:"Start a Project"})]})]}),e.jsx("div",{className:"relative h-[45vh] w-full lg:h-[72vh]",children:e.jsx(Ie,{revealed:i,modelUrl:"/models/work/strane.glb"})})]}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-[1] pointer-events-none",style:{height:"35%",background:"linear-gradient(to top, #000 0%, transparent 100%)"}})]})}export{mt as default};
