import './index.css';

function Interface(props) {



	// заглушка
	const userData = {



	}


  return (
  	<div className={`interface ${props.color}`}>
  		<button className="karma"></button>
  		<button className="settings" onClick={() => props.setEnter("Menu")}></button>
      <button  className="inventory" onClick={() => props.setEnter("States")}></button>
  	</div>
  );
}

export default Interface;
