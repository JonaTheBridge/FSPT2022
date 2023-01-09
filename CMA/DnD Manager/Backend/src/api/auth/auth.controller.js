import * as BLL from './auth.bll.js';
import * as Jwt from './auth.jwt.js';

function auth(req, res, next) {
  if ((req.url === "/login" || req.url === "/register") && req.method === "POST") {
    return next();
  }

  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json("Authorization token not found.");
  }

  try {
    const { user, role } = Jwt.verifyToken(authorization);
    req.user = user;
    req.role = role;
  } catch (error) {
    return res.status(400).json(error.message);
  }

  // const adminRoutes = [''];
  // if (req.role !== 'admin') {
  //   for (let item of adminRoutes) {
  //     if (req.url.startsWith(item)) {return res.json("Unauthorized.").status(401)}
  //   }
  // }

  return next();
}

async function login(req, res) {
  const { id, password } = req.body;
  const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const isEmail = id.match(emailRegex) ? true : false;
  try {
    const token = await BLL.login(isEmail, {id, password});
    return res.json({ token });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

async function register(req, res) {
  const { username, password, email } = req.body;
  try {
    const token = await BLL.register({username, password, email});
    return res.json({ token });
  } catch (error) {
    return res.status(400).json(error.message);
  };
}

async function updateUser(req, res) {
  const id = req.user;
  if (!id) {return res.json("Missing ID.")};

  const { email, password } = req.body;
  if (!email && !password) {return res.json("Missing parameters.")};
  
  try {
    const results = await BLL.updateUser(id, {email, password});
    return res.json(results);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

async function deleteUser(req, res) {
  const id = req.user;
  if (!id) {return res.json("Missing ID.")};

  try {
    const results = await BLL.deleteUser(id);
    return res.json(results);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

export { auth, login, register, updateUser, deleteUser };