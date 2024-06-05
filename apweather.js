let idapp = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  appid: "9427aa481174ba43b6e1dda865f1be63",
};
let input = document.querySelector("input");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let contury = input.value;
    fetch(`${idapp.url}${contury}&appid=${idapp.appid}`)
      .then((res) => res.json())
      .then((data) => {
        showData(data);
      })
      .catch((error) => {
        erordun(error);
      });
    input.value = "";
  }
});
function showData(data) {
  let cityelm = document.querySelector(".city");
  cityelm.innerHTML = `${data.name} , ${data.sys.country}`;

  let tempelm = document.querySelector(".temp");
  tempelm.innerHTML = ` ${Math.floor(data.main.temp - 273.15)}°`;

  let skyelm = document.querySelector(".skyname");
  skyelm.innerHTML = `${data.weather[0].main}`;

  let HMelem = document.querySelector(".MinMaxTemp");
  HMelem.innerHTML = `${Math.floor(
    data.main.temp_max - 273.15
  )}° / ${Math.floor(data.main.temp_min - 273.15)}°`;
  console.log(data);
}
function erordun(error) {
  alert(`is contury not avalible`);
  document.querySelector(".city").innerHTML = "contury" + error;
}
input.addEventListener("focus", () => {
  input.placeholder = "";
});
input.addEventListener("blur", () => {
  input.placeholder = "City..";
});

// کار با چت جی پی تی میکردم
//
// document.addEventListener("DOMContentLoaded", function () {
//   if (navigator.geolocation) {
//     // تابع برای دریافت و نمایش نام شهر
//     function updateCityName() {
//       navigator.geolocation.getCurrentPosition((position) => {
//         var latitude = position.coords.latitude;
//         var longitude = position.coords.longitude;
//         getCityName(latitude, longitude);
//       });
//     }

//     // بلافاصله پس از بارگذاری صفحه یک بار نام شهر را بگیرید
//     updateCityName();

//     // تنظیم یک تایمر برای به‌روزرسانی نام شهر هر 5 دقیقه یک بار
//     setInterval(updateCityName, 300000);
//   } else {
//     console.log("مرورگر شما از موقعیت مکانی پشتیبانی نمی‌کند.");
//   }
// });

// function getCityName(latitude, longitude) {
//   var url =
//     "https://nominatim.openstreetmap.org/reverse?lat=" +
//     latitude +
//     "&lon=" +
//     longitude +
//     "&format=json";

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       var cityName = data.address.city;
//       alert("نام شهر: " + cityName);
//     })
//     .catch((error) => console.log("خطا در دریافت اطلاعات: " + error));
// }
//
//
//
//
//
