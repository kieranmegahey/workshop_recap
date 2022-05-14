import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from "./index.js";

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:

test(`When given a number double it and add 1.`, () => {
  const actual = doubleAndAddOne(2);
  const expected = 5;

  expect(actual).toBe(expected);
});
test(`When given a number double it and add 1.`, () => {
  const actual = doubleAndAddOne(6);
  const expected = 13;

  expect(actual).toBe(expected);
});
test(`When given an array check the length return true if longer than 10.`, () => {
  const actual = isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const expected = true;

  expect(actual).toBe(expected);
});
test(`When given an array check the length return true if longer than 10.`, () => {
  const actual = isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const expected = false;

  expect(actual).toBe(expected);
});
test(`When given an array spread and add new item to array.`, () => {
  const actual = addItemToArray([1, 2, 3, 4], 5);
  const expected = [1, 2, 3, 4, 5];

  expect(actual).toStrictEqual(expected);
});
test(`When given an array spread and add new item to array.`, () => {
  const actual = addItemToArray(["cat", "dog", "bird"], 5);
  const expected = ["cat", "dog", "bird", 5];

  expect(actual).toStrictEqual(expected);
});
test(`add key value pair to object`, () => {
  const actual = addKeyValuePairToObject({ name: "Kieran" }, "pets", 1);
  const expected = { name: "Kieran", pets: 1 };

  expect(actual).toStrictEqual(expected);
  5;
});
test(`yes`, () => {
  const actual = throwErrorIfEven(5);
  const expected = false;

  expect(actual).toBe(expected);
});
