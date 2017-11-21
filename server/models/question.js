
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    text: { type: String, required: true, minlength: 8 },
    opt1: { type: String, required: true, minlength: 3},
    vote1: { type: Number},
    opt2: { type: String, required: true, minlength: 3 },
    vote2: { type: Number },
    opt3: { type: String, required: true, minlength: 3 },
    vote3: { type: Number },
    opt4: { type: String, required: true, minlength: 3 },
    vote4: { type: Number },
}, { timestamps: true });

var Question = mongoose.model('Question', QuestionSchema);