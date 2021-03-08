import './index.css';
import { useState } from 'react';

function Login() {
  const [login, useLogin] = useState(false);

  function HandleLogin() {
    useLogin(true);
  }

  let screen;
  if (!login) {
    screen = 
      <div className="login-action">
        <div className="come-in button" onClick={HandleLogin}>Войти</div>
        <div className="divider"></div>
        <div className="reg-in button" onClick={HandleLogin}>Регистрация<span></span></div>
        <div className="reg-in-social">
          <a className="fb" onClick={HandleLogin}></a>
          <a className="vk" onClick={HandleLogin}></a>  
          <a className="google" onClick={HandleLogin}></a>  
        </div>
      </div>
  } else {
    screen = 
      <form className="login-form">
        <div className="row">
          <label htmlFor="login">Логин</label>
          <input type="text" id="login" name="login"/>
        </div>
        <div className="row">
          <label htmlFor="password">Пароль</label>
          <input type="text" id="password" name="password"/>
        </div>
      </form>
  }
  return (
  	<div className="login">
  		<h1 className="title">Феод</h1>
      {screen}
  	</div>
  );
}

export default Login;
