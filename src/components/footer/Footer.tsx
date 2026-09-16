import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logo}>VI.</div>
          <div className={styles.body}>
            Building elegant digital solutions with a focus on user experience
            and technical excellence.
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.icons}>
            <span>
              <IconContext.Provider
                value={{ className: `${styles.socialIcon}` }}
              >
                <FiGithub />
              </IconContext.Provider>
            </span>
            <span>
              <IconContext.Provider
                value={{ className: `${styles.socialIcon}` }}
              >
                <FiLinkedin />
              </IconContext.Provider>
            </span>
            <span>
              <IconContext.Provider
                value={{ className: `${styles.socialIcon}` }}
              >
                <FiMail />
              </IconContext.Provider>
            </span>
          </div>

          <div className={styles.copyright}>
            © 2026 Valentine Idi | Built with React and SCSS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
