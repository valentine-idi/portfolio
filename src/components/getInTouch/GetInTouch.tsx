import { IconContext, type IconType } from "react-icons";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./GetInTouch.module.scss";

interface Contacts {
  name: string;
  value: string;
  icon: IconType;
}

const GetInTouch = () => {
  const contacts: Contacts[] = [
    {
      name: "Email",
      value: "idi.valentine@gmail.com",
      icon: MdOutlineMail,
    },

    {
      name: "Phone",
      value: "+358 40 684 2464",
      icon: RiPhoneLine,
    },

    {
      name: "Location",
      value: "Helsinki, Finland",
      icon: MdOutlineLocationOn,
    },
  ];

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
            {contacts.map(({ name, value, icon: Icon }) => (
              <div className={styles.contactGroup}>
                <div className={styles.contactLeft}>
                  <Icon />
                </div>
                <div className={styles.contactRight}>
                  <div>{name}</div>
                  <div>{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.connect}>Connect with me</div>
          <div className={styles.iconGroup}>
            <span>
              <IconContext.Provider
                value={{ className: `${styles.connectIcons}` }}
              >
                <FiGithub />
              </IconContext.Provider>
            </span>
            <span>
              <FiLinkedin />
            </span>
            <span>
              <FiMail />
            </span>
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
