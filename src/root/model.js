module.exports = (function () {

    "use strict";

    let AmpersandState = require("ampersand-state");

    let props = {
        repositories: {
            type: "array",
            required: false,
            default: undefined
        },
        person: {
            type: "object",
            required: false,
            default: undefined
        }
    };

    let RootModel = AmpersandState.extend({props});

    return RootModel;

})();
