const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8f6a25f5967926bb76f706c388e71785&query=india?units=si'
request({url: url, json: true}, (error,response) => {
    if(error){
        console.log("connect to internet")

    }else if(response.body.error){
        console.log("unable to find location")
    }
    else{
        console.log('it is currently temperature ' + response.body.current.temperature)
        console.log(response.body.current.wind_degree)
    }
})


const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2F2aXRhZ295YWwxIiwiYSI6ImNrcTIxNThqaDA1Yncyd28wZzJlNThkaTAifQ.nrpJ3zWv4KXNIbqNiU_ZHA'
request({url: url1 ,json:true},(error,response) =>{
    if(error){
        console.log("connect to wifi")
    }else if(response.body.error){
        console.log("unable to find location body")
    }
    else{
    console.log('longitude is ' +response.body.features[0].center[0] +' lattitude is ' +response.body.features[0].center[1])
}
})