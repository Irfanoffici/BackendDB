const app = require('./app');
const mongoose = require('mongoose');

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectionString = 'mongodb+srv://mohammedirfan:Irfan123@mongodb.jclgfxj.mongodb.net/bookmyhotel?appName=mongodb';
mongoose.connect(connectionString)

.then((conn)=>{
    console.log("connected to MongoDB");
})
.catch((err)=>{
    console.log("error connecting to MongoDB",err);
})




const port = 3000;
app.listen(port, 'localhost', () => {
    console.log("Express js server started")
})
