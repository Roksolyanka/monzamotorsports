function e(){let e=document.querySelectorAll(".filter-item select"),t=document.getElementById("btnFilterCars"),n=!1;e.forEach((function(e){""!==e.value&&(n=!0)})),t.disabled=!n}function t(e){let t=e.parentNode,n=t.querySelector(".styled-dropdown"),o=t.querySelector(".option-list");n.textContent=e.querySelector("option").textContent,o.innerHTML="",e.querySelectorAll("option").forEach((function(t){let l=document.createElement("div");l.classList.add("option-item"),l.innerHTML="<span>"+t.textContent+"</span>",l.setAttribute("data-value",t.value),o.appendChild(l),l.addEventListener("click",(function(){let t=this.getAttribute("data-value");e.value=t,n.textContent=this.querySelector("span").textContent,o.style.display="none",n.classList.remove("on");let l=new Event("change");e.dispatchEvent(l)}))})),e.disabled?t.classList.add("disabled"):t.classList.remove("disabled")}let n=document.getElementById("makeSelect"),o=document.getElementById("modelSelect");const l={Honda:["Civic","Accord","Fit"],Kia:["Cerato","Forte","Sportage"],Toyota:["Highlander","Camry","Venza"],Volkswagen:["Tiguan","Amarok","T-Cross"],Lexus:["RX","NX","RC"],Hyundai:["Elantra","Accent","Sonata"],Mercedes:["GLE-Class","C-Class","E-Class"]};function a(e,t){let n=e.querySelector(".styled-dropdown");n.style.borderColor=t?"var(--brand-color)":""}document.addEventListener("DOMContentLoaded",(function(){let d=document.querySelectorAll(".filter-item select");document.querySelectorAll(".styled-select").forEach((function(e){e.style.display="none";let t=document.createElement("div");t.classList.add("custom-select-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e);let n=document.createElement("div");n.classList.add("styled-dropdown"),n.textContent=e.querySelector("option").textContent,t.appendChild(n);let o=document.createElement("div");o.classList.add("option-list"),t.appendChild(o),e.querySelectorAll("option").forEach((function(e){let t=document.createElement("div");t.classList.add("option-item"),t.innerHTML="<span>"+e.textContent+"</span>",t.setAttribute("data-value",e.value),o.appendChild(t)})),o.style.display="none",n.addEventListener("click",(function(){n.classList.contains("on")?(n.classList.remove("on"),o.style.display="none"):(n.classList.add("on"),o.style.display="block",o.querySelectorAll(".option-item").forEach((function(t){t.addEventListener("click",(function(){let t=this.getAttribute("data-value");e.value=t,n.textContent=this.querySelector("span").textContent,o.style.display="none",n.classList.remove("on"),a(e.parentNode,t);let l=new Event("change");e.dispatchEvent(l)}))})))}))})),n.addEventListener("change",(function(){const n=this.value;o.innerHTML='<option value="">Model</option>',n?(o.disabled=!1,l[n].forEach((function(e){const t=document.createElement("option");t.value=e,t.textContent=e,o.appendChild(t)}))):o.disabled=!0,t(o),e()})),document.querySelectorAll(".styled-select").forEach((function(e){t(e),a(e.parentNode,e.value)})),d.forEach((function(t){t.addEventListener("change",(function(){e()}))}))}));
//# sourceMappingURL=index.74836313.js.map
