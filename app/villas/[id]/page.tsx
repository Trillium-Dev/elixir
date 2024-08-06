import BackIcon from "assets/icons/Back-Rounded.svg";
import Image from "next/image";
import styles from "./index.module.scss";
import { VillasPages } from "../../../constants";
import Link from "next/link";

interface IParams {
  id: string;
}

interface IVillasProps {
  params: IParams;
}

export function generateStaticParams() {
  return [
    { id: "E1200" },
    { id: "E1500" },
    { id: "E2105" },
    { id: "E2400" },
    { id: "W1200" },
    { id: "W1500" },
    { id: "W2105" },
    { id: "W2400" },
  ];
}

const VillasComponent = ({ params }: IVillasProps) => {
  const { id } = params;

  const values = VillasPages(id);

  return (
    <div className="page-container">
      <div className={styles.header}>
        <Link href="/villas">
          <span className={styles.backBtn}>
            <Image src={BackIcon} width={32} height={32} alt="back" />
          </span>
        </Link>

        <div className={styles.headerDescription}>
          <div className={styles.heading}>{values?.name}</div>
          <div className={styles.description}>
            {values?.description?.map((desc, index) => (
              <div className={styles.desc} key={index}>
                {desc}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.imagesSection}>
        {values?.imagesArr?.map(({ image, description, width, height }) => (
          <div className={styles.map}>
            <Image
              src={image}
              width={width}
              height={height}
              placeholder="blur"
              alt="image"
              priority
            />
            <div className={styles.desc}>
              {description?.map((desc, ind) => (
                <div key={ind}>{desc}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillasComponent;
