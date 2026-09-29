const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/GLTFLoader.BqdKpcjx.js","_astro/three.module.Bx43vjkH.js","_astro/RoomEnvironment.Ct7rVCVU.js"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as b}from"./index.DiEladB3.js";import $ from"./index.tUWw1UFN.js";import{_ as se}from"./preload-helper.BlTxHScW.js";import{r as Ie}from"./index.Pl_XcmgS.js";import"./index.UCiZe19v.js";function je(t){const i=document.body;for(let h=t.parentElement;h&&h!==i;h=h.parentElement){const m=getComputedStyle(h).overflowY;if(m==="auto"||m==="scroll")return h}return null}const Pe=.06,Se=.0085,Be=.006,ee=1.45,Oe=8;function Ge({modelUrl:t,poster:i,posterAlt:h,accent:m,yaw:v=0,exposure:o=1,orient:y}){const L=b.useRef(null),[S,A]=b.useState(!1),[l,f]=b.useState("poster"),[d,p]=b.useState(!1);b.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=L.current;if(!r)return;let u=!1;const x=()=>{u||A(!0)},a=()=>{const w=window;w.requestIdleCallback?w.requestIdleCallback(x,{timeout:1200}):window.setTimeout(x,200)},g=()=>{const w=(document.getAnimations?.()??[]).filter(c=>c.playState==="running"&&/^cs-(main|page)-in$/.test(c.animationName??""));w.length?Promise.allSettled(w.map(c=>c.finished)).then(a,a):a()},k=new IntersectionObserver(([w])=>{w.isIntersecting&&(k.disconnect(),g())},{root:je(r),rootMargin:"400px 0px"});return k.observe(r),()=>{u=!0,k.disconnect()}},[]),b.useEffect(()=>{if(!S)return;const r=L.current;if(!r)return;let u=!1,x=null;return(async()=>{const[a,{GLTFLoader:g},{RoomEnvironment:k}]=await Promise.all([se(()=>import("./three.module.Bx43vjkH.js"),[]),se(()=>import("./GLTFLoader.BqdKpcjx.js"),__vite__mapDeps([0,1])),se(()=>import("./RoomEnvironment.Ct7rVCVU.js"),__vite__mapDeps([2,1]))]);if(u)return;let w;try{if(w=new a.WebGLRenderer({antialias:!0,alpha:!0}),!w.getContext())throw new Error("no webgl context")}catch(T){console.warn("CaseStudyStage: WebGL unavailable, keeping poster",T),f("failed");return}w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.toneMapping=a.ACESFilmicToneMapping,w.toneMappingExposure=.82*o,w.outputColorSpace=a.SRGBColorSpace,w.setSize(r.clientWidth,r.clientHeight),r.appendChild(w.domElement);const c=w.domElement;c.style.width="100%",c.style.height="100%",c.style.display="block",c.style.touchAction="pan-y";const j=new a.Scene,M=new a.PerspectiveCamera(38,r.clientWidth/r.clientHeight,.1,100);M.position.set(0,0,5.4);const E=new a.PMREMGenerator(w),z=E.fromScene(new k,.04).texture;j.environment=z,j.environmentIntensity=.55;const N=new a.Color(m),C=N.clone().lerp(new a.Color("#ffffff"),.55),B=new a.DirectionalLight(16777215,.5);B.position.set(0,3,5);const X=new a.DirectionalLight(N,1);X.position.set(-5,1.5,-3.5);const U=new a.DirectionalLight(C,.7);U.position.set(4.5,2,3),j.add(B,X,U);const D=new a.Group,H=new a.Group;H.rotation.y=v,D.add(H),j.add(D);const Z=(T,q)=>{const P=new a.Box3().setFromObject(T),O=P.getSize(new a.Vector3),Q=P.getCenter(new a.Vector3),Re=Math.max(O.x,O.y,O.z)||1,xe=q/Re;T.scale.setScalar(xe),T.position.copy(Q).multiplyScalar(-xe)};new g().load(t,T=>{if(u)return;const q=T.scene,P=new a.Group;y&&P.rotation.set(y[0],y[1],y[2]),P.add(q),Z(P,2.8);const O=()=>{u||(H.add(P),f("ready"))};w.compileAsync(P,M,j).then(O,O)},void 0,T=>{console.warn("CaseStudyStage: GLB failed to load, keeping poster",T),f("failed")});let R=!1,I=!1,G=0,W=0,ce=0,de=0,F=0;const Ce=T=>T<-ee?-ee:T>ee?ee:T,he=T=>{T.pointerType==="mouse"&&T.button!==0||(R=!0,I=T.pointerType!=="touch",G=ce=T.clientX,W=de=T.clientY,F=0,I&&c.setPointerCapture?.(T.pointerId),p(!0))},pe=T=>{if(!R)return;if(!I){const O=T.clientX-ce,Q=T.clientY-de;if(Math.hypot(O,Q)<Oe)return;if(Math.abs(O)<=Math.abs(Q)){R=!1,p(!1);return}I=!0,c.setPointerCapture?.(T.pointerId)}const q=T.clientX-G,P=T.clientY-W;G=T.clientX,W=T.clientY,H.rotation.y+=q*Se,D.rotation.x=Ce(D.rotation.x+P*Be),F=F*.6+q*Se*.4},J=()=>{R&&(R=!1,I=!1,p(!1))};c.addEventListener("pointerdown",he),c.addEventListener("pointermove",pe),c.addEventListener("pointerup",J),c.addEventListener("pointercancel",J);let V=!1;const me=T=>{T.pointerType==="mouse"&&(V=!0)},ge=()=>{V=!1};r.addEventListener("pointerenter",me),r.addEventListener("pointerleave",ge);const ue=new a.Clock;let te=0,ae=!1;const He=()=>{const T=Math.min(ue.getDelta(),.05);if(!R){const q=V?0:Pe*T;F+=(q-F)*(V?.09:.03),V&&Math.abs(F)<1e-5&&(F=0),H.rotation.y+=F}w.render(j,M)},fe=()=>{He(),te=requestAnimationFrame(fe)},De=()=>{ae||(ae=!0,ue.start(),te=requestAnimationFrame(fe))},be=()=>{ae=!1,cancelAnimationFrame(te)};let we=!0;const re=()=>{we&&!document.hidden?De():be()},ve=new IntersectionObserver(([T])=>{we=T.isIntersecting,re()},{root:je(r),threshold:0});ve.observe(r);const ye=()=>re();document.addEventListener("visibilitychange",ye);const oe=()=>{!r.clientWidth||!r.clientHeight||(M.aspect=r.clientWidth/r.clientHeight,M.updateProjectionMatrix(),w.setSize(r.clientWidth,r.clientHeight))};window.addEventListener("resize",oe);const ke=new ResizeObserver(oe);ke.observe(r),re(),x=()=>{be(),ve.disconnect(),ke.disconnect(),document.removeEventListener("visibilitychange",ye),window.removeEventListener("resize",oe),c.removeEventListener("pointerdown",he),c.removeEventListener("pointermove",pe),c.removeEventListener("pointerup",J),c.removeEventListener("pointercancel",J),r.removeEventListener("pointerenter",me),r.removeEventListener("pointerleave",ge),z.dispose(),E.dispose(),w.dispose(),c.parentNode===r&&r.removeChild(c)}})(),()=>{u=!0,x?.()}},[S,t,m,v,o,y]);const n=l!=="ready";return e.jsxs("div",{className:"cs-stage",style:{cursor:l==="ready"?d?"grabbing":"grab":"default"},children:[e.jsx("div",{ref:L,className:"cs-stage-mount","aria-hidden":l==="ready"?void 0:!0}),e.jsx("img",{src:i,alt:h,draggable:!1,className:"cs-stage-poster",style:{opacity:n?1:0},loading:"lazy"}),l==="ready"&&e.jsxs("span",{className:"cs-stage-hint",style:{color:m},children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M12 4v16M4 12h16M12 4l-3 3M12 4l3 3M12 20l-3-3M12 20l3-3M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3"})}),"Drag to rotate"]}),e.jsx("style",{children:`
        .cs-stage {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .cs-stage-mount {
          position: absolute;
          inset: 0;
        }
        .cs-stage-poster {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: clamp(1.5rem, 5vw, 4rem);
          pointer-events: none;
          transition: opacity 0.6s ease;
          filter: drop-shadow(0 24px 48px rgba(0,0,0,0.55));
        }
        .cs-stage-hint {
          position: absolute;
          left: 50%;
          bottom: 1.1rem;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.75;
          pointer-events: none;
          user-select: none;
        }
      `})]})}const Fe=.26,qe=.2,Te=30,Me=17,Ne=.93,$e=.045,Le=3;function We({hero:t,heroAlt:i,backdrop:h,accent:m}){const v=b.useRef(null),o=b.useRef(null),[y,L]=b.useState(!1);return b.useEffect(()=>{const S=v.current,A=o.current;if(!S||!A)return;const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let f=0,d=0,p=0,n=0,r=!1,u=!1,x=0,a=0,g=0;const k=(N,C)=>N<-C?-C:N>C?C:N,w=()=>{A.style.transform=`perspective(1100px) rotateX(${d.toFixed(3)}deg) rotateY(${f.toFixed(3)}deg)`},c=()=>{if(g=0,r)return;if(Math.abs(p)>.05||Math.abs(n)>.05)f=k(f+p,Te),d=k(d+n,Me),p*=Ne,n*=Ne;else{p=0,n=0;const C=l?.25:$e;if(f+=(0-f)*C,d+=(0-d)*C,Math.abs(f)<.04&&Math.abs(d)<.04){f=0,d=0,w();return}}w(),g=requestAnimationFrame(c)},j=()=>{!g&&!r&&(g=requestAnimationFrame(c))},M=N=>{N.pointerType==="mouse"&&N.button!==0||(u=!0,r=!1,x=N.clientX,a=N.clientY,p=0,n=0,g&&(cancelAnimationFrame(g),g=0))},E=N=>{if(!u)return;const C=N.clientX-x,B=N.clientY-a;if(!r){if(Math.abs(C)<Le&&Math.abs(B)<Le)return;if(N.pointerType!=="mouse"&&Math.abs(B)>Math.abs(C)){u=!1;return}r=!0,L(!0),S.classList.add("csis-dragging"),S.setPointerCapture?.(N.pointerId)}x=N.clientX,a=N.clientY,p=C*Fe,n=B*qe,f=k(f+p,Te),d=k(d+n,Me),w()},z=N=>{!u&&!r||(u=!1,r&&(r=!1,S.classList.remove("csis-dragging"),S.releasePointerCapture?.(N.pointerId),l&&(p=0,n=0)),j())};return S.addEventListener("pointerdown",M),S.addEventListener("pointermove",E),S.addEventListener("pointerup",z),S.addEventListener("pointercancel",z),()=>{S.removeEventListener("pointerdown",M),S.removeEventListener("pointermove",E),S.removeEventListener("pointerup",z),S.removeEventListener("pointercancel",z),g&&cancelAnimationFrame(g)}},[]),e.jsxs("div",{ref:v,className:"csis",children:[e.jsx("img",{src:h,alt:"","aria-hidden":"true",className:"csis-backdrop",draggable:!1}),e.jsx("div",{className:"csis-scrim","aria-hidden":"true"}),e.jsx("div",{ref:o,className:"csis-tilt",children:e.jsx("img",{src:t,alt:i,className:"csis-hero",draggable:!1})}),!y&&e.jsxs("span",{className:"csis-hint",style:{color:m},children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"})}),"Drag to turn"]}),e.jsx("style",{children:`
        .csis {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          /* Horizontal drags turn the pouch; vertical still scrolls the page. */
          touch-action: pan-y;
        }
        .csis.csis-dragging { cursor: grabbing; }
        .csis-backdrop {
          position: absolute;
          inset: -6%;
          width: 112%;
          height: 112%;
          /* Tailwind preflight sets img max-width: 100%, which clamped this back
             to the frame's width while left: -6% still held, so the art stopped
             ~6% short of the right edge and the frame's own gradient showed as a
             dark band there. Height was never clamped, which is why only one
             side of the bleed went missing. */
          max-width: none;
          max-height: none;
          object-fit: cover;
          object-position: center;
          filter: saturate(1.15);
          /* Held still. The ken-burns pass used to run scale(1 -> 1.1) across
             the marble, and on art this busy a slow zoom does not read as a
             drift: every swirl crawls against its neighbour and the whole
             backdrop shimmers. The static 1.04 keeps the -6% inset covered at
             any aspect without moving a pixel. */
          transform: scale(1.04);
        }
        /* Darken the marble so the pouch stays the loudest thing on stage. */
        .csis-scrim {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(75% 80% at 50% 52%, rgba(8,6,8,0.62) 0%, rgba(8,6,8,0.78) 65%, rgba(8,6,8,0.9) 100%);
        }
        .csis-tilt {
          position: relative;
          z-index: 2;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
          /* The turn is steered frame by frame in JS (no CSS transition), or
             every drag would lag a fifth of a second behind the hand. */
        }
        .csis-hero {
          max-height: 82%;
          max-width: 72%;
          object-fit: contain;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.75));
          user-select: none;
          -webkit-user-drag: none;
        }
        .csis-hint {
          position: absolute;
          left: 50%;
          bottom: 1.1rem;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.75;
          pointer-events: none;
          user-select: none;
          z-index: 3;
        }
      `})]})}function Ye({src:t,alt:i}){return e.jsxs("div",{className:"csps",children:[e.jsx("img",{src:t,alt:i,className:"csps-art",draggable:!1}),e.jsx("div",{className:"csps-vignette","aria-hidden":"true"}),e.jsx("style",{children:`
        .csps {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .csps-art {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform-origin: 50% 50%;
          /* Held still, same call as the image stage: this is the same slow
             ken-burns on the same kind of busy key-art, just at a gentler
             rate, and one stage sitting still while the other crawls would be
             the inconsistency. Lootbar and Better are the two posters. */
          transform: scale(1.04);
        }
        /* Soften the frame edge so the poster doesn't butt hard into the border. */
        .csps-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(120% 110% at 50% 45%, transparent 55%, rgba(0,0,0,0.45) 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .csps-art { animation: none !important; }
        }
      `})]})}function Ae(t){const i=document.body;for(let h=t.parentElement;h&&h!==i;h=h.parentElement){const m=getComputedStyle(h).overflowY;if(m==="auto"||m==="scroll")return h}return null}const _e=t=>1-(1-t)*(1-t),Ve=t=>t<0?0:t>1?1:t;function Ke({data:t}){const i=b.useRef(null),h=b.useRef([]),[m,v]=b.useState(!1),[o,y]=b.useState(null),[L,S]=b.useState(null),A=o??L,l=t.map.pins.find(a=>a.key===A)??null,{canvas:f,layers:d}=t.parallax,[p,n]=f;b.useEffect(()=>{const a=i.current;if(!a||window.matchMedia("(prefers-reduced-motion: reduce)").matches||!window.matchMedia("(min-width: 768px)").matches)return;let g=!1;const k=new IntersectionObserver(([w])=>{if(!w.isIntersecting)return;k.disconnect();const c=()=>{g||v(!0)},j=(document.getAnimations?.()??[]).filter(M=>M.playState==="running"&&/^cs-(main|page)-in$/.test(M.animationName??""));j.length?Promise.allSettled(j.map(M=>M.finished)).then(c,c):c()},{root:Ae(a),rootMargin:"300px 0px"});return k.observe(a),()=>{g=!0,k.disconnect()}},[]),b.useEffect(()=>{if(!m)return;const a=i.current;if(!a)return;const g=Ae(a),k=performance.now();let w=k,c=0;const j=d.map(z=>z.intro[0]),M=z=>{const N=Math.min((z-w)/1e3,.1);w=z;const C=a.getBoundingClientRect(),B=g?g.clientHeight:window.innerHeight,X=g?C.top-g.getBoundingClientRect().top:C.top,U=Ve((B-X)/(B+C.height));for(let D=0;D<d.length;D++){const H=d[D],Z=h.current[D];if(!Z)continue;const R=(z-k)/1e3-H.delay;let I;if(R<H.dur){const G=R<=0?0:_e(R/H.dur);I=H.intro[0]+(H.intro[1]-H.intro[0])*G,j[D]=I}else{const G=H.scrollTo===void 0?H.intro[1]:H.intro[1]+(H.scrollTo-H.intro[1])*U,W=H.scrub??0;j[D]=W>0?j[D]+(G-j[D])*(1-Math.exp(-N/W)):G,I=j[D]}Z.style.transform=`translate3d(0, ${I.toFixed(3)}%, 0)`}c=requestAnimationFrame(M)},E=new IntersectionObserver(([z])=>{z.isIntersecting?c||(w=performance.now(),c=requestAnimationFrame(M)):c&&(cancelAnimationFrame(c),c=0)},{root:g,threshold:0});return E.observe(a),()=>{E.disconnect(),c&&cancelAnimationFrame(c)}},[m,d]);const[r,u]=t.map.canvas,x=(a,g)=>`${(a/g*100).toFixed(4)}%`;return e.jsxs("section",{className:"csm","aria-labelledby":"csm-head",children:[e.jsxs("div",{className:"cs-section-head",children:[e.jsx("p",{className:"cs-eyebrow",id:"csm-head",children:t.eyebrow}),e.jsx("p",{className:"cs-stage-note",children:t.note})]}),e.jsxs("div",{className:"csm-inner",children:[e.jsx("p",{className:"csm-lede",children:t.lede}),e.jsxs("figure",{className:"csm-fig",children:[e.jsx("div",{className:"csm-stage",ref:i,style:{aspectRatio:`${p} / ${n}`},"aria-hidden":"true",children:d.map((a,g)=>e.jsx("img",{ref:k=>{h.current[g]=k},className:"csm-layer",src:a.src,alt:"",loading:"lazy",decoding:"async",draggable:!1,style:{left:x(a.x,p),top:x(a.y,n),width:x(a.w,p),transform:`translate3d(0, ${a.intro[1]}%, 0)`}},a.key))}),e.jsx("figcaption",{className:"csm-cap",children:t.parallax.caption})]}),e.jsxs("figure",{className:"csm-fig",children:[e.jsxs("div",{className:"csm-map",style:{aspectRatio:`${r} / ${u}`},children:[e.jsx("img",{className:"csm-map-art",src:t.map.src,alt:t.map.alt,loading:"lazy",decoding:"async",draggable:!1}),t.map.pins.map(a=>e.jsx("button",{type:"button",className:"csm-pin","data-on":A===a.key?"":void 0,"aria-pressed":L===a.key,"aria-label":`${a.label} pin${a.unbuilt?", designed and never built":""}`,style:{left:x(a.x,r),top:x(a.y,u),width:x(a.w,r),height:x(a.h,u)},onMouseEnter:()=>y(a.key),onMouseLeave:()=>y(null),onFocus:()=>y(a.key),onBlur:()=>y(null),onClick:()=>S(g=>g===a.key?null:a.key),children:e.jsx("img",{className:"csm-pin-art",src:a.hover,alt:"",loading:"lazy",decoding:"async",draggable:!1})},a.key))]}),e.jsx("p",{className:"csm-readout","aria-live":"polite",children:l?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"csm-readout-k",children:l.label}),l.note]}):e.jsx("span",{className:"csm-readout-idle",children:t.map.idle})}),e.jsx("ul",{className:"csm-pinlist",children:t.map.pins.map(a=>e.jsxs("li",{className:"csm-row",children:[e.jsx("img",{className:"csm-pinlist-art",src:a.hover,alt:`${a.label} pin, hover state`,loading:"lazy",decoding:"async"}),e.jsx("span",{className:"csm-row-d",children:a.note})]},a.key))}),e.jsx("figcaption",{className:"csm-cap",children:t.map.caption}),e.jsx("p",{className:"csm-shipped",children:t.map.shipped})]}),e.jsxs("div",{className:"csm-block",children:[e.jsx("h3",{className:"cs-eyebrow",children:"Client direction"}),e.jsx("ul",{className:"csm-rows csm-rows-q",children:t.direction.map(a=>e.jsxs("li",{className:"csm-row csm-row-q",children:[e.jsx("blockquote",{className:"csm-q",children:a.quote}),e.jsxs("p",{className:"csm-attr",children:[a.author,e.jsx("span",{className:"csm-attr-date",children:a.date})]}),e.jsx("p",{className:"csm-out",children:a.outcome})]},a.quote))}),e.jsx("p",{className:"csm-foot",children:t.directionNote}),e.jsx("ul",{className:"csm-rows csm-rows-h",children:t.handoff.map(a=>e.jsxs("li",{className:"csm-row csm-row-h",children:[e.jsx("span",{className:"csm-hnote",children:a.note}),e.jsx("span",{className:"csm-row-d",children:a.detail})]},a.note))})]})]}),e.jsx("style",{children:`
        .csm { padding: 3.5rem clamp(1.25rem, 4vw, 3rem) 1rem; }
        .csm-inner { max-width: 1280px; margin: 0 auto; }
        .csm-lede {
          max-width: 46rem;
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.62);
          margin: 0 0 2.5rem;
        }
        .csm-fig { margin: 0 0 3.25rem; }

        /* ── Parallax stage ── */
        .csm-stage {
          position: relative;
          width: 100%;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 1.25rem;
          /* The teal the layers were drawn against -- but only the top half
             of this box is sky. Below the mountain plate's reflection the
             plates stop and the box itself is the lake, which the delivered
             hero (avitas-map-hero-scene.webp) draws as a pale grey-teal, not
             as more sky. Until this section's land plate was trimmed that
             water was supplied by the golden-trail panel hanging under the
             plate; with the panel gone the box has to draw it. Stops sampled
             off the delivered hero at the matching rows. */
          background: linear-gradient(180deg, #01c4b4 0%, #6cd7cf 34%, #a9cdc8 66%, #9cc5c0 100%);
        }
        .csm-layer {
          position: absolute;
          display: block;
          height: auto;
          /* The land plate is placed wider than the stage on purpose, so it
             has to opt out of the global img { max-width: 100% }, which would
             otherwise silently clamp it back to the stage's width and put its
             own edge in frame again -- which is the bug this section had. */
          max-width: none;
          transform: translate3d(0, 0, 0);
          /* Deliberately not promoted. Three full-width plates is over two
             viewports of layer on their own, which took this page past
             Firefox's will-change budget and cost every other hint on it. */
          pointer-events: none;
          user-select: none;
        }
        .csm-cap {
          margin-top: 0.9rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          line-height: 1.6;
          color: rgba(255,255,255,0.42);
        }

        /* ── Map ── */
        .csm-map {
          position: relative;
          width: 100%;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 1.25rem;
        }
        .csm-map-art { display: block; width: 100%; height: 100%; object-fit: cover; }
        .csm-pin {
          position: absolute;
          padding: 0;
          border: 0;
          background: none;
          cursor: pointer;
          /* The bounce the built site runs on a hovered pin, to the frame. */
          animation: none;
        }
        .csm-pin-art {
          display: block;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .csm-pin[data-on] .csm-pin-art { opacity: 1; }
        .csm-pin[data-on] { animation: csm-button-tab 3s ease-in-out infinite; }
        /* Measured off the built theme: a two-tap nudge inside the first fifth
           of the cycle, then rest. */
        @keyframes csm-button-tab {
          0%   { transform: translateY(0); }
          5%   { transform: translateY(-2px); }
          10%  { transform: translateY(0); }
          15%  { transform: translateY(-2px); }
          20%  { transform: translateY(0); }
          100% { transform: translateY(0); }
        }
        .csm-pin:focus-visible {
          outline: 2px solid var(--cs-accent);
          outline-offset: 4px;
          border-radius: 4px;
        }
        .csm-readout {
          margin: 1rem 0 0;
          min-height: 2.6rem;
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.62);
        }
        .csm-readout-k {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cs-accent);
          margin-right: 0.85rem;
        }
        .csm-readout-idle { color: rgba(255,255,255,0.4); }
        .csm-shipped {
          margin: 1.25rem 0 0;
          max-width: 44rem;
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
        }
        /* Desktop keeps the pins on the map and hides the list. */
        .csm-pinlist { display: none; }

        /* ── Ruled rows: the page's own language, no cards ── */
        .csm-block { margin: 0 0 3.25rem; }
        .csm-rows {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid rgba(255,255,255,0.09);
        }
        .csm-row {
          position: relative;
          display: grid;
          grid-template-columns: 12rem 20rem minmax(0, 1fr);
          gap: 1.25rem;
          align-items: baseline;
          padding: 0.95rem 0.25rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.09);
        }
        /* The site's ground wipe, left to right. */
        .csm-row::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.045);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.45s cubic-bezier(0.25,0.1,0.25,1);
          pointer-events: none;
        }
        .csm-row:hover::before { transform: scaleX(1); }
        .csm-row-d {
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.5);
        }
        .csm-foot {
          margin: 1.25rem 0 0;
          max-width: 44rem;
          font-size: 0.85rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
        }

        /* Quote rows: two columns, the words and what they changed. */
        .csm-rows-q { margin-top: 1.6rem; }
        .csm-row-q { grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr); }
        .csm-q {
          grid-row: span 2;
          margin: 0;
          padding-left: 1.15rem;
          border-left: 2px solid rgba(255,255,255,0.18);
          font-size: 1rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.86);
        }
        .csm-attr {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--cs-accent);
        }
        .csm-attr-date {
          margin-left: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.35);
        }
        .csm-out {
          margin: 0.45rem 0 0;
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.5);
        }

        /* Handoff notes: set as the all-caps canvas scrawls they are. */
        .csm-rows-h { margin-top: 2rem; }
        .csm-row-h { grid-template-columns: 22rem minmax(0, 1fr); }
        .csm-hnote {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          line-height: 1.5;
          color: rgba(255,255,255,0.82);
        }

        @media (max-width: 1180px) {
          .csm-row { grid-template-columns: 10rem 16rem minmax(0, 1fr); gap: 1rem; }
          .csm-row-h { grid-template-columns: 18rem minmax(0, 1fr); }
        }

        @media (max-width: 767px) {
          .csm { padding-top: 2.5rem; }
          /* Same call the built site makes: the pins stop being hittable, so
             the wayfinding moves to a list and the map stays as the picture. */
          .csm-map .csm-pin { display: none; }
          .csm-readout { display: none; }
          .csm-pinlist {
            display: block;
            list-style: none;
            margin: 1.1rem 0 0;
            padding: 0;
            border-top: 1px solid rgba(255,255,255,0.09);
          }
          .csm-pinlist .csm-row {
            grid-template-columns: 5.5rem minmax(0, 1fr);
            align-items: center;
            gap: 0.9rem;
          }
          .csm-pinlist-art { display: block; width: 100%; height: auto; }
          .csm-row { grid-template-columns: minmax(0, 1fr); gap: 0.35rem; }
          .csm-row-q { grid-template-columns: minmax(0, 1fr); }
          .csm-q { grid-row: auto; font-size: 0.95rem; }
          .csm-row-h { grid-template-columns: minmax(0, 1fr); }
          .csm-out { margin-top: 0.15rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          /* The layers keep their rest transforms, which is the composed
             picture, and nothing loops. */
          .csm-layer { transition: none; }
          .csm-pin[data-on] { animation: none; }
          .csm-pin-art { transition: none; }
          .csm-row::before { transition: none; }
        }
      `})]})}const Xe=48;function Ue({items:t,index:i,accent:h,onIndex:m,onClose:v}){const o=b.useRef(null),y=b.useRef(null),L=t[i],S=b.useCallback(l=>{t.length<2||m((i+l+t.length)%t.length)},[i,t.length,m]);if(b.useEffect(()=>{const l=f=>{f.key==="Escape"?(f.preventDefault(),f.stopPropagation(),v()):f.key==="ArrowRight"?S(1):f.key==="ArrowLeft"&&S(-1)};return window.addEventListener("keydown",l,!0),()=>window.removeEventListener("keydown",l,!0)},[S,v]),b.useEffect(()=>{const l=window.__lenis,f=l?.isStopped===!0;f||l?.stop?.();const d=document.documentElement,p=d.style.overflow,n=document.body.style.overflow;d.style.overflow="hidden",document.body.style.overflow="hidden";const r=document.querySelector(".cso-scroll"),u=r?.style.overflowY??null;return r&&(r.style.overflowY="hidden"),()=>{d.style.overflow=p,document.body.style.overflow=n,r&&(r.style.overflowY=u??""),f||l?.start?.()}},[]),b.useEffect(()=>{const l=document.activeElement;return o.current?.focus(),()=>l?.focus?.()},[]),!L)return null;const A=e.jsxs("div",{className:"csl",role:"dialog","aria-modal":"true","aria-label":`${L.alt}${t.length>1?`, image ${i+1} of ${t.length}`:""}`,style:{"--csl-accent":h},"data-lenis-prevent":!0,onClick:v,onTouchStart:l=>{const f=l.touches[0];y.current={x:f.clientX,y:f.clientY}},onTouchEnd:l=>{const f=y.current;if(y.current=null,!f)return;const d=l.changedTouches[0],p=d.clientX-f.x,n=d.clientY-f.y;Math.abs(p)>Xe&&Math.abs(p)>Math.abs(n)*1.5&&S(p<0?1:-1)},children:[e.jsx("button",{ref:o,className:"csl-x",onClick:v,"aria-label":"Close image",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:e.jsx("path",{d:"M5 5l14 14M19 5L5 19"})})}),t.length>1&&e.jsxs("span",{className:"csl-count","aria-hidden":"true",children:[String(i+1).padStart(2,"0")," / ",String(t.length).padStart(2,"0")]}),t.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"csl-nav csl-prev","aria-label":"Previous image",onClick:l=>{l.stopPropagation(),S(-1)},children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M15 5l-7 7 7 7"})})}),e.jsx("button",{className:"csl-nav csl-next","aria-label":"Next image",onClick:l=>{l.stopPropagation(),S(1)},children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M9 5l7 7-7 7"})})})]}),e.jsxs("figure",{className:"csl-fig",onClick:l=>l.stopPropagation(),children:[e.jsx("img",{className:"csl-img",src:L.src,alt:L.alt,decoding:"async"},L.src),e.jsx("figcaption",{className:"csl-cap",children:L.caption??L.alt})]}),e.jsx("style",{children:`
        .csl {
          position: fixed;
          inset: 0;
          z-index: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 4vw, 3rem);
          background: rgba(6, 6, 7, 0.93);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          animation: csl-in 0.24s ease-out both;
          cursor: zoom-out;
        }
        @keyframes csl-in { from { opacity: 0; } to { opacity: 1; } }

        .csl-fig {
          margin: 0;
          max-width: 100%;
          max-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          cursor: default;
        }
        .csl-img {
          display: block;
          /* The caption is the only other thing in the column, so the picture
             gets the viewport minus room for one line of it and the padding. */
          max-height: calc(100vh - clamp(8rem, 18vh, 11rem));
          max-width: min(100%, 1600px);
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 0.5rem;
          filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6));
          animation: csl-img-in 0.34s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes csl-img-in {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: none; }
        }

        .csl-cap,
        .csl-count {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .csl-cap {
          color: rgba(255, 255, 255, 0.62);
          max-width: 60ch;
          text-align: center;
          text-wrap: balance;
        }
        .csl-count {
          position: absolute;
          top: clamp(0.75rem, 2.5vw, 1.5rem);
          left: clamp(0.75rem, 2.5vw, 1.5rem);
          color: var(--csl-accent);
          font-variant-numeric: tabular-nums;
          line-height: 2.6rem; /* sits on the close button's centre line */
        }

        .csl-x,
        .csl-nav {
          position: absolute;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.85);
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .csl-x:hover,
        .csl-nav:hover {
          background: var(--csl-accent);
          border-color: var(--csl-accent);
          color: #0b0b0b;
        }
        .csl-x:focus-visible,
        .csl-nav:focus-visible { outline: 2px solid var(--csl-accent); outline-offset: 3px; }
        .csl-x {
          top: clamp(0.75rem, 2.5vw, 1.5rem);
          right: clamp(0.75rem, 2.5vw, 1.5rem);
          width: 2.6rem;
          height: 2.6rem;
        }
        .csl-nav {
          top: 50%;
          transform: translateY(-50%);
          width: 3rem;
          height: 3rem;
        }
        .csl-prev { left: clamp(0.5rem, 2vw, 1.5rem); }
        .csl-next { right: clamp(0.5rem, 2vw, 1.5rem); }

        /* Below the arrows' elbow room, the sideways swipe carries navigation
           and two 3rem targets would sit on top of the picture. */
        @media (max-width: 640px) {
          .csl-nav { display: none; }
          .csl-img { max-height: calc(100vh - clamp(7rem, 22vh, 10rem)); }
        }

        @media (prefers-reduced-motion: reduce) {
          .csl, .csl-img { animation: none; }
        }
      `})]});return Ie.createPortal(A,document.body)}const Ze=t=>{const i=[];let h=[];for(const m of t)m.kind==="tile"?h.push(m):(h.length&&i.push({type:"grid",tiles:h}),h=[],i.push({type:"divider",divider:m}));return h.length&&i.push({type:"grid",tiles:h}),i},Je=t=>{const i=t.col>=3?2:1,h=t.rowM??Math.max(2,Math.round(t.row*.75));return{"--c":t.col,"--r":t.row,"--cm":i,"--rm":h,...t.pos?{"--pos":t.pos}:{}}},Qe=t=>["cs-tile",`cs-tile-${t.tile??"plain"}`,`cs-pad-${t.pad??"std"}`,t.fit==="cover"?"cs-fit-cover":"cs-fit-contain"].join(" ");function et({gallery:t,accent:i,glow:h,resetKey:m,eyebrow:v="The Work",standalone:o=!1}){const[y,L]=b.useState(null);b.useEffect(()=>L(null),[m]);const S=Ze(t),A=t.map(d=>d.kind==="tile"?{src:d.src,alt:d.alt,caption:d.caption}:{src:d.src,alt:d.alt}),l=new Map(A.map((d,p)=>[d.src,p])),f=o?{"--cs-accent":i,"--cs-glow":h??"transparent"}:void 0;return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"cs-gallery","aria-label":"Project gallery",style:f,children:[v&&e.jsx("div",{className:"cs-section-head",children:e.jsx("p",{className:"cs-eyebrow",children:v})}),S.map((d,p)=>d.type==="grid"?e.jsx("div",{className:"cs-grid",children:d.tiles.map(n=>e.jsxs("figure",{className:Qe(n),style:Je(n),children:[e.jsx("button",{type:"button",className:"cs-tile-open",onClick:()=>L(l.get(n.src)??0),children:e.jsx("img",{src:n.src,alt:n.alt,loading:"lazy",decoding:"async"})}),n.caption&&e.jsx("figcaption",{className:"cs-cap",children:n.caption})]},n.src))},p):e.jsx("div",{className:"cs-band",children:e.jsx("button",{type:"button",className:"cs-tile-open",onClick:()=>L(l.get(d.divider.src)??0),children:e.jsx("img",{src:d.divider.src,alt:d.divider.alt,loading:"lazy",decoding:"async"})})},p))]}),y!==null&&e.jsx(Ue,{items:A,index:y,accent:i,onIndex:L,onClose:()=>L(null)}),e.jsx("style",{children:`
        /* ═══ Gallery ═══ */
        .cs-gallery { padding: 1rem clamp(1.25rem, 4vw, 3rem) 5rem; }
        .cs-gallery .cs-section-head { margin-bottom: 1.5rem; }
        .cs-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 105px;
          gap: 1rem;
        }
        .cs-grid + .cs-grid { margin-top: 1rem; }
        .cs-tile {
          grid-column: span var(--c);
          grid-row: span var(--r);
          position: relative;
          margin: 0;
          border-radius: 1.1rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* The whole image area is the control. Reset rather than restyle: the
           button exists for semantics and hit area, and every visual the tile
           already had (plate, frame, padding, hover zoom) is keyed off
           .cs-tile and the img, both of which still apply through it. */
        .cs-tile-open {
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          border: 0;
          background: none;
          font: inherit;
          color: inherit;
          cursor: zoom-in;
        }
        .cs-tile-open:focus-visible {
          outline: 2px solid var(--cs-accent);
          outline-offset: -4px;
          border-radius: inherit;
        }
        .cs-tile img {
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cs-tile:hover img { transform: scale(1.025); }
        .cs-fit-contain img { object-fit: contain; filter: drop-shadow(0 18px 32px rgba(0,0,0,0.45)); }
        .cs-fit-cover img { object-fit: cover; object-position: var(--pos, center); filter: none; }
        .cs-pad-tight img { padding: 0.5rem; }
        .cs-pad-std img { padding: 1.4rem; }
        .cs-pad-roomy img { padding: clamp(1.75rem, 4vw, 3.25rem); }
        .cs-fit-cover img { padding: 0 !important; }

        .cs-tile-plain { background: rgba(255,255,255,0.025); }
        .cs-tile-tint {
          background:
            radial-gradient(90% 90% at 50% 60%, var(--cs-glow) 0%, transparent 70%),
            rgba(255,255,255,0.025);
        }
        .cs-tile-framed {
          background: #eceae5;
          border: 1px solid rgba(255,255,255,0.25);
          outline: 6px solid rgba(255,255,255,0.05);
          outline-offset: -6px;
        }
        .cs-tile-framed img { filter: none; }
        .cs-tile-plate { background: #ffffff; }
        .cs-tile-plate img { filter: none; }
        .cs-tile-bright { background: #f1f1ee; }
        .cs-tile-bright img { filter: none; }

        .cs-cap {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 0.85rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-shadow: 0 1px 8px rgba(0,0,0,0.7);
          pointer-events: none;
        }
        .cs-tile-framed .cs-cap,
        .cs-tile-plate .cs-cap,
        .cs-tile-bright .cs-cap { color: rgba(0,0,0,0.55); text-shadow: none; }

        /* Full-bleed divider band */
        .cs-band {
          width: 100vw;
          margin: 2.5rem calc(50% - 50vw);
          height: clamp(200px, 38vh, 400px);
          overflow: hidden;
        }
        .cs-band img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* CaseStudyContent disables the tile zoom under reduced motion; that
           rule travels with the gallery so the microsites honour it too. */
        @media (prefers-reduced-motion: reduce) {
          .cs-tile img { transition: none; }
          .cs-tile:hover img { transform: none; }
        }

        /* Same breakpoint and the same numbers CaseStudyContent already used
           for these rules, so the dark pages are unchanged and a microsite
           gets the identical mobile grid rather than a second opinion. */
        @media (max-width: 767px) {
          .cs-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 82px; gap: 0.7rem; }
          .cs-tile { grid-column: span var(--cm); grid-row: span var(--rm); }
          .cs-pad-roomy img { padding: 1.25rem; }
          .cs-pad-std img { padding: 0.9rem; }
          .cs-band { height: 180px; margin: 1.5rem calc(50% - 50vw); }
        }
      `})]})}const s=(t,i)=>`/portfolio/${t}/hi/${i}`,tt={"Holistic Industries":{src:"/brand-logo/holistic-industries.png",alt:"Holistic Industries"}},Y=[{slug:"garcia-case",href:"/work/garcia",name:"Garcia Handpicked",client:"Holistic Industries",categories:["Packaging","Flower","Edibles","Pre-Rolls","Tour Packs"],position:"Jerry Garcia, officially licensed. The packaging plays like a sixties poster.",blurb:"The Jerry Garcia estate licensed his name, portrait, signature, and handprint to Holistic Industries. The hard part was the shelf: every pack carries mandatory compliance copy, and the range spans a 14g flower pouch, edible tins, and collector Tour Packs. The idea: let the artwork carry the brand and let the type carry the law. Fluid rainbow liquid-marble runs across every format, strain color-coding tells variants apart, and Swiss-style type holds every required word.",deliverables:["Full packaging, all flower weights","Edible tins","Pre-roll boxes","Deluxe tour & Roadie packs","Retail display signage","Logo lockups","Marketing collateral & merch","Brand guide"],visualIdentity:"Psychedelic posters ran saturated color on dark grounds, so the packs do the same: liquid-marble rainbows, red through purple, on near-black. The marble reads as the brand, the strain color as the variant, the Swiss type as the fine print, and Garcia’s signature marks each pack as licensed.",logo:{src:"/brand-logo/ghp-knockout.png",alt:"Garcia Handpicked",scale:1.9},cover:{src:"/portfolio/garcia/garcia-brand-cover.webp",alt:"Garcia Handpicked brand cover: a single polaroid of strain-coded jars, a pouch and a loaded rolling tray on a patterned cloth, taped over the liquid-marble artwork under the green hand-print pick"},heroArt:{src:"/portfolio/garcia/garcia-hero-art.webp",alt:"Garcia Handpicked hero collage: the marbled 14g flower pouch, an Orange Sunshine pre-roll tin, a Double Doobie tube and a sun-grown flower jar among cannabis leaves, under the black hand print and the green hand-print guitar pick",canvas:[1920,1080],layers:[{key:"leaf-low",x:1222,y:766,w:229,m:[8,.6,-22,-30,5]},{key:"pick",x:1460,y:676,w:132,m:[6,1.8,24,-28,8]},{key:"leaf-high",x:1493,y:0,w:427,m:[9,.3,8,-22,-2]},{key:"handprint",x:931,y:45,w:211,m:[7,1.2,-26,34,6]},{key:"pouch",x:1081,y:62,w:394,m:[9.5,.9,26,34,-3]},{key:"tin",x:1415,y:255,w:452,m:[8.5,1.5,-24,30,4]},{key:"doobie",x:856,y:284,w:354,m:[10,0,18,-32,2]},{key:"jar",x:1564,y:723,w:356,m:[7.5,2.1,-12,-28,-2.5]}]},palette:{bg:"#080608",accent:"#b6ff2e",accentText:"#0a0a0a",glow:"rgba(182,255,46,0.30)"},pageBg:{src:"/portfolio/garcia/ghp-marble-pattern.webp",opacity:.5,filter:"saturate(1.15)",drift:!0,bleed:12,scrim:"radial-gradient(120% 90% at 50% 10%, rgba(8,6,8,0) 30%, rgba(8,6,8,0.85) 100%), linear-gradient(180deg, rgba(8,6,8,0.35) 0%, rgba(8,6,8,0.1) 45%, rgba(8,6,8,0.55) 100%)"},stage:{type:"model",url:"/models/work/garcia-preroll-box.glb",poster:"/portfolio/garcia/ghp-preroll-carton-3d.webp",posterAlt:"Garcia Handpicked 5-pack pre-roll carton, front panel",orient:[0,Math.PI/2,-Math.PI/2],yaw:Math.PI,note:"The 5-pack carton. Turn it over: the back panel is bare stock, by design."},gallery:[{kind:"tile",src:s("garcia","ghp-ca-5-pack-pre-roll-1.webp"),alt:"Garcia Handpicked 5-pack pre-roll tin, angled: marble lid over Jerry portrait",col:4,row:5,caption:"The 5-pack tin: the one angle that breaks formation."},{kind:"tile",src:s("garcia","ghp-ca-flower-jar.webp"),alt:"Garcia Handpicked flower jar with liquid-marble label",col:2,row:5,pad:"std"},{kind:"divider",src:s("garcia","gummy-tin-art.webp"),alt:"Garcia Handpicked liquid-marble rainbow artwork, full bleed"},{kind:"tile",src:s("garcia","ghp-md-flowerbag-28g-front-and-back.webp"),alt:"Garcia Handpicked 28G pouch, front and back: art side and compliance side",col:6,row:4,pad:"roomy",caption:"Front and back: the art carries, the Swiss type complies."},{kind:"tile",src:s("garcia","ghp-flower-1.webp"),alt:"Garcia Handpicked flower jar with strain hang tag",col:3,row:4},{kind:"tile",src:s("garcia","ghp-ca-5-pack-pre-roll-front.webp"),alt:"Garcia Handpicked pre-roll tin face-on: concert-poster front",col:3,row:4,tile:"tint",caption:"Face-on, it reads like a gig poster."},{kind:"tile",src:s("garcia","ghp-ca-double-doobie-2pck-03.webp"),alt:"Garcia Handpicked double doobie tube",col:2,row:5,pad:"roomy",caption:"Double doobie."},{kind:"tile",src:s("garcia","ghp-mi-flowerbag-3-5g-front.webp"),alt:"Garcia Handpicked 3.5G flower pouch",col:2,row:3},{kind:"tile",src:s("garcia","ghp-merch-guitar-pick.webp"),alt:"Garcia Handpicked guitar-pick handprint mark, black and white",col:2,row:2,tile:"bright",caption:"The handprint, reduced to a pick."},{kind:"tile",src:s("garcia","ghp-tourpack-pa-rainbow-7g-hybrid-v2.webp"),alt:"Garcia Handpicked rainbow tour pack, 7G hybrid",col:4,row:3,caption:"The tour pack: the collector piece."},{kind:"tile",src:s("garcia","ghp-merch-hat.webp"),alt:"Garcia Handpicked embroidered hat, studio shot",col:3,row:3,tile:"framed",fit:"contain"},{kind:"tile",src:s("garcia","ghp-hat-design.webp"),alt:"Garcia Handpicked green cap with marble bill",col:3,row:3,caption:"Merch wears the marble too."}],seo:{title:"Garcia Handpicked: Case Study · Zegoe",description:"Garcia Handpicked packaging by Zegoe: Jerry Garcia-licensed psychedelic liquid-marble artwork across flower, edibles, pre-rolls and collector tour packs."},next:"dodrops-case"},{slug:"dodrops-case",href:"/work/dodrops",name:"DO Drops",client:"Holistic Industries",categories:["Brand Identity","Packaging","Edibles","Retail Display","Campaign"],position:"Designed around how you want to feel.",blurb:"DO Drops sells six effects before it sells six flavors. Focus, Sleep, Relax, Relief, Energy and Mild each carry a cannabinoid ratio on the front of the pouch and a color that travels from the pack to the counter display. The system runs on two layers: a flat pouch color a shopper can find from across the room, and a gradient aura field of cloud, glow and diffusion that gives the same color an atmosphere in campaign work. A Maryland Pride edition made with Transgender Law Center took the system into a limited Starfruit run.",deliverables:["Brand identity","Packaging, six-formula gummy line","Aura color system","Effect & ratio nomenclature","Campaign key art","Counter display concepts","Pride limited edition, Starfruit","Brand merchandise"],visualIdentity:"Aura photography is the reference: gradient fields, glow, diffusion and chakra-style color. Each formula owns one hue and wears it twice, as a flat pouch color for shelf recognition and as a cloud field around the pack for campaign work. The wordmark stays white and geometric through all six worlds, the cannabinoid ratio sets in the same place on every front, and the gummy itself does duty as the color marker in navigation and display.",logo:{src:"/brand-logo/dodrops-lockup.png",alt:"DO Drops",scale:1.9},cover:{src:s("dodrops","dodrops-effect-focus-watermelon.webp"),alt:"DO Drops Focus pouch, watermelon, floating in a magenta cloud field with the 1:1:1 CBG:THC:THCV ratio on the front"},palette:{bg:"#0b0714",accent:"#ff0d6c",accentText:"#0a0a0a",glow:"rgba(255,13,108,0.30)"},nextArt:{src:"/portfolio/dodrops/dodrops-aura-banner-notext.webp",opacity:.12,pos:"50% 42%"},stage:{type:"poster",src:s("dodrops","dodrops-spectrum-lineup.webp"),alt:"DO Drops spectrum lineup: all six gummy pouches fanned out in effect order, from Focus magenta through Sleep violet",note:"The spectrum lineup: six effects, six flavors, one family."},gallery:[{kind:"tile",src:s("dodrops","dodrops-system-lineup-board.webp"),alt:"DO Drops lineup board: six pouches under the headings Aura Enhancing Effects, Transcendent Flavors, Balanced Cannabis Ratios",col:4,row:4,rowM:2,tile:"plate",pad:"tight",caption:"Three promises on one board: effect, flavor, ratio."},{kind:"tile",src:s("dodrops","dodrops-lifestyle-coffee-gummy.webp"),alt:"A woman holding a glass mug of coffee at a laptop, a DO Drops gummy in her other hand",col:2,row:4,rowM:2,fit:"cover",caption:"Focus, taken with the morning coffee."},{kind:"tile",src:s("dodrops","dodrops-focus-watermelon-pouch.webp"),alt:"DO Drops Focus pouch, watermelon, in a magenta cloud field",col:3,row:7,pad:"tight",caption:"Focus: watermelon, 1:1:1 CBG:THC:THCV."},{kind:"tile",src:s("dodrops","dodrops-relax-peach-pouch.webp"),alt:"DO Drops Relax pouch, peach, in an orange cloud field",col:3,row:7,pad:"tight",caption:"Relax: peach, 1:1 CBD:THC."},{kind:"tile",src:s("dodrops","dodrops-effect-sleep-slumberberry.webp"),alt:"DO Drops Sleep pouch, slumberberry, in a violet cloud field",col:2,row:5,rowM:3,pad:"tight"},{kind:"tile",src:s("dodrops","dodrops-effect-energy-lemon-citrus.webp"),alt:"DO Drops Energy pouch, lemon citrus, in a lime cloud field",col:2,row:5,rowM:3,pad:"tight"},{kind:"tile",src:s("dodrops","dodrops-effect-relief-pineapple-ginger.webp"),alt:"DO Drops Relief pouch, pineapple ginger, in a golden cloud field",col:2,row:5,rowM:3,pad:"tight",caption:"Relief runs the warmest field in the set."},{kind:"tile",src:s("dodrops","dodrops-effect-mild-melon.webp"),alt:"DO Drops Mild pouch, melon, in a green cloud field",col:2,row:5,rowM:3,pad:"tight"},{kind:"tile",src:s("dodrops","dodrops-focus-detail-gummy.webp"),alt:"A hand holding a sugared DO Drops gummy over the magenta Focus pouch",col:4,row:5,rowM:3,fit:"cover",caption:"The gummy doubles as the color marker, so it gets the close-up."},{kind:"divider",src:s("dodrops","dodrops-tarot-melon-lifestyle.webp"),alt:"Hands holding tarot cards beside the DO Drops Mild melon pouch on a wooden table"},{kind:"tile",src:s("dodrops","dodrops-system-aura-navigation.webp"),alt:"DO Drops aura navigation board: effect dots, flavor and ratio table, and the six pouch colors as shelf markers",col:4,row:4,rowM:2,tile:"plate",pad:"tight",caption:"Mood first, flavor second: how the shelf is meant to be read."},{kind:"tile",src:s("dodrops","dodrops-effect-pride-starfruit.webp"),alt:"Two white DO Drops Pride starfruit pouches on a rainbow ground, marked as supporting Transgender Law Center",col:2,row:4,rowM:2,pad:"tight"}],seo:{title:"DO Drops: Case Study · Zegoe",description:"DO Drops brand identity and packaging by Zegoe for Holistic Industries: an effect-led gummy line where six formulas each carry a cannabinoid ratio, a flavor and an aura color world, from pouch to counter display to a Pride edition with Transgender Law Center."},next:"strane-case"},{slug:"strane-case",href:"/work/strane",name:"Strane",client:"Holistic Industries",categories:["Branding","Disposable Vapes","Cartridges","Flower"],position:"Cannabis vapes with a punk streak: street-art grit meets clean device renders.",blurb:"Strane runs a distinctly punk visual system: distressed brick textures, paint splatters and retro collage against a hard acid-yellow-and-black palette, differentiating across strains while premium 3D device renders keep it product-forward.",deliverables:["Strain-specific cartridge labels","Ripstick device mockups, pod & bottle forms","Logo & angular wordmark","Brick, splatter & graffiti texture library","Type variants","Retail display design"],visualIdentity:"Acid yellow on black. Distressed brick walls, paint splatter and collage set the street-art register; a bold angular wordmark and curated black-and-white product photography keep the devices premium and product-forward.",logo:{src:"/brand-logo/strane.png",alt:"Strane"},cover:{src:"/portfolio/strane/strane-brand-cover.webp",alt:"Strane brand cover: torn street photography of the sling bag and Silver Kush pouch, taped over an acid-yellow brick wall under the hand-drawn wordmark"},heroArt:{src:"/portfolio/strane/strane-hero-art.webp",alt:"Strane hero collage: the yellow-to-black device beside the Alien Mints cartridge pouch and Landfill Haze brick-wall pouch, with torn eye stickers, a scrawled star and the taped wordmark",canvas:[1920,1080],layers:[{key:"shadow",x:737,y:750,w:521,m:[11,0,10,0,0]},{key:"pouch-brick",x:1017,y:34,w:419,m:[9,1.2,22,34,-3.5]},{key:"scribble",x:1222,y:471,w:141,m:[5.5,.5,-28,-32,8]},{key:"stars-yellow",x:1475,y:147,w:97,m:[5,1.8,22,-32,9]},{key:"pouch-alien",x:784,y:310,w:636,m:[8.5,.8,-24,40,3]},{key:"device",x:1002,y:206,w:918,m:[10.5,0,8,-34,.6]},{key:"splat",x:686,y:537,w:129,m:[6.5,2.1,-20,26,-7]},{key:"wordmark",x:1077,y:896,w:342,m:[8,1.4,-18,-26,2.5]},{key:"wing",x:1668,y:20,w:241,m:[6,1.6,-12,30,-2.5]},{key:"eye-bottom",x:648,y:811,w:312,m:[7,.9,26,-32,5]},{key:"eye-top",x:648,y:135,w:266,m:[6.5,.3,-24,34,-5.5]}]},palette:{bg:"#0b0b06",accent:"#e5ff00",accentText:"#0a0a0a",glow:"rgba(229,255,0,0.30)"},pageBg:{src:"/portfolio/strane/strane_brick_bg_yellow.webp",tile:"760px",opacity:.12,filter:"grayscale(1) brightness(0.75) contrast(1.2)",drift:!1,bleed:10,scrim:"linear-gradient(180deg, rgba(11,11,6,0.55) 0%, rgba(11,11,6,0.28) 40%, rgba(11,11,6,0.5) 100%)"},stage:{type:"model",url:"/models/work/strane.glb",poster:s("strane","strane-ma-ripstick-1g-generic.webp"),posterAlt:"Strane Ripstick 1G disposable device render",yaw:2.4,note:"Ripstick 1G, the disposable that fronts the line."},gallery:[{kind:"tile",src:s("strane","strane-shelf-side-2.webp"),alt:"Strane shelf display side view with stocked pouches",col:3,row:4},{kind:"tile",src:s("strane","strane-mi-flower-28g-front.webp"),alt:"Strane 28g blackout mylar bag",col:3,row:4,pad:"roomy",caption:"28g blackout mylar."},{kind:"tile",src:s("strane","strane-flower-3-5g-mockup-indica-silver.webp"),alt:"Strane 3.5g flower mockup: indica, silver foil",col:2,row:3},{kind:"tile",src:s("strane","strane-ma-flower-8th-mockup.webp"),alt:"Strane Reserve eighth: the cyan colour-break in the system",col:4,row:3,tile:"tint",caption:"Reserve tier: cyan cuts the acid yellow."},{kind:"tile",src:s("strane","strane-display-4.webp"),alt:"Tall Strane counter display",col:2,row:5,pad:"std"},{kind:"tile",src:s("strane","strane-md-flower-7g-pouch.webp"),alt:"Strane 7g flower pouch, Maryland market",col:2,row:3},{kind:"tile",src:s("strane","strane-mi-flower-3-5g-front.webp"),alt:"Strane 3.5g flower front, Michigan market",col:2,row:3},{kind:"tile",src:s("strane","strane-7g-flower-ma-pa.webp"),alt:"Strane 7g flower pouches for MA and PA markets",col:4,row:3},{kind:"tile",src:s("strane","strane-ma-ripstick-1g-generic.webp"),alt:"Strane Ripstick 1G: generic device",col:3,row:4,pad:"roomy"},{kind:"tile",src:s("strane","strane-ma-ripstick-1g-grape-gg.webp"),alt:"Strane Ripstick 1G: Grape GG strain",col:3,row:4,pad:"roomy",caption:"Ripstick, generic and strain-dressed."}],seo:{title:"Strane: Case Study · Zegoe",description:"Strane brand system by Zegoe: punk street-art identity for cannabis vapes: acid yellow on black, distressed brick, paint splatter and premium 3D device renders."},next:"hellavated-case"},{slug:"hellavated-case",href:"/work/hellavated",name:"Hellavated",client:"Holistic Industries",categories:["Packaging","Edibles","Devices","Beverages"],position:"Gen-Z edibles branding, volume all the way up.",blurb:"Hellavated pairs fruit-illustration-heavy hero panels with a black technical compliance side, a two-tone system spanning 18+ gummy flavors and the CloudBar device line, balancing playful energy with dispensary-legible rigor.",deliverables:["1-pack gummy bags, 18+ flavors","Variety packs","CloudBar device packaging","Baja beverage & concentrate line","Wholesale bags","Compliance label systems","Retail mockups","Brand specs"],visualIdentity:"Bold and youth-forward: a fruit-illustration hero side against a black technical compliance side. The wordmark carries a cannabis-leaf icon; all-caps sans taglines keep it loud but dispensary-legible.",logo:{src:"/brand-logo/hellavated.png",alt:"Hellavated"},storyMark:{src:s("hellavated","hellavated-logo-07.webp"),alt:"Hellavated drip-cloud logo mark"},cover:{src:"/portfolio/hellavated/hellavated-brand-cover.webp",alt:"Hellavated brand cover: a model holding a CloudBar against a deep-space field, ringed by fruit and splashes of juice, under the cloud wordmark"},palette:{bg:"#070707",accent:"#ff4fd8",accentText:"#0a0a0a",glow:"rgba(255,120,220,0.35)"},pageBg:{src:s("hellavated","hellavated-live-resin-device-revised-06-06.webp"),opacity:.34,filter:"saturate(1.15) brightness(0.72)",pos:"50% 35%",drift:!0,bleed:16,scrim:"linear-gradient(180deg, rgba(7,7,7,0.86) 0%, rgba(7,7,7,0.62) 30%, rgba(7,7,7,0.66) 70%, rgba(7,7,7,0.9) 100%)"},stage:{type:"model",url:"/models/work/hellavated.glb",poster:s("hellavated","hellavated-galaxy-device-mockup.webp"),posterAlt:"Hellavated galaxy CloudBar device pair",note:"The galaxy CloudBar. Spin the real thing."},gallery:[{kind:"tile",src:s("hellavated","hellavated-keyart-strawberry-haze.webp"),alt:"Hellavated Strawberry Haze flavor key art: watercolor strawberries",col:6,row:6,rowM:2,fit:"cover",caption:"Flavor key art: the watercolor register."},{kind:"tile",src:s("hellavated","hellavated-keyart-og-mint.webp"),alt:"Hellavated OG Mint flavor key art: watercolor mint",col:3,row:3,fit:"cover"},{kind:"tile",src:s("hellavated","hellavated-keyart-blackberry-dream.webp"),alt:"Hellavated Blackberry Dream flavor key art: watercolor blackberries",col:3,row:3,fit:"cover"},{kind:"tile",src:s("hellavated","hellavated-poster-tropicz.webp"),alt:"Hellavated retail poster: “Take a Trip to the Tropicz”",col:3,row:3,fit:"cover",caption:"Retail poster: Tropicz."},{kind:"tile",src:s("hellavated","hellavated-poster-sooner.webp"),alt:"Hellavated retail poster: “Get Hellavated Sooner”",col:3,row:3,fit:"cover"},{kind:"divider",src:s("hellavated","hellavated-doodle-pattern.webp"),alt:"Hellavated skull-and-cloud doodle pattern, full bleed"},{kind:"tile",src:s("hellavated","hellavated-cloud-bar-generic.webp"),alt:"Hellavated CloudBar generic device",col:2,row:4},{kind:"tile",src:s("hellavated","hellavated-live-resin-device-v2-graphic-side-mk-03.webp"),alt:"Hellavated Live Resin device, graphic side, v2",col:3,row:3},{kind:"tile",src:s("hellavated","hellavated-ma-hellymelts-badassle.webp"),alt:"Hellavated HellyMelts Badassle pouch: acid green",col:3,row:3,tile:"tint",caption:"Badassle: the acid-green break in the flavor set."},{kind:"tile",src:s("hellavated","hellavated-ma-hellymelts-junglejuice.webp"),alt:"Hellavated HellyMelts Jungle Juice pouch",col:2,row:3},{kind:"tile",src:s("hellavated","hellavated-live-resin-device-v1-graphic-side-mk-02.webp"),alt:"Hellavated Live Resin device, graphic side, v1",col:2,row:3},{kind:"tile",src:s("hellavated","hellavated-hellymeltz-generic-ma.webp"),alt:"Hellavated HellyMeltz generic pouch",col:2,row:3},{kind:"tile",src:s("hellavated","hellavated-live-resin-device-v1-graphic-side-mk-03-new.webp"),alt:"Hellavated Live Resin device, graphic side, mk 03",col:2,row:3},{kind:"tile",src:s("hellavated","hellavated-ma-hellymelts-blueberryyumyum.webp"),alt:"Hellavated HellyMelts Blueberry Yum Yum pouch",col:2,row:3},{kind:"tile",src:s("hellavated","hellavated-md-juicy-stickz-razberry-blitz-mockup.webp"),alt:"Hellavated Juicy Stickz pre-roll tube: Razberry Blitz",col:3,row:5,pad:"roomy",caption:"Juicy Stickz: the tall one."}],seo:{title:"Hellavated: Case Study · Zegoe",description:"Hellavated packaging ecosystem by Zegoe: a two-tone fruit-hero / black-compliance system across 18+ gummy flavors and CloudBar devices."},next:"avitas-case"},{slug:"avitas-case",href:"/work/avitas",name:"AVITAS",client:"Holistic Industries",categories:["Branding","Vape Cartridges","Gummies"],position:"Illustrated landscapes carry the identity, one scene per tier.",blurb:"AVITAS is a full identity system where each product tier owns an illustrated landscape (mountains, ocean, botanicals) in a turquoise-to-navy palette with gold accents, anchored by a distinctive geometric “A” mark for clean, premium shelf presence across Live Resin and Ultra lines.",deliverables:["Cartridge & edible label system","High-res product renders","Logo mark system","Brand graphics & illustration","Pre-roll & AIO packaging"],visualIdentity:"Turquoise into deep navy, with gold accents. Each tier owns an illustrated landscape, whether mountains, ocean or botanicals, set in a clean sans-serif with a playful script for line names. The geometric “A” mark holds the whole system together.",logo:{src:"/brand-logo/avitas-trim.png",alt:"AVITAS",scale:1.7},cover:{src:"/portfolio/avitas/avitas-brand-cover.webp",alt:"AVITAS brand cover: three Live Resin cartridge packs (sativa, indica, hybrid) standing on weathered driftwood under the mountain logo"},heroArt:{src:"/portfolio/avitas/avitas-hero-art.webp",alt:"AVITAS hero collage: the Kimbo Kush vape pouch on its wood-grain print, a Live Resin all-in-one carton, an Ultra sativa carton and the mint all-in-one device",canvas:[1920,1080],layers:[{key:"pouch",x:1071,y:23,w:528,m:[10,0,22,32,-2.5]},{key:"carton-lr",x:788,y:438,w:317,m:[8.5,1.1,-24,-34,4]},{key:"carton-ul",x:1608,y:116,w:295,m:[9,.5,-26,30,-3]},{key:"device",x:1530,y:712,w:252,m:[6.5,1.7,20,-30,6]}]},palette:{bg:"#04141c",accent:"#e8c87a",accentText:"#0a0a0a",glow:"rgba(64,200,210,0.30)"},pageBg:{src:"/portfolio/avitas/avitas-wood-pattern.webp",opacity:.16,filter:"brightness(0.8)",drift:!0,bleed:12,scrim:"linear-gradient(180deg, rgba(4,20,28,0.8) 0%, rgba(4,20,28,0.3) 55%, rgba(4,20,28,0.9) 100%)"},stage:{type:"model",url:"/models/work/avitas.glb",poster:s("avitas","avitas-live-resin-aio-agnostic.webp"),posterAlt:"AVITAS Live Resin all-in-one device render",note:"The Live Resin all-in-one: landscape wrapped around the device."},mapShowcase:{eyebrow:"The Map",note:"Wayfinding for avitasgrown.com",lede:"AVITAS wanted a site you navigate the way you read a trail map. Zegoe drew Oregon as one illustration, made every pin, signpost and board a component with its own hover state, and wrote the motion into the handoff. A separate vendor built it in WordPress.",parallax:{canvas:[1920,1080],layers:[{key:"sky",src:"/portfolio/avitas/map/avitas-map-parallax-sky.webp",x:0,y:101,w:1920,intro:[50,-69.1],scrollTo:10,dur:.8,delay:.5,scrub:.5},{key:"sun",src:"/portfolio/avitas/map/avitas-map-parallax-sun.webp",x:1332,y:173,w:140,intro:[100,0],scrollTo:50,dur:.5,delay:1,scrub:0},{key:"mountain",src:"/portfolio/avitas/map/avitas-map-parallax-mountain.webp",x:0,y:661,w:1920,intro:[0,-60.5],scrollTo:0,dur:.8,delay:.5,scrub:.5},{key:"land",src:"/portfolio/avitas/map/avitas-map-parallax-land.webp",x:-36,y:-6,w:1992,intro:[50,0],dur:.8,delay:.5}],caption:"The four hero layers from Figma, running the intro and scroll values the built site uses. Scroll the page to drive it."},map:{src:"/portfolio/avitas/map/avitas-map-full.webp",alt:"The AVITAS wayfinding map: an illustrated Oregon with a coastline, mountains, forest, a campsite and a farm, marked with Products, Events, Budtender and Blazing Trails pins beside a wooden Points of Interest board",canvas:[2400,1250],pins:[{key:"products",label:"Products",x:1070,y:450,w:172,h:103,hover:"/portfolio/avitas/map/avitas-map-pin-products-hover.webp",note:"Opens the product range. The backpack above it was asked for by name."},{key:"events",label:"Events",x:1847,y:648,w:159,h:106,hover:"/portfolio/avitas/map/avitas-map-pin-events-hover.webp",note:"Opens the events calendar. The two balloons beside it drift on move-circle."},{key:"budtender",label:"Budtender",x:1093,y:878,w:221,h:102,hover:"/portfolio/avitas/map/avitas-map-pin-budtender-hover.webp",note:"Drawn for a budtender portal, renamed from Basecamp, and never built.",unbuilt:!0},{key:"blazing-trails",label:"Blazing Trails",x:2103,y:214,w:241,h:104,hover:"/portfolio/avitas/map/avitas-map-pin-blazing-trails-hover.webp",note:"Opens the about page, named for the line the hero carries: Blazing Trails Since 2014."}],caption:"The AVITAS MAP frame as delivered, with all four pins. The turquoise state is each pin’s own hover variant from Figma.",shipped:"Four pins were designed and three of them are live on avitasgrown.com: Products, Events and Blazing Trails. Budtender was drawn as a complete component set with both states and listed on the Points of Interest board. The built site carries Budtender as a header link to a login page.",idle:"Hover or focus a pin to see the state Zegoe drew for it."},direction:[{quote:"the only mountain/landmarks we want to show are the ones from the packaging. remove extra mountains. Have AVITAS packaging renderings pop on to the map.",author:"Anna Spelleri",date:"20 Nov 2024",outcome:"The three signposts on the delivered map name Mt. Hood, Haystack and Three Sisters."},{quote:"replace all other website landmarks with icons that represent the category, ie base camp = a camp",author:"Anna Spelleri",date:"20 Nov 2024",outcome:"The Budtender pin stands over a camp, with tents and a fire."},{quote:'Chi - update to "basecamp" to "budtender"',author:"Anna Spelleri",date:"20 Nov 2024",outcome:"Basecamp became Budtender on the pin and on the Points of Interest board."},{quote:"add an animated fire with our little dude sitting and roasting a marshmallow",author:"Jamie Gouger",date:"4 Dec 2024",outcome:"He sits by the fire beside the Budtender camp."},{quote:'move "products" down a bit and add a backpack icon to represent the products section.',author:"Jamie Gouger",date:"4 Dec 2024",outcome:"The Products pin moved down the coast range and picked up a backpack."},{quote:"remove whales",author:"Jamie Gouger",date:"4 Dec 2024",outcome:"The delivered map has open water and no whales."}],directionNote:"Direction arrived as comments on the Figma frames through November and December 2024. The quotes are as written.",handoff:[{note:"PLEASE DO PARALLAX SCROLL FOR HERO SECTION",detail:"A text layer on the canvas, beside the home page frame."},{note:"NO HOVER STATE ONLY POP-UP on CLICK",detail:"A text layer between the store locator and cultivar frames. It replaced an earlier note that asked for a hover state."}]},gallery:[{kind:"tile",src:s("avitas","avitas-live-resin-hybrid-mockup.webp"),alt:"AVITAS Live Resin hybrid pack with amber cartridge",col:4,row:4,tile:"plate",caption:"Live Resin: pack and amber cartridge."},{kind:"tile",src:s("avitas","avitas-live-resin-aio-agnostic-front-hybrid-strain.webp"),alt:"AVITAS Live Resin AIO front, hybrid strain",col:2,row:4,tile:"plate"},{kind:"tile",src:s("avitas","avitas-live-resin-vapebox-2024.webp"),alt:"AVITAS Live Resin vape box: mountain landscape tier",col:3,row:3},{kind:"tile",src:s("avitas","avitas-ultra-vapebox-2024.webp"),alt:"AVITAS Ultra vape box: ocean landscape tier",col:3,row:3,caption:"Live Resin and Ultra: each tier owns a landscape."},{kind:"tile",src:s("avitas","avitas-pre-roll-10pck-base-template.webp"),alt:"AVITAS pre-roll 10-pack base template",col:2,row:3,tile:"plate"},{kind:"tile",src:s("avitas","avitas-pre-roll-10pck-mockup.webp"),alt:"AVITAS pre-roll 10-pack mockup",col:2,row:3,tile:"plate"},{kind:"tile",src:s("avitas","avitas-wa-1g-aio-template.webp"),alt:"AVITAS Washington 1g AIO template",col:2,row:3,tile:"plate"},{kind:"tile",src:s("avitas","avitas-live-resin-aio-agnostic.webp"),alt:"AVITAS Live Resin AIO device",col:2,row:3},{kind:"tile",src:s("avitas","avitas-prerolls-10pack.webp"),alt:"AVITAS pre-rolls 10-pack render",col:2,row:3},{kind:"tile",src:s("avitas","avitas-live-resin-cartridge-front.webp"),alt:"AVITAS Live Resin Kimbo Kush pack with cartridge window",col:6,row:4,pad:"roomy",caption:"Kimbo Kush: strain-dressed, single origin."}],seo:{title:"AVITAS: Case Study · Zegoe",description:"AVITAS identity system by Zegoe: illustrated landscape tiers in turquoise-to-navy with gold, a geometric “A” mark, and premium packaging across Live Resin and Ultra lines."},next:"lootbar-case"},{slug:"lootbar-case",href:"/work/lootbar",name:"Lootbar",client:"LightHouse",categories:["Packaging","Disposable Vapes","Key Art","Flavor System"],position:"A vaporwave disposable-vape brand that turns every flavor into a loot drop.",blurb:"Lootbar literalizes its name: every flavor is staged as an open treasure chest, fruit spilling out and the device floating beside it as the prize, inside one neon HUD frame that recolors across 11 flavor key-arts. Deep-navy grounds, chrome flavor lettering, pixel hearts and arcade checkerboards keep the Y2K gaming nostalgia consistent from Peachy Ringz to Marion Berry Pie.",deliverables:["Packaging design, stand-up pouches","Flavor key-art system, 11 variants","Device mockups","Campaign key visual","3D flavor lettering","Promo materials"],visualIdentity:"Near-black grounds under neon cyan, magenta and acid yellow: vaporwave meets arcade. One constant armature (wordmark, HUD bracket frame, treasure chest, floating device, checkerboard floor) recolors per flavor; only the chrome flavor lettering changes character. Cyan holds the system together; the fruit brings the saturation.",logo:{src:"/brand-logo/loot-bar.png",alt:"Lootbar"},cover:{src:s("lootbar","lootbar-blueberry-dream.webp"),alt:"Lootbar Blueberry Dream key art: a blueberry-filled treasure chest and the device inside the cyan neon HUD frame, chrome flavor lettering below",mat:!0},heroArt:{src:"/portfolio/lootbar/lootbar-hero-art.webp",alt:"Lootbar hero collage: the device with Yuzu Sherbet and Marion Berry Pie pouches on a cyan paint splash, peaches, blackberries and a pixel heart floating around it",canvas:[1920,1080],layers:[{key:"shadow",x:737,y:750,w:521,m:[11,0,10,0,0]},{key:"pie",x:1618,y:608,w:302,m:[9,1.9,6,-36,1.6]},{key:"sparks-sm",x:333,y:17,w:1499,twinkle:[7,0]},{key:"lemon",x:1654,y:836,w:183,m:[8,.3,-30,-34,-5]},{key:"pouch-yuzu",x:1149,y:82,w:280,m:[9.5,1.6,30,40,-4]},{key:"pouch-marion",x:877,y:327,w:429,m:[8.5,.8,-26,44,3.5]},{key:"glow",x:1041,y:0,w:879,blend:"screen"},{key:"device",x:1002,y:239,w:901,m:[10.5,0,-14,-38,.8]},{key:"sparks-lg",x:54,y:59,w:1786,twinkle:[9,1.5]},{key:"heart",x:1651,y:71,w:168,m:[5.5,.2,-24,-40,6]},{key:"peach-slice",x:823,y:816,w:181,m:[7,1.1,26,-34,5.5]},{key:"berry-right",x:1738,y:337,w:157,m:[6.5,1.4,-30,-32,-6]},{key:"berry-left",x:906,y:224,w:157,m:[6,.6,-32,38,6.5]},{key:"peaches",x:1115,y:790,w:312,m:[7.5,.4,-20,-30,-2.6]}]},palette:{bg:"#02040e",accent:"#00e0f0",accentText:"#0a0a0a",glow:"rgba(0,224,240,0.30)"},pageBg:{src:"/portfolio/lootbar/lootbar-bg.webp",opacity:.26,filter:"saturate(1.25) brightness(0.72)",pos:"50% 50%",drift:!0,bleed:12,scrim:"linear-gradient(180deg, rgba(2,4,14,0.9) 0%, rgba(2,4,14,0.7) 42%, rgba(2,4,14,0.66) 68%, rgba(2,4,14,0.92) 100%)"},stage:{type:"poster",src:s("lootbar","lootbar-website-hero.webp"),alt:"Lootbar campaign key visual: Peachy Ringz, Marion Berry Pie and Yuzu Sherbet pouches with the device, under “Bomb Flavors + Max Potency”",note:"The campaign key visual: three flavors staged, device as the prize."},gallery:[{kind:"tile",src:s("lootbar","lootbar-marion-berry-pie.webp"),alt:"Lootbar Marion Berry Pie key art: magenta HUD frame, blackberry-filled chest, chrome lettering",col:4,row:8,rowM:5,pad:"tight",caption:"The purest vaporwave frame in the set."},{kind:"tile",src:s("lootbar","lootbar-strawberry-lemonaid.webp"),alt:"Lootbar Strawberry Lemonaid key art: pink HUD frame, strawberries and lemon",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:s("lootbar","lootbar-lime-sorbet.webp"),alt:"Lootbar Lime Sorbet key art: acid-green HUD frame and limes",col:2,row:4,pad:"tight",caption:"Acid green: the palette break."},{kind:"divider",src:s("lootbar","lootbar-blueberry-dream.webp"),alt:"Lootbar Blueberry Dream key art: the cyan core-brand HUD frame, full bleed"},{kind:"tile",src:s("lootbar","lootbar-hawaiian-shaved-ice.webp"),alt:"Lootbar Hawaiian Shaved Ice key art: hibiscus, pineapple and shaved ice",col:3,row:6,pad:"tight",caption:"The one that breaks the two-color rule."},{kind:"tile",src:s("lootbar","lootbar-peachy-ringz.webp"),alt:"Lootbar Peachy Ringz key art: peaches, pixel hearts and Y2K chrome lettering",col:3,row:6,pad:"tight",caption:"Y2K, fully literal, pixel hearts included."},{kind:"tile",src:s("lootbar","lootbar-bomb-blaster.webp"),alt:"Lootbar Bomb Blaster key art: mixed berries and a lit cartoon bomb",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:s("lootbar","lootbar-ruby-red.webp"),alt:"Lootbar Ruby Red key art: blood orange and grapefruit under a red HUD frame",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:s("lootbar","lootbar-mango-mana.webp"),alt:"Lootbar Mango Mana key art: mango and yellow HUD frame",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:s("lootbar","lootbar-tiger-blood.webp"),alt:"Lootbar Tiger Blood key art: pineapple, cherry and coconut with clawed lettering",col:3,row:6,pad:"tight",caption:"Same armature, new character: the type does the shapeshifting."},{kind:"tile",src:s("lootbar","lootbar-yuzu-sherbet.webp"),alt:"Lootbar Yuzu Sherbet key art: yuzu citrus under a yellow HUD frame",col:3,row:6,pad:"tight"}],seo:{title:"Lootbar: Case Study · Zegoe",description:"Lootbar packaging and flavor key-art by Zegoe for LightHouse: a vaporwave loot-drop system of treasure chests, neon HUD frames and Y2K chrome lettering across 11 disposable-vape flavors."},next:"garcia-case"}],K=t=>Y.find(i=>i.slug===t),le=t=>{const i=t.href??`/work/${t.slug}`;return i.endsWith("/")?i:`${i}/`},_=t=>{const i=Y.findIndex(m=>m.slug===t);if(i<0)return null;const h=Y.length;return{prev:i>0?Y[i-1]:null,next:i<h-1?Y[i+1]:null,position:i+1,total:h}},at=t=>{const i=Y.findIndex(h=>h.slug===t);return i<0?"00":String(i+1).padStart(2,"0")},ze=t=>t.button===0&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&!t.altKey;function rt(t){const i=t.pageBg;return{"--cs-bg":t.palette.bg,"--cs-accent":t.palette.accent,"--cs-accent-text":t.palette.accentText,"--cs-glow":t.palette.glow,...i?{"--cs-bg-src":`url("${i.src}")`,"--cs-bg-op":String(i.opacity),"--cs-bg-filter":i.filter??"none","--cs-bg-size":i.tile??"cover","--cs-bg-repeat":i.tile?"repeat":"no-repeat","--cs-bg-pos":i.pos??"50% 50%","--cs-bg-scrim":i.scrim,"--cs-bg-bleed":String(i.bleed??14)}:{}}}function ne({slug:t,piece:i,onNext:h}){if(i==="topbar")return e.jsx("div",{className:"cs-topbar","aria-hidden":"true"});if(i==="nav")return e.jsxs("nav",{className:"cs-nav","aria-label":"Case study",children:[e.jsx("a",{href:"/",className:"cs-nav-logo",children:e.jsx("img",{src:"/Wordmark_White.png",alt:"Zegoe"})}),e.jsxs("a",{href:"/#work",className:"cs-nav-back",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M19 12H5M5 12l6-6M5 12l6 6"})}),e.jsx("span",{children:"All Work"})]})]});const m=K(t),v=_(t);return!m||!v?null:e.jsx("div",{className:"cs-pagerpin",children:e.jsxs("nav",{className:"cs-pagerbar","aria-label":"Case studies",children:[v.prev&&e.jsxs("a",{href:le(v.prev),className:"cs-pagerbar-link","data-dir":"prev",onClick:h&&!v.prev.href?o=>{ze(o)&&(o.preventDefault(),h(v.prev.slug))}:void 0,children:[e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M19 12H5M5 12l6-6M5 12l6 6"})}),e.jsxs("span",{children:[e.jsx("i",{children:"Previous"}),e.jsx("b",{children:v.prev.name})]})]}),e.jsxs("span",{className:"cs-pagerbar-here",children:[e.jsxs("span",{className:"cs-pagerbar-count","aria-hidden":"true",children:[e.jsx("b",{children:String(v.position).padStart(2,"0")}),e.jsx("i",{children:"/"}),String(v.total).padStart(2,"0")]}),e.jsx("em",{children:m.name})]}),v.next&&e.jsxs("a",{href:le(v.next),className:"cs-pagerbar-link cs-pagerbar-next","data-dir":"next",onClick:h&&!v.next.href?o=>{ze(o)&&(o.preventDefault(),h(v.next.slug))}:void 0,children:[e.jsxs("span",{children:[e.jsx("i",{children:"Next"}),e.jsx("b",{children:v.next.name})]}),e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M5 12h14M19 12l-6-6M19 12l-6 6"})})]})]})})}function ot({slug:t,lazyArt:i=!1}){const h=i?{loading:"lazy",decoding:"async"}:{},m=K(t);if(!m)return null;const v=_(t),o=m.client?tt[m.client]:void 0;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cs-hero-inner",children:[e.jsxs("p",{className:"cs-hero-eyebrow",children:["Case Study",v&&e.jsxs("span",{className:"cs-hero-count",children:[e.jsx("b",{children:String(v.position).padStart(2,"0")}),e.jsx("i",{children:"/"}),String(v.total).padStart(2,"0")]})]}),e.jsx("h1",{className:`cs-hero-name${m.logo?" cs-hero-name-logo":""}`,style:m.logo?.scale?{"--cs-logo-scale":m.logo.scale}:void 0,children:m.logo?e.jsx("img",{src:m.logo.src,alt:m.logo.alt,draggable:!1,...h}):m.name}),e.jsx("p",{className:"cs-hero-pos",children:m.position}),e.jsx("div",{className:"cs-hero-chips",children:m.categories.map(y=>e.jsx("span",{className:"cs-chip",children:y},y))}),m.client&&e.jsxs("p",{className:"cs-hero-client",children:[e.jsx("span",{className:"cs-hero-client-label",children:"Client"}),o?e.jsx("img",{className:"cs-hero-clientlogo",src:o.src,alt:o.alt,draggable:!1,...h}):e.jsx("span",{className:"cs-hero-client-name",children:m.client})]})]}),e.jsx("div",{className:"cs-hero-scroll","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M12 19l-6-6M12 19l6-6"})})})]})}const st=t=>t.button===0&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&!t.altKey,Ee=.32,nt=.1;function it({slug:t,onNext:i,onClose:h}){const m=b.useRef(null),v=b.useRef(null);b.useEffect(()=>{const l=m.current,f=v.current;if(!l||!f||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let d=null,p=l.parentElement;for(;p&&p!==document.body&&p!==document.documentElement;){if(p.classList.contains("cso-scroll")){d=p;break}const a=getComputedStyle(p).overflowY;if((a==="auto"||a==="scroll")&&p.scrollHeight>p.clientHeight){d=p;break}p=p.parentElement}let n=0;const r=()=>{n=0;const a=f.parentElement;if(!a)return;const g=f.offsetHeight-a.clientHeight;if(g<=0){f.style.transform="translate3d(0, 0, 0)";return}const k=d??document.scrollingElement??document.documentElement,w=k.scrollHeight-k.clientHeight,c=w>0?Math.min(1,Math.max(0,k.scrollTop/w)):0;f.style.transform=`translate3d(0, ${(-c*g).toFixed(2)}px, 0)`},u=()=>{n||(n=requestAnimationFrame(r))},x=d??window;return x.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u,{passive:!0}),r(),()=>{n&&cancelAnimationFrame(n),x.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[t]),b.useEffect(()=>{const l=m.current;if(!l||i||h||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const f=c=>{if(c.defaultPrevented||c.button!==0||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey)return;const j=c.target?.closest?.("a[href]");if(!j||j.target==="_blank"||j.hasAttribute("download"))return;const M=new URL(j.href,location.href);if(M.origin!==location.origin||M.pathname===location.pathname&&M.hash)return;c.preventDefault();const E=j.dataset.dir;d(j.href,E)};function d(c,j){try{sessionStorage.setItem("zg-nav",j??"1")}catch{}l.classList.add(j?`cs-leaving-${j}`:"cs-leaving"),window.setTimeout(()=>{location.href=c},260)}const p=_(t);let n=0,r=0,u=0,x=!1;const a=32,g=c=>{if(x=!1,!p||c.touches.length!==1)return;const j=c.touches[0];j.clientX<a||j.clientX>window.innerWidth-a||c.target?.closest?.(".cs-stage, [data-no-swipe]")||(x=!0,n=j.clientX,r=j.clientY,u=c.timeStamp)},k=c=>{if(!x||!p)return;x=!1;const j=c.changedTouches[0];if(!j)return;const M=j.clientX-n,E=j.clientY-r;if(c.timeStamp-u>700||Math.abs(M)<64||Math.abs(M)<Math.abs(E)*1.6)return;const z=M<0,N=z?p.next:p.prev;N&&d(`/work/${N.slug}/`,z?"next":"prev")},w=()=>{x=!1};return l.addEventListener("click",f),l.addEventListener("touchstart",g,{passive:!0}),l.addEventListener("touchend",k,{passive:!0}),l.addEventListener("touchcancel",w,{passive:!0}),()=>{l.removeEventListener("click",f),l.removeEventListener("touchstart",g),l.removeEventListener("touchend",k),l.removeEventListener("touchcancel",w)}},[i,h,t]);const o=K(t);if(!o)return null;const y=K(o.next),L=!!(i||h),S=o.pageBg,A=y.nextArt??y.pageBg;return e.jsxs("div",{ref:m,className:"cs-page",style:rt(o),children:[S&&e.jsx("div",{className:"cs-bgpin","aria-hidden":"true",children:e.jsxs("div",{className:"cs-bglayer",children:[e.jsx("div",{className:"cs-bgart",ref:v,children:e.jsx("div",{className:`cs-bgart-img${S.drift?" cs-bgart-drift":""}`})}),e.jsx("div",{className:"cs-bgscrim"})]})}),!L&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{slug:t,piece:"topbar"}),e.jsx(ne,{slug:t,piece:"nav"})]}),e.jsxs("main",{children:[e.jsxs("header",{className:`cs-hero${o.heroArt?" cs-hero-arted":o.cover?" cs-hero-plated":""}`,children:[o.heroArt?.layers&&o.heroArt.canvas?e.jsx("div",{className:"cs-hero-art cs-hero-art-live",children:e.jsx("div",{className:"cs-hero-stage",role:"img","aria-label":o.heroArt.alt,style:{"--cs-art-w":o.heroArt.canvas[0],"--cs-art-h":o.heroArt.canvas[1]},children:o.heroArt.layers.map((l,f)=>{const[d,p]=o.heroArt.canvas,n={left:`${l.x/d*100}%`,top:`${l.y/p*100}%`,width:`${l.w/d*100}%`,zIndex:f+1};if(l.blend&&(n.mixBlendMode=l.blend),l.m){const[r,u,x,a,g]=l.m;n.animation=`cs-drift ${r}s ${u}s ease-in-out infinite`,n["--dx"]=`${x*Ee/d*100}%`,n["--dy"]=`${a*Ee/p*100}%`,n["--rot"]=`${g*nt}deg`}else l.twinkle&&(n.animation=`cs-twinkle ${l.twinkle[0]}s ${l.twinkle[1]}s ease-in-out infinite`);return e.jsx("img",{className:"cs-hero-piece",src:`${o.heroArt.src.replace(/\/[^/]*$/,"")}/hero/${l.key}.webp`,alt:"","aria-hidden":"true",draggable:!1,style:n},l.key)})})}):o.heroArt?e.jsx("div",{className:"cs-hero-art",children:e.jsx("img",{src:o.heroArt.src,alt:o.heroArt.alt,draggable:!1})}):o.cover&&e.jsx("div",{className:"cs-hero-plate","data-mat":o.cover.mat?"":void 0,children:e.jsx("img",{src:o.cover.src,alt:o.cover.alt,draggable:!1})}),e.jsx(ot,{slug:t})]}),e.jsxs("section",{className:"cs-stage-section","aria-label":o.stage.type==="model"?"Interactive product model":"Product centerpiece",children:[e.jsxs("div",{className:"cs-section-head",children:[e.jsx("p",{className:"cs-eyebrow",children:"The Product"}),e.jsx("p",{className:"cs-stage-note",children:o.stage.note})]}),e.jsx("div",{className:"cs-stage-frame",children:o.stage.type==="model"?e.jsx(Ge,{modelUrl:o.stage.url,poster:o.stage.poster,posterAlt:o.stage.posterAlt,accent:o.palette.accent,yaw:o.stage.yaw??0,exposure:o.stage.exposure??1,orient:o.stage.orient},o.slug):o.stage.type==="poster"?e.jsx(Ye,{src:o.stage.src,alt:o.stage.alt},o.slug):e.jsx(We,{hero:o.stage.hero,heroAlt:o.stage.heroAlt,backdrop:o.stage.backdrop,accent:o.palette.accent},o.slug)})]}),e.jsxs("section",{className:"cs-story",children:[e.jsxs("blockquote",{className:"cs-quote",children:[e.jsx("span",{className:"cs-quote-bar","aria-hidden":"true"}),o.position]}),e.jsx("p",{className:"cs-blurb",children:o.blurb}),e.jsxs("div",{className:"cs-story-grid",children:[e.jsxs("div",{className:"cs-story-col",children:[e.jsx("h2",{className:"cs-eyebrow",children:"Deliverables"}),e.jsx("ul",{className:"cs-deliverables",children:o.deliverables.map(l=>e.jsx("li",{className:"cs-chip cs-chip-dim",children:l},l))})]}),e.jsxs("div",{className:"cs-story-col",children:[e.jsxs("h2",{className:"cs-eyebrow",children:["Visual Identity",o.storyMark&&e.jsx("img",{className:"cs-story-mark",src:o.storyMark.src,alt:o.storyMark.alt,loading:"lazy"})]}),e.jsx("p",{className:"cs-vi",children:o.visualIdentity})]})]})]}),o.mapShowcase&&e.jsx(Ke,{data:o.mapShowcase},o.slug),e.jsx(et,{gallery:o.gallery,accent:o.palette.accent,resetKey:t}),e.jsxs("footer",{className:"cs-next",children:[e.jsxs("a",{href:le(y),className:"cs-next-link","data-dir":"next",onClick:i&&!y.href?l=>{st(l)&&(l.preventDefault(),i(y.slug))}:void 0,style:{"--nx-bg":y.palette.bg,"--nx-accent":y.palette.accent,"--nx-glow":y.palette.glow,...A?{"--nx-art":`url("${A.src}")`,"--nx-art-op":String(Math.min(.6,A.opacity*2.4)),"--nx-art-filter":A.filter??"none","--nx-art-size":A.tile??"cover","--nx-art-repeat":A.tile?"repeat":"no-repeat","--nx-art-pos":A.pos??"50% 50%"}:{}},children:[A&&e.jsx("span",{className:"cs-next-art","aria-hidden":"true"}),e.jsx("span",{className:"cs-next-scrim","aria-hidden":"true"}),e.jsx("span",{className:"cs-eyebrow",children:"Next Project"}),e.jsxs("span",{className:"cs-next-name",children:[e.jsx("span",{className:"cs-next-index",children:at(y.slug)}),y.logo?e.jsx("img",{className:"cs-next-logo",src:y.logo.src,alt:y.logo.alt,draggable:!1,style:y.logo.scale?{"--nx-logo-scale":y.logo.scale}:void 0}):y.name,e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]})]}),o.microsite&&e.jsxs("a",{href:o.microsite.href,className:"cs-all-work cs-side-page",children:[o.microsite.label,e.jsx("span",{"aria-hidden":"true",children:" ↗"})]})]})]}),e.jsx(ne,{slug:t,piece:"pager",onNext:i}),e.jsx("style",{children:`
        /* ═══ Page frame ═══ */
        .cs-page {
          position: relative;
          background: var(--cs-bg);
          color: #fff;
          min-height: 100vh;
          animation: cs-page-in 0.5s ease-out both;
        }
        /* Opacity on the page, the rise on <main>: a transform on .cs-page
           would make it the containing block for the sticky pins it holds. */
        .cs-page > main { animation: cs-main-in 0.6s ease-out both; }
        @keyframes cs-page-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cs-main-in {
          from { transform: translate3d(0, 18px, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
        .cs-page.cs-leaving,
        .cs-page.cs-leaving-next,
        .cs-page.cs-leaving-prev { animation: cs-page-out 0.26s ease-in forwards; }
        .cs-page.cs-leaving > main { animation: cs-main-out 0.26s ease-in forwards; }
        @keyframes cs-page-out { to { opacity: 0; } }
        @keyframes cs-main-out { to { transform: translate3d(0, -12px, 0); } }
        /* Moving forward, the page you are leaving exits to the left and the
           one you are opening arrives from the right: the set reads as a
           strip you travel along. Backwards is the mirror. */
        .cs-page.cs-leaving-next > main { animation: cs-slide-out-left 0.26s ease-in forwards; }
        .cs-page.cs-leaving-prev > main { animation: cs-slide-out-right 0.26s ease-in forwards; }
        @keyframes cs-slide-out-left  { to { transform: translate3d(-7vw, 0, 0); } }
        @keyframes cs-slide-out-right { to { transform: translate3d(7vw, 0, 0); } }
        html.zg-arriving-next .cs-page > main { animation: cs-slide-in-right 0.55s cubic-bezier(.16,.84,.34,1) both; }
        html.zg-arriving-prev .cs-page > main { animation: cs-slide-in-left 0.55s cubic-bezier(.16,.84,.34,1) both; }
        /* Contain the slide here rather than on <html>: main starts 7vw off
           the side, and clipping the root stops body's overflow-x from
           propagating to the viewport, which turns body into a scroll
           container and strands every sticky pin (the pager bar included)
           at the bottom of the document. overflow-x:clip does not create a
           scroll container, so the pins keep the viewport as their
           scrollport. */
        html.zg-arriving-next .cs-page,
        html.zg-arriving-prev .cs-page { overflow-x: clip; }
        /* This is where the arrival's mirror of the old warm() lived: a
           will-change on .cs-page and one on <main>, so the fade and the
           slide were promoted before the entrance played. Both are gone, for
           the reason set out at length where warm() used to be: each of them
           is the size of the document, and either one on its own puts the
           page over Firefox's will-change budget, at which point EVERY hint
           in the document is ignored. The slide below is a transform
           animation and gets its layer when it runs. Verified on all four
           pager pushes in both engines: the arriving page's first painted
           frame is already offset and already moving. */
        @keyframes cs-slide-in-right { from { transform: translate3d(7vw, 0, 0); } to { transform: translate3d(0, 0, 0); } }
        @keyframes cs-slide-in-left  { from { transform: translate3d(-7vw, 0, 0); } to { transform: translate3d(0, 0, 0); } }
        /* Everything in the flow sits above the art layer. */
        .cs-page > main { position: relative; z-index: 1; }

        /* ═══ Full-page art background ═══ */
        .cs-bgpin {
          height: 0;
          position: sticky;
          top: 0;
          z-index: 0;
          pointer-events: none;
        }
        .cs-bglayer {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .cs-bgart {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: calc(100% + var(--cs-bg-bleed, 14) * 1vh);
          /* translate3d and no will-change. This layer is a viewport and a
             fifth tall -- 2.3 megapixels, more than Firefox's entire budget
             for the page on its own -- and the 3D transform already puts it
             on its own layer without asking. */
          transform: translate3d(0, 0, 0);
        }
        .cs-bgart-img {
          position: absolute;
          inset: 0;
          background-image: var(--cs-bg-src);
          background-size: var(--cs-bg-size, cover);
          background-position: var(--cs-bg-pos, 50% 50%);
          background-repeat: var(--cs-bg-repeat, no-repeat);
          opacity: var(--cs-bg-op, 1);
          filter: var(--cs-bg-filter, none);
          transform-origin: 50% 50%;
        }
        .cs-bgart-drift { animation: cs-bg-drift 55s ease-in-out infinite alternate; }
        @keyframes cs-bg-drift {
          from { transform: scale(1); }
          to { transform: scale(1.055); }
        }
        .cs-bgscrim {
          position: absolute;
          inset: 0;
          background: var(--cs-bg-scrim);
        }

        .cs-topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          z-index: 60;
          pointer-events: none;
          background: linear-gradient(90deg, var(--cs-bg) 0%, var(--cs-accent) 45%, var(--cs-accent) 70%, var(--cs-bg) 100%);
        }
        .cs-nav {
          position: fixed;
          top: 5px;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
          height: 4rem;
          /* Deeper than it was: the hero plate now runs to the top of the
             viewport, so All Work can land on bright artwork. Mirrors the
             pager bar's fade at the other end of the page. */
          background: linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 55%, transparent 100%);
        }

        /* Two pads, not a bar. A blurred band across the whole top read as a
           painted header; the problem was only ever the two marks sitting on
           live artwork, so the blur is local to each of them.

           Attached to the links rather than positioned by hand on .cs-nav, so
           each pad stays centred on its own mark whatever the viewport does to
           the nav's clamp() padding or to the width of the text.

           The radial mask fades the wash and the blur together, in step, and
           reaches transparent before the box edges: there is no rectangle to
           see, at any corner. */
        .cs-nav-logo::before,
        .cs-nav-back::before {
          content: '';
          position: absolute;
          inset: -30px -44px;
          z-index: -1;
          pointer-events: none;
          backdrop-filter: blur(13px) saturate(0.85);
          -webkit-backdrop-filter: blur(13px) saturate(0.85);
          background: rgba(0, 0, 0, 0.42);
          -webkit-mask-image: radial-gradient(closest-side ellipse at 50% 50%, #000 0%, #000 40%, transparent 100%);
          mask-image: radial-gradient(closest-side ellipse at 50% 50%, #000 0%, #000 40%, transparent 100%);
        }

        .cs-nav-logo img { height: 1.25rem; width: auto; display: block; transition: opacity 0.2s ease; }
        /* The fade is on the img, never on the link: opacity below 1 makes an
           element a backdrop root, which would blank the pad's blur on hover. */
        .cs-nav-logo:hover img { opacity: 0.8; }
        .cs-nav-logo,
        .cs-nav-back {
          position: relative;
          z-index: 1;
        }
        .cs-nav-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .cs-nav-back:hover { color: var(--cs-accent); gap: 0.75rem; }

        /* ═══ Shared bits ═══ */
        .cs-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }
        .cs-chip {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.4rem 0.85rem;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          color: var(--cs-accent);
        }
        .cs-chip-dim { color: rgba(255,255,255,0.7); letter-spacing: 0.1em; text-transform: none; font-weight: 600; font-size: 0.78rem; }

        /* ═══ Hero ═══ */
        .cs-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 7rem clamp(1.5rem, 6vw, 6rem) 4rem;
          /* Glow only: no flat fill, or it would occlude the art layer.
             .cs-page already paints the base color beneath the art. */
          background: radial-gradient(110% 110% at 85% 0%, var(--cs-glow) 0%, transparent 50%);
        }
        .cs-hero-inner { position: relative; z-index: 2; max-width: 56rem; }
        /* Where the case-study number lives now: readable, and it carries the
           set total so the hero says where you are, not just who you are. */
        .cs-hero-count {
          display: inline-flex;
          align-items: baseline;
          gap: 0.3rem;
          margin-left: 0.2rem;
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.32);
          line-height: 1;
        }
        .cs-hero-count b { font-weight: 900; color: var(--cs-accent); }
        .cs-hero-count i { font-style: normal; opacity: 0.45; font-weight: 600; }

        /* ── Persistent pager bar, pinned to the foot of the viewport ── */
        .cs-pagerpin {
          height: 0;
          position: sticky;
          bottom: 0;
          z-index: 20;
        }
        .cs-pagerbar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 5rem;
          /* Grid, not space-between. With three flex children the count sat
             wherever the two labels left it, so it slid left or right by
             however much the names differed — 06/06 between "Lootbar" and
             "Garcia Handpicked" was visibly off-centre. Two equal side tracks
             put the middle track dead centre no matter what is in them, so
             the count holds the same spot on every project. minmax(0,1fr)
             rather than 1fr so the tracks can shrink under their content and
             the labels keep their own ellipsis as a last resort. */
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
          align-items: end;
          gap: 1rem;
          padding: 0 clamp(1rem, 4vw, 3rem) 0.95rem;
          /* Neutral dark rather than the brand colour: this bar sits over
             every section of the page, including the light gallery plates.
             No border, no flat panel: it fades up out of the page. */
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.90) 0%,
            rgba(0,0,0,0.78) 34%,
            rgba(0,0,0,0.42) 68%,
            rgba(0,0,0,0) 100%
          );
          pointer-events: none;
        }
        .cs-pagerbar > * { pointer-events: auto; }
        /* Fixed tracks: the first and last case study have one side empty,
           and auto-placement would slide the count into the empty track. */
        .cs-pagerbar-link[data-dir='prev'] { justify-self: start; grid-column: 1; }
        .cs-pagerbar-here { justify-self: center; grid-column: 2; }
        .cs-pagerbar-next { justify-self: end; grid-column: 3; }
        /* backdrop-filter clips hard at the element box, which is what put a
           visible horizontal seam across the page. Masking the blur layer to
           the same ramp as the tint lets the blur die out instead of stopping. */
        .cs-pagerbar::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          -webkit-mask-image: linear-gradient(to top, #000 0%, #000 30%, rgba(0,0,0,0.35) 65%, transparent 100%);
          mask-image: linear-gradient(to top, #000 0%, #000 30%, rgba(0,0,0,0.35) 65%, transparent 100%);
          pointer-events: none;
        }
        .cs-pagerbar-link {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          min-width: 0;
          color: rgba(255,255,255,0.62);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .cs-pagerbar-link span {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          min-width: 0;
        }
        /* Previous / Next stay in the accessibility tree but come off the
           screen: the arrow already says which way, and the labels were the
           second line that made this bar twice as tall as it needed to be. */
        .cs-pagerbar-link i {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }
        .cs-pagerbar-link b {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cs-pagerbar-link svg { flex: none; transition: transform 0.25s ease; }
        .cs-pagerbar-link:hover { color: var(--cs-accent); }
        .cs-pagerbar-link:hover svg { transform: translateX(-4px); }
        .cs-pagerbar-next:hover svg { transform: translateX(4px); }
        /* Where you are: the count with the current project under it. */
        .cs-pagerbar-here {
          display: flex;
          align-items: baseline;
          gap: 0.55rem;
          flex: none;
          min-width: 0;
        }
        .cs-pagerbar-here em::before {
          content: '·';
          margin-right: 0.55rem;
          opacity: 0.4;
        }
        .cs-pagerbar-here em {
          font-style: normal;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.62);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 18rem;
        }
        .cs-pagerbar-count {
          display: inline-flex;
          align-items: baseline;
          gap: 0.28rem;
          flex: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 900;
          color: rgba(255,255,255,0.34);
          line-height: 1;
        }
        .cs-pagerbar-count b { color: var(--cs-accent); font-weight: 900; }
        .cs-pagerbar-count i { font-style: normal; opacity: 0.5; font-weight: 600; }
        /* Clear the bar so the last of the page is never trapped behind it.
           The space goes on <main>, ABOVE the pin: put it on .cs-page and the
           pin's natural resting place ends up a bar-height off the page floor,
           so the bar visibly lifts when you hit the bottom. */
        .cs-page > main { padding-bottom: 3.5rem; }
        .cs-hero-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--cs-accent);
          margin-bottom: 1.4rem;
        }
        .cs-hero-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.92;
          letter-spacing: -0.01em;
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          color: #fff;
        }
        /* Logo titles run taller than the type they replace: a wordmark has
           no ascenders and descenders inflating its box, so matching the h1's
           cap height means overshooting its font-size. */
        .cs-hero-name-logo { line-height: 0; }
        .cs-hero-name-logo img {
          display: block;
          /* One height for the set, times the mark's own correction (see
             logo.scale in caseStudies.ts). Multiplying inside the clamp
             would scale the floor and the ceiling too and let a boosted mark
             blow past the cap on wide screens; multiplying the clamped result
             keeps every mark on the same viewport curve. */
          height: calc(clamp(3.5rem, 8vw, 7rem) * var(--cs-logo-scale, 1));
          /* Width follows the art, but the copy column is the hard limit:
             beyond it the mark would cross into the cover plate. Contain (not
             a squashed width) keeps the ratio and drops the drawn height
             instead, and left-aligns it back onto the copy's edge. */
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
        }
        .cs-hero-pos {
          margin-top: 1.6rem;
          font-size: clamp(1.1rem, 2vw, 1.55rem);
          font-weight: 600;
          line-height: 1.35;
          color: rgba(255,255,255,0.88);
          max-width: 38rem;
        }
        .cs-hero-chips { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.8rem; }
        .cs-hero-client {
          margin-top: 2.2rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        /* The label keeps the small-caps treatment and gives up the line: a
           mark set inline after "CLIENT" reads as the end of a sentence, and
           its baseline never agrees with the letterspaced caps beside it. On
           its own row it reads as what it is, a credited party under a
           heading. Same shape whether the client is a mark or a name. */
        .cs-hero-client-label { display: block; margin-bottom: 0.6rem; }
        .cs-hero-client-name { color: rgba(255,255,255,0.85); }
        /* Sized off the label, not the h1: this is a credit, so the mark
           stays near the caps' own height and must not read as a subtitle. */
        .cs-hero-clientlogo {
          display: block;
          height: 1.85rem;
          width: auto;
          max-width: min(100%, 14rem);
          object-fit: contain;
          object-position: left center;
          opacity: 0.85;
        }
        .cs-hero-scroll {
          position: absolute;
          left: 50%;
          bottom: 1.6rem;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.35);
          animation: cs-bob 2.4s ease-in-out infinite;
        }
        @keyframes cs-bob {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 8px); }
        }

        /* ═══ Brand-cover exhibit plate ═══
           The 4:5 cover mounted as a bounded object in the hero's right half,
           with the h1 crossing its left edge. Deliberately NOT a background:
           run full-bleed under the type it would have to be cropped to 16:9,
           which is exactly what these compositions can't survive, and it would
           duplicate the job the sticky page-art layer already does. */
        .cs-hero-plate {
          position: absolute;
          z-index: 1;
          right: clamp(0.75rem, 2.5vw, 2.5rem);
          /* Centred on the hero, capped at 48vw so a tall narrow window can't
             hand the plate two thirds of the screen. */
          top: 50%;
          bottom: auto;
          transform: translateY(-50%);
          /* Width leads and height follows from 4:5, never the other way
             round. Height-leads plus a max-width cap silently broke the
             ratio on any window under ~1.42:1 (the cap bound, the box went
             narrow, and object-fit: cover shaved up to 9.7% off the sides:
             at 1280x1000 the covers lost their left and right frame). 68vh is
             the same width height:85% used to produce, so wide windows are
             unchanged; narrow ones now lose a little height instead of art. */
          width: min(48vw, 68vh);
          height: auto;
          aspect-ratio: 4 / 5;
          /* No frame, no mat, no hairline: this box is only a layout slot;
             the artwork is the object and it floats inside it. */
          overflow: visible;
        }
        /* Keep the copy clear of the plate: the h1 used to run onto it.
           68vh is the plate's width when height is 85% of a 100vh hero. */
        .cs-hero-plated {
          padding-right: calc(
            min(48vw, 68vh) + clamp(0.75rem, 2.5vw, 2.5rem) + clamp(2rem, 5vw, 5rem)
          );
        }
        /* Bloom under the art, in the brand accent: what lifts it off the
           page. Sits behind the image, inside the slot. */
        .cs-hero-plate::before {
          content: '';
          position: absolute;
          inset: 8% -6% -4%;
          background: radial-gradient(60% 52% at 50% 62%, var(--cs-glow) 0%, transparent 72%);
          filter: blur(38px);
          pointer-events: none;
        }
        .cs-hero-plate img {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform-origin: 50% 50%;
          /* The cast shadow is the ONLY floating cue: no bob. Long and soft,
             so it reads as height off the page rather than a card border. */
          box-shadow:
            0 2.5rem 4.5rem rgba(0,0,0,0.55),
            0 0.75rem 1.5rem rgba(0,0,0,0.35);
        }
        /* Art that isn't 4:5. The flavor key arts are square, and their HUD
           frame runs nearly edge to edge so cropping to fill would cut it off
           both sides. It keeps its own aspect and floats in the slot; there's
           no mat behind it any more, so the slot is invisible. */
        .cs-hero-plate[data-mat] img {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: auto;
          aspect-ratio: 1;
          object-fit: contain;
          transform: translate(-50%, -50%);
        }
        /* The glow stops being ambience and becomes the plate's halo. */
        .cs-hero-plated {
          background: radial-gradient(90% 100% at 78% 35%, var(--cs-glow) 0%, transparent 40%);
        }

        /* ═══ Hero collage ═══
           A 16:9 cutout composed for this frame, with its left half left empty
           for the copy. So it is laid over the whole hero and left to land
           where the artwork was drawn to land. No crop, no box, no cast
           shadow: the elements already carry their own. Contain keeps the
           composition intact at every window; anchoring it right means a wide
           window spends its extra pixels on the gap between copy and artwork
           rather than sliding the artwork toward the type. */
        .cs-hero-art {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        /* Direct child only: the exploded variant nests its pieces inside a
           stage, and object-fit on those would fight their placement. */
        .cs-hero-art > img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: 100% 50%;
        }
        /* The copy stops where the artwork starts. Both collages open their
           dense half (the pouches, the device, the shadows they cast) at
           about 44% of the frame, so the gutter is the remaining 56% of the
           RENDERED width: 56vw while the art is fitting to the window's width,
           97vh once it is fitting to its height (16:9 makes that 0.56 × 16/9).
           Measured from the artwork rather than from the box, or the longest
           line of the position lands on a pouch. The loose sparkles and torn
           stickers that drift further left are meant to pass behind the type,
           and do: the collage sits a layer under it. */
        .cs-hero-arted {
          padding-right: calc(min(56vw, 99.5vh) + clamp(1rem, 2vw, 2rem));
          background: radial-gradient(85% 95% at 74% 45%, var(--cs-glow) 0%, transparent 45%);
        }

        /* ── The exploded collage ──
           The stage reproduces the rect a contain-fit gives the flat
           image (16:9, as wide as the hero or as tall, whichever binds), so
           the pieces land where the single file used to. Right-anchored and
           centred for the same reason the flat one is. */
        .cs-hero-art-live { overflow: hidden; }
        .cs-hero-stage {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: min(100%, 56.25vw);
          aspect-ratio: var(--cs-art-w) / var(--cs-art-h);
        }
        .cs-hero-piece {
          position: absolute;
          display: block;
          height: auto;
          /* Promote once, up front: fourteen pieces animating transform will
             otherwise be re-rasterised as they move. */
          will-change: transform;
        }
        /* One keyframe for every piece: the travel is per-element custom
           properties, so fourteen drifts cost one animation definition.
           Three stops, not two: a two-stop drift retraces its own path and
           reads as a slide, where an uneven third stop makes each piece
           wander a small loop, which is the buoyancy Quynh asked for. The
           partial offsets are fractions of the same travel, so one number
           per axis still controls how far anything goes. */
        @keyframes cs-drift {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          38% {
            transform: translate3d(var(--dx), var(--dy), 0) rotate(var(--rot));
          }
          71% {
            transform:
              translate3d(calc(var(--dx) * -0.42), calc(var(--dy) * 0.68), 0)
              rotate(calc(var(--rot) * -0.55));
          }
        }
        @keyframes cs-twinkle {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        /* Asked not to animate, the collage still has to be the collage: the
           pieces stay exactly where the flat file drew them and simply stop. */
        @media (prefers-reduced-motion: reduce) {
          .cs-hero-piece { animation: none !important; opacity: 1 !important; }
        }

        /* ═══ Unplated hero: a case study with no cover ═══
           The copy column is sized to leave the plate its half of the screen.
           With no plate there is nothing in that half, so left-aligned copy
           hangs off the edge of a large empty area. Centred, the copy is the
           composition instead of the leftover of one. Written as :not() rather
           than a modifier class so none of it can reach the plated heroes:
           they are excluded by the selector, not by ordering. No breakpoint
           undoes it: the stacked layout exists to get the copy out from under
           the plate, and an unplated hero never had one at any width. A hero
           carrying a collage is not one of these: it has art in that half too,
           so it is excluded alongside the plated ones. */
        .cs-hero:not(.cs-hero-plated):not(.cs-hero-arted) {
          justify-content: center;
          text-align: center;
          /* Same reason: the glow was thrown to the top right to sit over the
             artwork. Nothing is there now, so it moves over the copy. */
          background: radial-gradient(110% 110% at 50% 0%, var(--cs-glow) 0%, transparent 55%);
        }
        .cs-hero:not(.cs-hero-plated):not(.cs-hero-arted) .cs-hero-pos { margin-inline: auto; }
        .cs-hero:not(.cs-hero-plated):not(.cs-hero-arted) .cs-hero-chips { justify-content: center; }
        /* Both marks are display:block boxes with object-position: left. The
           rule that keeps a width-clamped logo pinned to the copy's left edge
           is exactly what fights a centred column, so it inverts here. */
        .cs-hero:not(.cs-hero-plated):not(.cs-hero-arted) .cs-hero-name-logo img,
        .cs-hero:not(.cs-hero-plated):not(.cs-hero-arted) .cs-hero-clientlogo {
          margin-inline: auto;
          object-position: center;
        }

        /* Below this the overlap stops being a composition and starts being a
           collision: the plate stacks under the copy at full column width. */
        @media (max-width: 1180px) {
          .cs-hero-plated {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            min-height: 0;
            /* Undo the gutter that reserves the plate's column on desktop:
               stacked there is no column to reserve, and leaving it in
               squeezed the hero to a 135px-wide sliver. */
            padding-right: clamp(1.5rem, 6vw, 6rem);
            padding-bottom: 5.5rem;
          }
          .cs-hero-plated .cs-hero-inner { order: 1; max-width: 100%; }
          .cs-hero-plate {
            order: 2;
            /* relative, not static: the matted art is absolutely positioned
               against the plate, and a static plate hands that job to the
               hero: the art then covers the copy. */
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            max-width: none;
            transform: none;
            /* Capped, or at ~1100px the stacked plate becomes a billboard:
               it has to stay an object you could pick up. */
            width: min(100%, 32rem);
            height: auto;
            max-height: none;
            margin-top: 2.75rem;
          }
          /* The collage stacks under the copy on the same terms as the plate.
             Its empty left half only earns its keep next to type: stacked
             there is no type beside it, so that half is cropped away and the
             artwork gets the whole width instead of a third of it. 5:4 keeps
             the frame from about 30% in, which is past the dead margin and
             still outside the leftmost pieces (Strane's torn eye sticker
             starts at 33%, and a crop through it would read as damage). It
             bleeds the hero's side padding too: a cutout collage has no edge
             of its own, so an inset one floats in a gutter that looks like a
             mistake, where a full-width one just runs off the screen. */
          .cs-hero-arted {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            min-height: 0;
            padding-right: clamp(1.5rem, 6vw, 6rem);
            padding-bottom: 5.5rem;
          }
          .cs-hero-arted .cs-hero-inner { order: 1; max-width: 100%; }
          .cs-hero-art {
            order: 2;
            position: relative;
            inset: auto;
            align-self: stretch;
            aspect-ratio: 5 / 4;
            margin-top: 2.25rem;
            margin-inline: calc(-1 * clamp(1.5rem, 6vw, 6rem));
          }
          .cs-hero-art > img {
            object-fit: cover;
            object-position: 100% 50%;
          }
          /* Same crop, done geometrically: the 16:9 stage fills the 5:4 box's
             height and hangs off to the left, which is what a right-anchored
             cover-fit does to the flat file. */
          .cs-hero-art-live .cs-hero-stage {
            top: 0;
            height: 100%;
            transform: none;
          }
        }

        /* ═══ Stage ═══ */
        .cs-stage-section { padding: 4.5rem clamp(1.25rem, 4vw, 3rem) 2rem; }
        .cs-section-head {
          max-width: 1280px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .cs-stage-note { font-size: 0.9rem; color: rgba(255,255,255,0.45); }
        .cs-stage-frame {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          height: clamp(420px, 72vh, 680px);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 1.75rem;
          overflow: hidden;
          /* Opaque, and lit like a studio box. The renderer draws with
             alpha:true, so at rgba(0,0,0,0.25) the page's art layer showed
             straight through and the device looked like it was floating in
             the page rather than standing in a viewport. Base is the brand
             near-black: key light from above, glow bounced off the floor.
             Both radials are sized past 100% on purpose: at 75%/65% wide they
             drew a lit oval that stopped short of the corners, so the box read
             as a shape sitting in a frame rather than a filled viewport. */
          background:
            radial-gradient(145% 78% at 50% 112%, var(--cs-glow) 0%, transparent 72%),
            radial-gradient(130% 82% at 50% -14%, rgba(255,255,255,0.11) 0%, transparent 74%),
            linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 45%, rgba(0,0,0,0.22) 100%),
            var(--cs-bg);
          box-shadow: 0 30px 90px rgba(0,0,0,0.5);
        }

        /* ═══ Story ═══ */
        .cs-story {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4.5rem clamp(1.25rem, 4vw, 3rem);
        }
        .cs-quote {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 3.4vw, 2.6rem);
          line-height: 1.2;
          max-width: 46rem;
          padding-left: 1.75rem;
          margin: 0;
        }
        .cs-quote-bar {
          position: absolute;
          left: 0;
          top: 0.25em;
          bottom: 0.25em;
          width: 4px;
          border-radius: 4px;
          background: var(--cs-accent);
        }
        .cs-blurb {
          margin-top: 2rem;
          max-width: 44rem;
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.6);
        }
        .cs-story-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          margin-top: 3.5rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .cs-deliverables {
          list-style: none;
          padding: 0;
          margin: 1.4rem 0 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .cs-story-mark { height: 2.4rem; width: auto; opacity: 0.9; }
        .cs-vi {
          margin-top: 1.4rem;
          font-size: 0.95rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.6);
        }

        /* ═══ Next-project footer ═══ */
        .cs-next { border-top: 1px solid rgba(255,255,255,0.08); }
        .cs-next-link {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          padding: 4.5rem clamp(1.5rem, 6vw, 6rem);
          background: var(--nx-bg);
          transition: filter 0.3s ease;
        }
        .cs-next-link:hover { filter: brightness(1.18); }
        /* Art layer, then scrim, then copy: the eyebrow and mark are flow
           children, so they need lifting above both absolute layers. */
        .cs-next-link > .cs-eyebrow,
        .cs-next-name { position: relative; z-index: 2; }
        .cs-next-art {
          position: absolute;
          inset: 0;
          background-image: var(--nx-art);
          background-size: var(--nx-art-size, cover);
          background-position: var(--nx-art-pos, 50% 50%);
          background-repeat: var(--nx-art-repeat, no-repeat);
          filter: var(--nx-art-filter, none);
          opacity: var(--nx-art-op, 0);
          transform: scale(1.03);
          transition: transform 0.55s cubic-bezier(.16,.84,.34,1);
          z-index: 0;
        }
        .cs-next-link:hover .cs-next-art { transform: scale(1.07); }
        /* The project glow, plus a wash off the left edge so the mark keeps its
           contrast over whatever the art happens to be doing under it. */
        .cs-next-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(110% 130% at 90% 0%, var(--nx-glow) 0%, transparent 50%),
            linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.34) 42%, rgba(0,0,0,0) 80%),
            linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%);
        }
        .cs-next-name {
          display: inline-flex;
          align-items: baseline;
          gap: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          font-size: clamp(2.4rem, 7vw, 5.5rem);
          line-height: 1;
          color: #fff;
        }
        /* Smaller than the hero's mark (this is a teaser, not the title), but
           it carries the same per-mark correction so a stacked lockup doesn't
           come in at a fraction of a wordmark's optical mass. */
        .cs-next-logo {
          height: calc(clamp(1.9rem, 4.6vw, 3.6rem) * var(--nx-logo-scale, 1));
          width: auto;
          max-width: min(100%, 26rem);
          object-fit: contain;
          object-position: left bottom;
          /* baseline-aligned in the row: an image's baseline is its bottom
             edge, which puts the index and the mark on one line. */
          display: inline-block;
        }
        .cs-next-name svg { color: var(--nx-accent); align-self: center; transition: transform 0.3s ease; }
        .cs-next-link:hover .cs-next-name svg { transform: translate(4px, -4px); }
        .cs-next-index {
          font-size: 0.35em;
          font-weight: 800;
          color: var(--nx-accent);
        }
        .cs-all-work {
          display: block;
          padding: 1.5rem clamp(1.5rem, 6vw, 6rem);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          background: #050505;
          transition: color 0.2s ease;
        }
        .cs-all-work:hover { color: var(--cs-accent); }
        /* Stacked above All Work, separated by the same hairline the footer
           already uses at its top edge. No box, no tint, no radius: the accent
           is spent on the hover colour and nothing else. */
        .cs-side-page { border-bottom: 1px solid rgba(255,255,255,0.08); }

        /* ═══ Mobile ═══ */
        @media (max-width: 767px) {
          .cs-hero { min-height: 88vh; padding-top: 6rem; }
          /* A collage hero opens on the copy AND the art in one screen (Tim:
             the art started under the pager on an iPhone). The hero is the
             small viewport, the pager's 4.75rem is its foot padding, the copy
             tightens a step, and the art takes whatever height is left
             rather than a fixed 5:4, so it never runs under the bar. */
          .cs-hero-arted {
            height: 100svh;
            min-height: 34rem;
            justify-content: flex-start;
            padding-top: 5.5rem;
            padding-bottom: 4.75rem;
          }
          .cs-hero-arted .cs-hero-name { margin-top: 0.9rem; }
          .cs-hero-arted .cs-hero-pos { margin-top: 1rem; font-size: 1rem; }
          .cs-hero-arted .cs-hero-chips { margin-top: 1.1rem; gap: 0.45rem; }
          .cs-hero-arted .cs-hero-client { margin-top: 1.1rem; }
          .cs-hero-arted .cs-hero-art {
            aspect-ratio: auto;
            flex: 1 1 0;
            min-height: 11rem;
            margin-top: 1rem;
          }
          .cs-hero-count { font-size: 1.15rem; }
          /* A phone keeps the desktop's three-across arrangement; what gives
             is the name, which wraps instead of being cut. "Garcia
             Handpicked" sets as "Garcia / Handpicked" and the bar is two
             lines tall because the name is, not because the count was moved
             out of the way — so the count stays on the same line as the
             names, centred vertically against them.

             min-height holds that two-line box on every project. Only one
             name in the set is two words, so without it the bar would be
             taller on the two pages that sit next to Garcia and shorter
             everywhere else, and paging would step it up and down. */
          .cs-pagerbar {
            height: auto;
            min-height: 4.6rem;
            align-items: center;
            column-gap: 0.6rem;
            padding-top: 2rem;
            padding-bottom: 0.85rem;
            /* Both ramps are re-cut for the taller box. They are written as a
               fraction of the element, so simply growing the bar stretched the
               fade over two rows and left the count sitting in the sheer part
               of it — page copy read straight through the digits. These reach
               full strength lower and hold it further up, so the count gets
               the same backing the links have, and the fade still dies out
               before the top edge rather than ending on a seam. */
            background: linear-gradient(
              to top,
              rgba(0,0,0,0.93) 0%,
              rgba(0,0,0,0.90) 48%,
              rgba(0,0,0,0.70) 74%,
              rgba(0,0,0,0) 100%
            );
            /* iOS Safari with its toolbar out ends the viewport at the
               toolbar's top and paints the page under it, so the art ran on
               beneath the bar (Tim, on an iPhone). The bar's foot continues
               below it as an outer shadow: painted only outside the box, and
               no added scroll length at the page's end. */
            box-shadow: 0 12rem 0 12rem rgba(0,0,0,0.93);
          }
          .cs-pagerbar::before {
            -webkit-mask-image: linear-gradient(to top, #000 0%, #000 62%, rgba(0,0,0,0.4) 84%, transparent 100%);
            mask-image: linear-gradient(to top, #000 0%, #000 62%, rgba(0,0,0,0.4) 84%, transparent 100%);
          }
          /* The cap was the ellipsis, and nowrap was what made a cap the only
             option. Let the name break at its own space and the track becomes
             the constraint instead. Names of one word are unaffected — there
             is nowhere for them to break. */
          .cs-pagerbar-link b {
            font-size: 0.78rem;
            max-width: none;
            white-space: normal;
            overflow: visible;
            text-overflow: clip;
            line-height: 1.18;
          }
          /* Wrapped text is two lines; the arrow belongs beside the block of
             them, not on the first line's baseline. */
          .cs-pagerbar-link { align-items: center; gap: 0.5rem; }
          .cs-pagerbar-link span { align-items: center; }
          /* Each name sets away from its own arrow, so a wrapped second line
             stays against the edge the link points to. */
          .cs-pagerbar-next b { text-align: right; }
          .cs-pagerbar-here em { display: none; }
          /* Was 3rem against a 4.25rem bar; the two-row bar is about 5rem, so
             the clearance follows it or the last plate sits under the links. */
          .cs-page > main { padding-bottom: 4rem; }
          /* The gallery's own mobile rules moved to CaseStudyGallery with the
             rest of its CSS, so they reach the microsite routes too. */
          .cs-story-grid { grid-template-columns: 1fr; gap: 2.25rem; }
          /* 0.55rem was 8.8px of letterspaced caps over artwork, under the
             readable floor on a phone. The tracking comes in a little to pay
             for the extra width so the captions still hold one or two lines. */
          .cs-cap { font-size: 0.75rem; letter-spacing: 0.1em; left: 0.7rem; right: 0.7rem; bottom: 0.6rem; }

          /* A phone column is narrow enough that body copy and section
             eyebrows run the full width, and the desktop scrim is out of
             ramp by the bar's own 4rem, so mid-scroll a paragraph would
             slide clean through the logo and ALL WORK with nothing between
             them. Deeper at the top, and a second ramp carried below the bar
             (::after, outside the flex row, so the row's layout is
             untouched): ~7rem of gradient in all, still reading as a scrim
             over the artwork rather than a painted bar. */
          .cs-nav {
            background: linear-gradient(180deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.94) 55%, rgba(0,0,0,0.86) 100%);
          }
          .cs-nav::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 4.5rem;
            pointer-events: none;
            background: linear-gradient(180deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.16) 75%, transparent 100%);
          }
        }

        /* Reduced motion: no bobbing arrow, no hover zoom */
        @media (prefers-reduced-motion: reduce) {
          .cs-page, .cs-page > main { animation: none !important; }
          .cs-hero-scroll { animation: none; }
          .cs-tile img { transition: none; }
          .cs-bgart-drift { animation: none; }
        }
      `})]})}const ie=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function gt({slug:t,onClose:i,onNext:h}){const m=b.useRef(null),v=b.useRef(null),o=b.useRef(null),y=b.useRef(!1),L=b.useRef(null),[S,A]=b.useState(t),l=b.useRef(null),f=b.useRef(S);f.current=S;const d=K(S);b.useLayoutEffect(()=>{L.current=document.activeElement??null;const n=m.current,r=v.current;if(!(!n||!r))return ie()?$.set(n,{opacity:1}):($.fromTo(n,{opacity:0},{opacity:1,duration:.35,ease:"power2.out"}),$.fromTo(r,{y:26},{y:0,duration:.5,ease:"power3.out",clearProps:"transform"})),o.current?.focus({preventScroll:!0}),()=>{const u=L.current;u&&document.contains(u)&&u.focus({preventScroll:!0})}},[]),b.useEffect(()=>{const n=window.__lenis;n?.stop?.();const r=document.documentElement.style.overflow,u=document.body.style.overflow;return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",()=>{document.documentElement.style.overflow=r,document.body.style.overflow=u,n?.start?.()}},[]),b.useEffect(()=>{const n=f.current;if(t===n)return;const r=v.current;if(!r||ie()){A(t),r&&(r.scrollTop=0);return}const u=_(n),a=(u?.prev?t!==u.prev.slug:!0)?-4.5:4.5;l.current?.kill();const g=$.timeline();l.current=g,g.to(r,{opacity:0,xPercent:a,duration:.24,ease:"power2.in",onComplete:()=>{$.set(r,{xPercent:-a,opacity:0}),A(t),r.scrollTop=0}}),g.to(r,{opacity:1,xPercent:0,duration:.44,ease:"power3.out"})},[t]),b.useEffect(()=>()=>{l.current?.kill();const n=v.current;n&&$.set(n,{opacity:1,xPercent:0})},[]),b.useEffect(()=>{const n=_(S);if(!n)return;const r=[n.prev,n.next].flatMap(k=>k?[k.cover?.src,k.pageBg?.src]:[]).filter(k=>!!k);if(!r.length)return;let u=!1;const x=()=>{if(!u)for(const k of r){const w=new Image;w.decoding="async",w.src=k}},a=window,g=a.requestIdleCallback?a.requestIdleCallback(x,{timeout:2500}):window.setTimeout(x,900);return()=>{u=!0,a.requestIdleCallback&&a.cancelIdleCallback?a.cancelIdleCallback(g):window.clearTimeout(g)}},[S]),b.useEffect(()=>{const n=v.current;if(!n)return;const r=_(S);let u=0,x=0,a=0,g=!1;const k=32,w=M=>{if(g=!1,!r||M.touches.length!==1)return;const E=M.touches[0];E.clientX<k||E.clientX>window.innerWidth-k||M.target?.closest?.(".cs-stage, [data-no-swipe]")||(g=!0,u=E.clientX,x=E.clientY,a=M.timeStamp)},c=M=>{if(!g||!r)return;g=!1;const E=M.changedTouches[0];if(!E)return;const z=E.clientX-u,N=E.clientY-x;if(M.timeStamp-a>700||Math.abs(z)<64||Math.abs(z)<Math.abs(N)*1.6)return;const C=z<0?r.next:r.prev;C&&h(C.slug)},j=()=>{g=!1};return n.addEventListener("touchstart",w,{passive:!0}),n.addEventListener("touchend",c,{passive:!0}),n.addEventListener("touchcancel",j,{passive:!0}),()=>{n.removeEventListener("touchstart",w),n.removeEventListener("touchend",c),n.removeEventListener("touchcancel",j)}},[S,h]);const p=b.useCallback(()=>{if(y.current)return;y.current=!0;const n=m.current,r=v.current;if(ie()||!n||!r){i();return}const u=$.timeline({onComplete:i});u.to(r,{y:18,duration:.28,ease:"power2.in"},0),u.to(n,{opacity:0,duration:.3,ease:"power2.in"},.05)},[i]);return b.useEffect(()=>{const n=r=>{if(r.key==="Escape")r.preventDefault(),p();else if(r.key==="Tab"){const u=m.current;if(!u)return;const x=u.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');if(!x.length)return;const a=x[0],g=x[x.length-1],k=document.activeElement;u.contains(k)?r.shiftKey&&k===a?(r.preventDefault(),g.focus()):!r.shiftKey&&k===g&&(r.preventDefault(),a.focus()):(r.preventDefault(),a.focus())}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[p]),d?e.jsxs("div",{ref:m,className:"cso-root",role:"dialog","aria-modal":"true","aria-label":`${d.name} case study`,style:{"--cs-bg":d.palette.bg,"--cs-accent":d.palette.accent,"--cs-glow":d.palette.glow},children:[e.jsx("div",{ref:v,className:"cso-scroll","data-lenis-prevent":!0,children:e.jsx(it,{slug:S,onNext:h,onClose:p})}),e.jsx("div",{className:"cso-topbar","aria-hidden":"true"}),e.jsxs("div",{className:"cso-nav",children:[e.jsx("button",{type:"button",className:"cso-logo",onClick:p,"aria-label":"Close case study",children:e.jsx("img",{src:"/Wordmark_White.png",alt:"Zegoe"})}),e.jsx("button",{ref:o,type:"button",className:"cso-close",onClick:p,"aria-label":"Close case study",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsx("style",{children:`
        .cso-root {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: var(--cs-bg);
          /* The sliding content is allowed past the edges during a switch. */
          overflow: hidden;
          /* The backdrop is a different near-black per project; without this
             it snapped at the swap while the content was still mid-fade. */
          transition: background-color 0.5s ease;
        }
        .cso-scroll {
          position: absolute;
          inset: 0;
          overflow-y: auto;
          overflow-x: hidden;
          /* Same reason as the /work route: the swipe gesture needs the
             horizontal axis, or the browser's back/forward overscroll takes
             it first. */
          overscroll-behavior-x: contain;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .cso-topbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          z-index: 60;
          pointer-events: none;
          background: linear-gradient(90deg, var(--cs-bg) 0%, var(--cs-accent) 45%, var(--cs-accent) 70%, var(--cs-bg) 100%);
        }
        .cso-nav {
          position: absolute;
          top: 5px;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
          height: 4rem;
          background: linear-gradient(180deg, rgba(0,0,0,0.55), transparent);
          pointer-events: none;
        }
        .cso-nav > * { pointer-events: auto; position: relative; z-index: 1; }
        /* Corner pads, matching .cs-nav-logo/.cs-nav-back on the standalone
           page: the blur is local to each control, not a band across the top. */
        .cso-logo::before,
        .cso-close::before {
          content: '';
          position: absolute;
          inset: -30px -44px;
          z-index: -1;
          pointer-events: none;
          backdrop-filter: blur(13px) saturate(0.85);
          -webkit-backdrop-filter: blur(13px) saturate(0.85);
          background: rgba(0, 0, 0, 0.36);
          -webkit-mask-image: radial-gradient(closest-side ellipse at 50% 50%, #000 0%, #000 40%, transparent 100%);
          mask-image: radial-gradient(closest-side ellipse at 50% 50%, #000 0%, #000 40%, transparent 100%);
        }
        /* The close button is round and already has its own ground, so its pad
           only needs to reach a little past the rim. */
        .cso-close::before { inset: -22px; }
        .cso-logo {
          background: none;
          border: 0;
          padding: 0;
          cursor: pointer;
        }
        .cso-logo img { height: 1.25rem; width: auto; display: block; transition: opacity 0.2s ease; }
        /* On the img, not the button: opacity below 1 makes a backdrop root and
           would blank the pad's blur on hover. */
        .cso-logo:hover img { opacity: 0.8; }
        .cso-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(0,0,0,0.45);
          color: rgba(255,255,255,0.85);
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.1s ease;
        }
        .cso-close:hover { color: var(--cs-accent); border-color: rgba(255,255,255,0.4); }
        .cso-close:active { transform: scale(0.94); }
        .cso-close:focus-visible {
          outline: 2px solid var(--cs-accent);
          outline-offset: 2px;
        }
      `})]}):null}export{gt as default};
