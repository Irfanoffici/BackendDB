const express = require('express');
const hotelController = require('./../controllers/hotelController');
const hotelRouter = express.Router();

hotelRouter.param("id",hotelController.checkHotelExists)

hotelRouter.route('/')
         .get(hotelController.getAllHotels)
         .post(hotelController.createHotel)

hotelRouter.route('/:id')
         .get(hotelController.getHotelById)
         .put(hotelController.updatedHotel)
         .patch(hotelController.updatedHotel)
         .delete(hotelController.deleteHotel)


module.exports=hotelRouter

