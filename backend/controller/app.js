// Name      : Mohd Danish Shafiq
// Class     : DIT 2B22
// Admin no. : p2043483

//---------------------------------------------------------------------
// imports
//---------------------------------------------------------------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var ama = require('../model/ama');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890aabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

var printDebugInfo = function (req, res, next) {
    console.log();
    console.log("----------------( Debug Info )------------------");

    console.log("Servicing " + req.url + "...");

    console.log("> req.params: " + JSON.stringify(req.params));
    console.log("> req.body: " + JSON.stringify(req.body));

    console.log("------------- ( Debug Info Ends )---------------");
    console.log();

    next();
}

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//---------------------------------------------------------------------
// MF configurations
//---------------------------------------------------------------------
app.use(urlEncodedParser);
app.use(jsonParser);

app.options('*', cors());
app.use(cors());

app.post('/session', printDebugInfo, function (req, res) {

    ama.deleteSession(function (err, result) {
        if (!err) {
            var sessionID = nanoid(10);
            var ownerID = nanoid(10);

            ama.newSession(sessionID, ownerID, function (err, result) {
                if (!err) {
                    var output = {
                        "sessionID": sessionID,
                        "ownerID": ownerID
                    };
                    res.status(201).send(output);
                }
                else {
                    res.status(500).send("Unknown error");
                }
            });
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.get('/session', printDebugInfo, function (req, res) {
    ama.getSession(function (err, result) {
        if (!err) {
            console.log({ result }, result.length);
            res.status(200).send(result);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.post('/questions', printDebugInfo, function (req, res) {
    var sessionID = req.body.sessionID;
    var questions = req.body.questions;

    ama.askQuestions(questions, sessionID, function (err, result) {
        if (!err) {
            var output = {
                "sessionID": sessionID,
                "questions": questions
            };
            res.status(201).send(output);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.put('/session/:id', printDebugInfo, function (req, res) {
    var action = req.body.action;
    var sessionID = req.params.id;

    ama.startSession(sessionID, action, function (err, result) {
        if (!err) {
            res.status(204).send(result);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.get('/questions', printDebugInfo, function (req, res) {
    ama.getQuestions(function (err, result) {
        if (!err) {
            console.log({ result }, result.length);
            res.status(200).send(result);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.get('/question/:id', printDebugInfo, function (req, res) {
    var questionID = req.params.id;

    ama.getQuestionsByID(questionID, function (err, result) {
        if (!err) {
            res.status(200).send(result);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.post('/answer', printDebugInfo, function (req, res) {
    var questionID = req.body.questionID;
    var answer = req.body.answer;

    ama.postAnswer(answer, questionID, function (err, result) {
        if (!err) {
            var output = {
                "questionID": questionID,
                "answer": answer
            };
            res.status(201).send(output);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.get('/answer/:id', printDebugInfo, function (req, res) {
    var questionID = req.params.id;

    ama.getAnswerByID(questionID, function (err, result) {
        if (!err) {
            res.status(200).send(result);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.put('/question/:id', printDebugInfo, function (req, res) {
    var questionID = req.params.id;

    ama.updateStatus(questionID, function (err, result) {
        if (!err) {
            res.status(204).send(result);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

app.delete('/session', printDebugInfo, function (req, res) {

    ama.deleteSession(function (err, result) {
        if (!err) {
            res.status(204).send(result);
        }
        else {
            res.status(500).send("Unknown error");
        }
    });
});

module.exports = app;