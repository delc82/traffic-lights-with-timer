import React from "react";
import { connect } from "react-redux";
import TrafficLight from "./components/TrafficLight";
import { turnRedOn, turnYellowOn, turnGreenOn } from "./redux/actions";

class App extends React.Component {
  handleLightChange = () => {
    if (this.props.isRedOn) {
      this.props.turnGreenOn();
    } else if (this.props.isGreenOn) {
      this.props.turnYellowOn();
    } else {
      this.props.turnRedOn();
    }
  };

  render() {
    return (
      <div className="App">
        <TrafficLight
          isRedOn={this.props.isRedOn}
          isYellowOn={this.props.isYellowOn}
          isGreenOn={this.props.isGreenOn}
          changeLight={this.handleLightChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRedOn: state.isRedOn,
    isYellowOn: state.isYellowOn,
    isGreenOn: state.isGreenOn
  };
}

const mapDispatchToProps = {
  turnRedOn: turnRedOn,
  turnYellowOn: turnYellowOn,
  turnGreenOn: turnGreenOn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
