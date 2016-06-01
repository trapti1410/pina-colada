var gulp = require("gulp");
var elixir = require('laravel-elixir');
var deletePath = require("del");

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

elixir(function(mix) {
    mix.version([
      "application.js",
      "application.css",
      "**/*.gif",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg"
    ], tempPath + "/" + destination);

    var paths = new elixir.GulpPaths().src(tempPath + "/" + destination).output("public/" + destination);
    deletePath.sync(paths.output.path);
    return gulp.src(paths.src.path).pipe(gulp.dest(paths.output.path))
});
