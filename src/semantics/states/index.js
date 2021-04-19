import './index.css';
import Modal from '../../ui/modal/index.js'

import { useState } from 'react';

function States(props) {

  const [stateСhoice, setStateСhoice] = useState("");
  const [modal, setModal] = useState({show: false, src: "", alt: ""});

 	function onChoice(choice) {setStateСhoice(choice)}
  function toGo(value) {props.setEnter(value)}

  function onModal(event) {
		setModal({
	  	show: true,
	  	src: event.target.src,
	  	alt: event.target.alt
  	});
	}

 	// ЗАГЛУШКА
 	const data = {
 		globalStates : [
	 		{src: "bag", alt: "Мешок"},
	 		{src: "vine", alt: "Лоза"},
	 		{src: "bumm", alt: "Бумм!"}
 		],
 		localStates : [
	 		{src: "bat", alt: "Летучая мышь"},
	 		{src: "candle", alt: "Огарок свечи"},
	 		{src: "dagger", alt: "Кинжал"},
	 		{src: "map", alt: "Карты"},
	 		{src: "hammer", alt: "Молоток"}
	 	]
 	}



	const listGlobal = data.globalStates.map( (name, index) =>
	  <img 
		  src={require(`../../images/globalStates/${name.src}.png`).default} 
		  key={index} 
		  alt={name.alt} 
		  onClick={(event) => onModal(event)} 
	  />
	)

	const listLocal = data.localStates.map( (name, index) => 
	   <img 
		   src={require(`../../images/localStates/${name.src}.png`).default} 
		   key={index} 
		   alt={name.alt}
		   onClick={(event) => onModal(event)} 
	   />
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
    	<Modal modal={modal} setModal={setModal }/>
    </div>
  );
}

export default States;
