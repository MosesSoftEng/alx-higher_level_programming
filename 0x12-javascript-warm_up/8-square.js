#!/usr/bin/node

const num = Number(process.argv[2]);

if (num) {
  let line = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      line += 'x';
    }

    if(i < num - 1) line += '\n'
  }

  if(num > 0) console.log(line);
} else {
  console.log('Missing size');
}
