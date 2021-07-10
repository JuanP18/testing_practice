const fetch = require('node-fetch');
const swapi = require('./script2');

describe('API Test', () => {
    /*it('Calls swapi to get people', (done) => {
        expect.assertions(1)
        swapi.getPeopleAsync(fetch).then((data) => {
            expect(data.count).toEquals(87)
            done();
        });
    });*/
    it('Calls swapi to get people', () => {
        expect.assertions(1);
        return swapi.getPeopleAsync(fetch).then((data) => {
            expect(data.count).toEqual(87)
        });
    });

    it('Calls swapi to get people with a promise',() => {
        expect.assertions(2);
        return swapi.getPeoplePromise(fetch).then((data) => {
            expect(data.count).toEqual(87); 
            expect(data.results.length).toBeGreaterThan(5)
        });
    });

    it('GetPeople returns count and results - Mocks fake a function 1', () => {
        const mockFetch = jest.fn().mockReturnValue(
            Promise.resolve({
                json: () => Promise.resolve({
                  count:87,
                  results: [0,1,2,3,4,5]
                })
            })
        );
        expect.assertions(4)
        return swapi.getPeopleAsync(mockFetch).then( data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
            expect(data.count).toEqual(87); 
            expect(data.results.length).toBeGreaterThan(5)
        })
    });
}); 