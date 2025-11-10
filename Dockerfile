# Imagen base: PHP 8.2 con Apache
FROM php:8.2-apache

# Instalar dependencias y soporte PostgreSQL + SSL actualizado
RUN apt-get update && apt-get install -y \
    libpq-dev \
    ca-certificates \
    openssl \
    && docker-php-ext-install pgsql pdo_pgsql \
    && rm -rf /var/lib/apt/lists/*

# Habilitar mod_rewrite
RUN a2enmod rewrite

# Copiar proyecto al contenedor
COPY . /var/www/html/

# Establecer directorio de trabajo
WORKDIR /var/www/html/

# Exponer puerto 80
EXPOSE 80

# Iniciar Apache
CMD ["apache2-foreground"]