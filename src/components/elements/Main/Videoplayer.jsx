import React, { useEffect, useState } from "react";

const VideoPlayer = ({
  videoList,
  onVideoChange,
  backgroundImage,
  isMuted,
  activeTab,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    setIsVideoPlaying(activeTab === 1);
  }, [activeTab]);

  useEffect(() => {
    if (isVideoPlaying) {
      const intervalId = setInterval(() => {
        onVideoChange();
      }, 20000);

      return () => clearInterval(intervalId);
    }
  }, [isVideoPlaying, onVideoChange]);

  return (
    <>
      {activeTab === 1 && isVideoPlaying ? (
        <video
          src={videoList[0]}
          type="video/mp4"
          width="100%"
          height="650px"
          autoPlay
          muted={isMuted}
          loop
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 0,
            borderRadius: "5px",
            opacity: ".3",
          }}
        />
      ) : (
        <div
          className="background-image-container"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <img
            src={backgroundImage}
            alt="Background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              opacity: ".3",
            }}
          />
          <div
            className="gradient-overlay"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: 1,
              background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0))",
              borderRadius: "5px",
            }}
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
