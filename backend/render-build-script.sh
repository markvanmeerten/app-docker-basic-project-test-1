#!/bin/sh
set -e

echo "👉 [render-build.sh] Start script"

echo "🔧 [render-build.sh] Config cache"
php artisan config:cache

echo "📦 [render-build.sh] Running migrations"
php artisan migrate --force

echo "🚀 [render-build.sh] Starting Laravel server"
php artisan serve --host=0.0.0.0 --port=8000