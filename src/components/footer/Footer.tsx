import { type IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { contacts } from "../../data/resources.json";
import Icon from "../Icon";
import styles from "./Footer.module.scss";

const Footer = () => {
  const icons: Record<string, IconType> = {
    FiGithub,
    FiLinkedin,
    FiMail,
  };

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
            {contacts.map(({ url, icon }) => {
              const IconComponent = icons[icon];

              return (
                <span key={url}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon className={styles.socialIcon} icon={IconComponent} />
                  </a>
                </span>
              );
            })}
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
