import{S as L,a as S,i as E}from"./assets/vendor-90c85f31.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const q="/goit-js-hw-12/assets/error-80ee8afe.svg",w="https://pixabay.com/api/",k="41804111-1b8e3eb7a4ad0f0fdba68370e";let m;const o={key:k,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40},P=new L(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),p=document.querySelector(".form"),u=document.querySelector(".search-input"),y=document.querySelector(".gallery"),f=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");p.addEventListener("submit",$);i.addEventListener("click",O);async function $(t){if(t.preventDefault(),!u.value.trim()){l("Please, fill out the search field");return}y.innerHTML="",o.q=u.value.trim(),o.page=1,d(i),h()}function O(){o.page+=1,h()}async function h(){g(f);try{const t=await S.get(`${w}`,{params:o});A(t.data)}catch(t){l(t.message)}d(f)}function A(t){if(t.total===0){l("Sorry, there are no images matching your search query. Please try again!"),u.value="";return}m=t.totalHits;const s=t.hits.map(({largeImageURL:c,webformatURL:n,tags:e,likes:r,views:a,comments:b,downloads:v})=>`
        <li class="gallery-item">
          <a href="${c}">
            <img class="gallery-image" src="${n}" alt="${e}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${r}</span>
              <span><b>Views:</b> <br/>${a}</span>
              <span><b>Comments:</b> <br/>${b}</span>
              <span><b>Downloads:</b> <br/>${v}</span>
            </div>
          </a>
        </li>
                  `).join("");y.insertAdjacentHTML("beforeend",s),M(),P.refresh(),p.reset()}function M(){Math.ceil(m/o.per_page)===o.page?(l("We're sorry, but you've reached the end of search results."),d(i)):g(i)}function l(t){E.show({position:"topRight",iconUrl:q,messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0,closeOnEscape:!0,message:t})}function g(t){t.style.display="inline-block"}function d(t){t.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
