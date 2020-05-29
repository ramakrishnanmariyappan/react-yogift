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
			 <div style={{ textAlign: 'center' }}>
            <div className={Styles.vendorContainer}>
              <div className={Styles.vendorImage1} alt="whole food market"></div>
              <p className={Styles.vendorName}>Whole Foods Market</p>
            </div>
            <div className={Styles.vendorContainer}>
              <div className={Styles.vendorImage2} alt="Ebay" ></div>
              <p className={Styles.vendorName}>Ebay</p>
            </div>
            <div className={Styles.vendorContainer}>
              <div className={Styles.vendorImage3} alt="amazon" ></div>
              <p className={Styles.vendorName}>Amazon</p>
            </div>
            <div className={Styles.vendorContainer}>
              <div className={Styles.vendorImage4} alt="Flipkart" ></div>
              <p className={Styles.vendorName}>Flipkart</p>
            </div>
            <div className={Styles.vendorContainer}>
              <div className={Styles.vendorImage5} alt="Zomato" ></div>
              <p className={Styles.vendorName}>Zomato</p>
            </div>
			  </div>
        </div>
      </div>
    )
  }
}

export default Landing;
