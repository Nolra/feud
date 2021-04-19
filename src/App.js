import Menu from "./semantics/menu/"
import Login from "./semantics/login/"
import States from "./semantics/states/"
import Game from "./semantics/game/"
import { useState, useEffect } from 'react';

function App(props) {

	// useState navigation
  const [enter, setEnter] = useState("Login");
	// useState menu items
	const [menu, setMenu] = useState([false,true,true,true,true]);
	// useState save game
	const [save, setSave] = useState(null);
	// useState user
  const [user, setUser] = useState(null);


  console.log(user)

	
  useEffect(() => {
		if (save) {
			let changeMenu = menu;
			changeMenu[0] = true;
			changeMenu[1] = false;
			setMenu(changeMenu)
		} 
  }, [save]);

	// enter navigation
	let screen;
	if (enter === "Login") {
		screen = <Login 
								enter={enter} setEnter={setEnter}
								menu={menu} setMenu={setMenu}
								save={save} setSave={setSave}
							/>
	}
	if (enter === "Menu") {
		screen = <Menu 
								menu={menu} setMenu={setMenu} 
								enter={enter} setEnter={setEnter}
								save={save} setSave={setSave}
							/>
	}
	if (enter === "States") {
		screen = 
							<States 
								enter={enter} setEnter={setEnter}
								menu={menu} setMenu={setMenu} 
							/>
	}

	if (enter === "Game") {
		screen = 
							<Game 
								enter={enter} setEnter={setEnter}
								menu={menu} setMenu={setMenu} 
								save={save} setSave={setSave}
							/>
	}


  return (
    <div className="feud-game">
    	{screen}
    </div>
  );
}

export default App;
