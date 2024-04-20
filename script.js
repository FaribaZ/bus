let data = [
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
  { date: "۱۴۰۳/۰۲/۰۱", client: "فریبا زارع", number: "۲۷۹۵***۰۹۱۳" },
];

let container = document.querySelector(".name");

data.map((item, index) => {
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

document.addEventListener("DOMContentLoaded", function () {
  var currentURL = window.location.href;

  if (currentURL.startsWith("https://pwa.snapptrip.com")) {
    document
      .querySelector(".link")
      .setAttribute(
        "href",
        "https://pwa.snapptrip.com/bus?utm_source=jek&utm_medium=landing&utm_campaign=lucky-bus&utm_term=april-2024"
      );
  } else {
    document
      .querySelector(".link")
      .setAttribute(
        "href",
        "https://www.snapptrip.com/bus?utm_source=web&utm_medium=landing&utm_campaign=lucky-bus&utm_term=april-2024"
      );
  }
});
