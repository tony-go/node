'use strict';

const { readFile, readFileSync } = require('fs');
const { join } = require('path');
const assert = require('assert');

function test() {
  try {
    const filePath = join(process.cwd(), '.nycrc');
    readFile(filePath, (_, buf) => {
      console.log('buffer: ', buf);
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
      console.log('string: ', string);
      assert.ok(typeof string === 'string');
    });
  }
  catch (error) {
    console.error('client boom', error);
  }
}

function testUtf8Sync() {
  try {
    const filePath = join(process.cwd(), '.nycrc');
    const string = readFileSync(filePath, 'utf8');
    console.log('string: ', string);
    assert.ok(typeof string === 'string');
  }
  catch (error) {
    console.error('client boom', error);
  }
}


test();
testUtf8();
testUtf8Sync();
