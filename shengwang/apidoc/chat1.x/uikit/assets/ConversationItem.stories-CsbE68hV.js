import{C as n}from"./ConversationList-CFDvIqSG.js";import"./jsx-runtime-DCY474Ph.js";import"./index-f9CH5uyH.js";import"./index-ppL69N4V.js";import"./Icon-BpGZm428.js";import"./reactNode-BFEIMXYA.js";import"./rootContext-D5G6AugW.js";import"./index-DbGGk5Em.js";import"./Tooltip-CmqN9gqD.js";import"./index-BGpIzb10.js";import"./Badge-WLBlY_Ny.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./AudioMessage-DfcYj-Xq.js";import"./MessageStatus-D4FtlM9p.js";import"./Modal-DsHXYap_.js";import"./Button-CVEhFYd5.js";import"./Ripple-0sqiOC8t.js";import"./Emoji-CkGDDV0M.js";import"./Checkbox-Dqzf5P6l.js";import"./UserProfile-DB3WxRSb.js";import"./Search-D55WYLx3.js";import"./Header-cCQd5MuQ.js";import"./useAddress-CEkTW2Hm.js";import"./ScrollList-1c9r2__L.js";const e="zh",t={en:{conversationItem:"Conversation item component",prefix:"Prefix",style:"Style",className:"Class name",nickname:"Name displayed in the conversation (user nickname or group name)",avatarShape:"Avatar shape",avatarSize:"Avatar size",avatar:"Avatar",onClick:"Click callback",badgeColor:"Badge color",isActive:"Whether is active",data:"Conversation data",renderMessageContent:"Render message content",ripple:"Whether to enable ripple effect",moreAction:"More action",moreAction_visible:"Whether to show the more action button",moreAction_icon:"More action button icon",moreAction_actions:"Action list",formatDateTime:"Format date time, return formatted time string"},zh:{conversationItem:"会话项组件",prefix:"组件类名前缀",style:"组件样式",className:"组件类名",nickname:"会话中展示的名称（用户昵称或者群组名称）",avatarShape:"头像形状",avatarSize:"头像大小",avatar:"头像",onClick:"点击回调",badgeColor:"未读数气泡颜色",isActive:"是否被选中",data:"会话数据",renderMessageContent:"渲染会话中展示的消息内容",ripple:"是否开启点击效果",moreAction:"更多操作",moreAction_visible:"是否显示更多操作按钮",moreAction_icon:"更多操作按钮图标",moreAction_actions:"操作列表",formatDateTime:"格式化时间，返回格式化后的时间字符串"}},j={title:"Module/ConversationItem",component:n,argTypes:{className:{control:"text",type:"string",description:t[e].className},prefix:{control:"text",type:"string",description:t[e].prefix},style:{control:"object",description:t[e].style},nickname:{control:"text",description:t[e].nickname},avatarShape:{control:{type:"select",options:["circle","square"]},description:t[e].avatarShape},avatarSize:{control:"number",description:t[e].avatarSize},avatar:{control:"object",description:t[e].avatar},onClick:{action:"click",description:t[e].onClick},badgeColor:{control:"color",description:t[e].badgeColor},isActive:{control:"boolean",description:t[e].isActive,data:{control:"object",description:t[e].data}},renderMessageContent:{description:t[e].renderMessageContent},ripple:{description:t[e].ripple},moreAction:{control:"object",description:t[e].moreAction,table:{type:{summary:"object",detail:`{
  visible?: boolean; // ${t[e].moreAction_visible}
  icon?: ReactNode; // ${t[e].moreAction_icon}
  actions: // ${t[e].moreAction_actions}
  Array<{
    content: ReactNode; 
    onClick?: (cvs: ConversationData[0]) => void | Promise<boolean>; // 点击操作的回调
  }>;
}`}}},formatDateTime:{description:t[e].formatDateTime}}},o={args:{data:{chatType:"singleChat",conversationId:"user2",name:"Henry",unreadCount:3,lastMessage:{id:"1",to:"user2",type:"txt",msg:"hello",chatType:"singleChat",from:"user1",time:Date.now()}}}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    data: {
      chatType: 'singleChat',
      conversationId: 'user2',
      name: 'Henry',
      unreadCount: 3,
      lastMessage: {
        id: '1',
        to: 'user2',
        type: 'txt',
        msg: 'hello',
        chatType: 'singleChat',
        from: 'user1',
        time: Date.now()
      }
    }
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,j as default};
