import verSimilitud from './EXC4';

test ('VER SIMILITUD', ()=> {
    
let wordArray1: string [] = [];
wordArray1 = ['casa', 'perro', 'cocodrilo', 'capibara'];

let wordArray2: string [] = [];
wordArray2 = ['casa', 'cocodrilo', 'capibara', 'perro'];


    expect(verSimilitud(wordArray1,wordArray2)).not.toEqual('No son iguales!');
});
