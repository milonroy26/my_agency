import Other from "@/components/Other";
import SubHero from "@/components/SubHero";
import Team from "@/components/Team";
import React from "react";

const getTeamList = async () => {
  const res = await fetch("https://agency.teamrabbil.com/api/TeamList");
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    return [];
  }
};
const page = async () => {
  const teamList = await getTeamList();

  return (
    <>
      <SubHero homepage="Home" currentPage="Team"></SubHero>
      <Team teamList={teamList}></Team>
      <Other></Other>
    </>
  );
};

export default page;
