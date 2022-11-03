//👉 Write your tests below here:
import { expect, test } from '@jest/globals'
import inCommon from './main.js'


test('Test 1', () => {
    const a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const b = [2, 2, 2, 2, 2, 4, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    expect(inCommon(a ,b)).toStrictEqual(10);
});
test('Test 2', () => {
    const a = [1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const b = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2];
    expect(inCommon(a ,b)).toStrictEqual(4);
});
test('Test 3', () => {
    const a = [1, 1, 1, 1, 1, 3, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const b = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 6, 2, 2, 2, 2, 2, 2];
    expect(inCommon(a ,b)).toStrictEqual(7);
});
test('Test 4', () => {
    const a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16523, 54, 1, 1, 1, 1, 1, 1, 1];
    const b = [2, 2, 2, 2, 2, 2, 2, 2, 200, 54, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    expect(inCommon(a ,b)).toStrictEqual(16723);
});