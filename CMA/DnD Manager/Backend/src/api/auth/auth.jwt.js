import jwt from 'jsonwebtoken';

function getToken(user) {
  const payload = {
    user: user._id,
    role: user.role
  };

  const token = jwt.sign(payload, process.env.AUTH_SECRET_KEY, {expiresIn: process.env.AUTH_EXPIRES_IN});
  return token;
}

function verifyToken(token) {
  const verifyToken = jwt.verify(token, process.env.AUTH_SECRET_KEY, (error, payload) => {
    if (error) {
      throw new Error(error);
    } else {
      return { user: payload.user, role: payload.role };
    }
  })
  return verifyToken;
}

export { getToken, verifyToken };