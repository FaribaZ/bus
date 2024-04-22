fetch(
  "https://cdnsnapptrip.com/images/market//Uploads/snapptrip-ads/images/Landing403/luckybus.json"
)
  .then((response) => response.json())
  .then((json) => {
    let data = json.data;
    data.map((item, index) => {
      let container = document.querySelector(".name");
      let row = document.createElement("div");
      row.className = "d-flex justify-content-around name-detail";
      row.dataset.index = index;

      let dateDiv = document.createElement("div");
      dateDiv.textContent = item.date;
      dateDiv.className = "date";

      let clientDiv = document.createElement("div");
      clientDiv.textContent = item.client;
      clientDiv.className = "client";

      let numberDiv = document.createElement("div");
      numberDiv.textContent = item.number;
      numberDiv.className = "number";

      row.appendChild(dateDiv);
      row.appendChild(clientDiv);
      row.appendChild(numberDiv);
      container.appendChild(row);
    });

    let visibleRows = [];

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleRows.push(entry.target);
          } else {
            visibleRows = visibleRows.filter((row) => row !== entry.target);
          }

          visibleRows.sort((a, b) => a.dataset.index - b.dataset.index);

          visibleRows.forEach((row, index) => {
            if (index < 7) {
              let opacity = 1 - index / 7;
              row.style.opacity = opacity;
            } else {
              row.style.opacity = 1;
            }
          });
        });
      },
      { threshold: [0] }
    );

    document.querySelectorAll(".name-detail").forEach((row) => {
      observer.observe(row);
    });
  })
  .catch((error) => console.error("Error:", error));

window.onload = function () {
  var host = window.location.host;

  var pwaElement = document.querySelector(".pwa");
  var webElement = document.querySelector(".web");

  if (host.includes("pwa.snapptrip.com")) {
    if (pwaElement) {
      pwaElement.style.display = "block";
    }
    if (webElement) {
      webElement.remove();
    }
  } else {
    if (pwaElement) {
      pwaElement.remove();
    }
    if (webElement) {
      webElement.style.display = "block";
    }
  }
};
