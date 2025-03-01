const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: {type:String, required: true, unique: true},
    lastName: { type: String },
    address: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    token: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
