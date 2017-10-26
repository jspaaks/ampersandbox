module.exports = (function () {

    "use strict";

    let AmpersandView = require("ampersand-view");
    let {PersonView} = require("../person");
    let {RepositoryView} = require("../repository");

    let subviews = {
        person: {
            constructor: PersonView,
            selector: ".person",
            waitFor: "model",
            prepareView: function (el) {
                return new this.subviews.person.constructor({
                    el: el,
                    parent: this,
                    model: this.model
                });
            }
        },
        repository: {
            constructor: RepositoryView,
            selector: ".repository",
            waitFor: "model",
            prepareView: function (el) {
                return new this.subviews.repository.constructor({
                    el: el,
                    parent: this,
                    model: this.model
                });
            }
        }
    };

    let template = require("fs").readFileSync(__dirname + "/template.html", "utf8");
    let RootView = AmpersandView.extend({template, subviews});

    return RootView;

})();
