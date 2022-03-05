import './NavBar.css';

function NavBar(props){

    return(	<header className="header">
    <h1 className="logo"><a href="#">IPL</a></h1>
      <ul className="main-nav">
          <li><a href="/schedule">SCHEDULE</a></li>
          <li><a href="/feed">FEED</a></li>
      </ul>
  </header> );
  }

  export default NavBar;