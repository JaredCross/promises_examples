var db = require('monk')('localhost/javascript-promises-examples')

var users = db.get('users')


// users.remove({}, function (err) {
//   users.insert({name: 'Joe'}, function (err, result) {
//     users.insert({name: 'Sue'}, function (err, result) {
//       users.insert({name: 'Tim'}, function (err, result) {
//         users.insert({name: 'Kim'}, function (err, result) {
//           users.find({}, function (err, results) {
//             console.log("\nSuccess! The records are: \n");
//             console.log(results);
//             db.close()
//           })
//         })
//       })
//     })
//   })
// })

Promise.all(
  [users.remove({}),
   users.insert({name: 'Joe'}),
   users.insert({name: 'Sue'}),
   users.insert({name: 'Tim'}),
   users.insert({name: 'Kim'}),
   users.find({})
 ]).then(function (results) {
     console.log("\nSuccess! The records are: \n");
     var i = 0;
     console.log(results[5]);
     db.close();
});
