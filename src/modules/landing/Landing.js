import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Styles from '../../assets/css/Landing.module.css';

class Landing extends Component {
 
  render() {
    return (
      <div>
        <div id="promo-ribbon" className={Styles.offerMessage}>
          Use code TRAVEL15 to get 15% off
        </div>
        <div className={Styles.mainSlide}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <h1 className={Styles.sectionTitle}>
                Buy, Send, & Redeem Gift Cards
              </h1>
              <div className={Styles.sectionText}>
                <p>YoYo makes it easy for you to give the perfect gift card</p>
                <p>and conveniently manage them from any device!!</p>
              </div>
              <Link to="/giftCards" className={Styles.cardsBtn}>
                <Button variant="contained">
                  Explore Cards
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
			<div className={Styles.GiftImg} alt="YoYoImg"></div>
            </Grid>
          </Grid>
        </div>
        <div className={Styles.vendors}>
          <h2 className={Styles.vendorTitle}>Buy Gift Cards from your favourite Vendors</h2>
			 
        </div>
      </div>
    )
  }
}

export default Landing;
