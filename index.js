function displayReport(report) {
  const reportList = document.getElementById("report-list");
  const div = document.createElement("div");
  div.classList.add("report-item");
  div.innerHTML = `
    <h4>${report.title}</h4>
    <p>${report.description}</p>
    ${report.videoURL ? `<a href="${report.videoURL}" target="_blank">Watch Video</a>` : ""}
    <hr/>
  `;
  div.addEventListener("click", function () {
    div.classList.toggle("expanded");
  });
  if (reportList) {
    reportList.appendChild(div);
  }
}

function loadReports() {
  const reportList = document.getElementById("report-list");
  fetch("http://localhost:3002/reports")
    .then(res => res.json())
    .then(data => {
      if (reportList) {
        reportList.innerHTML = "";
        data.forEach(displayReport);
      }
    });
}

function loadJusticeNews() {
  const apiKey = "pub_ecb70293783649cdae1ba6a68ef51797";
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=justice&language=en`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const newsList = document.getElementById("news-list");
      if (!newsList) return;

      newsList.innerHTML = "";

      if (!data.results || data.results.length === 0) {
        newsList.innerHTML = "<p>No justice-related news found.</p>";
        return;
      }

      data.results.forEach(article => {
        const div = document.createElement("div");
        div.classList.add("report-item", "news-item");
        div.innerHTML = `
          <h4>${article.title}</h4>
          <p>${article.description || "No description available."}</p>
          <a href="${article.link}" target="_blank">Read more</a>
          <hr/>
        `;
        newsList.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Error fetching news:", error);
      const newsList = document.getElementById("news-list");
      if (newsList) {
        newsList.innerHTML = "<p>Error loading news.</p>";
      }
    });
}

function showSection(sectionId) {
  const allSections = ["home-section", "login-section", "register-section", "mainAPP"];
  allSections.forEach(id => {
    const sec = document.getElementById(id);
    if (sec) sec.style.display = "none";
  });
  const target = document.getElementById(sectionId);
  if (target) target.style.display = "block";
}

window.addEventListener("DOMContentLoaded", function () {
  const page = new URLSearchParams(window.location.search).get("page");

  if (page === "login") {
    showSection("login-section");
  } else if (page === "register") {
    showSection("register-section");
  } 
   else {
    showSection("home-section");
  }

  const loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", () => showSection("login-section"));
  }

  const createAccountButton = document.getElementById("createAccountButton");
  if (createAccountButton) {
    createAccountButton.addEventListener("click", () => showSection("register-section"));
  }

  const createAccountLink = document.getElementById("createAccountLink");
  if (createAccountLink) {
    createAccountLink.addEventListener("click", () => showSection("register-section"));
  }

  const loginLink = document.getElementById("loginLink");
  if (loginLink) {
    loginLink.addEventListener("click", () => showSection("login-section"));
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      localStorage.setItem("loggedIn", "true");
      showSection("mainAPP");
      loadJusticeNews();
      loadReports();
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      localStorage.setItem("loggedIn", "true");
      showSection("mainAPP");
      loadJusticeNews();
      loadReports();
    });
  }

  const reportForm = document.getElementById("report-form");
  if (reportForm) {
    reportForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = document.getElementById("reportTitle").value;
      const description = document.getElementById("reportDescription").value;
      const videoURL = document.getElementById("videoURL").value;

      const newReport = { title, description, videoURL };

      fetch("http://localhost:3002/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReport)
      })
        .then(response => response.json())
        .then(() => {
          reportForm.reset();
          loadReports();
          showSection("mainAPP");
        })
        .catch(error => {
          console.error("Error submitting report:", error);
        });
    });
  }

  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("loggedIn");
      showSection("home-section");
      window.history.pushState({}, "", "index.html");
    });
  }
});

