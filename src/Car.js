module.exports = (function () {

    var AmpersandState = require('ampersand-state');

    var props = {
        make: "string",
        model: "string",
        year: "number",
        powerKiloWatts: "number"
    };

    var derived = {
        powerHP: {
            deps: ["powerKiloWatts"],
            fn: function () {
                var kwToHP = 1.34102;
                return (this.powerKiloWatts * kwToHP).toString() + " HP";
            }
        }
    };

    var Car = AmpersandState.extend({
        props, 
        derived
    });

    return Car;

})();
