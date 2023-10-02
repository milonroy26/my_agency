import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Other from "@/components/Other";
import StatList from "@/components/StatList";
import WorkList from "@/components/WorkList";
import React from "react";

// fetch getHeroItem
async function getHeroData() {
  const res = await fetch("https://agency.teamrabbil.com/api/HeroList");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Hero section Calling fail");
  }
  return data;
}

// fetch worklist data
async function getBrandList() {
  const res = await fetch("https://agency.teamrabbil.com/api/BrandList");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Work list section Calling fail");
  }
  return data;
}

// fetch WorkList
async function getWorkList() {
  const res = await fetch("https://agency.teamrabbil.com/api/WorkList");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Featured project Calling Fail");
  }
  return data;
}

//statList
async function getStatlist() {
  const res = await fetch("https://agency.teamrabbil.com/api/StatList");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("statList cart Calling Fail");
  }
  return data;
}

// fetch WorkList
async function getFeaturedProject() {
  const res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Featured project Calling Fail");
  }
  return data;
}

const page = async () => {
  const heroItem = await getHeroData();
  const brandlist = await getBrandList();
  const workList = await getWorkList();
  const statlistCart = await getStatlist();
  const featuredProject = await getFeaturedProject();
  return (
    <>
      <Hero heroItem={heroItem} brandlist={brandlist}></Hero>
      <WorkList workList={workList}></WorkList>
      <StatList statlistCart={statlistCart}></StatList>
      <FeaturedProject featuredProject={featuredProject}></FeaturedProject>
      <Other></Other>
    </>
  );
};

export default page;
