const { isValidUrl } = require('../../src/client/js/validateUrl');

describe('Test is ValidUrl', () => {
    it('https://google.com should be valid', () => {
        expect(isValidUrl('https://google.com')).toBe(true)
    });

    it('http://google.com should be valid', () => {
        expect(isValidUrl('http://google.com')).toBe(true)
    });
    
    it('google.com should be invalid', () => {
        expect(isValidUrl('google.com')).toBe(false)
    });

    it('hogehoge should be invalid', () => {
        expect(isValidUrl('hogehoge')).toBe(false)
    });

    it('blank should be invalid', () => {
        expect(isValidUrl('')).toBe(false)
    });

})
