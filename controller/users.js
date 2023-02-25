import { v4 as uuid} from 'uuid';


let users=[]



export const getUsers = (req,res)=>{
    res.send(users)
}
export const createUser = (req,res)=>{
    const user = req.body;

    users.push({...user,id:uuid()})
    res.send("Details added sucessfully!p")
} 

export const getUser = (req,res)=>{
    const individualUser = users.filter((user)=> user.id === req.params.id)
    res.send(individualUser)
} 
export const updateUser = (req,res)=>{
    const user = users.find((user)=> user.id === req.params.id)
    user.name = req.body.name
    user.email = req.body.email
    user.contact = req.body.contact
    res.send("user updated successfully! happy")

}