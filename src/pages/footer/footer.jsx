import './footer.css';
import { Link } from 'react-router-dom';
import React from 'react';

// Footer component
const Footer = () => {
  const logos = require("../../media/logo (2).png");

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ccbf507e-162d-4164-ab3c-b36289e012ad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred");
    }
  };

  return (
    <footer className="bg" id='contact'>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 baa">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className='xs:ml-auto xs:mr-auto md:ml-10'>
            <img
              src={logos}
              className="mr-5 xs:w-full md:w-2/4 md:h-1/2 sm:h-9"
              alt="logo"
            />
            <p className="max-w-xs mt-4 text-xl text-white text-center">
              Élevez Votre Entreprise Avec Digital Move Up
            </p>
            <div className="flex mt-8 space-x-6 text-white">
              <Link
                className="hover:opacity-75"
                to="https://www.facebook.com/profile.php?id=61563253679919&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-9 h-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                className="hover:opacity-75"
                to="http://instagram.com/digitalmoveup_tn?utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-9 h-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to="callto:+21652090521">
              <i class='bx bxs-phone '></i>
              </Link>
              <i class='bx bxl-upwork'></i>
              <i class='bx bxl-linkedin' ></i>
              <Link to="https://www.tiktok.com/@digitalmoveup.tn">
                <i class='bx bxl-tiktok' ></i>
              </Link>
            </div>
          </div>

          <div className='ml-auto mr-auto'>
            <form onSubmit={onSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="
                    w-full
                    rounded
                    py-3
                    px-[14px]
                    text-body-color text-base
                    border border-[f0f0f0]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-primary
                  "
                  required
                />
              </div>
              <div className="mb-6">
                <input
                required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    rounded
                    py-3
                    px-[14px]
                    text-body-color text-base
                    border border-[f0f0f0]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-primary
                  "
                />
              </div>
              <div className="mb-6">
                <input
                required
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="
                    w-full
                    rounded
                    py-3
                    px-[14px]
                    text-body-color text-base
                    border border-[f0f0f0]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-primary
                  "
                />
              </div>
              <div className="mb-6">
                <textarea
                required
                  name="message"
                  placeholder="Your Message"
                  className="
                    w-full
                    rounded
                    py-3
                    px-[14px]
                    text-body-color text-base
                    border border-[f0f0f0]
                    outline-none
                    focus-visible:shadow-none
                    focus:border-primary
                  "
                />
              </div>
              <button>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        />
      </svg>
    </div>
  </div>
  <span>Envoyer un message</span>
</button>

              {result && <p className="mt-4 text-white"><i class='bx bxs-check-circle' id="check"></i>{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer component
export default Footer;
