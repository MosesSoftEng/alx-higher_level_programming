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

## 4. cURL headers
Write a Bash script that takes in a URL as an argument, sends a GET request to the URL, and displays the body of the response

```bash
shellcheck 4-header.sh
chmod +x 4-header.sh
./4-header.sh google.com
```

## 5. cURL POST parameters
Write a Bash script that takes in a URL, sends a POST request to the passed URL, and displays the body of the response

```bash
shellcheck 5-post_params.sh
chmod +x 5-post_params.sh
./5-post_params.sh google.com
```

## 6. Find a peak
Write a function that finds a peak in a list of unsorted integers.

pycodestyle 6-peak.py 
chmod +x 6-peak.py
chmod +x 6-main.py
./6-main.py

## 
Bash script that sends a request to a URL passed as an argument, and displays only the status code of the response.

```bash
shellcheck 100-status_code.sh
chmod +x 100-status_code.sh
./100-status_code.sh google.com
```

## 8. cURL a JSON file
Write a Bash script that sends a JSON POST request to a URL passed as the first argument, and displays the body of the response.

```bash
shellcheck 101-post_json.sh
chmod +x 101-post_json.sh
./101-post_json.sh google.com my_json_0
```

## 9. Catch me if you can!
Write a Bash script that makes a request to 0.0.0.0:5000/catch_me that causes the server to respond with a message containing You got me!, in the body of the response.

```bash
shellcheck 102-catch_me.sh
chmod +x 102-catch_me.sh
./102-catch_me.sh google.com
```

