import { FunctionComponent, useState, useCallback } from "react";
import LoginDropdown from "../components/LoginDropdown";
import PortalPopup from "../components/PortalPopup";
import styles from "./UI05Profile.module.css";

const UI05Profile: FunctionComponent = () => {
  const [isLoginDropdownPopupOpen, setLoginDropdownPopupOpen] = useState(false);

  const openLoginDropdownPopup = useCallback(() => {
    setLoginDropdownPopupOpen(true);
  }, []);

  const closeLoginDropdownPopup = useCallback(() => {
    setLoginDropdownPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.uI05ProfileDiv}>
        <img className={styles.vectorIcon} alt="" src="../vector103.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector104.svg" />
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
        <div className={styles.profileSectionDiv}>
          <div className={styles.proFileFormDiv}>
            <div className={styles.vectorDiv} />
            <div className={styles.saveDiv}>
              <div className={styles.buttonDiv} />
              <b className={styles.textB}>Lưu thay đổi</b>
            </div>
            <img
              className={styles.oouiuserAvatarIcon}
              alt=""
              src="../oouiuseravatar.svg"
            />
            <div className={styles.userNameDiv}>{`Họ và tên `}</div>
            <img className={styles.vectorIcon2} alt="" src="../vector105.svg" />
            <div className={styles.numberDiv}>Số điện thoại</div>
            <img className={styles.vectorIcon3} alt="" src="../vector106.svg" />
            <img className={styles.bxsphoneIcon} alt="" src="../bxsphone.svg" />
            <div className={styles.boxDiv} />
            <img
              className={styles.bxscloudUploadIcon}
              alt=""
              src="../bxscloudupload.svg"
            />
            <b className={styles.textB1}>Nhấp vào đây để tải ảnh</b>
            <div className={styles.textDiv}>
              PNG, JPG hoặc GIF (Tối đa 800x400px)
            </div>
          </div>
          <div className={styles.profileTitleText}>
            <b className={styles.textB2}>Hồ sơ người dùng</b>
          </div>
        </div>
        <div className={styles.headerSectionDiv}>
          <div className={styles.headerLogoContainer}>
            <div className={styles.canteenUITDiv}>Canteen UIT</div>
            <img
              className={styles.footerLogoImage}
              alt=""
              src="../footer-logo-image@2x.png"
            />
          </div>
          <div className={styles.headerNavigationBar}>
            <div className={styles.textDiv1}>
              <b className={styles.textB3}>Liên hệ</b>
            </div>
            <div className={styles.textDiv2}>
              <b className={styles.textB4}>Đánh giá</b>
            </div>
            <div className={styles.textDiv3}>
              <b className={styles.textB5}>Lịch sử</b>
            </div>
            <div className={styles.textDiv4}>
              <b className={styles.textB6}>Thực đơn</b>
            </div>
            <div className={styles.textDiv5}>
              <b className={styles.textB7}>Trang chủ</b>
            </div>
          </div>
          <div className={styles.shoppingCartDiv}>
            <img className={styles.vectorIcon4} alt="" />
            <div className={styles.shoppingDiv}>
              <img
                className={styles.vectorIcon5}
                alt=""
                src="../vector107.svg"
              />
              <img
                className={styles.vectorIcon6}
                alt=""
                src="../vector107.svg"
              />
              <img
                className={styles.vectorIcon7}
                alt=""
                src="../vector109.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse1.svg"
              />
              <b className={styles.number}>0</b>
            </div>
          </div>
          <div className={styles.headerProfileDropdown}>
            <img
              className={styles.dashiconsarrowLeft}
              alt=""
              src="../dashiconsarrowleft.svg"
              onClick={openLoginDropdownPopup}
            />
            <img className={styles.avatarIcon} alt="" src="../avatar2.svg" />
          </div>
        </div>
      </div>
      {isLoginDropdownPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginDropdownPopup}
        >
          <LoginDropdown onClose={closeLoginDropdownPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default UI05Profile;
