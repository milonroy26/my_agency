import Other from "@/components/Other";
import SubHero from "@/components/SubHero";
import TestimonialList from "@/components/TestimonialList";

// fetch testimonialList
const getTestimonialList = async () => {
  const res = await fetch("https://agency.teamrabbil.com/api/TestimonialList");
  const data = res.json();
  if (res.ok) {
    return data;
  } else {
    return [];
  }
};

const page = async () => {
  const testimonialList = await getTestimonialList();

  return (
    <div>
      <SubHero homepage="Home" currentPage="Testimonials"></SubHero>
      <TestimonialList testimonialList={testimonialList}></TestimonialList>
      <Other></Other>
    </div>
  );
};

export default page;
