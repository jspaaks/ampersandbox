module.exports = (function () {

    var PersonModel = require('./model');
    var PersonView = require('./view');
    var PersonTemplate = require('fs').readFileSync(__dirname + '/template.html', 'utf8');

    return {PersonModel, PersonView, PersonTemplate};

})();
