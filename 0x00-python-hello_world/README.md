# :book: 0x00. Python - Hello, World

# :computer: Tasks
## [0x00-python-hello_world](0x00-python-hello_world)
Write a Shell script that runs a Python script.
The Python file name will be saved in the environment variable $PYFILE

```
guillaume@ubuntu:~/py/0x00$ cat main.py 
#!/usr/bin/python3
print("Best School")

guillaume@ubuntu:~/py/0x00$ export PYFILE=main.py
guillaume@ubuntu:~/py/0x00$ ./0-run
Best School
guillaume@ubuntu:~/py/0x00$
```

> export PYFILE=main.py; betty 0-run; pycodestyle main.py; chmod u+x 0-run; ./0-run

## 