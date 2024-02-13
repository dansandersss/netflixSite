import React from "react";
import styles from "./MyList.module.scss";
import Title from "react-vanilla-tilt";

const MyList = ({ myList }) => {
  return (
    <>
      <div className={styles.mylistContainer}>
        <div className={styles.listNav}>
          <h1>My list</h1>
          <a href="/" className={styles.listLink}>
            <h3>See all</h3>
            <i className="bx bx-chevron-right"></i>
          </a>
        </div>
        <div className={styles.listItems}>
          {myList.map((item) => (
            <Title
              key={item.id}
              className={styles.listItem}
              data-tilt-max="50"
              data-tilt-speed="400"
              data-tilt-perspective="500"
            >
              <div
                className={styles.backgroundImage}
                style={{ backgroundImage: `url(${item.photos[0]})` }}
              ></div>
              <div className={styles.overlay}>
                <img src={item.logo} alt={item.name} width="50" />
              </div>
            </Title>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyList;
