import './index.css';
import gameAPI from '../../api/index.js'
import { useState } from 'react';

function Modal(props) {
  const [karma, setKarma] = useState(props.modal.karma) 
  const [localState, setLocalState] = useState(props.modal.localState) 
  const [globalState, setGlobalState] = useState(props.modal.globalState)
  const [update, setUpdate] = useState(false)

  let screen;
  if (props.modal.type === "situation") {

    if (!update) {

      console.log(props.storyData)

      if (props.modal.storyEnd) {

        gameAPI.postStory(props.storyData.id).then((response) => 
          props.setStoryData(response.data),
          setUpdate(true)
        )

        console.log(props.storyData)


      } else {
        gameAPI.getSituation(props.storyData.situation.id).then((response) => 
          props.storyData.situation = response.data,
          props.setStoryData(props.storyData),
          setUpdate(true)
        )
      }






    }

    function changeModal(value) {
      if (value === "Karma") {
        setKarma({show: false})
      } else if (value === "localState") {
        setLocalState({show: false})
      } else if (value === "globalState") {
        setGlobalState({show: false})
      }
    }

    if (update) {
      if (karma.show) {
        screen = 
        <>
          <div className="desk">{karma.alt}</div>
          <img src={karma.src} alt={karma.alt} />
          <button className="next-button" onClick={() => changeModal("Karma")} ></button>
        </>
      } else if (!karma.show && localState.show) {
        screen = 
        <>
          <div className="desk">{localState.localState.alt}</div>
          <img src={localState.localState.src} alt={localState.alt} />
          <button className="next-button" onClick={() => changeModal("localState")} ></button>
        </>
      }  else if (!karma.show && !localState.show && globalState.show) {
        screen = 
        <>
          <div className="desk">{globalState.globalState.alt}</div>
          <img src={globalState.globalState.src} alt={globalState.globalState.alt} />
          <p>{globalState.globalState.text}</p>
          <button className="next-button" onClick={() => changeModal("globalState")} ></button>
        </>
      } else {
        if (props.modal.dayEnd) {
          // props.setEnter()
          console.log("Конец дня")
        } else if (props.modal.storyEnd) {
          console.log("Конец ивента")
          props.setEnter("Game")
        } else {
          console.log("Конец ситуации")
          props.setSituation("Birth")
          props.save.step = "Birth"
          props.setSave(props.save)
        }
        props.setModal({show:false})
      }
    } else {
    <>

    </>
    }
  } else {
    screen = 
    <>
      <img src={props.modal.src} alt={props.modal.alt} />
      <div className="desk">{props.modal.alt}</div>
      <button className="back-button" onClick={() => props.setModal({show:false})} ></button>
    </>
  }

  if (!props.modal.show) {
    return (
      <div className="modal hide">
        {screen}
      </div>
    );
  }

  return (
  	<div className="modal">
      {screen}
  	</div>
  );
}

export default Modal;
