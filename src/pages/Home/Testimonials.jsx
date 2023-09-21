import Slider from 'react-slick';
import ArrowLeft from '../../assets/svg/arrowLeft.svg'
import ArrowRight from '../../assets/svg/arrowRight.svg';
import Underline from '../../assets/svg/Underline.svg';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
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
        speed: 500,
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
                <div className="relative ">
                    <h1 className="text-center text-5xl leading-[3rem] font-semibold text-black">What Our<span className="font-open-sans text-blue-200"> Clients </span>Says</h1>
                    <div className='absolute left-[41%] mt-[1.196rem] lg:w-[21.875rem] h-[0.5rem]'>
                        <img src={Underline} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="relative w-full h-[18.188rem]">
                    <div className="absolute top-0 right-[8%]">
                        <img src={img1} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <img src={img2} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                    <div className="absolute top-[50%] right-[30%]">
                        <img src={img3} alt="" className='w-20 h-20 bg-blue rounded-full' />
                    </div>
                    <div className="absolute top-[15%] left-[40%]">
                        <img src={img4} alt="" className='w-[12.5rem] h-[12.5rem] bg-blue rounded-full' />
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
                <div className="mt-11">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal ml-[3.833rem] mx-[3.833rem]  pr-44 slider-item w-full text-center">A great teacher inspires and ignites a passion for learning within their students,
                                encouraging them to explore and discover knowledge for themselves.</div>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-[3.833rem]  pr-44 slider-item  w-full text-center">Teachers can make such a profound impact on our lives and should be honored as heroes.</div>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-[3.833rem]  pr-44 slider-item  w-full text-center">Education is the most powerful weapon which you can use to change the world.</div>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-[3.833rem]  pr-44 slider-item  w-full text-center">Children learn more from who you are than what you teach.</div>
                            <div className="text-[1.5rem] leading-[1.5rem] font-normal mx-[3.833rem]  pr-44 slider-item  w-full text-center">You can't stop a teacher when they want to do something. They just do it.</div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;