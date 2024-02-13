import React, { useState } from "react";
import { DATA } from "../../../data";
import Main from "../Main/Main";
import MyList from "../MyList/MyList";

const MainContainer = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [myList, setMyList] = useState([]);

  const handleVideoChange = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % DATA.length);
  };

  const addToMyList = (movie) => {
    setMyList((prevList) => [...prevList, movie]);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <Main
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentMovieIndex={currentMovieIndex}
        handleVideoChange={handleVideoChange}
        addToMyList={addToMyList}
      />
      <MyList myList={myList} />
      {/* <button onClick={clearLocalStorage}>Clear Local Storage</button> */}
    </>
  );
};

export default MainContainer;
