import React from "react";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <>
      {/* component */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 space-y-10 text-gray-500 md:px-14">
          <div>
            <p id="we" className="text-center text-gray-600 text-lg font-semibold">
              Featured Service
            </p>
            <h2 className="mt-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
              You've got a business , we have got {" "}
              <br className="lg:block" hidden="" /> Brilliant mindes
            </h2>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-3">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-0bXcU4tp3xQ8UKk0KyViSp0XJc9R_chQw&s"
                  className="w-14"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Consultation
                  </h5>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsam corrupti voluptate atque. Porro earum sapiente
                    repellendus vitae nemo, consequuntur eos sed eaque et,
                    quibusdam, magni atque quia. Adipisci, obcaecati aliquid.
                  </p>
                </div>
                <Link
                  to="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://ocdigitalnetwork.com/wp-content/uploads/2018/04/h3-image-2.png"
                  className="w-14"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Search Engine Optimization
                  </h5>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur incidunt laborum, asperiores minus suscipit illo
                    quis officiis vel commodi natus nobis harum fugiat impedit
                    ipsam nam porro iure, maxime accusantium!
                  </p>
                </div>
                <Link
                  to="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmxVUo9CGbr0yx-NbD_o7BVM3HVQ6GxMUxw&s"
                  className="w-16"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Social Media Managment
                  </h5>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, praesentium optio? Eaque deleniti animi, corrupti
                    voluptas cupiditate totam eveniet earum. Doloremque atque
                    ducimus similique vel accusantium voluptate illo
                    exercitationem maxime?
                  </p>
                </div>
                <Link
                  to="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
