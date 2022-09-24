import separateN from './EXC2';
test('NUMEROS SEPARADOS', () => {
    let numberArray = [];
    numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(separateN(numberArray)).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
