const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/GLTFLoader.BqdKpcjx.js","_astro/three.module.Bx43vjkH.js","_astro/RoomEnvironment.Ct7rVCVU.js"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as j}from"./index.DiEladB3.js";import{_ as U}from"./preload-helper.BlTxHScW.js";const ge=.25,se=.0085;function me({modelUrl:i,poster:s,posterAlt:p,accent:y,yaw:H=0}){const r=j.useRef(null),[f,u]=j.useState(!1),[S,L]=j.useState("poster"),[w,v]=j.useState(!1);j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=r.current;if(!a)return;const h=new IntersectionObserver(([n])=>{n.isIntersecting&&(u(!0),h.disconnect())},{rootMargin:"400px 0px"});return h.observe(a),()=>h.disconnect()},[]),j.useEffect(()=>{if(!f)return;const a=r.current;if(!a)return;let h=!1,n=null;return(async()=>{const[o,{GLTFLoader:d},{RoomEnvironment:T}]=await Promise.all([U(()=>import("./three.module.Bx43vjkH.js"),[]),U(()=>import("./GLTFLoader.BqdKpcjx.js"),__vite__mapDeps([0,1])),U(()=>import("./RoomEnvironment.Ct7rVCVU.js"),__vite__mapDeps([2,1]))]);if(h)return;let g;try{if(g=new o.WebGLRenderer({antialias:!0,alpha:!0}),!g.getContext())throw new Error("no webgl context")}catch(b){console.warn("CaseStudyStage: WebGL unavailable, keeping poster",b),L("failed");return}g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.toneMapping=o.ACESFilmicToneMapping,g.toneMappingExposure=1.05,g.outputColorSpace=o.SRGBColorSpace,g.setSize(a.clientWidth,a.clientHeight),a.appendChild(g.domElement);const m=g.domElement;m.style.width="100%",m.style.height="100%",m.style.display="block",m.style.touchAction="pan-y";const k=new o.Scene,x=new o.PerspectiveCamera(38,a.clientWidth/a.clientHeight,.1,100);x.position.set(0,0,5.4);const E=new o.PMREMGenerator(g),B=E.fromScene(new T,.04).texture;k.environment=B;const R=new o.Color(y),I=R.clone().lerp(new o.Color("#ffffff"),.55),l=new o.DirectionalLight(16777215,1.4);l.position.set(0,3,5);const c=new o.DirectionalLight(R,3);c.position.set(-5,1.5,-3.5);const A=new o.DirectionalLight(I,2.2);A.position.set(4.5,2,3),k.add(l,c,A);const M=new o.Group;M.rotation.y=H,k.add(M);const G=(b,z)=>{const ie=new o.Box3().setFromObject(b),K=ie.getSize(new o.Vector3),he=ie.getCenter(new o.Vector3),pe=Math.max(K.x,K.y,K.z)||1,oe=z/pe;b.scale.setScalar(oe),b.position.copy(he).multiplyScalar(-oe)};new d().load(i,b=>{if(h)return;const z=b.scene;G(z,2.8),M.add(z),L("ready")},void 0,b=>{console.warn("CaseStudyStage: GLB failed to load, keeping poster",b),L("failed")});let P=!1,_=0,C=0;const Y=b=>{b.pointerType==="mouse"&&b.button!==0||(P=!0,_=b.clientX,C=0,m.setPointerCapture?.(b.pointerId),v(!0))},X=b=>{if(!P)return;const z=b.clientX-_;_=b.clientX,M.rotation.y+=z*se,C=C*.6+z*se*.4},V=()=>{P&&(P=!1,v(!1))};m.addEventListener("pointerdown",Y),m.addEventListener("pointermove",X),m.addEventListener("pointerup",V),m.addEventListener("pointercancel",V);const Z=new o.Clock;let F=0,$=!1;const ce=()=>{const b=Math.min(Z.getDelta(),.05);if(!P){const z=ge*b;C+=(z-C)*.03,M.rotation.y+=C}g.render(k,x)},J=()=>{ce(),F=requestAnimationFrame(J)},de=()=>{$||($=!0,Z.start(),F=requestAnimationFrame(J))},Q=()=>{$=!1,cancelAnimationFrame(F)};let ee=!0;const q=()=>{ee&&!document.hidden?de():Q()},te=new IntersectionObserver(([b])=>{ee=b.isIntersecting,q()},{threshold:0});te.observe(a);const ae=()=>q();document.addEventListener("visibilitychange",ae);const O=()=>{!a.clientWidth||!a.clientHeight||(x.aspect=a.clientWidth/a.clientHeight,x.updateProjectionMatrix(),g.setSize(a.clientWidth,a.clientHeight))};window.addEventListener("resize",O);const re=new ResizeObserver(O);re.observe(a),q(),n=()=>{Q(),te.disconnect(),re.disconnect(),document.removeEventListener("visibilitychange",ae),window.removeEventListener("resize",O),m.removeEventListener("pointerdown",Y),m.removeEventListener("pointermove",X),m.removeEventListener("pointerup",V),m.removeEventListener("pointercancel",V),B.dispose(),E.dispose(),g.dispose(),m.parentNode===a&&a.removeChild(m)}})(),()=>{h=!0,n?.()}},[f,i,y,H]);const N=S!=="ready";return e.jsxs("div",{className:"cs-stage",style:{cursor:S==="ready"?w?"grabbing":"grab":"default"},children:[e.jsx("div",{ref:r,className:"cs-stage-mount","aria-hidden":S==="ready"?void 0:!0}),e.jsx("img",{src:s,alt:p,draggable:!1,className:"cs-stage-poster",style:{opacity:N?1:0},loading:"lazy"}),S==="ready"&&e.jsxs("span",{className:"cs-stage-hint",style:{color:y},children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"})}),"Drag to rotate"]}),e.jsx("style",{children:`
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
      `})]})}const be=6,fe=4;function ue({hero:i,heroAlt:s,backdrop:p}){const y=j.useRef(null),H=j.useRef(null);return j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=y.current,f=H.current;if(!r||!f)return;let u=0,S=0,L=0,w=0,v=0;const N=()=>{L+=(u-L)*.08,w+=(S-w)*.08,f.style.transform=`perspective(1100px) rotateX(${w.toFixed(3)}deg) rotateY(${L.toFixed(3)}deg)`,Math.abs(u-L)>.02||Math.abs(S-w)>.02?v=requestAnimationFrame(N):v=0},a=()=>{v||(v=requestAnimationFrame(N))},h=o=>{if(o.pointerType!=="mouse")return;const d=r.getBoundingClientRect();u=((o.clientX-d.x)/d.width-.5)*2*be,S=-(((o.clientY-d.y)/d.height-.5)*2*fe),a()},n=()=>{u=0,S=0,a()};return r.addEventListener("pointermove",h),r.addEventListener("pointerleave",n),()=>{r.removeEventListener("pointermove",h),r.removeEventListener("pointerleave",n),cancelAnimationFrame(v)}},[]),e.jsxs("div",{ref:y,className:"csis",children:[e.jsx("img",{src:p,alt:"","aria-hidden":"true",className:"csis-backdrop",draggable:!1}),e.jsx("div",{className:"csis-scrim","aria-hidden":"true"}),e.jsx("div",{ref:H,className:"csis-tilt",children:e.jsx("img",{src:i,alt:s,className:"csis-hero",draggable:!1})}),e.jsx("style",{children:`
        .csis {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .csis-backdrop {
          position: absolute;
          inset: -6%;
          width: 112%;
          height: 112%;
          /* Tailwind preflight sets img max-width: 100%, which clamped this back
             to the frame's width while left: -6% still held — so the art stopped
             ~6% short of the right edge and the frame's own gradient showed as a
             dark band there. Height was never clamped, which is why only one
             side of the bleed went missing. */
          max-width: none;
          max-height: none;
          object-fit: cover;
          object-position: center;
          filter: saturate(1.15);
          animation: csis-drift 30s ease-in-out infinite alternate;
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
        }
        .csis-hero {
          max-height: 82%;
          max-width: 72%;
          object-fit: contain;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.75));
          animation: csis-bob 7s ease-in-out infinite;
        }
        @keyframes csis-drift {
          from { transform: scale(1) translate(0, 0); }
          to   { transform: scale(1.1) translate(-1.5%, 2%); }
        }
        @keyframes csis-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .csis-backdrop, .csis-hero { animation: none !important; }
        }
      `})]})}function we({src:i,alt:s}){return e.jsxs("div",{className:"csps",children:[e.jsx("img",{src:i,alt:s,className:"csps-art",draggable:!1}),e.jsx("div",{className:"csps-vignette","aria-hidden":"true"}),e.jsx("style",{children:`
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
          animation: csps-drift 48s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes csps-drift {
          from { transform: scale(1.02) translate3d(0, 0, 0); }
          to   { transform: scale(1.09) translate3d(-1.2%, -1%, 0); }
        }
        /* Soften the frame edge so the poster doesn't butt hard into the border. */
        .csps-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(120% 110% at 50% 45%, transparent 55%, rgba(0,0,0,0.45) 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .csps-art { animation: none !important; transform: none !important; }
        }
      `})]})}const t=(i,s)=>`/portfolio/${i}/hi/${s}`,ve={"Holistic Industries":{src:"/brand-logo/holistic-industries.png",alt:"Holistic Industries"}},D=[{slug:"garcia",index:"01",name:"Garcia HandPicked",client:"Holistic Industries",categories:["Packaging","Flower","Edibles","Pre-Rolls","Tour Packs"],position:"A Jerry Garcia-licensed cannabis brand that puts psychedelic concert-poster art on the shelf.",blurb:"Garcia HandPicked fuses Grateful Dead concert-poster energy with modern, compliant cannabis packaging. Fluid rainbow liquid-marble artwork and an integrated Jerry Garcia portrait celebrate the licensed heritage across a deep SKU range and strain-coded variants.",deliverables:["Full packaging, all flower weights","Edible tins","Pre-roll boxes","Deluxe tour & Roadie packs","Retail display signage","Logo lockups","Marketing collateral & merch","Brand guide"],visualIdentity:"Psychedelic liquid-marble rainbow gradients, red through purple, on near-black, so the artwork carries the color. A Jerry Garcia silhouette and portrait, handprint and signature motifs, strain color-coding, and Swiss-style type holding the compliance copy.",logo:{src:"/brand-logo/ghp-knockout.png",alt:"Garcia HandPicked",scale:1.9},cover:{src:"/portfolio/garcia/garcia-brand-cover.webp",alt:"Garcia HandPicked brand cover: a single polaroid of strain-coded jars, a pouch and a loaded rolling tray on a patterned cloth, taped over the liquid-marble artwork under the green hand-print pick"},palette:{bg:"#080608",accent:"#ff4fd8",accentText:"#0a0a0a",glow:"rgba(255,120,220,0.35)"},pageBg:{src:t("garcia","ghp-marble-backdrop.webp"),opacity:.15,filter:"saturate(1.15)",drift:!0,bleed:12,scrim:"radial-gradient(120% 90% at 50% 10%, rgba(8,6,8,0) 30%, rgba(8,6,8,0.85) 100%), linear-gradient(180deg, rgba(8,6,8,0.35) 0%, rgba(8,6,8,0.1) 45%, rgba(8,6,8,0.55) 100%)"},stage:{type:"image",hero:t("garcia","ghp-mi-flowerbag-28g.webp"),heroAlt:"Garcia HandPicked 28G flower pouch: liquid-marble rainbow artwork",backdrop:t("garcia","ghp-marble-backdrop.webp"),note:"The 28G pouch, floating on the liquid-marble artwork it wears."},gallery:[{kind:"tile",src:t("garcia","ghp-ca-5-pack-pre-roll-1.webp"),alt:"Garcia HandPicked 5-pack pre-roll tin, angled: marble lid over Jerry portrait",col:4,row:5,caption:"The 5-pack tin: the one angle that breaks formation."},{kind:"tile",src:t("garcia","ghp-ca-flower-jar.webp"),alt:"Garcia HandPicked flower jar with liquid-marble label",col:2,row:5,pad:"std"},{kind:"divider",src:t("garcia","gummy-tin-art.webp"),alt:"Garcia HandPicked liquid-marble rainbow artwork, full bleed"},{kind:"tile",src:t("garcia","ghp-md-flowerbag-28g-front-and-back.webp"),alt:"Garcia HandPicked 28G pouch, front and back: art side and compliance side",col:6,row:4,pad:"roomy",caption:"Front and back: the art carries, the Swiss type complies."},{kind:"tile",src:t("garcia","ghp-flower-1.webp"),alt:"Garcia HandPicked flower jar with strain hang tag",col:3,row:4},{kind:"tile",src:t("garcia","ghp-ca-5-pack-pre-roll-front.webp"),alt:"Garcia HandPicked pre-roll tin face-on: concert-poster front",col:3,row:4,tile:"tint",caption:"Face-on, it reads like a gig poster."},{kind:"tile",src:t("garcia","ghp-ca-double-doobie-2pck-03.webp"),alt:"Garcia HandPicked double doobie tube",col:2,row:5,pad:"roomy",caption:"Double doobie."},{kind:"tile",src:t("garcia","ghp-mi-flowerbag-3-5g-front.webp"),alt:"Garcia HandPicked 3.5G flower pouch",col:2,row:3},{kind:"tile",src:t("garcia","ghp-merch-guitar-pick.webp"),alt:"Garcia HandPicked guitar-pick handprint mark, black and white",col:2,row:2,tile:"bright",caption:"The handprint, reduced to a pick."},{kind:"tile",src:t("garcia","ghp-tourpack-pa-rainbow-7g-hybrid-v2.webp"),alt:"Garcia HandPicked rainbow tour pack, 7G hybrid",col:4,row:3,caption:"The tour pack: the collector piece."},{kind:"tile",src:t("garcia","ghp-merch-hat.webp"),alt:"Garcia HandPicked embroidered hat, studio shot",col:3,row:3,tile:"framed",fit:"contain"},{kind:"tile",src:t("garcia","ghp-hat-design.webp"),alt:"Garcia HandPicked green cap with marble bill",col:3,row:3,caption:"Merch wears the marble too."}],seo:{title:"Garcia HandPicked — Case Study · Zegoe",description:"Garcia HandPicked packaging by Zegoe: Jerry Garcia-licensed psychedelic liquid-marble artwork across flower, edibles, pre-rolls and collector tour packs."},next:"strane"},{slug:"strane",index:"02",name:"Strane",client:"Holistic Industries",categories:["Branding","Disposable Vapes","Cartridges","Flower"],position:"Cannabis vapes with a punk streak: street-art grit meets clean device renders.",blurb:"Strane runs a distinctly punk visual system: distressed brick textures, paint splatters and retro collage against a hard acid-yellow-and-black palette, differentiating across strains while premium 3D device renders keep it product-forward.",deliverables:["Strain-specific cartridge labels","Ripstick device mockups, pod & bottle forms","Logo & angular wordmark","Brick, splatter & graffiti texture library","Type variants","Retail display design"],visualIdentity:"Acid yellow on black. Distressed brick walls, paint splatter and collage set the street-art register; a bold angular wordmark and curated black-and-white product photography keep the devices premium and product-forward.",logo:{src:"/brand-logo/strane.png",alt:"Strane"},cover:{src:"/portfolio/strane/strane-brand-cover.webp",alt:"Strane brand cover: torn street photography of the sling bag and Silver Kush pouch, taped over an acid-yellow brick wall under the hand-drawn wordmark"},heroArt:{src:"/portfolio/strane/strane-hero-art.webp",alt:"Strane hero collage: the yellow-to-black device beside the Alien Mints cartridge pouch and Landfill Haze brick-wall pouch, with torn eye stickers, a scrawled star and the taped wordmark",canvas:[1920,1080],layers:[{key:"shadow",x:737,y:750,w:521,m:[11,0,10,0,0]},{key:"sparks-sm",x:333,y:17,w:1499,twinkle:[7,0]},{key:"pouch-brick",x:1017,y:34,w:419,m:[9,1.2,22,34,-3.5]},{key:"scribble",x:1222,y:471,w:141,m:[5.5,.5,-28,-32,8]},{key:"stars-yellow",x:1475,y:147,w:97,m:[5,1.8,22,-32,9]},{key:"pouch-alien",x:784,y:310,w:636,m:[8.5,.8,-24,40,3]},{key:"device",x:1002,y:206,w:918,m:[10.5,0,8,-34,.6]},{key:"sparks-lg",x:54,y:59,w:1786,twinkle:[9,1.5]},{key:"splat",x:686,y:537,w:129,m:[6.5,2.1,-20,26,-7]},{key:"wordmark",x:1077,y:896,w:342,m:[8,1.4,-18,-26,2.5]},{key:"wing",x:1668,y:20,w:241,m:[6,1.6,-12,30,-2.5]},{key:"eye-bottom",x:648,y:811,w:312,m:[7,.9,26,-32,5]},{key:"eye-top",x:648,y:135,w:266,m:[6.5,.3,-24,34,-5.5]}]},palette:{bg:"#0b0b06",accent:"#e5ff00",accentText:"#0a0a0a",glow:"rgba(229,255,0,0.30)"},pageBg:{src:"/portfolio/strane/strane_brick_bg_yellow.webp",tile:"760px",opacity:.12,filter:"grayscale(1) brightness(0.75) contrast(1.2)",drift:!1,bleed:10,scrim:"linear-gradient(180deg, rgba(11,11,6,0.55) 0%, rgba(11,11,6,0.28) 40%, rgba(11,11,6,0.5) 100%)"},stage:{type:"model",url:"/models/work/strane.glb",poster:t("strane","strane-ma-ripstick-1g-generic.webp"),posterAlt:"Strane Ripstick 1G disposable device render",yaw:2.4,note:"Ripstick 1G, the disposable that fronts the line."},gallery:[{kind:"tile",src:t("strane","strane-display-side-4.webp"),alt:"Strane neon retail display: black brick tower with acid-yellow shelving",col:4,row:5,caption:"Retail display concept: neon over black brick."},{kind:"tile",src:t("strane","strane-shelf-display-3.webp"),alt:"The built Strane retail fixture, photographed in the shop",col:2,row:5,tile:"framed",fit:"contain",caption:"Built. The fixture, off the renderer and on the floor."},{kind:"tile",src:t("strane","strane-shelf-side-2.webp"),alt:"Strane shelf display side view with stocked pouches",col:3,row:4},{kind:"tile",src:t("strane","strane-mi-flower-28g-front.webp"),alt:"Strane 28g blackout mylar bag",col:3,row:4,pad:"roomy",caption:"28g blackout mylar."},{kind:"tile",src:t("strane","strane-flower-3-5g-mockup-indica-silver.webp"),alt:"Strane 3.5g flower mockup: indica, silver foil",col:2,row:3},{kind:"tile",src:t("strane","strane-ma-flower-8th-mockup.webp"),alt:"Strane Reserve eighth: the cyan colour-break in the system",col:4,row:3,tile:"tint",caption:"Reserve tier: cyan cuts the acid yellow."},{kind:"tile",src:t("strane","strane-display-4.webp"),alt:"Tall Strane counter display",col:2,row:5,pad:"std"},{kind:"tile",src:t("strane","strane-md-flower-7g-pouch.webp"),alt:"Strane 7g flower pouch, Maryland market",col:2,row:3},{kind:"tile",src:t("strane","strane-mi-flower-3-5g-front.webp"),alt:"Strane 3.5g flower front, Michigan market",col:2,row:3},{kind:"tile",src:t("strane","strane-7g-flower-ma-pa.webp"),alt:"Strane 7g flower pouches for MA and PA markets",col:4,row:3},{kind:"tile",src:t("strane","strane-ma-ripstick-1g-generic.webp"),alt:"Strane Ripstick 1G: generic device",col:3,row:4,pad:"roomy"},{kind:"tile",src:t("strane","strane-ma-ripstick-1g-grape-gg.webp"),alt:"Strane Ripstick 1G: Grape GG strain",col:3,row:4,pad:"roomy",caption:"Ripstick, generic and strain-dressed."}],seo:{title:"Strane — Case Study · Zegoe",description:"Strane brand system by Zegoe: punk street-art identity for cannabis vapes: acid yellow on black, distressed brick, paint splatter and premium 3D device renders."},next:"avitas"},{slug:"avitas",index:"03",name:"AVITAS",client:"Holistic Industries",categories:["Branding","Vape Cartridges","Gummies"],position:"A premium, nature-forward cartridge system built on illustrated landscapes.",blurb:"AVITAS is a full identity system where each product tier owns an illustrated landscape (mountains, ocean, botanicals) in a turquoise-to-navy palette with gold accents, anchored by a distinctive geometric “A” mark for clean, premium shelf presence across Live Resin and Ultra lines.",deliverables:["Cartridge & edible label system","High-res product renders","Logo mark system","Brand graphics & illustration","Pre-roll & AIO packaging"],visualIdentity:"Turquoise into deep navy, with gold accents. Each tier owns an illustrated landscape, whether mountains, ocean or botanicals, set in a clean sans-serif with a playful script for line names. The geometric “A” mark holds the whole system together.",logo:{src:"/brand-logo/avitas-trim.png",alt:"AVITAS",scale:1.7},cover:{src:"/portfolio/avitas/avitas-brand-cover.webp",alt:"AVITAS brand cover: three Live Resin cartridge packs — sativa, indica, hybrid — standing on weathered driftwood under the mountain logo"},palette:{bg:"#04141c",accent:"#e8c87a",accentText:"#0a0a0a",glow:"rgba(64,200,210,0.30)"},pageBg:{src:t("avitas","avitas-homepage-illustration-01.webp"),opacity:.24,filter:"saturate(0.55) brightness(0.62)",pos:"50% 100%",drift:!0,bleed:12,scrim:"linear-gradient(180deg, rgba(4,20,28,0.8) 0%, rgba(4,20,28,0.3) 55%, rgba(4,20,28,0.9) 100%)"},stage:{type:"model",url:"/models/work/avitas.glb",poster:t("avitas","avitas-live-resin-aio-agnostic.webp"),posterAlt:"AVITAS Live Resin all-in-one device render",note:"The Live Resin all-in-one: landscape wrapped around the device."},gallery:[{kind:"tile",src:t("avitas","avitas-live-resin-hybrid-mockup.webp"),alt:"AVITAS Live Resin hybrid pack with amber cartridge",col:4,row:4,tile:"plate",caption:"Live Resin: pack and amber cartridge."},{kind:"tile",src:t("avitas","avitas-live-resin-aio-agnostic-front-hybrid-strain.webp"),alt:"AVITAS Live Resin AIO front, hybrid strain",col:2,row:4,tile:"plate"},{kind:"tile",src:t("avitas","avitas-live-resin-vapebox-2024.webp"),alt:"AVITAS Live Resin vape box: mountain landscape tier",col:3,row:3},{kind:"tile",src:t("avitas","avitas-ultra-vapebox-2024.webp"),alt:"AVITAS Ultra vape box: ocean landscape tier",col:3,row:3,caption:"Live Resin and Ultra: each tier owns a landscape."},{kind:"tile",src:t("avitas","avitas-pre-roll-10pck-base-template.webp"),alt:"AVITAS pre-roll 10-pack base template",col:2,row:3,tile:"plate"},{kind:"tile",src:t("avitas","avitas-pre-roll-10pck-mockup.webp"),alt:"AVITAS pre-roll 10-pack mockup",col:2,row:3,tile:"plate"},{kind:"tile",src:t("avitas","avitas-wa-1g-aio-template.webp"),alt:"AVITAS Washington 1g AIO template",col:2,row:3,tile:"plate"},{kind:"tile",src:t("avitas","avitas-live-resin-aio-agnostic.webp"),alt:"AVITAS Live Resin AIO device",col:2,row:3},{kind:"tile",src:t("avitas","avitas-prerolls-10pack.webp"),alt:"AVITAS pre-rolls 10-pack render",col:2,row:3},{kind:"tile",src:t("avitas","avitas-live-resin-cartridge-front.webp"),alt:"AVITAS Live Resin Kimbo Kush pack with cartridge window",col:6,row:4,pad:"roomy",caption:"Kimbo Kush: strain-dressed, single origin."}],seo:{title:"AVITAS — Case Study · Zegoe",description:"AVITAS identity system by Zegoe: illustrated landscape tiers in turquoise-to-navy with gold, a geometric “A” mark, and premium packaging across Live Resin and Ultra lines."},next:"hellavated"},{slug:"hellavated",index:"04",name:"Hellavated",client:"Holistic Industries",categories:["Packaging","Edibles","Devices","Beverages"],position:"A vibrant, compliance-forward edibles-and-devices brand built for Gen-Z.",blurb:"Hellavated pairs fruit-illustration-heavy hero panels with a black technical compliance side, a two-tone system spanning 18+ gummy flavors and the CloudBar device line, balancing playful energy with dispensary-legible rigor.",deliverables:["1-pack gummy bags, 18+ flavors","Variety packs","CloudBar device packaging","Baja beverage & concentrate line","Wholesale bags","Compliance label systems","Retail mockups","Brand specs"],visualIdentity:"Bold and youth-forward: a fruit-illustration hero side against a black technical compliance side. The wordmark carries a cannabis-leaf icon; all-caps sans taglines keep it loud but dispensary-legible.",logo:{src:"/brand-logo/hellavated.png",alt:"Hellavated"},storyMark:{src:t("hellavated","hellavated-logo-07.webp"),alt:"Hellavated drip-cloud logo mark"},cover:{src:"/portfolio/hellavated/hellavated-brand-cover.webp",alt:"Hellavated brand cover: a model holding a CloudBar against a deep-space field, ringed by fruit and splashes of juice, under the cloud wordmark"},palette:{bg:"#070707",accent:"#b6ff2e",accentText:"#0a0a0a",glow:"rgba(182,255,46,0.30)"},pageBg:{src:t("hellavated","hellavated-live-resin-device-revised-06-06.webp"),opacity:.34,filter:"blur(7px) saturate(1.15) brightness(0.72)",pos:"50% 35%",drift:!0,bleed:16,scrim:"linear-gradient(180deg, rgba(7,7,7,0.86) 0%, rgba(7,7,7,0.62) 30%, rgba(7,7,7,0.66) 70%, rgba(7,7,7,0.9) 100%)"},stage:{type:"model",url:"/models/work/hellavated.glb",poster:t("hellavated","hellavated-galaxy-device-mockup.webp"),posterAlt:"Hellavated galaxy CloudBar device pair",note:"The galaxy CloudBar. Spin the real thing."},gallery:[{kind:"tile",src:t("hellavated","hellavated-galaxy-device-mockup.webp"),alt:"Hellavated galaxy CloudBar pair: device and box",col:4,row:4,caption:"The galaxy CloudBar, flat: the same device you just rotated above."},{kind:"tile",src:t("hellavated","hellavated-cloud-bar-generic.webp"),alt:"Hellavated CloudBar generic device",col:2,row:4},{kind:"tile",src:t("hellavated","hellavated-live-resin-device-v2-graphic-side-mk-03.webp"),alt:"Hellavated Live Resin device, graphic side, v2",col:3,row:3},{kind:"tile",src:t("hellavated","hellavated-ma-hellymelts-badassle.webp"),alt:"Hellavated HellyMelts Badassle pouch: acid green",col:3,row:3,tile:"tint",caption:"Badassle: the pouch that names the page accent."},{kind:"tile",src:t("hellavated","hellavated-ma-hellymelts-junglejuice.webp"),alt:"Hellavated HellyMelts Jungle Juice pouch",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-live-resin-device-v1-graphic-side-mk-02.webp"),alt:"Hellavated Live Resin device, graphic side, v1",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-hellymeltz-generic-ma.webp"),alt:"Hellavated HellyMeltz generic pouch",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-live-resin-device-v1-graphic-side-mk-03-new.webp"),alt:"Hellavated Live Resin device, graphic side, mk 03",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-vape.webp"),alt:"Hellavated vape device, black",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-ma-hellymelts-blueberryyumyum.webp"),alt:"Hellavated HellyMelts Blueberry Yum Yum pouch",col:2,row:3},{kind:"tile",src:t("hellavated","hellavated-md-juicy-stickz-razberry-blitz-mockup.webp"),alt:"Hellavated Juicy Stickz pre-roll tube: Razberry Blitz",col:3,row:5,pad:"roomy",caption:"Juicy Stickz: the tall one."},{kind:"tile",src:t("hellavated","hellavated-vape-white.webp"),alt:"Hellavated vape device, white edition",col:3,row:5,tile:"bright",pad:"roomy",caption:"White edition: the palette break."},{kind:"divider",src:t("hellavated","hellavated-doodle-pattern.webp"),alt:"Hellavated skull-and-cloud doodle pattern, full bleed"},{kind:"tile",src:t("hellavated","hellavated-keyart-strawberry-haze.webp"),alt:"Hellavated Strawberry Haze flavor key art: watercolor strawberries",col:6,row:6,rowM:2,fit:"cover",caption:"Flavor key art: the watercolor register."},{kind:"tile",src:t("hellavated","hellavated-keyart-og-mint.webp"),alt:"Hellavated OG Mint flavor key art: watercolor mint",col:3,row:3,fit:"cover"},{kind:"tile",src:t("hellavated","hellavated-keyart-blackberry-dream.webp"),alt:"Hellavated Blackberry Dream flavor key art: watercolor blackberries",col:3,row:3,fit:"cover"},{kind:"tile",src:t("hellavated","hellavated-poster-tropicz.webp"),alt:"Hellavated retail poster: “Take a Trip to the Tropicz”",col:3,row:3,fit:"cover",caption:"Retail poster: Tropicz."},{kind:"tile",src:t("hellavated","hellavated-poster-sooner.webp"),alt:"Hellavated retail poster: “Get Hellavated Sooner”",col:3,row:3,fit:"cover"}],seo:{title:"Hellavated — Case Study · Zegoe",description:"Hellavated packaging ecosystem by Zegoe: a two-tone fruit-hero / black-compliance system across 18+ gummy flavors and CloudBar devices."},next:"lootbar"},{slug:"lootbar",index:"05",name:"Lootbar",client:"LightHouse",categories:["Packaging","Disposable Vapes","Key Art","Flavor System"],position:"A vaporwave disposable-vape brand that turns every flavor into a loot drop.",blurb:"Lootbar literalizes its name: every flavor is staged as an open treasure chest, fruit spilling out and the device floating beside it as the prize, inside one neon HUD frame that recolors across 11 flavor key-arts. Deep-navy grounds, chrome flavor lettering, pixel hearts and arcade checkerboards keep the Y2K gaming nostalgia consistent from Peachy Ringz to Marion Berry Pie.",deliverables:["Packaging design, stand-up pouches","Flavor key-art system, 11 variants","Device mockups","Campaign key visual","3D flavor lettering","Promo materials"],visualIdentity:"Near-black grounds under neon cyan, magenta and acid yellow: vaporwave meets arcade. One constant armature (wordmark, HUD bracket frame, treasure chest, floating device, checkerboard floor) recolors per flavor; only the chrome flavor lettering changes character. Cyan holds the system together; the fruit brings the saturation.",logo:{src:"/brand-logo/loot-bar.png",alt:"Lootbar"},cover:{src:t("lootbar","lootbar-blueberry-dream.webp"),alt:"Lootbar Blueberry Dream key art: a blueberry-filled treasure chest and the device inside the cyan neon HUD frame, chrome flavor lettering below",mat:!0},heroArt:{src:"/portfolio/lootbar/lootbar-hero-art.webp",alt:"Lootbar hero collage: the device with Yuzu Sherbet and Marion Berry Pie pouches on a cyan paint splash, peaches, blackberries and a pixel heart floating around it",canvas:[1920,1080],layers:[{key:"shadow",x:737,y:750,w:521,m:[11,0,10,0,0]},{key:"pie",x:1618,y:608,w:302,m:[9,1.9,6,-36,1.6]},{key:"sparks-sm",x:333,y:17,w:1499,twinkle:[7,0]},{key:"lemon",x:1654,y:836,w:183,m:[8,.3,-30,-34,-5]},{key:"pouch-yuzu",x:1149,y:82,w:280,m:[9.5,1.6,30,40,-4]},{key:"pouch-marion",x:877,y:327,w:429,m:[8.5,.8,-26,44,3.5]},{key:"glow",x:1041,y:0,w:879,blend:"screen"},{key:"device",x:1002,y:239,w:901,m:[10.5,0,-14,-38,.8]},{key:"sparks-lg",x:54,y:59,w:1786,twinkle:[9,1.5]},{key:"heart",x:1651,y:71,w:168,m:[5.5,.2,-24,-40,6]},{key:"peach-slice",x:823,y:816,w:181,m:[7,1.1,26,-34,5.5]},{key:"berry-right",x:1738,y:337,w:157,m:[6.5,1.4,-30,-32,-6]},{key:"berry-left",x:906,y:224,w:157,m:[6,.6,-32,38,6.5]},{key:"peaches",x:1115,y:790,w:312,m:[7.5,.4,-20,-30,-2.6]}]},palette:{bg:"#02040e",accent:"#00e0f0",accentText:"#0a0a0a",glow:"rgba(0,224,240,0.30)"},pageBg:{src:"/portfolio/lootbar/lootbar-bg.webp",opacity:.26,filter:"saturate(1.25) brightness(0.72)",pos:"50% 50%",drift:!0,bleed:12,scrim:"linear-gradient(180deg, rgba(2,4,14,0.9) 0%, rgba(2,4,14,0.7) 42%, rgba(2,4,14,0.66) 68%, rgba(2,4,14,0.92) 100%)"},stage:{type:"poster",src:t("lootbar","lootbar-website-hero.webp"),alt:"Lootbar campaign key visual: Peachy Ringz, Marion Berry Pie and Yuzu Sherbet pouches with the device, under “Bomb Flavors + Max Potency”",note:"The campaign key visual: three flavors staged, device as the prize."},gallery:[{kind:"tile",src:t("lootbar","lootbar-marion-berry-pie.webp"),alt:"Lootbar Marion Berry Pie key art: magenta HUD frame, blackberry-filled chest, chrome lettering",col:4,row:8,rowM:5,pad:"tight",caption:"The purest vaporwave frame in the set."},{kind:"tile",src:t("lootbar","lootbar-strawberry-lemonaid.webp"),alt:"Lootbar Strawberry Lemonaid key art: pink HUD frame, strawberries and lemon",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:t("lootbar","lootbar-lime-sorbet.webp"),alt:"Lootbar Lime Sorbet key art: acid-green HUD frame and limes",col:2,row:4,pad:"tight",caption:"Acid green: the palette break."},{kind:"divider",src:t("lootbar","lootbar-blueberry-dream.webp"),alt:"Lootbar Blueberry Dream key art: the cyan core-brand HUD frame, full bleed"},{kind:"tile",src:t("lootbar","lootbar-hawaiian-shaved-ice.webp"),alt:"Lootbar Hawaiian Shaved Ice key art: hibiscus, pineapple and shaved ice",col:3,row:6,pad:"tight",caption:"The one that breaks the two-color rule."},{kind:"tile",src:t("lootbar","lootbar-peachy-ringz.webp"),alt:"Lootbar Peachy Ringz key art: peaches, pixel hearts and Y2K chrome lettering",col:3,row:6,pad:"tight",caption:"Y2K, fully literal, pixel hearts included."},{kind:"tile",src:t("lootbar","lootbar-bomb-blaster.webp"),alt:"Lootbar Bomb Blaster key art: mixed berries and a lit cartoon bomb",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:t("lootbar","lootbar-ruby-red.webp"),alt:"Lootbar Ruby Red key art: blood orange and grapefruit under a red HUD frame",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:t("lootbar","lootbar-mango-mana.webp"),alt:"Lootbar Mango Mana key art: mango and yellow HUD frame",col:2,row:4,rowM:2,pad:"tight"},{kind:"tile",src:t("lootbar","lootbar-tiger-blood.webp"),alt:"Lootbar Tiger Blood key art: pineapple, cherry and coconut with clawed lettering",col:3,row:6,pad:"tight",caption:"Same armature, new character: the type does the shapeshifting."},{kind:"tile",src:t("lootbar","lootbar-yuzu-sherbet.webp"),alt:"Lootbar Yuzu Sherbet key art: yuzu citrus under a yellow HUD frame",col:3,row:6,pad:"tight"}],seo:{title:"Lootbar — Case Study · Zegoe",description:"Lootbar packaging and flavor key-art by Zegoe for LightHouse: a vaporwave loot-drop system of treasure chests, neon HUD frames and Y2K chrome lettering across 11 disposable-vape flavors."},next:"better"},{slug:"better",index:"06",name:"BETTER",categories:["Packaging","Cartridges","Gummies","Brand System"],position:"An occasion-based cannabis system that colors by time of day: Days, Sleep, Anytime.",blurb:"BETTER splits the day into three occasions and gives each its own script wordmark, illustrated landscape and palette: Days runs sunset orange into green (Sunshine Tangerine, on green tea extract, B12 and an uplifting terpene blend), Sleep runs midnight navy and berry (Midnight Mixed Berry, on lemon balm and L-theanine), Anytime runs lavender and lemon (Easy Lemon Lavender, on L-theanine and a harmonious terpene blend). The system carries from blister-carded cartridges to gummy pouches, each flavor pairing a THC/CBD ratio with a mood.",deliverables:["Occasion wordmark lockups, Days / Sleep / Anytime","Cartridge blister cards","Gummy pouch system","Color palette & inspiration boards","Illustrated landscape key art","Shipping carton"],visualIdentity:"A clean sky-blue master brand that fans out into occasion palettes: sunset orange-to-green for Days, midnight navy for Sleep, lavender-and-lemon for Anytime. Script sub-wordmarks name the occasion under the bold BETTER sans; illustrated landscapes carry each flavor's mood, and the supplement callouts stay in plain type.",logo:{src:"/brand-logo/better-hero.png",alt:"BETTER",scale:.62},palette:{bg:"#15060f",accent:"#ff4fa3",accentText:"#0a0a0a",glow:"rgba(255,79,163,0.32)"},pageBg:{src:"/portfolio/better/better-pattern-pink.webp",tile:"420px",opacity:.17,filter:"saturate(0.9) brightness(0.62)",drift:!1,bleed:10,scrim:"linear-gradient(180deg, rgba(21,6,15,0.62) 0%, rgba(21,6,15,0.26) 45%, rgba(21,6,15,0.72) 100%)"},stage:{type:"poster",src:t("better","better-pink-picasso-hero.webp"),alt:"BETTER Pink Picasso blister card: cartridge in a pink-and-white card on a pink podium, gold ring behind",note:"Pink Picasso: the blister card, staged."},gallery:[{kind:"tile",src:t("better","better-shipping-carton.jpg"),alt:"BETTER shipping carton: blue printed box with the wordmark",col:6,row:6,rowM:2,fit:"cover",caption:"The carton: the brand at its bluntest."},{kind:"tile",src:t("better","better-its-just-better-card.jpg"),alt:"“It’s Just BETTER” insert card",col:3,row:3,fit:"cover"},{kind:"tile",src:t("better","better-blister-front-back.jpg"),alt:"BETTER blister card, front and back",col:3,row:3,tile:"plate",fit:"cover"},{kind:"tile",src:t("better","better-days-pouches.webp"),alt:"BETTER Days gummy pouches: Sunshine Tangerine",col:6,row:6,rowM:2,fit:"cover",caption:"Days: Sunshine Tangerine."},{kind:"tile",src:t("better","better-sleep-pouch-gummies.webp"),alt:"BETTER Sleep gummy pouch with gummies: Midnight Mixed Berry",col:3,row:3,fit:"cover"},{kind:"tile",src:t("better","better-anytime-pouches.webp"),alt:"BETTER Anytime gummy pouches: Easy Lemon Lavender",col:3,row:3,fit:"cover",caption:"Sleep and Anytime own the night shift."},{kind:"tile",src:t("better","better-days-board.webp"),alt:"BETTER Days palette board: Sunshine Tangerine palette, supplements, mood and dose",col:6,row:6,rowM:2,tile:"plate",fit:"cover",caption:"The system, specced: palette, supplements, mood, dose."},{kind:"tile",src:t("better","better-sleep-board.webp"),alt:"BETTER Sleep palette board: Midnight Mixed Berry",col:3,row:3,tile:"plate",fit:"cover"},{kind:"tile",src:t("better","better-anytime-board.webp"),alt:"BETTER Anytime palette board: Easy Lemon Lavender",col:3,row:3,tile:"plate",fit:"cover"}],seo:{title:"BETTER — Case Study · Zegoe",description:"BETTER brand system by Zegoe: an occasion-based cannabis line (Days, Sleep, Anytime) with occasion wordmarks, illustrated landscape palettes, blister-carded cartridges and gummy pouches."},next:"garcia"}],ne=i=>D.find(s=>s.slug===i),le=i=>{const s=D.findIndex(y=>y.slug===i);if(s<0)return null;const p=D.length;return{prev:D[(s-1+p)%p],next:D[(s+1)%p],position:s+1,total:p}},ye=i=>{const s=[];let p=[];for(const y of i)y.kind==="tile"?p.push(y):(p.length&&s.push({type:"grid",tiles:p}),p=[],s.push({type:"divider",divider:y}));return p.length&&s.push({type:"grid",tiles:p}),s},ke=i=>{const s=i.col>=3?2:1,p=i.rowM??Math.max(2,Math.round(i.row*.75));return{"--c":i.col,"--r":i.row,"--cm":s,"--rm":p,...i.pos?{"--pos":i.pos}:{}}},xe=i=>["cs-tile",`cs-tile-${i.tile??"plain"}`,`cs-pad-${i.pad??"std"}`,i.fit==="cover"?"cs-fit-cover":"cs-fit-contain"].join(" "),W=i=>i.button===0&&!i.metaKey&&!i.ctrlKey&&!i.shiftKey&&!i.altKey;function Le({slug:i,onNext:s,onClose:p}){const y=j.useRef(null),H=j.useRef(null);j.useEffect(()=>{const a=y.current,h=H.current;if(!a||!h||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let n=null,o=a.parentElement;for(;o&&o!==document.body&&o!==document.documentElement;){if(o.classList.contains("cso-scroll")){n=o;break}const k=getComputedStyle(o).overflowY;if((k==="auto"||k==="scroll")&&o.scrollHeight>o.clientHeight){n=o;break}o=o.parentElement}let d=0;const T=()=>{d=0;const k=h.parentElement;if(!k)return;const x=h.offsetHeight-k.clientHeight;if(x<=0){h.style.transform="translate3d(0, 0, 0)";return}const E=n??document.scrollingElement??document.documentElement,B=E.scrollHeight-E.clientHeight,R=B>0?Math.min(1,Math.max(0,E.scrollTop/B)):0;h.style.transform=`translate3d(0, ${(-R*x).toFixed(2)}px, 0)`},g=()=>{d||(d=requestAnimationFrame(T))},m=n??window;return m.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g,{passive:!0}),T(),()=>{d&&cancelAnimationFrame(d),m.removeEventListener("scroll",g),window.removeEventListener("resize",g)}},[i]),j.useEffect(()=>{const a=y.current;if(!a||s||p||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const h=l=>{if(l.defaultPrevented||l.button!==0||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey)return;const c=l.target?.closest?.("a[href]");if(!c||c.target==="_blank"||c.hasAttribute("download"))return;const A=new URL(c.href,location.href);if(A.origin!==location.origin||A.pathname===location.pathname&&A.hash)return;l.preventDefault();const M=c.dataset.dir;n(c.href,M)};function n(l,c){o();try{sessionStorage.setItem("zg-nav",c??"1")}catch{}a.classList.add(c?`cs-leaving-${c}`:"cs-leaving"),window.setTimeout(()=>{location.href=l},260)}const o=()=>{a.style.willChange="opacity, transform";const l=a.querySelector("main");l&&(l.style.willChange="transform")},d=l=>{const c=l.target?.closest?.("a[href]");!c||c.target==="_blank"||c.hasAttribute("download")||o()},T=le(i);let g=0,m=0,k=0,x=!1;const E=32,B=l=>{if(x=!1,!T||l.touches.length!==1)return;const c=l.touches[0];c.clientX<E||c.clientX>window.innerWidth-E||l.target?.closest?.(".cs-stage, [data-no-swipe]")||(x=!0,g=c.clientX,m=c.clientY,k=l.timeStamp)},R=l=>{if(!x||!T)return;x=!1;const c=l.changedTouches[0];if(!c)return;const A=c.clientX-g,M=c.clientY-m;if(l.timeStamp-k>700||Math.abs(A)<64||Math.abs(A)<Math.abs(M)*1.6)return;const G=A<0;n(`/work/${G?T.next.slug:T.prev.slug}/`,G?"next":"prev")},I=()=>{x=!1};return a.addEventListener("click",h),a.addEventListener("pointerover",d),a.addEventListener("pointerdown",d),a.addEventListener("touchstart",B,{passive:!0}),a.addEventListener("touchend",R,{passive:!0}),a.addEventListener("touchcancel",I,{passive:!0}),()=>{a.removeEventListener("click",h),a.removeEventListener("pointerover",d),a.removeEventListener("pointerdown",d),a.removeEventListener("touchstart",B),a.removeEventListener("touchend",R),a.removeEventListener("touchcancel",I)}},[s,p,i]);const r=ne(i);if(!r)return null;const f=ne(r.next),u=le(i),S=!!(s||p),L=ye(r.gallery),w=r.pageBg,v=f.pageBg,N=r.client?ve[r.client]:void 0;return e.jsxs("div",{ref:y,className:"cs-page",style:{"--cs-bg":r.palette.bg,"--cs-accent":r.palette.accent,"--cs-accent-text":r.palette.accentText,"--cs-glow":r.palette.glow,...w?{"--cs-bg-src":`url("${w.src}")`,"--cs-bg-op":String(w.opacity),"--cs-bg-filter":w.filter??"none","--cs-bg-size":w.tile??"cover","--cs-bg-repeat":w.tile?"repeat":"no-repeat","--cs-bg-pos":w.pos??"50% 50%","--cs-bg-scrim":w.scrim,"--cs-bg-bleed":String(w.bleed??14)}:{}},children:[w&&e.jsx("div",{className:"cs-bgpin","aria-hidden":"true",children:e.jsxs("div",{className:"cs-bglayer",children:[e.jsx("div",{className:"cs-bgart",ref:H,children:e.jsx("div",{className:`cs-bgart-img${w.drift?" cs-bgart-drift":""}`})}),e.jsx("div",{className:"cs-bgscrim"})]})}),!S&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cs-topbar","aria-hidden":"true"}),e.jsxs("nav",{className:"cs-nav","aria-label":"Case study",children:[e.jsx("a",{href:"/",className:"cs-nav-logo",children:e.jsx("img",{src:"/Wordmark_White.png",alt:"Zegoe"})}),e.jsxs("a",{href:"/#work",className:"cs-nav-back",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M19 12H5M5 12l6-6M5 12l6 6"})}),e.jsx("span",{children:"All Work"})]})]})]}),e.jsxs("main",{children:[e.jsxs("header",{className:`cs-hero${r.heroArt?" cs-hero-arted":r.cover?" cs-hero-plated":""}`,children:[r.heroArt?.layers&&r.heroArt.canvas?e.jsx("div",{className:"cs-hero-art cs-hero-art-live",children:e.jsx("div",{className:"cs-hero-stage",role:"img","aria-label":r.heroArt.alt,style:{"--cs-art-w":r.heroArt.canvas[0],"--cs-art-h":r.heroArt.canvas[1]},children:r.heroArt.layers.map((a,h)=>{const[n,o]=r.heroArt.canvas,d={left:`${a.x/n*100}%`,top:`${a.y/o*100}%`,width:`${a.w/n*100}%`,zIndex:h+1};if(a.blend&&(d.mixBlendMode=a.blend),a.m){const[T,g,m,k,x]=a.m;d.animation=`cs-drift ${T}s ${g}s ease-in-out infinite`,d["--dx"]=`${m/n*100}%`,d["--dy"]=`${k/o*100}%`,d["--rot"]=`${x}deg`}else a.twinkle&&(d.animation=`cs-twinkle ${a.twinkle[0]}s ${a.twinkle[1]}s ease-in-out infinite`);return e.jsx("img",{className:"cs-hero-piece",src:`/portfolio/${r.slug}/hero/${a.key}.webp`,alt:"","aria-hidden":"true",draggable:!1,style:d},a.key)})})}):r.heroArt?e.jsx("div",{className:"cs-hero-art",children:e.jsx("img",{src:r.heroArt.src,alt:r.heroArt.alt,draggable:!1})}):r.cover&&e.jsx("div",{className:"cs-hero-plate","data-mat":r.cover.mat?"":void 0,children:e.jsx("img",{src:r.cover.src,alt:r.cover.alt,draggable:!1})}),e.jsxs("div",{className:"cs-hero-inner",children:[e.jsxs("p",{className:"cs-hero-eyebrow",children:["Case Study",u&&e.jsxs("span",{className:"cs-hero-count",children:[e.jsx("b",{children:String(u.position).padStart(2,"0")}),e.jsx("i",{children:"/"}),String(u.total).padStart(2,"0")]})]}),e.jsx("h1",{className:`cs-hero-name${r.logo?" cs-hero-name-logo":""}`,style:r.logo?.scale?{"--cs-logo-scale":r.logo.scale}:void 0,children:r.logo?e.jsx("img",{src:r.logo.src,alt:r.logo.alt,draggable:!1}):r.name}),e.jsx("p",{className:"cs-hero-pos",children:r.position}),e.jsx("div",{className:"cs-hero-chips",children:r.categories.map(a=>e.jsx("span",{className:"cs-chip",children:a},a))}),r.client&&e.jsxs("p",{className:"cs-hero-client",children:[e.jsx("span",{className:"cs-hero-client-label",children:"Client —"}),N?e.jsx("img",{className:"cs-hero-clientlogo",src:N.src,alt:N.alt,draggable:!1}):e.jsx("span",{className:"cs-hero-client-name",children:r.client})]})]}),e.jsx("div",{className:"cs-hero-scroll","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M12 19l-6-6M12 19l6-6"})})})]}),e.jsxs("section",{className:"cs-stage-section","aria-label":r.stage.type==="model"?"Interactive product model":"Product centerpiece",children:[e.jsxs("div",{className:"cs-section-head",children:[e.jsx("p",{className:"cs-eyebrow",children:"The Product"}),e.jsx("p",{className:"cs-stage-note",children:r.stage.note})]}),e.jsx("div",{className:"cs-stage-frame",children:r.stage.type==="model"?e.jsx(me,{modelUrl:r.stage.url,poster:r.stage.poster,posterAlt:r.stage.posterAlt,accent:r.palette.accent,yaw:r.stage.yaw??0},r.slug):r.stage.type==="poster"?e.jsx(we,{src:r.stage.src,alt:r.stage.alt},r.slug):e.jsx(ue,{hero:r.stage.hero,heroAlt:r.stage.heroAlt,backdrop:r.stage.backdrop},r.slug)})]}),e.jsxs("section",{className:"cs-story",children:[e.jsxs("blockquote",{className:"cs-quote",children:[e.jsx("span",{className:"cs-quote-bar","aria-hidden":"true"}),r.position]}),e.jsx("p",{className:"cs-blurb",children:r.blurb}),e.jsxs("div",{className:"cs-story-grid",children:[e.jsxs("div",{className:"cs-story-col",children:[e.jsx("h2",{className:"cs-eyebrow",children:"Deliverables"}),e.jsx("ul",{className:"cs-deliverables",children:r.deliverables.map(a=>e.jsx("li",{className:"cs-chip cs-chip-dim",children:a},a))})]}),e.jsxs("div",{className:"cs-story-col",children:[e.jsxs("h2",{className:"cs-eyebrow",children:["Visual Identity",r.storyMark&&e.jsx("img",{className:"cs-story-mark",src:r.storyMark.src,alt:r.storyMark.alt,loading:"lazy"})]}),e.jsx("p",{className:"cs-vi",children:r.visualIdentity})]})]})]}),e.jsxs("section",{className:"cs-gallery","aria-label":"Project gallery",children:[e.jsx("div",{className:"cs-section-head",children:e.jsx("p",{className:"cs-eyebrow",children:"The Work"})}),L.map((a,h)=>a.type==="grid"?e.jsx("div",{className:"cs-grid",children:a.tiles.map(n=>e.jsxs("figure",{className:xe(n),style:ke(n),children:[e.jsx("img",{src:n.src,alt:n.alt,loading:"lazy",decoding:"async"}),n.caption&&e.jsx("figcaption",{className:"cs-cap",children:n.caption})]},n.src))},h):e.jsx("div",{className:"cs-band",children:e.jsx("img",{src:a.divider.src,alt:a.divider.alt,loading:"lazy",decoding:"async"})},h))]}),e.jsxs("footer",{className:"cs-next",children:[e.jsxs("a",{href:`/work/${f.slug}`,className:"cs-next-link","data-dir":"next",onClick:s?a=>{W(a)&&(a.preventDefault(),s(f.slug))}:void 0,style:{"--nx-bg":f.palette.bg,"--nx-accent":f.palette.accent,"--nx-glow":f.palette.glow,...v?{"--nx-art":`url("${v.src}")`,"--nx-art-op":String(Math.min(.6,v.opacity*2.4)),"--nx-art-filter":v.filter??"none","--nx-art-size":v.tile??"cover","--nx-art-repeat":v.tile?"repeat":"no-repeat","--nx-art-pos":v.pos??"50% 50%"}:{}},children:[v&&e.jsx("span",{className:"cs-next-art","aria-hidden":"true"}),e.jsx("span",{className:"cs-next-scrim","aria-hidden":"true"}),e.jsx("span",{className:"cs-eyebrow",children:"Next Project"}),e.jsxs("span",{className:"cs-next-name",children:[e.jsx("span",{className:"cs-next-index",children:f.index}),f.logo?e.jsx("img",{className:"cs-next-logo",src:f.logo.src,alt:f.logo.alt,draggable:!1,style:f.logo.scale?{"--nx-logo-scale":f.logo.scale}:void 0}):f.name,e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]})]}),e.jsx("a",{href:"/#work",className:"cs-all-work",onClick:p?a=>{W(a)&&(a.preventDefault(),p())}:void 0,children:"All Work"})]})]}),u&&e.jsx("div",{className:"cs-pagerpin",children:e.jsxs("nav",{className:"cs-pagerbar","aria-label":"Case studies",children:[e.jsxs("a",{href:`/work/${u.prev.slug}`,className:"cs-pagerbar-link","data-dir":"prev",onClick:s?a=>{W(a)&&(a.preventDefault(),s(u.prev.slug))}:void 0,children:[e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M19 12H5M5 12l6-6M5 12l6 6"})}),e.jsxs("span",{children:[e.jsx("i",{children:"Previous"}),e.jsx("b",{children:u.prev.name})]})]}),e.jsxs("span",{className:"cs-pagerbar-here",children:[e.jsxs("span",{className:"cs-pagerbar-count","aria-hidden":"true",children:[e.jsx("b",{children:String(u.position).padStart(2,"0")}),e.jsx("i",{children:"/"}),String(u.total).padStart(2,"0")]}),e.jsx("em",{children:r.name})]}),e.jsxs("a",{href:`/work/${u.next.slug}`,className:"cs-pagerbar-link cs-pagerbar-next","data-dir":"next",onClick:s?a=>{W(a)&&(a.preventDefault(),s(u.next.slug))}:void 0,children:[e.jsxs("span",{children:[e.jsx("i",{children:"Next"}),e.jsx("b",{children:u.next.name})]}),e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M5 12h14M19 12l-6-6M19 12l-6 6"})})]})]})}),e.jsx("style",{children:`
        /* ═══ Page frame ═══ */
        .cs-page {
          position: relative;
          background: var(--cs-bg);
          color: #fff;
          min-height: 100vh;
          animation: cs-page-in 0.5s ease-out both;
        }
        /* Opacity on the page, the rise on <main> — a transform on .cs-page
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
           one you are opening arrives from the right — the set reads as a
           strip you travel along. Backwards is the mirror. */
        .cs-page.cs-leaving-next > main { animation: cs-slide-out-left 0.26s ease-in forwards; }
        .cs-page.cs-leaving-prev > main { animation: cs-slide-out-right 0.26s ease-in forwards; }
        @keyframes cs-slide-out-left  { to { transform: translate3d(-7vw, 0, 0); } }
        @keyframes cs-slide-out-right { to { transform: translate3d(7vw, 0, 0); } }
        html.zg-arriving-next .cs-page > main { animation: cs-slide-in-right 0.55s cubic-bezier(.16,.84,.34,1) both; }
        html.zg-arriving-prev .cs-page > main { animation: cs-slide-in-left 0.55s cubic-bezier(.16,.84,.34,1) both; }
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
        .cs-nav-logo img { height: 1.25rem; width: auto; display: block; }
        .cs-nav-logo { transition: opacity 0.2s ease; }
        .cs-nav-logo:hover { opacity: 0.8; }
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
          /* Glow only — no flat fill, or it would occlude the art layer.
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
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          padding: 0 clamp(1rem, 4vw, 3rem) 0.95rem;
          /* Neutral dark rather than the brand colour: this bar sits over
             every section of the page, including the light gallery plates.
             No border, no flat panel — it fades up out of the page. */
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
           The space goes on <main>, ABOVE the pin — put it on .cs-page and the
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
        /* Logo titles run taller than the type they replace — a wordmark has
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
           mark set inline after "CLIENT —" reads as the end of a sentence, and
           its baseline never agrees with the letterspaced caps beside it. On
           its own row it reads as what it is, a credited party under a
           heading. Same shape whether the client is a mark or a name. */
        .cs-hero-client-label { display: block; margin-bottom: 0.6rem; }
        .cs-hero-client-name { color: rgba(255,255,255,0.85); }
        /* Sized off the label, not the h1 — this is a credit, so the mark
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
          /* Width leads and height follows from 4:5 — never the other way
             round. Height-leads plus a max-width cap silently broke the
             ratio on any window under ~1.42:1 (the cap bound, the box went
             narrow, and object-fit: cover shaved up to 9.7% off the sides —
             at 1280x1000 the covers lost their left and right frame). 68vh is
             the same width height:85% used to produce, so wide windows are
             unchanged; narrow ones now lose a little height instead of art. */
          width: min(48vw, 68vh);
          height: auto;
          aspect-ratio: 4 / 5;
          /* No frame, no mat, no hairline — this box is only a layout slot;
             the artwork is the object and it floats inside it. */
          overflow: visible;
        }
        /* Keep the copy clear of the plate — the h1 used to run onto it.
           68vh is the plate's width when height is 85% of a 100vh hero. */
        .cs-hero-plated {
          padding-right: calc(
            min(48vw, 68vh) + clamp(0.75rem, 2.5vw, 2.5rem) + clamp(2rem, 5vw, 5rem)
          );
        }
        /* Bloom under the art, in the brand accent — what lifts it off the
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
          /* The cast shadow is the ONLY floating cue — no bob. Long and soft,
             so it reads as height off the page rather than a card border. */
          box-shadow:
            0 2.5rem 4.5rem rgba(0,0,0,0.55),
            0 0.75rem 1.5rem rgba(0,0,0,0.35);
        }
        /* Art that isn't 4:5 — the flavor key arts are square, and their HUD
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
           where the artwork was drawn to land — no crop, no box, no cast
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
        /* Direct child only — the exploded variant nests its pieces inside a
           stage, and object-fit on those would fight their placement. */
        .cs-hero-art > img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: 100% 50%;
        }
        /* The copy stops where the artwork starts. Both collages open their
           dense half — the pouches, the device, the shadows they cast — at
           about 44% of the frame, so the gutter is the remaining 56% of the
           RENDERED width: 56vw while the art is fitting to the window's width,
           97vh once it is fitting to its height (16:9 makes that 0.56 × 16/9).
           Measured from the artwork rather than from the box, or the longest
           line of the position lands on a pouch. The loose sparkles and torn
           stickers that drift further left are meant to pass behind the type,
           and do — the collage sits a layer under it. */
        .cs-hero-arted {
          padding-right: calc(min(56vw, 99.5vh) + clamp(1rem, 2vw, 2rem));
          background: radial-gradient(85% 95% at 74% 45%, var(--cs-glow) 0%, transparent 45%);
        }

        /* ── The exploded collage ──
           The stage reproduces the rect a contain-fit gives the flat
           image — 16:9, as wide as the hero or as tall, whichever binds — so
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
        /* One keyframe for every piece — the travel is per-element custom
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

        /* ═══ Unplated hero — a case study with no cover ═══
           The copy column is sized to leave the plate its half of the screen.
           With no plate there is nothing in that half, so left-aligned copy
           hangs off the edge of a large empty area. Centred, the copy is the
           composition instead of the leftover of one. Written as :not() rather
           than a modifier class so none of it can reach the plated heroes —
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
        /* Both marks are display:block boxes with object-position: left — the
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
            /* Undo the gutter that reserves the plate's column on desktop —
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
               hero — the art then covers the copy. */
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            max-width: none;
            transform: none;
            /* Capped, or at ~1100px the stacked plate becomes a billboard —
               it has to stay an object you could pick up. */
            width: min(100%, 32rem);
            height: auto;
            max-height: none;
            margin-top: 2.75rem;
          }
          /* The collage stacks under the copy on the same terms as the plate.
             Its empty left half only earns its keep next to type — stacked
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
        /* Art layer, then scrim, then copy — the eyebrow and mark are flow
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
        /* Smaller than the hero's mark — this is a teaser, not the title — but
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

        /* ═══ Mobile ═══ */
        @media (max-width: 767px) {
          .cs-hero { min-height: 88vh; padding-top: 6rem; }
          .cs-hero-count { font-size: 1.15rem; }
          .cs-pagerbar { height: 4.25rem; padding-bottom: 0.8rem; }
          .cs-pagerbar-link b { font-size: 0.78rem; max-width: 6.5rem; }
          .cs-pagerbar-here em { display: none; }
          .cs-page > main { padding-bottom: 3rem; }
          .cs-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 82px; gap: 0.7rem; }
          .cs-tile { grid-column: span var(--cm); grid-row: span var(--rm); }
          .cs-pad-roomy img { padding: 1.25rem; }
          .cs-pad-std img { padding: 0.9rem; }
          .cs-story-grid { grid-template-columns: 1fr; gap: 2.25rem; }
          .cs-band { height: 180px; margin: 1.5rem calc(50% - 50vw); }
          /* 0.55rem was 8.8px of letterspaced caps over artwork — under the
             readable floor on a phone. The tracking comes in a little to pay
             for the extra width so the captions still hold one or two lines. */
          .cs-cap { font-size: 0.75rem; letter-spacing: 0.1em; left: 0.7rem; right: 0.7rem; bottom: 0.6rem; }

          /* A phone column is narrow enough that body copy and section
             eyebrows run the full width, and the desktop scrim is out of
             ramp by the bar's own 4rem — so mid-scroll a paragraph would
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
      `})]})}export{Le as C,le as a,ne as g};
