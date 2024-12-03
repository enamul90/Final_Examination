import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {type: String},
        email: {type: String},
        password: {type: String},
        img :{type: String},
    },
    {timestamps: true,versionKey:false}
)


const User = mongoose.model('users', userSchema);
export default User;