document.getElementById('loginButton').addEventListener('click', function() {
    window.open('index.html?page=login', '_blank');
})
document.getElementById('createAccountButton').addEventListener('click', function() {
    window.open('index.html?page=register', '_blank');
})
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    
    if (page === 'login') {
        document.getElementById('home-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }
    if (page === 'register') {
        document.getElementById('home-section').style.display = 'none';
        document.getElementById('register-section').style.display = 'block';
    }
    document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('mainAPP').style.display = 'block';
  loadJusticeNews();
});
function loadJusticeNews() {
  const apiKey = "67e406e147f34793b7070319ec9eadd3";
  const url = `https://gnews.io/api/v4/search?q=justice&lang=en&max=5&apikey=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const newsList = document.getElementById("news-list");
      newsList.innerHTML = "";

      if (!data.articles || data.articles.length === 0) {
        newsList.innerHTML = "<p>No justice-related news found.</p>";
        return;
      }

      data.articles.forEach(article => {
        const div = document.createElement("div");
        div.classList.add("news-item");
        div.innerHTML = `
          <h4>${article.title}</h4>
          <p>${article.description || "No description available."}</p>
          <a href="${article.url}" target="_blank">Read more</a>
          <hr/>
        `;
        newsList.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Error fetching news:", error);
      document.getElementById("news-list").innerHTML = "<p>Error loading news.</p>";
    });
}

   
});