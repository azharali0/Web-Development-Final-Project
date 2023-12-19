import { useMemo } from "react";
import styles from "./SaleContainer.module.css";

const SaleContainer = ({
  actionButtonText,
  actionButtonLabel,
  propTop,
  propLeft,
}) => {
  const bottomFixedBtnStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.bottomFixedBtn} style={bottomFixedBtnStyle}>
      <button
        className={styles.saveItemBtn}
        autoFocus={true}
        id={actionButtonText}
        muted
      >
        <div className={styles.saveItemBtnChild} />
        <div className={styles.saveItem}>Save item</div>
      </button>
      <button
        className={styles.buyNowBtn}
        autoFocus={true}
        id={actionButtonLabel}
      >
        <div className={styles.buyNowBtnChild} />
        <div className={styles.buyNow}>Buy Now</div>
      </button>
    </div>
  );
};

export default SaleContainer;
