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

- undefined v null in JavaScript
- inheritance AbstractRepository -> GitHubRepositoy and BitbucketRepository or something. Relevant code snippet:

    ``` javascript
    # from https://github.com/AmpersandJS/ampersand-view#initialize-new-ampersandviewoptions
    var SuperheroRowView = PersonRowView.extend({
      initialize: function () {
        PersonRowView.prototype.initialize.apply(this, arguments);
        doSomeOtherStuffHere();
      })
    });
    ```

- figure out event binding
- routing
- write some tests, add testing framework (jest maybe? something that integrates
  with react if we do decide to switch to that)
- consider using webpack for bundling, since it adds require'ing of template 
  files without the current ``brfs`` workaround.
- after this repo includes all of the patterns used by https://github.com/nlesc/SPOT:

    - nested views
    - rendering collections
    - inheritance
    - event binding
    - routing

  make an inventory of what needs to be done for a refactor, given that we

    - keep Ampersand
    - replace Ampersand with React.


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