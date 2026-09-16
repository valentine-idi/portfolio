import { type IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Icon from "../Icon";
import styles from "./Footer.module.scss";

const Footer = () => {
  const icons: IconType[] = [FiGithub, FiLinkedin, FiMail];
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
            {icons.map((icon) => (
              <span>
                <Icon className={styles.socialIcon} icon={icon} />
              </span>
            ))}
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
