import { Component, Fragment } from "react";
import Navigation from "../../components/inside/navigation";
import { isAuthenticated } from "../../services/auth";

export default class AuthHome extends Component {
  constructor() {
    super();
    if (!isAuthenticated()) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
      </Fragment>
    );
  }
}
