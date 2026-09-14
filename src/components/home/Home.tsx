import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Home.module.scss";
import myImage from "../../assets/images/myPicture-black-and-white.jpg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.greeting}>Hello! I'm</div>

        <div className={styles.name}>
          Valentine <span>Idi</span>
        </div>

        <div className={styles.title}>Full-Stack Developer</div>

        <div className={styles.description}>
          Full-stack engineer specializing in scalable systems and AI-driven
          solutions. Crafting high-performance digital products with precision
          and purpose
        </div>

        <div className={styles.socials}>
          <div className={styles.buttons}>
            <div>Get in Touch</div>
            <div>View Skills</div>
          </div>
          <div className={styles.icons}>
            <IconContext.Provider value={{ className: `${styles.socialIcon}` }}>
              <FiGithub />
            </IconContext.Provider>

            <IconContext.Provider value={{ className: `${styles.socialIcon}` }}>
              <FiLinkedin />
            </IconContext.Provider>

            <IconContext.Provider value={{ className: `${styles.socialIcon}` }}>
              <FiMail />
            </IconContext.Provider>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img src={myImage} alt="My Picture" />
      </div>
    </div>
  );
};

export default Home;
