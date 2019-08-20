let express=require('express');

let app=express();


app.get("/", function(req, res){

    res.send("Gday budddddddy");



});

app.listen(8080);
 