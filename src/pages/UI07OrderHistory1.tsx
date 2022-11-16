import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginDropdown from "../components/LoginDropdown";
import PortalPopup from "../components/PortalPopup";
import styles from "./UI07OrderHistory1.module.css";

const UI07OrderHistory1: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isLoginDropdownPopupOpen, setLoginDropdownPopupOpen] = useState(false);

  const onOrderHistoryButtonClick = useCallback(() => {
    navigate("/ui07orderhistory2");
  }, [navigate]);

  const openLoginDropdownPopup = useCallback(() => {
    setLoginDropdownPopupOpen(true);
  }, []);

  const closeLoginDropdownPopup = useCallback(() => {
    setLoginDropdownPopupOpen(false);
  }, []);

  const onText12Click = useCallback(() => {
    navigate("/ui01home-user");
  }, [navigate]);

  const onText13Click = useCallback(() => {
    navigate("/ui06dishesmenu");
  }, [navigate]);

  return (
    <>
      <div className={styles.uI07OrderHistory1Div}>
        <img className={styles.vectorIcon} alt="" src="../vector90.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector91.svg" />
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
        <div className={styles.orderSectionDiv}>
          <div className={styles.orderTitleDiv}>
            <b className={styles.titleB}>Lịch sử đặt hàng</b>
          </div>
          <div className={styles.orderDiv}>
            <div className={styles.boxDiv} />
            <div className={styles.textDiv}>Ngày mua</div>
            <div className={styles.dayDiv}>12/11/2022</div>
            <div className={styles.textDiv1}>Trạng thái</div>
            <div className={styles.statusDiv}>Đã nhận món</div>
            <div className={styles.textDiv2}>Mã đơn hàng</div>
            <div className={styles.orderIDDiv}>#54678924</div>
            <div className={styles.textDiv3}>Giá tiền</div>
            <div className={styles.numberDiv}>30.000 vnd</div>
            <div className={styles.vectorDiv} />
          </div>
          <div className={styles.orderDiv1}>
            <div className={styles.boxDiv} />
            <div className={styles.textDiv}>Ngày mua</div>
            <div className={styles.dayDiv}>14/11/2022</div>
            <div className={styles.textDiv1}>Trạng thái</div>
            <div className={styles.statusDiv}>Đã thanh toán</div>
            <div className={styles.textDiv2}>Mã đơn hàng</div>
            <div className={styles.orderIDDiv}>#12345678</div>
            <div className={styles.textDiv3}>Giá tiền</div>
            <div className={styles.numberDiv}>25.000 vnd</div>
            <div className={styles.vectorDiv} />
          </div>
          <div
            className={styles.orderHistoryButton}
            onClick={onOrderHistoryButtonClick}
          >
            <b className={styles.textB}>Đơn hàng đã hủy</b>
          </div>
          <div className={styles.orderCancelButton}>
            <b className={styles.textB}>Đơn hàng đã đặt</b>
          </div>
          <div className={styles.orderSectionContent}>
            <span className={styles.orderSectionContentTxt}>
              <span>{`Xin chào, `}</span>
              <b className={styles.trnThM}>Trần Thị Mỹ Quyên</b>
            </span>
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
          <div className={styles.headerProfileDropdown}>
            <img
              className={styles.dashiconsarrowLeft}
              alt=""
              src="../dashiconsarrowleft.svg"
              onClick={openLoginDropdownPopup}
            />
            <img className={styles.avatarIcon} alt="" src="../avatar.svg" />
          </div>
          <div className={styles.headerNavigationBar}>
            <div className={styles.textDiv8}>
              <b className={styles.textB2}>Liên hệ</b>
            </div>
            <div className={styles.textDiv9}>
              <b className={styles.textB3}>Đánh giá</b>
            </div>
            <div className={styles.textDiv10}>
              <b className={styles.textB4} onClick={onText12Click}>
                Trang chủ
              </b>
            </div>
            <div className={styles.textDiv11}>
              <b className={styles.textB5} onClick={onText13Click}>
                Thực đơn
              </b>
            </div>
            <div className={styles.textDiv12}>
              <b className={styles.textB6}>Lịch sử</b>
            </div>
          </div>
          <div className={styles.headerShoppingCartButton}>
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

export default UI07OrderHistory1;
