"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opcity: 0 },
  visible: {
    opactity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opcity: 0, y: 20 },
  visible: { opactity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-12 bg-white mb-16"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find your Dream Rental Property Today!
          </p>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
            Searching for your dream rental property has never been easier! Our
            advanced search features allow you to filter by location, price,
            amenities, and more to find the perfect home for you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center">
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Search for Properties",
              description:
                "Looking for your dream rental property? Use our advanced search features to find the perfect home for you.",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Book Your Rental",
              description:
                "Once you find the perfect home, book it with ease and secure your rental experience with us.",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "Enjoy your New Home",
              description:
                "Relax and enjoy your new home with us! We offer a wide range of amenities to make your stay comfortable and enjoyable.",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72">
    <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
      <Image
        src={imageSrc}
        alt={title}
        width={30}
        height={30}
        className="w-full h-full"
      />
    </div>
    <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
    <p className="mt-2 text-base text-gray-500">{description}</p>
  </div>
);
export default DiscoverSection;
