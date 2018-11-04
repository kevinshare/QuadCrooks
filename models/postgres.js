/* eslint-disable */
require('dotenv').load();
const pg = require('pg');
// const connString = `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@quadcrooks2.cvc6mfp4k4aq.us-east-1.rds.amazonaws.com:5432/quadcrooks`;

// const client = new pg.Client(connString);
// client.connect(err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connected")
//   }
// });


client.query('CREATE TABLE images(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, description VARCHAR(160), photo VARCHAR(80) not null)', (err, res) => {
  console.log(err, res);
  client.end();
});
client.query('DROP TABLE images', (err, res) => {
  console.log(err, res);
})

client.query('SELECT * from images', (err, res) => {
  if (err) {
    console.log(err);
  }
  client.end();
});

// pool.query('CREATE TABLE images(id SERIAL PRIMARY KEY, name VARCHAR(20) not null, description VARCHAR(160), photo VARCHAR(40))')
//   .then(res => {
//     console.log(res.rows)
//     pool.end();

//   })
//   .catch(e => console.log(e));
