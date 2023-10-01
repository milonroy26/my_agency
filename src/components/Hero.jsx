const Hero = () => {
  return (
    <>
      <section>
        <div className="relative pt-12 lg:pt-20 pb-20 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                      <span>Build &amp; Launch without</span>
                      <span className="text-green-600">problems</span>
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                    <div>
                      <a
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        href="#"
                      >
                        Get Started
                      </a>
                      <a
                        className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                        href="#"
                      >
                        How it works
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap lg:mb-4 lg:ml-6">
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                    src="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=941&q=80"
                    alt=""
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
                    src="https://images.unsplash.com/photo-1559136560-16ad036d85d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-wrap lg:mb-4 lg:mr-6">
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    alt=""
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hidden lg:block absolute inset-0 w-full heroBgColor"
          src="lines.svg"
          alt=""
        />
      </section>
      {/* patner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mx-2">
            <div className="mb-2 w-full md:w-1/2 lg:w-1/4 px-2 z-20">
              <div className="bg-gray-50 md:bg-black rounded">
                <a href="#">
                  <img
                    className="mx-auto h-8"
                    src="atis-assets/logo/brands/slack.png"
                    alt=""
                  />
                  sadfasfdfasdf
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
