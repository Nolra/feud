import './index.css';
import { useState } from 'react';

function States(props) {

  const [stateСhoice, setStateСhoice] = useState("");

 	function onChoice(choice) {
 		setStateСhoice(choice)
 		console.log(choice)
 	}

  function toGo(value) {
		props.setEnter(value)
	}





 	// ЗАГЛУШКА
 	const data = {
 		globalStates : ["bag.png", "bumm.png", "vine.png"],
 		localStates : ["bat.png","candle.png","dagger.png", "map.png", "hammer.png"]
 	}





	const listGlobal = data.globalStates.map( (name, index) =>
	  <img src={require(`../images/globalStates/${name}`).default} key={index} />
	)

	const listLocal = data.localStates.map( (name, index) => 
	   <img src={require(`../images/localStates/${name}`).default} key={index} />
	)

	// state navigation
	let screen;
	if (stateСhoice === "Global") {
		screen = 			
			<>
	    	<h1>Глобальные</h1>
	    	{listGlobal}
	    	<button className="back-button" onClick={() => onChoice("")}></button>
    	</>
	} else if (stateСhoice === "Local") {
		screen = 
			<>
	    	<h1>Локальные</h1>
	    	{listLocal}
	    	<button className="back-button" onClick={() => onChoice("")}></button>
    	</>
	} else {
		screen =
			<>
	    	<h1>Стейты</h1>
		  	<ul>
		  		<li><button className="button" onClick={() => onChoice("Local")}>Локальные</button></li>
		  		<li><button className="button" onClick={() => onChoice("Global")}>Глобальные</button></li>
		  	</ul>
		  	<button className="back-button" onClick={() => toGo("Menu")}></button>
    	</>
	}
  return (
    <div className="states">
    	{screen}
    </div>
  );
}

export default States;
