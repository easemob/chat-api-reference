import{j as o}from"./jsx-runtime-DCY474Ph.js";import{U as l}from"./AudioMessage-DfcYj-Xq.js";import{P as y}from"./Provider-BZeeAFlE.js";import"./index-f9CH5uyH.js";import"./index-ppL69N4V.js";import"./MessageStatus-D4FtlM9p.js";import"./Icon-BpGZm428.js";import"./reactNode-BFEIMXYA.js";import"./rootContext-D5G6AugW.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./Tooltip-CmqN9gqD.js";import"./index-BGpIzb10.js";import"./index-DbGGk5Em.js";import"./Modal-DsHXYap_.js";import"./Button-CVEhFYd5.js";import"./Ripple-0sqiOC8t.js";import"./Emoji-CkGDDV0M.js";import"./Checkbox-Dqzf5P6l.js";import"./UserProfile-DB3WxRSb.js";import"./useAddress-CEkTW2Hm.js";const e="zh",s={en:{customMessage:"Custom message",prefix:"css class name prefix",className:"css class name",style:"css style",onClick:"Callback when clicking",bubbleClass:"bubble class name",onUserIdCopied:"Callback when copying user ID",type:"type"},zh:{customMessage:"自定义消息",prefix:"类名前缀",className:"类名",style:"样式",onClick:"点击回调",bubbleClass:"气泡类名",onUserIdCopied:"用户ID复制回调",type:"类型"}},O={title:"Module/UserCardMessage",component:l,argTypes:{customMessage:{description:s[e].customMessage,control:{type:"object"},table:{type:{summary:"CustomMessageType"}}},prefix:{description:s[e].prefix,control:{type:"text"}},style:{description:s[e].style,control:{type:"object"}},className:{description:s[e].className,control:{type:"text"}},type:{description:s[e].type,control:{type:"select",options:["primary","secondly"]}},onClick:{description:s[e].onClick},bubbleClass:{description:s[e].bubbleClass,control:{type:"text"}},onUserIdCopied:{description:s[e].onUserIdCopied}}},d=u=>o.jsx(y,{initConfig:{appId:"abc"},children:o.jsx(l,{...u})}),t={render:d,args:{customMessage:{type:"custom",id:"1234567890",to:"userId",chatType:"singleChat",bySelf:!0,from:"myUserId",time:Date.now(),status:"sent",customEvent:"userCard",customExts:{uid:"zd2",nickname:"Tom",avatar:"https://accktvpic.oss-cn-beijing.aliyuncs.com/pic/sample_avatar/sample_avatar_1.png"}}}},a={render:d,args:{type:"secondly",direction:"ltr",customMessage:{type:"custom",id:"1234567890",to:"userId",chatType:"singleChat",bySelf:!1,from:"myUserId",time:Date.now(),status:"sent",customEvent:"userCard",customExts:{uid:"zd2",nickname:"Tom",avatar:"https://accktvpic.oss-cn-beijing.aliyuncs.com/pic/sample_avatar/sample_avatar_1.png"}}}};var r,n,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    customMessage: {
      type: 'custom',
      id: '1234567890',
      to: 'userId',
      chatType: 'singleChat',
      bySelf: true,
      from: 'myUserId',
      time: Date.now(),
      status: 'sent',
      customEvent: 'userCard',
      customExts: {
        uid: 'zd2',
        nickname: 'Tom',
        avatar: 'https://accktvpic.oss-cn-beijing.aliyuncs.com/pic/sample_avatar/sample_avatar_1.png'
      }
    }
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'secondly',
    direction: 'ltr',
    customMessage: {
      type: 'custom',
      id: '1234567890',
      to: 'userId',
      chatType: 'singleChat',
      bySelf: false,
      from: 'myUserId',
      time: Date.now(),
      status: 'sent',
      customEvent: 'userCard',
      customExts: {
        uid: 'zd2',
        nickname: 'Tom',
        avatar: 'https://accktvpic.oss-cn-beijing.aliyuncs.com/pic/sample_avatar/sample_avatar_1.png'
      }
    }
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Primary","Secondly"];export{t as Primary,a as Secondly,R as __namedExportsOrder,O as default};
