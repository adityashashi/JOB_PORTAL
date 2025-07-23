import mongoose from 'mongoose';
import validator from 'validator';

//schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is require']
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        requried:[true,'Email is require'],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:string,
        rewuired:[true,'Password is require'],
    },
    locations:{
        type:string,
        default:'India'
    },
},
{timeStamps:true}
);

export default mongoose.model('User',userSchema)