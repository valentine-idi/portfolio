import { useEffect, useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import Icon from "../Icon";
import styles from "./ScrollTop.module.scss";

const ScrollTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 350);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <span
      className={`${styles.container} ${showScrollButton && styles.show}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Icon icon={TiArrowSortedUp} className={styles.icon} />
    </span>
  );
};

export default ScrollTop;
