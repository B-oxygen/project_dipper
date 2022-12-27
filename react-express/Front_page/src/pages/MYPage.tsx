import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MYPage.module.css";

const MYPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoExImageClick = useCallback(() => {
    navigate("/custom-page-background");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/route-following-page");
  }, [navigate]);

  const onStartGameContainerClick = useCallback(() => {
    navigate("/route-following-page");
  }, [navigate]);

  const onShopButtonClick = useCallback(() => {
    navigate("/custom-page-background");
  }, [navigate]);

  return (
    <div className={styles.myPage}>
      <div className={styles.wrapper} />
      <button className={styles.logo} autoFocus>
        <img
          className={styles.logoExIcon}
          alt=""
          src="../logo-ex1@2x.png"
          onClick={onLogoExImageClick}
        />
        <div className={styles.logoText}>Dipper</div>
      </button>
      <div className={styles.startGame} onClick={onStartGameContainerClick}>
        <button
          className={styles.startGameChild}
          autoFocus
          onClick={onRectangleButtonClick}
        />
        <div className={styles.startGame1}>START GAME</div>
      </div>
      <div className={styles.icon}>
        <button
          className={styles.shopButton}
          autoFocus
          onClick={onShopButtonClick}
        >
          <button className={styles.shopButtonChild} autoFocus />
          <div className={styles.shop}>SHOP</div>
        </button>
        <button className={styles.myPageButton} autoFocus>
          <button className={styles.shopButtonChild} autoFocus />
          <div className={styles.myPage1}>MY PAGE</div>
        </button>
      </div>
      <button className={styles.nft5} />
      <button className={styles.nft4} autoFocus />
      <button className={styles.nft3} autoFocus />
      <button className={styles.nft2} autoFocus />
      <button className={styles.nft1} autoFocus />
      <div className={styles.wrapperNft} />
      <button className={styles.accessory4} autoFocus />
      <button className={styles.accessory3} autoFocus />
      <button className={styles.accessory2} autoFocus />
      <button className={styles.accessory1} autoFocus />
      <div className={styles.wrapperAccessory} />
      <div className={styles.container1} />
      <div className={styles.coin} />
      <div className={styles.address} />
      <img className={styles.icon1} alt="" src="../-1@2x.png" />
    </div>
  );
};

export default MYPage;
