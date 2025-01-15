(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();class a{constructor(){this.mobileMenuBtn=document.querySelector(".mobile-menu-btn"),this.navLinks=document.querySelector(".nav-links"),this.init()}init(){this.mobileMenuBtn&&this.navLinks&&(this.mobileMenuBtn.addEventListener("click",e=>{e.stopPropagation(),this.toggleMenu()}),document.addEventListener("click",e=>{e.target.closest("nav")||this.closeMenu()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeMenu()}))}toggleMenu(){const e=this.mobileMenuBtn.getAttribute("aria-expanded")==="true";this.navLinks.classList.toggle("active"),this.mobileMenuBtn.setAttribute("aria-expanded",!e)}closeMenu(){this.navLinks.classList.remove("active"),this.mobileMenuBtn.setAttribute("aria-expanded","false")}}class c{constructor(){this.init()}init(){this.modal=document.createElement("div"),this.modal.className="image-modal",this.modal.innerHTML=`
            <div class="modal-content">
                <button class="modal-close" aria-label="Close image">×</button>
                <img src="" alt="" />
            </div>
        `,document.body.appendChild(this.modal),this.modalImg=this.modal.querySelector("img"),this.closeBtn=this.modal.querySelector(".modal-close"),document.querySelectorAll(".img-responsive").forEach(e=>{e.addEventListener("click",()=>this.openModal(e))}),this.closeBtn.addEventListener("click",e=>{e.stopPropagation(),this.closeModal()}),this.modal.addEventListener("click",()=>this.closeModal()),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeModal()})}openModal(e){this.modalImg.src=e.src,this.modalImg.alt=e.alt,this.modal.classList.add("active"),document.body.style.overflow="hidden"}closeModal(){this.modal.classList.remove("active"),document.body.style.overflow=""}}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".collapsible-trigger").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",!s)})}),document.querySelectorAll(".tag-item").forEach(o=>{o.addEventListener("click",()=>{o.classList.toggle("active")})})});document.addEventListener("DOMContentLoaded",()=>{new a,new c});
