import organizeMultiWordArray from './EXC3';
test('Organizado', () => {
    const multiWordArray1 = ['e', 'd', 'f'];
    const multiWordArray2 = ['a', 'c', 'b'];
    const multiWordArray3 = ['m', 'o', 'n'];
    const multiWordArray = multiWordArray1.concat(multiWordArray2, multiWordArray3);
    expect(organizeMultiWordArray(multiWordArray)).toEqual(multiWordArray);
});
