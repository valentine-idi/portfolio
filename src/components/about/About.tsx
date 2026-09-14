import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import styles from "./About.module.scss";

const About = () => {
  const tags = [
    "Passion for tech",
    "learner",
    "linux enthusiast",
    "full stack developer",
  ];

  const experience = [
    {
      title: "Software Development Engineer",
      company: "Elekta Oy",
      started: "May 2022",
      ended: "",
    },

    {
      title: "Frontend Engineer",
      company: "Druid Oy",
      started: "March 2022",
      ended: "April 2022",
    },

    {
      title: "Full Stack Developer",
      company: "DroppX",
      started: "November 2020",
      ended: "Feb 2022",
    },

    {
      title: "Full Stack Developer",
      company: "Globuzzer",
      started: "September 2020",
      ended: "November 2020",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>About Me</div>
      <div className={styles.summary}>
        A chronological journey through my professional career
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.left}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1966, when designers at Letraset and James Mosley, the librarian
          at St Bride Printing Library in London, took a 1914 Cicero translation
          and scrambled it to make dummy text for Letraset's Body Type sheets
        </div>
        <div className={styles.right}>
          {tags.map((tag) => (
            <span className={styles.tags}>{tag}</span>
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
                  <IconContext.Provider
                    value={{ className: `${styles.icons}` }}
                  >
                    <MdOutlineSchool />
                  </IconContext.Provider>
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
                  Full-stack development, software engineering
                </div>
              </div>
            </div>
          </div>

          <div className={styles.experienceContentRight}>
            <div className={styles.experienceContentHeader}>
              <div className={styles.border}>
                <span>
                  <IconContext.Provider
                    value={{ className: `${styles.icons}` }}
                  >
                    <MdWorkOutline />
                  </IconContext.Provider>
                </span>
                <span>Experience</span>
              </div>
            </div>

            {experience.map((e) => (
              <div className={styles.listItemContainer}>
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
