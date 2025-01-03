import{d as u,o as r,e as i,a as s,b as t,w as a,f as c,r as f,n as p}from"./app-CKJ_Ve5M.js";const v={class:"lg:hidden p-4"},g={key:0,class:"fixed inset-0 bg-gray-800 text-white flex flex-col z-50 lg:hidden"},m={class:"p-4 flex justify-between items-center"},h={class:"mt-4"},k={class:"flex"},b={class:"hidden lg:block w-64 bg-gray-800 text-white h-screen"},w={class:"mt-4"},_={class:"flex-1 p-6 h-screen overflow-y-auto"},M={__name:"AdminLayout",setup(y){const l=u(!1),e={props:{text:String},template:`
    <a href="#" class="block py-2 px-4 text-gray-200 hover:bg-gray-700">{{ text }}</a>
  `},n={props:{text:String},data(){return{open:!1}},template:`
    <div>
      <button @click="open = !open" class="flex items-center justify-between w-full py-2 px-4 text-gray-200 hover:bg-gray-700">
        <span>{{ text }}</span>
        <svg :class="{ 'rotate-180': open }" class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div v-show="open" class="ml-4">
        <slot />
      </div>
    </div>
  `};return(d,o)=>(r(),i("div",{class:p(["min-h-screen bg-gray-100",{"overflow-hidden":l.value}])},[s("div",v,[s("button",{onClick:o[0]||(o[0]=x=>l.value=!0),class:"text-gray-600 focus:outline-none"},o[2]||(o[2]=[s("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))]),l.value?(r(),i("div",g,[s("div",m,[o[4]||(o[4]=s("span",{class:"text-lg font-bold"},"TailAdmin",-1)),s("button",{onClick:o[1]||(o[1]=x=>l.value=!1),class:"text-white focus:outline-none"},o[3]||(o[3]=[s("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),s("nav",h,[t(e,{text:"Dashboard"}),t(e,{text:"Calendar"}),t(e,{text:"Profile"}),t(n,{text:"Task"},{default:a(()=>[t(e,{text:"Subtask 1"}),t(e,{text:"Subtask 2"})]),_:1}),t(n,{text:"Forms"},{default:a(()=>[t(e,{text:"Form 1"}),t(e,{text:"Form 2"})]),_:1}),t(e,{text:"Tables"}),t(n,{text:"Pages"},{default:a(()=>[t(e,{text:"Page 1"}),t(e,{text:"Page 2"})]),_:1})])])):c("",!0),s("div",k,[s("div",b,[o[5]||(o[5]=s("div",{class:"p-4 text-center font-bold text-lg"},"TailAdmin",-1)),s("nav",w,[t(e,{text:"Dashboard"}),t(e,{text:"Calendar"}),t(e,{text:"Profile"}),t(n,{text:"Task"},{default:a(()=>[t(e,{text:"Subtask 1"}),t(e,{text:"Subtask 2"})]),_:1}),t(n,{text:"Forms"},{default:a(()=>[t(e,{text:"Form 1"}),t(e,{text:"Form 2"})]),_:1}),t(e,{text:"Tables"}),t(n,{text:"Pages"},{default:a(()=>[t(e,{text:"Page 1"}),t(e,{text:"Page 2"})]),_:1})])]),s("div",_,[f(d.$slots,"default")])])],2))}};export{M as _};
