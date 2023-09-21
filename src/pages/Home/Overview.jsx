import CountUp from 'react-countup';

const Overview = () => {
    return (
        <section className="my-[7rem] bg-blue-100">
            <div className="container py-[5.563rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" id="counter">
                    <div className="px-[3.875rem] py-[0.969rem] border-r-8 border-white text-center">
                        <h6 className="text-[3rem] leading-[3rem] font-semibold text-white pb-[1.563rem]">
                            <CountUp
                                start={0}
                                end={8}
                                duration={3}
                                scrollSpyOnce={true}
                                enableScrollSpy={true}
                            />
                            K +
                        </h6>
                        <p className="text-2xl leading-6 font-normal text-white">Successul Trips</p>
                    </div>
                    <div className="px-[3.875rem] py-[0.969rem] border-r-8 border-white text-center">
                        <h6 className="text-[3rem] leading-[3rem] font-semibold text-white pb-[1.563rem]">
                            <CountUp
                                start={0}
                                end={3}
                                duration={2}
                                scrollSpyOnce={true}
                                enableScrollSpy={true}
                            />
                            K +
                        </h6>
                        <p className="text-2xl leading-6 font-normal text-white">Daily Visitors</p>
                    </div>
                    <div className="px-[3.875rem] py-[0.969rem] border-r-8 border-white text-center">
                        <h6 className="text-[3rem] leading-[3rem] font-semibold text-white pb-[1.563rem]">
                            <CountUp
                                start={0}
                                end={500}
                                duration={4}
                                scrollSpyOnce={true}
                                enableScrollSpy={true}
                            />
                            +
                        </h6>
                        <p className="text-2xl leading-6 font-normal tracking-tight whitespace-pre-wrap text-white">Hotels</p>
                    </div>
                    <div className="px-[3.875rem] py-[0.969rem] text-center">
                        <h6 className="text-[3rem] leading-[3rem] font-semibold text-white pb-[1.563rem]">
                            <CountUp
                                start={0}
                                end={310}
                                duration={2}
                                scrollSpyOnce={true}
                                enableScrollSpy={true}
                            />
                            +
                        </h6>
                        <p className="text-2xl leading-6 font-normal text-white">Tour Packages</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview;