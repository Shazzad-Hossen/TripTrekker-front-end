import React from 'react';
import Player from './Player';
import Query from './Query';
import video from "../../assets/videos/about_video.mp4";

const About = () => {
    return (
        <div className="">
        <div className=" flex justify-evenly  flex-col md:flex-row gap-8 ">
          <div className="mb-8">
            <p className="text-secondary text-[28px] sm:text-[32px] font-semibold font-sans m-0 ">
              How Trip Trekker works
            </p>
            <p className="mt-4 max-w-[490px] font-sans text-base text-[#475569]">
            Discover seamless travel planning with TripTrekker! Choose your destination, explore tailored tour plans, and effortlessly book resorts and tour packages. Your ultimate vacation experience starts here.
            </p>
            <div className="sm:h-auto sm:w-[595px] mt-[32px] rounded-[30px] overflow-hidden ">
              <Player url={video} />
            </div>
          </div>
          <div className="">
            <Query
              title="What can I do on TripTrekker?"
              description="Plan and book tours, resorts, and packages for your chosen destinations."
            />
            <Query
              title="How does TripTrekker simplify travel planning?
              "
              description="TBy offering personalized tour plans and easy reservation options.

              "
            />
            <Query
              title="What sets TripTrekker apart?
              "
              description=" It provides comprehensive destination details and seamless booking in one platform."
            />
            <Query
              title=" Is TripTrekker suitable for all types of travelers?"
              description="Yes, TripTrekker caters to diverse preferences, making it ideal for all travelers.




              "
            />
          </div>
        </div>
      </div>
    );
};

export default About;