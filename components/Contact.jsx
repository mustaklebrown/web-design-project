import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
  return (
    <div id="contact" className="mt-10  bg-gray-800 py-10 px-6 xl:px-0  ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col justify-center items-center">
          <h1 className="text-rose-600 text-3xl font-mono uppercase font-bold">
            contact us
          </h1>
          <div className="w-16 h-2 bg-yellow-500 mt-2 rounded-full  text-center" />
        </div>
        <div className="md:flex-row flex-col flex items-center justify-center md:justify-around  md:gap-20 space-y-20 md:space-y-0">
          <div data-aos="fade-right" className="space-y-4 max-w-md">
            <h2 className="text-2xl uppercase font-medium text-">
              thanks you for
              <strong className="text-rose-900 underline"> trusting us</strong>
            </h2>
            <div className="space-y-6 max-w-sm text-gray-200 capitalize">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                facere vitae at perspiciatis natus dignissimos!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis veritatis atque quisquam odio maxime, quas
                dignissimos unde molestiae adipisci quae!
              </p>
            </div>
            <div className="flex  items-center gap-4">
              <div className="rounded-md p-2 bg-gray-800 shadow-md shadow-gray-500 hover:-translate-y-1 duration-300">
                <FaGithub size={20} className="" />
              </div>

              <div className="rounded-md p-2 bg-green-700 shadow-md shadow-gray-500 hover:-translate-y-1 duration-300">
                <IoLogoWhatsapp size={20} className="" />
              </div>
              <div className="rounded-md p-2 bg-blue-900 shadow-md shadow-gray-500 hover:-translate-y-1 duration-300">
                <FaFacebook size={20} className="" />
              </div>
              <div className="rounded-md p-2 bg-rose-800 shadow-md shadow-gray-500 hover:-translate-y-1 duration-300">
                <FaYoutube size={20} className="" />
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md  ">
            <form
              data-aos="fade-left"
              className=" w-full p-6 bg-gray-600 rounded-xl shadow-md shadow-rose-400 space-y-6 "
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100 capitalize"
                >
                  name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    autoComplete="text"
                    required
                    className=" text-black  w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100 capitalize"
                >
                  email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="email"
                    autoComplete="text"
                    required
                    className=" text-black  w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100 capitalize"
                >
                  your message
                </label>
                <div className="mt-1">
                  <textarea
                    type="text"
                    id="name"
                    rows={5}
                    autoComplete="text"
                    required
                    className=" text-black  w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <input type="button" value="submit" className="primarybtn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
