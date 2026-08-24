const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/heroScene.BiT350KL.js","_astro/three.module.Bx43vjkH.js","_astro/GLTFLoader.BqdKpcjx.js","_astro/RoomEnvironment.Ct7rVCVU.js"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as d}from"./index.DiEladB3.js";import{_ as je}from"./preload-helper.BlTxHScW.js";import{h as Re,i as Ie,p as Fe,m as $}from"./proxy.CuiHxNlH.js";function Ne(){!Re.current&&Ie();const[s]=d.useState(Fe.current);return s}const De=[.165,.84,.44,1];function We({modelUrl:s,revealed:v=!0}){const y=d.useRef(null),[n,t]=d.useState(!1);return d.useEffect(()=>{const m=y.current;if(!m)return;let M=!1,S=null;return je(async()=>{const{mountHeroScene:k}=await import("./heroScene.BiT350KL.js");return{mountHeroScene:k}},__vite__mapDeps([0,1,2,3])).then(({mountHeroScene:k})=>{M||(S=k(m,{modelUrl:s,onFail:()=>t(!0)}))}).catch(k=>{console.warn("HeroModel: scene chunk failed to load, showing fallback",k),t(!0)}),()=>{M=!0,S?.()}},[s]),e.jsx($.div,{ref:y,initial:{opacity:0,scale:.96},animate:v?{opacity:1,scale:1}:{opacity:0,scale:.96},transition:{duration:1,delay:.6,ease:De},className:"relative h-full w-full",children:n&&e.jsx(Oe,{})})}function Oe(){return e.jsx("div",{className:"absolute inset-0 flex items-center justify-center overflow-hidden",style:{background:"radial-gradient(ellipse at 55% 45%, rgba(255,90,31,0.22) 0%, rgba(115,13,1,0.14) 35%, rgba(0,0,0,0) 70%)"},children:e.jsx("span",{"aria-hidden":!0,style:{fontFamily:"Montserrat, sans-serif",fontWeight:900,fontSize:"min(42vh, 340px)",lineHeight:1,letterSpacing:"-0.04em",color:"rgba(216,216,221,0.06)",userSelect:"none"},children:"Z"})})}const Pe=.68,$e=.54,ze=.75,He=.3,xe=.65,ve=.3,P=.14,re=.3,Ue=.05,ye=.3,Be=.35,ge=2.5,le=10,we=3,b=16,ce=b+2,Z=s=>Number.isInteger(s)?s.toFixed(1):String(s),Ge=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main(){
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,Ke=`#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;                 // JS-accumulated ambient phase (Σ dt·AMBIENT)
uniform vec2  u_resolution;
uniform vec4  u_trail[${ce}];      // xy = pos in st space, zw = pre-weighted velocity

// Wake constants: baked, no sliders.
const float WAKE_STRENGTH = ${Z(Pe)};
const float WAKE_RADIUS   = ${Z($e)};
const float WAKE_SWIRL    = ${Z(ze)};
const float WAKE_GLOW     = ${Z(He)};

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
  // Ambient drift only: the phase is accumulated JS-side (Σ dt·AMBIENT) and
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
  // Ember lift riding the wake: warms the field where it's being stirred.
  col += vec3(1.0, 0.42, 0.13) * stirE * WAKE_GLOW;
  col += dither(gl_FragCoord.xy) * 0.012;
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,Ve={background:"radial-gradient(ellipse 60% 50% at 72% 38%, rgba(255,90,31,0.10) 0%, rgba(115,13,1,0.22) 45%, rgba(0,0,0,0) 75%)"};function Ye(){const s=d.useRef(null),[v,y]=d.useState(!1);return d.useEffect(()=>{window.matchMedia("(max-width: 767px)").matches||window.matchMedia("(pointer: coarse)").matches||y(!0)},[]),d.useEffect(()=>{if(!v)return;const n=s.current;if(!n)return;const t=n.getContext("webgl2",{antialias:!1,alpha:!1});if(!t){console.warn("WebGL2 not supported");return}const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function M(i,h){const C=t.createShader(i);return t.shaderSource(C,h),t.compileShader(C),t.getShaderParameter(C,t.COMPILE_STATUS)||console.error(t.getShaderInfoLog(C)),C}const S=M(t.VERTEX_SHADER,Ge),k=M(t.FRAGMENT_SHADER,Ke),x=t.createProgram();t.attachShader(x,S),t.attachShader(x,k),t.linkProgram(x),t.getProgramParameter(x,t.LINK_STATUS)||console.error(t.getProgramInfoLog(x)),t.useProgram(x);const G=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,G),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW);const _=t.getAttribLocation(x,"a_pos");t.enableVertexAttribArray(_),t.vertexAttribPointer(_,2,t.FLOAT,!1,0,0);const te=t.getUniformLocation(x,"u_time"),g=t.getUniformLocation(x,"u_resolution"),p=t.getUniformLocation(x,"u_trail");let A=!1;function z(){const i=Math.min(window.devicePixelRatio,1.5),h=.5;n.width=Math.floor(n.clientWidth*i*h),n.height=Math.floor(n.clientHeight*i*h),t.viewport(0,0,n.width,n.height),A&&(D=performance.now(),ne(D))}z(),window.addEventListener("resize",z);const E={x:0,y:0,has:!1},K=i=>{const h=window.innerWidth/window.innerHeight;E.x=(i.clientX/window.innerWidth-.5)*h,E.y=-(i.clientY/window.innerHeight-.5),E.has=!0,A&&(A=!1,V=performance.now(),Y=V+le*1e3,q())};window.addEventListener("mousemove",K);const T=Array.from({length:b},()=>({x:9e3,y:9e3,dx:0,dy:0,born:-1e9})),f=new Float32Array(ce*4);let u=0;const l={x:1e9,y:1e9},a={x:9e3,y:9e3,dx:0,dy:0,env:0},o={x:9e3,y:9e3,dx:0,dy:0,env:0};let H=137,V=-1e9,Y=performance.now()+le*1e3;const R={x:1e9,y:1e9},c={x:0,y:0,init:!1},N={x:0,y:0},L={x:0,y:0};let me=0,X=1;function Le(i){return i<0?0:Math.min(i/ve,1)*Math.exp(-i/xe)}let D=performance.now();function ne(i){const h=Math.min(50,i-D)/1e3;D=i;const C=i<=Y;if(X=C?Math.min(1,X+h/we):Math.max(0,1-(i-Y)/(we*1e3)),me+=h*Ue*X,E.has&&!c.init&&(c.x=E.x,c.y=E.y,N.x=E.x,N.y=E.y,c.init=!0),c.init){c.x+=(E.x-c.x)*.25,c.y+=(E.y-c.y)*.25;const r=(c.x-N.x)/Math.max(h,.001),w=(c.y-N.y)/Math.max(h,.001);L.x+=(r-L.x)*.35,L.y+=(w-L.y)*.35,N.x=c.x,N.y=c.y}const ae=Math.hypot(L.x,L.y),he=c.init&&ae>.02;if(ae>.05&&(V=i,Y=i+le*1e3),he){const r=re/Math.max(ae,1e-6);a.x=c.x,a.y=c.y,a.dx=L.x*r,a.dy=L.y*r,a.env=Math.min(1,a.env+h/ve)}else a.env*=Math.exp(-h/xe);if(he){const r=Math.hypot(c.x-l.x,c.y-l.y);if(l.x>1e8)l.x=c.x,l.y=c.y;else if(r>P){const w=Math.min(b,Math.floor(r/P)),j=(c.x-l.x)/r,O=(c.y-l.y)/r;for(let I=1;I<=w;I++)u=(u+1)%b,T[u]={x:l.x+j*P*I,y:l.y+O*P*I,dx:j*re,dy:O*re,born:i};l.x+=j*P*w,l.y+=O*P*w}}if(i-V>1500&&C){H+=h*Be;const r=window.innerWidth/window.innerHeight,w=(Math.sin(H*.9)*.55+Math.sin(H*.31)*.25)*r*.5,j=Math.cos(H*.7)*.38+Math.sin(H*.23)*.15;R.x>1e8&&(R.x=w,R.y=j);const O=w-R.x,I=j-R.y,oe=Math.hypot(O,I);o.x=w,o.y=j,oe>1e-5&&(o.dx=O/oe*ye,o.dy=I/oe*ye),o.env=Math.min(1,o.env+h/ge),R.x=w,R.y=j}else o.env=Math.max(0,o.env-h/ge);for(let r=0;r<b;r++){const w=Le((i-T[r].born)/1e3);f[r*4+0]=T[r].x,f[r*4+1]=T[r].y,f[r*4+2]=T[r].dx*w,f[r*4+3]=T[r].dy*w}f[b*4+0]=a.x,f[b*4+1]=a.y,f[b*4+2]=a.dx*a.env,f[b*4+3]=a.dy*a.env,f[(b+1)*4+0]=o.x,f[(b+1)*4+1]=o.y,f[(b+1)*4+2]=o.dx*o.env,f[(b+1)*4+3]=o.dy*o.env,t.uniform1f(te,me),t.uniform2f(g,n.width,n.height),t.uniform4fv(p,f),t.drawArrays(t.TRIANGLE_STRIP,0,4),!C&&X===0&&o.env===0&&a.env<.001&&(A=!0)}let W=0,se=!0,ie=document.visibilityState==="visible";function ue(i){if(ne(i),A){J();return}W=requestAnimationFrame(ue)}function q(){m||A||!W&&se&&ie&&(D=performance.now(),W=requestAnimationFrame(ue))}function J(){W&&(cancelAnimationFrame(W),W=0)}const pe=new IntersectionObserver(i=>{se=i[0]?.isIntersecting??!0,se?q():J()});pe.observe(n);const fe=()=>{ie=document.visibilityState==="visible",ie?q():J()};return document.addEventListener("visibilitychange",fe),m?(D=performance.now(),ne(performance.now())):q(),()=>{J(),pe.disconnect(),window.removeEventListener("resize",z),window.removeEventListener("mousemove",K),document.removeEventListener("visibilitychange",fe),t.deleteProgram(x),t.deleteShader(S),t.deleteShader(k),t.deleteBuffer(G)}},[v]),e.jsx("div",{className:"absolute inset-0",style:Ve,children:v&&e.jsx("canvas",{ref:s,className:"absolute inset-0 w-full h-full",style:{imageRendering:"auto"}})})}const de=850,U={w:424,h:170,baseline:140},be=1.35,Xe="#FF6B35",qe=160,Je=15,Ze=["M78,88 C64,82 46,88 40,103 C36,115 38,128 45,133 C52,138 61,129 64,118 C69,100 80,68 94,46 C88,72 80,100 76,120 C74,130 74,134 74,137","M110,85 C109,102 107,122 106,138 C110,120 114,106 120,99 C127,90 139,85 143,90 C145,93 146,95 147,96","M160,116 C172,113 184,111 195,109 C198,89 182,77 170,86 C158,95 152,113 156,126 C161,141 180,142 194,133 C199,129 202,127 204,125","M246,93 C239,82 226,81 217,92 C208,102 208,122 216,131 C223,139 234,131 239,120 C243,111 246,101 247,93 C247,107 247,121 251,130 C254,138 259,137 264,130","M289,79 C287,97 285,118 284,136 C293,110 300,95 307,91 C313,88 317,93 316,101 C314,113 311,125 310,135 C317,110 324,95 331,91 C337,88 341,93 340,101 C338,113 336,125 336,134 C338,120 348,104 358,97","M404,98 C413,93 417,80 407,73 C397,68 388,76 383,85 C377,94 373,101 374,109 C375,118 381,124 388,128 C395,132 398,134 396,138 C393,141 384,140 376,138 C370,136 365,135 362,133"],Qe=28,Ee=[{delay:0,dur:300},{delay:300,dur:170},{delay:470,dur:170},{delay:640,dur:230},{delay:870,dur:310},{delay:1180,dur:200}],et="M15,45 L414,62 L25,95 L414,122 L20,150",Se={strokeDasharray:"1 1.06",strokeDashoffset:1.03};function Ae({phase:s,animate:v}){const y=v&&s==="in",n=v&&s==="out";return e.jsxs("svg",{viewBox:`0 0 ${U.w} ${U.h}`,fill:"none",style:{height:`${be}em`,width:"auto",display:"inline-block",verticalAlign:`${-.17647058823529413*be}em`,overflow:"visible",transform:"rotate(-1.5deg)"},children:[y&&e.jsx("mask",{id:"zg-dreams-write",children:Ze.map((t,m)=>e.jsx("path",{d:t,stroke:"#fff",strokeWidth:Qe,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",pathLength:1,...Se,style:{animation:`stroke-write ${Ee[m].dur}ms cubic-bezier(0.4, 0, 0.6, 1) ${Ee[m].delay}ms forwards`}},m))}),n&&e.jsxs("mask",{id:"zg-dreams-erase",children:[e.jsx("rect",{width:U.w,height:U.h,fill:"#fff"}),e.jsx("path",{d:et,stroke:"#000",strokeWidth:"58",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",pathLength:1,...Se,style:{animation:`stroke-write ${de}ms cubic-bezier(0.45, 0, 0.55, 1) forwards`}})]}),e.jsx("text",{x:Je,y:U.baseline,fontFamily:"'Caveat', cursive",fontWeight:700,fontSize:qe,fill:Xe,mask:y?"url(#zg-dreams-write)":n?"url(#zg-dreams-erase)":void 0,style:n?{animation:`erase-smudge ${de}ms ease-in forwards`}:void 0,children:"dreams"})]})}const ke=[{text:"IDEAS",medium:"type"},{text:"dreams",medium:"draw"},{text:"VISION",medium:"neon"},{text:"STORIES",medium:"film"}],_e={type:2e3,draw:2e3,neon:2500,film:2200},Q={type:0,draw:1450,neon:1400,film:700},ee={type:0,draw:de,neon:900,film:600},tt=90,nt=45,Me=250,F={type:{fontFamily:"'Special Elite', 'Courier New', monospace",fontWeight:400,fontSize:"0.97em",letterSpacing:"0.03em",color:"#F2EDE2"},draw:{},neon:{fontWeight:900,letterSpacing:"0.05em",color:"#FFF6DC"},film:{fontWeight:900,color:"#FFFFFF"}},Ce="0 0 4px rgba(255,240,200,0.95), 0 0 11px rgba(255,200,110,0.9), 0 0 26px rgba(255,140,40,0.75), 0 0 55px rgba(255,90,31,0.55), 0 0 90px rgba(255,90,31,0.3)",st=4.8,it={type:"0.28em",draw:"0em",neon:"0.14em",film:"0.14em"};function at({start:s}){const[v,y]=d.useState(0),[n,t]=d.useState("in"),[m,M]=d.useState(0),[S,k]=d.useState(!1),[x,G]=d.useState(0),[_,te]=d.useState(!1),{text:g,medium:p}=ke[v];d.useEffect(()=>{te(window.matchMedia("(prefers-reduced-motion: reduce)").matches)},[]),d.useEffect(()=>{if(!s)return;const u=setTimeout(()=>k(!0),1100);return()=>clearTimeout(u)},[s]);const A=d.useCallback(()=>{y(u=>(u+1)%ke.length),M(0),G(u=>u+1),t("in")},[]);d.useEffect(()=>{if(!S||_||p!=="type")return;if(n==="in"){if(m<g.length){const l=setTimeout(()=>M(a=>a+1),tt);return()=>clearTimeout(l)}t("hold");return}if(n==="hold"){const l=setTimeout(()=>t("out"),_e.type);return()=>clearTimeout(l)}if(m>0){const l=setTimeout(()=>M(a=>a-1),nt);return()=>clearTimeout(l)}const u=setTimeout(A,Me);return()=>clearTimeout(u)},[S,_,p,n,m,g,A]),d.useEffect(()=>{if(!S||p==="type"&&!_)return;const u=_?400:Q[p],l=_?400:ee[p];if(n==="in"){const o=setTimeout(()=>t("hold"),u);return()=>clearTimeout(o)}if(n==="hold"){const o=setTimeout(()=>t("out"),_e[p]);return()=>clearTimeout(o)}const a=setTimeout(A,l+Me);return()=>clearTimeout(a)},[S,_,p,n,A]);const z=()=>e.jsxs("span",{style:F.type,children:[g.slice(0,m),e.jsx("span",{"aria-hidden":!0,style:{display:"inline-block",width:"0.45ch",height:"0.82em",marginLeft:"0.08em",transform:"translateY(0.08em)",background:"#FFC24B",animation:"caret-blink 1.1s linear infinite"}})]}),E=()=>e.jsx("span",{style:{display:"inline-block"},"aria-label":g,children:e.jsx(Ae,{phase:n,animate:!0})},`draw-${x}-${n==="out"?"out":"in"}`),K=()=>{const u=n==="in"?`neon-flicker-on ${Q.neon}ms steps(1, end) forwards`:n==="out"?`neon-flicker-off ${ee.neon}ms steps(1, end) forwards`:"neon-buzz 2.8s steps(1, end) infinite";return e.jsxs("span",{style:{display:"inline-block",position:"relative"},children:[e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:0,...F.neon,color:"transparent",WebkitTextStroke:"0.028em rgba(255,190,120,0.28)"},children:g}),e.jsx("span",{style:{display:"inline-block",position:"relative",...F.neon,textShadow:Ce,animation:u},children:g})]},`neon-${x}-${n}`)},T=()=>{const u=n==="in"?`glitch-in ${Q.film}ms steps(1, end) forwards`:n==="out"?`glitch-out ${ee.film}ms steps(1, end) forwards`:void 0,l=o=>n==="in"?`glitch-chan-${o}-in ${Q.film}ms steps(1, end) forwards`:n==="out"?`glitch-chan-${o}-out ${ee.film}ms steps(1, end) forwards`:`glitch-chan-${o}-idle 3.2s steps(1, end) infinite`,a={position:"absolute",inset:0,...F.film,mixBlendMode:"screen",opacity:0,pointerEvents:"none"};return e.jsxs("span",{style:{display:"inline-block",position:"relative"},children:[e.jsx("span",{style:{display:"inline-block",...F.film,animation:u},children:g}),e.jsx("span",{"aria-hidden":!0,style:{...a,color:"#FF2E55",animation:l("r")},children:g}),e.jsx("span",{"aria-hidden":!0,style:{...a,color:"#2EE6FF",animation:l("c")},children:g}),e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:0,...F.film,color:"transparent",backgroundImage:"repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 4px)",WebkitBackgroundClip:"text",backgroundClip:"text",animation:u,pointerEvents:"none"},children:g})]},`film-${x}-${n}`)};let f=null;return S&&(_?f=e.jsx("span",{style:{display:"inline-block",...F[p],...p==="neon"?{textShadow:Ce}:{},opacity:n==="out"?0:1,transition:"opacity 400ms ease"},"aria-label":p==="draw"?g:void 0,children:p==="draw"?e.jsx(Ae,{phase:"hold",animate:!1}):g}):f=p==="type"?z():p==="draw"?E():p==="neon"?K():T()),e.jsx("span",{className:"inline-block relative",style:{width:`${st}em`,height:"1em",whiteSpace:"nowrap",textAlign:"left",verticalAlign:"baseline"},children:e.jsx("span",{style:{position:"absolute",left:"var(--slot-anchor, 0px)",bottom:0,lineHeight:1,whiteSpace:"nowrap",transform:`translate(var(--slot-shift, 0px), ${it[p]})`},children:f})})}const ot="linear-gradient(180deg, #FFFFFF 0%, #EDEDF0 40%, #BEC0C6 85%, #9DA0A8 100%)",rt=[.16,1,.3,1],lt={backgroundImage:ot,WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"};function B({text:s,delay:v,start:y=!0,wordStagger:n=.07}){return e.jsx(e.Fragment,{children:s.split(" ").map((t,m)=>e.jsxs("span",{style:{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},children:[e.jsx($.span,{style:{display:"inline-block",...lt},initial:{y:"115%",opacity:0},animate:y?{y:"0%",opacity:1}:{y:"115%",opacity:0},transition:{duration:1,delay:v+m*n,ease:rt},children:t}),m<s.split(" ").length-1&&e.jsx("span",{style:{display:"inline-block",width:"0.28em"}})]},m))})}const Te=[.165,.84,.44,1];function ft(){const[s,v]=d.useState(!1),y=Ne();return d.useEffect(()=>{v(!0)},[]),e.jsxs("section",{className:"relative min-h-screen w-full overflow-hidden bg-black",children:[e.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",children:e.jsx(Ye,{})}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-[3]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"256px 256px",opacity:.28,mixBlendMode:"overlay"}}),e.jsxs("div",{className:"relative z-[2] zg-container min-h-screen pt-24 pb-10 lg:py-0 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]",children:[e.jsxs("div",{className:"text-center sm:text-left w-full min-w-0",children:[e.jsxs("h1",{className:"-mx-2 sm:mx-0 text-[27px] sm:text-6xl md:text-7xl lg:text-7xl font-black leading-[0.9] tracking-tight",children:[e.jsxs("div",{className:"block mb-1 sm:mb-2 max-sm:whitespace-nowrap max-sm:tracking-[-0.04em] max-sm:text-[clamp(42px,13.6vw,58px)]",children:[e.jsx(B,{text:"THE STUDIO",delay:.1,start:s}),e.jsxs("span",{className:"hidden sm:inline",children:[e.jsx("span",{style:{display:"inline-block",width:"0.28em"}}),e.jsx(B,{text:"THAT",delay:.24,start:s})]})]}),e.jsxs("div",{className:"block pb-2 text-[clamp(27px,8.7vw,38px)] sm:text-5xl md:text-6xl lg:text-6xl whitespace-nowrap",children:[e.jsxs("span",{className:"sm:hidden",children:[e.jsx(B,{text:"THAT",delay:.24,start:s}),e.jsx("span",{style:{display:"inline-block",width:"0.28em"}})]}),e.jsx(B,{text:"TURNS YOUR",delay:.38,start:s}),e.jsx("span",{className:"hidden sm:inline-block",style:{width:"0.28em"}}),e.jsx("span",{className:"block sm:inline-block max-sm:mt-2 max-sm:text-[clamp(40px,13vw,56px)] [--slot-anchor:50%] [--slot-shift:-50%] sm:[--slot-anchor:0px] sm:[--slot-shift:0px]",children:e.jsx(at,{start:s})})]}),e.jsx("div",{className:"block max-sm:whitespace-nowrap max-sm:tracking-[-0.04em] max-sm:text-[clamp(38px,12.2vw,53px)]",children:e.jsx(B,{text:"INTO REALITY",delay:.62,start:s})})]}),e.jsx($.p,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.7,delay:1,ease:Te},className:"mt-5 sm:mt-7 max-w-xl mx-auto sm:mx-0 text-[14px] sm:text-base leading-snug sm:leading-relaxed text-white/60",children:"We build brands you can hold. Packaging, product and digital design for consumer goods, taken from first sketch to store shelf."})]}),e.jsx("div",{className:"relative h-[45vh] w-full lg:h-[72vh]",children:e.jsx(We,{revealed:s,modelUrl:"/models/work/strane.glb"})})]}),e.jsxs($.a,{href:"#work","aria-label":"Scroll to the work",initial:{opacity:0},animate:s?{opacity:1}:{opacity:0},transition:{duration:.6,delay:2.4,ease:Te},className:"group absolute bottom-7 sm:bottom-9 left-1/2 z-[4] -translate-x-1/2 flex flex-col items-center gap-2.5 sm:gap-3",children:[e.jsx("span",{className:"hidden sm:block relative h-9 w-px overflow-hidden bg-white/12",children:e.jsx($.span,{className:"absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-transparent via-white/70 to-transparent",animate:y?void 0:{y:["-100%","260%"]},transition:{duration:2.1,repeat:1/0,ease:"easeInOut"}})}),e.jsx("span",{className:"-mr-[0.22em] sm:-mr-[0.32em] whitespace-nowrap text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.32em] text-white/40 transition-colors duration-300 group-hover:text-white/75",children:"Scroll to see our work"}),e.jsx($.svg,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-white/40 transition-colors duration-300 group-hover:text-[#FF5A1F]",animate:y?void 0:{y:[0,5,0]},transition:{duration:1.9,repeat:1/0,ease:"easeInOut"},children:e.jsx("path",{d:"M6 9l6 6 6-6"})})]}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-[1] pointer-events-none",style:{height:"35%",background:"linear-gradient(to top, #000 0%, transparent 100%)"}})]})}export{ft as default};
