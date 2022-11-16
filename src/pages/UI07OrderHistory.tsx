import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UI07OrderHistory.module.css";

const UI07OrderHistory: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTrangChTextClick = useCallback(() => {
    navigate("/ui01home-user");
  }, [navigate]);

  const onThcNTextClick = useCallback(() => {
    navigate("/ui06dishesmenu");
  }, [navigate]);

  return (
    <div className={styles.uI07OrderHistoryDiv}>
      <img className={styles.vectorIcon} alt="" src="../vector37.svg" />
      <div className={styles.headerDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.navigationDiv}>
          <b className={styles.trangChB} onClick={onTrangChTextClick}>
            Trang chủ
          </b>
          <b className={styles.lchSB}>Lịch sử</b>
          <b className={styles.nhGiB}>Đánh giá</b>
          <b className={styles.linHB}>Liên hệ</b>
          <b className={styles.thcNB} onClick={onThcNTextClick}>
            Thực đơn
          </b>
        </div>
        <div className={styles.shoppingCartDiv}>
          <img className={styles.shoppingIcon} alt="" src="../shopping.svg" />
          <img className={styles.ellipseIcon} alt="" src="../ellipse-161.svg" />
          <b className={styles.b}>0</b>
        </div>
        <img className={styles.groupIcon} alt="" src="../group-3222.svg" />
        <div className={styles.logoDiv}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.logoDiv1}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.xinChoTrnThMQuyn}>
        <span className={styles.xinChoTrnContainer}>
          <span>{`Xin chào, `}</span>
          <b className={styles.trnThM}>Trần Thị Mỹ Quyên</b>
        </span>
      </div>
      <b className={styles.lchSTHng}>Lịch sử đặt hàng</b>
      <div className={styles.groupDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-1415.svg"
        />
        <b className={styles.nHngT}>Đơn hàng đã đặt</b>
      </div>
      <div className={styles.groupDiv1}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-14151.svg"
        />
        <b className={styles.nHngT}>Đơn hàng đã hủy</b>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.ngyMuaDiv}>Ngày mua</div>
        <div className={styles.div}>14/11/2022</div>
        <div className={styles.trngThiDiv}>Trạng thái</div>
        <div className={styles.thanhTonDiv}>Đã thanh toán</div>
        <div className={styles.mNHng}>Mã đơn hàng</div>
        <div className={styles.div1}>#12345678</div>
        <div className={styles.giTinDiv}>Giá tiền</div>
        <div className={styles.vndDiv}>25.000 vnd</div>
      </div>
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.ngyMuaDiv}>Ngày mua</div>
        <div className={styles.div}>12/11/2022</div>
        <div className={styles.trngThiDiv}>Trạng thái</div>
        <div className={styles.thanhTonDiv}>Đã nhận món</div>
        <div className={styles.mNHng}>Mã đơn hàng</div>
        <div className={styles.div1}>#54678924</div>
        <div className={styles.giTinDiv}>Giá tiền</div>
        <div className={styles.vndDiv}>30.000 vnd</div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.lineDiv1} />
    </div>
  );
};

export default UI07OrderHistory;
