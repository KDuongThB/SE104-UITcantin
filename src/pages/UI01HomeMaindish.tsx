import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./UI01HomeMaindish.module.css";

const UI01HomeMaindish: FunctionComponent = () => {
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

  const onMenuSideDishTabClick = useCallback(() => {
    navigate("/ui01homesidedish");
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

  const onReccomendationSideDishTabClick = useCallback(() => {
    navigate("/ui01homesidedish");
  }, [navigate]);

  const onBannerOrderButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onTextLink2Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onTextLink3Click = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onHeaderShoppingCartButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  const onHeaderSignInButtonClick = useCallback(() => {
    navigate("/ui02log-in");
  }, [navigate]);

  return (
    <div className={styles.uI01HomeMaindishDiv}>
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
        src="../divide-section2.svg"
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
                src="../menu-dishimage-image@2x.png"
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
                  src="../vector2.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector4.svg"
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
                src="../menu-dishimage-image1@2x.png"
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
                  src="../vector2.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector4.svg"
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
                src="../menu-dishimage-image2@2x.png"
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
                  src="../vector2.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector13.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector4.svg"
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
                src="../menu-dishimage-image3@2x.png"
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
                  src="../vector17.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector18.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector19.svg"
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
                src="../menu-dishimage-image4@2x.png"
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
                  src="../vector17.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector18.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector19.svg"
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
                src="../menu-dishimage-image5@2x.png"
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
                  src="../vector17.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector28.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector19.svg"
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
                src="../menu-dishimage-image6@2x.png"
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
                  src="../vector32.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector34.svg"
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
                src="../menu-dishimage-image7@2x.png"
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
                  src="../vector32.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector34.svg"
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
                src="../menu-dishimage-image8@2x.png"
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
                  src="../vector32.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector13.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector34.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.menuTabsDiv}>
            <button
              className={styles.menuSideDishTab}
              onClick={onMenuSideDishTabClick}
            >
              <b className={styles.textB}>Món phụ</b>
            </button>
            <button className={styles.menuMainDishTab}>
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
        src="../divide-section1.svg"
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
                src="../recommendation-dishimage-image@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton9Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector46.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector47.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector48.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector49.svg"
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
                src="../recommendation-dishimage-image1@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton10Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector51.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector52.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector53.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector54.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard2}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector55.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image2@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton11Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector56.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector57.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector58.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector59.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard3}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector60.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image3@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton12Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector61.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector62.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector63.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector64.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard4}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector65.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image4@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton13Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector66.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector67.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector68.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector69.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard5}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector70.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image5@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton14Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector71.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector72.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector73.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector74.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard6}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector75.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image6@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton15Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector76.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector77.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector78.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../vector79.svg"
                />
              </button>
            </div>
            <div className={styles.reccomendationDishItemCard7}>
              <div className={styles.rateDiv}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector80.svg"
                />
                <div className={styles.starDiv} />
                <b className={styles.number}>5</b>
              </div>
              <b className={styles.menuDishNameText}>Name</b>
              <img
                className={styles.menuDishImageImage}
                alt=""
                src="../recommendation-dishimage-image7@2x.png"
              />
              <button
                className={styles.dishItemCartAddButton}
                onClick={onDishItemCartAddButton16Click}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector81.svg"
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
                  src="../vector84.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.recommendationTabsDiv}>
            <button className={styles.reccomendationMainDishTab}>
              <b className={styles.textB1}>Món chính</b>
            </button>
            <button
              className={styles.reccomendationSideDishTab}
              onClick={onReccomendationSideDishTabClick}
            >
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
          src="../landing-banner-image@2x.png"
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
            src="../footer-logo-image@2x.png"
          />
        </Link>
        <div className={styles.frameDiv}>
          <div className={styles.headerNavigationBar}>
            <Link className={styles.textA} to="/ui02log-in">
              <b className={styles.textB5}>Liên hệ</b>
            </Link>
            <Link className={styles.textA1} to="/ui02log-in">
              <b className={styles.textB6}>Đánh giá</b>
            </Link>
            <Link
              className={styles.textA2}
              to="/ui02log-in"
              onClick={onTextLink2Click}
            >
              <b className={styles.textB7}>Lịch sử</b>
            </Link>
            <Link
              className={styles.textA3}
              to="/ui02log-in"
              onClick={onTextLink3Click}
            >
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
            <img className={styles.vectorIcon85} alt="" />
            <div className={styles.shoppingDiv}>
              <img
                className={styles.vectorIcon86}
                alt=""
                src="../vector85.svg"
              />
              <img
                className={styles.vectorIcon87}
                alt=""
                src="../vector85.svg"
              />
              <img
                className={styles.vectorIcon88}
                alt=""
                src="../vector87.svg"
              />
              <img className={styles.ellipseIcon} alt="" src="../ellipse.svg" />
              <b className={styles.number17}>0</b>
            </div>
          </button>
          <button
            className={styles.headerSignInButton}
            onClick={onHeaderSignInButtonClick}
          >
            <button className={styles.button} />
            <b className={styles.textB10}>Đăng nhập</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UI01HomeMaindish;
