// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// function: isPhoneNumber
// should pass
test('123-456-7980 should be a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('(123) 456-7980 should be a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true); 
});

// should fail
test('1234567890 should be an invalid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('abc-def-ghi should be an invalid phone number', () => {
  expect(isPhoneNumber('abc-def-ghi')).toBe(false); 
});

// function: isEmail
// should pass
test('example@gmail.com should be a valid email', () => {
  expect(isEmail('example@gmail.com')).toBe(true); 
});

test('c@mail.io', () => {
  expect(isEmail('c@mail.io')).toBe(true);
});

// should fail
test('helloworld@ should be false', () => {
  expect(isEmail('helloworld@')).toBe(false); 
});

test('compooter@.i should be false', () => {
  expect(isEmail('compooter@.i')).toBe(false);
});

// function: isStrongPassword
// should pass
test('isStrongPass123 should be true', () => {
  expect(isStrongPassword('isStrongPass123')).toBe(true); 
});

test('i_3a should be true', () => {
  expect(isStrongPassword('i_3a')).toBe(true);
});

// should fail
test('hello-world should be false', () => {
  expect(isStrongPassword('hello-world')).toBe(false); 
});

test('1password should be false', () => {
  expect(isStrongPassword('1password')).toBe(false); 
});

// function: isDate
// should pass
test('1/6/2005 should be true', () => {
  expect(isDate('1/6/2005')).toBe(true);
});

test('04/44/5000 should be true', () => {
  expect(isDate('04/44/5000')).toBe(true);
});

// should fail
test('333/77/2025 should be false', () => {
  expect(isDate('333/77/2025')).toBe(false); 
});

test('04/04/06 should be false', () => {
  expect(isDate('04/04/06')).toBe(false);
});

// function: isHexColor
// should pass
test('#fff should be valid color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('1aF should be a valid color', () => {
  expect(isHexColor('1aF')).toBe(true);
});

// should fail
test('aF should be an invalid color', () => {
  expect(isHexColor('aF')).toBe(false);
});

test('GHI-$%^ should be an invalid color', () => {
  expect(isHexColor('GHI-$%^')).toBe(false); 
});