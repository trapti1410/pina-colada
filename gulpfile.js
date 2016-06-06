var gulp = require("gulp");
var elixir = require('laravel-elixir');
var shell = require("gulp-shell")

var destination = "pina-colada/assets";
var tempPath = "tmp/asset";

elixir.config.publicPath = tempPath;

elixir(function(mix) {
    mix.sass('application.scss', tempPath + "/application.css");
});

elixir(function(mix) {
    mix.browserify("application.js", tempPath + "/application.js");
});

elixir(function(mix) {
    mix.copy("resources/assets/images", tempPath);
});


gulp.task("copy-public", function() {
    gulp.src("")
        .pipe(shell("rm -rf public/" + destination))
        .pipe(shell("mkdir -p public/" + destination))
        .pipe(shell("rsync -a tmp/asset/" + destination  + "/ public/" + destination));
});

elixir(function(mix) {
    mix.version([
      "application.js",
      "application.css",
      "**/*.gif",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg"
    ], tempPath + "/" + destination);

   mix.task("copy-public");
});
