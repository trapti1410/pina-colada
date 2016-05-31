var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');
});

elixir(function(mix) {
    mix.version(["css/app.css", "images"], "public/pina-colada/assets");
});
