import { testimonials } from "../constants";
import CustomCard from "./ui/CustomCard";
import Carousel from "./ui/Carousel";
import { Typography } from "@material-tailwind/react";


const Testimonials = () => {
  const chunkArray = (array, size) =>
    Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  const testimonialGroups = chunkArray(testimonials, 3); // group by 3 for carousel

  const renderGroup = (group, groupIndex) =>
    group.map((testimonial, index) => (
      <CustomCard
      key={`${groupIndex}-${index}`}
      description={`"${testimonial.text}"`}
      className="border border-orange-500 rounded-md w-full"

      bodyClassName="p-6 text-center"
        footerContent={
          <div className="flex items-center justify-center mt-6 text-center">
            <img
              className="w-12 h-12 mr-4 rounded-full border border-neutral-300"
              src={testimonial.image}
              alt={testimonial.user}
            />
            <div className="text-left">
              <Typography variant="h6" className="font-semibold">
                {testimonial.user}
              </Typography>
              <Typography
                variant="small"
                className="text-sm font-normal italic text-neutral-600"
              >
                {testimonial.company}
              </Typography>
            </div>
          </div>
        }
      />
    ));

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-center mb-16 relative font-bold text-4xl"
        >
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Word From Our Communities
          </span>
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-orange-500 transform -translate-x-1/2 mt-2"></span>
        </Typography>

        <Carousel
          items={testimonialGroups}
          renderGroup={renderGroup}
          className="max-w-full"
        />
      </div>
    </section>
  );
};

export default Testimonials;
