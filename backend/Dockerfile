FROM php:8.2-fpm

# Vereisten
RUN apt-get update && apt-get install -y \
    git curl zip unzip libonig-dev libxml2-dev libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql mbstring

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# App directory
WORKDIR /var/www

# 👇 Alles in één keer kopiëren vóór composer install
COPY . .

# 🔐 Laravel dependencies installeren
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# 📦 Cache config (optioneel)
# RUN php artisan config:cache

# Start Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
