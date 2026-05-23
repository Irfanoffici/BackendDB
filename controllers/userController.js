const fs = require('fs')
let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
exports.getAllUsers = (request, response)=>{
    response.status(200).JSON({
        status:"success",
        count:users.length,
        data:{
            usersList:users
        a}
    })
}

exports.createUser = (request,response)=>{
    console.log(request.body);
    const newId = users[users.length-1].id+1;
    const newUser = Object.assign({id:newId},request.body);
    console.log(newUser);
}