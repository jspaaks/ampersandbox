module.exports = (function () {

    var AmpersandState = require('ampersand-state');

    var personProps = {
        firstName: "string",
        lastName: "string"
    };

    var Person = AmpersandState.extend({props: personProps});

    return Person;

})();
