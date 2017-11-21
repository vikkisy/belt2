// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength: 2},
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
}, { timestamps: true })
// register the schema as a model
var User = mongoose.model('User', UserSchema);