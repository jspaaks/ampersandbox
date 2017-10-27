/**
 * [person/view]{@linkcode module:person/view} contains the view associated with
 * a [person/model]{@linkcode module:person/model} as well as the bindings 
 * between the two.
 * @module person/view
 */
module.exports = (function () {

    "use strict";

    let AmpersandView = require("ampersand-view");

    let template = require("fs").readFileSync(__dirname + "/template.html", "utf8");

    let bindings = {
        "model.firstname": ".firstname",
        "model.lastname": {type: "innerHTML", selector: ".lastname"}
    };

    let render = function () {
        this.renderWithTemplate(this);
        return this;
    };

    let PersonView = AmpersandView.extend({template, bindings, render});

    return PersonView;

})();
