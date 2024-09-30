import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as m,S as d}from"./assets/vendor-BrddEoy-.js";const u="46256747-1d18669c2152ad7d06c950e83",g="https://pixabay.com/api/",n=document.querySelector(".search-form"),o=document.querySelector(".gallery");function h(a){return`
    <div class="gallery-item">
      <a href="${a.largeImageURL}">
        <img class="gallery-img" src="${a.webformatURL}" alt="${a.tags}" />
      </a>
      <div class="div-info">
        <div class="img-info">
        <span class="name">Likes</span>
        <span class="value">${a.likes}</span>
        </div>
        <div class="img-info">
        <span class="name">Views</span>
        <span class="value">${a.views}</span>
        </div>
        <div class="img-info">
        <span class="name">Comments</span>
        <span class="value">${a.comments}</span>
        </div>
        <div class="img-info">
        <span class="name">Downloads</span>
        <span class="value">${a.downloads}</span>
        </div>
      </div>
    </div>
  `}function y(){document.querySelector(".loading-spinner").style.display="block"}function t(){document.querySelector(".loading-spinner").style.display="none"}n.addEventListener("submit",a=>{a.preventDefault();const r=n.querySelector(".search-input").value.trim(),i=new URLSearchParams({key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),l=`${g}?${i.toString()}`;o.innerHTML="",y(),fetch(l).then(e=>{if(!e.ok)throw new Error("Network response is not ok");return e.json()}).then(e=>{t();const s=e.hits;if(s.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const c=s.map(p=>h(p)).join("");o.innerHTML=c,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(e=>{console.log(e),t()})});
//# sourceMappingURL=search.js.map
