document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu"), nav=document.querySelector(".nav-links");
  if(menu&&nav) menu.addEventListener("click",()=>nav.classList.toggle("open"));
  const search=document.querySelector("[data-search]"), cards=[...document.querySelectorAll("[data-search-card]")], empty=document.querySelector(".empty");
  const run=()=>{if(!search)return; const q=search.value.trim().toLowerCase();let shown=0;cards.forEach(c=>{const ok=!q||c.innerText.toLowerCase().includes(q);c.style.display=ok?"":"none";if(ok)shown++});if(empty)empty.style.display=shown?"none":"block"};
  if(search){search.addEventListener("input",run);document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");search.value=b.dataset.filter==="all"?"":b.dataset.filter;run()}))}
  document.querySelectorAll(".checklist input").forEach((box,i)=>{const key="gpx-check-"+location.pathname+"-"+i;box.checked=localStorage.getItem(key)==="1";box.addEventListener("change",()=>localStorage.setItem(key,box.checked?"1":"0"))});
  const year=document.querySelector("[data-year]");if(year)year.textContent=new Date().getFullYear();
});