/**
 * [repository/view]{@linkcode module:repository/view} contains the view
 * associated with a [repository/model]{@linkcode module:repository/model} as
 * well as the bindings between the two.
 * @module repository/view
 */
module.exports = (function () {

    "use strict";

    let AmpersandView = require("ampersand-view");

    let template = require("fs").readFileSync(__dirname + "/template.html", "utf8");

    let bindings = {
        "model.repositories[0].id": {
            type: "text",
            selector: ".id"
        }
    };

    let RepositoryView = AmpersandView.extend({template, bindings});

    return RepositoryView;

})();
