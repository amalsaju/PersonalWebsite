'use client';
import { useState } from "react";
import About from "./_components/about/about";
import Projects from "./_components/projects/projects";
import Blog from "./_components/blog/blog";
import PixelArt from "./_components/pixel-art/pixel-art";
import Games from "./_components/games/games";
import Header from "./_components/header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import AlternateHeader from "./_components/alternate-header/alternate-header";

export const enum Link {
  ABOUT,
  PROJECTS,
  BLOG,
  PIXEL_ART,
  GAMES
}

interface ButtonProps {
  value: string;
  onClick: () => void;
  currentLink: Link;
  linkValue: Link;
}
const Button1 = (buttonProps: ButtonProps) => {
  const isHighlighted = buttonProps.currentLink == buttonProps.linkValue;
  const backgroundColor = isHighlighted ? "var(--color-light-accent)" : "";
  const textColor = isHighlighted ? "var(--color-light-accent-content)" : "";
  return (
    <button onClick={buttonProps.onClick} className="p-1 px-2 rounded-xl transition-colors ease-in-out duration-75 "
      style={{ backgroundColor: backgroundColor, color: textColor }}>
      {buttonProps.value}
    </button>
  );
}
const Button2 = (buttonProps: ButtonProps) => {
  const isHighlighted = buttonProps.currentLink == buttonProps.linkValue;
  const textColor = isHighlighted ? "var(--color-light-accent)" : "";
  const opacity = isHighlighted ? 1 : .6;
  // const fontWeight = isHighlighted ? "var(--font-weight-bold)" : "var(--font-weight-semibold)";
  return (
    <button onClick={buttonProps.onClick} className="p-1 px-2 rounded-xl" style={{ color: textColor, opacity: opacity, }}>
      {buttonProps.value}
    </button>
  );
}

const Home = () => {

  const [islightMode, setisLightMode] = useState(true);
  const [currentLink, setCurrentLink] = useState<Link>(Link.ABOUT);

  return (
    <div data-theme={islightMode ? 'light' : 'dark'} className="w-full h-screen bg-light-base-300 dark:bg-dark-base-300
    text-light-base-content dark:text-dark-base-content text-sm" >
      {/* Header */}
      <div className="flex flex-col w-full items-center h-full">
        <AlternateHeader currentLink={currentLink} />
        {/* {currentLink == Link.ABOUT && <Header />} */}
        {/* {currentLink != Link.ABOUT && <AlternateHeader />} */}
        {/* Nav */}

        <div className="flex w-full md:w-2/5 h-1/3 md:mx-5 gap-5 bg-light-base-100 dark:bg-dark-base-100 justify-center ">
          <div className="flex justify-center h-full">
            {currentLink == Link.ABOUT && <About />}
            {currentLink == Link.PROJECTS && <Projects />}
            {currentLink == Link.BLOG && <Blog />}
            {currentLink == Link.PIXEL_ART && <PixelArt />}
            {currentLink == Link.GAMES && <Games />}
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-1/3 md:w-2/5 bg-light-base-100 dark:bg-dark-base-100 md:justify-center py-5 md:rounded-b-2xl md:mb-5">
          <div className="flex h-fit shadow-xl dark:shadow-dark-base-content/10 rounded-2xl py-2 px-3 font-semibold justify-center md:gap-3 bg-light-base-200 dark:bg-dark-base-200 text-light-base-content dark:text-dark-base-content">
            <Button2 value="About" onClick={() => setCurrentLink(Link.ABOUT)} currentLink={currentLink} linkValue={Link.ABOUT} />
            <Button2 value="Projects" onClick={() => setCurrentLink(Link.PROJECTS)} currentLink={currentLink} linkValue={Link.PROJECTS} />
            <Button2 value="Blog" onClick={() => setCurrentLink(Link.BLOG)} currentLink={currentLink} linkValue={Link.BLOG} />
            <Button2 value="Pixel Art" onClick={() => setCurrentLink(Link.PIXEL_ART)} currentLink={currentLink} linkValue={Link.PIXEL_ART} />
            <Button2 value="Games" onClick={() => setCurrentLink(Link.GAMES)} currentLink={currentLink} linkValue={Link.GAMES} />
            <button className="border-l-2 border-l-light-accent pl-4 opacity-75" onClick={() => setisLightMode(!islightMode)}>{!islightMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />} </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;