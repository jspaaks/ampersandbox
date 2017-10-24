/**
 * PersonView contains the view associated with a PersonModel as well as the
 * bindings between the two.
 * @module person/PersonView
 */
module.exports = (function () {

    var AmpersandView = require('ampersand-view');

    var template = require('fs').readFileSync(__dirname + '/template.html', 'utf8');

    var bindings = {
        'model.firstName': {type: 'innerHTML', selector: '#root'}
    };

    var PersonView = AmpersandView.extend({template, bindings});

    return PersonView;

})();
