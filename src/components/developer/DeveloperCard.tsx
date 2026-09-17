import styles from "./DeveloperCard.module.scss";

function DeveloperCard() {
  return (
    <div className={styles.codeCard}>
      <div className={styles.codeCardHeader}>
        <div className={styles.trafficLights}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>

        <span className={styles.filename}>developer.js</span>
      </div>

      <pre className={styles.code}>
        <code>
          <span className={styles.comment}>// Software Engineer</span>
          {"\n\n"}
          <span className={styles.keyword}>const</span>{" "}
          <span className={styles.variable}>developer</span>{" "}
          <span className={styles.operator}>=</span>{" "}
          <span className={styles.bracket}>{"{"}</span>
          {"\n"}
          {"  "}
          <span className={styles.property}>name</span>
          <span className={styles.operator}>:</span>{" "}
          <span className={styles.string}>'Valentine Idi'</span>
          <span className={styles.operator}>,</span>
          {"\n"}
          {"  "}
          <span className={styles.property}>skills</span>
          <span className={styles.operator}>:</span>{" "}
          <span className={styles.bracket}>[</span>
          <span className={styles.string}>'React'</span>
          <span className={styles.operator}>,</span>{" "}
          <span className={styles.string}>'Node.js'</span>
          <span className={styles.operator}>,</span>{" "}
          <span className={styles.string}>'Python'</span>
          <span className={styles.bracket}>]</span>
          <span className={styles.operator}>,</span>
          {"\n"}
          {"  "}
          <span className={styles.string}>focuses</span>
          <span className={styles.operator}>:</span>{" "}
          <span className={styles.bracket}>[</span>
          <span className={styles.string}>'Full-Stack'</span>
          <span className={styles.operator}>,</span>{" "}
          <span className={styles.string}>'UI/UX'</span>
          <span className={styles.bracket}>]</span>
          <span className={styles.operator}>,</span>
          {"\n"}
          {"  "}
          <span className={styles.property}>learning</span>
          <span className={styles.operator}>:</span>{" "}
          <span className={styles.string}>'Always'</span>
          {"\n"}
          <span className={styles.bracket}>{"}"}</span>
          <span className={styles.operator}>;</span>
        </code>
      </pre>
    </div>
  );
}

export default DeveloperCard;
