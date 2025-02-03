#!/usr/bin/env bash


sudo service nginx status

sudo cp /workspaces/Webdev/test.html /usr/share/nginx/html/

#!/bin/bash

# Define the NGINX configuration file path
NGINX_CONF="/etc/nginx/conf.d/default.conf"

# Create or overwrite the NGINX configuration
sudo bash -c "cat > $NGINX_CONF" <<EOF
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOF

# Test NGINX configuration
echo "Testing NGINX configuration..."
sudo nginx -t

# Restart NGINX to apply changes
echo "Restarting NGINX..."
sudo service nginx restart

echo "Configuration completed successfully!"
