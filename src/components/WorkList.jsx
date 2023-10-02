import { RiExchangeFundsLine } from "react-icons/ri";
import { PiHeartBreakThin } from "react-icons/pi";
import { LuShoppingBag } from "react-icons/lu";

const WorkList = ({ workList }) => {
  // work list icon
  const workListIcon = [
    {
      id: 1,
      icon: <RiExchangeFundsLine size={35} />,
    },
    {
      id: 2,
      icon: <PiHeartBreakThin size="35" />,
    },
    {
      id: 3,
      icon: <LuShoppingBag size="35" />,
    },
  ];
  const findIcon = (id) => {
    const iconList = workListIcon.find((item) => item.id === id);
    if (iconList) {
      return iconList;
    }
    return {
      id: null,
      icon: <LuShoppingBag size="35" />,
    };
  };
  return (
    <>
      <section className="md:py-36">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h4 className="font-medium uppercase text-primary text-[20px]">
              Work List
            </h4>
            <h2 className="font-bold  font-exo-pro md:text-4xl  tracking-wider text-[26px] mt-3">
              We provide the Perfect Solution <br /> to your business growth
            </h2>
          </div>
          <div className="flex flex-wrap mx-4">
            {workList.map((item) => (
              <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-6">
                <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                  {findIcon(item.id).icon}
                </span>
                <h4 className="mb-4 text-2xl font-bold font-heading">
                  {item.title}
                </h4>
                <p className="text-gray-500 leading-loose">{item.des}</p>
                <button
                  type="button"
                  class="text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-3"
                >
                  Learn More
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>{" "}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkList;
