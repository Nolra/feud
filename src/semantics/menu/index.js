import './index.css';
import { useState } from 'react';

function Menu(props) {
  const [hello, setHello] = useState(false);

	function toGo(value, load) {
		props.setEnter(value)
		if (load) {
			props.save.load = true
		}
	}
    // Приветсвенный текст для нового пользователя
	if (hello) {
		return (
			<div className="hello">
	      <p>
	        Добро пожаловать в <span>Феод</span> — самое большое территориальное образование на планете, гражданином тебе посчастливилось родиться. 
	        <br/><br/>
	        Скорее всего, ты не подозревал, что родился в Феоде, потому что с самого детства тебе рассказывали совсем другие вещи о стране и людях, которые в ней живут.
	        <br/><br/>
	        Но если ты внимательно посмотришь по сторонам то увидишь, что фантастическое, безжалостное и героическое прошлое никуда не делось - оно давно обогнало будущее и заняло его место.
	        <br/><br/>
	        В следующие три дня ты будешь постоянно принимать решения. Да или нет, согласиться или не согласиться, ударить или подставить другую щеку, выйти погулять или остаться дома.
	        <br/><br/>
	        По окончанию каждого дня ты получишь на почту приглашение на следующий день. От твоего выбора будет много зависеть. Или мало. Как пойдет.
	        <br/><br/>
	        Куда несется эта тройка мы тебе не скажем, потому что сами едем в ней. До встречи.
	        <br/><br/>
	        <div className="row">
	          <div className="come-in button" onClick={() => toGo("Game", false)}>Начать</div>
	        </div>
	      </p>
	     </div>
			)
	}

  return (
    <div className="menu">
    	<h1>Меню</h1>
	  	<ul>
	  		<li>
		  		<button 
			  		className="button" 
			  		disabled={props.menu[0]}
			  		onClick={() => setHello(true)}
		  		>
		  		Начать</button>
	  		</li>
	  		<li>
	  			<button 
		  			className="button" 
		  			disabled={props.menu[1]}
		  			onClick={() => toGo("Game", true)}
	  			>
	  			Продолжить
	  			</button>
	  		</li>
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
