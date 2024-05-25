fetch(
  "https://cdnsnapptrip.com/images/market//Uploads/snapptrip-ads/images/Landing403/luckybus.json"
)
  .then((response) => response.json())
  .then((json) => {
    let data = json.data;
    data.map((item, index) => {
      let container = document.querySelector(".name");
      let row = document.createElement("div");
      row.className = "d-flex justify-content-between name-detail";
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
            let opacity = 1 - index / 7;
            row.style.opacity = opacity > 0 ? opacity : 0.15;
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

  var link = document.querySelector("#dynamic-link");

  if (host.includes("pwa.snapptrip.com")) {
    link.href =
      "https://pwa.snapptrip.com/bus?utm_source=jek&utm_medium=landing&utm_campaign=lucky-bus&utm_term=april-2024";
  } else {
    link.href =
      "https://www.snapptrip.com/bus?utm_source=web&utm_medium=landing&utm_campaign=lucky-bus&utm_term=april-2024";
  }

  var gtmHead = document.getElementById("gtm-head");
  var gtmBody = document.getElementById("gtm-body");

  if (host.includes("www.snapptrip.com")) {
    gtmHead.innerHTML =
      "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MT54VMN');";
    gtmBody.innerHTML =
      '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MT54VMN" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
  } else if (host.includes("pwa.snapptrip.com")) {
    gtmHead.innerHTML =
      "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P8WGVRK');";
    gtmBody.innerHTML =
      '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8WGVRK" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
  }
};
