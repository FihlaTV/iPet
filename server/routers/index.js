const regRouter = (app)=> {
  app.use('/api/doctors', require('./doctors'));
};

export default regRouter;