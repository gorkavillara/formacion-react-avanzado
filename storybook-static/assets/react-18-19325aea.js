import{R as c,r as n}from"./index-76fb7be0.js";import{r as m}from"./index-01dccfe7.js";var a={},s=m;a.createRoot=s.createRoot,a.hydrateRoot=s.hydrateRoot;var o=new Map,R=({callback:e,children:t})=>{let r=n.useRef();return n.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},p=async(e,t)=>{let r=await d(t);return new Promise(u=>{r.render(c.createElement(R,{callback:()=>u(null)},e))})},E=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},d=async e=>{let t=o.get(e);return t||(t=a.createRoot(e),o.set(e,t)),t};export{p as r,E as u};
//# sourceMappingURL=react-18-19325aea.js.map
