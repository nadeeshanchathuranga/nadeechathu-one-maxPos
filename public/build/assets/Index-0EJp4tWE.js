import{o as g,c as N,w as p,b as i,u as d,a as t,g as R,t as x,d as v,l as C,T as ee,y as te,e as w,m as h,q as $,s as se,f as E,F as z,h as oe,n as O,z as le,A as M,Z as ne,k as ae}from"./app-CKJ_Ve5M.js";import{_ as re,F as ie}from"./Footer-Cuz9hzP5.js";import{_ as de}from"./Banner-pU-z1LEI.js";import{h as S,G as U,V as ce,Y as L,S as B}from"./transition-Bd2hPjeG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ue={class:"fixed inset-0 z-10 flex items-center justify-center"},pe={__name:"PosSuccessModel",props:{open:{type:Boolean,required:!0},products:{type:Array,required:!0},cashier:Object,customer:Object,orderId:String},emits:["update:open"],setup(m,{emit:k}){const c=m,n=()=>{const f=c.products.reduce((r,u)=>r+parseFloat(u.selling_price)*u.quantity,0),l=c.products.reduce((r,u)=>{if(u.discount&&u.discount>0&&u.apply_discount==!0){const D=(parseFloat(u.selling_price)-parseFloat(u.discounted_price))*u.quantity;return r+D}return r},0).toFixed(2),b=f-l,P=c.products.map(r=>`
      <tr>
        <td>${r.name}</td>
        <td>${r.quantity}</td>
        <td>
          ${r.discount&&r.discount>0&&r.apply_discount?`<div style="font-weight: bold; font-size: 7px; background-color:black; color:white;text-align:center;">${r.discount}% off</div>`:""}
         
         <div>${r.selling_price}</div>
        </td>
      </tr>
    `).join(""),F=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receipt</title>
    <style>
        @media print {
            body {
                margin: 0;
                padding: 0;
                -webkit-print-color-adjust: exact;
            }
        }
        body {
            background-color: #ffffff;
            font-size: 12px;
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 10px;
            color: #000;
        }
        .header {
            text-align: center;
            margin-bottom: 16px;
        }
        .header h1 {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
        }
        .header p {
            font-size: 10px;
            margin: 4px 0;
        }
        .section {
            margin-bottom: 16px;
            padding-top: 8px;
            border-top: 1px solid #000;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            margin-top: 8px;
        }
        .info-row p {
            margin: 0;
            font-weight: bold;
        }
        .info-row small {
            font-weight: normal;
        }
        table {
            width: 100%;
            font-size: 12px;
            border-collapse: collapse;
            margin-top: 8px;
        }
        table th, table td {
            padding: 6px 8px;
            border-bottom: 1px solid #ddd;
        }
        table th {
            text-align: left;
        }
        table td {
            text-align: right;
        }
        table td:first-child {
            text-align: left;
        }
        .totals {
            border-top: 1px solid #000;
            padding-top: 8px;
            font-size: 12px;
        }
        .totals div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .totals div:last-child {
            font-size: 14px;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            font-size: 10px;
            margin-top: 16px;
        }
        .footer p {
            margin: 6px 0;
        }
        .footer .italic {
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="receipt-container">
        <div class="header">
            <h1>DRESS HUB</h1>
            <p>3rd Floor, Discovery Building, Main Street, Pettah, Colombo 11, Sri Lanka</p>
            <p>0771119200 | dresshub.lk</p>
        </div>
        <div class="section">
            <div class="info-row">
                <div>
                    <p>Date:</p>
                    <small>${new Date().toLocaleDateString()}</small>
                </div>
                <div>
                    <p>Order No:</p>
                    <small>${c.orderId}</small>
                </div>
            </div>
            <div class="info-row">
                <div>
                    <p>Customer:</p>
                    <small>${c.customer.name}</small>
                </div>
                <div>
                    <p>Cashier:</p>
                    <small>${c.cashier.name}</small>
                </div>
            </div>
        </div>
        <div class="section">
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th style="text-align: center;">Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${P}
                </tbody>
            </table>
        </div>
        <div class="totals">
            <div>
                <span>Sub Total</span>
                <span>${f.toFixed(2)} LKR</span>
            </div>
            <div>
                <span>Discount</span>
                <span>${l} LKR</span>
            </div>
            <div>
                <span>Total</span>
                <span>${b.toFixed(2)} LKR</span>
            </div>
        </div>
        <div class="footer">
            <p>THANK YOU FOR SHOPPING WITH US</p>
            <p class="italic">Let the quality define its own standards</p>
            <p style="font-weight: bold;">Powered by JAAN Network (Pvt) Ltd.</p>
        </div>
    </div>
</body>
</html>
`,a=window.open("","_blank");if(!a){alert("Failed to open print window. Please check your browser settings.");return}a.document.open(),a.document.write(F),a.document.close(),a.onload=()=>{a.focus(),a.print(),a.close()}};return(f,l)=>(g(),N(d(B),{as:"template",show:m.open},{default:p(()=>[i(d(L),{class:"relative z-10",onClose:l[0]||(l[0]=b=>f.$emit("update:open",!1))},{default:p(()=>[i(d(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>l[1]||(l[1]=[t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1)])),_:1}),t("div",ue,[i(d(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p(()=>[i(d(U),{class:"bg-white border-4 border-blue-600 rounded-[20px] shadow-xl max-w-xl w-full p-6 text-center"},{default:p(()=>[i(d(ce),{class:"text-5xl font-bold"},{default:p(()=>l[2]||(l[2]=[R("Payment Successful!")])),_:1}),l[4]||(l[4]=t("div",{class:"w-full h-full flex flex-col justify-center items-center space-y-8 mt-4"},[t("p",{class:"text-justify text-3xl text-black"}," Order Payment is Successful! "),t("div",null,[t("img",{src:"/images/checked.png",class:"h-24 object-cover w-full"})])],-1)),t("div",{class:"flex justify-center items-center space-x-4 pt-4 mt-4"},[l[3]||(l[3]=t("p",{class:"cursor-pointer bg-blue-600 text-white font-bold uppercase tracking-wider px-4 shadow-xl rounded py-4 rounded-xl"}," Send Reciept To Email ",-1)),t("p",{onClick:n,class:"cursor-pointer bg-blue-600 text-white font-bold uppercase tracking-wider px-4 shadow-xl rounded py-4 rounded-xl"}," Print Receipt ")])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},fe={class:"fixed inset-0 z-10 flex items-center justify-center"},xe={class:"text-[15px] text-center text-gray-700"},be={class:"mt-6 space-x-4"},ve={__name:"AlertModel",props:{open:{type:Boolean,required:!0},message:String},emits:["update:open"],setup(m,{emit:k}){const c=k,n=()=>{new Audio("/sounds/click-sound.mp3").play()};return(f,l)=>(g(),N(d(B),{as:"template",show:m.open},{default:p(()=>[i(d(L),{class:"relative z-10",onClose:l[1]||(l[1]=b=>f.$emit("update:open",!1))},{default:p(()=>[i(d(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>l[2]||(l[2]=[t("div",{class:"fixed inset-0 transition-opacity bg-opacity-75"},null,-1)])),_:1}),t("div",fe,[i(d(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p(()=>[i(d(U),{class:"bg-white border-4 border-gray-600 rounded-[20px] shadow-xl max-w-md w-full p-6 text-center"},{default:p(()=>[t("p",xe,x(m.message),1),t("div",be,[t("button",{class:"px-6 py-2 text-[15px] text-white bg-red-600 rounded hover:bg-red-700",type:"button",onClick:l[0]||(l[0]=()=>{n(),c("update:open",!1)})}," Cancel ")])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]))}},me={class:"flex flex-col items-center justify-start min-h-screen py-8 space-y-4 bg-gray-100 px-36"},ye={class:"w-5/6 py-12 space-y-16"},ge={class:"flex items-center justify-between space-x-4"},we={class:"flex w-full space-x-4"},he={class:"flex items-center justify-between w-full space-x-4"},ke={class:"text-3xl font-bold tracking-wide text-black"},_e={class:"flex w-full gap-4"},je={class:"flex flex-col w-1/2"},Ce={class:"flex flex-col w-full"},$e={class:"p-16 space-y-8 bg-black shadow-lg rounded-3xl"},Se={class:"mb-3"},Pe={class:"flex gap-2 mb-3 text-black"},Fe={class:"text-black"},De={class:"flex w-1/2 p-8 border-4 border-black rounded-3xl"},qe={class:"flex flex-col items-start justify-center w-full px-12"},Ee={class:"flex items-end justify-between w-full my-5 border-2 border-black rounded-2xl"},Oe={class:"flex items-center justify-center w-3/4"},Ae={class:"w-full text-center"},Ie={key:0,class:"text-2xl text-red-500"},Te={class:"flex w-1/6"},ze=["src"],Me={class:"flex flex-col justify-start w-4/6"},Ne={class:"text-3xl text-black"},Re={class:"flex items-end justify-between w-full"},Ue={class:"flex space-x-4"},Le=["onClick"],Be={class:"bg-[#D9D9D9] border-2 border-black h-8 w-8 text-black flex justify-center items-center rounded"},Ve=["onClick"],Ke={class:"flex items-center justify-center"},He=["onClick"],Ye=["onClick"],Ge={class:"text-2xl font-bold text-black text-right"},Qe={class:"flex justify-end w-1/6"},We=["onClick"],Je={class:"w-full pt-6 space-y-2"},Ze={class:"flex items-center justify-between w-full px-16"},Xe={class:"text-xl"},et={class:"flex items-center justify-between w-full px-16 py-2 pb-4 border-b border-black"},tt={class:"text-xl"},st={class:"flex items-center justify-between w-full px-16 pt-4"},ot={class:"text-3xl text-black"},lt={class:"flex flex-col w-full space-y-8"},nt={class:"flex items-center justify-center w-full pt-8 space-x-8"},at={class:"flex items-center justify-center w-full"},rt=["disabled"],ft={__name:"Index",props:{loggedInUser:Object},setup(m){const k=v(null),c=v(null),n=v([]),f=v(!1),l=v(!1),b=v(""),P=o=>{f.value=o,o||u()},F=m;v(0);const a=v({name:"",countryCode:"+94",contactNumber:"",email:""}),r=v("cash"),u=()=>{le.visit(route("pos.index"),{preserveScroll:!1,preserveState:!1})},D=o=>{n.value=n.value.filter(e=>e.id!==o)},V=o=>{const e=n.value.find(s=>s.id===o);e&&(e.quantity+=1)},K=o=>{const e=n.value.find(s=>s.id===o);e&&e.quantity>1&&(e.quantity-=1)},q=C(()=>{const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Array.from({length:6},()=>o.charAt(Math.floor(Math.random()*o.length))).join("")}),H=async()=>{var o;console.log(n.value);try{const e=await M.post("/pos/submit",{customer:a.value,products:n.value,paymentMethod:r.value,userId:F.loggedInUser.id,orderId:q.value});f.value=!0,console.log(e.data)}catch(e){e.response.status===423&&(l.value=!0,b.value=e.response.data.message),console.error("Error submitting customer details:",((o=e.response)==null?void 0:o.data)||e.message)}},Y=C(()=>n.value.reduce((o,e)=>o+parseFloat(e.selling_price)*e.quantity,0).toFixed(2)),G=C(()=>n.value.reduce((o,e)=>{if(e.discount&&e.discount>0&&e.apply_discount==!0){const s=(parseFloat(e.selling_price)-parseFloat(e.discounted_price))*e.quantity;return o+s}return o},0).toFixed(2)),Q=C(()=>n.value.reduce((o,e)=>{const s=e.discount&&e.discount>0&&e.apply_discount==!0?parseFloat(e.discounted_price):parseFloat(e.selling_price);return o+s*e.quantity},0).toFixed(2)),_=ee({barcode:""});let j="",A;const I=async()=>{var o;try{const e=await M.post(route("pos.getProduct"),{barcode:_.barcode}),{product:s,error:y}=e.data;if(s){if(s.stock_quantity<1){l.value=!0,b.value="Product is out of stock";return}const T=n.value.find(X=>X.id===s.id);T?T.quantity+=1:n.value.push({...s,quantity:1,apply_discount:!1}),k.value=s,c.value=null,console.log("Product fetched successfully and added to cart:",s)}else l.value=!0,b.value=y,c.value=y,console.error("Error:",y)}catch(e){e.response.status===422&&(l.value=!0,b.value=e.response.data.message),console.error("An error occurred:",((o=e.response)==null?void 0:o.data)||e.message),c.value="An unexpected error occurred. Please try again."}},W=o=>{clearTimeout(A),o.key==="Enter"?(_.barcode=j,I(),j=""):j+=o.key,A=setTimeout(()=>{j=""},100)};te(()=>{document.addEventListener("keypress",W)});const J=o=>{n.value.forEach(e=>{e.id===o&&(e.apply_discount=!0)})},Z=o=>{n.value.forEach(e=>{e.id===o&&(e.apply_discount=!1)})};return(o,e)=>(g(),w(z,null,[i(d(ne),{title:"POS"}),i(de),t("div",me,[i(re),t("div",ye,[t("div",ge,[t("div",we,[i(d(ae),{href:"/"},{default:p(()=>e[9]||(e[9]=[t("img",{src:"/images/back-arrow.png",class:"w-14 h-14"},null,-1)])),_:1}),e[10]||(e[10]=t("p",{class:"pt-3 text-4xl font-bold tracking-wide text-black uppercase"}," PoS ",-1))]),t("div",he,[t("p",ke," Order ID : #"+x(q.value),1),t("p",{class:"text-3xl text-black cursor-pointer"},[t("i",{onClick:u,class:"ri-restart-line"})])])]),t("div",_e,[t("div",je,[t("div",Ce,[t("div",$e,[e[12]||(e[12]=t("p",{class:"mb-4 text-5xl font-bold text-white"},"Customer Details",-1)),t("div",Se,[h(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.value.name=s),type:"text",placeholder:"Enter Customer Name",class:"w-full px-4 py-4 text-black placeholder-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[$,a.value.name]])]),t("div",Pe,[h(t("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>a.value.countryCode=s),class:"w-[60px] px-2 py-2 bg-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},e[11]||(e[11]=[t("option",{value:"+94"},"+94",-1),t("option",{value:"+1"},"+1",-1),t("option",{value:"+44"},"+44",-1)]),512),[[se,a.value.countryCode]]),h(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>a.value.contactNumber=s),type:"text",placeholder:"Enter Customer Contact Number",class:"flex-grow px-4 py-4 text-black placeholder-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[$,a.value.contactNumber]])]),t("div",Fe,[h(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>a.value.email=s),type:"email",placeholder:"Enter Customer Email",class:"w-full px-4 py-4 text-black placeholder-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[$,a.value.email]])])])]),e[13]||(e[13]=t("div",{class:"flex flex-col items-center justify-center w-full pt-32 space-y-8"},[t("img",{src:"/images/Fading wheel.gif",class:"object-cover w-32 h-32 rounded-full"}),t("p",{class:"text-3xl text-black"}," Bar Code Scanner is in Progress... ")],-1))]),t("div",De,[t("div",qe,[e[25]||(e[25]=t("h2",{class:"text-5xl font-bold text-black"},"Billing Details",-1)),t("div",Ee,[t("div",Oe,[e[14]||(e[14]=t("label",{for:"search",class:"text-xl font-medium text-gray-800"},null,-1)),h(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>d(_).barcode=s),id:"search",type:"text",placeholder:"Enter BarCode Here!",class:"w-full h-16 px-4 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[$,d(_).barcode]])]),t("div",{class:"flex items-end justify-end w-1/4"},[t("button",{onClick:I,class:"px-12 py-4 text-2xl font-bold tracking-wider text-white uppercase bg-blue-600 rounded-r-xl"}," Enter ")])]),t("div",Ae,[n.value.length===0?(g(),w("p",Ie," No Products to show ")):E("",!0)]),(g(!0),w(z,null,oe(n.value,s=>(g(),w("div",{class:"flex items-center w-full py-4 border-b border-black",key:s.id},[t("div",Te,[t("img",{src:s.image?`/${s.image}`:"/images/placeholder.jpg",alt:"Supplier Image",class:"object-cover w-16 h-16 border border-gray-500"},null,8,ze)]),t("div",Me,[t("p",Ne,x(s.name),1),t("div",Re,[t("div",Ue,[t("p",{onClick:y=>V(s.id),class:"flex items-center justify-center w-8 h-8 text-white bg-black rounded cursor-pointer"},e[15]||(e[15]=[t("i",{class:"ri-add-line"},null,-1)]),8,Le),t("p",Be,x(s.quantity),1),t("p",{onClick:y=>K(s.id),class:"flex items-center justify-center w-8 h-8 text-white bg-black rounded cursor-pointer"},e[16]||(e[16]=[t("i",{class:"ri-subtract-line"},null,-1)]),8,Ve)]),t("div",Ke,[t("div",null,[s.discount&&s.discount>0&&s.apply_discount==!1?(g(),w("p",{key:0,onClick:y=>J(s.id),class:"cursor-pointer py-1 text-center px-4 bg-green-600 rounded-xl font-bold text-white tracking-wider"},"Apply "+x(s.discount)+"% off",9,He)):E("",!0),s.discount&&s.discount>0&&s.apply_discount==!0?(g(),w("p",{key:1,onClick:y=>Z(s.id),class:"cursor-pointer py-1 text-center px-4 bg-red-600 rounded-xl font-bold text-white tracking-wider"}," Remove "+x(s.discount)+"% Off ",9,Ye)):E("",!0),t("p",Ge,x(s.selling_price)+" LKR ",1)])])])]),t("div",Qe,[t("p",{onClick:y=>D(s.id),class:"text-3xl text-black border-2 border-black rounded-full cursor-pointer"},e[17]||(e[17]=[t("i",{class:"ri-close-line"},null,-1)]),8,We)])]))),128)),t("div",Je,[t("div",Ze,[e[18]||(e[18]=t("p",{class:"text-xl"},"Sub Total",-1)),t("p",Xe,x(Y.value)+" LKR",1)]),t("div",et,[e[19]||(e[19]=t("p",{class:"text-xl"},"Discount",-1)),t("p",tt,"( "+x(G.value)+" LKR )",1)]),t("div",st,[e[20]||(e[20]=t("p",{class:"text-3xl text-black"},"Total",-1)),t("p",ot,x(Q.value)+" LKR",1)])]),t("div",lt,[t("div",nt,[e[23]||(e[23]=t("p",{class:"text-xl text-black"},"Payment Method :",-1)),t("div",{onClick:e[5]||(e[5]=s=>r.value="cash"),class:O(["cursor-pointer w-[100px]  border border-black rounded-xl flex flex-col justify-center items-center text-center",r.value==="cash"?"bg-yellow-500 font-bold":"text-black"])},e[21]||(e[21]=[t("img",{src:"/images/money-stack.png",alt:"",class:"w-24"},null,-1)]),2),t("div",{onClick:e[6]||(e[6]=s=>r.value="card"),class:O(["cursor-pointer w-[100px] border border-black rounded-xl flex flex-col justify-center items-center text-center",r.value==="card"?"bg-yellow-500 font-bold":"text-black"])},e[22]||(e[22]=[t("img",{src:"/images/bank-card.png",alt:"",class:"w-24"},null,-1)]),2)]),t("div",at,[t("button",{onClick:e[7]||(e[7]=()=>{H()}),type:"button",disabled:n.value.length===0,class:O(["w-full bg-black py-4 text-2xl font-bold tracking-wider text-center text-white uppercase rounded-xl",n.value.length===0?" cursor-not-allowed":" cursor-pointer"])},e[24]||(e[24]=[t("i",{class:"pr-4 ri-add-circle-fill"},null,-1),R(" Confirm Order ")]),10,rt)])])])])])])]),i(pe,{open:f.value,"onUpdate:open":P,products:n.value,cashier:m.loggedInUser,customer:a.value,orderId:q.value},null,8,["open","products","cashier","customer","orderId"]),i(ve,{open:l.value,"onUpdate:open":e[8]||(e[8]=s=>l.value=s),message:b.value},null,8,["open","message"]),i(ie)],64))}};export{ft as default};
