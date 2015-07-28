var db = require('monk')('localhost/javascript-promises-examples')

var users = db.get('users')

users.remove({}).then(function (err) {
  users.insert({name: 'Joe'}).then(function (err, result) {
    users.insert({name: 'Sue'}).then(function (err, result) {
      users.insert({name: 'Tim'}).then(function (err, result) {
        users.insert({name: 'Kim'}).then(function (err, result) {
          users.find({}).then(function (results) {
            console.log(arguments);
            console.log("\nSuccess! The records are: \n");
            console.log(results);
            db.close()
          })
        })
      })
    })
  })
})
