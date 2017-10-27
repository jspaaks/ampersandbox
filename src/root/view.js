/**
 * [root/view]{@linkcode module:root/view} contains the view associated with a
 * [root/model]{@linkcode module:root/model}. Most importantly, it defines two 
 * subviews, [person/view]{@linkcode module:person/view} and 
 * [repository/view]{@linkcode module:repository/view}.
 * @module root/view
 */
module.exports = (function () {

    "use strict";

    let AmpersandView = require("ampersand-view");
    let PersonView = require("../person/view");
    let RepositoryView = require("../repository/view");

    let template = require("fs").readFileSync(__dirname + "/template.html", "utf8");
    let subviews = {
        person: {
            constructor: PersonView,
            selector: ".person",
            waitFor: "model.persons",
            prepareView: function (el) {
                return new this.subviews.person.constructor({
                    el: el,
                    parent: this,
                    model: this.model.persons.at(0)
                });
            }
        },
        repository: {
            constructor: RepositoryView,
            selector: ".repository",
            waitFor: "model.repositories",
            prepareView: function (el) {
                return new this.subviews.repository.constructor({
                    el: el,
                    parent: this,
                    model: this.model.repositories.at(0)
                });
            }
        }
    };
    let RootView = AmpersandView.extend({template, subviews});

    return RootView;

})();
