var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7309;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7309=o),o("bUb57");async function a(){const e=await fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=A3GIIfyPWHBvfJdoXANwrFAEAGEQbzXw");return(await e.json()).results}const r=(e,t)=>{const n=e.slice(0,t),o=e.slice(t,-1);let a=[];a=n.map((e=>`<button data-section=${e.section} class="btn">${e.display_name}</button>`));a.push(`\n    <div class="btn show-more">\n\n  <div class="text-icon_block">\n  <span class="show-more_btn">${window.innerWidth<768?"Categories":"Others"}</span>\n    <svg class = "show-more__icon" width="14" height="14">\n    <g clip-path="url(#a)">\n        <path d="M1.645 4 0 5.522 7 12l7-6.478L12.355 4 7 8.945 1.645 4Z" />\n    </g>\n    <defs>\n        <clipPath id="a">\n            <path fill="#fff" d="M0 0h14v14H0z" />\n        </clipPath>\n    </defs>\n</svg>\n  </div>\n  <div class="show-more__categories">\n  ${o.map((e=>`<button class="show-more__category" data-section=${e.section}>${e.display_name}</button>`)).join("")}\n  </div>\n</div>\n  `),document.getElementById("buttons-container").insertAdjacentHTML("beforeend",a.join(""));const r=document.querySelector(".show-more"),c=document.querySelector(".show-more__categories");r.addEventListener("click",(e=>{e.stopPropagation(),c.classList.toggle("show-more__categories--open")})),document.addEventListener("click",(()=>{c.classList.contains("show-more__categories--open")&&c.classList.remove("show-more__categories--open")})),function(){const e=document.querySelectorAll(".btn");let t=null;e.forEach((e=>{e.addEventListener("click",(n=>{null!==t&&t.classList.remove("active"),e.classList.add("active"),t=e}))}))}()};!async function(){let e=0;window.innerWidth<768&&a().then((t=>{r(t,e)})),window.innerWidth>=768&&window.innerWidth<1280&&(e=4,a().then((t=>{r(t,e)}))),window.innerWidth>=1280&&(e=6,a().then((t=>{r(t,e)})))}();window.addEventListener("resize",(()=>{let e=document.querySelector(".show-more_btn");const t=window.innerWidth;e.textContent=t<768?"Categories":"Others"}));const c=document.querySelector(".days"),i=document.querySelector(".current-date"),s=document.querySelectorAll(".calendar-icons span");let l=new Date,d=(l.getDate(),l.getMonth()),u=l.getFullYear();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")};e.openModalBtn.addEventListener("click",(function(){e.modal.classList.toggle("is-hidden"),e.input.classList.toggle("isActive"),e.arrow.classList.toggle("switched"),e.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(t){document.getElementById("input-picker").value;if(t.target.closest(".calendar-form"))return;e.input.classList.contains("isActive")&&(e.modal.classList.add("is-hidden"),e.input.classList.remove("isActive"),e.arrow.classList.remove("switched"),e.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}))})();const m=["January","February","March","April","May","June","July","August","September","October","November","December"],g=e=>{let t=new Date(u,d,1).getDay(),n=new Date(u,d+1,0).getDate(),o=new Date(u,d,n).getDay(),a=new Date(u,d,0).getDate(),r="";for(let e=t;e>0;e--)r+=`<li class="inactive">${a-e+1}</li>`;for(let e=1;e<=n;e++){r+=`<li class="${e===l.getDate()&&d===(new Date).getMonth()&&u===(new Date).getFullYear()}">${e}</li>`}for(let e=o;e<6;e++)r+=`<li class="inactive">${e-o+1}</li>`;i.innerText=`${m[d]} ${u}`,c.innerHTML=r;document.querySelector(".days").addEventListener("click",(e=>{[...e.currentTarget.children].forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active");let t=e.target.textContent;if(e.target.textContent.length>10)return;let n=(d+1).toString();document.getElementById("input-picker").value=t.padStart(2,"0")+"/"+n.padStart(2,"0")+"/"+u,localStorage.setItem("VALUE",JSON.stringify(t));let o=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(o)),document.querySelector("[data-modal]").classList.add("is-hidden"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}))};g();document.querySelector(".days");s.forEach((e=>{e.addEventListener("click",(()=>{d="prev"===e.id?d-1:d+1,d<0||d>11?(l=new Date(u,d,(new Date).getDate()),u=l.getFullYear(),d=l.getMonth()):l=new Date,g();let t=JSON.parse(localStorage.getItem("VALUE"));c.childNodes.forEach((e=>{e.textContent===t&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date"),o("3huUq"),o("b41dZ");var h=o("6HjFw");o("mPsIJ");const w=new(0,h.default);navigator.geolocation.getCurrentPosition((async function(e){return w.latitude=e.coords.latitude,w.longitude=e.coords.longitude,w.fetchWidthLocation().then((e=>{w.createWeatherMarkup(e)}))}),(function(){w.standartFetch().then((e=>w.createWeatherMarkup(e)))}));
//# sourceMappingURL=index.ae5b8a83.js.map
