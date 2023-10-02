import AllService from "@/components/AllService";
import Other from "@/components/Other";
import SubHero from "@/components/SubHero";
import React from "react";

// fetch all services
const getServices = async () => {
  const res = await fetch("https://agency.teamrabbil.com/api/AllService");
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    return [];
  }
};

const page = async () => {
  const services = await getServices();

  return (
    <>
      <SubHero homepage="Home" currentPage="services"></SubHero>
      <AllService services={services}></AllService>
      <Other></Other>
    </>
  );
};

export default page;
