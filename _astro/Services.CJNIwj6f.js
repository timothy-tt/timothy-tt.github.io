import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as i}from"./index.DiEladB3.js";import{g as c}from"./index.CB87Sc6I.js";import{S as b}from"./ScrollTrigger.Cv03IO65.js";c.registerPlugin(b);const k={garcia:{accent:"#ff4fd8",bg:"#080608"},strane:{accent:"#e5ff00",bg:"#0b0b06"},avitas:{accent:"#e8c87a",bg:"#04141c"},hellavated:{accent:"#b6ff2e",bg:"#070707"}},y=[{number:"01",title:"BRAND IDENTITY",spine:"One identity, everywhere it lives.",body:"Logo systems, packaging design, product photography, merch, and the visual language that ties them together.",chips:["logo systems","packaging design","product photography","merch","visual language"],proof:[{project:"garcia",name:"Garcia HandPicked",credit:"logo lockups, motifs & merch",img:"/portfolio/garcia/hi/ghp-merch-guitar-pick.webp",href:"/work/garcia"},{project:"avitas",name:"AVITAS",credit:"geometric mark & tiered system",img:"/portfolio/avitas/hi/avitas-live-resin-aio-agnostic.webp",href:"/work/avitas"},{project:"strane",name:"Strane",credit:"strain labels & packaging system",img:"/portfolio/strane/hi/strane-mi-flower-28g-front.webp",href:"/work/strane"},{project:"hellavated",name:"Hellavated",credit:"fruit-forward key art & gummy ecosystem",img:"/portfolio/hellavated/hi/hellavated-ma-hellymelts-badassle.webp",href:"/work/hellavated"}]},{number:"02",title:"PRODUCT VISUALIZATION",spine:"Photoreal 3D before the product exists.",body:"Product mockups, planogram and retail display concepts, exhibition visuals that sell the shelf, not just the SKU.",chips:["product mockups","planogram concepts","retail displays","exhibition visuals"],proof:[{project:"strane",name:"Strane",credit:"device renders & web 3D",img:"/portfolio/strane/hi/strane-ma-ripstick-1g-generic.webp",href:"/work/strane"},{project:"avitas",name:"AVITAS",credit:"photoreal cartridge renders",img:"/portfolio/avitas/hi/avitas-live-resin-vapebox-2024.webp",href:"/work/avitas"},{project:"hellavated",name:"Hellavated",credit:"galaxy device modeling",img:"/portfolio/hellavated/hi/hellavated-galaxy-device-mockup.webp",href:"/work/hellavated"}]},{number:"03",title:"WEB & DIGITAL PRESENTATION",spine:"The brand, live.",body:"Websites built to show the work moving, plus the social content that keeps the feed on-brand between launches.",chips:["web design","development","interactive 3D","social content"],seenIn:[{label:"zegoe.com (you're on it)"}]},{number:"04",title:"EMBEDDED DESIGN",spine:"Your in-house team, without the headcount.",body:"We embed with agencies and brand teams as a temporary-to-long-term designer: adapting existing product lines, extending systems, clearing production queues. For as long as the work needs us.",chips:["agency overflow","white-label production","retainer support","line extensions"],pointsLabel:"How we plug in",points:["Agency overflow & white-label production","Brand-side design support on retainer","Adapting live product lines & packaging systems","Weeks-to-months engagements, no onboarding drag"]}],j=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function N({number:r,title:p,onOpen:s,rowRef:t}){return e.jsx("div",{ref:t,className:"svc-row",role:"button",tabIndex:0,"aria-haspopup":"dialog","aria-label":`${p} — service details`,onClick:s,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),s())},children:e.jsxs("div",{className:"svc-row-inner",children:[e.jsxs("div",{className:"svc-row-left",children:[e.jsx("span",{className:"svc-row-number",children:r}),e.jsx("h3",{className:"svc-row-title",children:p})]}),e.jsx("div",{className:"svc-row-right",children:e.jsx("div",{className:"svc-row-arrow",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),e.jsx("polyline",{points:"7 7 17 7 17 17"})]})})})]})})}function E({proof:r}){const p=k[r.project],s={"--pa":p.accent,"--pb":p.bg},t=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`svc-proof-thumb${r.cover?" svc-proof-thumb--cover":""}`,children:e.jsx("img",{src:r.img,alt:`${r.name} — ${r.credit}`,loading:"lazy",decoding:"async"})}),e.jsxs("span",{className:"svc-proof-meta",children:[e.jsxs("span",{className:"svc-proof-name",children:[r.name,r.href&&e.jsxs("svg",{className:"svc-proof-arrow",width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),e.jsx("polyline",{points:"7 7 17 7 17 17"})]})]}),e.jsx("span",{className:"svc-proof-credit",children:r.credit})]}),r.soon&&e.jsx("span",{className:"svc-proof-soon-tag",children:"soon"})]});return r.href?e.jsx("a",{className:"svc-proof-card",href:r.href,style:s,children:t}):e.jsx("div",{className:"svc-proof-card svc-proof-card--soon",style:s,children:t})}function S({service:r,onClose:p}){const s=i.useRef(null),t=i.useRef(null),d=i.useRef(null),f=i.useRef(!1),v=()=>typeof window<"u"&&window.matchMedia("(max-width: 767px)").matches;i.useLayoutEffect(()=>{!s.current||!t.current||(j()?(c.set(s.current,{opacity:1}),c.set(t.current,{opacity:1,y:0,yPercent:0,scale:1})):(c.fromTo(s.current,{opacity:0},{opacity:1,duration:.35,ease:"power2.out"}),v()?c.fromTo(t.current,{opacity:1,yPercent:100},{yPercent:0,duration:.5,ease:"power3.out"}):c.fromTo(t.current,{opacity:0,y:28,scale:.96},{opacity:1,y:0,scale:1,duration:.45,ease:"power3.out"})),d.current?.focus({preventScroll:!0}))},[]),i.useEffect(()=>{const o=window.__lenis;o?.stop?.();const n=document.documentElement.style.overflow,g=document.body.style.overflow;return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",()=>{document.documentElement.style.overflow=n,document.body.style.overflow=g,o?.start?.()}},[]);const m=i.useCallback(o=>{if(f.current)return;if(f.current=!0,j()||!s.current||!t.current){p(o);return}const n=c.timeline({onComplete:()=>p(o)});v()?n.to(t.current,{yPercent:100,duration:.35,ease:"power2.in"},0):n.to(t.current,{opacity:0,y:16,scale:.97,duration:.25,ease:"power2.in"},0),n.to(s.current,{opacity:0,duration:.3,ease:"power2.in"},.05)},[p]);i.useEffect(()=>{const o=n=>{if(n.key==="Escape")n.preventDefault(),m();else if(n.key==="Tab"){const g=t.current;if(!g)return;const x=g.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');if(!x.length)return;const h=x[0],w=x[x.length-1],u=document.activeElement;g.contains(u)?n.shiftKey&&u===h?(n.preventDefault(),w.focus()):!n.shiftKey&&u===w&&(n.preventDefault(),h.focus()):(n.preventDefault(),h.focus())}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[m]);const l=o=>n=>{n.preventDefault(),m(o)},a=`svc-modal-title-${r.number}`;return e.jsxs("div",{className:"svc-modal-root",children:[e.jsx("div",{ref:s,className:"svc-modal-overlay",onClick:()=>m()}),e.jsxs("div",{ref:t,className:`svc-modal-panel${r.proof?" svc-modal-panel--proof":""}`,role:"dialog","aria-modal":"true","aria-labelledby":a,children:[e.jsx("button",{ref:d,type:"button",className:"svc-modal-close","aria-label":"Close",onClick:()=>m(),children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("line",{x1:"5",y1:"5",x2:"19",y2:"19"}),e.jsx("line",{x1:"19",y1:"5",x2:"5",y2:"19"})]})}),e.jsxs("div",{className:"svc-modal-head",children:[e.jsx("span",{className:"svc-modal-number",children:r.number}),e.jsx("h3",{id:a,className:"svc-modal-title",children:r.title})]}),e.jsx("p",{className:"svc-modal-spine",children:r.spine}),e.jsx("p",{className:"svc-modal-body",children:r.body}),e.jsx("div",{className:"svc-modal-chips",children:r.chips.map(o=>e.jsx("span",{className:"svc-modal-chip",children:o},o))}),r.proof?e.jsxs("div",{className:"svc-modal-proof",children:[e.jsx("span",{className:"svc-modal-seen-label",children:"Seen in"}),e.jsx("div",{className:"svc-proof-grid",children:r.proof.map(o=>e.jsx(E,{proof:o},o.name))})]}):r.points?e.jsxs("div",{className:"svc-modal-seen svc-modal-points",children:[e.jsx("span",{className:"svc-modal-seen-label",children:r.pointsLabel??"What it looks like"}),e.jsx("ul",{className:"svc-modal-point-list",children:r.points.map(o=>e.jsx("li",{className:"svc-modal-point",children:o},o))})]}):e.jsxs("div",{className:"svc-modal-seen",children:[e.jsx("span",{className:"svc-modal-seen-label",children:"Seen in"}),e.jsx("span",{className:"svc-modal-seen-items",children:r.seenIn?.map(o=>o.href?e.jsx("a",{className:"svc-modal-seen-link",href:o.href,onClick:l(o.href),children:o.label},o.label):e.jsx("span",{className:"svc-modal-seen-flat",children:o.label},o.label))})]}),e.jsx("a",{className:"svc-modal-cta",href:"#contact",onClick:l("#contact"),children:"Start a Project"})]})]})}function T(){const[r,p]=i.useState(null),s=i.useRef(null),t=i.useRef(null),d=i.useRef(null),f=i.useRef([]);i.useEffect(()=>{const l=c.context(()=>{if(t.current){const a=t.current.querySelectorAll(".svc-label, .svc-heading, .svc-header-desc");c.set(a,{y:50,opacity:0}),b.create({trigger:t.current,start:"top 85%",onEnter:()=>{c.to(a,{y:0,opacity:1,duration:.8,stagger:.12,ease:"power3.out"})},once:!0})}if(d.current){const a=d.current.querySelectorAll(".svc-row");c.set(a,{y:40,opacity:0}),b.create({trigger:d.current,start:"top 85%",onEnter:()=>{c.to(a,{y:0,opacity:1,duration:.7,stagger:.1,ease:"power3.out"})},once:!0})}t.current&&c.fromTo(t.current.querySelector(".svc-heading"),{y:0},{y:-50,ease:"none",scrollTrigger:{trigger:s.current,start:"top bottom",end:"bottom top",scrub:2}}),d.current&&d.current.querySelectorAll(".svc-row").forEach((a,o)=>{c.to(a,{y:-(18+o*8),ease:"none",scrollTrigger:{trigger:s.current,start:"top bottom",end:"bottom top",scrub:1.5+o*.3}})})},s);return()=>l.revert()},[]);const v=i.useCallback(l=>{p(l)},[]),m=i.useCallback(l=>{const a=r;p(null),requestAnimationFrame(()=>{if(a!==null&&f.current[a]?.focus({preventScroll:!0}),l){const o=window.__lenis;o?.scrollTo?o.scrollTo(l):document.querySelector(l)?.scrollIntoView({behavior:"smooth"})}})},[r]);return e.jsxs("section",{id:"services",ref:s,className:"svc-section",children:[e.jsx("div",{style:{position:"absolute",top:"-140px",left:"50%",transform:"translateX(-50%)",width:"clamp(600px, 80vw, 1200px)",height:"500px",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(220,220,225,0.08) 0%, rgba(185,185,190,0.04) 35%, rgba(150,150,155,0.02) 55%, transparent 75%)",filter:"blur(70px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",top:"-60px",right:"5%",width:"400px",height:"300px",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(210,210,215,0.05) 0%, rgba(180,180,185,0.025) 50%, transparent 75%)",filter:"blur(60px)",pointerEvents:"none"}}),e.jsxs("div",{className:"svc-container",children:[e.jsxs("div",{ref:t,className:"svc-header",children:[e.jsxs("div",{className:"svc-header-left",children:[e.jsx("p",{className:"svc-label",children:"[  OUR SERVICES  ]"}),e.jsxs("h2",{className:"svc-heading",children:["The services",e.jsx("br",{}),"we ",e.jsx("span",{className:"svc-heading-accent",children:"provide"})]})]}),e.jsx("div",{className:"svc-header-right",children:e.jsx("p",{className:"svc-header-desc",children:"Identity, product visualization, digital and embedded design, all built as one system. Pick a lane, or hand us the whole brand."})})]}),e.jsx("div",{ref:d,className:"svc-list",children:y.map((l,a)=>e.jsx(N,{number:l.number,title:l.title,onOpen:()=>v(a),rowRef:o=>f.current[a]=o},l.number))})]}),r!==null&&e.jsx(S,{service:y[r],onClose:m}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"160px",background:"linear-gradient(to bottom, transparent, #000)",pointerEvents:"none"}}),e.jsx("style",{children:`
        .svc-section {
          /* Pull up into Hero fade zone — eliminates dead dark gap */
          margin-top: -60px;
          /* Golden ratio inspired: top padding ~1.618× bottom padding */
          padding: clamp(40px, 5vw, 72px) 0 clamp(80px, 10vw, 140px);
          position: relative;
          overflow: hidden;
        }

        .svc-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 40px);
        }

        /* ── Header — split ── */
        .svc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          /* ~golden ratio of section top padding: 100px × 0.618 ≈ 62px */
          margin-bottom: clamp(40px, 5vw, 64px);
        }

        .svc-header-left {
          flex: 1;
          min-width: 0;
        }

        .svc-header-right {
          flex: 0 1 380px;
          display: flex;
          align-items: flex-end;
        }

        .svc-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 16px;
        }

        .svc-heading {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .svc-heading-accent {
          background: linear-gradient(90deg, #FFA040, #FF5A1F, #E64500, #FFA040);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-slide 4s linear infinite;
        }

        .svc-header-desc {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.4);
          max-width: 360px;
        }

        /* ── Service list ── */
        .svc-list {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* ── Service row ── */
        .svc-row {
          position: relative;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          overflow: hidden;
        }

        .svc-row:focus-visible {
          outline: 2px solid rgba(255, 90, 31, 0.7);
          outline-offset: -2px;
        }

        .svc-row::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.04);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          pointer-events: none;
        }

        .svc-row:hover::before,
        .svc-row:focus-visible::before {
          transform: scaleX(1);
        }

        .svc-row:hover .svc-row-number,
        .svc-row:focus-visible .svc-row-number {
          color: rgba(255, 255, 255, 0.9);
        }

        .svc-row:hover .svc-row-title,
        .svc-row:focus-visible .svc-row-title {
          color: #ffffff;
        }

        .svc-row-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(24px, 3.5vw, 40px) 0;
          gap: clamp(24px, 4vw, 48px);
        }

        /* Left side: number + title */
        .svc-row-left {
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.5vw, 28px);
          flex-shrink: 0;
        }

        .svc-row-number {
          font-size: clamp(13px, 1.2vw, 16px);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.35);
          font-variant-numeric: tabular-nums;
          transition: color 0.35s ease;
          min-width: 28px;
        }

        .svc-row-title {
          font-size: clamp(1.4rem, 3.5vw, 3rem);
          font-weight: 800;
          color: rgba(255, 255, 255, 0.75);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.1;
          transition: color 0.35s ease;
          white-space: nowrap;
          flex: 1;
          text-align: center;
        }

        /* Right side: arrow */
        .svc-row-right {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .svc-row-arrow {
          color: rgba(255, 255, 255, 0.3);
          transition: color 0.35s ease;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: color 0.35s ease, border-color 0.35s ease;
        }

        .svc-row:hover .svc-row-arrow,
        .svc-row:focus-visible .svc-row-arrow {
          color: #E64500;
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* ── Service detail popup ── */
        .svc-modal-root {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .svc-modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          opacity: 0;
        }

        .svc-modal-panel {
          position: relative;
          width: min(620px, 100%);
          max-height: min(86vh, 720px);
          overflow-y: auto;
          background: #101012;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: clamp(28px, 4vw, 44px);
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 90, 31, 0.06);
          opacity: 0;
        }

        .svc-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: transparent;
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .svc-modal-close:hover,
        .svc-modal-close:focus-visible {
          color: #ffffff;
          border-color: rgba(255, 90, 31, 0.6);
        }

        .svc-modal-head {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 18px;
          padding-right: 48px;
        }

        .svc-modal-number {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 900;
          line-height: 1;
          color: rgba(255, 255, 255, 0.18);
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.02em;
        }

        .svc-modal-title {
          font-size: clamp(1.5rem, 3.4vw, 2.4rem);
          font-weight: 900;
          line-height: 1.05;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .svc-modal-spine {
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          font-weight: 700;
          color: #FF5A1F;
          margin-bottom: 14px;
        }

        .svc-modal-body {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.62);
          margin-bottom: 24px;
        }

        .svc-modal-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 26px;
        }

        .svc-modal-chip {
          display: inline-flex;
          align-items: center;
          padding: 6px 13px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          white-space: nowrap;
        }

        .svc-modal-seen {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 8px 14px;
          margin-bottom: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .svc-modal-seen-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
        }

        .svc-modal-seen-items {
          display: inline-flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 8px 16px;
        }

        .svc-modal-seen-link {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: underline;
          text-decoration-color: rgba(255, 90, 31, 0.5);
          text-underline-offset: 4px;
          transition: color 0.25s ease, text-decoration-color 0.25s ease;
        }

        .svc-modal-seen-link:hover,
        .svc-modal-seen-link:focus-visible {
          color: #FF5A1F;
          text-decoration-color: #FF5A1F;
        }

        .svc-modal-seen-flat {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.55);
        }

        /* Text-led detail points — services with no project proof to show */
        .svc-modal-points {
          display: block;
        }

        .svc-modal-point-list {
          list-style: none;
          margin: 12px 0 0;
          padding: 0;
          display: grid;
          gap: 8px;
        }

        .svc-modal-point {
          position: relative;
          padding-left: 18px;
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.6);
        }

        .svc-modal-point::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF5A1F;
          opacity: 0.75;
        }

        /* ── Project proof cards ── */
        .svc-modal-panel--proof {
          width: min(880px, 100%);
        }

        .svc-modal-proof {
          margin-bottom: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .svc-proof-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 14px;
        }

        /* Desktop: two-column — copy left, proof cards stacked right */
        @media (min-width: 768px) {
          .svc-modal-panel--proof {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 316px;
            column-gap: 22px;
            align-content: start;
          }

          .svc-modal-panel--proof > .svc-modal-head,
          .svc-modal-panel--proof > .svc-modal-spine,
          .svc-modal-panel--proof > .svc-modal-body,
          .svc-modal-panel--proof > .svc-modal-chips,
          .svc-modal-panel--proof > .svc-modal-cta {
            grid-column: 1;
          }

          .svc-modal-panel--proof > .svc-modal-cta {
            justify-self: start;
            align-self: end;
          }

          .svc-modal-panel--proof > .svc-modal-proof {
            grid-column: 2;
            grid-row: 1 / span 5;
            margin-bottom: 0;
            padding-top: 0;
            border-top: none;
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            padding-left: 22px;
          }

          .svc-modal-panel--proof .svc-proof-grid {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 12px;
          }

          .svc-modal-panel--proof .svc-proof-card {
            flex-direction: row;
            align-items: stretch;
          }

          .svc-modal-panel--proof .svc-proof-thumb {
            width: 96px;
            height: auto;
            min-height: 84px;
            padding: 8px;
            flex-shrink: 0;
          }

          .svc-modal-panel--proof .svc-proof-meta {
            flex: 1;
            justify-content: center;
            padding: 10px 12px;
          }
        }

        .svc-proof-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid color-mix(in srgb, var(--pa) 22%, transparent);
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          text-decoration: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        a.svc-proof-card:hover,
        a.svc-proof-card:focus-visible {
          border-color: color-mix(in srgb, var(--pa) 65%, transparent);
          box-shadow: 0 0 22px color-mix(in srgb, var(--pa) 24%, transparent);
        }

        .svc-proof-card--soon {
          opacity: 0.6;
        }

        .svc-proof-thumb {
          display: block;
          height: 128px;
          background: var(--pb);
          padding: 10px;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .svc-proof-thumb img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .svc-proof-thumb--cover {
          padding: 0;
        }

        .svc-proof-thumb--cover img {
          object-fit: cover;
        }

        .svc-proof-meta {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 11px 13px 13px;
        }

        .svc-proof-name {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .svc-proof-arrow {
          color: rgba(255, 255, 255, 0.35);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        a.svc-proof-card:hover .svc-proof-arrow,
        a.svc-proof-card:focus-visible .svc-proof-arrow {
          color: var(--pa);
          transform: translate(1px, -1px);
        }

        .svc-proof-credit {
          font-size: 11px;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.48);
        }

        .svc-proof-soon-tag {
          position: absolute;
          top: 8px;
          right: 8px;
          padding: 3px 8px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(0, 0, 0, 0.45);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
        }

        .svc-modal-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: #000000;
          background: linear-gradient(135deg, #FF5A1F 0%, #FFA040 100%);
          box-shadow: 0 0 18px rgba(255, 90, 31, 0.25);
          transition: box-shadow 0.2s ease;
        }

        .svc-modal-cta:hover,
        .svc-modal-cta:focus-visible {
          box-shadow: 0 0 26px rgba(255, 160, 64, 0.35);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .svc-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .svc-header-right {
            flex: none;
          }

          .svc-row-inner {
            padding: 20px 0;
          }

          /* Long titles wrap instead of shoving the arrow off-screen */
          .svc-row-left {
            flex-shrink: 1;
            min-width: 0;
          }

          .svc-row-title {
            white-space: normal;
            text-align: left;
            overflow-wrap: break-word;
          }
        }

        /* Popup becomes a bottom sheet on mobile */
        @media (max-width: 767px) {
          .svc-modal-root {
            align-items: flex-end;
            padding: 0;
          }

          .svc-modal-panel {
            width: 100%;
            max-height: 88vh;
            border-radius: 20px 20px 0 0;
            border-left: none;
            border-right: none;
            border-bottom: none;
            padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
          }

          /* Proof cards stack full-width as compact horizontal rows */
          .svc-proof-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .svc-proof-card {
            flex-direction: row;
            align-items: stretch;
          }

          .svc-proof-thumb {
            width: 96px;
            height: auto;
            min-height: 76px;
            padding: 8px;
          }

          .svc-proof-meta {
            flex: 1;
            justify-content: center;
            padding: 10px 12px;
          }
        }
      `})]})}export{T as default};
