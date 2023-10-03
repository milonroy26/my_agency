import Image from "next/image";

const Hero = ({ heroItem, brandlist }) => {
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
                      {heroItem.title}
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">
                      {heroItem.description}
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
                  <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                    src={heroItem.image1}
                    alt={heroItem.title}
                  />
                  <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
                    src={heroItem.image2}
                    alt={heroItem.title}
                  />
                </div>
                <div className="flex flex-wrap lg:mb-4 lg:mr-6">
                  <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                    src={heroItem.image3}
                    alt={heroItem.title}
                  />
                  <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
                    src={heroItem.image4}
                    alt={heroItem.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
            width={0}
            height={0}
            sizes="100vw"
          className="hidden lg:block absolute inset-0 w-full heroBgColor"
          src="lines.svg"
          alt=""
        />
      </section>
      {/* brand list section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mx-2">
            {brandlist.map((list) => (
              <div className="mb-2 w-full md:w-1/2 lg:w-1/4 px-2 z-20">
                <div className="bg-gray-50 py-4">
                  <a href="#">
                    <Image width={100}
                           height={100}
                            className="mx-auto h-8" src={list.image} alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
