// /src/server.js
const app = require('./app');
const { port } = require('./config/config');
const database = require('./config/database');

const start = async () => {
    try {
        await database.connect();
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (error) {
        console.log('Error starting Express server:', error);
        process.exit(1);
    }
};

module.exports = { start };
