import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark justify-center w-full h-screen md:flex-row md:justify-start ">
      <div className="flex w-full justify-center ml-10 md:m-0 md:w-1/2">
        <div className="rounded-full h-50 w-50 bg-amber-500 ">
          {/* avatar here */}
        </div>
      </div>
      <div className="w-full flex flex-col pt-[7vh] items-center ml-10 mt-5 md:w-2/3 md:items-start">
        <div>
          <h1 className="font-bold text-text-light dark:text-text-dark text-2xl lg:max-w-3xl lg:text-5xl">
            Hi, I'm Amal
          </h1>
        </div>
        <div className="rounded-md border-2 border-highlight-light dark:border-secondary-dark p-2 my-2">
          <h3 className="font-bold text-text-light dark:text-text-dark text-md lg:max-w-xl lg:text-xl">
            Software Engineer
          </h3>
        </div>
        <div className="flex w-full font-bold justify-center  text-text-light dark:text-text-dark text-md md:justify-start lg:max-w-xl lg:text-xl">
          <div className="px-15 text-center md:pl-0 md:p-5 md:text-start">
            I'm passionate about programming and making stuff. I try to make
            applications and small games whenever I can. 
            <br /> <br />
          Currently working on a music visualiser in C++.
          </div>
        </div>
        <div className="flex w-full justify-center md:justify-start gap-2">
          <div
            className="flex gap-2 bg-highlight-light dark:bg-highlight-dark text-primary-light dark:text-primary-dark p-2 rounded-md
           border-2 "
          >
            <span>
              <FontAwesomeIcon icon={faLinkedin}  className="fa-shake"/>
            </span>
            <a
              href="https://www.linkedin.com/in/amal-saju-kalarickal/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div
            className="flex gap-2 bg-highlight-light dark:bg-highlight-dark text-primary-light dark:text-primary-dark p-2 rounded-md
           border-2"
          >
            <span>
              <FontAwesomeIcon icon={faGithub} className="fa-bounce"/>
            </span>
            <div className="">
              <a href="https://github.com/amalsaju/Amalsaju" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
