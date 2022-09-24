import organizeArray from './EXC5';
test('INTERCALAR', () => {
    let array3 = [];
    array3 = ['b', 6, 'a', 'q', 7, 2];
    expect(organizeArray(array3)).not.toEqual(['a', 'b', 'q', 2, 6, 7]);
});
