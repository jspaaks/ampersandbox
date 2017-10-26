module.exports = (function () {

    "use strict";

    let AmpersandView = require("ampersand-view");
    let {PersonView, PersonModel} = require("../person");
    let {RepositoryView} = require("../repository");
    // let prepareView = function (el) {
    //     return new this.subviews.person.constructor({
    //         el: el,
    //         parent: this,
    //         model: this.model
    //     })
    // }

    let subviews = {
        person: {
            constructor: PersonView,
            selector: ".person",
            waitFor: "model",
            model: new PersonModel({firstname: "John", lastname: "Smith"})
        },
        repository: {
            constructor: RepositoryView,
            selector: ".repository",
            waitFor: "model"
        }
    };

    let template = require("fs").readFileSync(__dirname + "/template.html", "utf8");
    let RootView = AmpersandView.extend({template, subviews});

    return RootView;

})();
