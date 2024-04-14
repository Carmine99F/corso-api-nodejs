import express from "express";
import { v4 as uuidv4} from 'uuid';
import { insertUser ,getAllUsers,getUserByID,updateUser,deleteUser} from '../controllers/users.js';

const router = express.Router();

let users = [];

// router.get('/',(req,res)=>{
//     res.send(users);
// })

// router.post('/',(req,res)=>{
//     const user = req.body;
//     const id = uuidv4();
//     const userWithID = {...user,id:id};
//    users.push(userWithID);
//    res.send(`L'uente con email ${user.email} è stato aggiunto con successo`);
// })

// router.get('/:id',(req,res)=>{
//     const { id } = req.params;
//     const user = users.find((u)=>u.id === id);
//     res.send(user)
// })

// router.delete('/:id',(req,res)=>{
//     const { id } = req.params;
//     users = users.filter((u)=> u.id !== id);
//     res.send(`L'uente con id ${id} è stato eliminato con successo`);
// })

// //path modidica solo alcune proprietà , put sostituisce tutto l'oggetto
// router.patch('/:id',(req,res)=>{
//     const {id} = req.params;
//     const {nome, cognome,email} = req.body;
//     const userTrovato = users.find((u)=> u.id===id);
//     if(nome){
//         userTrovato.nome = nome;
//     }
//     if(cognome){
//         userTrovato.cognome = cognome;
//     }
//     if(email){
//         userTrovato.email = email;
//     }
//     res.send(`L'uente con id ${id} è stato modificato con successo`);

// })
router.get('/',getAllUsers);
router.post('/',insertUser);
router.get('/:id',getUserByID);
router.delete('/:id',deleteUser);
//path modidica solo alcune proprietà , put sostituisce tutto l'oggetto
router.patch('/:id',updateUser);

export default router;