const users=[

    {
        id:1,
        gender:"male",
        name:"Ratul",
        contact:086827447666,
        address:"vodra",
        photoUrl:"https://image.shutterstock.com/image-photo/strange-guy-cigarette-260nw-497596168.jpg"
    
    },
    {
        id:2,
        gender:"male",
        name:"saad",
        contact:086827447666,
        address:"thana",
        photoUrl:"https://image.shutterstock.com/image-photo/strange-guy-cigarette-260nw-497596168.jpg"
    
    },
    {
        id:3,
        gender:"female",
        name:"tamanna",
        contact:086827447666,
        address:"terokhadia",
        photoUrl:"https://image.shutterstock.com/image-photo/strange-guy-cigarette-260nw-497596168.jpg"
    
    },
    {
        id:4,
        gender:"female",
        name:"bristy",
        contact:086827447666,
        address:"laxmipoor",
        photoUrl:"https://image.shutterstock.com/image-photo/strange-guy-cigarette-260nw-497596168.jpg"
    
    },
    {
        id:5,
        gender:"male",
        name:"sajib",
        contact:086827447666,
        address:"malopara",
        photoUrl:"https://image.shutterstock.com/image-photo/strange-guy-cigarette-260nw-497596168.jpg"
    
    },
]


module.exports.getRandomUser=(req,res)=>{
    const randomUserIndex = Math.floor(Math.random() * users.length)
    const randomUser = users[randomUserIndex]
    res.json(randomUser)
}
module.exports.getAllusers=(req,res)=>{
    const {limit}=req.query;
    const userData= users.slice(0,limit)
    res.json(userData)
   

}

module.exports.saveAuSer=(req,res)=>{
    users.push(req.body)
    res.json(users)

}


module.exports.updateAuSer=(req,res)=>{
    const{id}=req.params;
    console.log(id);
    const updateUser=users.find(user=>user.id===Number(id))
    // console.log(updateUser[0].name);
    updateUser.name=req.body.name;
    updateUser.gender=req.body.gender;
    updateUser.contact=req.body.contact;
    updateUser.address=req.body.address;
    updateUser.photoUrl=req.body.photoUrl;
    res.send(updateUser)


}


module.exports.bulkUpdate=(req,res)=>{
    const{id,id2,id3}=req.query;
    const{contact,contact2,contact3}=req.body
    console.log(id,id2,id3);
    const ids=[id,id2,id3]
    console.log(contact,contact2,contact3);
    let multiple =users.find(user=>user.id==id)
    let multiple2 =users.find(user=>user.id==id2)
    let multiple3 =users.find(user=>user.id==id3)

    multiple.contact=req.body.contact;
    multiple2.contact=req.body.contact2;
    multiple3.contact=req.body.contact3;
   
    console.log(multiple.contact,multiple2.contact,multiple3.contact);

    res.send({multiple,multiple2,multiple3})
}


module.exports.deleteAuSer=(req,res)=>{

    const {id}=req.params

   const remainingUser= users.filter(user=>user.id!==Number(id))
   res.send(remainingUser)

}