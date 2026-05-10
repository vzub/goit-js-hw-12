import{a as v,S as q,i as n}from"./assets/vendor-BNGoQ6_f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const B="https://pixabay.com/api/",M="55699167-49f83dd649e03f32caa262a86";async function p(o,t=1){return(await v.get(B,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const t=o.map(({webformatURL:a,largeImageURL:c,tags:e,likes:r,views:i,comments:w,downloads:S})=>`
      <li class="gallery-item">
        <a href="${c}">
          <img src="${a}" alt="${e}" />
        </a>

        <div class="info">
          <p><b>Likes</b> ${r}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${w}</p>
          <p><b>Downloads</b> ${S}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function P(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function R(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}const u=document.querySelector(".form"),E=document.querySelector(".load-more");let s=1,l="",d=0;u.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),!l){n.warning({message:"Enter search query!",position:"topRight"});return}s=1,P(),b(),y();try{const t=await p(l,s);if(d=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),d>15&&R()}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{L()}u.reset()});E.addEventListener("click",async()=>{s+=1,y();try{const o=await p(l,s);g(o.hits);const t=Math.ceil(d/15);s>=t&&(b(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
