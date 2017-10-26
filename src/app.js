let domready = require("domready");

domready(function () {

    "use strict";

    let {RootModel, RootView} = require("./root");

    let person = {firstname: "John", lastname: "Smith"};
    let repositories  = [{id: 156568, name: "repo1", language: "JavaScript"},
                         {id: 264673, name: "repo2", language: "Shell"},
                         {id: 364534, name: "repo3", language: "Python"}];

    let rootmodel = new RootModel({repositories, person});

    let rootview = new RootView({
        el: document.getElementById("root"),
        model: rootmodel
    });

    rootview.render();

    window.setTimeout(()=>{
        console.log("timed out");
        // need to change the whole object, not just 'firstname' (probably 
        // because Ampersand's updates are based on object references)
        rootmodel.person = {firstname:"Michael", lastname: "Smith"};
    }, 3000);
    
});
