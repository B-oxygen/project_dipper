import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RouteFollowingPage.module.css";

const RouteFollowingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/custom-page-background");
  }, [navigate]);

  const onShopButtonClick = useCallback(() => {
    navigate("/custom-page-background");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  const onMyPageButtonClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={styles.routeFollowingPage}>
      <div className={styles.wrapper} />
      <button className={styles.button} autoFocus onClick={onButtonClick}>
        <div className={styles.logoText}>Dipper</div>
        <img className={styles.logoExIcon} alt="" src="../logo-img@2x.png" />
      </button>
      <img className={styles.image11Icon} alt="" src="../image-11@2x.png" />
      <div className={styles.icon}>
        <button
          className={styles.shopButton}
          autoFocus
          onClick={onShopButtonClick}
        >
          <button
            className={styles.shopButtonChild}
            autoFocus
            onClick={onRectangleButtonClick}
          />
          <div className={styles.shop}>SHOP</div>
        </button>
        <button
          className={styles.myPageButton}
          autoFocus
          onClick={onMyPageButtonClick}
        >
          <button
            className={styles.myPageButtonChild}
            autoFocus
            onClick={onRectangleButton1Click}
          />
          <div className={styles.myPage}>MY PAGE</div>
        </button>
      </div>
    </div>
  );
};

export default RouteFollowingPage;
