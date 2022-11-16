import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./UI01HomeSidedish.module.css";

const UI01HomeSidedish: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDishItemCartAddButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton1Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton2Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton3Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton4Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton5Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton6Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton7Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton8Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onMenuMainDishTabClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDishItemCartAddButton9Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton10Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton11Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton12Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton13Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton14Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton15Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onDishItemCartAddButton16Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onReccomendationMainDishTabClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBannerOrderButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onTextLink1Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onTextLink2Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onHeaderShoppingCartButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onHeaderSignInButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  return (
    <div className={styles.uI01HomeSidedishDiv}>
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
      <img
        className={styles.divideSection2Icon}
        alt=""
        src="../divide-section21.svg"
      />
      <div className={styles.menuSectionDiv}>
        <div className={styles.menuContainerDiv}>
          <div className={styles.menuCardSection}>
            <div className={styles.menuDishItemCard}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButtonClick}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector90.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector92.svg"
                />
              </button>
            </div>
            <div className={styles.menuDishItemCard1}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton1Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector90.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector92.svg"
                />
              </button>
            </div>
            <div className={styles.menuDishItemCard2}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton2Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector90.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector13.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector92.svg"
                />
              </button>
            </div>
            <div className={styles.menuDishItemCard3}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton3Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector105.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector107.svg"
                />
              </button>
            </div>
            <div className={styles.menuDishItemCard4}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton4Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector105.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector107.svg"
                />
              </button>
            </div>
            <div className={styles.menuDishItemCard5}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton5Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector105.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector13.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector107.svg"
                />
              </button>
            </div>
            <div className={styles.menuDishItemCard6}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton6Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector105.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector107.svg"
                />
              </button>
            </div>
            <div className={styles.menuDishItemCard7}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton7Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector105.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector107.svg"
                />
              </button>
            </div>
            <div className={styles.menuDishItemCard8}>
              <div className={styles.rateDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../menu-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton8Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector105.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector13.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector107.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.menuTabsDiv}>
            <button className={styles.menuSideDishTab}>
              <b className={styles.textB}>Món phụ</b>
            </button>
            <button
              className={styles.menuMainDishTab}
              onClick={onMenuMainDishTabClick}
            >
              <b className={styles.textB1}>Món chính</b>
            </button>
          </div>
        </div>
        <div className={styles.menuTitleDiv}>
          <b className={styles.menuTitleText}>
            <span className={styles.menuTitleTextTxt}>
              <span>{`Thực đơn `}</span>
              <span className={styles.hmNaySpan}>hôm nay</span>
            </span>
          </b>
        </div>
      </div>
      <img
        className={styles.divideSection1}
        alt=""
        src="../divide-section11.svg"
      />
      <div className={styles.recommendationSectionDiv}>
        <div className={styles.recommendationContainerDiv}>
          <div className={styles.recommendationCardSection}>
            <div className={styles.reccomendationDishItemCard}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector45.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image8@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton9Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector134.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector135.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector136.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector137.svg"
                />
              </button>
            </div>
            <img
              className={styles.download1Custom1}
              alt=""
              src="../download-1-custom-1@2x.png"
            />
            <div className={styles.reccomendationDishItemCard1}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector50.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image9@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton10Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector139.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector140.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector141.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector142.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard2}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector143.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image10@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton11Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector144.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector145.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector146.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector147.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard3}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector148.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image11@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton12Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector149.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector150.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector151.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector152.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard4}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector153.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image12@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton13Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector154.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector155.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector156.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector157.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard5}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector158.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image13@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton14Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector159.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector160.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector161.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector162.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard6}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector163.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image14@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton15Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector164.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector77.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector166.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector167.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard7}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector168.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image15@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton16Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector169.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector82.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector83.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector172.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.recommendationTabsDiv}>
            <button
              className={styles.reccomendationMainDishTab}
              onClick={onReccomendationMainDishTabClick}
            >
              <b className={styles.textB1}>Món chính</b>
            </button>
            <button className={styles.reccomendationSideDishTab}>
              <b className={styles.textB}>Món phụ</b>
            </button>
          </div>
        </div>
        <div className={styles.recommendationTitleDiv}>
          <b className={styles.recommendationTitleText}>
            <span className={styles.menuTitleTextTxt}>
              <span>{`Đề xuất `}</span>
              <span className={styles.hmNaySpan}>cho bạn</span>
            </span>
          </b>
        </div>
      </div>
      <div className={styles.bannerSectionDiv}>
        <div className={styles.bannerTitleText}>
          <span className={styles.menuTitleTextTxt}>
            <p className={styles.triNghimTMnOnlineTi}>
              <b>{`Trải nghiệm đặt món online tại `}</b>
            </p>
            <p className={styles.canteenUITP}>
              <span>Canteen UIT</span>
            </p>
          </span>
        </div>
        <div className={styles.bannerContentText}>
          <span className={styles.menuTitleTextTxt}>
            <p className={styles.triNghimTMnOnlineTi}>Text</p>
            <p className={styles.giiThiuDch}>
              (Giới thiệu dịch vụ và quy định giá)
            </p>
          </span>
        </div>
        <img
          className={styles.landingBannerImage}
          alt=""
          src="../landing-banner-image1@2x.png"
        />
        <button
          className={styles.bannerOrderButton}
          onClick={onBannerOrderButtonClick}
        >
          <b className={styles.textB4}>Đặt món ngay</b>
        </button>
      </div>
      <div className={styles.headerSectionDiv}>
        <Link className={styles.headerLogoContainer} to="/ui01home-user">
          <div className={styles.canteenUITDiv}>Canteen UIT</div>
          <img
            className={styles.footerLogoImage}
            alt=""
            src="../header-logo-image@2x.png"
          />
        </Link>
        <div className={styles.frameDiv}>
          <div className={styles.headerNavigationBar}>
            <b className={styles.textB5}>Liên hệ</b>
            <a className={styles.textA}>Đánh giá</a>
            <a className={styles.textA1} onClick={onTextLink1Click}>
              Lịch sử
            </a>
            <Link
              className={styles.textA2}
              to="/ui02log-in"
              onClick={onTextLink2Click}
            >
              Thực đơn
            </Link>
            <b className={styles.textB6}>Trang chủ</b>
          </div>
          <button
            className={styles.headerShoppingCartButton}
            onClick={onHeaderShoppingCartButtonClick}
          >
            <img className={styles.vectorIcon85} alt="" />
            <div className={styles.shoppingDiv}>
              <img
                className={styles.vectorIcon86}
                alt=""
                src="../vector173.svg"
              />
              <img
                className={styles.vectorIcon87}
                alt=""
                src="../vector173.svg"
              />
              <img
                className={styles.vectorIcon88}
                alt=""
                src="../vector175.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse1.svg"
              />
              <b className={styles.number17}>0</b>
            </div>
          </button>
          <button
            className={styles.headerSignInButton}
            onClick={onHeaderSignInButtonClick}
          >
            <button className={styles.button} />
            <b className={styles.textB7}>Đăng nhập</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UI01HomeSidedish;
