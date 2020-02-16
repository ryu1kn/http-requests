
# HTTP Requests

Collection of services for observing http requests

## First thing first...

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

## Usage

Start the services and observe log as you hit the ports.

```sh
$ make start
```

## Observe access log

Point to port 8081

```sh
$ curl http://localhost:8081/foo
```

And you'll see:

```
access-logging_1   | 172.21.0.1 - - [19/Apr/2019:12:59:04 +0000] "GET /foo HTTP/1.1" 404 153 "-" "curl/7.54.0" "-"
```

## Observe request log

Point to port 8082

```sh
$ curl http://localhost:8082/foo
```

And you'll see:

```
request-logging_1  | -----------------
request-logging_1  | { path: '/foo',
request-logging_1  |   headers:
request-logging_1  |    { host: 'localhost:8082',
request-logging_1  |      'user-agent': 'curl/7.54.0',
request-logging_1  |      accept: '*/*' },
request-logging_1  |   method: 'GET',
request-logging_1  |   body: '',
request-logging_1  |   cookies: undefined,
request-logging_1  |   fresh: false,
request-logging_1  |   hostname: 'localhost',
request-logging_1  |   ip: '::ffff:172.21.0.1',
request-logging_1  |   ips: [],
request-logging_1  |   protocol: 'http',
request-logging_1  |   query: {},
request-logging_1  |   subdomains: [],
request-logging_1  |   xhr: false,
request-logging_1  |   os: { hostname: '08ba8f00a5e7' } }
request-logging_1  | ::ffff:172.21.0.1 - - [19/Apr/2019:13:05:27 +0000] "GET /foo HTTP/1.1" 200 362 "-" "curl/7.54.0"
```

[1]: https://www.wireshark.org/
[2]: https://www.wireshark.org/docs/man-pages/wireshark.html
[3]: https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html
