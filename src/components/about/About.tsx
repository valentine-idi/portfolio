import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import Icon from "../Icon";
import { experience, tags } from "../../data/resources.json";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.header}>About Me</div>
      <div className={styles.summary}>
        A chronological journey through my professional career
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.left}>
          Fullstack Engineer with 5+ years of experience building reliable,
          scalable web applications across both frontend and backend.
          Experienced with TypeScript, React, Angular, Vue, Node.js, C#, and
          Python, with a strong focus on writing clean, maintainable code and
          solving real-world problems.
        </div>
        <div className={styles.right}>
          {tags.map((tag) => (
            <span className={styles.tags} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.experienceHeader}>Education & Experience</div>

        <div className={styles.experienceContent}>
          <div className={styles.experienceContentLeft}>
            <div className={styles.experienceContentHeader}>
              <div className={styles.border}>
                <span>
                  <Icon className={styles.icons} icon={MdOutlineSchool} />
                </span>
                <span>Education</span>
              </div>
            </div>

            <div className={styles.listItemContainer}>
              <div className={styles.listItemLeft}>
                <div className={styles.listItemHeader}>
                  Bsc In Electronics Engineering
                </div>

                <div className={styles.listItemBody}>
                  Metropolia University of Applied Sciences
                </div>
              </div>

              <div className={styles.listItemRight}>
                <span>2015 - 2019</span>
              </div>
            </div>

            <div className={styles.listItemContainer}>
              <div className={styles.listItemLeft}>
                <div className={styles.listItemHeader}>Relevant focus</div>

                <div className={styles.listItemBody}>
                  Communication Systems, Embedded Systems, Design,Digital System
                  Design, Data Structures and Algorithms, Microprocessors and
                  Microcontrollers
                </div>
              </div>
            </div>
          </div>

          <div className={styles.experienceContentRight}>
            <div className={styles.experienceContentHeader}>
              <div className={styles.border}>
                <span>
                  <Icon className={styles.icons} icon={MdWorkOutline} />
                </span>
                <span>Experience</span>
              </div>
            </div>

            {experience.map((e, index) => (
              <div className={styles.listItemContainer} key={index}>
                <div className={styles.listItemLeft}>
                  <div className={styles.listItemHeader}>{e.title}</div>

                  <div className={styles.listItemBody}>{e.company}</div>
                </div>

                <div className={styles.listItemRight}>
                  <span>
                    {e.started} - {e.ended ? e.ended : "Present"}{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
