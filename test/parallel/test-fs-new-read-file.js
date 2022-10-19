'use strict';

const { readFile } = require('fs');
const { join } = require('path'); 

async function test() {
  try {
    const filePath = join(process.cwd(), '.nycrc');
    readFile(filePath, (_, buf) => {
      console.log(buf.toString());
    });
  }
  catch (error) {
    console.error('client boom', error);
  }
}

async function testUtf8() {
  try {
    const filePath = join(process.cwd(), '.nycrc');
    readFile(filePath, 'utf8', (_, buf) => {
      console.log(buf);
    });
  }
  catch (error) {
    console.error('client boom', error);
  }
}

test();
testUtf8();
