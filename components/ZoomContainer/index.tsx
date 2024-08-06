"use client";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import ZoomInIcon from "@/assets/icons/zoomInIcon.svg";
import ZoomOutIcon from "@/assets/icons/zoomOutIcon.svg";
import CrossRoundedIcon from "@/assets/icons/CrossRounded.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Controls = ({ visible }: { visible: boolean }) => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  if (!visible) return null;
  return (
    <div className={styles.controls}>
      <div className={styles.cancelZoom} title="Cancel zoom">
        <Image
          onClick={() => resetTransform()}
          src={CrossRoundedIcon}
          alt="cancel-zoom"
          width={18}
          height={18}
        />
      </div>
      <div className={styles.zoomButtons}>
        <Image
          onClick={() => zoomIn()}
          src={ZoomInIcon}
          alt="zoom-in"
          width={16}
          height={16}
          className={styles.zoomButton}
          title="Zoom In"
        />
        <Image
          onClick={() => zoomOut()}
          src={ZoomOutIcon}
          alt="zoom-out"
          width={16}
          height={16}
          className={styles.zoomButton}
          title="Zoom Out"
        />
      </div>
    </div>
  );
};

export default function ZoomContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showControls, setShowControls] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const zoomProps = {
    wheel: { smoothStep: 0.008 },
    doubleClick: { mode: "toggle" as const, step: 0.7 },
    onZoom: () => setShowControls(true),
    onPanning: () => setShowControls(true),
  };

  return (
    <div className={styles.container}>
      {showHint && <div className={styles.hint}>Double click to zoom</div>}
      <TransformWrapper {...zoomProps}>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <Controls visible={showControls} />
            <TransformComponent>{children}</TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
