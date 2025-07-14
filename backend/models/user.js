 import {mongoose} from 'mongoose'
import bcrypt from 'bcrypt'
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: { 
        type: String,
        required:true
    },
    

},{timestamps:true})

UserSchema.pre('save', async function(next) {
    try {
      if (!this.isModified('password')) return next(); // Only hash if password is modified
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
      next();
    } catch (error) {
      next(error);
    }
  });
  
  // **Compare entered password with the stored hash**
  UserSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password); // Return boolean
  };
export default mongoose.model('User', UserSchema)
