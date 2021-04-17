const express = require("express");
const router = express.Router();
const Music = require("../models/music");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

router.get("/getall", function(req, res, next){
    Music.find({}).then(function(music){
        res.send(music);
    }).catch(next);
});

router.post("/add", function(req, res, next){
    Music.create(req.body.title).then(function(music){
        res.send(music)
    }).catch(next)
    });


router.put("/update/:id", function (req, res, next){
    Music.findOneAndUpdate({_id: req.params.id}, req.body).then(function(music){    
        Music.findOne({_id: req.params.id}).then(function(music){
            res.send(music)
        })
    })
});

router.delete("/delete/:id", function(req, res, next){
    Music.findOneAndDelete({_id: req.params.id}).then(function(music){
        res.send(music)
    })
});

module.exports = router;