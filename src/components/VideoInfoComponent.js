import moment from "moment";
import React, { useState } from "react";
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt, AiOutlineDownload, AiOutlineMore } from "react-icons/ai";
import { numFormatter } from "../utils/constants";

const VideoInfoComponent = ({ info }) => {
  const [showDescription, setShowDescription] = useState(false);
  const {
    snippet: { channelTitle, title, description, publishedAt, channelId, thumbnails },
    statistics: { viewCount, likeCount, subscriberCount },
  } = info;

  const formattedViewCount = numFormatter(viewCount);
  const formattedPublishedAt = moment(publishedAt).fromNow();
  const truncatedDescription = showDescription
    ? description
    : `${description.substring(0, 200)}...`;
  const toggleDescription = () => setShowDescription(!showDescription);
  const buttonText = showDescription ? "less" : "more";

  return (
    <div className="md:mt-2 m-2">
      <div className="flex items-center">
        <div className="bg-gray-200 mt-3 ml-3 rounded-full w-12 h-12 overflow-hidden">
          {/* Channel icon - use channel thumbnail as a placeholder */}
          <img
            src={thumbnails?.default?.url} // Replace with actual channel icon URL if available
            alt="Channel Icon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-3 flex-grow">
          <h2 className="font-semibold text-base">{channelTitle}</h2>
          <p className="text-gray-500 text-sm">
            {numFormatter(subscriberCount)} subscribers
          </p>
        </div>
        <div className="flex gap-4 ml-4 items-center">
          <button className="flex items-center gap-1">
            <AiOutlineLike /> {numFormatter(likeCount)}
          </button>
          <button className="flex items-center gap-1">
            <AiOutlineDislike />
          </button>
          <button className="flex items-center gap-1">
            <AiOutlineShareAlt />
          </button>
          <button className="flex items-center gap-1">
            <AiOutlineDownload />
          </button>
          <button className="flex items-center gap-1">
            <AiOutlineMore />
          </button>
        </div>
      </div>
      <h2 className="md:text-lg font-sans text-sm font-semibold mt-2">{title}</h2>
      <div className="bg-gray-200 rounded-lg p-2 mt-2">
        <div className="flex flex-col">
          <p className="font-semibold text-sm md:text-base">
            {formattedViewCount} views &nbsp; {formattedPublishedAt}
          </p>
          <p className="text-sm md:text-base">
            {truncatedDescription}
            {showDescription && <br />}
            <button className="font-semibold" onClick={toggleDescription}>
              Show {buttonText}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoInfoComponent;
