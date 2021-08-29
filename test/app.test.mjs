import request from 'supertest';
import app from '../src/app.mjs';

test('app/cutURL/+', (done) => {
  console.log = jest.fn();

  request(app)
    .post('/cut')
    .send({ url: 'https://www.malaysia.com.my' })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.code).not.toBeUndefined();
      expect(console.log).toBeCalled();
      done();
    })
    .catch((err) => done(err));
});
test('app/cutURL/undefined/-', (done) => {
  request(app)
    .post('/cut')
    .send({ xurl: 'https://www.malaysia.com.my' })
    .set('Accept', 'application/json')
    .expect(400)
    .then((res) => {
      expect(res.text).toBe('Bad request');
      done();
    })
    .catch((err) => done(err));
});

test('app/cutURL/NotValid/-', (done) => {
  request(app)
    .post('/cut')
    .send({ url: 'askdlfalk;fj;asfsad' })
    .set('Accept', 'application/json')
    .expect(400)
    .then((res) => {
      expect(res.text).toBe('Bad request');
      done();
    })
    .catch((err) => done(err));
});
