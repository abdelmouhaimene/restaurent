"use client";
import React from "react";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


const VideoPlayer = ({videosrc}) => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();

  return (
    <div className='relative h-screen'>
   <video
        className="w-full h-full object-cover"
        ref={vidRef}
        src={videosrc}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="flex justify-center items-center absolute inset-0 bg-black bg-opacity-65">
        <div
          className="flex justify-center items-center w-100 h-100 rounded-full border border-gold cursor-pointer "
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;