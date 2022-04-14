const usersDB = require('../posts/posts-model') 


function logger(req, res, next) {
  console.log(req.method,req.url, new Date())
  next()
}

async function validateUserId(req, res, next) {
  const { id } = req.params
  const exists = await usersDB.getById(id)
  if(!exists) {next({message:'user not found',status:404})}
  req.user = exists
  next()
}

function validateUser(req, res, next) {
const {name} = req.body
if(typeof name != 'string' || !name || name.trim() == '') return next({message:'missing required name field',status:400})
req.newUser = req.body
next() 
}

function validatePost(req, res, next) {
  const {text} = req.body
  if(typeof text != 'string' || !text || text.trim() == '') return next({message:'missing required text field',status:400})
  req.newUser = req.body
  next() 
}

function errorHandler(err,req,res,next){
  console.log('here')
  res.status(err.status).json({message:err.message})
  next()
}

module.exports = { 
  logger,
  validateUserId,
  validateUser,
  validatePost,
  errorHandler
}
