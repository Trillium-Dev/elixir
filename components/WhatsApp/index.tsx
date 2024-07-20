import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import WhatsAppIcon from "../../public/assets/icons/WhatsAppIcon.svg";
import { MOBILE_NUMBER, MESSAGE } from "../../constants";
import styles from "./index.module.scss";

const WhatsApp = () => {
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
    (screenWidth as number) > 767 && (
      <Link
        href={`//api.whatsapp.com/send?phone=${MOBILE_NUMBER}&text=${MESSAGE}`}
        className={styles.whatsAppBtn}
      >
        <Image src={WhatsAppIcon} width={56} height={56} alt="" />
      </Link>
    )
  );
};

export default WhatsApp;
