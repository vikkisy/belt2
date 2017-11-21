var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = {

    create: (req, res) => {
        console.log("came into create question");
        console.log(req.body);

        var newQuest = new Question(req.body);
        newQuest.save((err, savedQuest) => {
            if (err) {
                console.log("error saving new question");
                res.json(err);
            } else {
                console.log("successfully saved new question");
                res.json(savedQuest);
            }
        })
    },

    delete: (req, res) => {
        console.log('delete');
        Question.remove({_id: req.params.id}, (err)=> {
            if(err){
                console.log("error deleting")
            } else {
                console.log("success")
                res.redirect('/dashboard');
            }
        })
    },
    // question: (req, res) => {
    //     console.log("came into create question");
    //     User.findOne({ _id: req.params.id }, (err, user) => {
    //         var question = new Question(req.body);
    //         question._user = user._id;
    //         question.save((err) => {
    //             user.questions.push(question);
    //             user.save((err) => {
    //                 if (err) {
    //                     console.log("error saving question");
    //                     res.json(err);
    //                 } else {
    //                     res.json(question);
    //                 }
    //             })
    //         })
    //     })
    // },

    allQuestions: (req, res) => {
        Question.find({}, (err, allQs) => {
            if (err) {
                console.log("error loading questions");
                rees.json(err);
            } else {
                console.log("found all questions");
                res.json(allQs);
            }
        })
    },

    getOne: (req, res) => {
        Question.find({_id: req.params.id}, (err, question) => {
            if(err) {
                console.log("error finding quesiton", err);
            } else {
                console.log("success finding question", question);
                res.json(question);
            }
        })
    },

    vote1: (req, res) => {
        console.log("inside vote", req.params.id, req.params.vid)
        var vote = req.params.vid;
        console.log("vote number", vote);
        Question.update({_id: req.params.id}, { $inc: {vote1: 1} }, (err, question) =>{
            if(err){
                console.log("error voting");
                res.json(question);
            } else {
                console.log("voted", question);
            }
        })

    },

    vote2: (req, res) => {
        console.log("inside vote", req.params.id, req.params.vid)
        var vote = req.params.vid;
        console.log("vote number", vote);
        Question.update({ _id: req.params.id }, { $inc: { vote2: 1 } }, (err, question) => {
            if (err) {
                console.log("error voting");
                res.json(question);
            } else {
                console.log("voted", question);
            }
        })

    },

    vote3: (req, res) => {
        console.log("inside vote", req.params.id, req.params.vid)
        var vote = req.params.vid;
        console.log("vote number", vote);
        Question.update({ _id: req.params.id }, { $inc: { vote3: 1 } }, (err, question) => {
            if (err) {
                console.log("error voting");
                res.json(question);
            } else {
                console.log("voted", question);
            }
        })

    },

    vote4: (req, res) => {
        console.log("inside vote", req.params.id, req.params.vid)
        var vote = req.params.vid;
        console.log("vote number", vote);
        Question.update({ _id: req.params.id }, { $inc: { vote4: 1 } }, (err, question) => {
            if (err) {
                console.log("error voting");
                res.json(question);
            } else {
                console.log("voted", question);
            }
        })

    }




}