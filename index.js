// /index.js
const app = require('./src/app');
const config = require('./src/config/config');

app.listen(port, () => {
    console.log(`Example app listening on port ${config.port}`)
})