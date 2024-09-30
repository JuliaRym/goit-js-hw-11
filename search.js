import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as l,S as c}from"./assets/vendor-BrddEoy-.js";const p="46256747-1d18669c2152ad7d06c950e83",u="https://pixabay.com/api/",o=document.querySelector(".search-form"),i=document.querySelector(".gallery");function d(e){return`
    <div class="gallery-item">
      <a href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="div-info">
        <div class="img-info">
        <span class="name">Likes</span>
        <span class="value">${e.likes}</span>
        </div>
        <div class="img-info">
        <span class="name">Views</span>
        <span class="value">${e.views}</span>
        </div>
        <div class="img-info">
        <span class="name">Comments</span>
        <span class="value">${e.comments}</span>
        </div>
        <div class="img-info">
        <span class="name">Downloads</span>
        <span class="value">${e.downloads}</span>
        </div>
      </div>
    </div>
  `}function m(){document.querySelector(".loading-spinner").style.display="block"}function r(){document.querySelector(".loading-spinner").style.display="none"}function g(e){const s=new URLSearchParams({key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return`${u}?${s.toString()}`}function h(e){const s=e.map(n=>d(n)).join("");i.innerHTML=s}function y(){new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}o.addEventListener("submit",e=>{e.preventDefault();const s=o.querySelector(".search-input").value.trim(),n=g(s);i.innerHTML="",m(),fetch(n).then(a=>{if(!a.ok)throw new Error("Network response is not ok");return a.json()}).then(a=>{r();const t=a.hits;if(t.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t),y()}).catch(a=>{console.log(a),r()})});
//# sourceMappingURL=search.js.map
