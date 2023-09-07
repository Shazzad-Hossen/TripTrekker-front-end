import React, { useState } from "react";
import PlanCards from "./PlanCards";
import { useRef } from "react";

const thumbnails = [
  "https://i.ibb.co/b1vzmVr/thumb1.jpg",
  "https://i.ibb.co/w4ZjmF2/ko-tapu-2560x1440-thailand-islands-mountains-rocks-ocean-5k-16556.jpg",
  "https://i.ibb.co/NjrQDRC/mountains-2560x1440-fog-sky-field-4k-23318.jpg",
];

const PlaceDetails = () => {
  const [bannerImg, setBannerimg] = useState(thumbnails[0]);
  const scrollableDivRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollableDivRef.current.offsetLeft);
    setScrollLeft(scrollableDivRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollableDivRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the sensitivity of scrolling
    scrollableDivRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="container pt-20  px-3 ">
      <div className="  flex gap-5 h-full max-h-[600px] md:h-[600px] w-full flex-col md:flex-row">
        <div className="w-full h-full ">
          <img
            src={bannerImg}
            className="object-cover rounded-lg h-full w-full backdrop-contrast-125"
            alt=""
          />
        </div>
        <div className="  grid grid-cols-3 md:flex md:flex-col gap-3 h-full">
          <img
            onClick={() => setBannerimg(thumbnails[0])}
            className="w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 "
            src={thumbnails[0]}
            alt=""
          />
          <img
            onClick={() => setBannerimg(thumbnails[1])}
            className="w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 "
            src={thumbnails[1]}
            alt=""
          />
          <img
            onClick={() => setBannerimg(thumbnails[2])}
            className="w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 "
            src={thumbnails[2]}
            alt=""
          />
        </div>
      </div>
      {/* Details section */}
      <div className=" pt-4  rounded-lg p-5 my-4 shadow-lg text-[#333333] ">
        <h1 className="text-3xl font-semibold font-chakra">
          Saint Martin Island
        </h1>
        <h2 className="text-xl font-semibold ">Division: Division Name</h2>
        <h2 className="text-lg font-medium pb-5">District: District Name</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          blanditiis eos distinctio odit dolorem repudiandae provident
          accusamus? Debitis minus illo perspiciatis eos delectus ab possimus
          harum alias quisquam veritatis! Quia labore quisquam, incidunt commodi
          sunt velit odio exercitationem perspiciatis, officiis modi voluptate
          veniam alias beatae necessitatibus voluptatibus neque repellendus
          dolore est nihil facilis nam illo. Esse dicta voluptas mollitia natus
          nisi ea possimus voluptatem quasi, veniam illum. Quidem, voluptate
          architecto consectetur reprehenderit debitis nulla velit tenetur,
          excepturi, perferendis minima tempore voluptates. Libero vero
          temporibus deserunt. Quidem, quam maiores corporis laudantium suscipit
          distinctio animi quae quasi, ea beatae perspiciatis recusandae
          doloremque neque quaerat odio. Fuga corporis consectetur similique
          dignissimos ex ab omnis ducimus debitis nemo amet modi inventore quia
          incidunt maiores architecto unde, velit totam sint voluptates
          exercitationem ipsa. Explicabo hic possimus voluptatem deleniti
          eveniet est, cupiditate facere aut a, iste sint aperiam quis obcaecati
          natus voluptas commodi adipisci repellat accusantium mollitia eum
          exercitationem. Natus fugit culpa, praesentium sunt similique
          molestiae doloremque cumque consequuntur ad ratione nemo, quas magnam!
          Optio suscipit unde cum blanditiis dignissimos. In facilis praesentium
          hic natus maiores ad aliquam iste eum atque, animi accusantium. Quo
          neque, blanditiis, pariatur sit facilis placeat suscipit beatae autem
          ratione ipsam aut!
        </p>
      </div>
      <div className="mb-5 border rounded-md p-5">
        <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
          Popular Packages
        </h1>
        <div
          className=" mb-2 flex  items-center gap-4 overflow-x-scroll  scrollable-div"
          ref={scrollableDivRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <PlanCards key={i} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;

[0];
