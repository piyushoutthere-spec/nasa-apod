const apiKey = import.meta.env.VITE_NASA_API_KEY;
const app = document.querySelector('#app');

// Show initial loading state
app.innerHTML = `<h1>Loading NASA Picture of the Day...</h1>`;

async function fetchAPOD() {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await response.json();

    if (data.error) {
      app.innerHTML = `<h1>API Error: ${data.error.message}</h1>`;
      return;
    }

    app.innerHTML = `
      <main class="container">
        <h1>${data.title}</h1>
        ${data.media_type === 'image' 
          ? `<img src="${data.url}" alt="${data.title}" />` 
          : `<iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>`}
        <p class="explanation">${data.explanation}</p>
        <span class="date">${data.date}</span>
      </main>
    `;
  } catch (error) {
    app.innerHTML = `<h1>Error loading image: ${error.message}</h1>`;
  }
}

fetchAPOD();