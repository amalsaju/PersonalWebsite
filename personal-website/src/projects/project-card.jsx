export default function ProjectCard({ name, description, imageName }) {
  return (
    <div className="mb-5 bg-secondary-alt-light dark:bg-secondary-alt-dark border-2 border-highlight-light dark:border-secondary-dark rounded-lg shadow-sm h-80 w-48 overflow-hidden md:w-68 md:h-98">
      <a href="#" >
        <img className="rounded-t-lg p-4" src={`/images/${imageName}`} alt="" />
      </a>
      <div className="px-5 h-2/3 grid grid-cols-1 auto-rows-fr">
        <div className=" h-3/5 grid">
          <div className="">
            <a href="#" >
              <h5 className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark">
                {name}
              </h5>
            </a>
          </div>
          <div className="grid">
            <div className="font-normal text-text-light dark:text-text-dark ">
              <p className="line-clamp-2 md:line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-2 mt-4 grid md:mt-2">
          <button className="w-fit h-fit items-center shadow text-text-light dark:text-text-dark border-2 border-highlight-light dark:border-secondary-dark hover:border-highlight-light dark:hover:border-highlight-dark hover:text-primary-light dark:hover:text-primary-dark hover:bg-highlight-light dark:hover:bg-highlight-dark focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded-md stroke-text-light dark:stroke-text-dark hover:stroke-primary-light dark:hover:stroke-primary-dark">
            <div className="flex">
              <span>Read more</span>
              <svg
                className="rtl:rotate-180 w-3.5 ms-2 h-[1lh] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div >
  );
}
