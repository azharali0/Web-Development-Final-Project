import SaleContainer from "./SaleContainer";
import styles from "./ExploreCardForm.module.css";

const ExploreCardForm = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.exploreGoodPlaces}>Explore Good Places</div>
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.sale5000NewContainer}>
        <p className={styles.sale}>Sale $5000</p>
        <p className={styles.newYork}>New York</p>
      </div>
      <div className={styles.recommendedJustFor}>
        Recommended just for you! Find your perfect match
      </div>
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      <div className={styles.sale7000CaliforniaContainer}>
        <p className={styles.sale}>Sale $7000</p>
        <p className={styles.newYork}>California</p>
      </div>
      <div className={styles.sale4000WashingtonusContainer}>
        <p className={styles.sale}>Sale $4000</p>
        <p className={styles.newYork}>Washington,US</p>
      </div>
      <img className={styles.image10Icon} alt="" src="/image-7@2x.png" />
      <img className={styles.image11Icon} alt="" src="/image-7@2x.png" />
      <img className={styles.image12Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.sale4000IslamabadContainer}>
        <p className={styles.sale3}>Sale $4000</p>
        <p className={styles.newYork}>
          <i className={styles.islamabadPakistan1}>{`Islamabad, Pakistan `}</i>
        </p>
      </div>
      <div className={styles.sale4000IslamabadContainer1}>
        <p className={styles.sale3}>Sale $4000</p>
        <p className={styles.newYork}>
          <i className={styles.islamabadPakistan1}>{`Islamabad, Pakistan `}</i>
        </p>
      </div>
      <div className={styles.sale4000IslamabadContainer2}>
        <p className={styles.sale3}>Sale $4000</p>
        <p className={styles.newYork}>
          <i className={styles.islamabadPakistan1}>{`Islamabad, Pakistan `}</i>
        </p>
      </div>
      <SaleContainer
        actionButtonText="wishlist"
        actionButtonLabel="buynow"
        propTop="482px"
        propLeft="124px"
      />
      <div className={styles.bottomFixedBtn}>
        <div className={styles.saveItemBtn}>
          <button
            className={styles.saveItemBtnChild}
            autoFocus={true}
            id="wihlist"
          />
          <div className={styles.saveItem}>Save item</div>
        </div>
        <div className={styles.buyNowBtn}>
          <button
            className={styles.buyNowBtnChild}
            autoFocus={true}
            id="buynw"
          />
          <div className={styles.buyNow}>Buy Now</div>
        </div>
        <div className={styles.bottomFixedBtn1}>
          <button className={styles.saveItemBtn1} autoFocus={true} id="save">
            <div className={styles.saveItemBtnItem} />
            <div className={styles.saveItem1}>Save item</div>
          </button>
          <button className={styles.buyNowBtn1} autoFocus={true} id="buy" muted>
            <div className={styles.buyNowBtnItem} />
            <div className={styles.buyNow1}>Buy Now</div>
          </button>
        </div>
      </div>
      <div className={styles.goToHomeBtn}>
        <div className={styles.goToHomeBtnChild} />
        <div className={styles.seeMore}>See More</div>
      </div>
      <SaleContainer
        actionButtonText="wishlist"
        actionButtonLabel="buy"
        propTop="860px"
        propLeft="125px"
      />
      <SaleContainer
        actionButtonText="save"
        actionButtonLabel="buynow"
        propTop="860px"
        propLeft="528px"
      />
      <SaleContainer
        actionButtonText="wishlst"
        actionButtonLabel="buynow"
        propTop="854px"
        propLeft="942px"
      />
    </div>
  );
};

export default ExploreCardForm;
