const router = require("express").Router();
// Models
const User = require('../models/User');
const puppeteer = require('puppeteer');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
// Modules
const passport = require("passport");
const {
    renderSignUpForm,
    singup,
    renderSigninForm,
    // signin,
    logout
} = require("../controllers/users.controller");

// Routes
router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

// router.post("/users/signin", signin);



///////////////////////////////7

router.post('/users/signin',
    passport.authenticate('local'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        const n1 = req.user.n1
        const n2 = req.user.n2
        const numeros = { n1: n1, n2: n2 }
        console.log("userrr", { numeros })
            // res.json(numeros)
        res.render("users/signin", { numeros })
            // global.document = new JSDOM(html).window.document;
            // var id = $(this).data(numeros.n1);
            // global.document.getElementById('bodymodal').innerHTML =
            // ' <table class="table table-bordered"><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr><tbody><tr><td><button type="button" class="btn btn-outline-warning">{{numeros.n1}}</button></td><td><button type="button" class="btn btn-outline-warning">{{numeros.n2}}</button></td><td><button type="button" class="btn btn-outline-warning">23</button></td></tr><tr><td><button type="button" class="btn btn-outline-warning">51</button></td><td><button type="button" class="btn btn-outline-warning">23</button></td><td><button type="button" class="btn btn-outline-warning">35</button></td></tr><tr><td><button type="button" class="btn btn-outline-warning">25</button></td><td><button type="button" class="btn btn-outline-warning">67</button></td><td><button type="button" class="btn btn-outline-warning">65</button></td></tr></tbody></table>' + xhr.responseText;
            // $.ajax({
            //     url: "use.routes.js",
            //     method: "GET",
            //     data: { id: id },
            //     dataType: "html",
            //     success: function(data) {
            //         console.log("jjjjjjjjjjjj", data)
            //             // $('#mi_modal').html(data);
            //     }
            // });
            // var nom = n1;
            // var apel = n2;
            // /*Guardando los datos en el LocalStorage*/
            // localStorage.setItem("num1", nom);
            // localStorage.setItem("num2", apel);
            // var nombre = localStorage.getItem("num1");
            // var apellido = localStorage.getItem("num2");
            // console.log("------------", nombre)


        // global.document.getElementById("1").innerHTML = nombre

    });


///////////////////////////////////////



router.get("/users/logout", logout);

module.exports = router;