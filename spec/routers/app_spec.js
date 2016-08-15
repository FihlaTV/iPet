import app from '../../app';
import request from 'supertest';

describe('get /doctors', ()=> {
  it('should return all doctors info', (done)=> {
    request(app)
        .get('/doctors')
        .expect([
          {
            '_id': '57b018041a4ce9ce4f91bd2f',
            'id': 1,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd30',
            'id': 2,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd31',
            'id': 3,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd32',
            'id': 4,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd33',
            'id': 5,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd34',
            'id': 1,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd35',
            'id': 2,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd36',
            'id': 3,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd37',
            'id': 4,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd38',
            'id': 1,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd39',
            'id': 2,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd3a',
            'id': 3,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          },
          {
            '_id': '57b018041a4ce9ce4f91bd3b',
            'id': 4,
            'name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificaties': '中级',
            '__v': 0
          }
        ])
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});

describe('get /', ()=> {
  it('should return a doctor info', (done)=> {
    request(app)
        .get('/doctors/1')
        .expect({
          '_id': '57b018041a4ce9ce4f91bd2f',
          'id': 1,
          'name': '张三',
          'image': 'images/1.jpg',
          'email': '123456@qq.com',
          'type': '内科',
          'hospital': '北京动物医院',
          'certificaties': '中级',
          '__v': 0
        })
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});