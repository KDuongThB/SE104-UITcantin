import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UI01Home.module.css";

const UI01Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeaderShoppingCartButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onHeaderSignInButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onOrderButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  return (
    <div className={styles.uI01HomeDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.backgroundDiv} />
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
        className={styles.divideSection2Icon}
        alt=""
        src="../divide-section2.svg"
      />
      <div className={styles.menuSectionDiv}>
        <div className={styles.menuCardSection}>
          <div className={styles.menuDishItemCard}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd.svg" />
          </div>
          <div className={styles.menuDishItemCard1}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd.svg" />
          </div>
          <div className={styles.menuDishItemCard2}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd2.svg" />
          </div>
          <div className={styles.menuDishItemCard3}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd3.svg" />
          </div>
          <div className={styles.menuDishItemCard4}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd3.svg" />
          </div>
          <div className={styles.menuDishItemCard5}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd5.svg" />
          </div>
          <div className={styles.menuDishItemCard6}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd6.svg" />
          </div>
          <div className={styles.menuDishItemCard7}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd6.svg" />
          </div>
          <div className={styles.menuDishItemCard8}>
            <div className={styles.backgroundDishItemDiv} />
            <div className={styles.rateDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.starDiv} />
              <b className={styles.number}>5</b>
            </div>
            <b className={styles.dishNameB}>Name</b>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.cartAddIcon} alt="" src="../cartadd8.svg" />
          </div>
        </div>
        <div className={styles.menuSideDishTab}>
          <input className={styles.buttonInput} type="text" />
          <b className={styles.textB}>Món phụ</b>
        </div>
        <button className={styles.menuMainDishTab}>
          <button className={styles.button} />
          <b className={styles.textB1}>Món chính</b>
        </button>
        <img className={styles.vectorIcon9} alt="" src="../vector9.svg" />
        <b className={styles.mennTitleText}>
          <span className={styles.mennTitleTextTxt}>
            <span>{`Thực đơn `}</span>
            <span className={styles.hmNaySpan}>hôm nay</span>
          </span>
        </b>
      </div>
      <img
        className={styles.divideSection1}
        alt=""
        src="../divide-section1.svg"
      />
      <div className={styles.recommendationSectionDiv}>
        <div className={styles.frameDiv}>
          <button className={styles.reccomendationMainDishTab}>
            <button className={styles.button} />
            <b className={styles.textB1}>Món chính</b>
          </button>
          <button className={styles.reccomendationMainDishTab}>
            <input className={styles.buttonInput} type="text" />
            <b className={styles.textB3}>Món phụ</b>
          </button>
        </div>
        <div className={styles.reccomendationTitleDiv}>
          <b className={styles.textB4}>
            <span className={styles.mennTitleTextTxt}>
              <span>{`Đề xuất `}</span>
              <span className={styles.hmNaySpan}>cho bạn</span>
            </span>
          </b>
          <img className={styles.vectorIcon10} alt="" src="../vector9.svg" />
        </div>
        <div className={styles.frameDiv1}>
          <div className={styles.frameDiv2}>
            <div className={styles.reccomendationDishItemCard}>
              <div className={styles.backgroundDishItemDiv} />
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector11.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.dishNameB}>Name</b>
              <img className={styles.imageIcon} alt="" src="../image9@2x.png" />
              <img
                className={styles.cartAddIcon}
                alt=""
                src="../cartadd9.svg"
              />
            </div>
            <div className={styles.reccomendationDishItemCard1}>
              <div className={styles.backgroundDishItemDiv} />
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector12.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.dishNameB}>Name</b>
              <img
                className={styles.imageIcon}
                alt=""
                src="../image10@2x.png"
              />
              <img
                className={styles.cartAddIcon}
                alt=""
                src="../cartadd10.svg"
              />
            </div>
            <div className={styles.reccomendationDishItemCard2}>
              <div className={styles.backgroundDishItemDiv} />
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector13.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.dishNameB}>Name</b>
              <img
                className={styles.imageIcon}
                alt=""
                src="../image11@2x.png"
              />
              <img
                className={styles.cartAddIcon}
                alt=""
                src="../cartadd11.svg"
              />
            </div>
            <div className={styles.reccomendationDishItemCard3}>
              <div className={styles.backgroundDishItemDiv} />
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector14.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.dishNameB}>Name</b>
              <img
                className={styles.imageIcon}
                alt=""
                src="../image12@2x.png"
              />
              <img
                className={styles.cartAddIcon}
                alt=""
                src="../cartadd12.svg"
              />
            </div>
            <div className={styles.reccomendationDishItemCard4}>
              <div className={styles.backgroundDishItemDiv} />
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector15.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.dishNameB}>Name</b>
              <img
                className={styles.imageIcon}
                alt=""
                src="../image13@2x.png"
              />
              <img
                className={styles.cartAddIcon}
                alt=""
                src="../cartadd13.svg"
              />
            </div>
            <div className={styles.reccomendationDishItemCard5}>
              <div className={styles.backgroundDishItemDiv} />
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector16.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.dishNameB}>Name</b>
              <img
                className={styles.imageIcon}
                alt=""
                src="../image14@2x.png"
              />
              <img
                className={styles.cartAddIcon}
                alt=""
                src="../cartadd14.svg"
              />
            </div>
            <div className={styles.reccomendationDishItemCard6}>
              <div className={styles.backgroundDishItemDiv} />
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector17.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.dishNameB}>Name</b>
              <img
                className={styles.imageIcon}
                alt=""
                src="../image15@2x.png"
              />
              <img
                className={styles.cartAddIcon}
                alt=""
                src="../cartadd15.svg"
              />
            </div>
            <div className={styles.reccomendationDishItemCard7}>
              <div className={styles.backgroundDishItemDiv} />
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector18.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.dishNameB}>Name</b>
              <img
                className={styles.imageIcon}
                alt=""
                src="../image16@2x.png"
              />
              <img
                className={styles.cartAddIcon}
                alt=""
                src="../cartadd16.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topSectionDiv}>
        <div className={styles.headerSectionDiv}>
          <Link className={styles.headerLogo} to="/ui01home-user">
            <div className={styles.canteenUITDiv}>Canteen UIT</div>
            <img
              className={styles.logoUit1Icon}
              alt=""
              src="../logouit-1@2x.png"
            />
          </Link>
          <div className={styles.frameDiv3}>
            <div className={styles.headerNavigationBarDiv}>
              <Link className={styles.textA} to="/ui02log-in">
                <b className={styles.textB5}>Liên hệ</b>
              </Link>
              <Link className={styles.textA1} to="/ui02log-in">
                <b className={styles.textB6}>Đánh giá</b>
              </Link>
              <Link className={styles.textA2} to="/ui02log-in">
                <b className={styles.textB7}>Lịch sử</b>
              </Link>
              <Link className={styles.textA3} to="/ui02log-in">
                <b className={styles.textB8}>Thực đơn</b>
              </Link>
              <a className={styles.textA4}>
                <b className={styles.textB9}>Trang chủ</b>
              </a>
            </div>
            <button
              className={styles.headerShoppingCartButton}
              onClick={onHeaderShoppingCartButtonClick}
            >
              <img className={styles.vectorIcon19} alt="" />
              <div className={styles.shoppingDiv}>
                <img
                  className={styles.vectorIcon20}
                  alt=""
                  src="../vector19.svg"
                />
                <img
                  className={styles.vectorIcon21}
                  alt=""
                  src="../vector19.svg"
                />
                <img
                  className={styles.vectorIcon22}
                  alt=""
                  src="../vector21.svg"
                />
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse.svg"
                />
                <b className={styles.number17}>0</b>
              </div>
            </button>
            <button
              className={styles.headerSignInButton}
              onClick={onHeaderSignInButtonClick}
            >
              <button className={styles.button2} />
              <b className={styles.textB10}>Đăng nhập</b>
            </button>
          </div>
        </div>
        <div className={styles.bannerDiv}>
          <img className={styles.vectorIcon23} alt="" src="../vector22.svg" />
          <div className={styles.frameDiv4}>
            <div className={styles.bannerTitleText}>
              <span className={styles.mennTitleTextTxt}>
                <p className={styles.triNghimTMnOnlineTi}>
                  <b>{`Trải nghiệm đặt món online tại `}</b>
                </p>
                <p className={styles.canteenUITP}>
                  <span>Canteen UIT</span>
                </p>
              </span>
            </div>
            <div className={styles.bannerContentText}>
              <span className={styles.mennTitleTextTxt}>
                <p className={styles.triNghimTMnOnlineTi}>Text</p>
                <p className={styles.giiThiuDch}>
                  (Giới thiệu dịch vụ và quy định giá)
                </p>
              </span>
            </div>
          </div>
          <div className={styles.landingBannerImage} />
          <button className={styles.orderButton} onClick={onOrderButtonClick}>
            <button className={styles.button2} />
            <b className={styles.textB11}>Đặt món ngay</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UI01Home;
