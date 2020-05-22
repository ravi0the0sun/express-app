// import express from 'express';
// import graphqlHTTP from 'express-graphql';
// import buildSchema from 'graphql';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

