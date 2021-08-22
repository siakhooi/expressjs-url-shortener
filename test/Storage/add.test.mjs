import Storage from '../../src/data/Storage.mjs';

it('Storage/add/1/+', () => {
  const s = new Storage();
  s.add('https://www.malaysia.com', 'adfsf');

  expect(s.links).toEqual(
    [{
      url: 'https://www.malaysia.com',
      code: 'adfsf',
    }],
  );
});

it('Storage/add/4/+', () => {
  const s = new Storage();
  s.add('https://www.malaysia1.com', 'ad1sf');
  s.add('https://www.malaysia2.com', 'ad2sf');
  s.add('https://www.malaysia3.com', 'ad3sf');
  s.add('https://www.malaysia4.com', 'ad4sf');

  expect(s.links).toEqual(
    [{
      url: 'https://www.malaysia1.com',
      code: 'ad1sf',
    },
    {
      url: 'https://www.malaysia2.com',
      code: 'ad2sf',
    },
    {
      url: 'https://www.malaysia3.com',
      code: 'ad3sf',
    },
    {
      url: 'https://www.malaysia4.com',
      code: 'ad4sf',
    }],
  );
});
