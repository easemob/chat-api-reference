import{M as N}from"./MessageStatus-D4FtlM9p.js";import"./jsx-runtime-DCY474Ph.js";import"./index-f9CH5uyH.js";import"./index-ppL69N4V.js";import"./Icon-BpGZm428.js";import"./reactNode-BFEIMXYA.js";import"./rootContext-D5G6AugW.js";const s="zh",e={en:{style:"css style",prefixCls:"prefixCls",className:"className",status:"status",type:"type"},zh:{style:"样式",prefixCls:"前缀",className:"类名",status:"状态",type:"类型"}},T={title:"Module/MessageStatus",component:N,argTypes:{prefixCls:{control:"text",description:e[s].prefixCls},className:{control:"text",description:e[s].className},style:{control:"object",description:e[s].style},status:{control:"select",options:["received","read","unread","sent","failed","sending","default"],description:e[s].status},type:{control:"select",options:["icon","text"],description:e[s].type}}},t={args:{status:"sending"}},r={args:{status:"sent"}},a={args:{status:"received"}},o={args:{status:"read"}},n={args:{status:"failed"}};var c,i,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    status: 'sending'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: 'sent'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,g,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'received'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,x,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'read'
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,C,M;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    status: 'failed'
  }
}`,...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const k=["sending","sent","received","read","failed"];export{k as __namedExportsOrder,T as default,n as failed,o as read,a as received,t as sending,r as sent};
