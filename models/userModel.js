var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');

var UserSchema = new mongoose.Schema({
	firstName: {type: String, require: true},
	lastName: {type: String, require: true},
	username: {type: String, unique: true, require: true},
	password: {type: String, require: true}
});

//validation hook for the middleware. What this will do is not execute the "save" until the "done" has been fully executed until the authentication has been fully executed. 

UserSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		this.password = bcrypt.hashSync(this.password, 10);
	}
	next();
});

UserSchema.methods.authenticate = function(passwordTry) {
	return bcrypt.compareSync(passwordTry, this.password);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;