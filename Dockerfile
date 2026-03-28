# Mar Exclusive Yachts: static HTML + Tailwind build + PHP (contact form)
FROM node:20-alpine AS css
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY css/input.css ./css/
RUN npm run build:css

FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction

FROM php:8.3-apache
WORKDIR /var/www/html
RUN a2enmod rewrite headers
COPY . .
COPY --from=css /app/css/tailwind.css ./css/tailwind.css
COPY --from=vendor /app/vendor ./vendor
EXPOSE 80
CMD ["apache2-foreground"]
