module.exports = (function () {

    "use strict";

    let AmpersandState = require("ampersand-state");

    let props = {
        response: {
            type: "array",
            required: false,
            default: undefined
        }
    };

    let RootModel = AmpersandState.extend({props});

    return RootModel;

})();
