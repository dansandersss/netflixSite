import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";

const Profile = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [shakeAnimation, setShakeAnimation] = useState(false);
  const notificationsRef = useRef(null);

  const handleNotificationsClick = () => {
    setShowNotifications((prevShowNotifications) => !prevShowNotifications);
    setShakeAnimation(true);
    setTimeout(() => setShakeAnimation(false), 500);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const handleClickOutside = (event) => {
    if (
      notificationsRef.current &&
      !notificationsRef.current.contains(event.target)
    ) {
      handleCloseNotifications();
    }
  };

  useEffect(() => {
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <div className={styles["profile-wrapper"]}>
      <div
        className={`${styles.notification} ${
          shakeAnimation ? styles.shake : ""
        }`}
        onClick={handleNotificationsClick}
      >
        <i className="bx bxs-bell"></i>
        <span></span>
      </div>

      {showNotifications && (
        <div className={styles.notificationsWindow} ref={notificationsRef}>
          <div className={styles.notificationItem}>
            <h3>Notification 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <button
            className={styles.closeButton}
            onClick={handleCloseNotifications}
          >
            Close
          </button>
        </div>
      )}

      <div className={styles.profile}>
        <div>
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50"
            alt=""
          />
        </div>
        <i className="bx bx-caret-down"></i>
      </div>
    </div>
  );
};

export default Profile;
