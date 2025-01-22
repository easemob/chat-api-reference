import{j as o}from"./jsx-runtime-DCY474Ph.js";import{P as y}from"./Provider-BZeeAFlE.js";import{A as m}from"./AudioMessage-DfcYj-Xq.js";import"./index-f9CH5uyH.js";import"./rootContext-D5G6AugW.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./Tooltip-CmqN9gqD.js";import"./index-ppL69N4V.js";import"./index-BGpIzb10.js";import"./reactNode-BFEIMXYA.js";import"./index-DbGGk5Em.js";import"./Icon-BpGZm428.js";import"./useAddress-CEkTW2Hm.js";import"./MessageStatus-D4FtlM9p.js";import"./Modal-DsHXYap_.js";import"./Button-CVEhFYd5.js";import"./Ripple-0sqiOC8t.js";import"./Emoji-CkGDDV0M.js";import"./Checkbox-Dqzf5P6l.js";import"./UserProfile-DB3WxRSb.js";const e="zh",t={en:{audioMessage:"Audio message received from SDK",prefix:"Prefix",style:"Style",className:"Class name",bubbleClass:"Bubble class name",type:"Bubble type",onlyContent:"Only show content, not bubble"},zh:{audioMessage:"从SDK收到的语音消息",prefix:"组件类名前缀",style:"组件样式",className:"组件类名",bubbleClass:"气泡类名",type:"气泡类型",onlyContent:"只显示内容, 不显示气泡"}},B={title:"Module/AudioMessage",component:m,argTypes:{audioMessage:{control:{type:"object"},description:t[e].audioMessage},prefix:{control:{type:"text"},description:t[e].prefix},style:{control:{type:"object"},description:t[e].style},className:{control:{type:"text"},description:t[e].className},bubbleClass:{control:{type:"text"},description:t[e].bubbleClass},type:{control:"select",options:["primary","secondly"],description:t[e].type},onlyContent:{control:{type:"boolean"},description:t[e].onlyContent}}},u=c=>o.jsx(y,{initConfig:{appId:"abc"},children:o.jsx(m,{...c})}),n={render:u,args:{type:"primary",audioMessage:{type:"audio",filename:"audio.wav",length:3,file_length:1024,chatType:"singleChat",time:Date.now(),status:"read",bySelf:!0,file:{url:"hppt://example",filename:"string",filetype:"audio",data:{},length:3,duration:3},id:"12345678901",to:"userId",from:"myId"}}},a={render:u,args:{type:"secondly",direction:"ltr",audioMessage:{type:"audio",filename:"audio.wav",length:3,file_length:1024,chatType:"singleChat",time:Date.now(),status:"read",bySelf:!1,file:{url:"hppt://example",filename:"string",filetype:"audio",data:{},length:3,duration:3},id:"12345678901",to:"userId",from:"myId"}}};var i,r,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'primary',
    audioMessage: {
      type: 'audio',
      filename: 'audio.wav',
      length: 3,
      file_length: 1024,
      chatType: 'singleChat',
      time: Date.now(),
      status: 'read',
      bySelf: true,
      file: {
        url: 'hppt://example',
        filename: 'string',
        filetype: 'audio',
        data: {} as unknown as File,
        length: 3,
        duration: 3
      },
      id: '12345678901',
      to: 'userId',
      from: 'myId'
    }
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'secondly',
    direction: 'ltr',
    audioMessage: {
      type: 'audio',
      filename: 'audio.wav',
      length: 3,
      file_length: 1024,
      chatType: 'singleChat',
      time: Date.now(),
      status: 'read',
      bySelf: false,
      file: {
        url: 'hppt://example',
        filename: 'string',
        filetype: 'audio',
        data: {} as unknown as File,
        length: 3,
        duration: 3
      },
      id: '12345678901',
      to: 'userId',
      from: 'myId'
    }
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const E=["Primary","Secondly"];export{n as Primary,a as Secondly,E as __namedExportsOrder,B as default};
