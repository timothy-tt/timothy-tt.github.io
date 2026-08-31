import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as i}from"./index.DiEladB3.js";import c from"./index.tUWw1UFN.js";import{ScrollTrigger as x}from"./ScrollTrigger.CrR5uyL1.js";c.registerPlugin(x);const j={garcia:"#b6ff2e",strane:"#e5ff00",avitas:"#e8c87a",hellavated:"#ff4fd8"},N={garcia:{src:"/brand-logo/ghp-wordmark.png",h:44},strane:{src:"/brand-logo/strane.png",h:33},avitas:{src:"/brand-logo/avitas-wordmark.png",h:28},hellavated:{src:"/brand-logo/hellavated.png",h:23}},y=[{number:"01",title:"BRAND IDENTITY",spine:"One identity, everywhere it lives.",body:"Logo systems, packaging design, product photography, merch, and the visual language that ties them together.",capabilities:[{t:"Logo systems",d:"Primary mark, secondary lockups, icons and strain marks, plus the rules that keep them right from a 4mm tin lid to a shop window."},{t:"Packaging design",d:"Dielines, front-panel art and the compliance panel, drawn to print for every SKU, size and state a line ships into."},{t:"Product photography",d:"Studio and lifestyle shooting, retouched and recut for shelf, wholesale decks, web and social."},{t:"Merch",d:"Hats, tees, pins, lighters, grinders and display pieces drawn from the same system, each one a working extension of the brand."},{t:"Visual language",d:"Palette, type, texture and motif library, written down as a guide so anyone can extend the brand without breaking it."}],proof:[{project:"garcia",name:"Garcia HandPicked",credit:"logo lockups, motifs & merch",href:"/work/garcia"},{project:"avitas",name:"AVITAS",credit:"geometric mark & tiered system",href:"/work/avitas"},{project:"strane",name:"Strane",credit:"strain labels & packaging system",href:"/work/strane"},{project:"hellavated",name:"Hellavated",credit:"fruit-forward key art & gummy ecosystem",href:"/work/hellavated"}]},{number:"02",title:"PRODUCT VISUALIZATION",spine:"Photoreal 3D before the product exists.",body:"Product mockups, planogram and retail display concepts, and exhibition visuals that sell the whole shelf as a set.",capabilities:[{t:"Product mockups",d:"Photoreal renders of packaging and devices months before a sample exists: for approvals, investor decks and pre-orders."},{t:"Planogram concepts",d:"How the line reads as a set on shelf: facings, hierarchy and colour blocking, so a buyer sees nine products as one system."},{t:"Retail displays",d:"Counter units, towers and fixtures modelled in 3D, then drawn up so a fabricator can actually build them."},{t:"Exhibition visuals",d:"Booth and trade-show renders that put the whole range in a room, at scale, before you pay for the room."}],proof:[{project:"strane",name:"Strane",credit:"device renders & web 3D",href:"/work/strane"},{project:"avitas",name:"AVITAS",credit:"photoreal cartridge renders",href:"/work/avitas"},{project:"hellavated",name:"Hellavated",credit:"galaxy device modeling",href:"/work/hellavated"}]},{number:"03",title:"WEB & DIGITAL PRESENTATION",spine:"The brand, live.",body:"Websites built to show the work moving, plus the social content that keeps the feed on-brand between launches.",capabilities:[{t:"Web design",d:"Sites built around the work: case studies, product lines and the story that connects them, designed from scratch for the brand."},{t:"Development",d:"Built and shipped by the same people who designed it: fast, responsive, and running live in production from day one."},{t:"Interactive 3D",d:"The models from product visualization, live in the browser, so a visitor can pick the product up and turn it over."},{t:"Social content",d:"Launch assets and reusable templates that keep the feed on-brand between campaigns."}],seenIn:[{label:"zegoe.com, this site"}]},{number:"04",title:"EMBEDDED DESIGN",spine:"Your in-house design team, on demand.",body:"We embed with agencies and brand teams as a temporary-to-long-term designer: adapting existing product lines, extending systems, clearing production queues. For as long as the work needs us.",capabilities:[{t:"Agency overflow",d:"Production work taken off a full queue, in your files and your naming, delivered to your specs."},{t:"White-label production",d:"Finished artwork that ships entirely as yours, carrying your studio's name on every file."},{t:"Retainer support",d:"A named designer on your team for a fixed monthly block, briefed like an in-house hire."},{t:"Line extensions",d:"New flavors, strains, sizes and state variants slotted into a live system, every rule kept intact."}],pointsLabel:"How we plug in",points:["Brand-side design support on retainer","Adapting live product lines & packaging systems","Weeks-to-months engagements, productive from day one"]}],k=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function S({number:t,title:p,onOpen:a,rowRef:r}){return e.jsx("div",{ref:r,className:"svc-row",role:"button",tabIndex:0,"aria-haspopup":"dialog","aria-label":`${p}, service details`,onClick:a,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),a())},children:e.jsx("div",{className:"svc-row-inner",children:e.jsxs("div",{className:"svc-row-left",children:[e.jsx("span",{className:"svc-row-number",children:t}),e.jsx("h3",{className:"svc-row-title",children:p})]})})})}function z({proof:t}){const p=N[t.project],a={"--pa":j[t.project],"--pl":`${p.h}px`},r=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"svc-proof-logo",children:e.jsx("img",{src:p.src,alt:t.name,loading:"lazy",decoding:"async"})}),e.jsx("span",{className:"svc-proof-credit",children:t.credit}),t.href&&e.jsxs("svg",{className:"svc-proof-arrow",width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),e.jsx("polyline",{points:"7 7 17 7 17 17"})]}),t.soon&&e.jsx("span",{className:"svc-proof-soon-tag",children:"soon"})]});return t.href?e.jsx("a",{className:"svc-proof-card",href:t.href,style:a,children:r}):e.jsx("div",{className:"svc-proof-card svc-proof-card--soon",style:a,children:r})}function E({service:t,onClose:p}){const a=i.useRef(null),r=i.useRef(null),d=i.useRef(null),m=i.useRef(!1),u=()=>typeof window<"u"&&window.matchMedia("(max-width: 767px)").matches;i.useLayoutEffect(()=>{!a.current||!r.current||(k()?(c.set(a.current,{opacity:1}),c.set(r.current,{opacity:1,y:0,yPercent:0,scale:1})):(c.fromTo(a.current,{opacity:0},{opacity:1,duration:.35,ease:"power2.out"}),u()?c.fromTo(r.current,{opacity:1,yPercent:100},{yPercent:0,duration:.5,ease:"power3.out"}):c.fromTo(r.current,{opacity:0,y:28,scale:.96},{opacity:1,y:0,scale:1,duration:.45,ease:"power3.out"})),d.current?.focus({preventScroll:!0}))},[]),i.useEffect(()=>{const o=window.__lenis;o?.stop?.();const n=document.documentElement.style.overflow,f=document.body.style.overflow;return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",()=>{document.documentElement.style.overflow=n,document.body.style.overflow=f,o?.start?.()}},[]);const h=i.useCallback(o=>{if(m.current)return;if(m.current=!0,k()||!a.current||!r.current){p(o);return}const n=c.timeline({onComplete:()=>p(o)});u()?n.to(r.current,{yPercent:100,duration:.35,ease:"power2.in"},0):n.to(r.current,{opacity:0,y:16,scale:.97,duration:.25,ease:"power2.in"},0),n.to(a.current,{opacity:0,duration:.3,ease:"power2.in"},.05)},[p]);i.useEffect(()=>{const o=n=>{if(n.key==="Escape")n.preventDefault(),h();else if(n.key==="Tab"){const f=r.current;if(!f)return;const v=f.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');if(!v.length)return;const g=v[0],w=v[v.length-1],b=document.activeElement;f.contains(b)?n.shiftKey&&b===g?(n.preventDefault(),w.focus()):!n.shiftKey&&b===w&&(n.preventDefault(),g.focus()):(n.preventDefault(),g.focus())}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[h]);const l=o=>n=>{n.preventDefault(),h(o)},s=`svc-modal-title-${t.number}`;return e.jsxs("div",{className:"svc-modal-root",children:[e.jsx("div",{ref:a,className:"svc-modal-overlay",onClick:()=>h()}),e.jsxs("div",{ref:r,className:`svc-modal-panel${t.proof?" svc-modal-panel--proof":""}`,role:"dialog","aria-modal":"true","aria-labelledby":s,children:[e.jsx("button",{ref:d,type:"button",className:"svc-modal-close","aria-label":"Close",onClick:()=>h(),children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("line",{x1:"5",y1:"5",x2:"19",y2:"19"}),e.jsx("line",{x1:"19",y1:"5",x2:"5",y2:"19"})]})}),e.jsxs("div",{className:"svc-modal-scroll","data-lenis-prevent":!0,children:[e.jsxs("div",{className:"svc-modal-head",children:[e.jsx("span",{className:"svc-modal-number",children:t.number}),e.jsx("h3",{id:s,className:"svc-modal-title",children:t.title})]}),e.jsx("p",{className:"svc-modal-spine",children:t.spine}),e.jsx("p",{className:"svc-modal-body",children:t.body}),e.jsx("ul",{className:"svc-modal-caps",children:t.capabilities.map(o=>e.jsxs("li",{className:"svc-modal-cap",children:[e.jsx("b",{children:o.t}),e.jsx("span",{children:o.d})]},o.t))}),t.proof?e.jsxs("div",{className:"svc-modal-proof",children:[e.jsx("span",{className:"svc-modal-seen-label",children:"Seen in"}),e.jsx("div",{className:"svc-proof-grid",children:t.proof.map(o=>e.jsx(z,{proof:o},o.name))})]}):t.points?e.jsxs("div",{className:"svc-modal-seen svc-modal-points",children:[e.jsx("span",{className:"svc-modal-seen-label",children:t.pointsLabel??"What it looks like"}),e.jsx("ul",{className:"svc-modal-point-list",children:t.points.map(o=>e.jsx("li",{className:"svc-modal-point",children:o},o))})]}):e.jsxs("div",{className:"svc-modal-seen",children:[e.jsx("span",{className:"svc-modal-seen-label",children:"Seen in"}),e.jsx("span",{className:"svc-modal-seen-items",children:t.seenIn?.map(o=>o.href?e.jsx("a",{className:"svc-modal-seen-link",href:o.href,onClick:l(o.href),children:o.label},o.label):e.jsx("span",{className:"svc-modal-seen-flat",children:o.label},o.label))})]}),e.jsx("a",{className:"svc-modal-cta",href:"#contact",onClick:l("#contact"),children:"Start a Project"})]})]})]})}function P(){const[t,p]=i.useState(null),a=i.useRef(null),r=i.useRef(null),d=i.useRef(null),m=i.useRef([]);i.useEffect(()=>{const l=c.context(()=>{if(r.current){const s=r.current.querySelectorAll(".svc-label, .svc-heading, .svc-header-desc");c.set(s,{y:50,opacity:0}),x.create({trigger:r.current,start:"top 85%",onEnter:()=>{c.to(s,{y:0,opacity:1,duration:.8,stagger:.12,ease:"power3.out"})},once:!0})}if(d.current){const s=d.current.querySelectorAll(".svc-row");c.set(s,{y:40,opacity:0}),x.create({trigger:d.current,start:"top 85%",onEnter:()=>{c.to(s,{y:0,opacity:1,duration:.7,stagger:.1,ease:"power3.out"})},once:!0})}r.current&&c.fromTo(r.current.querySelector(".svc-heading"),{y:0},{y:-50,ease:"none",scrollTrigger:{trigger:a.current,start:"top bottom",end:"bottom top",scrub:2}}),d.current&&d.current.querySelectorAll(".svc-row").forEach((s,o)=>{c.to(s,{y:-(18+o*8),ease:"none",scrollTrigger:{trigger:a.current,start:"top bottom",end:"bottom top",scrub:1.5+o*.3}})})},a);return()=>l.revert()},[]);const u=i.useCallback(l=>{p(l)},[]),h=i.useCallback(l=>{const s=t;p(null),requestAnimationFrame(()=>{if(s!==null&&m.current[s]?.focus({preventScroll:!0}),l){const o=window.__lenis;o?.scrollTo?o.scrollTo(l):document.querySelector(l)?.scrollIntoView({behavior:"smooth"})}})},[t]);return e.jsxs("section",{id:"services",ref:a,className:"svc-section",children:[e.jsx("div",{style:{position:"absolute",top:"-140px",left:"50%",transform:"translateX(-50%)",width:"clamp(600px, 80vw, 1200px)",height:"500px",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(220,220,225,0.08) 0%, rgba(185,185,190,0.04) 35%, rgba(150,150,155,0.02) 55%, transparent 75%)",filter:"blur(70px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",top:"-60px",right:"5%",width:"400px",height:"300px",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(210,210,215,0.05) 0%, rgba(180,180,185,0.025) 50%, transparent 75%)",filter:"blur(60px)",pointerEvents:"none"}}),e.jsxs("div",{className:"svc-container",children:[e.jsxs("div",{ref:r,className:"svc-header",children:[e.jsxs("div",{className:"svc-header-left",children:[e.jsx("p",{className:"svc-label",children:"[  OUR SERVICES  ]"}),e.jsxs("h2",{className:"svc-heading",children:["The services",e.jsx("br",{}),"we ",e.jsx("span",{className:"svc-heading-accent",children:"provide"})]})]}),e.jsx("div",{className:"svc-header-right",children:e.jsx("p",{className:"svc-header-desc",children:"Identity, product visualization, digital and embedded design, all built as one system. Pick a lane, or hand us the whole brand."})})]}),e.jsx("div",{ref:d,className:"svc-list",children:y.map((l,s)=>e.jsx(S,{number:l.number,title:l.title,onOpen:()=>u(s),rowRef:o=>m.current[s]=o},l.number))})]}),t!==null&&e.jsx(E,{service:y[t],onClose:h}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"160px",background:"linear-gradient(to bottom, transparent, #000)",pointerEvents:"none"}}),e.jsx("style",{children:`
        .svc-section {
          /* The pull-up is what puts the panel edge right under Recent Work's
             progress bar, so it stays, but it was eating the top padding
             whole: 72px of padding minus 60px of overlap left the eyebrow
             12px under the seam. The lead is added on top of the overlap, so
             the seam does not move and only the label comes down. */
          margin-top: -60px;
          padding: calc(60px + var(--zg-section-lead)) 0 clamp(80px, 10vw, 140px);
          position: relative;
          overflow: hidden;
        }

        /* Shared page grid: same width and gutter as the nav, Recent Work,
           the client strip and the footer. See --zg-content in global.css. */
        .svc-container {
          width: 100%;
          max-width: var(--zg-content);
          margin: 0 auto;
          padding: 0 var(--zg-gutter);
        }

        /* ── Header: split ── */
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
          font-size: var(--zg-eyebrow-size);
          font-weight: var(--zg-eyebrow-weight);
          letter-spacing: var(--zg-eyebrow-track);
          text-transform: uppercase;
          color: var(--zg-eyebrow-ink);
          margin-bottom: var(--zg-eyebrow-gap);
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
          /* 0.4 on near-black is ~3.6:1, under AA for 14px body copy. */
          color: rgba(255, 255, 255, 0.55);
          max-width: 360px;
        }

        /* ── Service list ── */
        /* The rows pull out into the gutter by --svc-bleed and pay it back as
           padding on .svc-row-inner. The hover fill and the rules then run
           wider than the copy, so the fill has room around the number instead
           of stopping flush against the "01". The number and title still line
           up with the section heading. The bleed never exceeds half the
           gutter, so nothing reaches the viewport edge. */
        .svc-list {
          --svc-bleed: clamp(14px, 1.6vw, 24px);
          margin-inline: calc(var(--svc-bleed) * -1);
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
          padding: clamp(24px, 3.5vw, 40px) var(--svc-bleed);
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

        /* The panel clips; the .svc-modal-scroll child scrolls. Splitting the
           two is what lets the close button stay pinned while content moves,
           and keeps the scrollbar inside the 18px radius instead of slicing
           across the corners. */
        .svc-modal-panel {
          position: relative;
          width: min(620px, 100%);
          max-height: min(86vh, 720px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #101012;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 90, 31, 0.06);
          opacity: 0;
        }

        .svc-modal-scroll {
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: clamp(28px, 4vw, 44px);
          /* Chrome ≥121 + Firefox: thin thumb, no track */
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.16) transparent;
        }

        /* Safari (ignores scrollbar-color): same look via the webkit pseudos.
           Chrome ignores these once scrollbar-width/color are set, so the two
           blocks never fight. */
        .svc-modal-scroll::-webkit-scrollbar {
          width: 10px;
        }

        .svc-modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .svc-modal-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          border: 3px solid transparent;
          background-clip: padding-box;
        }

        .svc-modal-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        /* Scroll-edge fades, driven by the scroller's own scroll position:
           the top fade appears once you've scrolled, the bottom fade lifts as
           you reach the end. When nothing overflows the timeline is inactive
           and both stay at 0, so short popups render unmasked. */
        @property --svc-fade-top {
          syntax: '<length>';
          inherits: false;
          initial-value: 0px;
        }

        @property --svc-fade-bot {
          syntax: '<length>';
          inherits: false;
          initial-value: 0px;
        }

        @supports (animation-timeline: scroll(self)) {
          .svc-modal-scroll {
            mask-image: linear-gradient(
              to bottom,
              transparent 0,
              #000 var(--svc-fade-top),
              #000 calc(100% - var(--svc-fade-bot)),
              transparent 100%
            );
            animation: svc-fade-top linear both, svc-fade-bot linear both;
            animation-timeline: scroll(self);
            animation-range: 0 3rem, calc(100% - 3rem) 100%;
          }
        }

        @keyframes svc-fade-top {
          from { --svc-fade-top: 0px; }
          to { --svc-fade-top: 36px; }
        }

        @keyframes svc-fade-bot {
          from { --svc-fade-bot: 36px; }
          to { --svc-fade-bot: 0px; }
        }

        /* Pinned to the panel (not the scroller), so it holds its corner
           while content scrolls beneath. The tinted blur backdrop keeps it
           legible over whatever passes under it. */
        .svc-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 2;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(16, 16, 18, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          transition: color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }

        .svc-modal-close:active {
          transform: scale(0.94);
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

        .svc-modal-caps {
          list-style: none;
          margin: 0 0 26px;
          padding: 0;
          display: grid;
          gap: 11px;
        }

        .svc-modal-cap {
          position: relative;
          padding-left: 18px;
          font-size: 13px;
          line-height: 1.55;
        }

        .svc-modal-cap::before {
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

        /* The term stays uppercase and tight: it is doing the job the chip
           did, and a scanner should still be able to read only the terms. */
        .svc-modal-cap b {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 2px;
        }

        .svc-modal-cap span {
          color: rgba(255, 255, 255, 0.55);
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

        /* Text-led detail points, services with no project proof to show */
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

        /* ── Project proof list ── */
        .svc-modal-panel--proof {
          width: min(880px, 100%);
        }

        .svc-modal-proof {
          margin-bottom: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* A ruled list, not a stack of cards: the service rows behind this
           popup are number + title + hairline + wipe, and the proof column
           now speaks the same language instead of importing a card style
           from somewhere else. The list pulls 12px left of the copy so the
           wipe and the rules clear the marks, and the marks stay aligned
           with the "Seen in" label above them. */
        .svc-proof-grid {
          margin-top: 14px;
          margin-left: -12px;
          border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        /* Desktop: two-column, copy left, proof cards stacked right */
        @media (min-width: 768px) {
          .svc-modal-panel--proof .svc-modal-scroll {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 316px;
            column-gap: 22px;
            align-content: start;
          }

          .svc-modal-panel--proof .svc-modal-scroll > .svc-modal-head,
          .svc-modal-panel--proof .svc-modal-scroll > .svc-modal-spine,
          .svc-modal-panel--proof .svc-modal-scroll > .svc-modal-body,
          .svc-modal-panel--proof .svc-modal-scroll > .svc-modal-caps,
          .svc-modal-panel--proof .svc-modal-scroll > .svc-modal-cta {
            grid-column: 1;
          }

          .svc-modal-panel--proof .svc-modal-scroll > .svc-modal-cta {
            justify-self: start;
            align-self: end;
          }

          /* align-self: start is what makes the fade below work. Stretched to
             the row span, this box is as tall as the capability list and the
             rule would trail off into empty column; sized to its own content,
             the rule ends where the plates do. */
          .svc-modal-panel--proof .svc-modal-scroll > .svc-modal-proof {
            --svc-rule-tail: 44px;
            position: relative;
            grid-column: 2;
            grid-row: 1 / span 5;
            align-self: start;
            margin-bottom: 0;
            padding-top: 0;
            padding-bottom: var(--svc-rule-tail);
            border-top: none;
            border-left: none;
            padding-left: 22px;
          }

          /* The plate stack is always shorter than the capability list beside
             it, so a full-height rule would fence off an empty column. It runs
             the length of the stack, then fades out over one tail. */
          .svc-modal-panel--proof .svc-modal-scroll > .svc-modal-proof::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.09) 0%,
              rgba(255, 255, 255, 0.09) calc(100% - var(--svc-rule-tail)),
              transparent 100%
            );
          }

          /* Desktop rows breathe a little more so four of them hold the
             column instead of huddling at the top. */
          .svc-modal-panel--proof .svc-proof-logo {
            min-height: 54px;
          }

          .svc-modal-panel--proof .svc-proof-card {
            padding: 17px 26px 18px 12px;
          }

          .svc-modal-panel--proof .svc-proof-grid {
            margin-top: 12px;
          }

        }

        /* One row: the mark, the credit under it, a hairline below. No box,
           no radius, no tinted ground, no shadow. */
        .svc-proof-card {
          position: relative;
          display: block;
          padding: 14px 26px 15px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          text-decoration: none;
        }

        /* Same wipe as .svc-row: the ground lifts a hair, left to right. */
        .svc-proof-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.045);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1);
          pointer-events: none;
        }

        /* The brand colour, spent in one place: a 1px underline that draws in
           along the row's own hairline. */
        .svc-proof-card::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          /* -1px: the accent draws over the row's own hairline rather than
             stacking a second line above it. */
          bottom: -1px;
          height: 1px;
          background: var(--pa);
          opacity: 0.85;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1);
          pointer-events: none;
        }

        a.svc-proof-card:hover::before,
        a.svc-proof-card:focus-visible::before,
        a.svc-proof-card:hover::after,
        a.svc-proof-card:focus-visible::after {
          transform: scaleX(1);
        }

        a.svc-proof-card:focus-visible {
          outline: 2px solid rgba(255, 90, 31, 0.7);
          outline-offset: -2px;
        }

        .svc-proof-card--soon {
          opacity: 0.55;
        }

        /* Fixed band, per-logo height inside it: the marks sit on one optical
           line whatever their proportions, so the list does not stagger. */
        .svc-proof-logo {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 44px;
        }

        .svc-proof-logo img {
          display: block;
          height: var(--pl);
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
          opacity: 0.78;
          transition: opacity 0.3s ease;
        }

        a.svc-proof-card:hover .svc-proof-logo img,
        a.svc-proof-card:focus-visible .svc-proof-logo img {
          opacity: 1;
        }

        .svc-proof-arrow {
          position: absolute;
          top: 18px;
          right: 4px;
          color: rgba(255, 255, 255, 0.25);
          transition: color 0.3s ease, transform 0.3s ease;
        }

        a.svc-proof-card:hover .svc-proof-arrow,
        a.svc-proof-card:focus-visible .svc-proof-arrow {
          color: rgba(255, 255, 255, 0.7);
          transform: translate(1px, -1px);
        }

        .svc-proof-credit {
          position: relative;
          display: block;
          margin-top: 5px;
          font-size: 11px;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.45);
          transition: color 0.3s ease;
        }

        a.svc-proof-card:hover .svc-proof-credit,
        a.svc-proof-card:focus-visible .svc-proof-credit {
          color: rgba(255, 255, 255, 0.62);
        }

        .svc-proof-soon-tag {
          position: absolute;
          top: 16px;
          right: 0;
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
            padding: 20px var(--svc-bleed);
          }

          /* Long titles wrap rather than run off the right edge */
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
            max-height: 88dvh;
            border-radius: 20px 20px 0 0;
            border-left: none;
            border-right: none;
            border-bottom: none;
          }

          .svc-modal-scroll {
            padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
          }

          .svc-proof-logo {
            min-height: 40px;
          }

        }
      `})]})}export{P as default};
