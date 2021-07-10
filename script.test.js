const googleSearch = require('./script');

dbMock = [
 'dog.com',
 'cheesepuff.com',
 'disney.com',
 'dogpictures.com'
];

describe('google search', () => 
{
    it('Is a silly test', () => {
        expect('hello').toBe('hello');
        googleSearch('testtest', dbMock);
    });
    
    it('Is searching google empty list', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
    });
    
    it('Is searching google "dog" string ', () => {
        expect(googleSearch('dog', dbMock)).toEqual([ 'dog.com','dogpictures.com']);
    });
    
    it('Work with undefined and null input', () => {
        expect(googleSearch(null, dbMock)).toEqual([]);
        expect(googleSearch(undefined, dbMock)).toEqual([]);
    });
    
    it('Does not return more than three results', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});