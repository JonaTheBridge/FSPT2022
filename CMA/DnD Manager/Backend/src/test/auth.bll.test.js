import * as BLL from '../api/auth/auth.bll.js';
import sha256 from 'crypto-js/sha256.js'; 
import * as Repository from '../api/users/users.repository.js';
import * as JWT from '../api/auth/auth.jwt.js';

jest
  .mock('crypto-js/sha256.js')
  .mock('../api/users/users.repository.js')
  .mock('../api/auth/auth.jwt.js')

const userObj = {
  id: "testId",
  username: "testUsername",
  email: "testEmail",
  role: "testRole",
  password: "HASHED PASSWORD"
}

beforeEach(() => {
  jest.resetAllMocks();
  sha256.mockImplementation(() => {return "HASHED PASSWORD"});
  Repository.getUserByEmail.mockImplementation(() => Promise.resolve(userObj));
  Repository.getUserByUsername.mockImplementation(() => Promise.resolve(userObj));
  Repository.createUser.mockImplementation(() => Promise.resolve(userObj));
  Repository.updateUserById.mockImplementation(() => Promise.resolve(userObj));
  Repository.deleteUserById.mockImplementation(() => Promise.resolve(userObj));
  JWT.getToken.mockImplementation(() => ({token: "HASHED TOKEN"}));
  JWT.verifyToken
    .mockImplementationOnce(() => ({id: "testId", role: "testRole"}))
    .mockImplementationOnce(() => {throw new Error("TOKEN ERROR")})
})

describe("AUTHENTICATION BLL TESTING", () => {
  test("LOGIN (with email)", async () => {
		const result = await BLL.login(true, {id: "email", password: "RAW PASSWORD"});

    expect(sha256).toHaveBeenCalledTimes(1);
    expect(sha256).toHaveBeenCalledWith("RAW PASSWORD");

    expect(Repository.getUserByEmail).toHaveBeenCalledTimes(1);
    expect(Repository.getUserByEmail).toHaveBeenCalledWith("email");
    
    expect(Repository.getUserByUsername).toHaveBeenCalledTimes(0);

    expect(JWT.getToken).toHaveBeenCalledTimes(1);
    expect(JWT.getToken).toHaveBeenCalledWith(userObj);

    expect(result.token).toBe("HASHED TOKEN");
	})

  test("LOGIN (with username)", async () => {
		const result = await BLL.login(false, {id: "username", password: "RAW PASSWORD"});

    expect(sha256).toHaveBeenCalledTimes(1);
    expect(sha256).toHaveBeenCalledWith("RAW PASSWORD");

    expect(Repository.getUserByUsername).toHaveBeenCalledTimes(1);
    expect(Repository.getUserByUsername).toHaveBeenCalledWith("username");

    expect(Repository.getUserByEmail).toHaveBeenCalledTimes(0);

    expect(JWT.getToken).toHaveBeenCalledTimes(1);
    expect(JWT.getToken).toHaveBeenCalledWith(userObj);

    expect(result.token).toBe("HASHED TOKEN");
	})

  test("REGISTER", async () => {
		const result = await BLL.register({username: "username", email: "email", password: "RAW PASSWORD"});

    expect(sha256).toHaveBeenCalledTimes(1);
    expect(sha256).toHaveBeenCalledWith("RAW PASSWORD");

    expect(Repository.createUser).toHaveBeenCalledTimes(1);
    expect(Repository.createUser).toHaveBeenCalledWith("username", "email", "HASHED PASSWORD");

    expect(JWT.getToken).toHaveBeenCalledTimes(1);
    expect(JWT.getToken).toHaveBeenCalledWith(userObj);

    expect(result.token).toBe("HASHED TOKEN");
	})

  test("UPDATE USER", async () => {
		const result = await BLL.updateUser("testId", {email: "updatedEmail", password: "RAW PASSWORD"});

    expect(sha256).toHaveBeenCalledTimes(1);
    expect(sha256).toHaveBeenCalledWith("RAW PASSWORD");

    expect(Repository.updateUserById).toHaveBeenCalledTimes(1);
    expect(Repository.updateUserById).toHaveBeenCalledWith("testId", {email: "updatedEmail", encryptedPassword: "HASHED PASSWORD"});

    expect(result).toBe(userObj);
	})

  test("DELETE USER", async () => {
		const result = await BLL.deleteUser("testId");

    expect(Repository.deleteUserById).toHaveBeenCalledTimes(1);
    expect(Repository.deleteUserById).toHaveBeenCalledWith("testId");

    expect(result).toBe(userObj);
	})
})