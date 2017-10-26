let domready = require("domready");

domready(function () {

    "use strict";

    let {RootModel, RootView} = require("./root");

    let jsondata  = [{id: 156568, name: "repo1", language: "JavaScript"},
                     {id: 264673, name: "repo2", language: "Shell"},
                     {id: 364534, name: "repo3", language: "Python"}];

    let rootmodel = new RootModel({response: jsondata});

    let rootview = new RootView({
        el: document.getElementById("root"),
        model: rootmodel
    });

    rootview.render();

});

