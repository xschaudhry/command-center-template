const test = require('node:test');
const assert = require('node:assert');
const { findAnswer } = require('../src/handbook');

// data.js assigns to window, so give it one.
global.window = {};
require('../data.js');
const entries = window.DATA.handbook;

test('answers common staff questions from the right section', () => {
  assert.equal(findAnswer('how long is the warranty on brakes?', entries).src, '§4.2 Warranties');
  assert.equal(findAnswer('can I give a discount to a repeat customer', entries).src, '§2.5 Discounts');
  assert.equal(findAnswer('do we need approval before extra work?', entries).src, '§3.1 Authorizations');
  assert.equal(findAnswer('customer wants to bring their own parts', entries).src, '§3.4 Customer parts');
  assert.equal(findAnswer('we got a comeback on yesterday\'s job', entries).src, '§5.1 Comebacks');
});

test('returns null instead of guessing', () => {
  assert.equal(findAnswer('what time is lunch?', entries), null);
});

test('every handbook entry is reachable by its own question', () => {
  for (const e of entries) assert.equal(findAnswer(e.q, entries), e, e.q);
});
