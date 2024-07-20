"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "components/Header";
import Footer from "components/Footer";
import WhatsApp from "components/WhatsApp";
import PlayIconWhite from "assets/icons/play-white.svg";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import DownloadIcon from "assets/icons/DownIcon.svg";
import MobileNavigation from "components/MobileNavigation";
import { EastFacingVllas, WestFacingVillas } from "../../constants";
import Link from "next/link";
import cn from "classnames";

const Villas = () => {
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

  const handleClickOnVillas = (id: string) => {
    router.push(`/villas/${id}`);
  };

  console.log(EastFacingVllas, "EastFacingVllas");

  return (
    <div className={cn("page-container")}>
      <Header />
      <div className={styles.headingSection}>
        <div className={styles.heading}>Experience elevated urban living</div>
        <div className={styles.subHeading}>
          Immerse yourself in a world of innovation and style with our
          groundbreaking east and west villa plans, where thoughtful design
          takes centre stage.
        </div>
        <div className={styles.subHeading}>
          Experience the beauty of larger balconies, open sit-out spaces, and
          terraces, perfectly curated for elevating urban living to new heights.
        </div>
      </div>
      <Link
        href="/assets/Elixir.pdf"
        download
        target="_blank"
        className={styles.download}
      >
        <p>DOWNLOAD BROCHURE</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <Image src={DownloadIcon} alt="" width={11} height={6} />
          <Image src={DownloadIcon} alt="" width={11} height={6} />
        </div>
      </Link>
      {/* <video width="100%" height="240" controls preload="none">
        <source
          src={
            "https://drive.google.com/file/d/1Oh7zmKxtnFpyxxybgtR1Y6nUvZfAMF37/view?usp=sharing"
          }
          type="video/mp4"
        />
      </video> */}
      <div className={styles.header}>EAST FACING VILLAS</div>
      <div className={styles.slidesContainer}>
        {EastFacingVllas?.map((villa) => (
          <div
            className={styles.slide}
            style={{ backgroundImage: `url(${villa?.image?.src})` }}
          >
            <div className={styles.text}>{villa.text}</div>
            <div className={styles["exploreBtn_container"]}>
              <button
                type="button"
                className={styles.exploreBtn}
                onClick={() => handleClickOnVillas(villa?.id)}
              >
                explore plans
                {(screenWidth as number) < 767 ? (
                  <Image src={PlayIconWhite} alt="" width={5} height={4} />
                ) : (
                  <Image src={PlayIconWhite} alt="" width={7} height={11} />
                )}
                {(screenWidth as number) < 767 ? (
                  <Image src={PlayIconWhite} alt="" width={5} height={4} />
                ) : (
                  <Image src={PlayIconWhite} alt="" width={7} height={11} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.headerWest}>WEST FACING VILLAS</div>
        <div className={styles.slidesContainer}>
          {WestFacingVillas?.map((villa) => (
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${villa?.image?.src})` }}
            >
              <div className={styles.text}>{villa.text}</div>
              <div className={styles["exploreBtn_container"]}>
                <button
                  type="button"
                  className={styles.exploreBtn}
                  onClick={() => handleClickOnVillas(villa?.id)}
                >
                  explore plans
                  {(screenWidth as number) < 767 ? (
                    <Image src={PlayIconWhite} alt="" width={5} height={4} />
                  ) : (
                    <Image src={PlayIconWhite} alt="" width={7} height={11} />
                  )}
                  {(screenWidth as number) < 767 ? (
                    <Image src={PlayIconWhite} alt="" width={5} height={4} />
                  ) : (
                    <Image src={PlayIconWhite} alt="" width={7} height={11} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.headingSection}>
        <div className={styles.heading}>Masterplan</div>
        <div className={styles.subHeading}>
          Explore our site plan, a playground of possibilities where recreation,
          fitness, leisure, and play seamlessly unite, creating a vibrant
          community hub.
        </div>
      </div>
      <div className={styles.map} />

      <Footer />
      {(screenWidth as number) < 767 && <MobileNavigation />}
      {(screenWidth as number) > 767 && <WhatsApp />}
    </div>
  );
};

export default Villas;
