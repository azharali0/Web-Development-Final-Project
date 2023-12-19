import { useState } from "react";
import SizeLargeFillBlackIconW from "./SizeLargeFillBlackIconW";
import styles from "./HomeCard.module.css";

const HomeCard = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  return (
    <div className={styles.desktop1}>
      <div className={styles.wrapperImage1Parent}>
        <div className={styles.wrapperImage1}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        </div>
        <div className={styles.yourDreamHomeContainer}>
          <p className={styles.yourDreamHome}>
            <span>{`Your Dream `}</span>
            <span className={styles.home}>Home</span>
            <span className={styles.span}>{` `}</span>
          </p>
          <p className={styles.isJustAClickAway}>
            <span>{` is just a click away.                                         Start your journey with `}</span>
            <span className={styles.span}>Midway</span>
            <span className={styles.todayAndTurnYourVisionOf}>
              <span className={styles.span1}>{` `}</span>
              <span className={styles.todayAndTurn}>
                today and turn your vision of the perfect home into reality!
              </span>
            </span>
          </p>
        </div>
      </div>
      <img
        className={styles.midwayLogoRemovebgPreviewIcon}
        alt=""
        src="/midway--logoremovebgpreview-1@2x.png"
      />
      <SizeLargeFillBlackIconW
        icon="/icon@2x.png"
        signInWithEthereum="Sign In"
        showIcon={false}
        sizeLargeFillBlackIconWCursor="pointer"
        sizeLargeFillBlackIconWBorder="none"
        sizeLargeFillBlackIconWPosition="absolute"
        sizeLargeFillBlackIconWTop="88px"
        sizeLargeFillBlackIconWLeft="1231px"
        sizeLargeFillBlackIconWWidth="142px"
        sizeLargeFillBlackIconWHeight="69px"
        signInWithDisplay="inline-block"
      />
      <button className={styles.home1} autoFocus={true} preload="none">
        HOME
      </button>
      <div className={styles.product}>Product</div>
      <div className={styles.aboutUs}>About Us</div>
      <input
        className={styles.desktop1Child}
        placeholder="search products..."
        type="text"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
      <img className={styles.searchIcon} alt="" src="/search@2x.png" />
      <div className={styles.location}>Location</div>
      <img className={styles.desktop1Item} alt="" src="/vector-1@2x.png" />
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
    </div>
  );
};

export default HomeCard;
