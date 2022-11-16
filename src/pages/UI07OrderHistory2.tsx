import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UI07OrderHistory2.module.css";

const UI07OrderHistory2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onText8Click = useCallback(() => {
    navigate("/ui01home-user");
  }, [navigate]);

  const onText9Click = useCallback(() => {
    navigate("/ui06dishesmenu");
  }, [navigate]);

  return (
    <div className={styles.uI07OrderHistory2Div}>
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
      <div className={styles.frameDiv}>
        <div className={styles.orderDiv}>
          <div className={styles.boxDiv} />
          <div className={styles.textDiv}>Ngày mua</div>
          <div className={styles.dayDiv}>30/09/2022</div>
          <div className={styles.textDiv1}>Trạng thái</div>
          <div className={styles.statusDiv}>Đã hủy đơn</div>
          <div className={styles.textDiv2}>Mã đơn hàng</div>
          <div className={styles.orderIDDiv}>#64824485</div>
          <div className={styles.textDiv3}>Giá tiền</div>
          <div className={styles.numberDiv}>30.000 vnd</div>
          <div className={styles.vectorDiv} />
        </div>
        <div className={styles.orderTitleDiv}>
          <b className={styles.titleB}>Lịch sử đặt hàng</b>
        </div>
        <div className={styles.orderCancelButton}>
          <img className={styles.buttonIcon} alt="" src="../button.svg" />
          <b className={styles.textB}>Đơn hàng đã hủy</b>
        </div>
        <div className={styles.orderHistoryButton}>
          <img className={styles.buttonIcon} alt="" src="../button1.svg" />
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
        <div className={styles.headerDiv}>
          <div className={styles.headerLogo}>
            <div className={styles.canteenUITDiv}>Canteen UIT</div>
            <img
              className={styles.footerLogoImage}
              alt=""
              src="../footer-logo-image@2x.png"
            />
          </div>
          <img
            className={styles.headerAvatarIcon}
            alt=""
            src="../header-avatar.svg"
          />
          <div className={styles.headerNavigationBar}>
            <div className={styles.textDiv4}>
              <b className={styles.textB2}>Liên hệ</b>
            </div>
            <div className={styles.textDiv5}>
              <b className={styles.textB3}>Đánh giá</b>
            </div>
            <div className={styles.textDiv6}>
              <b className={styles.textB4} onClick={onText8Click}>
                Trang chủ
              </b>
            </div>
            <div className={styles.textDiv7}>
              <b className={styles.textB5} onClick={onText9Click}>
                Thực đơn
              </b>
            </div>
            <div className={styles.textDiv8}>
              <b className={styles.textB6}>Lịch sử</b>
            </div>
          </div>
          <div className={styles.headerShoppingCartButton}>
            <img className={styles.shoppingIcon} alt="" src="../shopping.svg" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-161.svg"
            />
            <b className={styles.b}>0</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI07OrderHistory2;
