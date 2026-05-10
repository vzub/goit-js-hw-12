import{a as f,S as p,i as n}from"./assets/vendor-BAQQTdrx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="55699167-49f83dd649e03f32caa262a86";async function g(o){return(await f.get(m,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${i}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${s}</p>
          <p>Comments: ${u}</p>
          <p>Downloads: ${d}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){l.innerHTML=""}function v(){document.querySelector(".loader").classList.add("visible")}function w(){document.querySelector(".loader").classList.remove("visible")}const c=document.querySelector(".form");c.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Enter search query!",position:"topRight"});return}b(),v();try{const i=await g(r);if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{w()}c.reset()});
//# sourceMappingURL=index.js.map
