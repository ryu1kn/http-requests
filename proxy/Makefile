SHELL := /bin/bash

map_nginx_items = $(foreach p,$(wildcard nginx/*),-v "$$(pwd)/$p:/etc/$p")

start:
	docker run --name request-interceptor --rm \
		$(call map_nginx_items) \
		-v $$(pwd)/log:/var/log/nginx \
		-p 8080:80 \
		nginx:alpine
