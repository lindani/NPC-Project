import React from 'react';
import { Typography } from "@material-tailwind/react";
import CustomCard from "../components/ui/CustomCard"; // adjust the path if needed

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-center mb-16 relative font-bold text-4xl"
        >
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">About Us</span>
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-orange-500 transform -translate-x-1/2 mt-2"></span>
        </Typography>

        <div className="grid md:grid-cols-2 gap-8">
          <CustomCard
            title="Our Vision"
            description="The vision as the foundation is to be the enabler as a people centered non-profit company that advances community development through facilitation of social cohesion programs and skills development, mentoring and reduction of substance abuse through skills development and provision of building role models who provide hope and vision to the youth via having continuous of talks and direct one-to-one advises."
            className="border border-orange-500 rounded-md hover:shadow-xl transition-all duration-300"
            bodyClassName="p-8"
          />

          <CustomCard
            title="Our Mission"
            className="border border-orange-500 rounded-md hover:shadow-xl transition-all duration-300"
            bodyClassName="p-8"
          >
            <Typography variant="paragraph" className="text-gray-700 leading-relaxed mb-4">
              To provide better access to quality of services by proudly facilitating a future of fast, responsive support for local needs especially for women, youth, people living with disabilities and the youth in conflict with the law.
            </Typography>
            <Typography variant="paragraph" className="text-gray-700 leading-relaxed mb-4">
              To fulfill, influence and shape positive minds, restoring integrity and upholding, strengthened ethical leadership standards based on values of UBUNTU.
            </Typography>
            <Typography variant="paragraph" className="text-gray-700 leading-relaxed">
              To be a catalyst for genuine social change, community improvement and making sure of the development of the community at large.
            </Typography>
          </CustomCard>
        </div>
      </div>
    </section>
  );
};

export default About;
