import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.DiEladB3.js";import S from"./index.tUWw1UFN.js";const D=[{name:"BETTER",src:"/brand-logo/better.png",row:"a",plateH:28,quote:"Zegoe transformed our brand identity from the ground up. Their attention to detail and creative vision exceeded every expectation we had.",author:"Sarah Chen",role:"Head of Marketing"},{name:"HELLAVATED",src:"/brand-logo/hellavated.png",row:"a",plateH:32,quote:"Zegoe has an extraordinary ability to translate complex ideas into beautiful, intuitive designs. A truly exceptional partner.",author:"Amara Obi",role:"Creative Lead"},{name:"DO DROPS",src:"/brand-logo/dodrops.png",row:"a",plateH:52,quote:"The level of craft and polish Zegoe brings to every project is remarkable. They don't just deliver. They elevate.",author:"Elena Voss",role:"Brand Manager"},{name:"STRANE",src:"/brand-logo/strane.png",row:"a",plateH:44,quote:"Their creative process is world-class. Every deliverable was polished, on-brand, and exceeded our expectations by miles.",author:"James Wright",role:"CEO"},{name:"GHP",src:"/brand-logo/ghp-wordmark.png",row:"a"},{name:"DOUGIE",src:"/brand-logo/dougie.png",row:"b"},{name:"AVITAS",src:"/brand-logo/avitas-wordmark.png",row:"b"},{name:"LOOT BAR",src:"/brand-logo/loot-bar.png",row:"b",plateH:40,quote:"Working with Zegoe felt like having an in-house creative team that truly understood our vision. The results speak for themselves.",author:"Marcus Lee",role:"Product Director"},{name:"HOLISTIC INDUSTRIES",src:"/brand-logo/holistic-industries.png",row:"b",plateH:48,quote:"From concept to execution, Zegoe delivered a world-class experience. Our engagement metrics increased by 300% after the redesign.",author:"David Park",role:"VP of Digital"},{name:"SUNNY JAYS",src:"/brand-logo/sunny-jays.png",row:"b"}],ie=D.filter(a=>a.row==="a"),ce=D.filter(a=>a.row==="b"),Q=D.filter(a=>a.quote),le=40,de=24,ee=6e3,V=.7,te=.55,re=.3,ue=250;function he({client:a,muted:p,onPromote:f}){const v=!!a.quote,k=r.useRef(null),l=()=>{k.current!==null&&(window.clearTimeout(k.current),k.current=null)};r.useEffect(()=>l,[]);const E=v&&!p?{role:"button",tabIndex:0,"aria-label":`Read what ${a.name} said`}:{};return t.jsx("div",{"data-brand":a.name,...E,className:`cv-pill flex-shrink-0 flex items-center justify-center px-5 py-3 md:px-8 md:py-4
                 rounded-full border border-white/[0.12] bg-white/[0.03] select-none
                 ${v?"cv-pill-voice cursor-pointer":"cursor-default"}`,onPointerEnter:s=>{if(!v||!f||!window.matchMedia("(pointer: fine)").matches)return;const C=s.currentTarget;l(),k.current=window.setTimeout(()=>f(a.name,C),ue)},onPointerLeave:l,onClick:s=>{!v||!f||(l(),f(a.name,s.currentTarget))},onKeyDown:s=>{!v||!f||s.key!=="Enter"&&s.key!==" "||(s.preventDefault(),f(a.name,s.currentTarget))},children:t.jsx("img",{src:a.src,alt:p?"":a.name,"aria-hidden":p||void 0,className:"cv-logo h-6 md:h-10 w-auto object-contain",loading:"lazy"})})}const ne=3;function oe({clients:a,reverse:p,pxPerSecond:f,onMeasure:v,onPromote:k}){const l=r.useRef(null),E=r.useRef(null),s=r.useRef(null),[C,u]=r.useState(ne),[M,B]=r.useState(30);return r.useLayoutEffect(()=>{const N=l.current,w=E.current,c=s.current;if(!N||!w||!c)return;const A=()=>{const L=w.getBoundingClientRect().width,j=N.getBoundingClientRect().width;if(L<1||j<1||(u(Math.max(ne,Math.ceil(j/L)+1)),B(L/f),!v))return;const z=c.getBoundingClientRect(),F=[];w.querySelectorAll(".cv-pill-voice").forEach(W=>{const q=W.getBoundingClientRect();F.push({name:W.dataset.brand||"",offset:q.left-z.left,width:q.width})}),v({track:c,setW:L,rowW:j,reverse:!!p,pills:F})};A();const O=new ResizeObserver(A);return O.observe(N),O.observe(w),()=>O.disconnect()},[f]),t.jsx("div",{className:"cv-row",ref:l,children:t.jsx("div",{ref:s,className:`cv-track${p?" cv-track-reverse":""}`,style:{animationDuration:`${M}s`,"--oc-shift":`${(100/C).toFixed(4)}%`},children:Array.from({length:C},(N,w)=>t.jsx("div",{className:"cv-set",ref:w===0?E:void 0,"aria-hidden":w===0?void 0:"true",children:a.map(c=>t.jsx(he,{client:c,muted:w!==0,onPromote:k},c.name))},w))})})}function ve(){const a=r.useRef(null),p=r.useRef(null),f=r.useRef(null),v=r.useRef(null),k=r.useRef(null),l=r.useRef(null),E=r.useRef(null),[s,C]=r.useState(!1),[u,M]=r.useState(null),B=r.useRef(null);B.current=u;const N=r.useRef({a:null,b:null}),w=r.useRef({}),c=r.useRef("idle"),A=r.useRef(ee),O=r.useRef(!1),L=r.useRef(null),j=r.useRef(null),z=r.useRef(()=>{});r.useEffect(()=>{C(window.matchMedia("(prefers-reduced-motion: reduce)").matches)},[]),r.useEffect(()=>{const e=a.current;if(!e)return;const n=new IntersectionObserver(([o])=>{o.isIntersecting&&(e.classList.add("in-view"),n.disconnect())},{threshold:.15});return n.observe(e),()=>n.disconnect()},[]);const F=(e,n)=>{const o=p.current;!o||!e||o.querySelectorAll(`.cv-pill[data-brand="${CSS.escape(e)}"]`).forEach(i=>i.classList.toggle("is-live",n))},W=(e,n)=>{const o=v.current,i=f.current,d=E.current,b=B.current;if(!o||!i||c.current==="idle"||c.current==="collapsing"){n?.();return}c.current="collapsing",j.current?.kill();const y=q(b?.name),R=i.getBoundingClientRect(),m=y?.getBoundingClientRect(),g=S.timeline({onComplete:()=>{S.set(o,{autoAlpha:0}),F(b?.name??null,!1),c.current="idle",M(null),n?.()}});d&&g.to(d,{opacity:0,y:-8,duration:e?.12:.2,ease:"power2.in"},0),m?(g.to(o,{left:m.left-R.left,top:m.top-R.top,width:m.width,height:m.height,borderRadius:"9999px",duration:e?re:te,ease:"power3.inOut"},e?.08:.16),l.current&&g.to(l.current,{height:U(),duration:e?re:te,ease:"power3.inOut"},e?.08:.16)):g.to(o,{autoAlpha:0,duration:.2},0),j.current=g},q=e=>{const n=p.current;if(!n||!e)return null;const o=n.getBoundingClientRect(),i=o.left+o.width/2,d=Array.from(n.querySelectorAll(`.cv-pill[data-brand="${CSS.escape(e)}"]`));return d.length?d.reduce((b,y)=>{const R=y.getBoundingClientRect(),m=b.getBoundingClientRect();return Math.abs(R.left+R.width/2-i)<Math.abs(m.left+m.width/2-i)?y:b},d[0]):null},U=()=>window.matchMedia("(min-width: 768px)").matches?le:de;z.current=(e,n)=>{if(s||u?.name===e&&c.current!=="collapsing")return;const o=D.find(d=>d.name===e);if(!o?.quote)return;const i=()=>{L.current=q(e)||n,c.current="growing",M(o)};c.current==="idle"?i():W(!0,i)},r.useLayoutEffect(()=>{if(!u||s)return;const e=v.current,n=f.current,o=k.current,i=E.current,d=L.current;if(!e||!n||!o||!d)return;const b=n.getBoundingClientRect(),y=parseFloat(getComputedStyle(n).paddingLeft)||0,R=parseFloat(getComputedStyle(n).paddingRight)||0,m=n.clientWidth-y-R,g=Math.min(720,m),h=getComputedStyle(e),$=(parseFloat(h.paddingLeft)||0)+(parseFloat(h.paddingRight)||0);o.style.width=`${g-$}px`,l.current&&S.set(l.current,{height:ae(u)}),S.set(i,{opacity:1,y:0}),S.set(e,{left:0,top:0,width:g,height:"auto",autoAlpha:0});const P=e.offsetHeight,x=y+(m-g)/2,_=Math.max(0,(n.clientHeight-P)/2),I=d.getBoundingClientRect();S.set(e,{left:I.left-b.left,top:I.top-b.top,width:I.width,height:I.height,borderRadius:"9999px",autoAlpha:1}),S.set(i,{opacity:0,y:14}),l.current&&S.set(l.current,{height:U()}),F(u.name,!0),j.current?.kill();const T=S.timeline({onComplete:()=>{c.current="holding",A.current=ee}});T.to(e,{left:x,top:_,width:g,height:P,borderRadius:"20px",duration:V,ease:"power3.inOut"},0),l.current&&T.to(l.current,{height:ae(u),duration:V,ease:"power3.inOut"},0),T.to(i,{opacity:1,y:0,duration:.35,ease:"power2.out"},V-.35),j.current=T},[u,s]),r.useEffect(()=>{if(s)return;const e=a.current,n=p.current;if(!e||!n)return;let o=0,i=!1,d=0;const b=h=>{const $=d?Math.min(h-d,100):16;d=h,["a","b"].forEach(P=>{const x=N.current[P];if(!x||x.setW<1)return;const _=getComputedStyle(x.track).transform,I=_&&_!=="none"?new DOMMatrix(_).m41:0,T=x.setW/2;x.pills.forEach(H=>{let G=((I+H.offset+H.width/2-x.rowW/2)%x.setW+x.setW)%x.setW;G>T&&(G-=x.setW);const Y=G>=0?1:-1,Z=w.current[H.name];if(w.current[H.name]=Y,Z!==void 0&&Z!==Y&&Math.abs(G)<T/2&&c.current==="idle"){const J=q(H.name),K=D.find(se=>se.name===H.name);J&&K&&(L.current=J,c.current="growing",M(K))}})}),c.current==="holding"&&!O.current&&(A.current-=$,A.current<=0&&W()),o=requestAnimationFrame(b)},y=new IntersectionObserver(([h])=>{h.isIntersecting&&!i?(i=!0,d=0,o=requestAnimationFrame(b)):!h.isIntersecting&&i&&(i=!1,cancelAnimationFrame(o))},{threshold:0});y.observe(e);const R=h=>!!(h instanceof Element&&h.closest(".cv-row, .cv-plate")),m=h=>{R(h.target)&&(O.current=!0)},g=h=>{R(h.relatedTarget)||(O.current=!1)};return n.addEventListener("pointerover",m),n.addEventListener("pointerout",g),()=>{y.disconnect(),cancelAnimationFrame(o),n.removeEventListener("pointerover",m),n.removeEventListener("pointerout",g),j.current?.kill()}},[s]);const X=(e,n)=>z.current(e,n);return t.jsxs("section",{ref:a,id:"testimonials",className:"cv-section relative z-10 pt-[var(--zg-section-lead)] pb-16 md:pb-36 bg-black overflow-hidden",children:[t.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10",style:{background:"linear-gradient(to top, rgba(10,10,10,1), transparent)"}}),t.jsxs("div",{className:"cv-heading zg-container mb-8 md:mb-12 text-center",children:[t.jsxs("p",{className:"zg-eyebrow mb-[var(--zg-eyebrow-gap)]",children:[t.jsx("span",{"aria-hidden":"true",children:"[  "}),"CLIENTS",t.jsx("span",{"aria-hidden":"true",children:"  ]"})]}),t.jsxs("h2",{className:"text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95]",children:["What our",t.jsx("br",{}),t.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:"linear-gradient(90deg, #FFA040, #FF5A1F, #E64500, #FFA040)",backgroundSize:"200% 100%",animation:"gradient-slide 4s linear infinite"},children:"clients say"})]})]}),!s&&t.jsx("ul",{className:"sr-only",children:Q.map(e=>t.jsxs("li",{children:[t.jsx("blockquote",{children:e.quote}),t.jsxs("p",{children:[e.author,", ",e.role,", ",e.name]})]},e.name))}),t.jsxs("div",{className:"cv-rows",ref:p,children:[t.jsx(oe,{clients:ie,pxPerSecond:40,onMeasure:e=>N.current.a=e,onPromote:X}),t.jsx("div",{className:"cv-slot",ref:f,children:!s&&t.jsx("div",{ref:v,className:"cv-plate","aria-hidden":"true",children:t.jsxs("div",{ref:k,className:"cv-plate-inner",children:[u&&t.jsx("img",{ref:l,src:u.src,alt:"",className:"cv-logo cv-plate-logo w-auto object-contain"}),t.jsxs("div",{ref:E,className:"cv-plate-text",children:[t.jsx("blockquote",{className:"cv-plate-quote text-sm md:text-[15px] leading-[1.8] text-white/70",children:u?.quote}),t.jsxs("div",{className:"cv-plate-author border-t border-white/[0.06]",children:[t.jsx("p",{className:"text-sm font-semibold text-white",children:u?.author}),t.jsxs("p",{className:"text-xs text-white/55",children:[u?.role,", ",u?.name]})]})]})]})})}),t.jsx(oe,{clients:ce,pxPerSecond:33,reverse:!0,onMeasure:e=>N.current.b=e,onPromote:X})]}),s&&t.jsx("div",{className:"cv-static zg-container",children:Q.map(e=>t.jsxs("div",{className:"cv-static-row",children:[t.jsx("img",{src:e.src,alt:e.name,style:{height:`${e.plateH??40}px`},className:"cv-logo cv-static-logo w-auto object-contain",loading:"lazy"}),t.jsx("blockquote",{className:"text-sm md:text-[15px] leading-[1.8] text-white/70",children:e.quote}),t.jsxs("p",{className:"text-xs text-white/55",children:[e.author,", ",e.role,", ",e.name]})]},e.name))}),t.jsx("style",{children:`
        .cv-heading,
        .cv-rows,
        .cv-static {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .cv-section.in-view .cv-heading {
          opacity: 1;
          transform: translateY(0);
        }
        .cv-section.in-view .cv-rows,
        .cv-section.in-view .cv-static {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .cv-rows {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          /* The slot is 200-300px of empty air most of the time. Letting it
             take the pointer would mean the marquee froze whenever a cursor
             rested anywhere near the middle of the section, so hit testing
             skips the container and lands only on the rows and the plate:
             :hover still lights up the ancestor from whichever of those is
             actually under the cursor. */
          pointer-events: none;
        }
        .cv-row,
        .cv-plate {
          pointer-events: auto;
        }

        /* Ends the marquee on air rather than on a cut edge. The ramp is wider
           than the page gutter on purpose: at gutter width a wordmark is
           still near-opaque when it reaches the edge, which reads as a crop. */
        .cv-row {
          overflow: hidden;
          --oc-fade: clamp(48px, 9vw, 160px);
          -webkit-mask-image: linear-gradient(
            to right, transparent 0, #000 var(--oc-fade),
            #000 calc(100% - var(--oc-fade)), transparent 100%);
          mask-image: linear-gradient(
            to right, transparent 0, #000 var(--oc-fade),
            #000 calc(100% - var(--oc-fade)), transparent 100%);
        }

        .cv-track {
          display: flex;
          width: max-content;
          animation-name: oc-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .cv-track-reverse {
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

        .cv-set {
          display: flex;
          flex-shrink: 0;
          gap: 0.75rem;
          padding-right: 0.75rem;
        }

        @media (min-width: 768px) {
          .cv-rows { gap: 1.25rem; }
          .cv-set { gap: 1.25rem; padding-right: 1.25rem; }
        }

        /* Reading a name is worth more than the motion; the strip holds still
           while a pointer is on it. */
        .cv-rows:hover .cv-track {
          animation-play-state: paused;
        }

        .cv-pill:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .cv-pill:focus-visible {
          outline: 1px solid rgba(255, 255, 255, 0.5);
          outline-offset: 3px;
        }

        /* The pill a plate came out of stays in the track and keeps moving,
           but steps back while its own words are on screen. */
        .cv-pill.is-live {
          opacity: 0.25;
        }
        .cv-pill {
          transition: background-color 0.3s ease-out, opacity 0.3s ease-out;
        }

        /* "Nên trắng đen." Nine of the ten wordmarks are already pure white
           (measured, they carry no chroma at all), so this is a rule for the
           set rather than a patch on one file: DOUGIE's gold offset shadow was
           the only colour on the strip, and DOUGIE is the logo that got
           circled on the board. Grayscale takes the gold to a mid grey, so the
           shadow still reads as a shadow instead of disappearing. */
        .cv-logo {
          filter: grayscale(1);
          opacity: 0.85;
          transition: opacity 0.3s ease-out;
        }

        .cv-pill:hover .cv-logo {
          opacity: 1;
        }

        /* ── The reader ──
           Height is reserved whether or not anything is open, so the two rows
           never move. The plate is absolutely placed inside it and is tweened
           from the pill's rect to this box's middle. */
        .cv-slot {
          position: relative;
          /* Above both rows: a plate growing out of the lower row starts life
             exactly on top of the pill it came from. */
          z-index: 3;
          min-height: 272px;
          padding-inline: var(--zg-gutter);
        }

        @media (min-width: 768px) {
          .cv-slot { min-height: clamp(200px, 26vw, 300px); }
        }

        /* No new chrome: this is the pill's own border and fill, grown. */
        .cv-plate {
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 9999px;
          padding: 1.125rem 1.25rem;
          visibility: hidden;
          opacity: 0;
        }

        @media (min-width: 768px) {
          .cv-plate { padding: 1.5rem 2rem; }
        }

        .cv-plate-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .cv-plate-logo {
          height: 40px;
          margin-bottom: 0.875rem;
        }

        @media (min-width: 768px) {
          .cv-plate-logo { margin-bottom: 1.125rem; }
        }

        .cv-plate-author {
          margin-top: 1rem;
          padding-top: 0.875rem;
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          /* No travel: the rows fall back to the static wrapped grid this
             section used to be, and every copy past the first (which exists
             only to make the loop seamless) comes out, rather than showing
             each client N times. */
          .cv-track {
            animation: none;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }
          .cv-set {
            flex-wrap: wrap;
            justify-content: center;
            padding-right: 0;
          }
          .cv-set[aria-hidden='true'] {
            display: none;
          }
          .cv-row {
            -webkit-mask-image: none;
            mask-image: none;
          }
          .cv-slot {
            min-height: 0;
            padding-inline: 0;
          }
          .cv-heading,
          .cv-rows,
          .cv-static {
            transition: none;
          }
        }

        .cv-static {
          margin-top: 2.5rem;
          max-width: 720px;
        }
        .cv-static-row {
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .cv-static-logo {
          height: 32px;
          margin-bottom: 0.875rem;
        }
      `})]})}function ae(a){const p=a.plateH??40;return window.matchMedia("(min-width: 768px)").matches?p:Math.round(p*.7)}export{ve as default};
