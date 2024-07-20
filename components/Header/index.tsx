"use client";
import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import DSRLogo from "public/images/dsr-logo.png";
import ElixirLogo from "public/images/ELIXIR.svg";
import Link from "next/link";
import { HeaderTabs, email, mobileHeaderTabs } from "../../constants";
import Image from "next/image";
import CrossIcon from "assets/icons/CrossRounded.svg";
import Hamburger from "assets/icons/hamburger.svg";
import Modal from "components/Modal";

import MailIcon from "assets/icons/Mail.svg";
import { usePathname } from "next/navigation";

interface IHeader {
  customClass?: string;
}

const Header = ({ customClass = "" }: IHeader) => {
  const [screenWidth, setScreenWidth] = useState<Number>(0);
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);
  const [openEnquireModal, setOpenEnquireModal] = useState<boolean>(false);
  const pathname = usePathname();

  const handleModalClose = () => {
    setOpenEnquireModal(false);
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

  return (
    <header className={cn(styles.header, customClass)}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.navbarLogo}>
          <Image src={DSRLogo} alt="DSR" width={82} height={24} />
          <div className={styles["vertical-line"]}></div>
          <Image src={ElixirLogo} alt="Elixir" width={55} height={20} />
        </Link>
        {!((screenWidth as number) < 767) && (
          <>
            <ul className={styles.navMenu}>
              {HeaderTabs?.map((tab, index) => {
                return (
                  <li className={styles.navItem} key={index}>
                    <Link
                      href={tab.url}
                      className={cn(styles.navLink, {
                        [styles.selected]: pathname === tab.url,
                      })}
                    >
                      {tab.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => setOpenEnquireModal(true)}
              className={styles.enquireBtn}
            >
              <Image src={MailIcon} width={20} height={20} alt="" />
              Enquire now
            </button>
          </>
        )}
        {(screenWidth as number) < 767 && (
          <Image
            src={Hamburger}
            alt=""
            className={styles.burger}
            onClick={() => setOpenHamburger(true)}
          />
        )}
      </nav>
      <div
        className={cn(styles.menuContainer, { [styles.open]: openHamburger })}
      >
        <Image
          src={CrossIcon}
          alt=""
          className={styles.closeIcon}
          width={18}
          height={18}
          onClick={() => setOpenHamburger(false)}
        />
        <div className={styles.menuHeader}>MENU</div>
        <div className={styles.menuList}>
          {mobileHeaderTabs?.map((headerItem) => (
            <Link
              href={headerItem.url}
              className={styles.menuItem}
              onClick={() => {
                if (headerItem.name === "Enquire now")
                  setOpenEnquireModal(true);
              }}
            >
              <div className={styles.circularIcon}>
                <Image src={headerItem?.icon} alt="" width={9} height={9} />
              </div>
              <div>{headerItem.name}</div>
            </Link>
          ))}
        </div>
      </div>
      {openEnquireModal && <Modal onClose={handleModalClose} />}
    </header>
  );
};

export default Header;
