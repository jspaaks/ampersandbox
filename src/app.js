var domready = require('domready');

domready(function () {

    var {MainModel, MainView} = require('./main');

    var mainview = new MainView({
        el: document.getElementById('root')
    });

});
