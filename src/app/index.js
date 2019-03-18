const mongoose = require('mongoose');
const stage = process.env.stage || 'dev'
const enviromentConfig = require('./../../enviroment.env')[stage]

// Database config
mongoose.connect(enviromentConfig.db,  {
    useNewUrlParser: true, 
    useFindAndModify: false
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => { console.error(error) });

const app = require('./server/app');
app.set('port', enviromentConfig.port);

const server = app.listen(app.get('port'), () => {
    console.log(`Server running at ${server.address().port}`);
});