
import { useState, useRef } from "react";
import play from "../../assets/icon/play.svg";
import pasue from "../../assets/icon/pause.svg";
import video from '../../assets/videos/about_video.mp4'
import AccordionItem from "./AccordionItem ";
import Underline from '../../assets/svg/Underline.svg';
const accordionItems = [
  {
    title: 'What can I do on TripTrekker?',
    content: 'Plan and book tours, resorts, and packages for your chosen destinations.',
  },
  {
    title: 'How does TripTrekker simplify travel planning?',
    content: 'By offering personalized tour plans and easy reservation options',
  },
  {
    title: 'What sets TripTrekker apart?',
    content: 'Yes, TripTrekker caters to diverse preferences, making it ideal for all travelers',
  },
  {
    title: 'How do I book a travel package on your website?',
    content : ' Booking is easy! Simply browse our packages, select your desired one, and follow the booking instructions on our website.'
  }
];
const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
const [hover, setHover] = useState(true)
    const togglePlay = () => {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  return (
    <div className=" container">
      <div className="relative mb-28">
    <h1 className="text-center text-5xl leading-[3rem] font-semibold text-black">Want to<span className="font-open-sans text-blue-200"> Know </span>About Us</h1>
    <div className='absolute left-[41%] mt-[1.196rem] lg:w-[21.875rem] h-[0.5rem]'>
        <img src={Underline} alt="" className="w-full h-full object-cover" />
    </div>
</div>
    <div className="flex items-start gap-5  justify-center flex-col md:flex-row">
      <div className="max-w-[500px] w-full ">
      <div onMouseOver={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="relative w-full">
      <video ref={videoRef} width="100%" height="100%" className="w-full rounded-3xl">
        <source src={video} type="video/mp4" />
      </video>
      <span className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
       {hover && <img onClick={togglePlay} src={isPlaying ?  pasue : play } />}
      </span>
    </div>
      </div>

    <div className="max-w-[500px] w-full
    ">
    
        {accordionItems.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
     
    </div>
    </div>
    </div>
  );
};

export default About;
