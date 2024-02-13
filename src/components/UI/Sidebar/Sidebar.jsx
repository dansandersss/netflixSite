import styles from "./Sidebar.module.scss";

const menu = ["Popular", "TV Shows", "Films", "My list"];

const Sidebar = ({ isSidebarShow, setIsSidebarShow }) => {
  return (
    <div
      className={styles.sidebar}
      style={{ width: isSidebarShow ? "15%" : "10%" }}
    >
      <button
        onClick={() => setIsSidebarShow(!isSidebarShow)}
        style={{
          transform: !isSidebarShow ? "translateX(100px)" : "translateX(190px)",
        }}
      >
        <i className={`bx bx-${isSidebarShow ? "x" : "menu-alt-left"}`}></i>
      </button>
      <ul className={isSidebarShow ? styles.show : ""}>
        {menu.map((title) => (
          <li key={title}>
            <a href={title}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
