# ampersandbox
testing out ampersand


## build tasks

Run with ``npm`` or ``yarn``, e.g. ``yarn run build``.

- ``build``: generates a distribution in``dist/`` directory, open dist/index.html in a browser to view.
- ``jsdoc``: should generate the JSDoc documentation.
- ``jshint``: run the code style checker.
- ``gh-pages``: copies the files for the app to under ``docs/app`` so they can be hosted at GitHub pages.

## GitHub pages

- [api docs](https://jspaaks.github.io/ampersandbox/api/0.0.0)
- [minimal app](https://jspaaks.github.io/ampersandbox/app/)

## Todo

- model & view a list using a collection 
- figure out event binding
- consider using webpack for bundling, since it adds require'ing of template 
  files without the current ``brfs`` workaround.

## Helpful example 

Found this example here https://github.com/AmpersandJS/ampersand-view/issues/61.

```javascript
var View = require('ampersand-view');
var AmpersandModel = require('ampersand-model');
var AmpersandCollection = require('ampersand-collection');

var domready = require('domready');

// VIEWS
var ConsoleView = View.extend({
    template: '\
        <div data-hook="console">\
            &gt; <span data-hook="command"></span>\
        </div>',
    bindings: {
        'model.name': {
            type: 'text',
            hook: 'command'
        }
    }
});
var LogView = View.extend({
    template: '\
        <div data-hook="log">\
            <h2>Log</h2>\
            <ul data-hook="commands"></ul>\
        </div>',
    render: function() {
        this.renderWithTemplate(this);
        this.renderCollection(this.collection, LogItemView, this.queryByHook('commands'));
        return this;
    }
});
var LogItemView = View.extend({
    template: '<li data-hook="command"></li>',
    bindings: {
        'model.name': {
            type: 'text',
            hook: 'command'
        }
    }
})
var MainView = View.extend({
    template: '\
        <body>\
            <h1>Hoodie Console</h1>\
            <div data-hook="console">\
            </div>\
            <div data-hook="log">\
            </div>\
        </body>',
    autoRender: true,

    subviews: {
      input: {
        hook: 'console',
        waitFor: 'model',
        constructor: ConsoleView,
        prepareView: function (el) {
            return new this.subviews.input.constructor({
                el: el,
                parent: this,
                model: this.model
            });
        }
      },
      log: {
        hook: 'log',
        waitFor: 'collection',
        constructor: LogView,
        prepareView: function (el) {
            return new this.subviews.log.constructor({
                el: el,
                parent: this,
                collection: this.collection
            });
        }
      }
    },
});

// MODELS
var Command = AmpersandModel.extend({
    props: {
        name: ['string', true, '']
    }
});
var CommandCollection = AmpersandCollection.extend({
    model: Command
});

var app = window.app = {};
domready(function () {
    app.command = new Command({name: 'hoodie.'});
    app.commands = new CommandCollection([{
        name: 'hoodie.account.signUp("foo", "bar")'
    },{
        name: 'hoodie.store.findAll()'
    },{
        name: 'hoodie.id()'
    }]);
    self.view = new MainView({
        el: document.body,
        model: app.command,
        collection: app.commands
    });
});
```