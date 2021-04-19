import './index.css';
import { useState, useEffect } from 'react';

function Entry(props) {
  function entryAction() {
    props.setSave({
      entry: false,
      storyData: props.storyData,
      situationDataEnd: null,
      step: "Birth",
      option: null
    })
    props.setStory("Situation")
  }

	// Заглушка
  return (
		<div className="situation entry" onClick={() => entryAction()}>
  		<img src={require(`../../../../images/entry/${props.storyData.src}.png`).default} alt={props.storyData.name}/>
  		<h1>{props.storyData.name}</h1>
  	</div>
  );
}

export default Entry;
