import { ObjectId } from 'mongodb';
import userModel from '../users/users.model.js';

async function createUser(username, email, password) {
  const usernameExists = await userModel.findOne({username}).exec();
  if (usernameExists) {throw new Error("Username already registered.")}

  const emailExists = await userModel.findOne({email}).exec();
  if (emailExists) {throw new Error("Email already registered.")}

  const user = await userModel.create({username, email, password});
  return user;
}

async function getUserById(id) {
  const user = await userModel.findOne({_id: ObjectId(id)}).exec();
  if (!user) {throw new Error("User not found.")}
  else {return user}
}

async function getUserByUsername(username) {
  const user = await userModel.findOne({username}).exec();
  if (!user) {throw new Error("User not found.")}
  else {return user}
}

async function getUserByEmail(email) {
  const user = await userModel.findOne({email}).exec();
  if (!user) {throw new Error("User not found.")}
  else {return user}
}

async function updateUserById(id, newUserData) {
  const user = await userModel.findOneAndUpdate({_id: ObjectId(id)}, newUserData).exec();
  if (!user) {throw new Error("User not found.")}
  const newUser = await userModel.findOne({_id: ObjectId(id)}).exec();
  return newUser;
}

async function deleteUserById(id) {
  const user = await userModel.findOneAndDelete({_id: ObjectId(id)}).exec();
  if (!user) {throw new Error("User not found.")}
  else {return user}
}

export {
  createUser,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};