
const signapseTest = require('../js/function')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.window = dom.window;
global.document = dom.window.document;

// const myFunction = () => {
//   const p = document.querySelector('p');
//   p.textContent = 'Hello Jest';
// };

// test('myFunction modifies the DOM', () => {
//   myFunction();
//   expect(document.querySelector('p').textContent).toBe('Hello Jest');
// });



test('to see if signapse exist', ()=>{
    signapseTest();
    console.log(signapseTest)
    // expect(signapseTest).toBeDefined();
    expect(document.querySelector('p').textContent).toBe('Hello world');
})