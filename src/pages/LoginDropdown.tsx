import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginDropdown.module.css";

const LoginDropdown: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/ui05profile");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.loginDropdownDiv}>
      <b className={styles.trnThMQuyn}>Trần Thị Mỹ Quyên</b>
      <div className={styles.groupDiv} onClick={onGroupContainer1Click}>
        <div className={styles.groupDiv1}>
          <img
            className={styles.fluenteditSettings24RegulaIcon}
            alt=""
            src="../fluenteditsettings24regular.svg"
          />
          <b className={styles.hSB}>{`Hồ sơ `}</b>
        </div>
      </div>
      <div className={styles.groupDiv2} onClick={onGroupContainer2Click}>
        <img
          className={styles.lucidelogOutIcon}
          alt=""
          src="../lucidelogout.svg"
        />
        <b className={styles.ngXutB}>{`Đăng xuất `}</b>
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default LoginDropdown;
