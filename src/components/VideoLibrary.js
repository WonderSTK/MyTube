import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_API, YOUTUBE_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import VideoCard from "./VideoCard";


const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const filter = searchParams.get("filter");

  const getVideos = async () => {
    try {
      const response = await fetch(!filter ? YOUTUBE_API : `${SEARCH_RESULT_API}${filter}`);
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const json = await response.json();
      console.log("Fetched data:", json);

      const onlyVideos = json.items.filter(video => {
        if (!filter) {
          return video.kind === "youtube#video";
        } else {
          return video.id.kind === "youtube#video";
        }
      });
      
      console.log("Filtered videos:", onlyVideos);
      setVideos(onlyVideos);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getVideos();
  }, [searchParams, filter]);

  if (isLoading) {
    return <ShimmerUI />;
  }

  if (!videos) {
    return (
      <div className="flex justify-center">
        <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
          Oops! looks like we have exceeded YouTube API quota or there's an issue with the request.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-wrap justify-center md:justify-start">
        {videos.length > 0 ? (
          videos.map(video => {
            const videoId = !filter ? video.id : video.id.videoId;
            return (
              <Link key={videoId} to={`/watch?v=${videoId}`}>
                <VideoCard info={video} filter={filter} />
              </Link>
            );
          })
        ) : (
          <div className="mt-20 text-lg text-gray-500">
            No videos found. Please try a different filter or come back later.
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(VideoLibrary);
