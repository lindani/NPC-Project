import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { objectives } from '../constants';
import CustomCard from './ui/CustomCard';

const Objectives = () => {
  return (
    <section id="objectives" className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-center mb-16 relative font-bold text-4xl"
        >
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Our Objectives</span>
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-orange-500 transform -translate-x-1/2 mt-2"></span>
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <CustomCard
              key={index}
              title={objective.title}
              description={objective.description}
              image={objective.image}
              className="hover:shadow-lg transition-all duration-300 rounded-lg"
              bodyClassName="p-6"
              footerContent={
                <Button
                  color="orange"
                  fullWidth
                  className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  Learn More
                </Button>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
