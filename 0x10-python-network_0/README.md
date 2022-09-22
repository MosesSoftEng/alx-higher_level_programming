# 0x10. Python - Network #0

# Tasks
## 0. cURL body size
Bash script that takes in a URL, sends a request to that URL, and displays the size of the body of the response.

```bash
shellcheck 0-body_size.sh
chmod +x 0-body_size.sh
./0-body_size.sh google.com
```

## 1. cURL to the end
Bash script that takes in a URL, sends a GET request to the URL, and displays the body of the response.

```bash
shellcheck 1-body.sh
chmod +x 1-body.sh
./1-body.sh google.com
```

## 2. cURL Method
Script to send a DELETE request to a URL then display the http response message body.

```bash
shellcheck 2-delete.sh
chmod +x 2-delete.sh
./2-delete.sh google.com
```

## 3. cURL only methods
Displays all HTTP methods the server will accept for a giben URL

```bash
shellcheck 3-methods.sh
chmod +x 3-methods.sh
./3-methods.sh google.com
```

##
```bash
shellcheck 4-header.sh
chmod +x 4-header.sh
./4-header.sh google.com
```