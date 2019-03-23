#!/usr/bin/env bash

# Create project folder, written in 3 single mkdir-statements to make sure this runs everywhere without problems
sudo mkdir "/var/www"
sudo mkdir "/var/www/html"
sudo mkdir "/var/www/html/${PROJECTFOLDER}"

sudo apt-get update
sudo apt-get -y upgrade

sudo apt-get install -y apache2
sudo apt-get install -y php7

sudo apt-get -y install mysql-server
sudo apt-get install php5-mysql

sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2"
sudo apt-get -y install phpmyadmin

# setup hosts file
VHOST=$(cat <<EOF
<VirtualHost *:80>
    DocumentRoot "/var/www/html/${PROJECTFOLDER}"
    <Directory "/var/www/html/${PROJECTFOLDER}">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
EOF
)
echo "${VHOST}" > /etc/apache2/sites-available/000-default.conf

# enable mod_rewrite
sudo a2enmod rewrite

# restart apache
service apache2 restart

# install curl (needed to use git afaik)
sudo apt-get -y install curl
sudo apt-get -y install php7-curl

# install openssl (needed to clone from GitHub, as github is https only)
sudo apt-get -y install openssl

# install PHP GD, the graphic lib (we create captchas and avatars)
sudo apt-get -y install php5-gd

# install git
sudo apt-get -y install git

# git clone HUGE
sudo git clone https://github.com/panique/huge "/var/www/html/${PROJECTFOLDER}"

# install Composer
curl -s https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

# go to project folder, load Composer packages
cd "/var/www/html/${PROJECTFOLDER}"
composer install

# remove Apache's default demo file
sudo rm "/var/www/html/index.html"

# final feedback
echo "Voila!"
