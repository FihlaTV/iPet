/**
 * Created by zhangyiru on 16-8-17.
 */
/*global describe it fit*/
import app from '../../app';
import request from 'supertest';

describe('put /messages ', ()=> {
  it('should update talk with one message', (done)=> {
    request(app)
        .put('/api/messages')
        .type('form')
        .query({id: '57b6815bf8885d021d874325'})
        .send({
          isQuestion: true,
          msg: '问：问题测试'
        })
        .end((error, res)=> {
          if (error) {
            done.fail(error);
          } else {
            expect(res.body.data[res.body.data.length - 1].msg).toEqual('问：问题测试');
            done();
          }
        });
  });
});