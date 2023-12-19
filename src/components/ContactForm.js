import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [groupInputValue, setGroupInputValue] = useState("");
  const [groupInput1Value, setGroupInput1Value] = useState("");
  const [groupInput2Value, setGroupInput2Value] = useState("");
  const [groupInput3Value, setGroupInput3Value] = useState("");
  const [groupInput4Value, setGroupInput4Value] = useState("");
  return (
    <div className={styles.desktop5}>
      <div className={styles.contactUsParent}>
        <div className={styles.contactUs}>Contact Us</div>
        <input
          className={styles.groupChild}
          placeholder="Description"
          type="text"
          value={groupInputValue}
          onChange={(event) => setGroupInputValue(event.target.value)}
        />
        <div className={styles.wrapperGroup2}>
          <input
            className={styles.wrapperGroup2Child}
            type="text"
            value={groupInput1Value}
            onChange={(event) => setGroupInput1Value(event.target.value)}
          />
          <img
            className={styles.wrapperGroup2Item}
            alt=""
            src="/rectangle-13@2x.png"
          />
        </div>
        <div className={styles.wrapperGroup4}>
          <input
            className={styles.wrapperGroup4Child}
            placeholder="Address"
            type="text"
            value={groupInput2Value}
            onChange={(event) => setGroupInput2Value(event.target.value)}
          />
          <img
            className={styles.wrapperGroup4Item}
            alt=""
            src="/rectangle-13@2x.png"
          />
        </div>
        <div className={styles.wrapperGroup3}>
          <input
            className={styles.wrapperGroup3Child}
            placeholder="Phone"
            type="text"
            value={groupInput3Value}
            onChange={(event) => setGroupInput3Value(event.target.value)}
          />
          <img
            className={styles.wrapperGroup4Item}
            alt=""
            src="/rectangle-13@2x.png"
          />
        </div>
        <div className={styles.wrapperGroup5}>
          <input
            className={styles.wrapperGroup5Child}
            placeholder="Email"
            type="text"
            value={groupInput4Value}
            onChange={(event) => setGroupInput4Value(event.target.value)}
          />
          <img
            className={styles.wrapperGroup2Item}
            alt=""
            src="/rectangle-13@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
