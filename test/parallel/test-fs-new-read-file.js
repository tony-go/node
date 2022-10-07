'use strict';

const { newReadFile, readFile } = require('fs');
const { join } = require('path'); 
const { equal } = require('assert');

async function test() {
  try {
    const filePath = join(process.cwd(), '.nycrc');
    newReadFile(filePath, (_, buf1) => {
      readFile(filePath, (_, buf2) => {
        console.log(buf1.toString());
        console.log(buf2.toString());
        equal(buf1.toString(), buf2.toString());
      });
    });
  }
  catch (error) {
    console.error('client boom', error);
  }
}

test();
