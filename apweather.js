let idapp = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  appid: "9427aa481174ba43b6e1dda865f1be63",
};
let input = document.querySelector("input");

let Temp = document.getElementsByClassName("temp");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let contury = input.value;
    fetch(`${idapp.url}${contury}&appid=${idapp.appid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
  HMelem.innerHTML = `H: ${Math.floor(data.main.temp_max - 273.15)}°
    , L: ${Math.floor(data.main.temp_min - 273.15)}°`;
}
function erordun(error) {
  alert(`is contury not avalible`);
  document.querySelector(".city").innerHTML = "contury";
}
