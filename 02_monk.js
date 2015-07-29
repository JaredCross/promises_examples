var db = require('monk')('localhost/javascript-promises-examples')

var users = db.get('users')

users.remove({}).then(function (err) {
  users.insert({name: 'Joe'}).then(function (result) {
    users.insert({name: 'Sue'}).then(function (result) {
      users.insert({name: 'Tim'}).then(function (result) {
        users.insert({name: 'Kim'}).then(function (result) {
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

users.remove({}).then(function () {
  return users.insert({name: 'Joe'})
}).then(function () {
  return users.insert({name: 'Sue'})
}).then(function (records) {
  return users.find({})
}).then(function(records) {
  console.log(records);
  db.close();
});
