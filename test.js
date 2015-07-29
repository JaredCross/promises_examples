
function test () {
  var value = 10;
  var promiseForValue = Promise.resolve(value);
  return promiseForValue;
}



console.log(test());

test().then(function (data) {
  console.log(data);
});

The first user is:  Object {username: "peter", name: "Peter"}
(index):97 The full user data is:  Object {id: 42, name: "Peter", email: "pdawg@example.com", bookmarks_path: "/data/users/57/bookmarks.json"}
(index):101 The user's username is:  peter
(index):102 The user's email is:  pdawg@example.com
(index):103 The user's bookmarks are:  ["http://api.jquery.com/jquery.ajax/", "http://api.jquery.com/deferred.then/"]


// function promiseReturn () {
//   var scope = {};
//   $.getJSON('/data/users.json').then(function (users) {
//     var firstUser = users[0];
//     var lastUser = users[users.length-1];
//     scope.firstUser = firstUser;
//     scope.lastUser = lastUser;
//     return $.getJSON('/data/users/' + firstUser.username + '.json');
//   }).then(function (user) {
//     scope.firstUserFull = user;
//     return $.getJSON(user.bookmarks_path);
//   }).then(function (bookmarks) {
//     scope.firstUser.bookmarks = bookmarks;
//     return $.getJSON('/data/users/' + secondUser.username + '.json');
//   }).then(function (user) {
//     scope.secondUserFull = user;
//     return $.getJSON(user.bookmarks_path);
//   }).then(function (bookmarks) {
//     scope.secondUser.bookmarks = bookmarks;
//   });
//
//   var promisedValue = Promise.resolve(scope);
//   return promisedValue;
// }
//
// document.querySelector('[data-behavior=get-first]').addEventListener('click', function (e) {
//   e.preventDefault()
//   promisedValue.then(function (data) {
//   console.log('The first user is: ', data.firstUser);
//   console.log('The full user data is: ', data.firstUserFull);
//   console.log("The user's username is: ", data.firstUser.username);
//   console.log("The user's email is: ", data.firstUserFull.email);
//   console.log("The user's bookmarks are: ", data.firstUser.bookmarks);
//   document.querySelector('[data-container=first]').innerText = [
//     "The user with the username",
//     data.firstUser.username,
//     "and the email",
//     data.firstUserFull.email,
//     "has bookmarked",
//     data.firstUser.bookmarks.join(", ")
//   ].join(" ")
// });
//
//
//
//   }).then(function (user) {
//     console.log(user);
//     scope.user = user;
//     console.log('The full user data is: ', user);
//     return $.getJSON(user.bookmarks_path);
//   }).then(function (bookmarks) {
//     scope.bookmarks = bookmarks;
//
//   });
// });
