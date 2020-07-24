const { JSDOM } = require('jsdom')
const { handleSubmit } = require('../../src/client/js/formHandler');
const dom = new JSDOM()

// Manual Mock
global.document = dom.window.document;
const formInput = document.createElement('input')
formInput.id='name'
formInput.value='https://google.com'
document.body.appendChild(formInput);
const results = document.createElement('p')
results.id = 'results';
document.body.appendChild(results)

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);
dom.window.event

describe('handleSubmit Test', () => {
    it('should call local server test endpoint', () => {
        global.Client = jest.fn(() => {return true});

        handleSubmit()
        expect(fetch).toHaveBeenCalledWith('http://localhost:8081/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: 'https://google.com'})
        })
        expect(fetch).toHaveBeenCalledTimes(1);
    })
})
