const { JSDOM } = require('jsdom')
const { handleSubmit } = require('../../src/client/js/formHandler');
require('jest-fetch-mock').enableMocks()

const dom = new JSDOM()

jest.mock('../../__mocks__/client.js')

// Manual Mock
global.document = dom.window.document;
const formInput = document.createElement('input')
formInput.id='name'
formInput.value='https://google.com'
document.body.appendChild(formInput);
const results = document.createElement('p')
results.id = 'results';
document.body.appendChild(results)

describe('handleSubmit Test', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
    
    it('should call local server test endpoint', () => {
        const evtMock = {
          preventDefault: () => {} // do nothing
        }

        // const Client = { post_NLP: () => { // do whatever required here return true; } };

        // const handleSubmitMock=(event,Client)=>{}
        // expect(handleSubmitMock(event,Client)).toBe(true);
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

        handleSubmit(evtMock)
        expect(fetch).toHaveBeenCalledWith('http://localhost:8081/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: 'https://google.com'})
        })
        expect(fetch).toHaveBeenCalledTimes(1);
        // expect(document.getElementById('name').innerHTML).toEqual(JSON.stringify({ data: '12345' }))
    })

    it('should call local server test endpoint', () => {
      const evtMock = {
        preventDefault: () => {} // do nothing
      }

      // not url
      document.getElementById('name').value = 'hogeko'

      fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

      handleSubmit(evtMock)
      expect(fetch).toHaveBeenCalledTimes(0);
  })

})
