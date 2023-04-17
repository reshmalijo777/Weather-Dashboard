const apiKey = "638d2dee61052587cc5fddf21f014a1a";
var submit = document.getElementById("submit");
var userCity = document.getElementById("city-search");
var clear = document.getElementById("clear-history");

function submitEvent(event){
    event.preventDefault();

    var userCityVal = userCity.value.trim();
     if(!userCityVal){
        alert("Enter a valid city name");
     }
     else{
        userCityVal= userCityVal.toLowerCase();
        saveSearch(userCityVal);
     }
};
    
    function clearHistory(event){
        event.preventDefault();
        localStorage.removeItem('city');
    }


    function saveSearch(userCityVal){

        var localstorage=[] 
        localstorage= JSON.parse(localStorage.getItem("city"));
        if (localstorage===null){

            localstorage.push(userCityVal);
        }
        localstorage.setItem('city',JSON.stringify(localstorage));
};

    function searchCityApi(userCityVal){

        var weatherUrl="https://api.openweathermap.org/data/2.5/weather?q=" + userCityVal + "&appid=" + apiKey
        
        fetch(weatherUrl)
        .then(function(response){
            
            response.JSON()
    
        })
        .then(function(data){

            displayForcast(data);
            console.log(data);
        })

    };
    submit.addEventListener('click', submitEvent);
    clear.addEventListener('click', clearHistory);

    
