const regRouter = (app)=> {
  app.use('/api/doctors', require('./doctors'));
  app.use('/api/login', require('./users'));
  app.use('/api/messages', require('./messages'));
};
export default regRouter;