(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`);e.innerHTML=`<h1>Loading NASA Picture of the Day...</h1>`;async function t(){try{let t=(await(await fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic`)).json())[0];if(t.error){e.innerHTML=`<h1>API Error: ${t.error.message}</h1>`;return}e.innerHTML=`
      <main class="container">
        <h1>${t.title}</h1>
        ${t.media_type===`image`?`<img src="${t.hdurl}" alt="${t.title}" />`:`<iframe src="${t.url}" frameborder="0" allowfullscreen></iframe>`}
        <p class="explanation">${t.explanation}</p>
        <span class="date">${t.date}</span>
      </main>
    `}catch(t){e.innerHTML=`<h1>Error loading image: ${t.message}</h1>`}}t();