const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    address: { required: true, type: String },
    country: { required: true, type: String },
    createdAt: { type: Date },
    deletedAt: { type: Date },
    email: { type: String },
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    localGovernment: { required: true, type: String },
    password: { type: String },
    phoneNumber: { required: true, type: String },
    producerID: { type: String },
    state: { required: true, type: String },
    updatedAt: { type: Date },
    username: { type:String },
    
},{ versionKey:false });

module.exports = mongoose.model('User', UserSchema);
