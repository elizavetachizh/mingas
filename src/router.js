const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const graphql = require("graphql");

const PORT = 3005;

const app = express();
app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: true,
        schema:schema,
    })
);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})