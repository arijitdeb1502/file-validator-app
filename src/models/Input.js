const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const inputSchema=new mongoose.Schema({

    inpfldname: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    startpos: {
        type: Number,
        unique: true,
        required: true,
        validate(value){
            if(value<0){
                throw new Error('startpos must not be a negative number');
            }
        }
    },
    endpos: {
        type: Number,
        unique: true,
        required: true,
        validate(value){
            if(value<0){
                throw new Error('endpos must not be a negative number');
            }
        }
    },
    transformlogic : {
        type: String,
        required: true,
        trim: true
    },
    opfldname : {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

inputSchema.plugin(uniqueValidator);

const Input = mongoose.model('Input',inputSchema);


module.exports=Input;