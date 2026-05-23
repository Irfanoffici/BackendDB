// const fs = require('fs');

const Hotel = require('../models/hotels');
// let hotels = JSON.parse(fs.readFileSync('./data/hotels.json', 'utf8'));
exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json({
            status: 'success',
            count: hotels.length,
            data: {
                hotels
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: 'Failed to load the data'
        })
    }
}

exports.createHotel = async (req, res) => {
    try {
        // const hotel = Hotel(req.body);
        // const newhotel = await hotel.save()
        const hotel = await Hotel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                hotel: hotel
            }

        })

    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error.message
        })
    }
}
// exports.validateHotelData = (request,response,next) => {

//     // const body = request.body;

//     // if( !body.name || !body.city || !body.country || !body.pricePerNight ){
//     //     return response.status(400).json({
//     //         status:"fail",
//     //         message:"name, city, country and pricePerNight are required fields"
//     //     });
//     // }
//     next();

// }

exports.getHotelById = async (req, res) => {

    try {
        const id = req.params.id;
        const hotel = await Hotel.findById(id);
        res.status(200).json({
            status: "success",
            data: {
                hotel
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: error.message
        });
    }
};

exports.updatedHotel = async (req, res) => {

    try {

        const hotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            status: "success",
            data: {
                hotel
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: error.message
        });
    }
};


exports.deleteHotel = async (req, res) => {
    try {
        const id = req.params.id;
        await Hotel.deleteOne({ _id: id });
        res.status(200).json({
            status: 'success',
            message: 'Data Deleted successfuly'
        })


    } catch (err) {
        res.status(500).json({
            status: 'Fail',
            message: 'Failed to get a Document'
        })
    }
}

exports.checkHotelExists = (req,res,next,id) => {
    // const hotel = hotels.find(hotel => hotel.id === +id);
    // if(!hotel){
    //     return res.status(404).json({
    //         status:"fail",
    //         message:"Hotel not found"
    //     });
    // }
    // next();
}