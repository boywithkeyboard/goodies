var s=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var y=(t,e)=>{for(var r in e)s(t,r,{get:e[r],enumerable:!0})},m=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of f(e))!d.call(t,o)&&o!==r&&s(t,o,{get:()=>e[o],enumerable:!(i=c(e,o))||i.enumerable});return t};var p=t=>m(s({},"__esModule",{value:!0}),t);var u={};y(u,{default:()=>g});module.exports=p(u);var n=require("path"),a=require("fs/promises");async function*l(t){let e=await(0,a.readdir)(t,{withFileTypes:!0});for(let r of e){let i=(0,n.resolve)(t,r.name);r.isDirectory()?yield*l(i):yield i}}var g=l;0&&(module.exports={});