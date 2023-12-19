import styles from "./ReviewCard.module.css";

const ReviewCard = () => {
  return (
    <div className={styles.review}>
      <div className={styles.reviews}>Reviews</div>
      <div className={styles.reviewChild} />
      <img className={styles.star7Icon} alt="" src="/star-7@2x.png" />
      <img className={styles.star5Icon} alt="" src="/star-7@2x.png" />
      <div className={styles.seoContainer}>
        <p className={styles.p}>
          Заказывала у ребят разработку интернет-магазина. Что могу сказать, я
          очень
        </p>
        <p className={styles.p}>
          довольная, магазин сделали под ключ сразу с базовыми настройками для
          SEO
        </p>
        <p
          className={styles.p}
        >{`(пока не планирую продвигать) но уже будет возможность это делать.Рекомендую, `}</p>
        <p className={styles.p2}>цена, качество и коммуникация на 100%.</p>
      </div>
      <div className={styles.div}>Екатерина Лужецкая</div>
      <img className={styles.reviewItem} alt="" src="/ellipse-1@2x.png" />
      <div className={styles.reviewInner} />
      <img className={styles.star14Icon} alt="" src="/star-7@2x.png" />
      <img className={styles.star13Icon} alt="" src="/star-7@2x.png" />
      <img className={styles.star12Icon} alt="" src="/star-7@2x.png" />
      <img className={styles.star11Icon} alt="" src="/star-7@2x.png" />
      <div className={styles.div1}>
        <p
          className={styles.p}
        >{`Пишу отзыв спустя 4 месяца после сдачи проекта. В течении этого времени были `}</p>
        <p
          className={styles.p}
        >{`незначительные ошибки, но ребята сразу их исправляли. В целом все работает `}</p>
        <p className={styles.p2}>стабильно. Сотрудничаем дальше.</p>
      </div>
      <img className={styles.star10Icon} alt="" src="/star-7@2x.png" />
      <div className={styles.div1}>
        <p
          className={styles.p}
        >{`Пишу отзыв спустя 4 месяца после сдачи проекта. В течении этого времени были `}</p>
        <p
          className={styles.p}
        >{`незначительные ошибки, но ребята сразу их исправляли. В целом все работает `}</p>
        <p className={styles.p2}>стабильно. Сотрудничаем дальше.</p>
      </div>
      <div className={styles.div1}>
        <p
          className={styles.p}
        >{`Пишу отзыв спустя 4 месяца после сдачи проекта. В течении этого времени были `}</p>
        <p
          className={styles.p}
        >{`незначительные ошибки, но ребята сразу их исправляли. В целом все работает `}</p>
        <p className={styles.p2}>стабильно. Сотрудничаем дальше.</p>
      </div>
      <div className={styles.armenSargsyan}>Armen Sargsyan</div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-2@2x.png" />
    </div>
  );
};

export default ReviewCard;
