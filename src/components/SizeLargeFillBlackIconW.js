import { useMemo } from "react";
import styles from "./SizeLargeFillBlackIconW.module.css";

const SizeLargeFillBlackIconW = ({
  icon,
  signInWithEthereum,
  showIcon,
  sizeLargeFillBlackIconWCursor,
  sizeLargeFillBlackIconWBorder,
  sizeLargeFillBlackIconWPosition,
  sizeLargeFillBlackIconWTop,
  sizeLargeFillBlackIconWLeft,
  sizeLargeFillBlackIconWWidth,
  sizeLargeFillBlackIconWHeight,
  signInWithDisplay,
}) => {
  const sizeLargeFillBlackIconWStyle = useMemo(() => {
    return {
      cursor: sizeLargeFillBlackIconWCursor,
      border: sizeLargeFillBlackIconWBorder,
      position: sizeLargeFillBlackIconWPosition,
      top: sizeLargeFillBlackIconWTop,
      left: sizeLargeFillBlackIconWLeft,
      width: sizeLargeFillBlackIconWWidth,
      height: sizeLargeFillBlackIconWHeight,
    };
  }, [
    sizeLargeFillBlackIconWCursor,
    sizeLargeFillBlackIconWBorder,
    sizeLargeFillBlackIconWPosition,
    sizeLargeFillBlackIconWTop,
    sizeLargeFillBlackIconWLeft,
    sizeLargeFillBlackIconWWidth,
    sizeLargeFillBlackIconWHeight,
  ]);

  const signInWithStyle = useMemo(() => {
    return {
      display: signInWithDisplay,
    };
  }, [signInWithDisplay]);

  return (
    <div
      className={styles.sizelargeFillblackIconw}
      style={sizeLargeFillBlackIconWStyle}
    >
      {showIcon && <img className={styles.icon} alt="" src={icon} />}
      <b className={styles.signInWith} style={signInWithStyle}>
        {signInWithEthereum}
      </b>
    </div>
  );
};

export default SizeLargeFillBlackIconW;
