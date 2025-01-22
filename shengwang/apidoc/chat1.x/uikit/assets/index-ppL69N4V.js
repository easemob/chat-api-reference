import{g as u,R as p}from"./index-f9CH5uyH.js";var a={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var o={}.hasOwnProperty;function s(){for(var t="",r=0;r<arguments.length;r++){var e=arguments[r];e&&(t=i(t,f(e)))}return t}function f(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var e in t)o.call(t,e)&&t[e]&&(r=i(r,e));return r}function i(t,r){return r?t?t+" "+r:t+r:t}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(a);var l=a.exports;const v=u(l),m=(n,o)=>o||(n?`cui-${n}`:"cui"),c=p.createContext({getPrefixCls:m});c.Consumer;c.Provider;export{c as C,v as c};
