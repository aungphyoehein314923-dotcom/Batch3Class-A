import React, { useEffect, useState } from 'react';

const initial = [
 {id:1, student:'Tun Yati Wai', parent:'Daw Sandi Wai', dob:'2012-11-22', phone:'09791234567', date:'2026-08-20', time:'10:00', method:'KBZ Pay', slip:'', status:'Pending'},
 {id:2, student:'Thae Su Wai', parent:'Daw Sandi Wai', dob:'2011-08-14', phone:'09791234567', date:'2026-08-18', time:'10:00', method:'Wave Pay', slip:'payment-slip.jpg', status:'Accepted'},
 {id:3, student:'Honey May', parent:'Daw Sandi Wai', dob:'2013-02-05', phone:'09987654321', date:'2026-08-15', time:'10:00', method:'CB Pay', slip:'receipt.png', status:'Rejected'},
 {id:4, student:'Thura Phyo Wai', parent:'Daw Sandi Wai', dob:'2010-05-11', phone:'09456781234', date:'2026-06-10', time:'10:00', method:'KBZ Pay', slip:'slip.png', status:'Enrolled'}
];
const notes = [
'Level Placement Test မဖြေဆိုမီ ကျောင်းသား၏ အမည်နှင့် မွေးသက္ကရာဇ် (DOB) တို့ကို မှန်ကန်စွာ ဖြည့်သွင်းပေးပါရန်။',
'မိမိတို့ အမှန်တကယ် မကင်းမလွတ် ဖြေဆိုနိုင်မည့် Available Date နှင့် Timeslot ကို သေချာစွာ ရွေးချယ်ပေးပါ။',
'ငွေလွှဲပြီးပါက ငွေလွှဲမှတ်တမ်း (Payment Slip) ကို ရှင်းလင်းစွာ မြင်သာအောင် Upload တင်ပေးရပါမည်။',
'Payment Slip တင်ပြီးပါက Admin ဘက်မှ စစ်ဆေးအတည်ပြု (Confirm) ပေးရန် ခဏ စောင့်ဆိုင်းပေးပါရန်။',
'Admin မှ Payment ကို Confirm လုပ်ပေးပြီးသည်နှင့် သင်၏ Dashboard တွင် Zoom Link ကို တန်းစီမြင်တွေ့ရမည်ဖြစ်ပါသည်။',
'Test ဖြေဆိုရမည့် ရက်နှင့် အချိန်ရောက်ပါက Dashboard ပေါ်ရှိ "Join to Zoom Class" Button ကို နှိပ်၍ တိုက်ရိုက် ဝင်ရောက်ဖြေဆိုနိုင်ပါသည်။',
'Test ဖြေဆိုပြီးနောက် ရလဒ် (Result) ကို Admin ဘက်မှ စစ်ဆေး၍ Dashboard ထဲသို့ ပို့ပေးသွားပါမည်။',
'ရက် သို့မဟုတ် အချိန် ပြောင်းလဲလိုပါက Admin ထံ တိုက်ရိုက်ဆက်သွယ်၍ (၁) ကြိမ်သာ အခမဲ့ ပြောင်းလဲခွင့် ရှိပါသည်။',
'(၁) ကြိမ် ပြောင်းလဲပြီးပါက နောက်ထပ် ထပ်မံ ပြောင်းလဲပေးမည် မဟုတ်ပါ။',
'ပေးချေပြီးသော Test ကြေးများကို မည်သည့်အကြောင်းကြောင့်မျှ ပြန်လည် အမ်းပေးမည် မဟုတ်ပါ (Non-refundable)။'
];
const blank = {student:'',parent:'',dob:'',phone:'',date:'',time:'',method:'',slip:'',status:'Pending'};
const asset = n => `/resources/${n}`;
function fmtDate(v){ if(!v) return '—'; return new Date(v+'T00:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}); }
function fmtTime(v){ if(!v) return '10:00 AM'; const [h,m]=v.split(':'); const d=new Date(); d.setHours(+h,+m); return d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}); }
function Status({value}){return <b className={'status '+value.toLowerCase()}>{value.toUpperCase()}</b>}

