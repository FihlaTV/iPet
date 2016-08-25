import mongoose from 'mongoose';

const User = mongoose.model('User',{
  _id: String,
  username:String,
  password:String,
  email:String,
});
export default User;