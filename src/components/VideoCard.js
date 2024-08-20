import React from "react";
import { RxDotFilled } from "react-icons/rx";
import moment from "moment/moment";
import { numFormatter } from "../utils/constants";

const VideoCard = ({ info, filter }) => {
  const { snippet, statistics } = info; 
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="flex flex-col mb-8 gap-1 shadow-lg w-[350px] h-[280px] m-2 p-2 rounded-xl cursor-pointer hover:opacity-60">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-xl w-full h-[180px] object-cover"
      />
      <div className="flex flex-col p-2 w-full space-y-1">
        <h2 className="font-semibold text-md truncate overflow-hidden">
          {title}
        </h2>
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
