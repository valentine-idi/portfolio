import { type IconType } from "react-icons";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import IconLinks from "../iconLinks";
import { contacts } from "../../data/resources.json";
import styles from "./GetInTouch.module.scss";

const GetInTouch = () => {
  const icons: Record<string, IconType> = {
    MdOutlineMail,
    RiPhoneLine,
    MdOutlineLocationOn,
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainHeader}>Get in touch</div>
      <div className={styles.description}>
        Have a question or want to work together? Feel free to drop me a
        message. I'd love to hear from you!
      </div>

      <div className={styles.flexWrapper}>
        <div className={styles.left}>
          <div className={styles.leftHeader}>Contact Information</div>
          <div className={styles.leftDescription}>
            Fill up the form and I'll get back to you as soon as possible
          </div>

          <div className={styles.contactWrapper}>
            {contacts.map(({ name, value, icon }) => {
              const IconComponent = icons[icon];
              return (
                <div className={styles.contactGroup}>
                  <div className={styles.contactLeft}>
                    <IconComponent />
                  </div>
                  <div className={styles.contactRight}>
                    <div>{name}</div>
                    <div>{value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.connect}>Connect with me</div>
          <div className={styles.iconGroup}>
            <IconLinks />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLeft}>
              <label>Your name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className={styles.inputRight}>
              <label>Your Email</label>
              <input type="text" placeholder="john@example.com" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Subject</label>
            <input type="text" placeholder="How can I help you?" />
          </div>

          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea placeholder="Your mesasage here" />
          </div>

          <div className={styles.inputGroup}>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
