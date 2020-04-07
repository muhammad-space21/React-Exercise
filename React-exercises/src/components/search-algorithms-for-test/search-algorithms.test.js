const googleSearch = require('./search-algorithms');

// Database Mock data;
dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

// Tests
describe('googleSearch tests', () => {
  it('it is a silly test', () => {
    expect('hello').toBe('hello');
  });
  
  it('it is a googleSearch test', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toStrictEqual(['dog.com', 'dogpictures.com'])
  });
  
  it('work with undefined and  null', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  });
  
  it('returns no more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  });
});
