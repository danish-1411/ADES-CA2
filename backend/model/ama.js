// Name      : Mohd Danish Shafiq
// Class     : DIT 2B22
// Admin no. : p2043483

const db=require('../controller/databaseConfig');

var ama = {
    newSession: function (sessionID, ownerID, callback) {
    
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = `
                INSERT INTO
                    adesca2.session
                    (sessionID, ownerID)
                VALUES
                    (?, ?);
                    `;

                conn.query(sql, [sessionID, ownerID], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    getSession: function (callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = ` SELECT 
                                *
                            FROM 
                                adesca2.session
                            `;
                conn.query(sql, [], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    deleteSession: function (callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = `                             
                DELETE FROM
	                adesca2.session
                    `;
                conn.query(sql, [], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    askQuestions: function (questions, sessionID, callback) {
    
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = `
                INSERT INTO
                    adesca2.question
                    (questions, sessionID)
                VALUES
                    (?, ?);
                    `;

                conn.query(sql, [questions, sessionID], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    }, 
    startSession: function (sessionID, action, callback) {
    
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = `
                UPDATE 
	                adesca2.session
                SET
                    action = ?
                WHERE
                    sessionID = ?;
                `;

                conn.query(sql, [action, sessionID], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    getQuestions: function (callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = ` SELECT 
                                *
                            FROM 
                                adesca2.question
                            `;
                conn.query(sql, [], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    getQuestionsByID: function (questionID, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = ` SELECT 
                                *
                            FROM 
                                adesca2.question
                            WHERE
                                questionID = ?;
                            `;
                conn.query(sql, [questionID], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    postAnswer: function (answer, questionID, callback) {
    
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = `
                INSERT INTO
                    adesca2.answer
                    (answer, questionID)
                VALUES
                    (?, ?);
                    `;

                conn.query(sql, [answer, questionID], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    getAnswerByID: function (questionID, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = ` SELECT 
                                *
                            FROM 
                                adesca2.answer
                            WHERE
                                questionID = ?;
                            `;
                conn.query(sql, [questionID], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    updateStatus: function (questionID, callback) {
    
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = `
                UPDATE 
	                adesca2.question
                SET
                    status = 'answered'
                WHERE
                    questionID = ?;
                `;

                conn.query(sql, [questionID], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    }

}
module.exports = ama;