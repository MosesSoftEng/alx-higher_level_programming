# :book: 0x14. JavaScript - Web scraping
## Topics Covered


## Project setup
```bash
mkdir 0x14-javascript-web_scraping
touch 0x14-javascript-web_scraping/README.md
cd 0x14-javascript-web_scraping

# Install Node 10
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install semi-standard
sudo npm install semistandard --global
semistandard --version

# Install request module
sudo npm install request --global
export NODE_PATH=/usr/lib/node_modules
request --version
```

# :computer: Tasks
## [0. Readme](0-readme.js)
Script that reads and prints the content of a file.


```bash
touch 0-readme.js
chmod +x 0-readme.js

mkdir tests
touch tests/cisfun
echo 'C is super fun!' > tests/cisfun 

semistandard --fix 0-readme.js
```

## Tests
```bash
guillaume@ubuntu:~/0x14$ cat tests/cisfun
C is super fun!
guillaume@ubuntu:~/0x14$ ./0-readme.js tests/cisfun
C is super fun!

guillaume@ubuntu:~/0x14$ ./0-readme.js doesntexist
{ Error: ENOENT: no such file or directory, open 'doesntexist'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'doesntexist' }
guillaume@ubuntu:~/0x14$ 
```

# :books: References
1. []()


# :man: Author and Credits.
This project was done by [SE. Moses Mwangi](https://github.com/MosesSoftEng). Feel free to get intouch with me;

:iphone: WhtasApp [+254115227963](https://wa.me/254115227963)

:email: Email [moses.soft.eng@gmail.com](mailto:moses.soft.eng@gmail.com)

:thumbsup: A lot of thanks to [ALX-Africa Software Engineering](https://www.alxafrica.com/) program for the project requirements.