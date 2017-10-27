let domready = require("domready");

domready(function () {

    "use strict";

    let RootView = require("./root/view");
    let RootModel = require("./root/model");

    // get the data as Ampersand collections
    let {repositories, persons} = require("./data");

    // the app will have a root view rendered in the root element that's already 
    // in index.html
    let rootview = new RootView({
        el: document.getElementById("root"),
        model: new RootModel({repositories, persons})
    });

    // for some reason you still have to explicitly state this
    rootview.render();

    window.setTimeout(() => {
        rootview.model.persons.at(0).firstname = "Fuzzy";
    }, 3000);

});
