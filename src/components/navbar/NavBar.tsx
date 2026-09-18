import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Icon from "../Icon";
import styles from "./NavBar.module.scss";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function NavBar() {
  const [showSmallMenu, setShowSmallMenu] = useState(false);
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
              {links.map(({ name, href }) => (
                <li key={name} className={styles.navItem}>
                  <a href={href}>{name}</a>
                </li>
              ))}

              <li className={`${styles.navItem} ${styles.navResume}`}>
                Resume
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
        className={`${styles.navSmall} ${showSmallMenu ? styles.showMenu : ""}`}
      >
        <ul className={styles.navList}>
          {links.map(({ name, href }) => (
            <li key={name} className={styles.navItem}>
              <a href={href}>{name}</a>
            </li>
          ))}

          <li className={`${styles.navItem} ${styles.navResume}`}>Resume</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
