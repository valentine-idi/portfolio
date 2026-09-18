import {
  LuTerminal,
  LuPanelsTopLeft,
  LuCode,
  LuDatabase,
  LuCpu,
  LuPalette,
} from "react-icons/lu";
import { type IconType } from "react-icons";
import Icon from "../Icon";
import { skills } from "../../data/resources.json";
import styles from "./Skills.module.scss";

const Skills = () => {
  const icons: Record<string, IconType> = {
    LuTerminal,
    LuPanelsTopLeft,
    LuCode,
    LuDatabase,
    LuCpu,
    LuPalette,
  };

  return (
    <div className={styles.container} id="skills">
      <div className={styles.header}>Skills</div>
      <div className={styles.description}>
        I've worked with a range of technologies in the web development world,
        from frontend to backend and everything in between
      </div>

      <div className={styles.skills}>
        {skills.map(({ title, tags, icon }) => {
          const IconComponent = icons[icon];

          return (
            <div className={styles.gridWrapper} key={title}>
              <div className={styles.skillHeader}>
                <span>
                  <Icon className={styles.icons} icon={IconComponent} />
                </span>
                <span>{title}</span>
              </div>

              <div className={styles.skillBody}>
                {tags.map((tag, index) => (
                  <span className={styles.tags} key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
