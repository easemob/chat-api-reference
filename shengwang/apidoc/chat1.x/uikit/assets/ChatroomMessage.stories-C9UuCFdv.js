import{j as r}from"./jsx-runtime-DCY474Ph.js";import{C as g}from"./ChatroomMessage-BRkPP9M3.js";import{P as f}from"./Provider-BZeeAFlE.js";import"./index-f9CH5uyH.js";import"./index-ppL69N4V.js";import"./index-DbGGk5Em.js";import"./rootContext-D5G6AugW.js";import"./Tooltip-CmqN9gqD.js";import"./index-BGpIzb10.js";import"./reactNode-BFEIMXYA.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./Icon-BpGZm428.js";import"./AudioMessage-DfcYj-Xq.js";import"./MessageStatus-D4FtlM9p.js";import"./Modal-DsHXYap_.js";import"./Button-CVEhFYd5.js";import"./Ripple-0sqiOC8t.js";import"./Emoji-CkGDDV0M.js";import"./Checkbox-Dqzf5P6l.js";import"./UserProfile-DB3WxRSb.js";import"./useAddress-CEkTW2Hm.js";const t="zh",e={en:{chatroomMessage:"Chatroom message component",prefix:"Prefix",className:"Class name",style:"Style",message:"The message object",targetLanguage:"The target language of translation",onReport:"The callback function for reporting, the parameter is the message object, you need to implement the pop-up report dialog by yourself"},zh:{chatroomMessage:"聊天室消息组件",prefix:"组件类名前缀",className:"组件类名",style:"组件样式",message:"消息对象",targetLanguage:"翻译的目标语言",onReport:"举报的回调函数, 参数为消息对象, 需要自己实现弹出举报的弹框"}},A={title:"Module/ChatroomMessage",component:g,argTypes:{prefix:{control:"text",type:"string",description:e[t].prefix},className:{control:"text",type:"string",description:e[t].className},style:{control:"object",description:e[t].style},message:{control:"object",description:e[t].message},targetLanguage:{control:"text",description:e[t].targetLanguage},onReport:{action:"report",description:e[t].onReport}}},l=u=>r.jsx(f,{initConfig:{appId:"abc"},children:r.jsx(g,{...u})}),o={render:l,args:{message:{type:"txt",msg:"hello",id:"1234567890",to:"chatroomId",chatType:"chatRoom",from:"Leo",time:Date.now()}}},a={render:l,args:{message:{id:"1231026004235920980",type:"custom",chatType:"chatRoom",from:"pev4pyzbwnutbp7a",to:"230164666580997",customEvent:"CHATROOMUIKITGIFT",params:{},customExts:{chatroom_uikit_gift:'{"giftId":"2665752a-e273-427c-ac5a-4b2a9c82b255","giftIcon":"https://fullapp.oss-cn-beijing.aliyuncs.com/uikit/pictures/gift/AUIKitGift1.png","giftName":"Heart","giftPrice":"1"}'},ext:{chatroom_uikit_userInfo:{userId:"pev4pyzbwnutbp7a",nickname:"Leo",avatarURL:"https://livestream-hsb.oss-cn-beijing.aliyuncs.com/story/avatar16%403x.png",gender:1}},time:1704185376943,onlineState:1,priority:"normal",broadcast:!1}}};var s,i,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    message: {
      type: 'txt',
      msg: 'hello',
      id: '1234567890',
      to: 'chatroomId',
      chatType: 'chatRoom',
      // bySelf: true,
      from: 'Leo',
      time: Date.now()
      // status: 'sent',
    }
  }
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    message: {
      id: '1231026004235920980',
      type: 'custom',
      chatType: 'chatRoom',
      from: 'pev4pyzbwnutbp7a',
      to: '230164666580997',
      customEvent: 'CHATROOMUIKITGIFT',
      params: {},
      customExts: {
        chatroom_uikit_gift: '{"giftId":"2665752a-e273-427c-ac5a-4b2a9c82b255","giftIcon":"https://fullapp.oss-cn-beijing.aliyuncs.com/uikit/pictures/gift/AUIKitGift1.png","giftName":"Heart","giftPrice":"1"}'
      },
      ext: {
        chatroom_uikit_userInfo: {
          userId: 'pev4pyzbwnutbp7a',
          nickname: 'Leo',
          avatarURL: 'https://livestream-hsb.oss-cn-beijing.aliyuncs.com/story/avatar16%403x.png',
          gender: 1
        }
      },
      time: 1704185376943,
      onlineState: 1,
      priority: 'normal',
      broadcast: false
      // bySelf: false,
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const G=["textMessage","giftMessage"];export{G as __namedExportsOrder,A as default,a as giftMessage,o as textMessage};
