
# Access Logger

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
