import{j as i}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.DiEladB3.js";import{g as f}from"./index.CB87Sc6I.js";import{g as B,a as E,C as D}from"./CaseStudyContent.Tp7WJBTB.js";import"./preload-helper.BlTxHScW.js";const C=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function K({slug:p,onClose:w,onNext:y}){const b=r.useRef(null),h=r.useRef(null),j=r.useRef(null),R=r.useRef(!1),S=r.useRef(null),[l,T]=r.useState(p),x=r.useRef(null),L=r.useRef(l);L.current=l;const m=B(l);r.useLayoutEffect(()=>{S.current=document.activeElement??null;const t=b.current,e=h.current;if(!(!t||!e))return C()?f.set(t,{opacity:1}):(f.fromTo(t,{opacity:0},{opacity:1,duration:.35,ease:"power2.out"}),f.fromTo(e,{y:26},{y:0,duration:.5,ease:"power3.out",clearProps:"transform"})),j.current?.focus({preventScroll:!0}),()=>{const o=S.current;o&&document.contains(o)&&o.focus({preventScroll:!0})}},[]),r.useEffect(()=>{const t=window.__lenis;t?.stop?.();const e=document.documentElement.style.overflow,o=document.body.style.overflow;return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",()=>{document.documentElement.style.overflow=e,document.body.style.overflow=o,t?.start?.()}},[]),r.useEffect(()=>{const t=L.current;if(p===t)return;const e=h.current;if(!e||C()){T(p),e&&(e.scrollTop=0);return}const o=E(t),n=(o?p!==o.prev.slug:!0)?-4.5:4.5;x.current?.kill();const s=f.timeline();x.current=s,s.to(e,{opacity:0,xPercent:n,duration:.24,ease:"power2.in",onComplete:()=>{f.set(e,{xPercent:-n,opacity:0}),T(p),e.scrollTop=0}}),s.to(e,{opacity:1,xPercent:0,duration:.44,ease:"power3.out"})},[p]),r.useEffect(()=>()=>{x.current?.kill();const t=h.current;t&&f.set(t,{opacity:1,xPercent:0})},[]),r.useEffect(()=>{const t=E(l);if(!t)return;const e=[t.prev,t.next].flatMap(c=>[c.cover?.src,c.pageBg?.src]).filter(c=>!!c);if(!e.length)return;let o=!1;const a=()=>{if(!o)for(const c of e){const g=new Image;g.decoding="async",g.src=c}},n=window,s=n.requestIdleCallback?n.requestIdleCallback(a,{timeout:2500}):window.setTimeout(a,900);return()=>{o=!0,n.requestIdleCallback&&n.cancelIdleCallback?n.cancelIdleCallback(s):window.clearTimeout(s)}},[l]),r.useEffect(()=>{const t=h.current;if(!t)return;const e=E(l);let o=0,a=0,n=0,s=!1;const c=32,g=d=>{if(s=!1,!e||d.touches.length!==1)return;const u=d.touches[0];u.clientX<c||u.clientX>window.innerWidth-c||d.target?.closest?.(".cs-stage, [data-no-swipe]")||(s=!0,o=u.clientX,a=u.clientY,n=d.timeStamp)},M=d=>{if(!s||!e)return;s=!1;const u=d.changedTouches[0];if(!u)return;const k=u.clientX-o,q=u.clientY-a;d.timeStamp-n>700||Math.abs(k)<64||Math.abs(k)<Math.abs(q)*1.6||y(k<0?e.next.slug:e.prev.slug)},I=()=>{s=!1};return t.addEventListener("touchstart",g,{passive:!0}),t.addEventListener("touchend",M,{passive:!0}),t.addEventListener("touchcancel",I,{passive:!0}),()=>{t.removeEventListener("touchstart",g),t.removeEventListener("touchend",M),t.removeEventListener("touchcancel",I)}},[l,y]);const v=r.useCallback(()=>{if(R.current)return;R.current=!0;const t=b.current,e=h.current;if(C()||!t||!e){w();return}const o=f.timeline({onComplete:w});o.to(e,{y:18,duration:.28,ease:"power2.in"},0),o.to(t,{opacity:0,duration:.3,ease:"power2.in"},.05)},[w]);return r.useEffect(()=>{const t=e=>{if(e.key==="Escape")e.preventDefault(),v();else if(e.key==="Tab"){const o=b.current;if(!o)return;const a=o.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');if(!a.length)return;const n=a[0],s=a[a.length-1],c=document.activeElement;o.contains(c)?e.shiftKey&&c===n?(e.preventDefault(),s.focus()):!e.shiftKey&&c===s&&(e.preventDefault(),n.focus()):(e.preventDefault(),n.focus())}};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[v]),m?i.jsxs("div",{ref:b,className:"cso-root",role:"dialog","aria-modal":"true","aria-label":`${m.name} case study`,style:{"--cs-bg":m.palette.bg,"--cs-accent":m.palette.accent,"--cs-glow":m.palette.glow},children:[i.jsx("div",{ref:h,className:"cso-scroll","data-lenis-prevent":!0,children:i.jsx(D,{slug:l,onNext:y,onClose:v})}),i.jsx("div",{className:"cso-topbar","aria-hidden":"true"}),i.jsxs("div",{className:"cso-nav",children:[i.jsx("button",{type:"button",className:"cso-logo",onClick:v,"aria-label":"Close case study",children:i.jsx("img",{src:"/Wordmark_White.png",alt:"Zegoe"})}),i.jsx("button",{ref:j,type:"button",className:"cso-close",onClick:v,"aria-label":"Close case study",children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),i.jsx("style",{children:`
        .cso-root {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: var(--cs-bg);
          /* The sliding content is allowed past the edges during a switch. */
          overflow: hidden;
          /* The backdrop is a different near-black per project; without this
             it snapped at the swap while the content was still mid-fade. */
          transition: background-color 0.5s ease;
        }
        .cso-scroll {
          position: absolute;
          inset: 0;
          overflow-y: auto;
          overflow-x: hidden;
          /* Same reason as the /work route: the swipe gesture needs the
             horizontal axis, or the browser's back/forward overscroll takes
             it first. */
          overscroll-behavior-x: contain;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .cso-topbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          z-index: 60;
          pointer-events: none;
          background: linear-gradient(90deg, var(--cs-bg) 0%, var(--cs-accent) 45%, var(--cs-accent) 70%, var(--cs-bg) 100%);
        }
        .cso-nav {
          position: absolute;
          top: 5px;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
          height: 4rem;
          background: linear-gradient(180deg, rgba(0,0,0,0.55), transparent);
          pointer-events: none;
        }
        .cso-nav > * { pointer-events: auto; }
        .cso-logo {
          background: none;
          border: 0;
          padding: 0;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .cso-logo img { height: 1.25rem; width: auto; display: block; }
        .cso-logo:hover { opacity: 0.8; }
        .cso-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(0,0,0,0.45);
          color: rgba(255,255,255,0.85);
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.1s ease;
        }
        .cso-close:hover { color: var(--cs-accent); border-color: rgba(255,255,255,0.4); }
        .cso-close:active { transform: scale(0.94); }
        .cso-close:focus-visible {
          outline: 2px solid var(--cs-accent);
          outline-offset: 2px;
        }
      `})]}):null}export{K as default};
