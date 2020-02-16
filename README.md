
# HTTP Requests

Collection of services for observing http requests

## Use Wireshark

If installing [Wireshark][1] is an option, and the protocol to the remote
host is HTTP (which is not common these days), consider using it or its
terminal version `tshark`.

To observe HTTP requests between your machine and `www.example.com`:

```sh
tshark -j http -Y 'http and (http.host == www.example.com or http.response_for.uri contains www.example.com)' -T json
```

Some useful links:

* [Wireshark man page][2]
* [6.4. Building Display Filter Expressions][3]

## Use `mendhak/http-https-echo`

To log request in detail, use this. See [`mendhak/http-https-echo`][4] for more detail.

## Use Request Interceptor

To intercept request for both ways, use this. See [proxy](./proxy/README.md) for more detail.

## Use Access Logger

To simply get access log, use this. See [access-logger](./access-logger/README.md) for more detail.

[1]: https://www.wireshark.org/
[2]: https://www.wireshark.org/docs/man-pages/wireshark.html
[3]: https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html
[4]: https://hub.docker.com/r/mendhak/http-https-echo
