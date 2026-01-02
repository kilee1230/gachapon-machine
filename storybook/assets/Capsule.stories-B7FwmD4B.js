import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{w as U,e as m}from"./index-DPYJpPba.js";import{C as X}from"./Capsule-IBv8kpkf.js";const se={title:"Components/Capsule",component:X,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"color",description:"The color of the capsule top half"},isOpen:{control:"boolean",description:"Whether the capsule is open or closed"}}},r={args:{color:"#ef4444",isOpen:!1}},a={args:{color:"#ef4444",isOpen:!0}},o={args:{color:"#eab308",isOpen:!1}},c={args:{color:"#3b82f6",isOpen:!1}},t={args:{color:"#22c55e",isOpen:!1}},n={args:{color:"#a855f7",isOpen:!1}},l={args:{color:"#ec4899",isOpen:!1}},p={args:{color:"#f97316",isOpen:!1}},i={render:()=>y.jsx("div",{className:"flex gap-4 flex-wrap",children:["#ef4444","#eab308","#3b82f6","#22c55e","#a855f7","#ec4899","#f97316"].map(e=>y.jsx(X,{color:e,isOpen:!1},e))})},u={args:{color:"#ef4444",isOpen:!1},play:async({canvasElement:e})=>{U(e);const d=e.querySelector(".relative.w-20.h-20");await m(d).toBeInTheDocument();const s=e.querySelector('[class*="bg-\\[\\#fff1f1\\]"]');if(s){const g=window.getComputedStyle(s);await m(g.opacity).toBe("0")}}},f={args:{color:"#3b82f6",isOpen:!0},play:async({canvasElement:e})=>{U(e);const d=e.querySelector(".relative.w-20.h-20");await m(d).toBeInTheDocument();const s=e.querySelector('[class*="bg-\\[\\#fff1f1\\]"]');if(s){const g=window.getComputedStyle(s);await m(g.opacity).toBe("1")}}};var C,S,w;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    color: "#ef4444",
    isOpen: false
  }
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var O,h,b;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    color: "#ef4444",
    isOpen: true
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,v,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: "#eab308",
    isOpen: false
  }
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var T,q,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: "#3b82f6",
    isOpen: false
  }
}`,...(I=(q=c.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var E,j,D;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    color: "#22c55e",
    isOpen: false
  }
}`,...(D=(j=t.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var P,V,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: "#a855f7",
    isOpen: false
  }
}`,...(k=(V=n.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var A,G,N;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: "#ec4899",
    isOpen: false
  }
}`,...(N=(G=l.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Y,_,R;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    color: "#f97316",
    isOpen: false
  }
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var W,z,F;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      {["#ef4444", "#eab308", "#3b82f6", "#22c55e", "#a855f7", "#ec4899", "#f97316"].map(color => <Capsule key={color} color={color} isOpen={false} />)}
    </div>
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: "#ef4444",
    isOpen: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify the capsule container exists
    const capsuleContainer = canvasElement.querySelector(".relative.w-20.h-20");
    await expect(capsuleContainer).toBeInTheDocument();

    // Verify there's no open state (paper scroll should not be visible with opacity 1)
    const paperScroll = canvasElement.querySelector('[class*="bg-\\\\[\\\\#fff1f1\\\\]"]');
    if (paperScroll) {
      const style = window.getComputedStyle(paperScroll);
      await expect(style.opacity).toBe("0");
    }
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,Q;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    color: "#3b82f6",
    isOpen: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify the capsule container exists
    const capsuleContainer = canvasElement.querySelector(".relative.w-20.h-20");
    await expect(capsuleContainer).toBeInTheDocument();

    // Verify paper scroll is visible when open
    const paperScroll = canvasElement.querySelector('[class*="bg-\\\\[\\\\#fff1f1\\\\]"]');
    if (paperScroll) {
      const style = window.getComputedStyle(paperScroll);
      await expect(style.opacity).toBe("1");
    }
  }
}`,...(Q=(M=f.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const re=["Closed","Open","YellowCapsule","BlueCapsule","GreenCapsule","PurpleCapsule","PinkCapsule","OrangeCapsule","AllColors","InteractionTestClosed","InteractionTestOpen"];export{i as AllColors,c as BlueCapsule,r as Closed,t as GreenCapsule,u as InteractionTestClosed,f as InteractionTestOpen,a as Open,p as OrangeCapsule,l as PinkCapsule,n as PurpleCapsule,o as YellowCapsule,re as __namedExportsOrder,se as default};
//# sourceMappingURL=Capsule.stories-B7FwmD4B.js.map
