//Set the global variables with Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',us&appid=9d26a9582bd27ddd90def29c7bdd18d5';

//zip code to test = 99501
//This function gets the API Request and returns it back to the client
const getWeatherInfo = async(baseURL,newZip,apiKey)=>{
    
    const response = await fetch(baseURL+newZip+apiKey);
    
    try{
        const data = await response.json();
        return data;
    }catch(error){
        console.log("error", error);
    }
}

//Makes a POST request to the route
const postData = async (url='', data={}) =>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
    });

    try{
        const newData = await response.json();
        return newData;
    }catch(error){
        console.log("error", error);
    }
}

//Update UI function
const updateUI = async ()=>{
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Posted on ${allData.date}`;
        document.getElementById('name').innerHTML = allData.name;
        document.getElementById('temp').innerHTML = `${((allData.temp -273.15)*9/5+32).toFixed(2)} &#x2109;`;
        if(allData.content !== ""){
            document.getElementById('content').innerHTML = allData.content;
        } else{
            document.getElementById('content').innerHTML = `No entries on feelings :(`
        }
    }catch(error){
        console.log("error",error);
    }
}


/**A function will run after the 'click' event is activated
*Inside we grab the zip code that the user inputted, as well as set the date
*Run the getWeatherInfo function, grabbing the baseURL, the apiKey and the just inputted Zip number
*Afterwards, it grabs the date, temperature from the API and the user's feelings -> Posts it to the route using the postData function
*Then we update the UI
*/
document.getElementById('generate').addEventListener('click', ()=>{
    const newZip = document.getElementById("zip").value;
    let newFeeling = document.getElementById("feelings").value;

    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    getWeatherInfo(baseURL,newZip,apiKey).then((data) =>{
        postData("/",{
            date: newDate,
            name: data.name,
            temp: data.main.temp,
            content: newFeeling
        })
    }).then(updateUI());
});


