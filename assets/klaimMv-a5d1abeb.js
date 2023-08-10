import{r as j,a as v,u as f,j as e,d as N}from"./index-cca93be0.js";import{N as g,T as b,M as k}from"./mainBox-97217b25.js";import{I as n}from"./input-6226718d.js";import{F as P}from"./fab-24974c28.js";import{u as y}from"./today-9e8006eb.js";import{u as C}from"./useDispatch-dbd55520.js";const I=()=>{const[a,t]=j.useState({nPolis:"",insuredName:"",periode:"",polis:"",okupasi:"",dol:"",kronologi:""}),{username:r}=v(l=>l.username),d=C(),m=f(),i=y(),o=new Date;o.setDate(o.getDate()-10);const p=o.toISOString().split("T")[0],s=l=>{const{name:c,value:h}=l.target;t(x=>({...x,[c]:h}))},u=l=>{l.preventDefault(),d(N({insuredName:a.insuredName,nPolis:a.nPolis,type:"Klaim",COB:"MV",periode:a.periode,polis:a.polis,okupasi:a.okupasi,dol:a.dol,kronologi:a.kronologi,addedDate:i,status:"First Report",agentName:r})),m("/application/")};return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(b,{}),e.jsx(k,{content:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"font-semibold text-xl mb-5",children:"Klaim"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"nPolis",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"No Polis"}),e.jsx(n,{id:"nPolis",name:"nPolis",placeholder:"",value:a.nPolis,onChange:s,additionalStyles:"rounded-xl pl-3"})]}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"insuredName",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Insured Name"}),e.jsx(n,{id:"insuredName",name:"insuredName",placeholder:"",value:a.insuredName,onChange:s,additionalStyles:"rounded-xl pl-3"})]}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"polis",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Polis:"}),e.jsxs("select",{id:"polis",name:"polis",value:a.polis,onChange:s,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[e.jsx("option",{value:"",children:"Jenis Polis"}),e.jsx("option",{value:"Comprehensive",children:"Comprehensive"}),e.jsx("option",{value:"TLO",children:"TLO"})]})]}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"okupasi",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Okupasi:"}),e.jsxs("select",{id:"okupasi",name:"okupasi",value:a.okupasi,onChange:s,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[e.jsx("option",{value:"",children:"Pilih okupasi"}),e.jsx("option",{value:"pribadi",children:"Pribadi"}),e.jsx("option",{value:"dinas",children:"Dinas"}),e.jsx("option",{value:"niaga",children:"Niaga"})]})]}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"dol",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Tanggal Kejadian:"}),e.jsx("div",{className:"flex justify-between items-center gap-4",children:e.jsx("input",{id:"dol",name:"dol",placeholder:"",value:a.dol,onChange:s,className:"rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold",type:"date",min:p,max:i})}),e.jsxs("div",{className:"relative my-5",children:[e.jsx("label",{htmlFor:"kronologi",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Kronologi Kejadian"}),e.jsx("textarea",{id:"kronologi",name:"kronologi",placeholder:"",value:a.kronologi,onChange:s,className:"rounded-xl pl-3 w-full h-32 mt-5 p-3 font-Poppins font-semibold",rows:5})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"bg-sky-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90",children:"Send"})})]})]})}),e.jsx(P,{})]})};export{I as default};
