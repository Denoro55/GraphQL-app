const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const graphqlHTTP = require('express-graphql');

const sequelize = require('./utils/database');
const resolver = require('./graphql/resolver');
const schema = require('./graphql/schema');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}));

app.use((req, res, next) => {
    res.sendFile('/index.html');
});

async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log('server is listening on port ', PORT);
        });
    } catch (e) {
        console.log(e)
    }
}

start();
