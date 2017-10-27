let AmpersandCollection = require("ampersand-collection");

module.exports = (function () {

    "use strict";

    let Repository = require("../repository/model");

    return AmpersandCollection.extend({model: Repository});
    
})();
