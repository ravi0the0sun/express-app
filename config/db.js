// exporting database object to set it up in the server.js 
module.exports ={
    // use this to deploy using docker-compose
    //database:'mongodb://mongo:27017/crm'
    
    // use this yo deploy using nodejs
    database: 'mongodb://localhost:27017/crm',
};