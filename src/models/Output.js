const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const outputSchema = new mongoose.Schema({

    opfldname: {
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
    }
});

outputSchema.plugin(uniqueValidator);

const Output = mongoose.model('Output',outputSchema)

module.exports=Output;