var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users')



users.insert({name: 'Harry'}).then(function () {
  console.log(arguments);
  users.insert({name: 'Sally'}).then(function () {
    console.log(arguments);
    users.remove({}).then(function () {
      console.log(arguments);
    })
  })
})
