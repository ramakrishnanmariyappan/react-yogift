import React, { Component } from 'react';
import Styles from '../../assets/css/Landing.module.css';
import Button from '@material-ui/core/Button';
import OverlayImg from '../../assets/images/overLay.jpg';
import amazon from '../../assets/images/amazon.jpg';
import flipkart from '../../assets/images/flipkart.jpg';
import foodmarket from '../../assets/images/foodmarket.jpg';
import ebay from '../../assets/images/ebay.jpg';
import zomoto from '../../assets/images/zomoto.jpg';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state={
      highResImageLoaded: false,
    }
  }
 
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
              <Link to="/giftCards" onClick={this.handleClick} className={Styles.cardsBtn}>
                <Button variant="contained">
                  Explore Cards
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                className={Styles.GiftImg}
                src={OverlayImg}
                alt="YoYoImg"
              />
            </Grid>
          </Grid>
        </div>
        <div className={Styles.vendors}>
          <h2 className={Styles.vendorTitle}>Buy Gift Cards from your favourite Vendors</h2>
          <div style={{ textAlign: 'center' }}>
            <div className={Styles.vendorContainer}>
              <img className={Styles.vendorImage} src={foodmarket} alt="whole food market" />
              <p className={Styles.vendorName}>Whole Foods Market</p>
            </div>
            <div className={Styles.vendorContainer}>
              <img className={Styles.vendorImage} src={ebay} alt="Ebay" />
              <p className={Styles.vendorName}>Ebay</p>
            </div>
            <div className={Styles.vendorContainer}>
              <img className={Styles.vendorImage} src={amazon} alt="amazon" />
              <p className={Styles.vendorName}>Amazon</p>
            </div>
            <div className={Styles.vendorContainer}>
              <img className={Styles.vendorImage} src={flipkart} alt="Flipkart" />
              <p className={Styles.vendorName}>Flipkart</p>
            </div>
            <div className={Styles.vendorContainer}>
              <img className={Styles.vendorImage} src={zomoto} alt="Zomato" />
              <p className={Styles.vendorName}>Zomato</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
