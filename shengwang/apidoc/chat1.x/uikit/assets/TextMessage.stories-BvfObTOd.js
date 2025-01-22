import{j as a}from"./jsx-runtime-DCY474Ph.js";import{T as m}from"./AudioMessage-DfcYj-Xq.js";import{P as h}from"./Provider-BZeeAFlE.js";import"./index-f9CH5uyH.js";import"./index-ppL69N4V.js";import"./MessageStatus-D4FtlM9p.js";import"./Icon-BpGZm428.js";import"./reactNode-BFEIMXYA.js";import"./rootContext-D5G6AugW.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./Tooltip-CmqN9gqD.js";import"./index-BGpIzb10.js";import"./index-DbGGk5Em.js";import"./Modal-DsHXYap_.js";import"./Button-CVEhFYd5.js";import"./Ripple-0sqiOC8t.js";import"./Emoji-CkGDDV0M.js";import"./Checkbox-Dqzf5P6l.js";import"./UserProfile-DB3WxRSb.js";import"./useAddress-CEkTW2Hm.js";const e="zh",t={en:{textMessage:"textMessage",type:"type",prefix:"prefix",className:"className",bubbleClass:"bubbleClass",children:"children",style:"style",onCreateThread:"Callback when creating a thread",onTranslateTextMessage:"Callback when translating text message",targetLanguage:"The target language to be translated into",showTranslation:"Whether to show the translated message",onlyContent:"Whether to only display the content",onOpenThreadPanel:"Callback when opening the thread panel",showEditedTag:"Whether to show the edited tag"},zh:{textMessage:"文本消息",type:"类型",prefix:"前缀",className:"类名",bubbleClass:"气泡类名",children:"子元素",style:"样式",onCreateThread:"创建线程",onTranslateTextMessage:"翻译文本消息",targetLanguage:"目标语言",showTranslation:"是否展示翻译后的消息",onlyContent:"是否只展示内容",onOpenThreadPanel:"打开线程面板",showEditedTag:"是否展示编辑标签"}},L={title:"Module/TextMessage",component:m,argTypes:{prefix:{description:t[e].prefix,control:{type:"text"}},className:{description:t[e].className,control:{type:"text"}},bubbleClass:{description:t[e].bubbleClass,control:{type:"text"}},children:{description:t[e].children},style:{description:t[e].style,control:{type:"object"}},textMessage:{description:t[e].textMessage,control:{type:"object"},table:{type:{summary:"TextMessageType"},defaultValue:{summary:"TextMessageType"}}},showTranslation:{description:t[e].showTranslation,control:{type:"boolean"}},targetLanguage:{description:t[e].targetLanguage,control:{type:"text"}},type:{description:t[e].type,control:{type:"select",options:["primary","secondly"]}},onCreateThread:{description:t[e].onCreateThread},onlyContent:{description:t[e].onlyContent,control:{type:"boolean"}},onOpenThreadPanel:{description:t[e].onOpenThreadPanel},showEditedTag:{description:t[e].showEditedTag,control:{type:"boolean"}}}},c=g=>a.jsx(h,{initConfig:{appId:"abc"},children:a.jsx(m,{...g})}),n={render:c,args:{textMessage:{type:"txt",msg:"hello",id:"1234567890",to:"userId",chatType:"singleChat",bySelf:!0,from:"myUserId",time:Date.now(),status:"sent",modifiedInfo:{operatorId:"",operationCount:0,operationTime:0}}}},o={render:c,args:{textMessage:{id:"1189528432543795984",type:"txt",chatType:"singleChat",msg:"asd",to:"zd4",from:"zd2",ext:{em_at_list:[],msgQuote:{msgID:"1187658028808145668",msgPreview:"Start a video call",msgSender:"zd4",msgType:"txt"}},time:1694523470608,onlineState:3,status:"sent",modifiedInfo:{operatorId:"",operationCount:0,operationTime:0},bySelf:!1}}};var s,r,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    textMessage: {
      type: 'txt',
      msg: 'hello',
      id: '1234567890',
      to: 'userId',
      chatType: 'singleChat',
      bySelf: true,
      from: 'myUserId',
      time: Date.now(),
      status: 'sent',
      modifiedInfo: {
        operatorId: '',
        operationCount: 0,
        operationTime: 0
      }
    }
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    textMessage: {
      id: '1189528432543795984',
      type: 'txt',
      chatType: 'singleChat',
      msg: 'asd',
      to: 'zd4',
      from: 'zd2',
      ext: {
        em_at_list: [],
        msgQuote: {
          msgID: '1187658028808145668',
          msgPreview: 'Start a video call',
          msgSender: 'zd4',
          msgType: 'txt'
        }
      },
      time: 1694523470608,
      onlineState: 3,
      status: 'sent',
      modifiedInfo: {
        operatorId: '',
        operationCount: 0,
        operationTime: 0
      },
      bySelf: false
    }
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["Primary","TextMessageWithReply"];export{n as Primary,o as TextMessageWithReply,k as __namedExportsOrder,L as default};
