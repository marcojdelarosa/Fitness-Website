import dots from "./assets/SidebarDots.svg";
import "./header.css";

function HeaderWords() {
  return (
    <div className="container header">
      <div className="headerleft">
        <img id="headerdots" src={dots} alt="dots" draggable="false"></img>
        <h1>CurPage</h1>
      </div>
      <div className="headerright">
        <h1 id="headerlogoname">LOGO</h1>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="headercontainer">
      <HeaderWords />
    </div>
  );
}

export default Header;
