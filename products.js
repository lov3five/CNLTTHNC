var express = require('express');
var router = express.Router();
var fs = require('fs');

var obj;


router.get('/', function (req, res) {
    //res.send('It is products.js!!!');
    fs.readFile('./products.json','utf8' , function (err, data) {
        obj = JSON.parse(data);
        res.send(obj);
        return res.end();
    });
})

/* router.get('/:masanpham)', function (req, res) {
    var currProduct = obj.filter(function (movie) {
        if (obj.masanpham == req.params.masanpham) {
            return true;
        }
    });

    if (currProduct.length == 1) {
        res.json(currProduct[0])
    } else {
        res.status(404);  //Set status to 404 as movie was not found
        res.json({ message: "Not Found" });
    }
});

router.post('/', function (req, res) {
    var newId = movies[movies.length - 1].id + 1;
    movies.push({
        id: newId,
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating
    });
    res.json({ message: "New movie created.", location: "/movies/" + newId });
});

router.put('/:id', function (req, res) {
    //Check if all fields are provided and are valid:
    if (!req.body.name ||
        !req.body.year.toString().match(/^[0-9]{4}$/g) ||
        !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
        !req.params.id.toString().match(/^[0-9]{3,}$/g)) {
        res.status(400);
        res.json({ message: "Bad Request" });
    } else {
        //Gets us the index of movie with given id.
        var updateIndex = movies.map(function (movie) {
            return movie.id;
        }).indexOf(parseInt(req.params.id));

        if (updateIndex === -1) {
            //Movie not found, create new
            movies.push({
                id: req.params.id,
                name: req.body.name,
                year: req.body.year,
                rating: req.body.rating
            });
            res.json({
                message: "New movie created.", location: "/movies/" + req.params.id
            });
        } else {
            //Update existing movie
            movies[updateIndex] = {
                id: req.params.id,
                name: req.body.name,
                year: req.body.year,
                rating: req.body.rating
            };
            res.json({
                message: "Movie id " + req.params.id + " updated.",
                location: "/movies/" + req.params.id
            });
        }
    }
});

router.delete('/:id', function (req, res) {
    var removeIndex = movies.map(function (movie) {
        return movie.id;
    }).indexOf(req.params.id); //Gets us the index of movie with given id.


    movies.splice(removeIndex, 1);
    res.send({ message: "Movie id " + req.params.id + " removed." });

}); */
module.exports = router;