const apiKey = "638d2dee61052587cc5fddf21f014a1a";
var submit = document.getElementById("submit");
var userCity = document.getElementById("city-search");
var clear = document.getElementById("clear-history");

function submitEvent(event) {
    event.preventDefault();

    var userCityVal = userCity.value.trim();
    if (!userCityVal) {
        alert("Enter a valid city name");
    }
    else {
        userCityVal = userCityVal.toLowerCase();
        saveSearch(userCityVal);
        // searchHistory();
    }
};

function clearHistory(event) {
    event.preventDefault();
    localStorage.removeItem('city');
}


function saveSearch(userCityVal) {
   
    var localData = localStorage.getItem("city");
    if (localData === null) {
        localStorage.setItem('city', userCityVal);
       
    } 
        // localStorage.setItem('city', JSON.stringify(localData));
        // console.log(localData)
        searchCityApi(userCityVal)
        searchCityForeCastApi(userCityVal)
   };
   
    
function searchCityApi(userCityVal) {

    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userCityVal + "&appid=" + apiKey
    
    fetch(weatherUrl, {
        "method": "GET",
    })
    .then(function(response) {
        if (!response.ok) {
            alert('Something Went Wong!!!!');
            return;
        }
        return response.json();
    }).then(function(data) {
        document.getElementById('temprature').innerHTML =data.main.temp_max;
        document.getElementById('humidity').innerHTML =data.main.humidity;
        document.getElementById('wind-speed').innerHTML =data.wind.speed;
        console.log(data)
    })
};

function searchCityForeCastApi(userCityVal){

    var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCityVal + "&appid=" + apiKey

    fetch(weatherUrl, {
        "method": "GET",
    })
    .then(function(response) {
        if (!response.ok) {
            return;
        }
        return response.json();
    }).then(function(data) {
       
        document.getElementById('date1').innerHTML= data.list[0].dt_txt.split(" ")[0];
        document.getElementById('temp1').innerHTML = data.list[0].main.temp_max;
        document.getElementById('humid1').innerHTML =data.list[0].main.humidity;
        document.getElementById('wind1').innerHTML = data.list[0].wind.speed;

        document.getElementById('date2').innerHTML=data.list[1].dt_txt.split(" ")[0];
        document.getElementById('temp2').innerHTML = data.list[1].main.temp_max;
        document.getElementById('humid2').innerHTML =data.list[1].main.humidity;
        document.getElementById('wind2').innerHTML =data.list[1].wind.speed;

        document.getElementById('date3').innerHTML=data.list[2].dt_txt.split(" ")[0];
        document.getElementById('temp3').innerHTML =data.list[2].main.temp_max;
        document.getElementById('humid3').innerHTML =data.list[2].main.humidity;
        document.getElementById('wind3').innerHTML =data.list[2].wind.speed;

        document.getElementById('date4').innerHTML=data.list[3].dt_txt.split(" ")[0];
        document.getElementById('temp4').innerHTML =data.list[3].main.temp_max;
        document.getElementById('humid4').innerHTML =data.list[3].main.humidity;
        document.getElementById('wind4').innerHTML =data.list[3].wind.speed;

        document.getElementById('date5').innerHTML=data.list[4].dt_txt.split(" ")[0];
        document.getElementById('temp5').innerHTML =data.list[4].main.temp_max;
        document.getElementById('humid5').innerHTML =data.list[4].main.humidity;
        document.getElementById('wind5').innerHTML =data.list[4].wind.speed;
        
        console.log(data);

    })
};
// function searchHistory(){
//     var localData = JSON.parse(localStorage.getItem('city'));
//     var searchHistory1= document.createElement(div);
//     localData=[];
//     if(localData){
//         for(i=0; i<localData.length;i++){
//         }

//     }
   

    submit.addEventListener('click', submitEvent);
    clear.addEventListener('click', clearHistory);

    
