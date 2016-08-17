const regRouter = (app)=> {
  app.use('/api/doctors', require('./doctors'));
  app.use('/api/login', require('./users'));
};
export default regRouter;