const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('./utils/database');

// routes
const todoRoutes = require('./routes/todo');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/todo', todoRoutes);

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
