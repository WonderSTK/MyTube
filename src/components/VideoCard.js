import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import moment from "moment/moment";
import { numFormatter } from "../utils/constants";

const VideoCard = ({ info, filter, isSearchActive }) => {
  const { snippet, statistics, id } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col mb-8 gap-1 shadow-lg w-[350px] h-[280px] m-2 p-2 rounded-xl cursor-pointer hover:opacity-60 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-[180px] rounded-xl overflow-hidden">
        {isHovered && !isSearchActive ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="loader">Loading...</div> {/* Spinner loader overlay */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&disablekb=1&enablejsapi=0&playsinline=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
              style={{ pointerEvents: "none" }} // Disable all interactions
            />
          </div>
        ) : (
          <img
            src={thumbnails?.medium?.url}
            alt="thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col p-2 w-full space-y-1">
        <h2 className="font-semibold text-md truncate">{title}</h2>
        <p className="text-sm text-gray-500 truncate">{channelTitle}</p>
        <div className="flex gap-3 text-xs text-gray-500">
          {filter === null && (
            <>
              <p>{numFormatter(statistics?.viewCount)} views</p>
              <RxDotFilled />
            </>
          )}
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
