import redirect from '../src/redirect.mjs';

it('redirect/+', () => {
  const returnValue = 'http://www.malaysia.com';

  const req = {
    url: '/adfff',
    app: {
      locals: {
        Storage: {
          get: jest.fn().mockReturnValue(returnValue),
        },
      },
    },
  };
  const send = jest.fn();
  const res = {
    redirect: jest.fn(),
    status: jest.fn().mockReturnValue({ send }),

  };
  redirect(req, res);
  expect(res.redirect).toBeCalled();
  expect(res.status).not.toBeCalled();
});

it('redirect/-', () => {
  const returnValue = null;

  const req = {
    url: '/adfff',
    app: {
      locals: {
        Storage: {
          get: jest.fn().mockReturnValue(returnValue),
        },
      },
    },
  };
  const send = jest.fn();
  const res = {
    redirect: jest.fn(),
    status: jest.fn().mockReturnValue({ send }),

  };
  redirect(req, res);
  expect(res.redirect).not.toBeCalled();
  expect(res.status).toBeCalled();
});
