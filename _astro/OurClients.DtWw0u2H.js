import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.DiEladB3.js";const r=[{name:"AVITAS",logo:"/brand-logo/avitas-wordmark.png"},{name:"BETTER",logo:"/brand-logo/better.png"},{name:"GHP",logo:"/brand-logo/ghp-wordmark.png"},{name:"HELLAVATED",logo:"/brand-logo/hellavated.png"},{name:"HOLISTIC INDUSTRIES",logo:"/brand-logo/holistic-industries.png"},{name:"LOOT BAR",logo:"/brand-logo/loot-bar.png"},{name:"STRANE",logo:"/brand-logo/strane.png"},{name:"DO DROPS",logo:"/brand-logo/dodrops.png"},{name:"SUNNY JAYS",logo:"/brand-logo/sunny-jays.png"},{name:"DOUGIE",logo:"/brand-logo/dougie.png"}];function i({name:a,logo:t}){return e.jsx("div",{className:`flex-shrink-0 flex items-center justify-center px-8 py-4
                 rounded-full border border-white/[0.12] bg-white/[0.03]
                 hover:bg-white/[0.07] transition-all duration-300 ease-out cursor-default select-none`,children:e.jsx("img",{src:t,alt:a,className:"h-8 md:h-10 w-auto object-contain opacity-90",loading:"lazy"})})}function d(){const a=o.useRef(null);return o.useEffect(()=>{const t=a.current;if(!t)return;const n=new IntersectionObserver(([s])=>{s.isIntersecting&&(t.classList.add("in-view"),n.disconnect())},{threshold:.15});return n.observe(t),()=>n.disconnect()},[]),e.jsxs("section",{ref:a,className:"oc-section relative z-10 pt-28 md:pt-36 pb-28 md:pb-36 bg-black overflow-hidden",children:[e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 pointer-events-none",style:{background:"linear-gradient(to top, rgba(10,10,10,1), transparent)"}}),e.jsxs("div",{className:"oc-heading max-w-7xl mx-auto px-6 mb-6 md:mb-8 text-center",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-white/30 mb-6",children:"[  TRUSTED BY  ]"}),e.jsxs("h2",{className:"text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95]",children:["OUR"," ",e.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:"linear-gradient(90deg, #FFA040, #FF5A1F, #E64500, #FFA040)",backgroundSize:"200% 100%",animation:"gradient-slide 4s linear infinite"},children:"CLIENTS"})]})]}),e.jsx("div",{className:"oc-desc max-w-2xl mx-auto px-6 mb-16 md:mb-20 text-center",children:e.jsx("p",{className:"text-sm md:text-base text-white/40 leading-relaxed",children:"We partner with forward-thinking brands to craft digital experiences that drive growth, elevate engagement, and leave a lasting impression."})}),e.jsx("div",{className:"max-w-5xl mx-auto px-6",children:e.jsx("div",{className:"flex flex-wrap justify-center gap-4 md:gap-5",children:r.map((t,n)=>e.jsx("div",{className:"oc-pill",style:{transitionDelay:`${n*60}ms`},children:e.jsx(i,{...t})},t.name))})}),e.jsx("style",{children:`
        .oc-heading,
        .oc-desc,
        .oc-pill {
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
        .oc-section.in-view .oc-pill {
          opacity: 1;
          transform: translateY(0);
        }
      `})]})}export{d as default};
