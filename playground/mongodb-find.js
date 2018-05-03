const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');
  
  db.collection('Todos').find().count().then((count) => {
    console.log(`\nTodos count: ${count}`);
  }, (err) => {
     console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find({
    _id: new ObjectID('5aeb3842fac954db8734e966')
  }).toArray().then((docs) => {
    console.log('\nTodos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
     console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find().count().then((count) => {
    console.log(`\nUsers count: ${count}`);
  }, (err) => {
     console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name: 'Dreed'}).toArray().then((docs) => {
    console.log('\nUsers');
    console.log('/n', JSON.stringify(docs, undefined, 2));
  }, (err) => {
     console.log('Unable to fetch todos', err);
  });

  // client.close();
});
