import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
  res.json({
    message: 'API is working !',
  });
}

// update user

export const updateUser = async(req, res, next) => {
  if (req.user.id !== req.params.id) {
    // return res.status(401).json({ message: 'You are not allowed to update this user' });
    return next(errorHandler(401, 'You can update only your account'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updateUser = User.findByIdAndUpdate(req.params.id, {
      $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }
    }, { new: true });
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest)  
     
  } catch (error) {
    next(error);    
  }
}