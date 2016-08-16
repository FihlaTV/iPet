import mongoose from 'mongoose';

const Doctor = mongoose.model('Doctor', {
  _id:String,
  doctor_name: String,
  image: String,
  email: String,
  type: String,
  hospital: String,
  certificaties: String
});

export default Doctor;