import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark justify-center w-full h-screen md:flex-row md:justify-start -z-1 ">
      <div className="flex w-full justify-center ml-10 md:m-0 md:ml-10 md:w-1/2 z-10">
        <div className="rounded-full h-50 w-50 bg-amber-500 ">
          <img className="rounded-full " src={`/images/me.png`} alt="Pixel art image of me" />
        </div>
      </div>
      <div className="w-full flex flex-col pt-[2vh] md:pt-[7vh] items-center ml-10 mt-5 md:w-2/3 md:items-start z-10">
        <div>
          <h1 className="font-bold text-text-light dark:text-text-dark text-2xl lg:max-w-3xl lg:text-5xl">
            Hi, I'm Amal
          </h1>
        </div>
        <div className="rounded-md border-2 border-highlight-light dark:border-secondary-dark p-2 my-2">
          <h2 className="font-bold text-text-light dark:text-text-dark text-md lg:max-w-xl lg:text-xl">
            Software Engineer
          </h2>
        </div>
        <div className="flex w-full font-bold justify-center  text-text-light dark:text-text-dark text-md md:justify-start lg:max-w-xl lg:text-lg">
          <div className="px-15 text-center md:pl-0 md:p-5 md:text-start">
            I really enjoy programming.
            In my free time, you’ll probably find me tinkering with web apps in <span className="bg-highlight-light dark:bg-highlight-dark text-primary-light dark:text-primary-dark p-1 ">React</span> or making fun little games.
            <br />
            Just here to build cool stuff and learn along the way!
            <br /> <br />
            Latest project:{" "}
            <span className="">
              {" "}
              <a
                href="https://www.linkedin.com/posts/amal-saju-kalarickal_voice-controlled-desktop-agent-controls-activity-7376008881874878465-ioH8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVldpsBnHXzki3j3xDTOhXrBfULqfSAtZU"
                className="font-bold text-text-light underline dark:text-text-dark text-md lg:max-w-xl lg:text-lg"
              >
                {" "}
                Ada: Autonomous Desktop Agent
              </a>
            </span>
          </div>
        </div>
        <div className="flex w-full justify-center md:justify-start gap-2">
          <div
            className="flex gap-2 bg-highlight-light dark:bg-highlight-dark text-primary-light dark:text-primary-dark p-2 rounded-md
           border-2 "
          >

            <a
              href="https://www.linkedin.com/in/amal-saju-kalarickal/"
              target="_blank"
            >
              <span className="pr-1">
                <FontAwesomeIcon icon={faLinkedin} className="fa-shake" />
              </span>
              LinkedIn
            </a>
          </div>
          <div
            className="flex gap-2 bg-highlight-light dark:bg-highlight-dark text-primary-light dark:text-primary-dark p-2 rounded-md
           border-2"
          >

            <div className="">
              <a href="https://github.com/amalsaju/Amalsaju" target="_blank">
                <span className="pr-1">
                  <FontAwesomeIcon icon={faGithub} className="fa-bounce" />
                </span>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
