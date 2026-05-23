const mongoose = require('mongoose');

 const hotelSchema = new mongoose.Schema({
     name: {
         type: String,
         required: [true, 'Hotel name is required'],
         unique: [true, 'Hotel name already exists'],
         minlength: 3,
         maxlength: 100
     },
     city: {
         type: String,
         required: [true, 'City is required']
     },
     country: {
         type: String,
         required: [true, 'Country is required']
     },
     pricePerNight: {
         type: Number,
         required: [true, 'Price per night is required']
     }
 });

 const Hotel = mongoose.model('Hotel', hotelSchema);


     const hotel1 = new Hotel({
     name: 'DB hotel',
         city: 'Chennai',
         country: 'India',
         pricePerNight: 5000
     });


// hotel1.save()

// const bookingSchema = new mongoose.Schema({
//     userName: {
//         type: String,
//         required: [true, 'User name is required'],
//         minlength: 3,
//         maxlength: 100
//     },
//     hotelName: {
//         type: String,
//         required: [true, 'Hotel name is required']
//     },
//     city: {
//         type: String,
//         required: [true, 'City is required']
//     },
//     checkIn: {
//         type: Date,
//         required: [true, 'Check-in date is required']
//     },
//     checkOut: {
//         type: Date,
//         required: [true, 'Check-out date is required']
//     },
//     guests: {
//         type: Number,
//         required: [true, 'Number of guests is required'],
//         min: 1
//     },
//     totalPrice: {
//         type: Number,
//         required: [true, 'Total price is required'],
//         min: 0
//     },
//     status: {
//         type: String,
//         required: [true, 'Booking status is required'],
//         enum: ['Confirmed', 'Pending', 'Cancelled'],
//         default: 'Pending'
//     }
// });



//  const Booking = mongoose.model('Booking', bookingSchema);
//  const booking1 = new Booking({
//      userName: 'Mohammed Irfan',
//      hotelName: 'Aksya hotel',
//      city: 'Chennai',
//      checkIn: new Date('2024-07-01'),
//      checkOut: new Date('2024-07-05'),
//      guests: 2,
//      totalPrice: 20000,
//      status: 'Confirmed'
//  });

//  booking1.save()

module.exports = Hotel;