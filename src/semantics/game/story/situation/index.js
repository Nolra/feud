import './index.css';
import Interface from '../../../../ui/interface/index.js'
import Modal from '../../../../ui/modal/index.js'
import gameAPI from '../../../../api/index.js'
import { useState, useEffect } from 'react';

function Situation(props) {
	const [situation, setSituation] = useState("Birth")
	const [option, setOption] = useState(null)
  const [modal, setModal] = useState({show: false, src: "", alt: ""});
  const [situationDataEnd, setSituationDataEnd] = useState(null);
  const situationData = props.storyData.situation;

  useEffect(() => {
	  if (props.save && props.save.load === true) {
	  	setSituation(props.save.step)
	  	setSituationDataEnd(props.save.situationDataEnd)
	  	props.save.load = false
	  }
  }, []);


  useEffect(() => {
  	console.log("Сохранение")
	  // отправлять запрос на сохранение
  }, [props.save]);


  function changeSituation(action, id) {

		if (action === "Final") {
			gameAPI.getChoice(id).then((response) => 
				setSituationDataEnd(response.data)
			)
		}


  	if (action === "End") {
  		if (situationDataEnd.karma != undefined) {
	  		if (situationDataEnd.karma > 0) {
	  			situationDataEnd.karmaSrc = require("../../../../images/karma/right.png").default;
	  			situationDataEnd.karmaText = "Карма: + " + situationDataEnd.karma;
	  		} else if (situationDataEnd.karma < 0) {
	  			situationDataEnd.karmaSrc = require("../../../../images/karma/left.png").default;
	  			situationDataEnd.karmaText = "Карма: " + situationDataEnd.karma;
	  		} else {
	  			situationDataEnd.karmaSrc = require("../../../../images/karma/center.png").default;
	  			situationDataEnd.karmaText = "Карма: " + situationDataEnd.karma;
	  		}
  		}

  		if (situationDataEnd.states && situationDataEnd.states.length > 0) {
  			if (situationDataEnd.states.localState > 0) {
		  		if (situationDataEnd.states.localState != undefined) {
			  			situationDataEnd.states.localState.src = require(`../../../../images/localStates/${situationDataEnd.states.localState.src}.png`).default;
		  		}
  			}
				if (situationDataEnd.states.globalState != undefined) {
		  		if (situationDataEnd.states.globalState != undefined) {
			  			situationDataEnd.states.globalState.src = require(`../../../../images/globalStates/${situationDataEnd.states.globalState.src}.png`).default;
		  		}
				}
  		}

  		setModal({
  			  show: true,
  				type: "situation",
					storyEnd: situationDataEnd.storyEnd,
					dayEnd: situationDataEnd.dayEnd,
	  			karma: {
	  				show: true, 
	  				src: situationDataEnd.karmaSrc, 
	  				alt: situationDataEnd.karmaText
	  			},
	  			localState: {
	  				show: situationDataEnd.states && situationDataEnd.states.localState?.src != undefined ? true : false, 
	  				localState: situationDataEnd.states?.localState
	  			},
	  			globalState: {
	  				show: situationDataEnd.states && situationDataEnd.states.globalState?.src != undefined ? true : false, 
	  				globalState: situationDataEnd.states?.globalState 
	  			}  
  			})
  	} else {

			props.setSave({
				entry: false,
				storyData: props.storyData,
				step: action,
				option: option
			})

  		setSituation(action)
  	}
  }

	let screen;
	let color = "";
	if (situation === "Birth") {
		color = "dark"
		screen = 				
			<div className="birth">
				<h1>{situationData.name}</h1>
				<div className="p" dangerouslySetInnerHTML={{__html: situationData.birthText}}></div>
				<button className="next-button" onClick={() => changeSituation("Main") }></button>
	  	</div>
	} else if (situation === "Main") {
		color = "light"
		screen = 				
			<div className="main">
				<h1>{situationData.name}</h1>
				<div className="p" dangerouslySetInnerHTML={{__html: situationData.mainText}}></div>
				<img
		  		src={require(`../../../../images/main/${situationData.src}.png`).default} 
					alt={situationData.situation}
				/>
				<button className="next-button" onClick={() => changeSituation("Choice") }></button>
	  	</div>
	} else if (situation === "Choice") {
		color = "dark"
		screen = 				
			<div className="choice">
				<div className="p" dangerouslySetInnerHTML={{__html: situationData.choiceText}}></div>
				<div className="options-box">
					{
						situationData.options.map((item) => {
							return ( 
								<div className={item.id === option ? "option active" : "option"} key={item.id} onClick={() => setOption(item.id) }>
									{item.text}
									<button className="next-button" onClick={() => changeSituation("Final", item.id)}></button>
								</div>
							)
						})
					}
				</div>
	  	</div>
	} else if (situation === "Final") {
		if (situationDataEnd) {
		  props.save.situationDataEnd = situationDataEnd
			props.setSave(props.save)
			color = "light"
			screen = 				
				<div className="final">
					<div className="p" dangerouslySetInnerHTML={{__html: situationDataEnd.finalText}}></div>
					<img
			  		src={require(`../../../../images/final/${situationData.src}.png`).default} 
						alt={situationData.situation}
					/>
					<button className="next-button" onClick={() => changeSituation("End")}></button>
		  	</div>
		} else {
			screen = <div className="spinner-wrapper">
								 <div className="spinner"></div>
							 </div>
		}
	}
  return (
  	<div className="situation">
  		<Interface color={color} setEnter={props.setEnter}/>
  		{screen}
  		{
  			modal.show ? 
  				<Modal 
		  			modal={modal} 
		  			setModal={setModal} 
		  			setEnter={props.setEnter} 
		  			setSituation={setSituation}
		  			setStoryData={props.setStoryData}
		  			storyData={props.storyData}
		  			setSave={props.setSave}
		  			save={props.save}
	  			/> 
	  			: undefined
			}
  	</div>
  );
}

export default Situation;
