import joinArr from './EXC1';
test('SUMA DE ARREGLOS', () => {
    let wordArrayA = [];
    wordArrayA = ['b', 'a', 'c'];
    let wordArrayB = [];
    wordArrayB = ['7', '3', '0'];
    expect(joinArr(wordArrayA, wordArrayB)).toEqual(['b', '7', 'a', '3', 'c', '0']);
});
