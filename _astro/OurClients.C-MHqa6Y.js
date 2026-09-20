import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as n}from"./index.DiEladB3.js";const p=["/strane-site/expo-team.webp","/strane-site/expo-outside.webp","/strane-site/expo-inside.webp","/hellavated-site/lifestyle-hero.webp","/garcia-site/hero-event.webp","/garcia-site/apparel-lifestyle.webp","/portfolio/dodrops/hi/dodrops-tarot-melon-lifestyle.webp"],E=7e3,u=2e3,N=.13,f={3:.55,4:.9,5:.8,6:.7},w={3:.35,6:.6},b="160px";function S(){const[s,a]=n.useState(!1);return n.useEffect(()=>{const o=window.matchMedia("(prefers-reduced-motion: reduce)");a(o.matches);const i=r=>a(r.matches);return o.addEventListener("change",i),()=>o.removeEventListener("change",i)},[]),s}function I({active:s}){const a=S(),[o,i]=n.useState({current:0,previous:-1});return n.useEffect(()=>{if(!s||a)return;const r=window.setInterval(()=>{i(t=>({current:(t.current+1)%p.length,previous:t.current}))},E+u);return()=>window.clearInterval(r)},[s,a]),e.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none","aria-hidden":"true",style:{opacity:N,WebkitMaskImage:`linear-gradient(to bottom, transparent 0, #000 ${b})`,maskImage:`linear-gradient(to bottom, transparent 0, #000 ${b})`},children:p.map((r,t)=>e.jsx("img",{src:r,alt:"",className:"absolute inset-0 w-full h-full object-cover object-center",style:{opacity:t===o.current||t===o.previous?1:0,zIndex:t===o.current?2:t===o.previous?1:0,filter:[f[t]?`brightness(${f[t]})`:"",w[t]?`saturate(${w[t]})`:""].filter(Boolean).join(" ")||void 0,transition:a?"none":`opacity ${u}ms linear`},loading:t===0?"eager":"lazy",decoding:"async"},r))})}const R=[{name:"BETTER",logo:"/brand-logo/better.png"},{name:"HELLAVATED",logo:"/brand-logo/hellavated.png"},{name:"DO DROPS",logo:"/brand-logo/dodrops.png"},{name:"STRANE",logo:"/brand-logo/strane.png"},{name:"GHP",logo:"/brand-logo/ghp-wordmark.png"}],A=[{name:"DOUGIE",logo:"/brand-logo/dougie.png"},{name:"AVITAS",logo:"/brand-logo/avitas-wordmark.png"},{name:"LOOT BAR",logo:"/brand-logo/loot-bar.png"},{name:"HOLISTIC INDUSTRIES",logo:"/brand-logo/holistic-industries.png"},{name:"SUNNY JAYS",logo:"/brand-logo/sunny-jays.png"}];function T({name:s,logo:a,muted:o}){return e.jsx("div",{className:`oc-pill flex-shrink-0 flex items-center justify-center px-5 py-3 md:px-8 md:py-3
                 rounded-full border border-white/[0.12] bg-white/[0.03]
                 transition-colors duration-300 ease-out cursor-default select-none`,children:e.jsx("img",{src:a,alt:o?"":s,"aria-hidden":o||void 0,className:"oc-logo h-6 md:h-10 w-auto object-contain",loading:"lazy"})})}const v=3;function x({clients:s,reverse:a,pxPerSecond:o}){const i=n.useRef(null),r=n.useRef(null),[t,y]=n.useState(v),[k,j]=n.useState(30);return n.useLayoutEffect(()=>{const d=i.current,c=r.current;if(!d||!c)return;const l=()=>{const m=c.getBoundingClientRect().width,g=d.getBoundingClientRect().width;m<1||g<1||(y(Math.max(v,Math.ceil(g/m)+1)),j(m/o))};l();const h=new ResizeObserver(l);return h.observe(d),h.observe(c),()=>h.disconnect()},[o]),e.jsx("div",{className:"oc-row",ref:i,children:e.jsx("div",{className:`oc-track${a?" oc-track-reverse":""}`,style:{animationDuration:`${k}s`,"--oc-shift":`${(100/t).toFixed(4)}%`},children:Array.from({length:t},(d,c)=>e.jsx("div",{className:"oc-set",ref:c===0?r:void 0,"aria-hidden":c===0?void 0:"true",children:s.map(l=>e.jsx(T,{...l,muted:c!==0},l.name))},c))})})}function D(){const s=n.useRef(null),[a,o]=n.useState(!1);return n.useEffect(()=>{const i=s.current;if(!i)return;const r=new IntersectionObserver(([t])=>{t.isIntersecting&&i.classList.add("in-view"),o(t.isIntersecting)},{threshold:.15});return r.observe(i),()=>r.disconnect()},[]),e.jsxs("section",{ref:s,className:"oc-section relative z-10 pt-[var(--zg-section-lead)] md:pt-[calc(var(--zg-section-lead)*0.58)] pb-10 md:pb-12 bg-black overflow-hidden",children:[e.jsx(I,{active:a}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-10 md:h-12 pointer-events-none",style:{background:"linear-gradient(to top, rgba(10,10,10,1), transparent)"}}),e.jsxs("div",{className:"oc-heading relative z-10 zg-container mb-6 md:mb-5 text-center",children:[e.jsx("p",{className:"zg-eyebrow mb-[var(--zg-eyebrow-gap)]",children:"[  TRUSTED BY  ]"}),e.jsxs("h2",{className:"text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95]",children:["OUR"," ",e.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:"linear-gradient(90deg, #FFA040, #FF5A1F, #E64500, #FFA040)",backgroundSize:"200% 100%",animation:"gradient-slide 4s linear infinite"},children:"CLIENTS"})]})]}),e.jsx("div",{className:"oc-desc relative z-10 hidden md:block max-w-2xl mx-auto px-[var(--zg-gutter)] mb-16 md:mb-10 text-center",children:e.jsx("p",{className:"text-sm md:text-base text-white/55 leading-relaxed",children:"We partner with forward-thinking brands to craft digital experiences that drive growth, deepen engagement, and leave a lasting impression."})}),e.jsxs("div",{className:"oc-rows relative z-10",children:[e.jsx(x,{clients:R,pxPerSecond:40}),e.jsx(x,{clients:A,pxPerSecond:33,reverse:!0})]}),e.jsx("style",{children:`
        .oc-heading,
        .oc-desc,
        .oc-rows {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .oc-section.in-view .oc-heading {
          opacity: 1;
          transform: translateY(0);
        }
        .oc-section.in-view .oc-desc {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.15s;
        }
        .oc-section.in-view .oc-rows {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .oc-rows {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        /* Ends the marquee on air rather than on a cut edge. The ramp is wider
           than the page gutter on purpose: at gutter width a wordmark is
           still near-opaque when it reaches the edge, which reads as a crop. */
        .oc-row {
          overflow: hidden;
          --oc-fade: clamp(48px, 9vw, 160px);
          -webkit-mask-image: linear-gradient(
            to right, transparent 0, #000 var(--oc-fade),
            #000 calc(100% - var(--oc-fade)), transparent 100%);
          mask-image: linear-gradient(
            to right, transparent 0, #000 var(--oc-fade),
            #000 calc(100% - var(--oc-fade)), transparent 100%);
        }

        .oc-track {
          display: flex;
          width: max-content;
          animation-name: oc-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .oc-track-reverse {
          animation-name: oc-scroll-reverse;
        }

        /* One set's width per cycle; --oc-shift is set per row from the
           measured copy count. */
        @keyframes oc-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-1 * var(--oc-shift))); }
        }

        @keyframes oc-scroll-reverse {
          from { transform: translateX(calc(-1 * var(--oc-shift))); }
          to   { transform: translateX(0); }
        }

        .oc-set {
          display: flex;
          flex-shrink: 0;
          gap: 0.75rem;
          padding-right: 0.75rem;
        }

        @media (min-width: 768px) {
          /* 2026-09-20: the row-to-row gap comes down to 0.875rem while the
             gap INSIDE a set stays at 1.25rem. They were one number because
             they started as one grid, but they answer different questions now:
             the horizontal one is the spacing between two names travelling
             past each other and is doing its job, the vertical one is section
             height, which is what the owner flagged. Two rows this close still
             read as two rows, not as a block, because they travel opposite
             ways. */
          .oc-rows { gap: 0.875rem; }
          .oc-set { gap: 1.25rem; padding-right: 1.25rem; }
        }

        /* Reading a name is worth more than the motion; the strip holds still
           while a pointer is on it. */
        .oc-rows:hover .oc-track {
          animation-play-state: paused;
        }

        .oc-pill:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        /* "Nên trắng đen." Nine of the ten wordmarks are already pure white
           (measured, they carry no chroma at all), so this is a rule for the
           set rather than a patch on one file: DOUGIE's gold offset shadow was
           the only colour on the strip, and DOUGIE is the logo that got
           circled on the board. Grayscale takes the gold to a mid grey, so the
           shadow still reads as a shadow instead of disappearing. */
        .oc-logo {
          filter: grayscale(1);
          opacity: 0.85;
          transition: opacity 0.3s ease-out;
        }

        .oc-pill:hover .oc-logo {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          /* No travel: the rows fall back to the static wrapped grid this
             section used to be, and every copy past the first (which exists
             only to make the loop seamless) comes out, rather than showing
             each client N times. */
          .oc-track {
            animation: none;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }
          .oc-set {
            flex-wrap: wrap;
            justify-content: center;
            padding-right: 0;
          }
          .oc-set[aria-hidden='true'] {
            display: none;
          }
          .oc-row {
            -webkit-mask-image: none;
            mask-image: none;
          }
          .oc-heading,
          .oc-desc,
          .oc-rows {
            transition: none;
          }
        }
      `})]})}export{D as default};
