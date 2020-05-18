import React from "react";
import Styles from "../../../assets/css/GiftShow.module.css";
import Grid from "@material-ui/core/Grid";
import { DateFormatter } from "./../../common/components/DateFormatter";
import StarRatingComponent from "react-star-rating-component";
import SendGiftCardDialog from "../../common/components/DraggableDialog";

const GiftShow = props => {
  const { data } = props;

  return (
    <div style={{ padding: "4%" }}>
      <div className={Styles.detailsPage}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={5} className={Styles.cardContainer}>
            <div>
              <Grid container spacing={0}>
                <Grid item xs={6} sm={6}>
                  <img
                    src={data.cardImage}
                    alt="vendorImage"
                    className={Styles.vendorImage}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <p className={Styles.cardName}>{data.cardName}</p>
                  <span style={{marginLeft:'30%'}}><label className={Styles.label}>Points:</label>{data.cardPoints}</span> 
                </Grid>
              </Grid>
            </div>
            <SendGiftCardDialog getEmail={(email) => {props.getEmail(email)}}/>
            <p><label className={Styles.label}>NUMBER OF CARDS AVAILABLE: </label>{data.cardCount}</p>
            <p><label className={Styles.label}>EXPIRY DATE: </label>{DateFormatter(data.cardExpiryDate)}</p>
            <div>
              <p className={Styles.label}> RATING & REVIEWS:</p>
              {
                data.cardComments ? 
                data.cardComments.map(comment => {
                return (
                  <div key={comment.id} className={Styles.commentsSection}>
                    <p className={Styles.commentorName}> {comment.first_name} {comment.last_name}<span className={Styles.commentDate}>{DateFormatter(comment.commented_on)}</span></p>
                    <p className={Styles.comment}>{comment.comment}</p>
                    <StarRatingComponent
                        name="rating"
                        starCount={5}
                        value={comment.rating}
                        editing={false}
                      />
                  </div>
                )
              })
            :  <div>Loading User Reviews..</div>}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={Styles.detailsContainer}>
            <p className={Styles.vendorName}>{data.cardVendor}</p>
            <p className={Styles.cardDescription}>{data.cardLongDesc}</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default GiftShow;
