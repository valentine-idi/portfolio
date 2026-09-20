import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { type IconType } from "react-icons";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import sendEmail, { type Inputs } from "../../services/emailServices";
import IconLinks from "../IconLinks";
import { contacts } from "../../data/resources.json";
import styles from "./GetInTouch.module.scss";

interface Message {
  type: "error" | "success";
  message: string;
}
const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  const icons: Record<string, IconType> = {
    MdOutlineMail,
    RiPhoneLine,
    MdOutlineLocationOn,
  };

  const schema = yup.object({
    name: yup.string().required().min(2).max(50),
    email: yup.string().required().email().max(254),
    subject: yup.string().required().min(5).max(100),
    message: yup.string().required().min(10).max(1000),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      await sendEmail(data);
      setMessage({
        type: "success",
        message: "Email Sent successfully",
      });

      setLoading(false);
      reset();
    } catch (error) {
      setMessage({
        type: "error",
        message: "Something went wrong while sending email",
      });

      setLoading(false);
    }
  };

  return (
    <div className={styles.container} id="contact">
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
                <div className={styles.contactGroup} key={name}>
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.right}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLeft}>
                <label>Your name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  className={errors.name && styles.errorBorder}
                />
                <p className={`${styles.error} ${styles.floatMessage}`}>
                  {errors.name?.message}
                </p>
              </div>

              <div className={styles.inputRight}>
                <label>Your Email</label>
                <input
                  type="text"
                  placeholder="john@example.com"
                  {...register("email")}
                  className={errors.email && styles.errorBorder}
                />
                <p className={`${styles.error} ${styles.floatMessage}`}>
                  {errors.email?.message}
                </p>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Subject</label>
              <input
                type="text"
                placeholder="How can I help you?"
                {...register("subject")}
                className={errors.subject && styles.errorBorder}
              />
              <p className={`${styles.error} ${styles.floatMessage}`}>
                {errors.subject?.message}
              </p>
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea
                placeholder="Your mesasage here"
                {...register("message")}
                className={errors.message && styles.errorBorder}
              />
              <p className={`${styles.error} ${styles.floatMessage}`}>
                {errors.message?.message}
              </p>
            </div>

            <div className={styles.inputGroup}>
              <button
                disabled={loading}
                className={loading ? styles.buttonLoading : ""}
              >
                {loading ? "Sending Email..." : "Send Message"}
              </button>
              {message && (
                <p
                  className={`${styles.floatMessage} ${message.type === "error" ? styles.error : styles.success}`}
                >
                  {message.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
