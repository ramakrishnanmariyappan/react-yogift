import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OverviewListContainer from "../../common/components/overviewListContainer";

const styles = theme => ({
  root: {
    width: "90%",
    margin: '2%',
    padding: '1%'
  },
  table: {
    minWidth: 100
  },
  tableWrapper: {
    overflow: "hidden"
  }
});

class GiftsList extends Component {
  state = {
    giftCardsFiltered: this.props.giftCardsFiltered,
    page: 0,
    rowsPerPage: 10
  };
  
  render() {
    return (
          <OverviewListContainer {...this.props}/>
    );
  }
}

GiftsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftsList);
