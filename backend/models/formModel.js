import mongoose from "mongoose"

const formSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    gender:{
        type: String,
        enum:["male", "female", "other"]
    },
    citizenshipNo:{
        type: Number,
        required: true,
        unique: true,
    },
    fatherName:{
        type: String,
        required: true,

    },
    grandFatherName: {
        type: String,
        required: true,
    },
    birthdate:{
        type: Date,
        required: true
    },
    address:{
        district:{
            type: String,
            requiured: true
        },
        birthPlace:{
            type: String,
            
        },
        currentPlace:{
            type: String,
            required: true
        },
        temporaryPlace:{
            type: String,
            
        }

    },
    contactNo:{
        mobileNo:{
            type: String,
            requird: true,
            unique: true
        },
        telephoneNo:{
            type: String,
            unique: true,
        }
    },

    bank:{
        bankName:{
            type: String,
            
        },
        bankAccountNo:{
            type: Number,
            
            unique: true
        }
    },
    beneficiaryName:{
        type: String,
        required: true
    },
    beneficiaryRelationship:{
        type: String,
        requird: true
    },
    beneficiaryNo:{
        type: Number,
        requird: true,
    },
    referredByName:{
        type: String
    },
    referredDate:{
        type: Date
    },
    image:{
        type:String,
        required: true
    }
}, {timestamps: true});
const Form = mongoose.model("Form", formSchema);
export default Form;