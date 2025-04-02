import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <div className="flex flex-col h-screen justify-center bg-primary-color">
      <div className="ml-20">
        <h1 className="font-bold leading-snug tracking-tight mb-3 text-text-color w-full text-3xl md:mb-10 md:ml-20 lg:max-w-3xl lg:text-5xl">
          Contact Me
        </h1>
      </div>
      <form className="flex flex-col ml-20 mr-5 gap-3" onSubmit={sendEmail}>
        <div className="md:flex ">
          <div className="md:w-1/5">
            <label
              className="block text-text-color font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-1/3">
            <input
              required
              className="bg-text-color appearance-none border-2 border-secondary-alt-color rounded-md w-full py-2 px-4 text-primary-color leading-tight focus:outline-none focus:bg-white focus:border-highlight-color"
              id="inline-full-name"
              type="text"
              name="user_name"
            />
          </div>
        </div>
        <div className="md:flex ">
          <div className="md:w-1/5">
            <label
              className="block text-text-color font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="md:w-1/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-secondary-alt-color rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-highlight-color"
              id="email"
              type="email"
              name="user_email"
            />
          </div>
        </div>
        <div className="md:flex ">
          <div className="md:w-1/5">
            <label
              className="block text-text-color font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <div className="md:w-1/3">
            <textarea
              required
              rows="7"
              className="bg-text-color appearance-none border-2 border-secondary-alt-color rounded-md w-full py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-white focus:border-highlight-color"
              id="message"
              name="message"
            ></textarea>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              value="Send"
              disabled={isSubmitting}
              className="shadow text-text-color border-2 border-highlight-color hover:border-primary-color hover:text-primary-color hover:bg-highlight-color focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded-md"
              type="submit"
            >
              Submit
            </button>
            {stateMessage && <p>{stateMessage}</p>}
          </div>
        </div>
      </form>
      {/* <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <br />
        <label>Email</label>
        <input type="email" name="user_email" />
        <br />
        <label>Message</label>
        <textarea name="message" />
        <br />
        <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form> */}
    </div>
  );
}
