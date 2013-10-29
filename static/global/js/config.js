requirejs.config({
  baseUrl: '../js',
  paths: {
    jquery: 'vendor/jquery/jquery',
    jqueryui: 'vendor/jquery-ui/ui/jquery-ui',
    ember: 'vendor/ember',
    emberdata: 'vendor/data',
    handlebars: 'vendor/handlebars',
    globalize: 'vendor/globalize',
    emberdatadrf2adapter: 'vendor/ember-data-drf2-adapter',
    bootstrap: 'vendor/bootstrap',
    emberbootstrap: 'vendor/ember-bootstrap',
    emberradiobutton: 'vendor/ember-radio-button',
    bluebottle: 'bluebottle',
  },
  shim: {
    jqueryui: ['jquery'],
    ember: {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    },
    bluebottle: {
      deps: ['ember', '/static/assets/bluebottle/accounts/router_config.js'],
      exports: 'App'
    }
  }
});
debugger
requirejs(["main"]);