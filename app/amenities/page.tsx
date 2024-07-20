"use client";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./index.module.scss";
import WhatsApp from "components/WhatsApp";
import Image from "next/image";
import { useEffect, useState } from "react";
import DownloadIcon from "assets/icons/DownIcon.svg";
import MobileNavigation from "components/MobileNavigation";
import { clubhouseAmenities, outdorrAmenities } from "../../constants";
import Link from "next/link";

const Amenities = () => {
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
    <div className={"page-container"}>
      <Header />
      <div className={styles.headingSection}>
        <div className={styles.heading}>
          Discover a sanctuary of wellness, relaxation, and play at our
          clubhouse.
        </div>
        <div className={styles.subHeading}>
          Enjoy health and fitness amenities like a gym, meditation and yoga
          hall. With thoughtful design our clubhouse is a haven crafted to
          elevate every moment and create a rejuvenating experience.
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.btnContainer}>
          <Link
            href="/assets/Elixir.pdf"
            download
            target="_blank"
            className={styles.downloadBtn}
          >
            <p>DOWNLOAD BROCHURE</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              {(screenWidth as number) < 767 ? (
                <Image src={DownloadIcon} alt="" width={9} height={4} />
              ) : (
                <Image src={DownloadIcon} alt="" width={11} height={6} />
              )}
              {(screenWidth as number) < 767 ? (
                <Image src={DownloadIcon} alt="" width={9} height={4} />
              ) : (
                <Image src={DownloadIcon} alt="" width={11} height={6} />
              )}
            </div>
          </Link>
        </div>
        <div className={styles.bgImage}></div>
      </div>

      <div className={styles.cardsSection}>
        <div className={styles.heading}>CLUBHOUSE AMENITIES</div>
        <div className={styles.cards}>
          {clubhouseAmenities?.map((item) => {
            return (
              <div className={styles.card}>
                <Image src={item?.icon} alt="" />
                <div className={styles.text}>{item?.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.headingSection}>
        <div className={styles.heading}>
          Explore a world of outdoor recreation in our community, where a
          variety of exquisite sports facilities cater to all ages.
        </div>
        <div className={styles.subHeading}>
          From vibrant play areas for children to meticulously designed spaces
          for adults, our outdoor amenities promise a plethora of activities.
        </div>
      </div>
      <div className={styles.imageSection1}>
        <div className={styles.bgImage1}></div>
        <div className={styles.bgImage2}></div>
        <div className={styles.bgImage3}></div>
        <div className={styles.bgImage4}></div>
      </div>
      <div className={styles.cardsSection}>
        <div className={styles.heading}>OUTDOOR AMENITIES</div>
        <div className={styles.cards}>
          {outdorrAmenities?.map((item) => {
            return (
              <div className={styles.card}>
                {(screenWidth as number) < 767 ? (
                  <Image src={item?.icon} alt="" height={68} />
                ) : (
                  <Image src={item?.icon} alt="" />
                )}

                <div className={styles.text}>{item?.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      {(screenWidth as number) < 767 && <MobileNavigation />}
      {(screenWidth as number) > 767 && <WhatsApp />}
    </div>
  );
};

export default Amenities;
