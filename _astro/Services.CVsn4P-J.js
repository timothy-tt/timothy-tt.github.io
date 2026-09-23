import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as i}from"./index.DiEladB3.js";import{r as I}from"./index.Pl_XcmgS.js";import w from"./index.tUWw1UFN.js";import"./index.UCiZe19v.js";const D={garcia:"#b6ff2e",strane:"#e5ff00",avitas:"#e8c87a",hellavated:"#ff4fd8"},C={garcia:{src:"/brand-logo/ghp-wordmark.png",h:44},strane:{src:"/brand-logo/strane.png",h:33},avitas:{src:"/brand-logo/avitas-wordmark.png",h:28},hellavated:{src:"/brand-logo/hellavated.png",h:23}},A=[{number:"01",title:"BRAND IDENTITY",titleLines:["BRAND","IDENTITY"],ramp:["#FFA040","#FF3D6E"],spine:"One identity, everywhere it lives.",body:"Logo systems, packaging design, product photography, merch, and the visual language that ties them together.",capabilities:[{t:"Logo systems",d:"Primary mark, secondary lockups, icons and strain marks, plus the rules that keep them right from a 4mm tin lid to a shop window."},{t:"Packaging design",d:"Dielines, front-panel art and the compliance panel, drawn to print for every SKU, size and state a line ships into."},{t:"Product photography",d:"Studio and lifestyle shooting, retouched and recut for shelf, wholesale decks, web and social."},{t:"Merch",d:"Hats, tees, pins, lighters, grinders and display pieces drawn from the same system, each one a working extension of the brand."},{t:"Visual language",d:"Palette, type, texture and motif library, written down as a guide so anyone can extend the brand without breaking it."}],proof:[{project:"garcia",name:"Garcia HandPicked",credit:"logo lockups, motifs & merch",href:"/work/garcia"},{project:"avitas",name:"AVITAS",credit:"geometric mark & tiered system",href:"/work/avitas"},{project:"strane",name:"Strane",credit:"strain labels & packaging system",href:"/work/strane"},{project:"hellavated",name:"Hellavated",credit:"fruit-forward key art & gummy ecosystem",href:"/work/hellavated"}]},{number:"02",title:"PRODUCT VISUALIZATION",titleLines:["PRODUCT","VISUALIZATION"],ramp:["#4DE3FF","#5B6BFF"],spine:"Photoreal 3D before the product exists.",body:"Product mockups, planogram and retail display concepts, and exhibition visuals that sell the whole shelf as a set.",capabilities:[{t:"Product mockups",d:"Photoreal renders of packaging and devices months before a sample exists: for approvals, investor decks and pre-orders."},{t:"Planogram concepts",d:"How the line reads as a set on shelf: facings, hierarchy and colour blocking, so a buyer sees nine products as one system."},{t:"Retail displays",d:"Counter units, towers and fixtures modelled in 3D, then drawn up so a fabricator can actually build them."},{t:"Exhibition visuals",d:"Booth and trade-show renders that put the whole range in a room, at scale, before you pay for the room."}],proof:[{project:"strane",name:"Strane",credit:"device renders & web 3D",href:"/work/strane"},{project:"avitas",name:"AVITAS",credit:"photoreal cartridge renders",href:"/work/avitas"},{project:"hellavated",name:"Hellavated",credit:"galaxy device modeling",href:"/work/hellavated"}]},{number:"03",title:"WEB & DIGITAL PRESENTATION",titleLines:["WEB & DIGITAL","PRESENTATION"],ramp:["#B6FF2E","#17D6A5"],spine:"The brand, live.",body:"Websites built to show the work moving, plus the social content that keeps the feed on-brand between launches.",capabilities:[{t:"Web design",d:"Sites built around the work: case studies, product lines and the story that connects them, designed from scratch for the brand."},{t:"Development",d:"Built and shipped by the same people who designed it: fast, responsive, and running live in production from day one."},{t:"Interactive 3D",d:"The models from product visualization, live in the browser, so a visitor can pick the product up and turn it over."},{t:"Social content",d:"Launch assets and reusable templates that keep the feed on-brand between campaigns."}],seenIn:[{label:"zegoe.com, this site"}]},{number:"04",title:"EMBEDDED DESIGN",titleLines:["EMBEDDED","DESIGN"],ramp:["#C77DFF","#FF5AC8"],spine:"Your in-house design team, on demand.",body:"We embed with agencies and brand teams as a temporary-to-long-term designer: adapting existing product lines, extending systems, clearing production queues. For as long as the work needs us.",capabilities:[{t:"Agency overflow",d:"Production work taken off a full queue, in your files and your naming, delivered to your specs."},{t:"White-label production",d:"Finished artwork that ships entirely as yours, carrying your studio's name on every file."},{t:"Retainer support",d:"A named designer on your team for a fixed monthly block, briefed like an in-house hire."},{t:"Line extensions",d:"New flavors, strains, sizes and state variants slotted into a live system, every rule kept intact."}],pointsLabel:"How we plug in",points:["Brand-side design support on retainer","Adapting live product lines & packaging systems","Weeks-to-months engagements, productive from day one"]}],N=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function R({number:s,title:d,lines:l,items:r,ramp:m,onOpen:v,rowRef:b}){return e.jsx("div",{ref:b,className:"svc-row",style:{"--svc-ramp-rest-a":m[0],"--svc-ramp-rest-b":m[1]},role:"button",tabIndex:0,"aria-haspopup":"dialog","aria-label":`${d}, service details`,onClick:v,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),v())},children:e.jsxs("div",{className:"svc-row-inner",children:[e.jsx("span",{className:"svc-row-number svc-mask",children:e.jsx("span",{className:"svc-mask-in",children:s})}),e.jsx("h3",{className:"svc-row-title",children:l.map((t,n)=>e.jsx("span",{className:"svc-mask",style:{"--l":n},children:e.jsx("span",{className:"svc-mask-in",children:t})},t))}),e.jsx("ul",{className:"svc-row-list",children:r.map((t,n)=>e.jsx("li",{style:{"--i":n},children:t},t))})]})})}function L({proof:s}){const d=C[s.project],l={"--pa":D[s.project],"--pl":`${d.h}px`},r=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"svc-proof-logo",children:e.jsx("img",{src:d.src,alt:s.name,loading:"lazy",decoding:"async"})}),e.jsx("span",{className:"svc-proof-credit",children:s.credit}),s.href&&e.jsxs("svg",{className:"svc-proof-arrow",width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),e.jsx("polyline",{points:"7 7 17 7 17 17"})]}),s.soon&&e.jsx("span",{className:"svc-proof-soon-tag",children:"soon"})]});return s.href?e.jsx("a",{className:"svc-proof-card",href:s.href,style:l,children:r}):e.jsx("div",{className:"svc-proof-card svc-proof-card--soon",style:l,children:r})}function P({service:s,onClose:d}){const l=i.useRef(null),r=i.useRef(null),m=i.useRef(null),v=i.useRef(!1),b=()=>typeof window<"u"&&window.matchMedia("(max-width: 767px)").matches;i.useLayoutEffect(()=>{!l.current||!r.current||(N()?(w.set(l.current,{opacity:1}),w.set(r.current,{opacity:1,y:0,yPercent:0,scale:1})):(w.fromTo(l.current,{opacity:0},{opacity:1,duration:.35,ease:"power2.out"}),b()?w.fromTo(r.current,{opacity:1,yPercent:100},{yPercent:0,duration:.5,ease:"power3.out"}):w.fromTo(r.current,{opacity:0,y:28,scale:.96},{opacity:1,y:0,scale:1,duration:.45,ease:"power3.out"})),m.current?.focus({preventScroll:!0}))},[]),i.useEffect(()=>{const o=window.__lenis;o?.stop?.();const a=document.documentElement.style.overflow,u=document.body.style.overflow;return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",()=>{document.documentElement.style.overflow=a,document.body.style.overflow=u,o?.start?.()}},[]);const t=i.useCallback(o=>{if(v.current)return;if(v.current=!0,N()||!l.current||!r.current){d(o);return}const a=w.timeline({onComplete:()=>d(o)});b()?a.to(r.current,{yPercent:100,duration:.35,ease:"power2.in"},0):a.to(r.current,{opacity:0,y:16,scale:.97,duration:.25,ease:"power2.in"},0),a.to(l.current,{opacity:0,duration:.3,ease:"power2.in"},.05)},[d]);i.useEffect(()=>{const o=a=>{if(a.key==="Escape")a.preventDefault(),t();else if(a.key==="Tab"){const u=r.current;if(!u)return;const p=u.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');if(!p.length)return;const f=p[0],x=p[p.length-1],h=document.activeElement;u.contains(h)?a.shiftKey&&h===f?(a.preventDefault(),x.focus()):!a.shiftKey&&h===x&&(a.preventDefault(),f.focus()):(a.preventDefault(),f.focus())}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t]);const n=o=>a=>{a.preventDefault(),t(o)},c=`svc-modal-title-${s.number}`;return e.jsxs("div",{className:"svc-modal-root",children:[e.jsx("div",{ref:l,className:"svc-modal-overlay",onClick:()=>t()}),e.jsxs("div",{ref:r,className:`svc-modal-panel${s.proof?" svc-modal-panel--proof":""}`,role:"dialog","aria-modal":"true","aria-labelledby":c,children:[e.jsx("button",{ref:m,type:"button",className:"svc-modal-close","aria-label":"Close",onClick:()=>t(),children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("line",{x1:"5",y1:"5",x2:"19",y2:"19"}),e.jsx("line",{x1:"19",y1:"5",x2:"5",y2:"19"})]})}),e.jsxs("div",{className:"svc-modal-scroll","data-lenis-prevent":!0,children:[e.jsxs("div",{className:"svc-modal-head",children:[e.jsx("span",{className:"svc-modal-number",children:s.number}),e.jsx("h3",{id:c,className:"svc-modal-title",children:s.title})]}),e.jsx("p",{className:"svc-modal-spine",children:s.spine}),e.jsx("p",{className:"svc-modal-body",children:s.body}),e.jsx("ul",{className:"svc-modal-caps",children:s.capabilities.map(o=>e.jsxs("li",{className:"svc-modal-cap",children:[e.jsx("b",{children:o.t}),e.jsx("span",{children:o.d})]},o.t))}),s.proof?e.jsxs("div",{className:"svc-modal-proof",children:[e.jsx("span",{className:"svc-modal-seen-label",children:"Seen in"}),e.jsx("div",{className:"svc-proof-grid",children:s.proof.map(o=>e.jsx(L,{proof:o},o.name))})]}):s.points?e.jsxs("div",{className:"svc-modal-seen svc-modal-points",children:[e.jsx("span",{className:"svc-modal-seen-label",children:s.pointsLabel??"What it looks like"}),e.jsx("ul",{className:"svc-modal-point-list",children:s.points.map(o=>e.jsx("li",{className:"svc-modal-point",children:o},o))})]}):e.jsxs("div",{className:"svc-modal-seen",children:[e.jsx("span",{className:"svc-modal-seen-label",children:"Seen in"}),e.jsx("span",{className:"svc-modal-seen-items",children:s.seenIn?.map(o=>o.href?e.jsx("a",{className:"svc-modal-seen-link",href:o.href,onClick:n(o.href),children:o.label},o.label):e.jsx("span",{className:"svc-modal-seen-flat",children:o.label},o.label))})]}),e.jsx("a",{className:"svc-modal-cta",href:"#contact",onClick:n("#contact"),children:"Start a Project"})]})]})]})}const S=57;function H(){const[s,d]=i.useState(null),l=i.useRef(null),r=i.useRef(null),m=i.useRef([]);i.useEffect(()=>{const t=l.current,n=r.current;if(!t||!n)return;const c=m.current.filter(g=>!!g),o=c.map(()=>!1);let a=!1;if(N()){n.classList.add("is-in"),c.forEach(g=>g.classList.add("is-in"));return}const u=window.matchMedia("(max-width: 1024px)");let p=0,f=null;const x=()=>{p=0;const g=!u.matches,T=window.innerHeight-S,z=t.getBoundingClientRect().top,k=g?z+T:window.innerHeight;a||(g?(S-z)/T>=.1:n.getBoundingClientRect().top+40<=k)&&(a=!0,n.classList.add("is-in")),c.forEach((j,F)=>{if(o[F])return;const E=j.getBoundingClientRect().top;(g?E-40>=k:E+40<=k)&&(o[F]=!0,j.classList.add("is-in"))}),a&&o.every(Boolean)&&f?.()},h=()=>{p||(p=requestAnimationFrame(x))},y=window.__lenis;return y?.on?y.on("scroll",h):window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h,{passive:!0}),f=()=>{f=null,y?.on?y.off?.("scroll",h):window.removeEventListener("scroll",h),window.removeEventListener("resize",h),p&&(cancelAnimationFrame(p),p=0)},h(),()=>f?.()},[]);const v=i.useCallback(t=>{d(t)},[]),b=i.useCallback(t=>{const n=s;d(null),requestAnimationFrame(()=>{if(n!==null&&m.current[n]?.focus({preventScroll:!0}),t){const c=window.__lenis;c?.scrollTo?c.scrollTo(t):document.querySelector(t)?.scrollIntoView({behavior:"smooth"})}})},[s]);return e.jsxs("section",{ref:l,className:"svc-section",children:[e.jsx("div",{id:"services",className:"svc-anchor","aria-hidden":"true"}),e.jsxs("div",{className:"svc-screen",children:[e.jsxs("div",{className:"svc-header",ref:r,children:[e.jsx("p",{className:"svc-label svc-mask",children:e.jsx("span",{className:"svc-mask-in",style:{"--i":0},children:"[  OUR SERVICES  ]"})}),e.jsx("h2",{className:"svc-heading svc-mask",children:e.jsxs("span",{className:"svc-mask-in",style:{"--i":1},children:["The services we ",e.jsx("span",{className:"svc-heading-accent",children:"provide"})]})})]}),e.jsx("div",{className:"svc-list",children:A.map((t,n)=>e.jsx(R,{number:t.number,title:t.title,lines:t.titleLines??[t.title],items:t.capabilities.map(c=>c.t),ramp:t.ramp,onOpen:()=>v(n),rowRef:c=>m.current[n]=c},t.number))})]}),e.jsx("div",{className:"svc-foot","aria-hidden":"true"}),s!==null&&I.createPortal(e.jsx(P,{service:A[s],onClose:b}),document.body),e.jsx("style",{children:`
        /* The two stops of each row's colour ramp, registered as colours so
           the hover can tween them: see the "Colour ramps" note below. */
        @property --svc-ramp-a {
          syntax: '<color>';
          inherits: true;
          initial-value: #ffffff;
        }
        @property --svc-ramp-b {
          syntax: '<color>';
          inherits: true;
          initial-value: #ffffff;
        }

        /* ── Ground and the curtain geometry ──
           The section has no ground of its own. It sits on the page's
           #050506 gradient like the sections either side of it, and the only
           thing it paints is the 160px foot that lands it on OurClients'
           black. No ambient glow: the numerals are the light in this block.

           --svc-nav is the fixed nav's bottom edge once the page is scrolled
           (5px top offset + 52px bar, see .nav-bar in global.css); --svc-h
           is the rest of the viewport, the one-screen height. The wrapper is
           2.3 of those tall and starts one early, so it spends one screen
           under the stage (the reveal), 0.3 with the screen held (the hold,
           --svc-hold) and one letting it go. The foot hangs off the bottom by margin,
           outside the sticky range. z-index 1 keeps the wrapper under the
           stage's 20; it must never rise above it, and the stage must keep
           its own opaque ground, or this section shows through early.
           --svc-x is this section's own gutter, wider than --zg-gutter and
           not capped by --zg-content: see the note on the component. */
        .svc-section {
          --svc-nav: 57px;
          --svc-h: calc(100svh - var(--svc-nav));
          --svc-x: clamp(24px, 4vw, 80px);
          --svc-hold: 0.3;
          position: relative;
          z-index: 1;
          height: calc((2 + var(--svc-hold)) * var(--svc-h));
          margin: calc(-1 * var(--svc-h)) 0 160px;
          color: #fff;
        }
        .svc-anchor {
          position: absolute;
          left: 0;
          top: calc(var(--svc-h) - var(--svc-nav));
          width: 0;
          height: 0;
        }

        /* ── The screen ──
           Stuck at the nav's bottom edge, one screen tall (min-height, so a
           viewport too short for the rows lets the screen run past the fold
           rather than crush them). The lead-in is the page token, capped at
           7vh: the token was sized for sections that are free to run long,
           and here every pixel above the eyebrow is a pixel off the rows
           (92px of lead at 1920 costs each row 7px), so on the baseline
           screen it is 66px and the eyebrow sits a touch higher than the
           sections below. */
        .svc-screen {
          position: sticky;
          top: var(--svc-nav);
          min-height: var(--svc-h);
          display: flex;
          flex-direction: column;
          padding-top: min(var(--zg-section-lead), 7vh);
        }

        .svc-foot {
          position: absolute;
          left: 0;
          right: 0;
          top: 100%;
          height: 160px;
          background: linear-gradient(to bottom, transparent, #000);
          pointer-events: none;
        }

        /* ── Header band ── */
        .svc-header {
          padding: 0 var(--svc-x) clamp(14px, 1.8vh, 24px);
        }

        .svc-label {
          font-size: var(--zg-eyebrow-size);
          font-weight: var(--zg-eyebrow-weight);
          letter-spacing: var(--zg-eyebrow-track);
          text-transform: uppercase;
          color: var(--zg-eyebrow-ink);
          margin-bottom: var(--zg-eyebrow-gap);
        }

        /* One line, 62px at 1920, and it never wraps above 1024: the band
           is budgeted for a single line of it. */
        .svc-heading {
          font-size: clamp(2.4rem, 3.25vw, 4rem);
          font-weight: 900;
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.03em;
          white-space: nowrap;
        }

        /* The heading's own ramp, the site's animated orange, and it stays
           here: the numerals and titles below carry four ramps of their
           own (see "Colour ramps"), none of them this one, so "provide"
           still reads as the brand's word in the section's name. */
        .svc-heading-accent {
          background: linear-gradient(90deg, #FFA040, #FF5A1F, #E64500, #FFA040);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-slide 4s linear infinite;
        }

        /* ── The mask ──
           zg-line from case-study-swipe.css, which the home page never
           loads. The outer box clips; the inner starts a full line plus
           .55em below it, so the ascenders of a rising line never show
           through the bottom edge before their turn. The clip is padded on
           every side so the settled line is not shaved: descenders below,
           the accent's overshoot to the sides. Two stacked title lines each
           get their own mask, and the pads overlap the neighbour's box by
           less than the .55em head start, so neither shows through the
           other's clip. A transition on the class rather than a keyframe,
           because this fires once and never resets. Every delay in the
           section is --d, set by the rules that know where each line sits
           in the sequence. */
        .svc-mask {
          display: block;
          clip-path: inset(-0.45em -0.4em -0.25em -0.4em);
        }
        .svc-mask-in {
          display: block;
          translate: 0 calc(100% + 0.55em);
          transition: translate 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--d, 0ms);
        }
        .svc-header.is-in .svc-mask-in,
        .svc-row.is-in .svc-mask-in {
          translate: 0 0;
        }

        /* ── The sequence ──
           The header: eyebrow, then the heading 90ms later. A row, on its
           own trigger: the rule starts drawing and the numeral rises on the
           same beat, the title's first line 60ms later and its second 60ms
           after that, then the capability names fade up 40ms apart. The
           rows are not timed against each other any more; the curtain deals
           them, top to bottom, as it clears each one. */
        .svc-header .svc-mask-in {
          --d: calc(var(--i, 0) * 90ms);
        }
        .svc-row-number {
          --d: 0ms;
        }
        .svc-row-title .svc-mask-in {
          --d: calc(60ms + var(--l, 0) * 60ms);
        }

        /* ── The stack ──
           Takes whatever the header leaves of the screen and deals it out
           equally: four rows, flex 1 each, so they are about 180px at the
           baseline and grow on a taller viewport. A row never shrinks below
           its own content (min-height stays auto), so on a short viewport
           the stack runs past the fold rather than crushing the numerals. */
        .svc-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .svc-row {
          position: relative;
          flex: 1 1 0;
          display: grid;
          cursor: pointer;
          outline: none;
        }
        .svc-row:focus-visible {
          outline: 2px solid rgba(255, 90, 31, 0.7);
          outline-offset: -2px;
        }

        /* The hover fill: a 4% white wipe from the left. It is the one thing
           the cursor gets, so it runs the full width to make it count. */
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
        /* The :hover halves of these three rules sit under (hover: hover):
           iOS holds :hover on the last thing tapped, so the row a modal was
           opened from stayed lit after it closed. Focus-visible stays
           ungated for the keyboard. */
        .svc-row:focus-visible::before {
          transform: scaleX(1);
        }
        @media (hover: hover) {
          .svc-row:hover::before {
            transform: scaleX(1);
          }
        }

        /* The bottom rule is drawn, not set: scaled from the left over 1.1s
           on the row's beat, so the line reads as being ruled under the copy
           as it rises. The last row's rule is the one that closes the
           section. A pseudo instead of a border so it can be transformed. */
        .svc-row::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          transform: scaleX(0);
          transform-origin: left center;
        }
        .svc-row.is-in::after {
          transform: scaleX(1);
          transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ── Row grid ──
           Numeral, title, capabilities, centred on the row's midline. The
           numeral column is as wide as two tabular digits; the capability
           column is 36% of the inner width and ends on the inner right
           edge; the title takes the rest, which at 1920 is about 880px for
           "WEB & DIGITAL" and "VISUALIZATION" at 42px, the widest of the
           eight lines, and it is told never to wrap. */
        .svc-row-inner {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, 36%);
          column-gap: clamp(24px, 2.5vw, 48px);
          align-items: center;
          padding: clamp(18px, 2.2vh, 30px) var(--svc-x);
        }

        /* ── Colour ramps ──
           The numerals and titles are gradient-filled (Tim: "I want
           colorful gradients on the numbers and the text"), one ramp per
           row, so the stack reads as a spectrum top to bottom: orange to
           hot pink on 01, sitting next to the brand orange; cyan to indigo
           on 02; lime to teal on 03; violet to pink on 04. Four brand-
           adjacent pairs, and the numeral and both title lines of a row
           share the row's pair. This is Tim's explicit call over the
           file's earlier one-accent rule (the silver ramps that preceded
           these were rejected). The heading's orange stays on "provide"
           and is not one of the four.

           Each row carries its pair as --svc-ramp-rest-a/b (from the
           "ramp" field on the service, via an inline style on .svc-row),
           the sheet derives the registered --svc-ramp-a/b from those, and
           one shared rule below builds the 135deg gradient. Two names
           because an inline custom property outranks every selector, so
           the hover could not override it, and because a property mixed
           from itself is a cycle and computes to the initial white; the
           rest pair is the input, the ramp pair is the output. The
           gradient is painted on the inner .svc-mask-in, the span that
           holds the text, sized to that span's own box, so the numeral
           gets one full ramp over its 0.85em box and each title line its
           own full ramp rather than one ramp smeared across the pair or
           across the row. The outer span is the clip and the inner is
           what rises, and the rise is a translate the fill never touches,
           so the masked arrival is unchanged.

           Hover: a gradient cannot transition, so the two stops are
           registered custom properties and the hover tweens those, each
           mixed 18% toward white (the row lights up a touch; same pair,
           no glow). Registered so they interpolate (an unregistered custom
           property steps); the browser without @property snaps, and the
           one without color-mix keeps the rest pair on hover, which is
           still the right colours. No text-shadow: the file forbids glows;
           the row ground stays the untinted white .04 wipe. */
        .svc-row {
          --svc-ramp-a: var(--svc-ramp-rest-a, #ffffff);
          --svc-ramp-b: var(--svc-ramp-rest-b, #ffffff);
          transition: --svc-ramp-a 0.35s ease, --svc-ramp-b 0.35s ease;
        }
        @supports (color: color-mix(in oklab, #fff, #000 18%)) {
          .svc-row:focus-visible {
            --svc-ramp-a: color-mix(in oklab, var(--svc-ramp-rest-a), white 18%);
            --svc-ramp-b: color-mix(in oklab, var(--svc-ramp-rest-b), white 18%);
          }
          @media (hover: hover) {
            .svc-row:hover {
              --svc-ramp-a: color-mix(in oklab, var(--svc-ramp-rest-a), white 18%);
              --svc-ramp-b: color-mix(in oklab, var(--svc-ramp-rest-b), white 18%);
            }
          }
        }
        .svc-row-number .svc-mask-in,
        .svc-row-title .svc-mask-in {
          background-image: linear-gradient(135deg, var(--svc-ramp-a) 0%, var(--svc-ramp-b) 100%);
          background-size: 100% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
        .svc-row-number {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(56px, 4.8vw, 92px);
          font-weight: 800;
          line-height: 0.85;
          letter-spacing: -0.04em;
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum" 1;
        }

        /* Two lines, set tight (0.98) so the pair reads as one word block
           against the numeral. 42px at 1920 (75% of the 56px it shipped
           at, same call as the numeral): two lines of it is about 82px of
           a 173px row, so the block sits in air rather than filling the
           row. The capability names are NOT scaled: the lighter tier has
           to stay readable. The fill is the row's colour ramp, the same
           pair as the numeral, one full ramp per line: see "Colour ramps"
           above. */
        .svc-row-title {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.75rem, 2.2vw, 2.625rem);
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Capability names only, in two columns, no bullet and no chip: the
           name is the unit, and the popup is where each one is explained.
           Five names take three lines, four take two, so the tallest row's
           copy is about 85px against a 102px numeral. */
        .svc-row-list {
          list-style: none;
          margin: 0;
          padding: 0;
          columns: 2;
          column-gap: 2.5vw;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(15px, 1vw, 18px);
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.35s ease;
        }
        .svc-row:focus-visible .svc-row-list {
          color: rgba(255, 255, 255, 0.8);
        }
        @media (hover: hover) {
          .svc-row:hover .svc-row-list {
            color: rgba(255, 255, 255, 0.8);
          }
        }
        .svc-row-list li {
          break-inside: avoid;
          opacity: 0;
          translate: 0 12px;
          transition: opacity 0.6s ease, translate 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          /* After the title has broken cover, one name every 40ms. */
          transition-delay: calc(140ms + var(--i, 0) * 40ms);
        }
        .svc-row.is-in .svc-row-list li {
          opacity: 1;
          translate: 0 0;
        }

        /* ── 1280 and under: still one screen under the curtain, but the
           names go back to a single column and give the title the width ── */
        @media (max-width: 1280px) {
          .svc-row-inner {
            grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, 30%);
          }
          .svc-row-list {
            columns: 1;
          }
        }

        /* ── 1024 and under: the curtain and the one-screen contract are
           dropped. The wrapper is normal flow, the screen a static block,
           the anchor sits 80px above it like every other section's
           scroll-margin. Numeral and title share the first line, the names
           run below in two columns, and the rows take their own height
           with padding instead. ── */
        @media (max-width: 1024px) {
          .svc-section {
            height: auto;
            margin-top: 0;
          }
          .svc-anchor {
            top: -80px;
          }
          .svc-screen {
            position: static;
            min-height: 0;
            padding-top: var(--zg-section-lead);
          }
          .svc-header {
            padding-bottom: clamp(28px, 4vw, 40px);
          }
          .svc-heading {
            white-space: normal;
          }

          .svc-row {
            flex: none;
          }
          .svc-row-inner {
            grid-template-columns: minmax(0, auto) minmax(0, 1fr);
            row-gap: clamp(18px, 3vw, 28px);
            align-items: end;
            padding-block: clamp(32px, 4.5vw, 48px);
          }
          /* Same 0.75 as the desktop tiers: at 1024 the numeral bottoms out
             at 56px, and a 35px two-line title stood taller than it. */
          .svc-row-title {
            white-space: normal;
            font-size: clamp(1.3rem, 2.55vw, 1.8rem);
          }
          .svc-row-list {
            grid-column: 1 / -1;
            columns: 2;
            column-gap: clamp(24px, 4vw, 48px);
          }
        }

        /* ── Phones: one column ── */
        @media (max-width: 767px) {
          .svc-row-inner {
            grid-template-columns: minmax(0, 1fr);
            padding-block: 36px;
            row-gap: 14px;
            align-items: start;
          }
          .svc-row-number { font-size: clamp(56px, 20vw, 96px); }
          .svc-row-title {
            font-size: clamp(1.6rem, 7vw, 2rem);
          }
          .svc-row-list {
            columns: 1;
            font-size: 15px;
          }
        }

        /* Asked not to animate, everything is simply already in place: it
           still waits under the curtain, it just does not rise. */
        @media (prefers-reduced-motion: reduce) {
          .svc-mask-in,
          .svc-row-list li,
          .svc-row::after,
          .svc-row::before {
            transition: none;
          }
          .svc-mask-in { translate: 0 0; }
          .svc-row-list li { opacity: 1; translate: 0 0; }
          .svc-row::after { transform: scaleX(1); }
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
      `})]})}export{H as default};
