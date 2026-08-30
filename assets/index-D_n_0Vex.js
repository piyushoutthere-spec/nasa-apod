(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`laqqYxbQx453gn9s7HFdTzQdZpTtROjjQSnkudYm`,t=document.querySelector(`#app`);t.innerHTML=`<h1>Loading NASA Picture of the Day...</h1>`;async function n(){try{let n=await(await fetch(`https://api.nasa.gov/planetary/apod?api_key=${e}`)).json();if(n.error){t.innerHTML=`<h1>API Error: ${n.error.message}</h1>`;return}t.innerHTML=`
      <main class="container">
        <h1>${n.title}</h1>
        ${n.media_type===`image`?`<img src="${n.url}" alt="${n.title}" />`:`<iframe src="${n.url}" frameborder="0" allowfullscreen></iframe>`}
        <p class="explanation">${n.explanation}</p>
        <span class="date">${n.date}</span>
      </main>
    `}catch(e){t.innerHTML=`<h1>Error loading image: ${e.message}</h1>`}}n();