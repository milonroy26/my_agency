import React from "react";

const AllService = ({ services }) => {
  return (
    <>
      <div className="container mx-auto my-[100px]">
        {/* All services */}
        <div>
          <h3 className="font-exo-pro text-xl  md:text-[27px] tracking-wider font-semibold text-primary">
            Our All Services
          </h3>
          <h2 className="font-exo-pro text-2xl tracking-wider md:text-[38px] font-bold capitalize  my-6">
            We Provide BestWeb design services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-[100px] ">
          {services.map((item) => {
            return (
              <div key={item.id} className="shadow-lg rounded-2xl p-8">
                <div>
                  <h2 className="font-exo-pro  md:text-3xl text-xl  font-bold mb-3 capitalize">
                    {item.title}
                  </h2>
                  <p className="font-exo-pro text-base">{item.des}</p>
                </div>
                <div className="grid gap-8 mt-10 overflow-hidden  ">
                  <div className="w-full px-4">
                    <div className="flex flex-wrap lg:mb-4 lg:ml-6">
                      <img
                        className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                        src={item.image1}
                        alt={item.title}
                      />
                      <img
                        className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
                        src={item.image2}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-wrap lg:mb-4 lg:mr-6">
                      <img
                        className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                        src={item.image3}
                        alt={item.title}
                      />
                      <img
                        className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
                        src={item.image4}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllService;
