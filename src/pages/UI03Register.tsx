import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./UI03Register.module.css";

const UI03Register: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeaderSignInButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onSignInButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  return (
    <div className={styles.uI03RegisterDiv}>
      <img className={styles.vectorIcon} alt="" src="../vector162.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector163.svg" />
      <div className={styles.footerSectionDiv}>
        <div className={styles.footerLogoContainer}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.footerLogoImage}
            alt=""
            src="../footer-logo-image@2x.png"
          />
        </div>
      </div>
      <div className={styles.headerSectionDiv}>
        <button
          className={styles.headerSignInButton}
          onClick={onHeaderSignInButtonClick}
        >
          <button className={styles.button} />
          <b className={styles.textB}>Đăng nhập</b>
        </button>
        <Link className={styles.headerLogoContainer} to="/">
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.footerLogoImage}
            alt=""
            src="../footer-logo-image@2x.png"
          />
        </Link>
        <b className={styles.textB1}>Liên hệ</b>
        <b className={styles.textB2}>Đánh giá</b>
        <b className={styles.textB3}>Lịch sử</b>
        <b className={styles.textB4}>Thực đơn</b>
        <Link className={styles.textA} to="/">
          Trang chủ
        </Link>
        <div className={styles.headerShoppingCartButton}>
          <img className={styles.vectorIcon2} alt="" />
          <div className={styles.shoppingDiv}>
            <img className={styles.vectorIcon3} alt="" src="../vector107.svg" />
            <img className={styles.vectorIcon4} alt="" src="../vector107.svg" />
            <img className={styles.vectorIcon5} alt="" src="../vector109.svg" />
            <img className={styles.ellipseIcon} alt="" src="../ellipse1.svg" />
            <button className={styles.numberButton}>0</button>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.bannerSectionDiv}>
          <div className={styles.bannerTitleDiv}>
            <span className={styles.bannerTitleTxt}>
              <p className={styles.triNghimTMnOnlineTi}>
                <b>{`Trải nghiệm đặt món online tại `}</b>
              </p>
              <p className={styles.canteenUITP}>
                <span>Canteen UIT</span>
              </p>
            </span>
          </div>
          <img
            className={styles.bannerLandingImageImage}
            alt=""
            src="../banner-landingimage-image@2x.png"
          />
        </div>
        <div className={styles.signUpFormDiv}>
          <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
            <b className={styles.textB5}>Đăng ký</b>
          </button>
          <button className={styles.signInButton} onClick={onSignInButtonClick}>
            <b className={styles.textB5}>Đăng nhập</b>
          </button>
          <div className={styles.textDiv}>
            <img className={styles.vectorIcon6} alt="" src="../vector167.svg" />
            <b className={styles.textB7}>Đã có tài khoản?</b>
            <img className={styles.vectorIcon7} alt="" src="../vector168.svg" />
          </div>
          <input
            className={styles.frameInput}
            type="text"
            placeholder="Mật khẩu"
            required
          />
          <input
            className={styles.frameInput1}
            type="text"
            placeholder="Tên đăng nhập/Email"
            required
          />
          <b className={styles.signUpFormTitleText}>Đăng ký</b>
        </div>
      </div>
    </div>
  );
};

export default UI03Register;
