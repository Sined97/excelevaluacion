# Imagen base: PHP 8.2 con Apache
FROM php:8.2-apache

# Instalar dependencias y controladores para SQL Server (Debian 12)
RUN apt-get update && apt-get install -y \
    curl gnupg2 apt-transport-https unixodbc-dev lsb-release ca-certificates && \
    mkdir -p /usr/share/man/man1 && \
    # Importar la clave de Microsoft (sin apt-key)
    curl -sSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft-prod.gpg && \
    # Agregar el repositorio correcto
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/debian/12/prod bookworm main" \
        > /etc/apt/sources.list.d/mssql-release.list && \
    apt-get update && \
    ACCEPT_EULA=Y apt-get install -y msodbcsql18 mssql-tools18 && \
    pecl install sqlsrv pdo_sqlsrv && \
    docker-php-ext-enable sqlsrv pdo_sqlsrv && \
    rm -rf /var/lib/apt/lists/*

# Habilitar mod_rewrite
RUN a2enmod rewrite

# Copiar el proyecto al contenedor
COPY . /var/www/html/

# Directorio de trabajo
WORKDIR /var/www/html/

# Exponer el puerto 80
EXPOSE 80

# Iniciar Apache
CMD ["apache2-foreground"]