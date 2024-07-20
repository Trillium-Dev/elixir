import styles from "./index.module.scss";

const Loading = () => {
  return (
    <div className={"page-container"}>
      <div className={styles.container}>
        <div className={styles.dsrLogo}></div>
        <div className={styles.backgroundLogo}></div>
        <div className={styles.elixirLogo}></div>
      </div>
    </div>
  );
};

export default Loading;
