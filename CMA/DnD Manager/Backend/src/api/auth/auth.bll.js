import sha256 from 'crypto-js/sha256.js'; 
import * as Jwt from './auth.jwt.js';
import * as Repository from '../users/users.repository.js';

async function login(isEmail, inputs) {
  const { id, password } = inputs;
  const encryptedPassword = sha256(password).toString();
  const user = isEmail ? await Repository.getUserByEmail(id) : await Repository.getUserByUsername(id);
  if ( user.password === encryptedPassword ) {
    return Jwt.getToken(user);
  } else {
    throw new Error("Wrong password.");
  }
}

async function register(inputs) {
  const { username, email, password } = inputs;
  const encryptedPassword = sha256(password).toString();
  const user = await Repository.createUser(username, email, encryptedPassword);
  const token = Jwt.getToken(user);
  return token;
}

async function updateUser(id, inputs) {
  const { email, password } = inputs;
  const encryptedPassword = sha256(password).toString();
  const results = await Repository.updateUserById(id, {email, encryptedPassword});
  return results;
}

async function deleteUser(id) {
  const results = await Repository.deleteUserById(id);
  return results;
}

export { login, register, updateUser, deleteUser };