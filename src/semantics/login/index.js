import './index.css';
import { useState } from 'react';
import gameAPI from '../../api/index.js'



function Login(props) {
  const [login, setLogin] = useState("Login");
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  function loginHandler() {
    if (login === "Login") {
      gameAPI.postLogin({
        email: loginValue, 
        password: passwordValue,
      })
      .then((result) => props.setUser(result))
      .catch((result) => console.log(result))
    } else if (login === "Registration") {
      gameAPI.postRegister({
        email: loginValue, 
        password: passwordValue,
        name: nameValue,
      })
      .then(() => 
        gameAPI.postLogin({
          email: loginValue, 
          password: passwordValue,
        })
        .then((result) => props.setUser(result))
      )
      .catch((result) => console.log(result))
    }
    props.setEnter("Menu")
  }








  let screen;
  if (login === "Login") {
    // Первый экран Логина
    screen = 
      <>
        <h1 className="title">Феод</h1>
        <div className="login-action">
        <form className="login-form">
          <div className="row">
            <label htmlFor="login">Логин</label>
            <input type="text" id="login" name="login" onChange={(event) => setLoginValue(event.target.value)}/>
          </div>
          <div className="row">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" onChange={(event ) => setPasswordValue(event.target.value)}/>
          </div>
          <div className="row">
            <div className="come-in button" onClick={loginHandler}>Войти</div>
          </div>
        </form>
          <div className="divider"></div>
          <div className="reg-in button" onClick={() => setLogin("Registration")}>Регистрация<span></span></div>
          <div className="reg-in-social">
            <a className="fb" onClick={() => setLogin("Registration")}></a>
            <a className="vk" onClick={() => setLogin("Registration")}></a>  
            <a className="google" onClick={() => setLogin("Registration")}></a>  
          </div>
        </div>
      </>
  } else if (login === "Registration") {
    // Второй экран Логина
    screen = 
      <>
        <h1 className="title">Феод</h1>
        <form className="login-form">
          <div className="row">
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" onChange={(event) => setNameValue(event.target.value)}/>
          </div>
          <div className="row">
            <label htmlFor="login">E-mail</label>
            <input type="text" id="login" name="login" onChange={(event) => setLoginValue(event.target.value)}/>
          </div>
          <div className="row">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" onChange={(event ) => setPasswordValue(event.target.value)}/>
          </div>
          <div className="row">
            <div className="reg-in button" onClick={loginHandler}>Продолжить<span></span></div>
          </div>
        </form>
      </>
  }
  return (
  	<div className="login">
      {screen}
  	</div>
  );
}

export default Login;
