# Imagen base: PHP 8.2 con Apache
FROM php:8.2-apache

# Instalar dependencias y controladores para SQL Server
RUN apt-get update && apt-get install -y \
    gnupg2 apt-transport-https unixodbc-dev curl && \
    curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
    curl https://packages.microsoft.com/config/debian/12/prod.list > /etc/apt/sources.list.d/mssql-release.list && \
    apt-get update && ACCEPT_EULA=Y apt-get install -y msodbcsql18 mssql-tools18 && \
    pecl install sqlsrv pdo_sqlsrv && \
    docker-php-ext-enable sqlsrv pdo_sqlsrv

# Habilitar mod_rewrite (por si se usa en PHP)
RUN a2enmod rewrite

# Copiar todo el proyecto dentro del contenedor
COPY . /var/www/html/

# Establecer directorio de trabajo
WORKDIR /var/www/html/

# Exponer el puerto 80 (para Apache)
EXPOSE 80

# Comando de inicio
CMD ["apache2-foreground"]