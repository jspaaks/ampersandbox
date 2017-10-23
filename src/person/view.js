module.exports = (function () {

    var template = require('fs').readFileSync(__dirname + '/template.html', 'utf8');
    var AmpersandView = require('ampersand-view');

    var PersonView = AmpersandView.extend({template});

    return PersonView;

})();
