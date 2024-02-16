import React, { useState, useEffect } from "react";
import { DATA } from "../../../data";
import BottomNavigation from "../../UI/BottomNavigation/BottomNavigation";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Episodes from "../Episodes/Episodes";
import Information from "./Information";
import VideoPlayer from "./Videoplayer";
import styles from "./Main.module.scss";

const Main = ({
  isSidebarShow,
  setIsSidebarShow,
  activeTab,
  setActiveTab,
  currentMovieIndex,
  handleVideoChange,
  addToMyList,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [selectedSerieIndex, setSelectedSerieIndex] =
    useState(currentMovieIndex);

  useEffect(() => {
    setSelectedSerieIndex(currentMovieIndex); // Обновляем выбранный сериал при изменении индекса текущего трейлера
  }, [currentMovieIndex]);

  const handleToggleSound = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const handleSerieChange = (serieIndex) => {
    setSelectedSerieIndex(serieIndex);
  };

  return (
    <div className={styles.wrapper}>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div
        className={styles.main}
        style={{
          width: "80%",
          marginLeft: isSidebarShow ? "50px" : "0",
          position: "relative",
          overflow: "hidden",
          padding: "15px",
        }}
      >
        <VideoPlayer
          videoList={DATA[currentMovieIndex].videoList}
          onVideoChange={handleVideoChange}
          backgroundImage={DATA[currentMovieIndex].photos[0]}
          isMuted={isMuted}
          activeTab={activeTab}
        />
        {activeTab === 1 ? (
          <Information
            movie={DATA[currentMovieIndex]}
            onAddToMyList={addToMyList}
            onToggleSound={handleToggleSound}
            isMuted={isMuted}
            activeTab={activeTab}
            setActiveTab={setActiveTab} // Передача setActiveTab в компонент Information
          />
        ) : (
          activeTab === 2 && (
            <>
              <Information
                movie={DATA[currentMovieIndex]}
                activeTab={activeTab}
                setActiveTab={setActiveTab} // Передача setActiveTab в компонент Information
              />
              <Episodes
                selectedSerieIndex={selectedSerieIndex}
                onSerieChange={handleSerieChange}
              />
            </>
          )
        )}
      </div>
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Main;
