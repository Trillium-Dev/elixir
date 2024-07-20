"use client";
import { useState, useEffect } from "react";
import Header from "components/Header";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "assets/icons/play.svg";
import Footer from "components/Footer";
import MobileNavigation from "components/MobileNavigation";
import styles from "./index.module.scss";
import RightIcon from "assets/icons/RightArrow.svg";
import HomeIcon from "assets/icons/house.svg";
import TrainIcon from "assets/icons/TrainIcon.svg";
import cn from "classnames";
import PlusIcon from "assets/icons/Plus-white.svg";
import MinusIcon from "assets/icons/minus.svg";
import { useRouter } from "next/navigation";
import WhatsApp from "../components/WhatsApp";

const HomePage = () => {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState<Number>(0);
  const [showEastFacing, setShowEastFacing] = useState(false);
  const [showWestFacing, setShowWestFacing] = useState(false);

  const handleHoverEventEastFacing = (e: any) => {
    if (e.type === "mouseenter") setShowEastFacing(true);
    else if (e.type === "mouseleave") setShowEastFacing(false);
  };

  const handleHoverEventWestFacing = (e: any) => {
    if (e.type === "mouseenter") setShowWestFacing(true);
    else if (e.type === "mouseleave") setShowWestFacing(false);
  };

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

  const handleGallaryClick = () => {
    router.push("/gallery");
  };

  return (
    <div className={cn("page-container", styles.container)}>
      <Header />
      <div className={styles.headingSection}>
        <div className={styles.heading}>
          Experience Contemporary Luxurious Villas
        </div>
        <div className={styles.subHeading}>
          Discover the perfect blend of modern living and serene nature in
          Whitefield.
        </div>
      </div>
      {!((screenWidth as number) < 767) && (
        <div className={styles.gallaryCTA}>
          <button
            type="button"
            className={styles.galaryBtn}
            onClick={handleGallaryClick}
          >
            GALLERY
            <Image src={PlayIcon} width={6} height={10} alt="" />
            <Image src={PlayIcon} width={6} height={10} alt="" />
          </button>
        </div>
      )}

      <div className={styles.imagesSection}>
        <div className={styles.leftImageContainer}>
          <div className={styles.first} />
          <div className={styles.second} />
          <div className={styles.third} />
          <div className={styles.fourth} />
          <div className={styles.fifth} />
        </div>
      </div>

      {(screenWidth as number) < 767 ? (
        <div className={styles.rightImageContainer}>
          <div className={styles.rightImage}></div>
          <div className={styles["rightImageContainer_text"]}>
            <div>
              Discover the perfect blend of modern living and serene nature in
              Whitefield.
            </div>
            <button
              type="button"
              className={styles.galaryBtn}
              onClick={handleGallaryClick}
            >
              GALLERY
              <Image src={PlayIcon} width={6} height={10} alt="" />
              <Image src={PlayIcon} width={6} height={10} alt="" />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.rightImage}></div>
      )}
      <div className={styles.exploreSection}>
        <div className={styles.heading}>
          Experience unparalleled living in our exquisitely designed villas.
        </div>
        <div className={styles.explore}>
          <div className={styles["explore_1"]}>
            <div className={styles["explore_1_text"]}>
              Ultra luxurious villas where the design seamlessly blends harmony
              and rhythm, transforming our villas into an oasis of tranquility
              and calmness.
            </div>
            <div className={styles["explore_1_greenText"]}>
              Ready to experience the extraordinary?
            </div>
            <button
              type="button"
              className={styles["explore_villas_btn"]}
              onClick={() => router.push("/villas")}
            >
              Explore villas
              <Image src={RightIcon} width={20} height={20} alt="" />
            </button>
          </div>
          <div className={styles["explore_2"]}>
            <div
              className={cn(styles["villas_1"], {
                [styles.showImage]: showEastFacing,
              })}
              onMouseEnter={handleHoverEventEastFacing}
              onMouseLeave={handleHoverEventEastFacing}
            >
              {/* <button
                type="button"
                className={styles.plusBtn}
                onClick={() => setShowEastFacing((prev) => !prev)}
              >
                {showEastFacing ? (
                  <Image src={MinusIcon} alt="" width={10} height={10} />
                ) : (
                  <Image src={PlusIcon} alt="" width={16} height={16} />
                )}
              </button> */}
              {showEastFacing && (
                <div className={styles["villas_1_para"]}>
                  Indulge in the epitome of luxury with our 3+BHK villas,
                  offering plot sizes from 1200 sqft to 2400 sqft and saleable
                  spaces ranging from 2587 sqft to 5286 sqft.
                </div>
              )}

              <div className={styles["villas_text"]}>EAST FACING VILLAS</div>
            </div>
            <div
              className={cn(styles["villas_2"], {
                [styles.showImage]: showWestFacing,
              })}
              onMouseEnter={handleHoverEventWestFacing}
              onMouseLeave={handleHoverEventWestFacing}
            >
              {/* <button
                type="button"
                className={styles.plusBtn}
                onClick={() => setShowWestFacing((prev) => !prev)}
              >
                {showWestFacing ? (
                  <Image src={MinusIcon} alt="" width={10} height={10} />
                ) : (
                  <Image src={PlusIcon} alt="" width={16} height={16} />
                )}
              </button> */}
              {showWestFacing && (
                <div className={styles["villas_2_para"]}>
                  Uncover the essence of luxury in our 4+BHK villas, offering
                  plot sizes from 1200 sqft to 2400 sqft, and expansive saleable
                  spaces spanning 2588 sqft to 5285 sqft.
                </div>
              )}
              <div className={styles["villas_text"]}>WEST FACING VILLAS</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles["middleSection_1"]}>
          {(screenWidth as number) > 767 ? (
            <Image src={TrainIcon} alt="" />
          ) : (
            <Image src={TrainIcon} alt="" width={75} height={88} />
          )}

          <div className={styles.textSection}>
            <div className={styles["textSection_1"]}>10 MIN DRIVE FROM</div>
            <div className={styles["textSection_2"]}>
              KADUGODI METRO STATION
            </div>
          </div>
        </div>
        <div className={styles["middleSection_2"]}>
          {(screenWidth as number) > 767 ? (
            <Image src={HomeIcon} alt="" width={279} height={275} />
          ) : (
            <Image src={HomeIcon} alt="" width={83} height={89} />
          )}

          <div className={styles.textSection}>
            <div className={styles["textSection_1"]}>WORLD CLASS</div>
            <div className={styles["textSection_2"]}>AMENITIES</div>
          </div>
        </div>
      </div>
      <div className={styles.playSection}>
        <div className={styles["playSection_1"]}>
          <div className={styles.sectionText}>PLAY ZONE</div>
        </div>
        <div className={styles["playSection_2"]}>
          <div className={styles.sectionText}>RECREATION ZONE</div>
        </div>
        <div className={styles["playSection_3"]}>
          <div className={styles.sectionText}>FITNESS ZONE</div>
        </div>
      </div>
      <div className={styles.amnetiesSection}>
        <div className={styles.text}>
          <div className={styles.amnetiesHeader}>
            Unveiling unparalleled comfort
          </div>
          <div className={styles.amnetiesText}>
            Carefully curated amenities for a lifestyle beyond ordinary.
          </div>
        </div>
        <button
          type="button"
          className={styles.exploreBtn}
          onClick={() => router.push("/amenities")}
        >
          Explore amenities
          <Image src={RightIcon} width={20} height={20} alt="" />
        </button>
      </div>
      <div className={styles.ourLocationSection} id="location">
        <div className={styles.ourLocation}>Our location</div>
        <div className={styles.mapImage}></div>
        <Link
          href={"https://maps.app.goo.gl/XVjPCCEVAQWr7Hyo9?g_st=iw"}
          className={styles.viewBtn}
          target="_blank"
        >
          VIEW ON GOOGLE MAPS&nbsp;
          <Image src={PlayIcon} width={6} height={10} alt="" />
          <Image src={PlayIcon} width={6} height={10} alt="" />
        </Link>
      </div>
      <Footer />
      {(screenWidth as number) < 767 && <MobileNavigation />}
      {(screenWidth as number) > 767 && <WhatsApp />}
    </div>
  );
};

export default HomePage;
