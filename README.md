
# HTTP Requests

Collection of services for observing http requests

## First thing first...

If installing [Wireshark][1] is an option, consider using it.

To observe HTTP requests between your machine and `www.example.com`:

1. Enable **Resolve Network Addresses** (in **View** ➡️ **Name Resolution**)
1. Specify following query

    ```
    http and ip.host == www.google.com
    ```

1. Make requests
1. Right-click a request you want to check its detail, select **Follow** ➡️ **HTTP Stream**

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
