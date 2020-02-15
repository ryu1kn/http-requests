
# Request Interceptor

## Usage

Configure `proxy_pass` in [nginx/conf.d/default.conf](./nginx/conf.d/default.conf), and

```sh
make start
```

Send requests via localhost:8080. You can see the request in `log/access.log`.

## References

* [Module ngx_http_js_module](http://nginx.org/en/docs/http/ngx_http_js_module.html#js_content)
* [njs scripting language](http://nginx.org/en/docs/njs/index.html)
* [Full request/response body logging in nginx](https://gist.github.com/morhekil/1ff0e902ed4de2adcb7a)
