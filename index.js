const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended:true}));


//mongodb+srv://m001-student:<password>@cluster0.dajnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//m001-mongodb-basics

mongoose.connect("mongodb+srv://m001-student:m001-mongodb-basics@cluster0.dajnq.mongodb.net/NodeProject3?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    console.log("MongoDB connected!")
})


app.use(express.static("public"));

app.use("/api", require("./routes/api"));

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});


app.listen(PORT, function() {
    console.log("Server is running!")
});