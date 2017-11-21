var Users = require('../controllers/users.js')
var Questions = require('../controllers/questions.js')
var path = require('path');
module.exports = (app) => {
    app.get('/');
    app.get('/api/current', Users.getCurrentUser);
    app.post('/api/reg', Users.register);
    app.post('/api/question', Questions.create);
    app.get('/api/question', Questions.allQuestions);
    app.get('/api/question/:id', Questions.getOne);
    app.post('/api/vote/:id/1', Questions.vote1);
    app.post('/api/vote/:id/2', Questions.vote2);
    app.post('/api/vote/:id/3', Questions.vote3);
    app.post('/api/vote/:id/4', Questions.vote4);
    // app.post('/api/answer/like/:id', Answers.like);
    // app.get('/api/question/one', Questions.getAnswers);
    app.get('/delete/:id', Questions.delete);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}