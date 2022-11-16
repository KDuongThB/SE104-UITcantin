import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UI05Profile.module.css";

const UI05Profile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTrangChTextClick = useCallback(() => {
    navigate("/ui01home-user");
  }, [navigate]);

  const onLchSTextClick = useCallback(() => {
    navigate("/ui07orderhistory");
  }, [navigate]);

  const onThcNTextClick = useCallback(() => {
    navigate("/ui06dishesmenu");
  }, [navigate]);

  return (
    <div className={styles.uI05ProfileDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.logoDiv}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="../vector38.svg" />
      <div className={styles.groupDiv}>
        <div className={styles.headerDiv}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.navigationDiv}>
            <b className={styles.trangChB} onClick={onTrangChTextClick}>
              Trang chủ
            </b>
            <b className={styles.lchSB} onClick={onLchSTextClick}>
              Lịch sử
            </b>
            <b className={styles.nhGiB}>Đánh giá</b>
            <b className={styles.linHB}>Liên hệ</b>
            <b className={styles.thcNB} onClick={onThcNTextClick}>
              Thực đơn
            </b>
          </div>
          <div className={styles.shoppingCartDiv}>
            <img
              className={styles.shoppingIcon}
              alt=""
              src="../shopping1.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-161.svg"
            />
            <b className={styles.b}>0</b>
          </div>
          <div className={styles.logoDiv1}>
            <div className={styles.canteenUITDiv}>Canteen UIT</div>
            <img
              className={styles.logoUit1Icon}
              alt=""
              src="../logouit-1@2x.png"
            />
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="../group-32221.svg" />
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.saveDiv}>
          <div className={styles.buttonDiv} />
          <b className={styles.saveB}>Lưu thay đổi</b>
        </div>
        <img
          className={styles.oouiuserAvatarIcon}
          alt=""
          src="../oouiuseravatar.svg"
        />
        <div className={styles.hVTn}>{`Họ và tên `}</div>
        <img className={styles.lineIcon} alt="" src="../line-3.svg" />
        <div className={styles.sInThoi}>Số điện thoại</div>
        <img className={styles.lineIcon1} alt="" src="../line-31.svg" />
        <img className={styles.bxsphoneIcon} alt="" src="../bxsphone.svg" />
        <div className={styles.rectangleDiv3} />
        <img
          className={styles.bxscloudUploadIcon}
          alt=""
          src="../bxscloudupload.svg"
        />
        <b className={styles.nhpVoYTiNh}>Nhấp vào đây để tải ảnh</b>
        <div className={styles.pNGJPGHocGIFTiA800x}>
          PNG, JPG hoặc GIF (Tối đa 800x400px)
        </div>
      </div>
      <b className={styles.hSNgiDng}>Hồ sơ người dùng</b>
      <img className={styles.vectorIcon1} alt="" src="../vector39.svg" />
    </div>
  );
};

export default UI05Profile;
