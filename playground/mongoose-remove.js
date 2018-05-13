const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findAndRemove(_id: '5af8586dfd36ed53ee67a744').then((todo) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove('5af8586dfd36ed53ee67a744').then((todo) => {
//   console.log(todo);
// });
