import{G as y,b as f}from"./index-e4b7ed04.js";const L=new y("AIzaSyCjSWKop9h4C9iZHHaTVwhRA340Awbj0gY");async function g(e){return(await(await L.getGenerativeModel({model:"gemini-pro"}).generateContent(e+" **ตอบไม่เกิน150ตัวอักษร")).response).text()}console.info("Chat Script started successfully");let o=!1;WA.onInit().then(()=>{WA.room.area.onEnter("chatZone1").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onEnter("chatZone2").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onLeave("chatZone1").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onLeave("chatZone2").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onEnter("chatZone3").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onEnter("chatZone4").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onLeave("chatZone3").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onLeave("chatZone4").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onEnter("chatZone1a").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onEnter("chatZone2a").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onLeave("chatZone1a").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onLeave("chatZone2a").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onEnter("chatZone5").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onLeave("chatZone5").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onEnter("chatZone6").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onLeave("chatZone6").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onEnter("chatZone7").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onLeave("chatZone7").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onEnter("chatZone8").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onLeave("chatZone8").subscribe(()=>{o=!1,WA.chat.close()}),WA.room.area.onEnter("chatZone9").subscribe(()=>{o=!0,WA.chat.sendChatMessage("สวัสดีครับ มีอะไรให้ช่วยไหมครับ?","เอไอ"),WA.chat.open()}),WA.room.area.onLeave("chatZone9").subscribe(()=>{o=!1,WA.chat.close()}),WA.chat.onChatMessage(e=>{o&&(WA.chat.startTyping({scope:"local",author:"เอไอ"}),g(e).then(a=>{WA.chat.sendChatMessage(a,"เอไอ"),WA.chat.stopTyping({scope:"local"})}))})}).catch(e=>console.error(e));const p=[{zone:"a",value:["ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]},{zone:"b",value:["ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 0 ppb","มีจระเข้ โดนจระเข้ไล่","ตรวจพบสารหนู ความเข้มข้น 6 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 15 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 18 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 13 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 0 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]},{zone:"c",value:["ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]},{zone:"d",value:["ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]},{zone:"e",value:["ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 0 ppb","ม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 32 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 42 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 38 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 20 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 0 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]},{zone:"f",value:["ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 0 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 65 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 61 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 42 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 20 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 0 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]},{zone:"g",value:["ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]},{zone:"h",value:["โบสถ์แข็งเกินไป","ตรวจพบสารหนู ความเข้มข้น 78 ppb","ม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 70 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 48 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 33 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 18 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ตรวจพบสารหนู ความเข้มข้น 0 ppb","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]},{zone:"i",value:["ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู","ไม่มีข้อมูลการตรวจสอบการปนเปื้อนของสารหนู"]}];console.log("BoradGame Run");let h=!1,w=-99;WA.onInit().then(()=>{let e;v(),WA.room.area.onEnter(areaId+"f").subscribe(()=>{WA.state[areaId]||(e=WA.ui.displayActionMessage({message:` reset   
          [กดเพื่อตรวจสอบ]`,callback:()=>{M()}}))}),h||p.forEach(a=>{const n=a.zone;a.value.forEach((r,s)=>{const l=`${n}${s+1}`,i=a.value[s];WA.room.area.onEnter(l+"f").subscribe(()=>{WA.state[l]?e=WA.ui.displayActionMessage({message:`พื้นที่ ${l} นี้ถูกสำรวจไปแล้ว     
              [กดเพื่อออก]`,callback:()=>{e.remove()}}):e=WA.ui.displayActionMessage({message:` ต้องการสำรวจพื้นที่ ${l} นี้   
                [กดเพื่อตรวจสอบ]`,callback:()=>{h=!0,WA.state[l]=!0,WA.state.map++,WA.chat.open(),WA.chat.sendChatMessage(`บริเวณ ${l} `+i,"ตัวเอง")}})}),WA.room.area.onLeave(l+"f").subscribe(()=>{e.remove()})})})}).catch(e=>console.error(e));const v=()=>{WA.state.map!==w&&(p.forEach(e=>{const a=e.zone;e.value.forEach((n,r)=>{const s=`${a}${r+1}`,l=`explore/${a}/${r+1}`;WA.state[s]&&WA.room.showLayer(l)})}),w=WA.state.map),setTimeout(v,1e4)},M=()=>{p.forEach(e=>{const a=e.zone;e.value.forEach((n,r)=>{const s=`${a}${r+1}`;WA.state[s]=!1})})},c=[{question:"PPB ย่อมาจากคำภาษาอังกฤษว่า",answerType:"any",answer:["Parts","per","Billion"]},{question:"ความเข้มข้น 1 PPB (1 ส่วนในพันล้านส่วน) กับ 1 PPM (1 ส่วนในล้านส่วน) ความเข้มข้นใด มีความเข้มข้นมากกว่า",answerType:"any",answer:["1 PPM","PPM","1ppm","หนึ่งในล้านส่วน","หนึ่งส่วนในล้านส่วน","1/ล้าน","1/1000000"]},{question:"Arsenic เข้าสู่ร่างกายทางอวัยวะส่วนใดได้บ้าง",answerType:"any",answer:["ผิวหนัง","การสัมผัส","การหายใจ","จมูก","ปาก","ปอด","ทางเดินอาหาร","ทางเดินหายใจ","การรับประทานอาหารที่ปนเปื้อน","การดื่มน้ำที่ปนเปื้อน"]},{question:"Arsenic ในธรรมชาติมาจากอะไรได้บ้าง",answerType:"any",answer:["การชะล้างของหิน","ภูเขาไฟ","เปลือกโลก","การทำเหมืองแร่","เหมืองแร่","โรงงานอุตสาหกรรม","การใช้ปุ๋ยและยาฆ่าแมลง","การผสมในอาหาร","การผลิตยา"]}];console.info("The Quiz Script has successfully begun!");let m=!1,t=0;c.sort(()=>Math.random()-.5);WA.onInit().then(()=>{WA.room.area.onEnter("quizZone").subscribe(()=>{t<=c.length&&(WA.chat.sendChatMessage("ยินดีเข้าสู่การทดสอบนะ นักสำรวจ","ผู้ทดสอบความรู้"),m=!0,WA.chat.open(),a())}),WA.room.area.onLeave("quizZone").subscribe(()=>{m=!1,WA.chat.close()});const e=(r,s="Quiz")=>{WA.chat.sendChatMessage(r,s)},a=()=>{t>=c.length&&(e("การทดสอบความรู้พื้นฐานสิ้นสุดแล้ว คุณพร้อมเป็นนักสืบเสาะภัยพิบัติแล้ว ออกไปสำรวจกันเถอะ จากแผนที่ คุณคิดว่าตำแหน่งที่เกิดการปนเปื้อนสารหนู อยู่ที่ตำแหน่งไหนในแผนที่","ผู้ทดสอบความรู้"),WA.chat.onChatMessage(()=>{WA.room.hideLayer("logic/doorLock"),e("ประตูห้องสืบสวนเปิดแล้ว คุณมีภาระกิจสืบหาต้นตอจุดรั่วไหลของสารหนู เข้าสู่พื้นที่พื้นที่ปนเปื้อนสารหนู ได้เลย","ผู้ทดสอบความรู้")}));const r=c[t];e(r.question,"ผู้ทดสอบความรู้")};WA.chat.onChatMessage(r=>{m&&(t<c.length?n(r):e("การสอบสิ้นสุดแล้ว ออกไปสำรวจกันเถอะ","ผู้ทดสอบความรู้"))});const n=r=>{const s=r.trim().toLowerCase().split(" "),l=c[t].answer.map(b=>b.toLowerCase());let i=!1;switch(c[t].answerType){case"any":for(const b of s)if(l.includes(b)){i=!0;break}break;case"all":i=s.length===l.length&&s.every(b=>l.includes(b));break;default:console.error("Invalid answerType:",c[t].answerType)}i?(e("ตอบได้ถูกต้อง!","ผู้ทดสอบความรู้"),t++,a()):(e("ยังไม่ถูกต้อง!","ผู้ทดสอบความรู้"),a())}}).catch(e=>console.error(e));console.log("Ed-Board loaded");const A=()=>{WA.ui.modal.openModal({title:"Review",src:"https://heyzine.com/flip-book/1726b3063d.html",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},u=()=>{WA.ui.modal.openModal({title:"Review",src:"https://heyzine.com/flip-book/856aea112a.html",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},W=()=>{WA.ui.modal.openModal({title:"Review",src:"https://heyzine.com/flip-book/ea48b35953.html",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})};WA.onInit().then(()=>{WA.room.area.onEnter("board1-Hallway").subscribe(()=>{A(),WA.room.area.onLeave("board1-Hallway").subscribe(()=>{WA.ui.modal.closeModal()})}),WA.room.area.onEnter("board2-Hallway").subscribe(()=>{u(),WA.room.area.onLeave("board2-Hallway").subscribe(()=>{WA.ui.modal.closeModal()})}),WA.room.area.onEnter("board3-Hallway").subscribe(()=>{W(),WA.room.area.onLeave("board3-Hallway").subscribe(()=>{WA.ui.modal.closeModal()})}),WA.room.area.onEnter("board1-Hall").subscribe(()=>{A(),WA.room.area.onLeave("board1-Hall").subscribe(()=>{WA.ui.modal.closeModal()})}),WA.room.area.onEnter("board2-Hall").subscribe(()=>{u(),WA.room.area.onLeave("board2-Hall").subscribe(()=>{WA.ui.modal.closeModal()})}),WA.room.area.onEnter("board3-Hall").subscribe(()=>{W(),WA.room.area.onLeave("board3-Hall").subscribe(()=>{WA.ui.modal.closeModal()})}),WA.room.area.onEnter("board1-room1").subscribe(()=>{A(),WA.room.area.onLeave("board1-room1").subscribe(()=>{WA.ui.modal.closeModal()})}),WA.room.area.onEnter("board2-room1").subscribe(()=>{u(),WA.room.area.onLeave("board2-room1").subscribe(()=>{WA.ui.modal.closeModal()})}),WA.room.area.onEnter("board3-room1").subscribe(()=>{W(),WA.room.area.onLeave("board3-room1").subscribe(()=>{WA.ui.modal.closeModal()})})});const E=()=>{WA.ui.modal.openModal({title:"sentPer1",src:"https://padlet.com/artnokkaew/submission-request/RdZYv72p81WdXrPl?section=220781711",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},_=()=>{WA.ui.modal.openModal({title:"sentPer2",src:"https://padlet.com/artnokkaew/submission-request/RdZYv72p81WdXrPl?section=220781932",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},C=()=>{WA.ui.modal.openModal({title:"viewPer1",src:"https://padlet.com/artnokkaew/breakout-link/K8wMqGOex35aqZJO-k2qlv3eR87Ndz5Rx",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},k=()=>{WA.ui.modal.openModal({title:"viewPer2",src:"https://padlet.com/artnokkaew/breakout-link/enZlqb8RQwaV43QR-k2qlv3eR87Ndz5Rx",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},P=()=>{WA.ui.modal.openModal({title:"sentCer1",src:"https://padlet.com/artnokkaew/submission-request/MV5obMPDMW5QvD8e?section=220778768",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},Z=()=>{WA.ui.modal.openModal({title:"sentCer2",src:"https://padlet.com/artnokkaew/submission-request/MV5obMPDMW5QvD8e?section=220779429",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},z=()=>{WA.ui.modal.openModal({title:"viewCer1",src:"https://padlet.com/artnokkaew/breakout-link/Bk5x4drWy037qZgz-oO6VvPqleonBbrwD",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})},q=()=>{WA.ui.modal.openModal({title:"viewCer2",src:"https://padlet.com/artnokkaew/breakout-link/eo1R47M7VLzgqZDL-oO6VvPqleonBbrwD",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"})};WA.room.area.onEnter("viewCer1").subscribe(()=>{z(),WA.room.area.onLeave("viewCer1").subscribe(()=>{WA.ui.modal.closeModal()})});WA.room.area.onEnter("viewCer2").subscribe(()=>{q(),WA.room.area.onLeave("viewCer2").subscribe(()=>{WA.ui.modal.closeModal()})});WA.room.area.onEnter("sentCer1").subscribe(()=>{P(),WA.room.area.onLeave("sentCer1").subscribe(()=>{WA.ui.modal.closeModal()})});WA.room.area.onEnter("sentCer2").subscribe(()=>{Z(),WA.room.area.onLeave("sentCer2").subscribe(()=>{WA.ui.modal.closeModal()})});WA.room.area.onEnter("viewPer1").subscribe(()=>{C(),WA.room.area.onLeave("viewPer1").subscribe(()=>{WA.ui.modal.closeModal()})});WA.room.area.onEnter("viewPer2").subscribe(()=>{k(),WA.room.area.onLeave("viewPer2").subscribe(()=>{WA.ui.modal.closeModal()})});WA.room.area.onEnter("sentPer1").subscribe(()=>{E(),WA.room.area.onLeave("sentPer1").subscribe(()=>{WA.ui.modal.closeModal()})});WA.room.area.onEnter("sentPer2").subscribe(()=>{_(),WA.room.area.onLeave("sentPer2").subscribe(()=>{WA.ui.modal.closeModal()})});console.info("Roofs Script started successfully");WA.onInit().then(()=>{WA.room.area.onEnter("hall").subscribe(()=>{WA.room.hideLayer("above/wall/wall_hall"),WA.room.showLayer("focus/hall")}),WA.room.area.onLeave("hall").subscribe(()=>{WA.room.showLayer("above/wall/wall_hall"),WA.room.hideLayer("focus/hall")}),WA.room.area.onEnter("room0").subscribe(()=>{WA.room.hideLayer("above/wall/wall_room_0")}),WA.room.area.onLeave("room0").subscribe(()=>{WA.room.showLayer("above/wall/wall_room_0")}),WA.room.area.onEnter("room1").subscribe(()=>{WA.room.hideLayer("above/wall/wall_room_1"),WA.room.hideLayer("above/wall/sign_room_1")}),WA.room.area.onLeave("room1").subscribe(()=>{WA.room.showLayer("above/wall/wall_room_1"),WA.room.showLayer("above/wall/sign_room_1")}),WA.room.area.onEnter("room2").subscribe(()=>{WA.room.hideLayer("above/wall/wall_room_2"),WA.room.hideLayer("above/wall/sign_room_2"),WA.room.showLayer("focus/room2")}),WA.room.area.onLeave("room2").subscribe(()=>{WA.room.showLayer("above/wall/wall_room_2"),WA.room.showLayer("above/wall/sign_room_2"),WA.room.hideLayer("focus/room2")}),WA.room.area.onEnter("room3").subscribe(()=>{WA.room.hideLayer("above/wall/wall_room_3"),WA.room.hideLayer("above/wall/sign_room_3"),WA.room.showLayer("focus/room3")}),WA.room.area.onLeave("room3").subscribe(()=>{WA.room.showLayer("above/wall/wall_room_3"),WA.room.showLayer("above/wall/sign_room_3"),WA.room.hideLayer("focus/room3")}),WA.room.area.onEnter("room4").subscribe(()=>{WA.room.hideLayer("above/wall/wall_room_4"),WA.room.hideLayer("above/wall/sign_room_4"),WA.room.showLayer("focus/room4")}),WA.room.area.onLeave("room4").subscribe(()=>{WA.room.showLayer("above/wall/wall_room_4"),WA.room.showLayer("above/wall/sign_room_4"),WA.room.hideLayer("focus/room4")}),WA.room.area.onEnter("room5").subscribe(()=>{WA.room.hideLayer("above/wall/wall_room_5"),WA.room.showLayer("focus/room5")}),WA.room.area.onLeave("room5").subscribe(()=>{WA.room.showLayer("above/wall/wall_room_5"),WA.room.hideLayer("focus/room5")}),WA.room.area.onEnter("room6").subscribe(()=>{WA.room.hideLayer("above/wall/wall_room_6"),WA.room.showLayer("focus/room6")}),WA.room.area.onLeave("room6").subscribe(()=>{WA.room.showLayer("above/wall/wall_room_6"),WA.room.hideLayer("focus/room6")}),WA.room.area.onEnter("hallRoom").subscribe(()=>{WA.room.showLayer("focus/room1")}),WA.room.area.onLeave("hallRoom").subscribe(()=>{WA.room.hideLayer("focus/room1")}),WA.room.area.onEnter("openadmin").subscribe(()=>{WA.room.hideLayer("above/wall/admin")})}).catch(e=>console.error(e));console.log("ADC_Script is started successfully");let d=!1;WA.onInit().then(async()=>{console.log("Scripting API ready"),await WA.players.configureTracking();const e=WA.players.list();console.log(e);for(const n of e)console.log(`Player ${n.name} is near you`);console.log("Token: ",WA.player.userRoomToken),console.log("Player name: ",WA.player.name),console.log("Player tags: ",WA.player.tags),console.log("Player ID: ",WA.player.id),WA.ui.actionBar.addButton({id:"btn-form",type:"action",imageSrc:"https://i.ibb.co/JFXcrqH/computerx.png",toolTip:"Questionnaire",callback:()=>{if(d){WA.ui.modal.closeModal(),d=!1;return}a(),d=!0}});const a=async()=>{WA.ui.modal.closeModal(),WA.ui.modal.openModal({src:"https://forms.office.com/Pages/ResponsePage.aspx?id=-LMev9IZnUCwxU6AyUP9UnHcR20-rXVHlnMm8B4tnvxUMllUNENDTE8wWDYzTENVWkVPSFRCWVdJQy4u",allow:"fullscreen",title:"website",allowApi:!0,position:"center"})};f().then(()=>{console.log("Scripting API Extra ready")}).catch(n=>console.error(n))}).catch(e=>console.error(e));
