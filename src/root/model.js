/**
 * [root/model]{@link module:root/model} contains the data that the root view 
 * watches
 * @module root/model
 */
module.exports = (function () {

    "use strict";

    let AmpersandState = require("ampersand-state");
    let PersonsCollection = require("../persons/collection");
    let RepositoriesCollection = require("../repositories/collection");

    let collections = {
        persons: PersonsCollection,
        repositories: RepositoriesCollection
    };

    let RootModel = AmpersandState.extend({collections});

    return RootModel;

})();
