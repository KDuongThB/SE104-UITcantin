import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./UI03Register.module.css";

const UI03Register: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  return (
    <div className={styles.uI03RegisterDiv}>
      <img className={styles.vectorIcon} alt="" src="../vector23.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector24.svg" />
      <div className={styles.footerSectionDiv}>
        <div className={styles.footerBackgroundDiv} />
        <div className={styles.footerLogoDiv}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      <form className={styles.signUpSectionForm}>
        <div className={styles.signUpFormDiv}>
          <button className={styles.signUpButton}>
            <button className={styles.button} />
            <b className={styles.textB}>Đăng ký</b>
          </button>
          <button className={styles.signInButton}>
            <button className={styles.button} onClick={onButton1Click} />
            <b className={styles.textB}>Đăng nhập</b>
          </button>
          <div className={styles.textDiv}>
            <img className={styles.vectorIcon2} alt="" src="../vector25.svg" />
            <b className={styles.textB2}>Đã có tài khoản?</b>
            <img className={styles.vectorIcon3} alt="" src="../vector26.svg" />
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
            defaultValue="username"
            placeholder="Tên đăng nhập/Email"
            required
          />
        </div>
        <b className={styles.signUpTitleB}>Đăng ký</b>
      </form>
      <div className={styles.bannerSectionDiv}>
        <textarea className={styles.bannerImageTextarea} />
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
      <div className={styles.headerSectionDiv}>
        <button className={styles.headerSignInButton}>
          <button className={styles.button} />
          <b className={styles.textB3}>Đăng nhập</b>
        </button>
        <Link className={styles.headerLogoButton} to="/">
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
            <button className={styles.numberButton}>0</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI03Register;
