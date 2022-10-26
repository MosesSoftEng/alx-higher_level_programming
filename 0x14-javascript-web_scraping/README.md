# :book: 0x14. JavaScript - Web scraping
## Topics Covered


## Project setup
```bash
mkdir 0x14-javascript-web_scraping
touch 0x14-javascript-web_scraping/README.md
cd 0x14-javascript-web_scraping
mkdir tests

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

touch tests/cisfun
echo 'C is super fun!' > tests/cisfun 

semistandard --fix 0-readme.js
```

### Tests
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

## [1. Write me](1-writeme.js)
Script that script that writes a string to a file in utf-8.


```bash
touch 1-writeme.js
chmod +x 1-writeme.js

cat 0-readme.js > 1-writeme.js

mkdir tests
touch tests/cisfun
echo 'C is super fun!' > tests/cisfun 

semistandard --fix 1-writeme.js
```

### Tests
```bash
guillaume@ubuntu:~/0x14$ ./1-writeme.js my_file.txt "Python is cool"
guillaume@ubuntu:~/0x14$ cat my_file.txt ; echo ""
Python is cool
guillaume@ubuntu:~/0x14$ 
```

## [2. Status code](2-statuscode.js)
Script that display the status code of a GET request.

```bash
touch 2-statuscode.js
chmod +x 2-statuscode.js

semistandard --fix 2-statuscode.js
```

### Tests
```bash
guillaume@ubuntu:~/0x14$ ./2-statuscode.js https://intranet.hbtn.io/status
code: 200
guillaume@ubuntu:~/0x14$ ./2-statuscode.js https://intranet.hbtn.io/doesnt_exist
code: 404
guillaume@ubuntu:~/0x14$ 
```

## [3. Star wars movie title ](3-starwars_title.js)
Script that prints the title of a Star Wars movie.


```bash
touch 3-starwars_title.js
chmod +x 3-starwars_title.js

cat 2-statuscode.js > 3-starwars_title.js

semistandard --fix 3-starwars_title.js
```

### Tests
```bash
guillaume@ubuntu:~/0x14$ ./3-starwars_title.js 1
A New Hope
guillaume@ubuntu:~/0x14$ ./3-starwars_title.js 5
Attack of the Clones
guillaume@ubuntu:~/0x14$ 
```

## [4. Star wars Wedge Antilles](4-starwars_count.js)
Script that prints the number of movies where the character "Wedge Antilles" is present.

```bash
touch 4-starwars_count.js
chmod +x 4-starwars_count.js
cat 3-starwars_title.js > 4-starwars_count.js

semistandard --fix 4-starwars_count.js
```

### Tests
```bash
guillaume@ubuntu:~/0x14$ ./3-starwars_title.js 1
A New Hope
guillaume@ubuntu:~/0x14$ ./3-starwars_title.js 5
Attack of the Clones
guillaume@ubuntu:~/0x14$ 
```

## [5. Loripsum](5-request_store.js)
Script that gets the contents of a webpage and stores it in a file.

```bash
touch 5-request_store.js
chmod +x 5-request_store.js

cat 4-starwars_count.js > 5-request_store.js

semistandard --fix 5-request_store.js
```

### Tests
```bash
guillaume@ubuntu:~/0x14$ ./5-request_store.js http://loripsum.net/api loripsum
guillaume@ubuntu:~/0x14$ cat loripsum
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec quo modo conveniant, non sane intellego. Nam memini etiam quae nolo, oblivisci non possum quae volo. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Terram, mihi crede, ea lanx et maria deprimet. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. </p>

<p>Ad eos igitur converte te, quaeso. Pudebit te, inquam, illius tabulae, quam Cleanthes sane commode verbis depingere solebat. Sic enim censent, oportunitatis esse beate vivere. Quo studio Aristophanem putamus aetatem in litteris duxisse? Aeque enim contingit omnibus fidibus, ut incontentae sint. Ut aliquid scire se gaudeant? Qui enim existimabit posse se miserum esse beatus non erit. Putabam equidem satis, inquit, me dixisse. </p>

<p>Duo Reges: constructio interrete. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? Illud non continuo, ut aeque incontentae. Illa videamus, quae a te de amicitia dicta sunt. At ille pellit, qui permulcet sensum voluptate. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. </p>

<p>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Nos cum te, M. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Apparet statim, quae sint officia, quae actiones. Ergo instituto veterum, quo etiam Stoici utuntur, hinc capiamus exordium. Eadem nunc mea adversum te oratio est. Quid, si etiam iucunda memoria est praeteritorum malorum? Hoc enim constituto in philosophia constituta sunt omnia. </p>

guillaume@ubuntu:~/0x14$ 
```

## [6. How many completed?](6-completed_tasks.js)
Script that computes the number of tasks completed by user id.


```bash
touch 6-completed_tasks.js
chmod +x 6-completed_tasks.js
cat 3-starwars_title.js > 6-completed_tasks.js

semistandard --fix 6-completed_tasks.js
```

### Tests
```bash
guillaume@ubuntu:~/0x14$ ./6-completed_tasks.js https://jsonplaceholder.typicode.com/todos
{ '1': 11,
  '2': 8,
  '3': 7,
  '4': 6,
  '5': 12,
  '6': 6,
  '7': 9,
  '8': 11,
  '9': 8,
  '10': 12 }
guillaume@ubuntu:~/0x14$
```

## [7. Who was playing in this movie? ](100-starwars_characters.js)
Script that prints all characters of a Star Wars movie.

```bash
touch 100-starwars_characters.js
chmod +x 100-starwars_characters.js
cat 3-starwars_title.js > 100-starwars_characters.js

semistandard --fix 100-starwars_characters.js
```

### Tests
```bash
guillaume@ubuntu:~/0x14$ ./3-starwars_title.js 1
A New Hope
guillaume@ubuntu:~/0x14$ ./3-starwars_title.js 5
Attack of the Clones
guillaume@ubuntu:~/0x14$ 
```

## [8. Right order](101-starwars_characters.js)
Script that prints all characters of a Star Wars movie in same order as in API endpoint

```bash
touch 101-starwars_characters.js
chmod +x 101-starwars_characters.js
cat 100-starwars_characters.js > 101-starwars_characters.js

semistandard --fix 101-starwars_characters.js
```

### Tests
```bash
guillaume@ubuntu:~/0x14$ ./101-starwars_characters.js 3
Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Obi-Wan Kenobi
Chewbacca
Han Solo
Jabba Desilijic Tiure
Wedge Antilles
Yoda
Palpatine
Boba Fett
Lando Calrissian
Ackbar
Mon Mothma
Arvel Crynyd
Wicket Systri Warrick
Nien Nunb
Bib Fortuna
guillaume@ubuntu:~/0x14$ 
```

# :books: References
1. []()


# :man: Author and Credits.
This project was done by [SE. Moses Mwangi](https://github.com/MosesSoftEng). Feel free to get intouch with me;

:iphone: WhtasApp [+254115227963](https://wa.me/254115227963)

:email: Email [moses.soft.eng@gmail.com](mailto:moses.soft.eng@gmail.com)

:thumbsup: A lot of thanks to [ALX-Africa Software Engineering](https://www.alxafrica.com/) program for the project requirements.