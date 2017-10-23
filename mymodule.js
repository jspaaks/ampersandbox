module.exports = (function () {

    var someMethod = function () {
        return 42;
    };

    var someMember = 'thestring';

    var somePrivateMember = 'not visible';

    return {
        someMethod,
        someMember
    };

})();
