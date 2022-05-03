const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Config
dotenv.config({path:"config/config.env"});

// connect Database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
});