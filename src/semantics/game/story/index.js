import './index.css';
import Entry from './entry/index.js'
import Situation from './situation/index.js'
import { useState, useEffect } from 'react';
import gameAPI from '../../../api/index.js'

function Story(props) {
	const [story, setStory] = useState("");
	const [storyData, setStoryData] = useState(null);	

  if (props.save && props.save.load === true && !storyData) {
		 setStoryData(props.save.storyData)
  }

  useEffect(() => {
  	if (!props.save) {
			gameAPI.getStory("1").then((response) => 
				setStoryData(response.data)
			)
  	} 
		if (!props.save || props.save.entry) {
			setStory("Entry")
		} else {
			setStory("Situation")
		}
  }, []);



	let screen;

	if (storyData) {
		if (story === "Entry") {
			screen = <Entry 
									storyData={storyData} 
									setStory={setStory}
									save={props.save} 
									setSave={props.setSave}
								/>
		} else if (story === "Situation") {
			screen = <Situation 
									setStoryData={setStoryData} 
									storyData={storyData} 
									setStory={setStory} 
									setEnter={props.setEnter}
									save={props.save} 
									setSave={props.setSave}
								/>
		} 
	} else {
		screen = <div className="spinner-wrapper">
								 <div className="spinner"></div>
							 </div>
	}

  return (
  	<>{screen}</>
  );
}

export default Story;
