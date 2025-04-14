FROM php:8.2-fpm

# Vereisten installeren
RUN apt-get update && apt-get install -y \
    git curl zip unzip libonig-dev libxml2-dev libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql mbstring

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Werkmap instellen
WORKDIR /var/www

# App kopiëren
COPY . .

# Composer dependencies installeren
RUN composer install

# Laravel starten
CMD php artisan serve --host=0.0.0.0 --port=8000
