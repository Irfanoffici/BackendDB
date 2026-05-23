const fs = require('fs');
let hotels = JSON.parse(fs.readFileSync('./data/hotels.json', 'utf8'));
exports.getAllHotels = (request,response)=>{
    // response.status(200).json({
    //     status:"success",
    //     count:hotels.length,
    //     data: {
    //         hotelsList:hotels
    //     }
    // })
}
exports.createHotels = (request,response)=>{
    // console.log(request.body);
    // const newId = hotels[hotels.length-1].id+1;
    // const newHotel = Object.assign({id:newId},request.body);
    // console.log(newHotel);
    // hotels.push(newHotel);
    
    // fs.writeFile('./data/hotels.json',JSON.stringify(hotels),()=>{
    //     response.status(201).json({
    //         status:"success",
    //         data:{
    //             hotel:newHotel
    //         }
    //     })
    // })
    try{
    const hotel = Hotel(req,body);
    await hotel.save()

    req.status(201).json({
        status:"success",
        data:{
            hotel:hotel
        }
    })
}catch(error){
    req.status(400).json({
        status:"fail",
        message:error.message
    })
}
}
exports.validateHotelData = (request,response,next) => {

    // const body = request.body;

    // if( !body.name || !body.city || !body.country || !body.pricePerNight ){
    //     return response.status(400).json({
    //         status:"fail",
    //         message:"name, city, country and pricePerNight are required fields"
    //     });
    // }
    // next();

}

exports.getHotelById=(request,response)=>{
// const id = +request.params.id*1
// const hotel = hotels.find((item)=> item.id===id)
// // if(!hotel){
// //         response.status(404).json({
// //             "status":"Fail",
// //             "message":"no data found"
// //         })
// //     }
//     response.status(200).json({
//     status:"success",
//     data:{
//         hotel:hotel
//     }
// })
}

exports.updatedHotel=(request,response)=>{
    // request.params
    // const id = +request.params.id
    // const hotelToUpdate = hotels.find(item => item.id==id)
    // // if(!hotel){
    // //     response.status(404).json({
    // //         "status":"Fail",
    // //         "message":"no data found"
    // //     })
    // // }
    // const body = request.body
    // const updatedHotel = Object.assign(hotelToUpdate,body)

    // fs.writeFile('./data/hotels.json',JSON.stringify(hotels),()=>{
    //     response.status(200).json({
    //         status:"success",
    //         data:{
    //             hotel:updatedHotel
    //         }
    //     })
    // })
}


exports.deleteHotel = (request,response)=>{
//     const id = request.params.id*1
//     const hotelToDelete = hotels.find((item)=>item.id===id)
//     // if(!hotelToDelete){
//     //     response.status(404).json({
//     //         "status":"Fail",
//     //         "message":"no data found"
//     //     })
//     // }
//     const index = hotels.indexOf(hotelToDelete)
//     hotels.splice(index,1)

//     fs.writeFile('./data/hotels.json',JSON.stringify(hotels),()=>{
//          response.status(200).json({
//     "status":"success",
//      "message":"hotel deleted successfully"
// })
//     })
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

