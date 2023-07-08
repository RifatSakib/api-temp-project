const key = `a237b95dc1bf3a3af86b2fe4a0319294`;

const searchTemp =() =>{

    const city = document.getElementById("city_name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

fetch(url)
    .then(res => res.json())
    .then (data => {
console.log(data);
searchTemperature(data);

    })

}


const searchTemperature = temp => {


    document.getElementById("city").innerText= temp.name;
    document.getElementById("temp").innerText= temp.main.temp;
    document.getElementById("condition").innerText= temp.weather[0].main;
    
    // console.log(temp.name);
    // console.log(temp.main.temp);
    // console.log(temp.weather[0].main);

const url1 = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
const setIcon = document.getElementById("icon");
setIcon.setAttribute('src', url1);
}



