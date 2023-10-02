"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubHero = ({ homepage, currentPage }) => {
  const pathName = usePathname();
  const newPathname = pathName.split("/")[1];

  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-100 to-gray-100 py-[150px]">
        <div className="container mx-auto">
          <h2 className="font-exo-pro text-[40px] font-bold">Our Services</h2>

          <div className="text-md  font-exo-pro  breadcrumbs mt-4">
            <ul>
              <li>
                <Link
                  href={"/"}
                  className={`${
                    newPathname === homepage.toLowerCase()
                      ? "text-primary"
                      : "text-black"
                  }`}
                >
                  {homepage}
                </Link>
              </li>
              <li>
                <Link
                  href={`${pathName}`}
                  className={`${
                    newPathname === currentPage.toLowerCase()
                      ? "text-primary"
                      : "text-black"
                  }`}
                >
                  {currentPage}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubHero;
