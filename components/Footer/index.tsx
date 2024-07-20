import FooterLogo from "assets/images/footer-logo.png";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { FooterInfo } from "../../constants";
import Image from "next/image";

const Footer = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
      {(screenWidth as number) < 767 ? (
        <Image src={FooterLogo} alt="Logo" width={91} height={64} />
      ) : (
        <Image src={FooterLogo} alt="Logo" width={227} height={108} />
      )}
      </div>
      <div className={styles.infoContainer}>
        {FooterInfo.map((info, index) => {
          return (
            <div className={styles.info} key={index}>
              <div className={styles.title}>{`${info.title}:`}</div>
              <div className={styles.value}>
                <div className={styles.text}>{info.value}</div>
                {info.number && (
                  <div className={styles.number1}>{info.number}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
