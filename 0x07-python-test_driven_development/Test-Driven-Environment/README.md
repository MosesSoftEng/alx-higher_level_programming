# doctest_simple.py

## Check format style using pycodestyle
pycodestyle doctest_simple.py; 

## Provide executable permission to file
chmod +x doctest_simple.py;

## Run file
./doctest_simple.py

or 

python3 doctest_simple.py

pycodestyle doctest_simple.py; chmod +x doctest_simple.py; ./doctest_simple.py

## internal Tests
### Run internal tests
python3 -m doctest -v doctest_simple.py

## External tests
Write test in tex file

### Run tests using th command
python3 -m doctest -v doctest_simple_external_test.txt



