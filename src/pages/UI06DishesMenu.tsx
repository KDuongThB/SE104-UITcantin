import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UI06DishesMenu.module.css";

const UI06DishesMenu: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTrangChTextClick = useCallback(() => {
    navigate("/ui01home-user");
  }, [navigate]);

  const onLchSTextClick = useCallback(() => {
    navigate("/ui07orderhistory");
  }, [navigate]);

  return (
    <div className={styles.uI06DishesMenuDiv}>
      <div className={styles.headerDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.navigationDiv}>
          <b className={styles.trangChB} onClick={onTrangChTextClick}>
            Trang chủ
          </b>
          <b className={styles.lchSB} onClick={onLchSTextClick}>
            Lịch sử
          </b>
          <b className={styles.nhGiB}>Đánh giá</b>
          <b className={styles.linHB}>Liên hệ</b>
          <b className={styles.thcNB}>Thực đơn</b>
        </div>
        <div className={styles.shoppingCartDiv}>
          <img className={styles.shoppingIcon} alt="" src="../shopping3.svg" />
          <img className={styles.ellipseIcon} alt="" src="../ellipse-161.svg" />
          <b className={styles.b}>0</b>
        </div>
        <img className={styles.groupIcon} alt="" src="../group-32223.svg" />
        <div className={styles.logoDiv}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="../vector40.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector41.svg" />
      <div className={styles.menuDiv}>
        <b className={styles.thcNHmNay}>
          <span className={styles.thcNHmContainer}>
            <span>{`Thực đơn `}</span>
            <span className={styles.hmNaySpan}>hôm nay</span>
          </span>
        </b>
        <div className={styles.groupDiv}>
          <div className={styles.sideDishDiv}>
            <div className={styles.buttonDiv} />
            <b className={styles.textB}>Món phụ</b>
          </div>
          <div className={styles.mainDishDiv}>
            <div className={styles.buttonDiv1} />
            <b className={styles.textB1}>Món chính</b>
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv3}>
              <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
              <b className={styles.b1}>5</b>
            </div>
            <div className={styles.groupDiv4}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd31.svg" />
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv3}>
              <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
              <b className={styles.b1}>5</b>
            </div>
            <div className={styles.groupDiv4}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd31.svg" />
          </div>
          <div className={styles.groupDiv8}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv3}>
              <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
              <b className={styles.b1}>5</b>
            </div>
            <div className={styles.groupDiv4}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd31.svg" />
          </div>
          <div className={styles.groupDiv11}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv3}>
              <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
              <b className={styles.b1}>5</b>
            </div>
            <div className={styles.groupDiv4}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd31.svg" />
          </div>
          <div className={styles.groupDiv14}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv3}>
              <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
              <b className={styles.b1}>5</b>
            </div>
            <div className={styles.groupDiv4}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd31.svg" />
          </div>
          <div className={styles.groupDiv17}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv3}>
              <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
              <b className={styles.b1}>5</b>
            </div>
            <div className={styles.groupDiv4}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd31.svg" />
          </div>
          <div className={styles.groupDiv20}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv3}>
              <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
              <b className={styles.b1}>5</b>
            </div>
            <div className={styles.groupDiv4}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd37.svg" />
          </div>
          <div className={styles.groupDiv23}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv3}>
              <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
              <b className={styles.b1}>5</b>
            </div>
            <div className={styles.groupDiv4}>
              <b className={styles.nameB}>Name</b>
            </div>
            <div className={styles.starDiv} />
            <div className={styles.rectangleDiv3} />
            <img className={styles.cartAddIcon} alt="" src="../cartadd37.svg" />
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv18} />
        <div className={styles.logoDiv1}>
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.logoUit1Icon}
            alt=""
            src="../logouit-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default UI06DishesMenu;
