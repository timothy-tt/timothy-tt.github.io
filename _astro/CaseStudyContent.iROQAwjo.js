const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/GLTFLoader.BqdKpcjx.js","_astro/three.module.Bx43vjkH.js","_astro/RoomEnvironment.Ct7rVCVU.js"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as S}from"./index.DiEladB3.js";import{_ as ae}from"./preload-helper.BlTxHScW.js";import{r as He}from"./index.Pl_XcmgS.js";function ve(i){const n=document.body;for(let p=i.parentElement;p&&p!==n;p=p.parentElement){const j=getComputedStyle(p).overflowY;if(j==="auto"||j==="scroll")return p}return null}const Pe=.06,ye=.0085,De=.006,Z=1.45,Be=8;function Re({modelUrl:i,poster:n,posterAlt:p,accent:j,yaw:z=0,exposure:r=1,orient:y}){const m=S.useRef(null),[T,L]=S.useState(!1),[c,w]=S.useState("poster"),[a,u]=S.useState(!1);S.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=m.current;if(!s)return;let b=!1;const M=()=>{b||L(!0)},o=()=>{const h=window;h.requestIdleCallback?h.requestIdleCallback(M,{timeout:1200}):window.setTimeout(M,200)},v=()=>{const h=(document.getAnimations?.()??[]).filter(d=>d.playState==="running"&&/^cs-(main|page)-in$/.test(d.animationName??""));h.length?Promise.allSettled(h.map(d=>d.finished)).then(o,o):o()},x=new IntersectionObserver(([h])=>{h.isIntersecting&&(x.disconnect(),v())},{root:ve(s),rootMargin:"400px 0px"});return x.observe(s),()=>{b=!0,x.disconnect()}},[]),S.useEffect(()=>{if(!T)return;const s=m.current;if(!s)return;let b=!1,M=null;return(async()=>{const[o,{GLTFLoader:v},{RoomEnvironment:x}]=await Promise.all([ae(()=>import("./three.module.Bx43vjkH.js"),[]),ae(()=>import("./GLTFLoader.BqdKpcjx.js"),__vite__mapDeps([0,1])),ae(()=>import("./RoomEnvironment.Ct7rVCVU.js"),__vite__mapDeps([2,1]))]);if(b)return;let h;try{if(h=new o.WebGLRenderer({antialias:!0,alpha:!0}),!h.getContext())throw new Error("no webgl context")}catch(k){console.warn("CaseStudyStage: WebGL unavailable, keeping poster",k),w("failed");return}h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.toneMapping=o.ACESFilmicToneMapping,h.toneMappingExposure=.82*r,h.outputColorSpace=o.SRGBColorSpace,h.setSize(s.clientWidth,s.clientHeight),s.appendChild(h.domElement);const d=h.domElement;d.style.width="100%",d.style.height="100%",d.style.display="block",d.style.touchAction="pan-y";const E=new o.Scene,N=new o.PerspectiveCamera(38,s.clientWidth/s.clientHeight,.1,100);N.position.set(0,0,5.4);const D=new o.PMREMGenerator(h),g=D.fromScene(new x,.04).texture;E.environment=g,E.environmentIntensity=.55;const l=new o.Color(j),A=l.clone().lerp(new o.Color("#ffffff"),.55),P=new o.DirectionalLight(16777215,.5);P.position.set(0,3,5);const $=new o.DirectionalLight(l,1);$.position.set(-5,1.5,-3.5);const Y=new o.DirectionalLight(A,.7);Y.position.set(4.5,2,3),E.add(P,$,Y);const H=new o.Group,C=new o.Group;C.rotation.y=z,H.add(C),E.add(H);const X=(k,q)=>{const I=new o.Box3().setFromObject(k),G=I.getSize(new o.Vector3),U=I.getCenter(new o.Vector3),Ce=Math.max(G.x,G.y,G.z)||1,we=q/Ce;k.scale.setScalar(we),k.position.copy(U).multiplyScalar(-we)};new v().load(i,k=>{if(b)return;const q=k.scene,I=new o.Group;y&&I.rotation.set(y[0],y[1],y[2]),I.add(q),X(I,2.8);const G=()=>{b||(C.add(I),w("ready"))};h.compileAsync(I,N,E).then(G,G)},void 0,k=>{console.warn("CaseStudyStage: GLB failed to load, keeping poster",k),w("failed")});let B=!1,R=!1,O=0,W=0,ie=0,se=0,F=0;const Ee=k=>k<-Z?-Z:k>Z?Z:k,ne=k=>{k.pointerType==="mouse"&&k.button!==0||(B=!0,R=k.pointerType!=="touch",O=ie=k.clientX,W=se=k.clientY,F=0,R&&d.setPointerCapture?.(k.pointerId),u(!0))},le=k=>{if(!B)return;if(!R){const G=k.clientX-ie,U=k.clientY-se;if(Math.hypot(G,U)<Be)return;if(Math.abs(G)<=Math.abs(U)){B=!1,u(!1);return}R=!0,d.setPointerCapture?.(k.pointerId)}const q=k.clientX-O,I=k.clientY-W;O=k.clientX,W=k.clientY,C.rotation.y+=q*ye,H.rotation.x=Ee(H.rotation.x+I*De),F=F*.6+q*ye*.4},K=()=>{B&&(B=!1,R=!1,u(!1))};d.addEventListener("pointerdown",ne),d.addEventListener("pointermove",le),d.addEventListener("pointerup",K),d.addEventListener("pointercancel",K);let _=!1;const ce=k=>{k.pointerType==="mouse"&&(_=!0)},de=()=>{_=!1};s.addEventListener("pointerenter",ce),s.addEventListener("pointerleave",de);const he=new o.Clock;let J=0,Q=!1;const Ne=()=>{const k=Math.min(he.getDelta(),.05);if(!B){const q=_?0:Pe*k;F+=(q-F)*(_?.09:.03),_&&Math.abs(F)<1e-5&&(F=0),C.rotation.y+=F}h.render(E,N)},pe=()=>{Ne(),J=requestAnimationFrame(pe)},ze=()=>{Q||(Q=!0,he.start(),J=requestAnimationFrame(pe))},me=()=>{Q=!1,cancelAnimationFrame(J)};let ge=!0;const ee=()=>{ge&&!document.hidden?ze():me()},ue=new IntersectionObserver(([k])=>{ge=k.isIntersecting,ee()},{root:ve(s),threshold:0});ue.observe(s);const fe=()=>ee();document.addEventListener("visibilitychange",fe);const te=()=>{!s.clientWidth||!s.clientHeight||(N.aspect=s.clientWidth/s.clientHeight,N.updateProjectionMatrix(),h.setSize(s.clientWidth,s.clientHeight))};window.addEventListener("resize",te);const be=new ResizeObserver(te);be.observe(s),ee(),M=()=>{me(),ue.disconnect(),be.disconnect(),document.removeEventListener("visibilitychange",fe),window.removeEventListener("resize",te),d.removeEventListener("pointerdown",ne),d.removeEventListener("pointermove",le),d.removeEventListener("pointerup",K),d.removeEventListener("pointercancel",K),s.removeEventListener("pointerenter",ce),s.removeEventListener("pointerleave",de),g.dispose(),D.dispose(),h.dispose(),d.parentNode===s&&s.removeChild(d)}})(),()=>{b=!0,M?.()}},[T,i,j,z,r,y]);const f=c!=="ready";return e.jsxs("div",{className:"cs-stage",style:{cursor:c==="ready"?a?"grabbing":"grab":"default"},children:[e.jsx("div",{ref:m,className:"cs-stage-mount","aria-hidden":c==="ready"?void 0:!0}),e.jsx("img",{src:n,alt:p,draggable:!1,className:"cs-stage-poster",style:{opacity:f?1:0},loading:"lazy"}),c==="ready"&&e.jsxs("span",{className:"cs-stage-hint",style:{color:j},children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M12 4v16M4 12h16M12 4l-3 3M12 4l3 3M12 20l-3-3M12 20l3-3M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3"})}),"Drag to rotate"]}),e.jsx("style",{children:`
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
      `})]})}const Ie=.26,Ge=.2,ke=30,xe=17,je=.93,Oe=.045,Te=3;function Fe({hero:i,heroAlt:n,backdrop:p,accent:j}){const z=S.useRef(null),r=S.useRef(null),[y,m]=S.useState(!1);return S.useEffect(()=>{const T=z.current,L=r.current;if(!T||!L)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let w=0,a=0,u=0,f=0,s=!1,b=!1,M=0,o=0,v=0;const x=(l,A)=>l<-A?-A:l>A?A:l,h=()=>{L.style.transform=`perspective(1100px) rotateX(${a.toFixed(3)}deg) rotateY(${w.toFixed(3)}deg)`},d=()=>{if(v=0,s)return;if(Math.abs(u)>.05||Math.abs(f)>.05)w=x(w+u,ke),a=x(a+f,xe),u*=je,f*=je;else{u=0,f=0;const A=c?.25:Oe;if(w+=(0-w)*A,a+=(0-a)*A,Math.abs(w)<.04&&Math.abs(a)<.04){w=0,a=0,h();return}}h(),v=requestAnimationFrame(d)},E=()=>{!v&&!s&&(v=requestAnimationFrame(d))},N=l=>{l.pointerType==="mouse"&&l.button!==0||(b=!0,s=!1,M=l.clientX,o=l.clientY,u=0,f=0,v&&(cancelAnimationFrame(v),v=0))},D=l=>{if(!b)return;const A=l.clientX-M,P=l.clientY-o;if(!s){if(Math.abs(A)<Te&&Math.abs(P)<Te)return;if(l.pointerType!=="mouse"&&Math.abs(P)>Math.abs(A)){b=!1;return}s=!0,m(!0),T.classList.add("csis-dragging"),T.setPointerCapture?.(l.pointerId)}M=l.clientX,o=l.clientY,u=A*Ie,f=P*Ge,w=x(w+u,ke),a=x(a+f,xe),h()},g=l=>{!b&&!s||(b=!1,s&&(s=!1,T.classList.remove("csis-dragging"),T.releasePointerCapture?.(l.pointerId),c&&(u=0,f=0)),E())};return T.addEventListener("pointerdown",N),T.addEventListener("pointermove",D),T.addEventListener("pointerup",g),T.addEventListener("pointercancel",g),()=>{T.removeEventListener("pointerdown",N),T.removeEventListener("pointermove",D),T.removeEventListener("pointerup",g),T.removeEventListener("pointercancel",g),v&&cancelAnimationFrame(v)}},[]),e.jsxs("div",{ref:z,className:"csis",children:[e.jsx("img",{src:p,alt:"","aria-hidden":"true",className:"csis-backdrop",draggable:!1}),e.jsx("div",{className:"csis-scrim","aria-hidden":"true"}),e.jsx("div",{ref:r,className:"csis-tilt",children:e.jsx("img",{src:i,alt:n,className:"csis-hero",draggable:!1})}),!y&&e.jsxs("span",{className:"csis-hint",style:{color:j},children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"})}),"Drag to turn"]}),e.jsx("style",{children:`
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
      `})]})}function qe({src:i,alt:n}){return e.jsxs("div",{className:"csps",children:[e.jsx("img",{src:i,alt:n,className:"csps-art",draggable:!1}),e.jsx("div",{className:"csps-vignette","aria-hidden":"true"}),e.jsx("style",{children:`
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
      `})]})}function Se(i){const n=document.body;for(let p=i.parentElement;p&&p!==n;p=p.parentElement){const j=getComputedStyle(p).overflowY;if(j==="auto"||j==="scroll")return p}return null}const $e=i=>1-(1-i)*(1-i),Ye=i=>i<0?0:i>1?1:i;function We({data:i}){const n=S.useRef(null),p=S.useRef([]),[j,z]=S.useState(!1),[r,y]=S.useState(null),[m,T]=S.useState(null),L=r??m,c=i.map.pins.find(o=>o.key===L)??null,{canvas:w,layers:a}=i.parallax,[u,f]=w;S.useEffect(()=>{const o=n.current;if(!o||window.matchMedia("(prefers-reduced-motion: reduce)").matches||!window.matchMedia("(min-width: 768px)").matches)return;let v=!1;const x=new IntersectionObserver(([h])=>{if(!h.isIntersecting)return;x.disconnect();const d=()=>{v||z(!0)},E=(document.getAnimations?.()??[]).filter(N=>N.playState==="running"&&/^cs-(main|page)-in$/.test(N.animationName??""));E.length?Promise.allSettled(E.map(N=>N.finished)).then(d,d):d()},{root:Se(o),rootMargin:"300px 0px"});return x.observe(o),()=>{v=!0,x.disconnect()}},[]),S.useEffect(()=>{if(!j)return;const o=n.current;if(!o)return;const v=Se(o),x=performance.now();let h=x,d=0;const E=a.map(g=>g.intro[0]),N=g=>{const l=Math.min((g-h)/1e3,.1);h=g;const A=o.getBoundingClientRect(),P=v?v.clientHeight:window.innerHeight,$=v?A.top-v.getBoundingClientRect().top:A.top,Y=Ye((P-$)/(P+A.height));for(let H=0;H<a.length;H++){const C=a[H],X=p.current[H];if(!X)continue;const B=(g-x)/1e3-C.delay;let R;if(B<C.dur){const O=B<=0?0:$e(B/C.dur);R=C.intro[0]+(C.intro[1]-C.intro[0])*O,E[H]=R}else{const O=C.scrollTo===void 0?C.intro[1]:C.intro[1]+(C.scrollTo-C.intro[1])*Y,W=C.scrub??0;E[H]=W>0?E[H]+(O-E[H])*(1-Math.exp(-l/W)):O,R=E[H]}X.style.transform=`translate3d(0, ${R.toFixed(3)}%, 0)`}d=requestAnimationFrame(N)},D=new IntersectionObserver(([g])=>{g.isIntersecting?d||(h=performance.now(),d=requestAnimationFrame(N)):d&&(cancelAnimationFrame(d),d=0)},{root:v,threshold:0});return D.observe(o),()=>{D.disconnect(),d&&cancelAnimationFrame(d)}},[j,a]);const[s,b]=i.map.canvas,M=(o,v)=>`${(o/v*100).toFixed(4)}%`;return e.jsxs("section",{className:"csm","aria-labelledby":"csm-head",children:[e.jsxs("div",{className:"cs-section-head",children:[e.jsx("p",{className:"cs-eyebrow",id:"csm-head",children:i.eyebrow}),e.jsx("p",{className:"cs-stage-note",children:i.note})]}),e.jsxs("div",{className:"csm-inner",children:[e.jsx("p",{className:"csm-lede",children:i.lede}),e.jsxs("figure",{className:"csm-fig",children:[e.jsx("div",{className:"csm-stage",ref:n,style:{aspectRatio:`${u} / ${f}`},"aria-hidden":"true",children:a.map((o,v)=>e.jsx("img",{ref:x=>{p.current[v]=x},className:"csm-layer",src:o.src,alt:"",loading:"lazy",decoding:"async",draggable:!1,style:{left:M(o.x,u),top:M(o.y,f),width:M(o.w,u),transform:`translate3d(0, ${o.intro[1]}%, 0)`}},o.key))}),e.jsx("figcaption",{className:"csm-cap",children:i.parallax.caption})]}),e.jsxs("figure",{className:"csm-fig",children:[e.jsxs("div",{className:"csm-map",style:{aspectRatio:`${s} / ${b}`},children:[e.jsx("img",{className:"csm-map-art",src:i.map.src,alt:i.map.alt,loading:"lazy",decoding:"async",draggable:!1}),i.map.pins.map(o=>e.jsx("button",{type:"button",className:"csm-pin","data-on":L===o.key?"":void 0,"aria-pressed":m===o.key,"aria-label":`${o.label} pin${o.unbuilt?", designed and never built":""}`,style:{left:M(o.x,s),top:M(o.y,b),width:M(o.w,s),height:M(o.h,b)},onMouseEnter:()=>y(o.key),onMouseLeave:()=>y(null),onFocus:()=>y(o.key),onBlur:()=>y(null),onClick:()=>T(v=>v===o.key?null:o.key),children:e.jsx("img",{className:"csm-pin-art",src:o.hover,alt:"",loading:"lazy",decoding:"async",draggable:!1})},o.key))]}),e.jsx("p",{className:"csm-readout","aria-live":"polite",children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"csm-readout-k",children:c.label}),c.note]}):e.jsx("span",{className:"csm-readout-idle",children:i.map.idle})}),e.jsx("ul",{className:"csm-pinlist",children:i.map.pins.map(o=>e.jsxs("li",{className:"csm-row",children:[e.jsx("img",{className:"csm-pinlist-art",src:o.hover,alt:`${o.label} pin, hover state`,loading:"lazy",decoding:"async"}),e.jsx("span",{className:"csm-row-d",children:o.note})]},o.key))}),e.jsx("figcaption",{className:"csm-cap",children:i.map.caption}),e.jsx("p",{className:"csm-shipped",children:i.map.shipped})]}),e.jsxs("div",{className:"csm-block",children:[e.jsx("h3",{className:"cs-eyebrow",children:"Client direction"}),e.jsx("ul",{className:"csm-rows csm-rows-q",children:i.direction.map(o=>e.jsxs("li",{className:"csm-row csm-row-q",children:[e.jsx("blockquote",{className:"csm-q",children:o.quote}),e.jsxs("p",{className:"csm-attr",children:[o.author,e.jsx("span",{className:"csm-attr-date",children:o.date})]}),e.jsx("p",{className:"csm-out",children:o.outcome})]},o.quote))}),e.jsx("p",{className:"csm-foot",children:i.directionNote}),e.jsx("ul",{className:"csm-rows csm-rows-h",children:i.handoff.map(o=>e.jsxs("li",{className:"csm-row csm-row-h",children:[e.jsx("span",{className:"csm-hnote",children:o.note}),e.jsx("span",{className:"csm-row-d",children:o.detail})]},o.note))})]})]}),e.jsx("style",{children:`
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
          /* The teal the layers were drawn against, top to bottom. */
          background: linear-gradient(180deg, #01c4b4 0%, #6cd7cf 100%);
        }
        .csm-layer {
          position: absolute;
          display: block;
          height: auto;
          transform: translate3d(0, 0, 0);
          will-change: transform;
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
      `})]})}const _e=48;function Ve({items:i,index:n,accent:p,onIndex:j,onClose:z}){const r=S.useRef(null),y=S.useRef(null),m=i[n],T=S.useCallback(c=>{i.length<2||j((n+c+i.length)%i.length)},[n,i.length,j]);if(S.useEffect(()=>{const c=w=>{w.key==="Escape"?(w.preventDefault(),w.stopPropagation(),z()):w.key==="ArrowRight"?T(1):w.key==="ArrowLeft"&&T(-1)};return window.addEventListener("keydown",c,!0),()=>window.removeEventListener("keydown",c,!0)},[T,z]),S.useEffect(()=>{const c=window.__lenis,w=c?.isStopped===!0;w||c?.stop?.();const a=document.documentElement,u=a.style.overflow,f=document.body.style.overflow;a.style.overflow="hidden",document.body.style.overflow="hidden";const s=document.querySelector(".cso-scroll"),b=s?.style.overflowY??null;return s&&(s.style.overflowY="hidden"),()=>{a.style.overflow=u,document.body.style.overflow=f,s&&(s.style.overflowY=b??""),w||c?.start?.()}},[]),S.useEffect(()=>{const c=document.activeElement;return r.current?.focus(),()=>c?.focus?.()},[]),!m)return null;const L=e.jsxs("div",{className:"csl",role:"dialog","aria-modal":"true","aria-label":`${m.alt}${i.length>1?`, image ${n+1} of ${i.length}`:""}`,style:{"--csl-accent":p},"data-lenis-prevent":!0,onClick:z,onTouchStart:c=>{const w=c.touches[0];y.current={x:w.clientX,y:w.clientY}},onTouchEnd:c=>{const w=y.current;if(y.current=null,!w)return;const a=c.changedTouches[0],u=a.clientX-w.x,f=a.clientY-w.y;Math.abs(u)>_e&&Math.abs(u)>Math.abs(f)*1.5&&T(u<0?1:-1)},children:[e.jsx("button",{ref:r,className:"csl-x",onClick:z,"aria-label":"Close image",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:e.jsx("path",{d:"M5 5l14 14M19 5L5 19"})})}),i.length>1&&e.jsxs("span",{className:"csl-count","aria-hidden":"true",children:[String(n+1).padStart(2,"0")," / ",String(i.length).padStart(2,"0")]}),i.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"csl-nav csl-prev","aria-label":"Previous image",onClick:c=>{c.stopPropagation(),T(-1)},children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M15 5l-7 7 7 7"})})}),e.jsx("button",{className:"csl-nav csl-next","aria-label":"Next image",onClick:c=>{c.stopPropagation(),T(1)},children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M9 5l7 7-7 7"})})})]}),e.jsxs("figure",{className:"csl-fig",onClick:c=>c.stopPropagation(),children:[e.jsx("img",{className:"csl-img",src:m.src,alt:m.alt,decoding:"async"},m.src),e.jsx("figcaption",{className:"csl-cap",children:m.caption??m.alt})]}),e.jsx("style",{children:`
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
      `})]});return He.createPortal(L,document.body)}const Xe=i=>{const n=[];let p=[];for(const j of i)j.kind==="tile"?p.push(j):(p.length&&n.push({type:"grid",tiles:p}),p=[],n.push({type:"divider",divider:j}));return p.length&&n.push({type:"grid",tiles:p}),n},Ke=i=>{const n=i.col>=3?2:1,p=i.rowM??Math.max(2,Math.round(i.row*.75));return{"--c":i.col,"--r":i.row,"--cm":n,"--rm":p,...i.pos?{"--pos":i.pos}:{}}},Ue=i=>["cs-tile",`cs-tile-${i.tile??"plain"}`,`cs-pad-${i.pad??"std"}`,i.fit==="cover"?"cs-fit-cover":"cs-fit-contain"].join(" ");function Ze({gallery:i,accent:n,glow:p,resetKey:j,eyebrow:z="The Work",standalone:r=!1}){const[y,m]=S.useState(null);S.useEffect(()=>m(null),[j]);const T=Xe(i),L=i.map(a=>a.kind==="tile"?{src:a.src,alt:a.alt,caption:a.caption}:{src:a.src,alt:a.alt}),c=new Map(L.map((a,u)=>[a.src,u])),w=r?{"--cs-accent":n,"--cs-glow":p??"transparent"}:void 0;return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"cs-gallery","aria-label":"Project gallery",style:w,children:[z&&e.jsx("div",{className:"cs-section-head",children:e.jsx("p",{className:"cs-eyebrow",children:z})}),T.map((a,u)=>a.type==="grid"?e.jsx("div",{className:"cs-grid",children:a.tiles.map(f=>e.jsxs("figure",{className:Ue(f),style:Ke(f),children:[e.jsx("button",{type:"button",className:"cs-tile-open",onClick:()=>m(c.get(f.src)??0),children:e.jsx("img",{src:f.src,alt:f.alt,loading:"lazy",decoding:"async"})}),f.caption&&e.jsx("figcaption",{className:"cs-cap",children:f.caption})]},f.src))},u):e.jsx("div",{className:"cs-band",children:e.jsx("button",{type:"button",className:"cs-tile-open",onClick:()=>m(c.get(a.divider.src)??0),children:e.jsx("img",{src:a.divider.src,alt:a.divider.alt,loading:"lazy",decoding:"async"})})},u))]}),y!==null&&e.jsx(Ve,{items:L,index:y,accent:n,onIndex:m,onClose:()=>m(null)}),e.jsx("style",{children:`
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
      `})]})}const t=(i,n)=>`/portfolio/${i}/hi/${n}`,Je={"Holistic Industries":{src:"/brand-logo/holistic-industries.png",alt:"Holistic Industries"}},V=[{slug:"garcia-case",href:"/work/garcia",index:"01",name:"Garcia HandPicked",client:"Holistic Industries",categories:["Packaging","Flower","Edibles","Pre-Rolls","Tour Packs"],position:"Jerry Garcia, officially licensed. The packaging plays like a sixties poster.",blurb:"The Jerry Garcia estate licensed his name, portrait, signature, and handprint to Holistic Industries. The hard part was the shelf: every pack carries mandatory compliance copy, and the range spans a 14g flower pouch, edible tins, and collector Tour Packs. The idea: let the artwork carry the brand and let the type carry the law. Fluid rainbow liquid-marble runs across every format, strain color-coding tells variants apart, and Swiss-style type holds every required word.",deliverables:["Full packaging, all flower weights","Edible tins","Pre-roll boxes","Deluxe tour & Roadie packs","Retail display signage","Logo lockups","Marketing collateral & merch","Brand guide"],visualIdentity:"Psychedelic posters ran saturated color on dark grounds, so the packs do the same: liquid-marble rainbows, red through purple, on near-black. The marble reads as the brand, the strain color as the variant, the Swiss type as the fine print, and Garcia’s signature marks each pack as licensed.",logo:{src:"/brand-logo/ghp-knockout.png",alt:"Garcia HandPicked",scale:1.9},cover:{src:"/portfolio/garcia/garcia-brand-cover.webp",alt:"Garcia HandPicked brand cover: a single polaroid of strain-coded jars, a pouch and a loaded rolling tray on a patterned cloth, taped over the liquid-marble artwork under the green hand-print pick"},heroArt:{src:"/portfolio/garcia/garcia-hero-art.webp",alt:"Garcia HandPicked hero collage: the marbled 14g flower pouch, an Orange Sunshine pre-roll tin, a Double Doobie tube and a sun-grown flower jar among cannabis leaves, under the black hand print and the green hand-print guitar pick",canvas:[1920,1080],layers:[{key:"leaf-low",x:1222,y:766,w:229,m:[8,.6,-22,-30,5]},{key:"pick",x:1460,y:676,w:132,m:[6,1.8,24,-28,8]},{key:"leaf-high",x:1493,y:0,w:427,m:[9,.3,8,-22,-2]},{key:"handprint",x:931,y:45,w:211,m:[7,1.2,-26,34,6]},{key:"pouch",x:1081,y:62,w:394,m:[9.5,.9,26,34,-3]},{key:"tin",x:1415,y:255,w:452,m:[8.5,1.5,-24,30,4]},{key:"doobie",x:856,y:284,w:354,m:[10,0,18,-32,2]},{key:"jar",x:1564,y:723,w:356,m:[7.5,2.1,-12,-28,-2.5]}]},palette:{bg:"#080608",accent:"#b6ff2e",accentText:"#0a0a0a",glow:"rgba(182,255,46,0.30)"},pageBg:{src:"/portfolio/garcia/ghp-marble-pattern.webp",opacity:.5,filter:"saturate(1.15)",drift:!0,bleed:12,scrim:"radial-gradient(120% 90% at 50% 10%, rgba(8,6,8,0) 30%, rgba(8,6,8,0.85) 100%), linear-gradient(180deg, rgba(8,6,8,0.35) 0%, rgba(8,6,8,0.1) 45%, rgba(8,6,8,0.55) 100%)"},stage:{type:"model",url:"/models/work/garcia-preroll-box.glb",poster:"/portfolio/garcia/ghp-preroll-carton-3d.webp",posterAlt:"Garcia HandPicked 5-pack pre-roll carton, front panel",orient:[0,Math.PI/2,-Math.PI/2],yaw:Math.PI,note:"The 5-pack carton. Turn it over: the back panel is bare stock, by design."},gallery:[{kind:"tile",src:t("garcia","ghp-ca-5-pack-pre-roll-1.webp"),alt:"Garcia HandPicked 5-pack pre-roll tin, angled: marble lid over Jerry portrait",col:4,row:5,caption:"The 5-pack tin: the one angle that breaks formation."},{kind:"tile",src:t("garcia","ghp-ca-flower-jar.webp"),alt:"Garcia HandPicked flower jar with liquid-marble label",col:2,row:5,pad:"std"},{kind:"divider",src:t("garcia","gummy-tin-art.webp"),alt:"Garcia HandPicked liquid-marble rainbow artwork, full bleed"},{kind:"tile",src:t("garcia","ghp-md-flowerbag-28g-front-and-back.webp"),alt:"Garcia HandPicked 28G pouch, front and back: art side and compliance side",col:6,row:4,pad:"roomy",caption:"Front and back: the art carries, the Swiss type complies."},{kind:"tile",src:t("garcia","ghp-flower-1.webp"),alt:"Garcia HandPicked flower jar with strain hang tag",col:3,row:4},{kind:"tile",src:t("garcia","ghp-ca-5-pack-pre-roll-front.webp"),alt:"Garcia HandPicked pre-roll tin face-on: concert-poster front",col:3,row:4,tile:"tint",caption:"Face-on, it reads like a gig poster."},{kind:"tile",src:t("garcia","ghp-ca-double-doobie-2pck-03.webp"),alt:"Garcia HandPicked double doobie tube",col:2,row:5,pad:"roomy",caption:"Double doobie."},{kind:"tile",src:t("garcia","ghp-mi-flowerbag-3-5g-front.webp"),alt:"Garcia HandPicked 3.5G flower pouch",col:2,row:3},{kind:"tile",src:t("garcia","ghp-merch-guitar-pick.webp"),alt:"Garcia HandPicked guitar-pick handprint mark, black and white",col:2,row:2,tile:"bright",caption:"The handprint, reduced to a pick."},{kind:"tile",src:t("garcia","ghp-tourpack-pa-rainbow-7g-hybrid-v2.webp"),alt:"Garcia HandPicked rainbow tour pack, 7G hybrid",col:4,row:3,caption:"The tour pack: the collector piece."},{kind:"tile",src:t("garcia","ghp-merch-hat.webp"),alt:"Garcia HandPicked embroidered hat, studio shot",col:3,row:3,tile:"framed",fit:"contain"},{kind:"tile",src:t("garcia","ghp-hat-design.webp"),alt:"Garcia HandPicked green cap with marble bill",col:3,row:3,caption:"Merch wears the marble too."}],seo:{title:"Garcia HandPicked: Case Study · Zegoe",description:"Garcia HandPicked packaging by Zegoe: Jerry Garcia-licensed psychedelic liquid-marble artwork across flower, edibles, pre-rolls and collector tour packs."},next:"dodrops-case"},{slug:"dodrops-case",href:"/work/dodrops",index:"02",name:"DO Drops",client:"Holistic Industries",categories:["Brand Identity","Packaging","Edibles","Retail Display","Campaign"],position:"Designed around how you want to feel.",blurb:"DO Drops sells six effects before it sells six flavors. Focus, Sleep, Relax, Relief, Energy and Mild each carry a cannabinoid ratio on the front of the pouch and a color that travels from the pack to the counter display. The system runs on two layers: a flat pouch color a shopper can find from across the room, and a gradient aura field of cloud, glow and diffusion that gives the same color an atmosphere in campaign work. A Maryland Pride edition made with Transgender Law Center took the system into a limited Starfruit run.",deliverables:["Brand identity","Packaging, six-formula gummy line","Aura color system","Effect & ratio nomenclature","Campaign key art","Counter display concepts","Pride limited edition, Starfruit","Brand merchandise"],visualIdentity:"Aura photography is the reference: gradient fields, glow, diffusion and chakra-style color. Each formula owns one hue and wears it twice, as a flat pouch color for shelf recognition and as a cloud field around the pack for campaign work. The wordmark stays white and geometric through all six worlds, the cannabinoid ratio sets in the same place on every front, and the gummy itself does duty as the color marker in navigation and display.",logo:{src:"/brand-logo/dodrops-lockup.png",alt:"DO Drops",scale:1.9},cover:{src:t("dodrops","dodrops-effect-focus-watermelon.webp"),alt:"DO Drops Focus pouch, watermelon, floating in a magenta cloud field with the 1:1:1 CBG:THC:THCV ratio on the front"},palette:{bg:"#0b0714",accent:"#ff0d6c",accentText:"#0a0a0a",glow:"rgba(255,13,108,0.30)"},nextArt:{src:"/portfolio/dodrops/dodrops-aura-banner-notext.webp",opacity:.12,pos:"50% 42%"},stage:{type:"poster",src:t("dodrops","dodrops-spectrum-lineup.webp"),alt:"DO Drops spectrum lineup: all six gummy pouches fanned out in effect order, from Focus magenta through Sleep violet",note:"The spectrum lineup: six effects, six flavors, one family."},gallery:[{kind:"tile",src:t("dodrops","dodrops-system-lineup-board.webp"),alt:"DO Drops lineup board: six pouches under the headings Aura Enhancing Effects, Transcendent Flavors, Balanced Cannabis Ratios",col:4,row:4,rowM:2,tile:"plate",pad:"tight",caption:"Three promises on one board: effect, flavor, ratio."},{kind:"tile",src:t("dodrops","dodrops-lifestyle-coffee-gummy.webp"),alt:"A woman holding a glass mug of coffee at a laptop, a DO Drops gummy in her other hand",col:2,row:4,rowM:2,fit:"cover",caption:"Focus, taken with the morning coffee."},{kind:"tile",src:t("dodrops","dodrops-focus-watermelon-pouch.webp"),alt:"DO Drops Focus pouch, watermelon, in a magenta cloud field",col:3,row:7,pad:"tight",caption:"Focus: watermelon, 1:1:1 CBG:THC:THCV."},{kind:"tile",src:t("dodrops","dodrops-relax-peach-pouch.webp"),alt:"DO Drops Relax pouch, peach, in an orange cloud field",col:3,row:7,pad:"tight",caption:"Relax: peach, 1:1 CBD:THC."},{kind:"tile",src:t("dodrops","dodrops-effect-sleep-slumberberry.webp"),alt:"DO Drops Sleep pouch, slumberberry, in a violet cloud field",col:2,row:5,rowM:3,pad:"tight"},{kind:"tile",src:t("dodrops","dodrops-effect-energy-lemon-citrus.webp"),alt:"DO Drops Energy pouch, lemon citrus, in a lime cloud field",col:2,row:5,rowM:3,pad:"tight"},{kind:"tile",src:t("dodrops","dodrops-effect-relief-pineapple-ginger.webp"),alt:"DO Drops Relief pouch, pineapple ginger, in a golden cloud field",col:2,row:5,rowM:3,pad:"tight",caption:"Relief runs the warmest field in the set."},{kind:"tile",src:t("dodrops","dodrops-effect-mild-melon.webp"),alt:"DO Drops Mild pouch, melon, in a green cloud field",col:2,row:5,rowM:3,pad:"tight"},{kind:"tile",src:t("dodrops","dodrops-focus-detail-gummy.webp"),alt:"A hand holding a sugared DO Drops gummy over the magenta Focus pouch",col:4,row:5,rowM:3,fit:"cover",caption:"The gummy doubles as the color marker, so it gets the close-up."},{kind:"divider",src:t("dodrops","dodrops-tarot-melon-lifestyle.webp"),alt:"Hands holding tarot cards beside the DO Drops Mild melon pouch on a wooden table"},{kind:"tile",src:t("dodrops","dodrops-system-aura-navigation.webp"),alt:"DO Drops aura navigation board: effect dots, flavor and ratio table, and the six pouch colors as shelf markers",col:4,row:4,rowM:2,tile:"plate",pad:"tight",caption:"Mood first, flavor second: how the shelf is meant to be read."},{kind:"tile",src:t("dodrops","dodrops-effect-pride-starfruit.webp"),alt:"Two white DO Drops Pride starfruit pouches on a rainbow ground, marked as supporting Transgender Law Center",col:2,row:4,rowM:2,pad:"tight"}],microsite:{href:"/work/dodrops-site/",label:"DO Drops Microsite"},seo:{title:"DO Drops: Case Study · Zegoe",description:"DO Drops brand identity and packaging by Zegoe for Holistic Industries: an effect-led gummy line where six formulas each carry a cannabinoid ratio, a flavor and an aura color world, from pouch to counter display to a Pride edition with Transgender Law Center."},next:"hellavated-case"},{slug:"hellavated-case",href:"/work/hellavated",index:"03",name:"Hellavated",client:"Holistic Industries",categories:["Packaging","Edibles","Devices","Beverages"],position:"Gen-Z edibles branding, volume all the way up.",blurb:"Hellavated pairs fruit-illustration-heavy hero panels with a black technical compliance side, a two-tone system spanning 18+ gummy flavors and the CloudBar device line, balancing playful energy with dispensary-legible rigor.",deliverables:["1-pack gummy bags, 18+ flavors","Variety packs","CloudBar device packaging","Baja beverage & concentrate line","Wholesale bags","Compliance label systems","Retail mockups","Brand specs"],visualIdentity:"Bold and youth-forward: a fruit-illustration hero side against a black technical compliance side. The wordmark carries a cannabis-leaf icon; all-caps sans taglines keep it loud but dispensary-legible.",logo:{src:"/brand-logo/hellavated.png",alt:"Hellavated"},storyMark:{src:t("hellavated","hellavated-logo-07.webp"),alt:"Hellavated drip-cloud logo mark"},cover:{src:"/portfolio/hellavated/hellavated-brand-cover.webp",alt:"Hellavated brand cover: a model holding a CloudBar against a deep-space field, ringed by fruit and splashes of juice, under the cloud wordmark"},palette:{bg:"#070707",accent:"#ff4fd8",accentText:"#0a0a0a",glow:"rgba(255,120,220,0.35)"},pageBg:{src:t("hellavated","hellavated-live-resin-device-revised-06-06.webp"),opacity:.34,filter:"saturate(1.15) brightness(0.72)",pos:"50% 35%",drift:!0,bleed:16,scrim:"linear-gradient(180deg, rgba(7,7,7,0.86) 0%, rgba(7,7,7,0.62) 30%, rgba(7,7,7,0.66) 70%, rgba(7,7,7,0.9) 100%)"},stage:{type:"model",url:"/models/work/hellavated.glb",poster:t("hellavated","hellavated-galaxy-device-mockup.webp"),posterAlt:"Hellavated galaxy CloudBar device pair",note:"The galaxy CloudBar. Spin the real thing."},gallery:[{kind:"tile",src:t("hellavated","hellavated-keyart-strawberry-haze.webp"),alt:"Hellavated Strawberry Haze flavor key art: watercolor strawberries",col:6,row:6,rowM:2,fit:"cover",caption:"Flavor key art: the watercolor register."},{kind:"tile",src:t("hellavated","hellavated-keyart-og-mint.webp"),alt:"Hellavated OG Mint flavor key art: watercolor mint",col:3,row:3,fit:"cover"},{kind:"tile",src:t("hellavated","hellavated-keyart-blackberry-dream.webp"),alt:"Hellavated Blackberry Dream flavor key art: watercolor blackberries",col:3,row:3,fit:"cover"},{kind:"tile",src:t("hellavated","hellavated-poster-tropicz.webp"),alt:"Hellavated retail poster: “Take a Trip to the Tropicz”",col:3,row:3,fit:"cover",caption:"Retail poster: Tropicz."},{kind:"tile",src:t("hellavated","hellavated-poster-sooner.webp"),alt:"Hellavated retail poster: “Get Hellavated Sooner”",col:3,row:3,fit:"cover"},{kind:"divider",src:t("hellavated","hellavated-doodle-pattern.webp"),alt:"Hellavated skull-and-cloud doodle pattern, full bleed"},{kind:"tile",src:t("hellavated","hellavated-cloud-bar-generic.webp"),alt:"Hellavated CloudBar generic device",col:2,row:4},{kind:"tile",src:t("hellavated","hellavated-live-resin-device-v2-graphic-side-mk-03.webp"),alt:"Hellavated Live Resin device, graphic side, v2",col:3,row:3},{kind:"tile",src:t("hellavated","hellavated-ma-hellymelts-badassle.webp"),alt:"Hellavated HellyMelts Badassle pouch: acid green",col:3,row:3,tile:"tint",caption:"Badassle: the acid-green break in the flavor set."},{kind:"tile",src:t("hellavated","hellavated-ma-hellymelts-junglejuice.webp"),alt:"Hellavated HellyMelts Jungle Juice pouch",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-live-resin-device-v1-graphic-side-mk-02.webp"),alt:"Hellavated Live Resin device, graphic side, v1",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-hellymeltz-generic-ma.webp"),alt:"Hellavated HellyMeltz generic pouch",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-live-resin-device-v1-graphic-side-mk-03-new.webp"),alt:"Hellavated Live Resin device, graphic side, mk 03",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-ma-hellymelts-blueberryyumyum.webp"),alt:"Hellavated HellyMelts Blueberry Yum Yum pouch",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-md-juicy-stickz-razberry-blitz-mockup.webp"),alt:"Hellavated Juicy Stickz pre-roll tube: Razberry Blitz",col:3,row:5,pad:"roomy",caption:"Juicy Stickz: the tall one."}],seo:{title:"Hellavated: Case Study · Zegoe",description:"Hellavated packaging ecosystem by Zegoe: a two-tone fruit-hero / black-compliance system across 18+ gummy flavors and CloudBar devices."},next:"strane-case"},{slug:"strane-case",href:"/work/strane",index:"04",name:"Strane",client:"Holistic Industries",categories:["Branding","Disposable Vapes","Cartridges","Flower"],position:"Cannabis vapes with a punk streak: street-art grit meets clean device renders.",blurb:"Strane runs a distinctly punk visual system: distressed brick textures, paint splatters and retro collage against a hard acid-yellow-and-black palette, differentiating across strains while premium 3D device renders keep it product-forward.",deliverables:["Strain-specific cartridge labels","Ripstick device mockups, pod & bottle forms","Logo & angular wordmark","Brick, splatter & graffiti texture library","Type variants","Retail display design"],visualIdentity:"Acid yellow on black. Distressed brick walls, paint splatter and collage set the street-art register; a bold angular wordmark and curated black-and-white product photography keep the devices premium and product-forward.",logo:{src:"/brand-logo/strane.png",alt:"Strane"},cover:{src:"/portfolio/strane/strane-brand-cover.webp",alt:"Strane brand cover: torn street photography of the sling bag and Silver Kush pouch, taped over an acid-yellow brick wall under the hand-drawn wordmark"},heroArt:{src:"/portfolio/strane/strane-hero-art.webp",alt:"Strane hero collage: the yellow-to-black device beside the Alien Mints cartridge pouch and Landfill Haze brick-wall pouch, with torn eye stickers, a scrawled star and the taped wordmark",canvas:[1920,1080],layers:[{key:"shadow",x:737,y:750,w:521,m:[11,0,10,0,0]},{key:"pouch-brick",x:1017,y:34,w:419,m:[9,1.2,22,34,-3.5]},{key:"scribble",x:1222,y:471,w:141,m:[5.5,.5,-28,-32,8]},{key:"stars-yellow",x:1475,y:147,w:97,m:[5,1.8,22,-32,9]},{key:"pouch-alien",x:784,y:310,w:636,m:[8.5,.8,-24,40,3]},{key:"device",x:1002,y:206,w:918,m:[10.5,0,8,-34,.6]},{key:"splat",x:686,y:537,w:129,m:[6.5,2.1,-20,26,-7]},{key:"wordmark",x:1077,y:896,w:342,m:[8,1.4,-18,-26,2.5]},{key:"wing",x:1668,y:20,w:241,m:[6,1.6,-12,30,-2.5]},{key:"eye-bottom",x:648,y:811,w:312,m:[7,.9,26,-32,5]},{key:"eye-top",x:648,y:135,w:266,m:[6.5,.3,-24,34,-5.5]}]},palette:{bg:"#0b0b06",accent:"#e5ff00",accentText:"#0a0a0a",glow:"rgba(229,255,0,0.30)"},pageBg:{src:"/portfolio/strane/strane_brick_bg_yellow.webp",tile:"760px",opacity:.12,filter:"grayscale(1) brightness(0.75) contrast(1.2)",drift:!1,bleed:10,scrim:"linear-gradient(180deg, rgba(11,11,6,0.55) 0%, rgba(11,11,6,0.28) 40%, rgba(11,11,6,0.5) 100%)"},stage:{type:"model",url:"/models/work/strane.glb",poster:t("strane","strane-ma-ripstick-1g-generic.webp"),posterAlt:"Strane Ripstick 1G disposable device render",yaw:2.4,note:"Ripstick 1G, the disposable that fronts the line."},gallery:[{kind:"tile",src:t("strane","strane-shelf-side-2.webp"),alt:"Strane shelf display side view with stocked pouches",col:3,row:4},{kind:"tile",src:t("strane","strane-mi-flower-28g-front.webp"),alt:"Strane 28g blackout mylar bag",col:3,row:4,pad:"roomy",caption:"28g blackout mylar."},{kind:"tile",src:t("strane","strane-flower-3-5g-mockup-indica-silver.webp"),alt:"Strane 3.5g flower mockup: indica, silver foil",col:2,row:3},{kind:"tile",src:t("strane","strane-ma-flower-8th-mockup.webp"),alt:"Strane Reserve eighth: the cyan colour-break in the system",col:4,row:3,tile:"tint",caption:"Reserve tier: cyan cuts the acid yellow."},{kind:"tile",src:t("strane","strane-display-4.webp"),alt:"Tall Strane counter display",col:2,row:5,pad:"std"},{kind:"tile",src:t("strane","strane-md-flower-7g-pouch.webp"),alt:"Strane 7g flower pouch, Maryland market",col:2,row:3},{kind:"tile",src:t("strane","strane-mi-flower-3-5g-front.webp"),alt:"Strane 3.5g flower front, Michigan market",col:2,row:3},{kind:"tile",src:t("strane","strane-7g-flower-ma-pa.webp"),alt:"Strane 7g flower pouches for MA and PA markets",col:4,row:3},{kind:"tile",src:t("strane","strane-ma-ripstick-1g-generic.webp"),alt:"Strane Ripstick 1G: generic device",col:3,row:4,pad:"roomy"},{kind:"tile",src:t("strane","strane-ma-ripstick-1g-grape-gg.webp"),alt:"Strane Ripstick 1G: Grape GG strain",col:3,row:4,pad:"roomy",caption:"Ripstick, generic and strain-dressed."}],seo:{title:"Strane: Case Study · Zegoe",description:"Strane brand system by Zegoe: punk street-art identity for cannabis vapes: acid yellow on black, distressed brick, paint splatter and premium 3D device renders."},next:"avitas"},{slug:"avitas",index:"05",name:"AVITAS",client:"Holistic Industries",categories:["Branding","Vape Cartridges","Gummies"],position:"Illustrated landscapes carry the identity, one scene per tier.",blurb:"AVITAS is a full identity system where each product tier owns an illustrated landscape (mountains, ocean, botanicals) in a turquoise-to-navy palette with gold accents, anchored by a distinctive geometric “A” mark for clean, premium shelf presence across Live Resin and Ultra lines.",deliverables:["Cartridge & edible label system","High-res product renders","Logo mark system","Brand graphics & illustration","Pre-roll & AIO packaging"],visualIdentity:"Turquoise into deep navy, with gold accents. Each tier owns an illustrated landscape, whether mountains, ocean or botanicals, set in a clean sans-serif with a playful script for line names. The geometric “A” mark holds the whole system together.",logo:{src:"/brand-logo/avitas-trim.png",alt:"AVITAS",scale:1.7},cover:{src:"/portfolio/avitas/avitas-brand-cover.webp",alt:"AVITAS brand cover: three Live Resin cartridge packs (sativa, indica, hybrid) standing on weathered driftwood under the mountain logo"},heroArt:{src:"/portfolio/avitas/avitas-hero-art.webp",alt:"AVITAS hero collage: the Kimbo Kush vape pouch on its wood-grain print, a Live Resin all-in-one carton, an Ultra sativa carton and the mint all-in-one device",canvas:[1920,1080],layers:[{key:"pouch",x:1071,y:23,w:528,m:[10,0,22,32,-2.5]},{key:"carton-lr",x:788,y:438,w:317,m:[8.5,1.1,-24,-34,4]},{key:"carton-ul",x:1608,y:116,w:295,m:[9,.5,-26,30,-3]},{key:"device",x:1530,y:712,w:252,m:[6.5,1.7,20,-30,6]}]},palette:{bg:"#04141c",accent:"#e8c87a",accentText:"#0a0a0a",glow:"rgba(64,200,210,0.30)"},pageBg:{src:"/portfolio/avitas/avitas-wood-pattern.webp",opacity:.16,filter:"brightness(0.8)",drift:!0,bleed:12,scrim:"linear-gradient(180deg, rgba(4,20,28,0.8) 0%, rgba(4,20,28,0.3) 55%, rgba(4,20,28,0.9) 100%)"},stage:{type:"model",url:"/models/work/avitas.glb",poster:t("avitas","avitas-live-resin-aio-agnostic.webp"),posterAlt:"AVITAS Live Resin all-in-one device render",note:"The Live Resin all-in-one: landscape wrapped around the device."},mapShowcase:{eyebrow:"The Map",note:"Wayfinding for avitasgrown.com",lede:"AVITAS wanted a site you navigate the way you read a trail map. Zegoe drew Oregon as one illustration, made every pin, signpost and board a component with its own hover state, and wrote the motion into the handoff. A separate vendor built it in WordPress.",parallax:{canvas:[1920,1080],layers:[{key:"sky",src:"/portfolio/avitas/map/avitas-map-parallax-sky.webp",x:0,y:101,w:1920,intro:[50,-69.1],scrollTo:10,dur:.8,delay:.5,scrub:.5},{key:"sun",src:"/portfolio/avitas/map/avitas-map-parallax-sun.webp",x:1332,y:173,w:140,intro:[100,0],scrollTo:50,dur:.5,delay:1,scrub:0},{key:"mountain",src:"/portfolio/avitas/map/avitas-map-parallax-mountain.webp",x:0,y:661,w:1920,intro:[0,-60.5],scrollTo:0,dur:.8,delay:.5,scrub:.5},{key:"land",src:"/portfolio/avitas/map/avitas-map-parallax-land.webp",x:0,y:-111,w:1920,intro:[50,0],dur:.8,delay:.5}],caption:"The four hero layers from Figma, running the intro and scroll values the built site uses. Scroll the page to drive it."},map:{src:"/portfolio/avitas/map/avitas-map-full.webp",alt:"The AVITAS wayfinding map: an illustrated Oregon with a coastline, mountains, forest, a campsite and a farm, marked with Products, Events, Budtender and Blazing Trails pins beside a wooden Points of Interest board",canvas:[2400,1250],pins:[{key:"products",label:"Products",x:1070,y:450,w:172,h:103,hover:"/portfolio/avitas/map/avitas-map-pin-products-hover.webp",note:"Opens the product range. The backpack above it was asked for by name."},{key:"events",label:"Events",x:1847,y:648,w:159,h:106,hover:"/portfolio/avitas/map/avitas-map-pin-events-hover.webp",note:"Opens the events calendar. The two balloons beside it drift on move-circle."},{key:"budtender",label:"Budtender",x:1093,y:878,w:221,h:102,hover:"/portfolio/avitas/map/avitas-map-pin-budtender-hover.webp",note:"Drawn for a budtender portal, renamed from Basecamp, and never built.",unbuilt:!0},{key:"blazing-trails",label:"Blazing Trails",x:2103,y:214,w:241,h:104,hover:"/portfolio/avitas/map/avitas-map-pin-blazing-trails-hover.webp",note:"Opens the about page, named for the line the hero carries: Blazing Trails Since 2014."}],caption:"The AVITAS MAP frame as delivered, with all four pins. The turquoise state is each pin’s own hover variant from Figma.",shipped:"Four pins were designed and three of them are live on avitasgrown.com: Products, Events and Blazing Trails. Budtender was drawn as a complete component set with both states and listed on the Points of Interest board. The built site carries Budtender as a header link to a login page.",idle:"Hover or focus a pin to see the state Zegoe drew for it."},direction:[{quote:"the only mountain/landmarks we want to show are the ones from the packaging. remove extra mountains. Have AVITAS packaging renderings pop on to the map.",author:"Anna Spelleri",date:"20 Nov 2024",outcome:"The three signposts on the delivered map name Mt. Hood, Haystack and Three Sisters."},{quote:"replace all other website landmarks with icons that represent the category, ie base camp = a camp",author:"Anna Spelleri",date:"20 Nov 2024",outcome:"The Budtender pin stands over a camp, with tents and a fire."},{quote:'Chi - update to "basecamp" to "budtender"',author:"Anna Spelleri",date:"20 Nov 2024",outcome:"Basecamp became Budtender on the pin and on the Points of Interest board."},{quote:"add an animated fire with our little dude sitting and roasting a marshmallow",author:"Jamie Gouger",date:"4 Dec 2024",outcome:"He sits by the fire beside the Budtender camp."},{quote:'move "products" down a bit and add a backpack icon to represent the products section.',author:"Jamie Gouger",date:"4 Dec 2024",outcome:"The Products pin moved down the coast range and picked up a backpack."},{quote:"remove whales",author:"Jamie Gouger",date:"4 Dec 2024",outcome:"The delivered map has open water and no whales."}],directionNote:"Direction arrived as comments on the Figma frames through November and December 2024. The quotes are as written.",handoff:[{note:"PLEASE DO PARALLAX SCROLL FOR HERO SECTION",detail:"A text layer on the canvas, beside the home page frame."},{note:"NO HOVER STATE ONLY POP-UP on CLICK",detail:"A text layer between the store locator and cultivar frames. It replaced an earlier note that asked for a hover state."}]},gallery:[{kind:"tile",src:t("avitas","avitas-live-resin-hybrid-mockup.webp"),alt:"AVITAS Live Resin hybrid pack with amber cartridge",col:4,row:4,tile:"plate",caption:"Live Resin: pack and amber cartridge."},{kind:"tile",src:t("avitas","avitas-live-resin-aio-agnostic-front-hybrid-strain.webp"),alt:"AVITAS Live Resin AIO front, hybrid strain",col:2,row:4,tile:"plate"},{kind:"tile",src:t("avitas","avitas-live-resin-vapebox-2024.webp"),alt:"AVITAS Live Resin vape box: mountain landscape tier",col:3,row:3},{kind:"tile",src:t("avitas","avitas-ultra-vapebox-2024.webp"),alt:"AVITAS Ultra vape box: ocean landscape tier",col:3,row:3,caption:"Live Resin and Ultra: each tier owns a landscape."},{kind:"tile",src:t("avitas","avitas-pre-roll-10pck-base-template.webp"),alt:"AVITAS pre-roll 10-pack base template",col:2,row:3,tile:"plate"},{kind:"tile",src:t("avitas","avitas-pre-roll-10pck-mockup.webp"),alt:"AVITAS pre-roll 10-pack mockup",col:2,row:3,tile:"plate"},{kind:"tile",src:t("avitas","avitas-wa-1g-aio-template.webp"),alt:"AVITAS Washington 1g AIO template",col:2,row:3,tile:"plate"},{kind:"tile",src:t("avitas","avitas-live-resin-aio-agnostic.webp"),alt:"AVITAS Live Resin AIO device",col:2,row:3},{kind:"tile",src:t("avitas","avitas-prerolls-10pack.webp"),alt:"AVITAS pre-rolls 10-pack render",col:2,row:3},{kind:"tile",src:t("avitas","avitas-live-resin-cartridge-front.webp"),alt:"AVITAS Live Resin Kimbo Kush pack with cartridge window",col:6,row:4,pad:"roomy",caption:"Kimbo Kush: strain-dressed, single origin."}],seo:{title:"AVITAS: Case Study · Zegoe",description:"AVITAS identity system by Zegoe: illustrated landscape tiers in turquoise-to-navy with gold, a geometric “A” mark, and premium packaging across Live Resin and Ultra lines."},next:"lootbar"},{slug:"lootbar",index:"06",name:"Lootbar",client:"LightHouse",categories:["Packaging","Disposable Vapes","Key Art","Flavor System"],position:"A vaporwave disposable-vape brand that turns every flavor into a loot drop.",blurb:"Lootbar literalizes its name: every flavor is staged as an open treasure chest, fruit spilling out and the device floating beside it as the prize, inside one neon HUD frame that recolors across 11 flavor key-arts. Deep-navy grounds, chrome flavor lettering, pixel hearts and arcade checkerboards keep the Y2K gaming nostalgia consistent from Peachy Ringz to Marion Berry Pie.",deliverables:["Packaging design, stand-up pouches","Flavor key-art system, 11 variants","Device mockups","Campaign key visual","3D flavor lettering","Promo materials"],visualIdentity:"Near-black grounds under neon cyan, magenta and acid yellow: vaporwave meets arcade. One constant armature (wordmark, HUD bracket frame, treasure chest, floating device, checkerboard floor) recolors per flavor; only the chrome flavor lettering changes character. Cyan holds the system together; the fruit brings the saturation.",logo:{src:"/brand-logo/loot-bar.png",alt:"Lootbar"},cover:{src:t("lootbar","lootbar-blueberry-dream.webp"),alt:"Lootbar Blueberry Dream key art: a blueberry-filled treasure chest and the device inside the cyan neon HUD frame, chrome flavor lettering below",mat:!0},heroArt:{src:"/portfolio/lootbar/lootbar-hero-art.webp",alt:"Lootbar hero collage: the device with Yuzu Sherbet and Marion Berry Pie pouches on a cyan paint splash, peaches, blackberries and a pixel heart floating around it",canvas:[1920,1080],layers:[{key:"shadow",x:737,y:750,w:521,m:[11,0,10,0,0]},{key:"pie",x:1618,y:608,w:302,m:[9,1.9,6,-36,1.6]},{key:"sparks-sm",x:333,y:17,w:1499,twinkle:[7,0]},{key:"lemon",x:1654,y:836,w:183,m:[8,.3,-30,-34,-5]},{key:"pouch-yuzu",x:1149,y:82,w:280,m:[9.5,1.6,30,40,-4]},{key:"pouch-marion",x:877,y:327,w:429,m:[8.5,.8,-26,44,3.5]},{key:"glow",x:1041,y:0,w:879,blend:"screen"},{key:"device",x:1002,y:239,w:901,m:[10.5,0,-14,-38,.8]},{key:"sparks-lg",x:54,y:59,w:1786,twinkle:[9,1.5]},{key:"heart",x:1651,y:71,w:168,m:[5.5,.2,-24,-40,6]},{key:"peach-slice",x:823,y:816,w:181,m:[7,1.1,26,-34,5.5]},{key:"berry-right",x:1738,y:337,w:157,m:[6.5,1.4,-30,-32,-6]},{key:"berry-left",x:906,y:224,w:157,m:[6,.6,-32,38,6.5]},{key:"peaches",x:1115,y:790,w:312,m:[7.5,.4,-20,-30,-2.6]}]},palette:{bg:"#02040e",accent:"#00e0f0",accentText:"#0a0a0a",glow:"rgba(0,224,240,0.30)"},pageBg:{src:"/portfolio/lootbar/lootbar-bg.webp",opacity:.26,filter:"saturate(1.25) brightness(0.72)",pos:"50% 50%",drift:!0,bleed:12,scrim:"linear-gradient(180deg, rgba(2,4,14,0.9) 0%, rgba(2,4,14,0.7) 42%, rgba(2,4,14,0.66) 68%, rgba(2,4,14,0.92) 100%)"},stage:{type:"poster",src:t("lootbar","lootbar-website-hero.webp"),alt:"Lootbar campaign key visual: Peachy Ringz, Marion Berry Pie and Yuzu Sherbet pouches with the device, under “Bomb Flavors + Max Potency”",note:"The campaign key visual: three flavors staged, device as the prize."},gallery:[{kind:"tile",src:t("lootbar","lootbar-marion-berry-pie.webp"),alt:"Lootbar Marion Berry Pie key art: magenta HUD frame, blackberry-filled chest, chrome lettering",col:4,row:8,rowM:5,pad:"tight",caption:"The purest vaporwave frame in the set."},{kind:"tile",src:t("lootbar","lootbar-strawberry-lemonaid.webp"),alt:"Lootbar Strawberry Lemonaid key art: pink HUD frame, strawberries and lemon",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:t("lootbar","lootbar-lime-sorbet.webp"),alt:"Lootbar Lime Sorbet key art: acid-green HUD frame and limes",col:2,row:4,pad:"tight",caption:"Acid green: the palette break."},{kind:"divider",src:t("lootbar","lootbar-blueberry-dream.webp"),alt:"Lootbar Blueberry Dream key art: the cyan core-brand HUD frame, full bleed"},{kind:"tile",src:t("lootbar","lootbar-hawaiian-shaved-ice.webp"),alt:"Lootbar Hawaiian Shaved Ice key art: hibiscus, pineapple and shaved ice",col:3,row:6,pad:"tight",caption:"The one that breaks the two-color rule."},{kind:"tile",src:t("lootbar","lootbar-peachy-ringz.webp"),alt:"Lootbar Peachy Ringz key art: peaches, pixel hearts and Y2K chrome lettering",col:3,row:6,pad:"tight",caption:"Y2K, fully literal, pixel hearts included."},{kind:"tile",src:t("lootbar","lootbar-bomb-blaster.webp"),alt:"Lootbar Bomb Blaster key art: mixed berries and a lit cartoon bomb",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:t("lootbar","lootbar-ruby-red.webp"),alt:"Lootbar Ruby Red key art: blood orange and grapefruit under a red HUD frame",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:t("lootbar","lootbar-mango-mana.webp"),alt:"Lootbar Mango Mana key art: mango and yellow HUD frame",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:t("lootbar","lootbar-tiger-blood.webp"),alt:"Lootbar Tiger Blood key art: pineapple, cherry and coconut with clawed lettering",col:3,row:6,pad:"tight",caption:"Same armature, new character: the type does the shapeshifting."},{kind:"tile",src:t("lootbar","lootbar-yuzu-sherbet.webp"),alt:"Lootbar Yuzu Sherbet key art: yuzu citrus under a yellow HUD frame",col:3,row:6,pad:"tight"}],seo:{title:"Lootbar: Case Study · Zegoe",description:"Lootbar packaging and flavor key-art by Zegoe for LightHouse: a vaporwave loot-drop system of treasure chests, neon HUD frames and Y2K chrome lettering across 11 disposable-vape flavors."},next:"better"},{slug:"better",index:"07",name:"BETTER",categories:["Packaging","Cartridges","Gummies","Brand System"],position:"An occasion-based cannabis system that colors by time of day: Days, Sleep, Anytime.",blurb:"BETTER splits the day into three occasions and gives each its own script wordmark, illustrated landscape and palette: Days runs sunset orange into green (Sunshine Tangerine, on green tea extract, B12 and an uplifting terpene blend), Sleep runs midnight navy and berry (Midnight Mixed Berry, on lemon balm and L-theanine), Anytime runs lavender and lemon (Easy Lemon Lavender, on L-theanine and a harmonious terpene blend). The system carries from blister-carded cartridges to gummy pouches, each flavor pairing a THC/CBD ratio with a mood.",deliverables:["Occasion wordmark lockups, Days / Sleep / Anytime","Cartridge blister cards","Gummy pouch system","Color palette & inspiration boards","Illustrated landscape key art","Shipping carton"],visualIdentity:"A clean sky-blue master brand that fans out into occasion palettes: sunset orange-to-green for Days, midnight navy for Sleep, lavender-and-lemon for Anytime. Script sub-wordmarks name the occasion under the bold BETTER sans; illustrated landscapes carry each flavor's mood, and the supplement callouts stay in plain type.",logo:{src:"/brand-logo/better-hero.png",alt:"BETTER",scale:.62},palette:{bg:"#15060f",accent:"#ff4fa3",accentText:"#0a0a0a",glow:"rgba(255,79,163,0.32)"},pageBg:{src:"/portfolio/better/better-pattern-pink.webp",tile:"420px",opacity:.17,filter:"saturate(0.9) brightness(0.62)",drift:!1,bleed:10,scrim:"linear-gradient(180deg, rgba(21,6,15,0.62) 0%, rgba(21,6,15,0.26) 45%, rgba(21,6,15,0.72) 100%)"},stage:{type:"poster",src:t("better","better-pink-picasso-hero.webp"),alt:"BETTER Pink Picasso blister card: cartridge in a pink-and-white card on a pink podium, gold ring behind",note:"Pink Picasso: the blister card, staged."},gallery:[{kind:"tile",src:t("better","better-shipping-carton.jpg"),alt:"BETTER shipping carton: blue printed box with the wordmark",col:6,row:6,rowM:2,fit:"cover",caption:"The carton: the brand at its bluntest."},{kind:"tile",src:t("better","better-its-just-better-card.jpg"),alt:"“It’s Just BETTER” insert card",col:3,row:3,fit:"cover"},{kind:"tile",src:t("better","better-blister-front-back.jpg"),alt:"BETTER blister card, front and back",col:3,row:3,tile:"plate",fit:"cover"},{kind:"tile",src:t("better","better-days-pouches.webp"),alt:"BETTER Days gummy pouches: Sunshine Tangerine",col:6,row:6,rowM:2,fit:"cover",caption:"Days: Sunshine Tangerine."},{kind:"tile",src:t("better","better-sleep-pouch-gummies.webp"),alt:"BETTER Sleep gummy pouch with gummies: Midnight Mixed Berry",col:3,row:3,fit:"cover"},{kind:"tile",src:t("better","better-anytime-pouches.webp"),alt:"BETTER Anytime gummy pouches: Easy Lemon Lavender",col:3,row:3,fit:"cover",caption:"Sleep and Anytime own the night shift."},{kind:"tile",src:t("better","better-days-board.webp"),alt:"BETTER Days palette board: Sunshine Tangerine palette, supplements, mood and dose",col:6,row:6,rowM:2,tile:"plate",fit:"cover",caption:"The system, specced: palette, supplements, mood, dose."},{kind:"tile",src:t("better","better-sleep-board.webp"),alt:"BETTER Sleep palette board: Midnight Mixed Berry",col:3,row:3,tile:"plate",fit:"cover"},{kind:"tile",src:t("better","better-anytime-board.webp"),alt:"BETTER Anytime palette board: Easy Lemon Lavender",col:3,row:3,tile:"plate",fit:"cover"}],seo:{title:"BETTER: Case Study · Zegoe",description:"BETTER brand system by Zegoe: an occasion-based cannabis line (Days, Sleep, Anytime) with occasion wordmarks, illustrated landscape palettes, blister-carded cartridges and gummy pouches."},next:"garcia-case"}],Me=i=>V.find(n=>n.slug===i),re=i=>{const n=i.href??`/work/${i.slug}`;return n.endsWith("/")?n:`${n}/`},Ae=i=>{const n=V.findIndex(j=>j.slug===i);if(n<0)return null;const p=V.length;return{prev:n>0?V[n-1]:null,next:n<p-1?V[n+1]:null,position:n+1,total:p}},oe=i=>i.button===0&&!i.metaKey&&!i.ctrlKey&&!i.shiftKey&&!i.altKey,Le=.32,Qe=.1;function ot({slug:i,onNext:n,onClose:p}){const j=S.useRef(null),z=S.useRef(null);S.useEffect(()=>{const a=j.current,u=z.current;if(!a||!u||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let f=null,s=a.parentElement;for(;s&&s!==document.body&&s!==document.documentElement;){if(s.classList.contains("cso-scroll")){f=s;break}const x=getComputedStyle(s).overflowY;if((x==="auto"||x==="scroll")&&s.scrollHeight>s.clientHeight){f=s;break}s=s.parentElement}let b=0;const M=()=>{b=0;const x=u.parentElement;if(!x)return;const h=u.offsetHeight-x.clientHeight;if(h<=0){u.style.transform="translate3d(0, 0, 0)";return}const d=f??document.scrollingElement??document.documentElement,E=d.scrollHeight-d.clientHeight,N=E>0?Math.min(1,Math.max(0,d.scrollTop/E)):0;u.style.transform=`translate3d(0, ${(-N*h).toFixed(2)}px, 0)`},o=()=>{b||(b=requestAnimationFrame(M))},v=f??window;return v.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o,{passive:!0}),M(),()=>{b&&cancelAnimationFrame(b),v.removeEventListener("scroll",o),window.removeEventListener("resize",o)}},[i]),S.useEffect(()=>{const a=j.current;if(!a||n||p||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const u=g=>{if(g.defaultPrevented||g.button!==0||g.metaKey||g.ctrlKey||g.shiftKey||g.altKey)return;const l=g.target?.closest?.("a[href]");if(!l||l.target==="_blank"||l.hasAttribute("download"))return;const A=new URL(l.href,location.href);if(A.origin!==location.origin||A.pathname===location.pathname&&A.hash)return;g.preventDefault();const P=l.dataset.dir;f(l.href,P)};function f(g,l){s();try{sessionStorage.setItem("zg-nav",l??"1")}catch{}a.classList.add(l?`cs-leaving-${l}`:"cs-leaving"),window.setTimeout(()=>{location.href=g},260)}const s=()=>{a.style.willChange="opacity";const g=a.querySelector("main");g&&(g.style.willChange="transform")},b=g=>{const l=g.target?.closest?.("a[href]");!l||l.target==="_blank"||l.hasAttribute("download")||s()},M=Ae(i);let o=0,v=0,x=0,h=!1;const d=32,E=g=>{if(h=!1,!M||g.touches.length!==1)return;const l=g.touches[0];l.clientX<d||l.clientX>window.innerWidth-d||g.target?.closest?.(".cs-stage, [data-no-swipe]")||(h=!0,o=l.clientX,v=l.clientY,x=g.timeStamp)},N=g=>{if(!h||!M)return;h=!1;const l=g.changedTouches[0];if(!l)return;const A=l.clientX-o,P=l.clientY-v;if(g.timeStamp-x>700||Math.abs(A)<64||Math.abs(A)<Math.abs(P)*1.6)return;const $=A<0,Y=$?M.next:M.prev;Y&&f(`/work/${Y.slug}/`,$?"next":"prev")},D=()=>{h=!1};return a.addEventListener("click",u),a.addEventListener("pointerover",b),a.addEventListener("pointerdown",b),a.addEventListener("touchstart",E,{passive:!0}),a.addEventListener("touchend",N,{passive:!0}),a.addEventListener("touchcancel",D,{passive:!0}),()=>{a.removeEventListener("click",u),a.removeEventListener("pointerover",b),a.removeEventListener("pointerdown",b),a.removeEventListener("touchstart",E),a.removeEventListener("touchend",N),a.removeEventListener("touchcancel",D)}},[n,p,i]);const r=Me(i);if(!r)return null;const y=Me(r.next),m=Ae(i),T=!!(n||p),L=r.pageBg,c=y.nextArt??y.pageBg,w=r.client?Je[r.client]:void 0;return e.jsxs("div",{ref:j,className:"cs-page",style:{"--cs-bg":r.palette.bg,"--cs-accent":r.palette.accent,"--cs-accent-text":r.palette.accentText,"--cs-glow":r.palette.glow,...L?{"--cs-bg-src":`url("${L.src}")`,"--cs-bg-op":String(L.opacity),"--cs-bg-filter":L.filter??"none","--cs-bg-size":L.tile??"cover","--cs-bg-repeat":L.tile?"repeat":"no-repeat","--cs-bg-pos":L.pos??"50% 50%","--cs-bg-scrim":L.scrim,"--cs-bg-bleed":String(L.bleed??14)}:{}},children:[L&&e.jsx("div",{className:"cs-bgpin","aria-hidden":"true",children:e.jsxs("div",{className:"cs-bglayer",children:[e.jsx("div",{className:"cs-bgart",ref:z,children:e.jsx("div",{className:`cs-bgart-img${L.drift?" cs-bgart-drift":""}`})}),e.jsx("div",{className:"cs-bgscrim"})]})}),!T&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cs-topbar","aria-hidden":"true"}),e.jsxs("nav",{className:"cs-nav","aria-label":"Case study",children:[e.jsx("a",{href:"/",className:"cs-nav-logo",children:e.jsx("img",{src:"/Wordmark_White.png",alt:"Zegoe"})}),e.jsxs("a",{href:"/#work",className:"cs-nav-back",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M19 12H5M5 12l6-6M5 12l6 6"})}),e.jsx("span",{children:"All Work"})]})]})]}),e.jsxs("main",{children:[e.jsxs("header",{className:`cs-hero${r.heroArt?" cs-hero-arted":r.cover?" cs-hero-plated":""}`,children:[r.heroArt?.layers&&r.heroArt.canvas?e.jsx("div",{className:"cs-hero-art cs-hero-art-live",children:e.jsx("div",{className:"cs-hero-stage",role:"img","aria-label":r.heroArt.alt,style:{"--cs-art-w":r.heroArt.canvas[0],"--cs-art-h":r.heroArt.canvas[1]},children:r.heroArt.layers.map((a,u)=>{const[f,s]=r.heroArt.canvas,b={left:`${a.x/f*100}%`,top:`${a.y/s*100}%`,width:`${a.w/f*100}%`,zIndex:u+1};if(a.blend&&(b.mixBlendMode=a.blend),a.m){const[M,o,v,x,h]=a.m;b.animation=`cs-drift ${M}s ${o}s ease-in-out infinite`,b["--dx"]=`${v*Le/f*100}%`,b["--dy"]=`${x*Le/s*100}%`,b["--rot"]=`${h*Qe}deg`}else a.twinkle&&(b.animation=`cs-twinkle ${a.twinkle[0]}s ${a.twinkle[1]}s ease-in-out infinite`);return e.jsx("img",{className:"cs-hero-piece",src:`/portfolio/${r.slug}/hero/${a.key}.webp`,alt:"","aria-hidden":"true",draggable:!1,style:b},a.key)})})}):r.heroArt?e.jsx("div",{className:"cs-hero-art",children:e.jsx("img",{src:r.heroArt.src,alt:r.heroArt.alt,draggable:!1})}):r.cover&&e.jsx("div",{className:"cs-hero-plate","data-mat":r.cover.mat?"":void 0,children:e.jsx("img",{src:r.cover.src,alt:r.cover.alt,draggable:!1})}),e.jsxs("div",{className:"cs-hero-inner",children:[e.jsxs("p",{className:"cs-hero-eyebrow",children:["Case Study",m&&e.jsxs("span",{className:"cs-hero-count",children:[e.jsx("b",{children:String(m.position).padStart(2,"0")}),e.jsx("i",{children:"/"}),String(m.total).padStart(2,"0")]})]}),e.jsx("h1",{className:`cs-hero-name${r.logo?" cs-hero-name-logo":""}`,style:r.logo?.scale?{"--cs-logo-scale":r.logo.scale}:void 0,children:r.logo?e.jsx("img",{src:r.logo.src,alt:r.logo.alt,draggable:!1}):r.name}),e.jsx("p",{className:"cs-hero-pos",children:r.position}),e.jsx("div",{className:"cs-hero-chips",children:r.categories.map(a=>e.jsx("span",{className:"cs-chip",children:a},a))}),r.client&&e.jsxs("p",{className:"cs-hero-client",children:[e.jsx("span",{className:"cs-hero-client-label",children:"Client"}),w?e.jsx("img",{className:"cs-hero-clientlogo",src:w.src,alt:w.alt,draggable:!1}):e.jsx("span",{className:"cs-hero-client-name",children:r.client})]})]}),e.jsx("div",{className:"cs-hero-scroll","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M12 19l-6-6M12 19l6-6"})})})]}),e.jsxs("section",{className:"cs-stage-section","aria-label":r.stage.type==="model"?"Interactive product model":"Product centerpiece",children:[e.jsxs("div",{className:"cs-section-head",children:[e.jsx("p",{className:"cs-eyebrow",children:"The Product"}),e.jsx("p",{className:"cs-stage-note",children:r.stage.note})]}),e.jsx("div",{className:"cs-stage-frame",children:r.stage.type==="model"?e.jsx(Re,{modelUrl:r.stage.url,poster:r.stage.poster,posterAlt:r.stage.posterAlt,accent:r.palette.accent,yaw:r.stage.yaw??0,exposure:r.stage.exposure??1,orient:r.stage.orient},r.slug):r.stage.type==="poster"?e.jsx(qe,{src:r.stage.src,alt:r.stage.alt},r.slug):e.jsx(Fe,{hero:r.stage.hero,heroAlt:r.stage.heroAlt,backdrop:r.stage.backdrop,accent:r.palette.accent},r.slug)})]}),e.jsxs("section",{className:"cs-story",children:[e.jsxs("blockquote",{className:"cs-quote",children:[e.jsx("span",{className:"cs-quote-bar","aria-hidden":"true"}),r.position]}),e.jsx("p",{className:"cs-blurb",children:r.blurb}),e.jsxs("div",{className:"cs-story-grid",children:[e.jsxs("div",{className:"cs-story-col",children:[e.jsx("h2",{className:"cs-eyebrow",children:"Deliverables"}),e.jsx("ul",{className:"cs-deliverables",children:r.deliverables.map(a=>e.jsx("li",{className:"cs-chip cs-chip-dim",children:a},a))})]}),e.jsxs("div",{className:"cs-story-col",children:[e.jsxs("h2",{className:"cs-eyebrow",children:["Visual Identity",r.storyMark&&e.jsx("img",{className:"cs-story-mark",src:r.storyMark.src,alt:r.storyMark.alt,loading:"lazy"})]}),e.jsx("p",{className:"cs-vi",children:r.visualIdentity})]})]})]}),r.mapShowcase&&e.jsx(We,{data:r.mapShowcase},r.slug),e.jsx(Ze,{gallery:r.gallery,accent:r.palette.accent,resetKey:i}),e.jsxs("footer",{className:"cs-next",children:[e.jsxs("a",{href:re(y),className:"cs-next-link","data-dir":"next",onClick:n&&!y.href?a=>{oe(a)&&(a.preventDefault(),n(y.slug))}:void 0,style:{"--nx-bg":y.palette.bg,"--nx-accent":y.palette.accent,"--nx-glow":y.palette.glow,...c?{"--nx-art":`url("${c.src}")`,"--nx-art-op":String(Math.min(.6,c.opacity*2.4)),"--nx-art-filter":c.filter??"none","--nx-art-size":c.tile??"cover","--nx-art-repeat":c.tile?"repeat":"no-repeat","--nx-art-pos":c.pos??"50% 50%"}:{}},children:[c&&e.jsx("span",{className:"cs-next-art","aria-hidden":"true"}),e.jsx("span",{className:"cs-next-scrim","aria-hidden":"true"}),e.jsx("span",{className:"cs-eyebrow",children:"Next Project"}),e.jsxs("span",{className:"cs-next-name",children:[e.jsx("span",{className:"cs-next-index",children:y.index}),y.logo?e.jsx("img",{className:"cs-next-logo",src:y.logo.src,alt:y.logo.alt,draggable:!1,style:y.logo.scale?{"--nx-logo-scale":y.logo.scale}:void 0}):y.name,e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]})]}),r.microsite&&e.jsxs("a",{href:r.microsite.href,className:"cs-all-work cs-side-page",children:[r.microsite.label,e.jsx("span",{"aria-hidden":"true",children:" ↗"})]})]})]}),m&&e.jsx("div",{className:"cs-pagerpin",children:e.jsxs("nav",{className:"cs-pagerbar","aria-label":"Case studies",children:[m.prev&&e.jsxs("a",{href:re(m.prev),className:"cs-pagerbar-link","data-dir":"prev",onClick:n&&!m.prev.href?a=>{oe(a)&&(a.preventDefault(),n(m.prev.slug))}:void 0,children:[e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M19 12H5M5 12l6-6M5 12l6 6"})}),e.jsxs("span",{children:[e.jsx("i",{children:"Previous"}),e.jsx("b",{children:m.prev.name})]})]}),e.jsxs("span",{className:"cs-pagerbar-here",children:[e.jsxs("span",{className:"cs-pagerbar-count","aria-hidden":"true",children:[e.jsx("b",{children:String(m.position).padStart(2,"0")}),e.jsx("i",{children:"/"}),String(m.total).padStart(2,"0")]}),e.jsx("em",{children:r.name})]}),m.next&&e.jsxs("a",{href:re(m.next),className:"cs-pagerbar-link cs-pagerbar-next","data-dir":"next",onClick:n&&!m.next.href?a=>{oe(a)&&(a.preventDefault(),n(m.next.slug))}:void 0,children:[e.jsxs("span",{children:[e.jsx("i",{children:"Next"}),e.jsx("b",{children:m.next.name})]}),e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M5 12h14M19 12l-6-6M19 12l-6 6"})})]})]})}),e.jsx("style",{children:`
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
        /* Arrival mirror of warm(): promote the layers before the entrance
           plays, so the fade and slide stay on the compositor while
           hydration blocks the main thread (see BaseLayout's zg-arrive
           note). Same split as warm(), for the same reason: opacity only on
           .cs-page (it holds the fixed .cs-nav), the transform hint only on
           <main>, which is the one thing that moves. Scoped to zg-arriving,
           which is stripped after load, so neither layer outlives the
           entrance. */
        html.zg-arriving .cs-page { will-change: opacity; }
        html.zg-arriving .cs-page > main { will-change: transform; }
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
          transform: translate3d(0, 0, 0);
          will-change: transform;
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
             "Garcia HandPicked" was visibly off-centre. Two equal side tracks
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
          .cs-hero-count { font-size: 1.15rem; }
          /* A phone keeps the desktop's three-across arrangement; what gives
             is the name, which wraps instead of being cut. "Garcia
             HandPicked" sets as "Garcia / HandPicked" and the bar is two
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
      `})]})}export{ot as C,Ae as a,Me as g};
