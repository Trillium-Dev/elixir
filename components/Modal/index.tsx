import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.scss";
import CrossIcon from "assets/icons/CrossRounded.svg";
import Logo from "assets/images/logo-modal-1.png";
import EmailLogo from "assets/images/email-illustration.svg";
import Mail from "public/assets/icons/form/mail.svg";
import Message from "public/assets/icons/form/message.svg";
import Name from "public/assets/icons/form/name.svg";
import Number from "public/assets/icons/form/number.svg";
import Image from "next/image";

interface IModal {
  onClose: () => void;
}

interface IFormValues {
  name: string;
  email: string;
  number: any;
  message: string;
}

const Modal = ({ onClose }: IModal) => {
  const [enquiryForm, setEnquiryForm] = useState<any>({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [screenWidth, setScreenWidth] = useState<Number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      if (typeof window !== "undefined") {
        setScreenWidth(window.innerWidth);
      }
    };

    // Initial screen width on mount
    updateScreenWidth();

    // Event listener for screen width changes
    if (typeof window !== "undefined")
      window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClose();
  };

  const handleOnChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setEnquiryForm({ ...enquiryForm, [name]: value });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const number = formData.get("number") as string;
    const message = formData.get("message") as string;
    const mailtoLink = `mailto:sales.elixir@dsrinfra.com?subject=Enquiry for DSR Elixir&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ANumber: ${number}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
    /*try {
      const response = await fetch('http://dsrinfra08.remserp.com/IVR_Inbound.aspx?UID=fourqt&PWD=wn9mxO76f34=&f=m&con=$number&email=$email&name=$name&Remark=$message&Proj=DSR Elixir&src=DSR Elixir&city=Bangalore&ch=MS', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryForm),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('\n\nForm submitted successfully:', result);
      setFormSubmitted(true);
    } 
    
    catch (error) {
      console.error('\n\nError submitting form:', error);
    }*/
    
    setEnquiryForm({
      name: "",
      email: "",
      number: "",
      message: "",
    });
    setFormSubmitted(true);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles["modal-overlay"]}>
      <div
        className={styles["modal-wrapper"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleCloseClick}
          className={styles["btn-container"]}
        >
          <Image src={CrossIcon} alt="" />
        </button>
        <div className={styles["modal-body"]}>
          <div className={styles["images-section"]}>
            {(screenWidth as number) < 767 && (
              <div className={styles.getText}>Get in touch with us!</div>
            )}
            {(screenWidth as number) > 767 && <Image src={Logo} alt="" />}
            <Image src={EmailLogo} alt="" />
            {(screenWidth as number) > 767 && (
              <div className={styles["text"]}>Get in touch!</div>
            )}
          </div>
          <div className={styles["form-container"]}>
            <form onSubmit={handleSubmit} className={styles["form-section"]}>
              <div className={styles.inputSection}>
                <label>
                  <div className={styles.icon}>
                    <Image src={Name} alt="" />
                  </div>
                  Name:
                </label>
                <input
                  type="text"
                  value={enquiryForm.name}
                  name={"name"}
                  onChange={handleOnChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.inputSection}>
                <label>
                  <div className={styles.icon}>
                    <Image src={Mail} alt="" />
                  </div>
                  Email address*:
                </label>
                <input
                  type="email"
                  value={enquiryForm.email}
                  name={"email"}
                  onChange={handleOnChange}
                  placeholder="Enter your email ID"
                />
              </div>
              <div className={styles.inputSection}>
                <label>
                  <div className={styles.icon}>
                    <Image src={Number} alt="" />
                  </div>
                  Phone number*:
                </label>
                <input
                  type="number"
                  value={enquiryForm.number}
                  name={"number"}
                  id="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  onChange={handleOnChange}
                  placeholder="Enter your contact number"
                />
              </div>
              <div className={styles.inputSection}>
                <label>
                  <div className={styles.icon}>
                    <Image src={Message} alt="" />
                  </div>
                  Message
                </label>
                <textarea
                  value={enquiryForm.message}
                  name={"message"}
                  onChange={handleOnChange}
                  placeholder="Enter your queries or concerns, if any"
                />
              </div>
              <input
                type="submit"
                value={formSubmitted ? "Submitted" : "Send"}
                className={styles.submitBtn}
              />
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
