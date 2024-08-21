import React from "react";
import { useSelector } from "react-redux";
import {
  AiOutlineHome,
  AiOutlineLike,
  AiOutlineShopping,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineLiveTv,
  MdOutlineSportsSoccer,
} from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { BsPlayBtn } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { HiTrendingUp } from "react-icons/hi";
import {
  IoGameControllerOutline,
  IoMusicalNotesOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { BiMoviePlay, BiHelpCircle } from "react-icons/bi";
import { FaShopify, FaUser } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { FcStart, FcFeedback } from "react-icons/fc";
import { ImYoutube2 } from "react-icons/im";
import { SiYoutubemusic } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
import { CiYoutube } from "react-icons/ci";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  if (!isMenuOpen) return null;

  const btns = [
    { icon: <AiOutlineHome />, name: "Home", to: "/" },
    { icon: <BsPlayBtn />, name: "Shorts", },
    { icon: <MdOutlineSubscriptions />, name: "Subscriptions", },
    { icon: <MdOutlineVideoLibrary />, name: "Library", },
    { icon: <GrHistory />, name: "History", },
    { icon: <GoVideo />, name: "Your Videos", to: "/" },
    { icon: <MdOutlineWatchLater />, name: "Watch Later", },
    { icon: <AiOutlineLike />, name: "Liked Videos", },
  ];

  const subscriptions = [
    { icon: <FaUser />, name: "Mehul Kumar", to: "/" },
    { icon: <FaUser />, name: "Jake Gyllenhal", to: "/" },
    { icon: <FaUser />, name: "Virat Kohli", to: "/" },
    { icon: <FaUser />, name: "Tom Hardy", to: "/" },
  ];

  const explore = [
    { icon: <HiTrendingUp />, name: "Trending", to: "/" },
    { icon: <IoGameControllerOutline />, name: "Gaming", to: "/" },
    { icon: <BiMoviePlay />, name: "Movies", to: "/" },
    { icon: <IoMusicalNotesOutline />, name: "Music", to: "/" },
    { icon: <MdOutlineLiveTv />, name: "Live", to: "/" },
    { icon: <IoNewspaperOutline />, name: "News", to: "/" },
    { icon: <AiOutlineShopping />, name: "Shopping", to: "/" },
    { icon: <MdOutlineSportsSoccer />, name: "Sports", to: "/" },
    { icon: <PiStudentFill />, name: "Learning", to: "/" },
    { icon: <FaShopify />, name: "Fashion & Beauty", to: "/" },
  ];

  const moreFromYoutube = [
    { icon: <ImYoutube2 />, name: "YouTube Premium", to: "/" },
    { icon: <SiYoutubemusic />, name: "YouTube Studio", to: "/" },
    { icon: <CiYoutube />, name: "YouTube Music", to: "/" },
    { icon: <FcStart />, name: "YouTube Kids", to: "/" },
  ];

  const settings = [
    { icon: <AiOutlineSetting />, name: "Setting", to: "/" },
    { icon: <VscReport />, name: "Report History", to: "/" },
    { icon: <BiHelpCircle />, name: "Help", to: "/" },
    { icon: <FcFeedback />, name: "Send Feedback", to: "/" },
  ];

  const renderButtons = (btnList) =>
    btnList.map((btn, i) => (
      <li key={i} className="py-2 flex hover:bg-gray-200 rounded-lg pl-2">
        <span className="mr-5 mt-1 text-xl">{btn.icon}</span> {btn.name}
      </li>
    ));

  return (
    <div className="relative h-screen w-64 md:w-72 lg:w-80 overflow-y-auto">
      <div className="sticky top-0">
        <ul>{renderButtons(btns)}</ul>
        <hr className="mt-2" />
        <h3 className="font-bold mt-5">Subscriptions</h3>
        <ul>{renderButtons(subscriptions)}</ul>
        <hr className="mt-2" />
        <h3 className="font-bold mt-5">Explore</h3>
        <ul>{renderButtons(explore)}</ul>
        <hr className="mt-2" />
        <h3 className="font-bold mt-5">More from YouTube</h3>
        <ul>{renderButtons(moreFromYoutube)}</ul>
        <hr className="mt-2" />
        <ul>{renderButtons(settings)}</ul>
        <hr className="mt-2" />
        <div className="text-xs mt-5 text-gray-600">
          © 2024 Mehul Kumar. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default SideBar;
