import User from '../models/user.model'
import _ from 'lodash'
import errorHandler from '../helpers/dbErrorHandler'

const create = async (req, res, next) => {
    
    /**req.body is a user Json object */
    const user = new User(req.body)
    console.log(user)
    try {
      await user.save();
	    return res.status(200).json({
		    message: "successfully signed up"
	    })
    }catch (err){
	return res.status(400).json({
		error: errorHandler.getErrorMessage(err)
	})
    }

 }

//  const create = async (req, res) => {
//     const user = new User(req.body)
//     try {
//       await user.save()
//       return res.status(200).json({
//         message: "Successfully signed up !"
//       })
//     } catch (err) {
//       return res.status(400).json({
//         error: errorHandler.getErrorMessage(err)
//       })
//     }
//   }


const list = (req, res) => {
 User.find((err, result)=>{
     if(err){
         return res.status(400).json({
             error: errorHandler.getErrorMessage(err)
         })
     }
    res.json(users)
 }).select('name email updated created')
}

const userByID = (req, res, next, id) => {
    User.findById(id).exec((err, user)=> {
        if( err || !user) {
            return res.status('400').json({
                error: 'User not found'
            })
        }
        req.profile = user
        next()
    })
 }
const read = (req, res) => {
    req.profiile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile)
 }
 
const update = (req, res, next) => {
    let user = req.profile;
     user = _.extend(user, req.body);
    user.updated = Date.now();
    user.save((err)=>{
        if(err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json()
    })
 }
const remove = (req, res, next) => { 
    let user = req.profile
    user.remove((err, deletedUser)=>{
        if(err){
            return res.status(400).json({
                error: errorHnalder.getErrorMessage(err)
            })
        }
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined;
        res.json(deletedUser)
    })
 }

export default { create, userByID, read, list, remove, update }
