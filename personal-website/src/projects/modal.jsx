import { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, item }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  }

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal relative z-10">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="bg-primary-light dark:bg-primary-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4 m-20">
            <div className="sm:flex sm:items-start ">
              <div className="flex sm:w-full md:w-fit grow-0 justify-end order-1">
                <button className="rounded-md stroke-text-light dark:stroke-text-dark hover:stroke-primary-light dark:hover:stroke-primary-dark  hover:bg-highlight-light dark:hover:bg-highlight-dark" onClick={handleCloseModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div><img className="rounded-t-lg p-4" src={`/images/${item.imageName}`} alt="" /></div> <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">
                  {item.name}
                </h1>
              </div>
              <div className="mt-2">
                <p className="justify-center  text-text-light dark:text-text-dark text-md md:justify-start lg:max-w-xl lg:text-lg">
                  {item.description}
                </p>
              </div>
              <div className="mt-2">
                <p className="justify-center  text-text-light dark:text-text-dark text-md md:justify-start lg:max-w-xl lg:text-lg font-bold">
                  Technologies Used
                </p>
              </div>
              <div className="mt-2">
                <p className="justify-center  text-text-light dark:text-text-dark text-md md:justify-start lg:max-w-xl lg:text-lg">
                  {item.technologies}
                </p>
              </div>
              {
                item.link.length > 0 &&
                <div className="mt-2">
                  <p className="justify-center  text-text-light dark:text-text-dark text-md md:justify-start lg:max-w-xl lg:text-lg font-bold">
                    Links
                  </p>
                </div>
              }
              <div className="mt-2 justify-center text-text-light dark:text-text-dark text-md md:justify-start lg:max-w-xl lg:text-lg">
                <div className="mt-2 justify-center text-text-light dark:text-text-dark text-md md:justify-start lg:max-w-xl lg:text-lg">
                  <a href={item.link} target="_blank">
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog >
  )
}

export default Modal;