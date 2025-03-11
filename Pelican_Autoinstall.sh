#!/bin/bash


# Check if script is being run as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root"
    exit
fi

# Detect if package manager is yum or apt-get
if command -v yum &> /dev/null; then
    echo "yum"
elif command -v apt-get &> /dev/null; then
    echo "apt-get"
else
    echo "Neither yum nor apt-get found"
fi

# Install php and required extensions
sudo apt update && sudo apt install -y ca-certificates apt-transport-https software-properties-common wget
wget -qO - https://packages.sury.org/php/apt.gpg | sudo tee /etc/apt/trusted.gpg.d/sury-php.gpg > /dev/null
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list
sudo apt-get update
sudo apt-get install -y php8.3 php8.3-gd php8.3-mysql php8.3-mbstring php8.3-bcmath php8.3-xml php8.3-curl php8.3-zip php8.3-intl php8.3-sqlite3 php8.3-fpm
sudo apt-get install -y curl git unzip tar
# Create Pelican directory
sudo mkdir -p /var/www/pelican
cd /var/www/pelican

# Install Pelican
curl -L https://github.com/pelican-dev/panel/releases/latest/download/panel.tar.gz | sudo tar -xzv

# Install Docker with Docker Compose Plugin
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
sudo composer install --no-dev --optimize-autoloader

# Check if apache2 is installed
if dpkg -l | grep -q apache2; then
    # Remove apache2 if installed
    sudo apt-get remove -y apache2
fi

# Install nginx
sudo apt-get update
sudo apt-get install -y nginx

# Remove Default Nginx Configuration
sudo rm /etc/nginx/sites-enabled/default

# Ask user if they want to use SSL with a domain name or via IP/HTTP
read -p "Do you want to use SSL with a domain name or via IP/HTTP? (ssl/ip): " choice

if [ "$choice" == "ssl" ]; then
    read -p "Enter your domain name: " domain
    sudo apt-get install -y certbot python3-certbot-nginx
    sudo certbot --nginx -d $domain
elif [ "$choice" == "ip" ]; then
    echo "Proceeding with IP/HTTP setup."
else
    echo "Invalid choice. Exiting."
    exit 1
fi

if [ "$choice" == "ssl" ]; then
    cat <<EOF | sudo tee /etc/nginx/sites-available/pelican.conf
server_tokens off;

server {
    listen 80;
    server_name $domain;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name $domain;

    root /var/www/pelican/public;
    index index.php;

    access_log /var/log/nginx/pelican.app-access.log;
    error_log  /var/log/nginx/pelican.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/$domain/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$domain/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    # See https://hstspreload.org/ before uncommenting the line below.
    # add_header Strict-Transport-Security "max-age=15768000; preload;";
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
EOF
elif [ "$choice" == "ip" ]; then
    ip=$(hostname -I | awk '{print $1}')
    cat <<EOF | sudo tee /etc/nginx/sites-available/pelican.conf
    server {
    listen 80;
    server_name $ip;


    root /var/www/pelican/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pelican.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
EOF
fi

# Enable Configuration
sudo ln -s /etc/nginx/sites-available/pelican.conf /etc/nginx/sites-enabled/pelican.conf

# Restart Nginx
sudo systemctl restart nginx

# Panel Setup
php artisan p:environment:setup

# Create Admin User
php artisan p:user:create

# Setting permissions
sudo chmod -R 755 storage/* bootstrap/cache/
sudo chown -R www-data:www-data /var/www/pelican

# Clear console and display success message alongside website URL
clear
echo "Pelican has been successfully installed."
if [ "$choice" == "ssl" ]; then
    echo "You can access your website at https://$domain/installer"
elif [ "$choice" == "ip" ]; then
    echo "You can access your website at http://$ip/installer"
fi

