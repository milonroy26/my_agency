import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const teamListIcon = [
  {
    id: 1,
    facebook: <BsFacebook size="24" />,
    twitter: <BsTwitter size="24" />,
    instagram: <BsInstagram size="24" />,
  },
  {
    id: 2,
    facebook: <BsFacebook size="24" />,
    twitter: <BsTwitter size="24" />,
    instagram: <BsInstagram size="24" />,
  },
  {
    id: 3,
    facebook: <BsFacebook size="24" />,
    twitter: <BsTwitter size="24" />,
    instagram: <BsInstagram size="24" />,
  },
  {
    id: 4,
    facebook: <BsFacebook size="24" />,
    twitter: <BsTwitter size="24" />,
    instagram: <BsInstagram size="24" />,
  },
];

const Team = ({ teamList }) => {
  const findIcon = (id) => {
    const icon = teamListIcon.find((item) => item.id === id);
    if (icon) {
      return {
        id: icon.id,
        facebook: icon.facebook,
        twitter: icon.twitter,
        instagram: icon.instagram,
      };
    }
    return {
      id: null,
      facebook: null,
      twitter: null,
      instagram: null,
    };
  };

  return (
    <div className="container mx-auto my-[100px]">
      <div>
        <h3 className="font-exo-pro text-xl  md:text-[27px] tracking-wider font-semibold text-primary">
          Our Team Member
        </h3>
        <h2 className="font-exo-pro text-2xl tracking-wider md:text-[38px] font-bold capitalize  my-6">
          Check our awesome team members
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 bg-white md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 my-[100px]">
        {teamList.map((item) => {
          return (
            <div key={item.id} className="shadow-lg rounded-2xl">
              <div className="overflow-hidden relative  group ">
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-[400px] transition-all  duration-300  "
                />
                <span className="after:content-[''] after:absolute after:bg-black/50 after:bottom-0 after:right-0   after:w-full after:h-0 group-hover:after:h-full after:transition-all after:duration-300  "></span>
                <ul className="flex flex-row items-center gap-6 border-[1px] rounded-2xl p-4 absolute -bottom-16 transition-all duration-300  group-hover:bottom-1/3 group-hover:opacity-1 sm:right-[18%] md:right-[10%]  lg:right-[25%] right-[25%] text-white  ">
                  <li>
                    <Link href={item.facebook}>
                      {findIcon(item.id).facebook}
                    </Link>
                  </li>
                  <li className="border-x border-x-gray-400 px-4">
                    <Link href={item.twitter}>{findIcon(item.id).twitter}</Link>
                  </li>
                  <li>
                    <Link href={item.instagram}>
                      {findIcon(item.id).instagram}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-5">
                <h2 className="text-center font-exo-pro tracking-wider font-bold text-2xl my-4">
                  {item.name}
                </h2>
                <p className="text-center font-exo-pro tracking-wider">
                  {item.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
