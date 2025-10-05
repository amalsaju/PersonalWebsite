
import Image from "next/image";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className="flex w-full md:w-2/5 h-1/3 gap-5 bg-light-base-100 dark:bg-dark-base-100 justify-center p-10 md:rounded-t-2xl md:mt-5 md:mx-5" >
      <div className="flex items-center">
        <Image src="/amal_pixel_art.png" width={150} height={150} className="rounded-full" alt="Pixel Art of Amal" />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="text-2xl font-bold text-light-base-content dark:text-dark-base-content">Amal Saju Kalarickal</h1>
          <h3 className="text-lg font-semibold text-light-base-content dark:text-dark-base-content">Software Engineer</h3>
        </div>
        <div className="flex gap-2 mt-1">
          <a href="https://discord.com/users/326777959191150602"><FontAwesomeIcon icon={faDiscord} size="xl" /></a>
          <a href="https://github.com/amalsaju" target="_blank"><FontAwesomeIcon icon={faGithub} size="xl" /></a>
          <a href="https://www.linkedin.com/in/amal-saju-kalarickal" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
        </div>
      </div>
    </div>
  );
}

export default Header;