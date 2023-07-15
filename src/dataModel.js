const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    mno:{
        type: String
    },
    pin:{
        type: String
    },
    pan:{
        type: String
    },
    dob:{
        type: String
    },
    cid:{
        type: String
    },
})

module.exports = new mongoose.model('cdata', dataSchema);
