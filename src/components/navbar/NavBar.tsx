import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import NavLinks from "../NavLinks";
import resume from "../../assets/pdfs/Valentine_Idi_CV.pdf";
import Icon from "../Icon";
import styles from "./NavBar.module.scss";

function NavBar() {
  const [showSmallMenu, setShowSmallMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkSmallScreen = () => setIsSmallScreen(window.innerWidth <= 700);

    window.addEventListener("resize", checkSmallScreen);

    return () => window.removeEventListener("resize", checkSmallScreen);
  }, []);
  return (
    <div className={styles.container}>
      <nav className={styles.navBig}>
        <div className={styles.navWrapper}>
          <div className={styles.left}>
            <ul className={styles.navList}>
              <li className={`${styles.navItem} ${styles.navLogo}`}>VI.</li>
            </ul>
          </div>

          <div className={styles.right}>
            <ul className={styles.navList}>
              <NavLinks className={styles.navItem} />
              <li className={`${styles.navItem} ${styles.navResume}`}>
                <a href={resume} download="Valentine_Idi_CV.pdf">
                  Resume
                </a>
              </li>
              <li
                className={`${styles.navItem} ${styles.navBurger}`}
                onClick={() => setShowSmallMenu(!showSmallMenu)}
              >
                <Icon
                  className={styles.navIcon}
                  icon={showSmallMenu ? MdClose : GiHamburgerMenu}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav
        className={`${styles.navSmall} ${showSmallMenu && isSmallScreen ? styles.showMenu : ""}`}
      >
        <ul className={styles.navList}>
          <NavLinks className={styles.navItem} />

          <li className={`${styles.navItem} ${styles.navResume}`}>
            <a href={resume} download="Valentine_Idi_CV.pdf">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
