# Imagen base: PHP 8.2 con Apache
FROM php:8.2-apache

# Instalar dependencias necesarias para PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pgsql pdo_pgsql

# Habilitar mod_rewrite
RUN a2enmod rewrite

# Copiar los archivos del proyecto al contenedor
COPY . /var/www/html/

# Ajustar permisos
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Directorio de trabajo
WORKDIR /var/www/html/

# Exponer el puerto 80
EXPOSE 80

# Iniciar Apache
CMD ["apache2-foreground"]