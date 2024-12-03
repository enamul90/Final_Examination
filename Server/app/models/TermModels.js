import mongoose from 'mongoose';
const termSchema = new mongoose.Schema(
    {
        name: {type: String},
        comment: {type: String},
        department: {type: String},
        img :{type: String},
    },
    {timestamps: true,versionKey:false}
)


const termModels = mongoose.model('terms', termSchema);
export default  termModels;