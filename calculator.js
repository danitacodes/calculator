const express = require('express');


const app = express();
app.use(express.urlencoded({extended: true}))

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
})

app.post("/", function(request, response){
var num1 = Number(request.body.num1);
var num2 = Number(request.body.num2);

var result = num1 + num2;

    response.send("The result is " + result);
})

app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/bmicalculator", function(request, response){
    var weight = parseFloat(request.body.weight);
    var height = parseFloat(request.body.height);

    var bmi = weight / (height * height);

    response.send("Your BMI is " + bmi);
})

app.listen(3000, function(){
    console.log('Server started on port 3000');
});