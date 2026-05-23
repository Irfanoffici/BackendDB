
const express = require('express')
const app = express();
app.use(express.json())
const hotelRouter = require('./routers/hotelRoutes')
const hotelController = require('./controllers/hotelController');
const userRouter = require('./routers/userRoutes');
const morgan = require('morgan');

app.use(express.static('./public/'))
app.use(morgan('dev'))
app.use('/api/v1/hotels',hotelRouter)
app.use('/api/v1/users',userRouter)

app.param('id',(request,response,next,val)=>{
    console.log('user data is fetched with the value:', val);
})


// app.get('/api/hotels',(request,response) => {
//     response.status(200).send({"status":"success","message":"all hotels datas are fetched"})
// });
// app.get('/api/hotels/:id',(request,response) =>{
//     response.status(404).send({"status":"success","message":"all hotel datas are fetched","id":54321})
// });   
// app.get('/api/hotels/:id/:customer',(request,response) => {
//     response.status(200).send({"status":"success","name":"aksyapriya"})
// });
// app.get('/api/hotels/:id/:customer/:room',(request,response)=>{
//     response.status(200).send( [
//   { id: 1, name: "aksya", age:  22 },
//   { id: 2, name: "Priya", age: 21 },
//   { id: 3, name: "praveen", age: 23 }
// ])
// })

// // GET localhost:3000/api/v1/hotels

// app.get('/api/v1/hotels', hotelController.getAllHotels)   

// // POST localhost:3000/api/v1/hotels

// app.post('/api/v1/hotels',hotelController.createHotels)

// // GET  localhost:3000/api/v1/hotels/10

// app.get('/api/v1/hotels/:id{/:name}',hotelController.getHotelById)

// // PATCH 

// app.patch('/api/v1/hotels/:id{/:name}',hotelController.updatedHotel)

// // DELETE localhost:3000/api/v1/hotels/:id'

// app.delete('/api/v1/hotels/:id',hotelController.deleteHotel)

// CHAINING ROUTES

// app.route('/api/v1/hotels')
// .get(hotelController.getAllHotels)
// .post(hotelController.createHotels)

// app.route('/api/v1/hotels/:id')
// .get(hotelController.getHotelById)
// .patch(hotelController.updatedHotel)
// .delete(hotelController.deleteHotel)

const logger = (request,response,next)=>{}
app.use(logger);
app.use('/api/v1/hotels',hotelRouter)
app.use((request, response, next) => {
    response.requestTime = new Date().toISOString();
    console.log(response.requestTime);
    next();
});


module.exports = app;