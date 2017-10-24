/**
 * person module exposes a PersonModel and a PersonView
 * @module person
 * @see module:person/PersonModel
 * @see module:person/PersonView
 */
module.exports = (function () {

    var PersonModel = require('./model');
    var PersonView = require('./view');

    return {PersonModel, PersonView};

})();
