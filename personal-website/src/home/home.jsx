export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-screen md:flex-row md:justify-start ">
      <div className="flex w-full justify-center ml-10 mt-10 md:m-0 md:w-1/2">
        <div className="rounded-full h-50 w-50 bg-amber-500 ">
          {/* avatar here */}
        </div>
      </div>
      <div className="w-2/3 flex flex-col items-center md:items-start">
        <div>
          <h1 className="font-bold text-slate-800 text-2xl lg:max-w-3xl lg:text-5xl">
            Hi, I'm Amal
          </h1>
        </div>
        <div className="">
          <h3 className="font-bold text-slate-400 text-md lg:max-w-xl lg:text-xl">
            Software Engineer
          </h3>
        </div>
        <div>
          <p className="font-bold text-slate-600 text-md lg:max-w-xl lg:text-xl">
            I'm pretty passionate about programming and making stuff. I try to
            make applications and small games whenever I can. Additionally, I
            like working out as well.
          </p>
        </div>
        <div className="flex w-full justify-start gap-4">
          <div className="">
            <h5>
              <a
                href="https://www.linkedin.com/in/amal-saju-kalarickal/"
                target="_blank"
              >
                LinkedIn
              </a>
            </h5>
          </div>
          <div className="">
            <h5>
              <a href="https://github.com/amalsaju/Amalsaju" target="_blank">
                Github
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
