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

test();
