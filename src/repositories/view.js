module.exports = (function () {

    "use strict";

    let AmpersandView = require("ampersand-view");
    let RepositoryView = require("../repository/view");

    let template = require("fs").readFileSync(__dirname + "/template.html", "utf8");

    let render = function () {
        this.renderWithTemplate();
        let selector = this.el.querySelector('.repository');
        this.renderCollection(this.model.repositories, RepositoryView, selector);
        return this;
    };

    let RepositoriesView = AmpersandView.extend({template, render});

    return RepositoriesView;

})();
