# Starter App for Quintype (Laravel)

Clone the repo and pull the libraries required.
`cd` into the the directory and run

```composer install```
which will install dependencies to the latest version according to composer.json

```npm install```
to install javascript dependencies.

Generate a key for your environment by running,

```php artisan key:generate```

This will update your `.env` file with a key.

### Running the app
To get the application running,

```php artisan serve```

You can now visit the site at [http://localhost:8000](http://localhost:8000)

To compile `css` and `js` you need to run

```gulp```

for gulp to compile your SCSS as you code, you can run `gulp watch`


