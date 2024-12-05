import mongoose from 'mongoose';
const blocSchema = new mongoose.Schema(
    {
        title: {type: String},
        sub_dis: {type: String},
        img: {type: String},
        remark :{type: String},
    },
    {timestamps: true,versionKey:false}

)


const blogModels = mongoose.model('blogs', blocSchema);
export default blogModels;