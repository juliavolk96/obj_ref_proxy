import { test, expect } from '@jest/globals';

import { orderByProps, extractSpecialAttacks } from '../orderByProps';

test('orderByProps - возвращает свойства в указанном порядке', () => {
  const obj = { name: 'John', age: 30, city: 'New York' };
  const order = ['age', 'name'];
  const expected = [
    { key: 'age', value: 30 },
    { key: 'name', value: 'John' },
    { key: 'city', value: 'New York' },
  ];
  const result = orderByProps(obj, order);
  expect(result).toEqual(expected);
});

test('orderByProps - возвращает свойства в алфавитном порядке, если порядок не указан', () => {
  const obj = { name: 'John', age: 30, city: 'New York' };
  const expected = [
    { key: 'age', value: 30 },
    { key: 'city', value: 'New York' },
    { key: 'name', value: 'John' },
  ];
  const result = orderByProps(obj, []);
  expect(result).toEqual(expected);
});

test('extractSpecialAttacks - возвращает специальные атаки с предустановленным описанием, если они недоступны', () => {
  const character = {
    special: [
      { id: 1, name: 'Attack 1', icon: 'icon1' },
      {
        id: 2, name: 'Attack 2', icon: 'icon2', description: 'Special attack',
      },
    ],
  };
  const expected = [
    {
      id: 1, name: 'Attack 1', description: 'Описание недоступно', icon: 'icon1',
    },
    {
      id: 2, name: 'Attack 2', description: 'Special attack', icon: 'icon2',
    },
  ];
  const result = extractSpecialAttacks(character);
  expect(result).toEqual(expected);
});

test('orderByProps - возвращает свойства в алфавитном порядке, если порядок не указан', () => {
  const character = { special: [] };
  const expected = [];
  const result = extractSpecialAttacks(character);
  expect(result).toEqual(expected);
});

test('orderByProps - возвращает пустой массив для пустого объекта', () => {
  const obj = {};
  const expected = [];
  const result = orderByProps(obj, []);
  expect(result).toEqual(expected);
});

test('extractSpecialAttacks - возвращает пустой массив, если специальные атаки недоступны', () => {
  const character = { special: [] };
  const expected = [];
  const result = extractSpecialAttacks(character);
  expect(result).toEqual(expected);
});

test('orderByProps - возвращает свойства в алфавитном порядке при частично указанном порядке', () => {
  const obj = { name: 'John', age: 30, city: 'New York' };
  const order = ['age'];
  const expected = [
    { key: 'age', value: 30 },
    { key: 'city', value: 'New York' },
    { key: 'name', value: 'John' },
  ];
  const result = orderByProps(obj, order);
  expect(result).toEqual(expected);
});
