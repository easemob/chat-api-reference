import{j as o}from"./jsx-runtime-DCY474Ph.js";import{P as c}from"./Provider-BZeeAFlE.js";import"./index-f9CH5uyH.js";import"./rootContext-D5G6AugW.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./Tooltip-CmqN9gqD.js";import"./index-ppL69N4V.js";import"./index-BGpIzb10.js";import"./reactNode-BFEIMXYA.js";import"./index-DbGGk5Em.js";import"./Icon-BpGZm428.js";import"./useAddress-CEkTW2Hm.js";const e="zh",n={en:{currentCvs:"Current conversation",conversationList:"List of conversations",searchList:"Search results for conversations",hasConversationNext:"Indicates if there are more conversations to load",byId:"Conversations indexed by ID",setCurrentCvs:"Set the current conversation",setConversation:"Set the list of conversations",addConversation:"Add a new conversation",deleteConversation:"Delete a conversation",modifyConversation:"Modify an existing conversation",pinConversation:"Pin a conversation",setSilentModeForConversation:"Set silent mode for a conversation",clearRemindTypeForConversation:"Clear remind type for a conversation",getSilentModeForConversations:"Get silent mode for conversations",getServerPinnedConversations:"Get server pinned conversations",setSearchList:"Set the search results for conversations",ConversationStore:"ConversationStore is a data store that contains conversation lists, current conversations, search results, and methods to manage these data."},zh:{currentCvs:"当前会话",conversationList:"会话列表",searchList:"会话搜索结果",hasConversationNext:"是否有更多会话可加载",byId:"按ID索引的会话",setCurrentCvs:"设置当前会话",setConversation:"设置会话列表",addConversation:"添加新会话",deleteConversation:"删除会话",modifyConversation:"修改现有会话",pinConversation:"置顶会话",setSilentModeForConversation:"为会话设置静音模式",clearRemindTypeForConversation:"清除会话提醒类型",getSilentModeForConversations:"获取会话的静音模式",getServerPinnedConversations:"获取服务器置顶会话",setSearchList:"设置会话搜索结果",ConversationStore:"ConversationStore 是一个数据仓库，包含会话列表、当前会话、搜索结果等数据和管理这些数据的方法。"}},a=()=>o.jsx("div",{children:o.jsx(c,{initConfig:{appKey:"a#b"},children:o.jsx("div",{children:n[e].ConversationStore})})}),T={title:"Store/ConversationStore",component:a,argTypes:{currentCvs:{control:"object",description:n[e].currentCvs,table:{type:{summary:"object",detail:`{
    conversationId: string;
    chatType: ChatType;
    name?: string;
    unreadCount?: number;
}`}}},conversationList:{control:"array",description:n[e].conversationList,table:{type:{summary:"array",detail:`{
    chatType: 'singleChat' | 'groupChat';
    conversationId: string;
    lastMessage: Exclude<ChatSDK.MessageBody, ChatSDK.ReadMsgBody | ChatSDK.DeliveryMsgBody>;
    unreadCount: number;
    name?: string;
    atType?: 'NONE' | 'ALL' | 'ME';
    isOnline?: boolean;
    avatarUrl?: string;
    isPinned?: boolean;
    silent?: boolean;
}[]`}}},searchList:{control:"array",description:n[e].searchList,table:{type:{summary:"array",detail:`{
    chatType: 'singleChat' | 'groupChat';
    conversationId: string;
    lastMessage: Exclude<ChatSDK.MessageBody, ChatSDK.ReadMsgBody | ChatSDK.DeliveryMsgBody>;
    unreadCount: number;
    name?: string;
    atType?: 'NONE' | 'ALL' | 'ME';
    isOnline?: boolean;
    avatarUrl?: string;
    isPinned?: boolean;
    silent?: boolean;
}[]`}}},byId:{control:"object",description:n[e].byId,table:{type:{summary:"object",detail:`{
    [key: string]: Conversation;
}`}}},setCurrentCvs:{description:n[e].setCurrentCvs,table:{type:{summary:"function",detail:`(currentCvs: {
  conversationId: string;
  chatType: ChatType;
  name?: string;
  unreadCount?: number;
}) => void`}},control:"function"},setConversation:{description:n[e].setConversation,table:{type:{summary:"function",detail:"(conversations: Conversation[]) => void"}},control:"function"},setSearchList:{description:n[e].setSearchList,table:{type:{summary:"function",detail:"(searchList: Conversation[]) => void"}},control:"function"},addConversation:{description:n[e].addConversation,table:{type:{summary:"function",detail:"(conversation: Conversation) => void"}},control:"function"},deleteConversation:{description:n[e].deleteConversation,table:{type:{summary:"function",detail:"(conversation: CurrentConversation) => void"}},control:"function"},modifyConversation:{description:n[e].modifyConversation,table:{type:{summary:"function",detail:"(conversation: Conversation) => void"}},control:"function"},pinConversation:{description:n[e].pinConversation,table:{type:{summary:"function",detail:"(chatType: ChatType, cvsId: string, isPinned: boolean) => void"}},control:"function"},getServerPinnedConversations:{description:n[e].getServerPinnedConversations,table:{type:{summary:"function",detail:"() => Promise<Conversation[]>"}},control:"function"},setSilentModeForConversation:{description:n[e].setSilentModeForConversation,table:{type:{summary:"function",detail:"(cvs: CurrentConversation) => void"}},control:"function"},clearRemindTypeForConversation:{description:n[e].clearRemindTypeForConversation,table:{type:{summary:"function",detail:"(cvs: CurrentConversation) => void"}},control:"function"},getSilentModeForConversations:{description:n[e].getSilentModeForConversations,table:{type:{summary:"function",detail:"(cvs: CurrentConversation[]) => void"}},control:"function"}}},d=v=>o.jsx(a,{}),t={render:d,args:{}};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    // 根据实际的ConversationStore属性和方法设置默认参数
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,T as default};
