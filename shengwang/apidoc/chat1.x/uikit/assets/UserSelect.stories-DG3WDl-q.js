import{j as r}from"./jsx-runtime-DCY474Ph.js";import{P as h}from"./Provider-BZeeAFlE.js";import{U as i}from"./UserSelect-XBSI0mKZ.js";import{B as l}from"./Button-CVEhFYd5.js";import"./index-f9CH5uyH.js";import"./rootContext-D5G6AugW.js";import"./index-BL4xhkH1.js";import"./index-lGqxQBYy.js";import"./Tooltip-CmqN9gqD.js";import"./index-ppL69N4V.js";import"./index-BGpIzb10.js";import"./reactNode-BFEIMXYA.js";import"./index-DbGGk5Em.js";import"./Icon-BpGZm428.js";import"./useAddress-CEkTW2Hm.js";import"./UserItem-DNZXnFBw.js";import"./Checkbox-Dqzf5P6l.js";import"./Ripple-0sqiOC8t.js";import"./Modal-DsHXYap_.js";import"./ContactDetail-CFsLSBbW.js";import"./Search-D55WYLx3.js";import"./Header-cCQd5MuQ.js";import"./Empty-CGMUVx7T.js";const e="zh",t={en:{prefix:"css class name prefix",className:"css class name",style:"css style",onUserSelect:"Callback when selecting user",enableMultipleSelection:"Whether to enable multiple selection",selectedPanelHeader:"Selected panel header",selectedPanelFooter:"Selected panel footer",users:"User list",checkedUsers:"Checked user list",disableUserIds:"Disabled user ID list",disabled:"Disabled",searchPlaceholder:"Search placeholder",onConfirm:"Confirm callback"},zh:{prefix:"css 类名前缀",className:"css 类名",style:"css 样式",onUserSelect:"用户选择回调",enableMultipleSelection:"是否启用多选",selectedPanelHeader:"已选用户面板头部",selectedPanelFooter:"已选用户面板底部",users:"用户列表",checkedUsers:"已选用户列表",disableUserIds:"禁用用户ID列表",disabled:"是否禁用",searchPlaceholder:"搜索框占位符",onConfirm:"确认回调"}},N={title:"Module/UserSelect",component:i,argTypes:{prefix:{description:t[e].prefix,control:{type:"text"},type:"string"},className:{description:t[e].className,control:{type:"text"},type:"string"},style:{description:t[e].style,control:{type:"object"}},enableMultipleSelection:{description:t[e].enableMultipleSelection,control:{type:"boolean"},type:"boolean"},selectedPanelHeader:{description:t[e].selectedPanelHeader,control:{type:"object"}},selectedPanelFooter:{description:t[e].selectedPanelFooter,control:{type:"object"}},users:{description:t[e].users,control:{type:"object"}},checkedUsers:{description:t[e].checkedUsers,control:{type:"object"}},disableUserIds:{description:t[e].disableUserIds,control:{type:"object"}},disabled:{description:t[e].disabled,control:{type:"boolean"},type:"boolean"},searchPlaceholder:{description:t[e].searchPlaceholder,control:{type:"text"},type:"string"},onConfirm:{description:t[e].onConfirm}}},b=n=>r.jsx(i,{...n,closable:!0,enableMultipleSelection:!0}),y=n=>r.jsx(h,{initConfig:{appId:"abc"},theme:{mode:"dark"},children:r.jsx("div",{style:{background:"#171a1c"},children:r.jsx(i,{...n,closable:!0,enableMultipleSelection:!0})})}),s={render:b,args:{enableMultipleSelection:!0,closable:!0,open:!0,title:"Select Users",users:[{userId:"zd1",nickname:"Zhao Yun"},{userId:"zd2",nickname:"Guan Yu"}],checkedUsers:[{userId:"zd1",nickname:"Zhao Yun"}],selectedPanelFooter:r.jsxs("div",{children:[r.jsx(l,{type:"primary",style:{marginRight:"20px",width:"80px"},children:"Confirm"}),r.jsx(l,{style:{width:"80px"},children:"Cancel"})]})}},o={render:y,args:{enableMultipleSelection:!0,closable:!0,open:!0,title:"Select Users",users:[{userId:"zd1",nickname:"Zhao Yun"},{userId:"zd2",nickname:"Guan Yu"}],checkedUsers:[{userId:"zd1",nickname:"Zhao Yun"}],selectedPanelFooter:r.jsxs("div",{children:[r.jsx(l,{type:"primary",style:{marginRight:"20px",width:"80px"},children:"Confirm"}),r.jsx(l,{style:{width:"80px"},children:"Cancel"})]})}};var c,a,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    enableMultipleSelection: true,
    closable: true,
    open: true,
    title: 'Select Users',
    users: [{
      userId: 'zd1',
      nickname: 'Zhao Yun'
    }, {
      userId: 'zd2',
      nickname: 'Guan Yu'
    }],
    checkedUsers: [{
      userId: 'zd1',
      nickname: 'Zhao Yun'
    }],
    selectedPanelFooter: <div>
        <Button type="primary" style={{
        marginRight: '20px',
        width: '80px'
      }}>
          Confirm
        </Button>
        <Button style={{
        width: '80px'
      }}>Cancel</Button>
      </div>
  }
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DarkTemplate,
  args: {
    enableMultipleSelection: true,
    closable: true,
    open: true,
    title: 'Select Users',
    users: [{
      userId: 'zd1',
      nickname: 'Zhao Yun'
    }, {
      userId: 'zd2',
      nickname: 'Guan Yu'
    }],
    checkedUsers: [{
      userId: 'zd1',
      nickname: 'Zhao Yun'
    }],
    selectedPanelFooter: <div>
        <Button type="primary" style={{
        marginRight: '20px',
        width: '80px'
      }}>
          Confirm
        </Button>
        <Button style={{
        width: '80px'
      }}>Cancel</Button>
      </div>
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const _=["Default","Dark"];export{o as Dark,s as Default,_ as __namedExportsOrder,N as default};
