import * as Controller from '../api/auth/auth.controller.js';
import * as BLL from '../api/auth/auth.bll.js';
import * as JWT from '../api/auth/auth.jwt.js';

jest
  .mock('../api/auth/auth.bll.js')

function reqObj(auth, method, url, bodyObj) {
  const reqObj = {};
  if (auth) {reqObj.headers.authorization = "authHeader"}
  if (method) {reqObj.method = method}
  if (url) {reqObj.url = url}
  if (bodyObj) {reqObj.body = body}
  return reqObj
}

beforeEach(() => {
  jest.resetAllMocks();
  BLL.login.mockImplementation(() => Promise.resolve(userObj));
  JWT.verifyToken
  .mockImplementationOnce(() => ({id: "testId", role: "testRole"}))
  .mockImplementationOnce(() => {throw new Error("TOKEN ERROR")})
})

describe("AUTHENTICATION CONTROLLER TESTING", () => {
  test("AUTH", () => {
    const request = reqObj(false, 'POST', '/login', {})
		const result = Controller.auth(true, {id: "email", password: "RAW PASSWORD"});

    expect(sha256).toHaveBeenCalledTimes(1);
    expect(sha256).toHaveBeenCalledWith("RAW PASSWORD");

    expect(Repository.getUserByEmail).toHaveBeenCalledTimes(1);
    expect(Repository.getUserByEmail).toHaveBeenCalledWith("email");
    
    expect(Repository.getUserByUsername).toHaveBeenCalledTimes(0);

    expect(JWT.getToken).toHaveBeenCalledTimes(1);
    expect(JWT.getToken).toHaveBeenCalledWith(userObj);

    expect(result.token).toBe("HASHED TOKEN");
	})
})