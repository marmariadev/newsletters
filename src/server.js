// /src/server.js
const app = require('./app');
const { port } = require('./config/config');
const databaseConnect = require('./config/database');

const serverStart = async () => {
    try {
        await databaseConnect();
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (error) {
        console.log('Error starting Express server:', error);
        process.exit(1);
    }
};

module.exports = serverStart;
