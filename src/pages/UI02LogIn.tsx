import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./UI02LogIn.module.css";

const UI02LogIn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignInButtonClick = useCallback(() => {
    navigate("/ui01home-user");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/ui03register");
  }, [navigate]);

  return (
    <div className={styles.uI02LogInDiv}>
      <img className={styles.vectorIcon} alt="" src="../vector88.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector89.svg" />
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
      <div className={styles.loginSectionDiv}>
        <div className={styles.bannerDiv}>
          <div className={styles.bannerTitleText}>
            <span className={styles.bannerTitleTextTxt}>
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
            src="../banner-landing-image@2x.png"
          />
        </div>
        <div className={styles.loginFormDiv}>
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
          <button className={styles.signInButton} onClick={onSignInButtonClick}>
            <b className={styles.textB}>Đăng nhập</b>
          </button>
          <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
            <b className={styles.textB}>Đăng ký</b>
          </button>
          <b className={styles.forgotPasswordLinkB}>Quên mật khẩu?</b>
          <div className={styles.textDiv}>
            <img className={styles.vectorIcon2} alt="" src="../vector90.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector91.svg" />
            <b className={styles.textB2}>Chưa có tài khoản?</b>
          </div>
          <b className={styles.loginFormTitleText}>Đăng nhập</b>
        </div>
      </div>
      <div className={styles.headerSectionDiv}>
        <Link className={styles.headerLogoContainer} to="/">
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.footerLogoImage}
            alt=""
            src="../footer-logo-image@2x.png"
          />
        </Link>
        <div className={styles.headerNavigationBar}>
          <b className={styles.textB3}>Liên hệ</b>
          <b className={styles.textB4}>Đánh giá</b>
          <b className={styles.textB5}>Lịch sử</b>
          <b className={styles.textB6}>Thực đơn</b>
          <Link className={styles.trangCh} to="/">
            Trang chủ
          </Link>
        </div>
        <div className={styles.headerShoppingCartButton}>
          <img className={styles.vectorIcon4} alt="" />
          <div className={styles.shoppingDiv}>
            <img className={styles.vectorIcon5} alt="" src="../vector85.svg" />
            <img className={styles.vectorIcon6} alt="" src="../vector85.svg" />
            <img className={styles.vectorIcon7} alt="" src="../vector87.svg" />
            <img className={styles.ellipseIcon} alt="" src="../ellipse.svg" />
            <b className={styles.number}>0</b>
          </div>
        </div>
        <button className={styles.headerSignInButton}>
          <button className={styles.button} />
          <b className={styles.textB7}>Đăng nhập</b>
        </button>
      </div>
    </div>
  );
};

export default UI02LogIn;
