import React from "react";
import OverviewList from "./overViewList";
import PropTypes from "prop-types";
import { Typography, Paper } from "@material-ui/core";

class OverviewListContainer extends React.PureComponent {
  static childContextTypes = {
    customElement: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    const { container } = this.state;
    return {
      customElement: container
    };
  }

  render() {
    let filteredValue = [];
    if(this.props.debonceData !== ''){
      filteredValue = this.props.giftCardsFiltered.filter(gift =>
        gift.cardName.toLowerCase().includes(this.props.debonceData.toLowerCase()) ||
        gift.cardPoints.toString().includes(this.props.debonceData.toLowerCase()) ||
        gift.cardCategory.toLowerCase().includes(this.props.debonceData.toLowerCase())
      );
    } else{
      filteredValue = this.props.giftCardsFiltered
    }
    
    return (
      <div
        id="scroll-wrapper"
        className="content-container"
        ref={e => this.setState({ container: e })}
      >
        {filteredValue.length > 0 ? (<OverviewList items={filteredValue} />) : (<Paper><Typography> No Data Found</Typography></Paper>)}
      </div>
    );
  }
}

export default OverviewListContainer;
