let domready = require("domready");

domready(function () {

    "use strict";

    let RootModel = require("./root/model");
    let RootView = require("./root/view");

    // make up some data
    let person = {firstname: "John", lastname: "Smith"};
    let repositories  = [{id: 156568, name: "repo1", language: "JavaScript"},
                         {id: 264673, name: "repo2", language: "Shell"},
                         {id: 364534, name: "repo3", language: "Python"}];

    // the app will have a root view rendered in the root element that's already 
    // in index.html
    let rootview = new RootView({
        el: document.getElementById("root"),
        model: new RootModel({repositories, person})
    });

    // for some reason you still have to explicitly state this
    rootview.render();

    // this is a check to see if changes to the model propagate all the way down
    // to the dom
    window.setTimeout(()=>{
        console.log("timed out");
        // need to change the whole object, not just 'firstname' (probably 
        // because Ampersand's updates are based on object references, not the 
        // content of objects themselves)
        rootview.model.person = {firstname:"Michael", lastname: "Smith"};
    }, 3000);
    
});
