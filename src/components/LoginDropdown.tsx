import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginDropdown.module.css";

type LoginDropdownType = {
  onClose?: () => void;
};

const LoginDropdown: FunctionComponent<LoginDropdownType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onProfileContainerClick = useCallback(() => {
    navigate("/ui05profile");
  }, [navigate]);

  const onLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.loginDropdownDiv}>
      <b className={styles.userNameB}>Trần Thị Mỹ Quyên</b>
      <div className={styles.profileDiv} onClick={onProfileContainerClick}>
        <img
          className={styles.fluenteditSettings24RegulaIcon}
          alt=""
          src="../fluenteditsettings24regular.svg"
        />
        <b className={styles.textB}>{`Hồ sơ `}</b>
      </div>
      <div className={styles.logoutDiv} onClick={onLogoutContainerClick}>
        <img
          className={styles.lucidelogOutIcon}
          alt=""
          src="../lucidelogout.svg"
        />
        <b className={styles.textB1}>{`Đăng xuất `}</b>
      </div>
      <div className={styles.vectorDiv} />
    </div>
  );
};

export default LoginDropdown;
