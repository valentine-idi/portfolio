import emailjs from "@emailjs/browser";

export interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (templateParams: Inputs) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log("publicId", publicId);

  try {
    return await emailjs.send(
      serviceId,
      templateId,
      {
        name: templateParams.name,
        email: templateParams.email,
        subject: templateParams.subject,
        message: templateParams.message,
      },
      {
        publicKey: publicId,
      },
    );
  } catch (error) {
    console.log("Error sending email", error);

    throw new Error("Unable to send email, please try again");
  }
};

export default sendEmail;
