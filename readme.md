# Starter App for Quintype (Laravel)

### Setup Instructions

* Follow the prerequisites for your platform (below)
* Clone the repo and pull the libraries required.
```shell
git clone https://github.com/quintype/pina-colada.git
```
* Change into the newly cloned directory, and install external libraries
```shell
cd pina-colada
composer install # Install PHP Libraries
npm install # Install Javascript dependencies
```

* Create an environment file, and a secret key for your local machine
```shell
cp .env.example .env
php artisan key:generate
```

### Compiling assets
In order to compile assets (javascripts and CSS), you will need to run gulp.
```shell
gulp
```

You can also run gulp in watch mode to automatically update JS and CSS as you make changes.
```shell
gulp watch
```

### Running the app
To get the application running, run the app as follows

```shell
php artisan serve
```

You can now visit the site at [http://localhost:8000](http://localhost:8000)

### Prerequisites on Windows

* Install [Git (and Git Bash)](https://git-scm.com/download/win).
* Install [XAMPP for Windows](https://www.apachefriends.org/index.html).
* Install [Composer](https://getcomposer.org/doc/00-intro.md#installation-windows).
