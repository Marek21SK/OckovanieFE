FROM nginx
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ockovanie-fe/ /usr/share/nginx/html
