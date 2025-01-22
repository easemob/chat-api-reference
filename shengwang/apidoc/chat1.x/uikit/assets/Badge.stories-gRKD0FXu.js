import{j as n}from"./jsx-runtime-DCY474Ph.js";import{A as p}from"./index-DbGGk5Em.js";import{B as l}from"./Badge-WLBlY_Ny.js";import"./index-f9CH5uyH.js";import"./index-ppL69N4V.js";import"./rootContext-D5G6AugW.js";import"./Tooltip-CmqN9gqD.js";import"./index-BGpIzb10.js";import"./reactNode-BFEIMXYA.js";const e="zh",x={title:"pure component/Badge",component:l,argTypes:{}},a=c=>n.jsx(l,{...c,children:n.jsx(p,{children:"User"})}),t={en:{count:"Number to show in badge",overflowCount:"Max count to show",dot:"Whether to show red dot without number",showZero:"Whether to show badge when count is zero",size:"Size of the badge",offset:"Offset of the badge, [x, y]",title:"Title of the badge",color:"Color of the badge",children:"The content of the badge",className:"The className of the badge"},zh:{count:"显示在徽标中的数字",overflowCount:"最大显示数",dot:"是否只显示红点",showZero:"当数值为0时，是否展示 Badge",size:"徽标的大小",offset:"徽标的偏移, [x, y]",title:"徽标的标题",color:"徽标的颜色",children:"徽标的内容",className:"徽标的类名"}},o={render:a,argTypes:{count:{control:{type:"number"},description:t[e].count,type:"number"},overflowCount:{control:{type:"number"},description:t[e].overflowCount,type:"number"},dot:{control:{type:"boolean"},description:t[e].dot,type:"boolean"},showZero:{control:{type:"boolean"},description:t[e].showZero,type:"boolean"},size:{control:{type:"select",options:["default","small"]},description:t[e].size,type:"string"},color:{control:{type:"color"},description:t[e].color,type:"string"},offset:{control:{type:"array"},description:t[e].offset,type:"array"},title:{control:{type:"text"},description:t[e].title,type:"string"},className:{control:{type:"text"},description:t[e].className,type:"string"},children:{control:{type:"text"},description:t[e].children,type:"string"}},args:{count:10,overflowCount:99,dot:!1,showZero:!1,style:{},className:"",size:"default",offset:[0,0],title:"title",children:"",color:""}};var r,s,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  argTypes: {
    count: {
      control: {
        type: 'number'
      },
      description: description[lang].count,
      type: 'number'
    },
    overflowCount: {
      control: {
        type: 'number'
      },
      description: description[lang].overflowCount,
      type: 'number'
    },
    dot: {
      control: {
        type: 'boolean'
      },
      description: description[lang].dot,
      type: 'boolean'
    },
    showZero: {
      control: {
        type: 'boolean'
      },
      description: description[lang].showZero,
      type: 'boolean'
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'small']
      },
      description: description[lang].size,
      type: 'string'
    },
    color: {
      control: {
        type: 'color'
      },
      description: description[lang].color,
      type: 'string'
    },
    offset: {
      control: {
        type: 'array'
      },
      description: description[lang].offset,
      type: 'array'
    },
    title: {
      control: {
        type: 'text'
      },
      description: description[lang].title,
      type: 'string'
    },
    className: {
      control: {
        type: 'text'
      },
      description: description[lang].className,
      type: 'string'
    },
    children: {
      control: {
        type: 'text'
      },
      description: description[lang].children,
      type: 'string'
    }
  },
  args: {
    count: 10,
    overflowCount: 99,
    dot: false,
    showZero: false,
    style: {},
    className: '',
    // text: 'hello',
    size: 'default',
    offset: [0, 0],
    title: 'title',
    children: '',
    color: ''
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,x as default};
