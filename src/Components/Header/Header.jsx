import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>testLand</div>
      <ul className={styles.list}>
        <li className={styles.links} L>
          Home
        </li>
        <li className={styles.links} L>
          Shop
        </li>
        <li className={styles.links} L>
          FAQ
        </li>
        <li className={styles.links} L>
          Contact
        </li>
      </ul>
      <div className={styles.elements}>
        <div className={styles.element}>
          <FaUser size={22} />
        </div>
        <div className={styles.element}>
          <FaShoppingCart size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
