import{S as y,a as g,i as h}from"./assets/vendor-90c85f31.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const b="/goit-js-hw-12/assets/error-80ee8afe.svg",v="https://pixabay.com/api/",L="41804111-1b8e3eb7a4ad0f0fdba68370e",n={key:L,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40},S=new y(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),u=document.querySelector(".form"),c=document.querySelector(".search-input"),f=document.querySelector(".gallery");document.querySelector(".loader");const q=document.querySelector(".load-more-btn");u.addEventListener("submit",w);q.addEventListener("click",E);async function w(t){if(t.preventDefault(),!c.value.trim()){l("Please, fill out the search field");return}f.innerHTML="",n.q=c.value.trim(),n.page=1,d()}function E(){n.page+=1,d()}async function d(){try{const t=await g.get(`${v}`,{params:n});P(t.data)}catch(t){l(t.message)}}function P(t){if(t.total===0){l("Sorry, there are no images matching your search query. Please try again!"),c.value="";return}t.totalHits;const o=t.hits.map(({largeImageURL:i,webformatURL:a,tags:e,likes:r,views:s,comments:m,downloads:p})=>`
        <li class="gallery-item">
          <a href="${i}">
            <img class="gallery-image" src="${a}" alt="${e}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${r}</span>
              <span><b>Views:</b> <br/>${s}</span>
              <span><b>Comments:</b> <br/>${m}</span>
              <span><b>Downloads:</b> <br/>${p}</span>
            </div>
          </a>
        </li>
                  `).join("");f.insertAdjacentHTML("beforeend",o),u.reset(),S.refresh()}function l(t){h.show({position:"topRight",iconUrl:b,messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0,closeOnEscape:!0,message:t})}
//# sourceMappingURL=commonHelpers.js.map
