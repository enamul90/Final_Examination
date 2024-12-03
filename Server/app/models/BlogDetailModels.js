import mongoose from 'mongoose';
const blocDetailSchema = new mongoose.Schema(
    {
        blogID: {type: String},
        blog_des1: {type: String},
        blog_des2: {type: String},
    },
    {timestamps: true,versionKey:false}

)


const blogDetailsModels = mongoose.model('blogDetails', blocDetailSchema);
export default blogDetailsModels;