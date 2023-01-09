import { useState, useEffect } from 'react';
import { verifyLogin } from '../logic/fetch.js';
import logo from '../icons/logo.svg';
import './login-form.scss';

function LoginForm() {
  const [inputs, setInputs] = useState({});
  const [login, setLogin] = useState({message:''});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await verifyLogin(inputs);
    setLogin(response);
    setInputs({});
  }

  return (
    <>
    <div className='LoginForm'>
      <img src={logo} alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">Usuario o Email: </label><br />
        <input
          id="userId"
          name="id"
          type="text"
          onChange={handleChange}
        /><br />
        <label htmlFor="userPassword">Contraseña: </label><br />
        <input 
          id="userPassword" 
          name="password" 
          type="password"
          onChange={handleChange}
        /><br />
        <button type="submit" >Acceder</button><br />
        <span>{login.message}</span>
      </form>
    </div>
    </>
  )
}

export { LoginForm };

  // if (!username || !password || !email) {
  //   return res.json("Missing username, password and/or email.")
  // };

  // if (password.length < 6) {
  //   return res.json("Password less than 6 characters.")
  // };

  // if (!username.match(userRegex)) {
  //   return res.json("Username must be 5-20 characters long and can only contain: ( a-z, A-Z, 0-9 and _ )");
  // };

  // if (!email.match(emailRegex)) {
  //   return res.json("Invalid email.");
  // };