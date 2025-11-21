import image from "../../Assets/IMG_1919_360x480.jpg";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} className={styles.logo} />
      </div>
      <div className={styles.desc}>TAMED REWORK FLANNEL #92 (L)</div>
      <div className={styles.price}>$121.99</div>
    </div>
  );
};

export default ProductCard;
