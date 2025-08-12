import mongoose from 'mongoose'

const jobsSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company name is required'],
    },
    position: {
        type: String,
        required: [true, 'Job position is required'],
        maxlength: 100
    },
    status: {
        type: String,
        enum: ['pendung', 'reject', 'interview'],
        ddfault: 'pending'
    },
    workType: {
        type: String,
        enum: ['full-time', 'part-time', 'internship', 'contract'],
        default: 'full-time'
    },
    workLocation: {
        type: String,
        default: 'Mumbai',
        required: [true, 'work location is required']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

export default mongoose.model('Job', jobsSchema)