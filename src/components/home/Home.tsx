import IconLinks from "../IconLinks";
import DeveloperCard from "../developer/DeveloperCard";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container} id="home">
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
            <IconLinks className={styles.socialIcon} />
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <DeveloperCard />
      </div>
    </div>
  );
};

export default Home;
