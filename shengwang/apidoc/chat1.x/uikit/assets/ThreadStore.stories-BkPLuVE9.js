import{j as a}from"./jsx-runtime-DCY474Ph.js";import{P as s}from"./Provider-BZeeAFlE.js";import"./index-f9CH5uyH.js";import"./rootContext-D5G6AugW.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./Tooltip-CmqN9gqD.js";import"./index-ppL69N4V.js";import"./index-BGpIzb10.js";import"./reactNode-BFEIMXYA.js";import"./index-DbGGk5Em.js";import"./Icon-BpGZm428.js";import"./useAddress-CEkTW2Hm.js";const e="zh",t={en:{thread:"Thread data",currentThread:"Current thread information",showThreadPanel:"Visibility of the thread panel",threadList:"List of threads",setThread:"Set thread data",setCurrentThread:"Set the current thread",setThreadVisible:"Set the visibility of the thread panel",updateThreadInfo:"Update thread information",getChatThreadDetail:"Get details of a chat thread",getGroupChatThreads:"Get group chat threads",clear:"Clear thread data",ThreadStore:"ThreadStore is a data store that contains thread data, current thread information, and methods to manage these data."},zh:{thread:"子区数据",currentThread:"当前子区信息",showThreadPanel:"子区面板的可见性",threadList:"子区列表",setThread:"设置子区数据",setCurrentThread:"设置当前子区",setThreadVisible:"设置子区面板的可见性",updateThreadInfo:"更新子区信息",getChatThreadDetail:"获取聊天子区的详细信息",getGroupChatThreads:"获取群聊子区",clear:"清除子区数据",ThreadStore:"ThreadStore 是一个数据仓库，包含子区数据、当前子区信息以及管理这些数据的方法。"}},i=()=>a.jsx("div",{children:a.jsx(s,{initConfig:{appKey:"a#b"},children:a.jsx("div",{children:t[e].ThreadStore})})}),j={title:"Store/ThreadStore",component:i,argTypes:{thread:{control:"object",description:t[e].thread,table:{type:{summary:"object",detail:`{
    [key: string]: { // groupId
        [key: string]: { // threadId
            info?: ChatSDK.ThreadChangeInfo & { owner?: string };
            originalMessage: ChatSDK.MessageBody;
        };
    };
}`},defaultValue:{summary:"{}"}}},currentThread:{control:"object",description:t[e].currentThread,table:{type:{summary:"object",detail:`{
    visible: boolean;
    creating: boolean;
    info?: ChatSDK.ThreadChangeInfo & { owner?: string; members?: string[] };
    originalMessage: ChatSDK.MessageBody;
}`},defaultValue:{summary:"{}"}}},showThreadPanel:{control:"boolean",description:t[e].showThreadPanel,table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},threadList:{control:"array",description:t[e].threadList,table:{type:{summary:"object",detail:`{
            [key: string]: (ChatSDK.ChatThreadDetail & { members?: string[] })[];
        }`},defaultValue:{summary:"[]"}}},setThread:{description:t[e].setThread,table:{type:{summary:"function",detail:"(thread: ThreadData) => void"}},control:"function"},setCurrentThread:{description:t[e].setCurrentThread,table:{type:{summary:"function",detail:"(thread: CurrentThread) => void"}},control:"function"},setThreadVisible:{description:t[e].setThreadVisible,table:{type:{summary:"function",detail:"(visible: boolean) => void"}},control:"function"},updateThreadInfo:{description:t[e].updateThreadInfo,table:{type:{summary:"function",detail:"(threadInfo: ChatSDK.ThreadChangeInfo) => void"}},control:"function"},getChatThreadDetail:{description:t[e].getChatThreadDetail,table:{type:{summary:"function",detail:"(threadId: string) => Promise<void>"}},control:"function"},getGroupChatThreads:{description:t[e].getGroupChatThreads,table:{type:{summary:"function",detail:"(parentId: string, cursor?: string) => Promise<string | null>"}},control:"function"}}},h=l=>a.jsx(i,{}),r={render:h,args:{}};var o,n,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {
    // 根据实际的ThreadStore属性和方法设置默认参数
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,j as default};
