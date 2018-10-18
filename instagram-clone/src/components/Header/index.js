import React from "react";
import "./Header.css";

{/* Created header Component to contain logo and name*/}
class Header extends React.Component {
  render(){
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Sportsgram
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
