import styles from "./NavBar.module.scss";

const links = ["Home", "About", "Skills", "Contact"];

function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.navWrapper}>
        <div className={styles.left}>
          <ul className={styles.navList}>
            <li className={`${styles.navItem} ${styles.navLogo}`}>VI.</li>
          </ul>
        </div>

        <div className={styles.right}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link} className={styles.navItem}>
                {link}
              </li>
            ))}
            <li className={`${styles.navItem} ${styles.navResume}`}>Resume</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
