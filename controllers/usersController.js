const { validationResult } = require("express-validator")
const jsonTable = require('../database/jsonTable');
const users = jsonTable('users');

const usersControllers = {
    userLogin:(req, res) => {res.render('users/userLogin')},
    
    processLogin:(req, res) => {res.render('users/userLogin')},

    userRegister:(req, res) => { res.render('users/userRegister');
    },

    processRegister: (req, res) => {
       
        const resultvalidations = validationResult(req);
        
		let newUser = req.body

        if(!resultvalidations.isEmpty())
        {
            res.render('users/userRegister',{
                errors: resultvalidations.mapped(),
                oldData: req.body
            })}
         else{
            
            const porMail=users.findByField("email",req.body.email)
             if(porMail){
               return res.render('users/userRegister',{
                    errors:{email:{msg:"Este mail esta registrado"}},
                    oldData: req.body,
                
                });
             }

            users.createUser(newUser, req)
            res.redirect('/')
        }
    },
    userEdit:(req, res) => {
        const IdUser = req.params.id;
		const userToEdit = users.find(IdUser);

		res.render('users/userEdit', {userToEdit: userToEdit})
    },

    processEdit: (req, res)=> {
        const resultvalidations = validationResult(req);
        const IdUser = req.params.id;
        const userToEdit = users.find(IdUser);
		const keepImage = userToEdit.avatar
        
		let userEdited = req.body
        
        if(!resultvalidations.isEmpty())
        {
            res.render('users/userEdit',{
                errors: resultvalidations.mapped(),
                oldData: req.body,
                userToEdit : userToEdit
            })}
        else
        {
            users.updateUser(userEdited, req, keepImage, IdUser)
            res.redirect('/')
        }
    },

    userDestroy: (req, res) => {
		const Iduser = req.params.id

		users.delete(Iduser)

		res.redirect('/')
	}
}

module.exports= usersControllers