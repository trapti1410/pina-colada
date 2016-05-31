var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');
});

elixir(function(mix) {
    mix.browserify("app.js");
});

elixir(function(mix) {
    mix.version(["js/app.js", "css/app.css", "images"], "public/pina-colada/assets");
});
