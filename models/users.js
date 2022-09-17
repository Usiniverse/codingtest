const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nickname: String,
  password: String,
  confirmPassword: String,
});

UserSchema.virtual('userId').get(function () { 
    return this._id.toHexString(); 
});

UserSchema.set('toJSON', { virtuals: true });

const user = mongoose.model("user", UserSchema);

module.exports = user;