var requests = require('requests')
const http = require('http');
const fs = require('fs');
const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempval,orgval) =>{
    let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
    temperature = temperature.replace("{%location%}", orgval.name);
    temperature = temperature.replace("{%country%}", orgval.sys.country);
    temperature = temperature.replace("{%tempStatus%}", orgval.weather[0].main);
    return temperature;
}
const server = http.createServer((req,res) =>{
    if(req.url == "/"){
     requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=70f4c5c5bd95b70711785443385a17d3")
     .on("data" , (chunk) => {
         const objData = JSON.parse(chunk);
         const arrData = [objData];
         //console.log(arrData[0].main.temp);
         const realTime = arrData.map(val => replaceVal(homeFile,val)).join("");
        res.write(realTime)
        //console.log(realTime)
     })
     .on("end", (err) => {
         if(err) return console.log("connection closed due to error")
         res.end()
         //console.log("end")

     });
    }
    
});
server.listen(3000,() =>{
    console.log("server is in port 3000");
});