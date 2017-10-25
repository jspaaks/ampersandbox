/**
 * PersonView contains the view associated with a PersonModel as well as the
 * bindings between the two.
 * @module person/PersonView
 */
module.exports = (function () {

    "use strict";

    let AmpersandView = require("ampersand-view");

    let template = require("fs").readFileSync(__dirname + "/template.html", "utf8");

    let bindings = {
        "model.firstName": {type: "innerHTML", selector: ".person"}
    };

    let PersonView = AmpersandView.extend({template, bindings});

    return PersonView;

})();