export default function App(){
 const [items,setItems]=useState(()=>{try{return JSON.parse(localStorage.getItem('lp-items'))||initial}catch{return initial}});
 const [screen,setScreen]=useState('list'),[form,setForm]=useState(blank),[editing,setEditing]=useState(null),[detail,setDetail]=useState(null);
 useEffect(()=>localStorage.setItem('lp-items',JSON.stringify(items)),[items]);
 const field=(k,v)=>setForm(p=>({...p,[k]:v}));
 const create=()=>{setEditing(null);setForm(blank);setScreen('form')};
 const edit=x=>{setEditing(x.id);setForm({...x});setScreen('form')};
 const save=e=>{e.preventDefault(); if(!form.student||!form.parent||!form.dob||!form.phone||!form.date||!form.time||!form.method||!form.slip){alert('Please complete all fields and upload payment slip.');return}
  if(editing)setItems(a=>a.map(x=>x.id===editing?{...form}:x));else setItems(a=>[{...form,id:Date.now()},...a]);setScreen('list')};
 const upload=e=>{const f=e.target.files?.[0];if(f){if(f.size>5*1024*1024){alert('File must be under 5MB');return}field('slip',f.name)}};
 const updateStatus=(id,status)=>{setItems(a=>a.map(x=>x.id===id?{...x,status}:x));setDetail(d=>({...d,status}))};

 return <div className="app">
  {screen==='list'?<main className="list-page">
   <div className="list-head"><h1>Booking List</h1><button className="create" onClick={create}>Create Booking</button></div>
   <section className="cards">{items.map(x=><article className="booking" key={x.id}>
    <img className="student-pic" src={asset('icon.png')} alt="Student"/>
    <div className="person"><div className="student-name">{x.student}</div><div className="parent-name">{x.parent}</div></div>
    <div className="status-area"><div className="label-with-icon"><img src={asset('main.png')} alt=""/> <span>Status</span></div><Status value={x.status}/></div>
    <div className="date-area"><div className="label-with-icon"><img src={asset('date.png')} alt=""/> <span>Date</span></div><strong>{fmtDate(x.date)}</strong></div>
    <div className="time-area"><div className="label-with-icon"><img src={asset('time.png')} alt=""/> <span>Time</span></div><strong>{fmtTime(x.time)} to 10:45 AM</strong></div>
    <div className="actions">{x.status!=='Enrolled'&&<button onClick={()=>edit(x)} title="Edit"><img src={asset('edit.png')} alt="Edit"/></button>}<button onClick={()=>setDetail(x)} title="View"><img src={asset('view.png')} alt="View"/></button></div>
   </article>)}</section>
  </main>:<main className="form-page">
   <button className="back" onClick={()=>setScreen('list')}>← {editing?'Update Booking Information':'Level Placement Test Booking Information'}</button>
   <section className="form-card">
    <form className="booking-form" onSubmit={save}>
     <div className="fields">
      <label>Student Name<input value={form.student} onChange={e=>field('student',e.target.value)} /></label>
      <label>Parent Name<input value={form.parent} onChange={e=>field('parent',e.target.value)} /></label>
      <label>Student’s Date of Birth<input type="date" value={form.dob} onChange={e=>field('dob',e.target.value)} /></label>
      <label>Parent Phone No.<input value={form.phone} onChange={e=>field('phone',e.target.value)} /></label>
      <label>Booking Date<input type="date" value={form.date} onChange={e=>field('date',e.target.value)} /></label>
      <label>Booking Time Slot<input type="time" value={form.time} onChange={e=>field('time',e.target.value)} /></label>
      <label className="wide">Test Fees<div className="fee">10,000</div></label>
      <label className="wide">Payment Method<select value={form.method} onChange={e=>field('method',e.target.value)}><option value="">please choose payment method</option><option>KBZ Pay</option><option>Wave Pay</option><option>CB Pay</option><option>Bank Transfer</option></select></label>
      <label className="wide">Payment Slip<div className="upload"><span>⇧</span><input type="file" accept="image/*,.pdf" onChange={upload}/><small>{form.slip||'Please upload your payment slip'}</small></div></label>
      {editing&&<label className="wide">Booking Status<select value={form.status} onChange={e=>field('status',e.target.value)}><option>Pending</option><option>Accepted</option><option>Rejected</option><option>Enrolled</option></select></label>}
     </div>
     <button className={editing?'update-btn':'book-btn'}>{editing?'Update Booking':'Book Test'}</button>
    </form>
    <aside className="instructions"><h2>Instruction</h2><ul>{notes.map((n,i)=><li key={i}>{n}</li>)}</ul></aside>
   </section>
  </main>}
  {detail&&<div className="shade" onClick={()=>setDetail(null)}><div className="dialog" onClick={e=>e.stopPropagation()}>
   <button className="x" onClick={()=>setDetail(null)}>×</button><h2>Booking Information</h2>
   <div className="details">{[['Student Name',detail.student],['Parent Name',detail.parent],['Date of Birth',fmtDate(detail.dob)],['Phone Number',detail.phone],['Booking Date',fmtDate(detail.date)],['Booking Time',fmtTime(detail.time)],['Payment Method',detail.method],['Payment Slip',detail.slip||'Not uploaded']].map(([a,b])=><div key={a}><small>{a}</small><strong>{b}</strong></div>)}</div>
   <div className="status-control"><span>Booking Status</span><select value={detail.status} onChange={e=>updateStatus(detail.id,e.target.value)}><option>Pending</option><option>Accepted</option><option>Rejected</option><option>Enrolled</option></select></div>
   <button className="update-btn" onClick={()=>{setDetail(null);edit(detail)}}>Edit Booking</button>
  </div></div>}
 </div>
}
