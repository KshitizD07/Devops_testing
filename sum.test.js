const myFunction=require('./sum');

test('Throws error on invalid input', ()=>{
    expect(()=>{
        myFunction('invalidInput');
    }).toThrow();
})