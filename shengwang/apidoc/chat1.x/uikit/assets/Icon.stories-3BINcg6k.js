import{j as e}from"./jsx-runtime-DCY474Ph.js";import{I as s}from"./Icon-BpGZm428.js";import{I as i}from"./const-D3n5uQwd.js";import"./index-f9CH5uyH.js";import"./index-ppL69N4V.js";import"./reactNode-BFEIMXYA.js";import"./rootContext-D5G6AugW.js";const t="zh",o={en:{type:"The type of the icon",width:"The width of the icon",height:"The height of the icon",color:"The color of the icon",className:"The className of the icon",onClick:"The click event of the icon",style:"The style of the icon"},zh:{type:"图标的类型",width:"图标的宽度",height:"图标的高度",color:"图标的颜色",className:"图标的类名",onClick:"图标的点击事件",style:"图标的样式"}},x={title:"pure component/Icon",component:s,argTypes:{type:{control:"select",options:Object.values(i),description:o[t].type},width:{control:"number",description:o[t].width},height:{control:"number",description:o[t].height},color:{control:"color",description:o[t].color},className:{description:o[t].className},onClick:{description:o[t].onClick},style:{description:o[t].style}}},n=()=>[...Object.values(i).map(r=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:r}),e.jsx(s,{type:r,width:50,height:50})]}))],c=()=>[...Object.values(i).map(r=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:r}),e.jsx(s,{color:"green",type:r,width:50,height:50})]}))];var h,a,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return [...Object.values(ICON_TYPES).map(item => {
    return <>
          <h3>{item}</h3>
          <Icon type={item} width={50} height={50} />
        </>;
  })];
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,m,d;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return [...Object.values(ICON_TYPES).map(item => {
    return <>
          <h3>{item}</h3>
          <Icon color="green" type={item} width={50} height={50} />
        </>;
  })];
}`,...(d=(m=c.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const w=["IconList","IconListGreen"];export{n as IconList,c as IconListGreen,w as __namedExportsOrder,x as default};
