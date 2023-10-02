import React from "react";

const FeaturedProject = ({ featuredProject }) => {
  return (
    <>
      <section className="featuredProject bg-[#F0FDF4] py-10 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="uppercase font-semibold text-[20px] text-primary">
              Featured Project
            </h2>
            <h1 className="text-black font-exo-pro  tracking-wider font-bold text-2xl md:text-4xl mt-4 leading-normal">
              We provide the Perfect Solution <br /> to your business growth
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-5">
              <div className="card">
                <div className="image">
                  <img
                    className="rounded-[20px] "
                    src="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=941&q=80"
                    alt=""
                  />
                </div>
                <div className="text">
                  <p>Lorem, ipsum dolor.</p>
                  <h2 className="font-bold text-[24px]">Lorem, ipsum.</h2>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                {featuredProject.map((item) => (
                  <div className="md:col-span-6 col-span-12">
                    <div className="card">
                      <div className="image">
                        <img
                          className="rounded-[20px]"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="text mt-4">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProject;
