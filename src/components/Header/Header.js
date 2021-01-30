import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <div className="header jumbotron-fluid" id="header">
        <div className="container">
          <h1><span className="text">Employee Directory</span></h1>
          <p>Click on arrows to filter by heading or use the search box to narrow your results</p>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Header;
