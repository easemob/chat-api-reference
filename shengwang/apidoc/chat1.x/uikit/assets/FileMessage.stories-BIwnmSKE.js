import{F as m}from"./AudioMessage-DfcYj-Xq.js";import{I as c}from"./const-D3n5uQwd.js";import"./jsx-runtime-DCY474Ph.js";import"./index-f9CH5uyH.js";import"./index-ppL69N4V.js";import"./MessageStatus-D4FtlM9p.js";import"./Icon-BpGZm428.js";import"./reactNode-BFEIMXYA.js";import"./rootContext-D5G6AugW.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./Tooltip-CmqN9gqD.js";import"./index-BGpIzb10.js";import"./index-DbGGk5Em.js";import"./Modal-DsHXYap_.js";import"./Button-CVEhFYd5.js";import"./Ripple-0sqiOC8t.js";import"./Emoji-CkGDDV0M.js";import"./Checkbox-Dqzf5P6l.js";import"./UserProfile-DB3WxRSb.js";const e="zh",t={en:{fileMessage:"File message object",type:"Type of message",filename:"Name of the file",file_length:"Length of the file",url:"URL of the file",id:"Unique identifier",to:"Recipient ID",chatType:"Type of chat",bySelf:"Sent by self",from:"Sender ID",time:"Timestamp",status:"Status of the message",iconType:"Icon type",prefix:"Prefix",className:"CSS class",style:"CSS style",bubbleClass:"Bubble class",thread:"Thread"},zh:{fileMessage:"文件消息对象",type:"消息类型",filename:"文件名",file_length:"文件长度",url:"文件的URL",id:"唯一标识符",to:"接收者ID",chatType:"聊天类型",bySelf:"是否自己发送",from:"发送者ID",time:"时间戳",status:"消息状态",iconType:"文件图标类型",prefix:"前缀",className:"CSS 类名",style:"CSS 样式",bubbleClass:"气泡样式",thread:"是否是线程"}},O={title:"Module/FileMessage",component:m,argTypes:{fileMessage:{control:"object",description:t[e].fileMessage},iconType:{control:"select",options:Object.keys(c),description:t[e].iconType},prefix:{control:"text",description:t[e].prefix},className:{control:"text",description:t[e].className},style:{control:"object",description:t[e].style},bubbleClass:{control:"text",description:t[e].bubbleClass},thread:{control:"boolean",description:t[e].thread}}},s={args:{fileMessage:{type:"file",filename:"test.txt",file_length:1024,file:{url:"http:example.com",filename:"test.txt",filetype:"txt",data:{}},url:"http:example.com",id:"1234567890",to:"userId",chatType:"singleChat",bySelf:!0,from:"myUserId",time:Date.now(),status:"sent"}}},i={args:{type:"secondly",direction:"ltr",fileMessage:{type:"file",filename:"test.txt",file_length:1024,file:{url:"http:example.com",filename:"test.txt",filetype:"txt",data:{}},url:"http:example.com",id:"1234567890",to:"userId",chatType:"singleChat",bySelf:!1,from:"myUserId",time:Date.now(),status:"sent"}}};var l,n,a;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    fileMessage: {
      type: 'file',
      filename: 'test.txt',
      file_length: 1024,
      file: {
        url: 'http:example.com',
        filename: 'test.txt',
        filetype: 'txt',
        data: {} as File
      },
      url: 'http:example.com',
      id: '1234567890',
      to: 'userId',
      chatType: 'singleChat',
      bySelf: true,
      from: 'myUserId',
      time: Date.now(),
      status: 'sent'
    }
  }
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,r,p;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'secondly',
    direction: 'ltr',
    fileMessage: {
      type: 'file',
      filename: 'test.txt',
      file_length: 1024,
      file: {
        url: 'http:example.com',
        filename: 'test.txt',
        filetype: 'txt',
        data: {} as File
      },
      url: 'http:example.com',
      id: '1234567890',
      to: 'userId',
      chatType: 'singleChat',
      bySelf: false,
      from: 'myUserId',
      time: Date.now(),
      status: 'sent'
    }
  }
}`,...(p=(r=i.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const P=["Primary","Secondly"];export{s as Primary,i as Secondly,P as __namedExportsOrder,O as default};
