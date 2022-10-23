'use strict';

const { readFile, readFileSync } = require('fs');
const { join } = require('path');
const assert = require('assert');

function test() {
  try {
    const filePath = join(process.cwd(), '.nycrc');
    readFile(filePath, (_, buf) => {
      assert.ok(buf instanceof Buffer);
    });
  }
  catch (error) {
    console.error('client boom', error);
  }
}

function testUtf8() {
  try {
    const filePath = join(process.cwd(), '.nycrc');
    readFile(filePath, 'utf8', (_, string) => {
      assert.ok(typeof string === 'string');
    });
  }
  catch (error) {
    console.error('client boom', error);
  }
}

function testNoExist() {
  try {
    const filePath = join(process.cwd(), '.zooba');
    readFile(filePath, (err) => {
      assert.ok(err);
      assert.strictEqual(err.code, 'ENOENT');
    });
  }
  catch (error) {
    console.error('client boom', error);
  }
}


test();
testUtf8();
testNoExist();
