function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l),l.register("8Dfv8",(function(t,n){e(t.exports,"initializeModelSelect",(function(){return c})),e(t.exports,"updateModelOptions",(function(){return s}));var o=l("8Ujej"),r=l("kmxfP"),a=l("5MctA");let i=document.getElementById("makeSelect"),d=document.getElementById("modelSelect");function c(){i.addEventListener("change",(function(){const e=this.value;if(d.innerHTML='<option value="">Model</option>',e){[...new Set(o.cars.filter((t=>t.make===e)).map((e=>e.model)))].forEach((function(e){const t=document.createElement("option");t.value=e,t.textContent=e,d.appendChild(t)}))}else d.disabled=!0;(0,r.updateCustomSelect)(d),(0,a.updateFilterButtonState)()}))}function s(e=""){const t=document.getElementById("modelSelect");if(t.innerHTML='<option value="" selected>Model</option>',e){[...new Set(o.cars.filter((t=>t.make===e)).map((e=>e.model)))].forEach((e=>{const n=document.createElement("option");n.value=e,n.textContent=e,t.appendChild(n)})),t.disabled=!1}else t.disabled=!0}})),l.register("kmxfP",(function(t,n){function o(e){let t=e.parentNode,n=t.querySelector(".styled-dropdown"),o=t.querySelector(".option-list");n.textContent=e.querySelector('option[value="'+e.value+'"]').textContent,o.innerHTML="",e.querySelectorAll("option").forEach((function(t){let l=document.createElement("div");l.classList.add("option-item"),l.innerHTML="<span>"+t.textContent+"</span>",l.setAttribute("data-value",t.value),o.appendChild(l),l.addEventListener("click",(function(){let t=this.getAttribute("data-value");e.value=t,n.textContent=this.querySelector("span").textContent,o.style.display="none",n.classList.remove("on");let l=new Event("change",{bubbles:!0});e.dispatchEvent(l)}))})),e.disabled?t.classList.add("disabled"):t.classList.remove("disabled")}e(t.exports,"updateCustomSelect",(function(){return o}))})),l.register("5MctA",(function(t,n){e(t.exports,"updateFilterButtonState",(function(){return r})),e(t.exports,"resetCustomSelects",(function(){return a}));var o=l("kzjJO");function r(){let e=document.querySelectorAll(".filter-item select"),t=document.getElementById("btnFilterCars"),n=!1;e.forEach((function(e){""!==e.value&&(n=!0)})),t.disabled=!n}function a(){document.querySelectorAll(".custom-select-wrapper").forEach((function(e){let t=e.querySelector(".styled-select"),n=e.querySelector(".styled-dropdown"),l=e.querySelector(".option-list");n.classList.remove("on"),l.style.display="none",n.textContent=t.querySelector("option").textContent,(0,o.updateCustomSelectStyle)(e,t.value)}))}})),l.register("kzjJO",(function(t,n){function o(){document.querySelectorAll(".styled-select").forEach((function(e){e.style.display="none";let t=document.createElement("div");t.classList.add("custom-select-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e);let n=document.createElement("div");n.classList.add("styled-dropdown"),n.textContent=e.querySelector("option").textContent,t.appendChild(n);let o=document.createElement("div");o.classList.add("option-list"),t.appendChild(o),e.querySelectorAll("option").forEach((function(e){let t=document.createElement("div");t.classList.add("option-item"),t.innerHTML="<span>"+e.textContent+"</span>",t.setAttribute("data-value",e.value),o.appendChild(t)})),o.style.display="none",n.addEventListener("click",(function(){n.classList.contains("on")?(n.classList.remove("on"),o.style.display="none"):(n.classList.add("on"),o.style.display="block",o.querySelectorAll(".option-item").forEach((function(t){t.addEventListener("click",(function(){let t=this.getAttribute("data-value");e.value=t,n.textContent=this.querySelector("span").textContent,o.style.display="none",n.classList.remove("on"),l(e.parentNode,t);let r=new Event("change");e.dispatchEvent(r)}))})))}))}))}function l(e,t){let n=e.querySelector(".styled-dropdown");n.style.borderColor=t?"var(--brand-color)":""}e(t.exports,"initializeCustomSelects",(function(){return o})),e(t.exports,"updateCustomSelectStyle",(function(){return l}))}));var r=l("8Ujej"),a=l("2QAIP"),i=l("8Dfv8"),d=l("5MctA");document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("yearSelect"),t=document.getElementById("makeSelect"),n=document.getElementById("modelSelect"),o=document.getElementById("trimSelect"),l=document.getElementById("mileageSelect"),c=document.getElementById("btnFilterCars"),s=document.getElementById("totalCars"),u=document.getElementById("available");function p(){let d=r.cars;const c=e.value,s=t.value,p=n.value,m=o.value,f=l.value,v=u.checked;c&&(d=d.filter((e=>e.year==c))),s?(d=d.filter((e=>e.make==s)),(0,i.updateModelOptions)(s)):(0,i.updateModelOptions)(),p&&(d=d.filter((e=>e.model==p))),m&&(d=d.filter((e=>e.fuelType==m))),f&&(d=d.filter((e=>{const t=e.mileage;switch(f){case"1":return t<3e4;case"2":return t>=3e4&&t<=4e4;case"3":return t>=40001&&t<=5e4;case"4":return t>=50001&&t<=6e4;case"5":return t>=60001&&t<=7e4;case"6":return t>=70001&&t<=8e4;case"7":return t>=80001&&t<=9e4;case"8":return t>=90001&&t<=1e5;case"9":return t>1e5;default:return!0}}))),v&&(d=d.filter((e=>!e.isSold))),(0,a.createCards)(d)}s.textContent=r.cars.length,e.addEventListener("change",p),t.addEventListener("change",p),n.addEventListener("change",p),o.addEventListener("change",p),l.addEventListener("change",p),u.addEventListener("change",p),c.addEventListener("click",(()=>{e.value="",t.value="",n.innerHTML='<option value="" selected>Model</option>',o.value="",l.value="",u.checked=!1,p(),(0,d.resetCustomSelects)()}))}));
//# sourceMappingURL=index.f8a4a84c.js.map
