test ('FUNCION MATH RANDOM PARA DADOS', ()=> {  
    const dadoA = Math.floor(Math.random()*6);
    expect(dadoA).not.toBe(dadoA>7);
});