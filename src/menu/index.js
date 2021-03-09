import './index.css';
import { useState } from 'react';

function Menu(props) {

	function toGo(value) {
		props.setEnter(value)
	}

  return (
    <div className="menu">
    	<h1>Меню</h1>
	  	<ul>
	  		<li><button className="button" disabled={props.menu[0]}>Начать</button></li>
	  		<li><button className="button" disabled={props.menu[1]}>Продолжить</button></li>
	  		<li>
	  			<button 
	  				className="button" 
	  				disabled={props.menu[2]}
	  				onClick={() => toGo("States")}
	  				>
	  				Стейты
	  			</button>
	  		</li>
	  		<li><button className="button" disabled={props.menu[3]}>Карта</button></li>
	  		<li><button className="button" disabled={props.menu[4]}>Бестиарий</button></li>
	  	</ul>
	  	<button className="back-button" onClick={() => toGo("Login")}></button>
    </div>
  );
}

export default Menu;
