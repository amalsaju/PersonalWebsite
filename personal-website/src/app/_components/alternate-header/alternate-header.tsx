import Image from "next/image";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Link } from "@/app/page";

interface HeaderProps {
  currentLink: Link,
}

gsap.registerPlugin(useGSAP);
const AlternateHeader = (headerProps: HeaderProps) => {

  const container = useRef(null);
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl.current.to('.move', { y: -80 })
      .to('#profileImage', { scale: 0.6 }, '<')
      .to(".profileInfo", { scale: 0.7, x: -30 }, '<')
      .to(".profileIcons", { scale: 0.8 }, '<')
    if (headerProps.currentLink == Link.ABOUT) {
      tl.current.reverse();
    }
  }, { dependencies: [headerProps.currentLink], scope: container });

  return (
    <div className="flex w-full md:w-2/5 h-1/3 gap-5 bg-light-base-100 will-change-contents dark:bg-dark-base-100 justify-center p-10 md:rounded-t-2xl md:mt-5 md:mx-5" ref={container}>
      <div className="flex items-center">
        <Image src="/amal_pixel_art.png" id="profileImage" width={150} height={150} className="rounded-full move" alt="Pixel Art of Amal" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="profileInfo move">
          <h1 id="profileName" className="text-2xl font-bold text-light-base-content dark:text-dark-base-content font-resize-name">Amal Saju Kalarickal</h1>
          <h3 id="profileDesignation" className="text-lg font-resize-designation font-semibold text-light-base-content dark:text-dark-base-content">Software Engineer</h3>
        </div>
        <div className="flex gap-2 mt-1 move">
          <a href="https://discord.com/users/326777959191150602"><FontAwesomeIcon icon={faDiscord} className="profileIcons" size="xl" /></a>
          <a href="https://github.com/amalsaju" target="_blank"><FontAwesomeIcon className="profileIcons" icon={faGithub} size="xl" /></a>
          <a href="https://www.linkedin.com/in/amal-saju-kalarickal" target="_blank"><FontAwesomeIcon className="profileIcons" icon={faLinkedin} size="xl" /></a>
        </div>
      </div>
    </div>
  );
}


export default AlternateHeader;