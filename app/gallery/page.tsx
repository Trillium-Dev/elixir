"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import CrossIcon from "assets/icons/CrossRounded.svg";
import Image from "next/image";
import Image1 from "assets/images/gallary/Elixir_1-5.png";
import Image2 from "assets/images/gallary/Elixir_3-2.png";
import Image3 from "assets/images/gallary/Elixir_7-3.png";
import Image4 from "assets/images/gallary/Elixir_13-2.png";
import Image5 from "assets/images/gallary/Elixir_14-2.png";
import Image6 from "assets/images/gallary/Elixir_15-1.png";
import Image7 from "assets/images/gallary/Elixir_16-1.png";
import Image8 from "assets/images/gallary/Elixir_17-1.png";
import Image9 from "assets/images/gallary/Elixir_18-1.png";
import Image10 from "assets/images/gallary/Elixir_19-1.png";
import Image11 from "assets/images/gallary/Elixir_20.png";
import Image12 from "assets/images/gallary/Elixir_21.png";
import { useRouter } from "next/navigation";

const Gallary = () => {
  const router = useRouter();
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
      <div className={styles.heading}>
        <div className={styles.text}>PROJECT RENDERS</div>
        <button
          type="button"
          className={styles.crossBtn}
          onClick={() => router.back()}
        >
          <Image src={CrossIcon} width={36} height={36} alt="" />
        </button>
      </div>
      <div className={styles.imagesContainer}>
        {(screenWidth as number) < 767 ? (
          <Image src={Image1} alt="" width={380} height={283} />
        ) : (
          <Image src={Image1} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image2} alt="" width={380} height={283} />
        ) : (
          <Image src={Image2} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image3} alt="" width={380} height={283} />
        ) : (
          <Image src={Image3} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image4} alt="" width={380} height={283} />
        ) : (
          <Image src={Image4} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image5} alt="" width={380} height={283} />
        ) : (
          <Image src={Image5} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image6} alt="" width={380} height={283} />
        ) : (
          <Image src={Image6} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image7} alt="" width={380} height={283} />
        ) : (
          <Image src={Image7} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image8} alt="" width={380} height={283} />
        ) : (
          <Image src={Image8} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image9} alt="" width={380} height={283} />
        ) : (
          <Image src={Image9} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image10} alt="" width={380} height={283} />
        ) : (
          <Image src={Image10} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image11} alt="" width={380} height={283} />
        ) : (
          <Image src={Image11} alt="" width={411} height={306} />
        )}
        {(screenWidth as number) < 767 ? (
          <Image src={Image12} alt="" width={380} height={283} />
        ) : (
          <Image src={Image12} alt="" width={411} height={306} />
        )}
      </div>
    </div>
  );
};

export default Gallary;
