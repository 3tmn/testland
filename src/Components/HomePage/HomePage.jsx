import ProductCard from "./Card/ProductCard";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.textContainer}>
        1 OF 1 VINTAGE UPCYCLED FLANNELS
      </div>
      <div className={styles.cardsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>View all</div>
      </div>
    </div>
  );
};

export default HomePage;
