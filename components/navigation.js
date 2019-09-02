import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Nav from "../components/nav";
import Menu from "../components/menu";

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = { menuAberto: false };

    this.updateMenu = this.updateMenu.bind(this);
  }

  updateMenu() {
    this.setState({ menuAberto: !this.state.menuAberto });
  }

  render() {
    return (
      <Fragment>
        <Nav updateMenu={this.updateMenu} />
        <Menu menuAberto={this.state.menuAberto} />
        <div className={this.state.menuAberto ? "overlay show" : "overlay"}>      
        </div>

        <style jsx>{`
          .overlay {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background: #000;
            opacity: 0;
            transition: opacity 400ms;
            z-index: 1;
          }
          .overlay.show {
            opacity: 0.2;
          }

          @media (min-width: 768px) {
            .overlay {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}
