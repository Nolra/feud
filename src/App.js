import Menu from "./menu/"
import Login from "./login/"
import { useState } from 'react';

function App() {
	const [login, useLogin] = useState(false);

	let screen;
	if (login) {
		screen = <Menu/>
	} else {
		screen = <Login/>
	}

  return (
    <div className="feud-game">
    	{screen}
    </div>
  );
}

export default App;
