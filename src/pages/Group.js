import { useEffect } from "react";
import HomeCard from "../components/HomeCard";
import ExploreCardForm from "../components/ExploreCardForm";
import ReviewCard from "../components/ReviewCard";
import ContactForm from "../components/ContactForm";
import ProductCard from "../components/ProductCard";
import styles from "./Group.module.css";

const Group = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.frameParent}>
      <div className={styles.desktop1Parent} data-animate-on-scroll>
        <HomeCard />
        <ExploreCardForm />
        <div className={styles.forSale}>
          <div className={styles.parisFrance}>Paris, France</div>
          <div className={styles.islamabadPakistan}>Islamabad, Pakistan</div>
          <div className={styles.karachiPakistan}>Karachi, Pakistan</div>
          <div className={styles.newDelhiIndia}>New Delhi, India</div>
          <div className={styles.chicagoUs}>Chicago, U.S</div>
          <div className={styles.luxumberg}>Luxumberg</div>
        </div>
        <b className={styles.exploreYourDreams}>
          Explore Your Dreams By Location
        </b>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-71@2x.png" />
        <img className={styles.image8Icon} alt="" src="/image-81@2x.png" />
        <img className={styles.image9Icon} alt="" src="/image-91@2x.png" />
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <ReviewCard />
        <ContactForm />
        <ProductCard />
      </div>
      <div className={styles.groupChild} />
      <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
    </div>
  );
};

export default Group;
