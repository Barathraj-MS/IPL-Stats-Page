import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch,useNavigate} from 'react-router-dom'
function Button(){
    const history = useNavigate();
  
    const statsPage = () => {
        history("/stats")
    }
    return(
        <div className="Container">
            <button className="cssbuttons-io-button" onClick={statsPage}>STATS
                <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                              fill="currentColor"></path>
                    </svg>
                </div>
            </button>
        </div>
    )
}

function App() {
  return (
    <div className="body">
    <div className="sub">
    <div className="App">
     <Button/>
    </div>
    </div>
    </div>
  );
}

export default App;
