import mongoose from 'mongoose';
const formSchema = new mongoose.Schema(
    {
        name: {type: String},
        email: {type: String},
        comment: {type: String},
    },
    {timestamps: true,versionKey:false}

)


const formModels = mongoose.model('forms', formSchema);
export default formModels;