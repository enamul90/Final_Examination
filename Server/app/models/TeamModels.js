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


const TeamModels = mongoose.model('teams', termSchema);
export default   TeamModels;