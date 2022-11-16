import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginDropdown from "../components/LoginDropdown";
import PortalPopup from "../components/PortalPopup";
import styles from "./UI01HomeUserMaindish.module.css";

const UI01HomeUserMaindish: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isLoginDropdownPopupOpen, setLoginDropdownPopupOpen] = useState(false);
  const [isLoginDropdownPopup1Open, setLoginDropdownPopup1Open] =
    useState(false);

  const onMenuMainDishTabClick = useCallback(() => {
    navigate("/ui01home-usersidedish");
  }, [navigate]);

  const onRecommendationTabSideDishTaClick = useCallback(() => {
    navigate("/ui01home-usersidedish");
  }, [navigate]);

  const openLoginDropdownPopup = useCallback(() => {
    setLoginDropdownPopupOpen(true);
  }, []);

  const closeLoginDropdownPopup = useCallback(() => {
    setLoginDropdownPopupOpen(false);
  }, []);

  const openLoginDropdownPopup1 = useCallback(() => {
    setLoginDropdownPopup1Open(true);
  }, []);

  const closeLoginDropdownPopup1 = useCallback(() => {
    setLoginDropdownPopup1Open(false);
  }, []);

  const onText7Click = useCallback(() => {
    navigate("/ui07orderhistory1");
  }, [navigate]);

  const onText8Click = useCallback(() => {
    navigate("/ui06dishesmenu");
  }, [navigate]);

  return (
    <>
      <div className={styles.uI01HomeUserMaindishDiv}>
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
        <img className={styles.vectorIcon} alt="" src="../vector136.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector137.svg" />
        <div className={styles.menuSectionDiv}>
          <div className={styles.menuDishContainer}>
            <div className={styles.menuDishItem}>
              <div className={styles.backgroundMenuDiv} />
              <div className={styles.menuDishItemCard}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button25.svg"
                />
              </div>
              <div className={styles.menuDishItemCard1}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image1@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button25.svg"
                />
              </div>
              <div className={styles.menuDishItemCard2}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image2@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button25.svg"
                />
              </div>
              <div className={styles.menuDishItemCard3}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image3@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button28.svg"
                />
              </div>
              <div className={styles.menuDishItemCard4}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image4@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button28.svg"
                />
              </div>
              <div className={styles.menuDishItemCard5}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image5@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button28.svg"
                />
              </div>
              <div className={styles.menuDishItemCard6}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image6@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button31.svg"
                />
              </div>
              <div className={styles.menuDishItemCard7}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image7@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button31.svg"
                />
              </div>
              <div className={styles.menuDishItemCard8}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image8@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button31.svg"
                />
              </div>
            </div>
            <div className={styles.menuTabsDiv}>
              <button
                className={styles.menuMainDishTab}
                onClick={onMenuMainDishTabClick}
              >
                <b className={styles.textB}>Món phụ</b>
              </button>
              <div className={styles.menuMainDishTab1}>
                <b className={styles.textB1}>Món chính</b>
              </div>
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
        <div className={styles.reccomendationSectionDiv}>
          <div className={styles.recommendationMenuDiv}>
            <div className={styles.recommendationDishItemDiv}>
              <div className={styles.recommendationDishItemCard}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../recommendation-dishname-text1@2x.png"
                />
                <button className={styles.dishItemCartAddButton9}>
                  <img
                    className={styles.vectorIcon12}
                    alt=""
                    src="../vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon13}
                    alt=""
                    src="../vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon14}
                    alt=""
                    src="../vector124.svg"
                  />
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="../vector4.svg"
                  />
                </button>
              </div>
              <div className={styles.recommendationDishItemCard1}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../recommendation-dishimage-image15@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button25.svg"
                />
              </div>
              <div className={styles.recommendationDishItemCard2}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../recommendation-dishimage-image16@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button35.svg"
                />
              </div>
              <div className={styles.recommendationDishItemCard3}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../recommendation-dishimage-image17@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button35.svg"
                />
              </div>
              <div className={styles.recommendationDishItemCard4}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../recommendation-dishimage-image18@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button25.svg"
                />
              </div>
              <div className={styles.recommendationDishItemCard5}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../recommendation-dishimage-image19@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button25.svg"
                />
              </div>
              <div className={styles.recommendationDishItemCard6}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../recommendation-dishimage-image20@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button31.svg"
                />
              </div>
              <div className={styles.recommendationDishItemCard7}>
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.menuDishNameText}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../recommendation-dishimage-image21@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button31.svg"
                />
              </div>
            </div>
            <div className={styles.recommendationTabDiv}>
              <button className={styles.recommendationTabMainDishTa}>
                <b className={styles.textB2}>Món chính</b>
              </button>
              <button
                className={styles.recommendationTabSideDishTa}
                onClick={onRecommendationTabSideDishTaClick}
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
          <div className={styles.bannerDescriptionText}>
            <span className={styles.menuTitleTextTxt}>
              <p className={styles.triNghimTMnOnlineTi}>Text</p>
              <p className={styles.giiThiuDch}>
                (Giới thiệu dịch vụ và quy định giá)
              </p>
            </span>
          </div>
          <button className={styles.bannerOrderButton}>
            <button className={styles.button} />
            <b className={styles.textB4}>Đặt món ngay</b>
          </button>
          <div className={styles.bannerLandingImage} />
        </div>
        <div className={styles.headerSectionDiv}>
          <div className={styles.headerDiv}>
            <div
              className={styles.headerProfileDropdown}
              onClick={openLoginDropdownPopup1}
            >
              <img
                className={styles.dashiconsarrowLeft}
                alt=""
                src="../dashiconsarrowleft.svg"
                onClick={openLoginDropdownPopup}
              />
              <img className={styles.avatarIcon} alt="" src="../avatar4.svg" />
            </div>
            <button className={styles.headerShoppingCartButton}>
              <img className={styles.vectorIcon23} alt="" />
              <div className={styles.shoppingDiv}>
                <img
                  className={styles.vectorIcon24}
                  alt=""
                  src="../vector107.svg"
                />
                <img
                  className={styles.vectorIcon25}
                  alt=""
                  src="../vector107.svg"
                />
                <img
                  className={styles.vectorIcon26}
                  alt=""
                  src="../vector109.svg"
                />
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse1.svg"
                />
                <b className={styles.number17}>0</b>
              </div>
            </button>
            <Link className={styles.headerLogoContainer} to="/">
              <div className={styles.canteenUITDiv}>Canteen UIT</div>
              <img
                className={styles.footerLogoImage}
                alt=""
                src="../footer-logo-image@2x.png"
              />
            </Link>
            <div className={styles.headerNavigationBar}>
              <div className={styles.textDiv}>
                <b className={styles.textB5}>Liên hệ</b>
              </div>
              <div className={styles.textDiv1}>
                <b className={styles.textB6}>Đánh giá</b>
              </div>
              <a className={styles.textA}>
                <b className={styles.textB7} onClick={onText7Click}>
                  Lịch sử
                </b>
              </a>
              <Link className={styles.textA1} to="/ui06dishesmenu">
                <b className={styles.textB8} onClick={onText8Click}>
                  Thực đơn
                </b>
              </Link>
              <a className={styles.textA2}>
                <b className={styles.textB9}>Trang chủ</b>
              </a>
            </div>
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
      {isLoginDropdownPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginDropdownPopup1}
        >
          <LoginDropdown onClose={closeLoginDropdownPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default UI01HomeUserMaindish;
