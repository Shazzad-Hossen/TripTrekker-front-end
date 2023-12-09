import Slider from 'react-slick';
import ArrowLeft from '../../assets/svg/arrowLeft.svg'
import ArrowRight from '../../assets/svg/arrowRight.svg';
import Underline from '../../assets/svg/Underline.svg';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpeg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/img7.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img onClick={onClick} src={ArrowRight} alt="" className={className} />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <img onClick={onClick} src={ArrowLeft} alt="" className={className} />
    );
}

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="mt-[10rem] lg:pb-[18.313rem]">
            <div className="container">
                <div className="relative pb-10 ">
                    <h1 className="text-center text-4xl sm:text-5xl leading-[3rem] font-semibold text-black">What Our<span className="font-open-sans text-blue-200"> Clients </span>Says</h1>
                    <div className='absolute left-[41%] mt-[1.196rem] w-[0rem] sm:w-[21.875rem] h-[0.5rem]'>
                        <img src={Underline} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="relative w-full h-[18.188rem] scale-75 sm:scale-100 px-5">
                    <div className="absolute top-0 right-[8%]">
                        <img src={img1} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <img src={img2} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                    <div className="absolute top-[50%] right-[30%]">
                        <img src={img3} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                    <div className="absolute top-[15%] left-[40%] z-10">
                        <img src={img4} alt="" className='w-[12.5rem] h-[12.5rem] bg-blue rounded-full ' />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <img src={img5} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                    <div className="absolute top-0 left-[10%]">
                        <img src={img6} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                    <div className="absolute top-[50%] left-[20%]">
                        <img src={img7} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                </div>
                <div className="mt-11 px-5 mx-5">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-3 sm:mx-[3.833rem]  pr-5 sm:pr-44 slider-item w-full text-center">Trip Trekker turned our vacation dreams into reality – impeccable service and unforgettable adventures! ✈️🌍 #TravelBliss</div>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-3 sm:mx-[3.833rem]  pr-5 sm:pr-44 slider-item  w-full text-center">Kudos to Trip Trekker for a seamless and stress-free travel experience – top-notch planning and personalized attention! 👏🌟 #HappyTraveler</div>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-3 sm:mx-[3.833rem]  pr-5 sm:pr-44 slider-item  w-full text-center">Exceptional service, incredible destinations – Trip Trekker knows how to create the perfect getaway! 🌎✨ #TravelExperts.</div>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-3 sm:mx-[3.833rem]  pr-5 sm:pr-44 slider-item  w-full text-center">Trip Trekker's attention to detail and professionalism made our trip extraordinary – can't wait to plan the next adventure with them! 🌟🗺️ #TripTrekkerMagic</div>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-3 sm:mx-[3.833rem]  pr-5 sm:pr-44 slider-item  w-full text-center">A big thank you to Trip Trekker for the amazing memories – from start to finish, they delivered an exceptional travel experience! 🚀🌐 #FiveStarTravel.</div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;