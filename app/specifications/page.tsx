"use client";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import PlusIcon from "assets/icons/Plus-Icon.svg";
import MinusIcon from "assets/icons/Minus-Icon.svg";
import Image from "next/image";
import MobileNavigation from "components/MobileNavigation";
import WhatsApp from "components/WhatsApp";
import { SpecificationsList } from "../../constants";
import cn from "classnames";

const Specification = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
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

  const handleTitleClick = (index: number) => {
    if (currentIndex === index) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(index);
    }
  };
  return (
    <div className={"page-container"}>
      <Header />
      <div className={styles.headingSection}>
        <div className={styles.heading}>Specifications</div>
      </div>
      <div className={styles.list}>
        {SpecificationsList.map((spec, index) => {
          return (
            <div className={styles.accordionSection}>
              <div className={styles.titleSection}>
                <div className={styles.title}>
                  <Image src={spec?.icon} width={20} height={20} alt="" />
                  <div
                    className={styles.specTitle}
                    onClick={() => handleTitleClick(index)}
                  >
                    {spec.title}
                  </div>
                </div>
                {currentIndex === index ? (
                  <Image
                    className={styles.openIcon}
                    src={MinusIcon}
                    alt=""
                    onClick={() => handleTitleClick(index)}
                  />
                ) : (
                  <Image
                    className={styles.openIcon}
                    src={PlusIcon}
                    alt=""
                    onClick={() => handleTitleClick(index)}
                  />
                )}
              </div>
              <div
                className={cn(styles.specValueSection, {
                  [styles.show]: currentIndex === index,
                })}
              >
                <div className={styles["specValueSection_1"]}>
                  {spec.value1}
                </div>
                <div className={styles["specValueSection_2"]}>
                  {spec.value2}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
      {(screenWidth as number) < 767 && <MobileNavigation />}
      {(screenWidth as number) > 767 && <WhatsApp />}
    </div>
  );
};

export default Specification;
