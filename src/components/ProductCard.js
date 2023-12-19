import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.ulmenuMenuFooter}>
            <div className={styles.limenuItem36}>
              <div className={styles.product}>Product</div>
              <div className={styles.ul}>
                <div className={styles.rentWrapper}>
                  <div className={styles.rent}>Rent</div>
                </div>
                <div className={styles.rent}>Sell</div>
                <div className={styles.rent}>Purchase</div>
                <div className={styles.rent}>Explore</div>
                <div className={styles.rent}>Featured Properties</div>
                <div className={styles.rent}>Best Value</div>
              </div>
            </div>
            <div className={styles.limenuItem45}>
              <div className={styles.product}>The Highlights</div>
              <div className={styles.ul}>
                <div className={styles.rent}>Apartment</div>
                <div className={styles.rent}>Houses</div>
                <div className={styles.rent}>Offices</div>
                <div className={styles.villas}>Villas</div>
                <div className={styles.rent}>Land</div>
              </div>
            </div>
            <div className={styles.limenuItem54}>
              <div className={styles.product}>Company</div>
              <div className={styles.ul2}>
                <div className={styles.rent}>{`Agents `}</div>
                <div className={styles.rent}>Partners</div>
                <div className={styles.rent}>Agencies</div>
              </div>
            </div>
            <div className={styles.limenuItem59}>
              <div className={styles.product}>Support</div>
              <div className={styles.ul}>
                <div className={styles.rent}>Help center</div>
                <div className={styles.rent}>About Us</div>
                <div className={styles.rent}>FAQs</div>
                <div className={styles.rent}>Contact</div>
                <div className={styles.rent}>Blog</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.midway}>© 2023 MIDWAY</div>
          <div className={styles.ul4}>
            <div className={styles.a}>
              <div className={styles.fbsvg}>
                <img className={styles.fbsvgIcon} alt="" src="/fbsvg@2x.png" />
              </div>
            </div>
            <div className={styles.a}>
              <div className={styles.twsvg}>
                <img className={styles.twsvgIcon} alt="" src="/twsvg@2x.png" />
              </div>
            </div>
            <div className={styles.a}>
              <div className={styles.insvg}>
                <img className={styles.insvgIcon} alt="" src="/insvg@2x.png" />
              </div>
            </div>
          </div>
          <div className={styles.ul5}>
            <div className={styles.terms}>
              <span className={styles.terms1}>{`TERMS `}</span>
              <span className={styles.span}>|</span>
            </div>
            <div className={styles.privacy}>PRIVACY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
