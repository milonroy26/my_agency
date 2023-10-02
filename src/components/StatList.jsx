import {BsEmojiSmile, BsFillPeopleFill} from "react-icons/bs";
import {BiLike} from "react-icons/bi";
import {IoScanCircleOutline} from "react-icons/io5";
const StatList = ({ statList }) => {
  const workListSubSection = [
    {
      id: 1,
      count: statList.followers,
      title: "Followers",
      icon: <BsFillPeopleFill size="50"/>
    },
    {
      id: 2,
      count: statList.solved,
      title: "Solved Problems",
      icon: <BiLike size="50"/>
    },
    {
      id: 3,
      count: statList.customers,
      title: "Happy Customers",
      icon: <BsEmojiSmile size="50"/>
    },
    {
      id: 4,
      count: statList.projects,
      title: "Projects",
      icon: <IoScanCircleOutline size="50"/>
    }
  ]
  return (
    <>
      <div className="container mx-auto py-16 px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10   md:gap-15">

          {
            workListSubSection.map((item) => {
              return (
                  <div key={item.id} className="shadow-lg  py-[50px] flex flex-col items-center justify-center rounded-2xl hover:-translate-y-2 transition-all duration-300 border-[2px] lg:max-w-[300px]  ">
                    <div className="w-[85px] h-[85px] bg-secondary flex items-center justify-center mb-8 rounded-2xl">
                      {item.icon}
                    </div>
                    <h2 className="text-[30px] font-semibold">{item.count}</h2>
                    <p>{item.title}</p>
                  </div>
              )
            })
          }

        </div>
      </div>
    </>
  );
};

export default StatList;
