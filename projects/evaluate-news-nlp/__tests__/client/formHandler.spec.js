const { JSDOM } = require('jsdom')
const { handleSubmit } = require('../../src/client/js/formHandler');
require('jest-fetch-mock').enableMocks()

const dom = new JSDOM()

// Manual Mock
global.document = dom.window.document;
const formInput = document.createElement('input')
formInput.id = 'name'
formInput.value = 'https://google.com'
document.body.appendChild(formInput);
const results = document.createElement('div')
results.id = 'results';
document.body.appendChild(results)

// there is no window. Mocking alert.
global.window.alert = (msg) => {console.log(msg)}

describe('handleSubmit Test', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('should call local server test endpoint', () => {
        const evtMock = {
            preventDefault: () => { } // do nothing (dummy)
        }

        // valid url in the form
        document.getElementById('name').value = 'https://google.com'

        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

        handleSubmit(evtMock)
        // const rate = await handleSubmit(evtMock)
        expect(fetch).toHaveBeenCalledWith('http://localhost:8081/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: 'https://google.com' })
        })
        expect(fetch).toHaveBeenCalledTimes(1);
        
    })

    it('should not call local server test endpoint with invalid url', () => {
        const evtMock = {
            preventDefault: () => { } // do nothing
        }

        // not url
        document.getElementById('name').value = 'hogeko'

        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

        handleSubmit(evtMock)
        expect(fetch).toHaveBeenCalledTimes(0);
    })

})
