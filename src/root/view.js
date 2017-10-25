module.exports = (function () {

    "use strict";

    let AmpersandView = require("ampersand-view");


    let RootView = AmpersandView.extend({
        template: require("fs").readFileSync(__dirname + "/template.html", "utf8"),
        render: function () {
            this.renderWithTemplate();
            let {PersonView, PersonModel} = require("../person");
            let personmodel = new PersonModel({firstName: "John", lastName: "Smith"});
            let personview = new PersonView(personmodel);
            this.renderSubview(personview, ".personname");
            return this;
        }
    });

    return RootView;

})();
