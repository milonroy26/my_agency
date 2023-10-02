// fetch all project

import AllProject from "@/components/AllProject";
import Other from "@/components/Other";
import SubHero from "@/components/SubHero";

const getAllProject = async () => {
  const res = await fetch("https://agency.teamrabbil.com/api/AllProject");
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    return [];
  }
};
const page = async () => {
  const allProject = await getAllProject();

  return (
    <>
      <SubHero homepage="Home" currentPage="Projects"></SubHero>
      <AllProject allProject={allProject}></AllProject>
      <Other></Other>
    </>
  );
};

export default page;
