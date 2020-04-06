const fetch = require('node-fetch');
const swapi = require('./fetch-data');


// Test is not working 

  it('calls swapi to get people using async', async () => {
    expect.hasAssertions(1)
      return swapi.getPeopleAsync(fetch).then(data => {
        expect(data.count).toEqual(87);
      })
  })

  it('calls swapi to get people using promise', () => {
    expect.hasAssertions(2)
      return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
      })
  })

  it('getPeople returns count and result', () => {
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 87,
        results: [0, 1, 2, 3, 4]
      })
    }))
    expect.hasAssertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('https://swapi.co/api/people'); 
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    })
  })
