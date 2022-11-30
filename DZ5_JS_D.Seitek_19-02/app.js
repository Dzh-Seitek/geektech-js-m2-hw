const som = document.querySelector('#kgs');
const usd = document.querySelector('#usd');
const euro = document.querySelector('#euro');

const convert = (el, target) => {
    el.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            el === som && target === usd ? (target.value = (el.value / response.USD).toFixed(2)) : (target.value = (el.value / response.EURO).toFixed(2));
            el === euro && target === som ? (target.value = (el.value * response.EURO).toFixed(2)) : el === usd && target === som ? (target.value = (el.value * response.USD).toFixed(2)) : null;
            el === euro && target === usd ? (target.value = ((el.value * response.USD) / response.EURO).toFixed(2)) : el === usd && target === euro ? (target.value = (el.value * (response.EURO / 100)).toFixed(2)) : null;
            el.value === "" && (target.value = "")
        })
    })
}

convert(som, usd);
convert(som, euro);
convert(usd, som);
convert(euro, som);
convert(euro, usd);
convert(usd, euro);