import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LOGINPAGE.module.css";

const LOGINPAGE: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/route-following-page");
  }, [navigate]);

  const onStartGameClick = useCallback(() => {
    navigate("/route-following-page");
  }, [navigate]);

  const onLOGOClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.wholeWrapper} />
      <div className={styles.login}>
        <div className={styles.wrapperLogin} />
        <div className={styles.login1}>Login</div>
      </div>
      <button className={styles.startGame} autoFocus onClick={onStartGameClick}>
        <button
          className={styles.startGameChild}
          autoFocus
          onClick={onRectangleButtonClick}
        />
        <div className={styles.startGame1}>START GAME</div>
      </button>
      <button className={styles.logo} autoFocus onClick={onLOGOClick}>
        <img className={styles.logoExIcon} alt="" src="../logo-img@2x.png" />
        <div className={styles.logoText}>Dipper</div>
      </button>
      <img
        className={styles.firstImageIcon}
        alt=""
        src="../first-image@2x.png"
      />
      <div className={styles.icon}>
        <button className={styles.shopButton} autoFocus>
          <button className={styles.shopButtonChild} autoFocus />
          <div className={styles.shop}>SHOP</div>
        </button>
        <button className={styles.myPageButton} autoFocus>
          <button className={styles.shopButtonChild} autoFocus />
          <div className={styles.myPage}>MY PAGE</div>
        </button>
      </div>
    </div>
  );
};

export default LOGINPAGE;
