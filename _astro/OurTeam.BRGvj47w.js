import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.DiEladB3.js";const x=[{index:"01",name:"Lenore Hensley",role:"Artistic Head",meta:"Atlanta Metro",bio:"The taste behind the brands. Lenore sets the creative direction and pushes every concept past safe. If a piece has a signature, it's hers.",accent:"#FFA040",accentSoft:"rgba(255,160,64,0.14)"},{index:"02",name:"Timothy Ton-That",role:"Technical Head",meta:"HCM Metro",bio:"If it renders, animates, deploys, or has to survive contact with a real browser, it crosses Tim's desk first.",accent:"#FF7A2F",accentSoft:"rgba(255,122,47,0.14)"},{index:"03",name:"Van Luu",role:"3D Specialist",meta:"HCM Metro",bio:"Renders, mockups, motion. Van builds the photoreal 3D that makes packaging feel shelf-ready before it exists.",accent:"#FF5A1F",accentSoft:"rgba(255,90,31,0.14)"},{index:"04",name:"Quynh Nguyen",role:"Designer",meta:"HCM Metro",bio:"Layout, packaging systems, production design. Quynh turns direction into files that actually ship.",accent:"#E64500",accentSoft:"rgba(230,69,0,0.16)"}],v="#FF5A1F";function C(){const w=o.useRef(null),h=o.useRef(null),g=o.useRef(null),y=o.useRef(1),f=o.useRef(()=>{}),[k,j]=o.useState(1),[L,N]=o.useState(!0),[z,E]=o.useState(!1);o.useEffect(()=>{const e=w.current;if(!e)return;const a=new IntersectionObserver(([r])=>{r.isIntersecting&&(e.classList.add("in-view"),a.disconnect())},{threshold:.12});return a.observe(e),()=>a.disconnect()},[]);const F=e=>{const a=e.querySelector(".tm-strip-item");if(!a)return e.clientWidth||1;const r=parseFloat(getComputedStyle(e).columnGap||"0")||0;return a.getBoundingClientRect().width+r};o.useEffect(()=>{const e=h.current;if(!e)return;let a=-1,r=null,i=null;const m=()=>{y.current=F(e)||1},c=()=>{const n=e.scrollWidth-e.clientWidth,l=e.scrollLeft;if(g.current){const S=n>0?l/n:0;g.current.style.transform=`scaleX(${Math.min(1,Math.max(0,S))})`}const s=n>0?1+Math.round(Math.min(1,Math.max(0,l/n))*(x.length-1)):1;s!==a&&(a=s,j(s));const p=l<=1;p!==r&&(r=p,N(p));const b=l>=n-1;b!==i&&(i=b,E(b))};m(),c(),e.addEventListener("scroll",c,{passive:!0});const d=()=>{m(),c()};return window.addEventListener("resize",d),()=>{e.removeEventListener("scroll",c),window.removeEventListener("resize",d)}},[]),o.useEffect(()=>{const e=h.current;if(!e)return;let a=!1,r=!1,i=0,m=0;const c=s=>{s.pointerType==="touch"||s.button!==0||(f.current(),a=!0,r=!1,i=s.clientX,m=e.scrollLeft)},d=s=>{if(!a)return;const p=s.clientX-i;!r&&Math.abs(p)>4&&(r=!0,e.classList.add("tm-dragging"),e.setPointerCapture?.(s.pointerId),window.getSelection()?.removeAllRanges()),r&&(e.scrollLeft=m-p,s.preventDefault())},n=()=>{a=!1,e.classList.remove("tm-dragging")},l=s=>{r&&(s.preventDefault(),s.stopPropagation(),r=!1)};return e.addEventListener("pointerdown",c),e.addEventListener("pointermove",d),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),e.addEventListener("click",l,!0),()=>{e.removeEventListener("pointerdown",c),e.removeEventListener("pointermove",d),window.removeEventListener("pointerup",n),window.removeEventListener("pointercancel",n),e.removeEventListener("click",l,!0)}},[]),o.useEffect(()=>{const e=h.current;if(!e)return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let r=e.scrollLeft,i=0;const m=()=>{i&&cancelAnimationFrame(i),i=0,r=e.scrollLeft};f.current=m;const c=()=>{const n=e.scrollWidth-e.clientWidth;r=Math.max(0,Math.min(n,r));const l=e.scrollLeft,s=r-l;if(Math.abs(s)<1){e.scrollLeft=r,i=0;return}if(e.scrollLeft=l+s*.18,e.scrollLeft===l){i=0;return}i=requestAnimationFrame(c)},d=n=>{if(!(Math.abs(n.deltaX)<=Math.abs(n.deltaY))){if(n.preventDefault(),n.stopPropagation(),a){e.scrollLeft+=n.deltaX;return}i||(r=e.scrollLeft),r+=n.deltaX,i||(i=requestAnimationFrame(c))}};return e.addEventListener("wheel",d,{passive:!1}),()=>{e.removeEventListener("wheel",d),i&&cancelAnimationFrame(i),f.current=()=>{}}},[]);const u=e=>{const a=h.current;a&&(f.current(),a.scrollBy({left:e*y.current,behavior:"smooth"}))},M=e=>{e.key==="ArrowRight"?(e.preventDefault(),u(1)):e.key==="ArrowLeft"&&(e.preventDefault(),u(-1))};return t.jsxs("section",{id:"team",ref:w,className:"tm-section","aria-labelledby":"tm-heading",children:[t.jsx("div",{className:"tm-seam","aria-hidden":"true"}),t.jsx("div",{className:"tm-container",children:t.jsxs("div",{className:"tm-header",children:[t.jsxs("div",{className:"tm-header-left",children:[t.jsxs("p",{className:"tm-label",children:[t.jsx("span",{"aria-hidden":"true",children:"[  "}),"Our Team",t.jsx("span",{"aria-hidden":"true",children:"  ]"})]}),t.jsxs("h2",{id:"tm-heading",className:"tm-heading",children:["Small crew.",t.jsx("br",{}),t.jsx("span",{className:"tm-heading-accent",children:"Full stack."})]})]}),t.jsx("div",{className:"tm-header-right",children:t.jsx("p",{className:"tm-intro",children:"Zegoe is four people: art direction, engineering, 3D, and design under one roof. Every project runs direct: the people on this page are the people on your project."})})]})}),t.jsx("div",{className:"tm-strip-clip",children:t.jsx("div",{ref:h,className:"tm-strip",role:"group","aria-roledescription":"carousel","aria-label":"Our team",tabIndex:0,onKeyDown:M,children:x.map((e,a)=>t.jsx("div",{className:"tm-strip-item",style:{"--tm-delay":`${a*90}ms`},children:t.jsxs("article",{className:"tm-panel",tabIndex:0,"aria-label":`${e.name}, ${e.role}`,style:{"--tm-accent":e.accent,"--tm-accent-soft":e.accentSoft},children:[t.jsx("span",{className:"tm-index","aria-hidden":"true",children:e.index}),t.jsxs("div",{className:"tm-panel-body",children:[t.jsx("h3",{className:"tm-name",children:e.name}),t.jsxs("p",{className:"tm-credits",children:[t.jsx("span",{className:"tm-role",children:e.role}),t.jsx("span",{className:"tm-sep","aria-hidden":"true"}),t.jsx("span",{className:"tm-meta",children:e.meta})]}),t.jsx("div",{className:"tm-bio-wrap",children:t.jsx("p",{className:"tm-bio",children:e.bio})})]}),t.jsx("span",{className:"tm-rule","aria-hidden":"true"})]})},e.name))})}),t.jsxs("div",{className:"tm-foot",children:[t.jsxs("div",{className:"tm-count",children:[t.jsx("span",{style:{color:v},children:String(k).padStart(2,"0")}),t.jsx("span",{className:"tm-count-sep",children:"/"}),t.jsx("span",{children:String(x.length).padStart(2,"0")})]}),t.jsx("div",{className:"tm-progress-track",children:t.jsx("div",{ref:g,className:"tm-progress-bar",style:{background:`linear-gradient(90deg, ${v}, #FFA040)`}})}),t.jsxs("div",{className:"tm-arrows",children:[t.jsx("button",{type:"button",className:"tm-arrow","aria-label":"Previous team member",onClick:()=>u(-1),disabled:L,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M15 18l-6-6 6-6"})})}),t.jsx("button",{type:"button",className:"tm-arrow","aria-label":"Next team member",onClick:()=>u(1),disabled:z,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M9 6l6 6-6 6"})})})]})]}),t.jsx("style",{children:`
        .tm-section {
          position: relative;
          background: #0a0a0a;
          padding: var(--zg-section-lead) 0 clamp(88px, 11vw, 150px);
          overflow: hidden;
          /* Gutter that lines the strip and footer up with the header column. */
          --tm-gutter: calc(max(0px, (100vw - var(--zg-content)) / 2) + var(--zg-gutter));
        }

        .tm-seam {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8rem;
          pointer-events: none;
          background: linear-gradient(to bottom, rgba(10, 10, 10, 1), transparent);
        }

        /* Shared page grid: see --zg-content in global.css. */
        .tm-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: var(--zg-content);
          margin: 0 auto;
          padding: 0 var(--zg-gutter);
        }

        /* ── Header: split ── */
        .tm-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: clamp(34px, 4.4vw, 56px);
        }

        .tm-header-left { flex: 1; min-width: 0; }

        .tm-header-right {
          flex: 0 1 400px;
          display: flex;
          align-items: flex-end;
        }

        .tm-label {
          font-size: var(--zg-eyebrow-size);
          font-weight: var(--zg-eyebrow-weight);
          letter-spacing: var(--zg-eyebrow-track);
          text-transform: uppercase;
          color: var(--zg-eyebrow-ink);
          margin-bottom: var(--zg-eyebrow-gap);
        }

        .tm-heading {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .tm-heading-accent {
          background: linear-gradient(90deg, #FFA040, #FF5A1F, #E64500, #FFA040);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-slide 4s linear infinite;
        }

        .tm-intro {
          font-size: 14px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.4);
          max-width: 380px;
        }

        /* ── Native horizontal-scroll strip ── */
        .tm-strip-clip {
          position: relative;
          z-index: 1;
          width: 100%;
          overflow: hidden;
        }

        .tm-strip {
          --tm-card: min(80vw, 460px);
          display: flex;
          align-items: stretch;
          gap: 28px;
          overflow-x: auto;
          overflow-y: hidden;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          /* Left gutter matches the header column; the symmetric right gutter
             leaves the trailing panel flush with it at the end of the run. */
          padding-block: 6px 10px;
          padding-inline: var(--tm-gutter);
          cursor: grab;
        }
        .tm-strip::-webkit-scrollbar { display: none; }

        .tm-strip:focus-visible {
          outline: 2px solid ${v};
          outline-offset: 4px;
        }

        .tm-strip.tm-dragging {
          cursor: grabbing;
          scroll-behavior: auto;
          user-select: none;
          -webkit-user-select: none;
        }
        .tm-strip.tm-dragging * {
          user-select: none;
          -webkit-user-select: none;
        }
        /* No hover flicker while panning across cards. */
        .tm-strip.tm-dragging .tm-panel { pointer-events: none; }

        /* height:auto + the strip's align-items:stretch equalises every panel
           to the tallest (the longest bio): no dead space above the fold. */
        .tm-strip-item {
          flex: 0 0 auto;
          width: var(--tm-card);
          height: auto;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
          transition-delay: var(--tm-delay, 0ms);
        }

        .tm-section.in-view .tm-strip-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Panel ── */
        .tm-panel {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: clamp(300px, 30vh, 340px);
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding: clamp(26px, 2.4vw, 34px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          overflow: hidden;
          outline: none;
          background:
            radial-gradient(120% 110% at 100% 0%, var(--tm-accent-soft) 0%, transparent 52%),
            linear-gradient(165deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012));
          transition: border-color 0.45s ease, background-color 0.45s ease;
        }

        .tm-panel:hover,
        .tm-panel:focus-visible { border-color: rgba(255, 255, 255, 0.18); }

        .tm-panel:focus-visible {
          outline: 2px solid rgba(255, 90, 31, 0.7);
          outline-offset: -2px;
        }

        /* Hover/focus wash: sweeps left to right, same idiom as the rows it replaced */
        .tm-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.012) 55%,
            transparent
          );
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);
          pointer-events: none;
        }

        .tm-panel:hover::before,
        .tm-panel:focus-visible::before { transform: scaleX(1); }

        /* Outlined numeral: fills with the panel accent on hover.
           Weight stays at 500: Montserrat's heavier cuts keep overlapping
           contours, which -webkit-text-stroke draws as internal seams. */
        .tm-index {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(3rem, 4.4vw, 4.4rem);
          line-height: 0.8;
          letter-spacing: 0.01em;
          font-variant-numeric: tabular-nums;
          color: transparent;
          -webkit-text-stroke: 1.4px rgba(255, 255, 255, 0.22);
          user-select: none;
          flex: none;
          transition: -webkit-text-stroke-color 0.45s ease, color 0.45s ease;
        }

        .tm-panel:hover .tm-index,
        .tm-panel:focus-visible .tm-index {
          -webkit-text-stroke-color: var(--tm-accent);
          color: var(--tm-accent-soft);
        }

        /* Top-aligned under the numeral so names and bios line up across the
           run: a bio one line longer only changes the slack at the foot. */
        .tm-panel-body {
          position: relative;
          min-width: 0;
          margin-top: clamp(26px, 2.8vw, 40px);
        }

        .tm-name {
          font-size: clamp(1.45rem, 2.1vw, 1.95rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: rgba(255, 255, 255, 0.82);
          transition: color 0.4s ease;
        }

        .tm-panel:hover .tm-name,
        .tm-panel:focus-visible .tm-name { color: #ffffff; }

        .tm-credits {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px 12px;
          margin-top: 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        /* Wrap as whole credits, never mid-phrase. */
        .tm-role,
        .tm-meta { white-space: nowrap; }

        .tm-role { color: var(--tm-accent); }

        .tm-sep {
          width: 16px;
          height: 1px;
          background: rgba(255, 255, 255, 0.22);
          flex: none;
        }

        .tm-meta { color: rgba(255, 255, 255, 0.34); }

        /* Bio: always visible in a panel you swipe past. The accent tick
           anchors the column and brightens with the rest on hover/focus. */
        .tm-bio-wrap {
          position: relative;
          margin-top: 20px;
          padding-left: 16px;
        }

        .tm-bio-wrap::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 100%;
          background: var(--tm-accent);
          opacity: 0.45;
          transition: opacity 0.4s ease;
        }

        .tm-panel:hover .tm-bio-wrap::before,
        .tm-panel:focus-visible .tm-bio-wrap::before { opacity: 0.9; }

        .tm-bio {
          font-size: 13.5px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.55);
          transition: color 0.4s ease;
        }

        .tm-panel:hover .tm-bio,
        .tm-panel:focus-visible .tm-bio { color: rgba(255, 255, 255, 0.68); }

        /* Accent bar that draws along the panel baseline */
        .tm-rule {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--tm-accent), rgba(255, 90, 31, 0) 78%);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .tm-panel:hover .tm-rule,
        .tm-panel:focus-visible .tm-rule { transform: scaleX(1); }

        /* ── Footer: counter + progress + arrows ── */
        .tm-foot {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.25rem var(--tm-gutter) 0;
        }
        .tm-count {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.35);
          display: flex;
          gap: 0.35rem;
        }
        .tm-count-sep { color: rgba(255, 255, 255, 0.2); }
        .tm-progress-track {
          flex: 1 1 auto;
          height: 3px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }
        .tm-progress-bar {
          height: 100%;
          width: 100%;
          transform: scaleX(0);
          transform-origin: left center;
          border-radius: 3px;
          transition: transform 0.1s linear;
        }
        .tm-arrows { display: flex; gap: 0.6rem; flex: none; }
        .tm-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.03);
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease;
        }
        .tm-arrow:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.32);
        }
        .tm-arrow:active:not(:disabled) { transform: scale(0.94); }
        .tm-arrow:disabled { opacity: 0.28; cursor: default; }

        /* ── Mobile ── */
        @media (max-width: 860px) {
          .tm-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .tm-header-right { flex: none; }

          .tm-intro { max-width: none; }

          .tm-strip {
            --tm-card: min(82vw, 400px);
            gap: 16px;
          }

          .tm-panel { min-height: 300px; }

          .tm-panel-body { margin-top: 22px; }

          .tm-index {
            font-size: 2.4rem;
            -webkit-text-stroke-width: 1.2px;
            -webkit-text-stroke-color: var(--tm-accent);
            color: var(--tm-accent-soft);
          }

          .tm-name { font-size: 1.55rem; }

          /* 9.5px of tracked-out caps is the smallest type on the site and it
             sits on the card a phone spends the longest with. Tracking drops
             to buy back the width the bigger size costs, so a credit line
             still fits beside its rule. */
          .tm-credits {
            margin-top: 10px;
            gap: 6px 7px;
            font-size: 11.5px;
            letter-spacing: 0.12em;
          }

          .tm-bio { font-size: 13px; }

          .tm-rule { transform: scaleX(1); opacity: 0.5; height: 1px; }
        }

        /* ── Phones: one control grammar per page ──
           Recent Work drops its prev/next buttons at this same 767px, so the
           Team strip drops its own rather than leaving two carousels on one
           screen asking to be driven two different ways. Swipe is native here,
           the peeking next panel already says the strip moves, and at 390px the
           two 2.75rem pills were width the progress bar wanted.

           This hides the .tm-arrows wrapper, not the buttons inside it: the
           footer is a flex row with a 1.5rem gap, so an emptied-but-present
           wrapper would still count as a flex item and leave that gap as dead
           trailing space. Scoped to 767px, not the 860px block above, because
           860 is the layout breakpoint and tablets keep the arrows.

           Nothing else depends on them: atStart/atEnd only feed the buttons'
           disabled state, and ArrowLeft/ArrowRight stay live on the focused
           strip, so keyboard users still page by one panel. */
        @media (max-width: 767px) {
          .tm-arrows { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tm-strip-item,
          .tm-panel,
          .tm-panel::before,
          .tm-index,
          .tm-name,
          .tm-bio,
          .tm-bio-wrap::before,
          .tm-rule {
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }

          .tm-strip-item { opacity: 1; transform: none; }

          .tm-progress-bar { transition: none !important; }

          .tm-heading-accent { animation: none; }
        }
      `})]})}export{C as default};
