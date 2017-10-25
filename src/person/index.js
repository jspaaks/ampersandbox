/**
 * person module exposes a [PersonModel]{@link module:person/PersonModel} and a
 * [PersonView]{@link module:person/PersonView}
 * @module person
 * @see module:person/PersonModel
 * @see module:person/PersonView
 */

let PersonModel = require("./model");
let PersonView = require("./view");

module.exports = {PersonModel, PersonView};