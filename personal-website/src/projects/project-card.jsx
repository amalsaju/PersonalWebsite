export default function ProjectCard({ name, description, imageName }) {
  return (
    <div className="max-w-sm mb-5 bg-secondary-alt-light dark:bg-secondary-alt-dark border-2 border-highlight-light dark:border-secondary-dark rounded-lg shadow-sm ">
      <a href="#">
        <img className="rounded-t-lg p-4" src={`/images/${imageName}`} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-text-light dark:text-text-dark">
          {description}
        </p>
        <button className="shadow text-text-light dark:text-text-dark border-2 border-highlight-light dark:border-secondary-dark hover:border-primary-light dark:hover:border-primary-dark hover:text-primary-light dark:hover:text-primary-dark hover:bg-highlight-light dark:hover:bg-highlight-dark focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded-md">
          <div className="flex">
            <span>Read more</span>
            <svg
              className="rtl:rotate-180 w-3.5 ms-2 h-[1lh]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
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
  );
}
