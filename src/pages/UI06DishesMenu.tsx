import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginDropdown from "../components/LoginDropdown";
import PortalPopup from "../components/PortalPopup";
import styles from "./UI06DishesMenu.module.css";

const UI06DishesMenu: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isLoginDropdownPopupOpen, setLoginDropdownPopupOpen] = useState(false);

  const onTrangChTextClick = useCallback(() => {
    navigate("/ui01home-user");
  }, [navigate]);

  const onLchSTextClick = useCallback(() => {
    navigate("/ui07orderhistory1");
  }, [navigate]);

  const openLoginDropdownPopup = useCallback(() => {
    setLoginDropdownPopupOpen(true);
  }, []);

  const closeLoginDropdownPopup = useCallback(() => {
    setLoginDropdownPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.uI06DishesMenuDiv}>
        <img className={styles.vectorIcon} alt="" src="../vector92.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector93.svg" />
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
        <div className={styles.menuSectionDiv}>
          <div className={styles.menuContainerDiv}>
            <div className={styles.menuTabsDiv}>
              <div className={styles.menuSideDishTab}>
                <b className={styles.textB}>Món phụ</b>
              </div>
              <div className={styles.menuMainDishTab}>
                <b className={styles.textB1}>Món chính</b>
              </div>
            </div>
            <div className={styles.menuDishItemDiv}>
              <div className={styles.backgroundMenuDiv} />
              <div className={styles.dishItemDiv}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button.svg"
                />
              </div>
              <div className={styles.dishItemDiv1}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image1@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button1.svg"
                />
              </div>
              <div className={styles.dishItemDiv2}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image2@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button2.svg"
                />
              </div>
              <div className={styles.dishItemDiv3}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image3@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button1.svg"
                />
              </div>
              <div className={styles.dishItemDiv4}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image4@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button1.svg"
                />
              </div>
              <div className={styles.dishItemDiv5}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image5@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button2.svg"
                />
              </div>
              <div className={styles.dishItemDiv6}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image6@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button1.svg"
                />
              </div>
              <div className={styles.dishItemDiv7}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image7@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button1.svg"
                />
              </div>
              <div className={styles.dishItemDiv8}>
                <div className={styles.backgroundDishItemDiv} />
                <div className={styles.rateDiv}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.starDiv} />
                  <b className={styles.number}>5</b>
                </div>
                <b className={styles.dishNameB}>Name</b>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../menu-dishimage-image8@2x.png"
                />
                <img
                  className={styles.dishItemCartAddButton}
                  alt=""
                  src="../dishitem-cartadd-button2.svg"
                />
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
        <div className={styles.headerSectionDiv}>
          <div className={styles.headerNavigationBar}>
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
          <div className={styles.hedaerShoppingCartButton}>
            <img
              className={styles.shoppingIcon}
              alt=""
              src="../shopping2.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-161.svg"
            />
            <b className={styles.b}>0</b>
          </div>
          <div className={styles.headerLogoContainer}>
            <div className={styles.canteenUITDiv}>Canteen UIT</div>
            <img
              className={styles.footerLogoImage}
              alt=""
              src="../footer-logo-image@2x.png"
            />
          </div>
          <div className={styles.headerAvatarDropdown}>
            <img
              className={styles.dashiconsarrowLeft}
              alt=""
              src="../dashiconsarrowleft.svg"
              onClick={openLoginDropdownPopup}
            />
            <img className={styles.avatarIcon} alt="" src="../avatar1.svg" />
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

export default UI06DishesMenu;
