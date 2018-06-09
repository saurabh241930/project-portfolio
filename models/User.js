var  mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({

username:String,     
password:String,
fullName:String,
branch:String,
email:String,
profileImage:String

},{ usePushEach: true });



UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);