import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.DiEladB3.js";const b=[{name:"BETTER",logo:"/brand-logo/better.png"},{name:"HELLAVATED",logo:"/brand-logo/hellavated.png"},{name:"DO DROPS",logo:"/brand-logo/dodrops.png"},{name:"STRANE",logo:"/brand-logo/strane.png"},{name:"GHP",logo:"/brand-logo/ghp-wordmark.png"}],v=[{name:"DOUGIE",logo:"/brand-logo/dougie.png"},{name:"AVITAS",logo:"/brand-logo/avitas-wordmark.png"},{name:"LOOT BAR",logo:"/brand-logo/loot-bar.png"},{name:"HOLISTIC INDUSTRIES",logo:"/brand-logo/holistic-industries.png"},{name:"SUNNY JAYS",logo:"/brand-logo/sunny-jays.png"}];function y({name:n,logo:a,muted:t}){return e.jsx("div",{className:`oc-pill flex-shrink-0 flex items-center justify-center px-5 py-3 md:px-8 md:py-4
                 rounded-full border border-white/[0.12] bg-white/[0.03]
                 transition-colors duration-300 ease-out cursor-default select-none`,children:e.jsx("img",{src:a,alt:t?"":n,"aria-hidden":t||void 0,className:"oc-logo h-6 md:h-10 w-auto object-contain",loading:"lazy"})})}const p=3;function f({clients:n,reverse:a,pxPerSecond:t}){const i=r.useRef(null),m=r.useRef(null),[g,u]=r.useState(p),[w,x]=r.useState(30);return r.useLayoutEffect(()=>{const c=i.current,o=m.current;if(!c||!o)return;const s=()=>{const d=o.getBoundingClientRect().width,h=c.getBoundingClientRect().width;d<1||h<1||(u(Math.max(p,Math.ceil(h/d)+1)),x(d/t))};s();const l=new ResizeObserver(s);return l.observe(c),l.observe(o),()=>l.disconnect()},[t]),e.jsx("div",{className:"oc-row",ref:i,children:e.jsx("div",{className:`oc-track${a?" oc-track-reverse":""}`,style:{animationDuration:`${w}s`,"--oc-shift":`${(100/g).toFixed(4)}%`},children:Array.from({length:g},(c,o)=>e.jsx("div",{className:"oc-set",ref:o===0?m:void 0,"aria-hidden":o===0?void 0:"true",children:n.map(s=>e.jsx(y,{...s,muted:o!==0},s.name))},o))})})}function N(){const n=r.useRef(null);return r.useEffect(()=>{const a=n.current;if(!a)return;const t=new IntersectionObserver(([i])=>{i.isIntersecting&&(a.classList.add("in-view"),t.disconnect())},{threshold:.15});return t.observe(a),()=>t.disconnect()},[]),e.jsxs("section",{ref:n,className:"oc-section relative z-10 pt-[var(--zg-section-lead)] pb-14 md:pb-36 bg-black overflow-hidden",children:[e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 pointer-events-none",style:{background:"linear-gradient(to top, rgba(10,10,10,1), transparent)"}}),e.jsxs("div",{className:"oc-heading zg-container mb-6 md:mb-8 text-center",children:[e.jsx("p",{className:"zg-eyebrow mb-[var(--zg-eyebrow-gap)]",children:"[  TRUSTED BY  ]"}),e.jsxs("h2",{className:"text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95]",children:["OUR"," ",e.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:"linear-gradient(90deg, #FFA040, #FF5A1F, #E64500, #FFA040)",backgroundSize:"200% 100%",animation:"gradient-slide 4s linear infinite"},children:"CLIENTS"})]})]}),e.jsx("div",{className:"oc-desc hidden md:block max-w-2xl mx-auto px-[var(--zg-gutter)] mb-16 md:mb-20 text-center",children:e.jsx("p",{className:"text-sm md:text-base text-white/55 leading-relaxed",children:"We partner with forward-thinking brands to craft digital experiences that drive growth, deepen engagement, and leave a lasting impression."})}),e.jsxs("div",{className:"oc-rows",children:[e.jsx(f,{clients:b,pxPerSecond:40}),e.jsx(f,{clients:v,pxPerSecond:33,reverse:!0})]}),e.jsx("style",{children:`
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
          .oc-rows { gap: 1.25rem; }
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
      `})]})}export{N as default};
