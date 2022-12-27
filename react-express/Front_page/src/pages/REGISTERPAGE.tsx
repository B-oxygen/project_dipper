import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./REGISTERPAGE.module.css";

const REGISTERPAGE: FunctionComponent = () => {
  const navigate = useNavigate();

  const onWrapperConnectWalletClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onConnectWalletClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onLOGOClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={styles.registerPage}>
      <div className={styles.wholeWrapper} />
      <div className={styles.resigeter}>
        <div className={styles.wrapperRegister} />
        <div className={styles.register}>REGISTER</div>
      </div>
      <img
        className={styles.firstImageIcon}
        alt=""
        src="../first-image@2x.png"
      />
      <button
        className={styles.connectWallet}
        autoFocus
        onClick={onConnectWalletClick}
      >
        <button
          className={styles.wrapperConnectWallet}
          autoFocus
          onClick={onWrapperConnectWalletClick}
        />
        <div className={styles.textConnectWallet}>Connect Wallet</div>
      </button>
      <button className={styles.logo} autoFocus onClick={onLOGOClick}>
        <img className={styles.logoImgIcon} alt="" src="../logo-img@2x.png" />
        <div className={styles.logoTxt}>Dipper</div>
      </button>
    </div>
  );
};

export default REGISTERPAGE;
