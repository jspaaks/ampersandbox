module.exports = (function () {

    var AmpersandView = require('ampersand-view');

    var template = require('fs').readFileSync(__dirname + '/template.html', 'utf8');

    var bindings = {
        'model.firstName': '.beepboop'
    };

    var PersonView = AmpersandView.extend({template, bindings});

    return PersonView;

})();
