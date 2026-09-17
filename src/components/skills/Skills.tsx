import {
  LuTerminal,
  LuPanelsTopLeft,
  LuCode,
  LuDatabase,
  LuCpu,
  LuPalette,
} from "react-icons/lu";
import { IconContext } from "react-icons";
import styles from "./Skills.module.scss";

const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      tags: ["Javascript", "Python", "Typescript", "C#", "HTML/CSS"],
      icon: LuTerminal,
    },
    {
      title: "Frontend Development",
      tags: ["React", "Vue", "Angular", "Tailwind CSS", "React Native"],
      icon: LuPanelsTopLeft,
    },
    {
      title: "Backend Development",
      tags: ["Node", "NestJs", "Express"],
      icon: LuCode,
    },
    {
      title: "Databases",
      tags: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
      icon: LuDatabase,
    },

    {
      title: "Tools and Technologies",
      tags: ["Git", "Agile/Scrum", "BitBucket", "Vercel"],
      icon: LuCpu,
    },
    {
      title: "Design",
      tags: ["Figma", "Adobe AI"],
      icon: LuPalette,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>Skills</div>
      <div className={styles.description}>
        I've worked with a range of technologies in the web development world,
        from frontend to backend and everything in between
      </div>

      <div className={styles.skills}>
        {skills.map(({ title, tags, icon: Icon }) => (
          <div className={styles.gridWrapper}>
            <div className={styles.skillHeader}>
              <span>
                <IconContext.Provider value={{ className: `${styles.icons}` }}>
                  <Icon />
                </IconContext.Provider>
              </span>
              <span>{title}</span>
            </div>

            <div className={styles.skillBody}>
              {tags.map((tag) => (
                <span className={styles.tags}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
