/**
 * Created by sun on 8/20/16.
 */
import app from '../../app' ;
import request from 'supertest';

describe('post /api/login', ()=> {
  fit('should return statusCode 200', (done)=> {
    request(app)
        .post('/api/login')
        .type('form')
        .send({
      username: 'hanzi22',
      password: '123456'
    }).end((err, res)=> {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });

  fit('should return statusCode 403', (done)=> {
    request(app)
        .post('/api/login')
        .type('form')
        .send({
          username: 'hanzi',
          password: '1123333'
        }).end((err, res)=> {
      expect(res.statusCode).toEqual(403);
      done();
    });
  });

});