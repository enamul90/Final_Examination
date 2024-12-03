import mongoose from 'mongoose';
const serviceSchema = new mongoose.Schema(
    {
        tittle: {type: String},
        sub_dis: {type: String},
        img: {type: String},
        dis:{type: String},
    },
    {timestamps: true,versionKey:false}

)


const serviceModels = mongoose.model('services', serviceSchema);
export default serviceModels;