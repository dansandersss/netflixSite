import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./Main.module.scss";

const Information = ({
  movie,
  onAddToMyList,
  onToggleSound,
  isMuted,
  activeTab,
  setActiveTab,
}) => {
  const addToFavorites = () => {
    let favorites = localStorage.getItem("favMovies");

    if (!favorites) {
      favorites = [];
    } else {
      favorites = JSON.parse(favorites);
    }

    const isAlreadyAdded = favorites.some(
      (favMovie) => favMovie.id === movie.id
    );

    if (isAlreadyAdded) {
      alert(`${movie.name} уже в избранном!`);
      return;
    }

    favorites.push(movie);
    localStorage.setItem("favMovies", JSON.stringify(favorites));
    alert(`${movie.name} теперь в избранном!`);
    onAddToMyList(movie);
  };

  const handlePlayButtonClick = () => {
    setActiveTab(2);
  };

  return (
    <div className={styles.info}>
      {activeTab === 1 && (
        <>
          <img
            src={movie.logo}
            alt={movie.name}
            width="200"
            style={{ opacity: 0.7, position: "relative", zIndex: "2" }}
          />

          <div className={styles.additional}>
            <span>{movie.year}</span>
            <span>{movie.limitAge}</span>
            <span>{movie.rating}</span>
            <span>{movie.duration}</span>
          </div>

          <div className={styles.description}>{movie.description}</div>

          <div className={styles.buttons}>
            <div>
              <Button cb={handlePlayButtonClick}>
                <i className="bx bx-play" style={{ color: "#c62e21" }}></i>
                <span>Play</span>
              </Button>
              <Button cb={() => addToFavorites(movie)}>
                <i className="bx bx-plus"></i>
                <span>My list</span>
              </Button>
            </div>
            <button className={styles.volume} onClick={onToggleSound}>
              {isMuted ? (
                <i className="bx bx-volume-mute"></i>
              ) : (
                <i className="bx bx-volume-full"></i>
              )}
            </button>
          </div>
        </>
      )}

      {activeTab === 2 && (
        <img
          src={movie.logo}
          alt={movie.name}
          width="200"
          style={{ opacity: 0.7, position: "relative", zIndex: "2" }}
        />
      )}
    </div>
  );
};

export default Information;
