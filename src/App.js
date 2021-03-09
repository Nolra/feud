import Menu from "./menu/"
import Login from "./login/"
import States from "./states/"
import { useState } from 'react';

function App(props) {

	// useState navigation
  const [enter, setEnter] = useState("Login");
	// useState menu items
	const [menu, setMenu] = useState([true,true,false,true,true]);

	// enter navigation
	let screen;
	if (enter === "Login") {
		screen = <Login enter={enter} setEnter={setEnter}/>
	}
	if (enter === "Menu") {
		screen = <Menu 
								menu={menu} setMenu={setMenu} 
								enter={enter} setEnter={setEnter}
							/>
	}
	if (enter === "States") {
		screen = <States enter={enter} setEnter={setEnter}/>
	}

  return (
    <div className="feud-game">
    	{screen}
    </div>
  );
}

export default App;
