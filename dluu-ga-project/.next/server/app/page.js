(()=>{var e={};e.id=931,e.ids=[931],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},7899:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>u,routeModule:()=>g,tree:()=>d});var r=s(3137),i=s(4647),n=s(4183),o=s.n(n),a=s(1775),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);s.d(t,c);let l=r.AppPageRouteModule,d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4504)),"C:\\Users\\Maest\\OneDrive\\Desktop\\DLuuGalacticAdvisors\\dluu-ga-project\\app\\page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,6610)),"C:\\Users\\Maest\\OneDrive\\Desktop\\DLuuGalacticAdvisors\\dluu-ga-project\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\Maest\\OneDrive\\Desktop\\DLuuGalacticAdvisors\\dluu-ga-project\\app\\page.js"],p="/page",x={require:s,loadChunk:()=>Promise.resolve()},g=new l({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3549:(e,t,s)=>{Promise.resolve().then(s.bind(s,4983))},4983:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Home});var r=s(80),i=s(9885),n=s(2451),o=s.n(n);function Header(){return(0,r.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,r.jsxs)("div",{children:[r.jsx("h3",{children:"INSURANCE ASSESSMENT"}),r.jsx("h1",{children:"CLIENT NAME"}),r.jsx("br",{}),(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[r.jsx("text",{children:"Conducted on: "}),r.jsx("input",{placeholder:"Date"}),r.jsx("text",{children:"Date Accepted: "}),r.jsx("input",{placeholder:"Date"}),r.jsx("text",{children:"Reviewer Name: "}),r.jsx("input",{placeholder:"Name"})]})]}),r.jsx(o(),{src:"/logo.png",alt:"Galactic Advisors",className:"m-8",width:100,height:24,priority:!0})]})}function AvgScore(e){return r.jsx("div",{children:(0,r.jsxs)("h1",{children:[e.average,"% Overall Insurability Score - ",e.average,"%"]})})}function DropdownOptions(e){return(0,r.jsxs)("select",{id:e.identifier.replace(/\s/g,""),name:e.identifier.replace(/\s/g,""),children:[r.jsx("option",{value:"0",children:"No answer"}),r.jsx("option",{value:"1",children:"Yes"}),r.jsx("option",{value:"-.05",children:"No"})]})}function Section(e){return(0,r.jsxs)("div",{children:[r.jsx("h1",{children:e.section.sectionTitle}),e.section.questions.map((t,s)=>(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[r.jsx(DropdownOptions,{identifier:e.section.sectionTitle+""+s}),r.jsx("div",{className:"grid",children:r.jsx("text",{children:t})})]},s))]})}let a=JSON.parse('{"b":[{"sectionTitle":"Section One","questions":["Do you manage privileged accounts using a privileged access management software (PAM)?","If a PAM solution is deployed, is accessible in a \'check-in/out\' model?","Do you use MFA to protect all local and remote access to privileged user accounts?"]},{"sectionTitle":"Section Two","questions":["Do you manage privileged accounts using a privileged access management software (PAM)?","If a PAM solution is deployed, is accessible in a \'check-in/out\' model?","Do you use MFA to protect all local and remote access to privileged user accounts?"]}]}');function Home(){let[e,t]=(0,i.useState)(0);return r.jsx("main",{children:(0,r.jsxs)("form",{onSubmit:function(e){let s,r;console.log(e.target),e.preventDefault(),t(Math.round(100*(s=0,a.b.map((t,r)=>{t.questions.map((r,i)=>{let n=parseFloat(e.target[t.sectionTitle.replace(/\s/g,"")+i].value);s+=n})}),s/(r=0,a.b.map(e=>{r+=e.questions.length}),r))))},children:[r.jsx("input",{type:"text",name:"name"}),r.jsx(Header,{}),r.jsx(AvgScore,{average:e}),a.b.map((e,t)=>r.jsx(Section,{section:e},t)),r.jsx(AvgScore,{average:e}),r.jsx("button",{type:"submit",children:"Submit"})," ",r.jsx("br",{}),r.jsx("button",{onClick:e=>{e.preventDefault(),print(),location.reload()},children:"Print"})]})})}},4504:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>c});var r=s(7536);let i=(0,r.createProxy)(String.raw`C:\Users\Maest\OneDrive\Desktop\DLuuGalacticAdvisors\dluu-ga-project\app\page.js`),{__esModule:n,$$typeof:o}=i,a=i.default,c=a}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[609,242,610],()=>__webpack_exec__(7899));module.exports=s})();