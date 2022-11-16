import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./UI02LogIn.module.css";

const UI02LogIn: FunctionComponent = () => {
  return (
    <div className={styles.uI02LogInDiv}>
      <img className={styles.vectorIcon} alt="" src="../vector30.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector31.svg" />
      <div className={styles.bannerDiv}>
        <textarea className={styles.bannerLandingImage} />
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
      </div>
      <div className={styles.footerSectionDiv}>
        <div className={styles.backgroundDiv} />
        <div className={styles.footerLogoDiv}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      <form className={styles.loginSectionForm}>
        <div className={styles.loginFormDiv}>
          <input
            className={styles.frameInput}
            type="text"
            defaultValue="password"
            placeholder="Mật khẩu"
            required
          />
          <input
            className={styles.frameInput1}
            type="text"
            defaultValue="username"
            placeholder="Tên đăng nhập/Email"
            required
          />
          <button className={styles.signInButton}>
            <button className={styles.button} />
            <b className={styles.textB}>Đăng nhập</b>
          </button>
          <b className={styles.forgotPasswordLinkB}>Quên mật khẩu?</b>
          <div className={styles.textDiv}>
            <img className={styles.vectorIcon2} alt="" src="../vector26.svg" />
            <img className={styles.vectorIcon3} alt="" src="../vector25.svg" />
            <b className={styles.textB1}>Chưa có tài khoản?</b>
          </div>
          <button className={styles.signUpButton}>
            <button className={styles.button} />
            <b className={styles.textB}>Đăng ký</b>
          </button>
        </div>
        <b className={styles.loginTitleText}>Đăng nhập</b>
      </form>
      <div className={styles.headerSectionDiv}>
        <button className={styles.headerSignInButton}>
          <button className={styles.button} />
          <b className={styles.textB3}>Đăng nhập</b>
        </button>
        <Link className={styles.headerLogo} to="/">
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </Link>
        <div className={styles.headerNavigationBar}>
          <div className={styles.textDiv1}>
            <b className={styles.textB4}>Liên hệ</b>
          </div>
          <div className={styles.textDiv2}>
            <b className={styles.textB5}>Đánh giá</b>
          </div>
          <div className={styles.textDiv3}>
            <b className={styles.textB6}>Lịch sử</b>
          </div>
          <div className={styles.textDiv4}>
            <b className={styles.textB7}>Thực đơn</b>
          </div>
          <Link className={styles.textA} to="/">
            <b className={styles.textB8}>Trang chủ</b>
          </Link>
        </div>
        <div className={styles.headerShoppingCartButton}>
          <img className={styles.vectorIcon4} alt="" />
          <div className={styles.shoppingDiv}>
            <img className={styles.vectorIcon5} alt="" src="../vector27.svg" />
            <img className={styles.vectorIcon6} alt="" src="../vector27.svg" />
            <img className={styles.vectorIcon7} alt="" src="../vector29.svg" />
            <img className={styles.ellipseIcon} alt="" src="../ellipse1.svg" />
            <b className={styles.number}>0</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI02LogIn;
