# Imagen base con soporte completo de PostgreSQL + Apache
FROM php:8.2.15-apache-bullseye

# Instalar dependencias y librerías seguras
RUN apt-get update && apt-get install -y \
    libpq-dev ca-certificates openssl \
    && docker-php-ext-install pgsql pdo_pgsql \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Variables SSL seguras
ENV PGSSLMODE=require
ENV PGSSLROOTCERT=/etc/ssl/certs/ca-certificates.crt

# Habilitar mod_rewrite
RUN a2enmod rewrite

# Copiar código
COPY . /var/www/html/
WORKDIR /var/www/html/

EXPOSE 80
CMD ["apache2-foreground"]