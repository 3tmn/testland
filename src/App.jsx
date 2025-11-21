import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import ShippingBanner from "./Components/ShippingBanner/ShippingBanner";

function App() {
  return (
    <div className={styles.container}>
      <ShippingBanner />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
