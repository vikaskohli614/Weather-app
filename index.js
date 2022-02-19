console.log('hello weather is ok');
let weather = {
    "apikey": "9f52a7a987a09436b4e8551fdc01d143",
    fetchweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        ).then((Response) => Response.json())
            .then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "  °C";
        document.querySelector(".humidity").innerText = " Humidity :" + humidity + "  %";
        document.querySelector(".wind").innerText = "Wind speed :" + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    },

    search: function () {
        this.fetchweather(document.querySelector(".search_bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document.querySelector(".search_bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
}
);

weather.fetchweather("indore");