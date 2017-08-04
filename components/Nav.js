import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#myModal" className="navbar-brand" data-toggle="modal"><i className="fa fa-plus-circle" aria-hidden="true"></i> New</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
