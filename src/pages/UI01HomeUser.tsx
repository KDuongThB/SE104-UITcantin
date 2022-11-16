import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UI01HomeUser.module.css";

const UI01HomeUser: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLchSTextClick = useCallback(() => {
    navigate("/ui07orderhistory");
  }, [navigate]);

  const onThcNTextClick = useCallback(() => {
    navigate("/ui06dishesmenu");
  }, [navigate]);

  return (
    <div className={styles.uI01HomeUserDiv}>
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
      <img
        className={styles.foodDeliveryIcon}
        alt=""
        src="../food-delivery.svg"
      />
      <div className={styles.popularCategoriesDiv}>
        <div className={styles.xutDiv}>
          <b className={styles.xutChoBn}>
            <span>{`Đề xuất `}</span>
            <span className={styles.choBnSpan}>cho bạn</span>
          </b>
          <img className={styles.lineIcon} alt="" src="../line-1.svg" />
        </div>
        <button className={styles.mainDishButton}>
          <button className={styles.button} />
          <b className={styles.textB}>Món chính</b>
        </button>
        <button className={styles.sideDishButton}>
          <input className={styles.buttonInput} type="text" />
          <b className={styles.textB1}>Món phụ</b>
        </button>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd17.svg" />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd18.svg" />
          </div>
          <div className={styles.groupDiv7}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd19.svg" />
          </div>
          <div className={styles.groupDiv10}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd17.svg" />
          </div>
          <div className={styles.groupDiv13}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd18.svg" />
          </div>
          <div className={styles.groupDiv16}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd19.svg" />
          </div>
        </div>
      </div>
      <img className={styles.ellipseIcon} alt="" src="../ellipse-162.svg" />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-1399.svg"
      />
      <div className={styles.triNghimTMnOnlineTi}>
        <span className={styles.triNghimTContainer}>
          <p className={styles.textP}>
            <b>{`Trải nghiệm đặt món online tại `}</b>
          </p>
          <p className={styles.canteenUITP}>
            <span>Canteen UIT</span>
          </p>
        </span>
      </div>
      <div className={styles.introduceDiv}>
        <span className={styles.triNghimTContainer}>
          <p className={styles.textP}>Text</p>
          <p className={styles.giiThiuDch}>
            (Giới thiệu dịch vụ và quy định giá)
          </p>
        </span>
      </div>
      <button className={styles.addToCart}>
        <button className={styles.rectangleButton} />
        <b className={styles.tMnNgay}>Đặt món ngay</b>
      </button>
      <textarea className={styles.rectangleTextarea} />
      <div className={styles.headerDiv}>
        <div className={styles.navigationDiv}>
          <b className={styles.trangChB}>Trang chủ</b>
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
          <img className={styles.shoppingIcon} alt="" src="../shopping2.svg" />
          <img
            className={styles.ellipseIcon1}
            alt=""
            src="../ellipse-161.svg"
          />
          <b className={styles.b6}>0</b>
        </div>
        <img className={styles.groupIcon} alt="" src="../group-32222.svg" />
        <div className={styles.logoDiv1}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.menuDiv}>
        <b className={styles.thcNHmNay}>
          <span className={styles.triNghimTContainer}>
            <span>{`Thực đơn `}</span>
            <span className={styles.choBnSpan}>hôm nay</span>
          </span>
        </b>
        <div className={styles.groupDiv19}>
          <div className={styles.sideDishDiv}>
            <div className={styles.buttonDiv} />
            <b className={styles.textB2}>Món phụ</b>
          </div>
          <div className={styles.mainDishDiv}>
            <div className={styles.buttonDiv1} />
            <b className={styles.textB3}>Món chính</b>
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.groupDiv20}>
          <div className={styles.rectangleDiv14} />
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd17.svg" />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd18.svg" />
          </div>
          <div className={styles.groupDiv7}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd19.svg" />
          </div>
          <div className={styles.groupDiv10}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd17.svg" />
          </div>
          <div className={styles.groupDiv13}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd18.svg" />
          </div>
          <div className={styles.groupDiv16}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd19.svg" />
          </div>
          <div className={styles.groupDiv39}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd19.svg" />
          </div>
          <div className={styles.groupDiv42}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv2}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <b className={styles.b}>5</b>
            </div>
            <div className={styles.groupDiv3}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd30.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI01HomeUser;
