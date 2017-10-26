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
