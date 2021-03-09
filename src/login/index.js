import './index.css';
import { useState } from 'react';

function Login(props) {
  const [login, setLogin] = useState(false);

  function onLogin() {
    setLogin(true);
  }

  function onEnter() {
    props.setEnter("Menu");
  }


  let screen;
  if (!login) {
    screen = 
      <div className="login-action">
        <div className="come-in button" onClick={onLogin}>Войти</div>
        <div className="divider"></div>
        <div className="reg-in button" onClick={onLogin}>Регистрация<span></span></div>
        <div className="reg-in-social">
          <a className="fb" onClick={onLogin}></a>
          <a className="vk" onClick={onLogin}></a>  
          <a className="google" onClick={onLogin}></a>  
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
        <div className="row">
          <div className="come-in button" onClick={onEnter}>Войти</div>
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
