import React, { useState, useEffect, useRef } from "react";
import Swiper from "swiper";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import styles from "./Episodes.module.scss";
import { DATA } from "../../../data";

const Episodes = ({ selectedSerieIndex }) => {
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      spaceBetween: 20,
      slidesPerView: 5,
      scrollbar: {
        draggable: true,
      },
      mousewheel: true,
      nested: true,
    });

    return () => {
      swiper.destroy();
    };
  }, [selectedSeason]);

  const handleOpenModal = (index) => {
    setSelectedEpisodeIndex(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSeasonChange = (seasonIndex) => {
    setSelectedSeason(seasonIndex);
    setMenuOpen(false);
  };

  const currentSerie = DATA[selectedSerieIndex];
  const currentSeason = currentSerie?.season;

  return (
    <>
      <div className={styles.seasonNav}>
        <Dropdown>
          <div className={styles.menuBtnBlock}>
            <MenuButton
              className={styles.menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              open={menuOpen}
            >
              Season {selectedSeason + 1}
              <i className="bx bxs-chevron-down"></i>
            </MenuButton>
          </div>
          <Menu open={menuOpen}>
            {currentSerie?.season.map((season, index) => (
              <MenuItem key={index} onClick={() => handleSeasonChange(index)}>
                Season {index + 1}
              </MenuItem>
            ))}
          </Menu>
        </Dropdown>

        <a href="/">
          <h3>See all</h3>
          <i className="bx bx-chevron-right"></i>
        </a>
      </div>

      <div className={styles.parentSwiper}>
        <div className="swiper-container" ref={swiperRef}>
          <div className="swiper-wrapper">
            {currentSeason && currentSeason[selectedSeason]?.episodes ? (
              currentSeason[selectedSeason].episodes.map((episode, index) => (
                <div className="swiper-slide" key={index}>
                  <div
                    className={styles.episodeImageContainer}
                    onClick={(e) => handleOpenModal(index)}
                  >
                    <img
                      src={currentSeason[selectedSeason].episodeImg?.[0]}
                      alt={`Episode ${episode}`}
                      className={styles.episodeImage}
                    />
                    <div className={styles.episodeNumber}>{index + 1}</div>
                  </div>
                </div>
              ))
            ) : (
              <p>No episodes found for the selected season</p>
            )}
          </div>
        </div>
      </div>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{ style: { backgroundColor: "#0f1011", color: "#9b9a97" } }}
      >
        <DialogTitle PaperProps={{ style: { padding: "0" } }}>
          <h2 style={{ margin: "0" }}>
            S{selectedSeason + 1}E{selectedEpisodeIndex + 1}
          </h2>
        </DialogTitle>
        <DialogContent>
          {selectedEpisodeIndex !== null && (
            <div>
              <h2>
                {currentSeason[selectedSeason].episodes[selectedEpisodeIndex]}
              </h2>
              <p>Written by {currentSerie?.author}</p>
              <iframe
                width="560"
                height="315"
                src={currentSerie?.videoList?.[1]}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} className={styles.dialogBtn}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Episodes;
