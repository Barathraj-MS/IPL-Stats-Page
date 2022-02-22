import './App.css';
function Button(){
    return(
        <div className="Container">
            <button className="cssbuttons-io-button" >STATS
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
function Popdown(){
    return(
        <div className="Menu">
            <ul>
                <li><a href="#">Login/Register</a>
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </li>
                </ul>
        </div>
    )
}
function App() {
  return (
    <div className="App">
     <Button/>
        <Popdown/>
    </div>
  );
}

export default App;
