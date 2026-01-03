import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{w as re,e as a}from"./index-DPYJpPba.js";import{C as ne}from"./Capsule-vd6y8iEM.js";const ie={title:"Components/Capsule",component:ne,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"color",description:"The color of the capsule top half"},isOpen:{control:"boolean",description:"Whether the capsule is open or closed"}}},n={args:{color:"#ef4444",isOpen:!1}},l={args:{color:"#ef4444",isOpen:!0}},c={args:{color:"#eab308",isOpen:!1}},p={args:{color:"#3b82f6",isOpen:!1}},i={args:{color:"#22c55e",isOpen:!1}},f={args:{color:"#a855f7",isOpen:!1}},u={args:{color:"#ec4899",isOpen:!1}},m={args:{color:"#f97316",isOpen:!1}},d={args:{color:"#ef4444",isOpen:!1},render:()=>C.jsx("div",{className:"flex gap-4 flex-wrap",children:["#ef4444","#eab308","#3b82f6","#22c55e","#a855f7","#ec4899","#f97316"].map(e=>C.jsx(ne,{color:e,isOpen:!1},e))})},y={args:{color:"#ef4444",isOpen:!1},play:async({canvasElement:e})=>{re(e);const s=e.querySelector(".relative.w-20.h-20");await a(s).toBeInTheDocument();const o=e.querySelector('[class*="bg-\\[\\#fff1f1\\]"]');if(o){const r=window.getComputedStyle(o);await a(r.opacity).toBe("0")}}},w={args:{color:"#3b82f6",isOpen:!0},play:async({canvasElement:e})=>{re(e);const s=e.querySelector(".relative.w-20.h-20");await a(s).toBeInTheDocument();const o=e.querySelector('[class*="bg-\\[\\#fff1f1\\]"]');if(o){const r=window.getComputedStyle(o);await a(r.opacity).toBe("1")}}},g={args:{color:"#ef4444",isOpen:!1},play:async({canvasElement:e})=>{const s=e.querySelector(".rounded-t-full");await a(s).toBeInTheDocument(),await a(s).toHaveClass("transition-all"),await a(s).toHaveClass("duration-700");const o=e.querySelector(".rounded-b-full");await a(o).toBeInTheDocument(),await a(o).toHaveClass("transition-all"),await a(o).toHaveClass("duration-700")}},S={args:{color:"#a855f7",isOpen:!0},play:async({canvasElement:e})=>{await new Promise(t=>setTimeout(t,800));const s=e.querySelector(".rounded-t-full");if(s){const t=window.getComputedStyle(s);await a(t.transform).not.toBe("none")}const o=e.querySelector(".rounded-b-full");if(o){const t=window.getComputedStyle(o);await a(t.transform).not.toBe("none")}const r=e.querySelector('[class*="bg-\\[\\#fff1f1\\]"]');if(r){const t=window.getComputedStyle(r);await a(t.opacity).toBe("1")}}};var h,O,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "#ef4444",
    isOpen: false
  }
}`,...(b=(O=n.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var v,H,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: "#ef4444",
    isOpen: true
  }
}`,...(x=(H=l.parameters)==null?void 0:H.docs)==null?void 0:x.source}}};var T,B,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: "#eab308",
    isOpen: false
  }
}`,...(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var I,E,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "#3b82f6",
    isOpen: false
  }
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var D,P,j;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: "#22c55e",
    isOpen: false
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var A,k,L;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: "#a855f7",
    isOpen: false
  }
}`,...(L=(k=f.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var M,G,N;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: "#ec4899",
    isOpen: false
  }
}`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var W,Y,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    color: "#f97316",
    isOpen: false
  }
}`,...(_=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var R,z,F;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    color: "#ef4444",
    isOpen: false
  },
  render: () => <div className="flex gap-4 flex-wrap">
      {["#ef4444", "#eab308", "#3b82f6", "#22c55e", "#a855f7", "#ec4899", "#f97316"].map(color => <Capsule key={color} color={color} isOpen={false} />)}
    </div>
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    color: "#ef4444",
    isOpen: false
  },
  play: async ({
    canvasElement
  }) => {
    // Verify the top half has transition classes
    const topHalf = canvasElement.querySelector(".rounded-t-full");
    await expect(topHalf).toBeInTheDocument();
    await expect(topHalf).toHaveClass("transition-all");
    await expect(topHalf).toHaveClass("duration-700");

    // Verify the bottom half has transition classes
    const bottomHalf = canvasElement.querySelector(".rounded-b-full");
    await expect(bottomHalf).toBeInTheDocument();
    await expect(bottomHalf).toHaveClass("transition-all");
    await expect(bottomHalf).toHaveClass("duration-700");
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,se,te;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    color: "#a855f7",
    isOpen: true
  },
  play: async ({
    canvasElement
  }) => {
    // Wait for animation to settle
    await new Promise(resolve => setTimeout(resolve, 800));

    // Verify top half has transformed (opacity should be 0 after animation)
    const topHalf = canvasElement.querySelector(".rounded-t-full") as HTMLElement;
    if (topHalf) {
      const style = window.getComputedStyle(topHalf);
      // The transform should include translate and rotate
      await expect(style.transform).not.toBe("none");
    }

    // Verify bottom half has transformed
    const bottomHalf = canvasElement.querySelector(".rounded-b-full") as HTMLElement;
    if (bottomHalf) {
      const style = window.getComputedStyle(bottomHalf);
      await expect(style.transform).not.toBe("none");
    }

    // Verify paper scroll is visible
    const paperScroll = canvasElement.querySelector('[class*="bg-\\\\[\\\\#fff1f1\\\\]"]') as HTMLElement;
    if (paperScroll) {
      const style = window.getComputedStyle(paperScroll);
      await expect(style.opacity).toBe("1");
    }
  }
}`,...(te=(se=S.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};const fe=["Closed","Open","YellowCapsule","BlueCapsule","GreenCapsule","PurpleCapsule","PinkCapsule","OrangeCapsule","AllColors","InteractionTestClosed","InteractionTestOpen","InteractionTestAnimationClasses","InteractionTestOpenTransforms"];export{d as AllColors,p as BlueCapsule,n as Closed,i as GreenCapsule,g as InteractionTestAnimationClasses,y as InteractionTestClosed,w as InteractionTestOpen,S as InteractionTestOpenTransforms,l as Open,m as OrangeCapsule,u as PinkCapsule,f as PurpleCapsule,c as YellowCapsule,fe as __namedExportsOrder,ie as default};
//# sourceMappingURL=Capsule.stories-CNa2Jm_X.js.map
