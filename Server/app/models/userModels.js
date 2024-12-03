import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
    {
        email: {type: String},
        Name: {type: String},
        type: {type: String},
        password: {type: String,},
    },
    {timestamps: true,versionKey:false}

)


const User = mongoose.model('users', UserSchema);
export default User;