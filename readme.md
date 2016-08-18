# Starter App for Quintype (Laravel)

### Setup Instructions

* Follow the prerequisites for your platform (below)
* Clone the repo and pull the libraries required. All future commands will be issued from inside this new directory.
```shell
git clone https://github.com/quintype/pina-colada.git
cd pina-colada
```
* Install all external libraries
* To install composer, run the following commands in the terminal:
```shell
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```
```shell
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
./node_modules/.bin/gulp
```

### Running the app
To get the application running, run the app as follows

```shell
php artisan serve
```

You can now visit the site at [http://localhost:8000](http://localhost:8000)

### Prerequisites

#### Windows
* Install [Git (and Git Bash)](https://git-scm.com/download/win).
* Install [XAMPP for Windows](https://www.apachefriends.org/index.html).
* Install [Composer](https://getcomposer.org/doc/00-intro.md#installation-windows).
* Install [Node and NPM](https://nodejs.org/en/). Please install Node 6+ onwards.

After installing all the above, please close and reopen all terminals (or just reboot your system). All the commands above can be run in "Git BASH", when launched as Administrator.
