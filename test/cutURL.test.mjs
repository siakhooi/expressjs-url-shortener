import cutURL from '../src/cutURL.mjs';

beforeEach(() => {
  jest.clearAllMocks();
});

it('cutURL/url-undefined/-', () => {
  const req = {
    body: {},

  };
  console.log = jest.fn();
  const send = jest.fn().mockReturnValue('abc');
  const res = {
    status: jest.fn().mockReturnValue({ send }),

  };
  expect(cutURL(req, res)).toBe('abc');
  expect(console.log).toBeCalled();
  expect(send).toBeCalled();
  expect(res.status).toBeCalled();
});

it('cutURL/url-invalid/-', () => {
  const req = {
    body: { url: 'alksdfhalsdfhasd' },

  };
  console.log = jest.fn();
  const send = jest.fn().mockReturnValue('abc1');
  const res = {
    status: jest.fn().mockReturnValue({ send }),

  };
  expect(cutURL(req, res)).toBe('abc1');
  expect(console.log).toBeCalled();
  expect(send).toBeCalled();
  expect(res.status).toBeCalled();
});

it('cutURL/url/+', () => {
  const req = {
    body: { url: 'http://www.malaysia.com' },
    app: { locals: { Storage: { add: jest.fn(), write: jest.fn() } } },

  };
  const json = jest.fn().mockReturnValue('abc1');
  const res = {
    status: jest.fn().mockReturnValue({ json }),
  };
  console.log = jest.fn();
  expect(cutURL(req, res)).toBe('abc1');
  expect(req.app.locals.Storage.add).toBeCalled();
  expect(req.app.locals.Storage.write).toBeCalled();
  expect(console.log).toBeCalled();
  expect(json).toBeCalled();
  expect(res.status).toBeCalled();
});
