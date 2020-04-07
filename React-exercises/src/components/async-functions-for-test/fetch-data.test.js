// const fetch = require('node-fetch');
// const swapi = require('./fetch-data');


// // Test is not working 

//   it('calls swapi to get people using async', async (done) => {
//     expect.assertions(1)
//       swapi.getPeopleAsync(fetch).then(data => {
//         expect(data.count).toEqual(87);
//         done();
//   })
// })


//   it('calls swapi to get people using promise', (done) => {
//     expect.assertions(2)
//       swapi.getPeoplePromise(fetch).then(data => {
//         expect(data.count).toEqual(87)
//         expect(data.results.length).toBeGreaterThan(5)
//         done();
//       })
//   })


//   it('getPeople returns count and result', () => {
//     const mockFetch = jest.fn()
//     .mockReturnValue(Promise.resolve({
//       json: () => Promise.resolve({
//         count: 87,
//         results: [0, 1, 2, 3, 4]
//       })
//     }))

//     expect.assertions(4)
//     return swapi.getPeoplePromise(mockFetch).then(data => {
//       expect(mockFetch.mock.calls.length).toBe(1);
//       expect(mockFetch).toBeCalledWith('https://swapi.co/api/people'); 
//       expect(data.count).toEqual(87);
//       expect(data.results.length).toBeGreaterThan(5);
//     })
//   })


