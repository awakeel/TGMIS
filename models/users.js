var db = require('../dbconnection'); //reference of dbconnection.js

var users = {
    login:function(body,callback){
        return db.query("select * from users where  username=?", [
        body.username 
        ], callback);
    },
    getAll: function (callback) { 
        return db.query("Select * from tbl_application", callback); 
    },
    getById: function (id, callback) { 
        return db.query("select * from users where  userid=?", [id], callback);
    },
    add: function (Task, callback) {
        return db.query("Insert into task values(?,?,?)", [Task.Id, Task.Title, Task.Status], callback);
    },
    delete: function (id, callback) {
        return db.query("delete from task where Id=?", [id], callback);
    },
    update: function (id, Task, callback) {
        return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);
    }

};
module.exports = users;