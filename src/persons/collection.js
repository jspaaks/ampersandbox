let AmpersandCollection = require("ampersand-collection");

module.exports = (function () {

    "use strict";

    let Person = require("../person/model");

    return AmpersandCollection.extend({model: Person});
    
})();
